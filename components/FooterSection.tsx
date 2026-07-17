"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone, Facebook, Youtube, Instagram, Twitter, Heart, X, Clock, ArrowRight, ChevronUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"

const darshantimings = [
  "4:30 AM – 4:55 AM",
  "7:15 AM – 1:00 PM",
  "4:15 PM – 8:15 PM",
]

const fullSchedule = [
  { time: "4:30 AM",           event: "Mangala Aarti (Darshan Opens)" },
  { time: "5:00 AM",           event: "Mantra Meditation (Japa Session)" },
  { time: "7:15 AM",           event: "Shringara Aarti" },
  { time: "7:30 AM",           event: "Guru Puja" },
  { time: "8:00 AM",           event: "Srimad Bhagavatam Class" },
  { time: "12:25 PM",          event: "Rajbhoga Aarti" },
  { time: "1:00 PM",           event: "Darshan Closes" },
  { time: "4:15 PM",           event: "Dhupa Aarti — Darshan Opens" },
  { time: "7:00 PM",           event: "Sandhya Aarti" },
  { time: "7:30 PM",           event: "Bhagavad-Gita Class" },
  { time: "8:00 – 8:15 PM",   event: "Shayana Aarti — Darshan Closes" },
]

const phoneContacts = [
  { label: "Kalyana Mandapam",                                          number: "75500 00774", tel: "+917550000774" },
  { label: "Guest House",                                               number: "93449 14701", tel: "+919344914701" },
  { label: "Donations / Sevas / Patronship / Membership",               number: "91500 44121", tel: "+919150044121" },
  { label: "Prasadam at Temple",                                         number: "85094 10525", tel: "+918509410525" },
  { label: "ICVK Kids Programme / Summer & Winter Camp",                 number: "96008 15108", tel: "+919600815108" },
  { label: "Tirtha Yatra (Pilgrimages)",                                 number: "78458 71028", tel: "+917845871028" },
  { label: "Gita Life Classes (Bhagavad Gita in English & Tamil)",       number: "96009 67108", tel: "+919600967108" },
  { label: "Book Orders (Bhagavad-Gita, Srimad Bhagavatam & more)",     number: "97902 23837", tel: "+919790223837" },
  { label: "Home Satsang",                                               number: "95512 86004", tel: "+919551286004" },
  { label: "Job Opportunities (HR)",                                     number: "97890 33907", tel: "+919789033907" },
  { label: "General Queries",                                            number: "97890 57101", tel: "+919789057101" },
]

