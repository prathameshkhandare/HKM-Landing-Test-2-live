"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const activities = [
    {
        title: "SPIRITUAL DISCOURSES",
        image: "/assets/SrimadBhagavatam-Lecture.jpg",
        link: "/activities/spiritual-discourses",
        description: "Prahlad Maharaj states in Srimad Bhagavatam that of the nine process of Devotional Service"
    },
    {
        title: "YOUTH CLUB",
        image: "/assets/activities-pic.JPG",
        link: "/activities/folk",
        description: "FOLK – Youth Empowerment Club aimed at crystallizing the formative phase of the younger generation"
    },
    {
        title: "DISTRIBUTION OF SPIRITUAL KNOWLEDGE",
        image: "/assets/Magazine-pic.jpg",
        link: "/activities/distribution-of-spiritual-knowledge",
        description: "Srila Prabhupada presents Krishna consciousness in a very simple and practical way in his books"
    },
    {
        title: "CULTURAL FESTIVAL",
        image: "/assets/cultutral-festival.JPG",
        link: "/activities/cultural-festivals",
        description: "Hare Krishna Movement Chennai celebrated following cultural festival with great enthusiasm"
    },
    {
        title: "SUNDAY RETREATS",
        image: "/assets/Sunday-retreat.jpg",
        link: "/activities/sunday-retreats",
        description: "Make your holiday a holy day. Sunday Festival is a unique program to surcharge you spiritually"
    },
    {
        title: "YUGA DHARMA",
        image: "/assets/Yugadharma.jpg",
        link: "/activities/yuga-dharma",
        description: "Sankirtana Yajna means congregational chanting of the holy names of the Supreme Lord"
    },
    {
        title: "ASK A QUESTION",
        image: "/assets/philosophy/temple-bg.jpg",
        link: "/philosophy/ask-any-question",
        description: "This section facilitates the spiritual seeker to ask a spiritual question and get answers in few days"
    },
    {
        title: "ICVK",
        image: "/assets/activities/icvk/icvk-banner-new.png",
        link: "/activities/icvk",
        description: "Indian Culture and Values for Kids - Introducing children to our rich heritage."
    }
]

// Duplicate the array to create the infinite loop effect
const sliderItems = [...activities, ...activities]

export default function InfiniteActivitySlider() {
    return (
   <section className="py-10 md:py-20 bg-[#111827] overflow-hidden relative">
            <div className="container mx-auto px-6 mb-10 text-center">
                 <h2 className="text-4xl md:text-5xl font-bold text-[#FFD700] font-serif mb-4">
                    ACTIVITIES
                </h2>
                <p className="text-gray-300 text-lg">
                    Explore our spiritual programs
                </p>
            </div>

            <div className="relative w-full">
                {/* Gradient Masks removed for clear view */}

                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-4 md:gap-8 px-4 md:px-8"
                        animate={{
                            x: ["0%", "-50%"]
                        }}
                        transition={{
                            duration: 40, // Slowed down from 10 to 40 for smoother experience
                            ease: "linear",
                            repeat: Infinity
                        }}
                        style={{ width: "max-content" }} // Ensure it takes full width
                    >
                        {sliderItems.map((item, index) => (
                            <Link 
                                key={index} 
                                href={item.link}
                                className="group relative flex-shrink-0 w-[300px] md:w-[350px] h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Image Background */}
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300"></div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                                    <h3 className="text-xl md:text-2xl font-bold font-serif mb-3 leading-tight text-[#FFD700] shadow-sm">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-200 line-clamp-3 mb-6 shadow-sm font-medium">
                                        {item.description}
                                    </p>
                                    <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-[#FFD700] px-6 py-2.5 rounded-full text-sm font-bold text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-black transition-all duration-300 shadow-lg">
                                        Learn More <ArrowRight size={16} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
