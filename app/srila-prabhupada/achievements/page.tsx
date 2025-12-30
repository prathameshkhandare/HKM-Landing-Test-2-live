"use client"

import React from "react"
import SrilaPrabhupadaLayout from "@/components/SrilaPrabhupadaLayout"
import { CheckCircle2 } from "lucide-react"

export default function AchievementsPage() {
  const achievements = [
    "Circled the globe fourteen times in 11 years",
    "Established 108 temples, farms, and cultural centers",
    "Authored over 80 volumes of authorized translations",
    "Founded the Bhaktivedanta Book Trust (BBT)",
    "Initiated thousands of disciples worldwide",
    "Inaugurated the Rath Yatra festival in major western cities"
  ]

  return (
    <SrilaPrabhupadaLayout
      title="Achievements"
      subtitle="A lifetime of dedication in just twelve years"
      heroImage="/assets/hkm-about-education.png"
    >
      <h3 className="text-[#FBB201] mt-0 mb-6 font-bold text-2xl">Accomplishments of Srila Prabhupada</h3>
      <p>
        Srila Prabhupada’s attempts to propagate Krishna Consciousness were not received well by the people in India initially. At the age of 69 (in the year 1965) he went to the United States of America and incorporated the International Society for Krishna Consciousness (ISKCON).
      </p>
      <p>
        In the next 11 years, he circled the globe fourteen times inspiring his followers, delivering lectures, and discussing the philosophy of Krishna Consciousness with all interested persons.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {achievements.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <CheckCircle2 className="text-[#0078BF] shrink-0 mt-1" />
                <span className="font-medium text-gray-800">{item}</span>
            </div>
        ))}
      </div>

      <h3 className="text-[#FBB201] mt-12 mb-6 font-bold text-2xl">The Cultural Revolution</h3>
      <p>
        Srila Prabhupada arrived in the US during the decade of discontent; there was widespread dissatisfaction with America’s war with Vietnam. The American youth created their counter-culture popularly known as hippie culture. They were trying to break away from the status quo, searching for an alternative. Srila Prabhupada presented this alternative.
      </p>
      
      <p>Srila Prabhupada brought the Hare Krishna Movement to the public eye by:</p>
      <ul className="list-disc pl-6 space-y-5 my-8 marker:text-[#FBB201] text-lg leading-relaxed text-gray-700">
        <li>Chanting in the parks</li>
        <li>Distributing the Back to Godhead Magazine</li>
        <li>Conducting love feasts</li>
        <li>Delivering lectures from the Bhagavad-gita and Srimad Bhagavatam in a rented store-front</li>
      </ul>

      <p>
        Thus, he attracted many youngsters, who gradually became his disciples. Srila Prabhupada trained his disciples in the tradition of Deity Worship, to help them advance spiritually.
      </p>

      {/* Video Section */}
      <div className="my-10 aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-gray-200">
        <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/UC-ss8-5fLI" 
            title="Srila Prabhupada - The Acharya" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
        ></iframe>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 not-prose">
        <div className="space-y-2">
            <img src="/assets/sankirtana.jpg" alt="Sankirtana in the parks" className="rounded-xl shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform" />
            <p className="text-center text-sm text-gray-500 font-serif italic">Chanting in the parks</p>
        </div>
        <div className="space-y-2">
            <img src="/assets/Magazine-pic.jpg" alt="Back to Godhead Magazine" className="rounded-xl shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform" />
            <p className="text-center text-sm text-gray-500 font-serif italic">Distributing Back to Godhead Magazine</p>
        </div>
        <div className="space-y-2">
            <img src="/assets/Lecture-pic.JPG" alt="Delivering Lectures" className="rounded-xl shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform" />
            <p className="text-center text-sm text-gray-500 font-serif italic">Delivering Lectures</p>
        </div>
        <div className="space-y-2">
            <img src="/assets/temple-pattern.PNG" alt="Temple Construction" className="rounded-xl shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform" />
            <p className="text-center text-sm text-gray-500 font-serif italic">Establishing Temples</p>
        </div>
      </div>

      <h3 className="text-[#FBB201] mt-12 mb-6 font-bold text-2xl">Vision for Self-Sufficiency</h3>
      <p>
        To revive the Krishna conscious tradition, he envisioned God-centered self-sufficient farm communities based on the principles of Simple Living, High Thinking. In 1972, he started a gurukul in Dallas, Texas – an educational institution set up according to the traditional Vedic model. He established more than 108 temples and instructed his disciples that <strong>"no one should go hungry within a 10 mile radius of an ISKCON temple."</strong>
      </p>
    </SrilaPrabhupadaLayout>
  )
}
