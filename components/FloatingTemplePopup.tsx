"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Youtube, Heart, X } from "lucide-react";

export default function FloatingTemplePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent background scrolling when modal is open using a robust fixed-body lockdown
  useEffect(() => {
    if (isOpen) {
      // Record current scroll position and strictly lock the body
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflowY = 'scroll'; // Prevent layout shift from scrollbar disappearing
    } else {
      // Restore scroll
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [isOpen]);

  if (!isMounted) return null;

  return (
    <>
      {/* Floating Trigger Button */}
      <div 
        className="fixed bottom-40 left-4 sm:bottom-44 sm:left-6 md:bottom-10 md:left-10 z-[90] flex items-center cursor-pointer group/container"
        onClick={() => setIsOpen(true)}
      >
        {/* Tooltip / Label */}
        <div 
          className="absolute left-full -ml-6 md:-ml-8 top-1/2 -translate-y-1/2 flex w-max min-w-[210px] sm:min-w-[250px] max-w-[calc(100vw-6rem)] items-center overflow-hidden rounded-full border border-[#FFD700]/30 bg-black/80 pl-10 pr-6 py-1.5 shadow-lg backdrop-blur-md transition-all duration-300 opacity-0 pointer-events-none group-hover/container:opacity-100 group-hover/container:pointer-events-auto group-hover/container:border-[#FFD700]/60 sm:pl-12 sm:pr-7 sm:py-2 -z-10"
        >
          <span className="text-[#FFD700] font-bold text-[11px] sm:text-sm tracking-wide uppercase whitespace-nowrap">
            Temple Info & Timings
          </span>
        </div>

        {/* Floating Button */}
        <motion.button
          animate={{
            y: [0, -8, 0],
            boxShadow: [
              "0 0 15px rgba(255, 215, 0, 0.4)",
              "0 0 30px rgba(255, 215, 0, 0.8)",
              "0 0 15px rgba(255, 215, 0, 0.4)",
            ],
          }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative group rounded-full transition-transform hover:scale-105"
          aria-label="Open temple information and timings"
        >
          <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden">
            <Image
              src="/assets/temple-timings-icon.png"
              alt="Temple Info & Timings"
              fill
              className="object-cover rounded-full scale-[1.9] drop-shadow-[0_0_10px_rgba(255,215,0,0.45)]"
            />
          </div>
        </motion.button>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              style={{ overscrollBehavior: 'none', touchAction: 'none' }}
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-7xl max-h-[95vh] md:h-[90vh] bg-white rounded-[2rem] shadow-2xl flex flex-col md:flex-row shadow-[0_0_50px_rgba(255,215,0,0.15)] border-2 border-[#FFD700]/30 overflow-y-auto md:overflow-hidden"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-50 bg-white/80 hover:bg-[#800000] hover:text-white p-2.5 rounded-full shadow-md backdrop-blur-sm transition-colors text-gray-700 md:text-gray-500 border border-gray-200"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Logos Only */}
              <div className="w-full md:w-2/5 relative min-h-[300px] md:min-h-full bg-gradient-to-b from-[#0A0505] to-[#2D0A0A] flex flex-col items-center justify-center shrink-0 border-r border-[#FFD700]/20">
                {/* Subtle Spiritual Background Pattern */}
                <div className="absolute inset-0 opacity-[0.05] bg-[url('/assets/temple-pattern.webp')] bg-repeat pointer-events-none"></div>

                {/* Logos centered perfectly */}
                {/* Logos centered perfectly */}
                <div className="relative z-10 w-full h-full p-2 md:p-4 flex flex-col items-center justify-center text-center pb-12 md:pb-4 overflow-visible">
                  <div className="bg-white/95 p-4 rounded-3xl shadow-2xl mb-4 border border-white/20 z-20">
                    <Image
                      src="/assets/iskcon_chennai_logo.png"
                      alt="ISKCON Chennai Logo"
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                  <div className="relative w-[95%] max-w-[420px] flex-grow min-h-[200px] md:min-h-[320px]">
                    <Image
                      src="/assets/dakshina-dwaraka-dham.webp"
                      alt="Dakshina Dwaraka Dham Logo"
                      fill
                      className="object-contain scale-105 transform drop-shadow-[0_0_20px_rgba(255,215,0,0.6)]"
                      onError={(e) => {
                         const target = e.target as HTMLImageElement;
                         target.src = '/assets/dakshina-dwaraka-dham.png';
                      }}
                    />
                  </div>
                </div>

              </div>

              {/* Right Column: Content */}
              <div className="w-full md:w-3/5 p-6 md:p-10 lg:p-12 md:overflow-y-auto bg-stone-50 flex flex-col justify-between shrink-0 relative">
                
                {/* Spiritual Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('/assets/temple-pattern.webp')] bg-repeat pointer-events-none"></div>
                
                {/* Spiritual Flourish (Top Right) */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none">
                  <Image
                    src="/assets/golden_lotus_flourish.webp"
                    alt="Spiritual Flourish"
                    fill
                    className="object-contain mix-blend-multiply"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 md:mb-8 relative">
                    <p className="text-xs lg:text-sm text-[#D4AF37] font-bold uppercase tracking-wider mb-2">
                      Tallest temple in Chennai
                    </p>
                    <h2 className="text-2xl lg:text-3xl font-black text-[#800000] font-serif leading-tight">
                      Welcome to Srila Prabhupada’s ISKCON Chennai<br/>
                      <span className="text-gray-900">Dakshina Dwaraka Dham</span>
                    </h2>
                  </div>

                  <div className="space-y-4 text-sm lg:text-[15px] text-gray-700 leading-relaxed font-medium">
                    <p>
                      <strong className="text-gray-900 font-bold">Dakshina Dwaraka Dham — ISKCON Thiruvanmiyur, Chennai</strong> is a magnificent spiritual and cultural complex situated on the scenic seashore of Thiruvanmiyur, beside the Bay of Bengal.
                    </p>
                    <p>
                      Affiliated with the Hare Krishna Movement Chennai — a Non-Profit Charitable Organisation registered in 2008: Regn. No. 828 (affiliated to ISKCON Bangalore Regn. S-49/78-79) — this temple stands as a divine initiative to preserve and promote India’s eternal spiritual heritage.
                    </p>
                    <p>
                      Inspired by the sacred coastal city of Dwaraka — Lord Krishna’s own divine kingdom — the temple is envisioned as a southern spiritual counterpart to that holy abode. Designed in the timeless tradition of Pallava-style architecture, this grand temple, currently under construction, is set to become the tallest temple in Chennai and the second Shore Temple of Tamil Nadu.
                    </p>
                    <p>
                      With daily Artis, Kirtans, Bhagavad Gita classes, Japa meditation sessions, vibrant cultural programs, and the distribution of free donna prasadam, the temple welcomes thousands of devotees and visitors every week into an atmosphere of transcendental peace, devotion, and joy.
                    </p>
                    <div className="pt-2">
                       <Link 
                          href="/dakshina-dwaraka" 
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-2 text-[#800000] font-bold hover:text-[#DC2626] transition-colors group uppercase tracking-widest text-[11px]"
                        >
                          Find more about us
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                       </Link>
                    </div>
                  </div>
                </div>

                {/* Detailed Temple Schedule */}
                <div className="mt-8 pt-6 md:pt-8 border-t border-[#FFD700]/30 relative z-10 pb-2">
                  <h3 className="text-xl md:text-2xl font-black text-[#800000] mb-6 drop-shadow-sm">
                    Detailed Temple Schedule
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {[
                      { time: "4:30 AM", event: "Mangala Arati" },
                      { time: "5:00 AM", event: "Mantra Meditation" },
                      { time: "7:15 AM", event: "Shringara Arati" },
                      { time: "7:30 AM", event: "Guru Puja" },
                      { time: "8:00 AM", event: "Bhagavatam Class" },
                      { time: "12:25 PM", event: "Rajbhoga Arati" },
                      { time: "4:15 PM", event: "Dhupa Arati (Darshan opens)" },
                      { time: "7:00 PM", event: "Sandhya Arati" },
                      { time: "7:30 PM", event: "Bhagavad-Gita discourse" },
                      { time: "8:00 PM - 8:15 PM", event: "Shayana Arati – Darshan Closes" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center p-3 md:p-4 rounded-xl bg-white shadow-sm border border-[#b8860b]/20 hover:border-[#b8860b]/40 hover:shadow-md transition-all group">
                        <span className="font-extrabold text-[#b8860b] w-[85px] md:w-[120px] shrink-0 text-[12px] md:text-[15px] group-hover:scale-[1.02] transition-transform text-right md:text-left">
                          {item.time}
                        </span>
                        <div className="w-[1px] h-6 md:h-8 bg-[#b8860b]/30 mx-3 md:mx-4 shrink-0"></div>
                        <span className="font-bold text-slate-700 text-[13px] md:text-[15px] leading-tight flex-grow">
                          {item.event}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Info & Action Grid */}
                <div className="mt-8 pt-6 md:pt-8 border-t border-[#FFD700]/30 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 relative z-10">
                  
                  {/* Temple Schedule */}
                  <div className="flex items-start gap-4 md:gap-5 p-5 md:p-6 rounded-2xl bg-white shadow-sm border border-[#FFD700]/20 hover:shadow-lg hover:border-[#FFD700]/50 transition-all">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFAF38] text-[#800000] flex items-center justify-center shrink-0 shadow-sm">
                      <Clock className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 text-base md:text-lg mb-2">Temple Opening Times</h4>
                      <div className="text-sm md:text-[15px] text-gray-600 leading-relaxed font-mono font-bold tracking-tight">
                        4:30 AM – 4:55 AM<br/>
                        7:15 AM – 1:00 PM<br/>
                        4:15 PM – 8:15 PM
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4 md:gap-5 p-5 md:p-6 rounded-2xl bg-white shadow-sm border border-[#FFD700]/20 hover:shadow-lg hover:border-[#FFD700]/50 transition-all">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                      <MapPin className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 text-base md:text-lg mb-1">Temple Location</h4>
                      <Link 
                        href="https://maps.google.com/?q=ISKCON+Thiruvanmiyur+Chennai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm md:text-[15px] text-blue-600 font-bold hover:text-blue-800 hover:underline transition-colors mt-1 inline-block"
                      >
                        View on Google Maps
                      </Link>
                    </div>
                  </div>

                  {/* Live Darshan */}
                  <div className="flex items-start gap-4 md:gap-5 p-5 md:p-6 rounded-2xl bg-white shadow-sm border border-[#FFD700]/20 hover:shadow-lg hover:border-[#FFD700]/50 transition-all">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100 shadow-sm">
                      <Youtube className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 text-base md:text-lg mb-1.5">Daily Live Darshan</h4>
                      <p className="text-sm md:text-[15px] text-gray-600 mb-2 font-mono font-bold tracking-tight">4:30 AM – 8:00 AM</p>
                      <Link 
                        href="https://www.youtube.com/@hkmchennai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm md:text-[15px] text-red-600 font-black hover:text-red-700 hover:underline inline-block transition-colors"
                      >
                        Watch on YouTube
                      </Link>
                    </div>
                  </div>

                  {/* Donate */}
                  <Link 
                    href="/donate"
                    onClick={() => setIsOpen(false)}
                    className="flex items-start gap-4 md:gap-5 p-5 md:p-6 rounded-2xl bg-gradient-to-r from-[#800000] to-[#b30000] shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group border border-red-900/20"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                      <Heart className="w-6 h-6 md:w-7 md:h-7 fill-white drop-shadow-md" />
                    </div>
                    <div>
                      <h4 className="font-black text-white text-lg md:text-xl mb-1 drop-shadow-sm">Donate Now</h4>
                      <p className="text-sm md:text-[15px] text-white/90 font-medium">
                        Support our divine initiatives
                      </p>
                    </div>
                  </Link>

                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
