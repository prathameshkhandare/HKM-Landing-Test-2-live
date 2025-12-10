"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* --- Component 2: The "High-Contrast" Hero Section --- */}
            <section className="relative w-full h-full overflow-hidden">
                {/* Layer 0: Video Element */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    poster="/assets/hero-poster.jpg"
                >
                    <source src="https://res.cloudinary.com/dmyzn29mc/video/upload/q_auto:good/Temple-Darshan-1_nutfl3.mp4" type="video/mp4" />
                </video>

                {/* Layer 1: Overlay (Dimmer Switch) */}
                <div className="absolute inset-0 bg-black/50 z-10" />

                {/* Layer 2: Text Content */}
                <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-4">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.3,
                                    delayChildren: 0.2,
                                },
                            },
                        }}
                        className="max-w-5xl mx-auto"
                    >
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                            }}
                            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-lg tracking-tight"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Spiritual Awakening
                        </motion.h1>
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                            }}
                            className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed mb-10"
                            style={{ fontFamily: "var(--font-manrope)" }}
                        >
                            Experience the divine atmosphere of Hare Krishna Movement Chennai.
                        </motion.p>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                            }}
                        >
                            <Link
                                href="/temple"
                                className="group relative inline-flex items-center justify-center px-8 py-3 bg-transparent border border-white text-white text-lg font-medium rounded-full overflow-hidden transition-all duration-300 hover:border-white hover:text-[#0078BF] shadow-lg"
                                style={{ fontFamily: "var(--font-manrope)" }}
                            >
                                <span className="relative z-10">Explore Temple</span>
                                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
