"use client"

import React, { useState } from "react"
import Navbar from "@/components/Navbar"
import SaffronCommonHeader from "@/components/SaffronCommonHeader"
import { motion, AnimatePresence } from "framer-motion"
import { User, ArrowRight, Tag, Sparkles, Search, Calendar } from "lucide-react"
import Footer from "@/components/FooterSection"
import Link from "next/link"

export interface BlogPost {
    id: number | string
    title: string
    excerpt: string
    image: string
    imagePosition?: string
    category: string
    date: string
    author: string
    link: string
}

const FIXED_CATEGORIES = ["All", "Article", "Festival", "Vaishnava Acharya", "Great Acharyas", "Philosophy"]

export default function BlogListingClient({ posts }: { posts: BlogPost[] }) {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")

    // Derive any extra categories that come from the DB but aren't in our fixed list
    const dynamicCategories = Array.from(new Set(posts.map(p => p.category)))
        .filter(c => !FIXED_CATEGORIES.includes(c))
    const categories = [...FIXED_CATEGORIES, ...dynamicCategories]

    const filteredPosts = posts.filter(post => {
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
        const lowerQuery = searchQuery.toLowerCase()
        const matchesSearch =
            post.title.toLowerCase().includes(lowerQuery) ||
            post.excerpt.toLowerCase().includes(lowerQuery) ||
            post.author.toLowerCase().includes(lowerQuery) ||
            post.category.toLowerCase().includes(lowerQuery)
        return matchesCategory && matchesSearch
    })

    return (
        <main className="min-h-screen bg-[#FFF9F0] overflow-x-hidden selection:bg-[#FFB81C] selection:text-[#2D0A0A]">
            <Navbar />

            <SaffronCommonHeader
                title={<span>Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-[#d97706]">Stories</span></span>}
                subtitle="Explore the vibrant activities, festivals, and spiritual insights."
                stickerText="Blog & Updates"
            />

            <section className="py-20 px-6 container mx-auto max-w-7xl relative">
                <div className="absolute inset-0 bg-[url('/assets/temple-pattern.PNG')] opacity-5 bg-fixed bg-center" />

                <div className="flex flex-col items-center mb-16 relative z-10 space-y-6">
                    {/* Category Pills */}
                    <div className="bg-gradient-to-r from-[#701a1a] via-[#ea580c] to-[#b45309] p-2 rounded-full shadow-2xl flex flex-wrap justify-center gap-2 border border-[#FFB81C]">
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

                    {/* Search */}
                    <div className="relative w-full max-w-xl group mt-2">
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-[#b45309]">
                            <Search size={22} className="opacity-70 group-focus-within:opacity-100 transition-opacity" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search articles, festivals, authors..."
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            className="w-full pl-14 pr-6 py-4 rounded-full border-2 border-[#d97706]/40 bg-white shadow-lg outline-none focus:border-[#ea580c] focus:ring-4 focus:ring-[#ea580c]/20 transition-all duration-300 text-[1.1rem] font-serif placeholder:text-gray-400 text-[#2D0A0A] font-medium"
                        />
                    </div>
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    <AnimatePresence mode="popLayout">
                        {filteredPosts.map(post => (
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
                                    <div className="h-64 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ${post.imagePosition ?? ""}`}
                                        />
                                        <div className="absolute inset-2 border border-white/30 rounded-xl pointer-events-none z-20" />
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow relative">
                                        <div className="absolute top-0 right-0 p-4 opacity-5">
                                            <Sparkles size={60} className="text-[#FFB81C]" />
                                        </div>

                                        <div className="flex items-center flex-wrap text-[0.65rem] md:text-xs font-bold text-[#ea580c] mb-4 uppercase tracking-wider gap-y-2">
                                            <span className="flex items-center gap-1 whitespace-nowrap">
                                                <Tag size={12} /> {post.category}
                                            </span>
                                            <div className="w-1 h-1 bg-[#FFB81C] rounded-full mx-2 md:mx-3" />
                                            <span className="flex items-center gap-1 whitespace-nowrap">
                                                <User size={12} /> {post.author}
                                            </span>
                                            <div className="w-1 h-1 bg-[#FFB81C] rounded-full mx-2 md:mx-3 hidden sm:block" />
                                            <span className="flex items-center gap-1 whitespace-nowrap w-full sm:w-auto mt-2 sm:mt-0">
                                                <Calendar size={12} /> {post.date}
                                            </span>
                                        </div>

                                        <h2 className="text-2xl font-bold text-[#2D0A0A] mb-4 group-hover:text-[#b45309] transition-colors font-serif leading-tight">
                                            {post.title}
                                        </h2>

                                        <p className="text-gray-600 font-light mb-6 flex-grow line-clamp-3 leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        <div className="pt-4 border-t border-[#FFB81C]/20 mt-auto">
                                            <div className="inline-flex items-center text-[#2D0A0A] font-bold uppercase tracking-widest text-sm group/link hover:text-[#ea580c] transition-colors">
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

                {filteredPosts.length === 0 && (
                    <div className="text-center py-20 text-gray-500 font-serif text-lg">
                        No articles found matching your search.
                    </div>
                )}
            </section>

            <Footer />
        </main>
    )
}
