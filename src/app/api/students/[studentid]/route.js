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
export async function GET(request, content){
    
    const studentId= content.params.studentid
   const record= {_id:studentId};
  
   await mongoose.connect(connectionStr)
    const data= await Student.findById(record)
    return NextResponse.json({result: data, success:true})
}
export async function DELETE(request, content){
    const studentId= content.params.studentid;
    const record= {_id: studentId};
    await mongoose.connect(connectionStr);
    const result= await Student.deleteOne(record);
    return NextResponse.json({result, success: true}) 
}