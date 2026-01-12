"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useIsMobile } from "@/components/ui/use-mobile";

const ITEMS = [
  {
    id: 1,
    title: "",
    subtitle: "",
    image: "/assets/exploration/temple-hall-0.png",
  },
  {
    id: 2,
    title: "",
    subtitle: "",
    image: "/assets/exploration/temple-hall-1.png",
  },
  {
    id: 3,
    title: "",
    subtitle: "",
    image: "/assets/exploration/temple-hall-2.png",
  },
  {
    id: 4,
    title: "",
    subtitle: "",
    image: "/assets/exploration/temple-hall-3.png",
  },
  {
    id: 5,
    title: "",
    subtitle: "",
    image: "/assets/exploration/temple-hall-4.png",
  },
  {
    id: 6,
    title: "",
    subtitle: "",
    image: "/assets/exploration/temple-hall-5.png",
  },
  {
    id: 7,
    title: "",
    subtitle: "",
    image: "/assets/exploration/temple-hall-6.png",
  },
  {
    id: 8,
    title: "",
    subtitle: "",
    image: "/assets/exploration/temple-hall-7.png",
  },
];

export default function CoverflowCarousel() {
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
                                    alt={item.title}
                                    fill
                                    className="object-contain md:object-cover"
                                />
                                
                                {/* Text Content - Only show if title exists */}
                                {item.title && (
                                <motion.div 
                                    className={`absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end min-h-[50%] transition-opacity duration-500 z-20`}
                                    animate={{ opacity: isActive ? 1 : 0 }}
                                >
                                    <h3 className="text-[#FFD700] text-2xl md:text-4xl font-serif font-bold mb-1 md:mb-2 drop-shadow-lg">{item.title}</h3>
                                    <p className="text-white text-sm md:text-lg font-medium drop-shadow-md tracking-wide">{item.subtitle}</p>
                                </motion.div>
                                )}
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
                 // Check if this original item index matches the current active wrapped index
                 const isSelected = ((index % ITEMS.length) + ITEMS.length) % ITEMS.length === originalIndex;
                 return (
                    <button
                        key={item.id}
                        // When clicking thumbnail, we don't just jump to index 0, 1, 2...
                        // We want to jump to the *closest* occurrence of that index relative to current infinite index.
                        // (Optional enhancement, simplest is just to jump to the index in the current 'loop' frame)
                        onClick={() => {
                            // Find modulo difference
                            const currentWrapped = ((index % ITEMS.length) + ITEMS.length) % ITEMS.length;
                            const diff = originalIndex - currentWrapped;
                            // Shortest path logic could go here, but linear jump is fine for now
                            setIndex(index + diff);
                        }}
                        className={`relative shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-md overflow-hidden transition-all duration-300 border-2 ${isSelected ? 'border-yellow-500 scale-110 opacity-100' : 'border-transparent opacity-40 hover:opacity-80'}`}
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
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
