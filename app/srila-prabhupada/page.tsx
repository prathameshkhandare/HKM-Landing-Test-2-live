"use client"

import SrilaPrabhupadaLayout from "@/components/SrilaPrabhupadaLayout"
import SrilaPrabhupadaHeader from "@/components/SrilaPrabhupadaHeader"
import { Timeline, PhilosophyCardGrid, QuoteHighlight, PrincipleList } from "@/components/PhilosophyWidgets"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function SrilaPrabhupadaPage() {

  const biographyEvents = [
    {
      title: "Childhood (1896)",
      text: "Srila Prabhupada was born on September 1, 1896, in Calcutta as Abhay Charan. His parents, Gour Mohan De and Rajani Devi, were ardent devotees of Lord Krishna. His father's only wish was that Abhay should become a devotee of Srimati Radharani.",
      image: "/assets/prabhupada/childhood.jpg",
      imageCaption: "Childhood"
    },

    {
      title: "Meeting the Spiritual Master (1922)",
      text: "He met Srila Bhaktisiddhanta Sarasvati Goswami in Calcutta. At their very first meeting, he was advised to preach Krishna consciousness to the English-speaking world. He accepted him as his spiritual master in his heart immediately.",
      image: "/assets/prabhupada/meets-guru.png",
      imageCaption: "Meeting Spiritual Master"
    }, {
      title: "Renounced Order (1959)",
      text: "He took sannyasa in 1959. Living at the Radha-Damodara temple in Vrindavan, he began his masterpiece: the English translation and commentary of the Srimad Bhagavatam.",
      image: "/assets/prabhupada/SP_takes_Sannyasa.png",
      imageCaption: "Renounced Order",
      imagePos: "object-top"
    },
    {
      title: "The Journey (1965)",
      text: "At the age of 69, he boarded the Jaladuta ship to America with just 40 rupees, carrying the order of his spiritual master to spread Krishna consciousness globally.",
      image: "/assets/prabhupada/boarding_jaladuta_1965.png",
      imageCaption: "The Jaladuta Voyage"
    },
    {
      title: "Founding ISCON (1966)",
      text: "In a small storefront in New York, he started the International Society for Krishna Consciousness (ISKCON)..",
      image: "/assets/prabhupada/is.avif",
      imageCaption: "Founding of ISKCON"
    }, { title: "First Public Kirtan (1966)", text: "He sat under a tree in Tompkins Square Park and chanted the Hare Krishna mantra. This attracted many people and began the movement's growth in the West.", image: "/assets/prabhupada/chanting-parks.png", imageCaption: "Chanting in the park" },

    { title: "Writing & Publishing (1970s)", text: "He founded the BBT to publish his translations of the Bhagavad Gita and Srimad Bhagavatam. He wrote over 80 books that are now read worldwide..", image: "/assets/prabhupada/Bhaktivedanta_Book_trust__BBT_.jpg", imageCaption: "The Bhaktivedanta Book Trust" }
  ]

  const achievements = [
    {
      icon: "globe",
      title: "Voyage to the West",
      description: "In 1965, at age 69, he traveled to New York on the cargo ship Jaladuta. Suffering two heart attacks and arriving with just 40 rupees, he carried the order of his spiritual master to spread Krishna consciousness globally.",
      // image: "/assets/prabhupada/arrival-ny.png", // Adding this here although it's not in the previous timeline list, just in case user wants it.
      // Wait, the user said "A Brief Life Sketch" specifically. "Voyage to the West" is in "achievements" list but the image was in the grid.
      // The grid had "Arrival in New York" which matches "Voyage to the West" essentially.
      // However, "Voyage to the West" is in `achievements` array, not `biographyEvents`.
      // The prompt says "in 'A Brief Life Sketch' here itself try to put the image".
      // The `Timeline` component is used for `biographyEvents` in "A Brief Life Sketch".
      // The `PhilosophyCardGrid` is used for `achievements`.
      // So I should only add images to `biographyEvents`.
    },
    {
      icon: "star",
      title: "Founding ISKCON",
      description: "In July 1966, he established the International Society for Krishna Consciousness (ISKCON) in New York. From a small storefront, it grew into a worldwide movement."
    },
    {
      icon: "scale",
      title: "Global Expansion",
      description: "By 1967, he had established centers in San Francisco, Montreal, London, and beyond. He envisioned magnificent temples in Vrindavan, Bombay, and Mayapur."
    },
    {
      icon: "zap",
      title: "Literary Legacy",
      description: "He wrote over 60 volumes of authoritative translations and commentaries on Vedic scriptures, including the Bhagavad-gita As It Is and Srimad Bhagavatam. His books are translated into over 80 languages."
    }
  ]

  return (
    <SrilaPrabhupadaLayout
      title="Srila Prabhupada"
      subtitle="The Founder-Acharya of the International Society for Krishna Consciousness"
      heroImage="/assets/srila-prabhupada.png"
      customHeader={<SrilaPrabhupadaHeader />}
    >
      {/* Introduction Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="text-[#ea580c] font-bold tracking-widest uppercase text-sm mb-2 block">The Life of a Pure Devotee</span>
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#2D0A0A] mb-6">His Divine Grace A. C. Bhaktivedanta Swami Prabhupada</h2>
        <p className="text-xl text-gray-600 leading-relaxed font-serif italic">
          "He built a house in which the whole world can live."
        </p>
      </div>

      {/* Biography Timeline */}
      <div className="mb-24">
        <h3 className="text-3xl font-bold text-[#701a1a] mb-8 font-serif border-l-4 border-[#ea580c] pl-4">A Brief Life Sketch</h3>
        <Timeline items={biographyEvents} />
      </div>

      {/* Quote Highlight */}
      <QuoteHighlight
        text="Preach Krishna consciousness to the English speaking world."
        author="Srila Bhaktisiddhanta Sarasvati Thakura (1922)"
      />

      {/* Global Achievements Grid */}
      <div className="mb-24">
        <h3 className="text-3xl font-bold text-[#701a1a] mb-8 font-serif border-l-4 border-[#ea580c] pl-4">Transcendental Achievements</h3>
        <PhilosophyCardGrid items={achievements} />
      </div>

      {/* Video Section - Premium ICVK Style Card */}
      <div className="mb-24 flex justify-center px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl mx-auto"
        >
          {/* Video Area */}
          <div className="aspect-[9/16] md:aspect-video w-full overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/EtWO3eghiOM"
              title="The Life of Srila Prabhupada"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Info Area */}
          <div className="py-6 space-y-4">
            <div>
              <h4 className="text-[#701a1a] text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">The Acharya</h4>
              <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
                The Life of His Divine Grace Vishwa Guru A. C. Bhaktivedanta Swami Srila Prabhupada - A comprehensive documentary capturing the spiritual journey that changed the world.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="https://www.youtube.com/watch?v=EtWO3eghiOM"
                target="_blank"
                className="inline-flex items-center gap-3 px-8 py-3.5 border-2 border-[#ea580c] rounded-full text-[#ea580c] font-bold hover:bg-[#ea580c] hover:text-white transition-all duration-300 group"
              >
                Watch Full Documentary
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Conclusion / Legacy */}
      <div className="bg-[#FFF9F0] p-10 rounded-2xl border border-[#fbbf24]/30 shadow-lg text-center">
        <h3 className="text-3xl font-bold text-[#701a1a] mb-6 font-serif">A Legacy that Lives On</h3>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
          In the short time he spent in the West, Srila Prabhupada preached continuously, established 108 temples, wrote more than sixty volumes of transcendental literature, initiated five thousand disciples, founded the Bhaktivedanta Book Trust, and began a scientific academy. His contribution to the spiritual welfare of humanity is immeasurable.
        </p>
        <Link href="/srila-prabhupada/achievements" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white rounded-full hover:shadow-xl hover:scale-105 transition-all font-bold uppercase tracking-wide">
          View Detailed Achievements
        </Link>
      </div>

    </SrilaPrabhupadaLayout>
  )
}
