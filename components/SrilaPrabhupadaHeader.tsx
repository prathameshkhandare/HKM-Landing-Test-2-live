"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import Image from "next/image"
import { Sparkles } from "lucide-react"

export default function SrilaPrabhupadaHeader() {
    const containerRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    // Parallax Effects
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

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
            className="relative h-[95vh] flex items-center overflow-hidden bg-[#2D0A0A] perspective-1000"
        >
            
            {/* --- Background Layers --- */}
            
            {/* 1. Deep Royal Gradient (Base) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a0d0d] via-[#701a1a] to-[#ea580c] opacity-95"></div>
            
            {/* 2. Mandala Pattern Overlay (Texture) */}
            <motion.div 
                style={{ x: useSpring(mouseX, { stiffness: 50, damping: 20 }), y: useSpring(mouseY, { stiffness: 50, damping: 20 }) }}
                className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.07] bg-repeat mix-blend-color-burn pointer-events-none"
            />
            
            {/* 3. Temple Arch/Curtain Effect (Vignette) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#1a0505_100%)] opacity-80 pointer-events-none"></div>

            {/* 4. Sanskrit Mantra Background (Scrolling) */}
            <div className="absolute top-26 left-0 w-full opacity-[0.1] pointer-events-none overflow-hidden whitespace-nowrap">
                <motion.div 
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="text-[150px] font-serif text-[#fbbf24] leading-none"
                >
                    हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे हरे राम हरे राम राम राम हरे हरे  हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे हरे राम हरे राम राम राम हरे हरे
                </motion.div>
            </div>
             <div className="absolute bottom-20 left-0 w-full opacity-[0.1] pointer-events-none overflow-hidden whitespace-nowrap">
                <motion.div 
                    animate={{ x: ["-100%", "0%"] }}
                    transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                    className="text-[120px] font-serif text-[#fbbf24] leading-none"
                >
                     हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे हरे राम हरे राम राम राम हरे हरे  हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे हरे राम हरे राम राम राम हरे हरे
                </motion.div>
            </div>


            {/* 5. God Rays (Top Left Source) */}
            <div className="absolute -top-[20%] -left-[10%] w-[1000px] h-[1000px] bg-gradient-radial from-[#fbbf24]/20 to-transparent blur-[100px] opacity-50 pointer-events-none animate-pulse-slow"></div>


            {/* --- Decorative Elements --- */}
            
            {/* Hanging Temple Bells */}
            <motion.div 
                className="absolute top-[5%] left-[5%] w-32 h-48 z-40 origin-top"
                initial={{ rotate: 0 }}
                animate={{ rotate: [2, -2, 2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                <Image src="/assets/temple_bell_clean.png" alt="Bell" fill className="object-contain drop-shadow-2xl" />
            </motion.div>
             <motion.div 
                className="absolute top-[5%] right-[5%] w-40 h-56 z-40 origin-top"
                initial={{ rotate: 0 }}
                animate={{ rotate: [-3, 3, -3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <Image src="/assets/temple_bell_clean.png" alt="Bell" fill className="object-contain drop-shadow-2xl" />
            </motion.div>
            
            {/* Glowing Diya (Bottom Left) */}
            <motion.div 
                className="absolute bottom-[10%] left-[5%] w-40 h-40 z-40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                {/* Flame Glow */}
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-20 h-20 bg-orange-500 blur-[40px] opacity-70 animate-pulse"></div>
                <Image src="/assets/diya_lamp_v2_clean.png" alt="Diya" fill className="object-contain drop-shadow-2xl" />
            </motion.div>

            {/* Peacock Feathers (Corners) */}
             <motion.div 
                className="absolute bottom-[5%] right-0 w-80 h-80 z-40 opacity-80"
                style={{ transformOrigin: "bottom right" }}
                animate={{ rotate: [-5, 5, -5], scale: [1, 1.05, 1] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
                <Image src="/assets/peacock_feather_v2_clean.png" alt="Peacock" fill className="object-contain translate-x-10 translate-y-10" />
            </motion.div>




            {/* Rotating Giant Chakra/Mandala Behind Content */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-[0.05] pointer-events-none">
                 <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full bg-[url('/assets/mandala-pattern.png')] bg-contain bg-no-repeat bg-center"
                />
            </div>
            
             {/* Falling Flowers / Tulsi Leaves */}
             <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-4 h-4"
                        initial={{ 
                            top: -20, 
                            left: `${Math.random() * 100}%`,
                            opacity: 0,
                            rotate: 0,
                            scale: 0.5
                        }}
                        animate={{ 
                            top: "110%", 
                            left: `${Math.random() * 100}%`,
                            opacity: [0, 1, 0],
                            rotate: 360,
                            scale: 1
                        }}
                        transition={{ 
                            duration: 10 + Math.random() * 10, 
                            repeat: Infinity, 
                            ease: "linear", 
                            delay: i * 1.5 
                        }}
                    >
                         {/* Simple visual representation of a flower/leaf */}
                         <div className="w-full h-full bg-[#fbbf24] rounded-tr-full rounded-bl-full opacity-60 shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
                    </motion.div>
                ))}
            </div>


            {/* --- Main Content Grid --- */}
            <div className="container mx-auto px-6 md:px-12 relative z-30 h-full flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center">
                    
                    {/* Left Column: Typography & Text */}
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
                        
                        {/* Premium Badge */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-2 px-6 py-2 border border-[#fbbf24]/30 rounded-full bg-[#2D0A0A]/60 backdrop-blur-md shadow-lg group hover:bg-[#2D0A0A]/80 transition-colors cursor-default"
                        >
                            <Sparkles className="w-4 h-4 text-[#fbbf24] animate-spin-slow group-hover:text-[#fcd34d]" />
                            <span className="text-[#fbbf24] text-xs font-bold tracking-[0.3em] uppercase group-hover:text-[#fcd34d] transition-colors">The Founder-Acharya</span>
                        </motion.div>

                        {/* Title Group */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                             {/* Decorative Divider Line Top */}
                             <div className="w-16 h-[2px] bg-[#fbbf24] mb-4 hidden lg:block"></div>
                             
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D6] via-[#fbbf24] to-[#d97706] drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] leading-[0.9] lg:leading-[0.8] tracking-tight">
                                Srila <br/> Prabhupada
                            </h1>
                            
                            <div className="h-1 w-32 bg-gradient-to-r from-[#fbbf24] to-transparent mt-4 mx-auto lg:mx-0 rounded-full"></div>
                        </motion.div>

                        {/* Quote Box */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative max-w-xl group"
                        >
                             <div className="absolute -left-8 top-0 text-7xl text-[#fbbf24]/20 font-serif leading-none group-hover:text-[#fbbf24]/30 transition-colors duration-500">“</div>
                             <p className="text-xl md:text-2xl text-[#fef3c7]/90 font-serif italic leading-relaxed pl-4 border-l-2 border-[#fbbf24]/30 group-hover:border-[#fbbf24]/60 transition-colors duration-500">
                                He built a house in which the whole world can live.
                             </p>
                             <p className="mt-2 text-sm font-bold text-[#fbbf24] tracking-widest uppercase opacity-80 pl-4">
                                — ISKCON Founder
                             </p>
                        </motion.div>
                    </div>


                    {/* Right Column: Hero Image (Cleaned & Styled) */}
                    <div className="lg:col-span-5 relative h-[500px] md:h-[600px] flex items-center justify-center lg:justify-end">
                         
                         {/* Sacred Geometry Behind Image */}
                         <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[15%] -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[450px] h-[450px] border border-[#fbbf24]/20 rounded-full animate-[spin_40s_linear_infinite]"></div>
                         <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[15%] -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[380px] h-[380px] border border-dashed border-[#fbbf24]/30 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
                         
                         {/* Glowing Aura */}
                         <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[15%] -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#fbbf24] blur-[100px] opacity-20 animate-pulse"></div>



                         <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            style={{ x: useSpring(useTransform(mouseX, x => x * -1), { stiffness: 30, damping: 20 }), y: useSpring(useTransform(mouseY, y => y * -1), { stiffness: 30, damping: 20 }) }}
                            className="relative w-full h-full z-10"
                         >
                            <Image 
                                src="/assets/srila_prabhupada_v3_clean.png" 
                                alt="His Divine Grace Srila Prabhupada" 
                                fill 
                                className="object-contain object-center lg:object-right drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                                priority
                            />
                         </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Decorative Curve (Temple Base) */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FFF9F0] via-[#FFF9F0]/90 to-transparent z-40"></div>
            <div className="absolute bottom-0 left-0 w-full h-12 bg-[#b45309] opacity-15 z-30 clip-path-curve"></div>

        </header>
    )
}
