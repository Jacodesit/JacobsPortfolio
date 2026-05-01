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
                
                <main className="flex gap-5 items-center h-screen">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-2/5 rounded-md h-96"
                    >
                        <img 
                            src="/Gallery/graduation_pic.jpg" 
                            alt="Me" 
                            className="border-4 border-red-500/20 rounded-md objkect-cover w-full h-full"
                        />
                    </motion.div>
                    <motion.div 
                        className="w-3/4 flex flex-col gap-5 md:gap-8 lg:gap-10 "
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="flex flex-col">
                            <motion.p
                                className="text-xs text-gray-500 whitespace-nowrap mb-5"
                                variants={itemVariants}
                            >
                                Passionate about frontend development                            
                            </motion.p>

                            <motion.h1
                                className="text-3xl md:text-5xl lg:text-7xl whitespace-nowrap mb-1"
                                variants={nameVariants}
                            >
                                Hello I'm{" "}
                                <motion.span
                                    className="text-red-500 border-b-2 border-red-500 inline-block"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {name}
                                </motion.span>
                            </motion.h1>
                            
                            <motion.p 
                                className="text-sm md:text-lg text-gray-500 whitespace-nowrap"
                                variants={itemVariants}
                            >
                                Frontend Developer | UI-Focused
                            </motion.p>
                        </div>
                        
                        <motion.div variants={itemVariants}>
                            <ActionBtn />
                        </motion.div>
                    </motion.div>
                </main>
            </div>
        </main>
    )
}