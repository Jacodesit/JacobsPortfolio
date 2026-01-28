import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

export default function BackBtn() {
    const navigate = useNavigate();
    
    return (
        <div onClick={() => navigate(-1)}>
            <FaArrowCircleLeft className="hover:cursor-pointer" />
        </div>
    )
}