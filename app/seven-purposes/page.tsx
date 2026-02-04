"use client"

import React, { useState } from "react"
import Navbar from "@/components/Navbar"
import SaffronCommonHeader from "@/components/SaffronCommonHeader"
import { motion } from "framer-motion"
import { BookOpen, Users, Church, Music, Leaf, PenTool, Globe, Star, Sparkles, CheckCircle2, Flower2 } from "lucide-react"
import Footer from "@/components/FooterSection"

// --- Content Data ---
const purposes = [
    {
        id: "01",
        title: "Spiritual Knowledge",
        description: "To systematically propagate spiritual knowledge to society at large and to educate all people in the techniques of spiritual life in order to check the imbalance of values in life and to achieve real unity and peace in the world.",
        image: "/assets/scan92a.jpg",
        icon: BookOpen,
    },
    {
        id: "02",
        title: "Consciousness of Krishna",
        description: "To propagate a consciousness of Krishna (God), as it is revealed in the great scriptures of India, Bhagavad-gita and Srimad-Bhagavatam.",
        image: "/assets/purposes/krishna_consciousness.png",
        icon: Globe,
    },
    {
        id: "03",
        title: "Spiritual Brotherhood",
        description: "To bring the members of the Society together with each other and nearer to Krishna, the prime entity, thus developing the idea within the members, and humanity at large, that each soul is part and parcel of the quality of Godhead (Krishna).",
        image: "/assets/hkm-about-community.jpg",
        icon: Users,
    },
    {
        id: "04",
        title: "Sankirtana Movement",
        description: "To teach and encourage the sankirtana movement, congregational chanting of the holy name of God, as revealed in the teachings of Lord Sri Caitanya Mahaprabhu.",
        image: "/assets/sankirtana.jpg",
        icon: Music,
    },
    {
        id: "05",
        title: "Holy Place",
        description: "To erect for the members and for society at large a holy place of transcendental pastimes dedicated to the personality of Krishna.",
        image: "/hkm-hero-new.jpg",
        icon: Church,
    },
    {
        id: "06",
        title: "Simple Living",
        description: "To bring the members closer together for the purpose of teaching a simpler, more natural way of life.",
        image: "/assets/purposes/simple_living_devotees.png",
        icon: Leaf,
    },
    {
        id: "07",
        title: "Publications",
        description: "With a view towards achieving the aforementioned purposes, to publish and distribute periodicals, magazines, books and other writings.",
        image: "/assets/purposes/prabhupada_books.png",
        icon: PenTool,
    }
]

