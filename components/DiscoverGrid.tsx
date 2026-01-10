"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const offerings = [
  {
    title: "Magazine",
    description: "Vaikuntha Varthai is a quarterly newsletter published by HKMC",
    image: "/assets/Magazine-pic.jpg",
    link: "/gallery/downloads/magazine"
  },
  {
    title: "Activities",
    description: "Activities including Spiritual Discourses, Youth Empowerment, Distribution of Spiritual Knowledge",
    image: "/assets/activities-pic.JPG",
    link: "/activities"
  },
  {
    title: "Donations",
    description: "There are many ways to push for much-needed reforms",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop",
    link: "/donate"
  },
  {
    title: "Lectures",
    description: "The enlighten Spiritual Discourses for Srimad Bhagavad-Gita and Bhagavatam",
    image: "/assets/Lecture-pic.JPG",
    link: "/lectures"
  }
]

export default function DiscoverGrid() {
  return (
    <section className="py-6 md:py-20 bg-slate-50 relative">
      
      <div className="w-full max-w-[95%] mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A8A] mb-2">
            DISCOVER
          </h2>
          <p className="text-xl text-slate-600 italic">
            Explore our offerings
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pb-24 md:pb-0">
          {offerings.map((item, index) => (
            <Link 
              key={index} 
              href={item.link} 
              className="block w-full sticky md:static"
              style={{ top: '100px' }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group relative h-[450px] md:h-[480px] overflow-hidden rounded-3xl md:rounded-xl cursor-pointer shadow-2xl border border-white/10"
              >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-serif text-[#FFD700] mb-2">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm mb-6">
                  {item.description}
                </p>
                <div>
                  <div className="inline-block px-6 py-2 rounded-full border border-[#FFD700] text-[#FFD700] text-sm font-bold bg-black/50 backdrop-blur-sm group-hover:bg-[#FFD700] group-hover:text-black transition-all duration-300 shadow-lg cursor-pointer">
                    Explore Now
                  </div>
                </div>
              </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
