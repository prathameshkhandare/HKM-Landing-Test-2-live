"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"
import { Calendar, Sparkles, Moon, Sun } from "lucide-react"

export default function VaishnavaCalendarHero() {
    const [currentMobileImage, setCurrentMobileImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMobileImage((prev) => (prev === 0 ? 1 : 0));
        }, 4000); // 4 seconds per image
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[100svh] md:min-h-[70vh] h-auto flex py-16 md:py-0 items-center justify-center overflow-hidden bg-[#2D0A0A]">
            {/* Background - Deep Maroon/Saffron Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a0d0d] via-[#701a1a] to-[#ea580c] opacity-95"></div>

            {/* Texture & Mandala Overlays */}
            <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow"></div>
            <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 49px, #FFB81C 50px)' }}></div>
            
            {/* Darken edges for depth */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 130% 100% at 50% 50%, transparent 40%, rgba(26,4,4,0.7) 100%)' }}
            />

            {/* Central Divine Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFB81C] rounded-full blur-[140px] opacity-20 animate-pulse"></div>

            {/* Bottom wave into cream */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#FFF9F0] z-20" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />

            <div className="relative z-30 w-full px-6 max-w-[98rem] mx-auto pt-24 h-full flex flex-col lg:grid lg:grid-cols-5 items-center gap-8 pb-16 lg:pb-0">

                {/* DESKTOP ONLY: Left Decor Image - Dakshina Dwaraka Dham Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden lg:flex lg:col-span-1 items-center justify-start relative"
                >
                    <div className="relative w-full max-w-[220px] aspect-square rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,184,28,0.12)] bg-black/20 backdrop-blur-md group hover:shadow-[0_0_70px_rgba(255,184,28,0.25)] transition-all duration-500 border-2 border-[#FFB81C]/30 flex items-center justify-center p-6">
                        <div className="relative w-full h-full">
                            <Image
                                src="/assets/dakshina-dwaraka-dham.png"
                                alt="Dakshina Dwaraka Dham Logo"
                                fill
                                className="object-contain transform group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </div>
                    </div>
                    {/* Sparkles Desktop */}
                    <div className="absolute -top-4 -left-4 animate-pulse"><Sparkles className="text-[#FFF9F0] w-8 h-8" /></div>
                </motion.div>

                {/* Central Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center w-full lg:col-span-3 relative flex flex-col items-center justify-center py-8 z-40"
                >
                    {/* Identity block — contained card */}
                    <div className="inline-flex flex-col items-center mb-8">
                        <div className="border border-[#FFB81C]/25 rounded-2xl px-6 py-4 bg-black/30 backdrop-blur-md shadow-2xl">
                            <p className="font-serif text-base md:text-lg font-bold text-white tracking-[0.1em] mb-1">
                                Dakshina Dwaraka Dham
                            </p>
                            <p className="font-serif text-xs md:text-sm font-semibold text-[#FFB81C] tracking-wide">
                                Hare Krishna Movement Chennai
                            </p>
                        </div>
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-[#FFB81C]/10 rounded-full flex items-center justify-center border-2 border-[#FFB81C] shadow-[0_0_30px_rgba(255,184,28,0.4)] backdrop-blur-sm">
                            <Calendar size={32} className="text-[#FFB81C]" />
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-bold text-white mb-6 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] font-serif leading-tight">
                        Vaishnava <span className="text-[#FFB81C] italic text-shadow-glow">Calendar</span>
                    </h1>

                    {/* Ornamental Divider */}
                    <div className="flex items-center justify-center gap-4 mb-8 w-full max-w-md">
                        <div className="h-[2px] flex-1 bg-gradient-to-l from-[#FFB81C] to-transparent"></div>
                        <div className="w-3 h-3 rotate-45 border-2 border-[#FFB81C] shadow-[0_0_15px_#FFB81C] bg-[#FFB81C]/20 flex-shrink-0"></div>
                        <div className="h-[2px] flex-1 bg-gradient-to-r from-[#FFB81C] to-transparent"></div>
                    </div>

                    <p className="text-2xl md:text-4xl lg:text-5xl text-[#FFB81C] font-light tracking-[0.2em] mb-6 drop-shadow-md font-serif">
                        2026 – 2027
                    </p>

                    <p className="text-lg md:text-xl text-white/70 italic max-w-2xl mx-auto mb-10 tracking-wide">
                        "Festival dates · Ekādaśī vrata days · Vaishnava observances"
                    </p>

                    {/* Gaurabda badge */}
                    <div className="inline-flex items-center gap-3 border border-[#FFB81C]/40 bg-[#FFB81C]/10 text-[#FFB81C] font-sans text-xs tracking-[0.3em] px-10 py-4 rounded-full uppercase shadow-lg backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFB81C] animate-pulse" />
                        Gaurabda 540
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFB81C] animate-pulse" />
                    </div>
                </motion.div>

                {/* MOBILE ONLY: Featured Auto-sliding Logos */}
                <div className="w-full flex lg:hidden items-center justify-center relative mt-4 px-4 pb-10">
                    <div className="relative w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,184,28,0.2)] bg-white/10 backdrop-blur-md border-2 border-[#FFB81C]/40 flex items-center justify-center p-10">
                        <div className="relative w-full h-full">
                            <AnimatePresence mode="wait">
                                {currentMobileImage === 0 ? (
                                    <motion.div
                                        key="dakshina"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src="/assets/dakshina-dwaraka-dham.png"
                                            alt="Dakshina Dwaraka Dham Logo"
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="iskcon"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                        className="absolute inset-0 bg-white rounded-xl"
                                    >
                                        <Image
                                            src="/assets/iskcon-logo-updated-transparent.png"
                                            alt="ISKCON Logo"
                                            fill
                                            className="object-contain p-4"
                                            priority
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                    {/* Sparkles Mobile */}
                    <div className="absolute top-4 left-[10%] animate-pulse"><Sparkles className="text-[#FFF9F0] w-6 h-6" /></div>
                    <div className="absolute bottom-16 right-[10%] animate-bounce-slow"><Sun className="text-[#FFB81C] w-5 h-5" /></div>
                </div>

                {/* DESKTOP ONLY: Right Decor Image - ISKCON Updated Logo */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hidden lg:flex lg:col-span-1 items-center justify-end relative"
                >
                    <div className="relative w-full max-w-[220px] aspect-square rounded-2xl overflow-hidden border-[3px] border-[#ea580c]/50 shadow-[0_0_50px_rgba(255,255,255,0.08)] bg-white group hover:shadow-[0_0_70px_rgba(255,255,255,0.2)] transition-all duration-500 flex items-center justify-center p-8">
                        <div className="relative w-full h-full">
                            <Image
                                src="/assets/iskcon-logo-updated-transparent.png"
                                alt="ISKCON Updated Logo"
                                fill
                                className="object-contain transform group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </div>
                    </div>
                    {/* Sparkles Desktop */}
                    <div className="absolute top-10 -right-6 animate-bounce-slow"><Sparkles className="text-[#FFB81C] w-6 h-6" /></div>
                </motion.div>

            </div>
        </section>
    );
}