export default function SevenPurposesPage() {
    return (
        <main className="min-h-screen bg-[#FFF9F0] overflow-x-hidden selection:bg-[#FFB81C] selection:text-[#2D0A0A]">
            <Navbar />
            
            <SaffronCommonHeader 
                title={<span>Seven <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-[#d97706]">Purposes</span></span>}
                subtitle="The Divine Mission of ISKCON"
                stickerText="Our Mission"
            />

            {/* Sticky Scroll Section */}
            <div className="relative">
                {purposes.map((purpose, index) => (
                    <PurposeSection key={purpose.id} purpose={purpose} index={index} />
                ))}
            </div>

            {/* Footer Spacer & CTA */}
            <section className="py-20 px-6 bg-[#2D0A0A] text-white relative overflow-hidden border-t-4 border-[#FFB81C]">
                 <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-spin-slow" style={{ animationDuration: '60s' }}></div>
                  <div className="container mx-auto text-center relative z-10 max-w-4xl">
                      <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                      >
                          <h3 className="text-3xl md:text-6xl font-bold font-serif mb-6 text-white tracking-wide">Join the Mission</h3>
                          <div className="h-1 w-24 bg-[#FFB81C] mx-auto mb-8 rounded-full"></div>
                          <p className="text-xl md:text-2xl text-[#ffe8cc] mb-8 leading-relaxed font-light">
                              Be a part of this glorious movement to spread spiritual knowledge and peace.
                          </p>
                          <a href="mailto:connect@hkmchennai.org" className="inline-block bg-[#FFB81C] text-[#2D0A0A] px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-xl hover:shadow-2xl hover:bg-white hover:scale-105 mt-4">
                              Contact Us
                          </a>
                      </motion.div>
                  </div>
              </section>

            <Footer />
        </main>
    )
}

import Image from "next/image"

function PurposeSection({ purpose, index }: { purpose: any, index: number }) {
    const isEven = index % 2 === 0
    
    return (
        <div className="relative min-h-screen w-full flex flex-col lg:flex-row overflow-hidden bg-[#FFF9F0]">
            {/* Split Layout: Content & Image */}
            
            {/* 1. TEXT SIDE (Scrolls) */}
            <div className={`w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-24 relative z-10 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-10%" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl w-full"
                >
                     <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl mb-6 md:mb-8 bg-[#2D0A0A] text-[#FFB81C] shadow-lg border border-[#FFB81C]/30">
                        <purpose.icon size={36} />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 text-[#2D0A0A] font-serif leading-none">
                        <span className="text-lg md:text-xl block font-sans font-bold text-[#ea580c] uppercase tracking-widest mb-2">Purpose {purpose.id}</span>
                        {purpose.title}
                    </h2>
                    
                    <div className="w-24 h-1.5 mb-6 md:mb-8 bg-[#FFB81C] rounded-full"></div>

                    {/* MOBILE ONLY: Dedicated Image Block */}
                    <div className="block lg:hidden w-full aspect-[4/3] relative mb-8 rounded-2xl overflow-hidden border-4 border-[#FFB81C]/50 shadow-xl">
                        <Image 
                            src={purpose.image} 
                            alt={purpose.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                    </div>

                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light mb-12">
                        {purpose.description}
                    </p>

                    {/* Decorative Spiritual Element - Premium Golden Lotus Overlay */}
                    <motion.div 
                        className="absolute -top-20 -right-20 w-[200px] h-[200px] md:w-[300px] md:h-[300px] opacity-10 pointer-events-none z-0"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    >
                        <Image 
                            src="/assets/golden_lotus_flourish.png" 
                            alt="Golden Lotus" 
                            fill
                            className="object-contain drop-shadow-xl"
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* 2. IMAGE SIDE (Sticky/Fixed Visual - DESKTOP ONLY) */}
            <div className={`hidden lg:flex w-1/2 h-screen sticky top-0 items-center justify-center p-16 ${isEven ? "lg:order-2 bg-[#2d0a0a05]" : "lg:order-1 bg-[#fff]"}`}>
                 <motion.div 
                    className="w-full h-full max-h-[80vh] relative group"
                    initial={{ scale: 0.95, opacity: 0.8 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ amount: 0.6 }}
                    transition={{ duration: 0.8 }}
                 >
                    <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-double border-[#FFB81C] bg-[#2D0A0A]"> 
                        {/* Decorative Corners */}
                        <div className="absolute top-4 left-4 w-16 h-16 border-t-[3px] border-l-[3px] border-[#FFB81C] rounded-tl-2xl opacity-80 z-20 pointer-events-none"></div>
                        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-[3px] border-r-[3px] border-[#FFB81C] rounded-br-2xl opacity-80 z-20 pointer-events-none"></div>

                         <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none group-hover:bg-black/10 transition-colors duration-700"></div>
                        <Image 
                            src={purpose.image} 
                            alt={purpose.title} 
                            fill
                            className="object-cover transform group-hover:scale-110 transition-transform duration-[2s]"
                            sizes="50vw"
                            priority={index === 0}
                        />
                        
                        {/* Overlay Text on Image - Glassmorphism */}
                        <div className="absolute bottom-8 left-8 right-8 z-20">
                             <div className="bg-[#2D0A0A]/80 backdrop-blur-md border border-[#FFB81C]/30 p-6 rounded-2xl shadow-xl border-l-4 border-l-[#FFB81C]">
                                 <div className="flex items-center gap-3 mb-2">
                                    <Sparkles className="text-[#FFB81C] w-5 h-5" />
                                    <p className="text-xs font-bold uppercase tracking-widest text-[#FFB81C]">Core Principle</p>
                                 </div>
                                 <p className="text-lg font-serif italic text-white/90">"{purpose.title} is a vital pillar of our spiritual mission."</p>
                             </div>
                        </div>
                    </div>
                 </motion.div>
            </div>
        </div>
    )
}
