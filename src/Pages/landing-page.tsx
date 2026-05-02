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
            <div className="lg:px-72 flex relative z-10 w-full min-h-screen">
                <main className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center w-full px-6 md:px-10 py-20 lg:py-0">
                    
                    {/* IMAGE CONTAINER */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        // Mobile: 100% width, fixed height. Desktop: 40% width, taller height.
                        className="w-full lg:w-2/5 rounded-2xl h-64 md:h-80 lg:h-96 relative group overflow-hidden shadow-2xl"
                    >
                        <img 
                            src="/Gallery/graduation_pic.jpg" 
                            alt="Me" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Subtle Gradient Overlay for Mobile Depth */}
                        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent lg:hidden" />
                        <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />
                    </motion.div>

                    {/* TEXT CONTENT */}
                    <motion.div 
                        // items-center centers the button/layout on mobile
                        // lg:items-start switches back to left-aligned for desktop
                        className="w-full lg:w-3/4 flex flex-col items-center lg:items-start gap-6 md:gap-8 lg:gap-10 -mt-12 lg:mt-0 relative z-20"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="flex flex-col items-center lg:items-start">
                            <motion.p
                                className="text-[10px] mt-10 md:mt-20 lg:mt-0 md:text-xs text-red-500/80 uppercase tracking-[0.3em] mb-2 lg:mb-4 text-center lg:text-left"
                                variants={itemVariants}
                            >
                                Passionate about frontend development                             
                            </motion.p>

                            <motion.h1
                                className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight text-white mb-2 text-center lg:text-left"
                                variants={nameVariants}
                            >
                                Hello I'm{" "}
                                <motion.span
                                    className="text-red-500 relative inline-block"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    {name}
                                    <motion.span 
                                        className="absolute bottom-1 lg:bottom-2 left-0 w-full h-1 bg-red-500/20 -z-10"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ delay: 1, duration: 0.8 }}
                                    />
                                </motion.span>
                            </motion.h1>
                            
                            <motion.p 
                                className="text-xs md:text-sm text-slate-400 font-light tracking-wide text-center lg:text-left"
                                variants={itemVariants}
                            >
                                Frontend Developer <span className="mx-2 text-slate-600">|</span> UI-Focused
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