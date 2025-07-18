import { FaSpinner } from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function Loading(){
    return (
        <div className="loader" >
            <Navbar/>
            <h1  ><FaSpinner/> Loading Data...</h1>
        </div>
    )
}