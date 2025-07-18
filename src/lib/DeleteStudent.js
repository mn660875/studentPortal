"use client"
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function DeleteUsers(props){
    const router= useRouter();
    const deleteRecord=async()=>{
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;
        let response= await fetch(`http://localhost:3000/api/students/${props.id}`,{
            method:"DELETE",
            })
            response= await response.json();
            if(response.success){
               
               setTimeout(() => {
                toast.success("Student deleted successfully");
               }, 1000);
               router.push("/profile")
                
            }
    }
    return(
        <button 
            className="text-lg text-[#de1a1a]  p-1  md:text-xl rounded-md"
            
            onClick={deleteRecord}><FaTrash/></button>
    )
}