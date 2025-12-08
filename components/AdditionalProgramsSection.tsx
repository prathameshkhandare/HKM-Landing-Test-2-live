"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function AdditionalProgramsSection() {
  return (
    <section className="relative z-10 py-24 px-6 bg-gradient-to-br from-[#1B7CB8]/10 to-blue-100 pattern-mandala">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white/95 backdrop-blur-sm ring-2 ring-[#1B7CB8]/30 p-12 shadow-xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-[#3A3A3A]">
              More at HKM Chennai
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { num: "01.", title: "Anna-daan Program", desc: "Extend support for our free food distribution initiative bringing nourishment to those in need across Chennai.", color: "text-[#1B7CB8]", ring: "hover:ring-[#1B7CB8]/30" },
              { num: "02.", title: "House Kirtan", desc: "Host kirtan and katha at your home, inviting Sadhus to create a sacred atmosphere for your family and community.", color: "text-[#FFB81C]", ring: "hover:ring-[#FFB81C]/30" },
              { num: "03.", title: "Dham Yatra", desc: "Join Tirth Yatra at sacred places like Vrindavan, Mayapur, Dwarka, Srirangam and experience divine pilgrimage.", color: "text-[#E8725C]", ring: "hover:ring-[#E8725C]/30" },
              { num: "04.", title: "Festivals", desc: "Participate in upcoming festival celebrations including Janmashtami, Radhastami, and other sacred occasions.", color: "text-[#1B7CB8]", ring: "hover:ring-[#1B7CB8]/30" }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group rounded-2xl bg-white ring-1 ring-[#E5E5E5] p-8 h-80 flex flex-col shadow-sm hover:shadow-2xl transition-all duration-500 ${program.ring}`}
              >
                <div className="flex-1">
                  <motion.div 
                    className={`text-3xl font-bold ${program.color} mb-4`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {program.num}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 text-[#3A3A3A] group-hover:text-[#1B7CB8] transition-colors duration-300">{program.title}</h3>
                  <p className="text-[#666666] leading-relaxed text-sm group-hover:text-[#3A3A3A] transition-colors duration-300">
                    {program.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Check Availability Button */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-[#1B7CB8] text-white hover:bg-[#156399] rounded-full px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                Join Our Programs
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
