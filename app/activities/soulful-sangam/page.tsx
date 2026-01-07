"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import { Music, Phone, Mail, Sparkles, Star, Users, Utensils } from "lucide-react";

export default function SoulfulSangamPage() {
    return (
        <main className="min-h-screen bg-[#FFF9F0] overflow-x-hidden">
            <Navbar />

            {/* Hero Section - Premium Spiritual Theme */}
            <section className="relative min-h-[60vh] md:h-[65vh] flex items-center justify-center overflow-hidden bg-[#2D0A0A] px-4 py-16 md:py-0">
                {/* Background Gradients & Textures */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D0A0A] via-[#4a0e0e] to-[#701a1a] opacity-90 animate-gradient-slow"></div>
                <div className="absolute inset-0 opacity-10 animate-spin-slow" style={{ backgroundImage: 'url("/assets/mandala-pattern.png")', backgroundSize: '800px', backgroundPosition: 'center' }}></div>
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FFB81C 0px, transparent 1px, transparent 10px)' }}></div>
                
                {/* Divine Glow Center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFB81C] rounded-full blur-[120px] opacity-20 animate-pulse-slow pointer-events-none"></div>

                {/* Decorative Elements */}
                <div className="hidden md:block absolute top-8 left-8 w-32 h-32 border-t-2 border-l-2 border-[#FFB81C]/40 rounded-tl-3xl"></div>
                <div className="hidden md:block absolute bottom-8 right-8 w-32 h-32 border-b-2 border-r-2 border-[#FFB81C]/40 rounded-br-3xl"></div>

                <div className="container mx-auto text-center relative z-10 pt-8 md:pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Header Content */}
                        <div className="flex justify-center mb-4 md:mb-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FFB81C]/10 rounded-full flex items-center justify-center border-2 border-[#FFB81C] shadow-[0_0_20px_rgba(255,184,28,0.2)] backdrop-blur-md relative transform hover:scale-110 transition-transform duration-500">
                                <div className="absolute inset-2 border border-[#FFB81C]/50 rounded-full animate-ping-slow"></div>
                                <Sparkles size={24} className="text-[#FFB81C]" />
                            </div>
                        </div>

                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-2 md:mb-4 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] font-serif">
                            Soulful Sangam
                        </h1>
                        <p className="text-xl md:text-3xl text-[#FFB81C] font-serif italic mb-6">"An Evening with Lord Krishna"</p>

                        <div className="flex items-center justify-center gap-3 md:gap-6 mb-8">
                             <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-[#FFB81C] to-transparent opacity-80"></div>
                             <div className="text-[#FFB81C] text-xl">♦</div>
                             <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-[#FFB81C] to-transparent opacity-80"></div>
                        </div>

                        <p className="text-lg md:text-xl text-[#ffe8cc] max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-4">
                            Immerse yourself in a divine evening of Kirtan, Wisdom, and Prasadam.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-12 md:py-20 px-4 md:px-6 container mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
                    
                    {/* Left Column: Dynamic Event Card (Poster Replacement) */}
                    <div className="w-full lg:w-1/2 max-w-xl mx-auto lg:mx-0">
                        <div className="relative group perspective-1000">
                            {/* Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FFB81C] rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>

                            <motion.div 
                                initial={{ opacity: 0, x: -30, rotateY: 5 }}
                                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative bg-gradient-to-b from-[#FFF9F0] to-[#fff1e0] border-4 border-[#FFB81C]/40 p-6 md:p-8 rounded-[2rem] shadow-2xl overflow-hidden text-center"
                            >
                                {/* Decorative Corner Elements */}
                                <div className="absolute top-0 left-0 w-24 h-24 border-t-[6px] border-l-[6px] border-[#701a1a]/20 rounded-tl-[1.5rem] pointer-events-none"></div>
                                <div className="absolute top-0 right-0 w-24 h-24 border-t-[6px] border-r-[6px] border-[#701a1a]/20 rounded-tr-[1.5rem] pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-[6px] border-l-[6px] border-[#701a1a]/20 rounded-bl-[1.5rem] pointer-events-none"></div>
                                <div className="absolute bottom-0 right-0 w-24 h-24 border-b-[6px] border-r-[6px] border-[#701a1a]/20 rounded-br-[1.5rem] pointer-events-none"></div>

                                {/* Logos */}
                                <div className="flex justify-between items-start mb-6 px-2">
                                    <img src="/assets/iskcon-logo-main-v2.png" alt="HKM Logo" className="w-20 md:w-24 object-contain drop-shadow-md" />
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#FFB81C] shadow-md overflow-hidden bg-[#2D0A0A]">
                                        <img src="/assets/srila-prabhupada.png" alt="Srila Prabhupada" className="w-full h-full object-cover" />
                                    </div>
                                </div>

                                {/* Title Block */}
                                <div className="mb-8">
                                    <h3 className="text-[#ea580c] font-bold tracking-widest text-xs md:text-sm uppercase mb-2">Hare Krishna Movement Chennai Organises</h3>
                                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#701a1a] drop-shadow-sm leading-tight mb-2">SOULFUL SANGAM</h2>
                                    <div className="h-[2px] w-20 bg-[#FFB81C] mx-auto mb-2"></div>
                                    <p className="text-[#5a5a5a] text-lg font-serif italic">An Evening with Lord Krishna</p>
                                </div>

                                {/* Main Visual - Composite Poster Recreation */}
                                <div className="relative mb-8 rounded-xl overflow-hidden shadow-lg border-2 border-[#FFB81C]/50 h-[400px] md:h-[500px] group/poster">
                                    {/* Base Background Image */}
                                    <img 
                                        src="/assets/soulful_sangam_bg_clean.png" 
                                        alt="Soulful Sangam Scene" 
                                        className="absolute inset-0 w-full h-full object-cover transform group-hover/poster:scale-105 transition-transform duration-1000" 
                                    />
                                    
                                    {/* Overlay Gradient for Text Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D0A0A] via-transparent to-transparent opacity-80"></div>

                                    {/* 3 Circular Vignettes with Text Overlays */}
                                    <div className="absolute bottom-4 left-0 right-0 flex justify-center items-end gap-2 md:gap-6 px-2">
                                        
                                        {/* Circle 1: Kirtan */}
                                        <div className="relative flex flex-col items-center">
                                            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-[#FFB81C] overflow-hidden shadow-[0_0_15px_rgba(255,184,28,0.5)] z-10 bg-black">
                                                <img src="/assets/sankirtana.jpg" alt="Kirtan" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                                            </div>
                                            {/* Text Banner overlapping bottom */}
                                            <div className="absolute -bottom-2 bg-[#2D0A0A] border border-[#FFB81C] px-2 py-1 rounded-full shadow-lg z-20 max-w-[100px] md:max-w-none">
                                                <p className="text-[10px] md:text-sm font-bold text-[#FFB81C] whitespace-nowrap">Hare Krishna Kirtan</p>
                                            </div>
                                        </div>

                                        {/* Circle 2: Talk (Elevated) */}
                                        <div className="relative flex flex-col items-center mb-6 md:mb-10">
                                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-[#FFB81C] overflow-hidden shadow-[0_0_20px_rgba(255,184,28,0.6)] z-10 bg-black relative">
                                                {/* Animated Srila Prabhupada: Slow Zoom/Pulse Effect */}
                                                <img 
                                                    src="/assets/srila_prabhupada_lecture.png" 
                                                    alt="Srila Prabhupada Animating Talk" 
                                                    className="w-full h-full object-cover opacity-95 transition-opacity" 
                                                    style={{ animation: 'gentle-scale 4s ease-in-out infinite alternate' }}
                                                />
                                                <style jsx>{`
                                                    @keyframes gentle-scale {
                                                        0% { transform: scale(1); }
                                                        100% { transform: scale(1.1); }
                                                    }
                                                `}</style>
                                            </div>
                                            {/* Text Banner */}
                                            <div className="absolute -bottom-3 bg-[#2D0A0A] border border-[#FFB81C] px-3 py-1 rounded-full shadow-lg z-20">
                                                <p className="text-[10px] md:text-sm font-bold text-[#FFB81C] text-center leading-tight">Spiritual Talk & <br/><span className="text-white">Mantra Meditation</span></p>
                                            </div>
                                        </div>

                                        {/* Circle 3: Prasadam */}
                                        <div className="relative flex flex-col items-center">
                                            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-[#FFB81C] overflow-hidden shadow-[0_0_15px_rgba(255,184,28,0.5)] z-10 bg-black">
                                                <img src="/assets/iskcon_prasadam_plate.png" alt="Prasadam" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                                            </div>
                                            {/* Text Banner */}
                                            <div className="absolute -bottom-2 bg-[#2D0A0A] border border-[#FFB81C] px-2 py-1 rounded-full shadow-lg z-20 max-w-[100px] md:max-w-none">
                                                <p className="text-[10px] md:text-sm font-bold text-[#FFB81C] whitespace-nowrap">Krishna Prasadam</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* Footer Info */}
                                <div className="bg-[#701a1a] text-white p-4 rounded-xl shadow-inner border border-[#FFB81C]/30 relative z-20">
                                    <p className="text-xs text-[#FFB81C] uppercase tracking-widest mb-1 font-bold">Interested in hosting?</p>
                                    <p className="text-sm text-white md:text-base leading-relaxed mb-3">Host a satsang at your home and invite divine blessings.</p>
                                    <div className="inline-flex items-center gap-2 bg-[#FFB81C] text-[#2D0A0A] px-4 py-1.5 rounded-full font-bold text-sm">
                                        <Phone size={14} className="fill-current" /> 95512 86004
                                    </div>
                                </div>

                                {/* Bottom Background Image Overlay (Temple faint) */}
                                <div className="absolute bottom-0 left-0 w-full h-48 bg-[url('/assets/temple-outline.png')] bg-no-repeat bg-bottom bg-contain opacity-10 pointer-events-none -z-0"></div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Text Content & CTA */}
                    <div className="w-full lg:w-1/2 space-y-8 relative pt-4">
                         {/* Animated Sudarshan Chakra (Reused) */}
                         <motion.div
                            initial={{ opacity: 0.6, rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                            className="absolute -top-12 -right-8 w-40 h-40 pointer-events-none z-0 opacity-20"
                        >
                            <svg viewBox="0 0 100 100" className="w-full h-full text-[#FFB81C]">
                                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
                                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                {[...Array(12)].map((_, i) => (
                                    <line key={i} x1="50" y1="5" x2="50" y2="20" stroke="currentColor" strokeWidth="2" transform={`rotate(${i * 30} 50 50)`} />
                                ))}
                            </svg>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <h2 className="text-4xl font-bold text-[#2D0A0A] font-serif mb-6">
                                Invite the <span className="text-[#ea580c]">Divine Home</span>
                            </h2>
                            
                            <div className="prose prose-lg text-gray-700 space-y-6">
                                <p>
                                    <span className="font-bold text-[#701a1a]">Soulful Sangam</span> is a unique program designed to bring the spiritual atmosphere of the temple directly to your home. It creates an opportunity for your family and friends to come together, chant, and hear about the glories of Lord Krishna.
                                </p>
                                <p>
                                    Hosting a satsang is simpler than you think. Our team will help organize the entire evening, including the Kirtan, a short spiritual discourse, and guidance on performing Mantra Meditation.
                                </p>
                            </div>

                            {/* Program Highlights */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                <div className="group bg-gradient-to-br from-white to-[#FFF9F0] p-5 rounded-2xl shadow-md border border-[#FFB81C]/30 hover:shadow-xl hover:border-[#FFB81C] hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex items-start gap-4 mb-3">
                                        <div className="p-3 bg-[#FFB81C]/10 rounded-full group-hover:bg-[#FFB81C] group-hover:text-[#2D0A0A] transition-colors duration-300">
                                            <Music className="text-[#ea580c] group-hover:text-[#2D0A0A]" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-serif font-bold text-lg text-[#701a1a] mb-1">Kirtan</h4>
                                            <p className="text-sm text-gray-700 leading-relaxed">Soul-stirring musical chanting of the Hare Krishna mantra.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group bg-gradient-to-br from-white to-[#FFF9F0] p-5 rounded-2xl shadow-md border border-[#FFB81C]/30 hover:shadow-xl hover:border-[#FFB81C] hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex items-start gap-4 mb-3">
                                        <div className="p-3 bg-[#FFB81C]/10 rounded-full group-hover:bg-[#FFB81C] group-hover:text-[#2D0A0A] transition-colors duration-300">
                                            <Star className="text-[#ea580c] group-hover:text-[#2D0A0A]" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-serif font-bold text-lg text-[#701a1a] mb-1">Wisdom</h4>
                                            <p className="text-sm text-gray-700 leading-relaxed">Enlightening discourse on Vedic philosophy and Gita.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group bg-gradient-to-br from-white to-[#FFF9F0] p-5 rounded-2xl shadow-md border border-[#FFB81C]/30 hover:shadow-xl hover:border-[#FFB81C] hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex items-start gap-4 mb-3">
                                        <div className="p-3 bg-[#FFB81C]/10 rounded-full group-hover:bg-[#FFB81C] group-hover:text-[#2D0A0A] transition-colors duration-300">
                                            <Users className="text-[#ea580c] group-hover:text-[#2D0A0A]" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-serif font-bold text-lg text-[#701a1a] mb-1">Association</h4>
                                            <p className="text-sm text-gray-700 leading-relaxed">Connect with like-minded spiritual seekers.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group bg-gradient-to-br from-white to-[#FFF9F0] p-5 rounded-2xl shadow-md border border-[#FFB81C]/30 hover:shadow-xl hover:border-[#FFB81C] hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex items-start gap-4 mb-3">
                                        <div className="p-3 bg-[#FFB81C]/10 rounded-full group-hover:bg-[#FFB81C] group-hover:text-[#2D0A0A] transition-colors duration-300">
                                            <Utensils className="text-[#ea580c] group-hover:text-[#2D0A0A]" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-serif font-bold text-lg text-[#701a1a] mb-1">Prasadam</h4>
                                            <p className="text-sm text-gray-700 leading-relaxed">Delicious sanctified food offered to Lord Krishna.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Box */}
                            {/* CTA Box - Royal Invitation Style */}
                            <div className="mt-10 relative group">
                                <div className="absolute inset-0 bg-[#FFB81C] blur-[20px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                <div className="relative bg-[#2D0A0A] border-2 border-[#FFB81C] p-2 rounded-2xl shadow-2xl">
                                    <div className="border border-[#FFB81C]/30 rounded-xl p-6 md:p-8 flex flex-col items-center text-center relative overflow-hidden">
                                        
                                        {/* Background Pattern */}
                                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFB81C 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                                        
                                        {/* Ornamental Icon */}
                                        <div className="mb-4 text-[#FFB81C]">
                                            <Sparkles size={32} strokeWidth={1.5} />
                                        </div>

                                        <h3 className="text-3xl font-serif font-bold mb-3 text-white tracking-wide">Ready to Host?</h3>
                                        <p className="mb-8 text-[#ffe8cc] text-lg max-w-sm mx-auto font-light leading-relaxed">
                                            Invite divine blessings to your home. Determine a date for your <span className="text-[#FFB81C] font-serif italic">Soulful Sangam</span>.
                                        </p>
                                        
                                        <a href="tel:9551286004" className="group/btn relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-[#2D0A0A] transition-all duration-300 bg-[#FFB81C] rounded-full hover:bg-white hover:text-[#2D0A0A] hover:scale-105 shadow-[0_0_20px_rgba(255,184,28,0.4)]">
                                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                                            <span className="relative flex items-center gap-3">
                                                <Phone size={20} className="fill-current" />
                                                <span className="tracking-wider">95512 86004</span>
                                            </span>
                                        </a>

                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