export default function FooterSection() {
  const [showSchedule, setShowSchedule] = useState(false)
  const [showPhoneMenu, setShowPhoneMenu] = useState(false)
  const phoneMenuRef = useRef<HTMLDivElement>(null)
  const phoneBtnRef = useRef<HTMLButtonElement>(null)
  const [dropdownPos, setDropdownPos] = useState({ bottom: 0, left: 0 })

  // Calculate fixed position once on open; close on any scroll or resize
  useEffect(() => {
    function calcPos() {
      if (!phoneBtnRef.current) return
      const r = phoneBtnRef.current.getBoundingClientRect()
      setDropdownPos({
        bottom: window.innerHeight - r.top + 10,
        left: Math.min(r.left, window.innerWidth - 292),
      })
    }
    function closeMenu() {
      setShowPhoneMenu(false)
    }
    if (showPhoneMenu) {
      calcPos()
      window.addEventListener("resize", closeMenu)
      window.addEventListener("scroll", closeMenu, true)
    }
    return () => {
      window.removeEventListener("resize", closeMenu)
      window.removeEventListener("scroll", closeMenu, true)
    }
  }, [showPhoneMenu])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        phoneMenuRef.current && !phoneMenuRef.current.contains(e.target as Node) &&
        phoneBtnRef.current && !phoneBtnRef.current.contains(e.target as Node)
      ) {
        setShowPhoneMenu(false)
      }
    }
    if (showPhoneMenu) document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [showPhoneMenu])

  const handleLocationClick = () => {
    window.open("https://maps.google.com/?q=Hare+Krishna+Movement+Chennai", "_blank")
  }

  return (
    <footer className="relative z-10 bg-black text-white/90 overflow-hidden border-t border-[#FFB81C]/30 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      {/* Background Motifs */}
      <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.05] bg-repeat pointer-events-none animate-spin-slow-reverse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent opacity-80 shadow-[0_0_15px_#FFB81C]"></div>

      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#FFB81C] rounded-full blur-[150px] opacity-15 pointer-events-none"></div>

      {/* Wave Video Background - Bottom to Top flow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover transform scale-y-[-1] opacity-80"
        >
          <source src="/assets/oceanvideo.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-[1380px] mx-auto px-6 lg:pl-10 lg:pr-6 xl:pl-14 xl:pr-8 pt-16 pb-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12 mb-16">

          {/* Column 1 & 2: Brand Info - Restored Structure */}
          <div className="lg:col-span-4 relative lg:pl-[140px]">
            {/* Mobile Logo - visible only on small screens, above text */}
            <div className="flex justify-center mb-4 lg:hidden">
              <div className="relative w-40 h-40 sm:w-52 sm:h-52 drop-shadow-[0_0_15px_rgba(255,184,28,0.3)]">
                <Image
                  src="/assets/dakshina-dwaraka-dham.png"
                  alt="Dakshina Dwaraka Dham"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Desktop Logo - absolutely positioned, hidden on mobile */}
            <div className="hidden lg:block absolute top-[-48px] right-[calc(100%-130px)] w-72 h-72 z-20 hover:scale-105 transition-all duration-500 drop-shadow-[0_0_15px_rgba(255,184,28,0.3)]">
              <Image
                src="/assets/dakshina-dwaraka-dham.png"
                alt="Dakshina Dwaraka Dham"
                fill
                className="object-contain"
              />
            </div>

            <div className="flex-1 text-center lg:text-left">
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

              <p className="text-sm font-medium leading-relaxed mt-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] px-1">
                  Dakshina Dwaraka Dham — Cultural Complex to Preserve and Promote Indian Heritage.
                </span>
              </p>

              <div className="mt-4 flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="w-5 h-5 text-[#FFB81C] shrink-0 mt-0.5" />
                <span onClick={handleLocationClick} className="cursor-pointer hover:text-[#FFB81C] transition-colors leading-relaxed">
                  63, 1st Seaward Road, Valmiki Nagar, Thiruvanmiyur, Chennai- 600041
                </span>
              </div>

              <div className="flex gap-3 pt-6 justify-center lg:justify-start flex-nowrap items-center">
                {[
                  { icon: Facebook,  label: "Facebook",  href: "https://www.facebook.com/hkmcworld/" },
                  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/hkm_chennai/?hl=en" },
                  { icon: Youtube,   label: "YouTube",   href: "https://youtube.com/@hkmchennai?si=R9Zp5_nuV--UfX0Y" },
                  { icon: Twitter,   label: "X / Twitter", href: "https://x.com/ChennaiHare" },
                  {
                    label: "WhatsApp",
                    href: "https://api.whatsapp.com/send/?phone=919789057101",
                    icon: () => (
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 448 512" fill="currentColor">
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.8 69.4 27.2 106.2 27.2h.1c122.3 0 222-99.6 222-222 0-59.3-23-115.1-65.1-157.1zM223.9 445.9c-33.1 0-65.7-8.9-93.9-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54 81.2 54 130.5 0 101.8-82.7 184.6-184.4 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18s-8.8-2.8-12.5 2.8-14.3 18-17.6 21.8-6.5 4.2-12 1.4c-5.5-2.8-23.2-8.5-44.2-27.2-16.3-14.5-27.3-32.5-30.5-37.9s-.3-8.4 2.4-11.1c2.4-2.4 5.5-6.5 8.2-9.7 2.8-3.3 3.7-5.5 5.5-9.2s.9-6.9-.5-9.7-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9-19.4 19-19.4 46.3 20 53.6 22.8 57.3c2.8 3.7 39.4 60.2 95.5 84.4 13.3 5.8 23.7 9.2 31.9 11.9 13.4 4.3 25.7 3.7 35.4 2.2 10.8-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                    ),
                  },
                ].map((social, idx) => {
                  const Icon = social.icon as any;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      style={{ width: 42, height: 42, minWidth: 42 }}
                      className="rounded-full border border-white/30 bg-white/10 flex items-center justify-center text-white/90 hover:bg-[#FFB81C] hover:text-[#1a0505] hover:border-[#FFB81C] hover:scale-110 hover:shadow-[0_0_16px_rgba(255,184,28,0.55)] active:scale-95 transition-all duration-300 flex-shrink-0"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}

                {/* Phone contact dropdown */}
                <div className="relative flex-shrink-0">
                  <button
                    ref={phoneBtnRef}
                    onClick={() => setShowPhoneMenu((p) => !p)}
                    aria-label="Show phone contacts"
                    title="Call Us"
                    style={{ width: 42, height: 42, minWidth: 42 }}
                    className={`rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95 flex-shrink-0
                      ${showPhoneMenu
                        ? "bg-[#FFB81C] text-[#1a0505] border-[#FFB81C] shadow-[0_0_16px_rgba(255,184,28,0.55)] scale-110"
                        : "border-white/30 bg-white/10 text-white/90 hover:bg-[#FFB81C] hover:text-[#1a0505] hover:border-[#FFB81C] hover:scale-110 hover:shadow-[0_0_16px_rgba(255,184,28,0.55)]"
                      }`}
                  >
                    <Phone size={18} />
                  </button>

                  {/* Dropdown rendered with fixed positioning to escape footer overflow-hidden */}
                  <AnimatePresence>
                    {showPhoneMenu && (
                      <motion.div
                        ref={phoneMenuRef}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        style={{ position: "fixed", bottom: dropdownPos.bottom, left: dropdownPos.left, zIndex: 99999, width: 280 }}
                        className="bg-[#1a0505] border border-[#FFB81C]/40 rounded-2xl shadow-[0_-8px_40px_rgba(0,0,0,0.9)] overflow-hidden"
                      >
                        {/* Header */}
                        <div className="flex items-center justify-between px-3 py-2 bg-[#FFB81C]/10 border-b border-[#FFB81C]/20">
                          <div className="flex items-center gap-2">
                            <Phone size={12} className="text-[#FFB81C]" />
                            <span className="text-[#FFB81C] text-[11px] font-black uppercase tracking-widest">
                              Call Us
                            </span>
                          </div>
                          <button
                            onClick={() => setShowPhoneMenu(false)}
                            className="text-white/40 hover:text-white transition-colors cursor-pointer"
                          >
                            <X size={13} />
                          </button>
                        </div>

                        {/* Contacts list — all 10 visible without scroll */}
                        <ul className="py-0.5">
                          {phoneContacts.map((contact, idx) => (
                            <li key={idx}>
                              <a
                                href={`tel:${contact.tel}`}
                                className="flex items-center gap-2 px-3 py-1 hover:bg-[#FFB81C]/10 transition-colors group"
                              >
                                <div className="flex-1 min-w-0">
                                  <p className="text-white/50 text-[9px] leading-tight group-hover:text-white/80 transition-colors truncate">
                                    {contact.label}
                                  </p>
                                  <p className="text-[#FFB81C] font-bold text-[11px] tracking-wide">
                                    {contact.number}
                                  </p>
                                </div>
                                <Phone size={9} className="text-[#FFB81C]/50 shrink-0 group-hover:text-[#FFB81C] transition-colors" />
                              </a>
                              {idx < phoneContacts.length - 1 && (
                                <div className="mx-3 h-px bg-white/5" />
                              )}
                            </li>
                          ))}
                        </ul>

                        {/* Arrow pointer */}
                        <div className="absolute -bottom-[7px] left-4 w-3.5 h-3.5 bg-[#1a0505] border-r border-b border-[#FFB81C]/40 rotate-45" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Columns 3, 4, 5, 6: Links - Restored Exact Lists */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.25fr_1.45fr] gap-8 xl:gap-10">
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
                  { name: "Our Team", href: "/about-hkm" },
                  { name: "Spiritual Guidance", href: "/activities/spiritual-discourses" },
                  { name: "Vaishnava Calendar", href: "/temple/vaishnava-calendar" }
                ]
              },
              {
                title: "RESOURCES",
                links: [
                  { name: "Help Center", href: "/contact-us" },
                  { name: "Contact Us", href: "/contact-us" },
                  { name: "FAQ", href: "/philosophy/ask-any-question" },
                  { name: "Privacy Policy", href: "/privacy-policy" },
                  { name: "Terms & Conditions", href: "/terms-and-conditions" },
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
                      {link.name === "Donate" ? (
                        <Link
                          href={link.href}
                          className="inline-flex items-center gap-2 mt-1 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FFB81C] to-[#FFD700] text-[#1a0800] font-extrabold text-xs uppercase tracking-widest shadow-[0_0_14px_rgba(255,184,28,0.35)] hover:shadow-[0_0_22px_rgba(255,215,0,0.55)] hover:scale-105 transition-all duration-300"
                        >
                          <Heart size={13} className="fill-[#1a0800] text-[#1a0800] shrink-0" />
                          Donate
                          <ArrowRight size={13} className="shrink-0" />
                        </Link>
                      ) : (
                        <Link
                          href={link.href}
                          className="transition-all duration-300 flex items-center gap-2 text-sm uppercase tracking-wide text-gray-200 hover:text-[#FFB81C] hover:translate-x-1 font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFB81C]/70 shrink-0"></span>
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* New Visitor Guide Section */}
            <div className="lg:pr-2">
              <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.8)] mb-6 font-serif tracking-widest border-b border-[#FFD700]/50 pb-2 inline-block">
                PLAN YOUR VISIT
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Darshan timings, dress code, directions &amp; more for your visit.
              </p>
              <Link
                href="/blog/visitor-guide"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FFB81C] to-[#FFD700] text-[#1a0800] font-extrabold text-xs uppercase tracking-widest shadow-[0_0_14px_rgba(255,184,28,0.35)] hover:shadow-[0_0_22px_rgba(255,215,0,0.55)] hover:scale-105 transition-all duration-300"
              >
                Visitor Guide <ArrowRight size={13} className="shrink-0" />
              </Link>
            </div>

            {/* Temple Darshan Timings */}
            <div className="lg:pl-10 xl:pl-14">
              <h3 className="text-base font-bold text-[#FFB81C] mb-6 font-serif tracking-widest border-b border-[#FFB81C]/50 pb-2 inline-block">
                TEMPLE DARSHAN TIMINGS
              </h3>
              <ul className="space-y-2.5 mb-5">
                {darshantimings.map((slot) => (
                  <li key={slot} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] shrink-0" />
                    <span className="text-[#FFD700] font-bold">{slot}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowSchedule(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FFB81C] to-[#FFD700] text-[#1a0800] font-extrabold text-xs uppercase tracking-widest shadow-[0_0_14px_rgba(255,184,28,0.35)] hover:shadow-[0_0_22px_rgba(255,215,0,0.55)] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <Clock size={13} className="shrink-0" /> Full Schedule
              </button>
            </div>

            {/* Full Schedule Modal */}
            <AnimatePresence>
              {showSchedule && (
                <motion.div
                  className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowSchedule(false)}
                >
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                  <motion.div
                    className="relative bg-[#FFF9F0] rounded-2xl shadow-2xl p-8 w-full max-w-lg z-10"
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close button */}
                    <button
                      onClick={() => setShowSchedule(false)}
                      className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#FFB81C]/20 hover:bg-[#FFB81C]/40 text-[#701a1a] transition-colors cursor-pointer"
                    >
                      <X size={16} />
                    </button>

                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-[#FFB81C]/20 flex items-center justify-center text-[#701a1a]">
                        <Clock size={20} />
                      </div>
                      <h2 className="text-xl font-bold text-[#701a1a] font-serif">Detailed Temple Schedule</h2>
                    </div>

                    {/* Schedule list */}
                    <ul className="space-y-2.5">
                      {fullSchedule.map((item) => (
                        <li key={item.time} className="flex items-center gap-3 text-sm whitespace-nowrap">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFB81C] shrink-0" />
                          <span className="text-[#b45309] font-bold w-[72px] shrink-0">{item.time}</span>
                          <span className="text-[#3A3A3A]">–</span>
                          <span className="text-[#3A3A3A]">{item.event}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-xs text-gray-400 mt-6 text-center">
                      Timings may vary on festival days.
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Made with Love Section */}
        <div className="border-t border-[#FFB81C]/30 pt-8 mt-8 md:mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Hare Krishna Movement Chennai. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs font-bold text-gray-300">
              <Link href="/privacy-policy" className="hover:text-[#FFB81C] transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-[#FFB81C] transition-colors">Terms & Conditions</Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 text-sm font-medium text-gray-300">
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>by</span>
            </div>
            <a
              href="https://www.talentronaut.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#FFD700] hover:text-[#FFEC8B] hover:scale-105 transition-all duration-300 whitespace-nowrap drop-shadow-[0_0_5px_rgba(255,215,0,0.6)] hover:drop-shadow-[0_0_10px_rgba(255,236,139,0.8)]"
            >
              Talentronaut Technologies Pvt Ltd
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
