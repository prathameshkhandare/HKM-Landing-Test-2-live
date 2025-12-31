"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { Sparkles, Music, BookOpen, User, Phone, Home } from "lucide-react"

export default function SoulfulSangamPage() {
    return (
        <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#FBB201] selection:text-white relative">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-[#001E36] text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('/assets/10BlackWhiteMandalaPattern1.jpg')] bg-cover animate-pulse-slow"></div>
                
                <div className="container mx-auto text-center relative z-10 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl"
                    >
                         {/* Header Context */}
                         <div className="mb-6">
                            <h2 className="text-xl md:text-2xl font-serif text-[#FBB201] tracking-wide mb-2 uppercase">Hare Krishna Movement Chennai Organises</h2>
                         </div>

                        <div className="relative inline-block my-4">
                            <h1 className="text-5xl md:text-8xl font-bold text-[#FBB201] mb-4 font-serif tracking-tight drop-shadow-2xl">
                                SOULFUL SANGAM
                            </h1>
                            <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-[#FBB201] to-transparent rounded-full"></div>
                        </div>

                        <p className="text-2xl md:text-4xl text-white/90 max-w-4xl mx-auto leading-relaxed font-serif italic mt-6 mb-8">
                            An Evening with Lord Krishna
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6 container mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                     {/* Image Section - Sticky for better reading experience on desktop */}
                    <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
                         <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FBB201]/30 transform hover:scale-[1.01] transition-transform duration-500 bg-white"
                        >
                            <img 
                                src="/assets/activities/soulful-sangam-poster.jpg" 
                                alt="Soulful Sangam Poster" 
                                className="w-full h-auto object-cover"
                            />
                            {/* Overlay Gradient */}
                             <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                        </motion.div>
                        
                        {/* Highlights Banner below image */}
                        <motion.div 
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: true }}
                             transition={{ delay: 0.3, duration: 0.8 }}
                            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
                        >
                            <div className="bg-[#001E36] text-white p-4 rounded-xl text-center border border-[#FBB201]/30 hover:bg-[#002a4d] transition-colors duration-300">
                                <Music className="w-8 h-8 text-[#FBB201] mx-auto mb-2" />
                                <h3 className="font-bold text-sm uppercase tracking-wide text-[#FBB201]">Hare Krishna Kirtan</h3>
                            </div>
                            <div className="bg-[#001E36] text-white p-4 rounded-xl text-center border border-[#FBB201]/30 hover:bg-[#002a4d] transition-colors duration-300">
                                <BookOpen className="w-8 h-8 text-[#FBB201] mx-auto mb-2" />
                                <h3 className="font-bold text-sm uppercase tracking-wide text-[#FBB201]">Spiritual Talk & Meditation</h3>
                            </div>
                            <div className="bg-[#001E36] text-white p-4 rounded-xl text-center border border-[#FBB201]/30 hover:bg-[#002a4d] transition-colors duration-300">
                                <Sparkles className="w-8 h-8 text-[#FBB201] mx-auto mb-2" />
                                <h3 className="font-bold text-sm uppercase tracking-wide text-[#FBB201]">Krishna Prasadam</h3>
                            </div>
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block p-4 bg-[#001E36]/10 rounded-full mb-8">
                                <User className="w-10 h-10 text-[#001E36]" />
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-bold text-[#0078BF] font-serif mb-8 leading-tight">
                                Transformative Wisdom for <span className="text-[#FBB201]">Modern Life</span>
                            </h2>
                            
                            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                <p>
                                    This <strong className="text-[#001E36]">Soulful Sangam</strong> program brings the transformative wisdom of the Bhagavad-gita directly to the doorsteps of busy professionals in gated communities and beyond.
                                </p>
                                <p>
                                    Through engaging sessions, participants discover practical solutions to the challenges of modern life, including:
                                </p>
                                <ul className="space-y-3 ml-4">
                                    {[
                                        "Stress Management",
                                        "Work-Life Balance",
                                        "Cultivating Inner Peace",
                                        "Fostering Meaningful Relationships"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#FBB201]"></div>
                                            <span className="font-medium text-[#001E36]">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p>
                                    By offering a supportive community and guidance on applying spiritual principles to everyday life, Soulful Sangam empowers individuals to navigate life’s complexities with greater resilience and fulfillment.
                                </p>
                            </div>

                             <div className="mt-10 bg-[#FFF9F0] border-l-4 border-[#FBB201] p-8 rounded-r-2xl shadow-sm">
                                <p className="text-gray-800 italic text-xl font-serif">
                                    "When we come together to chant and hear about the Supreme Lord, our hearts become cleansed and we find true happiness."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

             {/* Booking / Contact Section */}
             <section className="py-20 px-6 bg-gradient-to-r from-[#FBB201] to-[#D49601] text-[#001E36] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-20 opacity-10">
                    <Sparkles size={300} />
                </div>
                
                <div className="container mx-auto text-center max-w-4xl relative z-10">
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/90 backdrop-blur-xl p-10 md:p-16 rounded-3xl shadow-2xl"
                     >
                        <Home className="w-16 h-16 text-[#001E36] mx-auto mb-6" />
                        
                        <h3 className="text-3xl md:text-5xl font-bold font-serif mb-6">
                            Host a Satsang
                        </h3>
                        
                        <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
                            For those interested in hosting a satsang at their home, contact us. Bring divine blessings to your living space.
                        </p>

                        <a 
                            href="tel:9551286004" 
                            className="inline-flex items-center justify-center gap-4 bg-[#001E36] text-white px-10 py-5 rounded-full font-bold text-xl md:text-2xl hover:bg-[#003B5C] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                        >
                            <Phone className="w-8 h-8" />
                            <span>95512 86004</span>
                        </a>
                     </motion.div>
                </div>
             </section>

            <FooterSection />
        </main>
    )
}
