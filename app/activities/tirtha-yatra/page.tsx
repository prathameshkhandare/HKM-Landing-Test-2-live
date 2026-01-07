"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import { Phone, Mail, Sparkles, MapPin, CheckCircle2 } from "lucide-react";

export default function TirthaYatraPage() {
    return (
        <main className="min-h-screen bg-[#FFF9F0] overflow-x-hidden">
            <Navbar />

            {/* Yuga Dharma Style Header (Hero Section) */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-[#2D0A0A]">
                 {/* Background - Saffron/Gold Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#701a1a] via-[#ea580c] to-[#b45309] opacity-90"></div>
                
                {/* Texture Overlays */}
                <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow"></div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 49px, #FFB81C 50px)' }}></div>

                {/* Central Divine Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFB81C] rounded-full blur-[120px] opacity-20 animate-pulse"></div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Temple/Yatra Icon */}
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-[#FFB81C]/10 rounded-full flex items-center justify-center border-2 border-[#FFB81C] shadow-[0_0_30px_rgba(255,184,28,0.4)] backdrop-blur-sm">
                                <MapPin size={32} className="text-[#FFB81C]" />
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
                            Yatramritam
                        </h1>
                        
                        {/* Ornamental Divider */}
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="h-[2px] w-16 bg-gradient-to-l from-[#FFB81C] to-transparent"></div>
                            <div className="w-3 h-3 rotate-45 border-2 border-[#FFB81C]"></div>
                            <div className="h-[2px] w-16 bg-gradient-to-r from-[#FFB81C] to-transparent"></div>
                        </div>

                        <p className="text-xl md:text-3xl text-[#ffe8cc] font-light leading-relaxed max-w-4xl mx-auto italic">
                            "Rediscover Pilgrimage"
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Split Layout Section */}
            <section className="py-16 md:py-24 container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    
                    {/* LEFT COLUMN: Poster Visual (Enhanced Background) */}
                    <div className="w-full lg:w-[45%] lg:sticky lg:top-10">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="rounded-[2.5rem] border-[6px] border-double border-[#FFB81C] p-6 md:p-8 shadow-[0_0_50px_rgba(45,10,10,0.6)] relative overflow-hidden group"
                            style={{
                                background: 'radial-gradient(circle at center, #540F0F 0%, #2D0A0A 70%, #110202 100%)',
                                boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8)'
                            }}
                        >
                            {/* Divine Central Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(255,184,28,0.15)_0%,transparent_70%)] pointer-events-none"></div>

                            {/* Rich Background Effects - Layered & boosted opacity */}
                            <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-20 bg-[length:600px] animate-spin-slow origin-center" style={{ animationDuration: '120s' }}></div>
                            <div className="absolute inset-0 bg-[url('/assets/temple-pattern.PNG')] opacity-15 bg-[length:200px] mix-blend-overlay"></div>
                            
                            {/* Inner Decorative Border */}
                            <div className="absolute inset-4 border border-[#FFB81C]/30 rounded-[2rem] pointer-events-none"></div>
                            
                            {/* Gold Dust Particles & Vignette */}
                            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#FFB81C 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

                            {/* Ornate Corner Frames - Flourish Style */}
                            <div className="absolute top-5 left-5 w-auto h-auto">
                                <Sparkles className="text-[#FFB81C] w-8 h-8 opacity-60" />
                            </div>
                            <div className="absolute top-5 right-5 w-auto h-auto">
                                <Sparkles className="text-[#FFB81C] w-8 h-8 opacity-60" />
                            </div>
                            
                            <div className="absolute top-4 left-4 w-24 h-24 border-t-2 border-l-2 border-[#FFB81C] rounded-tl-[1.5rem] opacity-60"></div>
                            <div className="absolute top-4 right-4 w-24 h-24 border-t-2 border-r-2 border-[#FFB81C] rounded-tr-[1.5rem] opacity-60"></div>
                            <div className="absolute bottom-4 left-4 w-24 h-24 border-b-2 border-l-2 border-[#FFB81C] rounded-bl-[1.5rem] opacity-60"></div>
                            <div className="absolute bottom-4 right-4 w-24 h-24 border-b-2 border-r-2 border-[#FFB81C] rounded-br-[1.5rem] opacity-60"></div>

                            {/* Content Wrapper */}
                            <div className="relative z-10 flex flex-col items-center text-center">
                                {/* Logo with Glow */}
                                <div className="relative mb-8">
                                    <div className="absolute inset-0 bg-[#FFB81C] blur-2xl opacity-20 rounded-full"></div>
                                    <img src="/assets/yatramritam_logo.png" alt="Yatramritam" className="w-[220px] relative z-10 drop-shadow-2xl" />
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4 w-full mb-8">
                                    {/* Destination Images with Enhanced Frames */}
                                    <div className="aspect-[4/5] relative rounded-xl overflow-hidden border-2 border-[#FFB81C]/50 shadow-lg group/img">
                                        <img src="/assets/char_dham.png" alt="Char Dham" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                                        <div className="absolute bottom-0 w-full p-2 text-center">
                                            <span className="text-white text-xs font-bold uppercase tracking-wider block border-t border-[#FFB81C]/50 pt-1">Char Dham</span>
                                        </div>
                                    </div>
                                    <div className="aspect-[4/5] relative rounded-xl overflow-hidden border-2 border-[#FFB81C]/50 shadow-lg group/img">
                                        <img src="/assets/dwaraka_temple_scenic.png" alt="Dwaraka" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                                        <div className="absolute bottom-0 w-full p-2 text-center">
                                            <span className="text-white text-xs font-bold uppercase tracking-wider block border-t border-[#FFB81C]/50 pt-1">Dwaraka</span>
                                        </div>
                                    </div>
                                    <div className="aspect-[4/5] relative rounded-xl overflow-hidden border-2 border-[#FFB81C]/50 shadow-lg group/img">
                                        <img src="/assets/vrindavan_temple_scenic.png" alt="Vrindavan" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                                        <div className="absolute bottom-0 w-full p-2 text-center">
                                            <span className="text-white text-xs font-bold uppercase tracking-wider block border-t border-[#FFB81C]/50 pt-1">Vrindavan</span>
                                        </div>
                                    </div>
                                    <div className="aspect-[4/5] relative rounded-xl overflow-hidden border-2 border-[#FFB81C]/50 shadow-lg group/img">
                                        <img src="/assets/jagannath_puri_temple_scenic.png" alt="Puri" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                                        <div className="absolute bottom-0 w-full p-2 text-center">
                                            <span className="text-white text-xs font-bold uppercase tracking-wider block border-t border-[#FFB81C]/50 pt-1">Puri</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Poster Footer Info - Stylized Strip */}
                                <div className="bg-gradient-to-r from-[#FFB81C] to-[#ea580c] text-[#2D0A0A] w-full py-3 rounded-lg font-bold text-sm uppercase tracking-widest mb-3 shadow-lg">
                                    Join Our Spiritual Family
                                </div>
                                <div className="text-white text-sm font-light tracking-wide flex flex-col gap-1">
                                    <p className="flex text-white items-center justify-center gap-2"><Phone size={14} className="text-[#FFB81C]"/> 78458 71028</p>
                                    <p className="flex text-white items-center justify-center gap-2"><Mail size={14} className="text-[#FFB81C]"/> yatra@hkmchennai.org</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Information Content */}
                    <div className="w-full lg:w-[55%] pt-4 md:pt-0">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Sparkles className="text-[#ea580c] w-6 h-6" />
                                <span className="text-[#ea580c] font-bold uppercase tracking-widest text-sm">A Journey to the Holy Abodes</span>
                            </div>
                            
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2D0A0A] mb-8 leading-tight">
                                The Spiritual <span className="text-[#ea580c]">Journey</span>
                            </h1>

                            <div className="prose prose-lg text-gray-700 mb-10">
                                <p className="mb-6 leading-relaxed">
                                    Pilgrimage Tours involve visiting sacred sites, such as temples, rivers, and mountains, believed to hold profound spiritual significance. These pilgrimages can bring blessings, purification, and spiritual enlightenment.
                                </p>
                                <p className="mb-6 leading-relaxed">
                                    Popular destinations include <span className="font-bold text-[#2D0A0A]">Vrindavan, Jagannath Puri, Mayapur, Ayodhya, Varanasi, Srirangam, Tirupati, Ahobilam, Haridwar, and Badrinath.</span>
                                </p>
                                <p className=" text-white not-italic leading-relaxed border-l-4 border-[#FFB81C] pl-6 py-2 bg-[#FFB81C]/5 rounded-r-lg">
                                    These trips are often accompanied by spiritually enriching practices and offer opportunities for spiritual reflection, personal growth, and community building. Also, these pilgrimages serve as a vital means of preserving and promoting India’s rich cultural heritage.
                                </p>
                            </div>

                            {/* Why Embark Section */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-serif font-bold text-[#2D0A0A] mb-6">Why Embark on a Tirtha Yatra?</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Spiritual Enlightenment", 
                                        "Purification of the Heart", 
                                        "Connection with Divine Roots", 
                                        "Community & Satsang"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-[#FFB81C]/20 hover:border-[#FFB81C] transition-colors">
                                            <CheckCircle2 className="text-[#28a745] w-5 h-5" />
                                            <span className="font-semibold text-[#2D0A0A]">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Box (Replicated styling from Soulful Sangam/Reference) */}
                            <div className="bg-[#2D0A0A] rounded-2xl p-8 relative overflow-hidden shadow-2xl text-center md:text-left">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB81C] rounded-full blur-[80px] opacity-10"></div>
                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div>
                                        <h2 className="text-3xl font-serif font-bold text-white mb-2 uppercase tracking-wide">Yatramritam</h2>
                                        <p className="text-[#ffe8cc]">For more details & registration, please contact us.</p>
                                    </div>
                                    <div className="flex flex-col gap-3 w-full md:w-auto">
                                        <a href="tel:7845871028" className="bg-[#FFB81C] text-[#2D0A0A] px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-[#2D0A0A] transition-all flex items-center justify-center gap-2 shadow-lg">
                                            <Phone size={18} /> 78458 71028
                                        </a>
                                        <a href="mailto:yatra@hkmchennai.org" className="border border-[#FFB81C] text-[#FFB81C] px-6 py-3 rounded-xl font-bold hover:bg-[#FFB81C] hover:text-[#2D0A0A] transition-all flex items-center justify-center gap-2">
                                            <Mail size={18} /> yatra@hkmchennai.org
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
