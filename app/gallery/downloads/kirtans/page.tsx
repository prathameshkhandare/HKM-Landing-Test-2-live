"use client"

import React, { useState } from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { Play, Music, Download, Disc, ExternalLink } from "lucide-react"

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

// Real Kirtan Data from User
const kirtans = [
    {
        id: 1,
        title: "Dasavatara Stotra",
        artist: "HKM Chennai",
        category: "Stotra",
        duration: "Medium",
        url: "https://soundcloud.com/hkm-chennai/dasavatarastotra",
        // Standard SoundCloud widget src structure
        embedSrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/337987259&color=%23FFB81C&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    },
    {
        id: 2,
        title: "Srimad Bhagavatam 3.8.25",
        artist: "HG Stoka Krishna Dasa",
        category: "Lecture",
        duration: "Long",
        url: "https://soundcloud.com/hkm-chennai/august-152017hg-stoka-krishna-dasa-sb-3825",
    },
    {
        id: 3,
        title: "Krishna Bhajan",
        artist: "Sanjay Bajaj",
        category: "Bhajan",
        duration: "Short",
        url: "https://soundcloud.com/sanjay-bajaj-5/krishna-bhajan",
    }
]

export default function KirtansPage() {
    const [currentTrack, setCurrentTrack] = useState(kirtans[0])

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

            {/* Header Section - Divine Library Style */}
            <section className="pt-32 pb-12 px-6 container mx-auto relative z-10">
                <div className="relative bg-[#2D0A0A] rounded-[2.5rem] p-10 md:p-14 shadow-2xl overflow-hidden border-2 border-[#FFB81C] group text-center">
                        
                    {/* Internal Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2D0A0A] via-[#4a0e0e] to-[#2D0A0A] opacity-90 z-0"></div>
                    
                    {/* SUBTLE BACKGROUND PATTERN */}
                    <div className="absolute inset-0 opacity-35 pointer-events-none z-0 mix-blend-overlay" 
                            style={{backgroundImage: `radial-gradient(circle at 50% 50%, transparent 0%, transparent 20%, #FFB81C 20%, #FFB81C 21%, transparent 21%, transparent 40%, #ea580c 40%, #ea580c 41%, transparent 41%, transparent 60%, #FFB81C 60%, #FFB81C 61%, transparent 61%)`, backgroundSize: '100px 100px'}}></div>

                    {/* CORNER CHAKRAS - SVG Implementation */}
                    <div className="absolute -top-24 -left-24 w-64 h-64 text-[#FFB81C] opacity-30 pointer-events-none z-0 animate-[spin_20s_linear_infinite]">
                        <Chakra className="w-full h-full drop-shadow-[0_0_15px_rgba(255,184,28,0.5)]" />
                    </div>
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 text-[#ea580c] opacity-25 pointer-events-none z-0 animate-[spin_30s_linear_infinite_reverse]">
                        <Chakra className="w-full h-full drop-shadow-[0_0_15px_rgba(234,88,12,0.5)]" />
                    </div>

                    {/* Ornate Corner Designs */}
                    <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-[#FFB81C] rounded-tl-3xl opacity-70 z-10"></div>
                    <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-[#FFB81C] rounded-tr-3xl opacity-70 z-10"></div>
                    <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-[#FFB81C] rounded-bl-3xl opacity-70 z-10"></div>
                    <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-[#FFB81C] rounded-br-3xl opacity-70 z-10"></div>

                    <div className="relative z-10 space-y-4">
                        <div className="inline-block mb-2">
                             <span className="px-5 py-2 rounded-full bg-[#FFB81C]/10 border border-[#FFB81C] text-[#FFB81C] text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-[0_0_15px_rgba(255,184,28,0.3)]">
                                 Divine Vibration
                             </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffe8cc] to-white drop-shadow-sm">
                            Transcendental Kirtans
                        </h1>
                        <p className="text-xl md:text-2xl text-[#ffe8cc] max-w-3xl mx-auto italic font-serif font-light">
                            "Kirtan is the universal language of the soul. Connect with the Divine through these sacred sound vibrations."
                        </p>
                    </div>
                </div>
            </section>

            {/* Player Interface */}
            <section className="container mx-auto px-6 pb-24 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    
                    {/* Now Playing Area (SoundCloud Widget) */}
                    <div className="w-full lg:w-7/12 sticky top-32">
                        <motion.div 
                            layoutId="player-card"
                            className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-4 shadow-2xl border border-[#FFB81C]/30 overflow-hidden relative group"
                        >
                             <div className="absolute inset-0 bg-gradient-to-br from-[#FFB81C]/5 to-transparent pointer-events-none"></div>
                             
                            <div className="w-full aspect-square md:aspect-video rounded-3xl overflow-hidden bg-black relative border border-[#FFB81C]/20 shadow-inner">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    scrolling="no"
                                    frameBorder="no"
                                    allow="autoplay"
                                    src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(currentTrack.url)}&color=%23FFB81C&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
                                    className="absolute inset-0 w-full h-full"
                                ></iframe>
                            </div>
                            
                            <div className="mt-6 px-4 pb-4">
                                <h2 className="text-3xl font-bold text-[#2D0A0A] mb-1 font-serif">{currentTrack.title}</h2>
                                <p className="text-[#ea580c] font-medium flex items-center gap-2 text-lg">
                                    {currentTrack.artist} 
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFB81C]"></span>
                                    {currentTrack.category}
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Playlist */}
                    <div className="w-full lg:w-5/12">
                        <div className="bg-white/60 backdrop-blur-md rounded-[2rem] p-6 md:p-8 shadow-xl border-2 border-[#FFB81C]/20 relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB81C] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
                             
                            <h3 className="text-2xl font-bold text-[#2D0A0A] mb-6 flex items-center gap-3 font-serif">
                                <Music className="text-[#ea580c]" /> Sacred Playlist
                            </h3>
                            
                            <div className="space-y-4">
                                {kirtans.map((track) => (
                                    <motion.div 
                                        key={track.id}
                                        whileHover={{ scale: 1.01 }}
                                        onClick={() => setCurrentTrack(track)}
                                        className={`group flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all border-2 ${
                                            currentTrack.id === track.id 
                                            ? 'bg-gradient-to-r from-[#2D0A0A] to-[#4a0e0e] border-[#FFB81C] shadow-lg' 
                                            : 'bg-white border-white hover:border-[#FFB81C]/50 hover:bg-[#FFF9F0]'
                                        }`}
                                    >
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm ${currentTrack.id === track.id ? 'bg-[#FFB81C] text-[#2D0A0A]' : 'bg-[#FFB81C]/10 text-[#ea580c]'}`}>
                                            {currentTrack.id === track.id ? (
                                                <div className="flex gap-0.5 items-center h-3">
                                                    <div className="w-1 bg-[#2D0A0A] h-full animate-pulse"></div>
                                                    <div className="w-1 bg-[#2D0A0A] h-2/3 animate-pulse delay-75"></div>
                                                    <div className="w-1 bg-[#2D0A0A] h-full animate-pulse delay-150"></div>
                                                </div>
                                            ) : (
                                                <Play size={20} className="fill-current ml-1" />
                                            )}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <h4 className={`font-bold font-serif truncate ${currentTrack.id === track.id ? 'text-[#FFB81C]' : 'text-[#2D0A0A]'}`}>
                                                {track.title}
                                            </h4>
                                            <p className={`text-sm truncate ${currentTrack.id === track.id ? 'text-[#ffe8cc]' : 'text-gray-500'}`}>
                                                {track.artist}
                                            </p>
                                        </div>

                                        <a 
                                            href={track.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-2 rounded-full transition-colors ${
                                                currentTrack.id === track.id 
                                                ? 'bg-[#FFB81C] text-[#2D0A0A] hover:bg-white' 
                                                : 'bg-gray-100 text-gray-400 hover:bg-[#FFB81C] hover:text-[#2D0A0A]'
                                            }`}
                                            onClick={(e) => e.stopPropagation()}
                                            title="Open on SoundCloud"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <FooterSection />
        </main>
    )
}
