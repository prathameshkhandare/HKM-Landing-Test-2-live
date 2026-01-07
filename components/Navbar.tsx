"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
)

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
                { name: "Yatramritam", href: "/activities/tirtha-yatra" },
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
                ? "bg-white/95 backdrop-blur-xl shadow-md py-2"
                : "bg-white/90 backdrop-blur-md py-3"
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
                            className="absolute -left-8 top-1/2 -translate-y-1/2 h-[230%] w-auto max-w-none object-contain min-w-[200px]" 
                         />
                    </div>
                </Link>

                {/* Center: Desktop Nav */}
                <nav className="hidden xl:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <div 
                            key={link.name}
                            className="relative group"
                            onMouseEnter={() => setHoveredLink(link.name)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            <Link
                                href={link.href}
                                className="relative font-medium text-lg transition-colors duration-300 group-hover:text-[#FBB201] flex items-center gap-1 text-[#2B2A2A] whitespace-nowrap"
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
                                        className="absolute top-full left-1/2 w-max min-w-[260px] max-w-[350px] bg-[#FFF9F0] rounded-lg shadow-xl border border-[#FBB201]/20 ring-1 ring-black/5 z-50 mt-1"
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
                                                        className="block px-5 py-3 text-base font-medium text-[#0f172a] hover:bg-[#FBB201]/10 hover:text-[#d97706] transition-all duration-200 flex items-center justify-between"
                                                        style={{ fontFamily: "var(--font-manrope)" }}
                                                    >
                                                        <span className="truncate pr-2">{item.name}</span>
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
                                                                className="absolute top-0 left-full ml-1 w-80 min-w-[220px] bg-[#FFF9F0] rounded-lg shadow-xl border border-[#FBB201]/20 z-[100] py-2 ring-1 ring-black/5"
                                                            >
                                                                {item.dropdown.map((subItem) => (
                                                                    <Link
                                                                        key={subItem.name}
                                                                        href={subItem.href}
                                                                        className="block px-5 py-2.5 text-base font-medium text-[#0f172a] hover:bg-[#FBB201]/10 hover:text-[#d97706] transition-all duration-200 whitespace-normal leading-tight"
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
                        className="hidden xl:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#FBB201] text-white font-medium transition-transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl uppercase tracking-wide whitespace-nowrap"
                        style={{ fontFamily: "var(--font-manrope)" }}
                    >
                        DONATE NOW
                    </Link>

                    <Link
                        href="https://api.whatsapp.com/send/?phone=919789057101&text&type=phone_number&app_absent=0"
                        target="_blank"
                        className="hidden xl:inline-flex items-center justify-center p-2.5 rounded-full bg-[#25D366] text-white transition-transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl hover:bg-[#20b85c]"
                        aria-label="Contact on WhatsApp"
                    >
                         <WhatsAppIcon className="w-6 h-6" />
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="xl:hidden p-2 rounded-full transition-colors text-[#2B2A2A] hover:bg-gray-100"
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
                        className="absolute top-full left-0 right-0 bg-[#FFF9F0] shadow-xl xl:hidden border-t border-[#FBB201]/20 max-h-[80vh] overflow-y-auto"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col">
                                    <Link
                                        href={link.href}
                                        className="text-lg font-medium text-[#2B2A2A] hover:text-[#2D0A0A]"
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
                                                        className="text-sm text-gray-600 hover:text-[#2D0A0A] block"
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

                            <Link
                                href="https://api.whatsapp.com/send/?phone=919789057101&text&type=phone_number&app_absent=0"
                                target="_blank"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#25D366] text-white font-medium w-full uppercase tracking-wide gap-2"
                                style={{ fontFamily: "var(--font-manrope)" }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <WhatsAppIcon className="w-5 h-5" />
                                WhatsApp
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
