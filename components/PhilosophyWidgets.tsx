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
export const PhilosophyCardGrid = ({ items }: { items: { icon: string, title: string, description: string, image?: string, imagePos?: string }[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            {items.map((item, index) => {
                const Icon = iconMap[item.icon] || Star
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        key={index}
                        className="bg-white rounded-xl shadow-lg border-2 border-transparent hover:border-[#FFB81C]/40 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col"
                    >
                        {item.image && (
                            <div className="relative w-full h-48 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={`w-full h-full object-cover ${item.imagePos || "object-center"} transform group-hover:scale-110 transition-transform duration-700`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                            </div>
                        )}
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Icon className="text-[#2D0A0A]" size={80} />
                            </div>
                            <div className="w-14 h-14 bg-gradient-to-br from-[#FFB81C] to-[#ea580c] rounded-full flex items-center justify-center mb-6 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                                <Icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#2D0A0A] mb-4 font-serif tracking-wide">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-[15px] font-sans relative z-10">{item.description}</p>
                        </div>
                    </motion.div>
                )
            })}
        </div>
    )
}

// --- Numbered Principles List ---
export const PrincipleList = ({ items }: { items: { title: string, text: string, image?: string }[] }) => {
    return (
        <div className="space-y-12 my-16">
            {items.map((item, index) => (
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="flex flex-col gap-8 p-8 bg-white rounded-xl border-l-[6px] border-[#ea580c] shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                    <div className="flex flex-col md:flex-row gap-6">
                        <span className="text-5xl font-black text-[#FFB81C]/20 font-serif leading-none group-hover:text-[#FFB81C]/40 transition-colors">0{index + 1}</span>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-[#701a1a] mb-3 font-serif group-hover:text-[#ea580c] transition-colors">{item.title}</h3>
                            <p className="text-gray-600 font-sans leading-relaxed text-lg">{item.text}</p>
                        </div>
                    </div>
                    {item.image && (
                        <div className="relative w-full max-w-2xl h-64 md:h-80 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    )
}

// --- Vertical Timeline ---
export const Timeline = ({ items }: { items: { title: string, text: string, image?: string, imageCaption?: string, imagePos?: string }[] }) => {
    return (
        <div className="relative border-l-2 border-[#FBB201]/30 ml-4 md:ml-12 my-16 space-y-16 pl-8 md:pl-12 py-4">
            {items.map((item, index) => (
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="relative group"
                >
                    <span className="absolute -left-[45px] md:-left-[61px] top-0 w-6 h-6 bg-[#FFB81C] rounded-full border-4 border-[#FFF9F0] shadow-md group-hover:scale-125 transition-transform duration-300"></span>
                    <h3 className="text-2xl font-bold text-[#2D0A0A] mb-3 font-serif group-hover:text-[#ea580c] transition-colors">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-sans max-w-2xl text-lg mb-4">{item.text}</p>
                    {item.image && (
                        <div className="relative w-full max-w-md h-64 md:h-80 rounded-xl overflow-hidden shadow-lg mt-4 group hover:shadow-2xl transition-all duration-500">
                            <img
                                src={item.image}
                                alt={item.imageCaption || item.title}
                                className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ${item.imagePos || 'object-center'}`}
                            />
                            {item.imageCaption && (
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                    <p className="text-white text-sm font-medium">{item.imageCaption}</p>
                                </div>
                            )}
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    )
}

// --- Highlight Quote ---
export const QuoteHighlight = ({ text, author }: { text: string, author?: string }) => {
    return (
        <div className="my-20 text-center relative max-w-4xl mx-auto px-8 md:px-12 py-10 rounded-2xl bg-[#FFF9F0] border border-[#FFB81C]/20 shadow-inner">
            <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.05] bg-contain bg-center bg-no-repeat pointer-events-none"></div>
            <span className="absolute top-4 left-6 text-6xl text-[#FFB81C] font-serif leading-none opacity-40">“</span>
            <p className="text-2xl md:text-3xl font-serif text-[#701a1a] font-medium leading-relaxed italic relative z-10">
                {text}
            </p>
            <span className="absolute bottom-4 right-6 text-6xl text-[#FFB81C] font-serif leading-none translate-y-4 opacity-40">”</span>
            {author && (
                <div className="mt-8 flex items-center justify-center gap-4">
                    <div className="h-[1px] w-12 bg-[#FFB81C]"></div>
                    <p className="text-sm font-bold uppercase tracking-widest text-[#ea580c] relative z-10">{author}</p>
                    <div className="h-[1px] w-12 bg-[#FFB81C]"></div>
                </div>
            )}
        </div>
    )
}
