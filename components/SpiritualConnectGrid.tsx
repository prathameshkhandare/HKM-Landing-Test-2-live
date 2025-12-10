"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, HeartHandshake, Mic, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SpiritualConnectGrid() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-[#0078BF] mb-4 tracking-tight"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        SPIRITUAL CONNECT
                    </h2>
                    <p
                        className="text-lg text-gray-600 font-medium max-w-2xl mx-auto"
                        style={{ fontFamily: "var(--font-manrope)" }}
                    >
                        Pathways to engage, learn, and serve.
                    </p>
                    <div className="w-24 h-1 bg-[#FBB201] mx-auto rounded-full mt-6" />
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

                    {/* Card 1: Community Activities (Spans 2 Cols) */}
                    <motion.div
                        className="md:col-span-2 relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg"
                        whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src="/assets/cultutral-festival.JPG"
                            alt="Community Activities"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="flex items-center gap-2 mb-2 text-[#FBB201]">
                                <Users size={20} />
                                <span className="text-xs font-bold tracking-widest uppercase">Engagement</span>
                            </div>
                            <h3
                                className="text-3xl font-bold text-white mb-4"
                                style={{ fontFamily: "var(--font-manrope)" }}
                            >
                                Community Activities
                            </h3>
                            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-bold group-hover:bg-[#FBB201] group-hover:text-white transition-colors">
                                Explore <ArrowRight size={14} className="ml-2" />
                            </span>
                        </div>
                    </motion.div>

                    {/* Card 2: Vaikuntha Varthai - Magazine (Vertical/Tall - Spans 2 Rows) */}
                    <motion.div
                        className="md:row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg bg-gray-100"
                        whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src="/assets/Magazine-pic.jpg"
                            alt="Vaikuntha Varthai Magazine"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="flex items-center gap-2 mb-2 text-[#FBB201]">
                                <BookOpen size={20} />
                                <span className="text-xs font-bold tracking-widest uppercase">Knowledge</span>
                            </div>
                            <h3
                                className="text-3xl font-bold text-white mb-4 leading-tight"
                                style={{ fontFamily: "var(--font-manrope)" }}
                            >
                                Vaikuntha Varthai
                            </h3>
                            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-bold group-hover:bg-[#FBB201] group-hover:text-white transition-colors">
                                Read Now <ArrowRight size={14} className="ml-2" />
                            </span>
                        </div>
                    </motion.div>

                    {/* Card 3: Anna Daan & Seva (Donations) - Prominent Box */}
                    <motion.div
                        className="relative rounded-3xl overflow-hidden bg-orange-50 border-2 border-[#FBB201] group cursor-pointer shadow-lg flex flex-col justify-center p-8"
                        whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="w-14 h-14 bg-[#FBB201] rounded-full flex items-center justify-center mb-6 text-white shadow-md group-hover:scale-110 transition-transform">
                            <HeartHandshake size={28} />
                        </div>
                        <h3
                            className="text-2xl font-bold text-[#2B2A2A] mb-3"
                            style={{ fontFamily: "var(--font-manrope)" }}
                        >
                            Anna Daan & Seva
                        </h3>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                            Support our mission to feed thousands and serve the community.
                        </p>
                        <span className="inline-flex items-center text-[#0078BF] font-bold group-hover:translate-x-2 transition-transform">
                            Donate Now <ArrowRight size={16} className="ml-2" />
                        </span>
                    </motion.div>

                    {/* Card 4: Spiritual Discourses (Lectures) - Standard Square */}
                    <motion.div
                        className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg"
                        whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src="/assets/Lecture-pic.JPG"
                            alt="Spiritual Discourses"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                                <Mic size={24} />
                            </div>
                            <h3
                                className="text-2xl font-bold text-white"
                                style={{ fontFamily: "var(--font-manrope)" }}
                            >
                                Spiritual Discourses
                            </h3>
                            <span className="mt-4 inline-flex items-center text-white/90 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                Listen <ArrowRight size={14} className="ml-2" />
                            </span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
