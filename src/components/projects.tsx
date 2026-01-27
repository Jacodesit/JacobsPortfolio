import { FaCode } from "react-icons/fa6";
import { FiFolder } from "react-icons/fi";
import { MdChevronRight } from "react-icons/md";

export default function Projects() {
    const projects = [
        {name: 'CivicWatch', description: 'Cabulijan reporting system'},
        {name: 'LaraReact_TaskManager', description: 'Simple task management application'},
        {name: 'LaraReact_SimpleBookingSystem', description: 'Simple booking system'}
    ];

    return (
        <main className="flex flex-col gap-4 bg-[#FFFFFF0F] p-5 rounded-xl w-1/2 ">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                    <FiFolder />
                    <p className="text-lg">Projects</p>
                </div>
                <div className="flex gap-1 items-center">
                    <p className="text-xs font-extralight">View More</p>
                    <MdChevronRight />
                </div>
            </div>
            <ul>
                {projects.map(project => (
                    <li
                        className="text-sm bg-[#1a1a1a] mb-2 p-3 rounded flex gap-3 items-center hover:scale-105 transition-all duration-300 cursor-pointer "
                    >
                        <FaCode className="mt-1" />
                        <div>
                            <p className="font-medium flex truncate w-52">{project.name}</p>
                            <p className="text-xs text-gray-400">
                                {project.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}