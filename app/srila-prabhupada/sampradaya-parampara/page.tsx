"use client"

import React from "react"
import SrilaPrabhupadaLayout from "@/components/SrilaPrabhupadaLayout"
import SrilaPrabhupadaHeader from "@/components/SrilaPrabhupadaHeader"
import { PrincipleList } from "@/components/PhilosophyWidgets"
import { ArrowRight, Sparkles } from "lucide-react"

export default function ParamparaPage() {
  const acharyas = [
    "Krishna", "Brahma", "Narada", "Vyasa", "Madhva", "Padmanabha", "Nrihari", "Madhava", "Akshobhya", 
    "Jayatirtha", "Jnanasindhu", "Dayanidhi", "Vidyanidhi", "Rajendra", "Jayadharma", "Purushottama", 
    "Brahmanya Tirtha", "Vyasa Tirtha", "Lakshmipati", "Madhavendra Puri", "Isvara Puri (Nityananda, Advaita)", 
    "Lord Chaitanya Mahaprabhu", "Rupa (Svarupa, Sanatana)", "Raghunatha, Jiva", "Krishnadasa", 
    "Narottama", "Visvanatha", "(Baladeva) Jagannatha", "Bhaktivinoda", "Gaurakisora", 
    "Bhaktisiddhanta Sarasvati", "A. C. Bhaktivedanta Swami Prabhupada"
  ]

  const sampradayas = [
    { title: "Brahma Sampradaya", text: "Originated from Lord Brahma (The Creator)" },
    { title: "Rudra Sampradaya", text: "Originated from Lord Shiva (The Destroyer)" },
    { title: "Sri Sampradaya", text: "Originated from Goddess Lakshmi (The Goddess of Fortune)" },
    { title: "Kumara Sampradaya", text: "Originated from the Four Kumaras (The Celibate Sages)" }
  ]

  return (
    <SrilaPrabhupadaLayout
      title="Guru Parampara"
      subtitle="The Disciplic Succession"
      heroImage="/assets/srila-prabhupada.png"
      customHeader={<SrilaPrabhupadaHeader />}
    >
      {/* Intro */}
      <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-[#ea580c] font-bold tracking-widest uppercase text-sm mb-2 block">The Authorized Process</span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#2D0A0A] mb-6">Receiving Transcendental Knowledge</h2>
          <p className="text-xl text-gray-600 leading-relaxed font-serif">
            Just as one approaches a bona fide university for education, one must approach a bona fide disciplic succession to receive perfect spiritual knowledge without adulteration.
          </p>
      </div>

      {/* Concept Block */}
      <div className="bg-gradient-to-r from-[#FFF9F0] to-white p-8 rounded-2xl border border-orange-100 shadow-sm mb-20 text-center">
         <h3 className="text-2xl font-bold text-[#701a1a] mb-4 font-serif">What is Guru Parampara?</h3>
         <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            The original source of all Vedic knowledge is Supreme Lord Sri Krishna. From Him, the knowledge is passed down through generations of pure devotees. This unbroken authorized chain, which maintains the message's purity, is known as <strong>Guru Parampara</strong>.
         </p>
      </div>

      {/* Four Sampradayas */}
      <div className="mb-24">
        <h3 className="text-3xl font-bold text-[#701a1a] mb-8 font-serif border-l-4 border-[#ea580c] pl-4">The Four Vaishnava Sampradayas</h3>
        <PrincipleList items={sampradayas} />
      </div>

      {/* Brahma Madhva Gaudiya Section */}
      <div className="mb-24">
         <h3 className="text-3xl font-bold text-[#701a1a] mb-8 font-serif border-l-4 border-[#ea580c] pl-4">Brahma Madhva Gaudiya Sampradaya</h3>
         <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Hare Krishna Movement traces its roots to the <strong>Brahma Madhva Gaudiya Sampradaya</strong>.
         </p>
         <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 marker:text-[#ea580c]">
             <li>Foremost disciple: <strong>Lord Brahma</strong></li>
             <li>Significant contributor: <strong>Sri Madhvacharya</strong> (Commentary on Brahma-sutras)</li>
             <li>Gaudiya influence: Spread to Gauda-desha (West Bengal) by <strong>Lord Chaitanya</strong></li>
         </ul>
      </div>

      {/* The List Visualized */}
      <div className="bg-[#2D0A0A] rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-5 bg-repeat pointer-events-none"></div>
        <div className="text-center mb-12 relative z-10">
            <h4 className="text-3xl font-bold text-[#fbbf24] font-serif mb-2">The Unbroken Chain</h4>
            <p className="text-white/60">From Sri Krishna to Srila Prabhupada</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {acharyas.map((acharya, index) => (
                <div key={index} className="flex items-center group">
                    <div className={`
                        px-5 py-3 rounded-full border flex items-center gap-3 transition-all duration-300
                        ${index === acharyas.length - 1 
                            ? "bg-[#fbbf24] border-[#fbbf24] text-[#2D0A0A] shadow-[0_0_20px_rgba(251,191,36,0.5)] scale-105 font-bold" 
                            : index === 0 
                                ? "bg-[#ea580c] border-[#ea580c] text-white font-bold" 
                                : "bg-white/10 border-white/20 text-white hover:bg-white/20"}
                    `}>
                        <span className={`
                            w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                            ${index === acharyas.length - 1 ? "bg-[#2D0A0A] text-[#fbbf24]" : "bg-white/20 text-white"}
                        `}>
                            {index + 1}
                        </span>
                        <span>{acharya}</span>
                        {index === acharyas.length - 1 && <Sparkles size={16} />}
                    </div>
                    {index < acharyas.length - 1 && (
                        <ArrowRight size={16} className="text-white/20 mx-1 lg:mx-2" />
                    )}
                </div>
            ))}
        </div>
      </div>

    </SrilaPrabhupadaLayout>
  )
}
