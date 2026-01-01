"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, IndianRupee, CheckCircle, Phone, Star, Heart, Mail } from "lucide-react"

export default function ICVKActivitiesPage() {
    return (
        <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#FBB201] selection:text-white relative">
            
            {/* Hero Section */}
            <section className="pt-24 pb-10 px-6 bg-[#001E36] text-white relative overflow-hidden">
                 {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20 bg-[url('/assets/10BlackWhiteMandalaPattern1.jpg')] bg-cover animate-pulse-slow"></div>
                
                <div className="container mx-auto text-center relative z-10 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl"
                    >
                        <h2 className="text-xl md:text-2xl text-[#FBB201] tracking-widest uppercase font-bold mb-3">
                            Indian Culture & Values for Kids
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif tracking-tight drop-shadow-2xl">
                            Activities & Program Details
                        </h1>
                        
                        {/* Banner Image in Hero */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FBB201]/30 mx-auto max-w-3xl transform hover:scale-[1.01] transition-transform duration-500">
                             <img 
                                src="/assets/activities/icvk/icvk-banner-new.png" 
                                alt="ICVK Program Banner" 
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6 container mx-auto">
                {/* Intro */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                         <h2 className="text-3xl md:text-4xl font-bold text-[#001E36] mb-6 font-serif">
                            Dear <span className="text-[#FBB201]">Parents</span>,
                        </h2>
                        <p className="text-xl text-gray-700 leading-relaxed font-light">
                            Do you want to introduce your children to our <span className="font-semibold text-[#0078BF]">rich culture and heritage</span>? 
                            The Hare Krishna Movement has initiated a weekend program on ‘Indian Culture and Values for Kids’ (ICVK) 
                            in Thiruvanmiyur, to be held over a four-month semester.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
                     {/* Age Groups - Styled Card */}
                     <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FBB201]/10 rounded-bl-[100px]"></div>
                        <h3 className="text-2xl font-bold text-[#D97706] mb-8 flex items-center gap-3 relative z-10">
                            <CheckCircle className="w-8 h-8" />
                            Meant for Which Age Groups?
                        </h3>
                        <div className="space-y-4 relative z-10">
                            {[
                                { name: "Gopala", age: "3 to 6-year-olds", color: "bg-red-500" },
                                { name: "Keshava", age: "6 to 9-year-olds", color: "bg-blue-500" },
                                { name: "Govinda", age: "9 to 12-year-olds", color: "bg-green-500"},
                                { name: "Madhava", age: "12 to 15-year-olds", color: "bg-purple-500" }
                            ].map((group, idx) => (
                                <div key={idx} className="flex items-center gap-5 p-4 rounded-2xl bg-gray-50 hover:bg-[#FFF9F0] transition-colors border border-transparent hover:border-[#FBB201]/30">
                                    <div className={`w-12 h-12 rounded-full ${group.color} text-white flex items-center justify-center font-bold text-xl shadow-md`}>
                                        {group.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#001E36] text-lg">{group.name}</h4>
                                        <p className="text-gray-600 font-medium">{group.age}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Highlights - Styled Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#001E36] p-8 rounded-3xl shadow-xl text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FBB201] to-[#D97706]"></div>
                        <h3 className="text-2xl font-bold text-[#FBB201] mb-8 flex items-center gap-3">
                            <Star className="w-8 h-8" />
                            Program Highlights
                        </h3>
                        <ul className="space-y-6">
                            {[
                                "Contemporary methods used to teach values based on ancient texts (Bhagavad Gita, Ramayana).",
                                "Play-way methodology used for younger children.",
                                "Sumptuous prasadam for children and parents at 12.00 noon.",
                                "Children learn to chant BG shlokas and understand their meaning.",
                                "Prior knowledge of Sanskrit is not essential."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#FBB201] shrink-0 shadow-[0_0_10px_#FBB201]" />
                                    <span className="text-blue-50 font-light text-lg leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Kids Illustration + Benefits */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
                    <div className="lg:col-span-5 flex justify-center">
                        <motion.img 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            src="/assets/activities/icvk/icvk-kids-play.png"
                            alt="Kids Learning Values"
                            className="max-h-[500px] w-auto drop-shadow-2xl"
                        />
                    </div>
                    <div className="lg:col-span-7">
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-bold text-[#001E36] mb-8 font-serif">
                                How Will Your Children <span className="text-[#0078BF]">Benefit</span>?
                            </h3>
                            <div className="space-y-6">
                                {[
                                    { title: "Character Building", desc: "Instills traits like loyalty, obedience, respect, discipline, truth, non-violence, and compassion." },
                                    { title: "Cultural Connection", desc: "Active participation in festivals helps them learn about and appreciate their rich heritage." },
                                    { title: "Confidence & Expression", desc: "Stage performances at the end of the semester to present their learnings and experiences." }
                                ].map((benefit, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#0078BF] hover:shadow-md transition-shadow">
                                        <h4 className="text-xl font-bold text-[#001E36] mb-2">{benefit.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Info Block (Fee, Time, Venue) */}
                <div className="bg-[#001E36] rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
                     {/* Decorative Circles */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FBB201] rounded-full opacity-10 blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#0078BF] rounded-full opacity-10 blur-3xl"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
                        {/* Fees */}
                        <div className="space-y-6">
                            <h4 className="text-2xl font-bold text-[#FBB201] flex items-center gap-3 font-serif">
                                <IndianRupee className="w-6 h-6" /> Admission Fees
                            </h4>
                            <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10">
                                <p className="text-gray-300 mb-2">Per Semester:</p>
                                <div className="flex items-baseline gap-4 mb-4">
                                    <span className="text-2xl text-gray-500 line-through">₹ 3000</span>
                                    <span className="text-4xl font-bold text-white">₹ 2000</span>
                                </div>
                                <div className="bg-[#FBB201] text-[#001E36] text-center py-2 rounded-lg font-bold text-sm uppercase tracking-wider mb-4">
                                    Special Offer
                                </div>
                                <p className="text-xs text-gray-400">* Includes study material and art & crafts materials.</p>
                            </div>
                        </div>

                         {/* Timings */}
                         <div className="space-y-6">
                            <h4 className="text-2xl font-bold text-[#FBB201] flex items-center gap-3 font-serif">
                                <Clock className="w-6 h-6" /> Timings
                            </h4>
                            <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10 h-full">
                                <p className="text-xl mb-2">Every Sunday</p>
                                <p className="text-3xl font-bold text-white mb-6">10:00 am – 12:00 noon</p>
                                
                                <div className="pt-6 border-t border-white/10">
                                    <p className="text-[#FBB201] font-bold text-sm uppercase mb-2">Special Bonus for Parents!</p>
                                    <p className="text-sm leading-relaxed text-gray-300">
                                        Attend the <span className="text-white font-bold">GITA LIFE</span> Foundation Course simultaneously in the adjacent hall at <span className="text-[#FBB201]">NO EXTRA COST</span>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Venue & Contact */}
                        <div className="space-y-6">
                            <h4 className="text-2xl font-bold text-[#FBB201] flex items-center gap-3 font-serif">
                                <MapPin className="w-6 h-6" /> Venue
                            </h4>
                            <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10 h-full flex flex-col justify-between">
                                <p className="text-lg leading-relaxed text-gray-200 font-light mb-6">
                                    Dakshina Dwaraka Dham,<br/>
                                    1st Seaward Road, Valmiki Nagar,<br/>
                                    Thiruvanmiyur, Chennai-600041.
                                </p>
                                <div>
                                    <p className="text-xs uppercase text-gray-500 mb-2 tracking-widest">Contact Us</p>
                                     <a href="tel:9600330108" className="flex items-center gap-3 text-2xl font-bold text-white hover:text-[#FBB201] transition-colors mb-2">
                                        <Phone className="w-6 h-6" /> 96003 30108
                                    </a>
                                    <a href="mailto:icvk@hkmchennai.org" className="flex items-center gap-3 text-lg text-gray-300 hover:text-white transition-colors">
                                        <Mail className="w-5 h-5" /> icvk@hkmchennai.org
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* 8. Footer Image / Quote */}
             <section className="w-full mt-12 bg-[#E11D48] py-16 relative overflow-hidden">
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
