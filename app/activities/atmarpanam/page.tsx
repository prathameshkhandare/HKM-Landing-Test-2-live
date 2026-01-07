"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import { motion } from "framer-motion";
import { Sparkles, Music, Mic2, Heart, Star } from "lucide-react";

export default function AtmarpanamPage() {
    return (
        <main className="min-h-screen bg-[#FFF9F0] overflow-x-hidden selection:bg-[#FFB81C] selection:text-[#2D0A0A]">
            <Navbar />

            {/* Hero Section - Yuga Dharma Style */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-[#2D0A0A]">
                 {/* Background - Saffron/Gold Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#701a1a] via-[#ea580c] to-[#b45309] opacity-90"></div>
                
                {/* Texture Overlays */}
                <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow"></div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 49px, #FFB81C 50px)' }}></div>

                {/* Central Divine Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFB81C] rounded-full blur-[120px] opacity-20 animate-pulse"></div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Header Context */}
                         <div className="mb-4">
                            <h2 className="text-sm md:text-lg font-bold text-[#2D0A0A] bg-[#FFB81C] px-4 py-1 rounded-full inline-block uppercase tracking-widest shadow-lg">Nurturing Cultural Talent</h2>
                         </div>

                        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] font-serif">
                             Atmarpanam
                        </h1>
                        
                        {/* Ornamental Divider */}
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="h-[2px] w-16 bg-gradient-to-l from-[#FFB81C] to-transparent"></div>
                            <div className="w-3 h-3 rotate-45 border-2 border-[#FFB81C]"></div>
                            <div className="h-[2px] w-16 bg-gradient-to-r from-[#FFB81C] to-transparent"></div>
                        </div>

                        <p className="text-xl md:text-3xl text-[#ffe8cc] font-light leading-relaxed max-w-4xl mx-auto italic font-serif">
                            "Offering Mind, Body & Spirit"
                        </p>
                    </motion.div>
                </div>
            </section>

             {/* Split Layout Section */}
             <section className="py-16 md:py-24 container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    
                    {/* LEFT COLUMN: Poster Card (Sticky) */}
                    <div className="w-full lg:w-[45%] lg:sticky lg:top-32">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#2D0A0A] rounded-[2.5rem] border-[6px] border-double border-[#FFB81C] p-4 shadow-2xl relative overflow-hidden group"
                        >
                             {/* Decorative Corners */}
                             <div className="absolute top-4 left-4 w-16 h-16 border-t-[3px] border-l-[3px] border-[#FFB81C] rounded-tl-2xl opacity-60 pointer-events-none"></div>
                             <div className="absolute bottom-4 right-4 w-16 h-16 border-b-[3px] border-r-[3px] border-[#FFB81C] rounded-br-2xl opacity-60 pointer-events-none"></div>

                            {/* Image Container */}
                            <div className="relative rounded-[2rem] overflow-hidden shadow-inner border border-[#FFB81C]/20">
                                <img 
                                    src="/assets/activities/atmarpanam-poster.png" 
                                    alt="Atmarpanam Poster" 
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2D0A0A] via-transparent to-transparent opacity-60"></div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Information Content */}
                    <div className="w-full lg:w-[55%] pt-4 md:pt-8 bg-white/50 p-8 rounded-[2rem] border border-[#FFB81C]/20 shadow-xl backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-[#FFB81C]/20 rounded-full">
                                    <Star className="text-[#ea580c] w-6 h-6 fill-[#ea580c]" />
                                </div>
                                <span className="text-[#ea580c] font-bold uppercase tracking-widest text-sm">Celebrating Heritage</span>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-bold text-[#2D0A0A] font-serif mb-8 leading-tight">
                                India's Rich <span className="text-[#ea580c] italic">Cultural Heritage</span>
                            </h2>
                            
                            <div className="prose prose-lg text-gray-700 mb-10">
                                <p className="mb-6 leading-relaxed">
                                    <strong className="text-[#2D0A0A] text-xl">Atmarpanam</strong> is a vibrant initiative where our talented young participants showcase their skills in a variety of cultural arts.
                                </p>
                                <p className="mb-6 leading-relaxed border-l-4 border-[#FFB81C] pl-6 py-2 bg-[#fffbf2] rounded-r-xl">
                                    This event is a testament to the hard work and passion of our young artists, who are committed to nurturing positive values and spreading awareness of our cultural traditions.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 not-prose">
                                    {[
                                        { icon: Music, text: "Classical Dance" },
                                        { icon: Mic2, text: "Singing & Prayers" },
                                        { icon: Heart, text: "Drama & Theater" },
                                        { icon: Sparkles, text: "Cultural Values" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-[#FFB81C]/20 hover:border-[#FFB81C] hover:shadow-md transition-all group cursor-default">
                                            <div className="p-3 bg-[#FFF9F0] rounded-lg group-hover:bg-[#FFB81C] transition-colors">
                                                 <item.icon className="w-6 h-6 text-[#ea580c] group-hover:text-[#2D0A0A] transition-colors" />
                                            </div>
                                            <span className="font-bold text-[#2D0A0A] font-serif text-lg">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Quote Box */}
                            <div className="mt-12 bg-gradient-to-r from-[#2D0A0A] to-[#4a0e0e] p-8 rounded-2xl shadow-xl relative overflow-hidden text-center text-white">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB81C] rounded-full blur-[60px] opacity-20"></div>
                                <Sparkles className="w-8 h-8 text-[#FFB81C] mx-auto mb-4 opacity-80" />
                                <p className=" text-white italic text-xl font-serif font-light leading-relaxed opacity-90">
                                    "Preserving our culture means preserving our identity. Atmarpanam is a step towards keeping our traditions alive for future generations."
                                </p>
                            </div>

                        </motion.div>
                    </div>

                </div>
             </section>

             {/* Footer CTA Section */}
             <section className="py-20 px-6 bg-[#2D0A0A] text-white relative overflow-hidden border-t-4 border-[#FFB81C]">
                 <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-spin-slow" style={{ animationDuration: '60s' }}></div>
                  <div className="container mx-auto text-center relative z-10 max-w-4xl">
                      <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                      >
                          <h3 className="text-3xl md:text-6xl font-bold font-serif mb-6 text-white tracking-wide">Join the Celebration</h3>
                          <div className="h-1 w-24 bg-[#FFB81C] mx-auto mb-8 rounded-full"></div>
                          <p className="text-xl md:text-2xl text-[#ffe8cc] mb-8 leading-relaxed font-light">
                              Witness the dedication and talent of our youth as they offer their art to the Divine.
                          </p>
                      </motion.div>
                  </div>
              </section>

            <Footer />
        </main>
    )
}
