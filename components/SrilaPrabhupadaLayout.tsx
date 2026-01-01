"use client"

import React, { useRef } from "react"
import Navbar from "@/components/Navbar"
import { motion, useScroll, useTransform } from "framer-motion"
import { BookOpen, ChevronRight, User, Award, Book, Music, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import PhilosophyHeader from "@/components/PhilosophyHeader"
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

            {/* Standard Header */}
            <PhilosophyHeader 
                title={title} 
                subtitle={subtitle} 
                backgroundImage="/assets/srila-prabhupada/header-bg.jpg"
                imagePosition="center 5%"
            />

            {/* Content Layout */}
            <div className="relative z-30 container mx-auto px-6 max-w-7xl mt-8 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Sidebar / Navigation */}
                    <div className="lg:col-span-3 lg:order-1 order-2">
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

                            {/* Decorative Quote */}
                            <div className="p-6 bg-[#FBB201]/10 rounded-2xl border border-[#FBB201]/20 hidden lg:block">
                                <p className="text-[#8B5E00] font-serif italic text-sm leading-relaxed">
                                    "Books are the basis. Preaching is the essence. Utility is the principle. Purity is the force."
                                </p>
                                <span className="block text-right text-xs font-bold text-[#8B5E00]/60 mt-2">— Srila Prabhupada</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-9 lg:order-2 order-1">
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
