"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, ArrowRight, ArrowLeft, Landmark, BookOpen, Users, MapPin, HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";

// --- IMAGE ARRAYS ---
const TEMPLE_DARSHAN_IMAGES = [
  "015A2364.JPG", "015A2365.JPG", "015A2366.JPG", "015A2367.JPG", 
  "015A2368.JPG", "015A2369.JPG", "015A2370.JPG", "015A2371.JPG", "015A2375.JPG"
].map(img => `/assets/video-hero/temple-darshan/${img}`);

const COMMUNITY_EVENTS_IMAGES = [
  "P1013346.png", "P1013579.JPG", "P1013590.JPG", "P1013604.JPG", 
  "P1013609.JPG", "P1013613.JPG", "P1013631.JPG", "P1013652.JPG", 
  "P1013676.JPG", "P1156333.JPG", "P1156350.JPG", "P1156388.JPG", 
  "P1156392.JPG", "P1156397.JPG", "P1156406.JPG"
].map(img => `/assets/video-hero/community-events/${img}`);

const SPIRITUAL_PROGRAMS_IMAGES = [
  "1 Sri Vaikuntha Ekadashi.JPG", "2 Pongal.JPG", "3 Varshikotsavam.JPG",
  "4 Sri Nityananda Trayodashi.JPG", "4.1 Ratha Yatra.JPG", "5 Sri Gaur Purnima.JPG",
  "6 Sri Ramanavami.JPG", "7 Sri Rukmini Dwadashi.JPG", "8 Narasimha Jayanti.JPG",
  "9 Panihati Chidadadhi Mahotsava.png", "10 Jhula Utsava.JPG", "11 Balarama Jayanti.JPG",
  "12 Sri Krishna Janmashtami.JPG", "13 Sri Vyasa Puja 1.JPG", "14 Sri Radhashtami.JPG",
  "15 Deepotsavam.JPG", "16 Sri Govardhana Puja.JPG", "17 Srila Prabhupada Disappearance day.JPG"
].map(img => `/assets/video-hero/spiritual-programs/${img}`);

const SLIDES = [
  {
    id: "temple-darshan",
    label: "Temple Darshan",
    description: "Experience the divine presence of the Lord",
    video: "https://cdn.pixabay.com/video/2024/02/10/200023-911915504_tiny.mp4",
    fallbackImage: "https://images.pexels.com/videos/34297334/free-video-34297334.jpg?auto=compress&cs=tinysrgb&fit=crop&h=720&w=1280",
    tempImage: "/assets/temple-darshan.jpg",
    subImages: TEMPLE_DARSHAN_IMAGES
  },
  {
    id: "spiritual-programs",
    label: "Spiritual Programs",
    description: "Enrich your soul with vedic wisdom",
    video: "https://cdn.pixabay.com/video/2023/03/14/154625-808146415_tiny.mp4",
    fallbackImage: "/assets/activities/activities-pic.JPG",
    tempImage: "/assets/spiritual-programs.jpg",
    subImages: SPIRITUAL_PROGRAMS_IMAGES
  },
  {
    id: "community-events",
    label: "Community Events",
    description: "Join our vibrant spiritual community",
    video: "https://cdn.pixabay.com/video/2023/01/26/148094-793525258_tiny.mp4",
    fallbackImage: "/assets/hkm-about-community.jpg",
    tempImage: "/assets/hkm-about-community.jpg",
    subImages: COMMUNITY_EVENTS_IMAGES
  },
  {
    id: "Dham Darshan Yatra",
    label: "Dham Darshan Yatra",
    description: "Journey to the holy abodes",
    video: "https://cdn.pixabay.com/video/2022/03/22/111647-691223157_large.mp4",
    fallbackImage: "/assets/cultutral-festival.JPG",
    tempImage: "/assets/chardham_yatra_scenic.png"
  },
  {
    id: "Mandir Nirman Seva",
    label: "Mandir Nirman Seva",
    description: "Build the temple, build your devotion",
    video: "https://cdn.pixabay.com/video/2025/08/21/298805_large.mp4",
    fallbackImage: "/assets/Sri-krishna-Janmashtami.jpg",
    tempImage: "/assets/mandir-nirman.jpg"
  }
];

