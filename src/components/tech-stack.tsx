import { FiLayers } from "react-icons/fi";

export default function TechStack() {
    const frontends = [
        'HTML', 'CSS', 'Javascript', 'Vue.js', 'React', 'Inertia.js', 'Bootstrap', 'Tailwind CSS', 'SCSS', 'Prettier'
    ];

    const backends = [
        'PHP', 'Laravel', 'MySQL'
    ];
    return (
        <div className="flex flex-col gap-4 bg-[#FFFFFF0F] p-5 rounded-xl mb-3 ">
            <div className="flex items-center gap-1">
                <FiLayers />
                <p className="text-lg">Tech Stack</p>
            </div>

            <div className="flex flex-col gap-5">
                <div>
                    <h1 className="mb-2">Frontend</h1>
                    <ul className="flex gap-1 font-extralight">
                        {frontends.map(frontend => (
                            <li
                                key={frontend}
                                className="px-4 py-1 rounded text-sm bg-[#FFFFFF0F]"
                            >
                                {frontend}
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <h1 className="mb-2">Backend</h1>
                    <ul className="flex gap-1 font-extralight">
                        {backends.map(backend => (
                            <li
                                key={backend}
                                className="px-4 py-1 rounded text-sm bg-[#FFFFFF0F]"
                            >
                                {backend}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}