"use client"

import React, { useState } from "react"
import PhilosophyLayout from "@/components/PhilosophyLayout"
import { motion } from "framer-motion"
import { Send, Quote, Sparkles, BookOpen } from "lucide-react"

import TempleHeader from "@/components/TempleHeader"

export default function AskAnyQuestionPage() {
    return (
        <PhilosophyLayout
            title="Ask Any Question"
            subtitle="Clear your doubts with Vedic Wisdom"
            heroImage="/assets/hkm-about-education.png" 
            customHeader={<TempleHeader />}
        >
            <div className="space-y-8 text-lg text-[#3d1c1c] leading-relaxed font-medium">
                <p>
                    The Vedic scriptures encourage inquiry. In the Bhagavad-gita, Arjuna asks questions and Lord Krishna answers them. Inquiry is the beginning of spiritual life. <span className="text-[#ea580c] font-bold">Athato brahma jijnasa</span> – "Now, therefore, one should inquire into the nature of the Absolute Truth."
                </p>

                <div className="relative p-10 bg-[#FFF9F0] rounded-lg border border-[#FFB81C]/30 shadow-xl my-10 overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB81C]/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
                     <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.05] bg-repeat"></div>
                     
                    <div className="relative z-10">
                        <Quote className="absolute top-0 left-0 -mt-2 ml-0 text-[#FFB81C] fill-[#FFB81C]" size={60} />
                        <p className="text-xl text-[#5a5a5a] italic leading-relaxed mb-6 font-serif pl-8 pt-4">
                            "Human life is meant for inquiry about the Absolute Truth... That is the beginning of human life."
                        </p>
                        <div className="flex items-center gap-4 pl-8">
                            <div className="h-[2px] w-12 bg-[#701a1a]"></div>
                            <p className="font-bold text-[#701a1a] uppercase tracking-wider text-sm">Srila Prabhupada</p>
                        </div>
                        <p className="text-xs text-[#ea580c] font-bold uppercase tracking-widest pl-24 mt-1">Lecture on SB 1.2.6</p>
                    </div>
                </div>

                <p>
                    If you have any questions or doubts regarding spiritual life, philosophy, or the purpose of existence, please feel free to ask. Our devotee scholars will be happy to guide you based on the teachings of Srila Prabhupada.
                </p>
            </div>

            {/* AAQ Form - Re-styled for Premium Look */}
            <div className="mt-16 relative">
                 {/* Decorative background for form section */}
                 <div className="absolute inset-0 bg-gradient-to-r from-[#FFB81C]/5 to-[#ea580c]/5 transform -skew-y-2 rounded-3xl -z-10"></div>

                <div className="bg-white p-8 md:p-12 rounded-2xl border border-[#FFB81C]/30 shadow-2xl relative overflow-hidden group">
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#ea580c] via-[#FFB81C] to-[#ea580c]"></div>
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03]"></div>

                    <div className="mb-10 text-center">
                        <span className="text-[#ea580c] font-bold tracking-[0.2em] text-xs uppercase mb-3 block flex items-center justify-center gap-2">
                            <Sparkles size={14} /> Vedic Wisdom
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#701a1a] font-serif">Submit Your Question</h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#ea580c] to-[#FFB81C] mx-auto rounded-full mt-4"></div>
                    </div>

                    <form className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group/input">
                                <label htmlFor="name" className="block text-sm font-bold text-[#701a1a] mb-2 font-sans uppercase tracking-wide group-focus-within/input:text-[#ea580c] transition-colors">Full Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-[#FFB81C] focus:ring-0 outline-none transition-all font-sans text-gray-700 placeholder:text-gray-400"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="group/input">
                                <label htmlFor="email" className="block text-sm font-bold text-[#701a1a] mb-2 font-sans uppercase tracking-wide group-focus-within/input:text-[#ea580c] transition-colors">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-[#FFB81C] focus:ring-0 outline-none transition-all font-sans text-gray-700 placeholder:text-gray-400"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group/input">
                                <label htmlFor="phone" className="block text-sm font-bold text-[#701a1a] mb-2 font-sans uppercase tracking-wide group-focus-within/input:text-[#ea580c] transition-colors">Phone Number</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-[#FFB81C] focus:ring-0 outline-none transition-all font-sans text-gray-700 placeholder:text-gray-400"
                                    placeholder="+91 98765 43210"
                                />
                            </div>
                            <div className="group/input">
                                <label htmlFor="city" className="block text-sm font-bold text-[#701a1a] mb-2 font-sans uppercase tracking-wide group-focus-within/input:text-[#ea580c] transition-colors">City</label>
                                <input 
                                    type="text" 
                                    id="city" 
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-[#FFB81C] focus:ring-0 outline-none transition-all font-sans text-gray-700 placeholder:text-gray-400"
                                    placeholder="Chennai"
                                />
                            </div>
                        </div>

                        <div className="group/input">
                            <label htmlFor="question" className="block text-sm font-bold text-[#701a1a] mb-2 font-sans uppercase tracking-wide group-focus-within/input:text-[#ea580c] transition-colors">Your Question</label>
                            <textarea 
                                id="question" 
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-[#FFB81C] focus:ring-0 outline-none transition-all resize-none font-sans text-gray-700 placeholder:text-gray-400"
                                placeholder="Type your question here..."
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white font-bold rounded-lg shadow-lg hover:shadow-2xl hover:shadow-[#ea580c]/30 transition-all flex items-center justify-center gap-2 font-sans mx-auto text-lg border border-white/20"
                        >
                            <Send size={20} />
                            Submit Question
                        </motion.button>
                    </form>
                </div>
            </div>
        </PhilosophyLayout>
    )
}
