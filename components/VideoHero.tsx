"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    id: "temple-darshan",
    label: "Temple Darshan",
    video: "https://cdn.pixabay.com/video/2024/02/10/200023-911915504_tiny.mp4",
    fallbackImage: "https://images.pexels.com/videos/34297334/free-video-34297334.jpg?auto=compress&cs=tinysrgb&fit=crop&h=720&w=1280"
  },
  {
    id: "spiritual-programs",
    label: "Spiritual Programs",
    video: "https://cdn.pixabay.com/video/2023/03/14/154625-808146415_tiny.mp4",
    fallbackImage: "/assets/activities/activities-pic.JPG"
  },
  {
    id: "community-events",
    label: "Community Events",
    video: "https://cdn.pixabay.com/video/2023/01/26/148094-793525258_tiny.mp4",
    fallbackImage: "/assets/hkm-about-community.jpg"
  },
  {
    id: "Dham Darshan Yatra",
    label: "Dham Darshan Yatra",
    video: "https://cdn.pixabay.com/video/2022/03/22/111647-691223157_large.mp4",
    fallbackImage: "/assets/cultutral-festival.JPG"
  },
  {
    id: "Mandir Nirman Seva",
    label: "Mandir Nirman Seva",
    video: "https://cdn.pixabay.com/video/2025/08/21/298805_large.mp4",
    fallbackImage: "/assets/Sri-krishna-Janmashtami.jpg"
  }
];

export default function VideoHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  // Auto-advance loop
  useEffect(() => {
    const timer = setInterval(() => {
    //   setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 8000); // Change every 8 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Backgrounds */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Smooth crossfade
          className="absolute inset-0 h-full w-full"
        >
          <video
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="h-full w-full object-cover"
            src={SLIDES[activeSlide].video}
          >
          </video>
          
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Overlay (Optional Title if needed) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 pointer-events-none">
          {/* We can reproduce the 'INCREDIBLE INDIA' style text here if desired, 
              but based on Image 3, it seems the focus is on the bottom bar and clean visuals.
              The text in Image 3 "Administrative Floor" seems part of the video or specific to that frame.
              Let's keep it clean for now or minimal. */}
      </div>

      {/* Mute/Unmute Toggle */}
      <button 
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-32 right-8 z-30 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-all backdrop-blur-md cursor-pointer"
      >
        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
      </button>

      {/* Bottom Navigation Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent pb-8 pt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-x-8 text-sm md:text-base font-medium tracking-wide">
            {SLIDES.map((slide, index) => (
              <div key={slide.id} className="flex items-center">
                <button
                  onClick={() => setActiveSlide(index)}
                  className={cn(
                    "relative px-2 py-2 transition-all duration-300 uppercase cursor-pointer",
                    activeSlide === index 
                      ? "text-yellow-400 scale-105 font-bold" 
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {slide.label}
                  {/* Active Indicator Underline */}
                  {activeSlide === index && (
                    <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                    />
                  )}
                </button>
                {/* Separator */}
                {index < SLIDES.length - 1 && (
                    <span className="hidden md:block w-[1px] h-4 bg-white/40 ml-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
