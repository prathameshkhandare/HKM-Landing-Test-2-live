"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const offerings = [
  {
    title: "Magazine",
    description: "Vaikuntha Varthai is a quarterly newsletter published by HKMC",
    image: "https://hkmtest.vercel.app/assets/Magazine-pic.jpg",
    link: "/gallery/downloads/magazine"
  },
  {
    title: "Activities",
    description: "Activities including Spiritual Discourses, Youth Empowerment, Distribution of Spiritual Knowledge",
    image: "https://hkmtest.vercel.app/assets/activities-pic.JPG",
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
    image: "https://hkmtest.vercel.app/assets/Lecture-pic.JPG",
    link: "/lectures"
  }
]

export default function DiscoverGrid() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-2">
            DISCOVER
          </h2>
          <p className="text-xl text-slate-600 italic">
            Explore our offerings
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((item, index) => (
            <Link key={index} href={item.link} className="block w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[400px] overflow-hidden rounded-xl cursor-pointer"
              >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-serif text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {item.description}
                </p>
                <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  <span className="text-orange-400 text-sm font-medium tracking-wider uppercase border-b border-orange-400 pb-1">
                    Explore Now
                  </span>
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
