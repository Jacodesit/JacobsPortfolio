import EmailIcon from "../components/email-icon";
import DownloadIcon from "../components/download-icon";

export default function ActionBtn() {
    return (
        <div className="flex gap-1 mx-auto">
            <button
                className="flex items-center gap-1 bg-[#FFFFFF0F] p-2 px-3 rounded text-xs"
            >   
                <DownloadIcon />
                Download CV
            </button>

            <button
                className="flex items-center gap-1 bg-[#FFFFFF0F] p-2 px-3 rounded text-xs"
            >   
                <EmailIcon />
                Email Me
            </button>
        </div>
    )
}