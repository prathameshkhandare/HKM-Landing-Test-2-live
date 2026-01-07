"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import Link from "next/link"
import SharedSidebar from "@/components/SharedSidebar"
import ActivitiesHeader from "@/components/ActivitiesHeader"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const activityCards = [
  {
    title: "SPIRITUAL DISCOURSES",
    description:
      "Daily classes on Srimad Bhagavatam and Bhagavad-gita to enlighten the mind and soul with Vedic wisdom.",
    link: "/activities/spiritual-discourses",
    image: "/assets/SrimadBhagavatam-Lecture.jpg"
  },
  {
    title: "YOUTH EMPOWERMENT CLUB - FOLK",
    description:
      "FOLK – Youth Empowerment Club aimed at crystallizing the formative phase of the younger generation with values and skills.",
    link: "/activities/folk",
    image: "/assets/Man-Slider.png"
  },
  {
    title: "DISTRIBUTION OF SPIRITUAL KNOWLEDGE",
    description:
      "Disseminating the transcendental knowledge of the Vedas through the distribution of Srila Prabhupada's books.",
    link: "/activities/distribution-of-spiritual-knowledge",
    image: "/assets/SrimadBhagavatam-Lecture.jpg" // Reusing or finding a better match if available like book distribution
  },
  {
    title: "CULTURAL FESTIVAL",
    description: "Celebrating grand festivals like Janmashtami, Ratha Yatra, and more with pomp and spiritual fervor.",
    link: "/activities/cultural-festivals",
    image: "/assets/cultutral-festival.JPG"
  },
  {
    title: "SUNDAY RETREATS",
    description:
      "Make your holiday a holy day. A weekly spiritual recharge program with kirtan, class, and prasadam.",
    link: "/activities/sunday-retreats",
    image: "/assets/Sunday-retreat.jpg"
  },
  {
    title: "YUGA DHARMA",
    description:
      "Sankirtana Yajna – The congregational chanting of the holy names of the Lord, the prime benediction for humanity.",
    link: "/activities/yuga-dharma",
    image: "/assets/Yugadharma.jpg"
  },
  {
    title: "ASK A QUESTION",
    description:
      "Have spiritual queries? Ask our senior devotees and find answers from the scriptures.",
    link: "/philosophy/ask-any-question",
    image: "/assets/iskcon_lecture_moment.png" // Using lecture moment as placeholder for QA
  },
  {
    title: "INDIAN CULTURE & VALUES FOR KIDS (ICVK)",
    description:
      "Imparting rich cultural values and heritage to children through fun-filled spiritual activities.",
    link: "/activities/icvk/activities",
    image: "/assets/hkm-about-education.png"
  },
]

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#2D0A0A] font-sans selection:bg-[#fbbf24] selection:text-[#2D0A0A]">
      <NavbarDemo />

      <ActivitiesHeader />

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        
        {/* Intro Text */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
             <div className="w-24 h-1 bg-[#fbbf24] mx-auto mb-8 rounded-full"></div>
             <p className="text-xl md:text-2xl text-[#5b2110] leading-relaxed font-serif italic">
            "The highest perfection of human life is to engage in the service of the Supreme Lord."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content area */}
          <div className="lg:col-span-2">
            {/* Activity Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activityCards.map((card, idx) => (
                <Link
                  key={idx}
                  href={card.link}
                  className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#fbbf24]/10 hover:-translate-y-1"
                >
                  {/* Card Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                       <Image 
                            src={card.image} 
                            alt={card.title} 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6">
                      <h3 className="text-lg font-bold text-[#9a3412] mb-3 group-hover:text-[#ea580c] transition-colors line-clamp-2 min-h-[3.5rem] flex items-center">
                          {card.title}
                      </h3>
                      <p className="text-sm text-[#4b5563] leading-relaxed mb-4 line-clamp-3 min-h-[4.5rem]">
                          {card.description}
                      </p>
                      
                      <div className="flex items-center text-[#ea580c] text-sm font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                          Read More <ArrowRight size={14} className="ml-1" />
                      </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <SharedSidebar />
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
