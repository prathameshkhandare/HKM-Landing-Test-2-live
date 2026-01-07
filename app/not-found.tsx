"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Home, ArrowLeft, MoveLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#2D0A0A] flex flex-col items-center justify-center p-4 relative overflow-hidden text-center selection:bg-[#FFB81C] selection:text-white font-sans">
      
      {/* --- Background Elements --- */}
      {/* 1. Deep Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D0A0A] via-[#4a0d0d] to-[#1a0505] z-0"></div>
      
      {/* 2. Animated Mandala Texture */}
      <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] bg-repeat pointer-events-none z-0 animate-spin-slow-reverse"></div>

      {/* 3. Divine God Rays (Rotating) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax] z-0 pointer-events-none opacity-20">
         <div className="w-full h-full bg-gradient-conic from-transparent via-[#FFB81C]/30 to-transparent animate-spin-slow"></div>
      </div>

      {/* 4. Floating Particles/Petals */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-[#FFB81C] opacity-40 blur-[1px]"
                initial={{ 
                    top: "110%", 
                    left: `${Math.random() * 100}%`,
                    scale: Math.random() * 0.5 + 0.5 
                }}
                animate={{ 
                    top: "-10%", 
                    opacity: [0, 0.6, 0],
                    x: Math.sin(i) * 50 
                }}
                transition={{ 
                    duration: 10 + Math.random() * 10, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: Math.random() * 5 
                }}
            />
        ))}
      </div>


      {/* --- Main Content --- */}
      <div className="relative z-20 max-w-4xl w-full flex flex-col items-center">
         
         {/* Divine Glow Behind Image */}
         <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFB81C] rounded-full blur-[100px] opacity-10 pointer-events-none animate-pulse"></div>

         {/* 404 Text - Outlined/Watermark style behind */}
         <h1 className="text-[10rem] md:text-[16rem] font-black text-white/5 font-serif absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 leading-none tracking-tighter mix-blend-overlay">
            404
         </h1>

         {/* Krishna Image Container */}
         <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-72 h-72 md:w-96 md:h-96 relative mb-6 z-10 mt-10"
         >
            <img 
                src="/assets/activities/icvk/little_krishna_premium.png" 
                alt="Little Krishna" 
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(251,178,1,0.3)] filter brightness-110 contrast-110"
                onError={(e) => {
                    e.currentTarget.src = "/assets/krishna-flute-art.jpg"
                    e.currentTarget.className = "w-64 h-64 object-cover rounded-full border-4 border-[#FFB81C] shadow-2xl mx-auto"
                }}
            />
         </motion.div>

         {/* Text Content */}
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 text-center"
         >
             <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFB81C] via-[#fbbf24] to-[#ea580c] mb-4 font-serif">
                Oops! We ran out of a problem
             </h2>
             
             <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent mx-auto mb-6 opacity-60"></div>

             <p className="text-lg md:text-2xl text-[#ffedd5] font-light mb-10 max-w-xl mx-auto leading-relaxed">
                But don't worry. Keep Chanting <br/>
                <span className="font-bold text-[#FFB81C] text-2xl md:text-3xl mt-2 inline-block drop-shadow-md font-serif italic">"Hare Krishna"</span> <br/> 
                <span className="text-base text-gray-400 mt-1 block">until we fix it.</span>
             </p>

             {/* Action Buttons */}
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 w-full max-w-md mx-auto">
                <Link 
                    href="/"
                    className="relative px-8 py-3.5 bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white font-bold rounded-full shadow-[0_4px_14px_0_rgba(234,88,12,0.39)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.23)] hover:scale-105 transition-all duration-300 flex items-center gap-2 group w-full sm:w-auto justify-center z-50 ring-2 ring-white/10 ring-offset-2 ring-offset-[#2D0A0A]"
                >
                    <Home size={18} />
                    <span>Go to Homepage</span>
                </Link>
                
                <button 
                    onClick={() => router.back()}
                    className="px-8 py-3.5 bg-white/5 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center z-50 group backdrop-blur-sm"
                >
                    <MoveLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Go Back</span>
                </button>
             </div>

             {/* Footer Links - Helpful Navigation */}
             <div className="border-t border-white/10 pt-8 w-full max-w-2xl mx-auto">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-4 font-bold">Quick Navigation</p>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                    {[
                        { name: "Temple", link: "/temple" },
                        { name: "Activities", link: "/activities" },
                        { name: "Srila Prabhupada", link: "/srila-prabhupada" },
                        { name: "Contact", link: "/contact-us" },
                        { name: "Gallery", link: "/gallery" }
                    ].map((item, idx) => (
                        <Link 
                            key={idx} 
                            href={item.link} 
                            className="text-[#ffedd5]/70 hover:text-[#FFB81C] transition-colors duration-200 text-sm font-medium z-50 relative py-1"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
             </div>

         </motion.div>

      </div>
      
    </div>
  )
}
