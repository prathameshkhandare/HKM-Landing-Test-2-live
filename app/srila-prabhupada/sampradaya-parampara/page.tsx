"use client"

import React from "react"
import Image from "next/image"
import SrilaPrabhupadaLayout from "@/components/SrilaPrabhupadaLayout"
import SrilaPrabhupadaHeader from "@/components/SrilaPrabhupadaHeader"
import { PrincipleList } from "@/components/PhilosophyWidgets"
import { ArrowRight, Sparkles, Flower } from "lucide-react"

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
      {/* The List Visualized - Enhanced Layout */}
      <div className="bg-[#2D0A0A] rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-2xl mb-24">
        <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-5 bg-repeat pointer-events-none"></div>
        {/* Vector Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#ea580c]/20 to-transparent rounded-bl-full pointer-events-none"></div>

        <div className="text-center mb-10 relative z-10">
            <h4 className="text-3xl font-bold text-[#fbbf24] font-serif mb-2">The Unbroken Chain</h4>
            <p className="text-white/60">From Sri Krishna to Srila Prabhupada</p>
        </div>

        <div className="flex flex-col gap-10 md:gap-16 relative z-10 w-full max-w-5xl mx-auto items-center">
             {/* List of Acharyas - Compact Flex-Wrap Pills (FIRST - Top) */}
            <div className="w-full relative">
                <div className="bg-[#fff7ed] text-gray-900 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 border-4 border-double border-[#fbbf24]/50 relative shadow-2xl z-20 overflow-hidden">
                     {/* Inner Watermark */}
                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[url('/assets/mandala-pattern.png')] opacity-5 bg-contain bg-no-repeat bg-center pointer-events-none animate-spin-slow"></div>

                     {/* Header */}
                    <div className="text-center mb-6 md:mb-10 relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-24 h-12 bg-[#fff7ed] rounded-t-full border-t-2 border-x-2 border-[#fbbf24]/50"></div>
                        
                        <div className="inline-flex items-center justify-center gap-3 bg-white px-6 py-2 rounded-full shadow-sm border border-[#fbbf24]/40 mb-4 relative z-10">
                            <Flower className="w-4 h-4 text-[#ea580c] animate-spin-slow" />
                            <span className="text-[#ea580c] font-bold text-xs uppercase tracking-[0.2em]">Brahma Madhva Gaudiya</span>
                            <Flower className="w-4 h-4 text-[#ea580c] animate-spin-slow" />
                        </div>
                         <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#4a0404] drop-shadow-sm">The Divine Chain</h2>
                         <div className="flex justify-center items-center gap-2 mt-2 opacity-60">
                            <span className="h-[1px] w-12 bg-[#ea580c]"></span>
                            <span className="text-[#ea580c] text-xs">✽</span>
                            <span className="h-[1px] w-12 bg-[#ea580c]"></span>
                         </div>
                    </div>

                    {/* Scrollable List container for Mobile */}
                    <div className="max-h-[400px] overflow-y-auto md:max-h-none md:overflow-visible pr-2 md:pr-0 scrollbar-thin scrollbar-thumb-[#ea580c]/50 scrollbar-track-transparent">
                        <div className="flex flex-wrap justify-center gap-3 md:gap-4 relative z-10 pb-4">
                        {acharyas.map((acharya, index) => (
                            <div key={index} className="flex items-center group">
                                <div className={`
                                    pl-3 pr-4 py-2 rounded-full border flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default
                                    ${index === acharyas.length - 1 
                                        ? "bg-gradient-to-r from-[#ea580c] to-[#c2410c] border-[#ea580c] text-white shadow-[#ea580c]/20 ring-2 ring-[#ea580c]/30" 
                                        : index === 0 
                                            ? "bg-[#fffbeb] border-[#fbbf24] text-[#4a0404] ring-1 ring-[#fbbf24]/50" 
                                            : "bg-white border-[#fbbf24]/30 text-[#4a0404] hover:border-[#ea580c] hover:bg-[#fff7ed]"}
                                `}>
                                    <span className={`
                                        w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 border
                                        ${index === acharyas.length - 1 ? "bg-white text-[#ea580c] border-white" : "bg-[#4a0404]/5 text-[#4a0404] border-[#4a0404]/10"}
                                    `}>
                                        {index + 1}
                                    </span>
                                    <span className={`text-sm font-medium whitespace-normal leading-tight text-center md:text-left ${index === acharyas.length - 1 ? "font-bold" : ""}`}>
                                        {acharya}
                                    </span>
                                </div>
                                
                                {/* Spiritual Link */}
                                {index < acharyas.length - 1 && (
                                    <div className="text-[#ea580c]/30 mx-1 group-hover:text-[#ea580c] transition-colors text-[10px]">
                                        ●
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
            </div>

            {/* Ornamental Divider */}
            <div className="w-full flex items-center justify-center gap-4 opacity-40">
                <div className="h-[1px] w-full max-w-xs bg-gradient-to-r from-transparent via-[#fbbf24] to-transparent"></div>
                <div className="text-2xl text-[#fbbf24]">❦</div>
                <div className="h-[1px] w-full max-w-xs bg-gradient-to-r from-transparent via-[#fbbf24] to-transparent"></div>
            </div>

            {/* Artistic Chain Image - Centered Below */}
            <div className="relative w-full max-w-md mx-auto transform hover:scale-[1.02] transition-transform duration-700 group -mt-4">
                {/* Divine Glow Behind */}
                <div className="absolute inset-0 bg-[#ea580c] blur-[90px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Ornate Frame */}
                <div className="relative border-8 border-double border-[#fff7ed] outline outline-1 outline-[#ea580c]/50 rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(234,88,12,0.4)] bg-white">
                    <Image 
                        src="/assets/parampara/unbroken_chain.png" 
                        alt="Unbroken Disciplic Succession" 
                        width={600} 
                        height={1200} 
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                        priority
                    />
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-center bg-gradient-to-t from-[#2D0A0A] via-[#2D0A0A]/80 to-transparent pt-24">
                            <h3 className="text-[#fbbf24] font-serif text-3xl font-bold mb-1 drop-shadow-md">Divya Parampara</h3>
                            <p className="text-[#fff7ed]/80 text-sm italic">The Eternal Bond</p>
                        </div>
                </div>
            </div>
        </div>
      </div>

      {/* Guru Parampara Chart Section */}
      <div className="mb-24 text-center">
          <div className="mb-10">
              <h3 className="text-3xl font-bold text-[#701a1a] mb-4 font-serif">Guru Parampara Chart</h3>
              <div className="w-24 h-1 bg-[#ea580c] mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                  A visual representation of the 32 Acharyas in the Brahma-Madhva-Gaudiya Sampradaya starting from Lord Sri Krishna.
              </p>
          </div>
          
          <div className="bg-white p-2 md:p-4 rounded-xl shadow-xl border border-[#ea580c]/20 max-w-7xl mx-auto overflow-hidden group">
              <div className="relative rounded-lg overflow-hidden">
                  <Image 
                      src="/assets/parampara/guru_parampara_chart.jpg" 
                      alt="Guru Parampara Chart - 32 Acharyas" 
                      width={1800}
                      height={1200}
                      className="w-full h-auto object-contain"
                      placeholder="empty"
                      priority={false}
                  />
              </div>
          </div>
      </div>

    </SrilaPrabhupadaLayout>
  )
}
