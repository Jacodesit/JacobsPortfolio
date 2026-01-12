import { FaCode } from "react-icons/fa6";

export default function Projects() {
    const projects = [
        {name: 'CivicWacth', description: 'Cabulijan reporting system'},
        {name: 'LaraReact_TaskManager', description: 'Simple task management application'},
        {name: 'LaraReact_SimpleBookingSystem', description: 'Simple booking system'}
    ];

    return (
        <aside className="mb-5">
            <ul>
                {projects.map(project => (
                    <li
                        className="text-sm bg-[#1a1a1a] mb-2 py-2 px-3 rounded flex gap-3 items-center hover:scale-105 transition-all duration-300 cursor-pointer "
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
        </aside>
    )
}