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
        image: "/assets/books/bhagavad_gita_cover.png",
        highlight: "Best Seller"
    },
    { 
        title: "Srimad Bhagavatam", 
        description: "The postgraduate study of the science of Godhead, consisting of 18,000 verses in 12 cantos.",
        image: "/assets/books/srimad_bhagavatam_cover.png",
        highlight: "Encyclopedia"
    },
    { 
        title: "Sri Chaitanya Charitamrita", 
        description: "The detailed life and activities of Sri Chaitanya Mahaprabhu, the Golden Avatar.",
        image: "/assets/books/chaitanya-charitamrita-cover.png",
        highlight: "Biography"
    },
    { 
        title: "The Nectar of Devotion", 
        description: "A summary study of Rupa Goswami's Bhakti-rasamrita-sindhu, the science of devotional service.",
        image: "/assets/books/nectar_of_devotion_cover.png",
        highlight: "Bhakti Science"
    },
    { 
        title: "Sri Isopanishad", 
        description: "Essential knowledge from the Vedas that brings one nearer to the Supreme Personality of Godhead.",
        image: "/assets/books/sri_isopanishad_cover.png",
        highlight: "Vedic Essence"
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
                    {/* Full Size Image Container */}
                    <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden">
                         <img 
                            src={book.image} 
                            alt={book.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                         />
                         
                         {/* Gradient Overlay for Text Visibility or Style */}
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Top Right Highlight Badge */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-bold text-[#ea580c] uppercase tracking-wider flex items-center gap-1 shadow-lg">
                            <Sparkles size={10} /> {book.highlight}
                        </div>
                    </div>

                    <div className="p-8 flex-grow flex flex-col relative z-10 bg-[#FFF9F0]">
                        <h4 className="text-2xl font-bold text-[#2D0A0A] mb-3 font-serif group-hover:text-[#ea580c] transition-colors leading-tight">
                            {book.title}
                        </h4>
                        <div className="h-[2px] w-12 bg-[#ea580c]/30 group-hover:w-20 group-hover:bg-[#ea580c] transition-all duration-300 mb-4 rounded-full"></div>
                        <p className="text-gray-600 text-[15px] leading-relaxed mb-6 font-medium">
                            {book.description}
                        </p>
                        
                        <div className="mt-auto pt-4 border-t border-[#fbbf24]/10 flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity">
                            <span className="text-xs font-bold font-serif text-[#ea580c] uppercase tracking-widest">Learn More</span>
                            <div className="w-8 h-8 rounded-full bg-[#ea580c]/10 flex items-center justify-center text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition-colors">
                                <ArrowRight size={14} />
                            </div>
                        </div>
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
