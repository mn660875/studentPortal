"use client"
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function DeleteUsers(props){
    const router= useRouter();
    const deleteRecord=async()=>{
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;
        let response= await fetch("http://localhost:3000/api/students/"+ props.id,{
            method:"DELETE",
            })
            response= await response.json();
            if(response.success){
                router.push("/profile")
               setTimeout(() => {
                toast.success("Student deleted successfully");
               }, 1000);
               
                
            }
    }
    return(
        <button style={
            {
                backgroundColor:"#B31B1B",
                border:"none",
                outline:"none",
                padding: "6px 8px",
                color: "white",
                borderRadius:"6px",
                display:"flex",
                alignItems:"center",
                cursor:"pointer",
                gap:"4px"
            }}
            
            onClick={deleteRecord}><FaTrash/></button>
    )
}