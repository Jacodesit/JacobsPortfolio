// import Socials from "../components/socials"
// import { IoIosNavigate } from "react-icons/io";
import { FiShare2 } from "react-icons/fi";
import Sparkle from "../components/sparkle-icon";

import Projects from "../components/projects";
import Socials from "../components/socials";
import About from "../components/about";
import TechStack from "../components/tech-stack";
import Experience from "../components/experince";
import Traits from "../components/traits";

export default function Home() {
    return (
        <main className="min-h-screen w-full bg-black relative text-white">
            {/* Vercel Grid */}
                <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />
            {/* Your Content/Components */}
            <div className="flex space-x-3 py-8 px-30">
                {/* left */}
                <section className="border h-auto w-1/4 p-5 left-container rounded-md">
                    <div className="rounded-full flex-col gap-5">
                        <div className="pt-5 flex flex-col justify-center items-center">
                            <img 
                                src="/Profile/me.webp" 
                                alt="Me" 
                                className="rounded-full h-30 mb-5"
                            />
                            <p className="font-semibold text-xl">Paul Jacob Tocmo</p>
                        </div>
                        
                        <div className="border border-gray-800 w-full my-5"></div>

                        {/* Traits */}
                        <div className="flex flex-col gap-4 mb-5">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <Sparkle />
                                    <p className="text-lg">Traits</p>
                                </div>
                            </div>
                            <Traits />
                        </div>

                        {/* Socials */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-1">
                                <FiShare2 />
                                <p className="text-lg">Socials</p>
                            </div>
                            <Socials />
                        </div>
                    </div>
                </section>

                {/* Right */}
                <section className="border w-3/4 h-auto right-container">
                    <About />
                    <TechStack />
                    <div className="flex gap-3">
                        <Experience />
                        <Projects />
                    </div>
                </section>
            </div>
        </main>
    )
}