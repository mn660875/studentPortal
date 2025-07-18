"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import DeleteUsers from "@/lib/DeleteStudent";
import { FaUserEdit } from "react-icons/fa";

const getStudent = async () => {
  let data = await fetch("/api/students", { cache: "no-cache" });
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
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 8;

  useEffect(() => {
    const fetchStudents = async () => {
      const users = await getStudent();
      setStudents(users);
    };
    fetchStudents();
  }, []);

  const filteredStudents = students.filter((student) =>
    [student.name, student.fatherName, student.email, student.rollno, student.registration]
      .some((field) => (field || "").toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <Navbar />

      <div className="p-4 flex-1 h-screen overflow-auto">
        <div className="w-full max-w-md mb-4">
          <input
            type="text"
            placeholder="Search student..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2 text-xs md:text-sm">Name</th>
                <th className="border p-2 text-xs md:text-sm">Father Name</th>
                <th className="border p-2 text-xs md:text-sm">Email</th>
                <th className="border p-2 text-xs md:text-sm">Phone #</th>
                <th className="border p-2 text-xs md:text-sm">Department</th>
                <th className="border p-2 text-xs md:text-sm">Roll#</th>
                <th className="border p-2 text-xs md:text-sm">Registration#</th>
                <th className="border p-2 text-xs md:text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentStudents.length > 0 ? (
                currentStudents.map((item) => (
                  <tr key={item._id} className="text-xs md:text-sm">
                    <td className="border p-2">{item.name}</td>
                    <td className="border p-2">{item.fatherName}</td>
                    <td className="border p-2">{item.email}</td>
                    <td className="border p-2">{item.phone}</td>
                    <td className="border p-2">{item.department}</td>
                    <td className="border p-2">{item.rollno}</td>
                    <td className="border p-2">{item.registration}</td>
                    <td className="border p-2 flex justify-center gap-2">
                      <Link href={`/dashboard/${item._id}`} className="text-blue-600">
                        <FaUserEdit className="text-lg text-[#468FEA]  p-1  md:text-[30px] rounded-md" />
                      </Link>
                      <DeleteUsers id={item._id} />
                    </td>
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

        {filteredStudents.length > studentsPerPage && (
          <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
