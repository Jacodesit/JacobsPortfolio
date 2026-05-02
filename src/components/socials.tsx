import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Socials() {
    const socials = [
        { name: 'Facebook', url: 'https://facebook.com/...', icon: <FaFacebook /> },
        { name: 'Instagram', url: 'https://instagram.com/...', icon: <FaInstagram /> },
        { name: 'GitHub', url: 'https://github.com/...', icon: <FaGithub /> },
    ];

    return (
        <aside className="relative z-10">
            <ul className="flex flex-col gap-2">
                {socials.map(social => (
                    <li key={social.name}>
                        <a 
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group flex items-center justify-between bg-white/[0.02] border border-white/5 p-4 rounded-xl transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10 hover:-translate-y-0.5"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                                    {social.icon}
                                </span>
                                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                                    {social.name}
                                </span>
                            </div>
                            {/* Subtle arrow that appears on hover */}
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-500">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    )
}