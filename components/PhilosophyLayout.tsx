"use client"

import React, { useRef } from "react"
import Navbar from "@/components/Navbar"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, BookOpen, ChevronRight } from "lucide-react"
import FooterSection from "@/components/FooterSection"
import Link from "next/link"
import { usePathname } from "next/navigation"
import PhilosophyHeader from "@/components/PhilosophyHeader"
import SharedSidebar from "@/components/SharedSidebar"

interface PhilosophyLayoutProps {
    title: string;
    subtitle?: string;
    heroImage: string;
    children: React.ReactNode;
    sidebarPosition?: "left" | "right";
    customHeader?: React.ReactNode;
}

const navItems = [
    { name: "Lord Krishna", href: "/philosophy/lord-krishna" },
    { name: "Yugadharma", href: "/philosophy/yugadharma" },
    { name: "Bhagavad Gita", href: "/philosophy/bhagavad-gita" },
    { name: "Sri Chaitanya Mahaprabhu", href: "/philosophy/sri-chaitanya-mahaprabhu" },
    { name: "Krishna Consciousness", href: "/philosophy/krishna-consciousness" },
    { name: "Ask Any Question", href: "/philosophy/ask-any-question" },
]

export default function PhilosophyLayout({ title, subtitle, heroImage, children, sidebarPosition = "right", customHeader }: PhilosophyLayoutProps) {
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
        <main ref={containerRef} className="min-h-screen bg-[#FFF9F0] relative font-sans text-gray-900 selection:bg-[#FFB81C] selection:text-white">
            <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] pointer-events-none fixed bg-repeat"></div>
            <Navbar />

            {/* Philosophy Header - Standardized for all pages, or Custom if provided */}
            {customHeader ? customHeader : <PhilosophyHeader title={title} subtitle={subtitle} backgroundImage={heroImage} />}

            {/* Magazine Content Layout */}
            <div className="relative z-30 container mx-auto px-6 max-w-7xl mt-8 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Sidebar / Navigation (Desktop: Left, Mobile: Bottom) */}
                    <div className={`lg:col-span-3 order-2 ${isLeftSidebar ? 'lg:order-1' : 'lg:order-2 lg:col-start-10'}`}>
                        <div className="sticky top-32 space-y-8">
                            {/* Shared Sidebar content */}
                            <SharedSidebar />
                        </div>
                    </div>

                    {/* Main Article Content */}
                    <div className={`lg:col-span-9 order-1 ${isLeftSidebar ? 'lg:col-start-4 lg:order-2' : 'lg:col-start-1 lg:order-1'}`}>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-white p-8 md:p-16 rounded-3xl shadow-xl relative overflow-hidden border-t-8 border-[#FFB81C]"
                        >
                            <div className="prose prose-xl prose-stone max-w-none 
                                prose-headings:font-serif prose-headings:font-bold prose-headings:text-[#2D0A0A] prose-headings:tracking-tight prose-headings:mb-6 prose-headings:text-3xl
                                
                                prose-p:font-sans prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6 prose-p:font-normal
                                
                                prose-a:text-[#ea580c] prose-a:no-underline prose-a:font-bold prose-a:transition-colors hover:prose-a:text-[#FFB81C]
                                
                                prose-strong:text-[#2D0A0A] prose-strong:font-bold
                                
                                prose-ul:list-none prose-ul:pl-0 prose-li:relative prose-li:pl-8 prose-li:before:content-['➢'] prose-li:before:absolute prose-li:before:left-0 prose-li:before:text-[#FFB81C] prose-li:before:font-bold
                                
                                prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:text-xl
                                prose-blockquote:border-l-4 prose-blockquote:border-[#FFB81C] 
                                prose-blockquote:bg-[#FFF9F0] prose-blockquote:p-8 
                                prose-blockquote:rounded-r-lg prose-blockquote:my-10
                                prose-blockquote:text-gray-700 prose-blockquote:not-italic
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
            <FooterSection />
        </main>
    )
}
