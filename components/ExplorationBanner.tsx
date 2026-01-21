"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EXPLORATION_ITEMS = [
  {
    id: 1,
    title: "Thiruvanmiyur",
    subtitle: "Serene Coastal Vibes",
    date: "",
    image: "/assets/exploration/beach-aerial-v2.png",
    link: "/dakshina-dwaraka"
  },
  {
    id: 2,
    title: "Soulful Sangam",
    subtitle: "Kirtan & Community",
    date: "Every Sunday | 5:00 PM",
    image: "/assets/video-hero/community-events/P1013579.JPG", // Placeholder
    link: "/activities/soulful-sangam"
  },
  {
    id: 3,
    title: "Gita Life",
    subtitle: "Wisdom for Modern Living",
    date: "Weekly Sessions",
    image: "/assets/exploration/gita-life-session.jpg", 
    link: "/activities/gita-life"
  },
  {
    id: 4,
    title: "ICVK",
    subtitle: "Indian Culture & Values for Kids",
    date: "Weekend Classes",
    image: "/assets/exploration/icvk-kids-activity.jpg", 
    link: "/activities/icvk"
  },
  {
    id: 5,
    title: "Pongal Celebration",
    subtitle: "Harvest Festival",
    date: "Jan 14, 2024",
    image: "/assets/video-hero/spiritual-programs/2 Pongal.JPG", // Placeholder
    link: "/activities/cultural-festivals"
  }
];

export default function ExplorationBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance removed for manual-only navigation
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     nextSlide();
  //   }, 6000);
  //   return () => clearInterval(timer);
  // }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % EXPLORATION_ITEMS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + EXPLORATION_ITEMS.length) % EXPLORATION_ITEMS.length);
  };

  const currentItem = EXPLORATION_ITEMS[currentIndex];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-sans">
      
      {/* Background Image Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentItem.id}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            fill
            className="object-cover"
            style={{ 
                objectPosition: currentItem.id === 5 ? "center 25%" : currentItem.id === 2 ? "center 35%" : "center center" 
            }}
            priority
            quality={95}
          />
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        </motion.div>
      </AnimatePresence>

      {/* Top Header */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-24 text-center">
        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
          EXPLORATION
        </h2>
        <p className="text-white/90 text-xl md:text-2xl font-light tracking-widest mt-2">
            for every spiritual seeker
        </p>
      </div>
      


      {/* Main Content (Center Bottom) */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-32 md:pb-24 pointer-events-none">
        <motion.div
            key={currentItem.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center pointer-events-auto"
        >
             {/* Navigation Arrows (Inline with title) */}
             <div className="flex flex-col items-center">
                 {/* Title Row with Navigation Arrows */}
                 <div className="flex items-center gap-4 md:gap-8 mb-3 md:mb-4">
                    <button onClick={prevSlide} className="group transition-transform active:scale-90 hover:-translate-x-1 focus:outline-none">
                        <ArrowRight className="w-5 h-5 md:w-8 md:h-8 text-white/90 group-hover:text-[#FFB81C] rotate-180 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-colors" />
                    </button>

                    <h3 className="text-xl md:text-3xl font-black text-white text-center uppercase tracking-wider drop-shadow-2xl">
                        {currentItem.title}
                    </h3>

                    <button onClick={nextSlide} className="group transition-transform active:scale-90 hover:translate-x-1 focus:outline-none">
                         <ArrowRight className="w-5 h-5 md:w-8 md:h-8 text-white/90 group-hover:text-[#FFB81C] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-colors" />
                    </button>
                 </div>

                 {/* Discover Button (Below Title) */}
                <Link
                    href={currentItem.link}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFAF38] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFAF38] text-[#2D0A0A] px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold uppercase tracking-widest text-[9px] md:text-[11px] transition-all shadow-[0_4px_14px_rgba(255,184,28,0.4)] hover:shadow-[0_6px_20px_rgba(255,184,28,0.6)] hover:-translate-y-1"
                >
                    Discover more
                </Link>
             </div>
        </motion.div>
      </div>
      
       {/* User / Search Icons (Top Right - Decorative/Functional) */}
       <div className="absolute top-8 right-8 z-30 flex items-center gap-4 text-white">
            {/* Can add search / user icons here if needed */}
       </div>

    </div>
  );
}
