"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useIsMobile } from "@/components/ui/use-mobile";

const ITEMS = [
  { id: 1, title: "Sri Vaikuntha Ekadashi", image: "/assets/discover-v2/1 Sri Vaikuntha Ekadashi.JPG", link: "/activities" },
  { id: 2, title: "Pongal", image: "/assets/discover-v2/2 Pongal.JPG", link: "/activities" },
  { id: 3, title: "Varshikotsavam", image: "/assets/discover-v2/3 Varshikotsavam.JPG", link: "/activities" },
  { id: 4, title: "Sri Nityananda Trayodashi", image: "/assets/discover-v2/4 Sri Nityananda Trayodashi.JPG", link: "/activities" },
  { id: 5, title: "Ratha Yatra", image: "/assets/discover-v2/4.1 Ratha Yatra.JPG", link: "/activities" },
  { id: 6, title: "Sri Gaur Purnima", image: "/assets/discover-v2/5 Sri Gaur Purnima.JPG", link: "/activities" },
  { id: 7, title: "Sri Ramanavami", image: "/assets/discover-v2/6 Sri Ramanavami.JPG", link: "/activities", objectPosition: "15% center" },
  { id: 8, title: "Sri Rukmini Dwadashi", image: "/assets/discover-v2/7 Sri Rukmini Dwadashi.JPG", link: "/activities" },
  { id: 9, title: "Narasimha Jayanti", image: "/assets/discover-v2/8 Narasimha Jayanti.JPG", link: "/activities" },
  { id: 10, title: "Panihati Chidadadhi Mahotsava", image: "/assets/discover-v2/9 Panihati Chidadadhi Mahotsava.png", link: "/activities" },
  { id: 11, title: "Jhulan Utsava", image: "/assets/discover-v2/10 Jhula Utsava.JPG", link: "/activities" },
  { id: 12, title: "Balarama Jayanti", image: "/assets/discover-v2/11 Balarama Jayanti.JPG", link: "/activities" },
  { id: 13, title: "Sri Krishna Janmashtami", image: "/assets/discover-v2/12 Sri Krishna Janmashtami.JPG", link: "/activities" },
  { id: 14, title: "Sri Vyasa Puja", image: "/assets/discover-v2/13 Sri Vyasa Puja 1.JPG", link: "/activities" },
  { id: 15, title: "Sri Radhashtami", image: "/assets/discover-v2/14 Sri Radhashtami.JPG", link: "/activities" },
  { id: 16, title: "Deepotsavam", image: "/assets/discover-v2/15 Deepotsavam.JPG", link: "/activities" },
  { id: 17, title: "Sri Govardhana Puja", image: "/assets/discover-v2/16 Sri Govardhana Puja.JPG", link: "/activities" },
  { id: 18, title: "Srila Prabhupada Disappearance Day", image: "/assets/discover-v2/17 Srila Prabhupada Disappearance day.JPG", link: "/activities" },
];

export default function DiscoverGrid() { // Keeping name to avoid breaking imports, though it's a carousel now
  const [index, setIndex] = useState(0);
  const isMobile = useIsMobile();

  // Configuration matching InfiniteActivitySlider
  // Desktop:
  // - Card Width: ~22vw (approx 350px on 1600px)
  // - Stride: ~23vw 
  const CARD_WIDTH_VW = isMobile ? 85 : 22; 
  const STRIDE_VW = isMobile ? 100 : 23;

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000); // 3s interval like Activity Slider
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

  const offsetRange = isMobile ? [-1, 0, 1] : [-2, -1, 0, 1, 2];

  return (
    <section className="py-10 md:py-20 bg-slate-50 overflow-hidden relative">
        <div className="w-full max-w-[95%] mx-auto px-4 md:px-8 relative z-10 text-center mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A8A] mb-2">
                Cultural Festivals
              </h2>
              <p className="text-xl text-slate-600 italic">
                Experience the essence of our culture
              </p>
            </motion.div>
        </div>

        <div className="relative h-[450px] md:h-[550px] w-full overflow-hidden flex justify-center items-center">
            <div className="relative w-full h-full max-w-[1920px] flex justify-center items-center">
                <AnimatePresence initial={false}>
                    {offsetRange.map((offset) => {
                        const i = index + offset; 
                        const item = getItem(i);
                        const isActive = offset === 0;

                        return (
                            <motion.div
                                key={i} 
                                className="absolute rounded-2xl overflow-hidden shadow-2xl cursor-pointer border border-white/20"
                                initial={{ 
                                    x: `${(offset + 1) * STRIDE_VW}vw`, 
                                    scale: 1, 
                                    opacity: 1 
                                }}
                                animate={{ 
                                    x: `${offset * STRIDE_VW}vw`, 
                                    scale: isActive ? 1.05 : 1, 
                                    opacity: 1,
                                    zIndex: isActive ? 50 : 40 - Math.abs(offset), 
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
                                    maxWidth: isMobile ? "90vw" : "400px",
                                    height: isMobile ? "450px" : "500px",
                                    left: "50%",
                                    marginLeft: `-${CARD_WIDTH_VW / 2}vw` 
                                }}
                                onClick={() => setIndex(i)}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover" 
                                    style={{
                                        objectPosition: (item as any).objectPosition || "center",
                                    }} 
                                />
                                
                                <div className={`absolute inset-0 bg-black/20 ${isActive ? 'bg-black/0' : 'bg-black/40'} transition-colors duration-300`}></div>

                                <motion.div 
                                      className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end min-h-[40%]"
                                      animate={{ opacity: 1 }}
                                  >
                                      <h3 className="text-[#FFD700] text-2xl md:text-3xl font-serif font-bold mb-2 drop-shadow-md">
                                          {item.title}
                                      </h3>
                                      <div className="inline-block px-5 py-2 rounded-full border border-[#FFD700] text-[#FFD700] text-xs font-bold bg-black/40 backdrop-blur-md w-max hover:bg-[#FFD700] hover:text-black transition-all">
                                          Explore
                                      </div>
                                  </motion.div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            <button 
                onClick={prevSlide}
                className="absolute left-[2%] z-50 w-10 h-10 md:w-14 md:h-14 rounded-full bg-black/30 text-[#1E3A8A] hover:bg-white hover:text-[#1E3A8A] transition-all flex items-center justify-center shadow-lg border border-white/20 backdrop-blur-sm"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
                onClick={nextSlide}
                className="absolute right-[2%] z-50 w-10 h-10 md:w-14 md:h-14 rounded-full bg-black/30 text-[#1E3A8A] hover:bg-white hover:text-[#1E3A8A] transition-all flex items-center justify-center shadow-lg border border-white/20 backdrop-blur-sm"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    </section>
  );
}
