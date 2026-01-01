"use client"

import React from "react"
import { motion } from "framer-motion"

interface PhilosophyHeaderProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    imagePosition?: string;
}

export default function PhilosophyHeader({ title, subtitle, backgroundImage, imagePosition = "center 35%" }: PhilosophyHeaderProps) {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src={backgroundImage || "/assets/philosophy/temple-bg.jpg"}
                    alt="Background" 
                    className="w-full h-full object-cover"
                    style={{ objectPosition: imagePosition }}
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto h-full px-6 flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center">
                    
                    {/* Left Text */}
                    <div className="text-white space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide leading-tight font-serif drop-shadow-2xl text-white">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-lg md:text-xl text-gray-100 font-light tracking-wide drop-shadow-lg">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    {/* Right Mantra Box */}
                    <div className="hidden lg:flex justify-end">
                        <div className="bg-[#D91B1B] text-white px-12 py-10 rounded-xl shadow-2xl transform rotate-1 border border-white/10 max-w-xl text-center">
                            <p className="text-xl md:text-2xl font-bold leading-relaxed tracking-wider uppercase font-sans text-white">
                                HARE KRISHNA HARE KRISHNA <br/>
                                KRISHNA KRISHNA HARE HARE ! <br/>
                                HARE RAMA HARE RAMA <br/>
                                RAMA RAMA HARE HARE !!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
