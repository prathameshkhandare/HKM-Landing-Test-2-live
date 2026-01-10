"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, Share2, CheckCircle, Mail, Phone, Heart, Sparkles, BookOpen } from "lucide-react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import Image from "next/image"

export default function RegisterForICVK() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")
    const [selectedChildPhoto, setSelectedChildPhoto] = useState<string>("")
    const [selectedPaymentScreenshot, setSelectedPaymentScreenshot] = useState<string>("")
    
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    
    const childPhotoRef = React.useRef<HTMLInputElement>(null)
    const paymentRef = React.useRef<HTMLInputElement>(null)

    const onSubmit = async (data: any) => {
        setFormStatus("submitting")
        try {
            const formData = new FormData();
            
            // Append all fields
            Object.keys(data).forEach(key => {
                formData.append(key, data[key]);
            });

            const response = await fetch('https://hkmbackend.itsupport-8ce.workers.dev/api/icvk/register', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setFormStatus("success")
            } else {
                console.error("Registration failed")
                setFormStatus("idle") 
                alert("Registration failed. Please try again.")
            }
        } catch (error) {
            console.error("Error submitting form", error)
            setFormStatus("idle")
            alert("Error connecting to server.")
        }
    }

    return (
        <div className="min-h-screen bg-[#FFF9F0] font-sans selection:bg-[#FBB201] selection:text-white relative">
            <Navbar />

            {/* --- HERO SECTION: Funky & Spiritual --- */}
            <section className="pt-32 pb-24 px-6 relative overflow-hidden bg-gradient-to-br from-[#2D0A0A] via-[#4d1010] to-[#2D0A0A]">
                 {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.05] bg-[url('/assets/mandala-pattern.png')] bg-repeat animate-pulse-slow"></div>
                
                {/* Decorative Glowing Orbs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FBB201] rounded-full blur-[120px] opacity-20"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#ea580c] rounded-full blur-[120px] opacity-20"></div>
                </div>
                
                <div className="container mx-auto text-center relative z-10 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl relative"
                    >
                        {/* Playful Header Composition */}
                        <div className="relative mb-4 inline-block">
                             {/* Krishna & Radha Cartoon Asset */}
                            <motion.div 
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="relative z-10"
                            >
                                <img 
                                    src="/assets/activities/icvk/krishna_radha_header_final_v4.png" 
                                    alt="Krishna & Radha" 
                                    className="h-52 md:h-72 w-auto object-contain drop-shadow-[0_0_25px_rgba(251,178,1,0.6)] hover:scale-105 transition-transform duration-300 scale-125 origin-bottom"
                                />
                            </motion.div>
                            
                            {/* Sparkling Stars around them */}
                            <Sparkles className="absolute -top-4 -right-8 text-[#FBB201] w-8 h-8 animate-bounce" />
                            <Sparkles className="absolute top-1/2 -left-12 text-[#FBB201] w-6 h-6 animate-pulse" />
                        </div>

                        <h2 className="text-xl md:text-2xl text-[#FBB201] tracking-widest uppercase font-bold mb-4 font-serif">
                           Indian Culture & Values for Kids
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-serif tracking-tight drop-shadow-2xl">
                            Register for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB201] via-[#fcd34d] to-[#FBB201]">ICVK</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto italic font-medium">
                            "Unlock the treasure of Vedic wisdom for your child in a fun, engaging way!"
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Wave Divider */}
                <div className="absolute bottom-0 left-0 w-full leading-none z-10">
                     <svg className="block w-full h-12 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                            className="fill-[#FFF9F0]"></path>
                    </svg>
                </div>
            </section>

             {/* --- FORM SECTION --- */}
             <section className="py-12 md:py-24 relative overflow-x-clip">
                {/* Floating Decor Elements - Child Reading Book - Left Side */}
                <div className="absolute top-20 left-0 xl:-left-[5%] w-80 h-80 md:w-[30rem] md:h-[30rem] z-20 opacity-100 animate-float hidden xl:block pointer-events-none">
                     <Image src="/assets/activities/icvk/child_reading_book.png" alt="Child Reading Book" fill className="object-contain" />
                </div>

                {/* Happy Kids Jumping - Top Right Side */}
                <div className="absolute top-0 right-0 md:top-20 md:right-0 xl:-right-[2%] w-28 h-28 md:w-[32rem] md:h-[32rem] z-50 pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-full relative"
                    >
                        <Image 
                            src="/assets/activities/icvk/happy_kids_jumping.png" 
                            alt="Happy Kids Jumping" 
                            fill 
                            className="object-contain drop-shadow-xl"
                            sizes="(max-width: 768px) 288px, 384px"
                        />
                    </motion.div>
                </div>

                {/* Cute Cow - Near End of Form Right Side (Viewport Relative) */}
                <div className="absolute top-[45%] -right-4 md:top-[50%] md:right-0 xl:right-[5%] w-24 h-24 md:w-72 md:h-72 z-50 pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -10, 0], rotate: [0, -3, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="w-full h-full relative"
                    >
                        <Image 
                            src="/assets/activities/icvk/cute_cow.png" 
                            alt="Cute Holy Cow" 
                            fill 
                            className="object-contain drop-shadow-xl"
                            sizes="(max-width: 768px) 192px, 288px"
                        />
                    </motion.div>
                </div>

                {/* Football - Bottom Left Overlay */}
                <div className="absolute bottom-0 left-0 md:bottom-[15%] md:left-0 xl:left-[10%] w-24 h-24 md:w-40 md:h-40 z-50 pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-full relative"
                    >
                        <Image 
                            src="/assets/activities/icvk/football_vector.png" 
                            alt="Football" 
                            fill 
                            className="object-contain drop-shadow-lg"
                            sizes="(max-width: 768px) 96px, 160px"
                        />
                    </motion.div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center">
                        
                        {/* Registration Form - Playful Card Style */}
                        <div className="w-full max-w-4xl mx-auto">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white p-6 md:p-12 rounded-[2.5rem] shadow-2xl border-4 border-[#FBB201]/10 relative overflow-hidden"
                            >
                                {/* Card Decoration Top */}
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FBB201] via-[#ea580c] to-[#FBB201]"></div>
                                
                                {formStatus === "success" ? (
                                    <div className="text-center py-20">
                                        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner animate-bounce-short">
                                            <CheckCircle className="w-12 h-12" />
                                        </div>
                                        <h3 className="text-4xl font-bold text-[#2D0A0A] mb-4 font-serif">Yay! You're Registered! 🎉</h3>
                                        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                                            Hare Krishna, You have successfully registered for ICVK program, for further queries or information you may please contact <strong className="text-[#ea580c] whitespace-nowrap">+91 96008 15108</strong>.
                                        </p>
                                        <button 
                                            onClick={() => setFormStatus("idle")}
                                            className="text-[#ea580c] font-bold hover:underline flex items-center justify-center gap-2 mx-auto"
                                        >
                                            <User size={18} /> Register another child
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                        
                                        <div className="text-center mb-8">
                                            <div className="inline-block px-4 py-1 rounded-full bg-[#FFF9F0] border border-[#FBB201]/30 text-[#ea580c] text-sm font-bold tracking-wider mb-4">
                                                LITTLE DEVOTEE DETAILS
                                            </div>
                                            <h3 className="text-3xl font-bold text-[#2D0A0A] font-serif">Student Application</h3>
                                        </div>

                                        {/* Child Details Section */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2 md:col-span-2">
                                                <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Name of the Child *</label>
                                                <input {...register("childName", { required: true })} type="text" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium placeholder:text-gray-400" placeholder="e.g. Arlington Krishna" />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Date of Birth *</label>
                                                <input {...register("dob", { required: true })} type="date" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Age *</label>
                                                <input {...register("age", { required: true })} type="number" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" placeholder="Years" />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Gender *</label>
                                                <select {...register("gender", { required: true })} className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium text-gray-700">
                                                    <option value="">Select Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Blood Group *</label>
                                                <input {...register("bloodGroup", { required: true })} type="text" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" placeholder="e.g. O+" />
                                            </div>
                                        </div>

                                        {/* Center Selection */}
                                        <div className="space-y-4 pt-8 border-t-2 border-dashed border-gray-100">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Preferred Center *</label>
                                                <select {...register("center", { required: true })} className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium text-gray-700">
                                                    <option value="">Select Area</option>
                                                    <option value="Mogappair">Mogappair (Ages 3-12)</option>
                                                    <option value="Thiruvanmiyur">Thiruvanmiyur (Ages 3-15)</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Batch Selection - Custom Cards */}
                                        <div className="space-y-4 pt-4">
                                            <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide block mb-2">Select Your Batch *</label>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {[
                                                    { title: "Gopala", age: "3-6 yrs", subtitle: "Sub Junior", icon: "🐮", color: "bg-blue-50 border-blue-200" },
                                                    { title: "Keshava", age: "6-9 yrs", subtitle: "Junior", icon: "🦚", color: "bg-green-50 border-green-200" },
                                                    { title: "Govinda", age: "9-12 yrs", subtitle: "Senior", icon: "🏹", color: "bg-orange-50 border-orange-200" },
                                                    { title: "Madhava", age: "12-15 yrs", subtitle: "Teen", icon: "🐚", color: "bg-purple-50 border-purple-200" }
                                                ].map((batch, idx) => (
                                                    <label key={idx} className={`relative flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all hover:scale-[1.02] hover:shadow-md ${batch.color}`}>
                                                        <input {...register("batch", { required: true })} type="radio" value={batch.title} className="absolute top-4 right-4 w-5 h-5 text-[#FBB201] focus:ring-[#FBB201]" />
                                                        <span className="text-3xl filter drop-shadow-sm">{batch.icon}</span>
                                                        <div>
                                                            <p className="font-bold text-[#2D0A0A]">{batch.title} <span className="text-sm font-normal opacity-70">({batch.age})</span></p>
                                                            <p className="text-xs uppercase font-bold tracking-wider opacity-60 text-[#2D0A0A]">{batch.subtitle}</p>
                                                        </div>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Parent Details */}
                                        <div className="space-y-6 pt-8 border-t-2 border-dashed border-gray-100">
                                            <div className="text-center mb-6">
                                                <div className="inline-block px-4 py-1 rounded-full bg-[#FFF9F0] border border-[#FBB201]/30 text-[#ea580c] text-sm font-bold tracking-wider mb-2">
                                                    PARENT / GUARDIAN INFO
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Name of the School *</label>
                                                    <input {...register("schoolName", { required: true })} type="text" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Parent's Email *</label>
                                                    <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} type="email" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" placeholder="example@email.com" />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Father's Name *</label>
                                                    <input {...register("fatherName", { required: true })} type="text" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Mother's Name *</label>
                                                    <input {...register("motherName", { required: true })} type="text" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Residential Address *</label>
                                                <textarea {...register("address", { required: true })} className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium h-24 resize-none"></textarea>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Father's Mobile *</label>
                                                    <div className="relative">
                                                        <input {...register("fatherMobile", { required: true })} type="tel" className="w-full pl-12 pr-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" placeholder="98765 43210" />
                                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🇮🇳</span>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Mother's Mobile *</label>
                                                    <div className="relative">
                                                            <input {...register("motherMobile", { required: true })} type="tel" className="w-full pl-12 pr-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" placeholder="98765 43210" />
                                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🇮🇳</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Pick up Info */}
                                        <div className="space-y-6 pt-8 border-t-2 border-dashed border-gray-100">
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Pickup Person Name *</label>
                                                    <input {...register("pickupName", { required: true })} type="text" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Pickup Contact *</label>
                                                    <input {...register("pickupContact", { required: true })} type="tel" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Relation *</label>
                                                    <input {...register("pickupRelation", { required: true })} type="text" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Gita Life Interest */}
                                        <div className="space-y-4 pt-6 border-t-2 border-dashed border-gray-100 bg-[#FFF9F0] p-6 rounded-2xl border-l-4 border-l-[#FBB201]">
                                            <div className="flex items-start gap-3">
                                                <BookOpen className="text-[#FBB201] w-6 h-6 shrink-0 mt-1" />
                                                <div>
                                                    <h4 className="font-bold text-[#2D0A0A] text-lg">Parent's Course: "Gita Life"</h4>
                                                    <p className="text-sm text-gray-600 mb-4">Are you interested in attending our free simultaneous session for parents?</p>
                                                    <div className="space-y-3">
                                                        {["Both Parents are interested", "Only Single parent willing", "Not interested"].map((opt, i) => (
                                                            <label key={i} className="flex items-center gap-3 cursor-pointer">
                                                                <input {...register("gitaLifeInterest", { required: true })} type="radio" value={opt} className="w-4 h-4 text-[#FBB201] focus:ring-[#FBB201]" />
                                                                <span className="text-gray-700 font-medium text-sm">{opt}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Uploads */}
                                        <div className="space-y-4 pt-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Consent on Media Release *</label>
                                                <select {...register("mediaConsent", { required: true })} className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium">
                                                    <option value="Yes">Yes, I grant permission</option>
                                                    <option value="No">No, I do not</option>
                                                </select>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide block">Upload Child's Photo ID *</label>
                                                {/* Hidden Input for Form Submission */}
                                                <input 
                                                    type="file" 
                                                    ref={childPhotoRef}
                                                    onChange={(e) => {
                                                        const file = e.target.files?.[0];
                                                        if (file) {
                                                            setSelectedChildPhoto(file.name);
                                                            setValue("childPhoto", file); // Set React Hook Form value
                                                        }
                                                    }}
                                                    className="hidden" 
                                                    accept="image/*,application/pdf"
                                                />
                                                <div 
                                                    onClick={() => childPhotoRef.current?.click()}
                                                    className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer group"
                                                >
                                                    <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                                                        <Mail size={20} />
                                                    </div>
                                                    <span className="text-sm font-bold text-gray-600 block">
                                                        {selectedChildPhoto || "Click to upload or drag and drop"}
                                                    </span>
                                                    <span className="text-xs text-gray-400">JPG, PNG or PDF (Max 5MB)</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Payment Section */}
                                        <div className="space-y-6 pt-6 border-t-2 border-dashed border-[#FBB201]/30 bg-gradient-to-br from-[#FFF9F0] to-[#fff] p-8 rounded-2xl shadow-sm border border-[#FBB201]/20">
                                            <div className="flex items-center justify-between flex-wrap gap-4">
                                                <h3 className="text-2xl font-black text-[#2D0A0A] font-serif">Course Fee</h3>
                                                <div className="bg-[#2D0A0A] text-[#FBB201] text-xl font-bold px-6 py-2 rounded-lg shadow-lg transform -rotate-2">
                                                    ₹2500 / Semester
                                                </div>
                                            </div>
                                            
                                            <div className="flex flex-col md:flex-row items-center gap-6">
                                                <div className="p-3 bg-white border-2 border-gray-100 rounded-2xl shadow-sm">
                                                    <div className="w-32 h-32 bg-gray-100 flex items-center justify-center text-xs text-gray-500 rounded-xl relative overflow-hidden">
                                                        <Image src="/assets/icvk_payment_qr.jpg" alt="Payment QR" fill className="object-cover" />
                                                    </div>
                                                </div>
                                                <div className="flex-1 space-y-4">
                                                    <p className="text-gray-600 font-medium leading-relaxed">
                                                        Scan the QR code to pay or use the link below. After payment, please upload the screenshot.
                                                    </p>
                                                    <a href="https://rzp.io/rzp/wJkzDDO" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#ea580c] font-bold hover:underline gap-2">
                                                        Click here for Payment Gateway <ArrowRight size={16} />
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide block">Upload Payment Screenshot *</label>
                                                <input 
                                                    type="file" 
                                                    ref={paymentRef} 
                                                    onChange={(e) => {
                                                        const file = e.target.files?.[0];
                                                        if (file) {
                                                            setSelectedPaymentScreenshot(file.name);
                                                            setValue("paymentScreenshot", file);
                                                        }
                                                    }}
                                                    className="hidden" 
                                                    accept="image/*"
                                                />
                                                <div 
                                                    onClick={() => paymentRef.current?.click()}
                                                    className="border-2 border-dashed border-gray-300 rounded-xl p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer"
                                                >
                                                        <button type="button" className="bg-[#2D0A0A] hover:bg-black text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-lg pointer-events-none">Choose File</button>
                                                        <span className="text-sm text-gray-500 italic block truncate max-w-[200px]">
                                                            {selectedPaymentScreenshot || "No file chosen..."}
                                                        </span>
                                                </div>
                                            </div>
                                        </div>

                                        <button 
                                            disabled={formStatus === "submitting"}
                                            type="submit" 
                                            className="w-full py-5 bg-gradient-to-r from-[#FBB201] to-[#ea580c] hover:from-[#e5a500] hover:to-[#c2410c] text-[#2D0A0A] rounded-2xl font-black text-xl shadow-[0_10px_30px_rgba(234,88,12,0.3)] hover:shadow-[0_15px_40px_rgba(234,88,12,0.4)] hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-8 transform"
                                        >
                                            {formStatus === "submitting" ? (
                                                <span className="flex items-center gap-2">Processing Request...</span>
                                            ) : (
                                                <>COMPLETE REGISTRATION <ArrowRight className="w-6 h-6" /></>
                                            )}
                                        </button>

                                    </form>
                                    )}
                            </motion.div>
                        </div>  
                    </div>
                </div>
             </section>


             {/* Footer Quote Section - Vibrant & Child Friendly with Petal Animation */}
             <section className="w-full mt-0 py-24 relative overflow-hidden bg-gradient-to-br from-[#FFB81C] via-[#FF9933] to-[#ea580c]">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.12] bg-repeat mix-blend-overlay"></div>
                
                {/* Glowing Orbs - More vibrant */}
                <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-[#fbbf24]/40 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-[#f97316]/40 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[150px]"></div>
                
                {/* Floating Sparkles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={`sparkle-${i}`}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                            }}
                            transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 3,
                            }}
                            className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                            style={{
                                left: `${10 + Math.random() * 80}%`,
                                top: `${10 + Math.random() * 80}%`,
                            }}
                        />
                    ))}
                </div>

                {/* Falling Petals Animation */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(25)].map((_, i) => (
                        <motion.div
                            key={`petal-${i}`}
                            initial={{ y: -30, x: Math.random() * 1200, rotate: 0, opacity: 0 }}
                            animate={{ 
                                y: 600, 
                                x: [null, Math.random() * 80 - 40],
                                rotate: 360, 
                                opacity: [0, 0.8, 0.6, 0] 
                            }}
                            transition={{ 
                                duration: 10 + Math.random() * 8, 
                                repeat: Infinity, 
                                delay: Math.random() * 12,
                                ease: "linear"
                            }}
                            className="absolute top-0 w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-[#fff5e6] to-[#ffd4a8] rounded-tr-[100%] rounded-bl-[100%] shadow-md"
                            style={{ left: `${Math.random() * 100}%` }}
                        />
                    ))}
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={`petal2-${i}`}
                            initial={{ y: -30, x: Math.random() * 1200, rotate: 0, opacity: 0 }}
                            animate={{ 
                                y: 600, 
                                x: [null, Math.random() * 60 - 30],
                                rotate: -360, 
                                opacity: [0, 0.7, 0.5, 0] 
                            }}
                            transition={{ 
                                duration: 12 + Math.random() * 8, 
                                repeat: Infinity, 
                                delay: Math.random() * 15,
                                ease: "linear"
                            }}
                            className="absolute top-0 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-[#ffe4cc] to-[#ffb380] rounded-tl-[100%] rounded-br-[100%] shadow-sm"
                            style={{ left: `${Math.random() * 100}%` }}
                        />
                    ))}
                    {/* Lotus petals - pink/red */}
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={`lotus-${i}`}
                            initial={{ y: -30, x: Math.random() * 1200, rotate: 0, opacity: 0 }}
                            animate={{ 
                                y: 600, 
                                x: [null, Math.random() * 100 - 50],
                                rotate: 180, 
                                opacity: [0, 0.6, 0.4, 0] 
                            }}
                            transition={{ 
                                duration: 14 + Math.random() * 10, 
                                repeat: Infinity, 
                                delay: Math.random() * 18,
                                ease: "linear"
                            }}
                            className="absolute top-0 w-3 h-5 md:w-4 md:h-6 bg-gradient-to-b from-[#ff9a9a] to-[#ff6b6b] rounded-t-full shadow-sm"
                            style={{ left: `${Math.random() * 100}%` }}
                        />
                    ))}
                </div>

                {/* Decorative Side Elements */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block">
                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-20 h-20 opacity-30"
                    >
                        <Sparkles className="w-full h-full text-white" />
                    </motion.div>
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:block">
                    <motion.div 
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="w-20 h-20 opacity-30"
                    >
                        <Heart className="w-full h-full text-white fill-current" />
                    </motion.div>
                </div>

                 <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto bg-white/95 backdrop-blur-xl rounded-[3rem] p-10 md:p-16 shadow-2xl border-2 border-white/60 relative overflow-hidden"
                    >
                        {/* Card decorative top accent */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-transparent via-[#ea580c] to-transparent rounded-b-full"></div>
                        
                        {/* Decorative corners */}
                        <div className="absolute top-4 left-4 w-12 h-12 border-l-4 border-t-4 border-[#FBB201]/30 rounded-tl-2xl"></div>
                        <div className="absolute top-4 right-4 w-12 h-12 border-r-4 border-t-4 border-[#FBB201]/30 rounded-tr-2xl"></div>
                        <div className="absolute bottom-4 left-4 w-12 h-12 border-l-4 border-b-4 border-[#FBB201]/30 rounded-bl-2xl"></div>
                        <div className="absolute bottom-4 right-4 w-12 h-12 border-r-4 border-b-4 border-[#FBB201]/30 rounded-br-2xl"></div>
                        
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Heart className="w-14 h-14 text-[#ea580c] mx-auto mb-6 fill-current drop-shadow-lg" />
                        </motion.div>
                        <h3 className="text-2xl md:text-4xl font-black text-[#2D0A0A] leading-tight font-serif italic mb-8">
                            "Our children are a gift given by the mercy of the Lord... They are delicate. Take care of them with love and devotion."
                        </h3>
                        <div className="inline-block px-8 py-3 border-2 border-[#ea580c]/40 rounded-full bg-gradient-to-r from-[#FFF9F0] to-[#fff5e6] shadow-sm">
                            <p className="text-lg text-[#ea580c] font-bold tracking-[0.15em] uppercase">
                                - Srila Prabhupada
                            </p>
                        </div>
                    </motion.div>
                 </div>
            </section>

            <FooterSection />
        </div>
    )
}
