"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function UpdateUser({ params }) {
    const router = useRouter();
    const { id } =  React.use(params);

    const [name, setName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [department, setDepartment] = useState("");

    useEffect(() => {
        getUserDetail();
    }, []);

    const getUserDetail = async () => {
        try {
            let data = await fetch(`http://localhost:3000/api/students/${id}`, { cache: "no-cache" });
            data = await data.json();

            if (data.success) {
                const result = data.result;
                setName(result.name || "");
                setFatherName(result.fatherName || "");
                setEmail(result.email || "");
                setPhone(result.phone || "");
                setDepartment(result.department || "");
            } else {
                toast.error("Student not found");
                router.push("/profile");
            }
        } catch (error) {
            console.error(error);
            toast.error("Error fetching student data");
            router.push("/dashboard/students");
        }
    };

    const updateStudent = async (e) => {
        e.preventDefault();

        if (!name || !fatherName || !email || !phone || !department) {
            toast.error("Fields should not be empty");
            return;
        }

        try {
            let response = await fetch(`http://localhost:3000/api/students/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, fatherName, email, phone, department }),
            });

            response = await response.json();

            if (response.success) {
                toast.success("Student has been updated");
                setTimeout(() => {
                    router.push("profile");
                }, 1500);
            } else {
                toast.error("Failed to update student");
            }
        } catch (error) {
            console.error(error);
            toast.error("Error updating student");
        }
    };

    return (
        <div className="flex min-h-screen ">
            <Navbar />
            <div className="shadow-lg rounded-lg bg-white w-full max-w-md p-6">
                <h1 className="text-center text-2xl font-bold mb-4">Update Student</h1>
                <form onSubmit={updateStudent} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Father's Name"
                        value={fatherName}
                        onChange={(e) => setFatherName(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
}
