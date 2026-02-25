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
                    backgroundSize: "60px 60px",
                }}
            />
            
            {/* Your Content/Components */}
            <div className="w-full lg:flex lg:space-x-3 p-5 lg:px-30 z-9999">
                {/* left */}
                <motion.section 
                    className="border mb-5 lg:mb-0 h-auto lg:w-1/4 px-5 py-5.5 left-container rounded-md lg:fixed"
                    variants={leftContainerVariants}
                >
                    <div className="rounded-full flex flex-col gap-5">
                        <motion.div 
                            className="pt-5 flex flex-col justify-center items-center"
                            variants={profileVariants}
                        >
                            <motion.img 
                                src="/Profile/me.webp" 
                                alt="Me" 
                                className="rounded-full h-30 mb-5"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                            <motion.div 
                                className="flex items-center gap-1"
                                variants={itemVariants}
                            >
                                <p className="font-semibold text-xl mb-1">Paul Jacob Tocmo</p>
                                <img 
                                    src='/Flag/ph.png'
                                    alt="PH Flag" 
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ActionBtn />
                            </motion.div>
                        </motion.div>
                        
                        <motion.div 
                            className="border border-gray-800 w-full"
                            variants={itemVariants}
                        />

                        {/* Traits */}
                        <motion.div 
                            className="flex flex-col gap-4"
                            variants={itemVariants}
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <Sparkle />
                                    <p className="text-lg">Traits</p>
                                </div>
                            </div>
                            <Traits />
                        </motion.div>

                        {/* Socials */}
                        <motion.div 
                            className="flex flex-col gap-4"
                            variants={itemVariants}
                        >
                            <div className="flex items-center gap-1">
                                <FiShare2 />
                                <p className="text-lg">Socials</p>
                            </div>
                            <Socials />
                        </motion.div>
                    </div>
                </motion.section>

                {/* Right */}
                <motion.section 
                    className="border w-full lg:w-3/4 h-auto right-container overflow-hidden lg:ml-98"
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