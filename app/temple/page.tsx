"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import SaffronCommonHeader from "@/components/SaffronCommonHeader"

const activities = [
  { name: "SPIRITUAL DISCOURSES", link: "/activities/spiritual-discourses" },
  { name: "YOUTH EMPOWERMENT CLUB – FOLK", link: "/activities/folk" },
  { name: "DISTRIBUTION OF SPIRITUAL KNOWLEDGE", link: "/activities/knowledge-distribution" },
  { name: "CULTURAL FESTIVALS", link: "/activities/cultural-festivals" },
  { name: "SUNDAY RETREATS", link: "/activities/sunday-retreats" },
  { name: "YUGA DHARMA", link: "/activities/yuga-dharma" },
  { name: "ASK A QUESTION", link: "/activities/ask-question" },
]

const festivals = [
  { name: "RATHA YATRA", link: "/festivals/ratha-yatra" },
  { name: "SRI NITYANANDA TRAYODASHI", link: "/festivals/nityananda-trayodashi" },
  { name: "SRI GAURA PURNIMA", link: "/festivals/gaura-purnima" },
  { name: "SRI RAMA NAVAMI", link: "/festivals/rama-navami" },
  { name: "SRI NARASIMHA JAYANTI", link: "/festivals/narasimha-jayanti" },
  { name: "PANIHATI CHIDA-DAHI UTSAVA", link: "/festivals/panihati-chida-dahi" },
  { name: "BALARAMA PURNIMA", link: "/festivals/balarama-purnima" },
  { name: "SRI KRISHNA JANMASHTAMI", link: "/festivals/krishna-janmashtami" },
  { name: "VYASA PUJA", link: "/festivals/vyasa-puja" },
  { name: "SRI RADHASHTAMI", link: "/festivals/radhashtami" },
  { name: "VAMANA JAYANTI", link: "/festivals/vamana-jayanti" },
  { name: "GOVARDHANA PUJA", link: "/festivals/govardhana-puja" },
  { name: "DEEPOTSAVA", link: "/festivals/deepotsava" },
]

const infoSections = [
  {
    title: "Deities of the Temple",
    content:
      "Hare Krishna Movement Chennai established their Lordships Arulmigu Sri Krishna Rukmini Satyabhama, Sri Sri Nitai Gauranga and Srila Prabhupada in year 2024. The presiding Deities of HKM Chennai are Arulmigu Sri Krishna Rukmini Satyabhama, Sri Sri Nitai Gauranga and Srila Prabhupada.",
  },
]

const templeTimings = [
  { time: "4:30 AM", activity: "Mangala Arati" },
  { time: "5:00 AM", activity: "Mantra Meditation" },
  { time: "7:15 AM", activity: "Shringara Arati" },
  { time: "7:30 AM", activity: "Guru Puja" },
  { time: "8:00 AM", activity: "Bhagavatam Class" },
  { time: "1:00 PM", activity: "Darshan Closes" },
  { time: "4:45 PM", activity: "Darshan Opens" },
  { time: "7:00 PM", activity: "Sandhya Arati" },
  { time: "7:30 PM", activity: "Ashtottara" },
  { time: "8:00 PM - 8:30 PM", activity: "Shayana Arati – Darshan Closes" },
]

