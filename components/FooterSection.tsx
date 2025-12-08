"use client"

import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export default function FooterSection() {
  const handleLocationClick = () => {
    window.open("https://maps.google.com/?q=Hare+Krishna+Movement+Chennai", "_blank")
  }

  return (
    <footer className="relative z-10 py-3 sm:py-12 md:py-20 px-4 sm:px-6 bg-slate-100 overflow-hidden">
      {/* Mandala pattern backgrounds in footer */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-6 pointer-events-none">
        <img src="/assets/BlackWhiteMandalaPattern1.jpg" alt="" className="w-full h-full object-contain rotate-45" />
      </div>
      <div className="absolute bottom-0 right-0 w-72 h-72 opacity-5 pointer-events-none">
        <img src="/assets/BlackWhiteMandalaPattern2.jpg" alt="" className="w-full h-full object-contain -rotate-30" />
      </div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 opacity-3 pointer-events-none">
        <img src="/assets/BlackWhiteMandalaPattern3.jpg" alt="" className="w-full h-full object-contain rotate-90" />
      </div>
      
      {/* Peacock feather decorations in footer */}
      <div className="absolute top-10 right-10 w-40 h-40 opacity-8 rotate-45 pointer-events-none">
        <img src="/assets/peacock-feather.jpg" alt="" className="w-full h-full object-cover rounded-full blur-sm" />
      </div>
      <div className="absolute bottom-10 left-10 w-32 h-32 opacity-6 -rotate-30 pointer-events-none">
        <img src="/assets/peacock-feather.jpg" alt="" className="w-full h-full object-cover rounded-full blur-[2px]" />
      </div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 opacity-5 rotate-90 pointer-events-none">
        <img src="/assets/peacock-feather.jpg" alt="" className="w-full h-full object-cover rounded-full blur-[3px]" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="rounded-xl sm:rounded-3xl bg-gradient-to-br from-[#1B7CB8] to-[#156399] p-2.5 sm:p-6 md:p-10 shadow-xl backdrop-blur-sm relative overflow-hidden">
          {/* Peacock feathers inside footer card */}
          <div className="absolute top-5 right-5 w-28 h-28 opacity-10 rotate-12 pointer-events-none">
            <img src="/assets/peacock-feather.jpg" alt="" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="absolute bottom-5 left-5 w-20 h-20 opacity-8 -rotate-45 pointer-events-none">
            <img src="/assets/peacock-feather.jpg" alt="" className="w-full h-full object-cover rounded-full blur-sm" />
          </div>
          
          {/* Mobile Compact Layout */}
          <div className="md:hidden">
            {/* Brand Section */}
            <div className="mb-1.5">
              <button
                onClick={handleLocationClick}
                className="flex items-center gap-1 w-full"
                aria-label="View location on map"
              >
                <MapPin className="w-3 h-3 text-[#FFB81C] flex-shrink-0" />
                <span className="text-[11px] font-semibold text-white text-left leading-tight">
                  Hare Krishna Movement, Chennai
                </span>
              </button>
            </div>

            {/* Horizontal Link Sections */}
            <div className="grid grid-cols-3 gap-2.5 mb-0.5">
              {/* Programs */}
              <div>
                <h3 className="text-[10px] font-bold uppercase text-white mb-4 !leading-[1]">Programs</h3>
                <ul>
                  {["Gita Life", "ICVK", "FOLK", "Ashray"].map((item, idx) => (
                    <li key={item} className="!leading-[1]" style={{marginTop: idx === 0 ? '0' : '-26px'}}>
                      <a href="#" className="text-[10px] text-white/80 hover:text-[#FFB81C] block !leading-[1]" style={{lineHeight: '1', display: 'block'}}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About */}
              <div>
                <h3 className="text-[10px] font-bold uppercase text-white mb-4 !leading-[1]">About</h3>
                <ul>
                  {["Mission", " Srila Prabhupada", "Team", "Guidance"].map((item, idx) => (
                    <li key={item} className="!leading-[1]" style={{marginTop: idx === 0 ? '0' : '-26px'}}>
                      <a href="#" className="text-[10px] text-white/80 hover:text-[#FFB81C] block !leading-[1]" style={{lineHeight: '1', display: 'block'}}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-[10px] font-bold uppercase text-white mb-4 !leading-[1]">Resources</h3>
                <ul>
                  {["Help", "Contact", "FAQ", "Donate"].map((item, idx) => (
                    <li key={item} className="!leading-[1]" style={{marginTop: idx === 0 ? '0' : '-26px'}}>
                      <a href="#" className="text-[10px] text-white/80 hover:text-[#FFB81C] block !leading-[1]" style={{lineHeight: '1', display: 'block'}}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter - Compact */}
            <div className="border-t border-white/20 pt-1.5 mb-1.5">
              <div className="flex gap-1.5">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-2 py-1.5 text-[10px] rounded bg-white/10 ring-1 ring-white/20 border-0 text-white placeholder:text-white/60 focus:ring-2 focus:ring-[#FFB81C] focus:outline-none"
                />
                <Button className="bg-[#FFB81C] text-[#3A3A3A] hover:bg-[#E5A519] rounded px-3 py-1.5 shadow-lg font-semibold text-[10px] whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Copyright - Compact */}
            <div className="border-t border-white/20 pt-1.5">
              <p className="text-[9px] text-white/70 text-center leading-[1.2]">
                © 2025 HKM Chennai
              </p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-8 md:mb-10">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2.5 mb-4">
                  <button
                    onClick={handleLocationClick}
                    className="hover:scale-110 transition-transform cursor-pointer flex-shrink-0"
                    aria-label="View location on map"
                  >
                    <MapPin className="w-5 h-5 text-[#FFB81C] hover:text-[#E5A519]" />
                  </button>
                  <span className="text-base md:text-lg font-semibold text-white leading-tight">
                    Hare Krishna Movement, Chennai
                  </span>
                </div>
                <p className="text-sm md:text-base text-white/90 text-pretty leading-relaxed">
                  An affiliate of Srila Prabhupada's ISKCON, spreading the timeless wisdom of the Bhagavad-gita through a variety of spiritual and social initiatives across Chennai.
                </p>
              </div>

              {/* Programs Links */}
              <div>
                <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider mb-3 md:mb-4 text-white">
                  PROGRAMS
                </h3>
                <ul className="space-y-1.5 md:space-y-2">
                  {["Gita Life", "ICVK (For Kids)", "FOLK (For Youth)", "Srila Prabhupada Ashray"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-xs md:text-sm text-white/80 hover:text-[#FFB81C] transition-colors block leading-snug">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div>
                <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider mb-3 md:mb-4 text-white">
                  ABOUT
                </h3>
                <ul className="space-y-1.5 md:space-y-2">
                  {["Our Mission", "Srila Prabhupada", "Our Team", "Spiritual Guidance"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-xs md:text-sm text-white/80 hover:text-[#FFB81C] transition-colors block leading-snug">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider mb-3 md:mb-4 text-white">
                  RESOURCES
                </h3>
                <ul className="space-y-1.5 md:space-y-2">
                  {["Help Center", "Contact Us", "FAQ", "Donate"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-xs md:text-sm text-white/80 hover:text-[#FFB81C] transition-colors block leading-snug">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/20 pt-6 md:pt-8 mb-6 md:mb-8">
              <div className="max-w-md">
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">
                  Get Spiritual Updates
                </h3>
                <div className="flex gap-2.5">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3.5 py-2.5 text-sm rounded-lg bg-white/10 ring-1 ring-white/20 border-0 text-white placeholder:text-white/60 focus:ring-2 focus:ring-[#FFB81C] focus:outline-none"
                  />
                  <Button className="bg-[#FFB81C] text-[#3A3A3A] hover:bg-[#E5A519] rounded-lg px-5 py-2.5 shadow-lg font-semibold text-sm whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/20 pt-5">
              <p className="text-xs md:text-sm text-white/70 text-center leading-snug">
                © 2025 Hare Krishna Movement, Chennai. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
