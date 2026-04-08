"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Youtube, Heart, Sparkles } from "lucide-react";

export default function TempleInfoSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-[#FFFBF0] selection:bg-[#D4AF37] selection:text-[#2D0A0A] font-sans">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/assets/temple-pattern.webp')] bg-repeat pointer-events-none"></div>
      <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-[#D4AF37] rounded-full blur-[150px] opacity-[0.15] pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-[#800000] rounded-full blur-[200px] opacity-[0.1] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Top Header / Welcome Row */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 md:gap-8 justify-center mb-10 w-full"
          >
            {/* Srila Prabhupada Logo - NOW LEFT */}
            <Link href="/srila-prabhupada" className="relative group cursor-pointer shrink-0">
              <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative rounded-full shadow-2xl transform group-hover:-translate-y-1 transition-transform overflow-hidden w-[70px] h-[70px] md:w-[120px] md:h-[120px] flex items-center justify-center">
                <Image 
                  src="/assets/srila-prabhupada.webp" 
                  alt="Srila Prabhupada" 
                  width={120} 
                  height={120} 
                  className="object-cover rounded-full w-full h-full" 
                />
              </div>
            </Link>
            
            <div className="hidden sm:block h-[2px] w-8 md:w-16 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
            
            {/* Elegant Sunburst/Dot marker */}
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center min-w-[120px]">
              <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-[#D4AF37] shrink-0" />
              <span className="text-[10px] md:text-sm lg:text-base text-[#B8860B] font-bold uppercase tracking-widest leading-tight">
                Tallest temple <br className="hidden sm:block md:hidden"/> in Chennai
              </span>
            </div>
            
            <div className="hidden sm:block h-[2px] w-8 md:w-16 bg-gradient-to-l from-[#D4AF37] to-transparent"></div>

            {/* ISKCON Chennai Logo - NOW RIGHT */}
            <Link href="/" className="relative group cursor-pointer shrink-0">
              <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-full shadow-2xl border border-[#D4AF37]/30 transform group-hover:-translate-y-1 transition-transform w-[70px] h-[70px] md:w-[120px] md:h-[120px] flex items-center justify-center p-2 md:p-5">
                <Image src="/assets/iskcon_chennai_logo.png" alt="ISKCON Chennai Logo" width={90} height={90} className="object-contain w-[70%] h-[70%] md:w-full md:h-full" />
              </div>
            </Link>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#8E1616] font-serif leading-tight mb-4 drop-shadow-[2px_4px_0px_rgba(0,0,0,0.05)]"
          >
            Welcome to Srila Prabhupada’s <br className="hidden md:block"/>ISKCON Chennai
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#C09628] to-[#D4AF37] bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent block mt-2 text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-[0_10px_10px_rgba(212,175,55,0.2)]">
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

          {/* Location & Maps (Span 4 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-4 bg-white rounded-3xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#D4AF37]/15 flex flex-col items-center text-center justify-center group hover:border-[#D4AF37]/40 transition-colors"
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

          {/* Live Darshan (Span 4 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-4 bg-white rounded-3xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#D4AF37]/15 flex flex-col items-center text-center justify-center group hover:border-[#D4AF37]/40 transition-colors"
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

          {/* Donate Card (Span 4 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="md:col-span-4 rounded-3xl p-5 shadow-lg bg-gradient-to-br from-[#800000] to-[#8E1616] border border-[#D4AF37]/25 flex flex-col items-center text-center justify-center group hover:shadow-2xl transition-all relative overflow-hidden"
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
  );
}
