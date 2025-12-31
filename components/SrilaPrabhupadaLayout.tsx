"use client"

import React, { useRef } from "react"
import Navbar from "@/components/Navbar"
import { motion, useScroll, useTransform } from "framer-motion"
import { BookOpen, ChevronRight, User, Award, Book, Music, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import FooterSection from "@/components/FooterSection"

interface SrilaPrabhupadaLayoutProps {
    title: string;
    subtitle?: string;
    heroImage: string;
    children: React.ReactNode;
}

const navItems = [
    { name: "The Guru", href: "/srila-prabhupada/the-guru", icon: User },
    { name: "Biography", href: "/srila-prabhupada", icon: BookOpen },
    { name: "Achievements", href: "/srila-prabhupada/achievements", icon: Award },
    { name: "Books", href: "/srila-prabhupada/books", icon: Book },
    { name: "Bhajans & Kirtans", href: "/srila-prabhupada/bhajans-kirtans", icon: Music },
    { name: "Our Sampradaya & Parampara", href: "/srila-prabhupada/sampradaya-parampara", icon: Users },
]

export default function SrilaPrabhupadaLayout({ title, subtitle, heroImage, children }: SrilaPrabhupadaLayoutProps) {
    const pathname = usePathname()
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <main ref={containerRef} className="min-h-screen bg-[#FDFBF7] font-sans text-gray-900 selection:bg-[#FBB201] selection:text-white relative is-pattern-bg">
            {/* Global Background Pattern */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0">
                <img src="/assets/10BlackWhiteMandalaPattern1.jpg" alt="" className="w-full h-full object-cover grayscale" />
            </div>

            <Navbar />

            {/* Parallax Hero */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <motion.div 
                    style={{ y, opacity }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#FDFBF7] z-10"></div>
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
                            Founder-Acharya of ISKCON
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-lg md:text-2xl text-[#FBB201] font-serif italic max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                                "{subtitle}"
                            </p>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Content Layout */}
            <div className="relative z-30 container mx-auto px-6 max-w-7xl -mt-20 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Sidebar / Navigation */}
                    <div className="lg:col-span-3 order-2 lg:order-1">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden lg:block">
                                <h3 className="text-[#0078BF] font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                                    <BookOpen size={14} /> Srila Prabhupada
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
                                                <div className="flex items-center gap-3">
                                                    <item.icon size={16} className={isActive ? "text-white" : "text-gray-400 group-hover:text-[#0078BF]"} />
                                                    {item.name}
                                                </div>
                                                {isActive && <ChevronRight size={14} />}
                                            </Link>
                                        )
                                    })}
                                </nav>
                            </div>

                            {/* Quote Card */}
                            <div className="p-6 bg-[#FBB201]/10 rounded-2xl border border-[#FBB201]/20 hidden lg:block">
                                <p className="text-[#8B5E00] font-serif italic text-sm leading-relaxed">
                                    "First of all, I was alone. I had no place to live, no money, no nothing, but I had faith in God and my Guru Maharaj."
                                </p>
                                <span className="block text-right text-xs font-bold text-[#8B5E00]/60 mt-2">— Srila Prabhupada</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-9 order-1 lg:order-2">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-white rounded-3xl shadow-xl relative overflow-hidden border-t-8 border-[#FBB201]"
                        >
                            <div className="relative z-10 p-8 md:p-16 prose prose-lg max-w-none 
                                prose-headings:font-sans prose-headings:font-bold prose-headings:text-[#FBB201] prose-headings:tracking-tight prose-headings:mb-6 prose-headings:mt-12
                                prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                                prose-p:font-sans prose-p:text-gray-600 prose-p:leading-9 prose-p:mb-8
                                prose-strong:text-[#FBB201] prose-strong:font-bold
                                prose-blockquote:border-l-4 prose-blockquote:border-[#FBB201] 
                                prose-blockquote:bg-[#FFF9F0] prose-blockquote:px-8 prose-blockquote:py-8
                                prose-blockquote:rounded-r-xl prose-blockquote:my-12
                                prose-blockquote:text-[#8B5E00] prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:text-xl prose-blockquote:leading-loose
                                prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-4 prose-ul:mb-8
                                prose-li:text-gray-600 prose-li:marker:text-[#FBB201]
                            ">
                                {children}
                            </div>
                        </motion.div>

                           {/* Mobile Navigation (appears below content) */}
                           <div className="mt-12 lg:hidden">
                            <h3 className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Explore More</h3>
                            <div className="grid gap-3">
                                {navItems.map((item) => (
                                    <Link 
                                        key={item.name} 
                                        href={item.href}
                                        className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 font-medium text-gray-700"
                                    >
                                        <item.icon size={18} className="text-[#0078BF]" />
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection />
        </main>
    )
}
