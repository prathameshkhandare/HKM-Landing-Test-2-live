"use client"

import React, { useRef } from "react"
import Navbar from "@/components/Navbar"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, BookOpen, ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface PhilosophyLayoutProps {
    title: string;
    subtitle?: string;
    heroImage: string;
    children: React.ReactNode;
    sidebarPosition?: "left" | "right";
}

const navItems = [
    { name: "Lord Krishna", href: "/philosophy/lord-krishna" },
    { name: "Yugadharma", href: "/philosophy/yugadharma" },
    { name: "Bhagavad Gita", href: "/philosophy/bhagavad-gita" },
    { name: "Sri Chaitanya Mahaprabhu", href: "/philosophy/sri-chaitanya-mahaprabhu" },
    { name: "Krishna Consciousness", href: "/philosophy/krishna-consciousness" },
    { name: "Ask Any Question", href: "/philosophy/ask-any-question" },
]

export default function PhilosophyLayout({ title, subtitle, heroImage, children, sidebarPosition = "left" }: PhilosophyLayoutProps) {
    const pathname = usePathname()
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    const isLeftSidebar = sidebarPosition === "left"

    return (
        <main ref={containerRef} className="min-h-screen bg-[#FDFBF7] font-sans text-gray-900 selection:bg-[#FBB201] selection:text-white">
            <Navbar />

            {/* Parallax Hero */}
            <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <motion.div 
                    style={{ y, opacity }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#FDFBF7] z-10"></div>
                    <img 
                        src={heroImage} 
                        alt={title} 
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/80 text-xs tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
                            Vedic Wisdom Series
                        </span>
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-xl md:text-3xl text-[#FBB201] font-serif italic max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                                "{subtitle}"
                            </p>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Magazine Content Layout */}
            <div className="relative z-30 container mx-auto px-6 max-w-7xl -mt-20 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Sidebar / Navigation (Desktop: Left, Mobile: Bottom) */}
                    <div className={`lg:col-span-3 order-2 ${isLeftSidebar ? 'lg:order-1' : 'lg:order-2 lg:col-start-10'}`}>
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden lg:block">
                                <h3 className="text-[#0078BF] font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                                    <BookOpen size={14} /> Philosophy
                                </h3>
                                <nav className="flex flex-col space-y-1">
                                    {navItems.map((item) => {
                                        const isActive = pathname === item.href
                                        return (
                                            <Link 
                                                key={item.name} 
                                                href={item.href}
                                                className={`group flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-all duration-300 ${isActive ? 'bg-[#0078BF] text-white font-medium shadow-md' : 'text-gray-600 hover:bg-gray-50 hover:text-[#0078BF]'}`}
                                            >
                                                {item.name}
                                                {isActive && <ChevronRight size={14} />}
                                            </Link>
                                        )
                                    })}
                                </nav>
                            </div>

                            {/* Decorative Quote */}
                            <div className="p-6 bg-[#FBB201]/10 rounded-2xl border border-[#FBB201]/20 hidden lg:block">
                                <p className="text-[#8B5E00] font-serif italic text-sm leading-relaxed">
                                    "This knowledge is the king of education, the most secret of all secrets."
                                </p>
                                <span className="block text-right text-xs font-bold text-[#8B5E00]/60 mt-2">— BG 9.2</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Article Content */}
                    <div className={`lg:col-span-9 order-1 ${isLeftSidebar ? 'lg:col-start-4 lg:order-2' : 'lg:col-start-1 lg:order-1'}`}>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-white p-8 md:p-16 rounded-3xl shadow-xl relative overflow-hidden border-t-8 border-[#FBB201]"
                        >
                            <div className="prose prose-xl prose-stone max-w-none 
                                prose-headings:font-sans prose-headings:font-bold prose-headings:text-[#0078BF] prose-headings:tracking-tight prose-headings:mb-6 prose-headings:text-3xl
                                
                                prose-p:font-sans prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6 prose-p:font-normal
                                
                                prose-strong:text-[#0078BF] prose-strong:font-bold
                                
                                prose-blockquote:font-sans prose-blockquote:italic prose-blockquote:text-xl
                                prose-blockquote:border-l-4 prose-blockquote:border-[#FBB201] 
                                prose-blockquote:bg-gray-50 prose-blockquote:p-8 
                                prose-blockquote:rounded-r-lg prose-blockquote:my-10
                                prose-blockquote:text-gray-600 prose-blockquote:not-italic
                                
                                [&>p:first-of-type::first-letter]:text-4xl 
                                [&>p:first-of-type::first-letter]:font-serif 
                                [&>p:first-of-type::first-letter]:text-[#0078BF] 
                                [&>p:first-of-type::first-letter]:float-left 
                                [&>p:first-of-type::first-letter]:mr-2 
                                [&>p:first-of-type::first-letter]:mt-[6px] 
                                [&>p:first-of-type::first-letter]:font-bold
                                [&>p:first-of-type::first-letter]:leading-[1]
                            ">
                                {children}
                            </div>
                        </motion.div>

                        {/* Mobile Navigation (appears below content) */}
                        <div className="mt-12 lg:hidden">
                            <h3 className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Read Next</h3>
                            <div className="grid gap-3">
                                {navItems.map((item) => (
                                    <Link 
                                        key={item.name} 
                                        href={item.href}
                                        className="block p-4 bg-white rounded-xl shadow-sm border border-gray-100 text-center font-medium text-gray-700"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
