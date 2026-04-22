"use client"

import React, { useState } from "react"
import Navbar from "@/components/Navbar"
import SaffronCommonHeader from "@/components/SaffronCommonHeader"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, User, ArrowRight, Tag, Sparkles } from "lucide-react"
import Footer from "@/components/FooterSection"
import Link from "next/link"

// --- Blog Data (Preserved) ---
const posts = [
    {
        id: 0,
        title: "Complete Visitor Guide - ISKCON Thiruvanmiyur",
        excerpt: "Everything a visitor needs to know before coming to Dakshina Dwaraka Dham - timings, darshan, dress code, festivals, prasadam, directions, and FAQs.",
        image: "/assets/dakshina-dwaraka-dham.webp",
        category: "Articles",
        date: "Mar 30, 2026",
        author: "HKM Team",
        link: "/blog/visitor-guide"
    },
    {
        id: 7,
        title: "Bhagavad Gita - Applying Eternal Wisdom in Daily Life",
        excerpt: "A reflective blog article on the main teachings of the Bhagavad Gita and how they guide modern life, duty, devotion, and inner peace.",
        image: "/assets/lessons-from-gita-image-1.png",
        category: "Articles",
        date: "Mar 30, 2026",
        author: "HKM Team",
        link: "/blog/bhagavad-gita"
    },
    {
        id: 8,
        title: "Rāma Navamī - The Appearance Day of Lord Rāmacandra",
        excerpt: "Discover the spiritual significance of Rama Navami — the appearance day of Lord Ramachandra — through the timeless teachings of Srila Prabhupada.",
        image: "/assets/ramanavami-blog-image.png",
        imagePosition: "object-top",
        category: "Festivals",
        date: "Mar 30, 2026",
        author: "HKM Team",
        link: "/blog/ramanavami"
    },
    {
        id: 9,
        title: "Rukmini Dwadashi - The Appearance Day of Srimati Rukmini Devi",
        excerpt: "Rukmini Dwadashi is the divine appearance day of Srimati Rukmini Devi — Krishna's eternal queen and the Goddess of Fortune. Read her full story and glories.",
        image: "/assets/TA_987_sudama_and_krishna.png",
        imagePosition: "object-top",
        category: "Festivals",
        date: "Apr 13, 2026",
        author: "HKM Team",
        link: "/blog/rukmini-dwadashi"
    },
    {
        id: 11,
        title: "Śrī Gadādhara Paṇḍita: The Foremost Among the Internal Potencies",
        excerpt: "Gadādhara Paṇḍita is the foremost internal potency of Lord Caitanya — an incarnation of Śrīmatī Rādhārāṇī Herself. Discover his life, his devotion, and the miracle of the sitting Tota Gopinātha deity.",
        image: "/assets/blog/gadadhara-pandita/panchtattva.jpg",
        imagePosition: "object-center",
        category: "Articles",
        date: "Apr 17, 2026",
        author: "HKM Team",
        link: "/blog/gadadhara-pandita"
    },
    {
        id: 10,
        title: "Narasimha Jayantī - The Divine Appearance of Lord Nṛsiṃhadeva",
        excerpt: "Narasimha Jayanti celebrates the divine appearance of Lord Nṛsiṃhadeva — the half-man, half-lion incarnation of Viṣṇu who appeared from a pillar to protect His devotee Prahlāda Mahārāja.",
        image: "/assets/blog/narasimha-jayanti/narasimha_poster_2.png",
        imagePosition: "object-top",
        category: "Festivals",
        date: "Apr 17, 2026",
        author: "HKM Team",
        link: "/blog/narasimha-jayanti"
    },
    {
        id: 12,
        title: "Akshaya Tṛtīyā – The Inexhaustible Day of Eternal Blessings",
        excerpt: "Discover the true meaning of Akshaya Tritiya — 9 sacred events across cosmic history, the pastimes of Sudāmā & Rukmiṇī Devī, and how to observe this auspicious day with devotion to Lord Kṛṣṇa.",
        image: "/assets/blog/akshaya-tritiya/sudama_krishna.png",
        imagePosition: "object-top",
        category: "Festivals",
        date: "Apr 20, 2026",
        author: "Sampati Dāsa",
        link: "/blog/akshaya-tritiya"
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
                                <Link 
                                    href={post.link}
                                    target={post.link.startsWith("http") ? "_blank" : undefined}
                                    rel={post.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="flex flex-col h-full flex-grow block cursor-pointer"
                                >
                                {/* Image */}
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ${
                                            // @ts-ignore
                                            post.imagePosition || ""} `}
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
                                        <div 
                                            className="inline-flex items-center text-[#2D0A0A] font-bold uppercase tracking-widest text-sm group/link hover:text-[#ea580c] transition-colors"
                                        >
                                            Read Article 
                                            <div className="ml-2 w-8 h-8 rounded-full bg-[#FFB81C]/20 flex items-center justify-center group-hover/link:bg-[#FFB81C] transition-colors">
                                                <ArrowRight size={14} className="transform group-hover/link:-rotate-45 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>
            
            <Footer />
        </main>
    )
}
