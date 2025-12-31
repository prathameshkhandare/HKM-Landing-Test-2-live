"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Globe, ArrowRight } from "lucide-react"

export default function TirthaYatraPage() {
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
                            Rediscover Pilgrimage
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif tracking-tight drop-shadow-2xl">
                            TIRTHA YATRA
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-serif italic mb-8">
                            A journey to the holy abodes of the Lord
                        </p>

                         {/* Yatra Locations Banner */}
                        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mt-4">
                            {["Char Dham Yatra", "Dwaraka Yatra", "Mathura – Vrindavan Yatra", "Jagannath Puri Yatra"].map((yatra, index) => (
                                <span key={index} className="px-4 py-2 rounded-full border border-[#FBB201]/30 bg-[#FBB201]/10 text-[#FBB201] font-semibold text-sm md:text-base backdrop-blur-sm">
                                    {yatra}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6 container mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                     {/* Image Section - Using the Poster */}
                    <div className="w-full lg:w-1/2 sticky top-24">
                         <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#001E36] transform hover:scale-[1.01] transition-transform duration-500"
                        >
                            <img 
                                src="/assets/activities/tirtha-yatra/banner.jpg" 
                                alt="Tirtha Yatra Poster" 
                                className="w-full h-auto object-cover"
                            />
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
                            <div className="inline-block p-4 bg-[#001E36]/10 rounded-full mb-6">
                                <MapPin className="w-10 h-10 text-[#001E36]" />
                            </div>
                            
                            <h2 className="text-4xl font-bold text-[#0078BF] font-serif mb-6">
                                The Spiritual <span className="text-[#FBB201]">Journey</span>
                            </h2>
                            
                            <div className="prose prose-lg text-gray-700">
                                <p className="leading-relaxed mb-6">
                                    Pilgrimage Tours involve visiting sacred sites, such as temples, rivers, and mountains, believed to hold profound spiritual significance. These pilgrimages can bring blessings, purification, and spiritual enlightenment.
                                </p>
                                <p className="leading-relaxed mb-6">
                                    Popular destinations include <span className="font-semibold text-[#001E36]">Vrindavan, Jagannath Puri, Mayapur, Ayodhya, Varanasi, Srirangam, Tirupati, Ahobilam, Haridwar, and Badrinath</span>. 
                                </p>
                                <p className="leading-relaxed mb-6">
                                    These trips are often accompanied by spiritually enriching practices and offer opportunities for spiritual reflection, personal growth, and community building. Also, these pilgrimages serve as a vital means of preserving and promoting India’s rich cultural heritage, allowing individuals to connect with their roots and appreciate the historical significance of these sacred sites.
                                </p>
                            </div>

                             <div className="bg-[#FFF9F0] border-l-4 border-[#FBB201] p-6 rounded-r-xl shadow-sm mt-8">
                                <h3 className="text-xl font-bold text-[#001E36] mb-2 flex items-center gap-2">
                                    <Globe className="w-5 h-5 text-[#FBB201]" />
                                    Why Embark on a Tirtha Yatra?
                                </h3>
                                <ul className="space-y-2 mt-4">
                                    {["Spiritual Enlightenment", "Purification of the Heart", "Connection with Divine Roots", "Community & Satsang"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700">
                                            <ArrowRight className="w-4 h-4 text-[#FBB201]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
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
                            Join Our Next Yatra
                        </h3>
                        <p className="text-xl text-blue-100 mb-10">
                            For more details & registration, please contact us.
                        </p>

                        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
                            <a href="tel:7845871028" className="group flex items-center justify-center gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 p-4 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1">
                                <div className="p-3 bg-[#FBB201] rounded-full text-white group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-gray-300 uppercase tracking-wider">Call Us</p>
                                    <p className="text-xl font-bold tracking-wide text-white">78458 71028</p>
                                </div>
                            </a>

                            <a href="mailto:yatra@hkmchennai.org" className="group flex items-center justify-center gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 p-4 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1">
                                <div className="p-3 bg-[#FBB201] rounded-full text-white group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-gray-300 uppercase tracking-wider">Email Us</p>
                                    <p className="text-xl font-bold tracking-wide text-white">yatra@hkmchennai.org</p>
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
