import { Link } from "react-router-dom";

export default function ActionBtn() {
    return (
        <nav>
            <Link 
                to='/home'
                className="flex w-60 justify-center border py-2 md:py-3 lg:py-4 rounded transition-all duration-300 hover:bg-red-500  relative z-10 hover:cursor-pointer hover:scale-105"
            >
                Explore
            </Link>
        </nav>
    )
}