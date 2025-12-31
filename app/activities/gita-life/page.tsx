"use client"

import React, { useState } from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { BookOpen, MapPin, Calendar, Clock, Phone, Send, User, Mail, Home } from "lucide-react"

export default function GitaLifePage() {
    return (
        <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#FBB201] selection:text-white relative">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 md:pt-32 pb-12 px-6 relative overflow-hidden bg-[#26052f]"> {/* Dark background based on image vibe */}
                 <div className="absolute inset-0 opacity-20 bg-[url('/assets/10BlackWhiteMandalaPattern1.jpg')] bg-cover mix-blend-overlay"></div>
                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FBB201]/30"
                    >
                       <img 
                            src="/assets/activities/gita-life/banner.png" 
                            alt="Gita Life Foundation Course" 
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Event Details & Content */}
            <section className="py-16 px-6 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Left Column: Description */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FBB201]/10 text-[#FBB201] rounded-full font-bold uppercase tracking-wider text-sm mb-4">
                                <BookOpen size={16} /> Foundation Course
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-[#0078BF] font-serif mb-6">
                                Gita Life <span className="text-[#FBB201]">Workshop</span>
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed font-serif italic border-l-4 border-[#FBB201] pl-6 py-2 bg-white/50 rounded-r-xl">
                                "Embark on a transformative journey through the timeless wisdom of the Bhagavad-gita."
                            </p>
                        </div>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                Our Gita Life workshop, held on campus, invites families to embark on a transformative journey through the timeless wisdom of the Bhagavad-gita. Through engaging and interactive sessions, participants discover practical solutions to the challenges of modern life, including stress management, work-life balance, cultivating inner peace, and fostering meaningful relationships.
                            </p>
                            <p>
                                By offering a supportive community and guidance on applying spiritual principles to everyday life, Gita Life empowers individuals and families to navigate life’s complexities with greater resilience, fulfillment, and a deeper sense of connection.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start gap-4 hover:shadow-lg transition-shadow">
                                <div className="p-3 bg-blue-50 text-[#0078BF] rounded-lg">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-800 mb-1">Time</h3>
                                    <p className="text-gray-600">Every Sunday</p>
                                    <p className="text-gray-600 font-medium">10:00 AM - 12:00 NOON</p>
                                </div>
                            </div>
                             <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start gap-4 hover:shadow-lg transition-shadow">
                                <div className="p-3 bg-red-50 text-red-600 rounded-lg">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-800 mb-1">Contact</h3>
                                    <p className="text-gray-600">For more details contact:</p>
                                    <a href="tel:9600967108" className="text-xl font-bold text-[#0078BF] hover:text-[#FBB201] transition-colors">
                                        9600967108
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Registration Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-1"
                    >
                        <div className="bg-white rounded-2xl shadow-xl p-8 border-t-8 border-[#FBB201] sticky top-24">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">Register Now</h3>
                            <p className="text-gray-500 mb-6 text-sm">Join us for the upcoming session. Please fill out the form below.</p>
                            
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input 
                                            type="text" 
                                            id="name" 
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FBB201] focus:border-transparent outline-none transition-all"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input 
                                            type="email" 
                                            id="email" 
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FBB201] focus:border-transparent outline-none transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input 
                                            type="tel" 
                                            id="phone" 
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FBB201] focus:border-transparent outline-none transition-all"
                                            placeholder="Mobile Number"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address / Location</label>
                                    <div className="relative">
                                        <Home className="absolute left-3 top-3 text-gray-400" size={18} />
                                        <textarea 
                                            id="address" 
                                            rows={3}
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FBB201] focus:border-transparent outline-none transition-all resize-none"
                                            placeholder="Your residential address"
                                        ></textarea>
                                    </div>
                                </div>

                                <button 
                                    type="button" // Change to submit when connecting backend
                                    className="w-full bg-[#0078BF] hover:bg-[#005a91] text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
                                >
                                    Register Now
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                
                                <p className="text-xs text-center text-gray-500 mt-4">
                                    * Free for parents of ICVK kids
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>

             {/* Bottom CTA / Quote */}
            <section className="py-20 bg-[#001E36] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/assets/10BlackWhiteMandalaPattern1.jpg')] bg-cover"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[#FBB201]">"Simply by knowing the science of Krishna, one becomes free."</h2>
                    <p className="text-xl opacity-80 max-w-2xl mx-auto mb-8">- Srila Prabhupada</p>
                </div>
            </section>

            <FooterSection />
        </main>
    )
}
