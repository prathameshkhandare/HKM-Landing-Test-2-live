"use client"

import React from "react"
import SrilaPrabhupadaLayout from "@/components/SrilaPrabhupadaLayout"
import SrilaPrabhupadaHeader from "@/components/SrilaPrabhupadaHeader"
import { QuoteHighlight } from "@/components/PhilosophyWidgets"
import { Music2, PlayCircle } from "lucide-react"

export default function BhajansKirtansPage() {
  const soundcloudTracks = [
    { title: "Bhaja Bhakata Vatsala (Bhoga Arati)", url: "https://soundcloud.com/iskconbangalore/bhaja-bhakata-vatsala-bhoga-arati" },
    { title: "Bhajahu Re Mana", url: "https://soundcloud.com/iskconbangalore/bhajahu-re-mana" },
    { title: "Greeting of the Deities", url: "https://soundcloud.com/iskconbangalore/greeting-of-the-deit" },
    { title: "Hare Krishna Maha Mantra", url: "https://soundcloud.com/iskconbangalore/hare-krishna-maha-mantra" },
    { title: "Hari Haraye Namah", url: "https://soundcloud.com/iskconbangalore/hari-haraye-namah-krishna-nama-sankirtana" },
    { title: "Jaya Radha Jaya Krishna", url: "https://soundcloud.com/iskconbangalore/jaya-radha-jaya-krishna-vraja-dhama-mahimamrta" },
    { title: "Jaya Radha Madhava", url: "https://soundcloud.com/iskconbangalore/jaya-radha-madhava" },
    { title: "Gaura Arati", url: "https://soundcloud.com/iskconbangalore/kiba-jaya-jaya-sri-gaura-arati" }
  ]

  return (
    <SrilaPrabhupadaLayout
      title="Bhajans & Kirtans"
      subtitle="Divine Vibrations"
      heroImage="/assets/Music.jpg"
      customHeader={<SrilaPrabhupadaHeader />}
    >
      {/* Intro Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-[#ea580c] font-bold tracking-widest uppercase text-sm mb-2 block">Transcendental Sound</span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#2D0A0A] mb-6">Bhajans and Kirtans</h2>
          <p className="text-xl text-gray-600 leading-relaxed font-serif">
            Srila Prabhupada was an expert at everything—including the art of Kirtan. His recordings are charged with pure devotion and have the potency to awaken the soul.
          </p>
      </div>

       <QuoteHighlight 
          text="These recordings are sure to evoke devotion and are guaranteed to melt the heart of the listener. Chanting these holy sounds purifies the heart and cleanses the mind of material anxieties."
          author="Srila Prabhupada's Kirtan"
       />

      <div className="mt-16">
        <div className="flex items-center justify-center gap-3 mb-10">
            <Music2 className="text-[#ea580c]" size={32} />
            <h3 className="text-3xl font-bold text-[#701a1a] font-serif m-0">Transcendental Playlist</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {soundcloudTracks.map((track, idx) => (
                <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#ea580c]/30 transform hover:-translate-y-1">
                    <div className="bg-[#2D0A0A] p-3 flex items-center justify-between text-white/90 text-sm font-medium">
                        <span className="truncate pr-4">{track.title}</span>
                        <PlayCircle size={18} className="text-[#fbbf24]" />
                    </div>
                    <iframe 
                        width="100%" 
                        height="160" 
                        scrolling="no" 
                        frameBorder="no" 
                        allow="autoplay" 
                        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.url)}&color=%23FBB201&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
                        className="w-full"
                    ></iframe>
                </div>
            ))}
        </div>
      </div>
      
      <p className="mt-12 text-sm text-gray-400 italic text-center font-serif">
        * Recordings courtesy of ISKCON Bangalore SoundCloud.
      </p>

    </SrilaPrabhupadaLayout>
  )
}
