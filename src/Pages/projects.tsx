import BackBtn from "../components/back-btn"

import { FaFolderOpen } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
    const projects = [
        {
            link: 'https://github.com/Jacodesit/CivicWatch',
            name: 'CivicWatch', 
            description: 'This system is a digital platform designed to help residents report non-urgent issues in their barangay. '
        },
        {
            link: 'https://github.com/Jacodesit/LaraReact_TaskManager',
            name: 'Task Manager', 
            description: 'A web-based task management system that lets users create, organize, update, and track tasks with deadlines and status filters for better productivity.'
        },
        {
            link: 'https://github.com/Jacodesit/LaraReact_SimpleBookingSystem',
            name: 'BookEasy', 
            description: 'A web-based booking system that enables users to create and manage reservations '
        },
        {
            link: 'https://github.com/Jacodesit/AuthBookingSystem',
            name: 'Appointly',
            description: 'A booking system with user authentication that enforces one active booking per date and maintains organized, rule-based reservations.'
        },
        {
            link: 'https://github.com/Jacodesit/Inventra',
            name: 'Inventra',
            description: 'A system that tracks, organizes, and controls stock to ensure the right products are available at the right time.'
        },
        {
            link: 'https://github.com/Jacodesit/LaraReact_CreateNotes',
            name: 'Notes',
            description: 'A basic notes application where users can create, view, edit and delete notes'
        }
    ]
    return (
        <main className="h-screen w-screen bg-black relative text-white">
            {/* Vercel Grid */}
                <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />
            {/* Your Content/Components */}
            <div className="w-full h-screen lg:flex lg:space-x-3 p-5 lg:px-30">
                <div className="bg-[#FFFFFF0F] p-5 rounded-md w-full h-full overflow-y-auto lg:overflow-hidden">
                    <div className="flex items-center gap-2 mb-5">
                        <BackBtn />
                        <p className="font-semibold text-xl">Projects</p>
                    </div>
                    <main className="grid grid-rows-1 lg:grid-cols-2 gap-5 rounded ">
                        {projects.map(project => (
                            <a 
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shadow bg-[#FFFFFF0F] rounded p-5 flex flex-col gap-2 transform transition-transform duration-300 hover:-translate-y-1 z-9999" 
                                key={project.name}
                            >   
                                <div className="flex justify-between items-center">
                                    <FaFolderOpen size={30} />
                                    <FaExternalLinkAlt size={15} />
                                </div>
                                
                                <p className="font-medium">{project.name}</p>
                                <p className="text-xs text-gray-500">{project.description}</p>
                            </a>
                        ))}
                    </main>
                </div>
            </div>
        </main>
    )
}