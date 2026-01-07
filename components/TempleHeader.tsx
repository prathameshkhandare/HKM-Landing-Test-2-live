"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Sparkles } from "lucide-react"

export default function TempleHeader() {
  return (
    <div className="relative w-full overflow-hidden bg-[#2D0A0A] min-h-[600px] flex items-center">
      {/* ISKCON Chennai Logo (Top Left) - REMOVED to avoid double logo (Navbar has one already) */ }
      {/* Background Gradient & Pattern */}
       <div className="absolute inset-0 bg-gradient-to-br from-[#4a0d0d] via-[#701a1a] to-[#ea580c] opacity-90"></div>
       <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.1] bg-repeat animate-pulse-slow"></div>
       
       {/* Divine Rays & Clouds (CSS Simulation) */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1500px] h-[1500px] bg-gradient-radial from-[#FFB81C]/30 to-transparent blur-3xl opacity-40 animate-spin-slow-reverse"></div>
       <div className="absolute inset-0 bg-[url('/assets/fog-overlay.png')] bg-cover opacity-20 mix-blend-screen animate-drift"></div>

       {/* Spinning Sudarshan Chakra - Background Layer */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-15 pointer-events-none">
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-full h-full relative"
            >
                <Image 
                    src="/assets/sudarshan_chakra_transparent.png" 
                    alt="Sudarshan Chakra" 
                    fill
                    className="object-contain"
                />
            </motion.div>
       </div>

       <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              
              {/* Left Content */}
              <div className="w-full md:w-1/2 text-center md:text-left space-y-8 relative">
                   <motion.div 
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8 }}
                   >
                       <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFB81C]/20 rounded-full border border-[#FFB81C]/40 text-[#FFB81C] font-bold text-sm uppercase tracking-widest mb-6 backdrop-blur-sm">
                           <Sparkles size={14} className="animate-spin-slow" /> Vedic Inquiry
                       </span>
                       <h1 className="text-5xl md:text-7xl font-bold font-serif text-white leading-tight drop-shadow-2xl mb-6">
                           Ask <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB81C] to-[#ea580c] drop-shadow-sm">Divine</span> <br/> Questions
                       </h1>
                       <p className="text-lg md:text-xl text-orange-100/90 font-medium leading-relaxed max-w-xl mb-8">
                           "The beginning of spiritual life is to inquire about the Absolute Truth. Clear your doubts with the timeless wisdom of the Vedas."
                       </p>

                       {/* Call to Action / Mantra Badge */}
                       <div className="inline-block relative group cursor-pointer">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#FFB81C] to-[#ea580c] rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-200"></div>
                            <div className="relative flex items-center gap-4 bg-[#2D0A0A] bg-opacity-80 border border-[#FFB81C]/30 px-6 py-3 rounded-lg backdrop-blur-md">
                                <div className="w-10 h-10 relative">
                                    <motion.div 
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    >
                                        <Image src="/assets/sudarshan_chakra_transparent.png" alt="Chakra" fill className="object-contain" />
                                    </motion.div>
                                </div>
                                <div className="text-left">
                                    <p className="text-[#FFB81C] text-xs font-bold uppercase tracking-widest">Always Chant</p>
                                    <p className="text-white text-sm font-serif italic">Hare Krishna Hare Krishna...</p>
                                </div>
                            </div>
                       </div>
                   </motion.div>
              </div>

              {/* Right Image Cluster - Temple + Mantra Poster + Chakra */}
              <div className="w-full md:w-1/2 relative h-[500px] flex items-center justify-center">
                  
                  {/* The Temple (Centerpiece) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative w-full h-full z-10"
                  >
                      {/* Glow Behind Temple */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FFB81C] blur-[120px] opacity-20 animate-pulse"></div>
                      
                      <Image 
                        src="/assets/dakshina-dwaraka-dham.png" 
                        alt="Dakshina Dwaraka Dham" 
                        fill
                        className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] transform hover:scale-105 transition-transform duration-700"
                        priority
                      />
                  </motion.div>

                  {/* Floating Mantra Poster (Top Right) */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -top-10 -right-4 w-48 bg-[#FFF9F0] p-4 rounded-lg shadow-2xl rotate-3 border-4 border-[#FFB81C] z-20 hidden lg:block hover:rotate-0 transition-transform duration-300 transform hover:scale-110 cursor-default"
                  >
                        <div className="text-center border border-[#ea580c] p-2 h-full rounded bg-[url('/assets/mandala-pattern.png')] bg-cover">
                            <p className="text-[#701a1a] font-bold text-xs uppercase tracking-widest mb-2 border-b border-[#ea580c] pb-1">Mahamantra</p>
                            <p className="text-[#2D0A0A] font-serif font-bold text-sm leading-relaxed">
                                Hare Krishna <br/> Hare Krishna <br/> Krishna Krishna <br/> Hare Hare <br/> <span className="text-[#ea580c]">Hare Rama <br/> Hare Rama <br/> Rama Rama <br/> Hare Hare</span>
                            </p>
                        </div>
                  </motion.div>

                  {/* Foreground Floating Particles/Petals */}
                   <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-[#FFB81C] rounded-full opacity-60"
                                initial={{ top: "100%", left: `${Math.random() * 100}%` }}
                                animate={{ top: "-10%", opacity: 0 }}
                                transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeOut", delay: i * 0.5 }}
                            />
                        ))}
                   </div>
              </div>
          </div>
       </div>

       {/* Decorative Bottom Curve */}
       <div className="absolute bottom-0 left-0 w-full h-20 bg-[#FFF9F0] clip-path-curve translate-y-1"></div>
    </div>
  )
}
