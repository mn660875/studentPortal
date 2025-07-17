"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import DeleteUsers from "@/lib/DeleteStudent";
import { useRouter } from "next/navigation";

const getStudent = async () => {
  let data = await fetch("/api/students", {
    cache: "no-cache",
  });
  data = await data.json();

  if (data.success) {
    return data.result;
  } else {
    return [];
  }
};

export default function StudentList() {
  
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
   
    const fetchStudents = async () => {
      const users = await getStudent();
      setStudents(users);
    };
    fetchStudents();
  }, []);

  const filteredStudents = students.filter(
    (student) =>
      (student.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (student.fatherName || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (student.email || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (student.rollno || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (student.registration || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex">
      <Navbar />

      <div className="p-4 flex-1">
        <input
          type="text"
          placeholder="Search student..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded mb-4 w-full max-w-md"
        />

        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Father Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone #</th>
              <th className="border p-2">Department</th>
              <th className="border p-2">Roll#</th>
              <th className="border p-2">Registration#</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((item) => (
                <tr key={item._id}>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.fatherName}</td>
                  <td className="border p-2">{item.email}</td>
                  <td className="border p-2">{item.phone}</td>
                  <td className="border p-2">{item.department}</td>
                  <td className="border p-2">{item.rollno}</td>
                  <td className="border p-2">{item.registration}</td>
                  <td className="border p-2">
                    <Link
                      href={`/dashboard/${item._id}`}
                      className="text-blue-600 hover:underline"
                    >
                      View
                    </Link>
                   
                  </td>
                  <td> <DeleteUsers id={item._id} /></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center p-4">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
