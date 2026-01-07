"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Navigation Data Structure
const navItems = [
    { name: "Home", link: "/" },
    {
        name: "Temple",
        link: "/temple",
        dropdown: [
            { name: "About HKM", link: "/temple/about-hkm" },
            { name: "Seven Purposes of Our Society", link: "/temple/seven-purposes" },
            { name: "Temple Information", link: "/temple/info" },
            { name: "Dakshina Dwarka", link: "/temple/dakshina-dwarka" },
            { name: "Blog", link: "/blog" },
        ],
    },
    {
        name: "Srila Prabhupada",
        link: "/srila-prabhupada",
        dropdown: [
            { name: "The Guru", link: "/srila-prabhupada/guru" },
            { name: "Biography", link: "/srila-prabhupada/biography" },
            { name: "Achievements", link: "/srila-prabhupada/achievements" },
            { name: "Books", link: "/srila-prabhupada/books" },
            { name: "Bhajans and Kirtans", link: "/srila-prabhupada/bhajans" },
            { name: "Our Sampradaya and Paramparas", link: "/srila-prabhupada/parampara" },
        ],
    },
    {
        name: "Philosophy",
        link: "/philosophy",
        dropdown: [
            { name: "AAQ", link: "/philosophy/aaq" },
            { name: "Lord Krishna", link: "/philosophy/krishna" },
            { name: "Yugadharma", link: "/philosophy/yugadharma" },
            { name: "Bhagavad Gita", link: "/philosophy/bhagavad-gita" },
            { name: "Shri Chaitanya Mahaprabhu", link: "/philosophy/chaitanya" },
            { name: "Krishna Consciousness", link: "/philosophy/krishna-consciousness" },
        ],
    },
    {
        name: "Activities",
        link: "/activities",
        dropdown: [
            { name: "Spiritual Discourses", link: "/activities/discourses" },
            { name: "Youth Empowerment Club - FOLK", link: "/activities/folk" },
            { name: "Distribution of Spiritual Knowledge", link: "/activities/distribution" },
            { name: "Cultural Festivals", link: "/activities/festivals" },
            { name: "Sunday Retreat", link: "/activities/sunday-retreat" },
            { name: "Yuga Dharma", link: "/activities/yuga-dharma" },
            { name: "ICVK", link: "/activities/icvk" },
            { name: "Gita Life", link: "/activities/gita-life" },
            { name: "Kala Madhurayam", link: "/activities/kala-madhurayam" },
            { name: "Soulful Sangam", link: "/activities/soulful-sangam" },
            { name: "Tirth Yatra", link: "/activities/tirth-yatra" },
            { name: "Atmarpanam", link: "/activities/atmarpanam" },
        ],
    },
    {
        name: "Gallery",
        link: "/gallery",
        dropdown: [
            { name: "Daily Darshan", link: "/gallery/darshan" },
            { name: "Festival Photos", link: "/gallery/festivals" },
            { name: "Videos", link: "/gallery/videos" },
            { name: "Downloads", link: "/gallery/downloads" },
        ],
    },
    { name: "Careers", link: "/careers" },
    { name: "Contact Us", link: "/contact-us" },
]

