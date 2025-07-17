"use client"
import { useState } from "react";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";

export default function Page(){
    const [name, setName]= useState("")
    const [fatherName, setFathername]= useState("")
    const [email, setEmail]= useState("")
    const [phone, setPhone]= useState("")
    const [department, setDeparment]= useState("")
    const [rollno, setRollno]= useState("")
    const [registration, setRegis]= useState("")

    const addStudent=async(e)=>{
        e.preventDefault();
        if(!name || !fatherName || !email || !phone || !department || !rollno || !registration){
            toast.error("Fields Should Not be empty") 
        return
        }
            
        let data=   await fetch("/api/students",{
            method:"POST",
            body:JSON.stringify({name, fatherName, email,phone, department, rollno, registration})
        });
        data= await data.json();

        if(data.success){
            toast.success("Student Added Successfully")
            setName("");
            setFathername("");
            setEmail("");
            setPhone("");
            setDeparment("");
            setRollno("");
            setRegis("");
        }else{
            toast.error("Something error")
        }

    }


    return (
        <div className="flex min-h-screen gap-10 items-center ">
        <Navbar/>
       <div className=" shadow-lg rounded-lg w-150 h-120   p-10">
        <h1 className="text-center text-2xl font-bold">Add New Student</h1>
        <form className="" onSubmit={addStudent} >
            <div className="input_section">
                
                <input type="text"
                placeholder="Fullname"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className="input_section">
                
                <input type="text"
                placeholder="Father's Name"
                value={fatherName}
                onChange={(e)=>setFathername(e.target.value)}
                />
            </div>
            <div className="input_section">
                
                <input type="text"
                placeholder="E-mail"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
         
           <div className="input_section">
                
                <input type="text"
                placeholder="Mobile"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                />
            </div>
            <div className="input_section">
                
                <select value={department}
                onChange={(e)=>setDeparment(e.target.value)}
                >
                    <option className="text-gray-200" value="">Select Department</option>
                    <option value="computer science">Computer Science</option>
                    <option value="information security">Information Security</option>
                    <option value="software engineer">Software Engineer</option>
                    <option value="hnd">HND</option>
                    <option value="food science">Food Science</option>
                    
                </select>
                </div>
                <div className="input_section">
                
                <input type="num"
                placeholder="Roll No"
                value={rollno}
                onChange={(e)=>setRollno(e.target.value)}
                />
            </div>
            <div className="input_section">
                
                <input type="text"
                placeholder="Registration"
                value={registration}
                onChange={(e)=>setRegis(e.target.value)}
                />
            </div>

            <button type="submit"  className="bg-blue-300 mt-3 rounded-lg p-2 font-bold cursor-pointer">Submit</button>

        </form>
       </div>

    </div>
    )
}