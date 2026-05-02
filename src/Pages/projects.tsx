import BackBtn from "../components/back-btn";
import { useState } from "react";
import { FaFolderOpen, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import ProjectsModal from "../components/modal/project-modal";

interface Project {
    name: string;
    description: string;
    screenshots: string[];
    link: string;
    technologies: string[];
}

export default function Projects() {
    const [openProject, setOpenProject] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects = [
        {
            name: 'CivicWatch', 
            description: 'A community-driven digital hub for reporting local issues and fostering engagement within the Cabulijan community.',
            screenshots: Array.from({ length: 18 }, (_, i) => `/Civicwatch/civicwatch-${i + 1}.png`),
            link: 'https://github.com/Jacodesit/CivicWatch',
            technologies: ['Laravel', 'Inertia.js', 'Tailwind', 'Python']
        },
        {
            name: 'DILG RSS', 
            description: 'A streamlined Report Submission System designed to enhance communication between LGUs and the DILG.',
            screenshots: Array.from({ length: 9 }, (_, i) => `/DilgRss/rss-${i + 1}.png`),
            link: 'https://github.com/Jacodesit/report-submission-system',
            technologies: ['Laravel', 'Inertia.js', 'TypeScript', 'MySQL']
        },
        {
            name: 'Ventry', 
            description: 'An anonymous AI-powered venting platform for real-time emotional support and non-judgmental listening.',
            screenshots: Array.from({ length: 10 }, (_, i) => `/Ventry/ventry-${i + 1}.png`),
            link: 'https://github.com/Jacodesit/Ventry',
            technologies: ['Grok API', 'Laravel', 'React', 'Tailwind']
        },
    ];

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        setOpenProject(true);
    };

    return (
        <main className="min-h-screen bg-[#050505] relative text-white selection:bg-blue-500/30 overflow-x-hidden">
            {/* Background Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.15] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-4">
                            <BackBtn />
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Projects</h1>
                        </div>
                        <p className="text-gray-500 font-medium">A collection of my most impactful digital builds.</p>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            key={project.name}
                            onClick={() => handleProjectClick(project)}
                            className="group relative cursor-pointer"
                        >
                            <div className="h-full bg-[#FFFFFF05] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-[#FFFFFF0A] hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/5">
                                {/* Card Icon & Link */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:text-blue-400 transition-colors">
                                        <FaFolderOpen size={24} />
                                    </div>
                                    <div className="text-gray-600 group-hover:text-white transition-colors">
                                        <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Stack Preview */}
                                <div className="mt-8 flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <span key={tech} className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="text-[10px] font-bold text-gray-600">+{project.technologies.length - 3}</span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ProjectsModal 
                openModal={openProject} 
                onClose={() => setOpenProject(false)} 
                project={selectedProject}
            />
        </main>
    );
}