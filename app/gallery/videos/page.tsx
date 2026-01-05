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
        if (cat === 'All') {
            setActiveCategory('All');
        } else {
            const mappedCategory = categoryMapping[cat];
            if (mappedCategory) {
                setActiveCategory(mappedCategory);
            }
        }
        // Scroll to player
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

// Chakra Component for Visibility
const Chakra = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="50" cy="50" r="45" />
        <circle cx="50" cy="50" r="15" />
        {/* Spokes */}
        {[...Array(12)].map((_, i) => (
            <path key={i} d={`M50 15 L50 5`} transform={`rotate(${i * 30} 50 50)`} />
        ))}
        {[...Array(12)].map((_, i) => (
            <path key={i} d={`M50 50 L50 95`} transform={`rotate(${i * 30} 50 50)`} />
        ))}
        {/* Decorative inner details */}
        <circle cx="50" cy="50" r="35" strokeWidth="1" strokeDasharray="4 2" />
    </svg>
);

    return (
        <main className="min-h-screen bg-[#FFF5E0] font-sans selection:bg-[#FFB81C] selection:text-[#2D0A0A] relative overflow-hidden">
             
             {/* Richer Background Layers */}
             <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FFF9F0] via-[#ffe8cc] to-[#ffdea0] -z-20"></div>
             
             {/* Floating Spiritual Particles (Om Symbols) */}
             <div className="fixed inset-0 pointer-events-none overflow-hidden font-serif" style={{ zIndex: 0 }}>
                <div className="absolute top-10 left-10 text-[#FFB81C] opacity-40 text-5xl animate-float-up drop-shadow-md">🕉</div>
                <div className="absolute top-1/3 right-20 text-[#ea580c] opacity-30 text-7xl animate-pulse-slow drop-shadow-md">🕉</div>
                <div className="absolute bottom-20 left-1/4 text-[#FFB81C] opacity-35 text-4xl animate-float-up delay-700">✨</div>
                 <div className="absolute top-2/3 right-1/3 text-[#ea580c] opacity-30 text-6xl animate-float-up delay-1000">🪷</div>
            </div>

            {/* Golden Frame Border */}
            <div className="fixed inset-0 border-[16px] border-double border-[#FFB81C]/40 pointer-events-none" style={{ zIndex: 50 }}></div>
            
            <Navbar />

            <div className="pt-32 pb-10 relative" style={{ zIndex: 10 }}>
                
                {/* Categories Section - Glassmorphic Container with Corner Chakras */}
                <section className="container mx-auto px-6 mb-16">
                    <div className="relative bg-[#2D0A0A] rounded-[2.5rem] p-10 md:p-14 shadow-2xl overflow-hidden mb-10 border-2 border-[#FFB81C] group">
                        
                        {/* Internal Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2D0A0A] via-[#4a0e0e] to-[#2D0A0A] opacity-90 z-0"></div>
                        
                        {/* SUBTLE BACKGROUND TEXTURE - Added per request */}
                        <div className="absolute inset-0 opacity-35 pointer-events-none z-0 mix-blend-overlay" 
                             style={{backgroundImage: `radial-gradient(circle at 50% 50%, transparent 0%, transparent 20%, #FFB81C 20%, #FFB81C 21%, transparent 21%, transparent 40%, #ea580c 40%, #ea580c 41%, transparent 41%, transparent 60%, #FFB81C 60%, #FFB81C 61%, transparent 61%)`, backgroundSize: '100px 100px'}}></div>

                        {/* CORNER CHAKRAS - SVG Implementation */}
                        <div className="absolute -top-24 -left-24 w-64 h-64 text-[#FFB81C] opacity-30 pointer-events-none z-0 animate-[spin_20s_linear_infinite]">
                            <Chakra className="w-full h-full drop-shadow-[0_0_15px_rgba(255,184,28,0.5)]" />
                        </div>
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 text-[#ea580c] opacity-25 pointer-events-none z-0 animate-[spin_30s_linear_infinite_reverse]">
                            <Chakra className="w-full h-full drop-shadow-[0_0_15px_rgba(234,88,12,0.5)]" />
                        </div>

                         {/* Extra Subtle Corner Chakras - Opposite Corners */}
                        <div className="absolute -top-16 -right-16 w-48 h-48 text-[#FFB81C] opacity-15 pointer-events-none z-0 animate-[spin_25s_linear_infinite_reverse]">
                             <Chakra className="w-full h-full" />
                        </div>
                         <div className="absolute -bottom-16 -left-16 w-48 h-48 text-[#ea580c] opacity-15 pointer-events-none z-0 animate-[spin_25s_linear_infinite]">
                             <Chakra className="w-full h-full" />
                        </div>


                        {/* Ornate Corner Designs */}
                        <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-[#FFB81C] rounded-tl-3xl opacity-70 z-10"></div>
                        <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-[#FFB81C] rounded-tr-3xl opacity-70 z-10"></div>
                        <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-[#FFB81C] rounded-bl-3xl opacity-70 z-10"></div>
                        <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-[#FFB81C] rounded-br-3xl opacity-70 z-10"></div>

                        <div className="relative z-10 text-center space-y-8">
                             <div className="inline-block">
                                <span className="px-5 py-2 rounded-full bg-[#FFB81C]/10 border border-[#FFB81C] text-[#FFB81C] text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-[0_0_15px_rgba(255,184,28,0.3)]">
                                    Divine Library
                                </span>
                             </div>
                            
                            <h2 className="text-4xl md:text-6xl font-bold font-serif text-white leading-tight drop-shadow-lg">
                                Explore Spiritual <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB81C] via-[#ffe8cc] to-[#FFB81C] italic">Categories</span>
                            </h2>
                            
                            <div className="flex flex-wrap justify-center gap-6 pt-4">
                                {['All', 'Temple Events', 'Lectures', 'Kirtans', 'Documentaries'].map((cat, idx) => (
                                     <button
                                        key={cat}
                                        onClick={() => handleCategoryClick(cat)}
                                        className={`px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 relative overflow-hidden group/btn shadow-xl ${
                                            (cat === 'All' && activeCategory === 'All') || (cat !== 'All' && activeCategory === categoryMapping[cat])
                                            ? 'bg-gradient-to-r from-[#FFB81C] to-[#ea580c] text-[#2D0A0A] border-2 border-[#ffe8cc] scale-105 ring-4 ring-[#FFB81C]/20' 
                                            : 'bg-white text-[#2D0A0A] border-2 border-[#FFB81C]/50 hover:bg-[#FFF9F0] hover:-translate-y-1 hover:border-[#FFB81C]'
                                        }`}
                                     >
                                        <div className="relative z-10 flex items-center justify-center gap-3">
                                            {cat === 'All' && <span className="text-xl">🌟</span>}
                                            {cat === 'Temple Events' && <span className="text-xl">🛕</span>}
                                            {cat === 'Lectures' && <span className="text-xl">📖</span>}
                                            {cat === 'Kirtans' && <span className="text-xl">🎵</span>}
                                            {cat === 'Documentaries' && <span className="text-xl">📽️</span>}
                                            {cat} 
                                        </div>
                                     </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Video Player Section */}
                <section className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* Main Player */}
                        <motion.div 
                            layout
                            className="w-full lg:w-3/4"
                        >
                            <div className="bg-white rounded-2xl overflow-hidden border-4 border-[#FFB81C]/30 shadow-2xl relative group hover:border-[#FFB81C] transition-colors duration-500">
                                <div className="aspect-video relative bg-black">
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
                                <div className="p-8 relative overflow-hidden bg-gradient-to-b from-white to-[#fff0db]">
                                    <div className="flex flex-wrap items-center gap-4 mb-4">
                                        <span className="px-3 py-1 bg-[#ea580c] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                                            {activeVideo.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-[#701a1a] text-sm font-medium">
                                            <Clock size={16} className="text-[#ea580c]" /> {activeVideo.duration}
                                        </span>
                                    </div>
                                    
                                    <h1 className="text-2xl md:text-4xl font-bold mb-4 font-serif text-[#2D0A0A] leading-tight">{activeVideo.title}</h1>
                                    <p className="text-[#5a5a5a] leading-relaxed max-w-3xl mb-8 text-lg">
                                         Watch the latest transcendental discourse and immerse yourself in the divine vibrations. 
                                         Hare Krishna Movement Chennai brings you closer to the Supreme Lord through these visual offerings.
                                    </p>
                                    
                                    <div className="flex items-center gap-4">
                                         <button className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#FFB81C] to-[#ea580c] hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] text-white font-bold rounded-full transition-all hover:-translate-y-1">
                                            <Youtube size={20} /> Subscribe
                                         </button>
                                         <button className="flex items-center gap-2 px-8 py-3 border-2 border-[#ea580c]/20 hover:bg-[#ea580c]/5 text-[#ea580c] font-bold rounded-full transition-colors">
                                            <Share2 size={20} /> Share
                                         </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Playlist Sidebar */}
                        <div className="w-full lg:w-1/4">
                             <div className="bg-white border-2 border-[#FFB81C]/20 rounded-2xl p-4 h-[600px] flex flex-col shadow-xl">
                                <h3 className="text-xl font-bold text-[#701a1a] mb-4 px-2 flex items-center gap-2 sticky top-0 bg-white p-2 z-10 border-b border-[#FFB81C]/10">
                                    <Play size={20} className="fill-[#ea580c] text-[#ea580c]" /> Up Next
                                </h3>
                                <div className="space-y-3 overflow-y-auto pr-1 flex-1 scrollbar-thin scrollbar-thumb-[#FFB81C] scrollbar-track-[#FFF9F0]">
                                     {filteredVideos.map((video, idx) => (
                                        <div 
                                            key={idx}
                                            onClick={() => setActiveVideo(video)}
                                            className={`p-3 rounded-xl cursor-pointer transition-all duration-300 flex items-start gap-3 group ${
                                                activeVideo.id === video.id 
                                                ? 'bg-[#fff0db] border border-[#FFB81C]/40 shadow-sm' 
                                                : 'hover:bg-gray-50 hover:shadow-md'
                                            }`}
                                        >
                                            <div className="w-24 aspect-video rounded-lg overflow-hidden bg-gray-200 shrink-0 relative shadow-sm">
                                                <img src={video.thumbnail} alt="" className="w-full h-full object-cover" />
                                                {activeVideo.id !== video.id && (
                                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <div className="bg-white/80 rounded-full p-1">
                                                            <Play size={10} className="fill-[#ea580c] text-[#ea580c] ml-0.5" />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <h4 className={`text-sm font-bold line-clamp-2 ${activeVideo.id === video.id ? 'text-[#ea580c]' : 'text-[#2D0A0A] group-hover:text-[#ea580c]'}`}>
                                                    {video.title}
                                                </h4>
                                                <p className={`text-xs mt-1 ${activeVideo.id === video.id ? 'text-[#ea580c]/70' : 'text-gray-500'}`}>
                                                    {video.duration}
                                                </p>
                                            </div>
                                        </div>
                                     ))}
                                </div>
                             </div>
                        </div>
                    </div>
                </section>
            </div>

            <FooterSection />
        </main>
    )
}
