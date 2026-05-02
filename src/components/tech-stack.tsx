import { FiLayers } from "react-icons/fi";

export default function TechStack() {
    const categories = [
        { label: 'Frontend', skills: ['React', 'Inertia.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SCSS'] },
        { label: 'Backend', skills: ['PHP', 'Laravel', 'MySQL', 'Supabase'] }
    ];

    return (
        <div className="flex flex-col gap-6 bg-white/3 border border-white/5 p-6 rounded-2xl mb-4">
            <div className="flex items-center gap-2 text-gray-400">
                <FiLayers size={18} />
                <h2 className="text-xs font-bold uppercase tracking-[0.2em]">Tech Stack</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categories.map((cat) => (
                    <div key={cat.label} className="space-y-3">
                        <h3 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{cat.label}</h3>
                        <ul className="flex gap-2 flex-wrap">
                            {cat.skills.map(skill => (
                                <li key={skill} className="px-3 py-1 rounded-full text-[11px] bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-colors">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}