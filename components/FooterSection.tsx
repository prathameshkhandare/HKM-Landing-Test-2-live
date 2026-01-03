"use client"

import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function FooterSection() {
  const handleLocationClick = () => {
    window.open("https://maps.google.com/?q=Hare+Krishna+Movement+Chennai", "_blank")
  }

  return (
    <footer className="relative z-10 py-4 md:py-8 px-4 sm:px-6 bg-slate-100 overflow-hidden">
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
        <div className="rounded-xl sm:rounded-3xl bg-gradient-to-br from-[#EAC117] via-[#D3AA00] to-[#B8860B] p-4 sm:p-5 md:p-6 shadow-2xl relative overflow-hidden ring-4 ring-[#D3AA00]/50">
          
          {/* Decorative Elements - Warm Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FFF8DC]/40 to-transparent rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 mix-blend-overlay"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#FFF8DC]/30 to-transparent rounded-full blur-3xl pointer-events-none -ml-16 -mb-16 mix-blend-overlay"></div>

          {/* Mandala Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.07] bg-[url('/assets/10BlackWhiteMandalaPattern1.jpg')] bg-cover mix-blend-overlay pointer-events-none"></div>

          {/* Top Wave Vector Decoration */}
          <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none opacity-20">
             <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill="#FFFFFF" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
             </svg>
          </div>

          {/* Quick Falling Flowers/Sparkles Animation (Simple CSS Video Placeholder style) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-white/20 rounded-full blur-[1px]"
                    style={{
                        width: Math.random() * 10 + 5,
                        height: Math.random() * 10 + 5,
                        left: `${Math.random() * 100}%`,
                        top: -20
                    }}
                    animate={{
                        y: [0, 800],
                        opacity: [0, 1, 0],
                        rotate: [0, 360]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear"
                    }}
                  />
              ))}
          </div>

          {/* Peacock feathers top right */}
          <div className="absolute top-5 right-5 w-32 h-32 opacity-15 rotate-12 pointer-events-none mix-blend-multiply">
            <img src="/assets/peacock-feather.jpg" alt="" className="w-full h-full object-cover rounded-full" />
          </div>
          
          {/* Mobile Compact Layout */}
          <div className="md:hidden relative z-10">
            {/* Brand Section */}
            <div className="mb-3">
              <button
                onClick={handleLocationClick}
                className="flex items-start gap-2 w-full"
                aria-label="View location on map"
              >
                <div className="bg-[#003366] p-1.5 rounded-full backdrop-blur-sm mt-0.5 shadow-sm">
                    <MapPin className="w-3.5 h-3.5 text-[#FFD700]" />
                </div>
                <div className="text-left">
                    <span className="block text-xs font-extrabold text-[#003366] tracking-wide leading-tight shadow-white drop-shadow-sm">
                        DAKSHIN DWARAKA DHAM
                    </span>
                    <span className="block text-[10px] font-bold text-[#004E89] mt-0.5 leading-tight">
                        Project by Hare Krishna Movement Chennai
                    </span>
                </div>
              </button>
            </div>

            {/* Horizontal Link Sections */}
            <div className="grid grid-cols-3 gap-2 mb-3 border-t border-[#003366]/10 pt-3">
              {/* Programs */}
              <div>
                <h3 className="text-[11px] font-black uppercase text-[#003366] mb-3 tracking-wider">Programs</h3>
                <ul className="space-y-2">
                  {["Gita Life", "ICVK", "FOLK", "Ashray"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-[11px] font-bold text-[#004E89] hover:text-[#002244] block transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About */}
              <div>
                <h3 className="text-[11px] font-black uppercase text-[#003366] mb-3 tracking-wider">About</h3>
                <ul className="space-y-2">
                  {["Mission", "Prabhupada", "Team", "Guidance"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-[11px] font-bold text-[#004E89] hover:text-[#002244] block transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-[11px] font-black uppercase text-[#003366] mb-3 tracking-wider">Resources</h3>
                <ul className="space-y-2">
                  {["Help", "Contact", "FAQ", "Donate"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-[11px] font-bold text-[#004E89] hover:text-[#002244] block transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter - Compact */}
            <div className="bg-[#003366]/5 rounded-lg p-2.5 mb-2 border border-[#003366]/10 backdrop-blur-sm">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-3 py-2 text-[11px] rounded-lg bg-white/80 text-slate-800 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#003366] border border-[#003366]/20"
                />
                <Button className="bg-[#003366] hover:bg-[#002244] text-white rounded-lg px-4 py-2 shadow-lg font-bold text-[10px] whitespace-nowrap">
                  JOIN
                </Button>
              </div>
            </div>

            {/* Copyright - Compact */}
            <div className="text-center border-t border-[#003366]/10 pt-3">
              <p className="text-[10px] text-[#003366]/70 font-bold">
                © 2025 HKM Chennai
              </p>
            </div>
          </div>

            {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
              {/* Brand Section - Compact */}
              <div className="lg:col-span-2 flex items-start gap-4">
                <div className="bg-[#003366] p-2.5 rounded-full shadow-lg border-2 border-[#D3AA00]">
                     <MapPin className="w-6 h-6 text-[#FFD700]" />
                </div>
                
                <div className="flex-1">
                    <div className="mb-3 relative">
                        <span className="text-xl md:text-2xl font-extrabold text-[#003366] leading-tight block tracking-tight drop-shadow-sm">
                            DAKSHIN DWARAKA DHAM
                        </span>
                        <div className="w-10 h-1 bg-[#003366] rounded-full my-2"></div>
                        <span className="block text-sm font-bold text-[#004E89] mt-0.5 uppercase tracking-wide">
                            Project by Hare Krishna Movement Chennai
                        </span>
                        <span className="block text-xs font-bold text-[#003366]/70 mt-0.5">
                            (An affiliate of Srila Prabhupada's ISKCON Bangalore)
                        </span>
                    </div>

                    <p className="text-sm text-[#003366] leading-snug font-semibold bg-[#fff8e1]/30 p-3 rounded-lg border-l-4 border-[#003366] backdrop-blur-sm shadow-sm">
                      Spreading the timeless wisdom of the Bhagavad-gita through a variety of spiritual and social initiatives across Chennai.
                    </p>
                </div>
              </div>

              {/* Links Sections - Compact */}
              {[
                { title: "PROGRAMS", links: ["Gita Life", "ICVK (For Kids)", "FOLK (For Youth)", "Srila Prabhupada Ashray"] },
                { title: "ABOUT", links: ["Our Mission", "Srila Prabhupada", "Our Team", "Spiritual Guidance"] },
                { title: "RESOURCES", links: ["Help Center", "Contact Us", "FAQ", "Donate"] }
              ].map((section) => (
                <div key={section.title}>
                    <h3 className="text-xs font-black uppercase tracking-widest mb-3 text-[#003366] border-b-2 border-[#003366]/30 pb-1 inline-block">
                    {section.title}
                    </h3>
                    <ul className="space-y-1.5">
                    {section.links.map((item) => (
                        <li key={item}>
                        <a href="#" className="text-xs font-bold text-[#004E89] hover:text-[#002244] hover:translate-x-1 transition-all duration-300 block">
                            {item}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>
              ))}
            </div>

            {/* Newsletter Section - Compact Bar */}
            <div className="bg-[#003366] rounded-xl p-4 flex flex-col md:flex-row justify-between items-center gap-4 shadow-xl relative overflow-hidden group border border-[#003366]/20">
                {/* Mandala in Newsletter too */}
                <div className="absolute inset-0 bg-[url('/assets/10BlackWhiteMandalaPattern1.jpg')] opacity-10 bg-cover mix-blend-overlay"></div>
                
                <div className="max-w-lg relative z-10 flex items-center gap-3">
                    <span className="text-2xl">📩</span>
                    <div>
                        <h3 className="text-base font-bold text-white leading-tight">
                             Get Spiritual Updates
                        </h3>
                        <p className="text-xs text-blue-100/80 font-medium">Daily inspiration, event updates & more.</p>
                    </div>
                </div>
                
                <div className="flex gap-2 w-full md:w-auto relative z-10">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 md:w-64 px-4 py-2 text-xs rounded bg-white text-slate-900 placeholder:text-slate-500 font-bold focus:ring-1 focus:ring-[#FFD700] focus:outline-none shadow-sm"
                  />
                  <Button className="bg-[#FFD700] text-[#003366] hover:bg-[#FFC000] rounded px-6 py-2 shadow-lg font-bold text-xs whitespace-nowrap tracking-wide transform transition hover:scale-105 active:scale-95">
                    SUBSCRIBE
                  </Button>
                </div>
            </div>

            {/* Sub-footer - Compact */}
            <div className="pt-4 mt-2 flex justify-between items-center text-[10px] font-bold text-[#003366]/60 border-t border-[#003366]/10">
              <p>
                © 2025 Hare Krishna Movement, Chennai. All rights reserved.
              </p>
              <div className="flex gap-4">
                  <a href="#" className="hover:text-[#003366] transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-[#003366] transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-[#003366] transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
