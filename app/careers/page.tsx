"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  Sparkles,
  Briefcase,
  Heart,
  Users,
  ChevronRight,
  Layers,
  Calendar,
  ArrowRight
} from "lucide-react"

const activities = [
  { name: "Spiritual Discourses", link: "/activities/spiritual-discourses" },
  { name: "FOLK", link: "/activities/folk" },
  { name: "Annadanam", link: "/activities/annadhanam" },
]

const festivals = [
  { name: "RATHA YATRA", link: "/festivals/ratha-yatra" },
  { name: "SRI NITYANANDA TRAYODASHI", link: "/festivals/nityananda-trayodashi" },
  { name: "SRI GAURA PURNIMA", link: "/festivals/gaura-purnima" },
  { name: "SRI KRISHNA JANMASHTAMI", link: "/festivals/janmashtami" },
]

const values = [
  {
    icon: Sparkles,
    title: "Spiritual Atmosphere",
    description: "Work in a serene and uplifting environment dedicated to higher values and spiritual growth."
  },
  {
    icon: Heart,
    title: "Service to Society",
    description: "Contribute to meaningful projects like Annadanam and cultural education that impact thousands of lives."
  },
  {
    icon: Users,
    title: "Community & Growth",
    description: "Join a supportive community where professional development goes hand-in-hand with personal transformation."
  }
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans selection:bg-[#FFB81C] selection:text-[#2D0A0A]">
      <NavbarDemo />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] max-h-[65vh] flex items-center justify-center overflow-hidden bg-[#2D0A0A] pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#701a1a] via-[#ea580c] to-[#b45309] opacity-90"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 49px, #FFB81C 50px)' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFB81C] rounded-full blur-[120px] opacity-20 animate-pulse"></div>

        <div className="relative z-10 px-4 max-w-6xl mx-auto w-full pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-center md:text-left flex-1"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] font-serif">
                CAREERS
              </h1>

              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="h-[2px] w-12 bg-[#ea580c] md:bg-transparent md:bg-gradient-to-r md:from-[#ea580c] md:to-transparent"></div>
                <div className="rotate-45 p-1.5 border border-[#FFB81C] bg-[#ea580c] transform"></div>
                <div className="h-[2px] w-32 bg-gradient-to-l from-transparent to-[#ea580c] md:bg-gradient-to-r md:from-transparent md:to-[#ea580c]"></div>
              </div>

              <p className="text-xl md:text-2xl lg:text-3xl text-[#ffe8cc] font-light leading-relaxed max-w-2xl italic drop-shadow-md">
                "Join us in our mission to serve humanity and preserve culture"
              </p>
            </motion.div>

            {/* Right: Dakshina Dwaraka Dham Logo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 flex justify-center md:justify-end md:pr-4 lg:-mr-16"
            >
              <div className="relative group md:translate-x-12 lg:translate-x-24 xl:translate-x-32">
                {/* Glow behind image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FFB81C] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img
                  src="/assets/dakshina-dwaraka-dham.png"
                  alt="Dakshina Dwaraka Dham"
                  className="w-[280px] sm:w-[320px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto object-contain drop-shadow-2xl relative z-10 transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-16">

            {/* Why Join Us */}
            <section>
              <h2 className="text-3xl font-bold text-[#701a1a] font-serif mb-8 flex items-center gap-3">
                <Briefcase className="text-[#ea580c]" />
                Why Join Us?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className={`bg-white p-6 rounded-2xl shadow-md border border-[#FFB81C]/20 relative overflow-hidden group ${idx === 2 ? 'md:col-span-2' : ''}`}
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#ea580c]/5 rounded-bl-full transition-transform group-hover:scale-150 duration-500"></div>
                    <div className="w-12 h-12 rounded-full bg-[#FFF9F0] flex items-center justify-center text-[#ea580c] mb-4 group-hover:bg-[#ea580c] group-hover:text-white transition-colors">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#2D0A0A] mb-3 group-hover:text-[#ea580c] transition-colors">{item.title}</h3>
                    <p className="text-[#5a5a5a] leading-relaxed relative z-10">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Current Openings / Call to Action */}
            <section className="relative">
              <div className="bg-gradient-to-r from-[#701a1a] to-[#991b1b] rounded-[2rem] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-10 bg-contain bg-center animate-spin-slow"></div>
                <div className="relative z-10 space-y-6">
                  <h2 className="text-3xl font-bold font-serif text-[#FFB81C]">Join Our Team</h2>
                  <p className="text-lg text-[#ffe8cc] max-w-2xl mx-auto">
                    We are always looking for dedicated individuals to join our mission.
                    If you have a passion for service and want to contribute your skills, we'd love to hear from you.
                  </p>

                  <div className="flex flex-col md:flex-row gap-6 justify-center mt-8">
                    <a href="mailto:Yashwanth.kln@hkmchennai.org" className="group bg-white text-[#701a1a] px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-[#ea580c] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
                      <Mail size={20} />
                      Yashwanth.kln@hkmchennai.org
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="group bg-[#FFB81C] text-[#2D0A0A] px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-[#ffc94d] transition-all duration-300 flex items-center justify-center gap-3">
                      <Phone size={20} />
                      +91 9789033907
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Activities Card */}
            <div className="bg-white rounded-2xl p-6 border-l-8 border-[#FFB81C] shadow-lg">
              <div className="flex items-center gap-3 mb-6 border-b border-[#FFB81C]/30 pb-4">
                <div className="w-8 h-8 rounded-full bg-[#FFB81C]/10 flex items-center justify-center text-[#ea580c]">
                  <Layers size={18} />
                </div>
                <h4 className="text-xl font-bold text-[#701a1a] font-serif tracking-wide">ACTIVITIES</h4>
              </div>

              <div className="space-y-2">
                {activities.map((activity, idx) => (
                  <Link
                    key={idx}
                    href={activity.link}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#FFF9F0] group/item transition-all duration-300"
                  >
                    <div className="w-6 h-6 rounded-full border border-[#FFB81C]/50 flex items-center justify-center text-[#ea580c] group-hover/item:bg-[#ea580c] group-hover/item:text-white transition-colors">
                      <ChevronRight size={14} />
                    </div>
                    <span className="text-sm font-semibold text-[#5a5a5a] group-hover/item:text-[#ea580c] transition-colors font-medium">
                      {activity.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Festivals Card */}
            <div className="bg-white rounded-2xl p-6 border-l-8 border-[#ea580c] shadow-lg">
              <div className="flex items-center gap-3 mb-6 border-b border-[#ea580c]/30 pb-4">
                <div className="w-8 h-8 rounded-full bg-[#ea580c]/10 flex items-center justify-center text-[#ea580c]">
                  <Calendar size={18} />
                </div>
                <h4 className="text-xl font-bold text-[#701a1a] font-serif tracking-wide">FESTIVALS</h4>
              </div>

              <div className="space-y-2">
                {festivals.map((festival, idx) => (
                  <Link
                    key={idx}
                    href={festival.link}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#FFF9F0] group/item transition-all duration-300"
                  >
                    <div className="w-6 h-6 rounded-full border border-[#ea580c]/50 flex items-center justify-center text-[#ea580c] group-hover/item:bg-[#ea580c] group-hover/item:text-white transition-colors">
                      <ChevronRight size={14} />
                    </div>
                    <span className="text-sm font-semibold text-[#5a5a5a] group-hover/item:text-[#ea580c] transition-colors font-medium">
                      {festival.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <FooterSection />
    </div>
  )
}
