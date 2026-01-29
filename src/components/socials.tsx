import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Socials() {
    const socials = [
        { name: 'Facebook', url: 'https://www.facebook.com/pauljacob.tocmo/', icon: <FaFacebook size={24} /> },
        { name: 'Instagram', url: 'https://www.instagram.com/paaul_jcb/', icon: <FaInstagram size={24} /> },
        { name: 'GitHub', url: 'https://github.com/Jacodesit', icon: <FaGithub size={24} /> },
    ];

    return (
        <aside className="">
            <ul className="flex flex-col gap-3">
                {socials.map(social => (
                    <li key={social.name}>
                        <a 
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="
                                flex items-center gap-3 
                                bg-[#1a1a1a] p-4 rounded 
                                transition-all duration-200 
                                hover:scale-105 active:scale-95 active:bg-[#2a2a2a]
                                cursor-pointer touch-manipulation
                                select-none
                                min-h-[12]
                            "
                            style={{
                                WebkitTapHighlightColor: 'transparent', // Removes iOS tap highlight
                            }}
                        >
                            {social.icon}
                            <span className="text-sm font-extralight">
                                {social.name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    )
}