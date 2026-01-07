"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Sparkles, Activity } from "lucide-react"

interface ActivitiesHeaderProps {
    title?: string
    subtitle?: string
    stickerText?: string
}

export default function ActivitiesHeader({ 
    title = "Our Activities", 
    subtitle = "Engaging in the service of the Lord to purify our hearts and uplift society.",
    stickerText = "Seva",
}: ActivitiesHeaderProps) {
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

    return (
        <div ref={containerRef} className="relative w-full overflow-hidden bg-[#2D0A0A] min-h-[500px] md:min-h-[600px] flex items-center shadow-2xl">
            
            {/* 1. Base Gradient Background (Earthy/Saffron) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5b2110] via-[#9a3412] to-[#ea580c] z-0"></div>
            
            {/* 2. Abstract Divine Rays/Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.5),transparent_60%)] z-0 mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#2D0A0A]/20 to-transparent z-0"></div>

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

            {/* 4. Content Content Container */}
            <div className="relative z-20 container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 pt-24 pb-16 md:pt-20">
                
                {/* Left: Text Content */}
                <motion.div 
                    style={{ y, opacity }}
                    className="flex-1 text-center md:text-left z-10 w-full"
                >
                    {/* Sticker Label */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-6 md:mb-8 shadow-lg mx-auto md:mx-0">
                         <Activity size={14} className="text-[#fbbf24] animate-pulse" />
                         <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">{stickerText}</span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]" style={{ fontFamily: "var(--font-playfair)" }}>
                        {title}
                    </h1>

                    <div className="h-1.5 w-24 md:w-32 bg-[#fbbf24] rounded-full mb-6 md:mb-8 mx-auto md:mx-0 shadow-[0_0_15px_rgba(251,191,36,0.6)]"></div>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-[#fff7ed] font-medium max-w-xl leading-relaxed mb-0 mx-auto md:mx-0 font-serif italic drop-shadow-md opacity-95">
                        "{subtitle}"
                    </p>
                </motion.div>

                {/* Right: Illustration */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex-1 relative w-full flex justify-center md:justify-end mt-8 md:mt-0"
                >
                    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                        
                        {/* Divine Aura / Chakra Glow behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-[#fbbf24] rounded-full blur-[90px] opacity-30 animate-pulse-slow mix-blend-screen"></div>

                         {/* Floating Lotus Flowers (Decoration) */}
                         <motion.div 
                            animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 right-0 w-20 h-20 md:w-32 md:h-32 z-20 opacity-80"
                        >
                            <Image 
                                src="/assets/golden_lotus_flourish_clean.png" 
                                alt="Lotus" 
                                fill 
                                className="object-contain drop-shadow-lg"
                            />
                        </motion.div>

                        <motion.div 
                            animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 -left-6 w-16 h-16 md:w-24 md:h-24 z-20 opacity-70"
                        >
                            <Image 
                                src="/assets/golden_lotus_flourish_clean.png" 
                                alt="Lotus" 
                                fill 
                                className="object-contain drop-shadow-lg rotate-45"
                            />
                        </motion.div>

                        {/* Main Image: Devotional Activities Vector */}
                        <div className="relative w-full h-full z-10 hover:scale-[1.02] transition-transform duration-700 ease-out">
                             {/* Soft Frame Glow */}
                             <div className="absolute inset-0 bg-gradient-to-t from-[#fbbf24]/10 to-transparent rounded-full opacity-0 md:opacity-100 blur-md"></div>
                            
                            <Image 
                                src="/assets/devotional_activities_vector.png" 
                                alt="Devotional Activities" 
                                fill 
                                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] z-20"
                                priority
                            />
                        </div>

                    </div>
                </motion.div>
            </div>

            {/* Bottom Fade Gradient to merge with page content */}
            <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-[#FFF9F0] to-transparent z-10"></div>
        </div>
    )
}
