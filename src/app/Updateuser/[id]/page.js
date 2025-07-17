"use client";

import Navbar from "@/app/components/Navbar";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Page() {
    const { id } = useParams();
    const router = useRouter();
    const [name, setName] = useState("");

    useEffect(() => {
        if (id) {
            getUserDetails();
        }
    }, [id]);

    const getUserDetails = async () => {
        try {
            let res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/students/${id}`);
            let data = await res.json();
            console.log(data);

            if (data.success) {
                setName(data.result.name || "");
            } else {
                toast.error("User not found");
                router.push("/dashboard");
            }
        } catch (error) {
            console.error(error);
            toast.error("Error fetching user data");
        }
    };

    const handleStudent = async (e) => {
        e.preventDefault();
        if (!name.trim()) {
            toast.error("Enter a name before submitting");
            return;
        }

        try {
            let res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/students/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name }),
            });
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
                <form onSubmit={handleStudent} className="flex flex-col gap-4 bg-white p-6 rounded shadow-md">
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
