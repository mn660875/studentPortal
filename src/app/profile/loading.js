import { FaSpinner } from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function Loading() {
  return (
    <div className="flex min-h-screen">
        <Navbar/>
      <div className="loader">
        
        <h1>
          <FaSpinner /> Loading Data...
        </h1>
      </div>
    </div>
  );
}
