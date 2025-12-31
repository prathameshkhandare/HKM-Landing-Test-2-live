"use client"

import React, { useState } from "react"
import Navbar from "@/components/Navbar"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, User, ArrowRight, Tag } from "lucide-react"
import FooterSection from "@/components/FooterSection"

// --- Blog Data (Using headers from source) ---
const posts = [
    {
        id: 1,
        title: "Nityananda – The Jewel of all Good Qualities",
        excerpt: "Lochan Dasa Thakura, a great Vaishnava poet describes the glories of Lord Nityananda...",
        image: "/hkm-hero-new.jpg",
        category: "Articles",
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
        category: "Articles",
        date: "Mar 2022",
        author: "HKM Team",
        link: "https://hkmchennai.org/sri-nitai-gauranga/"
    }
]

const categories = ["All", "Activities", "Festivals"]

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    
    const filteredPosts = selectedCategory === "All" 
        ? posts 
        : posts.filter(post => post.category === selectedCategory)

    return (
        <main className="min-h-screen bg-gray-50 font-sans text-gray-900">
            <Navbar />
            
            {/* Header */}
            <header className="bg-white pt-32 pb-16 px-6 text-center shadow-sm">
                <div className="container mx-auto max-w-4xl">
                    <span className="text-[#0078BF] font-bold uppercase tracking-widest text-sm mb-2 block">Our Stories & Updates</span>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                        Latest from Our Mission
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
                        Explore the vibrant activities, festivals, and spiritual insights from the Hare Krishna Movement Chennai.
                    </p>
                </div>
            </header>

            {/* Content Section */}
            <section className="py-16 px-6 container mx-auto max-w-7xl">
                
                {/* Tabs */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white p-1.5 rounded-full shadow-md inline-flex items-center space-x-2 border border-gray-100">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                                    selectedCategory === cat 
                                    ? "bg-[#0078BF] text-white shadow-md" 
                                    : "text-gray-500 hover:text-[#0078BF] hover:bg-gray-50"
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredPosts.map((post) => (
                            <motion.article 
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={post.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
                            >
                                {/* Image */}
                                <div className="h-56 overflow-hidden relative">
                                    <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm ${
                                            post.category === "Festivals" ? "bg-[#FBB201]" : "bg-[#0078BF]"
                                        }`}>
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center text-xs text-gray-400 mb-4 space-x-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} /> {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <User size={14} /> {post.author}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0078BF] transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-600 font-light mb-6 flex-grow line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <a 
                                        href={post.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-[#0078BF] font-bold uppercase tracking-wider text-sm group/link mt-auto"
                                    >
                                        Read Article 
                                        <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>
            <FooterSection />
        </main>
    )
}
