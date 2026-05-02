import { FiAward } from "react-icons/fi";

export default function Experience() {
    const dates = [
        { year: '2025', headline: 'OJT Internship', subtext: 'DILG Bohol', active: true },
        { year: '2025', headline: 'Capstone Leader', subtext: 'CivicWatch Project', active: false },
        { year: '2022', headline: 'Hello World!', subtext: 'First line of code', active: false }
    ];

    return (
        <div className="w-full lg:w-1/2 flex flex-col gap-5 bg-white/3 border border-white/5 p-6 rounded-2xl">
            <div className="flex items-center gap-2 text-gray-400">
                <FiAward size={18} />
                <h2 className="text-xs font-bold uppercase tracking-[0.2em]">Experience</h2>
            </div>
            <div className="space-y-3">
                {dates.map((date, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/2 border border-white/5 hover:bg-white/5 transition-all">
                        <div>
                            <p className="text-sm font-medium text-white">{date.headline}</p>
                            <p className="text-[11px] text-gray-500">{date.subtext}</p>
                        </div>
                        <span className={`text-[10px] px-2 py-1 rounded-md border ${date.active ? 'border-blue-500/50 text-blue-400' : 'border-white/10 text-gray-500'}`}>
                            {date.year}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}