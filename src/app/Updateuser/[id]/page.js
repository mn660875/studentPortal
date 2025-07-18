"use client";

import Navbar from "@/app/components/Navbar";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Page() {
  const { id } = useParams();
  const router = useRouter();
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [phone, setPhone] = useState("");

 

  const getUserDetails = async () => {
    try {
      let res = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/students/${id}`
      );
      let data = await res.json();
      console.log(data);

      if (data.success) {
        setName(data.result.name || "")
        setFatherName(data.result.fatherName || "");
        setEmail(data.result.email ||"")
        setDepartment(data.result.department || "")
        setPhone(data.result.phone || "")

      } else {
        toast.error("User not found");
        router.push("/dashboard");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error fetching user data");
    }
  };
  useEffect(() => {
    getUserDetails();
  
}, []);
  const handleStudent = async (e) => {

    e.preventDefault();
    const validatePakistaniNumber = (num) => {
      const regex = /^(?:\+92|0092|92)?3\d{9}$/;
      return regex.test(num);
  };
    if (!name.trim() || !fatherName.trim() || !email.trim() || !department.trim() || !phone.trim() ) {
      toast.error("Fields Should Not be Empty");
      return;
    }
   if(!validatePakistaniNumber(phone)){
    toast.error("Invalid Pakistani number format.")
    return
   }

    try {
      let res = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/students/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, fatherName, email, department, phone }),
        }
      );
      let data = await res.json();

      if (data.success) {
        toast.success("User has been updated");
        setTimeout(() => {
          router.push("/dashboard");
        }, 1500);
      } else {
        toast.error("Failed to update user");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error updating user");
    }
  };

  return (
    <div className="flex min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center w-full">
        <form
          onSubmit={handleStudent}
          className="flex flex-col gap-4 bg-white p-6 rounded shadow-md"
        >
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded w-64"
          />
          <input
            type="text"
            placeholder="Father's Name"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
            className="border p-2 rounded w-64"
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded w-64"
          /> <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="border p-2 rounded w-64"
        />
          

          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-2 rounded w-64"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
