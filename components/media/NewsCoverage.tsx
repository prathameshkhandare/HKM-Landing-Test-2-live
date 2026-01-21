"use client"
import { motion } from "framer-motion"
import { Newspaper, ExternalLink, ArrowRight } from "lucide-react"

const newsItems = [
  {
    source: "The Hindu",
    date: "Jan 15, 2025",
    headline: "Dakshina Dwaraka Dham: A New Cultural Landmark in Chennai",
    snippet: "The newly inaugurated cultural complex promises to be a beacon of spiritual learning and heritage preservation...",
    type: "Article",
    link: "#"
  },
  {
    source: "Times of India",
    date: "Dec 25, 2024",
    headline: "Grand Ratha Yatra Witnessed by Thousands",
    snippet: "Devotees thronged the streets of Thiruvanmiyur as the Lord's chariot made its way through the city in a grand procession.",
    type: "Report",
    link: "#"
  },
  {
    source: "Dinamalar",
    date: "Dec 10, 2024",
    headline: "ICVK's Impact on Youth Values - Special Report",
    snippet: "An in-depth look at how the Indian Culture and Values for Kids program is shaping the next generation.",
    type: "Feature",
    link: "#"
  },
  {
    source: "Deccan Chronicle",
    date: "Nov 30, 2024",
    headline: "Annadanam: Feeding Souls and Bodies Alike",
    snippet: "Hare Krishna Movement's food distribution drive achieves a new milestone, serving over 10,000 meals daily.",
    type: "Article",
    link: "#"
  }
]

export default function NewsCoverage() {
  return (
    <section className="py-20 bg-[#FFF9F0] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.05]"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                     <span className="text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">In the Press</span>
                     <h2 className="text-4xl md:text-5xl font-bold text-[#701a1a] font-serif">Media <span className="text-[#ea580c] italic">Coverage</span></h2>
                </div>
                <button className="px-6 py-2 border-2 border-[#701a1a] text-[#701a1a] rounded-full font-bold hover:bg-[#701a1a] hover:text-white transition-all flex items-center gap-2 text-sm uppercase tracking-wide">
                    View Archive <ArrowRight size={16} />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {newsItems.map((item, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#FFB81C] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-2">
                                <Newspaper className="text-[#ea580c]" size={20} />
                                <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider bg-[#ea580c]/10 px-2 py-1 rounded-md">
                                    {item.source}
                                </span>
                            </div>
                            <span className="text-xs text-gray-400 font-medium">{item.date}</span>
                        </div>

                        <h3 className="text-xl font-bold text-[#2d0a0a] mb-3 font-serif group-hover:text-[#ea580c] transition-colors">
                            {item.headline}
                        </h3>
                        <p className="text-[#5a5a5a] text-sm leading-relaxed mb-6">
                            "{item.snippet}"
                        </p>

                        <div className="flex items-center text-[#ea580c] text-sm font-bold uppercase tracking-wide gap-2 group/link">
                            Read Full Article 
                            <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}
