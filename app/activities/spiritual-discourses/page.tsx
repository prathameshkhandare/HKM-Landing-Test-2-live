"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { BookOpen, Clock, Calendar, Video, Users, Sparkles } from "lucide-react"

export default function SpiritualDiscoursesPage() {
    return (
        <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#FBB201] selection:text-white relative">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-[#001E36] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/assets/10BlackWhiteMandalaPattern1.jpg')] bg-cover animate-pulse-slow"></div>
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-[#FBB201] mb-6 font-serif tracking-tight">
                            Spiritual Discourses
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed italic font-serif">
                            "Of the nine processes of Devotional Service, Sravanam (Hearing) is the most important aspect."
                        </p>
                        <p className="text-sm text-[#FBB201] mt-2 font-bold tracking-widest uppercase">
                            — Prahlad Maharaj
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction: The Power of Hearing */}
            <section className="py-20 px-6 container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <img 
                                src="/assets/activities/spiritual-discourses/sunday-feast.png" 
                                alt="Spiritual Assembly" 
                                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 space-y-6"
                    >
                        <h2 className="text-4xl font-bold text-[#0078BF] font-serif">
                            The Science of <span className="text-[#FBB201]">Hearing</span>
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Lord Chaitanya, who preached Krishna consciousness in the modern world, gave great stress to hearing because if the common man simply hears from authoritative sources, he can advance spiritually. This hearing is best done in an assembly of devotees and regularly.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            <strong className="text-[#0078BF]">Phala-śruti:</strong> The Vedic descriptions are so auspicious that by reciting, hearing, or reading about them, one can amass multitudes of spiritual and material benefits. Any section read, heard, or discussed – even once – can free one from material existence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Modern Context Section */}
            <section className="py-20 px-6 bg-gradient-to-b from-[#0078BF]/5 to-transparent relative">
                <div className="container mx-auto text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 font-serif">
                            Finding Peace in a <span className="text-[#0078BF]">Chaotic World</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            In today’s time and age, people are in a constant rush trying to do, know, and achieve MORE in the smallest time possible. With no time to pause and reflect, this addiction to faster living is creating a toxic imbalance in life and leading to emotional turmoil.
                        </p>
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-[#FBB201] text-left">
                            <p className="text-xl text-gray-800 italic leading-relaxed">
                                "The study of this scripture helps one introspect, contemplate, and thus find solutions to the challenges and dilemmas of life. It helps make reflection, continuous learning, and inquiry an essential part of life."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Schedule Section */}
            <section className="py-20 px-6 container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#0078BF] mb-4 font-serif">Our Weekly Discourses</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        In order to share the rich wealth of wisdom presented by Srila Prabhupada, we regularly conduct systematic classes. Free and open to all.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <motion.div 
                        whileHover={{ y: -10 }}
                        className="bg-white rounded-2xl p-8 shadow-xl border-t-8 border-[#FBB201] group"
                    >
                        <div className="w-14 h-14 bg-orange-100 text-[#FBB201] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <BookOpen size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Bhagavad-Gita</h3>
                        <p className="text-[#0078BF] font-bold mb-4 uppercase text-sm tracking-wide">English Discourse</p>
                        <div className="space-y-3 text-gray-600">
                            <div className="flex items-center gap-3">
                                <Calendar size={18} className="text-[#FBB201]" />
                                <span>Every Sunday</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock size={18} className="text-[#FBB201]" />
                                <span>7:30 PM</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Users size={18} className="text-[#FBB201]" />
                                <span>In-Person Assembly</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div 
                        whileHover={{ y: -10 }}
                        className="bg-[#001E36] rounded-2xl p-8 shadow-2xl border-t-8 border-[#FBB201] group text-white transform md:-translate-y-4"
                    >
                        <div className="w-14 h-14 bg-white/10 text-[#FBB201] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Sparkles size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Srimad Bhagavatam</h3>
                        <p className="text-[#FBB201] font-bold mb-4 uppercase text-sm tracking-wide">Daily Wisdom</p>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-center gap-3">
                                <Calendar size={18} className="text-[#FBB201]" />
                                <span>Every Single Day</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock size={18} className="text-[#FBB201]" />
                                <span>8:00 AM</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Users size={18} className="text-[#FBB201]" />
                                <span>Morning Program</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div 
                        whileHover={{ y: -10 }}
                        className="bg-white rounded-2xl p-8 shadow-xl border-t-8 border-[#FBB201] group"
                    >
                        <div className="w-14 h-14 bg-blue-100 text-[#0078BF] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Video size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Bhagavad-Gita</h3>
                        <p className="text-[#0078BF] font-bold mb-4 uppercase text-sm tracking-wide">Tamil Discourse</p>
                        <div className="space-y-3 text-gray-600">
                            <div className="flex items-center gap-3">
                                <Calendar size={18} className="text-[#FBB201]" />
                                <span>Every Sunday</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock size={18} className="text-[#FBB201]" />
                                <span>6:30 PM</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Video size={18} className="text-[#FBB201]" />
                                <span>Online Session</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Books Display Section */}
            <section className="py-20 px-6 bg-white overflow-hidden">
                <div className="container mx-auto">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/2 relative"
                        >
                            {/* Decorative Circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FBB201]/10 rounded-full blur-3xl -z-10"></div>
                            
                            <div className="relative z-10 grid grid-cols-2 gap-4 items-center">
                                <img 
                                    src="/assets/activities/spiritual-discourses/srimad-bhagavatam.png" 
                                    alt="Srimad Bhagavatam Books" 
                                    className="w-full rounded-xl shadow-lg transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500"
                                />
                                <img 
                                    src="/assets/activities/spiritual-discourses/bhagavad-gita.png" 
                                    alt="Bhagavad Gita Art" 
                                    className="w-full rounded-xl shadow-lg transform rotate-[3deg] hover:rotate-0 transition-transform duration-500 translate-y-8"
                                />
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/2 space-y-6"
                        >
                            <h2 className="text-4xl font-bold text-[#0078BF] font-serif">
                                Treasures of <span className="text-[#FBB201]">Vedic Wisdom</span>
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Srila Prabhupada through his tireless efforts has given us a plethora of Vedic Literatures like Srimad Bhagavad-gita, Srimad Bhagavatam, and Chaitanya Charitamrita.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                The regular study of these scriptures enables one to put purpose before self, and go back to being contented, peaceful, and happy.
                            </p>
                            <a 
                                href="mailto:connect@hkmchennai.org" 
                                className="inline-flex items-center gap-2 bg-[#FBB201] text-black font-bold px-8 py-4 rounded-full hover:bg-black hover:text-[#FBB201] transition-all transform hover:-translate-y-1 shadow-lg"
                            >
                                <Users size={20} /> Join a Discourse
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            <FooterSection />
        </main>
    )
}
