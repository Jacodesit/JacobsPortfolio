import EmailIcon from "../components/email-icon";
import DownloadIcon from "../components/download-icon";

export default function ActionBtn() {
    return (
        <div className="flex justify-center gap-1 mx-auto">
            <a
                href="/Tocmo_Resume.pdf"
                className="flex items-center gap-1 bg-[#FFFFFF0F] p-2 px-3 rounded text-xs"
            >   
                <DownloadIcon />
                Download CV
            </a>

            <a
                href="mailto:pauljacobtocmo96@gmail.com?subject=Job Opportunity&body=Hello, I saw your portfolio." target="_blank"
                className="flex items-center gap-1 bg-[#FFFFFF0F] p-2 px-3 rounded text-xs"
            >   
                <EmailIcon />
                Email Me
            </a>
        </div>
    )
}