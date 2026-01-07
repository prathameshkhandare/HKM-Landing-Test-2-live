"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Sparkles, Music } from "lucide-react"

interface FestivalHeaderProps {
    title?: string
    subtitle?: string
    stickerText?: string
}

export default function FestivalHeader({ 
    title = "Festival Photos", 
    subtitle = "Relive the divine moments of celebration and devotion through our captured memories.",
    stickerText = "Celebration",
}: FestivalHeaderProps) {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
    
    // Parallax layers
    const layer1 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]) // Background Pattern
    const layer2 = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]) // Bells (Foreground)

    return (
        <div ref={containerRef} className="relative w-full overflow-hidden bg-[#2D0A0A] min-h-[500px] md:min-h-[600px] flex items-center shadow-2xl group">
            
            {/* 1. Base Celebration Gradient Background (Red/Orange/Gold) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7f1d1d] via-[#c2410c] to-[#f59e0b] z-0"></div>
            
            {/* 2. Radial Glow for Warmth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)] mix-blend-overlay z-0"></div>

            {/* 3. Texture Pattern - Temple Pattern */}
            <motion.div 
                style={{ y: layer1, scale }}
                className="absolute inset-0 opacity-[0.12] z-0 mix-blend-overlay"
            >
                 <Image 
                    src="/assets/temple-pattern.PNG" 
                    alt="Temple Pattern" 
                    fill 
                    className="object-cover"
                />
            </motion.div>

            {/* Animated Temple Bells (Top Corners) */}
            <motion.div 
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ y: layer2 }}
                className="absolute -top-10 left-10 w-24 h-32 md:w-32 md:h-40 z-10 opacity-90 origin-top"
            >
                <Image 
                    src="/assets/temple_bell_vector.png" 
                    alt="Temple Bell" 
                    fill 
                    className="object-contain drop-shadow-lg"
                />
            </motion.div>
             <motion.div 
                animate={{ rotate: [0, -5, 0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ y: layer2 }}
                className="absolute -top-16 right-20 w-32 h-40 md:w-40 md:h-48 z-10 opacity-80 origin-top md:block hidden"
            >
                <Image 
                    src="/assets/temple_bell_vector.png" 
                    alt="Temple Bell" 
                    fill 
                    className="object-contain drop-shadow-lg"
                />
            </motion.div>


            {/* 4. Content Content Container */}
            <div className="relative z-20 container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between gap-12 pt-24 pb-12 md:pt-16">
                
                {/* Left: Text Content */}
                <motion.div 
                    style={{ y, opacity }}
                    className="flex-1 text-center md:text-left pt-8 md:pt-0 z-20"
                >
                    {/* Sticker Label */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8 shadow-lg mx-auto md:mx-0 ring-1 ring-white/30">
                         <Music size={14} className="text-[#fbbf24] animate-bounce" />
                         <span className="text-[#fff7ed] text-xs font-bold uppercase tracking-[0.2em]">{stickerText}</span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]" style={{ fontFamily: "var(--font-playfair)" }}>
                        {title}
                    </h1>

                    <div className="h-1.5 w-32 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] rounded-full mb-8 mx-auto md:mx-0 shadow-[0_0_20px_rgba(251,191,36,0.8)]"></div>

                    {/* Subtitle */}
                    <p className="text-xl text-[#ffedd5] font-light max-w-xl leading-relaxed mb-8 mx-auto md:mx-0 font-serif italic drop-shadow-md">
                        "{subtitle}"
                    </p>
                </motion.div>

                {/* Right: Sankirtan Vector Illustration */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 relative w-full flex justify-center md:justify-end pb-8"
                >
                    <div className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px]">
                        
                        {/* Divine Aura / Chakra Glow behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-r from-[#fbbf24]/40 to-[#f59e0b]/40 rounded-full blur-[60px] animate-pulse-slow mix-blend-screen"></div>

                         {/* Floating Diyas (Decoration) */}
                         {/* Bottom Left Diya */}
                         <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-0 left-0 w-24 h-24 md:w-36 md:h-36 z-30 opacity-90"
                        >
                            <Image 
                                src="/assets/diya_lamp_clean_vector.png" 
                                alt="Diya" 
                                fill 
                                className="object-contain drop-shadow-[0_0_20px_rgba(251,191,36,0.8)]"
                            />
                        </motion.div>

                        {/* Bottom Right Diya */}
                         <motion.div 
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute bottom-2 right-4 w-20 h-20 md:w-28 md:h-28 z-30 opacity-90"
                        >
                            <Image 
                                src="/assets/diya_lamp_clean_vector.png" 
                                alt="Diya" 
                                fill 
                                className="object-contain drop-shadow-[0_0_20px_rgba(251,191,36,0.8)]"
                            />
                        </motion.div>

                        {/* Top Left Floating Diya (Smaller) */}
                        <motion.div 
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-10 -left-6 w-12 h-12 md:w-16 md:h-16 z-20 opacity-80 hidden md:block"
                        >
                            <Image 
                                src="/assets/diya_lamp_clean_vector.png" 
                                alt="Diya" 
                                fill 
                                className="object-contain drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                            />
                        </motion.div>

                         {/* Side Right Floating Diya (Mid) */}
                         <motion.div 
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="absolute bottom-1/3 -right-8 w-14 h-14 md:w-18 md:h-18 z-20 opacity-80"
                        >
                            <Image 
                                src="/assets/diya_lamp_clean_vector.png" 
                                alt="Diya" 
                                fill 
                                className="object-contain drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                            />
                        </motion.div>


                        {/* Main Image: Sankirtan Vector */}
                        <div className="relative w-full h-full z-20 hover:scale-105 transition-transform duration-500">
                             
                            <Image 
                                src="/assets/sankirtan_vector.png" 
                                alt="Sankirtan Party" 
                                fill 
                                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-20"
                                priority
                            />
                            
                        </div>

                    </div>
                </motion.div>
            </div>

            {/* Bottom Fade Gradient to merge with page content */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FFF9F0] to-transparent z-10"></div>
        </div>
    )
}
