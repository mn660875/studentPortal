import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";
import { TiUserAdd } from "react-icons/ti";

export default function Navbar() {
    return (
      <div className="w-48 min-h-screen bg-[#4B0082] text-white flex flex-col p-4 rounded-tr-xl rounded-br-xl ">
        <h1 className="text-xl font-bold mb-6">Student Portal</h1>
        <nav className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <MdDashboard/>
                <Link href={"/dashboard"} className="hover:bg-blue-300 rounded p-2">Dashboard</Link>
            </div>
          
          <div className="flex items-center gap-2">
            <RiUserSettingsFill/>
          <Link href={`/Updateuser/`} className="hover:bg-blue-500 rounded p-2">About</Link>
          </div>
          <div className="flex items-center gap-2">
            <FaUser/>
          <Link href={"/profile"} className="hover:bg-blue-500 rounded p-2">Profile</Link>
          </div>
          <div className="flex items-center gap-2">
            <TiUserAdd/>
          <Link href={"/addstudent"} className="hover:bg-blue-500 rounded p-2">Add Student</Link>
          </div>
         
        </nav>
      </div>
    );
  }