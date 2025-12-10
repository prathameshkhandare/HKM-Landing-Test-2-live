"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, animate } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const CARDS = [
    {
        id: 1,
        title: "Sri Narsimha Jayanti",
        subtitle: "The Protector",
        image: "/assets/Narasimha Jayanti.JPG",
    },
    {
        id: 2,
        title: "Govardhan Puja",
        subtitle: "Sweet Devotion",
        image: "/assets/Govardhna-puja.JPG",
    },
    {
        id: 3,
        title: "Janmashtami",
        subtitle: "Birth of the Lord",
        image: "/assets/Sri-krishna-Janmashtami.jpg",
    },
    {
        id: 4,
        title: "Ratha Yatra",
        subtitle: "Festival of Chariots",
        image: "/assets/cultutral-festival.JPG",
    },
    {
        id: 5,
        title: "Radhashtami",
        subtitle: "Divine Love",
        image: "/assets/BalaramaJayanthi19-39.jpg",
    },
]

export default function DarshanCarousel() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth)
        }
    }, [])

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#000000]">
            {/* Section Header */}
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2
                    className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    SACRED DARSHAN
                </h2>
                <div className="w-24 h-1 bg-[#FBB201] mx-auto rounded-full" />
            </div>

            {/* Carousel Container */}
            <div className="pl-6 md:pl-12 lg:pl-24 overflow-hidden" ref={containerRef}>
                <motion.div
                    className="flex gap-6 md:gap-8 cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    whileTap={{ cursor: "grabbing" }}
                >
                    {CARDS.map((card) => (
                        <motion.div
                            key={card.id}
                            className="relative min-w-[280px] md:min-w-[350px] h-[450px] md:h-[550px] rounded-2xl overflow-hidden group shadow-2xl border border-white/10"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                            {/* Glass Panel Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-black/40 border-t border-white/10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <p
                                    className="text-[#FBB201] text-sm font-medium tracking-widest uppercase mb-1"
                                    style={{ fontFamily: "var(--font-manrope)" }}
                                >
                                    {card.subtitle}
                                </p>
                                <h3
                                    className="text-2xl font-bold text-white mb-4 leading-tight"
                                    style={{ fontFamily: "var(--font-playfair)" }}
                                >
                                    {card.title}
                                </h3>

                                <button className="flex items-center gap-2 text-white/90 text-sm font-medium group/btn opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    View Gallery
                                    <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </section>
    )
}
