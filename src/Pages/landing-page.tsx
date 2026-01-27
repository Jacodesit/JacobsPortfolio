import Header from "../components/header"
import ActionBtn from "../components/actions-btn"

type PageProps = {
    name: string
}

export default function Landing({ name }:PageProps) {
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
            <div className="lg:px-96 ">
                <Header />
                <main className="flex justify-center items-center h-screen">
                    <div className="flex flex-col gap-5 md:gap-8 lg:gap-10 text-center items-center">
                        <div className="flex flex-col gap-3 md:gap-8 lg:gap-10">
                            <h1 className="text-3xl md:text-5xl lg:text-8xl">Hello I'm <span className="text-red-500 border-b-2 border-red-500">{name}</span></h1>
                            <p className="text-sm md:text-lg text-gray-500">Information Technology • Web Developer</p>
                        </div>
                        <ActionBtn />
                    </div>
                </main>
            </div>
        </main>
    )
}