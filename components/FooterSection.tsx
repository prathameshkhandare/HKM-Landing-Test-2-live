"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone, Facebook, Youtube, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function FooterSection() {
  const handleLocationClick = () => {
    window.open("https://maps.google.com/?q=Hare+Krishna+Movement+Chennai", "_blank")
  }

  return (
    <footer className="relative z-10 bg-gradient-to-b from-[#0f172a] to-[#020617] text-white overflow-hidden border-t border-[#FFB81C]/30 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      {/* Background Motifs */}
      <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.05] bg-repeat pointer-events-none animate-spin-slow-reverse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent opacity-80 shadow-[0_0_15px_#FFB81C]"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#1e3a8a] rounded-full blur-[150px] opacity-30 pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#FFB81C] rounded-full blur-[150px] opacity-15 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1 & 2: Brand Info - Restored Structure */}
          <div className="lg:col-span-2 flex items-start gap-4">
             <div className="w-16 h-16 shrink-0 rounded-full border border-[#FFB81C]/50 flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(255,184,28,0.2)] bg-black/50">
                  <Image 
                    src="/assets/dakshina-dwaraka-dham.png" 
                    alt="Dakshina Dwaraka Dham" 
                    width={64} 
                    height={64} 
                    className="w-full h-full object-cover"
                  />
             </div>
             
             <div className="flex-1">
                 <div className="mb-6">
                     <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFB81C] to-white leading-tight block tracking-tight font-serif drop-shadow-md">
                         DAKSHINA DWARAKA DHAM
                     </span>
                     <span className="block text-sm font-bold text-[#FFB81C] mt-2 uppercase tracking-wide">
                         Project by Hare Krishna Movement Chennai
                     </span>
                     <span className="block text-sm font-medium text-gray-300 mt-1">
                         (Affiliated to ISKCON Bangalore Regn. S-49/78-79)
                     </span>
                 </div>

                 <p className="text-base text-gray-200 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10 shadow-inner backdrop-blur-md">
                   Spreading the timeless wisdom of the Bhagavad-gita through a variety of spiritual and social initiatives across Chennai.
                 </p>

                  <div className="mt-4 flex items-start gap-3 text-sm text-gray-300">
                     <MapPin className="w-5 h-5 text-[#FFB81C] shrink-0 mt-0.5" />
                     <span onClick={handleLocationClick} className="cursor-pointer hover:text-[#FFB81C] transition-colors leading-relaxed">
                         63, 1st Seaward Road, Valmiki Nagar, Thiruvanmiyur, Chennai- 600041
                     </span>
                  </div>

                 <div className="flex gap-4 pt-6">
                    {[
                        { icon: Facebook, href: "https://www.facebook.com/hkmchennai" }, // Added proper links if known or keep #
                        { icon: Instagram, href: "https://www.instagram.com/hkmchennai" },
                        { icon: Youtube, href: "https://www.youtube.com/hkmchennai" },
                        { icon: Twitter, href: "https://twitter.com/hkmchennai" }
                    ].map((social, idx) => (
                        <a 
                            key={idx} 
                            href={social.href} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center text-white hover:bg-[#FFB81C] hover:text-[#0f172a] hover:border-[#FFB81C] hover:scale-110 hover:shadow-[0_0_15px_#FFB81C] transition-all duration-300"
                        >
                            <social.icon size={18} />
                        </a>
                    ))}
                </div>
             </div>
          </div>

          {/* Columns 3, 4, 5: Links - Restored Exact Lists */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                    title: "PROGRAMS", 
                    links: [
                        { name: "Gita Life", href: "/activities/gita-life" },
                        { name: "ICVK (For Kids)", href: "/activities/icvk" },
                        { name: "FOLK (For Youth)", href: "/activities/folk" },
                        { name: "Sunday Retreats", href: "/activities/sunday-retreats" }
                    ] 
                },
                { 
                    title: "ABOUT", 
                    links: [
                        { name: "Our Mission", href: "/seven-purposes" },
                        { name: "Srila Prabhupada", href: "/srila-prabhupada" },
                        { name: "Our Team", href: "/about-hkm" }, // Mapping to about-hkm
                        { name: "Spiritual Guidance", href: "/activities/spiritual-discourses" }
                    ] 
                },
                { 
                    title: "RESOURCES", 
                    links: [
                        { name: "Help Center", href: "/contact-us" },
                        { name: "Contact Us", href: "/contact-us" },
                        { name: "FAQ", href: "/philosophy/ask-any-question" },
                        { name: "Donate", href: "/donate" }
                    ] 
                }
              ].map((section) => (
                <div key={section.title}>
                    <h3 className="text-base font-bold text-[#FFB81C] mb-6 font-serif tracking-widest border-b border-[#FFB81C]/50 pb-2 inline-block">
                        {section.title}
                    </h3>
                    <ul className="space-y-3">
                    {section.links.map((link) => (
                        <li key={link.name}>
                        <Link href={link.href} className="text-gray-200 hover:text-[#FFB81C] hover:translate-x-1 transition-all duration-300 flex items-center gap-2 text-sm font-medium uppercase tracking-wide">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB81C]/70"></span>
                            {link.name}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
              ))}
          </div>

        </div>
      </div>
    </footer>
  )
}
