import { useRef } from "react";

import GalleryIcon from "./image-icon"
import { RxCaretLeft } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";

export default function Gallery() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const images = ['/Gallery/graduation_pic.jpg', '/Gallery/img1.jpg', '/Gallery/img10.jpg', '/Gallery/img13.jpeg', '/Gallery/img15.jpeg', '/Gallery/img16.webp'];

    const scroll = (dir: 'l' | 'r') => {
        if (scrollRef.current) {
            const offset = dir === 'l' ? -400 : 400;
            scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl mt-4 group relative">
            <div className="flex items-center gap-2 text-gray-400 mb-6">
                <GalleryIcon size={18} />
                <h2 className="text-xs font-bold uppercase tracking-[0.2em]">Moments</h2>
            </div>

            <div className="relative">
                <button onClick={() => scroll('l')} className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20">
                    <RxCaretLeft size={24} />
                </button>
                <button onClick={() => scroll('r')} className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20">
                    <RxCaretRight size={24} />
                </button>

                <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory gallery-scroll">
                    {images.map((src, i) => (
                        <div key={i} className="shrink-0 w-64 h-80 rounded-xl overflow-hidden border border-white/10 snap-start mb-2">
                            <img src={src} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}