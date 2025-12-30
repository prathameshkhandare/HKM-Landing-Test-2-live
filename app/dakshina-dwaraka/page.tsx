"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"
import { Check, Heart, ArrowRight, Calendar, Users, Music, MessagesSquare, Church } from "lucide-react"
import FooterSection from "@/components/FooterSection"

// --- Seva Data ---
const sevaOptions = [
    {
        title: "Gopala Seva",
        amount: "₹1,000",
        period: "Monthly Contribution",
        description: "Support the daily upkeep of the temple and deity worship.",
        link: "https://formbuilder.ccavenue.com/live/indian-bank/hare-krishna-movement-chennai/gopala-seva",
        color: "bg-blue-50 border-blue-100",
        icon: Users
    },
    {
        title: "Sudama Seva",
        amount: "₹5,000",
        period: "Monthly Contribution",
        description: "A humble offering that helps build the grand cultural complex.",
        link: "https://formbuilder.ccavenue.com/live/indian-bank/hare-krishna-movement-chennai/sudama-seva",
        color: "bg-[#f0f9ff] border-[#0078BF]/20",
        icon: Heart
    },
    {
        title: "Pandava Seva",
        amount: "₹10,000",
        period: "Monthly Contribution",
        description: "Be a foundational pillar of support for this divine project.",
        link: "https://formbuilder.ccavenue.com/live/indian-bank/hare-krishna-movement-chennai/pandava-seva",
        color: "bg-purple-50 border-purple-100",
        icon: Church
    },
    {
        title: "Krishnalaya Seva",
        amount: "₹5,000",
        period: "One-time / Per Sq.ft",
        description: "Sponsor the construction of 1 Sq.ft of the Lord's abode.",
        link: "https://formbuilder.ccavenue.com/live/indian-bank/hare-krishna-movement-chennai",
        color: "bg-amber-50 border-amber-100",
        icon: Check
    }
]

const activities = [
    { icon: MessagesSquare, title: "Spiritual Discourses" },
    { icon: Users, title: "Youth Empowerment (FOLK)" },
    { icon: Calendar, title: "Sunday Retreats" },
    { icon: Music, title: "Cultural Festivals" }
]

export default function DakshinaDwarakaPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                     {/* Placeholder Background - Replacing with a gradient/pattern if image fails, but ideally needs a temple render */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-white/90 z-10"></div>
                     <img 
                        src="/hkm-hero-new.jpg" 
                        alt="Dakshina Dwaraka" 
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="block text-[#FBB201] font-bold tracking-[0.2em] uppercase mb-4">The Future Cultural Landmark</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg" style={{ fontFamily: "var(--font-playfair)" }}>
                            Dakshina Dwaraka
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
                            A magnificent cultural complex dedicated to Sri Sri Rukmini Dwarakadhish, built to preserve and promote our rich Vedic heritage.
                        </p>
                        
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <a href="#contribute" className="bg-[#0078BF] hover:bg-[#006099] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2">
                                <Heart size={20} fill="currentColor" />
                                Contribute Now
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-sm font-bold text-[#0078BF] uppercase tracking-widest mb-2">Our Vision</h2>
                            <h3 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                                Preserving Culture, <br />Empowering Society.
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                The HKMC Dakshina Dwaraka Cultural Complex is not just a building; it is a spiritual sanctuary designed to revive the glorious Vedic culture. Dedicated to Their Lordships Sri Sri Rukmini Dwarakadhish, this project aims to be a beacon of spiritual knowledge, peace, and values in Chennai.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Construction has been ongoing since June 2021. Join us in building this divine abode and leave a legacy of devotion.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-6">
                                {activities.map((activity, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                                        <div className="text-[#FBB201]">
                                            <activity.icon size={24} />
                                        </div>
                                        <span className="font-semibold text-gray-800 text-sm">{activity.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative">
                            {/* New Image Container without Offset Border */}
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-white ring-1 ring-gray-100">
                                <img 
                                    src="/assets/dakshina-about.png" 
                                    alt="Construction Progress" 
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seva Opportunities (Donation Cards) */}
            <section id="contribute" className="py-24 px-6 bg-gray-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-[#0078BF] uppercase tracking-widest mb-2">Seva Opportunities</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: "var(--font-playfair)" }}>
                            Join the Divine Mission
                        </h3>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                            Your contribution helps build a home for the Lord and a center for spiritual education.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {sevaOptions.map((option, index) => {
                            const isBlue = option.title === "Sudama Seva"; 
                            return (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative bg-white rounded-xl p-8 border hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center ${option.color} ${isBlue ? 'shadow-lg border-[#0078BF]/30' : 'border-gray-100'}`}
                                >
                                    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm ${isBlue ? 'bg-[#0078BF] text-white' : 'bg-white text-[#0078BF]'}`}>
                                        <option.icon size={24} />
                                    </div>

                                    <h4 className="text-xl font-bold text-gray-900 mb-2 font-playfair">{option.title}</h4>
                                    
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                                        {option.description}
                                    </p>

                                    <div className="w-full pt-6 border-t border-gray-100/50">
                                        <div className="mb-4">
                                            <span className="block text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">Seva Amount</span>
                                            <span className={`text-2xl font-bold ${isBlue ? 'text-[#0078BF]' : 'text-gray-800'}`}>{option.amount}</span>
                                            <span className="text-xs text-gray-500 block">{option.period}</span>
                                        </div>
                                    
                                        <a 
                                            href={option.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-full py-3 rounded-lg font-bold uppercase tracking-widest text-xs transition-colors flex items-center justify-center gap-2 ${isBlue ? 'bg-[#0078BF] text-white hover:bg-[#006099]' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                                        >
                                            Offer Seva
                                            <Heart size={14} />
                                        </a>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                    
                    <div className="mt-16 text-center">
                        <p className="text-gray-500 text-sm">
                            * All donations are eligible for tax exemption under 80G. Secure payment gateway by CCAvenue.
                        </p>
                    </div>
                </div>
            </section>
            <FooterSection />
        </main>
    )
}
