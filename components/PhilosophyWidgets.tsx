"use client"

import React from "react"
import { motion } from "framer-motion"
import { ChevronRight, Star, Clock, Heart, Shield, Zap, Globe, Scale } from "lucide-react"

// --- Icons Map ---
const iconMap: any = {
    globe: Globe,
    scale: Scale,
    zap: Zap,
    heart: Heart,
    shield: Shield,
    star: Star,
    clock: Clock
}

// --- Philosophy Card Grid ---
export const PhilosophyCardGrid = ({ items }: { items: { icon: string, title: string, description: string }[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            {items.map((item, index) => {
                const Icon = iconMap[item.icon] || Star
                return (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        key={index}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#FBB201]/50 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 bg-[#FBB201]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Icon className="text-[#FBB201]" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-[#0078BF] mb-3 font-sans">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm font-sans">{item.description}</p>
                    </motion.div>
                )
            })}
        </div>
    )
}

// --- Numbered Principles List ---
export const PrincipleList = ({ items }: { items: { title: string, text: string }[] }) => {
    return (
        <div className="space-y-6 my-12">
            {items.map((item, index) => (
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="flex gap-6 p-6 bg-gray-50 rounded-xl border-l-4 border-[#0078BF] hover:bg-white hover:shadow-md transition-all"
                >
                    <span className="text-4xl font-bold text-[#0078BF]/20 font-sans">0{index + 1}</span>
                    <div>
                        <h3 className="text-xl font-bold text-[#0078BF] mb-2 font-sans">{item.title}</h3>
                        <p className="text-gray-600 font-serif leading-relaxed">{item.text}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

// --- Vertical Timeline ---
export const Timeline = ({ items }: { items: { title: string, text: string }[] }) => {
    return (
        <div className="relative border-l-2 border-[#FBB201]/30 ml-4 md:ml-12 my-12 space-y-12 pl-8 md:pl-12 py-4">
            {items.map((item, index) => (
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="relative"
                >
                    <span className="absolute -left-[45px] md:-left-[61px] top-0 w-6 h-6 bg-[#FBB201] rounded-full border-4 border-white shadow-md"></span>
                    <h3 className="text-2xl font-bold text-[#0078BF] mb-2 font-sans">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-serif max-w-2xl">{item.text}</p>
                </motion.div>
            ))}
        </div>
    )
}

// --- Highlight Quote ---
export const QuoteHighlight = ({ text, author }: { text: string, author?: string }) => {
    return (
        <div className="my-16 text-center relative max-w-4xl mx-auto px-12">
            <span className="absolute top-0 left-0 text-6xl text-[#FBB201]/40 font-serif leading-none">“</span>
            <p className="text-2xl md:text-3xl font-serif text-[#0078BF] font-light leading-relaxed italic relative z-10 px-4">
                {text}
            </p>
            <span className="absolute bottom-0 right-0 text-6xl text-[#FBB201]/40 font-serif leading-none translate-y-4">”</span>
            {author && <p className="mt-8 text-sm font-bold uppercase tracking-widest text-gray-400 relative z-10">— {author}</p>}
        </div>
    )
}
