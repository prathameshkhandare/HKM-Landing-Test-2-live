"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import Link from "next/link"

const activities = [
  { name: "ACTIVITIES", link: "/activities/" },
  { name: "FESTIVALS", link: "/festivals/" },
]

const festivals = [
  { name: "RATHA YATRA", link: "/festivals/ratha-yatra" },
  { name: "SRI NITYANANDA TRAYODASHI", link: "/festivals/nityananda-trayodashi" },
  { name: "SRI GAURA PURNIMA", link: "/festivals/gaura-purnima" },
]

const galleryImages = [
  { id: 1, alt: "Krishna temple deity" },
  { id: 2, alt: "Temple interior" },
  { id: 3, alt: "Festival celebration" },
  { id: 4, alt: "Spiritual gathering" },
  { id: 5, alt: "Temple decoration" },
  { id: 6, alt: "Community event" },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A]">
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
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance !text-white">DAKṢIṆA DVĀRAKĀ DHĀMA</h1>
              <p className="text-2xl md:text-3xl font-light mb-6 !text-white">
                Cultural Complex to promote and preserve Indian heritage
              </p>
            </div>
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
        {/* Page Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 md:mb-16 text-[#3A3A3A]">GALLERY</h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Main Gallery Area - Takes 3 columns on desktop */}
          <div className="lg:col-span-3">
            {/* Masonry-style Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[200px] gap-2 md:gap-4">
              {/* Image 1 - Large featured 2x2 */}
              <div className="col-span-2 row-span-2 relative rounded-lg md:rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-[#1B7CB8] to-[#E8725C]">
                <img
                  src={`/assets/srila-prabhupada.png`}
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image 2 - Square 1x1 on mobile, Tall 1x2 on desktop */}
              <div className="col-span-1 row-span-1 md:row-span-2 relative rounded-lg md:rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-[#1B7CB8] to-[#E8725C]">
                <img
                  src={`/assets/srila-prabhupada.png`}
                  alt={galleryImages[1].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image 3 - Square 1x1 on mobile, Tall 1x2 on desktop */}
              <div className="col-span-1 row-span-1 md:row-span-2 relative rounded-lg md:rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-[#1B7CB8] to-[#E8725C]">
                <img
                  src={`/assets/srila-prabhupada.png`}
                  alt={galleryImages[2].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image 4 - Square 1x1 */}
              <div className="col-span-1 row-span-1 relative rounded-lg md:rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-[#1B7CB8] to-[#E8725C]">
                <img
                  src={`/assets/srila-prabhupada.png`}
                  alt={galleryImages[3].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image 5 - Square 1x1 */}
              <div className="col-span-1 row-span-1 relative rounded-lg md:rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-[#1B7CB8] to-[#E8725C]">
                <img
                  src={`/assets/srila-prabhupada.png`}
                  alt={galleryImages[4].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image 6 - Wide 2x1 */}
              <div className="col-span-2 row-span-1 relative rounded-lg md:rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-[#1B7CB8] to-[#E8725C]">
                <img
                  src={`/assets/srila-prabhupada.png`}
                  alt={galleryImages[5].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Sidebar - Takes 1 column on desktop */}
          <div className="space-y-4 lg:space-y-6">
            {/* Activities Card */}
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-orange-50 to-white border-2 border-[#FFB81C]/30 p-6 shadow-lg">
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
                <div className="mb-4 pb-3 border-b-2 border-[#FFB81C]/20">
                  <h4 className="text-xl font-bold text-[#1B7CB8] tracking-wide">ACTIVITIES</h4>
                </div>
                
                <div className="space-y-2">
                  {activities.map((activity, idx) => (
                    <Link
                      key={idx}
                      href={activity.link}
                      className="group flex items-center gap-3 py-3 px-3 rounded-md hover:bg-orange-50/50 transition-all duration-200 border-l-2 border-transparent hover:border-[#FFB81C]"
                    >
                      <span className="text-[#FFB81C] text-lg">•</span>
                      <span className="text-sm font-medium text-[#3A3A3A] group-hover:text-[#1B7CB8] transition-colors flex-1">
                        {activity.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Festivals Card */}
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-red-50 to-white border-2 border-[#E8725C]/30 p-6 shadow-lg">
              {/* Decorative lotus pattern */}
              <div className="absolute bottom-0 left-0 w-20 h-20 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="relative">
                <div className="mb-4 pb-3 border-b-2 border-[#E8725C]/20">
                  <h4 className="text-xl font-bold text-[#1B7CB8] tracking-wide">FESTIVALS</h4>
                </div>
                
                <div className="space-y-2">
                  {festivals.map((festival, idx) => (
                    <Link
                      key={idx}
                      href={festival.link}
                      className="group flex items-center gap-3 py-3 px-3 rounded-md hover:bg-red-50/50 transition-all duration-200 border-l-2 border-transparent hover:border-[#E8725C]"
                    >
                      <span className="text-[#E8725C] text-lg">•</span>
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
  )
}
