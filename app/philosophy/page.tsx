"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import Link from "next/link"

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

const philosophyContent = [
  "The sunshine is light, the sun globe itself is light, and the sun-god is also light. However, the sunshine is not identical with the sun-god, Vivasvan. This is the meaning of simultaneously one and different. All the planets rest on the sunshine, and because of the heat of the sun, they all revolve in their orbits. On each and every planet, the trees and plants grow and change colors due to the sunshine. Being the rays of the sun, the sunshine is nondifferent from the sun. Similarly, all the planets, resting on the sunshine, are nondifferent from the sun. The entire material world is completely dependent on the sun, being produced by the sun, and the cause, the sun, is inherent in the effects. Similarly, Kṛṣṇa is the cause of all causes, and the effects are permeated by the original cause. The entire cosmic manifestation should be understood as the expanded energy of the Supreme Lord.",
  "This theory of simultaneous oneness and difference between the individual soul and the Supersoul is propounded by Lord Śrī Caitanya Mahaprabhu as the philosophy of acintya-bhedabheda-tattva. The Supreme Lord is one, and His expansions are various. He is therefore the Supersoul of everything. When a man sees anything, he must know that his seeing is secondary and the Lord's seeing is primary. One cannot see anything without the Lord's having first seen it. That is the instruction of the Vedas and the Upaniṣads. So whatever we see or do, the Supersoul of all acts of seeing or doing is the Lord.",
  "The virat-rupa, or the gigantic feature of the Supreme Lord, includes everything materially manifested, and therefore the virat or gigantic feature of the Lord is the Supersoul of all living and nonliving entities. But the virat-rupa is also the manifestation of Narayana or Visnu, and going further on and on one will eventually see that Lord Kṛṣṇa is the ultimate Supersoul of everything that be. The conclusion is that one should unhesitatingly become a worshiper of Lord Kṛṣṇa, or, for that matter, His plenary expansion Narayana, and none else.",
  "In the Vedic hymns, it is clearly said that first of all Narayana cast a glance over matter and thus there was creation. Before creation, there was neither Brahma nor Siva, and what to speak of others. The whole material creation, therefore, is one with and different from Narayana, simultaneously, and this supports the acintya-bhedabheda-tattva philosophy of Lord Sri Caitanya Mahaprabhu. Being an emanation from the glancing potency of Narayana, the whole material creation is nondifferent from Him. But because it is the effect of His external energy and is aloof from the internal potency, the whole material creation is different from Him at the same time.",
  "The example given in this verse very nicely is that of the dreaming man. The dreaming man creates many things in his dream, and thus he himself becomes the entangled seer of the dream and is also affected by the consequences. This material creation is also exactly a dreamlike creation of the Lord, but He, being the transcendental Supersoul, is neither entangled nor affected by the reactions of such a dreamlike creation. He is always in His transcendental position, but essentially He is everything, and nothing is apart from Him.",
]

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-white text-[#3A3A3A] relative overflow-hidden">
      {/* Mandala pattern backgrounds */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-10 w-[400px] h-[400px] opacity-4">
          <img src="/assets/BlackWhiteMandalaPattern3.jpg" alt="" className="w-full h-full object-contain rotate-45 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
        </div>
        <div className="absolute bottom-20 left-10 w-[350px] h-[350px] opacity-3">
          <img src="/assets/BlackWhiteMandalaPattern4.jpg" alt="" className="w-full h-full object-contain -rotate-30 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
        </div>
      </div>
      
      <div className="relative z-10">
        <NavbarDemo />

      {/* Hero Section */}
      <section
        className="relative py-32 px-4 md:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/ancient-temple-spiritual-architecture.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side text */}
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance !text-white">DAKṢIṆA DVĀRAKĀ DHĀMA</h1>
              <p className="text-2xl md:text-3xl font-light mb-6 !text-white">
                Cultural Complex to promote and preserve Indian heritage
              </p>
            </div>

            {/* Right side red text */}
            <div className="bg-red-700/80 rounded-lg p-8">
              <p className="text-white text-center text-xl md:text-2xl font-semibold leading-relaxed">
                HARE KRISHNA HARE KRISHNA
                <br />
                KRISHNA KRISHNA HARE HARE !
                <br />
                HARE RAMA HARE RAMA
                <br />
                RAMA RAMA HARE HARE !!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Page Title with decorative elements */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-6xl font-bold text-[#1B7CB8] mb-2">PHILOSOPHY</h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent"></div>
          </div>
          <p className="text-lg text-[#666666] mt-4">Acintya-Bhedabheda-Tattva</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content area - Takes 3 columns */}
          <div className="lg:col-span-3">
            {/* Philosophy Content - Premium Typography */}
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100 relative overflow-hidden">
              {/* Om symbol watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-3 pointer-events-none">
                <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text
                    x="200"
                    y="240"
                    fontSize="200"
                    fontWeight="bold"
                    textAnchor="middle"
                    fill="#1B7CB8"
                    fontFamily="Georgia, serif"
                  >
                    ॐ
                  </text>
                </svg>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[#1B7CB8] mb-8 pb-4 border-b-2 border-[#FFB81C]/30 relative z-10">
                Simultaneous Oneness and Difference
              </h3>
              
              {/* Text content */}
              <div className="relative z-10 space-y-6 text-[#444444]">
                {philosophyContent.map((paragraph, idx) => (
                  <p 
                    key={idx} 
                    className="text-base md:text-lg leading-relaxed"
                    style={{ textAlign: 'justify', textJustify: 'inter-word' }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {/* Quote Section */}
              <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-[#1B7CB8]/5 to-[#FFB81C]/5 rounded-xl border-l-4 border-[#1B7CB8] relative z-10">
                <p className="text-lg md:text-xl text-[#1B7CB8] leading-relaxed" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', fontWeight: '500' }}>
                  "The Supreme Lord is one, and His expansions are various. He is therefore the Supersoul of everything."
                </p>
                <p className="text-sm text-[#666666] mt-3" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>— Vedic Philosophy</p>
              </div>
            </div>
          </div>

          {/* Sidebar - Takes 1 column */}
          <div className="space-y-6">
            {/* Activities Card */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-orange-50 to-white border-2 border-[#FFB81C]/30 p-6 shadow-lg sticky top-24">
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>
              
              <div className="relative">
                <div className="mb-4 pb-3 border-b-2 border-[#FFB81C]/20">
                  <h4 className="text-xl font-bold text-[#1B7CB8] tracking-wide">ACTIVITIES</h4>
                </div>
                
                <div className="space-y-1">
                  {activities.map((activity, idx) => (
                    <Link
                      key={idx}
                      href={activity.link}
                      className="group flex items-center gap-2 py-2 px-3 rounded-md hover:bg-orange-50/50 transition-all duration-200 border-l-2 border-transparent hover:border-[#FFB81C]"
                    >
                      <span className="text-[#FFB81C] text-sm">•</span>
                      <span className="text-xs font-medium text-[#3A3A3A] group-hover:text-[#1B7CB8] transition-colors flex-1 leading-tight">
                        {activity.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Festivals Card */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-red-50 to-white border-2 border-[#E8725C]/30 p-6 shadow-lg">
              <div className="relative">
                <div className="mb-4 pb-3 border-b-2 border-[#E8725C]/20">
                  <h4 className="text-xl font-bold text-[#1B7CB8] tracking-wide">FESTIVALS</h4>
                </div>
                
                <div className="space-y-1">
                  {festivals.map((festival, idx) => (
                    <Link
                      key={idx}
                      href={festival.link}
                      className="group flex items-center gap-2 py-2 px-3 rounded-md hover:bg-red-50/50 transition-all duration-200 border-l-2 border-transparent hover:border-[#E8725C]"
                    >
                      <span className="text-[#E8725C] text-sm">•</span>
                      <span className="text-xs font-medium text-[#3A3A3A] group-hover:text-[#1B7CB8] transition-colors flex-1 leading-tight">
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
