"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, BookOpen, Users, Book, Music, Sun, Calendar, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const ACTIVITIES = [
  {
    id: 1,
    title: "Spiritual Discourses",
    description: "Prahlad Maharaj states in Srimad Bhagavatam that of the nine process of Devotional Service",
    image: "https://hkmtest.vercel.app/assets/Spritiual-main.jpg",
    link: "/activities/spiritual-discourses",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Youth Club",
    description: "FOLK – Youth Empowerment Club aimed at crystallizing the formative phase of the younger generation",
    image: "https://hkmtest.vercel.app/assets/folk-pic.jpg", 
    // Fallback if this exact url isn't perfect, but trying to match reference pattern. 
    // If exact asset from scraped list was generic, I use best logical match key.
    link: "/activities/folk",
    icon: Users,
  },
  {
    id: 3,
    title: "Distribution of Spiritual Knowledge",
    description: "Srila Prabhupada presents Krishna consciousness in a very simple and practical way in his books",
    image: "https://hkmtest.vercel.app/assets/book-disturbution.jpg",
    link: "/activities/distribution",
    icon: Book,
  },
  {
    id: 4,
    title: "Cultural Festival",
    description: "Hare Krishna Movement Chennai celebrated following cultural festival with great enthusiasm",
    image: "https://hkmtest.vercel.app/assets/festivals-pic.jpg",
    link: "/activities/festivals",
    icon: Music,
  },
  {
    id: 5,
    title: "Sunday Retreats",
    description: "Make your holiday a holy day. Sunday Festival is a unique program to surcharge you spiritually",
    image: "https://hkmtest.vercel.app/assets/Sunday-retreat.jpg",
    link: "/activities/sunday-retreats",
    icon: Sun,
  },
  {
    id: 6,
    title: "Yuga Dharma",
    description: "Sankirtana Yajna means congregational chanting of the holy names of the Supreme Lord",
    image: "https://hkmtest.vercel.app/assets/Yugadharma.jpg",
    link: "/activities/yuga-dharma",
    icon: Calendar,
  },
  {
    id: 7,
    title: "Ask A Question",
    description: "This section facilitates the spiritual seeker to ask a spiritual question and get answers in few days",
    image: "https://hkmtest.vercel.app/assets/Lecture-pic.JPG", // Using a fallback that fits "Learning" or similar
    link: "/activities/ask-question",
    icon: MessageCircle,
  },
]

export default function ActivitiesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
            ACTIVITIES
          </h2>
          <p className="text-xl text-slate-600 italic">
            Explore our spiritual programs
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">

          {/* Left Column: The Menu (Vertical List) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-2">
            {ACTIVITIES.map((activity, index) => (
              <div
                key={activity.id}
                className={`group relative pl-6 py-4 cursor-pointer transition-all duration-300 border-l-4 ${
                  index === activeIndex
                    ? "border-orange-400 bg-orange-50/50"
                    : "border-transparent hover:border-slate-200 hover:bg-slate-50"
                }`}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-xl md:text-2xl font-serif transition-colors duration-300 ${
                      index === activeIndex ? "text-slate-900" : "text-slate-500 group-hover:text-slate-700"
                    }`}
                  >
                    {activity.title}
                  </h3>
                  {index === activeIndex && (
                    <motion.div
                      layoutId="activeArrow"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <ArrowRight className="text-orange-400" size={20} />
                    </motion.div>
                  )}
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
                      <p className="text-slate-600 text-base leading-relaxed mt-2 pr-4 font-sans">
                        {activity.description}
                      </p>
                      <Link 
                        href={activity.link}
                        className="inline-flex items-center gap-2 text-orange-500 text-sm font-medium mt-3 hover:text-orange-600 transition-colors"
                      >
                        Learn More <ArrowRight size={14} />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Column: The Visual (Sticky Image) - Desktop */}
          <div className="hidden lg:block w-full lg:w-1/2 relative h-full">
            <div className="sticky top-24 w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
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
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                     <h3 className="text-3xl font-serif text-white mb-2">{ACTIVITIES[activeIndex].title}</h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
           {/* Mobile View */}
           <div className="lg:hidden space-y-6">
              {ACTIVITIES.map((activity) => (
                  <div key={activity.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                       <div className="relative h-48 w-full">
                           <Image src={activity.image} alt={activity.title} fill className="object-cover" />
                       </div>
                       <div className="p-6">
                          <h3 className="text-xl font-serif text-slate-900 mb-2">{activity.title}</h3>
                          <p className="text-slate-600 text-sm mb-4">{activity.description}</p>
                          <Link href={activity.link} className="text-orange-500 font-medium text-sm flex items-center gap-1">
                              Learn More <ArrowRight size={14} />
                          </Link>
                       </div>
                  </div>
              ))}
           </div>

        </div>
      </div>
    </section>
  )
}
