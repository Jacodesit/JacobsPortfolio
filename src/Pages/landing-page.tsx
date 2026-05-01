import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
// import Header from "../components/header"
import ActionBtn from "../components/actions-btn"

type PageProps = {
    name: string
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
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

const nameVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 10,
            delay: 0.3
        }
    }
};

export default function Landing({ name }: PageProps) {
    return (
        <main className="h-screen w-screen bg-black relative text-white overflow-hidden">
            {/* Vercel Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />
            
            {/* Your Content/Components */}
            <div className="lg:px-72 flex p- relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* <Header /> */}
                </motion.div>
                
                <main className="flex gap-10 items-center h-screen px-10">
                    {/* Image Container: Added overflow-hidden and soft shadow */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-2/5 rounded-2xl h-96 relative group overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                    >
                        <img 
                            src="/Gallery/graduation_pic.jpg" 
                            alt="Me" 
                            /* Fixed typo: object-cover. Added hover zoom. */
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Modern Overlay: Subtle gradient border */}
                        <div className="absolute inset-0 rounded-2xl border border-black/5 pointer-events-none" />
                        
                        {/* Floating Accent Detail */}
                        {/* <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-sm">
                            <p className="text-[10px] uppercase tracking-widest font-bold text-red-500">Graduation Portait</p>
                        </div> */}
                    </motion.div>

                    {/* Text Content */}
                    <motion.div 
                        className="w-3/4 flex flex-col gap-5 md:gap-8 lg:gap-10"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="flex flex-col">
                            <motion.p
                                className="text-xs text-red-500/60 uppercase tracking-[0.3em]  mb-4"
                                variants={itemVariants}
                            >
                                Passionate about frontend development                             
                            </motion.p>

                            <motion.h1
                                className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight text-white mb-1"
                                variants={nameVariants}
                            >
                                Hello I'm{" "}
                                <motion.span
                                    className="text-red-500 relative inline-block cursor-default"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    {name}
                                    {/* Animated Underline */}
                                    <motion.span 
                                        className="absolute bottom-2 left-0 w-full h-1.5 bg-red-500/10 -z-10"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ delay: 1, duration: 0.8 }}
                                    />
                                </motion.span>
                            </motion.h1>
                            
                            <motion.p 
                                className="text-sm text-slate-400 font-light tracking-wide"
                                variants={itemVariants}
                            >
                                Frontend Developer <span className="mx-2 text-slate-200">|</span> UI-Focused
                            </motion.p>
                        </div>
                        
                        <motion.div variants={itemVariants} className="pt-2">
                            <ActionBtn />
                        </motion.div>
                    </motion.div>
                </main>
            </div>
        </main>
    )
}