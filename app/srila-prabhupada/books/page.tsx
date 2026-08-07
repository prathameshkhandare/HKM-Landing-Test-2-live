"use client"

import React, { useState } from "react"
import SrilaPrabhupadaLayout from "@/components/SrilaPrabhupadaLayout"
import SrilaPrabhupadaHeader from "@/components/SrilaPrabhupadaHeader"
import { QuoteHighlight } from "@/components/PhilosophyWidgets"
import { BookOpen, X } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function BooksPage() {
  const booksData = [
    { 
        title: "Bhagavad-gita As It Is", 
        description: "The most widely read edition of the Gita in the world, presenting the authorized version of Lord Krishna's teachings.",
        shortDescription: "The most widely read edition of Lord Krishna's timeless teachings.",
        image: "/assets/wisdom-gallery/gita-cover.png",
        highlight: "Original 1972 Edition",
        fullSummary: "Bhagavad-gita As It Is presents Lord Krishna's words in their original meaning with Srila Prabhupada's authoritative commentary. It remains one of the most influential introductions to bhakti, dharma, karma, and the true purpose of life."
    },
    {
        title: "Srimad Bhagavatam",
        description: "Srimad Bhagavatam, an epic philosophical and literary classic also known as Srimad Bhagavata Maha Purana, expresses timeless Vedic wisdom and illuminates everything from the nature of the self to the origin of the universe.",
        shortDescription: "A timeless Vedic classic illuminating the self, creation, and devotion.",
        image: "/assets/activities/spiritual-discourses/srimad-bhagavatam.png",
        highlight: "The Ripened Fruit of Vedic Knowledge",
        fullSummary: "Srimad Bhagavatam, also known as Srimad Bhagavata Maha Purana, is an epic philosophical and literary classic expressing the timeless wisdom of the Vedas. Preserved through oral tradition and written down by Srila Vyasadeva, it is regarded as the ripened fruit of Vedic literature and the most complete exposition of divine knowledge. Spoken originally by Sukadeva Goswami, it guides the reader from the nature of the self to the highest stages of Krishna consciousness."
    },
    { 
        title: "Sri Caitanya Caritamrta", 
        description: "One of the most important works of historical and philosophical literature, presenting the life and teachings of Sri Caitanya Mahaprabhu in rich theological depth.",
        shortDescription: "The life and teachings of Sri Caitanya Mahaprabhu in a profound devotional classic.",
        image: "/assets/books/cc-cover.png",
        imageFit: "contain",
        highlight: "Life of the Golden Avatara",
        fullSummary: "Sri Caitanya Caritamrta is the principal work describing the life, teachings, and divine mission of Sri Caitanya Mahaprabhu, the incarnation of Krishna who inaugurated the chanting of the holy names for this age. It presents deep philosophical discussions, historical accounts, and devotional narratives, while preserving the original Bengali text along with translation, commentary, glossary, and detailed references."
    }
  ]

  const [selectedBook, setSelectedBook] = useState<(typeof booksData)[number] | null>(null)

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
                    className="group relative bg-[#FFF9F0] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#fbbf24]/30 flex flex-col cursor-pointer"
                    onClick={() => setSelectedBook(book)}
                >
                    <div className="relative w-full h-64 md:h-72 bg-gray-100 overflow-hidden border-b border-[#ea580c]/10">
                         <img 
                            src={book.image} 
                            alt={book.title} 
                            className={`w-full h-full ${book.imageFit === "contain" ? "object-contain p-3 bg-[#f7d28e]" : "object-cover"} group-hover:scale-110 transition-transform duration-700`}
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-5 flex-grow flex flex-col relative z-10 bg-[#FFF9F0]">
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#ea580c] mb-2">{book.highlight}</span>
                        <h4 className="text-lg font-bold text-[#2D0A0A] mb-2 font-serif group-hover:text-[#ea580c] transition-colors leading-tight line-clamp-2">
                            {book.title}
                        </h4>
                        <div className="h-[2px] w-12 bg-[#ea580c]/30 group-hover:w-20 group-hover:bg-[#ea580c] transition-all duration-300 mb-3 rounded-full"></div>
                        <p className="text-gray-600 text-[13px] leading-relaxed font-medium line-clamp-3">
                            {book.shortDescription ?? book.description}
                        </p>
                        <button
                          type="button"
                          className="mt-4 text-left text-xs font-bold uppercase tracking-[0.16em] text-[#701a1a]"
                        >
                          Click to read summary
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedBook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedBook(null)} />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[2rem] bg-[#FFF9F0] shadow-2xl border border-[#fbbf24]/30"
            >
              <button
                type="button"
                onClick={() => setSelectedBook(null)}
                className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2D0A0A] text-white hover:bg-[#701a1a] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr]">
                <div className="bg-white p-6 md:p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#ea580c]/10">
                  <img
                    src={selectedBook.image}
                    alt={selectedBook.title}
                    className="w-full max-w-xs h-auto object-contain"
                  />
                </div>

                <div className="p-6 md:p-8 lg:p-10">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ea580c] mb-3">{selectedBook.highlight}</p>
                  <h4 className="text-3xl md:text-4xl font-bold font-serif text-[#2D0A0A] mb-5 leading-tight">
                    {selectedBook.title}
                  </h4>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    {selectedBook.fullSummary ?? selectedBook.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

       <QuoteHighlight 
          text="These books can change your life. Try it out."
          author="Srila Prabhupada"
       />

    </SrilaPrabhupadaLayout>
  )
}
