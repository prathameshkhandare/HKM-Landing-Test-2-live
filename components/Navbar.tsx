"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [hoveredLink, setHoveredLink] = useState<string | null>(null)
    const [hoveredSubLink, setHoveredSubLink] = useState<string | null>(null)

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
            name: "Srila Prabhupada", 
            href: "/srila-prabhupada",
            dropdown: [
                { name: "The Guru", href: "/srila-prabhupada/the-guru" },
                { name: "Biography", href: "/srila-prabhupada" },
                { name: "Achievements", href: "/srila-prabhupada/achievements" },
                { name: "Books", href: "/srila-prabhupada/books" },
                { name: "Bhajans & Kirtans", href: "/srila-prabhupada/bhajans-kirtans" },
                { name: "Our Sampradaya & Parampara", href: "/srila-prabhupada/sampradaya-parampara" },
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
        { 
            name: "Activities", 
            href: "/activities",
            dropdown: [
                { name: "Spiritual Discourses", href: "/activities/spiritual-discourses" },
                { name: "Youth Empowerment Club – FOLK", href: "/activities/folk" },
                { name: "Distribution of spiritual knowledge", href: "/activities/distribution-of-spiritual-knowledge" },
                { name: "Cultural festivals", href: "/activities/cultural-festivals" },
                { name: "Sunday Retreat", href: "/activities/sunday-retreats" },
                { name: "Yuga Dharma", href: "/activities/yuga-dharma" },
                { 
                    name: "ICVK", 
                    href: "/activities/icvk",
                    dropdown: [
                        { name: "ICVK Activities", href: "/activities/icvk/activities" },
                        { name: "ICVK Registration", href: "/activities/icvk/register-for-icvk" },
                        { name: "ICVK Enquiry", href: "/activities/icvk/enquiry" },
                        { name: "REGISTER FOR ICVK (INDIAN CULTURAL AND VALUES FOR KIDS)", href: "/activities/icvk/register-for-icvk" },
                        { name: "Winter Camp Registration", href: "/activities/icvk/winter-camp-registration" },
                    ]
                },
                { name: "Gita Life", href: "/activities/gita-life" },
                { name: "Soulful Sangam", href: "/activities/soulful-sangam" },
                { name: "Kala Madhuryam", href: "/activities/kala-madhuryam" },
                { name: "Tirtha Yatra", href: "/activities/tirtha-yatra" },
                { name: "Atmarpanam", href: "/activities/atmarpanam" },
            ]
        },
        { 
            name: "Gallery", 
            href: "/gallery",
            dropdown: [
                { name: "Daily Darshan", href: "/gallery/daily-darshan" },
                { name: "Festival Photos", href: "/gallery/festival-photos" },
                { name: "Videos", href: "/gallery/videos" },
                { 
                    name: "Downloads", 
                    href: "/gallery/downloads",
                    dropdown: [ // Reusing 'dropdown' key for sub-items for simplicity or 'subItems'
                        { name: "Kirtans", href: "/gallery/downloads/kirtans" },
                        { name: "Magazine", href: "/gallery/downloads/magazine" },
                    ]
                },
            ]
        },
        { name: "Careers", href: "/careers" },
        { name: "Contact us", href: "/contact-us" },
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
                ? "bg-white/90 backdrop-blur-xl shadow-md py-2"
                : "bg-gray-900/20 backdrop-blur-xl py-3"
                }`}
        >
            <div className="container mx-auto px-2 flex items-center justify-between">
                {/* Left: Logo */}
                <Link href="/" className="relative z-50">
                    <div className="relative w-72 h-16 md:w-96 md:h-20">
                         {/* Updated Full ISKCON Logo - "Zoomed" via overflow */}
                         <img 
                            src="/assets/iskcon-logo-main-v2.png" 
                            alt="ISKCON Logo" 
                            className="absolute left-6 top-1/2 -translate-y-1/2 h-[230%] w-auto max-w-none object-contain min-w-[200px]" 
                         />
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
                                className={`relative font-medium text-lg transition-colors duration-300 group-hover:text-[#FBB201] flex items-center gap-1 ${isScrolled ? "text-[#2B2A2A]" : "text-white drop-shadow-md"
                                    }`}
                                style={{ fontFamily: "var(--font-manrope)" }}
                            >
                                {link.name}
                                {link.dropdown && <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />}
                                <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#FBB201] rounded-full transition-all duration-300 group-hover:w-1.5 group-hover:-translate-x-1/2"></span>
                            </Link>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {link.dropdown && hoveredLink === link.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 5 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="absolute top-full left-1/2 w-max min-w-[250px] bg-gray-900/95 backdrop-blur-xl rounded-lg shadow-xl border border-white/10 ring-1 ring-black/5 z-50 mt-1"
                                        style={{ x: "-50%" }}
                                    >
                                        <div className="py-2">
                                            {link.dropdown.map((item) => (
                                                <div 
                                                    key={item.name} 
                                                    className="relative group/sub"
                                                    onMouseEnter={() => setHoveredSubLink(item.name)}
                                                    onMouseLeave={() => setHoveredSubLink(null)}
                                                >
                                                    <Link
                                                        href={item.href}
                                                        className="block px-5 py-3 text-base font-medium text-gray-200 hover:bg-white/5 hover:text-[#FBB201] transition-all duration-200 flex items-center justify-between"
                                                        style={{ fontFamily: "var(--font-manrope)" }}
                                                    >
                                                        {item.name}
                                                        {item.dropdown && (
                                                            <span className="ml-2 text-gray-400">›</span>
                                                        )}
                                                    </Link>
                                                    
                                                    {/* Sub Dropdown */}
                                                    <AnimatePresence>
                                                        {item.dropdown && hoveredSubLink === item.name && (
                                                            <motion.div
                                                                initial={{ opacity: 0, x: -5 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                exit={{ opacity: 0, x: -5 }}
                                                                transition={{ duration: 0.2 }}
                                                                className="absolute top-0 left-full ml-1 w-max min-w-[200px] max-w-[320px] bg-gray-900/95 backdrop-blur-xl rounded-lg shadow-xl border border-white/10 z-[100] py-2 ring-1 ring-black/5"
                                                            >
                                                                {item.dropdown.map((subItem) => (
                                                                    <Link
                                                                        key={subItem.name}
                                                                        href={subItem.href}
                                                                        className="block px-5 py-2.5 text-base font-medium text-gray-200 hover:bg-white/5 hover:text-[#FBB201] transition-all duration-200"
                                                                    >
                                                                        {subItem.name}
                                                                    </Link>
                                                                ))}
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
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
                        className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#FBB201] text-white font-medium transition-transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl uppercase tracking-wide"
                        style={{ fontFamily: "var(--font-manrope)" }}
                    >
                        DONATE NOW
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
                                                <div key={item.name}>
                                                    <Link
                                                        href={item.href}
                                                        className="text-sm text-gray-600 hover:text-[#0078BF] block"
                                                        onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                    {item.dropdown && (
                                                        <div className="pl-4 mt-2 flex flex-col space-y-2 border-l-2 border-gray-200">
                                                            {item.dropdown.map((subItem) => (
                                                                <Link
                                                                    key={subItem.name}
                                                                    href={subItem.href}
                                                                    className="text-sm text-gray-500 hover:text-[#0078BF] block"
                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link
                                href="/donate"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#FBB201] text-white font-medium w-full uppercase tracking-wide"
                                style={{ fontFamily: "var(--font-manrope)" }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                DONATE NOW
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
