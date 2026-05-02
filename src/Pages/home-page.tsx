import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FiShare2 } from "react-icons/fi";
import Sparkle from "../components/sparkle-icon";

import Projects from "../components/projects";
import Socials from "../components/socials";
import About from "../components/about";
import TechStack from "../components/tech-stack";
import Experience from "../components/experince";
import Traits from "../components/traits";
import Gallery from "../components/gallery";
import ActionBtn from "../components/action-btn";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Animation variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        }
    }
};

const leftContainerVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.6
        }
    }
};

const rightContainerVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.6,
            staggerChildren: 0.15,
            delayChildren: 0.3
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12
        }
    }
};

const profileVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 15,
            delay: 0.1
        }
    }
};

const gridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 0.3,
        transition: { duration: 1.5, ease: "easeOut" }
    }
};

export default function Home() {
    const navigate = useNavigate();

    return (
        <motion.main 
            className="min-h-screen w-full bg-black relative text-white z-9999"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Vercel Grid */}
            <motion.div
                variants={gridVariants}
                className="fixed inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                }}
            />
            
            {/* Your Content/Components */}
            <div className="w-full lg:flex lg:space-x-3 p-5 lg:px-30 z-9999">
                {/* left */}
                <motion.section 
                    className="border border-white/5 bg-[#0A0A0A]/60 backdrop-blur-xl mb-5 lg:mb-0 h-auto lg:w-1/4 px-6 py-8 rounded-2xl lg:fixed shadow-2xl shadow-black"
                    variants={leftContainerVariants}
                >
                    <div className="flex flex-col gap-5">
                        {/* Profile Section */}
                        <motion.div 
                            className="flex flex-col justify-center items-center text-center"
                            variants={profileVariants}
                        >
                            <div className="relative mb-6 w-full">
                                <div className="absolute -left-">
                                    <FaArrowCircleLeft size={20}
                                        onClick={() => navigate('/')}
                                        className="cursor-pointer" 
                                    />
                                </div>
                                
                                <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full" />
                                <div className="flex justify-center items-center">
                                    <motion.img 
                                        src="/Profile/me.webp" 
                                        alt="Me" 
                                        className="relative rounded-full h-32 w-32 object-cover border-2 border-white/10 flex justify-center items-center"
                                        whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.2)" }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    />
                                </div>
                            </div>
                            
                            <motion.div className="flex items-center gap-2 mb-4" variants={itemVariants}>
                                <p className="font-bold text-2xl tracking-tighter">Paul Jacob Tocmo</p>
                                <img src='/Flag/ph.png' alt="PH Flag" className="h-4 w-auto grayscale hover:grayscale-0 transition-all" />
                            </motion.div>

                            <motion.div variants={itemVariants} className="w-full">
                                <ActionBtn />
                            </motion.div>
                        </motion.div>
                        
                        <div className="h-px bg-lines-to-r from-transparent via-white/10 to-transparent w-full" />

                        {/* Traits */}
                        <motion.div className="flex flex-col gap-4" variants={itemVariants}>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Sparkle />
                                <p className="text-xs font-bold uppercase tracking-[0.2em]">Personal Traits</p>
                            </div>
                            <Traits />
                        </motion.div>

                        {/* Socials */}
                        <motion.div className="flex flex-col gap-4" variants={itemVariants}>
                            <div className="flex items-center gap-2 text-gray-400">
                                <FiShare2 size={16} />
                                <p className="text-xs font-bold uppercase tracking-[0.2em]">Connect</p>
                            </div>
                            <Socials />
                        </motion.div>
                    </div>
                </motion.section>

                {/* Right */}
                <motion.section 
                    className="border w-full lg:w-3/4 h-auto right-container overflow-hidden lg:ml-98 border-white/5 bg-[#0A0A0A]/60 backdrop-blur-xl"
                    variants={rightContainerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <About />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                        <TechStack />
                    </motion.div>
                    
                    <motion.div 
                        className="flex flex-wrap gap-3 lg:flex-nowrap"
                        variants={itemVariants}
                    >
                        <Experience />
                        <Projects />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                        <Gallery />
                    </motion.div>
                </motion.section>
            </div>
        </motion.main>
    )
}