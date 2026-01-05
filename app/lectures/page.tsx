"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { Play, Youtube, ExternalLink, Calendar, Music } from "lucide-react"
import Link from "next/link"

const lectureCategories = [
    {
        title: "Ask a Question",
        description: "In this playing list, we are going to look at the answers to questions asked by various people to our speakers.",
        link: "https://www.youtube.com/playlist?list=PLwJ8L1fpM31h5zFzY18OtbkPDfkZdwipw" 
    },
    {
        title: "Festival Videos",
        description: "In this playing list, we are going to look at the videos of various festivals celebrated in our temple.",
        link: "https://www.youtube.com/playlist?list=PLwJ8L1fpM31ixx_tuMnXkhQOIr1q_Kqz1"
    },
    {
        title: "Dakshina Dwaraka",
        description: "In this playing list, we are going to look at the videos of the Dakshina Dwaraka.",
        link: "https://www.youtube.com/playlist?list=PLwJ8L1fpM31j_XykYVzhwFVw1J3w1qX1_"
    },
    {
        title: "OMG! Trending",
        description: "In this play list, we are going to look at the spiritual perspective of the trending topics in the world.",
        link: "https://www.youtube.com/playlist?list=PLwJ8L1fpM31i_FqFXw1_X1_X1_X1_X1_" // Placeholder ID if unknown
    },
    {
        title: "Srimad Bhagavatam Nectar",
        description: "In this play list, we are going to look at the nectar of Srimad Bhagavatam.",
        link: "https://www.youtube.com/playlist?list=PLwJ8L1fpM31g_X1_X1_X1_X1_X1_"
    },
    {
        title: "Festival Lectures",
        description: "In this playing list, we are going to look at the lectures given on the festival days.",
        link: "https://www.youtube.com/playlist?list=PLwJ8L1fpM31h_X1_X1_X1_X1_X1_"
    },
    {
        title: "Bhagavad Gita Lectures",
        description: "In this playing list, we are going to look at the lectures given on Bhagavad Gita.",
        link: "https://www.youtube.com/playlist?list=PLwJ8L1fpM31i_X1_X1_X1_X1_X1_"
    }
]

export default function LecturesPage() {
    return (
        <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#FBB201] selection:text-white relative">
             <Navbar />

             {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-[#001E36] text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('/assets/10BlackWhiteMandalaPattern1.jpg')] bg-cover"></div>
                
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-[#FBB201] mb-6 font-serif tracking-tight">
                            Lectures
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed italic font-serif">
                            The enlighten Spiritual Discourses for Srimad Bhagavad-Gita and Bhagavatam link as follows
                        </p>
                    </motion.div>
                </div>
            </section>

             {/* Main Content */}
             <section className="py-20 px-6 container mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">
                    
                    {/* Left Column: Lecture Lists */}
                    <div className="w-full lg:w-2/3 space-y-8">
                        {lectureCategories.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all group"
                            >
                                <h3 className="text-2xl font-bold text-[#0078BF] mb-3 font-serif group-hover:text-[#FBB201] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {item.description}
                                </p>
                                <a 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-white bg-red-600 px-5 py-2.5 rounded-full hover:bg-red-700 transition-colors shadow-sm"
                                >
                                    <Youtube size={18} /> Watch Playlist
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="w-full lg:w-1/3 space-y-8">
                        
                        {/* Sidebar Block 1: Other Activities */}
                        <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                             <h4 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">More Activities</h4>
                             <ul className="space-y-4">
                                <li>
                                    <Link href="/activities/youth-empowerment-club" className="flex items-center gap-3 text-gray-600 hover:text-[#0078BF] transition-colors group">
                                        <span className="w-2 h-2 rounded-full bg-[#FBB201] group-hover:w-3 transition-all"></span>
                                        Youth Empowerment Club
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/activities/folk" className="flex items-center gap-3 text-gray-600 hover:text-[#0078BF] transition-colors group">
                                        <span className="w-2 h-2 rounded-full bg-[#FBB201] group-hover:w-3 transition-all"></span>
                                        FOLK
                                    </Link>
                                </li>
                             </ul>
                        </div>

                         {/* Sidebar Block 2: Festivals */}
                         <div className="bg-[#001E36] rounded-2xl p-8 shadow-md text-white">
                             <h4 className="text-xl font-bold text-[#FBB201] mb-6 border-b border-white/10 pb-2">Festivals</h4>
                             <ul className="space-y-4">
                                <li>
                                    <Link href="/activities/annual-festivals" className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors group">
                                        <Calendar size={16} className="text-[#FBB201]" />
                                        Sri Krishna Janmashtami
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/activities/cultural-festivals" className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors group">
                                        <Calendar size={16} className="text-[#FBB201]" />
                                        Vaikunta Ekadasi
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/activities/annual-festivals" className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors group">
                                        <Calendar size={16} className="text-[#FBB201]" />
                                        Ratha Yatra
                                    </Link>
                                </li>
                             </ul>
                        </div>

                        {/* Sidebar Block 3: Audio */}
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-md border border-orange-200">
                             <div className="flex items-center gap-3 mb-4 text-[#d97706]">
                                <Music size={24} />
                                <h4 className="text-xl font-bold">Audio Lectures</h4>
                             </div>
                             <p className="text-gray-700 text-sm mb-6">Listen to transcendental vibrations on SoundCloud.</p>
                             <a 
                                href="https://soundcloud.com/iskcon-chennai" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-[#f97316] text-white font-bold py-3 rounded-xl hover:bg-[#ea580c] transition-colors shadow-md"
                             >
                                Listen on SoundCloud
                             </a>
                        </div>

                    </div>
                </div>
             </section>

             <FooterSection />
        </main>
    )
}
