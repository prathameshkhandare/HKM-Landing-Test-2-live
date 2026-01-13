"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import Image from "next/image"
import { Sparkles } from "lucide-react"

interface SaffronCommonHeaderProps {
    title: React.ReactNode
    subtitle: string
    stickerText: string
}

export default function SaffronCommonHeader({ title, subtitle, stickerText }: SaffronCommonHeaderProps) {
    const containerRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    
    // Mouse Interaction
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    
    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        let { left, top, width, height } = currentTarget.getBoundingClientRect()
        let x = (clientX - left) / width - 0.5
        let y = (clientY - top) / height - 0.5
        mouseX.set(x * 20)
        mouseY.set(y * 20)
    }

    return (
        <header 
            ref={containerRef} 
            onMouseMove={handleMouseMove}
            className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#2D0A0A] perspective-1000 pt-32 pb-20"
        >
            
            {/* --- 1. Saffron Base Theme --- */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#601010] via-[#9a2515] to-[#fb923c] opacity-95"></div>
            
            {/* Mandala Pattern */}
            <motion.div 
                style={{ x: useSpring(mouseX, { stiffness: 50, damping: 20 }), y: useSpring(mouseY, { stiffness: 50, damping: 20 }) }}
                className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.07] bg-repeat mix-blend-color-burn pointer-events-none"
            />
            
            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#3a0a0a_100%)] opacity-80 pointer-events-none"></div>

            {/* Decorative Lotus Pattern */}
            <div className="absolute top-24 left-0 w-full overflow-hidden opacity-40 pointer-events-none">
                 <div className="flex gap-16 animate-scroll-slow whitespace-nowrap">
                    {[...Array(10)].map((_, i) => (
                         <div key={i} className="relative w-24 h-24 shrink-0">
                            <Image src="/assets/golden_lotus_flourish_clean.png" alt="Lotus" fill className="object-contain" />
                         </div>
                    ))}
                     {[...Array(10)].map((_, i) => (
                         <div key={`duplicate-${i}`} className="relative w-24 h-24 shrink-0">
                            <Image src="/assets/golden_lotus_flourish_clean.png" alt="Lotus" fill className="object-contain" />
                         </div>
                    ))}
                 </div>
            </div>

            {/* God Rays */}
            <div className="absolute -top-[20%] -left-[10%] w-[1000px] h-[1000px] bg-gradient-radial from-[#fbbf24]/20 to-transparent blur-[100px] opacity-40 pointer-events-none animate-pulse-slow"></div>


            {/* --- 2. Main Content --- */}
            <div className="container mx-auto px-6 md:px-12 relative z-30 h-full flex flex-col md:flex-row items-center justify-between">
                
                {/* Left Side: Text & ISKCON Logo */}
                <div className="flex-1 text-center md:text-left pt-20 md:pt-0 z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Sticker */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#fbbf24]/30 rounded-full bg-[#2D0A0A]/60 backdrop-blur-md shadow-lg mb-6">
                            <Sparkles className="w-4 h-4 text-[#fbbf24]" />
                            <span className="text-[#fbbf24] text-xs font-bold tracking-[0.2em] uppercase">{stickerText}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold font-serif text-white leading-tight mb-4 drop-shadow-xl">
                            {title}
                        </h1>
                        
                        <p className="text-xl text-[#ffedd5] font-light max-w-xl leading-relaxed mb-8 mx-auto md:mx-0">
                            {subtitle}
                        </p>

                        {/* ISKCON Logo Block */}
                        <div className="flex items-center justify-center md:justify-start gap-4 opacity-90 hover:opacity-100 transition-opacity">
                            <div className="relative w-40 h-40 md:w-64 md:h-64 flex items-center justify-center">
                                {/* Back Lighting Effect */}
                                <div className="absolute inset-0 bg-[#fbbf24] blur-[30px] opacity-40 rounded-full"></div>
                                <Image 
                                    src="/assets/iskcon-new-logo-transparent.png" 
                                    alt="ISKCON Logo" 
                                    fill 
                                    className="object-contain relative z-10 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]" 
                                />
                            </div>
                            <div className="h-16 md:h-24 w-[1px] bg-[#fbbf24]/30"></div>
                            <div className="text-left">
                                <p className="text-[#fbbf24] font-bold uppercase tracking-wider text-xl md:text-3xl leading-none mb-1">Hare Krishna</p>
                                <p className="text-white/80 text-base md:text-xl tracking-wide font-light">Movement Chennai</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Srila Prabhupada in Arch Frame */}
                <div className="flex-1 relative w-full h-[55vh] md:h-full flex items-end justify-center md:justify-end mt-12 md:mt-0 z-40 pb-12 md:pb-16">
                    
                    {/* The "Golden Arch" Frame */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-[260px] h-[320px] md:w-[380px] md:h-[460px] xl:w-[440px] xl:h-[520px] flex items-end justify-center"
                    >
                        {/* Frame Container */}
                        <div className="relative w-full h-full rounded-t-[10rem] rounded-b-2xl overflow-hidden border-[6px] border-[#fbbf24] shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#1a0505] group">
                            
                            {/* Inner Border/Matte */}
                            <div className="absolute inset-2 rounded-t-[9rem] rounded-b-xl border border-[#fbbf24]/30 z-20 pointer-events-none"></div>

                            {/* The Image */}
                            <div className="relative w-full h-full bg-[#FFF9F0]">
                                <Image 
                                    src="/assets/srila_prabhupada_v4.png" 
                                    alt="Srila Prabhupada" 
                                    fill 
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>

                            {/* Gloss/Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30"></div>
                        </div>

                        {/* Decorative Base/Stand */}
                        <div className="absolute -bottom-4 w-[110%] h-4 bg-[#fbbf24] rounded-full blur-xl opacity-40 -z-10"></div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Curve */}
             <div className="absolute bottom-0 left-0 w-full h-24 bg-white z-20" style={{ clipPath: "ellipse(70% 50% at 50% 100%)" }}></div>
        </header>
    )
}
