"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Music, Calendar, MessageCircle, Sun, ArrowRight } from "lucide-react"
import Image from "next/image"

const ACTIVITIES = [
  {
    id: 1,
    title: "Cultural Festival",
    description: "Celebrating heritage with great pomp. Immerse yourself in the vibrant colors, music, and traditions of our rich spiritual culture.",
    image: "/assets/cultutral-festival.JPG",
    icon: Music,
  },
  {
    id: 2,
    title: "Sunday Retreats",
    description: "Make your holiday a holy day. A unique program to surcharge your week with spiritual energy, wisdom, and prasadam.",
    image: "/assets/Sunday-retreat.jpg",
    icon: Sun,
  },
  {
    id: 3,
    title: "Yuga Dharma",
    description: "Congregational chanting of the holy names. Experience the transformative power of the Hare Krishna mantra in community.",
    image: "/assets/Yugadharma.jpg",
    icon: Calendar,
  },
  {
    id: 4,
    title: "Spiritual Inquiry",
    description: "Ask a question and get answers. Engage in deep philosophical discussions and find clarity on your spiritual journey.",
    image: "/assets/Lecture-pic.JPG",
    icon: MessageCircle,
  },
]

export default function ActivitiesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0078BF] mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            DIVINE ENGAGEMENT
          </h2>
          <p
            className="text-lg text-gray-600 font-medium max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Discover the joy of devotion through our diverse programs.
          </p>
          <div className="w-24 h-1 bg-[#FBB201] mx-auto rounded-full mt-6" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">

          {/* Left Column: The Menu (Vertical List) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4">
            {ACTIVITIES.map((activity, index) => (
              <div
                key={activity.id}
                className={`relative pl-8 py-6 cursor-pointer transition-all duration-300 group border-l-4 ${index === activeIndex
                    ? "border-[#FBB201]"
                    : "border-transparent hover:border-gray-200"
                  }`}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="flex items-center gap-4 mb-2">
                  <activity.icon
                    size={24}
                    className={`transition-colors duration-300 ${index === activeIndex ? "text-[#FBB201]" : "text-gray-400 group-hover:text-gray-600"
                      }`}
                  />
                  <h3
                    className={`text-2xl md:text-3xl font-bold transition-all duration-300 ${index === activeIndex
                        ? "text-[#0078BF] scale-105 origin-left"
                        : "text-gray-400 group-hover:text-gray-600"
                      }`}
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {activity.title}
                  </h3>
                </div>

                <AnimatePresence>
                  {index === activeIndex && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p
                        className="text-gray-600 text-lg leading-relaxed mt-2"
                        style={{ fontFamily: "var(--font-manrope)" }}
                      >
                        {activity.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Column: The Visual (Sticky Image) - Desktop */}
          <div className="hidden lg:block w-full lg:w-1/2 relative h-full">
            <div className="sticky top-24 w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl self-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={ACTIVITIES[activeIndex].image}
                    alt={ACTIVITIES[activeIndex].title}
                    fill
                    className="object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <button className="flex items-center gap-2 text-[#FBB201] font-bold text-lg group/btn hover:text-white transition-colors">
                      Learn More
                      <ArrowRight size={20} className="transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile: Horizontal Swipe Carousel */}
          <div className="lg:hidden w-full overflow-x-auto snap-x snap-mandatory flex gap-4 pb-8 no-scrollbar">
            {ACTIVITIES.map((activity) => (
              <div
                key={activity.id}
                className="snap-center shrink-0 w-[85vw] h-[400px] relative rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2 text-[#FBB201]">
                    <activity.icon size={20} />
                    <span className="text-xs font-bold tracking-widest uppercase">Activity</span>
                  </div>
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {activity.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2" style={{ fontFamily: "var(--font-manrope)" }}>
                    {activity.description}
                  </p>
                  <button className="flex items-center gap-2 text-[#FBB201] font-bold text-sm">
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
