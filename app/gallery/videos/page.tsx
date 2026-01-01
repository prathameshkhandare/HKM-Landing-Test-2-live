"use client"

import React, { useState } from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { Play, Youtube, Clock, Share2 } from "lucide-react"

// Video Data
const videos = [
    {
        id: "p19FzmQiYco",
        title: "Hare Krishna Movement Chennai | Official Channel",
        category: "Featured",
        duration: "12:45",
        thumbnail: "https://img.youtube.com/vi/p19FzmQiYco/maxresdefault.jpg"
    },
    {
        id: "UC-ss8-5fLI", // Reusing Srila Prabhupada video ID
        title: "Srila Prabhupada - The Acharya",
        category: "Documentary",
        duration: "1:21:00",
        thumbnail: "https://img.youtube.com/vi/UC-ss8-5fLI/maxresdefault.jpg"
    },
    {
        id: "EtWO3eghiOM", // Your Ever Well Wisher
        title: "Your Ever Well Wisher",
        category: "Biography",
        duration: "55:20",
        thumbnail: "https://img.youtube.com/vi/EtWO3eghiOM/maxresdefault.jpg"
    },
    {
        id: "j-JmH8Vs_WE", // Placeholder ID (Krishna Book reading or similar)
        title: "Srimad Bhagavatam Class",
        category: "Lectures",
        duration: "45:30",
        thumbnail: "https://img.youtube.com/vi/j-JmH8Vs_WE/maxresdefault.jpg"
    },
    {
        id: "t4n7g1_y0rZ", 
        title: "Sunday Feast Kirtan",
        category: "Kirtan",
        duration: "30:15",
        thumbnail: "https://img.youtube.com/vi/t4n7g1_y0rZ/maxresdefault.jpg"
    },
    {
        id: "b7h8g3_q1wE", 
        title: "Festival Highlights",
        category: "Festivals",
        duration: "15:10",
        thumbnail: "https://img.youtube.com/vi/b7h8g3_q1wE/maxresdefault.jpg"
    }
]

export default function VideosPage() {
    const [activeVideo, setActiveVideo] = useState(videos[0])
    const [activeCategory, setActiveCategory] = useState("All")

    const categoryMapping: Record<string, string> = {
        'Temple Events': 'Festivals',
        'Lectures': 'Lectures',
        'Kirtans': 'Kirtan',
        'Documentaries': 'Documentary'
    }

    const filteredVideos = activeCategory === "All" 
        ? videos 
        : videos.filter(v => v.category === activeCategory)

    const handleCategoryClick = (cat: string) => {
        const mappedCategory = categoryMapping[cat]
        if (mappedCategory) {
            setActiveCategory(mappedCategory)
            // Scroll to player
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#FBB201] selection:text-white relative">
             {/* Global Background Pattern */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0">
                <img src="/assets/10BlackWhiteMandalaPattern1.jpg" alt="" className="w-full h-full object-cover grayscale" />
            </div>

            <Navbar />

            {/* Hero / Main Player Section */}
            <section className="relative pt-32 pb-16 bg-[#001E36] text-white">
                 {/* Background Accent */}
                <div className="absolute top-0 left-0 right-0 h-full overflow-hidden opacity-20 pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FBB201] rounded-full blur-[100px]"></div>
                    <div className="absolute top-1/2 -left-24 w-72 h-72 bg-[#0078BF] rounded-full blur-[80px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        {/* Main Video Player */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="w-full lg:w-2/3 bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <div className="aspect-video relative group">
                                <iframe 
                                    width="100%" 
                                    height="100%" 
                                    src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                                    title={activeVideo.title}
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                            <div className="p-6 md:p-8 bg-[#002b4d]">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="px-3 py-1 bg-[#FBB201] text-black text-xs font-bold uppercase tracking-wider rounded-sm">
                                        {activeVideo.category}
                                    </span>
                                    <span className="flex items-center gap-1 text-blue-200 text-xs font-medium">
                                        <Clock size={14} /> {activeVideo.duration}
                                    </span>
                                </div>
                                <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight text-white">{activeVideo.title}</h1>
                                <p className="text-blue-100/70 leading-relaxed max-w-3xl">
                                    Watch the latest transcendental discourse and immerse yourself in the divine vibrations. 
                                    Hare Krishna Movement Chennai brings you closer to the Supreme Lord through these visual offerings.
                                </p>
                                <div className="mt-6 flex items-center gap-4">
                                     <button className="flex items-center gap-2 px-6 py-3 bg-[#FBB201] hover:bg-white hover:text-[#0078BF] text-black font-bold rounded-lg transition-colors">
                                        <Youtube size={20} /> Subscribe Channel
                                     </button>
                                     <button className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors backdrop-blur-sm">
                                        <Share2 size={20} /> Share
                                     </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Playlist / Sidebar */}
                        <div className="w-full lg:w-1/3">
                            <div className="bg-[#002b4d]/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold flex items-center gap-2 text-[#FBB201]">
                                        <Play size={20} className="fill-current" /> 
                                        {activeCategory === "All" ? "Up Next" : `${activeCategory} Videos`}
                                    </h3>
                                    {activeCategory !== "All" && (
                                        <button 
                                            onClick={() => setActiveCategory("All")}
                                            className="text-xs text-blue-300 hover:text-white underline"
                                        >
                                            View All
                                        </button>
                                    )}
                                </div>
                                
                                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                                    {filteredVideos.length > 0 ? (
                                        filteredVideos.map((video, idx) => (
                                            <div 
                                                key={idx}
                                                onClick={() => setActiveVideo(video)}
                                                className={`flex gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300 group ${activeVideo.id === video.id ? 'bg-[#FBB201] shadow-lg' : 'hover:bg-white/5'}`}
                                            >
                                                <div className="relative w-32 aspect-video rounded-lg overflow-hidden shrink-0 bg-black/50">
                                                    <img 
                                                        src={video.thumbnail} 
                                                        alt={video.title} 
                                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeVideo.id === video.id ? 'bg-white text-[#FBB201]' : 'bg-black/60 text-white'}`}>
                                                            <Play size={12} className="fill-current ml-0.5" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-1 min-w-0 flex flex-col justify-center">
                                                    <h4 className={`text-sm font-bold mb-1 line-clamp-2 ${activeVideo.id === video.id ? 'text-black' : 'text-white group-hover:text-[#FBB201] transition-colors'}`}>
                                                        {video.title}
                                                    </h4>
                                                    <p className={`text-xs ${activeVideo.id === video.id ? 'text-black/70' : 'text-blue-200/60'}`}>
                                                        {video.category} • {video.duration}
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-white/50 text-center py-8">No videos found in this category.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-20 px-6 container mx-auto">
                <div className="text-center mb-16">
                     <span className="text-[#FBB201] font-bold tracking-widest text-sm uppercase mb-2 block">Our Collections</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0078BF]">Explore by Category</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {['Temple Events', 'Lectures', 'Kirtans', 'Documentaries'].map((cat, idx) => (
                        <motion.div 
                            key={cat}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => handleCategoryClick(cat)}
                            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 group cursor-pointer text-center hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 rounded-full bg-blue-50 text-[#0078BF] group-hover:bg-[#FBB201] group-hover:text-white flex items-center justify-center mx-auto mb-4 transition-colors">
                                <Play size={28} className="fill-current ml-1" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#0078BF]">{cat}</h3>
                            <p className="text-sm text-gray-500 mt-2">View {categoryMapping[cat] === 'Festivals' ? 'Festival' : categoryMapping[cat]} videos</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <FooterSection />
        </main>
    )
}
