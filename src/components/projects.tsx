import { Link } from "react-router-dom";

import { FaCode } from "react-icons/fa6";
import { FiFolder } from "react-icons/fi";
import { MdChevronRight } from "react-icons/md";

export default function Projects() {
    const projects = [
        {name: 'CivicWatch', description: 'Cabulijan Reporting System'},
        {name: 'DILG RSS', description: 'DILG Report Submission System'},
        {name: 'Ventry', description: 'Anonymous Sharing Platform with AI Listener'},
    ];

    return (
        <div className="w-full lg:w-1/2 flex flex-col gap-5 bg-white/3 border border-white/5 p-6 rounded-2xl relative overflow-hidden group">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-gray-400">
                    <FiFolder size={18} />
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em]">Featured</h2>
                </div>
                <Link to="/projects" className="text-[10px] uppercase font-bold tracking-widest text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
                    View All <MdChevronRight size={14} />
                </Link>
            </div>
            <div className="space-y-3">
                {projects.map((p, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-black/20 border border-white/5 hover:border-white/20 transition-all cursor-pointer">
                        <FaCode className="text-gray-500" />
                        <div>
                            <p className="text-sm font-medium">{p.name}</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-tighter">{p.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}