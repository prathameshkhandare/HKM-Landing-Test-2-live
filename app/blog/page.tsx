"use client"

import React, { useState } from "react"
import Navbar from "@/components/Navbar"
import SaffronCommonHeader from "@/components/SaffronCommonHeader"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, User, ArrowRight, Tag, Sparkles } from "lucide-react"
import Footer from "@/components/FooterSection"

// --- Blog Data (Preserved) ---
const posts = [
    {
        id: 1,
        title: "Nityananda – The Jewel of all Good Qualities",
        excerpt: "Lochan Dasa Thakura, a great Vaishnava poet describes the glories of Lord Nityananda...",
        image: "/assets/scan92a.jpg",
        category: "Festivals",
        date: "Mar 16, 2022",
        author: "HKM Team",
        link: "https://hkmchennai.org/2022/03/16/the-significance-of-janmashtami/" 
    },
    {
        id: 2,
        title: "Try to Understand Bhagavad-Gita as it is Presented",
        excerpt: "Here is the beginning of education, real education. What Krishna says in Bhagavad-gita...",
        image: "/assets/hkm-about-science.jpg",
        category: "Articles",
        date: "Mar 16, 2022",
        author: "Srila Prabhupada",
        link: "https://hkmchennai.org/2022/03/16/bhagavad-gita/"
    },
    {
        id: 3,
        title: "Spiritual Politics – A journey from insanity to saintliness",
        excerpt: "As Krishna is all-pervading, the Krishna consciousness movement also encompasses political consciousness...",
        image: "/assets/hkm-about-community.jpg",
        category: "Articles",
        date: "Mar 18, 2022",
        author: "HKM Team",
        link: "https://hkmchennai.org/2022/03/18/spiritual-politics-a-journey-from-insanity-to-saintliness/"
    },
    {
        id: 4,
        title: "Mortality for the mudhas, immortality for the mahatmas",
        excerpt: "Immortality is your right, but you must know how to claim it...",
        image: "/assets/hkm-about-education.png",
        category: "Articles",
        date: "Mar 2022",
        author: "HKM Team",
        link: "https://hkmchennai.org/mortality-for-the-mudhas-immortality-for-the-mahatmas/"
    },
    {
        id: 5,
        title: "Mrgāri – the hunter liberated by Narada Muni",
        excerpt: "Once upon a time the great saint Narada, after visiting Narayana, was going to Prayaga...",
        image: "/assets/hkm-about-science.jpg",
        category: "Articles",
        date: "Mar 2022",
        author: "HKM Team",
        link: "https://hkmchennai.org/mrgari-the-hunter-liberated-by-narada-muni/"
    },
    {
        id: 6,
        title: "Sri Nitai Gauranga",
        excerpt: "In the age of Kali, intelligent persons perform congregational chanting to worship the incarnation of Godhead...",
        image: "/hkm-hero-new.jpg",
        category: "Festivals",
        date: "Mar 2022",
        author: "HKM Team",
        link: "https://hkmchennai.org/sri-nitai-gauranga/"
    }
]

const categories = ["All", "Articles", "Festivals"] // Adjusted 'Activities' to 'Articles' based on data

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    
    const filteredPosts = selectedCategory === "All" 
        ? posts 
        : posts.filter(post => post.category === selectedCategory)

    return (
        <main className="min-h-screen bg-[#FFF9F0] overflow-x-hidden selection:bg-[#FFB81C] selection:text-[#2D0A0A]">
            <Navbar />
            
            <SaffronCommonHeader 
                title={<span>Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-[#d97706]">Stories</span></span>}
                subtitle="Explore the vibrant activities, festivals, and spiritual insights."
                stickerText="Blog & Updates"
            />

            {/* Content Section */}
            <section className="py-20 px-6 container mx-auto max-w-7xl relative">
                <div className="absolute inset-0 bg-[url('/assets/temple-pattern.PNG')] opacity-5 bg-fixed bg-center"></div>

                <div className="flex justify-center mb-16 relative z-10">
                    <div className="bg-gradient-to-r from-[#701a1a] via-[#ea580c] to-[#b45309] p-2 rounded-full shadow-2xl inline-flex items-center space-x-2 border border-[#FFB81C]">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 font-serif tracking-wide ${
                                    selectedCategory === cat 
                                    ? "bg-[#FFB81C] text-[#2D0A0A] shadow-md transform scale-105" 
                                    : "text-[#ffe8cc] hover:text-white hover:bg-[#FFB81C]/20"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredPosts.map((post) => (
                            <motion.article 
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={post.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-[#FFB81C]/20 hover:border-[#FFB81C] group flex flex-col h-full"
                            >
                                {/* Image */}
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s]" 
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#2D0A0A] shadow-md flex items-center gap-1 bg-[#FFB81C]`}>
                                            <Tag size={12} /> {post.category}
                                        </span>
                                    </div>
                                    
                                     {/* Decorative Gold Border Inset */}
                                     <div className="absolute inset-2 border border-white/30 rounded-xl pointer-events-none z-20"></div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow relative">
                                    {/* Gold Flourish Background */}
                                    <div className="absolute top-0 right-0 p-4 opacity-5">
                                        <Sparkles size={60} className="text-[#FFB81C]" />
                                    </div>

                                    <div className="flex items-center text-xs font-bold text-[#ea580c] mb-4 space-x-4 uppercase tracking-wider">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} /> {post.date}
                                        </span>
                                        <div className="w-1 h-1 bg-[#FFB81C] rounded-full"></div>
                                        <span className="flex items-center gap-1">
                                            <User size={14} /> {post.author}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-[#2D0A0A] mb-4 group-hover:text-[#b45309] transition-colors font-serif leading-tight">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-600 font-light mb-6 flex-grow line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <div className="pt-4 border-t border-[#FFB81C]/20 mt-auto">
                                        <a 
                                            href={post.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-[#2D0A0A] font-bold uppercase tracking-widest text-sm group/link hover:text-[#ea580c] transition-colors"
                                        >
                                            Read Article 
                                            <div className="ml-2 w-8 h-8 rounded-full bg-[#FFB81C]/20 flex items-center justify-center group-hover/link:bg-[#FFB81C] transition-colors">
                                                <ArrowRight size={14} className="transform group-hover/link:-rotate-45 transition-transform duration-300" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>
            
            <Footer />
        </main>
    )
}
