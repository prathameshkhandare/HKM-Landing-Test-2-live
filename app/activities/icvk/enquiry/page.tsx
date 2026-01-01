"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import FooterSection from "@/components/FooterSection"
import Navbar from "@/components/Navbar"
import { MessageCircle, Send, CheckCircle, Heart, Phone, Mail, MapPin } from "lucide-react"

export default function ICVKEnquiry() {
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
                            Connect With Us
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif tracking-tight drop-shadow-2xl">
                             ICVK <span className="text-[#FBB201]">Enquiry</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-serif italic mb-8">
                            Give Your Child the Gift of Values & Devotion
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content & Form */}
            <section className="py-20 px-6 container mx-auto">
                <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        {/* Left Side - Info */}
                         <div className="lg:col-span-4 bg-[#F8FAFC] p-8 lg:p-12 flex flex-col justify-start pt-32 lg:pt-44 border-r border-gray-100">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="mb-8 rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                                    <img 
                                        src="/assets/activities/icvk/icvk-quote-banner.png" 
                                        alt="ICVK Quote Banner" 
                                        className="w-full h-auto"
                                    />
                                </div>

                                <h3 className="text-3xl font-bold text-[#001E36] mb-6 font-serif">
                                    Admissions <span className="text-[#0078BF]">Open</span>
                                </h3>
                                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                    New batches starting soon at <span className="font-bold text-[#001E36]">Mogappair & Thiruvanmiyur</span>. 
                                    Seats are limited, so please reach out to us early!
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-[#E0F2FE] rounded-full text-[#0078BF]">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Call Us</p>
                                            <p className="text-lg font-bold text-[#001E36]">97890 57101</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-[#FEF3C7] rounded-full text-[#D97706]">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Centers</p>
                                            <p className="text-lg font-bold text-[#001E36]">Thiruvanmiyur & Mogappair</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 p-6 bg-[#001E36] rounded-2xl shadow-xl relative overflow-hidden ring-1 ring-white/10">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#FBB201] rounded-full opacity-20 -mr-10 -mt-10 blur-xl"></div>
                                    <p className="font-serif italic text-lg leading-relaxed relative z-10 text-gray-100">
                                        "By blending ancient wisdom with modern relevance, we equip children with tools to become responsible global citizens."
                                    </p>
                                </div>
                            </motion.div>
                         </div>

                        {/* Right Side - Form */}
                        <div className="lg:col-span-8 p-10 lg:p-16">
                             <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            > 
                                {formStatus === "success" ? (
                                    <div className="text-center py-20">
                                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                                            <CheckCircle className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-[#001E36] mb-4">Message Sent Successfully!</h3>
                                        <p className="text-gray-600 mb-8 text-lg">Thank you for contacting us. Our team will get back to you shortly.</p>
                                        <button 
                                            onClick={() => setFormStatus("idle")}
                                            className="px-8 py-3 bg-gray-100 rounded-xl text-gray-700 hover:bg-gray-200 font-bold transition-colors"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <h3 className="text-2xl font-bold text-[#001E36] mb-8 flex items-center gap-3">
                                            <MessageCircle className="w-6 h-6 text-[#FBB201]" />
                                            Enquiry Form
                                        </h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#001E36] uppercase tracking-wider">Child's Name *</label>
                                                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50 hover:bg-white" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#001E36] uppercase tracking-wider">Phone Number *</label>
                                                <div className="relative">
                                                    <input required type="tel" className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50 hover:bg-white" placeholder="081234 56789" />
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🇮🇳</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                             <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#001E36] uppercase tracking-wider">Email Address</label>
                                                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50 hover:bg-white" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#001E36] uppercase tracking-wider">Location in Chennai *</label>
                                                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50 hover:bg-white" />
                                            </div>
                                        </div>

                                        <div className="space-y-4 pt-4 border-t border-gray-100">
                                            <label className="text-sm font-bold text-[#001E36] uppercase tracking-wider block">Preferred Center *</label>
                                            <div className="flex flex-wrap gap-4">
                                                <label className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl cursor-pointer hover:bg-[#F0F9FF] border border-transparent hover:border-[#0078BF]/30 transition-all">
                                                    <input type="radio" name="location" className="w-5 h-5 text-[#0078BF] focus:ring-[#0078BF]" required />
                                                    <span className="text-gray-700 font-medium">Thiruvanmiyur</span>
                                                </label>
                                                <label className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl cursor-pointer hover:bg-[#F0F9FF] border border-transparent hover:border-[#0078BF]/30 transition-all">
                                                    <input type="radio" name="location" className="w-5 h-5 text-[#0078BF] focus:ring-[#0078BF]" required />
                                                    <span className="text-gray-700 font-medium">Mogappair</span>
                                                </label>
                                            </div>
                                        </div>

                                         <div className="space-y-4 pt-2">
                                            <label className="text-sm font-bold text-[#001E36] uppercase tracking-wider block">Gita Class for Parents Interest *</label>
                                            <div className="flex flex-wrap gap-4">
                                                <label className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl cursor-pointer hover:bg-[#F0F9FF] border border-transparent hover:border-[#0078BF]/30 transition-all">
                                                    <input type="radio" name="attend_gita" className="w-5 h-5 text-[#0078BF] focus:ring-[#0078BF]" required />
                                                    <span className="text-gray-700 font-medium">Yes</span>
                                                </label>
                                                <label className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl cursor-pointer hover:bg-[#F0F9FF] border border-transparent hover:border-[#0078BF]/30 transition-all">
                                                    <input type="radio" name="attend_gita" className="w-5 h-5 text-[#0078BF] focus:ring-[#0078BF]" required />
                                                    <span className="text-gray-700 font-medium">No</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="space-y-4 pt-2">
                                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-blue-800">
                                                <p className="font-semibold mb-1">Note regarding Batches:</p>
                                                <ul className="list-disc list-inside space-y-1 opacity-80">
                                                    <li>Mogappair: Ages 6-12 only</li>
                                                    <li>Thiruvanmiyur: Ages 3-15</li>
                                                </ul>
                                            </div>
                                            <label className="text-sm font-bold text-[#001E36] uppercase tracking-wider block">Select Batch *</label>
                                            
                                            <div className="space-y-3">
                                                {[
                                                    "Gopala (3 to 5 yrs) – Sub Junior",
                                                    "Keshava (6 to 8 yrs) – Junior",
                                                    "Govinda (9 to 12 yrs) – Senior",
                                                    "Madhava (13 to 15yrs) – Teen"
                                                ].map((batch, i) => (
                                                    <label key={i} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                                                        <input type="radio" name="batch" className="w-5 h-5 text-[#0078BF] focus:ring-[#0078BF]" required />
                                                        <span className="text-gray-700">{batch}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#001E36] uppercase tracking-wider">Reason for Registering</label>
                                            <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50 hover:bg-white h-32 resize-none"></textarea>
                                        </div>

                                        <button 
                                            disabled={formStatus === "submitting"}
                                            type="submit" 
                                            className="w-auto px-12 py-4 bg-[#0078BF] hover:bg-[#006099] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
                                        >
                                            {formStatus === "submitting" ? (
                                                <span className="flex items-center gap-2">Processing...</span>
                                            ) : (
                                                <>
                                                    Submit Enquiry <Send className="w-5 h-5" />
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
