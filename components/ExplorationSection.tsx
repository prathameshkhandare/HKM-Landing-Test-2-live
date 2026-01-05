"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ExplorationSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-2">
              EXPLORATION
            </h2>
            <p className="text-xl text-slate-600 italic">
              for every spiritual journey
            </p>
          </motion.div>
        </div>

        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden group">
          <Image
            src="https://hkmtest.vercel.app/assets/Sri-krishna-Janmashtami.jpg"
            alt="Sri Krishna Janmashtami"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">
                Sri Krishna Janmashtami
              </h3>
              <p className="text-white/90 text-lg mb-6 max-w-2xl">
                Explore the spiritual heritage and celebrate the divine appearance of Lord Krishna with grand festivities and deep devotion.
              </p>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/50 px-8 py-3 rounded-full transition-all duration-300">
                Explore Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
