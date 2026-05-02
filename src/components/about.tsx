import { FiBriefcase } from "react-icons/fi";

export default function About() {
    return (
        <div className="flex flex-col gap-5 bg-white/3 border border-white/5 p-6 rounded-2xl mb-4 shadow-sm">
            <div className="flex items-center gap-2 text-gray-400">
                <FiBriefcase size={18} />
                <h2 className="text-xs font-bold uppercase tracking-[0.2em]">About Me</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-[15px] font-light italic border-l-2 border-blue-500/30 pl-4">
                I’m a fourth-year IT student specializing in web development. I build modern, 
                minimalist web systems that solve real problems. My current stack includes 
                <span className="text-white font-medium"> Laravel, Inertia.js, and React</span>. 
                I focus on clean structure and building practical systems that create real value.
            </p>
        </div>
    )
}