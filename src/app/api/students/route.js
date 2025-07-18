import { connectionStr } from "@/lib/db";
import { Student } from "@/lib/model/student";
import mongoose from "mongoose";
import { NextResponse } from "next/server";



export async function GET(){
    let data =[];
    let success= true;

    try {
      await mongoose.connect(connectionStr);
      data= await Student.find();
    }
    catch{
      data= {result:"error"}
      success=false
    }
    return NextResponse.json({result:data , success})
  }

  export async function POST(request){
    const payload= await request.json()
    await mongoose.connect(connectionStr)
    let product= new Student(payload)
    const result = await product.save()
    return NextResponse.json({result, success: true})
}