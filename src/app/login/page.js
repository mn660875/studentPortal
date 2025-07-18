"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Page() {
  const router = useRouter();

  const [username, setUserName] = useState("");
  const [passoword, setPassword] = useState("");

  const Static_Username = "admin@testing.com";
  const Static_Password = "12345678";

  const handleAdmin = (e) => {
    e.preventDefault();
    if (!username.trim() || !passoword.trim()) {
      toast.error("Username or Password didnt Matched");
      return;
    }

    if (!username === Static_Username && !passoword === Static_Password) {
      toast.error("Username or Password didnt Matched");
    } else {
      toast.success("Loged in");
      router.push("/login/profile");
    }
  };

  return (
    <div className="flex min-h-screen">
      <Navbar />
      <div className="flex items-center text-center justify-center w-full gap-10">
        <form
          onSubmit={handleAdmin}
          className="flex flex-col gap-4 bg-white p-6 rounded shadow-md"
        >
          <h1 className="text-2xl font-semibold text-gray-700">Admin Login</h1>

          <input
            type="email"
            placeholder="E-mail"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="border p-2 rounded w-64"
          />
          <input
            type="password"
            placeholder="Password"
            value={passoword}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded w-64"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
