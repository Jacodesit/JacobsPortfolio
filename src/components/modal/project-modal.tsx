import { FaTimes, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PageProps = {
    openModal: boolean;
    onClose: () => void;
    project: {
        name: string;
        description: string;
        screenshots: string[] ;
        link?: string;
        technologies?: string[];
    } | null;
};

export default function ProjectsModal({ openModal, onClose, project }: PageProps) {
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        setSelectedImage(0);
    }, [project]);

    if (!project) return null;

    const handleNextImage = () => {
        setSelectedImage((prev) => (prev === project.screenshots.length - 1 ? 0 : prev + 1));
    };

    const handlePrevImage = () => {
        setSelectedImage((prev) => (prev === 0 ? project.screenshots.length - 1 : prev - 1));
    };

    return (
        <AnimatePresence>
            {openModal && (
                <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="bg-[#121212] border border-white/10 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden relative shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5">
                            <div>
                                <h2 className="text-xl font-medium tracking-tight text-white">{project.name}</h2>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.technologies?.map((tech) => (
                                        <span key={tech} className="text-[10px] uppercase tracking-wider font-semibold text-gray-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                            >
                                <FaTimes size={18} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                
                                {/* Left Side: Gallery */}
                                <div className="lg:col-span-8 space-y-4">
                                    <div className="relative aspect-video bg-[#0A0A0A] rounded-xl overflow-hidden border border-white/10 group shadow-inner">
                                        {/* Inner Shadow Overlay for depth */}
                                        <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-xl z-20" />
                                        
                                        <AnimatePresence mode="wait">
                                            <motion.img
                                                key={selectedImage}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                src={project.screenshots[selectedImage]}
                                                className="w-full h-full object-contain" // Changed to contain
                                            />
                                        </AnimatePresence>

                                        {/* Refined Navigation Buttons */}
                                        {project.screenshots.length > 1 && (
                                            <div className="absolute inset-0 flex items-center justify-between px-4 z-30">
                                                <button 
                                                    onClick={handlePrevImage} 
                                                    className="p-2.5 bg-black/20 hover:bg-black/60 text-white rounded-full backdrop-blur-md border border-white/10 transition-all opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"
                                                >
                                                    <FaChevronLeft size={12} />
                                                </button>
                                                <button 
                                                    onClick={handleNextImage} 
                                                    className="p-2.5 bg-black/20 hover:bg-black/60 text-white rounded-full backdrop-blur-md border border-white/10 transition-all opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
                                                >
                                                    <FaChevronRight size={12} />
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    {/* Thumbnail Strip */}
                                    <div className="flex gap-3 overflow-x-auto pb-2 thumbnail-scrollbar">
                                        {project.screenshots.map((img, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setSelectedImage(i)}
                                                className={`relative shrink-0 w-20 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                                                    selectedImage === i ? "border-blue-500 scale-105" : "border-transparent opacity-50 hover:opacity-100"
                                                }`}
                                            >
                                                <img src={img} className="object-cover w-full h-full" alt="thumb" />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Side: Details */}
                                <div className="lg:col-span-4 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">About Project</h3>
                                        <p className="text-gray-300 leading-relaxed text-sm">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-white/5 space-y-3">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 w-full bg-white text-black font-medium py-3 rounded-xl hover:bg-gray-200 transition-colors"
                                            >
                                                <FaGithub />
                                                <span>Source Code</span>
                                            </a>
                                        )}
                                        <button
                                            onClick={onClose}
                                            className="w-full py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium"
                                        >
                                            Close Preview
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}