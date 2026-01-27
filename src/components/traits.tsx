import SparkleIcon from "./trait-icon"

export default function Traits() {
    const traits = [
        { name: 'Student', icon: <SparkleIcon /> },
        { name: 'Builder', icon: <SparkleIcon /> },
        { name: 'Persistent', icon: <SparkleIcon /> },
        { name: 'Practical', icon: <SparkleIcon /> },
        { name: 'Curious', icon: <SparkleIcon /> },
        { name: 'Disciplined', icon: <SparkleIcon /> },
        { name: 'Responsible', icon: <SparkleIcon /> }
    ]

    return (
        <aside className="">
            <ul className="flex flex-wrap gap-1">
                {traits.map(trait => (
                    <li key={trait.name} className="flex gap-1 bg-[#FFFFFF0F] px-3 py-2 text-xs items-center rounded font-lighter">
                        {trait.icon}{trait.name}
                    </li>
                ))}
            </ul>
        </aside>
    )
}