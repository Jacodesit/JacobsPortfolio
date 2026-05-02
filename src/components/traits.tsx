import SparkleIcon from "./trait-icon";

export default function Traits() {
    const traits = ['Student', 'Builder', 'Persistent', 'Practical', 'Curious', 'Disciplined', 'Responsible'];

    return (
        <aside>
            <ul className="flex flex-wrap gap-2">
                {traits.map(trait => (
                    <li 
                        key={trait} 
                        className="flex gap-1.5 bg-white/[0.03] border border-white/5 px-3 py-1.5 text-[11px] items-center rounded-full text-gray-300 hover:border-white/20 hover:bg-white/[0.06] transition-colors cursor-default"
                    >
                        <SparkleIcon className="text-blue-400/80" />
                        <span className="font-medium">{trait}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}