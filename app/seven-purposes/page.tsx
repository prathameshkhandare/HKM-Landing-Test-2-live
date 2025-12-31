"use client"

import React, { useState, useRef } from "react"
import Navbar from "@/components/Navbar"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { BookOpen, Users, Church, Music, Leaf, PenTool, Globe, ArrowRight } from "lucide-react"
import FooterSection from "@/components/FooterSection"

// --- Content Data ---
const purposes = [
    {
        id: "01",
        title: "Spiritual Knowledge",
        description: "To systematically propagate spiritual knowledge to society at large and to educate all people in the techniques of spiritual life in order to check the imbalance of values in life and to achieve real unity and peace in the world.",
        image: "/assets/scan92a.jpg",
        icon: BookOpen,
        color: "#c2410c", // Orange-700
    },
    {
        id: "02",
        title: "Consciousness of Krishna",
        description: "To propagate a consciousness of Krishna (God), as it is revealed in the great scriptures of India, Bhagavad-gita and Srimad-Bhagavatam.",
        image: "/assets/hkm-about-science.jpg",
        icon: Globe,
        color: "#0369a1" // Sky-700
    },
    {
        id: "03",
        title: "Spiritual Brotherhood",
        description: "To bring the members of the Society together with each other and nearer to Krishna, the prime entity, thus developing the idea within the members, and humanity at large, that each soul is part and parcel of the quality of Godhead (Krishna).",
        image: "/assets/hkm-about-community.jpg",
        icon: Users,
        color: "#15803d" // Green-700
    },
    {
        id: "04",
        title: "Sankirtana Movement",
        description: "To teach and encourage the sankirtana movement, congregational chanting of the holy name of God, as revealed in the teachings of Lord Sri Caitanya Mahaprabhu.",
        image: "/assets/sankirtana.jpg",
        icon: Music,
        color: "#be185d" // Pink-700
    },
    {
        id: "05",
        title: "Holy Place",
        description: "To erect for the members and for society at large a holy place of transcendental pastimes dedicated to the personality of Krishna.",
        image: "/hkm-hero-new.jpg",
        icon: Church,
        color: "#7e22ce" // Purple-700
    },
    {
        id: "06",
        title: "Simple Living",
        description: "To bring the members closer together for the purpose of teaching a simpler, more natural way of life.",
        image: "/assets/hkm-about-science.jpg",
        icon: Leaf,
        color: "#4d7c0f" // Lime-700
    },
    {
        id: "07",
        title: "Publications",
        description: "With a view towards achieving the aforementioned purposes, to publish and distribute periodicals, magazines, books and other writings.",
        image: "/assets/hkm-about-education.png",
        icon: PenTool,
        color: "#b91c1c" // Red-700
    }
]

export default function SevenPurposesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <main className="bg-white font-sans text-gray-900">
            <Navbar />
            
            {/* Header */}
            <header className="h-[70vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-gray-50">
                 <div className="absolute inset-0 opacity-[0.03]" 
                     style={{ backgroundImage: "url('/hkcm-logo.svg')", backgroundRepeat: "repeat", backgroundSize: "300px" }}>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }} 
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                         <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-[#0078BF]" style={{ fontFamily: "var(--font-manrope)" }}>
                            THE <span className="text-[#FBB201]">SEVEN</span>
                            <br /> PURPOSES.
                        </h1>
                    </motion.div>
                   
                    <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto">
                        Scroll to explore the divine mission.
                    </p>
                </div>
                
                <motion.div 
                    animate={{ y: [0, 10, 0] }} 
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-12 text-[#0078BF]"
                >
                    <ArrowRight className="rotate-90" size={32} />
                </motion.div>
            </header>

            {/* Sticky Scroll Section */}
            <div className="relative">
                {purposes.map((purpose, index) => (
                    <PurposeSection key={purpose.id} purpose={purpose} index={index} />
                ))}
            </div>

            {/* Footer Spacer */}
            <div className="h-[30vh] bg-white text-center flex items-center justify-center">
                 <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#0078BF] hover:bg-[#006099] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                 >
                    Join the Mission
                 </button>
            </div>

            <JoinMissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <FooterSection />
        </main>
    )
}

function JoinMissionModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    if (!isOpen) return null

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Construct mailto link
        const form = e.target as HTMLFormElement
        const name = (form.elements.namedItem('name') as HTMLInputElement).value
        const email = (form.elements.namedItem('email') as HTMLInputElement).value
        const phone = (form.elements.namedItem('phone') as HTMLInputElement).value
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value
        
        const subject = `Join Mission Request from ${name}`
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AMessage: ${message}`
        
        window.location.href = `mailto:prathameshkhandare15@gmail.com?subject=${subject}&body=${body}`
        onClose()
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white w-full max-w-lg rounded-2xl shadow-2xl relative z-10 overflow-hidden"
            >
                <div className="p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "var(--font-playfair)" }}>
                            Join the Mission
                        </h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                            ✕
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input 
                                name="name"
                                required
                                type="text" 
                                placeholder="E.g. Krishna"
                                className="w-full bg-gray-100 border-none rounded-sm px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#0078BF] outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input 
                                name="email"
                                required
                                type="email" 
                                placeholder="E.g. Krishna@hkmchennai.org"
                                className="w-full bg-gray-100 border-none rounded-sm px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#0078BF] outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input 
                                name="phone"
                                required
                                type="tel" 
                                placeholder="E.g. +1 3004005000"
                                className="w-full bg-gray-100 border-none rounded-sm px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#0078BF] outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Message
                            </label>
                            <div className="relative">
                                <textarea 
                                    name="message"
                                    rows={4}
                                    placeholder="Enter your message..."
                                    className="w-full bg-gray-100 border-none rounded-sm px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#0078BF] outline-none transition-all resize-none"
                                />
                                <span className="absolute bottom-2 right-2 text-xs text-gray-400">0 / 180</span>
                            </div>
                        </div>

                        <button 
                            type="submit"
                            className="bg-[#0078BF] hover:bg-[#006099] text-white px-8 py-3 rounded-sm font-bold uppercase transition-all shadow-md hover:shadow-lg w-full md:w-auto"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    )
}

// Add index signature to allowed flexible props
interface Purpose {
    id: string;
    title: string;
    description: string;
    image: string;
    icon: any;
    color: string;
    imageClass?: string;
}

function PurposeSection({ purpose, index }: { purpose: Purpose, index: number }) {
    const isEven = index % 2 === 0
    
    return (
        <div className="relative h-screen min-h-[800px] w-full flex overflow-hidden">
            {/* Split Layout: Content & Image */}
            
            {/* 1. TEXT SIDE (Scrolls) */}
            <div className={`w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 relative z-10 bg-white ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-20%" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl"
                >
                     <div 
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8 text-white shadow-xl"
                        style={{ backgroundColor: purpose.color }}
                     >
                        <purpose.icon size={32} />
                    </div>

                    <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-[#0078BF] leading-[0.9]" style={{ fontFamily: "var(--font-playfair)" }}>
                        {purpose.title}
                    </h2>
                    
                    <div className="w-24 h-2 mb-8 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full"
                            style={{ backgroundColor: purpose.color }}
                        />
                    </div>

                    <p className="text-xl text-gray-600 leading-relaxed font-light mb-12">
                        {purpose.description}
                    </p>

                     <span className="text-9xl font-black absolute -bottom-20 -right-20 text-gray-50 -z-10 select-none opacity-50" style={{ fontFamily: "var(--font-manrope)" }}>
                        {purpose.id}
                    </span>
                </motion.div>
            </div>

            {/* 2. IMAGE SIDE (Sticky/Fixed Visual) */}
            <div className={`hidden lg:block w-1/2 h-full sticky top-0 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                 <motion.div 
                    className="w-full h-full relative p-20 flex items-center justify-center" // Increased padding to p-20 for smaller image
                    initial={{ scale: 1.1, filter: "grayscale(100%)" }}
                    whileInView={{ scale: 1, filter: "grayscale(0%)" }}
                    viewport={{ amount: 0.6 }}
                    transition={{ duration: 0.8 }}
                 >
                    <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl bg-white"> 
                         <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none"></div>
                        <img 
                            src={purpose.image} 
                            alt={purpose.title} 
                            className={`w-full h-full ${purpose.imageClass || "object-cover"}`}
                        />
                        
                        {/* Overlay Text on Image */}
                        <div className="absolute bottom-8 left-8 z-20 max-w-sm">
                             <div className="bg-white/95 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl">
                                 <p className="text-sm font-bold uppercase tracking-widest mb-2 text-[#FBB201]">Core Principle {purpose.id}</p>
                                 <p className="text-lg font-serif italic text-gray-800">"{purpose.title} is not just a goal, it describes our very existence."</p>
                             </div>
                        </div>
                    </div>
                 </motion.div>
            </div>

            {/* Mobile Image (Visible only on small screens) */}
             <div className="absolute inset-0 lg:hidden -z-10 bg-white">
                <div className="absolute inset-0 bg-white/90 z-10"></div>
                <img src={purpose.image} className="w-full h-full object-cover opacity-20" />
            </div>
        </div>
    )
}