export default function VideoHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [subSlideIndex, setSubSlideIndex] = useState(0); 
  const [isMuted, setIsMuted] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Auto-advance loop
  useEffect(() => {
    const currentSlide = SLIDES[activeSlide];
    const isSubSlideActive = currentSlide.subImages && currentSlide.subImages.length > 0;
    
    // If sub-images, 4s transition for better visibility.
    const intervalDuration = isSubSlideActive ? 4000 : 8000; 

    const timer = setInterval(() => {
        if (isSubSlideActive) {
            setSubSlideIndex(prev => {
                const nextSub = prev + 1;
                // If we've shown all images in this subsection, move to next main slide
                if (nextSub >= currentSlide.subImages!.length) {
                    // Move to next main slide
                    setActiveSlide((s) => (s + 1) % SLIDES.length);
                    // Reset sub index will be handled by the effect dependency on activeSlide or explicitly
                    return 0; 
                }
                return nextSub;
            });
        } else {
             nextSlide();
        }
    }, intervalDuration);

    return () => clearInterval(timer);
  }, [activeSlide, subSlideIndex]);

  const nextSlide = () => {
    setActiveSlide((prev) => {
        const next = (prev + 1) % SLIDES.length;
        setSubSlideIndex(0); // Reset sub-slide when manually changing main slide
        return next;
    });
  };

  const prevSlide = () => {
    setActiveSlide((prev) => {
        const next = (prev - 1 + SLIDES.length) % SLIDES.length;
        setSubSlideIndex(0);
        return next;
    });
  };
  
  const currentSlideStr = SLIDES[activeSlide];
  const displayImage = (currentSlideStr.subImages && currentSlideStr.subImages.length > 0)
    ? currentSlideStr.subImages[subSlideIndex]
    : currentSlideStr.tempImage;

  return (
    <div className="relative h-[55vh] md:h-screen w-full overflow-hidden bg-black font-sans">
      {/* Video Backgrounds */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeSlide}-${subSlideIndex}`} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Smooth crossfade ("disappear" transition)
          className="absolute inset-0 h-full w-full"
        >
          {/* TEMP VIDEO REPLACEMENT: Using Images */}
          <img 
            src={displayImage} 
            alt={currentSlideStr.label}
            className="h-full w-full object-cover"
          />
          
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Mute/Unmute Toggle - Positioned Bottom-Right above Nav */}
      <div className="absolute bottom-32 right-4 md:right-12 z-30 hidden md:flex flex-col items-center gap-4">
           <button 
            onClick={() => setIsMuted(!isMuted)}
            className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all backdrop-blur-md cursor-pointer border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.5)] group"
          >
            {isMuted ? (
                <VolumeX className="w-6 h-6 drop-shadow-md group-hover:scale-110 transition-transform" /> 
            ) : (
                <Volume2 className="w-6 h-6 drop-shadow-md group-hover:scale-110 transition-transform" />
            )}
          </button>
           {/* Connecting Line to Bottom */}
           <div className="h-12 w-px bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>

      {/* Safe Zone for Mute on Mobile */}
       <button 
            onClick={() => setIsMuted(!isMuted)}
            className="absolute top-24 right-4 z-30 md:hidden p-2 rounded-full bg-black/20 text-white backdrop-blur-sm shadow-lg"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
       </button>

      {/* Mobile: Expandable Floating Dock */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 md:hidden flex justify-center w-[95%]">
        <motion.div 
            layout
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
                "bg-black/10 backdrop-blur-md border border-white/10 rounded-full shadow-xl transition-all duration-300 overflow-hidden cursor-pointer relative",
                isMenuOpen ? "p-2 w-full max-w-[360px]" : "px-6 py-3 w-auto"
            )}
        >
            <AnimatePresence mode="wait">
                {/* Collapsed State: Current Label Only */}
                {!isMenuOpen ? (
                    <motion.div 
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3 justify-center"
                    >
                         {/* Icon of current slide */}
                        {(() => {
                            const Icon = [Landmark, BookOpen, Users, MapPin, HeartHandshake][activeSlide];
                            return <Icon size={16} className="text-[#FFD700]" />;
                        })()}
                        
                        <span className="text-xs font-bold uppercase tracking-widest text-white">
                            {SLIDES[activeSlide].label}
                        </span>

                        {/* Hint Indicator */}
                        <div className="w-1 h-1 bg-white/50 rounded-full ml-1 animate-pulse" />
                        <div className="w-1 h-1 bg-white/50 rounded-full animate-pulse delay-75" />
                        <div className="w-1 h-1 bg-white/50 rounded-full animate-pulse delay-150" />
                    </motion.div>
                ) : (
                    /* Expanded State: Full Menu */
                    <motion.div 
                        key="expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-between"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inner items (optional, but better UX to close on selection)
                    >
                         {/* Prev */}
                        <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="p-2 shrink-0 rounded-full hover:bg-white/10 text-white/80 active:scale-90 transition-transform"><ArrowLeft size={16} /></button>
                        
                        <div className="w-px h-5 bg-white/10 mx-0.5 shrink-0" />
                        
                        {/* Items */}
                        <div className="flex items-center gap-1 flex-1 justify-center px-1">
                            {SLIDES.map((slide, index) => {
                                const Icon = [Landmark, BookOpen, Users, MapPin, HeartHandshake][index];
                                const isActive = activeSlide === index;
                                return (
                                    <button
                                        key={slide.id}
                                        onClick={(e) => { 
                                            e.stopPropagation(); // Stop bubble
                                            setActiveSlide(index);
                                            setIsMenuOpen(false); // Close on select
                                        }}
                                        className={cn(
                                            "relative flex items-center justify-center p-2 rounded-full transition-all duration-300",
                                            isActive ? "bg-[#FFD700] text-black scale-110" : "text-white/60 hover:text-white"
                                        )}
                                    >
                                        <Icon size={18} />
                                    </button>
                                    )
                            })}
                        </div>

                        <div className="w-px h-5 bg-white/10 mx-0.5 shrink-0" />

                        {/* Next */}
                        <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="p-2 shrink-0 rounded-full hover:bg-white/10 text-white/80 active:scale-90 transition-transform"><ArrowRight size={16} /></button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
      </div>

      {/* Desktop Navigation (Restored Classic Horizontal Layout) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-12 bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-32 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            
            {/* Categories */}
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm tracking-widest uppercase font-medium text-white">
                {SLIDES.map((slide, index) => (
                    <div key={slide.id} className="flex items-center">
                        <button
                         onClick={() => setActiveSlide(index)}
                         className={cn(
                             "transition-all duration-300",
                             activeSlide === index 
                                ? "text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,1)] scale-105" 
                                : "text-white/80 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]"
                         )}
                        >
                            {slide.label}
                        </button>
                        {/* Vertical Separator */}
                        {index < SLIDES.length - 1 && (
                            <span className="w-px h-2.5 bg-white/30 ml-6" />
                        )}
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-8 mt-4">
                <button 
                  onClick={prevSlide}
                  className="group p-2 hover:bg-white/10 rounded-full transition-all"
                >
                    <ArrowLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="group p-2 hover:bg-white/10 rounded-full transition-all"
                >
                    <ArrowRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </button>
            </div>

          </div>
        </div>
      </div>
    
    </div>
  );
}
