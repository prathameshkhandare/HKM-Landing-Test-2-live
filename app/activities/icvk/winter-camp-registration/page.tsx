"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Heart, User, Calendar, MapPin, Phone, Mail } from "lucide-react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"

export default function WinterCampRegistration() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setFormStatus("submitting")
        // Simulate API call
        setTimeout(() => {
            setFormStatus("success")
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#FBB201] selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-[#001E36] text-white relative overflow-hidden">
                 {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20 bg-[url('/assets/10BlackWhiteMandalaPattern1.jpg')] bg-cover animate-pulse-slow"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#001E36] via-transparent to-[#001E36]/50"></div>
                
                <div className="container mx-auto text-center relative z-10 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                         <h2 className="text-xl md:text-2xl text-[#FBB201] tracking-widest uppercase font-bold mb-4">
                            Seasonal Retreat
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif tracking-tight drop-shadow-2xl">
                             Winter Camp <span className="text-[#FBB201]">Registration</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-serif italic mb-8">
                            A fun-filled spiritual adventure for children this winter!
                        </p>
                    </motion.div>
                </div>
            </section>

             {/* Main Content & Form */}
             <section className="py-20 px-6 container mx-auto">
                <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 max-w-5xl mx-auto">
                     <div className="grid grid-cols-1 lg:grid-cols-12">
                         
                         {/* Left Side Info */}
                         <div className="lg:col-span-5 bg-[#F8FAFC] p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
                             <div className="space-y-8 sticky top-10">
                                 <div>
                                    <h3 className="text-2xl font-bold text-[#001E36] mb-4 font-serif">Camp Highlights</h3>
                                    <ul className="space-y-3">
                                        {["Stories from Puranas", "Mantra Meditation", "Creative Arts & Crafts", "Drama & Roleplay", "Team Building Games"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-700">
                                                <CheckCircle className="w-5 h-5 text-[#0078BF]" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                 </div>

                                 <div className="space-y-4">
                                     <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                                        <div className="p-3 bg-[#E0F2FE] rounded-full text-[#0078BF]">
                                            <Calendar className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Dates</p>
                                            <p className="text-gray-800 font-bold">Dec 25th - Dec 31st</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                                        <div className="p-3 bg-[#FEF3C7] rounded-full text-[#D97706]">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Venue</p>
                                            <p className="text-gray-800 font-bold">HKM Chennai, Thiruvanmiyur</p>
                                        </div>
                                    </div>
                                 </div>
                             </div>
                         </div>

                        {/* Right Side Form */}
                        <div className="lg:col-span-7 p-8 md:p-12">
                             <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                {formStatus === "success" ? (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#001E36] mb-3">Registration Complete!</h3>
                                        <p className="text-gray-600 mb-6">We look forward to seeing your child at the Winter Camp.</p>
                                        <button 
                                            onClick={() => setFormStatus("idle")}
                                            className="text-[#0078BF] font-bold hover:underline"
                                        >
                                            Register another child
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <h3 className="text-2xl font-bold text-[#001E36] mb-6 flex items-center gap-3">
                                            <User className="w-6 h-6 text-[#FBB201]" />
                                            Child Details
                                        </h3>

                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700">Full Name *</label>
                                                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30 hover:bg-white" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                 <div className="space-y-2">
                                                    <label className="text-sm font-semibold text-gray-700">Age *</label>
                                                    <input required type="number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30 hover:bg-white" />
                                                </div>
                                                 <div className="space-y-2">
                                                    <label className="text-sm font-semibold text-gray-700">Class *</label>
                                                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30 hover:bg-white" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700">School *</label>
                                                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30 hover:bg-white" />
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-gray-100">
                                            <h3 className="text-2xl font-bold text-[#001E36] mb-6 flex items-center gap-3">
                                                <Phone className="w-6 h-6 text-[#FBB201]" />
                                                Parent Details
                                            </h3>
                                            <div className="space-y-4">
                                                 <div className="space-y-2">
                                                    <label className="text-sm font-semibold text-gray-700">Parent Name *</label>
                                                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30 hover:bg-white" />
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-semibold text-gray-700">Email *</label>
                                                        <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30 hover:bg-white" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-semibold text-gray-700">Phone *</label>
                                                        <div className="relative">
                                                             <input required type="tel" className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30 hover:bg-white" placeholder="Mobile Number" />
                                                             <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🇮🇳</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                 <div className="space-y-2">
                                                    <label className="text-sm font-semibold text-gray-700">Address *</label>
                                                    <textarea required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30 hover:bg-white h-24 resize-none"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <button 
                                            disabled={formStatus === "submitting"}
                                            type="submit" 
                                            className="w-full py-4 bg-[#0078BF] hover:bg-[#006099] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                                        >
                                            {formStatus === "submitting" ? (
                                                <span className="flex items-center gap-2">Processing...</span>
                                            ) : (
                                                <>
                                                    Register for Winter Camp <ArrowRight className="w-5 h-5" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
             </section>

             {/* Footer Image / Quote */}
             <section className="w-full mt-0 bg-[#E11D48] py-16 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-4 bg-white/10 skew-y-1"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full -mb-16 -mr-16 blur-2xl"></div>
                <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"></div>

                 <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <Heart className="w-12 h-12 text-white/80 mx-auto mb-6 fill-current animate-pulse-slow" />
                        <h3 className="text-2xl md:text-4xl font-bold text-white leading-snug font-serif italic mb-6">
                            "Our children are a gift given by the mercy of the Lord... They are delicate. Take care of them with love and devotion."
                        </h3>
                        <p className="text-xl text-[#FBB201] font-bold tracking-wider uppercase">
                            - Srila Prabhupada
                        </p>
                    </div>
                 </div>
            </section>

            <FooterSection />
        </div>
    )
}
