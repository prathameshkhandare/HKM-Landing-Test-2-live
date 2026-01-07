"use client"

import React from "react"
import SrilaPrabhupadaLayout from "@/components/SrilaPrabhupadaLayout"
import SrilaPrabhupadaHeader from "@/components/SrilaPrabhupadaHeader"
import { QuoteHighlight } from "@/components/PhilosophyWidgets"
import { Lightbulb, ShieldCheck, User } from "lucide-react"

export default function TheGuruPage() {
  return (
    <SrilaPrabhupadaLayout
      title="The Guru"
      subtitle="The Representative of the Supreme Lord"
      heroImage="/assets/Lecture-pic.JPG"
      customHeader={<SrilaPrabhupadaHeader />}
    >
      {/* Intro Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-[#ea580c] font-bold tracking-widest uppercase text-sm mb-2 block">Spiritual Teacher</span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#2D0A0A] mb-6">Who is a Guru?</h2>
          <p className="text-xl text-gray-600 leading-relaxed font-serif">
            A spiritual master is the representative of the Supreme Personality of Godhead, descended from the spiritual world to reclaim fallen souls. The word <strong>Guru</strong> means "heavy"—heavy with Vedic knowledge.
          </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-[#FFF9F0] p-8 rounded-2xl border border-[#fbbf24]/30">
              <Lightbulb className="text-[#ea580c] mb-4" size={40} />
              <h3 className="text-2xl font-bold text-[#701a1a] mb-4 font-serif">Enlightenment</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                  Everyone is in the darkness of ignorance. One who enlightens his disciple and saves him from rotting in this darkness is a true guru.
              </p>
          </div>
          <div className="bg-[#FFF9F0] p-8 rounded-2xl border border-[#fbbf24]/30">
              <ShieldCheck className="text-[#ea580c] mb-4" size={40} />
              <h3 className="text-2xl font-bold text-[#701a1a] mb-4 font-serif">Liberation</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                  A guru should be approached not for material benefit, but for the purpose of getting liberated from the pangs of material existence.
              </p>
          </div>
      </div>

      {/* Sanskrit Sloka Section */}
      <div className="my-16 text-center">
         <h3 className="text-3xl font-bold text-[#701a1a] mb-8 font-serif">Srimad Bhagavatam (11.3.21)</h3>
         <div className="bg-[#2D0A0A] text-[#fef3c7] p-10 rounded-2xl shadow-2xl inline-block max-w-3xl relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-10 bg-contain bg-center pointer-events-none"></div>
             <p className="text-2xl md:text-3xl font-serif italic mb-4 relative z-10 leading-relaxed">
                 tasmad gurum prapadyeta <br/> jijnasuh shreya uttamam <br/>
                 shabde pare ca nishnatam <br/> brahmany upashamashrayam
             </p>
             <div className="h-[1px] w-24 bg-[#fbbf24]/50 mx-auto my-6"></div>
             <p className="text-lg text-gray-300 font-sans relative z-10 italic">
                 "Any person who seriously desires to achieve real happiness must seek out a bona fide spiritual master and take shelter of him by initiation."
             </p>
         </div>
      </div>

       {/* Confidential Associate */}
       <div className="mb-24">
        <h3 className="text-3xl font-bold text-[#701a1a] mb-8 font-serif border-l-4 border-[#ea580c] pl-4">Confidential Associate</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A bona fide spiritual master is a very confidential associate of the Supreme Lord Sri Krishna. On the order of the Supreme Lord, he teaches people about reestablishing their forgotten relationship with God.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
             A guru is also known as <strong>Acharya</strong>—one who knows the import of Vedic literature, abides by it, and teaches by his own example.
        </p>
      </div>

      <QuoteHighlight 
          text="Srila Prabhupada is the 32nd spiritual master descending in the glorious Brahma Madhva Gaudiya Sampradaya."
          author="The Founder-Acharya"
      />

    </SrilaPrabhupadaLayout>
  )
}
