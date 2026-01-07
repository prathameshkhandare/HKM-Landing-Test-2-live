"use client"

import React, { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import FooterSection from "@/components/FooterSection"
import Navbar from "@/components/Navbar"
import { MessageCircle, Send, CheckCircle, Heart, Phone, MapPin, Sparkles, Star } from "lucide-react"
import Image from "next/image"

export default function ICVKEnquiry() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setFormStatus("submitting")
        // Simulate API call
        setTimeout(() => {
            setFormStatus("success")
            if (formRef.current) formRef.current.reset()
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-[#FFFDF5] font-sans selection:bg-[#FBB201] selection:text-[#2D0A0A]">
            <Navbar />
            
            {/* --- HERO / COMPOSITION SECTION --- */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Custom Wave Background from Poster */}
                <div className="absolute inset-0 pointer-events-none">
                     {/* Top Red-Orange Wave */}
                     <svg className="absolute top-0 left-0 w-full h-[600px] z-0" preserveAspectRatio="none" viewBox="0 0 1440 600">
                        <defs>
                            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#EF4444" /> {/* Red */}
                                <stop offset="100%" stopColor="#F97316" /> {/* Orange */}
                            </linearGradient>
                        </defs>
                        <path fill="url(#waveGradient)" d="M0,0 L1440,0 L1440,350 C1200,450 900,200 600,350 C300,500 0,250 0,350 Z" />
                     </svg>
                     
                     {/* Yellow Curve Below */}
                     <div className="absolute top-[200px] left-0 w-full h-[500px] z-[-1] bg-[#FBB201] opacity-90 transform -skew-y-3 origin-top-left"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center">
                        
                        {/* Header Composition: Logos & Title */}
                        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
                            {/* Left: HKM Logo */}
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex justify-center md:justify-start"
                            >
                                <div className="bg-white/90 p-3 rounded-2xl shadow-xl backdrop-blur-sm">
                                    <Image 
                                        src="/assets/iskcon_chennai_logo.png" 
                                        alt="Hare Krishna Movement Chennai" 
                                        width={140} 
                                        height={140} 
                                        className="object-contain"
                                    />
                                </div>
                            </motion.div>

                            {/* Center: ICVK Logo & Title */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-center flex flex-col items-center"
                            >
                                <div className="relative w-72 h-40 md:w-96 md:h-52 mb-4">
                                     <Image 
                                        src="/assets/activities/icvk/icvk-kids-logo.png" 
                                        alt="ICVK Logo" 
                                        fill 
                                        className="object-contain drop-shadow-2xl"
                                    />
                                </div>
                                <h1 className="text-3xl md:text-5xl font-black text-[#2D0A0A] font-serif tracking-tight leading-tight">
                                    <span style={{ textShadow: '1px 1px 0px rgba(255,255,255,0.8)' }}>Indian Culture & Values</span>
                                    <span className="block text-white mt-2 " style={{ textShadow: '3px 3px 0px #2D0A0A, 6px 6px 20px rgba(0,0,0,0.4)' }}>
                                        For Kids
                                    </span>
                                </h1>
                                <motion.div 
                                    animate={{ scale: [1, 1.05, 1], rotate: [-1, 1, -1] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="mt-6 inline-block bg-[#FBB201] text-[#2D0A0A] text-2xl md:text-5xl font-black px-10 py-4 rounded-2xl shadow-[8px_8px_0px_#EF4444] border-4 border-[#2D0A0A]"
                                >
                                    ADMISSION ENQUIRY
                                </motion.div>
                            </motion.div>

                            {/* Right: Srila Prabhupada */}
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex justify-center md:justify-end"
                            >
                                <div className="relative w-40 h-40 md:w-56 md:h-56">
                                    <div className="absolute inset-0 bg-[#FBB201] rounded-full blur-[40px] opacity-40 animate-pulse"></div>
                                    <Image 
                                        src="/assets/srila_prabhupada_v4.png " 
                                        alt="His Divine Grace A.C. Bhaktivedanta Swami Prabhupada" 
                                        fill 
                                        className="object-contain drop-shadow-2xl"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-blue-900/90 text-white text-[10px] text-center py-1 rounded-full px-2 font-bold uppercase tracking-wider">
                                        Founder Acharya
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Quote from Poster */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }} 
                            className="bg-white/95 backdrop-blur-md p-8 md:p-12 rounded-[3rem] shadow-2xl border-4 border-[#FBB201] max-w-4xl text-center relative overflow-visible mt-4"
                        >
                            <Sparkles className="absolute -top-6 -left-6 w-12 h-12 text-[#FBB201] animate-spin-slow" />
                            <Sparkles className="absolute -bottom-6 -right-6 w-12 h-12 text-[#FBB201] animate-spin-slow" />
                            
                            <p className="text-2xl md:text-4xl font-black text-[#EF4444] font-serif italic leading-relaxed mb-4 drop-shadow-sm">
                                "Children are a blank slate. <br className="hidden md:block"/>
                                <span className="text-[#0078BF]">You can mould them as you like,</span> <br className="hidden md:block"/>
                                as they are eager to learn."
                            </p>
                            <p className="text-xl text-[#2D0A0A] font-bold tracking-widest uppercase flex items-center justify-center gap-2">
                                <span className="w-8 h-[2px] bg-[#2D0A0A]"></span> 
                                Srila Prabhupada 
                                <span className="w-8 h-[2px] bg-[#2D0A0A]"></span>
                            </p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* --- ENQUIRY FORM SECTION --- */}
            <section className="py-12 md:py-20 px-4 relative">
                {/* Decorative Side Elements */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#FBB201]/20 rounded-full blur-3xl rounded-bl-none"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#EF4444]/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto max-w-6xl">
                    <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-[#FEE2E2] overflow-hidden flex flex-col lg:flex-row">
                        
                        {/* Left Info Panel */}
                        <div className="bg-gradient-to-br from-[#FFF7ED] to-[#FFF1F2] p-8 lg:p-12 lg:w-2/5 flex flex-col relative border-b lg:border-b-0 lg:border-r border-[#FED7AA]">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FBB201] to-[#EF4444]"></div>
                            
                            <h3 className="text-3xl font-black text-[#2D0A0A] mb-2">Admission Enquiry</h3>
                            <p className="text-gray-600 mb-8 font-medium">We'd love to have your child join our ICVK family.</p>

                            <div className="space-y-6 flex-grow">
                                <div className="flex items-center gap-4 group cursor-default">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-[#EF4444] group-hover:scale-110 transition-transform">
                                        <Phone size={24} fill="currentColor" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Call / WhatsApp</p>
                                        <p className="text-xl font-black text-[#2D0A0A]">97890 57101</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 group cursor-default">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-[#FBB201] group-hover:scale-110 transition-transform">
                                        <MapPin size={24} fill="currentColor" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Centers</p>
                                        <p className="text-lg font-bold text-[#2D0A0A] leading-tight">Thiruvanmiyur & Mogappair</p>
                                    </div>
                                </div>
                            </div>

                            {/* Fun decoration */}
                            <div className="relative w-full h-48 mt-8">
                                <Image src="/assets/activities/icvk/happy_kids_jumping.png" alt="Happy Kids" fill className="object-contain" />
                            </div>
                        </div>

                        {/* Right Form Panel */}
                        <div className="p-8 lg:p-12 lg:w-3/5 bg-white relative">
                             <AnimatePresence mode="wait">
                                {formStatus === "success" ? (
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full flex flex-col items-center justify-center text-center py-20"
                                    >
                                        <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-inner ring-4 ring-green-50">
                                            <CheckCircle size={48} />
                                        </div>
                                        <h3 className="text-3xl font-black text-[#2D0A0A] mb-2">Thank you!</h3>
                                        <p className="text-gray-500 font-medium text-lg max-w-sm mx-auto">
                                            Your enquiry has been sent. We will contact you very soon to confirm your slot!
                                        </p>
                                        <button onClick={() => setFormStatus("idle")} className="mt-8 text-[#0078BF] font-bold hover:underline">
                                            Send another enquiry
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form 
                                        ref={formRef}
                                        onSubmit={handleSubmit} 
                                        className="space-y-6"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-500 uppercase tracking-wide">Parent's Name</label>
                                                <input required type="text" className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-[#FBB201] outline-none font-bold text-gray-700 transition-colors" placeholder="Type here..." />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-500 uppercase tracking-wide">Contact Number</label>
                                                <input required type="tel" className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-[#FBB201] outline-none font-bold text-gray-700 transition-colors" placeholder="+91 00000 00000" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-500 uppercase tracking-wide">Child's Name</label>
                                                <input required type="text" className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-[#FBB201] outline-none font-bold text-gray-700 transition-colors" placeholder="Type here..." />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-500 uppercase tracking-wide">Child's Age</label>
                                                <input required type="number" min="3" max="18" className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-[#FBB201] outline-none font-bold text-gray-700 transition-colors" placeholder="Age" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-500 uppercase tracking-wide">Preferred Center</label>
                                            <div className="flex gap-4">
                                                <label className="flex-1 cursor-pointer">
                                                    <input type="radio" name="center" className="peer hidden" value="Mogappair" required />
                                                    <div className="px-5 py-4 rounded-xl border-2 border-gray-100 peer-checked:border-[#0078BF] peer-checked:bg-[#0078BF]/5 text-center transition-all">
                                                        <span className="font-bold text-gray-600 peer-checked:text-[#0078BF]">Mogappair</span>
                                                    </div>
                                                </label>
                                                <label className="flex-1 cursor-pointer">
                                                    <input type="radio" name="center" className="peer hidden" value="Thiruvanmiyur" required />
                                                    <div className="px-5 py-4 rounded-xl border-2 border-gray-100 peer-checked:border-[#0078BF] peer-checked:bg-[#0078BF]/5 text-center transition-all">
                                                        <span className="font-bold text-gray-600 peer-checked:text-[#0078BF]">Thiruvanmiyur</span>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                             <label className="text-sm font-bold text-gray-500 uppercase tracking-wide">Message / Query (Optional)</label>
                                             <textarea className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-[#FBB201] outline-none font-bold text-gray-700 transition-colors h-32 resize-none" placeholder="Anything else you'd like to ask?"></textarea>
                                        </div>

                                        <button 
                                            disabled={formStatus === "submitting"}
                                            className="w-full py-5 rounded-xl bg-[#2D0A0A] hover:bg-black text-white font-black text-lg tracking-wide shadow-xl hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 group"
                                        >
                                            {formStatus === "submitting" ? "Sending..." : "Submit Enquiry"}
                                            <Star size={20} className="text-[#FBB201] group-hover:rotate-180 transition-transform" fill="currentColor" />
                                        </button>

                                    </motion.form>
                                )}
                             </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    )
}
