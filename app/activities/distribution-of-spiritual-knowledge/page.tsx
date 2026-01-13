"use client"

import React from "react"
import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { BookOpen, Users, Truck, Heart, ArrowRight, Quote, Sparkles, Scroll } from "lucide-react"

export default function DistributionOfKnowledgePage() {
    return (
        <main className="min-h-screen bg-[#FFF9F0] font-sans selection:bg-[#FFB81C] selection:text-black">
            <NavbarDemo />

            {/* Hero Section - Classic & Stately (Enhanced) */}
            <section className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-[#2D0A0A]">
                {/* Background - Deep Royal Maroon (Knowledge/Books) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D0A0A] via-[#4a0e0e] to-[#1a0505] opacity-95"></div>
                
                {/* Animated Background Textures */}
                <div className="absolute inset-0 opacity-10 animate-spin-slow" style={{ backgroundImage: 'url("/assets/mandala-pattern.png")', backgroundSize: '800px', backgroundPosition: 'center' }}></div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "50px 50px" }}></div>
                
                {/* Spiritual Mantra Texture - Subtle */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(120deg, #FFB81C 0px, transparent 1px, transparent 20px)' }}></div>

                {/* Floating Spiritual Particles */}
                 <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFB81C] rounded-full opacity-40 animate-ping-slow"></div>
                    <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#ea580c] rounded-full opacity-30 animate-pulse-slow delay-700"></div>
                    <div className="absolute top-1/2 left-10 w-1 h-1 bg-white rounded-full opacity-50 animate-float-up delay-1000"></div>
                    <div className="absolute bottom-10 right-10 w-2 h-2 bg-[#FFB81C] rounded-full opacity-40 animate-ping-slow delay-500"></div>
                 </div>
                
                {/* Divine Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFB81C] rounded-full blur-[150px] opacity-10 pointer-events-none animate-pulse-slow"></div>

                <div className="container mx-auto text-center relative z-10 pt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Decorative Icon Container */}
                        <div className="flex justify-center mb-8">
                             <div className="w-24 h-24 bg-[#FFB81C]/10 rounded-full flex items-center justify-center border-2 border-[#FFB81C] shadow-[0_0_30px_rgba(255,184,28,0.3)] backdrop-blur-md relative transform hover:scale-110 transition-transform duration-500">
                                <div className="absolute inset-2 border border-[#FFB81C]/50 rounded-full animate-spin-slow-reverse"></div>
                                <BookOpen size={40} className="text-[#FFB81C]" />
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                            Distribution of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB81C] via-[#ffe8cc] to-[#FFB81C] font-serif italic">Spiritual Knowledge</span>
                        </h1>
                        
                        {/* Ornate Divider */}
                        <div className="flex items-center justify-center gap-4 mb-8 opacity-90">
                            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-[#ea580c]"></div>
                            <div className="w-3 h-3 rotate-45 bg-[#FFB81C] shadow-[0_0_10px_#FFB81C]"></div>
                            <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-[#ea580c]"></div>
                        </div>

                        <p className="text-xl md:text-2xl text-[#ffe8cc] max-w-3xl mx-auto leading-relaxed font-light font-serif italic drop-shadow-md">
                            "Books are the basis."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Brihad Mridanga Section - Minimalist Elegant Layout */}
            <section className="py-24 px-6 container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        {/* Classic Image Frame */}
                        <div className="relative p-3 bg-white shadow-xl rounded-sm transform rotate-1 hover:rotate-0 transition-transform duration-700 mx-auto max-w-lg">
                            <div className="border border-[#701a1a]/10 p-1">
                                <img 
                                    src="/assets/activities/distribution-of-spiritual-knowledge/srila-prabhupada-books.jpg" 
                                    alt="Srila Prabhupada with Spiritual Books" 
                                    className="w-full h-auto"
                                />
                            </div>
                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#ea580c] -translate-x-1 -translate-y-1"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#ea580c] translate-x-1 translate-y-1"></div>
                        </div>
                        <p className="text-center mt-6 text-[#701a1a] font-serif italic text-lg">His Divine Grace A.C. Bhaktivedanta Swami Prabhupada</p>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <Scroll size={20} className="text-[#ea580c]" />
                                <span className="text-[#ea580c] font-bold tracking-widest text-xs uppercase">The Greater Drum</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#701a1a] font-serif leading-tight">
                                Brihad Mridanga
                            </h2>
                        </div>
                        
                        <div className="space-y-6 text-lg text-[#5a5a5a] leading-relaxed">
                            <p>
                                Srila Prabhupada presents Krishna consciousness in a very simple and practical way in his books. His spiritual master, <strong className="text-[#701a1a]">Srila Bhaktisiddhanta Sarasvati Thakur</strong>, referred to the distribution of Krishna conscious books as <em>Brihad Mridanga</em>, the greater drum.
                            </p>
                            <div className="pl-6 border-l-4 border-[#FFB81C] bg-[#FFB81C]/5 py-4 pr-4 rounded-r-lg">
                                <p className="italic text-[#701a1a]">
                                    "A mridanga (drum) can be heard only within a certain radius, but the 'Brihad Mridanga' of books can go far and wide, crossing oceans and continents to enlighten people everywhere."
                                </p>
                            </div>
                            <p>
                                Instructed to print books whenever funds were available, Srila Prabhupada wanted these books distributed in every town and village.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Our Activities Grid - Clean & Consistent */}
            <section className="py-24 px-6 bg-[#fffbf5] relative border-y border-[#FFB81C]/20">
                 {/* Subtle Background Ornament */}
                 <div className="absolute top-0 left-0 w-64 h-64 opacity-5 pointer-events-none">
                     <svg viewBox="0 0 200 200" fill="#FFB81C"><path d="M100 0 C100 0 100 100 200 100 C100 100 100 200 100 200 C100 200 0 200 0 100 C0 100 0 0 100 0 Z"/></svg>
                 </div>

                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#701a1a] mb-4 font-serif">Spreading the Message</h2>
                         <div className="w-24 h-1 bg-[#ea580c] mx-auto rounded-full mb-6"></div>
                        <p className="text-[#5a5a5a] max-w-2xl mx-auto text-lg">
                           HKM Chennai congregation and Youth club perform book distribution of Vedic literature on weekends, special occasions, and during festivals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                img: "/assets/activities/distribution-of-spiritual-knowledge/book-van-crowd.png",
                                title: "Traveling Sankirtan",
                                desc: "Reaching out to the masses with our mobile book van."
                            },
                            {
                                img: "/assets/activities/distribution-of-spiritual-knowledge/book-stall.png",
                                title: "Book Stalls",
                                desc: "Setting up stalls at public places and festivals."
                            },
                            {
                                img: "/assets/activities/distribution-of-spiritual-knowledge/book-van-team.png",
                                title: "Dedicated Teams",
                                desc: "Our youth club and congregation members on mission."
                            },
                            {
                                img: "/assets/activities/distribution-of-spiritual-knowledge/book-distribution-1.png",
                                title: "Personal Outreach",
                                desc: "Distribution on streets and door-to-door."
                            }
                        ].map((item, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl overflow-hidden shadow-lg border border-[#e5e5e5] hover:shadow-2xl hover:border-[#FFB81C]/50 transition-all duration-300 group"
                            >
                                <div className="h-56 overflow-hidden relative">
                                    <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-[#2D0A0A]/10 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-[#701a1a] mb-2 group-hover:text-[#ea580c] transition-colors">{item.title}</h3>
                                    <p className="text-[#5a5a5a] text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action - Premium & Ornate (Divine Invitation) */}
            <section className="py-24 px-6 container mx-auto relative">
                 {/* Background Glow */}
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-[#ea580c] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative group max-w-5xl mx-auto"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#FFB81C] via-[#ea580c] to-[#FFB81C] rounded-[2rem] blur opacity-30 group-hover:opacity-60 transition duration-1000 animate-gradient-slow"></div>
                    
                    <div className="relative bg-[#2D0A0A] rounded-[2rem] p-2 overflow-hidden shadow-2xl">
                        <div className="relative border border-[#FFB81C]/30 rounded-[1.8rem] p-8 md:p-14 overflow-hidden bg-[url('/assets/mandala-pattern.png')] bg-cover bg-center">
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-[#2D0A0A]/90 backdrop-blur-sm"></div>

                            {/* Ornate Frame Corners */}
                            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#FFB81C] rounded-tl-2xl m-4 opacity-60"></div>
                            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#FFB81C] rounded-tr-2xl m-4 opacity-60"></div>
                            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#FFB81C] rounded-bl-2xl m-4 opacity-60"></div>
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#FFB81C] rounded-br-2xl m-4 opacity-60"></div>

                            <div className="relative z-10 text-center space-y-8">
                                <div className="inline-block p-4 bg-[#FFB81C]/10 rounded-full mb-2 border border-[#FFB81C]/30 shadow-[0_0_15px_rgba(255,184,28,0.2)]">
                                    <Quote className="w-10 h-10 text-[#FFB81C]" />
                                </div>
                                
                                <h2 className="text-4xl md:text-6xl font-bold font-serif leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFB81C] via-[#ffe8cc] to-[#FFB81C] drop-shadow-sm">
                                    Join the Mission of Compassion
                                </h2>
                                
                                <div className="space-y-6 text-white text-lg leading-relaxed max-w-3xl mx-auto ">
                                    <p className="text-white">
                                        The books such as <span className="text-[#FFB81C] font-serif italic">Bhagavad-Gita</span> and <span className="text-[#FFB81C] font-serif italic">Śrīmad-Bhāgavatam</span> are translated by ISKCON Founder Acharya His Divine Grace A.C. Bhaktivedanta Swami Prabhupada.
                                    </p>
                                    <p className="font-medium px-6 py-2 border-y border-[#FFB81C]/20 inline-block bg-[#FFB81C]/5" style={{ color: '#ffffff' }}>
                                        If you are interested to buy the books or want to join the Book Distribution Teams, please contact us.
                                    </p>
                                </div>

                                <div className="pt-6">
                                    <a 
                                        href="mailto:connect@hkmchennai.org" 
                                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FFB81C] to-[#ea580c] text-white font-bold px-10 py-4 rounded-full hover:shadow-[0_0_25px_rgba(255,184,28,0.6)] hover:-translate-y-1 transition-all transform uppercase tracking-wide text-sm border border-white/20 group-hover:scale-105"
                                    >
                                        <Users size={20} className="fill-white" /> 
                                        <span>Contact Us Today</span>
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <FooterSection />
        </main>
    )
}
