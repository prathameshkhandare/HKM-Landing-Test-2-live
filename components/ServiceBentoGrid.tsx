"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Heart, Users, PlayCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServiceBentoGrid() {
    return (
        <section className="relative py-24 bg-[#FAFAFA] overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-[#0078BF] mb-4 tracking-tight"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        PATHWAYS TO DEVOTION
                    </h2>
                    <p
                        className="text-lg text-[#2B2A2A] font-medium max-w-2xl mx-auto"
                        style={{ fontFamily: "var(--font-manrope)" }}
                    >
                        Explore the many ways to engage with the movement.
                    </p>
                    <div className="w-24 h-1 bg-[#FBB201] mx-auto rounded-full mt-6" />
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

                    {/* 1. Feature Card: The Voice of Krishna (Magazine) - Span 2 Cols */}
                    <motion.div
                        className="md:col-span-2 relative rounded-3xl overflow-hidden bg-white shadow-sm group cursor-pointer"
                        whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="absolute inset-0 flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
                                <Image
                                    src="/assets/Magazine-pic.jpg"
                                    alt="The Voice of Krishna Magazine"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent md:via-transparent" />
                            </div>
                            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-white">
                                <div className="flex items-center gap-2 mb-3 text-[#0078BF]">
                                    <BookOpen size={20} />
                                    <span className="text-xs font-bold tracking-widest uppercase">Publications</span>
                                </div>
                                <h3
                                    className="text-2xl font-bold text-[#2B2A2A] mb-3"
                                    style={{ fontFamily: "var(--font-playfair)" }}
                                >
                                    The Voice of Krishna
                                </h3>
                                <p className="text-gray-600 mb-6 line-clamp-3" style={{ fontFamily: "var(--font-manrope)" }}>
                                    Immerse yourself in Vedic wisdom through our monthly magazine. Articles, stories, and insights for modern living.
                                </p>
                                <span className="inline-flex items-center text-[#FBB201] font-bold group-hover:translate-x-1 transition-transform">
                                    Read More <ArrowRight size={16} className="ml-2" />
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* 2. Tall Card: Community Activities - Span 2 Rows */}
                    <motion.div
                        className="md:row-span-2 relative rounded-3xl overflow-hidden bg-white shadow-sm group cursor-pointer"
                        whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Image
                            src="/assets/cultutral-festival.JPG"
                            alt="Community Activities"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <div className="flex items-center gap-2 mb-3 text-[#FBB201]">
                                <Users size={20} />
                                <span className="text-xs font-bold tracking-widest uppercase">Community</span>
                            </div>
                            <h3
                                className="text-3xl font-bold mb-3"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                Community Activities
                            </h3>
                            <p className="text-gray-200 mb-6 line-clamp-4" style={{ fontFamily: "var(--font-manrope)" }}>
                                Join our vibrant youth programs, cultural festivals, and kirtan sessions. Experience the joy of devotion together.
                            </p>
                            <span className="inline-flex items-center text-white font-bold group-hover:translate-x-1 transition-transform">
                                Join Us <ArrowRight size={16} className="ml-2" />
                            </span>
                        </div>
                    </motion.div>

                    {/* 3. Action Card: Dana & Seva (Donation) */}
                    <motion.div
                        className="relative rounded-3xl overflow-hidden bg-white shadow-sm group cursor-pointer border-2 border-[#FBB201] flex flex-col justify-center p-8 text-center"
                        whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="w-16 h-16 bg-[#FBB201]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#FBB201] group-hover:scale-110 transition-transform duration-300">
                            <Heart size={32} fill="currentColor" />
                        </div>
                        <h3
                            className="text-2xl font-bold text-[#2B2A2A] mb-2"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Dana & Seva
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm" style={{ fontFamily: "var(--font-manrope)" }}>
                            Support the temple's mission and gain spiritual merit through donation.
                        </p>
                        <span className="inline-block px-6 py-2 bg-[#FBB201] text-white font-bold rounded-full mx-auto group-hover:bg-[#e0a001] transition-colors">
                            Donate Now
                        </span>
                    </motion.div>

                    {/* 4. Media Card: Discourses (Lectures) */}
                    <motion.div
                        className="relative rounded-3xl overflow-hidden bg-white shadow-sm group cursor-pointer"
                        whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Image
                            src="/assets/Lecture-pic.JPG"
                            alt="Spiritual Discourses"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <PlayCircle size={24} className="text-white" />
                            </div>
                            <h3
                                className="text-2xl font-bold mb-2"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                Discourses
                            </h3>
                            <p className="text-sm text-gray-200" style={{ fontFamily: "var(--font-manrope)" }}>
                                Listen to transformative lectures by senior devotees.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
