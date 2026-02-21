"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Home, Landmark, User, BookOpen, Sparkles, Image as LucideImage, Briefcase, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className={className}
    >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.8 69.4 27.2 106.2 27.2h.1c122.3 0 222-99.6 222-222 0-59.3-23-115.1-65.1-157.1zM223.9 445.9c-33.1 0-65.7-8.9-93.9-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54 81.2 54 130.5 0 101.8-82.7 184.6-184.4 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18s-8.8-2.8-12.5 2.8-14.3 18-17.6 21.8-6.5 4.2-12 1.4c-5.5-2.8-23.2-8.5-44.2-27.2-16.3-14.5-27.3-32.5-30.5-37.9s-.3-8.4 2.4-11.1c2.4-2.4 5.5-6.5 8.2-9.7 2.8-3.3 3.7-5.5 5.5-9.2s.9-6.9-.5-9.7-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9-19.4 19-19.4 46.3 20 53.6 22.8 57.3c2.8 3.7 39.4 60.2 95.5 84.4 13.3 5.8 23.7 9.2 31.9 11.9 13.4 4.3 25.7 3.7 35.4 2.2 10.8-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
)

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [hoveredLink, setHoveredLink] = useState<string | null>(null)
    const [hoveredSubLink, setHoveredSubLink] = useState<string | null>(null)
    const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null)
    const pathname = usePathname()

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

    const isHomePage = pathname === "/"
    // Transparent if on Home Page AND not scrolled
    const isTransparent = isHomePage && !isScrolled

    // Background Class logic
    const navBackgroundClass = isTransparent
        ? "bg-transparent py-2 text-white"
        : "bg-white/95 backdrop-blur-xl shadow-md py-2 text-[#2B2A2A]"

    // Text Color Logic for Links
    const linkColorClass = isTransparent
        ? "text-white hover:text-[#FFD700] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-semibold tracking-wide"
        : "text-[#2B2A2A] hover:text-[#FBB201]"

    // SVG Color for Chevron
    const chevronColorClass = isTransparent ? "text-white drop-shadow-md" : "text-[#2B2A2A]"

    // Logo filter (optional, to make it white if needed, but assuming image is fine or needs background)
    // If the logo is dark image, and we are on dark video, we might want to brighten it.
    // For now, keeping as is, but adding a class.

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
                        { name: "Summer Camp Registration", href: "/activities/icvk/summer-camp-registration" },
                        { name: "ICVK Registration", href: "/activities/icvk/register-for-icvk" },
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
                { name: "Media", href: "/gallery/media" },
                { name: "Festival Photos", href: "/gallery/festival-photos" },
                { name: "Videos", href: "/gallery/videos" },
                {
                    name: "Downloads",
                    href: "/gallery/downloads",
                    dropdown: [
                        { name: "Kirtans", href: "/gallery/downloads/kirtans" },
                        { name: "Magazine", href: "/gallery/downloads/magazine" },
                    ]
                },
            ]
        },
        { name: "Careers", href: "/careers" },
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${navBackgroundClass}`}
        >
            <div className="container mx-auto px-4 flex items-center">
                {/* Left: Logo Container */}
                <div className="flex-1 flex justify-start">
                    <Link href="/" className="relative z-50">
                        <div className="relative h-16 md:h-20 w-52 sm:w-52 md:w-64 lg:w-72 transition-all duration-300">
                            {/* White Logo (Transparent State) - Generated with White Text */}
                            <img
                                src="/assets/iskcon-new-logo-transparent.png"
                                alt="ISKCON Logo White"
                                className={`absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 h-[210%] sm:h-[210%] max-w-[280px] object-contain object-left min-w-[240px] transition-opacity duration-300 drop-shadow-md ${isTransparent ? 'opacity-100' : 'opacity-0'}`}
                            />
                            {/* Main Logo (Scrolled State) */}
                            <img
                                src="/assets/iskcon-logo-main.png"
                                alt="ISKCON Logo"
                                className={`absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 h-[210%] sm:h-[210%] max-w-[280px] object-contain object-left min-w-[240px] transition-opacity duration-300 ${isTransparent ? 'opacity-0' : 'opacity-100'}`}
                            />
                        </div>
                    </Link>
                </div>

                {/* Center: Desktop Nav */}
                <div className="hidden xl:flex flex-none justify-center items-center px-4">
                    <nav className="flex items-center space-x-1.5 2xl:space-x-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => setHoveredLink(link.name)}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "relative text-sm 2xl:text-lg transition-colors duration-300 flex items-center gap-1 whitespace-nowrap",
                                        linkColorClass
                                    )}
                                    style={{ fontFamily: "var(--font-manrope)" }}
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown className={cn("w-3 h-3 2xl:w-4 2xl:h-4 transition-transform duration-200 group-hover:rotate-180", chevronColorClass)} />}
                                    <span className={cn("absolute -bottom-1 left-1/2 w-0 h-1 bg-[#FBB201] rounded-full transition-all duration-300 group-hover:w-1.5 group-hover:-translate-x-1/2")}></span>
                                </Link>

                                {/* Dropdown Menu - Standard White Background usually OK */}
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
                </div>

                {/* Right: Donate Button & Mobile Toggle */}
                <div className="flex-1 flex justify-end items-center gap-2 2xl:gap-8">
                    <Link
                        href="/contact-us"
                        className={cn(
                            "hidden xl:inline-block text-sm 2xl:text-lg opacity-90 hover:opacity-100 transition-all whitespace-nowrap",
                            linkColorClass
                        )}
                        style={{ fontFamily: "var(--font-manrope)" }}
                    >
                        Contact us
                    </Link>

                    <div className="flex items-center gap-4 md:gap-5">
                        <Link
                            href="/donate"
                            className="hidden lg:inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-[#FBB201] via-[#FFD700] to-[#FBB201] text-white font-bold transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(251,178,1,0.3)] shadow-lg uppercase tracking-wider whitespace-nowrap active:scale-95"
                            style={{ fontFamily: "var(--font-manrope)" }}
                        >
                            DONATE NOW
                        </Link>

                        <Link
                            href="https://api.whatsapp.com/send/?phone=919789057101&text&type=phone_number&app_absent=0"
                            target="_blank"
                            className="hidden lg:inline-flex items-center justify-center transition-transform hover:-translate-y-0.5"
                            aria-label="Contact on WhatsApp"
                        >
                            <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all duration-300">
                                <WhatsAppIcon className="w-6 h-6 fill-white" />
                            </div>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`lg:hidden p-2 rounded-full transition-colors ${isTransparent ? 'text-white hover:bg-white/10' : 'text-[#2B2A2A] hover:bg-gray-100'}`}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay (Enhanced) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 top-[64px] md:top-[80px] bg-white z-40 overflow-y-auto overflow-x-hidden"
                    >
                        <motion.div
                            className="flex flex-col p-6 space-y-2 pb-32 container mx-auto"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: { transition: { staggerChildren: 0.05 } }
                            }}
                        >
                            {navLinks.filter(l => l.name !== "Contact us").map((link) => {
                                const Icon = {
                                    "Home": Home,
                                    "Temple": Landmark,
                                    "Srila Prabhupada": User,
                                    "Philosophy": BookOpen,
                                    "Activities": Sparkles,
                                    "Gallery": LucideImage,
                                    "Careers": Briefcase
                                }[link.name] || ChevronRight;

                                const isActive = activeMobileDropdown === link.name;

                                return (
                                    <motion.div
                                        key={link.name}
                                        variants={{
                                            hidden: { opacity: 0, x: -20 },
                                            visible: { opacity: 1, x: 0 }
                                        }}
                                        className="flex flex-col border-b border-[#FBB201]/10 last:border-0"
                                    >
                                        <div
                                            className={cn(
                                                "flex items-center justify-between py-4 cursor-pointer group",
                                                isActive ? "text-[#FBB201]" : "text-[#2B2A2A]"
                                            )}
                                            onClick={() => {
                                                if (link.dropdown) {
                                                    setActiveMobileDropdown(isActive ? null : link.name);
                                                } else {
                                                    setIsMobileMenuOpen(false);
                                                }
                                            }}
                                        >
                                            <Link
                                                href={link.dropdown ? "#" : link.href}
                                                className="flex items-center gap-4 flex-1"
                                                onClick={(e) => {
                                                    if (link.dropdown) e.preventDefault();
                                                    else setIsMobileMenuOpen(false);
                                                }}
                                            >
                                                <div className={cn("p-2.5 rounded-full transition-colors", isActive ? "bg-[#FBB201]/10" : "bg-white shadow-sm border border-gray-100")}>
                                                    {/* @ts-ignore */}
                                                    <Icon size={20} className={isActive ? "text-[#FBB201]" : "text-gray-500"} />
                                                </div>
                                                <span className="text-lg font-bold tracking-wide" style={{ fontFamily: "var(--font-manrope)" }}>{link.name}</span>
                                            </Link>

                                            {link.dropdown && (
                                                <ChevronDown className={cn("transition-transform duration-300", isActive ? "rotate-180 text-[#FBB201]" : "text-gray-400")} size={20} />
                                            )}
                                        </div>

                                        {/* Submenu Accordion */}
                                        <AnimatePresence>
                                            {link.dropdown && isActive && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden bg-white/50 rounded-xl mb-4"
                                                >
                                                    <div className="flex flex-col p-2 space-y-1">
                                                        {link.dropdown.map((item) => (
                                                            <div key={item.name}>
                                                                <Link
                                                                    href={item.href}
                                                                    className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-[#FBB201] hover:bg-[#FBB201]/5 rounded-lg transition-colors flex items-center gap-3"
                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                >
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#FBB201]/40" />
                                                                    {item.name}
                                                                </Link>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}

                            {/* Actions */}
                            <motion.div
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                className="pt-6 space-y-3"
                            >
                                <Link
                                    href="/donate"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-center w-full py-4 rounded-xl bg-gradient-to-r from-[#FBB201] via-[#FFB81C] to-[#E6A300] text-white font-bold tracking-wider shadow-lg shadow-[#FBB201]/30 active:scale-[0.98] transition-all text-lg"
                                >
                                    DONATE NOW
                                </Link>
                                <div className="grid grid-cols-2 gap-3 pb-8">
                                    <Link
                                        href="/contact-us"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-center w-full py-3.5 rounded-xl border-2 border-[#FBB201]/50 text-[#FBB201] font-bold tracking-wide bg-white active:scale-[0.98] transition-all text-sm hover:bg-[#FBB201]/5 shadow-sm"
                                    >
                                        Contact Us
                                    </Link>
                                    <Link
                                        href="https://api.whatsapp.com/send/?phone=919789057101&text&type=phone_number&app_absent=0"
                                        target="_blank"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-center w-full py-3.5 rounded-xl bg-[#25D366] text-white font-bold tracking-wide shadow-md active:scale-[0.98] transition-all text-sm gap-2 hover:bg-[#20bd5a]"
                                    >
                                        <WhatsAppIcon className="w-5 h-5 fill-white" />
                                        WhatsApp
                                    </Link>
                                </div>
                            </motion.div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
