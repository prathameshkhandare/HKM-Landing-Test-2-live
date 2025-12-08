"use client"

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactSection() {
  return (
    <section className="relative z-10 py-24 px-6 bg-gradient-to-br from-slate-100 to-blue-50 pattern-om">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white/95 backdrop-blur-sm ring-2 ring-[#1B7CB8]/30 p-12 shadow-xl">
          <div className="text-center mb-16">
            <h2 className="heading-2 tracking-tight mb-6 text-balance text-[#3A3A3A]">
              Contact Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-white text-[#3A3A3A] p-8 shadow-lg ring-1 ring-[#E5E5E5] hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="heading-3 mb-6">Send an Inquiry</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E5E5] focus:ring-2 focus:ring-[#1B7CB8] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E5E5] focus:ring-2 focus:ring-[#1B7CB8] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your spiritual interests..."
                  />
                </div>
                <Button className="w-full bg-[#1B7CB8] text-white hover:bg-[#156399] rounded-lg py-3 font-normal text-base shadow-lg">
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <p className="body-large text-[#666666] text-pretty">
                  For questions about our programs, spiritual guidance, or volunteering opportunities in Chennai, please get in touch. We reply within one business day.
                </p>
              </div>

              <div className="rounded-2xl bg-white text-[#3A3A3A] p-6 shadow-lg ring-1 ring-[#E5E5E5]">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://www.elledecoration.vn/wp-content/uploads/2025/03/edam-garden.jpg"
                    alt="Spiritual Guide"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">Spiritual Guide</h4>
                    <p className="text-[#666666]">HKM Chennai</p>
                  </div>
                </div>
                <Button className="w-full bg-[#1B7CB8] text-white hover:bg-[#156399] rounded-lg flex items-center justify-center gap-2 shadow-lg">
                  <Mail className="w-4 h-4" />
                  contact@hkmchennai.org
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