export default function TemplePage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [selectedTiming, setSelectedTiming] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white text-[#3A3A3A] relative overflow-hidden">
      {/* Temple pattern background - Full coverage */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <img 
          src="/assets/temple-pattern.PNG" 
          alt="" 
          className="w-full h-full object-cover opacity-8"
        />
      </div>
      
      {/* Peacock feather decorations across the page */}
      <div className="fixed top-20 right-10 w-32 h-32 opacity-8 rotate-12 pointer-events-none z-0">
        <img src="/assets/peacock-feather.jpg" alt="" className="w-full h-full object-cover rounded-full blur-sm" />
      </div>
      <div className="fixed top-1/3 left-5 w-24 h-24 opacity-6 -rotate-45 pointer-events-none z-0">
        <img src="/assets/peacock-feather.jpg" alt="" className="w-full h-full object-cover rounded-full blur-[2px]" />
      </div>
      <div className="fixed bottom-1/4 right-20 w-20 h-20 opacity-7 rotate-90 pointer-events-none z-0">
        <img src="/assets/peacock-feather.jpg" alt="" className="w-full h-full object-cover rounded-full blur-sm" />
      </div>
      <div className="fixed bottom-40 left-10 w-28 h-28 opacity-5 rotate-180 pointer-events-none z-0">
        <img src="/assets/peacock-feather.jpg" alt="" className="w-full h-full object-cover rounded-full blur-[3px]" />
      </div>
      
      <div className="relative z-10">
        <NavbarDemo />

      <SaffronCommonHeader 
        title={<span>Dakṣiṇa <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-[#d97706]">Dvārakā</span> Dhāma</span>}
        subtitle="Cultural Complex to promote and preserve Indian heritage"
        stickerText="Temple Info"
      />

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Page Title */}
        <h2 className="text-6xl font-bold text-center mb-16 text-[#3A3A3A]">TEMPLE</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content area */}
          <div className="lg:col-span-2">
            {/* Temple Timings */}
            <div className="mb-12 relative overflow-hidden rounded-xl bg-[#FFF9F0] border-2 border-[#FFB81C]/30 p-8 shadow-2xl">
              {/* Peacock feather background images - Multiple decorative elements */}
              
              {/* Large feather top-right */}
              <div className="absolute -top-10 -right-10 w-64 h-64 opacity-15 rotate-45">
                <img 
                  src="/assets/peacock-feather.jpg" 
                  alt="Peacock Feather" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Medium feather bottom-left */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 opacity-10 -rotate-12">
                <img 
                  src="/assets/peacock-feather.jpg" 
                  alt="Peacock Feather" 
                  className="w-full h-full object-cover rounded-full blur-sm"
                />
              </div>
              
              {/* Small feather top-left */}
              <div className="absolute top-4 left-4 w-24 h-24 opacity-8 rotate-90">
                <img 
                  src="/assets/peacock-feather.jpg" 
                  alt="Peacock Feather" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Tiny feather middle-right */}
              <div className="absolute top-1/2 right-8 w-16 h-16 opacity-12 -rotate-45">
                <img 
                  src="/assets/peacock-feather.jpg" 
                  alt="Peacock Feather" 
                  className="w-full h-full object-cover rounded-full blur-[1px]"
                />
              </div>
              
              <div className="relative">
                <div className="mb-6 pb-4 border-b-2 border-[#FFB81C]/30">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#2D0A0A] tracking-wide font-serif">Temple Timings</h3>
                  <p className="text-sm text-[#2D0A0A]/70 mt-1 font-sans">Daily Schedule of Sacred Rituals</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {templeTimings.map((timing, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedTiming(selectedTiming === idx ? null : idx)}
                      className={`group cursor-pointer flex items-start gap-4 p-4 rounded-lg transition-all duration-300 ${
                        selectedTiming === idx
                          ? 'bg-white border-2 border-[#FFB81C] shadow-lg shadow-[#FFB81C]/20 scale-105'
                          : 'bg-white/60 hover:bg-white border border-[#FFB81C]/20 hover:border-[#FFB81C]/40 hover:shadow-md backdrop-blur-sm'
                      }`}
                    >
                      <div className="flex-shrink-0 w-20 text-right">
                        <span className={`text-sm font-bold block transition-all duration-300 font-serif ${
                          selectedTiming === idx ? 'text-[#2D0A0A] text-base' : 'text-[#8B5E00]'
                        }`}>
                          {timing.time}
                        </span>
                      </div>
                      <div className={`flex-1 border-l-2 pl-4 transition-all duration-300 ${
                        selectedTiming === idx ? 'border-[#FFB81C]' : 'border-[#FFB81C]/30'
                      }`}>
                        <span className={`text-sm font-medium block leading-tight transition-all duration-300 font-sans ${
                          selectedTiming === idx ? 'text-[#2D0A0A] font-semibold' : 'text-gray-700 group-hover:text-[#2D0A0A]'
                        }`}>
                          {timing.activity}
                        </span>
                        {selectedTiming === idx && (
                          <div className="mt-2 pt-2 border-t border-[#FFB81C]/30">
                            <span className="text-xs text-[#2D0A0A]/70 italic">Click again to deselect</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Information Sections */}
            <div className="space-y-4">
              {infoSections.map((section, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg border border-[#E5E5E5] overflow-hidden hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#ffcf73] transition-colors"
                  >
                    <h4 className="text-lg font-semibold text-[#2D0A0A] text-left font-serif">{section.title}</h4>
                    <ChevronDown
                      size={20}
                      className={`text-[#FFB81C] transition-transform ${expandedIndex === idx ? "rotate-180" : ""}`}
                    />
                  </button>

                  {expandedIndex === idx && (
                    <div className="px-6 py-4 bg-[#FFFFFF] border-t border-[#E5E5E5]">
                      <p className="text-[#666666] leading-relaxed">{section.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 lg:space-y-6">
            {/* Activities Card */}
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-orange-35 to-white border-2 border-[#ffcf40]/30 p-6 shadow-lg">
              {/* Decorative mandala pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>
              
              <div className="relative">
                <div className="mb-4 pb-3 border-b-2 border-[#FFFFFF]/20">
                  <h4 className="text-xl font-bold text-[#2D0A0A] tracking-wide font-serif">ACTIVITIES</h4>
                </div>
                
                <div className="space-y-1">
                  {activities.map((activity, idx) => (
                    <Link
                      key={idx}
                      href={activity.link}
                      className="group flex items-center gap-2 py-2 px-3 rounded-md hover:bg-orange-50/50 transition-all duration-200 border-l-2 border-transparent hover:border-[#FFB81C]"
                    >
                      <span className="text-[#FFB81C] text-sm">•</span>
                      <span className="text-xs font-medium text-[#3A3A3A] group-hover:text-[#2D0A0A] transition-colors flex-1 leading-tight">
                        {activity.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Festivals Card */}
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-red-50 to-white border-2 border-[#E8725C]/30 p-6 shadow-lg">
              <div className="relative">
                <div className="mb-4 pb-3 border-b-2 border-[#E8725C]/20">
                  <h4 className="text-xl font-bold text-[#2D0A0A] tracking-wide font-serif">FESTIVALS</h4>
                </div>
                
                <div className="space-y-1">
                  {festivals.map((festival, idx) => (
                    <Link
                      key={idx}
                      href={festival.link}
                      className="group flex items-center gap-2 py-2 px-3 rounded-md hover:bg-red-50/50 transition-all duration-200 border-l-2 border-transparent hover:border-[#E8725C]"
                    >
                      <span className="text-[#E8725C] text-sm">•</span>
                      <span className="text-xs font-medium text-[#3A3A3A] group-hover:text-[#2D0A0A] transition-colors flex-1 leading-tight">
                        {festival.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
      </div>
    </div>
  )
}
