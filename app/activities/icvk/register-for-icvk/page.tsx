"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, Share2, CheckCircle, Mail, Phone } from "lucide-react"

export default function RegisterForICVK() {
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
                <div className="absolute inset-0 bg-[#001E36] z-0">
                     <div className="absolute inset-0 bg-[url('/assets/BlackWhiteMandalaPattern2.jpg')] opacity-10 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001E36] via-transparent to-[#001E36]/50"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        {/* New ICVK Kids Logo */}
                        <img 
                            src="/assets/activities/icvk/icvk-kids-logo-v2.png" 
                            alt="ICVK Kids Logo" 
                            className="w-48 md:w-64 h-auto mb-6 drop-shadow-lg transform hover:scale-105 transition-transform duration-300"
                        />
                        
                        <p className="text-lg text-white font-medium mb-1">
                           Indian Culture & Values for Kids
                        </p>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif leading-tight">
                            Register for <span className="text-[#FBB201]">ICVK</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

             {/* Main Content & Form */}
             <section className="py-16 px-4 md:px-8 container mx-auto -mt-20 relative z-20">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center">
                    
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
                                    <h3 className="text-3xl font-bold text-[#001E36] mb-4">You're Registered!</h3>
                                    <p className="text-gray-600 text-lg mb-8">Welcome to the ICVK family. We have sent a confirmation email with course details.</p>
                                    <button 
                                        onClick={() => setFormStatus("idle")}
                                        className="text-[#0078BF] font-semibold hover:underline"
                                    >
                                        Register another child
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    {/* Child Details Section */}
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Name of the Child *</label>
                                            <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Date of Birth (DD-MM-YYYY) *</label>
                                            <input required type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Age *</label>
                                            <input required type="number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Gender *</label>
                                            <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30">
                                                <option value="">Select</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Blood Group *</label>
                                            <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>
                                    </div>

                                    {/* Center Selection */}
                                    <div className="space-y-4 pt-4 border-t border-gray-100">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Which area you would like to join for ICVK classes? *</label>
                                            <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30">
                                                <option value="">Select Area</option>
                                                <option value="Mogappair">Mogappair</option>
                                                <option value="Thiruvanmiyur">Thiruvanmiyur</option>
                                            </select>
                                        </div>
                                        <p className="text-sm text-gray-500 italic bg-blue-50 p-4 rounded-xl border border-blue-100">
                                            Please note that ICVK classes are available for children aged 3 to 12 years only at the Mogappair center. At the Thiruvanmiyur center, ICVK classes are offered for children aged 3 to 15 years. Kindly select your batch accordingly from the options below.
                                        </p>
                                    </div>

                                    {/* Batch Selection */}
                                    <div className="space-y-4 pt-4">
                                        <label className="text-sm font-semibold text-gray-700 block">Select Batch *</label>
                                        <div className="space-y-3">
                                            {[
                                                "Gopala (3 to 6 yrs) – Sub Junior (Thiruvanmiyur & Mogappair)",
                                                "Keshava (6 to 8 yrs) – Junior (Thiruvanmiyur)",
                                                "Mukunda (7 to 12 Years) – Junior (Mogappair)",
                                                "Govinda (9 to 12 yrs) – Senior (Thiruvanmiyur)",
                                                "Madhava (13 to 15yrs) – Teen (Thiruvanmiyur)"
                                            ].map((batch, idx) => (
                                                <label key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 cursor-pointer transition-all">
                                                    <input type="radio" name="batch" className="mt-1 w-4 h-4 text-[#0078BF] focus:ring-[#0078BF]" required />
                                                    <span className="text-gray-700 text-sm">{batch}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* School & Parent Details */}
                                    <div className="space-y-6 pt-4 border-t border-gray-100">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Name of the School *</label>
                                            <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700">Name of Father *</label>
                                                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700">Name of Mother *</label>
                                                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Residential Address *</label>
                                            <textarea required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30 h-24 resize-none"></textarea>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700">Contact Number of Father *</label>
                                                <div className="relative">
                                                    <input required type="tel" className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" placeholder="98765 43210" />
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🇮🇳</span>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700">Contact Number of Mother *</label>
                                                <div className="relative">
                                                     <input required type="tel" className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" placeholder="98765 43210" />
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🇮🇳</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Email</label>
                                            <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>
                                    </div>

                                    {/* Pick up & Drop Info */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Pick and drop person name *</label>
                                            <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Pick and drop person contact number *</label>
                                            <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Relation *</label>
                                            <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>
                                    </div>

                                    {/* Additional Docs Section */}
                                    <div className="space-y-6 pt-4 border-t border-gray-100">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Aadhaar Number of Child</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Consent on Media release (permission to use photos or videos of the participant) *</label>
                                            <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0078BF] focus:ring-2 focus:ring-[#0078BF]/20 outline-none transition-all bg-gray-50/30">
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-sm font-semibold text-gray-700 block">Interested in Free "Gita Life" course - for parents simultaneously *</label>
                                            <div className="space-y-2">
                                                {["Both Parents are interested to attend", "Only Single parent willing to attend", "Not interested"].map((opt, i) => (
                                                    <label key={i} className="flex items-center gap-3">
                                                        <input type="radio" name="gita_life" className="w-4 h-4 text-[#0078BF] focus:ring-[#0078BF]" required />
                                                        <span className="text-gray-700 text-sm">{opt}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 block">(Kindly attach the below documents) *</label>
                                            <div className="flex items-center gap-4">
                                                <button type="button" className="bg-[#0078BF] hover:bg-[#006099] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Choose File</button>
                                                <span className="text-sm text-gray-500">No file chosen</span>
                                            </div>
                                            <p className="text-xs text-gray-500">Photo ID proof of child</p>
                                        </div>
                                    </div>

                                    {/* Payment Section */}
                                    <div className="space-y-6 pt-6 border-t border-gray-100 bg-gray-50/50 p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-[#001E36]">Course Fee : Rs 2500 per semester</h3>
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

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 block">Screen shot of payment made (after the completion of payment) *</label>
                                            <div className="flex items-center gap-4">
                                                <button type="button" className="bg-[#0078BF] hover:bg-[#006099] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Choose File</button>
                                                <span className="text-sm text-gray-500">No file chosen</span>
                                            </div>
                                        </div>
                                    </div>

                                     <button 
                                        disabled={formStatus === "submitting"}
                                        type="submit" 
                                        className="w-full py-4 bg-[#0078BF] hover:bg-[#006099] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-8"
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
