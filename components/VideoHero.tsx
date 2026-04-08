"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, ArrowRight, ArrowLeft, Landmark, BookOpen, Users, MapPin, HeartHandshake, Plus, Minus, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// --- IMAGE ARRAYS ---
const TEMPLE_DARSHAN_IMAGES = [
  { src: "015A2364.JPG", title: "Divine Darshan" },
  { src: "015A2365.JPG", title: "Divine Darshan" },
  { src: "015A2366.JPG", title: "Divine Darshan" },
  { src: "015A2367.JPG", title: "Divine Darshan" },
  { src: "015A2371.JPG", title: "Divine Darshan" }
].map(img => ({ ...img, src: `/assets/video-hero/temple-darshan/${img.src}` }));

const COMMUNITY_EVENTS_IMAGES = [
  { src: "P1013346.png", title: "ICVK" },
  { src: "P1013579.JPG", title: "Community Chanting Session" },

  { src: "P1013604.JPG", title: "Spiritual Discussion" }
].map(img => ({ ...img, src: `/assets/video-hero/community-events/${img.src}` }));

const SPIRITUAL_PROGRAMS_IMAGES = [
  { src: "5 Sri Gaur Purnima.JPG", title: "Sri Gaura Purnima Festival" },
  { src: "6 Sri Ramanavami.JPG", title: "Sri Rama Navami" },
  { src: "8 Narasimha Jayanti.JPG", title: "Sri Narasimha Jayanti" },
  { src: "12 Sri Krishna Janmashtami.JPG", title: "Sri Krishna Janmashtami" },
  { src: "15 Deepotsavam.JPG", title: "Kartika Deepotsavam" }
].map(img => ({ ...img, src: `/assets/video-hero/spiritual-programs/${img.src}` }));

const DHAM_DARSHAN_YATRA_IMAGES = [
  { src: "prem-mandir-img.jpg", title: "Vrindavan Yatra" },
  { src: "haridwar-img.png", title: "Haridwar Yatra" },
  { src: "jagannath-puri-img.png", title: "Jagannath Puri Yatra" },
  { src: "rishikesh-img.png", title: "Rishikesh Yatra" }
].map(img => ({ ...img, src: `/assets/video-hero/dham-darshan-yatra/${img.src}` }));

const SLIDES = [
  {
    id: "temple-darshan",
    label: "Temple Darshan",
    description: "Experience the divine presence of the Lord",
    video: "https://cdn.pixabay.com/video/2024/02/10/200023-911915504_tiny.mp4",
    fallbackImage: "https://images.pexels.com/videos/34297334/free-video-34297334.jpg?auto=compress&cs=tinysrgb&fit=crop&h=720&w=1280",
    tempImage: "/assets/temple-darshan.jpg",
    subImages: TEMPLE_DARSHAN_IMAGES,
    tag: "Divine Glimpses"
  },
  {
    id: "spiritual-programs",
    label: "Spiritual Programs",
    description: "Enrich your soul with vedic wisdom",
    video: "https://cdn.pixabay.com/video/2023/03/14/154625-808146415_tiny.mp4",
    fallbackImage: "/assets/activities/activities-pic.JPG",
    tempImage: "/assets/spiritual-programs.jpg",
    subImages: SPIRITUAL_PROGRAMS_IMAGES,
    tag: "Festival Highlights"
  },
  {
    id: "community-events",
    label: "Community Events",
    description: "Join our vibrant spiritual community",
    video: "https://cdn.pixabay.com/video/2023/01/26/148094-793525258_tiny.mp4",
    fallbackImage: "/assets/hkm-about-community.jpg",
    tempImage: "/assets/hkm-about-community.jpg",
    subImages: COMMUNITY_EVENTS_IMAGES,
    tag: "Community Events"
  },
  {
    id: "Dham Darshan Yatra",
    label: "Dham Darshan Yatra",
    description: "Journey to the holy abodes",
    video: "https://cdn.pixabay.com/video/2022/03/22/111647-691223157_large.mp4",
    fallbackImage: "/assets/cultutral-festival.JPG",
    tempImage: "/assets/chardham_yatra_scenic.png",
    subImages: DHAM_DARSHAN_YATRA_IMAGES,
    tag: "Pilgrimage Abodes"
  },
  {
    id: "Mandir Nirman Seva",
    label: "Mandir Nirman Seva",
    description: "Dakshina Dwaraka Dham construction progress till now .",
    video: "https://cdn.pixabay.com/video/2025/08/21/298805_large.mp4",
    fallbackImage: "/assets/Sri-krishna-Janmashtami.jpg",
    tempImage: "/assets/mandir-nirman.jpg",
    tag: "Temple Project"
  }
];

