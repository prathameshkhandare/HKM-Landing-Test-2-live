"use client"

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface VedicArchHeaderProps {
    title: string
    subtitle: string
    imageSrc: string
    stickerText?: string
}

export default function VedicArchHeader({ title, subtitle, imageSrc, stickerText }: VedicArchHeaderProps) {
    const ref = React.useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    return (
        <section ref={ref} className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#FFF9F0]">
            {/* 1. Background Texture (Wall behind the arch) */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[url('/assets/mandala-pattern.png')] bg-repeat"></div>

            {/* 2. Main Arch Container */}
            <div className="relative z-10 w-full h-full p-8 md:p-12 flex items-center justify-center">
                
                {/* The "Arch" Mask Wrapper */}
                <div className="relative w-full max-w-6xl h-full rounded-t-[15rem] overflow-hidden shadow-2xl border-4 border-[#FFB81C]">
                    
                    {/* Parallax Image INSIDE the Arch */}
                    <motion.div 
                        style={{ y, scale: 1.1 }}
                        className="absolute inset-0 z-0"
                    >
                        <img 
                            src={imageSrc} 
                            alt={title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </motion.div>

                    {/* Content INSIDE the Arch */}
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-24 text-center px-4">
                        {stickerText && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mb-6"
                            >
                                <span className="px-6 py-2 bg-[#FFB81C]/90 backdrop-blur-md text-[#2D0A0A] text-sm font-bold uppercase tracking-[0.2em] rounded-full border border-[#ffe8cc] shadow-lg">
                                    {stickerText}
                                </span>
                            </motion.div>
                        )}
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
                        >
                            {title}
                        </motion.h1>

                        <motion.div 
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="w-32 h-1 bg-[#FFB81C] mb-6 rounded-full"
                        />

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-lg md:text-2xl text-white/90 font-light max-w-3xl leading-relaxed font-sans"
                        >
                            {subtitle}
                        </motion.p>
                    </div>

                    {/* Decorative "Pillar" Inner Borders */}
                    <div className="absolute inset-4 rounded-t-[14rem] border border-white/20 pointer-events-none"></div>
                </div>
            </div>

            {/* 3. Decorative Side Pillars (Outside the Arch image) */}
            <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#FFB81C]/20 to-transparent z-20 hidden md:block border-r border-[#FFB81C]/30"></div>
            <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#FFB81C]/20 to-transparent z-20 hidden md:block border-l border-[#FFB81C]/30"></div>

            {/* 4. Scroll Indicator */}
            <motion.div 
                style={{ opacity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-[#2D0A0A]"
            >
                <div className="w-[1px] h-12 bg-[#2D0A0A]/50"></div>
                <span className="text-xs uppercase tracking-widest font-bold opacity-70">Scroll</span>
            </motion.div>
        </section>
    )
}
