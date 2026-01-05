"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone, Facebook, Youtube, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function FooterSection() {
  const handleLocationClick = () => {
    window.open("https://maps.google.com/?q=Hare+Krishna+Movement+Chennai", "_blank")
  }

  return (
    <footer className="relative z-10 bg-[#0f172a] text-white overflow-hidden border-t border-[#FFB81C]/20">
      {/* Background Motifs */}
      <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] bg-repeat pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent opacity-50"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#1e3a8a] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#FFB81C] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1 & 2: Brand Info - Restored Structure */}
          <div className="lg:col-span-2 flex items-start gap-4">
             <div className="w-12 h-12 bg-[#FFB81C]/10 rounded-full border border-[#FFB81C]/50 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,184,28,0.2)]">
                  <MapPin className="w-6 h-6 text-[#FFB81C]" />
             </div>
             
             <div className="flex-1">
                 <div className="mb-4">
                     <span className="text-2xl font-extrabold text-white leading-tight block tracking-tight font-serif">
                         DAKSHIN DWARAKA DHAM
                     </span>
                     <div className="w-12 h-1 bg-[#FFB81C] rounded-full my-3"></div>
                     <span className="block text-sm font-bold text-[#FFB81C] mt-0.5 uppercase tracking-wide">
                         Project by Hare Krishna Movement Chennai
                     </span>
                     <span className="block text-xs font-medium text-gray-400 mt-1">
                         (An affiliate of Srila Prabhupada's ISKCON Bangalore)
                     </span>
                 </div>

                 <p className="text-sm text-gray-300 leading-relaxed bg-white/5 p-4 rounded-lg border-l-4 border-[#FFB81C] backdrop-blur-sm">
                   Spreading the timeless wisdom of the Bhagavad-gita through a variety of spiritual and social initiatives across Chennai.
                 </p>

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
                            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#FFB81C] hover:text-[#0f172a] hover:border-[#FFB81C] transition-all duration-300"
                        >
                            <social.icon size={16} />
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
                        { name: "Srila Prabhupada Ashray", href: "/ashray" } // Assuming route, can be #
                    ] 
                },
                { 
                    title: "ABOUT", 
                    links: [
                        { name: "Our Mission", href: "/seven-purposes" },
                        { name: "Srila Prabhupada", href: "/srila-prabhupada" },
                        { name: "Our Team", href: "/about-hkm" }, // Mapping to about-hkm
                        { name: "Spiritual Guidance", href: "/philosophy" }
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
                    <h3 className="text-sm font-bold text-white mb-6 font-serif tracking-widest border-b border-[#FFB81C]/30 pb-2 inline-block">
                        {section.title}
                    </h3>
                    <ul className="space-y-3">
                    {section.links.map((link) => (
                        <li key={link.name}>
                        <Link href={link.href} className="text-gray-400 hover:text-[#FFB81C] hover:translate-x-1 transition-all duration-300 flex items-center gap-2 text-xs font-medium uppercase tracking-wide">
                            <span className="w-1 h-1 rounded-full bg-[#FFB81C]/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            {link.name}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
              ))}
          </div>

        </div>

        {/* Newsletter Section - Restored "Get Spiritual Updates" */}
        <div className="mb-12 bg-gradient-to-r from-white/5 to-transparent rounded-2xl p-6 md:p-8 border border-white/10 relative overflow-hidden">
             <div className="absolute inset-0 bg-[#FFB81C] opacity-[0.03] animate-pulse-slow"></div>
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                 <div>
                     <h3 className="text-2xl font-bold text-white mb-2 font-serif">Get Spiritual Updates</h3>
                     <p className="text-gray-400 text-sm">Daily inspiration, event updates & more. Join our community.</p>
                 </div>
                 <div className="flex w-full md:w-auto gap-2">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-full md:w-64 px-4 py-3 rounded-lg bg-[#0f172a] border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFB81C] transition-all text-sm shadow-inner"
                    />
                    <Button className="bg-[#FFB81C] hover:bg-[#e5a500] text-[#0f172a] font-bold py-3 px-6 rounded-lg transition-all shadow-lg whitespace-nowrap">
                        SUBSCRIBE
                    </Button>
                 </div>
             </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs text-center md:text-left">
                © {new Date().getFullYear()} Hare Krishna Movement Chennai. All rights reserved. • An affiliate of ISKCON Bangalore
            </p>
            <div className="flex gap-6 text-xs text-gray-500">
                <Link href="#" className="hover:text-[#FFB81C] transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-[#FFB81C] transition-colors">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  )
}
