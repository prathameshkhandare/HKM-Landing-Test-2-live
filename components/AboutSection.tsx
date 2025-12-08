"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="relative z-10 py-24 px-6 bg-slate-50 pattern-peacock">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white/95 backdrop-blur-sm ring-2 ring-blue-200 p-12 shadow-xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="heading-2 tracking-tight mb-6 text-balance text-[#3A3A3A]">
              About Us
            </h2>
            <p className="body-large text-[#666666] max-w-3xl mx-auto text-pretty">
              The Hare Krishna Movement, Chennai
            </p>
          </div>

          {/* About Content */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="body-large text-[#666666] mb-8">
              The Hare Krishna Movement Chennai (HKM Chennai) is a spiritual organization that aims to gift human society an opportunity for a life of happiness, good health, peace of mind and all good qualities through God Consciousness.
            </p>
            <p className="body-large text-[#666666]">
              Registered as a trust in 2010, it is spiritually mentored by ISKCON Bangalore. Following in the footsteps of Srila Prabhupada, the devotees at HKM Chennai conduct their activities based on the teachings of the Bhagavad Gita and the Vedas.
            </p>
          </div>

          {/* Founder Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group rounded-2xl bg-white ring-1 ring-[#E5E5E5] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-lg mb-6"
              >
                <img
                  src="https://www.elledecoration.vn/wp-content/uploads/2025/03/edam-garden.jpg"
                  alt="His Divine Grace Srila Prabhupada"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
              <div className="bg-[#E8725C]/10 px-3 py-1 rounded-full text-sm text-[#E8725C] font-medium mb-4 inline-block">
                Humble dedication
              </div>
              <h3 className="heading-3 mb-4 text-[#3A3A3A] group-hover:text-[#E8725C] transition-colors duration-300">His Divine Grace Srila Prabhupada</h3>
              <p className="body-regular text-[#666666]">
                His Divine Grace Srila Prabhupada is the Acharya or Diksha Guru of the Hare Krishna Movement. He worked relentlessly to impart knowledge, enlighten minds and establish the Hare Krishna movement globally.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.03, x: 10 }}
                className="rounded-2xl bg-white ring-1 ring-[#E5E5E5] p-6 shadow-sm hover:shadow-xl hover:ring-[#1B7CB8]/30 transition-all duration-300"
              >
                <h4 className="heading-3 mb-3 text-[#1B7CB8]">Our Mission</h4>
                <p className="body-regular text-[#666666]">
                  To offer society the opportunity to lead a life of true happiness, good health, peace of mind, and noble qualities—nurtured through God consciousness.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.03, x: 10 }}
                className="rounded-2xl bg-white ring-1 ring-[#E5E5E5] p-6 shadow-sm hover:shadow-xl hover:ring-[#1B7CB8]/30 transition-all duration-300"
              >
                <h4 className="heading-3 mb-3 text-[#1B7CB8]">Our Activities</h4>
                <p className="body-regular text-[#666666]">
                  We organize Chennai as a spiritual center from every point of view, culturally, scientifically, and philosophically through spiritual and social initiatives.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
