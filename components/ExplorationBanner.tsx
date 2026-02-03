"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, User, MapPin, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EXPLORATION_ITEMS = [
  {
    id: 1,
    title: "Thiruvanmiyur",
    subtitle: "Serene Coastal Vibes",
    // location: "Thiruvanmiyur Beach",
    // date: "Open Daily | Sunrise - Sunset",
    image: "/assets/exploration/beach-aerial-v2.png",
    link: "/dakshina-dwaraka"
  },
  {
    id: 2,
    title: "Soulful Sangam",
    subtitle: "Kirtan & Community",
    location: "Community Center",
    date: "Every Sunday | 5:00 PM",
    image: "/assets/video-hero/community-events/P1013579.JPG", // Placeholder
    link: "/activities/soulful-sangam"
  },
  {
    id: 3,
    title: "Gita Life",
    subtitle: "Wisdom for Modern Living",
    location: "Temple Lecture Hall",
    date: "Weekly Sessions | 6:30 PM",
    image: "/assets/exploration/gita-life-session.jpg",
    link: "/activities/gita-life"
  },
  {
    id: 4,
    title: "ICVK",
    subtitle: "Indian Culture & Values for Kids",
    location: "Cultural Complex",
    date: "Weekends | 10:00 AM",
    image: "/assets/exploration/icvk-kids-activity.jpg",
    link: "/activities/icvk"
  },
  {
    id: 5,
    title: "Rama Navami",
    subtitle: "Divine Appearance of Lord Rama",
    location: "Temple Pavilion",
    date: "March 27, 2024 | All Day",
    image: "/assets/video-hero/spiritual-programs/6 Sri Ramanavami.JPG",
    link: "/activities/cultural-festivals"
  }
];

export default function ExplorationBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
          TEMPLE PULSE
        </h2>
        <motion.p 
          animate={{ 
            opacity: [0.95, 1, 0.95]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-white text-lg md:text-xl font-semibold tracking-[0.1em] mt-3 px-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
          
        >
          Discover the vibrant life and events of our community.
        </motion.p>
      </div>

      {/* --- Vertical Connector UI (Location & Date) --- */}
      {/* --- Vertical Connector UI (Location & Date) --- */}
      {isMounted && currentIndex !== 0 && (
        <div className="absolute left-4 md:left-12 bottom-48 md:bottom-12 z-20 flex flex-col items-start gap-0 min-w-[200px] pointer-events-none transition-all duration-500">

          {/* Upcoming Event Badge - Relocated here */}
          <AnimatePresence>
            {currentItem.id === 5 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mb-6 pointer-events-none"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.03, 1],
                    boxShadow: [
                      "0 0 15px rgba(255, 215, 0, 0.3)",
                      "0 0 30px rgba(255, 215, 0, 0.5)",
                      "0 0 15px rgba(255, 215, 0, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-gradient-to-r from-[#FFD700] to-[#FFAF38] px-3 py-1.5 md:px-5 md:py-2 rounded-full border border-white/40 backdrop-blur-md flex items-center gap-2 md:gap-3 shadow-2xl"
                >
                  <div className="relative flex h-2 w-2 md:h-3 md:w-3">
                    <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-80"></div>
                    <div className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-red-600 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                  </div>
                  <span className="text-[#2D0A0A] font-black uppercase tracking-[0.2em] text-[8px] md:text-[10px]">
                    Upcoming Event
                  </span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Top Row: Location */}
          <div className="flex items-center gap-4 md:gap-6 relative z-10">
            <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full border-2 border-[#FFD700] flex items-center justify-center relative z-10">
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700]" />
            </div>

            <div className="overflow-visible pointer-events-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`loc-${currentIndex}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col items-start"
                >
                  <span className="text-[10px] md:text-xs font-bold text-[#FFD700] uppercase tracking-widest drop-shadow-[0_0_12px_rgba(0,0,0,1)] mb-0.5">
                    Location
                  </span>
                  <h4 className="text-sm md:text-xl font-black text-white uppercase tracking-wider drop-shadow-[0_0_12px_rgba(0,0,0,1)] font-serif whitespace-nowrap">
                    {currentItem.location}
                  </h4>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dotted Line Connector */}
          {/* Aligned to center of the 10/12 width icon. 
              w-10 = 2.5rem (40px) -> center 20px
              w-12 = 3rem (48px) -> center 24px
              Padding left of container is p-5 (20px) or p-7 (28px).
              Actually we are inside flex-col. The icon is the first child.
              We can just add margin-left to the line.
          */}
          <div className="h-10 md:h-14 w-[2px] ml-[1.2rem] md:ml-[1.45rem] border-l-2 border-dotted border-white/40 my-1 relative">
            <motion.div
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "linear" }}
              className="absolute top-0 left-[-2px] w-[2px] bg-gradient-to-b from-transparent via-[#FFD700]/50 to-transparent opacity-50"
            />
          </div>

          {/* Bottom Row: Date/Time */}
          <div className="flex items-center gap-4 md:gap-6 relative z-10">
            <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full border-2 border-[#FFD700] flex items-center justify-center relative z-10">
              <Calendar className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700]" />
            </div>

            <div className="overflow-visible pointer-events-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`date-${currentIndex}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                  className="flex flex-col items-start"
                >
                  <span className="text-[10px] md:text-xs font-bold text-[#FFD700] uppercase tracking-widest drop-shadow-[0_0_12px_rgba(0,0,0,1)] mb-0.5">
                    Time & Date
                  </span>
                  <h4 className="text-sm md:text-lg font-bold text-white uppercase tracking-wider drop-shadow-[0_0_12px_rgba(0,0,0,1)] whitespace-nowrap">
                    {currentItem.date}
                  </h4>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      )}



      {/* Main Content (Center Bottom) */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-12 md:pb-16 pointer-events-none">
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


    </div>
  );
}
