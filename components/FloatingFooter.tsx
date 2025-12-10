"use client"

import React from "react"
import { motion } from "framer-motion"
import { MapPin, Instagram, Youtube, Facebook, Send, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FloatingFooter() {
    return (
        <footer className="relative pt-24 pb-12 px-4 md:px-6 bg-white overflow-hidden">

            {/* Floating Island Container */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative container mx-auto bg-[#0078BF] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-2xl"
            >
                {/* Peacock Feather Watermark */}
                <div className="absolute -bottom-20 -right-20 w-96 h-96 opacity-10 pointer-events-none rotate-12 mix-blend-overlay">
                    <Image
                        src="/assets/peacock-feather.jpg"
                        alt="Peacock Feather"
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">

                    {/* Column 1: The Anchor (Identity) */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="border border-white/20 p-2 ">
                                <img src="/hkcm-logo.svg" alt="HKM Logo" className="h-12 w-auto" />
                            </div>
                        </div>
                        <p className="text-white/80 text-lg leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
                            Spreading the timeless wisdom of Srila Prabhupada and serving the community with devotion.
                        </p>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/30 text-white font-bold hover:bg-white hover:text-[#0078BF] transition-all duration-300 group"
                        >
                            <MapPin size={20} />
                            <span>Get Directions</span>
                        </a>
                    </div>

                    {/* Column 2: The Map (Navigation) */}
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-[#FBB201] font-bold mb-6 uppercase tracking-wider text-sm">Temple</h4>
                            <ul className="space-y-4">
                                {["Darshan Timings", "Deities", "Festivals", "Guest House"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-white/70 hover:text-white transition-colors font-medium">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[#FBB201] font-bold mb-6 uppercase tracking-wider text-sm">Community</h4>
                            <ul className="space-y-4">
                                {["Sunday Feast", "Volunteer", "Life Membership", "Youth Forum"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-white/70 hover:text-white transition-colors font-medium">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Column 3: The Connection (Newsletter) */}
                    <div>
                        <h4 className="text-white font-bold text-2xl mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                            Spiritual Updates
                        </h4>
                        <p className="text-white/70 mb-6">
                            Join our newsletter for daily inspiration and festival updates.
                        </p>
                        <div className="space-y-4">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#FBB201] transition-colors backdrop-blur-sm"
                                />
                            </div>
                            <button className="w-full px-6 py-4 rounded-2xl bg-[#FBB201] text-[#2B2A2A] font-bold hover:bg-[#e0a001] transition-colors flex items-center justify-center gap-2">
                                Subscribe <Send size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Column 4: The Bridge (QR & Socials) */}
                    <div className="flex flex-col items-start lg:items-end space-y-8">
                        {/* QR Card */}
                        <div className="bg-white p-4 rounded-2xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                            <div className="w-32 h-32 bg-gray-100 rounded-xl mb-3 flex items-center justify-center">
                                {/* Placeholder for QR Code */}
                                <div className="text-center">
                                    <div className="w-24 h-24 bg-black/10 mx-auto rounded-lg grid grid-cols-3 gap-1 p-1">
                                        {[...Array(9)].map((_, i) => (
                                            <div key={i} className={`bg-black ${i % 2 === 0 ? 'opacity-100' : 'opacity-20'} rounded-sm`} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-[#0078BF] font-bold text-center text-sm">Scan to Donate</p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {[
                                { icon: Instagram, href: "#" },
                                { icon: Youtube, href: "#" },
                                { icon: Facebook, href: "#" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FBB201] hover:text-[#2B2A2A] transition-all duration-300 backdrop-blur-md"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Copyright Bar */}
                <div className="relative z-10 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
                    <p>© 2025 Hare Krishna Movement Chennai. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>

            </motion.div>
        </footer>
    )
}
