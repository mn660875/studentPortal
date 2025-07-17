"use client"
import { useState } from "react"
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";


export default function AddUser(){
    const [name, setName] = useState("");
    const dispatch= useDispatch()

    const userDispatch  =() =>{
        setName("")
       dispatch(addUser(name))

     

    }
    return (
        <div className="add_user">
        <label>Add User</label>
        <input type="text"
        onChange={(e)=>setName(e.target.value)}
        placeholder="enter text"/>
        <button onClick={userDispatch}>Add user</button>
        </div>
    )
}