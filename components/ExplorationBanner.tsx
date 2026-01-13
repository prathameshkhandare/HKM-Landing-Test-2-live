"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useIsMobile } from "@/components/ui/use-mobile";

const ITEMS = [
  { id: 1, image: "/assets/exploration-banners/banner-1.png", alt: "Srila Prabhupada - Founder Acharya of ISKCON" },
  { id: 2, image: "/assets/exploration-banners/banner-2.png", alt: "Lord Krishna Spiritual Art" },
  { id: 3, image: "/assets/exploration-banners/banner-3.png", alt: "Temple Deities Sri Sri Rukmini Dwarakadhish" },
  { id: 4, image: "/assets/exploration-banners/banner-4.png", alt: "Cultural Festival Celebration" },
  { id: 5, image: "/assets/exploration-banners/banner-5.png", alt: "Spiritual Community Gathering" },
  { id: 6, image: "/assets/exploration-banners/banner-6.png", alt: "Vedic Education and Learning" },
  { id: 7, image: "/assets/exploration-banners/banner-7.png", alt: "Devotees Chanting and Dancing" },
  { id: 8, image: "/assets/exploration-banners/banner-8.png", alt: "Temple Architecture Night View" },
];

export default function ExplorationBanner() {
  const [index, setIndex] = useState(0);
  const isMobile = useIsMobile();

  // Responsive Layout Configuration
  // Desktop:
  // - Reference Width: 912px on 1920px screen ~= 48vw
  // - Reference Stride (Center to Center): 638px ~= 33.5vw
  // - This creates the specific overlap seen in the reference.
  const CARD_WIDTH_VW = isMobile ? 95 : 48; 
  // Stride is the distance between centers. 
  // If Stride < Width, they overlap. 
  const STRIDE_VW = isMobile ? 100 : 33.5;

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIndex((prev) => prev - 1);
  };

  const getItem = (i: number) => {
    const wrappedIndex = ((i % ITEMS.length) + ITEMS.length) % ITEMS.length;
    return ITEMS[wrappedIndex];
  };

  // Range [-3, 3] covers enough screen space for 33vw stride
  const offsetRange = [-3, -2, -1, 0, 1, 2, 3];

  return (
    <div className="relative w-full bg-[#111827] py-2 md:py-16 overflow-hidden flex flex-col items-center">
        
        <div className="text-center mb-4 md:mb-10 text-white z-10 px-4">
            <h2 className="text-4xl md:text-5xl font-serif mb-3 tracking-wide text-[#FFD700]">EXPLORATION</h2>
            <p className="text-white text-sm md:text-base tracking-wider uppercase">for every spiritual journey</p>
        </div>

        {/* Main Carousel Stage */}
        <div className="relative h-[300px] md:h-[550px] w-full overflow-hidden flex justify-center items-center">
            <div className="relative w-full h-full max-w-[1920px] flex justify-center items-center">
                <AnimatePresence initial={false}>
                    {offsetRange.map((offset) => {
                        const i = index + offset; 
                        const item = getItem(i);
                        const isActive = offset === 0;

                        return (
                            <motion.div
                                key={i} 
                                className="absolute md:rounded-2xl rounded-none overflow-hidden shadow-2xl cursor-pointer"
                                initial={{ 
                                    x: `${(offset + 1) * STRIDE_VW}vw`, 
                                    scale: 0.85, 
                                    opacity: 0 
                                }}
                                animate={{ 
                                    x: `${offset * STRIDE_VW}vw`, 
                                    // Reference site uses heavy scaling for side items (approx 0.85)
                                    scale: isActive ? 1 : 0.85, 
                                    // Reference site has higher opacity for sides (0.7-0.8)
                                    opacity: isActive ? 1 : 0.7,
                                    zIndex: isActive ? 50 : 40 - Math.abs(offset), // Layering based on distance
                                }}
                                exit={{ 
                                    x: `${(offset - 1) * STRIDE_VW}vw`, 
                                    opacity: 0 
                                }}
                                transition={{ 
                                    type: "spring", 
                                    stiffness: 300, 
                                    damping: 30,
                                }} 
                                style={{
                                    width: `${CARD_WIDTH_VW}vw`,
                                    maxWidth: isMobile ? "100vw" : "1000px",
                                    height: "100%",
                                    left: "50%",
                                    marginLeft: `-${CARD_WIDTH_VW / 2}vw` 
                                }}
                                onClick={() => setIndex(i)}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-contain md:object-cover"
                                    priority={isActive} 
                                />
                                {/* No Text Overlay Here */}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button 
                onClick={prevSlide}
                className="absolute left-[5%] z-20 w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-800/80 text-white hover:bg-gray-700 transition-all hidden md:flex items-center justify-center shadow-lg border border-white/10"
            >
                <ChevronLeft className="w-5 h-5 md:w-8 md:h-8" />
            </button>
            <button 
                onClick={nextSlide}
                className="absolute right-[5%] z-20 w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-800/80 text-white hover:bg-gray-700 transition-all hidden md:flex items-center justify-center shadow-lg border border-white/10"
            >
                <ChevronRight className="w-5 h-5 md:w-8 md:h-8" />
            </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="relative mt-6 md:mt-10 flex justify-center gap-2 md:gap-3 px-4 z-10 w-full overflow-x-auto pb-2 scrollbar-hide">
            {ITEMS.map((item, originalIndex) => {
                 const isSelected = ((index % ITEMS.length) + ITEMS.length) % ITEMS.length === originalIndex;
                 return (
                    <button
                        key={item.id}
                        onClick={() => {
                            const currentWrapped = ((index % ITEMS.length) + ITEMS.length) % ITEMS.length;
                            const diff = originalIndex - currentWrapped;
                            setIndex(index + diff);
                        }}
                        className={`relative shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-md overflow-hidden transition-all duration-300 border-2 ${isSelected ? 'border-yellow-500 scale-110 opacity-100' : 'border-transparent opacity-40 hover:opacity-80'}`}
                    >
                        <Image
                            src={item.image}
                            alt="Thumbnail"
                            fill
                            className="object-cover"
                        />
                    </button>
                 );
            })}
        </div>
    </div>
  );
}
