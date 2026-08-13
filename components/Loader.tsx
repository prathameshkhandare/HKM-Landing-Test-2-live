"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) 

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#FFF9E5] via-[#FFF0D4] to-[#FFDEB0] overflow-hidden"
    >
      {/* Background Pattern - Enlarged to cover corners during rotation */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <div className="w-[150vmax] h-[150vmax] opacity-[0.03] bg-[url('/assets/10BlackWhiteMandalaPattern1.jpg')] bg-cover animate-spin-slow mix-blend-multiply mask-radial-faded"></div>
      </div>
      
      {/* Radial Glow Center */}
      <div className="absolute inset-0 bg-radial-gradient from-white/80 to-transparent opacity-60 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6 md:gap-10 p-4 w-full max-w-5xl mx-auto">
        {/* Logo Container - ISKCON - Compact & Centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-64 md:w-80 lg:w-96 flex justify-center"
        >
          {/* Subtle Glow behind logo */}
          <div className="absolute inset-0 bg-white/60 blur-3xl rounded-full transform scale-90 -z-10"></div>
          
          {!imageError ? (
            <Image
              src="/assets/iskcon-logo-updated-transparent.png"
              alt="Hare Krishna Movement Chennai"
              width={600}
              height={240}
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                <span className="text-[#0B1E38] font-bold text-xl">ISKCON CHENNAI</span>
            </div>
          )}
        </motion.div>

        {/* New Content Section: DD Logo + Text - Scaled Down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full px-4"
        >
            {/* DD Logo with Sliding Animation & ORNATE CIRCULAR FRAME */}
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                    duration: 1.2, 
                    ease: "easeOut"
                }}
                className="relative flex-shrink-0 group"
            >
                {/* Decorative Premium Circular Frame - Compact */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-t from-[#B8860B] via-[#FFD700] to-[#B8860B] p-[3px] shadow-[0_8px_25px_rgba(184,134,11,0.4)] ring-2 ring-[#FFF5E1] ring-offset-2 ring-offset-[#FBB201]/20">
                    <div className="w-full h-full rounded-full bg-[#1e2749] flex items-center justify-center overflow-hidden relative border-2 border-[#B8860B]/50">
                         {/* Shine Effect */}
                         <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 left-full animate-shine" />
                        
                        <div className="relative w-16 h-16 md:w-20 md:h-20 transform group-hover:scale-110 transition-transform duration-500 ease-in-out">
                            <Image 
                                src="/dd-logo.png" 
                                alt="Dakshina Dwaraka" 
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Vibrant Text Section - Compact Typography */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col gap-2 text-center md:text-left"
            >
                 {/* Main Heading */}
                <h2 className="text-2xl md:text-4xl font-serif font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#D94F04] via-[#FF8C00] to-[#D94F04] drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
                    Hare Krishna !
                </h2>
                {/* Subtitle with Forced Line Break & Richer Style */}
                <p className="text-[#5D3008] text-base md:text-lg font-serif font-bold leading-snug drop-shadow-sm">
                    Experience the Divine abode of <br className="hidden md:block" />
                    <span className="text-[#A0522D] text-lg md:text-2xl inline-block mt-1 bg-gradient-to-r from-[#8B4513] to-[#A0522D] bg-clip-text text-transparent filter drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
                        Sri Sri Rukhmini Dwarkadhisha
                    </span>
                </p>
                
                {/* Decorative Divider Line */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ delay: 1, duration: 1 }}
                  className="h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-transparent mt-2 rounded-full mx-auto md:mx-0 shadow-sm"
                />
            </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
