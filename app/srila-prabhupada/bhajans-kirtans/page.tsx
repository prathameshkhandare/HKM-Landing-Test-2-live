"use client"

import React from "react"
import SrilaPrabhupadaLayout from "@/components/SrilaPrabhupadaLayout"
import { Music2 } from "lucide-react"

export default function BhajansKirtansPage() {
  const soundcloudTracks = [
    {
        title: "Bhaja Bhakata Vatsala (Bhoga Arati)",
        url: "https://soundcloud.com/iskconbangalore/bhaja-bhakata-vatsala-bhoga-arati"
    },
    {
        title: "Bhajahu Re Mana",
        url: "https://soundcloud.com/iskconbangalore/bhajahu-re-mana"
    },
    {
        title: "Greeting of the Deities",
        url: "https://soundcloud.com/iskconbangalore/greeting-of-the-deit"
    },
    {
        title: "Hare Krishna Maha Mantra",
        url: "https://soundcloud.com/iskconbangalore/hare-krishna-maha-mantra"
    },
    {
        title: "Hari Haraye Namah",
        url: "https://soundcloud.com/iskconbangalore/hari-haraye-namah-krishna-nama-sankirtana"
    },
    {
        title: "Jaya Radha Jaya Krishna",
        url: "https://soundcloud.com/iskconbangalore/jaya-radha-jaya-krishna-vraja-dhama-mahimamrta"
    },
    {
        title: "Jaya Radha Madhava",
        url: "https://soundcloud.com/iskconbangalore/jaya-radha-madhava"
    },
    {
        title: "Gaura Arati",
        url: "https://soundcloud.com/iskconbangalore/kiba-jaya-jaya-sri-gaura-arati"
    }
  ]

  return (
    <SrilaPrabhupadaLayout
      title="Bhajans & Kirtans"
      subtitle="Divine Vibrations"
      heroImage="/assets/Music.jpg"
    >
      <p>
        Srila Prabhupada was an expert at everything: cooking, preaching, Deity worship, public relations, sankirtan, construction, and all else that it took to run a temple. 
      </p>
      <p>
        Here we present a few of his well-known bhajans. These recordings are sure to evoke devotion and are guaranteed to melt the heart of the listener. Chanting these holy sounds purifies the heart and cleanses the mind of material anxieties.
      </p>

      <div className="mt-10 space-y-6">
        <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-4">
            <Music2 className="text-[#FBB201]" size={28} />
            <h3 className="text-2xl font-bold text-[#FBB201] m-0">Transcendental Recordings</h3>
        </div>

        <div className="grid gap-6">
            {soundcloudTracks.map((track, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <iframe 
                        width="100%" 
                        height="166" 
                        scrolling="no" 
                        frameBorder="no" 
                        allow="autoplay" 
                        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.url)}&color=%23FBB201&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
                    ></iframe>
                </div>
            ))}
        </div>
      </div>
      
      <p className="mt-8 text-sm text-gray-500 italic text-center">
        * Recordings courtesy of ISKCON Bangalore SoundCloud.
      </p>

    </SrilaPrabhupadaLayout>
  )
}
