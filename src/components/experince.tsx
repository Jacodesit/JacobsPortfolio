import { FiAward } from "react-icons/fi";

export default function Experience() {
    const dates = [
        {year: '2022', headline: 'Hello World!', subtext: 'Wrote my first line of code'},
        {year: '2025', headline: 'Capstone Leader', subtext: 'Group 1'},
        {year: '2025', headline: 'OJT Internship', subtext: 'DILG Bohol'}
    ]
    return (
        <div className="flex flex-col gap-4 bg-[#FFFFFF0F] p-5 rounded-xl w-1/2 ">
            <div className="flex items-center gap-1">
                <FiAward />
                <p className="text-lg">Experience</p>
            </div>
            <ul>
                {dates.map(date => (
                    <li
                        key={date.year}
                        className="flex justify-between gap-5 items-center bg-[#FFFFFF0F] px-3 py-2 rounded mb-2"
                    >
                        <div>
                            <p className="text-lg">{date.headline}</p>
                            <p className="text-xs text-gray-500">{date.subtext}</p>
                        </div>
                        <p className="text-xs border px-4 py-1 rounded-xl">{date.year}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}