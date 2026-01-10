"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useIsMobile } from "@/components/ui/use-mobile"
import { useRouter } from "next/navigation"

const activities = [
    {
        title: "SPIRITUAL DISCOURSES",
        image: "/assets/activitysectionnewimgs/Spiritual discourse.png",
        link: "/activities/spiritual-discourses",
        description: "Prahlad Maharaj states in Srimad Bhagavatam that of the nine process of Devotional Service"
    },
    {
        title: "YOUTH CLUB",
        image: "/assets/activitysectionnewimgs/FOLK.png",
        link: "/activities/folk",
        description: "FOLK – Youth Empowerment Club aimed at crystallizing the formative phase of the younger generation"
    },
    {
        title: "DISTRIBUTION OF SPIRITUAL KNOWLEDGE",
        image: "/assets/activitysectionnewimgs/Book Distribution.png",
        link: "/srila-prabhupada/the-guru",
        description: "Srila Prabhupada presents Krishna consciousness in a very simple and practical way in his books"
    },
    {
        title: "CULTURAL FESTIVAL",
        image: "/assets/activitysectionnewimgs/Cultural festival.png",
        link: "/activities/cultural-festivals",
        description: "Hare Krishna Movement Chennai celebrated following cultural festival with great enthusiasm"
    },
    {
        title: "SUNDAY RETREATS",
        image: "/assets/activitysectionnewimgs/Sunday Retreat.png",
        link: "/activities/sunday-retreats",
        description: "Make your holiday a holy day. Sunday Festival is a unique program to surcharge you spiritually"
    },
    {
        title: "YUGA DHARMA",
        image: "/assets/activitysectionnewimgs/Yoga Dharma.png",
        link: "/activities/yuga-dharma",
        description: "Sankirtana Yajna means congregational chanting of the holy names of the Supreme Lord"
    },
    {
        title: "ASK A QUESTION",
        image: "/assets/activitysectionnewimgs/Ask A Question.png",
        link: "/philosophy/ask-any-question",
        description: "This section facilitates the spiritual seeker to ask a spiritual question and get answers in few days"
    },
    {
        title: "ICVK",
        image: "/assets/activitysectionnewimgs/ICVK.png",
        link: "/activities/icvk",
        description: "Indian Culture and Values for Kids - Introducing children to our rich heritage."
    },
    {
        title: "GITA LIFE",
        image: "/assets/activitysectionnewimgs/Gita Life.png",
        link: "/activities/gita-life",
        description: "Systematic study of Bhagavad-gita for leading a balanced and happy life."
    },
    {
        title: "ANNADANAM",
        image: "/assets/activitysectionnewimgs/Annadanam.png",
        link: "/donate",
        description: "Distribution of prasadam to the needy and deserving."
    },
    {
        title: "ATMARPANAM",
        image: "/assets/activitysectionnewimgs/Atmarpanam.png",
        link: "/activities/atmarpanam",
        description: "Dedicate your life to the service of the Lord."
    },
    {
        title: "BASIL WOODS SCHOOL",
        image: "/assets/activitysectionnewimgs/Basil Woods School.png",
        link: "https://www.basilwoodschennai.in/",
        description: "Holistic education blending modern academics with traditional values."
    },
    {
        title: "KALA MADHURYAM",
        image: "/assets/activitysectionnewimgs/Kala Madhuryam.png",
        link: "/activities/kala-madhuryam",
        description: "Celebrating the divine through arts, music, and dance."
    },
    {
        title: "SOULFUL SANGAM",
        image: "/assets/activitysectionnewimgs/Soulful Sangam- Satsang at Home.png",
        link: "/activities/soulful-sangam",
        description: "Satsang programs conducted at the comfort of your home."
    },
    {
        title: "VIDYABHYASAM",
        image: "/assets/activitysectionnewimgs/Vidyabhyasam.png",
        link: "/activities",
        description: "Empowering students with knowledge and values."
    },
    {
        title: "YATRAMRITAM",
        image: "/assets/activitysectionnewimgs/Yatramritam.png",
        link: "/activities/tirtha-yatra",
        description: "Spiritual journeys to holy places to deepen your devotion."
    }
]

