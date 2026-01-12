import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Socials() {
    const socials = [
        { name: 'Facebook', url: 'https://www.facebook.com/pauljacob.tocmo/', icon: <FaFacebook size={20} /> },
        { name: 'Instagram', url: 'https://www.instagram.com/paaul_jcb/', icon: <FaInstagram size={20} /> },
        { name: 'GitHub', url: 'https://github.com/Jacodesit', icon: <FaGithub size={20} /> },
    ];

    return (
        <aside>
            <ul className="flex flex-col gap-2">
                {socials.map(social => (
                    <li key={social.name} className="flex items-center gap-2 bg-[#1a1a1a] py-2 px-3 rounded transition-all duration-500 hover:scale-105 hover:cursor-pointer">
                        <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            {social.icon}
                            <span className="text-sm font-extralight">{social.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    )
}