export default function Header() {
    const router = useRouter()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null)

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
                    isScrolled
                        ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
                        : "bg-transparent py-4"
                )}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group z-50">
                            <div className={cn(
                                "relative transition-all duration-300",
                                isScrolled ? "w-10 h-10" : "w-12 h-12"
                            )}>
                                <img
                                    src="/HKMC logo.svg"
                                    alt="HKM Logo"
                                    className="w-full h-full object-contain drop-shadow-md"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className={cn(
                                    "font-heading font-bold leading-none tracking-tight transition-colors duration-300",
                                    isScrolled ? "text-charcoal text-lg" : "text-white text-xl drop-shadow-md"
                                )}>
                                    Hare Krishna
                                </span>
                                <span className={cn(
                                    "font-medium tracking-wide transition-colors duration-300",
                                    isScrolled ? "text-charcoal/80 text-[10px]" : "text-white/90 text-xs drop-shadow-sm"
                                )}>
                                    Movement Chennai
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden xl:flex items-center gap-6">
                            {navItems.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative group"
                                    onMouseEnter={() => setHoveredItem(item.name)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    <Link
                                        href={item.link}
                                        className={cn(
                                            "relative text-sm font-medium transition-colors duration-300 py-2 flex items-center gap-1",
                                            isScrolled ? "text-charcoal hover:text-[#2D0A0A]" : "text-white hover:text-white/90 drop-shadow-sm"
                                        )}
                                    >
                                        {item.name}
                                        {item.dropdown && (
                                            <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                                        )}
                                        {hoveredItem === item.name && (
                                            <motion.div
                                                layoutId="underline"
                                                className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#FBB201]"
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                transition={{ duration: 0.2 }}
                                            />
                                        )}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {item.dropdown && (
                                        <AnimatePresence>
                                            {hoveredItem === item.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 z-50"
                                                >
                                                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden p-2">
                                                        {item.dropdown.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.link}
                                                                className="block px-4 py-2.5 rounded-lg text-sm text-gray-600 hover:text-[#2D0A0A] hover:bg-[#FBB201]/5 transition-colors"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* CTA Button & Mobile Toggle */}
                        <div className="flex items-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => router.push("/donate")}
                                className="hidden sm:flex relative overflow-hidden group items-center justify-center px-6 py-2 rounded-full font-bold text-sm tracking-wide bg-[#FBB201] text-white shadow-lg"
                            >
                                <span className="relative z-10">DONATE</span>
                                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/20 to-transparent z-0" />
                            </motion.button>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className={cn(
                                    "xl:hidden p-2 rounded-full transition-colors",
                                    isScrolled ? "text-charcoal hover:bg-black/5" : "text-white hover:bg-white/10"
                                )}
                                aria-label="Open menu"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 xl:hidden"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white/95 backdrop-blur-xl z-50 shadow-2xl xl:hidden flex flex-col border-l border-white/20"
                        >
                            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                                <span className="font-heading font-bold text-xl text-[#2D0A0A]">Menu</span>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 rounded-full hover:bg-gray-100 text-charcoal transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto py-4 px-4">
                                <nav className="flex flex-col gap-1">
                                    {navItems.map((item, idx) => (
                                        <div key={item.name}>
                                            <div
                                                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-charcoal hover:bg-[#FBB201]/5 hover:text-[#2D0A0A] transition-all cursor-pointer"
                                                onClick={() => {
                                                    if (item.dropdown) {
                                                        setActiveMobileSubmenu(activeMobileSubmenu === item.name ? null : item.name)
                                                    } else {
                                                        router.push(item.link)
                                                        setIsMobileMenuOpen(false)
                                                    }
                                                }}
                                            >
                                                {item.name}
                                                {item.dropdown && (
                                                    <ChevronRight
                                                        className={cn(
                                                            "w-4 h-4 transition-transform duration-300",
                                                            activeMobileSubmenu === item.name ? "rotate-90" : ""
                                                        )}
                                                    />
                                                )}
                                            </div>

                                            {/* Mobile Submenu */}
                                            <AnimatePresence>
                                                {item.dropdown && activeMobileSubmenu === item.name && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="overflow-hidden bg-gray-50/50 rounded-lg mx-2 mb-2"
                                                    >
                                                        {item.dropdown.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.link}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#2D0A0A] pl-8 border-l-2 border-transparent hover:border-[#FBB201] transition-colors"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </nav>
                            </div>

                            <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                                <button
                                    onClick={() => {
                                        router.push("/donate")
                                        setIsMobileMenuOpen(false)
                                    }}
                                    className="w-full py-3.5 rounded-full bg-[#FBB201] text-white font-bold text-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                                >
                                    DONATE NOW
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
