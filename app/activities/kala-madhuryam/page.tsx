"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { Calendar, Clock, Phone, Mail, Music } from "lucide-react"

export default function KalaMadhuryamPage() {
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
                        <h1 className="text-5xl md:text-7xl font-bold text-[#FBB201] mb-6 font-serif tracking-tight drop-shadow-2xl">
                            Kala Madhuryam
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-serif italic mb-8">
                            Classical dance & music performance
                        </p>

                         {/* Schedule Banner */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 md:p-8 inline-flex flex-col md:flex-row items-center gap-6 md:gap-12 mt-4 shadow-xl">
                            <div className="flex items-center gap-3">
                                <Calendar className="w-8 h-8 text-[#FBB201]" />
                                <div className="text-left">
                                    <p className="text-sm text-gray-300 uppercase tracking-wider">Days</p>
                                    <p className="text-xl font-bold text-white">Every Saturdays & Sundays</p>
                                </div>
                            </div>
                            <div className="hidden md:block w-px h-12 bg-white/20"></div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-8 h-8 text-[#FBB201]" />
                                <div className="text-left">
                                    <p className="text-sm text-gray-300 uppercase tracking-wider">Time</p>
                                    <p className="text-xl font-bold text-white">5:20 PM – 6:20 PM</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6 container mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                     {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                         <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-transform duration-500"
                        >
                            <img 
                                src="/assets/activities/kala-madhuryam/banner.png" 
                                alt="Kala Madhuryam Performance" 
                                className="w-full h-auto object-cover"
                            />
                            {/* Overlay Gradient */}
                             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block p-4 bg-[#0078BF]/10 rounded-full mb-6">
                                <Music className="w-10 h-10 text-[#0078BF]" />
                            </div>
                            
                            <h2 className="text-4xl font-bold text-[#0078BF] font-serif mb-6">
                                Celebrating <span className="text-[#FBB201]">Art & Culture</span>
                            </h2>
                            
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                <strong className="text-[#0078BF]">Kala Madhuryam</strong> is a prominent platform dedicated to showcasing our rich and diverse traditions of classical dance and music in India. 
                            </p>
                            
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                It features performances by renowned artists from all over the country, bringing the essence of Indian classical heritage to our community. The event aims to promote awareness of these art forms and to encourage the continued preservation of these cultural treasures for future generations.
                            </p>

                             <div className="bg-[#FFF9F0] border-l-4 border-[#FBB201] p-6 rounded-r-xl">
                                <p className="text-gray-800 italic text-lg">
                                    "Music and dance are not just refreshing to the senses, but when directed towards the Supreme Lord, they become a path to liberation."
                                </p>
                            </div>
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
                            Perform at Dakṣiṇa Dwārakā Dhām
                        </h3>
                        <p className="text-xl text-blue-100 mb-10">
                            For booking your performance or enquiries, please reach out to us.
                        </p>

                        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
                            <a href="tel:9600330108" className="group flex items-center justify-center gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 p-4 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1">
                                <div className="p-3 bg-[#FBB201] rounded-full text-white group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-gray-300 uppercase tracking-wider">Call Us</p>
                                    <p className="text-xl font-bold tracking-wide text-white">9600330108</p>
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
