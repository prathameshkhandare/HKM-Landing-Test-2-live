"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Youtube, Heart, Calendar, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type UpcomingFestival = {
  id?: string;
  name: string;
  poster: string;
  date?: string | null;
  slug?: string | null;
};

export default function TempleInfoSection() {
  const [isFestivalModalOpen, setIsFestivalModalOpen] = useState(false);
  const [selectedFestivalPoster, setSelectedFestivalPoster] = useState<UpcomingFestival | null>(null);
  const [upcomingFestivals, setUpcomingFestivals] = useState<UpcomingFestival[]>([]);
  const [festivalsLoading, setFestivalsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const loadUpcomingFestivals = async () => {
      try {
        setFetchError(false);
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
          setUpcomingFestivals([]);
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

        setUpcomingFestivals(mappedFestivals);
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Unable to fetch upcoming festivals:", error);
          setFetchError(true);
          setUpcomingFestivals([]);
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

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!isFestivalModalOpen) return;

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
    <>
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
                src="/assets/iskcon-logo-updated-transparent.png"
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
                { time: "4:30 AM",         event: "Mangala Aarti" },
                { time: "5:00 AM",         event: "Mantra Meditation (Japa Session)" },
                { time: "7:15 AM",         event: "Shringara Aarti" },
                { time: "7:30 AM",         event: "Guru Puja" },
                { time: "8:00 AM",         event: "Srimad Bhagavatam Class" },
                { time: "12:25 PM",        event: "Rajbhoga Aarti" },
                { time: "4:15 PM",         event: "Dhupa Aarti — Darshan Opens" },
                { time: "7:00 PM",         event: "Sandhya Aarti" },
                { time: "7:30 PM",         event: "Bhagavad-Gita Class" },
                { time: "8:00 – 8:15 PM", event: "Shayana Aarti — Darshan Closes" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 hover:-translate-y-0.5 transition-transform group/item cursor-default">
                  <span className="font-black text-[#C69C31] w-[90px] shrink-0 text-[13px] text-right tracking-tight drop-shadow-sm group-hover/item:text-[#B8860B] transition-colors leading-snug pt-0.5">
                    {item.time}
                  </span>
                  {/* Subtle decorative dot/sparkle */}
                  <div className="relative flex items-center justify-center w-3 h-3 shrink-0 mt-1">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 group-hover/item:bg-[#D4AF37] transition-colors"></div>
                     <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-sm opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="font-bold text-[#2A3439] text-[13px] group-hover/item:text-[#8E1616] transition-colors leading-snug min-w-0">
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
            className="md:col-span-3 bg-white rounded-3xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#D4AF37]/15 flex flex-col group hover:border-[#D4AF37]/40 transition-colors"
          >
            {/* Header row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
                  <Calendar className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 text-base font-serif">Upcoming Festivals</h4>
              </div>
              <button
                onClick={() => setIsFestivalModalOpen(true)}
                className="text-[10px] font-bold text-orange-600 hover:text-orange-800 underline underline-offset-4 shrink-0"
              >
                View All
              </button>
            </div>

            {/* Poster strip */}
            {festivalsLoading && (
              <div className="flex gap-3 overflow-hidden">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="shrink-0 w-[90px] aspect-[2/3] rounded-xl bg-orange-50 animate-pulse" />
                ))}
              </div>
            )}

            {!festivalsLoading && upcomingFestivals.length === 0 && (
              <p className="text-[11px] text-gray-400 text-center py-4">Festival posters will be announced soon.</p>
            )}

            {!festivalsLoading && upcomingFestivals.length > 0 && (
              <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
                {upcomingFestivals.map((festival, idx) => (
                  <button
                    key={festival.id ?? `${festival.name}-${idx}`}
                    className="shrink-0 w-[90px] aspect-[2/3] rounded-xl overflow-hidden relative group/poster shadow-md border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:shadow-lg transition-all duration-300"
                    onClick={() => setSelectedFestivalPoster(festival)}
                    title={festival.name}
                  >
                    <img
                      src={festival.poster}
                      alt={festival.name}
                      className="w-full h-full object-cover group-hover/poster:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                      <p className="text-white text-[8px] font-semibold leading-tight line-clamp-2">{festival.name}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {!festivalsLoading && upcomingFestivals.length > 0 && (
              <p className="text-[10px] text-gray-400 mt-3 text-center">
                {upcomingFestivals.length} festival{upcomingFestivals.length > 1 ? "s" : ""} · tap to view full poster
              </p>
            )}
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

    </section>

      {/* ── Portals: rendered at document.body so they cover the navbar (z-50) ── */}
      {mounted && createPortal(
        <>
          {/* Festival Posters Grid Modal */}
          <AnimatePresence>
            {isFestivalModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ zIndex: 9998 }}
                className="fixed inset-0 flex items-start justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto pt-8 pb-12"
                onClick={() => setIsFestivalModalOpen(false)}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0, y: 20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative bg-[#FFFBF0] rounded-[2.5rem] p-8 md:p-12 max-w-5xl w-full shadow-2xl border border-[#D4AF37]/30 mt-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setIsFestivalModalOpen(false)}
                    className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#8E1616] text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1B0A0A] transition-all duration-300 shadow-lg hover:scale-110 active:scale-95"
                    title="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#8E1616] mb-3 font-serif text-center drop-shadow-sm">
                    Divine Celebrations & Upcoming Festivals
                  </h3>
                  <p className="text-center text-xs text-[#8E1616]/60 mb-8">
                    Click any poster to view in full size
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
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
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.06, duration: 0.35 }}
                          className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/20 group cursor-zoom-in"
                          onClick={() => setSelectedFestivalPoster(festival)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelectedFestivalPoster(festival); } }}
                        >
                          <img
                            src={festival.poster}
                            alt={festival.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            loading="lazy"
                          />
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                            <p className="text-white font-bold text-sm leading-tight drop-shadow-md">{festival.name}</p>
                            {festival.date && (
                              <p className="text-white/70 text-[10px] mt-0.5">{festival.date}</p>
                            )}
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Full-size Poster Lightbox */}
          <AnimatePresence>
            {selectedFestivalPoster && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ zIndex: 9999 }}
                className="fixed inset-0 bg-black/95 backdrop-blur-2xl flex items-center justify-center"
                onClick={() => setSelectedFestivalPoster(null)}
              >
                {/* Close button — floats top-right of the screen, always visible */}
                <button
                  onClick={() => setSelectedFestivalPoster(null)}
                  className="fixed top-5 right-5 w-11 h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#8E1616] hover:border-[#8E1616] transition-all duration-200 shadow-2xl"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                <motion.div
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.92, opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="flex flex-col items-center max-w-lg w-full mx-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Poster image */}
                  <div className="w-full rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.7)] border border-[#D4AF37]/20">
                    <img
                      src={selectedFestivalPoster.poster}
                      alt={selectedFestivalPoster.name}
                      className="w-full object-contain"
                      style={{ maxHeight: "82vh" }}
                    />
                  </div>

                  {/* Name + date bar */}
                  <div className="mt-4 text-center">
                    <p className="text-[#F7E7C3] font-bold text-lg tracking-wide drop-shadow-md">
                      {selectedFestivalPoster.name}
                    </p>
                    {selectedFestivalPoster.date && (
                      <p className="text-[#D4AF37]/70 text-sm mt-0.5">{selectedFestivalPoster.date}</p>
                    )}
                    <p className="text-white/30 text-xs mt-3">Click anywhere outside to close</p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>,
        document.body
      )}
    </>
  );
}