export default function InfiniteActivitySlider() {
    const [index, setIndex] = useState(0);
    const isMobile = useIsMobile();
    const router = useRouter();

    // Configuration tailored for Activity Cards (Vertical aspect)
    // Desktop:
    // - Card Width: ~22vw (approx 350px on 1600px)
    // - Stride: ~23vw (changed from 18 to 23 for flat layout)
    const CARD_WIDTH_VW = isMobile ? 85 : 22; 
    const STRIDE_VW = isMobile ? 100 : 23;

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 3000); // 3s interval
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        setIndex((prev) => prev - 1);
    };

    const getItem = (i: number) => {
        const wrappedIndex = ((i % activities.length) + activities.length) % activities.length;
        return activities[wrappedIndex];
    };

    // Range [-2, 2] to show 5 items on desktop (Center + 2 sides)
    const offsetRange = isMobile ? [-1, 0, 1] : [-2, -1, 0, 1, 2];

    return (
        <section className="py-10 md:py-20 bg-[#111827] overflow-hidden relative">
            <div className="container mx-auto px-6 mb-10 text-center relative z-20">
                 <h2 className="text-4xl md:text-5xl font-bold text-[#FFD700] font-serif mb-4">
                    ACTIVITIES
                </h2>
                <p className="text-gray-300 text-lg">
                    Explore our spiritual programs
                </p>
            </div>

            <div className="relative h-[550px] w-full overflow-hidden flex justify-center items-center">
                <div className="relative w-full h-full max-w-[1920px] flex justify-center items-center">
                    <AnimatePresence initial={false}>
                        {offsetRange.map((offset) => {
                            const i = index + offset; 
                            const item = getItem(i);
                            const isActive = offset === 0;

                            const handleCardClick = () => {
                                if (isActive) {
                                    if (item.link.startsWith("http")) {
                                        window.open(item.link, "_blank", "noopener,noreferrer");
                                    } else {
                                        router.push(item.link);
                                    }
                                } else {
                                    setIndex(i);
                                }
                            };

                            return (
                                <motion.div
                                    key={i} 
                                    className="absolute rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                                    initial={{ 
                                        x: `${(offset + 1) * STRIDE_VW}vw`, 
                                        scale: 1, 
                                        opacity: 1,
                                    }}
                                    animate={{ 
                                        x: `${offset * STRIDE_VW}vw`, 
                                        scale: isActive ? 1.05 : 1, // Subtle pop for active, but mostly flat
                                        opacity: 1, // Keep full opacity for visibility
                                        zIndex: isActive ? 50 : 40 - Math.abs(offset), 
                                    }}
                                    exit={{ 
                                        x: `${(offset - 1) * STRIDE_VW}vw`, 
                                        opacity: 0,
                                    }}
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 300, 
                                        damping: 30,
                                    }} 
                                    style={{
                                        width: `${CARD_WIDTH_VW}vw`,
                                        maxWidth: isMobile ? "90vw" : "400px",
                                        height: isMobile ? "450px" : "500px",
                                        left: "50%",
                                        marginLeft: `-${CARD_WIDTH_VW / 2}vw`,
                                    }}
                                    onClick={handleCardClick}
                                >
                                    <div className="relative w-full h-full bg-gray-900 border border-white/10 rounded-2xl overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                            priority={isActive} 
                                        />
                                        
                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300"></div>

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 w-full p-6 text-white text-left">
                                            <h3 className="text-xl md:text-2xl font-bold font-serif mb-2 leading-tight text-[#FFD700] shadow-sm">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-200 line-clamp-3 mb-4 shadow-sm font-medium">
                                                {item.description}
                                            </p>
                                            <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-[#FFD700] px-5 py-2 rounded-full text-xs font-bold text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all duration-300 shadow-lg">
                                                Learn More <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Navigation Buttons */}
                <button 
                    onClick={prevSlide}
                    className="absolute left-[5%] z-50 w-10 h-10 md:w-14 md:h-14 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all flex items-center justify-center shadow-lg border border-[#FFD700]/30 backdrop-blur-sm"
                >
                    <ChevronLeft className="w-5 h-5 md:w-8 md:h-8" />
                </button>
                <button 
                    onClick={nextSlide}
                    className="absolute right-[5%] z-50 w-10 h-10 md:w-14 md:h-14 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all flex items-center justify-center shadow-lg border border-[#FFD700]/30 backdrop-blur-sm"
                >
                    <ChevronRight className="w-5 h-5 md:w-8 md:h-8" />
                </button>
            </div>
        </section>
    )
}
