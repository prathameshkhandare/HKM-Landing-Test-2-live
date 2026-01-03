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
}

const navItems = [
    { name: "Lord Krishna", href: "/philosophy/lord-krishna" },
    { name: "Yugadharma", href: "/philosophy/yugadharma" },
    { name: "Bhagavad Gita", href: "/philosophy/bhagavad-gita" },
    { name: "Sri Chaitanya Mahaprabhu", href: "/philosophy/sri-chaitanya-mahaprabhu" },
    { name: "Krishna Consciousness", href: "/philosophy/krishna-consciousness" },
    { name: "Ask Any Question", href: "/philosophy/ask-any-question" },
]

export default function PhilosophyLayout({ title, subtitle, heroImage, children, sidebarPosition = "right" }: PhilosophyLayoutProps) {
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

            {/* Philosophy Header - Standardized for all pages */}
            <PhilosophyHeader title={title} subtitle={subtitle} />

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
