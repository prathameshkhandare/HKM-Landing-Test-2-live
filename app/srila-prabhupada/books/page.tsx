"use client"

import React from "react"
import SrilaPrabhupadaLayout from "@/components/SrilaPrabhupadaLayout"
import SrilaPrabhupadaHeader from "@/components/SrilaPrabhupadaHeader"
import { QuoteHighlight } from "@/components/PhilosophyWidgets"
import { BookOpen, Sparkles, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function BooksPage() {
  const booksData = [
    { 
        title: "Bhagavad-gita As It Is", 
        description: "The most widely read edition of the Gita in the world, presenting the authorized version of Lord Krishna's teachings.",
        image: "/assets/wisdom-gallery/gita-cover.png",
        highlight: "Original 1972 Edition"
    },
    { 
        title: "Teachings of Lord Caitanya", 
        description: "A Treatise on Factual Spiritual Life. First published in 1968, summarizing the life and precepts of Sri Chaitanya Mahaprabhu.",
        image: "/assets/books/lc.png",
        highlight: "The Golden Avatara"
    },
    {
        title: "Transcendental Teachings of Narada Muni",
        description: "Whether one does good work or bad work one is sure to return to this material planet. This book answers all such doubts and guides one to dovetail his fruits of action in a spiritual path.",
        image: "/assets/books/narad.png",
        highlight: "Spiritual Path"
    },
    {
        title: "Civilization and Transcendence",
        description: "Civilizations have come and gone. Srila Prabhupada imparts his teachings with sound Vedic knowledge, explaining how technology and science are essential but cannot be of any assistance in our true pursuit.",
        image: "/assets/books/b3.png",
        highlight: "Vedic Wisdom"
    },
    {
        title: "Chanting Hare Krishna",
        description: "By chanting Hare Krishna, we reap innumerable benefits. Chanting calms the mind, clarifies our thinking, brings unlimited happiness, and purifies the consciousness.",
        image: "/assets/books/chk.png",
        highlight: "Power of Chanting"
    },
    {
        title: "Introduction to Bhagavad-gita",
        description: "The Gita is a conversation between Krishna and His dear friend Arjuna. This book is an introductory part of Prabhupada's Bhagavad-gita As It Is, explaining the subject matter and the spirit of approach.",
        image: "/assets/books/ibg.png",
        highlight: "Spiritual Enlightenment"
    }
  ]

  return (
    <SrilaPrabhupadaLayout
      title="Books"
      subtitle="The Basis of the Krishna Consciousness Movement"
      heroImage="/assets/Magazine-pic.jpg"
      customHeader={<SrilaPrabhupadaHeader />}
    >
      {/* Intro Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-[#ea580c] font-bold tracking-widest uppercase text-sm mb-2 block">Foundational Texts</span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#2D0A0A] mb-6">Srila Prabhupada and His Books</h2>
          <p className="text-xl text-gray-600 leading-relaxed font-serif">
            "I have a desire to print some books. If you ever get money, print books." <br/>
            <span className="text-base text-[#ea580c] font-bold mt-2 block">— Order of Srila Bhaktisiddhanta Sarasvati Thakura (1935)</span>
          </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-[#ea580c] mb-20 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
             <BookOpen size={120} />
         </div>
         <p className="text-lg text-gray-700 leading-relaxed relative z-10">
            Srila Prabhupada always stressed this point and with the help of his disciples he published many books in English which includes the commentary on Indian classics like Bhagavad-gita, Srimad Bhagavatam and Chaitanya Charitamrita. The Krishna Consciousness Movement is firmly based upon the conclusive truths found in these books.
         </p>
      </div>

      {/* BBT Section */}
      <div className="mb-24">
         <div className="flex items-center gap-4 mb-8">
             <div className="bg-[#ea580c] p-3 rounded-lg text-white shadow-lg">
                <BookOpen size={32} />
             </div>
             <h3 className="text-3xl font-bold text-[#701a1a] font-serif">Bhaktivedanta Book Trust</h3>
         </div>
         <p className="text-lg text-gray-700 leading-relaxed mb-6">
            In 1970, Srila Prabhupada founded the <strong>Bhaktivedanta Book Trust (BBT)</strong>, which is now the world’s largest publisher of Vedic literature. He wanted his books to be translated into all languages, and today they are available in more than 80 languages.
         </p>
         <p className="text-lg text-gray-700 leading-relaxed">
            He considered his books to be of utmost importance, insisting that his disciples read, discuss, and apply them. They are the <strong>"basis of the movement"</strong>.
         </p>
      </div>

      {/* Major Publications Grid with Images */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-[#701a1a] mb-12 font-serif border-l-4 border-[#ea580c] pl-4">Major Publications</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {booksData.map((book, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative bg-[#FFF9F0] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#fbbf24]/30 flex flex-col"
                >
                    {/* Full Size Image Container - Reduced Height */}
                    <div className="relative w-full h-64 md:h-72 bg-gray-100 overflow-hidden border-b border-[#ea580c]/10">
                         <img 
                            src={book.image} 
                            alt={book.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                         />
                         
                         {/* Gradient Overlay for Text Visibility or Style */}
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-5 flex-grow flex flex-col relative z-10 bg-[#FFF9F0]">
                        <h4 className="text-lg font-bold text-[#2D0A0A] mb-2 font-serif group-hover:text-[#ea580c] transition-colors leading-tight line-clamp-2">
                            {book.title}
                        </h4>
                        <div className="h-[2px] w-12 bg-[#ea580c]/30 group-hover:w-20 group-hover:bg-[#ea580c] transition-all duration-300 mb-3 rounded-full"></div>
                        <p className="text-gray-600 text-[13px] leading-relaxed font-medium line-clamp-3">
                            {book.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>

       <QuoteHighlight 
          text="These books can change your life. Try it out."
          author="Srila Prabhupada"
       />

    </SrilaPrabhupadaLayout>
  )
}
