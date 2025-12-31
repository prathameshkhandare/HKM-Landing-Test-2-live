"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Clock, MapPin, Mail, Phone, User, CheckCircle, ArrowRight } from "lucide-react"

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
        <div className="min-h-screen bg-white font-sans">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div 
                    className="absolute inset-0 bg-[#001E36] z-0"
                >
                     <div className="absolute inset-0 bg-[url('/assets/BlackWhiteMandalaPattern1.jpg')] opacity-10 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001E36] via-transparent to-[#001E36]/50"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-[#FBB201]/20 text-[#FBB201] border border-[#FBB201]/30 text-sm font-semibold mb-4 backdrop-blur-sm">
                            ❄️ Winter Special
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif leading-tight">
                            Winter Camp <span className="text-[#FBB201]">Registration</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                            Engage your child in a spiritually enriching and fun-filled winter vacation with values, arts, and culture.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content & Form */}
            <section className="py-16 px-4 md:px-8 container mx-auto -mt-20 relative z-20">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    
                    {/* Registration Form - Centered */}
                    <div className="w-full max-w-4xl mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl border border-gray-100"
                        >
                            {formStatus === "success" ? (
                                <div className="text-center py-20">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-[#001E36] mb-4">Registration Successful!</h3>
                                    <p className="text-gray-600 text-lg mb-8">Thank you for registering. We will contact you shortly with further details.</p>
                                    <button 
                                        onClick={() => setFormStatus("idle")}
                                        className="text-[#0078BF] font-semibold hover:underline"
                                    >
                                        Register another child
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    
                                    {/* 1. Child's Information */}
                                    <div className="space-y-6">
                                        <h3 className="text-lg font-bold text-[#001E36] border-b pb-2">1.Child's Information :</h3>
                                        
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Full Name : *</label>
                                            <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Date of Birth (DD-MM-YYYY) *</label>
                                            <div className="relative">
                                                <input required type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Age *</label>
                                            <input required type="number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Gender *</label>
                                            <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30">
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">School Name : *</label>
                                            <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Current Class/Grade : *</label>
                                            <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>
                                    </div>

                                    {/* 2. Parent/Guardian Information */}
                                    <div className="space-y-6 pt-6">
                                        <h3 className="text-lg font-bold text-[#001E36] border-b pb-2">2.Parent/Guardian Information :</h3>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Full Name : *</label>
                                            <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Relationship to Child : *</label>
                                            <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Contact Number (Primary) : *</label>
                                            <div className="relative">
                                                <input required type="tel" className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" placeholder="081234 56789" />
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🇮🇳</span>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Alternate Contact Number :</label>
                                            <div className="relative">
                                                <input type="tel" className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" placeholder="081234 56789" />
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🇮🇳</span>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Email *</label>
                                            <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Residential Address *</label>
                                            <textarea required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30 h-24 resize-none"></textarea>
                                        </div>
                                    </div>

                                    {/* 3. Medical Information */}
                                    <div className="space-y-6 pt-6">
                                        <h3 className="text-lg font-bold text-[#001E36] border-b pb-2">3.Medical Information :</h3>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Allergies (food, medicine, etc.,) :</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Any medical conditions we should be aware of :</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Medication (if any) :</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700">Doctor's Name :</label>
                                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700">Doctor's Contact Number :</label>
                                                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* 4. Camp-Related Details */}
                                    <div className="space-y-6 pt-6">
                                        <h3 className="text-lg font-bold text-[#001E36] border-b pb-2">4.Camp-Related Details :</h3>

                                        <div className="space-y-3">
                                            <label className="text-sm font-semibold text-gray-700 block">Age Group : *</label>
                                            <label className="flex items-center gap-2">
                                                <input type="radio" name="age_group" className="w-4 h-4 text-[#0078BF] focus:ring-[#0078BF]" required />
                                                <span className="text-gray-700 text-sm">3 to 7 yrs</span>
                                            </label>
                                            <label className="flex items-center gap-2">
                                                <input type="radio" name="age_group" className="w-4 h-4 text-[#0078BF] focus:ring-[#0078BF]" required />
                                                <span className="text-gray-700 text-sm">8 to 13 yrs</span>
                                            </label>
                                        </div>

                                        <div className="space-y-4 pt-2">
                                            <h4 className="text-base text-gray-700">Course Fee : Rs. 1500 for Age Group 3 - 13 yrs</h4>
                                            <a href="#" className="text-[#0078BF] hover:underline block font-medium">Click here for Payment</a>
                                            <p className="text-gray-600 font-medium">(OR)</p>
                                            
                                            <div className="flex items-center gap-4">
                                                <div className="p-2 bg-white border border-gray-200 rounded-xl">
                                                    {/* Placeholder for QR Code */}
                                                    <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-xs text-gray-500">QR Code</div>
                                                </div>
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input type="radio" name="payment_method" className="w-4 h-4 text-[#0078BF] focus:ring-[#0078BF]" />
                                                    <span className="text-gray-700 font-medium">QR CODE</span>
                                                </label>
                                            </div>

                                            <div className="space-y-2 pt-2">
                                                <label className="text-sm font-semibold text-gray-700 block">Screen shot of payment made (after the completion of payment) : *</label>
                                                <div className="flex items-center gap-4">
                                                    <button type="button" className="bg-[#0078BF] hover:bg-[#006099] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Choose File</button>
                                                    <span className="text-sm text-gray-500">No file chosen</span>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700 block">Signature of Parent/Guardian : *</label>
                                                <div className="flex items-center gap-4">
                                                    <button type="button" className="bg-[#0078BF] hover:bg-[#006099] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Choose File</button>
                                                    <span className="text-sm text-gray-500">No file chosen</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 5. Consent & Declaration */}
                                    <div className="space-y-4 pt-6">
                                        <h3 className="text-lg font-bold text-[#001E36] border-b pb-2">5.Consent & Declaration :</h3>

                                        <div className="space-y-3">
                                            <label className="flex items-start gap-3">
                                                <input type="checkbox" className="mt-1 w-4 h-4 text-[#0078BF] rounded focus:ring-[#0078BF]" required />
                                                <span className="text-gray-700 text-sm">I give permission for my child to participate in all winter camp activities.</span>
                                            </label>
                                            <label className="flex items-start gap-3">
                                                <input type="checkbox" className="mt-1 w-4 h-4 text-[#0078BF] rounded focus:ring-[#0078BF]" required />
                                                <span className="text-gray-700 text-sm">I consent to basic first aid being administered if needed.</span>
                                            </label>
                                            <label className="flex items-start gap-3">
                                                <input type="checkbox" className="mt-1 w-4 h-4 text-[#0078BF] rounded focus:ring-[#0078BF]" required />
                                                <span className="text-gray-700 text-sm">I allow photos/videos of my child to be used for camp-related promotions.</span>
                                            </label>
                                        </div>
                                    </div>

                                    <button 
                                        disabled={formStatus === "submitting"}
                                        type="submit" 
                                        className="py-3 px-8 bg-[#0078BF] hover:bg-[#006099] text-white rounded font-bold text-sm shadow hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-4"
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
            </section>
        </div>
    )
}
