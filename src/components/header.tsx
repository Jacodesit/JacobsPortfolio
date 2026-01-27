export default function Header() {
    const name = 'Jacob'
    return (
        <header className="py-5 px-10 fixed z-50 w-auto">
            <div className="flex gap-2">
                <h1 className="font-semibold text-lg">{name}</h1>
            </div>
        </header>
    )
}