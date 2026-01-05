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
    }, 1500) // Reduced from 2500ms to 1500ms

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
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('/assets/10BlackWhiteMandalaPattern1.jpg')] bg-cover animate-spin-slow pointer-events-none mix-blend-multiply"></div>
      
      {/* Radial Glow Center */}
      <div className="absolute inset-0 bg-radial-gradient from-white/80 to-transparent opacity-60 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center gap-10">
        {/* Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-96 md:w-[32rem]"
        >
          {/* Subtle Glow behind logo */}
          <div className="absolute inset-0 bg-white/60 blur-3xl rounded-full transform scale-90 -z-10"></div>
          
          {!imageError ? (
            <Image
              src="/assets/iskcon-logo-main-v2.png"
              alt="Hare Krishna Movement Chennai"
              width={600}
              height={240}
              className="w-full h-auto object-contain drop-shadow-xl"
              priority
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                <span className="text-[#0B1E38] font-bold text-xl">ISKCON CHENNAI</span>
            </div>
          )}
        </motion.div>

        {/* Loading Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#B8860B] text-lg font-serif font-medium tracking-widest uppercase">Initializing</span>
            <div className="flex gap-1">
              {[0, 0.2, 0.4].map((delay, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay }}
                  className="w-1.5 h-1.5 bg-[#B8860B] rounded-full"
                />
              ))}
            </div>
          </div>

          {/* Premium Progress Bar */}
          <div className="w-64 h-1.5 bg-[#B8860B]/20 rounded-full overflow-hidden backdrop-blur-sm ring-1 ring-[#B8860B]/10">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#FBB201] via-[#D3AA00] to-[#FBB201] shadow-[0_0_10px_rgba(251,178,1,0.5)]"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
