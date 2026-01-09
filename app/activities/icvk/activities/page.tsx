"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, IndianRupee, CheckCircle, Phone, Star, Heart, Mail } from "lucide-react"

export default function ICVKActivitiesPage() {
    return (
        <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#FBB201] selection:text-white relative">
            
            {/* --- HERO / COMPOSITION SECTION --- */}
            <section className="relative pt-32 pb-16 overflow-visible">
                {/* Custom Wave Background from Poster */}
                <div className="absolute inset-0 pointer-events-none h-[800px]">
                     {/* Top Red-Orange Wave */}
                     <svg className="absolute top-0 left-0 w-full h-full z-0" preserveAspectRatio="none" viewBox="0 0 1440 600">
                        <defs>
                            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#EF4444" /> {/* Red */}
                                <stop offset="100%" stopColor="#F97316" /> {/* Orange */}
                            </linearGradient>
                        </defs>
                        <path fill="url(#waveGradient)" d="M0,0 L1440,0 L1440,400 C1200,550 900,250 600,400 C300,550 0,300 0,400 Z" />
                     </svg>
                     
                     {/* Yellow Curve Below */}
                     <div className="absolute top-[300px] left-0 w-full h-[600px] z-[-1] bg-[#FBB201] opacity-90 transform -skew-y-2 origin-top-left"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center">
                        
                        {/* Header Composition: Logos */}
                        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-4">
                            {/* Left: HKM Logo */}
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex justify-center md:justify-start"
                            >
                                <div className="bg-white/90 p-4 rounded-b-3xl shadow-xl backdrop-blur-sm border-t-4 border-[#0078BF]">
                                    <img 
                                        src="/assets/iskcon_chennai_logo.png" 
                                        alt="Hare Krishna Movement Chennai" 
                                        className="w-32 md:w-40 object-contain"
                                    />
                                </div>
                            </motion.div>

                            {/* Center: ICVK Logo */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-center flex flex-col items-center"
                            >
                                <div className="relative w-72 h-40 md:w-96 md:h-52 mb-4 bg-white/20 backdrop-blur-sm rounded-3xl p-4 shadow-lg border border-white/30">
                                     <img 
                                        src="/assets/activities/icvk/icvk-kids-logo.png" 
                                        alt="ICVK Logo" 
                                        className="w-full h-full object-contain drop-shadow-2xl"
                                    />
                                </div>
                            </motion.div>

                            {/* Right: Srila Prabhupada */}
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex justify-center md:justify-end"
                            >
                                <div className="relative w-40 h-40 md:w-48 md:h-48 group">
                                    <div className="absolute inset-0 bg-white/80 rounded-full blur-[30px] opacity-60 group-hover:opacity-100 transition-opacity"></div>
                                    <img 
                                        src="/assets/srila_prabhupada_v4.png" 
                                        alt="His Divine Grace A.C. Bhaktivedanta Swami Prabhupada" 
                                        className="w-full h-full object-contain drop-shadow-2xl relative z-10"
                                    />
                                     <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max bg-[#001E36] text-[#FBB201] text-[10px] text-center py-1 rounded-full px-3 font-bold uppercase tracking-wider shadow-lg border border-[#FBB201]">
                                        Founder Acharya
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Title & Quote */}
                        <div className="text-center max-w-5xl mx-auto mt-4 md:mt-12">
                             
                             {/* Page Heading - Vibrant & Large */}
                             <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", bounce: 0.5 }}
                                className="mb-12 relative inline-block group"
                             >
                                <div className="absolute inset-0 bg-[#FBB201] rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                                <h1 className="relative bg-gradient-to-r from-[#EF4444] via-[#F97316] to-[#EF4444] bg-[length:200%_auto] animate-gradient text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-black text-3xl md:text-6xl uppercase tracking-wider shadow-[0_15px_30px_-5px_rgba(239,68,68,0.5)] border-[6px] border-white transform -rotate-2 group-hover:rotate-0 transition-transform duration-300">
                                    ✨ ICVK Activities ✨
                                </h1>
                             </motion.div>

                             {/* Poster Quote */}
                             <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="relative inline-block"
                             >
                                 <div className="bg-[#E11D48] text-white p-6 md:p-10 rounded-[3rem] shadow-[0_10px_30px_-5px_rgba(225,29,72,0.6)] border-4 border-[#FBB201] max-w-4xl mx-auto transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <p className=" text-white text-xl md:text-3xl font-bold font-serif italic leading-relaxed mb-4">
                                        'Children are a blank slate. <br/>
                                        You can mould them as you like, <br/>
                                        as they are eager to learn'
                                    </p>
                                    <p className="text-lg text-[#FBB201] font-bold tracking-widest uppercase">
                                        - Srila Prabhupada
                                    </p>
                                 </div>
                                 
                                 {/* Decorative Stars */}
                                 <Star className="absolute -top-6 -left-6 w-12 h-12 text-[#FBB201] fill-current animate-spin-slow drop-shadow-lg" />
                                 <Star className="absolute -bottom-6 -right-6 w-12 h-12 text-[#FBB201] fill-current animate-spin-slow delay-75 drop-shadow-lg" />
                             </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pt-8 pb-20 px-6 container mx-auto">
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
                     {/* Age Groups - Styled Card (Saffron Theme) */}
                     <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_-5px_rgba(249,115,22,0.15)] border-2 border-[#FED7AA] relative overflow-visible"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FBB201]/10 rounded-bl-[100px]"></div>
                        <h3 className="text-2xl font-bold text-[#EA580C] mb-8 flex items-center gap-3 relative z-10 font-serif">
                            <CheckCircle className="w-8 h-8 text-[#FBB201]" />
                            Meant for Which Age Groups?
                        </h3>
                        <div className="space-y-4 relative z-10">
                            {[
                                { name: "Gopala", age: "3 to 6-year-olds", color: "bg-[#EF4444]" },
                                { name: "Keshava", age: "6 to 9-year-olds", color: "bg-[#F97316]" },
                                { name: "Govinda", age: "9 to 12-year-olds", color: "bg-[#FBB201] text-black"},
                                { name: "Madhava", age: "12 to 15-year-olds", color: "bg-[#84CC16]" }
                            ].map((group, idx) => (
                                <div key={idx} className="flex items-center gap-5 p-4 rounded-2xl bg-[#FFFDF5] hover:bg-white transition-all border border-[#FED7AA] hover:border-[#FBB201] hover:shadow-md cursor-default">
                                    <div className={`w-12 h-12 rounded-full ${group.color} ${group.name === 'Govinda' ? 'text-[#2D0A0A]' : 'text-white'} flex items-center justify-center font-bold text-xl shadow-sm shrink-0`}>
                                        {group.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#2D0A0A] text-lg">{group.name}</h4>
                                        <p className="text-gray-600 font-medium">{group.age}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Highlights - Styled Card (Saffron Theme) */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_-5px_rgba(239,68,68,0.15)] border-2 border-[#FECACA] relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FBB201] to-[#EF4444]"></div>
                        <h3 className="text-2xl font-bold text-[#DC2626] mb-8 flex items-center gap-3 font-serif">
                            <Star className="w-8 h-8 text-[#FBB201] fill-current" />
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
                                <li key={idx} className="flex items-start gap-4 group">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#EF4444] shrink-0 group-hover:bg-[#FBB201] transition-colors" />
                                    <span className="text-[#2D0A0A] font-medium text-lg leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Kids Illustration + Benefits */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
                    <div className="lg:col-span-5 w-full">
                        {/* Vertical Info Poster (Fees, Timings, Venue) - Saffron Textured */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-b from-[#FBB201] via-[#F59E0B] to-[#EA580C] rounded-[2rem] p-1.5 shadow-xl relative"
                        >
                            {/* Inner cream container with texture */}
                            <div className="bg-[#FFFBEB] rounded-[1.7rem] p-6 relative overflow-hidden">
                                
                                {/* Decorative Texture Pattern - Dots */}
                                <div className="absolute inset-0 opacity-[0.03]" style={{
                                    backgroundImage: `radial-gradient(circle, #EA580C 1px, transparent 1px)`,
                                    backgroundSize: '20px 20px'
                                }}></div>
                                
                                {/* Stitched Border Effect */}
                                <div className="absolute inset-3 border-2 border-dashed border-[#F59E0B]/40 rounded-[1.3rem] pointer-events-none"></div>
                                
                                {/* Corner Decorations */}
                                <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-[#EA580C]/30 rounded-tl-lg"></div>
                                <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-[#EA580C]/30 rounded-tr-lg"></div>
                                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-[#EA580C]/30 rounded-bl-lg"></div>
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-[#EA580C]/30 rounded-br-lg"></div>

                                <div className="space-y-5 relative z-10">
                                    {/* Fees */}
                                    <div className="bg-white p-5 rounded-2xl shadow-md border-l-4 border-[#EA580C] hover:shadow-lg transition-shadow">
                                        <h4 className="text-lg font-bold text-[#EA580C] flex items-center gap-2 font-serif mb-3">
                                            <div className="w-7 h-7 bg-[#FBB201] rounded-full flex items-center justify-center shadow-sm">
                                                <IndianRupee className="w-3.5 h-3.5 text-[#7F1D1D]" />
                                            </div>
                                            Admission Fees
                                        </h4>
                                        <p className="text-sm text-gray-500 mb-1">Per Semester:</p>
                                        <div className="flex items-baseline gap-3 mb-3">
                                            <span className="text-lg text-gray-400 line-through">₹ 3000</span>
                                            <span className="text-3xl font-black text-[#2D0A0A]">₹ 2500</span>
                                        </div>
                                        <div className="bg-gradient-to-r from-[#EA580C] to-[#EF4444] text-white text-center py-1.5 rounded-lg font-bold text-xs uppercase tracking-wider">
                                            Special Offer
                                        </div>
                                        <p className="text-[10px] text-gray-500 leading-tight mt-2 text-center">* Includes study material and art & crafts materials.</p>
                                    </div>

                                    {/* Timings */}
                                    <div className="bg-white p-5 rounded-2xl shadow-md border-l-4 border-[#FBB201] hover:shadow-lg transition-shadow">
                                        <h4 className="text-lg font-bold text-[#EA580C] flex items-center gap-2 font-serif mb-3">
                                            <div className="w-7 h-7 bg-[#FBB201] rounded-full flex items-center justify-center shadow-sm">
                                                <Clock className="w-3.5 h-3.5 text-[#7F1D1D]" />
                                            </div>
                                            Timings
                                        </h4>
                                        <p className="text-sm text-gray-600 mb-1">Every Sunday</p>
                                        <p className="text-xl font-black text-[#2D0A0A] mb-3">10:00 am – 12:00 noon</p>
                                        
                                        <div className="pt-3 border-t border-[#FBB201]/30">
                                            <p className="text-[#EA580C] font-bold text-xs uppercase mb-1 flex items-center gap-1">
                                                <Star className="w-3 h-3 fill-current text-[#FBB201]" /> Parent Bonus!
                                            </p>
                                            <p className="text-xs leading-relaxed text-gray-600">
                                                Attend <span className="text-[#EA580C] font-bold">GITA LIFE</span> Course in adjacent hall at <span className="text-[#EF4444] font-black">NO EXTRA COST</span>!
                                            </p>
                                        </div>
                                    </div>

                                    {/* Venue */}
                                    <div className="bg-white p-5 rounded-2xl shadow-md border-l-4 border-[#EF4444] hover:shadow-lg transition-shadow">
                                        <h4 className="text-lg font-bold text-[#EA580C] flex items-center gap-2 font-serif mb-3">
                                            <div className="w-7 h-7 bg-[#FBB201] rounded-full flex items-center justify-center shadow-sm">
                                                <MapPin className="w-3.5 h-3.5 text-[#7F1D1D]" />
                                            </div>
                                            Venue
                                        </h4>
                                        <p className="text-sm leading-relaxed text-gray-700 mb-3">
                                            Dakshina Dwaraka Dham,<br/>
                                            1st Seaward Road, Valmiki Nagar,<br/>
                                            Thiruvanmiyur, Chennai-600041.
                                        </p>
                                        <div className="bg-[#FFFBEB] rounded-lg p-3 border border-[#FBB201]/30">
                                            <p className="text-xs text-[#EA580C] uppercase tracking-wider mb-2 font-bold">Contact Us</p>
                                            <div className="space-y-1">
                                                 <a href="tel:9600330108" className="flex items-center gap-2 text-base font-black text-[#2D0A0A] hover:text-[#EA580C] transition-colors">
                                                    <Phone className="w-4 h-4 text-[#EA580C]" /> 96003 30108
                                                </a>
                                                <a href="mailto:icvk@hkmchennai.org" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#EA580C] transition-colors">
                                                    <Mail className="w-4 h-4 text-[#EA580C]" /> icvk@hkmchennai.org
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="lg:col-span-7">
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-black text-[#2D0A0A] mb-8 font-serif">
                                How Will Your Children <span className="text-[#EF4444]">Benefit</span>?
                            </h3>
                            <div className="space-y-6">
                                {[
                                    { title: "Character Building", desc: "Instills traits like loyalty, obedience, respect, discipline, truth, non-violence, and compassion." },
                                    { title: "Cultural Connection", desc: "Active participation in festivals helps them learn about and appreciate their rich heritage." },
                                    { title: "Confidence & Expression", desc: "Stage performances at the end of the semester to present their learnings and experiences." }
                                ].map((benefit, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#FBB201] hover:shadow-lg transition-all hover:-translate-x-1 group">
                                        <h4 className="text-xl font-bold text-[#EA580C] mb-2 group-hover:text-[#EF4444] transition-colors">{benefit.title}</h4>
                                        <p className="text-gray-600 leading-relaxed font-medium">{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Enrollment Poster Recreation */}
                <div className="relative pt-20 pb-10 max-w-5xl mx-auto">
                    {/* Decorative Top Kid */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-40 md:w-56"
                    >
                        <img src="/assets/activities/icvk/poster_boy_telescope.png" alt="Boy looking" className="w-full h-auto drop-shadow-xl" />
                    </motion.div>

                    {/* Main Signboard Board */}
                    <div className="relative bg-[#FFFBEB] rounded-[3rem] border-8 border-[#FDE68A] shadow-2xl p-8 md:p-12 text-center mt-10 z-10">
                        {/* Stitching Effect */}
                        <div className="absolute inset-4 border-2 border-dashed border-[#F59E0B]/50 rounded-[2.5rem] pointer-events-none"></div>

                        {/* Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative z-10"
                        >
                            <div className="flex justify-center gap-2 mb-4">
                                <Star className="text-[#FBB201] fill-current animate-spin-slow" />
                                <Star className="text-[#EF4444] fill-current animate-spin-slow delay-100" />
                                <Star className="text-[#FBB201] fill-current animate-spin-slow delay-200" />
                            </div>

                            <h3 className="text-4xl md:text-5xl font-black text-[#EA580C] font-handwriting mb-2 transform rotate-2">
                                So, hurry!
                            </h3>
                            <h3 className="text-3xl md:text-5xl font-black text-[#EF4444] font-handwriting mb-8 transform -rotate-2">
                                Enrol your kids Now!!!
                            </h3>

                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 inline-block shadow-inner border border-[#FED7AA] mb-8">
                                <p className="text-[#2D0A0A] font-bold text-lg mb-2">For more details, please contact:</p>
                                <a href="tel:9600330108" className="text-3xl md:text-5xl font-black text-[#2D0A0A] hover:text-[#EF4444] transition-colors block">
                                    96003 30108
                                </a>
                            </div>

                            <div className="border-t-2 border-dashed border-[#F59E0B]/50 my-6 max-w-2xl mx-auto"></div>

                            <h4 className="text-3xl md:text-4xl font-black text-[#3B82F6] font-handwriting mb-4">
                                SPECIAL BONUS!!!
                            </h4>
                            <p className="text-xl md:text-2xl font-bold text-[#2D0A0A] max-w-3xl mx-auto leading-relaxed">
                                While the kids are attending ICVK sessions, <br className="hidden md:block"/>
                                parents can also attend <span className="text-[#EF4444] underline decoration-wavy">GITA LIFE</span> <br className="hidden md:block"/>
                                Foundation Course at the same time, <br className="hidden md:block"/>
                                in an <span className="text-[#FBB201]">adjacent hall</span>, at <span className="bg-[#EF4444] text-white px-2 transform skew-x-12 inline-block">NO EXTRA COST!</span>
                            </p>
                        </motion.div>
                    </div>
                
                    {/* Signboard Holders & Decor */}
                    <div className="absolute -bottom-10 -left-10 w-48 md:w-64 z-20 pointer-events-none hidden md:block">
                        <motion.img 
                            animate={{ rotate: [-2, 2, -2] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            src="/assets/activities/icvk/poster_kids_playing.png" 
                            alt="Kids Playing" 
                            className="w-full h-auto drop-shadow-xl" 
                        />
                    </div>
                    <div className="absolute top-1/2 -right-16 w-32 md:w-48 z-0 opacity-50 pointer-events-none">
                         <div className="w-full h-full bg-[#FBB201] rounded-full blur-[60px]"></div>
                    </div>
                 </div>
            </section>



             {/* 8. Footer Image / Quote */}
             {/* <section className="w-full mt-12 bg-[#E11D48] py-16 relative overflow-hidden"> */}
                {/* Decorative Background Elements */}
                {/* <div className="absolute top-0 left-0 w-full h-4 bg-white/10 skew-y-1"></div> */}
                {/* <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full -mb-16 -mr-16 blur-2xl"></div> */}
                {/* <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"></div> */}

                 {/* <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <Heart className="w-12 h-12 text-white/80 mx-auto mb-6 fill-current animate-pulse-slow" />
                        <h3 className="text-2xl md:text-4xl font-bold text-white leading-snug font-serif italic mb-6">
                            "Our children are a gift given by the mercy of the Lord... They are delicate. Take care of them with love and devotion."
                        </h3>
                        <p className="text-xl text-[#FBB201] font-bold tracking-wider uppercase">
                            - Srila Prabhupada
                        </p>
                    </div>
                 </div> */}
            {/* </section> */}

            <FooterSection />
        </div>
    )
}
