"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Sparkles, Star } from "lucide-react"

export default function GitaPathashalaHeader() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const opacity = useTransform(scrollYProgress, [0.2, 0.8], [1, 0])

    return (
        <div ref={containerRef} className="relative w-full overflow-hidden bg-[#1a0505] min-h-[56vh] md:min-h-[60vh] flex items-center shadow-2xl">
            
            {/* 1. Ultra-Vibrant Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3d0c0c] via-[#8B1C1C] to-[#FF6B00] z-0"></div>
            
            {/* 2. Divine Radial Glow - Multiple Layers */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,215,0,0.5),transparent_50%)] z-0 mix-blend-screen"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,107,0,0.3),transparent_40%)] z-0 mix-blend-screen"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#1a0505]/70 to-transparent z-0"></div>

            {/* 3. Texture Pattern - Temple/Mandala */}
            <div className="absolute inset-0 opacity-[0.08] z-0 mix-blend-overlay bg-[url('/assets/mandala-pattern.png')] bg-repeat animate-pulse-slow"></div>

            {/* 4. Decorative Vector Elements */}
            <motion.div 
                initial={{ opacity: 0, x: -50, rotate: -20 }}
                animate={{ opacity: 0.7, x: 0, rotate: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute top-10 left-10 w-32 h-48 md:w-48 md:h-72 z-10 pointer-events-none"
            >
                <Image 
                    src="/assets/activities/icvk/peacock_feather_decor.png" 
                    alt="Peacock Feather Decor" 
                    fill 
                    className="object-contain opacity-90 drop-shadow-lg -rotate-[30deg]"
                />
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 50, rotate: 20 }}
                animate={{ opacity: 0.5, x: 0, rotate: 0 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="absolute bottom-5 right-5 w-24 h-36 md:w-40 md:h-60 z-10 pointer-events-none rotate-[150deg]"
            >
                <Image 
                    src="/assets/activities/icvk/peacock_feather_decor.png" 
                    alt="Peacock Feather Decor" 
                    fill 
                    className="object-contain opacity-80 drop-shadow-lg"
                />
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute bottom-0 left-[10%] w-28 h-28 md:w-40 md:h-40 z-10 pointer-events-none"
            >
                <Image 
                    src="/assets/activities/icvk/lotus_decor.png" 
                    alt="Lotus Flower Decor" 
                    fill 
                    className="object-contain opacity-90 drop-shadow-xl"
                />
            </motion.div>

            {/* 5. Content Container */}
            <div className="relative z-20 container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 pt-28 pb-16 md:pt-40">
                
                {/* Left: Text Content */}
                <motion.div 
                    style={{ opacity }}
                    className="flex-1 text-center md:text-left z-10 w-full"
                >
                    {/* Sticker Label */}
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#FFB81C]/40 bg-[#FFB81C]/15 mb-6 md:mb-8 shadow-lg backdrop-blur-md">
                         <Star size={16} className="text-[#FFD700] animate-spin-slow" fill="#FFD700" />
                         <span className="text-[#FFD700] text-xs md:text-sm font-bold uppercase tracking-[0.2em]">Values for Life</span>
                    </div>

                    {/* Main Title */}
                    <p className="text-lg md:text-2xl lg:text-3xl font-semibold text-white/90 mb-3 md:mb-4 tracking-wide drop-shadow-lg" style={{ fontFamily: "var(--font-serif)" }}>
                        Free Online Classes
                    </p>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[0.98] drop-shadow-xl max-w-3xl mx-auto md:mx-0" style={{ fontFamily: "var(--font-serif)" }}>
                        <span className="block text-white">Gītā</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF6B00]">
                            Pathashālā
                        </span>
                    </h1>

                    <div className="h-2 w-28 md:w-36 bg-gradient-to-r from-[#FFD700] to-[#FF6B00] rounded-full mb-6 md:mb-8 mx-auto md:mx-0 shadow-[0_0_25px_rgba(255,215,0,0.8)]"></div>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-orange-100 font-medium max-w-xl leading-relaxed mb-2 mx-auto md:mx-0 font-serif tracking-wide drop-shadow-md">
                        Bhagavad-gītā Shloka Memorisation for Kids
                    </p>
                    <p className="text-sm md:text-base text-[#FFD700] font-bold uppercase tracking-widest mt-2 drop-shadow-sm">
                         Age 7–12 Years • Live on Zoom • By ISKCON Thiruvanmiyur
                    </p>
                </motion.div>

                {/* Right: Poster Image with Frame */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.85, x: 80 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex-1 relative w-full flex justify-center md:justify-end mt-8 md:mt-0 z-20"
                >
                    <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[550px] group">
                        
                        {/* Divine Glow Behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#FFD700] rounded-3xl blur-[80px] opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-700"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#FF6B00] rounded-3xl blur-[50px] opacity-40 animate-pulse delay-75 group-hover:opacity-60 transition-opacity duration-700"></div>

                        {/* Floating Sparkles */}
                        <motion.div 
                            animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 z-30"
                        >
                             <Sparkles size={32} className="text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.9)]" />
                        </motion.div>
                        <motion.div 
                            animate={{ y: [0, -10, 0], x: [0, 8, 0], opacity: [0.4, 0.9, 0.4] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-4 -left-4 z-30"
                        >
                             <Star size={24} className="text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]" fill="#FFD700" />
                        </motion.div>

                        {/* The Framed Poster */}
                        <div className="relative w-full h-full z-20 rounded-2xl overflow-hidden border-4 border-[#FFD700]/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:scale-[1.02] group-hover:border-[#FFD700] transition-all duration-500 ease-out">
                            {/* Inner Gold Border */}
                            <div className="absolute inset-0 border-[3px] border-[#8B1C1C]/40 z-30 rounded-[14px] pointer-events-none"></div>
                            
                            <Image 
                                src="/images/gita-pathashala/gita-pathashala-poster.png" 
                                alt="Gita Pathashala Poster" 
                                fill 
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Wave Divider - Colored to match page bg */}
            <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 translate-y-1">
                 <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
                    <path fill="#FFF9F0" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                 </svg>
            </div>
        </div>
    )
}
