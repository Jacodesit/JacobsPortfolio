import SparkleIcon from "./trait-icon"

export default function Traits() {
    const traits = [
        { name: 'Builder', icon: <SparkleIcon /> },
        { name: 'Persistent', icon: <SparkleIcon /> },
        { name: 'Practical', icon: <SparkleIcon /> },
        { name: 'Curious', icon: <SparkleIcon /> },
        { name: 'Disciplined', icon: <SparkleIcon /> }
    ]

    return (
        <aside>
            <ul className="flex flex-wrap gap-1">
                {traits.map(trait => (
                    <li key={trait.name} className="flex gap-1 border px-2 py-1 text-xs items-center rounded-full font-lighter">
                        {trait.icon}{trait.name}
                    </li>
                ))}
            </ul>
        </aside>
    )
}