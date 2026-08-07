"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { MapPin, Clock, Phone, Send, Sparkles, Star, Gift } from "lucide-react"
import Image from "next/image"

export default function GitaLifePage() {



    return (
        <main className="min-h-screen bg-[#FFF9F0] font-sans selection:bg-[#ea580c] selection:text-white relative overflow-x-hidden">
            <Navbar />

            {/* Hero Section - Royal & Divine */}
            <section className="relative pt-12 pb-8 px-4 overflow-hidden bg-[#2D0A0A]">
                {/* Background Texture */}
                <div className="absolute inset-0 opacity-10 bg-[url('/assets/5BlackWhiteMandalaPattern3.jpg')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#2D0A0A]/90 via-[#4a0e0e]/80 to-[#2D0A0A]/95"></div>

                <div className="container mx-auto relative z-10 pt-4">
                    {/* Top Header - Simplified & Centered */}
                    <div className="flex justify-center items-center mb-8">
                        {/* Top Text */}
                        <div className="text-center z-20">
                            <h3 className="text-[#FFB81C] font-bold tracking-[0.15em] uppercase text-lg md:text-2xl mb-1 drop-shadow-md">
                                Dakshina Dwaraka Dham
                            </h3>
                            <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-[#ea580c] to-transparent mx-auto mb-2"></div>
                            <p className="text-white/80 text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
                                Iskcon Thiruvanmiyur Presents
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Text Content with Scroll Design */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* Gita Life Logo */}
                                <div className="relative inline-block mx-auto lg:mx-0 transform hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src="/assets/activities/gita-life/Gita_life_logo.png"
                                        alt="Gita Life Logo"
                                        width={500}
                                        height={400}
                                        className="w-[280px] sm:w-[320px] md:w-[400px] lg:w-[500px] h-auto object-contain drop-shadow-2xl"
                                        priority
                                    />
                                </div>

                                <h3 className="text-2xl md:text-3xl text-[#FFB81C] font-serif italic mt-8 font-medium drop-shadow-md">
                                    "Foundational Concepts of the Gita"
                                </h3>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
                            >
                                <a href="https://gitalife.hkmchennai.org/register?source=hkmc-gita-life" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white font-bold rounded-full shadow-lg hover:shadow-[#ea580c]/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 border-2 border-[#fff7ed]/20">
                                    Register Now <Send size={18} />
                                </a>
                                <div className="px-6 py-4 bg-white text-[#2D0A0A] font-bold rounded-full shadow-lg flex items-center gap-2">
                                    <Gift size={18} className="text-[#ea580c]" /> Free for ICVK Parents
                                </div>
                            </motion.div>
                        </div>

                        {/* Hero Image */}
                        <div className="w-full lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFB81C]/30"
                            >
                                {/* Using the Krishna Arjuna Image */}
                                <div className="aspect-[4/3] relative">
                                    <Image
                                        src="/assets/about-hkm-krishna-arjuna.jpg"
                                        alt="Krishna and Arjuna"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D0A0A]/80 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                        <p className="text-[#FFB81C] font-serif italic text-lg">"Simply by knowing the science of Krishna, one becomes free."</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative Frame Behind */}
                            <div className="absolute -inset-4 border-2 border-[#FFB81C]/20 rounded-3xl -z-10 rotate-3"></div>
                            <div className="absolute -inset-4 border-2 border-[#ea580c]/20 rounded-3xl -z-10 -rotate-2"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Info Cards Section - Extracted Data */}
            <section className="py-12 -mt-10 relative z-20 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Timing - Red Ribbon Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#ef4444] to-[#991b1b] p-6 rounded-xl shadow-xl border-t-4 border-[#FFB81C] hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute -right-6 -top-6 text-white/10 rotate-12 group-hover:rotate-45 transition-transform duration-700">
                            <Clock size={120} />
                        </div>
                        <div className="absolute inset-0 bg-[url('/assets/5BlackWhiteMandalaPattern3.jpg')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>

                        <div className="w-12 h-12 bg-[#FFB81C] rounded-full flex items-center justify-center text-[#991b1b] mb-4 relative z-10 shadow-lg">
                            <Clock size={24} />
                        </div>
                        <h4 className="font-bold text-[#FFB81C] text-lg mb-1 relative z-10 uppercase tracking-wide">Weekly Sessions</h4>
                        <p className="font-bold text-3xl text-white relative z-10 mb-1 drop-shadow-md">Every Sunday</p>
                        <p className="text-white/90 font-medium text-lg relative z-10 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#FFB81C]"></span> 10:00 AM - 12:00 Noon
                        </p>
                    </motion.div>

                    {/* Location with Temple Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-[#FFB81C] hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
                    >
                        <div className="absolute right-0 bottom-0 opacity-10 w-24 h-24">

                        </div>
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-[#FFB81C] mb-4 group-hover:bg-[#FFB81C] group-hover:text-white transition-colors relative z-10">
                            <MapPin size={24} />
                        </div>
                        <h4 className="font-bold text-gray-800 text-lg mb-1 relative z-10">Venue</h4>
                        <p className="text-[#ea580c] font-bold relative z-10">Dakshina Dwaraka Dham</p>
                        <p className="text-gray-500 text-sm relative z-10"></p>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-[#ea580c] hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-[#ea580c] mb-4">
                            <Phone size={24} />
                        </div>
                        <h4 className="font-bold text-gray-800 text-lg mb-1">Contact Us</h4>
                        <p className="text-[#ea580c] font-bold text-xl">96009 67108</p>
                        <p className="text-gray-500 text-sm">For registration &  details</p>
                    </motion.div>

                    {/* Offer */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-gradient-to-br from-[#2D0A0A] to-[#4a0e0e] p-6 rounded-xl shadow-xl border-t-4 border-[#FFB81C] text-white hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-125 transition-transform"><Gift size={60} /></div>
                        <div className="w-12 h-12 bg-[#FFB81C]/20 rounded-full flex items-center justify-center text-[#FFB81C] mb-4 backdrop-blur-sm">
                            <Star size={24} fill="currentColor" />
                        </div>
                        <h4 className="font-bold text-[#FFB81C] text-lg mb-1">Special Offer</h4>
                        <p className="text-white font-bold text-lg">Free for ICVK Parents</p>
                        <p className="text-white/60 text-sm">Join the community today!</p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content & Registration */}
            <section className="py-20 container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-10">
                    {/* Course Highlights */}
                    <div>
                        <h2 className="text-4xl font-bold text-[#2D0A0A] font-serif mb-6">Unlock the <span className="text-[#ea580c]">Wisdom of Life</span></h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Gita Life is an accessible programme for families to explore the timeless wisdom of the Bhagavad Gita and apply its principles in everyday life. Sessions are interactive — participants are encouraged to ask questions and receive thoughtful answers. The Hare Krishna Mahamantra is introduced, and each session concludes with the sharing of delicious prasadam. A deeply enriching experience for all who attend.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Purpose of Life", desc: "What is the real purpose of life?" },
                            { title: "Life After Death", desc: "What happens after death?" },
                            { title: "Modern Problems", desc: "Why problems have increased (suicide, diseases etc.) although science has advanced?" },
                            { title: "Law of Karma", desc: "How Karma works?" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-2 h-2 rounded-full bg-[#ea580c] mb-3"></div>
                                <h3 className="text-xl font-bold text-[#2D0A0A] mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Register CTA */}
                    <div className="text-center pt-4">
                        <a href="https://gitalife.hkmchennai.org/register?source=hkmc-gita-life" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:shadow-[#ea580c]/30 hover:scale-105 transition-all duration-300 border-2 border-[#fff7ed]/20">
                            Register Now <Send size={20} />
                        </a>
                        <p className="mt-3 text-sm font-bold text-[#ea580c]">
                            <Sparkles size={14} className="inline mr-1" /> Free for parents of ICVK kids
                        </p>
                    </div>

                    {/* Srila Prabhupada Tribute */}
                    <div className="mt-12 bg-[#FFF9F0] p-8 rounded-2xl border border-[#ea580c]/20 flex items-center gap-6">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#ea580c] shadow-md shrink-0">
                            <Image
                                src="/assets/srila-prabhupada.png"
                                alt="Srila Prabhupada"
                                width={100}
                                height={100}
                                className="object-cover w-full h-full bg-[#2D0A0A]"
                            />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#2D0A0A] text-lg">Based on the teachings of</h4>
                            <p className="text-[#ea580c] font-bold font-serif text-xl">His Divine Grace A.C. Bhaktivedanta Swami Prabhupada</p>
                            <p className="text-sm text-gray-500 italic">Founder-Acharya of the International Society for Krishna Consciousness</p>
                        </div>
                    </div>
                </div>
            </section>

            <FooterSection />
        </main>
    )
}
