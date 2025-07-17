import { connectionStr } from "@/lib/db";
import { Student } from "@/lib/model/student";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content){
    
    const studentId= content.params.studentid
   const filter= {_id:studentId};
   const payload= await request.json();
   await mongoose.connect(connectionStr)
    const result= await Student.findOneAndUpdate(filter, payload)
    return NextResponse.json({result, success:true})
}


export async function GET(request, context) {
    const { params } = await context;
    const studentId = params.studentid;

    await mongoose.connect(connectionStr);

    try {
        const student = await Student.findById(studentId);
        if (!student) {
            return NextResponse.json({ success: false, message: "Student not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, result: student });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: "Error fetching student" }, { status: 500 });
    }
}

export async function DELETE(request, context) {
    const { params } = await context;
    const studentId = params.studentid;

    await mongoose.connect(connectionStr);

    try {
        const result = await Student.deleteOne({ _id: studentId });
        if (result.deletedCount === 0) {
            return NextResponse.json({ success: false, message: "Student not found" });
        }
        return NextResponse.json({ success: true, message: "Student deleted successfully" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: "Error deleting student" });
    }
}