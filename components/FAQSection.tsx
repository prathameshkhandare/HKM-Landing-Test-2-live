"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "What is the Bhagavad Gita about?",
    answer:
      "The Bhagavad Gita is a sacred Hindu scripture that presents a conversation between Prince Arjuna and Lord Krishna. It teaches timeless principles of dharma, spiritual wisdom, and the path to self-realization through various forms of yoga.",
  },
  {
    question: "How can I join the weekly sessions?",
    answer:
      "Our weekly Bhagavad Gita sessions are held every Sunday evening from 5:00 to 7:00 PM at our center in Chennai. You can also join our online Zoom sessions. Simply register through our website or contact us directly.",
  },
  {
    question: "Do I need prior knowledge of Hindu philosophy?",
    answer:
      "No prior knowledge is required. Our sessions are designed for seekers at all levels. We provide clear explanations, practical applications, and encourage questions to help everyone understand the profound teachings.",
  },
  {
    question: "Are the sessions free to attend?",
    answer:
      "Yes, all our Bhagavad Gita sessions, cultural programs, and spiritual activities are offered free of charge. We believe spiritual knowledge should be accessible to all sincere seekers regardless of their financial situation.",
  },
]

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section className="relative z-10 py-24 px-6 bg-white pattern-floral">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50 backdrop-blur-sm ring-2 ring-blue-200 p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Title and Description */}
            <div>
              <h2 className="heading-2 tracking-tight mb-6 text-balance text-[#3A3A3A]">
                Frequently Asked Questions
              </h2>
              <p className="body-large text-[#666666] text-pretty">
                Everything you need to know about joining our spiritual community and participating in our programs in Chennai.
              </p>
            </div>

            {/* Right Column - FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl bg-white ring-1 ring-[#E5E5E5] overflow-hidden hover:ring-[#1B7CB8]/30 hover:shadow-lg transition-all duration-300"
                >
                  <motion.button
                    onClick={() => toggleFaq(index)}
                    whileHover={{ x: 5 }}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-[#FFF9F0]/50 transition-colors"
                  >
                    <h3 className="heading-3 pr-4 text-[#3A3A3A]">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0 text-[#1B7CB8]" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0 text-[#1B7CB8]" />
                      )}
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="body-regular text-[#666666]">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
