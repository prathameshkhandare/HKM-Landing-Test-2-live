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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0078BF]"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Banner Image or Fallback */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-56 sm:w-72 md:w-80"
        >
          {!imageError ? (
            <Image
              src="/hkmc-banner.svg"
              alt="Hare Krishna Movement Chennai"
              width={200}
              height={200}
              className="w-full h-auto"
              priority
              onError={() => setImageError(true)}
            />
          ) : (
            // Fallback design when image is not available
            <div className="w-full bg-white rounded-lg shadow-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-[#0078BF] text-3xl font-bold mb-2">
                  SRILA PRABHUPADA&apos;S
                </h1>
                <h2 className="text-[#0078BF] text-5xl font-bold mb-2">
                  HARE KRISHNA
                </h2>
                <h3 className="text-[#0078BF] text-3xl font-bold mb-3">
                  MOVEMENT
                </h3>
                <p className="text-[#0078BF] text-2xl font-medium tracking-widest">
                  CHENNAI
                </p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-2">
            <span className="text-white text-lg font-medium">Loading</span>
            <div className="flex gap-1">
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                className="text-white text-lg"
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                className="text-white text-lg"
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                className="text-white text-lg"
              >
                .
              </motion.span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-64 sm:w-72 md:w-80 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.3, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#FBB201] via-white to-[#FBB201] rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
