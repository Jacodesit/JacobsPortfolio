import { FiBriefcase } from "react-icons/fi";

export default function About() {
    return (
        <div className="flex flex-col gap-4 bg-[#FFFFFF0F] p-5 rounded-xl mb-3">
            <div className="flex items-center gap-1">
                <FiBriefcase />
                <p className="text-lg">About</p>
            </div>
            <p className="font-extralight text-sm">I’m a fourth-year IT student specializing in web development.
            I build modern, minimalist web systems that solve real problems and support business needs.
            My current stack includes Laravel with Inertia.js, React, and TypeScript.
            I focus on clean structure, usability, and maintainable code.
            I’m preparing for my first professional role where I can build practical systems that create real value.</p>
        </div>
    )
}