"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Send, CheckCircle } from "lucide-react"

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
        <div className="min-h-screen bg-[#FFF9F0] font-sans pt-24 pb-20">
            <div className="container mx-auto px-4">
                
                <div className="max-w-5xl mx-auto">
                    {/* Header Image */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl overflow-hidden shadow-2xl mb-12 border-4 border-white"
                    >
                        <img 
                            src="/assets/activities/icvk/enquiry-banner.png" 
                            alt="ICVK Enquiry Banner" 
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                         {/* Intro Text & Contact Info - Matching Screenshot */}
                         <div className="lg:col-span-4 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-center lg:text-left"
                            >
                                <h1 className="text-2xl font-bold text-[#FBB201] mb-2 font-serif">
                                    Give Your Child the Gift of Values & Devotion
                                </h1>
                                <p className="text-lg text-[#001E36] font-medium mb-4">
                                    New Batch starts 12th October at Mogappair & Thiruvanmiyur.
                                </p>
                                <p className="text-base text-gray-600 mb-8">
                                    Seats are limited – Register today
                                </p>

                                <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#0078BF]">
                                    <h4 className="font-bold text-[#001E36] mb-3">Contact information :</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Seats filling fast! Enroll your child in Indian Culture & Values classes at Mogappair & Thiruvanmiyur. Starts 12th Oct.
                                    </p>
                                </div>
                            </motion.div>
                         </div>

                        {/* Enquiry Form */}
                        <div className="lg:col-span-8">
                             <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
                            > 
                                {formStatus === "success" ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#001E36] mb-2">Message Sent!</h3>
                                        <p className="text-gray-600 mb-6">Thank you for contacting us. We will get back to you shortly.</p>
                                        <button 
                                            onClick={() => setFormStatus("idle")}
                                            className="px-6 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 font-medium"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Full Name : *</label>
                                            <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Phone number *</label>
                                            <div className="relative">
                                                <input required type="tel" className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" placeholder="081234 56789" />
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🇮🇳</span>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Email</label>
                                            <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Where do you stay in Chennai ? *</label>
                                            <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-sm font-semibold text-gray-700 block">Where would you like to attend the ICVK Program ? *</label>
                                            <div className="space-y-2">
                                                <label className="flex items-center gap-3">
                                                    <input type="radio" name="location" className="w-4 h-4 text-[#0078BF] focus:ring-[#0078BF]" required />
                                                    <span className="text-gray-700">Thiruvanmiyur</span>
                                                </label>
                                                <label className="flex items-center gap-3">
                                                    <input type="radio" name="location" className="w-4 h-4 text-[#0078BF] focus:ring-[#0078BF]" required />
                                                    <span className="text-gray-700">Mogappair</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-sm font-semibold text-gray-700 block">Would You (parent of the child) like to attend the Gita class at the same time ? *</label>
                                            <div className="space-y-2">
                                                <label className="flex items-center gap-3">
                                                    <input type="radio" name="attend_gita" className="w-4 h-4 text-[#0078BF] focus:ring-[#0078BF]" required />
                                                    <span className="text-gray-700">Yes</span>
                                                </label>
                                                <label className="flex items-center gap-3">
                                                    <input type="radio" name="attend_gita" className="w-4 h-4 text-[#0078BF] focus:ring-[#0078BF]" required />
                                                    <span className="text-gray-700">No</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="space-y-4 pt-2">
                                            <p className="text-xs text-gray-500 italic">
                                                Please note that ICVK classes are available for children aged 6 to 12 years only at the Mogappair center. At the Thiruvanmiyur center, ICVK classes are offered for children aged 3 to 15 years. Kindly select your batch accordingly from the option below *
                                            </p>
                                            
                                            <div className="space-y-3">
                                                {[
                                                    "Gopala (3 to 5 yrs) – Sub Junior",
                                                    "Keshava (6 to 8 yrs) – Junior",
                                                    "Govinda (9 to 12 yrs) – Senior",
                                                    "Madhava (13 to 15yrs) – Teen"
                                                ].map((batch, i) => (
                                                    <label key={i} className="flex items-center gap-3">
                                                        <input type="radio" name="batch" className="w-4 h-4 text-[#0078BF] focus:ring-[#0078BF]" required />
                                                        <span className="text-gray-700">{batch}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Why would you like to register for the ICVK Program ?</label>
                                            <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30 h-32 resize-none"></textarea>
                                        </div>

                                        <button 
                                            disabled={formStatus === "submitting"}
                                            type="submit" 
                                            className="px-8 py-3 bg-[#0078BF] hover:bg-[#006099] text-white rounded font-bold text-sm shadow hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {formStatus === "submitting" ? (
                                                <span className="flex items-center gap-2">Processing...</span>
                                            ) : (
                                                <>Submit</>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
