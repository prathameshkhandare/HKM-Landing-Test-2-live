"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

/**
 * FloatingDonateButton Component
 * 
 * A mobile-only floating action button (FAB) that appears in the bottom right corner.
 * Designed to provide quick access to the donation page on mobile devices.
 * Uses Framer Motion for a smooth entry animation and subtle pulse effect.
 */
export default function FloatingDonateButton() {
  const pathname = usePathname();

  // Hide the floating donation button on activities, icvk registration, and yatra pages
  if (
    pathname &&
    (pathname.startsWith('/activities') ||
      pathname.includes('icvk') ||
      pathname.includes('kailash-manasarovar-yatra') ||
      pathname.includes('sri-lanka-ramayana-yatra'))
  ) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5 
      }}
      className="fixed bottom-48 right-4 z-[9999] lg:hidden"
    >
      <Link
        href="/donate"
        className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-r from-[#FBB201] via-[#FFD700] to-[#FBB201] text-white font-bold shadow-[0_12px_30px_rgba(251,178,1,0.5)] border border-white/30 active:scale-95 transition-all text-sm uppercase tracking-widest group"
        style={{ fontFamily: "var(--font-manrope)" }}
      >
        {/* Animated Heart Icon */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Heart className="w-5 h-5 fill-white" />
        </motion.div>
        
        <span className="drop-shadow-sm">Donate</span>
        
        {/* Subtle Shine Effect */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
        </div>
      </Link>
    </motion.div>
  )
}
