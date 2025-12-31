"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { Sparkles, Music, Mic2, Heart, Star } from "lucide-react"

export default function AtmarpanamPage() {
    return (
        <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#FBB201] selection:text-white relative">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-[#001E36] text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('/assets/10BlackWhiteMandalaPattern1.jpg')] bg-cover animate-pulse-slow"></div>
                
                <div className="container mx-auto text-center relative z-10 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl"
                    >
                         {/* Header Context */}
                         <div className="mb-6">
                            <h2 className="text-xl md:text-2xl font-serif text-[#FBB201] tracking-wide mb-2 uppercase">Nurturing Talent in Cultural Traditions</h2>
                         </div>

                        <div className="relative inline-block my-4">
                            <h1 className="text-5xl md:text-8xl font-bold text-[#FBB201] mb-4 font-serif tracking-tight drop-shadow-2xl">
                                ATMARPANAM
                            </h1>
                            <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-[#FBB201] to-transparent rounded-full"></div>
                        </div>

                        <p className="text-2xl md:text-4xl text-white/90 max-w-4xl mx-auto leading-relaxed font-serif italic mt-6 mb-8">
                            Offering Mind, Body & Spirit
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6 container mx-auto">
                <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                     {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                         <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FBB201]/30 transform hover:scale-[1.01] transition-transform duration-500 bg-white"
                        >
                            <img 
                                src="/assets/activities/atmarpanam-poster.png" 
                                alt="Atmarpanam Poster" 
                                className="w-full h-auto object-cover"
                            />
                            {/* Overlay Gradient */}
                             <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block p-4 bg-[#001E36]/10 rounded-full mb-8">
                                <Star className="w-10 h-10 text-[#001E36]" />
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-bold text-[#0078BF] font-serif mb-8 leading-tight">
                                Celebrating India's <span className="text-[#FBB201]">Rich Heritage</span>
                            </h2>
                            
                            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                <p>
                                    <strong className="text-[#001E36]">Atmarpanam</strong> is a vibrant initiative where our talented young participants showcase their skills in a variety of cultural arts.
                                </p>
                                <p>
                                    This event is a testament to the hard work and passion of our young artists, who are committed to nurturing positive values and spreading awareness of our cultural traditions.
                                </p>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="p-2 bg-[#FBB201]/10 rounded-lg">
                                            <Music className="w-6 h-6 text-[#FBB201]" />
                                        </div>
                                        <span className="font-bold text-[#001E36]">Classical Dance</span>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="p-2 bg-[#FBB201]/10 rounded-lg">
                                            <Mic2 className="w-6 h-6 text-[#FBB201]" />
                                        </div>
                                        <span className="font-bold text-[#001E36]">Singing & Prayers</span>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="p-2 bg-[#FBB201]/10 rounded-lg">
                                            <Heart className="w-6 h-6 text-[#FBB201]" />
                                        </div>
                                        <span className="font-bold text-[#001E36]">Drama & Theater</span>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="p-2 bg-[#FBB201]/10 rounded-lg">
                                            <Sparkles className="w-6 h-6 text-[#FBB201]" />
                                        </div>
                                        <span className="font-bold text-[#001E36]">Cultural values</span>
                                    </div>
                                </div>
                            </div>

                             <div className="mt-10 bg-[#FFF9F0] border-l-4 border-[#FBB201] p-8 rounded-r-2xl shadow-sm">
                                <p className="text-gray-800 italic text-xl font-serif">
                                    "Preserving our culture means preserving our identity. Atmarpanam is a step towards keeping our traditions alive for future generations."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

             {/* Footer CTA Section */}
             <section className="py-20 px-6 bg-[#001E36] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[url('/assets/10BlackWhiteMandalaPattern1.jpg')] bg-cover"></div>
                 <div className="container mx-auto text-center relative z-10 max-w-4xl">
                     <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                     >
                         <h3 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-[#FBB201]">Join the Celebration</h3>
                         <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                             Witness the dedication and talent of our youth as they offer their art to the Divine.
                         </p>
                     </motion.div>
                 </div>
             </section>

            <FooterSection />
        </main>
    )
}
