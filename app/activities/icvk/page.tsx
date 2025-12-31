"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { Heart, BookOpen, Star, Phone, Mail, ArrowRight } from "lucide-react"

export default function ICVKPage() {
    return (
        <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#FBB201] selection:text-white relative">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-[#001E36] text-white relative overflow-hidden">
                 {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20 bg-[url('/assets/10BlackWhiteMandalaPattern1.jpg')] bg-cover animate-pulse-slow"></div>
                
                <div className="container mx-auto text-center relative z-10 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h2 className="text-xl md:text-2xl text-[#FBB201] tracking-widest uppercase font-bold mb-4">
                            Indian Culture & Values for Kids
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif tracking-tight drop-shadow-2xl">
                            ICVK
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-serif italic mb-8">
                            Empowering young minds with the wisdom of Indian heritage
                        </p>

                        <div className="inline-block bg-[#FBB201] text-[#001E36] px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm">
                            Course Fee: ₹2000 / Semester
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6 container mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Text Content - Now First (Left) */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block p-4 bg-[#001E36]/10 rounded-full mb-6">
                                <Heart className="w-10 h-10 text-[#001E36]" />
                            </div>
                            
                            <h2 className="text-4xl font-bold text-[#0078BF] font-serif mb-6">
                                Nurturing <span className="text-[#FBB201]">Cultural Identity</span>
                            </h2>
                            
                            <div className="prose prose-lg text-gray-700">
                                <p className="leading-relaxed mb-6">
                                    <strong className="text-[#001E36]">Indian Culture and Value education for Kids (ICVK)</strong> is a cultural immersion program for young minds. We believe in empowering children to discover the beauty and wisdom of Indian heritage. Through interactive courses, engaging activities, and cultural explorations, we foster a deep appreciation for our traditions and values.
                                </p>
                                <p className="leading-relaxed mb-6">
                                    By blending ancient wisdom with modern relevance, we equip children with the tools to become responsible, global citizens.
                                </p>
                                
                                <div className="bg-[#FFF9F0] border-l-4 border-[#FBB201] p-6 rounded-r-xl shadow-sm my-8">
                                    <p className="italic text-gray-700 font-serif text-lg">
                                        "A wise person should practice the teachings of the Bhagavata from childhood."
                                    </p>
                                    <p className="text-sm font-bold text-[#001E36] mt-2 block text-right">— Prahlada Maharaj [SB 7.6.1]</p>
                                </div>
                            </div>
                            
                            {/* Course Highlights */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                    <h3 className="text-lg font-bold text-[#001E36] mb-3 flex items-center gap-2">
                                        <Star className="w-5 h-5 text-[#FBB201]" /> Highlights
                                    </h3>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        {["Gita Shloka chanting", "Arts & Craft", "Daily Prayers", "Mantra meditation"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#0078BF]"></div> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                    <h3 className="text-lg font-bold text-[#001E36] mb-3 flex items-center gap-2">
                                        <BookOpen className="w-5 h-5 text-[#FBB201]" /> Benefits
                                    </h3>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        {["Includes course material", "Builds values from early age", "Delicious prasadam"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#0078BF]"></div> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                     {/* Image Section - Now Second (Right) */}
                     <div className="w-full lg:w-1/2 sticky top-24 flex justify-center">
                         <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#001E36] transform hover:scale-[1.01] transition-transform duration-500 max-h-[80vh] w-auto"
                        >
                            <img 
                                src="/assets/activities/icvk/banner.png" 
                                alt="ICVK Program" 
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

             {/* Booking / Contact Section */}
             <section className="py-20 px-6 bg-gradient-to-r from-[#001E36] to-[#003B5C] text-white">
                <div className="container mx-auto text-center max-w-4xl">
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                     >
                        <h3 className="text-3xl md:text-4xl font-bold font-serif text-[#FBB201] mb-6">
                            Register Today
                        </h3>
                        <p className="text-xl text-blue-100 mb-10">
                            Give your child the gift of timeless wisdom and cultural pride.
                        </p>

                        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
                            <a href="tel:9603300108" className="group flex items-center justify-center gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 p-4 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1">
                                <div className="p-3 bg-[#FBB201] rounded-full text-white group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-gray-300 uppercase tracking-wider">Call / Whatsapp</p>
                                    <p className="text-xl font-bold tracking-wide text-white">96033 00108</p>
                                </div>
                            </a>

                            <a href="mailto:icvk@hkmchennai.org" className="group flex items-center justify-center gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 p-4 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1">
                                <div className="p-3 bg-[#FBB201] rounded-full text-white group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-gray-300 uppercase tracking-wider">Email Us</p>
                                    <p className="text-xl font-bold tracking-wide text-white">icvk@hkmchennai.org</p>
                                </div>
                            </a>
                        </div>
                     </motion.div>
                </div>
             </section>

            <FooterSection />
        </main>
    )
}
