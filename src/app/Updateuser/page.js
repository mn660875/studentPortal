"use client"
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Page(){
 

   
    return(
        <div className="flex min-h-screen">
            <Navbar/>
            <div className="flex-1 flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold">Go to Profile for Update</h1>
            </div>
        </div>
    )
}