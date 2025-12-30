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
        title: "Ratha Yatra 2022",
        excerpt: "Experience the joy and devotion of the grand chariot festival procession through the streets of Chennai.",
        image: "/assets/hkm-about-community.jpg",
        category: "Festivals",
        date: "Nov 17, 2021",
        author: "HKM Team",
        link: "https://hkmchennai.org/2021/11/17/ratha-yatra-2022/"
    },
    {
        id: 2,
        title: "Sri Nityananda Trayodashi",
        excerpt: "Celebrating the divine appearance of Lord Nityananda, the personification of mercy.",
        image: "/hkm-hero-new.jpg",
        category: "Festivals",
        date: "Feb 14, 2022",
        author: "Temple Desk",
        link: "https://hkmchennai.org/2021/11/17/sri-nityananda-trayodashi-feb-14-2022/"
    },
    {
        id: 3,
        title: "Spiritual Discourses",
        excerpt: "Engage in enlightening talks based on Vedic wisdom and Bhagavad-gita.",
        image: "/assets/hkm-about-science.jpg",
        category: "Activities",
        date: "Ongoing",
        author: "Srila Prabhupada",
        link: "https://hkmchennai.org/spiritual-discourses/"
    },
    {
        id: 4,
        title: "Sri Gaura Purnima",
        excerpt: "The golden avatar's appearance day - a festival of chanting and dancing.",
        image: "/assets/hkm-about-education.png",
        category: "Festivals",
        date: "Mar 18, 2022",
        author: "HKM Team",
        link: "https://hkmchennai.org/2021/11/17/sri-gaura-purnima-mar-18-2022/"
    },
    {
        id: 5,
        title: "Youth Empowerment (FOLK)",
        excerpt: "Empowering the next generation with timeless values and modern skills.",
        image: "/assets/hkm-about-community.jpg",
        category: "Activities",
        date: "Weekly",
        author: "FOLK Team",
        link: "https://hkmchennai.org/folk/"
    },
    {
        id: 6,
        title: "Sri Krishna Janmashtami",
        excerpt: "The grandest celebration of the year marking the appearance of Lord Krishna.",
        image: "/hkm-hero-new.jpg",
        category: "Festivals",
        date: "Aug 19, 2022",
        author: "HKM Chennai",
        link: "https://hkmchennai.org/2021/11/24/sri-krishna-janmashtami-2022/"
    },
    {
        id: 7,
        title: "Sunday Retreats",
        excerpt: "Rejuvenate your spirit every Sunday with kirtan, class, and prasadam.",
        image: "/assets/hkm-about-science.jpg",
        category: "Activities",
        date: "Every Sunday",
        author: "Guest Care",
        link: "https://hkmchennai.org/sunday-retreats/"
    },
    {
        id: 8,
        title: "Sri Rama Navami",
        excerpt: "Celebrating the appearance of Lord Rama, the ideal king and personality.",
        image: "/assets/hkm-about-education.png",
        category: "Festivals",
        date: "Apr 10, 2022",
        author: "Temple Desk",
        link: "https://hkmchennai.org/2021/11/17/sri-rama-navami-2022/"
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
