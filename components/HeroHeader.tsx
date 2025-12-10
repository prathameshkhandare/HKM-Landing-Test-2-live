"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Mouse } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HeroHeader() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Scroll Listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Navigation Links
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Temple", href: "/temple" },
        { name: "Philosophy", href: "/philosophy" },
        { name: "Gallery", href: "/gallery" },
    ]

    return (
        <>
            {/* --- Intelligent Header --- */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
                    ? "bg-white/90 backdrop-blur-xl shadow-md py-3"
                    : "bg-gray-900/20 backdrop-blur-xl py-6"
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Left: Logo */}
                    <Link href="/" className="relative z-50">
                        <div className={`transition-all duration-300`}>
                            {/* Using the SVG provided in the prompt */}
                            <img src="/hkcm-logo.svg" alt="HKM Chennai Logo" className="h-12 w-auto" />
                        </div>
                    </Link>

                    {/* Center: Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative font-medium text-lg transition-colors duration-300 group ${isScrolled ? "text-[#2B2A2A]" : "text-white drop-shadow-md"
                                    }`}
                                style={{ fontFamily: "var(--font-manrope)" }}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#FBB201] rounded-full transition-all duration-300 group-hover:w-1.5 group-hover:-translate-x-1/2"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Right: Donate Button & Mobile Toggle */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/donate"
                            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#FBB201] text-white font-medium transition-transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                            style={{ fontFamily: "var(--font-manrope)" }}
                        >
                            Donate
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`md:hidden p-2 rounded-full transition-colors ${isScrolled ? "text-[#2B2A2A] hover:bg-gray-100" : "text-white hover:bg-white/10"
                                }`}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden border-t border-gray-100"
                        >
                            <div className="flex flex-col p-6 space-y-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-medium text-[#2B2A2A] hover:text-[#0078BF]"
                                        style={{ fontFamily: "var(--font-manrope)" }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link
                                    href="/donate"
                                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#FBB201] text-white font-medium w-full"
                                    style={{ fontFamily: "var(--font-manrope)" }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Donate
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* --- Cinematic Hero Section --- */}
            <section className="relative h-screen w-full overflow-hidden">
                {/* Background Video (z-0) */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        poster="/assets/hero-poster.jpg" // Fallback if needed
                    >
                        {/* Placeholder video source - replace with actual asset if available */}
                        <source src="https://res.cloudinary.com/dmyzn29mc/video/upload/q_auto:good/Temple-Darshan-1_nutfl3.mp4" type="video/mp4" />
                    </video>

                    {/* Cinema Layer: Solid dark overlay for max readability (z-10) */}
                    <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
                </div>

                {/* Hero Content (z-20) */}
                <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 pb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1
                            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Spiritual Awakening
                        </h1>
                        <p
                            className="text-lg md:text-2xl text-white/95 font-light mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
                            style={{ fontFamily: "var(--font-manrope)" }}
                        >
                            Experience the divine atmosphere of Hare Krishna Movement Chennai.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-3 bg-transparent border border-white text-white text-lg font-medium rounded-full overflow-hidden transition-all duration-300 hover:border-white hover:text-[#0078BF] shadow-lg"
                            style={{ fontFamily: "var(--font-manrope)" }}
                        >
                            <span className="relative z-10">Explore Temple</span>
                            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
                        </motion.button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80 flex flex-col items-center gap-2 drop-shadow-md"
                    >
                        <span className="text-sm font-light tracking-widest uppercase" style={{ fontFamily: "var(--font-manrope)" }}>Scroll</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >
                            <Mouse size={24} />
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
