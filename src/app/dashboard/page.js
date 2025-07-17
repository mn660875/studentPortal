import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="flex min-h-screen">
           <div className="hidden md:block">
           <Navbar />
           </div>

            <div className="flex-1 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold mb-4 text-[#4B0082]">
                    Welcome to Government College University Faisalabad (GCUF)
                </h1>
                <p className="max-w-2xl text-lg text-gray-700 mb-6">
                    Government College University Faisalabad (GCUF) is a leading public university in Pakistan,
                    committed to academic excellence, research, and producing skilled graduates. With a strong
                    tradition of quality education and state-of-the-art facilities, GCUF offers a vibrant environment
                    for students to grow and excel in their respective fields.
                </p>
                <p className="max-w-2xl text-lg text-gray-700 mb-6">
                    At GCUF, students are encouraged to engage in innovative research, participate in diverse
                    academic programs, and contribute positively to society.
                </p>

                <Link
                    href="profile"
                    className="mt-4 bg-[#4B0082] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3a0066] transition"
                >
                    View Students
                </Link>
            </div>
        </div>
    );
}