export default function VideoHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [subSlideIndex, setSubSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(1.0); // Default full volume
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [heroIsVisible, setHeroIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for visibility-based priority playback
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Sync volume state with audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Handle Play/Pause and Autoplay Policies
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Explicitly force load if we're playing
    if (isPlaying) {
      // Modern technique: setting currentTime = 0 or just calling load() signals priority
      if (audio.readyState < 3) {
        audio.load();
      }

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay blocked by browser. Wait for user interaction.
          const handleInteraction = () => {
            audio.play().catch(() => { });
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
          };
          document.addEventListener('click', handleInteraction, { once: true });
          document.addEventListener('touchstart', handleInteraction, { once: true });
        });
      }
    } else {
      audio.pause();
    }

  }, [isPlaying, heroIsVisible]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    setSubSlideIndex(0);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setSubSlideIndex(0);
  };

  // Auto-advance loop: Consistently advances either sub-slides or main slides.
  useEffect(() => {
    const currentSlide = SLIDES[activeSlide];
    const isSubSlideActive = currentSlide.subImages && currentSlide.subImages.length > 0;
    
    // Duration: 4s per sub-slide, 8s for main-only slides
    const duration = isSubSlideActive ? 4000 : 8000;

    const timer = setTimeout(() => {
      if (isSubSlideActive) {
        if (subSlideIndex + 1 >= (currentSlide.subImages?.length || 0)) {
          // End of sub-slides, go to next main slide
          nextSlide();
        } else {
          // Increment sub-slide
          setSubSlideIndex(prev => prev + 1);
        }
      } else {
        // Simple slide, just go next
        nextSlide();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [activeSlide, subSlideIndex]);

  const currentSlideData = SLIDES[activeSlide];
  const activeSubImage = (currentSlideData.subImages && currentSlideData.subImages.length > 0)
    ? currentSlideData.subImages[subSlideIndex]
    : null;

  const displayImagePath = (activeSubImage as any)?.src || currentSlideData.tempImage;
  const displayImageTitle = (activeSubImage as any)?.title || currentSlideData.label;

  return (
    <div ref={heroRef} className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-black font-sans">
      {/* Video Backgrounds */}
      <AnimatePresence mode="wait">
        <motion.div
          key={displayImagePath}
          className="absolute inset-0 h-full w-full"
          initial={{ opacity: 0, scale: 1.0 }}
          animate={{ opacity: 1, scale: 1.15 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: 8, ease: "linear" }
          }}
        >
          {/* TEMP VIDEO REPLACEMENT: Using Images */}
          <img
            src={displayImagePath}
            alt={displayImageTitle}
            className={cn(
              "h-full w-full object-cover transition-all duration-1000",
              displayImageTitle.toLowerCase().includes("ramanavami") && "object-[center_25%]"
            )}
          />

          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Dynamic Title Overlay - Refined Temple Pulse Style */}
      <div className="absolute left-6 md:left-12 bottom-32 md:bottom-48 z-20 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={displayImageTitle}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 px-4 py-3 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10"
          >
            {/* Icon Container matching screenshot style */}
            <div className="p-2.5 bg-[#FFB81C]/20 rounded-full border border-[#FFB81C]/40">
              {(() => {
                const Icon = [Landmark, BookOpen, Users, MapPin, HeartHandshake][activeSlide] || Sparkles;
                return <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#FFB81C]" />;
              })()}
            </div>
            
            <div className="flex flex-col">
              <p className="text-[#FFB81C] text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mb-0.5">
                {(currentSlideData as any).tag || "Highlights"}
              </p>
              <div className="flex flex-col">
                <h4 className="text-white text-base md:text-xl font-bold uppercase tracking-wider drop-shadow-md">
                  {displayImageTitle}
                </h4>
                {/* Specific descriptions (like for Mandir Nirman) are shown subtly */}
                {currentSlideData.id === "Mandir Nirman Seva" && (
                   <p className="text-white/60 text-[10px] md:text-xs italic mt-0.5 max-w-[200px]">
                     {currentSlideData.description}
                   </p>
                )}
              </div>
            </div>

            {/* Elegant Rama Navami Badge */}
            {displayImageTitle.toLowerCase().includes("rama") && (
              <div className="flex items-center gap-2 ml-4 pl-4 border-l border-white/20">
                <div className="relative flex h-2 w-2">
                  <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></div>
                  <div className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></div>
                </div>
                <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Upcoming</span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hidden Audio Element - Aggressive Preload */}
      <audio
        ref={audioRef}
        src="/assets/hare_krishna_audio.webm"
        loop
        playsInline
        preload="auto"
        className="hidden"
      />

      {/* Mute/Unmute & Volume Controls - Positioned Bottom-Right above Nav */}
      <div className="absolute bottom-32 right-4 md:right-12 z-30 hidden md:flex flex-col items-center gap-4">
        <div className="bg-black/30 backdrop-blur-md rounded-full border border-white/20 p-2 shadow-xl flex flex-col items-center gap-3">
          <button
            onClick={() => setVolume(Math.min(1, volume + 0.1))}
            className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all cursor-pointer disabled:opacity-30 disabled:hover:bg-transparent"
            disabled={volume >= 1}
          >
            <Plus className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              if (volume === 0 && !isPlaying) setVolume(0.5); // restore some volume before unmuting
              setIsPlaying(!isPlaying);
            }}
            className={`p-3 rounded-full transition-all cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)] group ${isPlaying ? 'bg-[#FFD700] text-black shadow-[0_0_20px_rgba(255,215,0,0.4)]' : 'bg-white/20 text-white hover:bg-white/30'}`}
          >
            {!isPlaying || volume === 0 ? (
              <VolumeX className="w-6 h-6 drop-shadow-md group-hover:scale-110 transition-transform" />
            ) : (
              <Volume2 className="w-6 h-6 drop-shadow-md group-hover:scale-110 transition-transform" />
            )}
          </button>

          <button
            onClick={() => setVolume(Math.max(0, volume - 0.1))}
            className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all cursor-pointer disabled:opacity-30 disabled:hover:bg-transparent"
            disabled={volume === 0}
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>

        {/* Connecting Line to Bottom */}
        <div className="h-12 w-px bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>

      {/* Mobile Mute/Volume Controls */}
      <div className="absolute bottom-28 right-4 z-30 md:hidden flex flex-col gap-2 items-end">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`p-2.5 rounded-full shadow-lg backdrop-blur-md ${isPlaying ? 'bg-[#FFD700] text-black' : 'bg-black/40 border border-white/20 text-white'}`}
        >
          {!isPlaying || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
        {isPlaying && (
          <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-full flex flex-col items-center py-1 mt-2 animate-in fade-in slide-in-from-top-2">
            <button onClick={() => setVolume(Math.min(1, volume + 0.1))} disabled={volume >= 1} className="p-2 text-white/80 hover:text-white disabled:opacity-30"><Plus size={14} /></button>
            <button onClick={() => setVolume(Math.max(0, volume - 0.1))} disabled={volume === 0} className="p-2 text-white/80 hover:text-white disabled:opacity-30"><Minus size={14} /></button>
          </div>
        )}
      </div>

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
                        ? "text-[#FFD700] font-bold drop-shadow-[0_0_8px_rgba(255,215,0,0.8)] scale-105"
                        : "text-white/80 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]"
                    )}
                  >
                    {slide.label}
                  </button>
                  {/* Vertical Separator */}
                  {index < SLIDES.length - 1 && (
                    <span className="w-[3px] h-5 bg-[#FFD700] ml-6 rounded-[1px]" />
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
