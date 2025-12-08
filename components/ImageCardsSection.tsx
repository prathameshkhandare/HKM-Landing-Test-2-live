"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const cards = [
  {
    id: 1,
    title: "Magazine",
    description: "Vaikuntha Varthai is a quarterly newsletter published by HKMC",
    image: "/assets/Magazine-pic.jpg",
    url: "/magazine",
  },
  {
    id: 2,
    title: "Activities",
    description: "Activities including Spiritual Discourses, Youth Empowerment, Distribution of Spiritual Knowledge",
    image: "/assets/activities-pic.JPG",
    url: "/activities",
  },
  {
    id: 3,
    title: "Donations",
    description: "There are many ways to push for much-needed reforms",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop",
    url: "/donate",
  },
  {
    id: 4,
    title: "Lectures",
    description: "The enlighten Spiritual Discourses for Srimad Bhagavad-Gita and Bhagavatam",
    image: "/assets/Lecture-pic.JPG",
    url: "/lectures",
  },
]

export default function ImageCardsSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <section className="relative z-10 py-8 sm:py-12 md:py-16 bg-white overflow-x-hidden overflow-y-hidden">
      {/* Mandala pattern backgrounds - removed for performance */}
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 px-4"
        >
          <h2 className="heading-2 tracking-tight text-slate-800 mb-3 sm:mb-4">
            DISCOVER
          </h2>
          <p className="body-large text-slate-600">Explore our offerings</p>
        </motion.div>

        {/* Mobile: Horizontal scroll, Tablet: 2 cols, Desktop: 4 cols */}
        <div className="flex overflow-x-auto overflow-y-hidden gap-4 px-4 sm:px-6 pb-4 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
              className={`group relative h-[420px] sm:h-[480px] w-[85vw] sm:w-auto flex-shrink-0 snap-center rounded-xl sm:rounded-2xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer ${
                activeCard === card.id ? 'shadow-2xl sm:scale-[1.02]' : 'sm:hover:shadow-2xl'
              }`}
            >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading={index < 2 ? "eager" : "lazy"}
                    width="420"
                    height="480"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Gradient Overlay (always visible) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Dark Overlay - Active on tap/hover */}
                <div className={`absolute inset-0 transition-all duration-300 ${
                  activeCard === card.id 
                    ? 'bg-black/70 backdrop-blur-sm' 
                    : 'bg-black/0 backdrop-blur-0 md:group-hover:bg-black/70 md:group-hover:backdrop-blur-sm'
                }`} />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 z-10">
                  {/* Title (always visible) */}
                  <h3 className={`heading-3 text-white transition-all duration-300 ${
                    activeCard === card.id ? 'mb-3 sm:mb-4' : 'mb-2 md:group-hover:mb-3 md:group-hover:mb-4'
                  }`}>
                    {card.title}
                  </h3>

                  {/* Description and Button (visible on tap/hover) */}
                  <div className={`overflow-hidden transition-all duration-500 ease-out ${
                    activeCard === card.id 
                      ? 'max-h-48 opacity-100' 
                      : 'max-h-0 opacity-0 md:group-hover:max-h-48 md:group-hover:opacity-100'
                  }`}>
                    <p className="body-regular text-white mb-4 leading-relaxed">
                      {card.description}
                    </p>
                    <Link href={card.url}>
                      <button className="inline-flex items-center gap-2 bg-white text-[#1B7CB8] px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 mb-2">
                        Explore Now
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
