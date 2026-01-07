"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion"
import Image from "next/image"
import { Heart, Sparkles } from "lucide-react"

export default function TempleParallaxHeader() {
    const containerRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    // Parallax Effects
    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const scaleBackground = useTransform(scrollYProgress, [0, 1], [1, 1.1])
    const yForeground = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
    const opacityContent = useTransform(scrollYProgress, [0, 0.4], [1, 0])

    // Mouse Interaction
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    
    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        let { left, top, width, height } = currentTarget.getBoundingClientRect()
        let x = (clientX - left) / width - 0.5
        let y = (clientY - top) / height - 0.5
        mouseX.set(x * 15) // Subtle movement
        mouseY.set(y * 15)
    }

    const mouseSpringX = useSpring(mouseX, { stiffness: 40, damping: 20 })
    const mouseSpringY = useSpring(mouseY, { stiffness: 40, damping: 20 })

    // Combine motion values for y-axis
    const yCombined = useMotionTemplate`calc(${yForeground} + ${mouseSpringY}px)`

    return (
        <header 
            ref={containerRef} 
            onMouseMove={handleMouseMove}
            className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-[#1a0505] perspective-1000"
        >

            
            {/* --- Background Layers --- */}
            
            {/* 1. Base Sky/Atmosphere - Warm Sunrise Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D0A0A] via-[#5c1c0c] to-[#9a3412] z-0"></div>
            
            {/* 2. God Rays */}
            <div className="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-gradient-radial from-[#fbbf24]/20 to-transparent blur-[100px] z-0 animate-pulse-slow pointer-events-none"></div>

            {/* 3. Altar Layer (Mid-ground) - Moves slower, scales up */}
            <motion.div 
                style={{ y: yBackground, scale: scaleBackground }}
                className="absolute inset-0 z-10 flex items-end justify-center"
            >
                <div className="relative w-full h-full max-w-[1920px]">
                    <Image 
                        src="/assets/temple_altar_background.png" 
                        alt="Golden Altar" 
                        fill 
                        className="object-cover object-bottom opacity-90"
                        priority
                    />
                     {/* Altar Glow Overlay */}
                     <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#ffd700]/20 to-transparent mix-blend-overlay"></div>
                </div>
            </motion.div>

            {/* 4. Rotating Chakra (Subtle background element) */}
            <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] z-10 opacity-30 pointer-events-none mix-blend-screen">
                 <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full"
                >
                    <Image src="/assets/sudarshan_chakra.png" alt="Chakra" fill className="object-contain" />
                </motion.div>
            </div>

            {/* 5. Archway Layer (Foreground) - Frames the view */}
            <motion.div 
                style={{ y: yCombined, x: mouseSpringX }}
                className="absolute inset-0 z-30 pointer-events-none"
            >
                <div className="relative w-full h-full">
                     <Image 
                        src="/assets/temple_arch_foreground.png" 
                        alt="Temple Archway" 
                        fill 
                        className="object-cover object-center scale-105" // Slight scale to avoid edges showing
                    />
                </div>
            </motion.div>


            {/* --- Floating Elements --- */}

            {/* Suspended Bells */}
            <motion.div 
                className="absolute top-0 left-[15%] w-24 h-40 z-40 origin-top"
                initial={{ rotate: 2 }}
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <Image src="/assets/temple_bell_clean.png" alt="Bell" fill className="object-contain drop-shadow-2xl brightness-75" />
            </motion.div>
            <motion.div 
                className="absolute top-[-5%] right-[15%] w-32 h-56 z-40 origin-top"
                initial={{ rotate: -1 }}
                animate={{ rotate: [2, -2, 2] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <Image src="/assets/temple_bell_clean.png" alt="Bell" fill className="object-contain drop-shadow-2xl brightness-75" />
            </motion.div>

            {/* Floating Particles/Dust Motes */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                 {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#fbbf24] rounded-full blur-[1px]"
                        initial={{ 
                            top: `${Math.random() * 100}%`, 
                            left: `${Math.random() * 100}%`,
                            opacity: 0,
                            scale: 0
                        }}
                        animate={{ 
                            top: `${Math.random() * 100}%`, 
                            left: `${Math.random() * 100}%`,
                            opacity: [0, 0.8, 0],
                            scale: [0, 1.5, 0]
                        }}
                        transition={{ 
                            duration: 4 + Math.random() * 4, 
                            repeat: Infinity, 
                            ease: "easeInOut", 
                            delay: Math.random() * 3 
                        }}
                    />
                ))}
            </div>


            {/* --- Hero Content --- */}
            <div className="relative z-40 text-center px-4 md:px-6 max-w-5xl mx-auto mt-20">
                <motion.div style={{ opacity: opacityContent }}>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex flex-col items-center"
                    >
                        <span className="inline-block py-1 px-4 rounded-full border border-[#fbbf24]/50 bg-black/40 backdrop-blur-sm text-[#fbbf24] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                            The Future Cultural Landmark
                        </span>
                        
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#FFF9F0] via-[#ffd700] to-[#b45309] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] mb-8 leading-tight">
                            Dakshina <br className="hidden md:block"/> Dwaraka
                        </h1>

                        <p className="text-lg md:text-2xl text-[#fef3c7] font-light max-w-2xl mx-auto mb-10 leading-relaxed font-serif text-shadow-sm opacity-90">
                            A magnificent cultural complex dedicated to Sri Sri Rukmini Dwarakadhish, preserving our rich Vedic heritage for generations to come.
                        </p>
                        
                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('contribute')?.scrollIntoView({ behavior: 'smooth' })}
                                className="group relative px-8 py-4 bg-gradient-to-r from-[#b45309] to-[#d97706] text-[#fef3c7] font-bold uppercase tracking-widest rounded-none border-2 border-[#fbbf24] shadow-[0_0_20px_rgba(180,83,9,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-all overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2 text-white">
                                    <Heart className="w-5 h-5 fill-current" />
                                    Contribute Seva
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
                            </motion.button>

                             <motion.button 
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-[#fbbf24] font-bold uppercase tracking-widest text-sm hover:text-[#fff] transition-colors flex items-center gap-2 group"
                            >
                                Explore Creating History
                                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                            </motion.button>
                        </div>
                    </motion.div>

                </motion.div>
            </div>

             {/* Bottom Fade */}
             <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-40"></div>
        </header>
    )
}
