"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [hoveredLink, setHoveredLink] = useState<string | null>(null)

    // Scroll Listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
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
        { 
            name: "Temple", 
            href: "/temple",
            dropdown: [
                { name: "About HKM", href: "/about-hkm" },
                { name: "Seven Purposes of Our Society", href: "/seven-purposes" },
                { name: "Temple Information", href: "/temple" },
                { name: "Dakshina Dwaraka", href: "/dakshina-dwaraka" },
                { name: "Blog", href: "/blog" },
            ]
        },
        { 
            name: "Philosophy", 
            href: "/philosophy",
            dropdown: [
                { name: "Ask Any Question", href: "/philosophy/ask-any-question" },
                { name: "Lord Krishna", href: "/philosophy/lord-krishna" },
                { name: "Yugadharma", href: "/philosophy/yugadharma" },
                { name: "Bhagavad Gita", href: "/philosophy/bhagavad-gita" },
                { name: "Sri Chaitanya Mahaprabhu", href: "/philosophy/sri-chaitanya-mahaprabhu" },
                { name: "Krishna Consciousness", href: "/philosophy/krishna-consciousness" },
            ]
        },
        { name: "Activities", href: "/activities" },
        { name: "Gallery", href: "/gallery" },
    ]

    return (
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
                        <div 
                            key={link.name}
                            className="relative group"
                            onMouseEnter={() => setHoveredLink(link.name)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            <Link
                                href={link.href}
                                className={`relative font-medium text-lg transition-colors duration-300 group-hover:text-[#FBB201] ${isScrolled ? "text-[#2B2A2A]" : "text-white drop-shadow-md"
                                    }`}
                                style={{ fontFamily: "var(--font-manrope)" }}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#FBB201] rounded-full transition-all duration-300 group-hover:w-1.5 group-hover:-translate-x-1/2"></span>
                            </Link>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {link.dropdown && hoveredLink === link.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="absolute top-full left-1/2 w-max min-w-[300px] bg-gray-700 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 overflow-hidden ring-1 ring-black/5 z-50"
                                        style={{ x: "-50%" }}
                                    >
                                        <div className="py-2">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block px-6 py-4 text-base font-medium text-gray-100 hover:bg-white/10 hover:text-[#FBB201] hover:pl-8 transition-all duration-300 whitespace-nowrap"
                                                    style={{ fontFamily: "var(--font-manrope)" }}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
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
                        className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden border-t border-gray-100 max-h-[80vh] overflow-y-auto"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col">
                                    <Link
                                        href={link.href}
                                        className="text-lg font-medium text-[#2B2A2A] hover:text-[#0078BF]"
                                        style={{ fontFamily: "var(--font-manrope)" }}
                                        onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                    {/* Mobile Dropdown Items */}
                                    {link.dropdown && (
                                        <div className="pl-4 mt-2 flex flex-col space-y-2 border-l-2 border-gray-100">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="text-sm text-gray-600 hover:text-[#0078BF]"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
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
    )
}
