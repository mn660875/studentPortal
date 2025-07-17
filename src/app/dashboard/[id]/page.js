import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FcDepartment } from "react-icons/fc";

const getStudentById = async (id) => {
    try {
        const res = await fetch(`/api/students/${id}`, {
            cache: "no-cache",
        });
        const data = await res.json();
        if (data.success) {
            return data.result;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default async function StudentProfile({ params }) {
    const { id } = params;
    const student = await getStudentById(id);

   

    if (!student) {
        return (
            <div className="flex">
                <Navbar />
                <div className="p-10 text-center w-full">
                    <h1 className="text-2xl font-bold text-red-600">
                        Student not found.
                    </h1>
                    <Link
                        href="/dashboard"
                        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Back to Dashboard
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen gap-10 items-center">
            <Navbar />

            <div className="grid grid-cols-1 auto-rows-[140px] gap-4 w-full max-w-3xl md:grid-cols-2 lg:grid-cols-4">
               
                <div className="shadow-lg col-span-2 bg-[#CCCCFF] row-span-2 rounded-lg p-5">
                    <p className="text-gray-700">Name:</p>
                    <h1 className="text-xl font-semibold">{student.name}</h1>
                    <h4 className="text-gray-500">S/O</h4>
                    <h1 className="text-xl font-semibold">{student.fatherName}</h1>
                    <div className="mt-2 flex">
                        <p className="text-gray-700">Phone#:</p>
                        <h1 className="font-semibold ml-2">{student.phone}</h1>
                    </div>
                    <div className="mt-4 flex gap-2">
                        <Link
                            href="/dashboard"
                            className="bg-gray-500 p-2 rounded-lg mt-5 text-white font-semibold"
                        >
                            Back
                        </Link>
                        <Link
                            href={`/Updateuser/${student._id}`}
                            className="bg-blue-600 p-2 rounded-lg mt-5 text-white font-semibold"
                        >
                            Update
                        </Link>
                    </div>
                </div>

               
                <div className="shadow-lg col-span-2 bg-[#B9D9EB] rounded-lg p-5">
                    <p className="text-gray-700 flex items-center gap-2">
                        <IoMdMail className="text-lg" /> Email:
                    </p>
                    <h4 className="text-lg font-semibold mt-2">{student.email}</h4>
                </div>

               
                <div className="col-span-1 bg-[#E6E6FA] shadow-lg rounded-lg p-5">
                    <p className="text-gray-700 flex items-center gap-2">
                        <FcDepartment className="text-lg" /> Department:
                    </p>
                    <h2 className="text-md font-semibold mt-2">{student.department}</h2>
                </div>

                
                <div className="col-span-1 bg-[#8AB9F1] shadow-lg rounded-lg p-3">
                    <p className="text-gray-700">Registration No:</p>
                    <h1 className="font-semibold mt-1">{student.registration}</h1>
                    <p className="text-gray-700 mt-2">Roll No:</p>
                    <h1 className="font-semibold mt-1">{student.rollno}</h1>
                </div>
            </div>
        </div>
    );
}
