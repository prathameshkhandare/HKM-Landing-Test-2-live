"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Youtube, Heart, Calendar, X } from "lucide-react";
import { useEffect, useState } from "react";

type UpcomingFestival = {
  id?: string;
  name: string;
  poster: string;
  date?: string | null;
  slug?: string | null;
};

const FALLBACK_UPCOMING_FESTIVALS: UpcomingFestival[] = [
  { name: "Sri Krishna Janmashtami", poster: "/assets/Sri-krishna-Janmashtami.webp" },
  { name: "Govardhan Puja", poster: "/assets/Govardhna-puja.webp" },
  { name: "Narasimha Jayanti", poster: "/assets/Narasimha_Jayanti.webp" },
  { name: "Vyasa Puja", poster: "/assets/VyasaPuja2019-16.webp" },
  { name: "Balarama Jayanthi", poster: "/assets/BalaramaJayanthi19-39.webp" },
];

export default function TempleInfoSection() {
  const [isFestivalModalOpen, setIsFestivalModalOpen] = useState(false);
  const [selectedFestivalPoster, setSelectedFestivalPoster] = useState<UpcomingFestival | null>(null);
  const [upcomingFestivals, setUpcomingFestivals] = useState<UpcomingFestival[]>(FALLBACK_UPCOMING_FESTIVALS);
  const [festivalsLoading, setFestivalsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const loadUpcomingFestivals = async () => {
      try {
        const response = await fetch("/api/festivals/upcoming", {
          method: "GET",
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload: { festivals?: unknown } = await response.json();
        if (!Array.isArray(payload.festivals)) {
          return;
        }

        const mappedFestivals = payload.festivals
          .map((festival): UpcomingFestival | null => {
            if (!festival || typeof festival !== "object") return null;
            const source = festival as Record<string, unknown>;

            const name = typeof source.name === "string" ? source.name.trim() : "";
            const poster = typeof source.poster === "string" ? source.poster.trim() : "";
            if (!name || !poster) return null;

            const id = typeof source.id === "string" ? source.id : undefined;
            const date = typeof source.date === "string" ? source.date : null;
            const slug = typeof source.slug === "string" ? source.slug : null;

            return { id, name, poster, date, slug };
          })
          .filter((festival): festival is UpcomingFestival => festival !== null);

        if (mappedFestivals.length > 0) {
          setUpcomingFestivals(mappedFestivals);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Unable to fetch upcoming festivals:", error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setFestivalsLoading(false);
        }
      }
    };

    loadUpcomingFestivals();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!isFestivalModalOpen) {
      setSelectedFestivalPoster(null);
      return;
    }

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflowY = "scroll";

    return () => {
      const lockedScrollY = document.body.style.top;

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";

      if (lockedScrollY) {
        window.scrollTo(0, Number.parseInt(lockedScrollY, 10) * -1);
      }
    };
  }, [isFestivalModalOpen]);

  return (
    <section className="relative w-full py-24 overflow-hidden bg-[#FFFBF0] selection:bg-[#D4AF37] selection:text-[#2D0A0A] font-sans">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/assets/temple-pattern.webp')] bg-repeat pointer-events-none"></div>
      <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-[#D4AF37] rounded-full blur-[150px] opacity-[0.15] pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-[#800000] rounded-full blur-[200px] opacity-[0.1] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Top Header / Welcome Row */}
        <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          
          {/* Floating side badges like the reference screenshot */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex absolute -left-4 top-0 sm:-left-10 sm:top-8 md:-left-48 lg:-left-56 md:top-14 flex-col items-center gap-3"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-white shadow-[0_20px_60px_rgba(0,0,0,0.14)] border border-[#D4AF37]/35 overflow-hidden">
              <Image
                src="/assets/sp_logo.png"
                alt="Srila Prabhupada"
                width={256}
                height={256}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex absolute -right-4 top-0 sm:-right-10 sm:top-8 md:-right-48 lg:-right-56 md:top-14 flex-col items-center gap-3"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-white shadow-[0_20px_60px_rgba(0,0,0,0.14)] border border-[#D4AF37]/35 overflow-hidden flex items-center justify-center">
              <Image
                src="/assets/iskcon_chennai_logo.png"
                alt="ISKCON Chennai Logo"
                width={256}
                height={256}
                className="object-contain w-[80%] h-[80%]"
                priority
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center mb-10 w-full"
          >
            {/* Center marker only; side logos now live outside */}
            <div className="flex flex-col items-center gap-2 text-center min-w-[140px]">
              <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#D4AF37]/45 bg-[#FFF7D8]/70 shadow-[0_4px_14px_rgba(212,175,55,0.25)]">
                <span
                  aria-hidden="true"
                  className="text-[#B8860B] text-base md:text-xl leading-none drop-shadow-[0_2px_6px_rgba(212,175,55,0.45)]"
                >
                  {"\u0950"}
                </span>
              </div>
              <span className="text-xs md:text-sm lg:text-base text-[#B8860B] font-bold uppercase tracking-widest leading-tight">
                Tallest temple <br className="hidden sm:block md:hidden"/> in Chennai
              </span>
              <div className="flex items-center gap-2 w-full max-w-[220px] px-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-[#D4AF37]/20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/80"></div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#D4AF37]/70 to-[#D4AF37]/20"></div>
              </div>
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#8E1616] font-serif leading-tight mb-4 drop-shadow-[2px_4px_0px_rgba(0,0,0,0.05)]"
          >
            <span className="block">Welcome to</span>
            <span className="block">Srila Prabhupada&apos;s</span>
            <span className="block">ISKCON Chennai</span>
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#C09628] to-[#D4AF37] bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent block mt-3 text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-[0_10px_10px_rgba(212,175,55,0.2)]">
              Dakshina Dwaraka Dham
            </span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-gray-700 leading-relaxed font-medium mt-8 space-y-6 max-w-5xl text-center md:text-left mx-auto md:mx-0"
          >
            <p>
              <strong className="text-[#8E1616]">Dakshina Dwaraka Dham - ISKCON Thiruvanmiyur, Chennai</strong> is a magnificent spiritual and cultural complex situated on the scenic seashore of Thiruvanmiyur, beside the Bay of Bengal.
            </p>
            <p>
              Affiliated with the Hare Krishna Movement Chennai - a Non-Profit Charitable Organisation registered in 2008: Regn. No. 828 (affiliated to ISKCON Bangalore Regn. S-49/78-79) - this temple stands as a divine initiative to preserve and promote India's eternal spiritual heritage.
            </p>
            <p>
              Inspired by the sacred coastal city of Dwaraka - Lord Krishna's own divine kingdom - the temple is envisioned as a southern spiritual counterpart to that holy abode. Designed in the timeless tradition of Pallava-style architecture, this grand temple, currently under construction, is set to become the tallest temple in Chennai and the second Shore Temple of Tamil Nadu.
            </p>
            <p>
              With daily Artis, Kirtans, Bhagavad Gita classes, Japa meditation sessions, vibrant cultural programs, and the distribution of free donna prasadam, the temple welcomes thousands of devotees and visitors every week into an atmosphere of transcendental peace, devotion, and joy.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-min">
          
          {/* Main Visual Card - The Temple Render (Span 5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#1B0A0A] via-[#3A0C0C] to-[#1B0A0A] group shadow-2xl border border-[#D4AF37]/30 min-h-[400px] flex items-center justify-center p-8"
          >
            {/* Starburst bg */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(212,175,55,0.2)_0%,_transparent_70%)] opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>
            
            {/* Spinning decorative ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute w-[600px] h-[600px] rounded-full border border-[#D4AF37]/15 border-dashed"
            />
            
            <Image
              src="/assets/dakshina-dwaraka-dham.webp"
              alt="Dakshina Dwaraka Dham"
              fill
              className="object-contain p-8 drop-shadow-[0_20px_40px_rgba(212,175,55,0.5)] transform group-hover:scale-105 transition-transform duration-1000 relative z-10"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/assets/dakshina-dwaraka-dham.png';
              }}
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-max">
                <Link 
                  href="/dakshina-dwaraka" 
                  className="bg-white/10 backdrop-blur-md border border-[#D4AF37]/50 text-[#D4AF37] px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#D4AF37] hover:text-[#2D0A0A] transition-colors cursor-pointer"
                >
                  Discover the Dham
                </Link>
            </div>
          </motion.div>

          {/* Schedule Card (Span 7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 bg-[#FFFDF8] rounded-[2.5rem] p-8 lg:p-12 shadow-[0_15px_40px_rgba(142,22,22,0.08)] relative overflow-hidden group"
          >
            {/* Elegant Double Inner Border Effect */}
            <div className="absolute inset-2 border-[1px] border-[#D4AF37]/20 rounded-[2.2rem] pointer-events-none"></div>
            <div className="absolute inset-3 border-[1px] border-[#D4AF37]/10 rounded-[2rem] pointer-events-none"></div>

            {/* Subtle Mandala / Lotus Watermark in Background */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[url('/assets/golden_lotus_flourish.webp')] bg-contain bg-no-repeat bg-center opacity-[0.03] mix-blend-multiply pointer-events-none translate-x-1/4 -translate-y-1/4 transform group-hover:scale-105 transition-transform duration-1000"></div>

            <h3 className="text-2xl md:text-[2rem] font-bold text-[#8E1616] mb-10 font-serif flex items-center gap-4 relative z-10 tracking-tight">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFF5D1] to-[#FFE8A1] flex items-center justify-center shrink-0 shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
                <Clock className="w-6 h-6 text-[#8B6508]" strokeWidth={2.5} />
              </div>
              Detailed Temple Schedule
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 relative z-10 px-2 lg:px-4">
              {[
                { time: "4:30 AM", event: "Mangala Arati" },
                { time: "5:00 AM", event: "Mantra Meditation" },
                { time: "7:15 AM", event: "Shringara Arati" },
                { time: "7:30 AM", event: "Guru Puja" },
                { time: "8:00 AM", event: "Bhagavatam Class" },
                { time: "12:25 PM", event: "Rajbhoga Arati" },
                { time: "4:15 PM", event: "Dhupa Arati Opens" },
                { time: "7:00 PM", event: "Sandhya Arati" },
                { time: "7:30 PM", event: "Bhagavad-Gita" },
                { time: "8:15 PM", event: "Darshan Closes" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 hover:-translate-y-0.5 transition-transform group/item cursor-default">
                  <span className="font-black text-[#C69C31] w-[85px] shrink-0 text-[15px] text-right tracking-tight drop-shadow-sm group-hover/item:text-[#B8860B] transition-colors">
                    {item.time}
                  </span>
                  {/* Subtle decorative dot/sparkle */}
                  <div className="relative flex items-center justify-center w-3 h-3 shrink-0">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 group-hover/item:bg-[#D4AF37] transition-colors"></div>
                     <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-sm opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="font-bold text-[#2A3439] text-[15px] group-hover/item:text-[#8E1616] transition-colors truncate">
                    {item.event}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Location & Maps (Span 3 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3 bg-white rounded-3xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#D4AF37]/15 flex flex-col items-center text-center justify-center group hover:border-[#D4AF37]/40 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3 border border-blue-50 group-hover:scale-105 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-gray-900 text-base mb-1 font-serif">Temple Location</h4>
            <p className="text-[10px] text-gray-500 mb-3 px-2 leading-tight">Serene seashore of Thiruvanmiyur.</p>
            <Link 
              href="https://maps.google.com/?q=ISKCON+Thiruvanmiyur+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold text-blue-600 hover:text-blue-800 underline underline-offset-4 cursor-pointer"
            >
              Open Maps
            </Link>
          </motion.div>

          {/* Live Darshan (Span 3 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-3 bg-white rounded-3xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#D4AF37]/15 flex flex-col items-center text-center justify-center group hover:border-[#D4AF37]/40 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-3 border border-red-50 group-hover:scale-105 transition-transform animate-pulse-slow">
              <Youtube className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-gray-900 text-base mb-1 font-serif">Live Darshan</h4>
            <div className="bg-[#FFFBF0] px-3 py-1 rounded-full border border-[#D4AF37]/20 mb-3 inline-block">
              <span className="text-[9px] text-[#B8860B] font-bold font-mono">4:30 AM – 8:00 AM</span>
            </div>
            <Link 
              href="https://www.youtube.com/@hkmchennai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold text-red-600 hover:text-red-800 underline underline-offset-4 cursor-pointer"
            >
              Watch Online
            </Link>
          </motion.div>

          {/* Upcoming Festivals (Span 3 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="md:col-span-3 bg-white rounded-3xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#D4AF37]/15 flex flex-col items-center text-center justify-center group hover:border-[#D4AF37]/40 transition-colors cursor-pointer"
            onClick={() => setIsFestivalModalOpen(true)}
          >
            <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-3 border border-orange-50 group-hover:scale-105 transition-transform">
              <Calendar className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-gray-900 text-base mb-1 font-serif">Upcoming Festivals</h4>
            {!festivalsLoading && upcomingFestivals.length > 0 && (
              <div className="mb-3 flex items-center justify-center -space-x-2">
                {upcomingFestivals.slice(0, 4).map((festival, idx) => (
                  <div
                    key={festival.id ?? `${festival.name}-thumb-${idx}`}
                    className="w-10 h-10 rounded-full border-2 border-white bg-[#FFF7E8] overflow-hidden shadow-sm"
                  >
                    <img
                      src={festival.poster}
                      alt={festival.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
            <p className="text-[10px] text-gray-500 mb-3 px-2 leading-tight">
              {festivalsLoading
                ? "Loading festival updates..."
                : upcomingFestivals.length > 0
                  ? `${upcomingFestivals.length} festival${upcomingFestivals.length > 1 ? "s" : ""} listed.`
                  : "Join our divine celebrations."}
            </p>
            <span className="text-[10px] font-bold text-orange-600 hover:text-orange-800 underline underline-offset-4">
              View Posters
            </span>
          </motion.div>

          {/* Donate Card (Span 3 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="md:col-span-3 rounded-3xl p-5 shadow-lg bg-gradient-to-br from-[#800000] to-[#8E1616] border border-[#D4AF37]/25 flex flex-col items-center text-center justify-center group hover:shadow-2xl transition-all relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/assets/temple-pattern.webp')] bg-repeat opacity-[0.05] mix-blend-overlay"></div>
            <div className="w-12 h-12 rounded-full bg-white/10 text-white backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-105 group-hover:bg-[#D4AF37] group-hover:text-[#8E1616] transition-all relative z-10">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-white text-base mb-1 font-serif relative z-10 tracking-tight">Support Us</h4>
            <p className="text-[9px] text-white/80 mb-4 relative z-10 leading-tight">Contribute towards temple construction.</p>
            <Link 
              href="/donate"
              className="relative z-10 bg-white text-[#800000] px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#2D0A0A] transition-colors cursor-pointer"
            >
              Donate Now
            </Link>
          </motion.div>

        </div>

        {/* Find More About Us - Button Style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-col items-center gap-6">
             <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></div>
             <Link 
              href="/about-hkm" 
              className="inline-flex items-center gap-3 bg-[#8E1616] text-white px-8 py-3 rounded-full font-bold hover:bg-[#D4AF37] hover:text-[#1B0A0A] transition-all group uppercase tracking-[0.2em] text-xs md:text-sm shadow-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] cursor-pointer"
            >
              Find more about us
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </Link>
          </div>
        </motion.div>

      </div>

      {/* Festival Posters Modal */}
      <AnimatePresence>
        {isFestivalModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-start justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto pt-24 pb-12"
            onClick={() => setIsFestivalModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-[#FFFBF0] rounded-[2.5rem] p-8 md:p-12 max-w-5xl w-full shadow-2xl border border-[#D4AF37]/30"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsFestivalModalOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#8E1616] text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1B0A0A] transition-all duration-300 shadow-lg z-[210] hover:scale-110 active:scale-95"
                title="Close Modal"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-3xl md:text-4xl font-extrabold text-[#8E1616] mb-10 font-serif text-center drop-shadow-sm">
                Divine Celebrations & <br className="sm:hidden" /> Upcoming Festivals
              </h3>
              <p className="text-center text-xs text-[#8E1616]/75 -mt-6 mb-8">
                Click any poster to view in full size.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {festivalsLoading && (
                  <div className="col-span-full py-12 text-center text-[#8E1616] font-medium">
                    Loading upcoming festivals...
                  </div>
                )}
                {!festivalsLoading && upcomingFestivals.length === 0 && (
                  <div className="col-span-full py-12 text-center text-[#8E1616] font-medium">
                    Upcoming festivals will be announced soon.
                  </div>
                )}
                {!festivalsLoading &&
                  upcomingFestivals.map((festival, idx) => (
                    <motion.div
                      key={festival.id ?? `${festival.name}-${idx}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/20 group cursor-zoom-in"
                      onClick={() => setSelectedFestivalPoster(festival)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setSelectedFestivalPoster(festival);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                    >
                      <img
                        src={festival.poster}
                        alt={festival.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white font-bold text-lg tracking-wide drop-shadow-md">{festival.name}</p>
                        {festival.date && (
                          <p className="text-white/80 text-xs mt-1 font-medium">{festival.date}</p>
                        )}
                        <div className="w-10 h-1 px-1 bg-[#D4AF37] mt-2 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-size poster lightbox */}
      <AnimatePresence>
        {selectedFestivalPoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[220] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedFestivalPoster(null)}
          >
            <button
              onClick={() => setSelectedFestivalPoster(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#8E1616] text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1B0A0A] transition-all duration-300 shadow-lg z-[230]"
              title="Close Poster"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-6xl bg-[#1A0A0A] rounded-2xl border border-[#D4AF37]/30 overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative w-full h-[65vh] md:h-[80vh] bg-black">
                <img
                  src={selectedFestivalPoster.poster}
                  alt={selectedFestivalPoster.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="px-6 py-4 bg-gradient-to-r from-[#2D0A0A] to-[#4A1111] border-t border-[#D4AF37]/20">
                <p className="text-[#F7E7C3] font-bold text-lg">{selectedFestivalPoster.name}</p>
                {selectedFestivalPoster.date && (
                  <p className="text-[#F7E7C3]/75 text-sm mt-1">{selectedFestivalPoster.date}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
