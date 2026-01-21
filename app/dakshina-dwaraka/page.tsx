"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"
import { Check, Heart, ArrowRight, Calendar, Users, Music, MessagesSquare, Church, X, ChevronLeft, ChevronRight, Sun, Crown, User, Star } from "lucide-react"
import FooterSection from "@/components/FooterSection"
import PhilosophyTempleHeader from "@/components/PhilosophyTempleHeader"
import { useState } from "react"
import Image from "next/image"

// Construction Images
const constructionImages = [
    "/assets/dakshina-dwaraka/DJI_0041.JPG",
    "/assets/dakshina-dwaraka/DJI_0029.JPG",
    "/assets/dakshina-dwaraka/P1022130.JPG",
    "/assets/dakshina-dwaraka/DJI_0026.JPG",
    "/assets/dakshina-dwaraka/DJI_0027.JPG",
    "/assets/dakshina-dwaraka/IMG_1795.JPG",
    "/assets/dakshina-dwaraka/P1172579.JPG"
]



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
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(0)

    const openLightbox = (index: number) => {
        setSelectedImage(index)
        setIsLightboxOpen(true)
    }

    const closeLightbox = () => setIsLightboxOpen(false)

    const navigateImage = (direction: number) => {
        setSelectedImage((prev) => {
            const next = prev + direction
            if (next >= constructionImages.length) return 0
            if (next < 0) return constructionImages.length - 1
            return next
        })
    }

    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">
            <Navbar />

            {/* Hero Section - Using Philosophy Style Header */}
            <PhilosophyTempleHeader 
                title="Dakshina Dwaraka Dham"
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

            {/* Architectural Vision Section */}
            <section className="py-24 px-6 bg-white relative overflow-hidden">
                 <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                         <h2 className="text-sm font-bold text-[#ea580c] uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
                            <span className="w-8 h-[2px] bg-[#ea580c]"></span> Divine Architecture <span className="w-8 h-[2px] bg-[#ea580c]"></span>
                         </h2>
                         <h3 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[#2D0A0A]">Architectural Vision</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Main Render - Large Card */}
                        <div className="md:col-span-2 aspect-video rounded-2xl overflow-hidden shadow-xl relative group">
                            <Image 
                                src="https://cdn.hkmchennai.org/cdn-files/ddd_arc_1.jpg" 
                                alt="Grand Front View" 
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 80vw"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent opacity-90"></div>
                             
                             {/* Label Overlay */}
                             <div className="absolute bottom-6 left-6 flex items-center gap-3 z-10">
                                 <div className="w-10 h-10 rounded-full bg-[#334155]/80 backdrop-blur-md flex items-center justify-center border border-white/10 text-[#FFB81C]">
                                     <Church size={20} />
                                 </div>
                                 <h4 className="text-xl font-bold text-white font-sans tracking-wide">Grand Front View</h4>
                             </div>
                        </div>

                        {/* Aerial View - Blue Card Style */}
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative group bg-[#1e293b]">
                             <Image 
                                src="https://cdn.hkmchennai.org/cdn-files/ddd_arc_2.jpg" 
                                alt="Aerial Perspective" 
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                                sizes="(max-width: 768px) 100vw, 50vw"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
                             <div className="absolute bottom-6 left-6 flex items-center gap-3 z-10">
                                 <div className="w-10 h-10 rounded-full bg-[#334155]/80 backdrop-blur-md flex items-center justify-center border border-white/10 text-[#FFB81C]">
                                     <div className="w-4 h-4 border-2 border-[#FFB81C] border-dashed rounded-[2px]" />
                                 </div>
                                 <h4 className="text-lg font-bold text-white font-sans tracking-wide">Aerial Perspective</h4>
                             </div>
                        </div>

                         {/* Side View - Blue Card Style */}
                        <div className="grid grid-rows-2 gap-6 h-full">
                            <div className="rounded-2xl overflow-hidden shadow-xl relative group bg-[#1e293b] h-full min-h-[200px]">
                                <Image 
                                    src="https://cdn.hkmchennai.org/cdn-files/ddd_arc_3.jpg" 
                                    alt="Side View" 
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                                    <div className="w-8 h-8 rounded-full bg-[#334155]/80 backdrop-blur-md flex items-center justify-center border border-white/10 text-[#FFB81C]">
                                        <div className="w-3 h-3 bg-[#FFB81C] rounded-[1px]" />
                                    </div>
                                    <h4 className="text-sm font-bold text-white font-sans tracking-wide">Thiruvanmiyur Beach View</h4>
                                </div>
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-xl relative group bg-[#1e293b] h-full min-h-[200px]">
                                <Image 
                                    src="https://cdn.hkmchennai.org/cdn-files/ddd_arc_4.jpg" 
                                    alt="Side Perspective" 
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 border-4 border-transparent" 
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                                    <div className="w-8 h-8 rounded-full bg-[#334155]/80 backdrop-blur-md flex items-center justify-center border border-white/10 text-[#FFB81C]">
                                        <div className="w-3 h-3 bg-[#FFB81C] rounded-[1px]" />
                                    </div>
                                    <h4 className="text-sm font-bold text-white font-sans tracking-wide">Side View</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </section>

            {/* Construction Status Section */}
            <section className="py-20 px-6 bg-white border-t border-gray-100 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea580c] opacity-[0.03] rounded-bl-full pointer-events-none"></div>
                
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-10 border-b border-gray-100 pb-6">
                        <div className="text-left">
                             <h2 className="text-sm font-bold text-[#ea580c] uppercase tracking-widest mb-2 flex items-center gap-2">
                                <span className="w-6 h-[2px] bg-[#ea580c]"></span> Progress Update
                             </h2>
                             <h3 className="text-3xl md:text-4xl font-bold font-serif text-[#2D0A0A]">Construction Status</h3>
                        </div>
                        <p className="text-gray-500 font-medium italic mt-2 md:mt-0 bg-[#FFF9F0] px-4 py-1 rounded-full border border-[#ea580c]/10 text-sm">
                            As on September 2025
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Main Collage - Takes up 7 cols */}
                        <div className="lg:col-span-7 w-full h-[500px] relative">
                            <div className="absolute inset-0 h-full w-full rounded-xl overflow-hidden shadow-xl border-[6px] border-white group relative hover:shadow-2xl transition-all duration-500">
                                <Image 
                                    src="/assets/dakshina-dwaraka/collage.png" 
                                    alt="Construction Collage" 
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 60vw"
                                />
                                <div className="absolute inset-0 border border-black/5 rounded-lg pointer-events-none"></div>
                            </div>
                            <p className="absolute -bottom-8 w-full text-center text-gray-400 text-xs uppercase tracking-widest">Site Progress Overview</p>
                        </div>

                        {/* Recent Snaps Grid - Takes up 5 cols - Compact Vertical Layout */}
                        <div className="lg:col-span-5 flex flex-col gap-4">
                            <div className="bg-[#FFF9F0] p-6 rounded-xl border border-[#ea580c]/10">
                                <h4 className="text-[#2D0A0A] font-bold font-serif mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Latest Snapshots
                                </h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "/assets/dakshina-dwaraka/DJI_0041.JPG",
                                        "/assets/dakshina-dwaraka/DJI_0029.JPG",
                                        "/assets/dakshina-dwaraka/P1022130.JPG"
                                    ].map((src, index) => (
                                        <div 
                                            key={index}
                                            onClick={() => openLightbox(index)}
                                            className="rounded-lg overflow-hidden shadow-sm h-32 border border-white group relative cursor-pointer"
                                        >
                                             <Image 
                                                src={src} 
                                                alt={`Snap ${index + 1}`} 
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                sizes="(max-width: 768px) 50vw, 20vw"
                                             />
                                             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                                                <div className="bg-black/50 p-1 rounded-full text-white"><ArrowRight size={16} /></div>
                                             </div>
                                        </div>
                                    ))}
                                    
                                     {/* View All Button */}
                                     <div 
                                        onClick={() => openLightbox(0)}
                                        className="rounded-lg overflow-hidden shadow-sm h-32 border border-white group relative cursor-pointer flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition-colors"
                                    >
                                         <div className="w-8 h-8 rounded-full bg-[#FFF9F0] flex items-center justify-center text-[#ea580c] mb-2 border border-[#ea580c]/20">
                                            <span className="font-bold text-lg">+</span>
                                         </div>
                                         <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">View All</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Lightbox Modal */}
            {isLightboxOpen && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-sm" onClick={closeLightbox}>
                    <button 
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
                    >
                        <X size={32} />
                    </button>
                    
                    <button 
                        onClick={(e) => { e.stopPropagation(); navigateImage(-1); }}
                        className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-2 bg-white/5 hover:bg-white/10 rounded-full"
                    >
                        <ChevronLeft size={32} />
                    </button>

                     <button 
                        onClick={(e) => { e.stopPropagation(); navigateImage(1); }}
                        className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-2 bg-white/5 hover:bg-white/10 rounded-full"
                    >
                        <ChevronRight size={32} />
                    </button>

                    <div className="relative w-full max-w-5xl h-[80vh] flex flex-col items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
                        <motion.img 
                            key={selectedImage}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                            src={constructionImages[selectedImage]} 
                            alt="Construction View" 
                            className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
                        />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-light tracking-widest bg-black/50 px-4 py-1 rounded-full">
                            {selectedImage + 1} / {constructionImages.length}
                        </div>
                    </div>
                </div>
            )}


            {/* Sevakartas - Sponsors Section */}
            <section className="py-24 px-6 bg-[#FFF9F0] relative overflow-hidden text-center text-[#2D0A0A]">
                 {/* Very Subtle Pattern */}
                 <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[url('/assets/mandala-pattern.png')] bg-fixed opacity-[0.03]"></div>
                
                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-6xl font-black font-serif text-[#2D0A0A] mb-4 uppercase tracking-wider drop-shadow-sm">Dakshina Dwaraka Dham</h2>
                        <div className="flex items-center justify-center gap-6">
                            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#ea580c]"></span>
                            <h3 className="text-2xl md:text-3xl font-light font-serif text-[#ea580c] uppercase tracking-[0.2em]">Sevakartas</h3>
                            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#ea580c]"></span>
                        </div>
                    </div>
                    
                    {/* Heritage Patron - Centerpiece */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.8 }}
                        className="mb-16 relative group"
                    >
                        {/* More subtle ambient glow */}
                        <div className="absolute inset-0 bg-[#ea580c]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-1000"></div>
                        
                        {/* Refined Frame Container */}
                        <div className="relative w-full max-w-3xl mx-auto">
                             <div className="bg-white border-2 border-[#ea580c]/20 p-2 rounded-xl shadow-2xl relative overflow-hidden">
                                 {/* Heritage Specific Background - Subtle Mandala */}
                                 <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.06] bg-center bg-contain bg-no-repeat pointer-events-none animate-spin-slow-reverse"></div>
                                 <div className="absolute inset-0 bg-gradient-to-br from-[#ea580c]/5 to-transparent pointer-events-none"></div>

                                 {/* Decorative Corner Elements - Intricate */}
                                 <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#ea580c]/30 rounded-tl-3xl pointer-events-none"></div>
                                 <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-[#ea580c]/30 rounded-tr-3xl pointer-events-none"></div>
                                 <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-[#ea580c]/30 rounded-bl-3xl pointer-events-none"></div>
                                 <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#ea580c]/30 rounded-br-3xl pointer-events-none"></div>

                                 <div className="relative z-10 p-12 flex flex-col items-center">
                                     <div className="mb-6">
                                         <div className="flex items-center gap-4 bg-[#ea580c]/10 px-6 py-2 rounded-full border border-[#ea580c]/30">
                                            <Sun size={16} className="text-[#ea580c] animate-spin-slow" />
                                            <span className="text-[#ea580c] text-sm font-serif font-bold uppercase tracking-[0.3em]">Heritage Patron</span>
                                            <Sun size={16} className="text-[#ea580c] animate-spin-slow" />
                                         </div>
                                     </div>
                                     
                                     <h4 className="text-4xl md:text-6xl font-serif font-bold text-[#2D0A0A] leading-tight text-center mb-6 relative">
                                        <span className="relative z-10">Sri Vaidyanathan K</span>
                                        {/* Text flourish */}
                                        <span className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl text-[#ea580c]/5 font-serif whitespace-nowrap blur-sm">Sri Vaidyanathan</span>
                                     </h4>
                                     
                                     <div className="flex items-center gap-3 opacity-60">
                                         <span className="h-[1px] w-16 bg-[#ea580c]"></span>
                                         <div className="w-3 h-3 rotate-45 border-2 border-[#ea580c]"></div>
                                         <span className="h-[1px] w-16 bg-[#ea580c]"></span>
                                     </div>
                                 </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Founder Patrons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                         {[
                             "Nandhika Sri TS, Janani,\nSenthil Kumar TKM",
                             "Sri Devarajan Kabilan"
                         ].map((patron, i) => (
                             <motion.div 
                                key={i} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="bg-white p-8 rounded-xl border-t-4 border-t-[#ea580c] border-x border-b border-gray-100 relative group hover:shadow-xl transition-all duration-300 shadow-sm overflow-hidden"
                             >
                                {/* Founder Background Element */}
                                <div className="absolute -right-6 -bottom-6 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500">
                                    <Church size={120} className="text-[#ea580c]" />
                                </div>
                                <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#FFF5E0]/50 to-transparent"></div>
                                
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="mb-4">
                                        <span className="inline-block py-1 px-4 text-[#ea580c] font-serif text-sm font-bold uppercase tracking-[0.2em] border-b-2 border-[#ea580c]/20">Founder Patron</span>
                                    </div>
                                    <p className="text-xl md:text-2xl font-serif text-[#2D0A0A] leading-relaxed whitespace-pre-line group-hover:text-black transition-colors">{patron}</p>
                                </div>
                             </motion.div>
                         ))}
                    </div>

                    {/* Standard Styles for List Groups - New Horizontal Design */}
                    <div className="space-y-8 max-w-5xl mx-auto">
                        {/* Reusable Seva Card Component */}
                        {[
                            { title: "Gopuram Seva", names: ["Smt Renuka Rowvey Bengaluru", "Mrs. Sushma Sarin (w/o MR B.R.Sarin)"], icon: <Church className="w-6 h-6" /> },
                            { title: "Dharmadhikari", names: ["Vikram, Vandana, Aditya, Anupama Agarwal"], icon: <Users className="w-6 h-6" /> },
                            { title: "Kalasha Seva", names: ["Kishor Kumar Gokaldas & Family"], icon: <Sun className="w-6 h-6" /> }
                        ].map((section, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all border border-[#ea580c]/10">
                                <div className="bg-[#FFF5E0] px-6 py-4 border-b border-[#ea580c]/10 flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-[#ea580c]">
                                        {section.icon}
                                        <h4 className="font-bold text-lg uppercase tracking-widest font-serif">{section.title}</h4>
                                    </div>
                                    <div className="h-1 w-12 bg-[#ea580c]/30 rounded-full"></div>
                                </div>
                                <div className="p-8 relative">
                                     <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#FFF5E0]/30 to-transparent pointer-events-none"></div>
                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {section.names.map((name, nIdx) => (
                                            <div key={nIdx} className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#ea580c]/60"></div>
                                                <p className="text-lg text-gray-700 font-light font-serif tracking-wide">{name}</p>
                                            </div>
                                        ))}
                                     </div>
                                </div>
                            </div>
                        ))}

                        {/* Dharma Karta */}
                         <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all border border-[#ea580c]/10">
                            <div className="bg-[#FFF5E0] px-8 py-5 border-b border-[#ea580c]/10 flex items-center justify-between">
                                <div className="flex items-center gap-3 text-[#ea580c]">
                                    <Crown size={24} />
                                    <h4 className="font-bold text-xl uppercase tracking-widest font-serif">Dharma Karta</h4>
                                </div>
                                <div className="h-1 w-16 bg-[#ea580c]/30 rounded-full"></div>
                            </div>
                            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 relative">
                                <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none rotate-12">
                                    <Crown size={150} />
                                </div>
                                <ul className="space-y-4">
                                    {["Sri Balaji Jayaraman", "Smt Rada Raghunaathan", "Sri Senthil Kumar R"].map((name, i) => (
                                         <li key={i} className="flex items-center gap-3 text-lg text-gray-700 font-light font-serif">
                                            <ArrowRight size={14} className="text-[#ea580c]" /> {name}
                                         </li>
                                    ))}
                                </ul>
                                <ul className="space-y-4">
                                    {["Sri Subhash Chandra Goel", "Sri Vikram Agarwal", "Smt Vishaka K"].map((name, i) => (
                                         <li key={i} className="flex items-center gap-3 text-lg text-gray-700 font-light font-serif">
                                            <ArrowRight size={14} className="text-[#ea580c]" /> {name}
                                         </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                         {/* Dharma Sevak - Wide List */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all border border-[#ea580c]/10">
                            <div className="bg-[#FFF5E0] px-8 py-5 border-b border-[#ea580c]/10 flex items-center justify-between">
                                <div className="flex items-center gap-3 text-[#ea580c]">
                                    <Heart size={24} />
                                    <h4 className="font-bold text-xl uppercase tracking-widest font-serif">Dharma Sevak</h4>
                                </div>
                                <div className="h-1 w-16 bg-[#ea580c]/30 rounded-full"></div>
                            </div>
                            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-gray-700 font-serif text-lg relative">
                                 <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.02] pointer-events-none"></div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100">Sri Anil Jonnalagadda</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100">R Srinivas Babu</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100">Sri Anurag</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100">Sundari Gopi Devi Dasi & Giridhari Ramamoorthy</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100">Balachandar Srinivasan</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100">Sri Sundeep Anand</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100">Smt Geetha Kalyani Viswakumar</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100">M/S Suryanarayana Aggregates & Sands</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100">(Late) Smt. Kausalya R</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100 relative group-hover:pl-2 transition-all cursor-default">
                                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#ea580c] opacity-0 group-hover:opacity-100 rounded-full transition-opacity"></span>
                                    M/s TVS Motor Company Ltd
                                </div>
                                <div className="text-center md:text-right hover:text-[#ea580c] transition-colors">Sri Lakshmanan K N</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors">Dr Uma Jaganmohan & Jaganmohan</div>
                                <div className="text-center md:text-right hover:text-[#ea580c] transition-colors">Smt Mangala Nagarajan</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors">Sri Nagarajan V</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Project Team Section */}
            <section className="py-20 px-6 bg-white relative">
                 <div className="container mx-auto max-w-5xl">
                      <h2 className="text-2xl font-bold font-serif text-[#2D0A0A] text-center mb-12 uppercase tracking-widest">Project Team</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                           {/* Principal Architect */}
                           <div className="flex flex-col items-center text-center p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-sm font-bold text-[#ea580c] uppercase tracking-widest mb-4">Principal Architect</h4>
                                <div className="mb-4">
                                     {/* Placeholder for Logo if not available, replacing with stylized text */}
                                     <div className="text-3xl font-serif font-black text-[#2e4c9c]">InGenious</div>
                                     <div className="text-sm text-gray-500 uppercase tracking-tight">Studio Private Limited</div>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Office No. 158, First Floor, Tower B1<br/>
                                    Spaze I Tech Park, Sohna Road, Sector 49<br/>
                                    Gurgaon, Haryana - 122 002
                                </p>
                           </div>

                             {/* Architect & Structural Consultant */}
                             <div className="flex flex-col items-center text-center p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-sm font-bold text-[#ea580c] uppercase tracking-widest mb-4">Architect & Structural Consultant</h4>
                                <div className="mb-4">
                                     <p className="text-xl font-bold font-serif text-gray-800">Sri. B.S Muralidhara</p>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    No.827 Dhun Building, 2nd Floor North Wing,<br/>
                                    Mount Road, Chennai-600 002.<br/>
                                    Phone: 044-28555581
                                </p>
                           </div>

                            {/* Facade Consultant */}
                             <div className="flex flex-col items-center text-center p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-sm font-bold text-[#ea580c] uppercase tracking-widest mb-4">Facade Consultant</h4>
                                <div className="mb-4">
                                     <div className="text-3xl font-serif font-bold text-[#452c63]">Nemcon</div>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    G K Venkatesh No.569,<br/>
                                    Sector - 5, Vaishali,<br/>
                                    Ghaziabad – 201 012.<br/>
                                    Phone: +91 93800 82928.
                                </p>
                           </div>

                            {/* MEP Consultant */}
                             <div className="flex flex-col items-center text-center p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-sm font-bold text-[#ea580c] uppercase tracking-widest mb-4">MEP Consultant</h4>
                                <div className="mb-4">
                                     <div className="bg-[#005f6b] text-white px-3 py-1 text-2xl font-bold tracking-widest rounded-sm">BESTEN</div>
                                </div>
                                <p className="text-gray-600 text-sm italic mb-2">Besten Engineers & Consultants India Pvt. Ltd</p>
                                <p className="text-gray-600 text-xs text-center">
                                    F-2, Lakshmi Apartments, 95, Periyar Pathai,<br/>
                                    Choolaimedu (W), Near 100ft Road,<br/>
                                    Chennai- 600 094 Phone: +91 44 2361 1595 / 96
                                </p>
                           </div>
                      </div>
                 </div>
            </section>
        </main>
    )
}
