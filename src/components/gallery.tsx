import { useRef } from "react";

import GalleryIcon from "./image-icon"
import { RxCaretLeft } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";

export default function Gallery() {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const images = [
        '/Gallery/img16.webp',
        '/Gallery/img1.jpg',
        '/Gallery/img2.jpg',
        '/Gallery/img3.jpg',
        '/Gallery/img4.jpg',
        '/Gallery/img5.jpg',
        '/Gallery/img6.jpg',
        '/Gallery/img7.webp',
        '/Gallery/img8.webp',
        '/Gallery/img9.jpg',
        '/Gallery/img10.jpg',
        '/Gallery/img11.jpeg',
        '/Gallery/img12.jpeg',
        '/Gallery/img13.jpeg',
        '/Gallery/img14.jpeg',
        '/Gallery/img15.jpeg',
    ]
    return (
        <div 
            className="bg-[#FFFFFF0F] p-5 rounded-xl mb-3 mt-3 flex flex-col gap-4 w-full gallery-container"
        >
            <div className="flex items-center gap-1">
                <GalleryIcon />
                <p className="text-lg">Gallery</p>
            </div>
            <div className="relative " >
                <div className="absolute w-full bottom-1/2 px-3">
                    <div className="flex justify-between">
                        {/* Left Arrow */}
                        <div 
                            onClick={scrollLeft}
                            className="flex items-center justify-center bg-white/50 p-3 rounded-full">
                            <RxCaretLeft />
                        </div>

                        {/* Right Arrow */}
                        <div 
                            onClick={scrollRight}
                            className="flex items-center justify-center bg-white/50 p-3 rounded-full">
                            <RxCaretRight />
                        </div>
                    </div>
                    
                </div>
                
                <div
                    ref={scrollRef} 
                    className="flex gap-3 overflow-x-hidden scroll-smooth">
                    {images.map((src, index) => (
                        <img key={index} src={src} alt="gallery" className="h-64 w-48 object-cover shrink-0 rounded" />
                    ))}
                </div>
            </div>
        </div>
    )
}