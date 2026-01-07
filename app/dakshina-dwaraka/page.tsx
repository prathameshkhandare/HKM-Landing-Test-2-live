"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"
import { Check, Heart, ArrowRight, Calendar, Users, Music, MessagesSquare, Church } from "lucide-react"
import FooterSection from "@/components/FooterSection"
import PhilosophyTempleHeader from "@/components/PhilosophyTempleHeader"

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

            {/* Hero Section - Using Philosophy Style Header */}
            <PhilosophyTempleHeader 
                title="Dakshina Dwaraka"
                subtitle="A magnificent cultural complex dedicated to Sri Sri Rukmini Dwarakadhish, built to preserve and promote our rich Vedic heritage."
                stickerText="Future Cultural Landmark"
                imageSrc="/assets/dakshina-dwaraka-dham.png"
            />

            {/* About Section */}
            <section className="py-24 px-6 bg-[#FFF9F0] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] animate-spin-slow-reverse pointer-events-none"></div>
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-sm font-bold text-[#ea580c] uppercase tracking-widest mb-2 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-[#ea580c]"></span> Our Vision
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-[#2D0A0A] mb-8 leading-tight font-serif">
                                Preserving Culture, <br />Empowering Society.
                            </h3>
                            <p className="text-[#4a4a4a] text-lg leading-relaxed mb-6 font-light">
                                <strong className="text-[#701a1a]">HKMC Dakshina Dwaraka Cultural Complex</strong> is not just a building; it is a spiritual sanctuary designed to revive the glorious Vedic culture. Dedicated to Their Lordships <span className="text-[#ea580c] font-medium">Sri Sri Rukmini Dwarakadhish</span>, this project aims to be a beacon of spiritual knowledge, peace, and values in Chennai.
                            </p>
                            <p className="text-[#4a4a4a] text-lg leading-relaxed mb-10">
                                Construction has been ongoing since June 2021. Join us in building this divine abode and leave a legacy of devotion.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-6">
                                {activities.map((activity, i) => (
                                    <motion.div 
                                        key={i} 
                                        whileHover={{ y: -5 }}
                                        className="flex items-center gap-4 p-5 bg-white/60 backdrop-blur-sm rounded-xl border border-[#FFB81C]/20 shadow-sm hover:shadow-md transition-all group"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB81C] to-[#ea580c] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                                            <activity.icon size={20} />
                                        </div>
                                        <span className="font-bold text-[#2D0A0A] text-sm leading-tight group-hover:text-[#ea580c] transition-colors">{activity.title}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative">
                            {/* Premium Image Container */}
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-8 border-white ring-1 ring-[#FFB81C]/20 group">
                                <img 
                                    src="/assets/dakshina-about.png" 
                                    alt="Construction Progress" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2D0A0A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[url('/assets/mandala-pattern.png')] bg-contain opacity-10 animate-spin-slow"></div>
                            <div className="absolute -top-10 -left-10 w-32 h-32 border-2 border-[#FFB81C]/30 rounded-full animate-pulse-slow"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seva Opportunities (Premium Cards) */}
            <section id="contribute" className="py-24 px-6 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FFF9F0] to-[#FFF5E0]"></div>
                
                {/* Background Decor - Vibrant Glowing Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFB81C] rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ea580c] rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-pulse-slow delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#FFB81C]/20 to-transparent blur-3xl pointer-events-none"></div>

                {/* Floating Particles/Petals - More Visible */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={`absolute rounded-full ${i % 2 === 0 ? 'bg-[#FFD700]' : 'bg-[#FF4500]'} shadow-[0_0_10px_rgba(255,184,28,0.6)]`}
                            initial={{ 
                                top: "110%", 
                                left: `${Math.random() * 100}%`,
                                width: Math.random() * 8 + 4 + "px",
                                height: Math.random() * 8 + 4 + "px",
                                opacity: 0
                            }}
                            whileInView={{ 
                                top: "-10%",
                                rotate: 360,
                                opacity: [0, 0.8, 0]
                            }}
                            animate={{
                                top: ["110%", "-10%"],
                                rotate: [0, 360],
                                x: [0, Math.random() * 50 - 25],
                                opacity: [0, 0.7, 0]
                            }}
                            transition={{ 
                                duration: Math.random() * 10 + 10, 
                                repeat: Infinity, 
                                ease: "linear",
                                delay: i * 1.5 
                            }}
                        />
                    ))}
                </div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="text-center mb-20">
                         <h2 className="text-sm font-bold text-[#ea580c] uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
                             <span className="w-12 h-[1px] bg-[#ea580c]"></span> Seva Opportunities <span className="w-12 h-[1px] bg-[#ea580c]"></span>
                         </h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-[#2D0A0A] font-serif mb-6 drop-shadow-sm">
                            Join the Divine Mission
                        </h3>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
                            Your contribution helps build a home for the Lord and a center for spiritual education. Choose a seva that resonates with your heart.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {sevaOptions.map((option, index) => {
                            // Unified Premium Card Style for all options
                            return (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative group overflow-hidden rounded-xl p-1 flex flex-col items-center text-center transition-all duration-500 bg-gradient-to-br from-[#FFB81C] to-[#ea580c] shadow-xl hover:shadow-2xl hover:-translate-y-2"
                                >
                                    {/* Inner Classic Card Container */}
                                    <div className="relative w-full h-full bg-[#FFF9F0] rounded-lg p-6 flex flex-col items-center overflow-hidden">
                                        
                                        {/* Classic Parchment/Mandala Texture */}
                                        <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.15] bg-repeat bg-[length:120px_120px] mix-blend-multiply"></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF9F0] via-transparent to-[#FFF9F0] opacity-80"></div>
                                        
                                        {/* Decorative Corner Borders */}
                                        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#ea580c]/40 rounded-tl pointer-events-none"></div>
                                        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#ea580c]/40 rounded-tr pointer-events-none"></div>
                                        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#ea580c]/40 rounded-bl pointer-events-none"></div>
                                        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#ea580c]/40 rounded-br pointer-events-none"></div>

                                        {/* Watermark (Golden Lotus) */}
                                        <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-[0.4] group-hover:opacity-[0.6] transition-all duration-700 pointer-events-none group-hover:rotate-12">
                                            <img src="/assets/golden_lotus_flourish.png" alt="Lotus" className="w-full h-full object-contain" />
                                        </div>

                                        {/* Icon Container */}
                                        <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md border-2 border-[#FFB81C]/30 bg-[#FFF5E0] text-[#ea580c] group-hover:scale-105 transition-transform duration-500">
                                            <option.icon size={28} strokeWidth={1.5} />
                                        </div>

                                        <h4 className="relative z-10 text-2xl font-bold mb-3 font-serif text-[#2D0A0A] tracking-tight">{option.title}</h4>
                                        <div className="relative z-10 w-16 h-[2px] bg-gradient-to-r from-transparent via-[#ea580c]/50 to-transparent mb-4"></div>
                                        
                                        <p className="relative z-10 text-sm mb-6 leading-relaxed flex-grow text-[#5a4a4a] font-medium font-serif italic">
                                            "{option.description}"
                                        </p>

                                        <div className="relative z-10 w-full pt-6 border-t border-[#ea580c]/10 group-hover:border-[#FFB81C]/30 transition-colors">
                                            <div className="mb-5">
                                                <span className="block text-[10px] uppercase tracking-[0.2em] font-bold mb-1 text-[#ea580c]/70">Contribution</span>
                                                <span className="text-3xl font-bold font-serif text-[#2D0A0A] drop-shadow-sm">{option.amount}</span>
                                                <span className="text-xs block mt-1 text-gray-500 font-serif">{option.period}</span>
                                            </div>
                                        
                                            <a 
                                                href={option.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full py-3 rounded border border-[#ea580c] text-[#ea580c] font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 hover:bg-[#ea580c] hover:text-white hover:shadow-[0_0_15px_#ea580c] hover:scale-105 group/btn relative overflow-hidden"
                                            >
                                                <span className="relative z-10 flex items-center gap-2">Offer Seva <Heart size={14} className="fill-current group-hover:animate-pulse" /></span>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                    
                    <div className="mt-20 text-center">
                        <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                             <Check size={14} className="text-green-500" /> All donations are eligible for tax exemption under 80G. Secure payment gateway by CCAvenue.
                        </p>
                    </div>
                </div>
            </section>
            <FooterSection />
        </main>
    )
}
