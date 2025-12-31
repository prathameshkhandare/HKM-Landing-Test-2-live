"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"
import { Microscope, BookOpen, Users } from "lucide-react"
import FooterSection from "@/components/FooterSection"

export default function AboutHKM() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Navbar />
            
            {/* Hero Section - Parallax & Immersive */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div 
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/hkm-hero-new.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed"
                    }}
                >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-white"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "var(--font-manrope)" }}>
                            Spiritual <span className="text-[#FBB201]">Awakening</span>
                        </h1>
                    </motion.div>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light tracking-wide"
                        style={{ fontFamily: "var(--font-manrope)" }}
                    >
                        Rediscover your inner self with the Hare Krishna Movement
                    </motion.p>
                </div>

                {/* Scroll Indicator */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-3"
                >
                    <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#FBB201] to-transparent"></div>
                    <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
                </motion.div>
            </section>

            {/* Mission Section - Restored Clean Style */}
            <section className="py-24 relative overflow-hidden bg-white">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
                     style={{ backgroundImage: "url('/hkcm-logo.svg')", backgroundRepeat: "repeat", backgroundSize: "300px" }}>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-12 p-12 rounded-3xl bg-white shadow-2xl border border-gray-100 relative"
                        >
                            <h2 className="text-[#FBB201] font-bold text-sm uppercase tracking-[0.2em] mb-8">Our Sacred Mission</h2>
                            
                            <div className="relative">
                                <span className="absolute -top-8 -left-6 text-8xl text-[#0078BF]/10 font-serif">“</span>
                                <blockquote className="text-2xl md:text-4xl font-medium text-gray-800 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
                                    We are trying to give human society the opportunity for a life of <span className="text-[#0078BF]">happiness</span>, <span className="text-[#0078BF]">good health</span>, <span className="text-[#0078BF]">peace of mind</span> and all good qualities through God consciousness.
                                </blockquote>
                                <span className="absolute -bottom-10 -right-6 text-8xl text-[#0078BF]/10 font-serif rotate-180">“</span>
                            </div>
                            <cite className="block mt-10 text-lg font-medium text-gray-500 not-italic">— Srila Prabhupada</cite>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What is HKM Section - Image Left / Text Right */}
            <section className="py-24 bg-gray-50 relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Image Side (First) */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-full"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-fit mx-auto lg:mx-0">
                                <img src="/hkm-what-is.jpg" alt="Krishna and Arjuna" className="h-[600px] w-auto object-contain block" />
                            </div>
                        </motion.div>

                        {/* Content Side (Second) */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-manrope)" }}>
                                What is <span className="text-[#0078BF]">HKM?</span>
                            </h2>
                            
                            <div className="space-y-6 text-base text-gray-600 leading-relaxed">
                                <p>
                                    An <strong className="text-gray-900">“Absolute alternative”</strong> is comprehensively introduced by Hare Krishna Movement to the society in general which is based on the ancient vedic wisdom following Bhagavad-Gita and Srimad-Bhagavatam.
                                </p>
                                
                                {/* Handcrafted Quote */}
                                <div className="relative pl-10 pr-6 py-4">
                                    <span className="absolute top-0 left-0 text-6xl text-[#FBB201] font-serif leading-none opacity-40">“</span>
                                    <p className="text-lg text-gray-800 italic font-medium relative z-10" style={{ fontFamily: "var(--font-playfair)" }}>
                                        The absolute alternative of life inculcates the clear wisdom of Bhagavad-Gita so that one can gain a detailed understanding of their own existence<span className="inline-block text-6xl text-[#FBB201] font-serif leading-none opacity-40 relative top-8 ml-2">”</span>
                                    </p>
                                </div>

                                <p>
                                    By acclimatizing this absolute method of spirituality one can transcend the dualism of life which will appear in various forms like happiness and distress, loss and gain, defeat and victory. From adopting this absolute way of life, one can sort out all their problems of life most optimally without getting confused about any other sub-optimal and symptomatic methods of cure like meditation, silence, etc.
                                </p>

                                <p>
                                    We welcome you to the most sublime movement of the present time which was started by Lord Sri Krishna in the battlefield of Kurukshetra by expounding the masterpiece of wisdom Bhagavad-Gita. This science of absolute spiritual values was practically demonstrated by Lord Himself in His form as <strong className="text-gray-900">Sri Chaitanya Mahaprabhu</strong> over 500 years ago through the inauguration of Sankirtana movement of spreading the chanting of Holy Names of Lord as it is the ONLY means of getting perfection in this age.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* HKM Chennai Section - Restructured with Lucide Icons & Numbers */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[#0078BF] font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Our Pillars</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
                            HKM <span className="text-[#FBB201]">Chennai</span>
                        </h2>
                        <p className="text-lg text-gray-500 max-w-4xl mx-auto font-light leading-relaxed">
                            The advancement of Science and Technology has come to drastically change the dynamics of life. Today, there is an enormous pressure of expectations from all quarters, and people seem to be living a fast-paced life, with unhappy relationships, and with practically zero work-life balance. The net result is a life full of anxiety, struggle, and discontentment.
                        </p>
                        <p className="text-lg text-gray-500 max-w-4xl mx-auto font-light leading-relaxed mt-4">
                            HKM has been digging deep into the ancient Vedic scriptures to derive insights that address the important questions and enigmas of life in a lucid manner to bring about alternative paradigms for better living.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Card 1: Science & Technology */}
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
                        >
                            <div className="h-56 overflow-hidden relative shrink-0">
                                <img 
                                    src="/assets/hkm-about-science.jpg" 
                                    alt="Science and Spirituality" 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <Microscope className="w-6 h-6 mb-2 opacity-80" />
                                </div>
                            </div>
                            
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0078BF] transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                                    Science & Tech
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6 font-light">
                                    Unraveling life's mysteries through the lens of Vedic science, offering alternative paradigms for a conscious lifestyle.
                                </p>
                                <div className="flex items-center text-[#0078BF] font-medium group/link cursor-pointer mt-auto">
                                    <span className="text-sm uppercase tracking-widest border-b border-transparent group-hover/link:border-[#0078BF] transition-all">Explore</span>
                                    <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Value Education */}
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
                        >
                            <div className="h-56 overflow-hidden relative shrink-0">
                                <img 
                                    src="/assets/hkm-about-education.png" 
                                    alt="Value Education" 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <BookOpen className="w-6 h-6 mb-2 opacity-80" />
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0078BF] transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                                    Value Education
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6 font-light">
                                    Empowering the next generation with timeless values to build strong character and emotional resilience.
                                </p>
                                <div className="flex items-center text-[#0078BF] font-medium group/link cursor-pointer mt-auto">
                                    <span className="text-sm uppercase tracking-widest border-b border-transparent group-hover/link:border-[#0078BF] transition-all">Explore</span>
                                    <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3: Community */}
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
                        >
                            <div className="h-56 overflow-hidden relative shrink-0">
                                <img 
                                    src="/assets/hkm-about-community.jpg" 
                                    alt="Community" 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <Users className="w-6 h-6 mb-2 opacity-80" />
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0078BF] transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                                    Community
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6 font-light">
                                    Fostering a supportive spiritual community where every individual can find peace, purpose, and belonging.
                                </p>
                                <div className="flex items-center text-[#0078BF] font-medium group/link cursor-pointer mt-auto">
                                    <span className="text-sm uppercase tracking-widest border-b border-transparent group-hover/link:border-[#0078BF] transition-all">Explore</span>
                                    <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <FooterSection />
        </main>
    )
}
