"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className={className}
    >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 1.95.63 3.852 1.832 5.454L2.875 21l3.779-.807zm8.418-5.719c.148-.094.25-.192.348-.344.094-.148.24-.25.336-.395.094-.145.048-.396-.145-.591-.192-.195-.438-.342-.628-.485-.192-.144-.43-.238-.669-.333-.239-.095-.515.227-.816.594-.301.367-.655.244-.949.096-.293-.148-1.408-.667-2.716-1.836-1.308-1.169-1.93-2.338-2.227-2.635-.296-.296-.464-.522.096-.957.56-1.054.437-1.149-.096-2.217-.532-1.067-.936-1.018-1.285-1.018h-.394c-.144 0-.29.049-.436.145-.148.096-1.018.679-1.018 2.768 0 2.089 1.455 3.931 3.593 6.804 2.139 2.873 5.448 4.606 6.805 5.289.585.293 1.259.438 1.802.438.543 0 1.209-.244 1.691-.727z" />
    </svg>
)

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [hoveredLink, setHoveredLink] = useState<string | null>(null)
    const [hoveredSubLink, setHoveredSubLink] = useState<string | null>(null)
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
        ? "bg-transparent py-4 text-white" 
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
                    dropdown: [ 
                        { name: "Kirtans", href: "/gallery/downloads/kirtans" },
                        { name: "Magazine", href: "/gallery/downloads/magazine" },
                    ]
                },
            ]
        },
        { name: "Careers", href: "/careers" },
        // Contact us moved to separate button group for better spacing
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${navBackgroundClass}`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Left: Logo */}
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

                {/* Center: Desktop Nav */}
                <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8 xl:mr-8">
                    {navLinks.map((link) => (
                        <div 
                            key={link.name}
                            className="relative group"
                            onMouseEnter={() => setHoveredLink(link.name)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            <Link
                                href={link.href}
                                className={`relative text-lg transition-colors duration-300 flex items-center gap-1 whitespace-nowrap ${linkColorClass}`}
                                style={{ fontFamily: "var(--font-manrope)" }}
                            >
                                {link.name}
                                {link.dropdown && <ChevronDown className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180 ${chevronColorClass}`} />}
                                <span className={`absolute -bottom-1 left-1/2 w-0 h-1 bg-[#FBB201] rounded-full transition-all duration-300 group-hover:w-1.5 group-hover:-translate-x-1/2`}></span>
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

                {/* Right: Donate Button & Mobile Toggle */}
                <div className="flex items-center space-x-4">
                    {/* Explicit Contact Us Link for better spacing */}
                    <Link
                        href="/contact-us"
                        className={`hidden xl:block relative text-lg transition-colors duration-300 whitespace-nowrap mr-2 ${linkColorClass}`}
                        style={{ fontFamily: "var(--font-manrope)" }}
                    >
                        Contact us
                    </Link>

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
                        className={`xl:hidden p-2 rounded-full transition-colors ${isTransparent ? 'text-white hover:bg-white/10' : 'text-[#2B2A2A] hover:bg-gray-100'}`}
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
                                href="/contact-us"
                                className="text-lg font-medium text-[#2B2A2A] hover:text-[#2D0A0A]"
                                style={{ fontFamily: "var(--font-manrope)" }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact us
                            </Link>

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
