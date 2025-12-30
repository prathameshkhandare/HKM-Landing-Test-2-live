"use client"

import React, { useState } from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { Play, Music, Download, Disc, ExternalLink } from "lucide-react"

// Real Kirtan Data from User
const kirtans = [
    {
        id: 1,
        title: "Dasavatara Stotra",
        artist: "HKM Chennai",
        category: "Stotra",
        duration: "Medium",
        url: "https://soundcloud.com/hkm-chennai/dasavatarastotra",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/337987259&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        // Note: I'm approximating the embed URL structure or using the standard one. 
        // SoundCloud widgets are best loaded with the track URL passed to their widget API.
        // Or I can use the standard widget iframe src structure: `https://w.soundcloud.com/player/?url=${encodedUrl}`
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
        <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#FBB201] selection:text-white relative">
            {/* Global Background Pattern */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0">
                <img src="/assets/10BlackWhiteMandalaPattern1.jpg" alt="" className="w-full h-full object-cover grayscale" />
            </div>

            <Navbar />

            {/* Header Section */}
            <section className="pt-32 pb-12 px-6 container mx-auto text-center relative z-10">
                <h1 className="text-5xl md:text-6xl font-bold text-[#0078BF] mb-4 drop-shadow-sm font-serif">
                    Transcendental Kirtans
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto italic font-serif">
                    "Kirtan is the universal language of the soul. Connect with the Divine through these sacred sound vibrations."
                </p>
            </section>

            {/* Player Interface */}
            <section className="container mx-auto px-6 pb-24 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    
                    {/* Now Playing Area (SoundCloud Widget) */}
                    <div className="w-full lg:w-7/12 sticky top-32">
                        <motion.div 
                            layoutId="player-card"
                            className="bg-white rounded-3xl p-4 shadow-2xl border border-gray-100 overflow-hidden"
                        >
                            <div className="w-full aspect-square md:aspect-video rounded-2xl overflow-hidden bg-black relative">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    scrolling="no"
                                    frameBorder="no"
                                    allow="autoplay"
                                    src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(currentTrack.url)}&color=%23FBB201&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
                                    className="absolute inset-0 w-full h-full"
                                ></iframe>
                            </div>
                            
                            <div className="mt-6 px-4 pb-4">
                                <h2 className="text-2xl font-bold text-gray-800 mb-1">{currentTrack.title}</h2>
                                <p className="text-[#0078BF] font-medium flex items-center gap-2">
                                    {currentTrack.artist} 
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                    {currentTrack.category}
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Playlist */}
                    <div className="w-full lg:w-5/12">
                        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl border border-white">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                <Music className="text-[#FBB201]" /> Playlist
                            </h3>
                            
                            <div className="space-y-4">
                                {kirtans.map((track) => (
                                    <motion.div 
                                        key={track.id}
                                        whileHover={{ scale: 1.01 }}
                                        onClick={() => setCurrentTrack(track)}
                                        className={`group flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all border ${
                                            currentTrack.id === track.id 
                                            ? 'bg-[#0078BF] border-[#0078BF] shadow-lg' 
                                            : 'bg-white border-gray-100 hover:border-[#FBB201]'
                                        }`}
                                    >
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${currentTrack.id === track.id ? 'bg-white/20 text-white' : 'bg-blue-50 text-[#0078BF]'}`}>
                                            {currentTrack.id === track.id ? (
                                                <div className="flex gap-0.5 items-center h-3">
                                                    <div className="w-1 bg-white h-full animate-pulse"></div>
                                                    <div className="w-1 bg-white h-2/3 animate-pulse delay-75"></div>
                                                    <div className="w-1 bg-white h-full animate-pulse delay-150"></div>
                                                </div>
                                            ) : (
                                                <Play size={20} className="fill-current ml-1" />
                                            )}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <h4 className={`font-bold truncate ${currentTrack.id === track.id ? 'text-white' : 'text-gray-800'}`}>
                                                {track.title}
                                            </h4>
                                            <p className={`text-sm truncate ${currentTrack.id === track.id ? 'text-blue-100' : 'text-gray-500'}`}>
                                                {track.artist}
                                            </p>
                                        </div>

                                        <a 
                                            href={track.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-2 rounded-full transition-colors ${
                                                currentTrack.id === track.id 
                                                ? 'bg-white/20 text-white hover:bg-white/30' 
                                                : 'bg-gray-100 text-gray-500 hover:bg-[#FBB201] hover:text-white'
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
