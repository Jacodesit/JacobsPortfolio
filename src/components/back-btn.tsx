import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

export default function BackBtn() {
    const navigate = useNavigate();
    
    return (
        <div className="z-9999" >
            <FaArrowCircleLeft
                onClick={() => navigate('/home')}
                className="cursor-pointer" 
            />
        </div>
    )
}