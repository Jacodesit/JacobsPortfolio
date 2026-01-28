import BackBtn from "../components/back-btn"

export default function Projects() {
    return (
        <main className="h-screen w-screen bg-black relative text-white">
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
            <div className="w-full h-screen lg:flex lg:space-x-3 p-5 lg:px-30">
                <div className="bg-[#FFFFFF0F] p-5 rounded-md w-full h-full">
                    <div className="flex items-center gap-2">
                        <BackBtn />
                        <p className="font-semibold text-xl">Projects</p>
                    </div>
                </div>
            </div>
        </main>
    )
}