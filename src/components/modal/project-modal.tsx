type pageProps = {
    openModal: boolean
    onClose: () => void
}

export default function ProjectsModal({openModal, onClose}:pageProps) {
    if(!openModal) return null

    return (
        <div className="fixed inset-1 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-500">
            <div className="bg-[#FFFFFF0F] rounded-lg max-w-4xl w-full flex relative px-5 py-5 gap-5">
                Project Modal
                <button
                    onClick={onClose}
                >
                    X
                </button>
            </div>
        </div>
    )
}