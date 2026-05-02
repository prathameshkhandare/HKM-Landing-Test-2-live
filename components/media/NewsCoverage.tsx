"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Newspaper, ExternalLink, ArrowRight, X, ZoomIn } from "lucide-react"

type NewsItem =
  | {
      kind: "link"
      source: string
      date: string
      headline: string
      snippet: string
      link: string
    }
  | {
      kind: "image"
      source: string
      date: string
      headline: string
      snippet: string
      image: string
    }

const newsItems: NewsItem[] = [
  {
    kind: "image",
    source: "Newspaper",
    date: "Narasimha Jayanti",
    headline: "Narasimha Jayanti Celebrations at Dakshina Dwaraka Dham",
    snippet: "Press coverage of the grand Narasimha Jayanti festival celebrated at Hare Krishna Movement Chennai.",
    image: "/assets/media/narsimha_jayanti_newspaperarticle.jpeg",
  },
  {
    kind: "link",
    source: "The Hindu",
    date: "Featured Article",
    headline: "Annual Rath Yatra of Hare Krishna Movement held",
    snippet: "Coverage of the annual Rath Yatra procession of the Hare Krishna Movement in Chennai and the devotional participation it drew.",
    link: "https://www.thehindu.com/news/cities/chennai/annual-rath-yatra-of-hare-krishna-movement-held/article69251928.ece",
  },
]

export default function NewsCoverage() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <section className="py-20 bg-[#FFF9F0] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">In the Press</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#701a1a] font-serif">
              Media <span className="text-[#ea580c] italic">Coverage</span>
            </h2>
          </div>
          <button className="px-6 py-2 border-2 border-[#701a1a] text-[#701a1a] rounded-full font-bold hover:bg-[#701a1a] hover:text-white transition-all flex items-center gap-2 text-sm uppercase tracking-wide">
            View Archive <ArrowRight size={16} />
          </button>
        </div>

        {/* grid — items-stretch ensures equal column heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {newsItems.map((item, idx) => {
            if (item.kind === "image") {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col h-full bg-white rounded-xl shadow-lg border-l-4 border-[#FFB81C] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
                >
                  {/* Fixed-height image preview */}
                  <div
                    className="relative w-full h-56 flex-shrink-0 cursor-pointer overflow-hidden"
                    onClick={() => setLightbox(item.image)}
                  >
                    <img
                      src={item.image}
                      alt={item.headline}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-3">
                        <ZoomIn size={22} className="text-[#2d0a0a]" />
                      </div>
                    </div>
                  </div>

                  {/* Content — flex-1 fills remaining height */}
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <Newspaper className="text-[#ea580c]" size={20} />
                        <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider bg-[#ea580c]/10 px-2 py-1 rounded-md">
                          {item.source}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 font-medium">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#2d0a0a] mb-2 font-serif">{item.headline}</h3>
                    <p className="text-[#5a5a5a] text-sm leading-relaxed flex-1">"{item.snippet}"</p>
                    <button
                      onClick={() => setLightbox(item.image)}
                      className="mt-4 flex items-center text-[#ea580c] text-sm font-bold uppercase tracking-wide gap-2 hover:gap-3 transition-all self-start"
                    >
                      View Article <ZoomIn size={14} />
                    </button>
                  </div>
                </motion.div>
              )
            }

            return (
              <motion.a
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col h-full bg-white rounded-xl shadow-lg border-l-4 border-[#FFB81C] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group cursor-pointer"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Fixed-height styled header — matches image card top */}
                <div className="relative w-full h-56 flex-shrink-0 bg-gradient-to-br from-[#2d0a0a] to-[#701a1a] flex flex-col items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-10 bg-center bg-cover" />
                  <span className="relative z-10 text-[#FFB81C] text-6xl md:text-7xl font-black font-serif italic opacity-20 select-none leading-none">
                    TH
                  </span>
                  <span className="relative z-10 text-white text-2xl font-bold font-serif tracking-wide mt-2">
                    The Hindu
                  </span>
                  <span className="relative z-10 text-[#FFB81C]/80 text-xs uppercase tracking-[0.25em] mt-1 font-semibold">
                    Featured Coverage
                  </span>
                </div>

                {/* Content — flex-1 fills remaining height */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <Newspaper className="text-[#ea580c]" size={20} />
                      <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider bg-[#ea580c]/10 px-2 py-1 rounded-md">
                        {item.source}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 font-medium">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2d0a0a] mb-2 font-serif group-hover:text-[#ea580c] transition-colors">
                    {item.headline}
                  </h3>
                  <p className="text-[#5a5a5a] text-sm leading-relaxed flex-1">"{item.snippet}"</p>
                  <div className="mt-4 flex items-center text-[#ea580c] text-sm font-bold uppercase tracking-wide gap-2 group/link self-start">
                    Read Full Article
                    <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox}
                alt="Newspaper article"
                className="w-full h-full object-contain max-h-[88vh] rounded-xl shadow-2xl"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-red-600 rounded-full text-white transition-colors"
              >
                <X size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
