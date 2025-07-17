import mongoose from "mongoose";



const studentSchema= new mongoose.Schema({
    name: String,
    fatherName: String,
    email: { type: String, unique: true },
    phone: String,
    department: String ,
    rollno: String,
    registration: String

})

export const Student = mongoose.models.students || mongoose.model("students", studentSchema )