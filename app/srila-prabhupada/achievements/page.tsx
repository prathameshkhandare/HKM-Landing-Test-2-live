"use client"

import React from "react"
import SrilaPrabhupadaLayout from "@/components/SrilaPrabhupadaLayout"
import SrilaPrabhupadaHeader from "@/components/SrilaPrabhupadaHeader"
import { PhilosophyCardGrid, PrincipleList } from "@/components/PhilosophyWidgets"
import Link from "next/link"
import { CheckCircle2, Globe, Book, Users, Star, Landmark, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function AchievementsPage() {
  const achievementCards = [
    { title: "Global Outreach", description: "Circled the globe fourteen times in just 11 years to propagate Krishna Consciousness.", image: "/assets/prabhupada/SP street sankirtana.png" },
    { title: "Simple Living, High Thinking", description: "Srila Prabhupada established self-sufficient farm communities to demonstrate a peaceful, god-centered life based on agriculture and cow protection.", image: "/assets/prabhupada/SP farm community.png", imagePos: "object-top" },
    { title: "Literary Contribution", description: "Authored over 80 volumes of authoritative translations and commentaries on Vedic scriptures.", image: "/assets/prabhupada/with-books.jpg", imagePos: "object-top" },
    { title: "Bhaktivedanta Book Trust", description: "Founded the BBT, now the world's largest publisher of Vedic literature.", image: "/assets/prabhupada/Bhaktivedanta Book trust (BBT).jpg", imagePos: "object-top" },
    { title: "Disciplic Succession", description: "Initiated thousands of disciples from all backgrounds into the Vaishnava tradition.", image: "/assets/prabhupada/initiated thousand disciples sp.png" },
    { title: "Rath Yatra Festivals", description: "Inaugurated the grand Rath Yatra festival in major cities like San Francisco, London, and New York.", image: "/assets/prabhupada/prabhupada ratha yatra celebrations.png" }
  ]

  const revolutionPoints = [
    { title: "Public Chanting", text: "Introduced the congregational chanting of the Hare Krishna Mahamantra in public parks and streets (Sankirtana)." },
    { title: "Back to Godhead", text: " revived and distributed the 'Back to Godhead' magazine to spread spiritual knowledge globally.", },
    { title: "Sunday Love Feasts", text: "Started the famous 'Sunday Love Feast' program, distributing free sanctified vegetarian food (Prasadam)." },
    { title: "Classroom of the World", text: "Deliver lectures from Bhagavad-gita and Srimad Bhagavatam in rented storefronts, making Vedic wisdom accessible to all." }
  ]

  return (
    <SrilaPrabhupadaLayout
      title="Achievements"
      subtitle="A lifetime of dedication in just twelve years"
      heroImage="/assets/hkm-about-education.png"
      customHeader={<SrilaPrabhupadaHeader />}
    >
      {/* Intro Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="text-[#ea580c] font-bold tracking-widest uppercase text-sm mb-2 block">Unparalleled Dedication</span>
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#2D0A0A] mb-6">Accomplishments of Srila Prabhupada</h2>
        <p className="text-xl text-gray-600 leading-relaxed font-serif">
          At the advanced age of 69, Srila Prabhupada traveled to the West and sparked a spiritual revolution that would change the course of history.
        </p>
      </div>

      <div className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100 mb-16">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Srila Prabhupada’s attempts to propagate Krishna Consciousness were initially met with resistance. However, after incorporating ISKCON in New York in 1966, he achieved the impossible. In the next 11 years, he circled the globe fourteen times, inspiring followers and engaging with leaders, scholars, and spiritual seekers.
        </p>
      </div>

      {/* Main Achievements Grid */}
      <div className="mb-24">
        <h3 className="text-3xl font-bold text-[#701a1a] mb-8 font-serif border-l-4 border-[#ea580c] pl-4">Key Milestones</h3>
        <PhilosophyCardGrid items={achievementCards} />
      </div>

      {/* Cultural Revolution Section */}
      <div className="mb-24">
        <h3 className="text-3xl font-bold text-[#701a1a] mb-8 font-serif border-l-4 border-[#ea580c] pl-4">The Cultural Revolution</h3>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-10">
          Arriving during the decade of discontent, Srila Prabhupada offered the American youth—who were disillusioned with the status quo and searching for alternatives—a genuine spiritual path. He brought the movement to the public eye through:
        </p>
        <PrincipleList items={revolutionPoints} />
      </div>


      {/* Video Section - Premium ICVK Style Card */}
      <div className="mb-24 flex justify-center px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl bg-[#0a0f1a] rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5"
        >
          {/* Video Area */}
          <div className="aspect-video w-full overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/UC-ss8-5fLI"
              title="Srila Prabhupada - The Acharya"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Info Area */}
          <div className="p-10 md:p-14 space-y-6">
            <div>
              <h4 className="text-[#FFB81C] text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">The Acharya</h4>
              <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed">
                The Acharya - A cinematic portrayal of the life and legacy of Srila Prabhupada, the founder-acharya of ISKCON.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="https://www.youtube.com/watch?v=UC-ss8-5fLI"
                target="_blank"
                className="inline-flex items-center gap-3 px-8 py-3.5 border-2 border-[#FFB81C] rounded-full text-[#FFB81C] font-bold hover:bg-[#FFB81C] hover:text-[#0a0f1a] transition-all duration-300 group"
              >
                Watch Full Documentary
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Photo Grid Premium */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 not-prose">
        {[
          { src: "/assets/sankirtana.jpg", caption: "Chanting in the parks" },
          { src: "/assets/Magazine-pic.jpg", caption: "Distributing Back to Godhead Magazine" },
          { src: "/assets/Lecture-pic.JPG", caption: "Delivering Lectures" },
          { src: "/assets/temple-pattern.PNG", caption: "Establishing Temples" }
        ].map((item, i) => (
          <div key={i} className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 aspect-[4/3]">
            <img src={item.src} alt={item.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <p className="text-white font-serif text-xl font-medium tracking-wide">{item.caption}</p>
            </div>
          </div>
        ))}
      </div> */}

      {/* Vision Section */}
      <div className="bg-[#FFF9F0] p-10 rounded-2xl border border-[#fbbf24]/30 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5">
          <Landmark size={200} />
        </div>
        <h3 className="text-3xl font-bold text-[#701a1a] mb-6 font-serif relative z-10">Vision for Self-Sufficiency</h3>
        <p className="text-lg text-gray-700 leading-relaxed relative z-10 mb-6">
          To revive the Krishna conscious tradition, he envisioned God-centered self-sufficient farm communities based on the principles of <strong>"Simple Living, High Thinking"</strong>. He established gurukuls and temples worldwide.
        </p>
        <blockquote className="text-2xl font-serif text-[#ea580c] italic border-l-4 border-[#ea580c] pl-6 py-2 relative z-10">
          "No one should go hungry within a 10 mile radius of an ISKCON temple."
        </blockquote>
      </div>

    </SrilaPrabhupadaLayout>
  )
}
