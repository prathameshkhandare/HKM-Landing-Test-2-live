"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  BookMarked,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  HandPlatter,
  HeartHandshake,
  Home,
  Leaf,
  MessageCircleQuestion,
  Mic2,
  Music4,
  Plane,
  PlayCircle,
  Sparkles,
  Users,
  X,
  ArrowRight,
  Baby,
  AudioLines,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import AboutHKMSaffronHeader from "@/components/AboutHKMSaffronHeader"
import FooterSection from "@/components/FooterSection"

export default function AboutHKM() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false)

  const corePractices = [
    "Chant 16 rounds of the Hare Krishna Maha-mantra daily. One round means 108 repetitions of the full maha-mantra.",
    "Follow the four regulative principles to cultivate purity, discipline, and spiritual steadiness.",
  ]

  const regulativePrinciples = [
    "No meat eating",
    "No illicit sex",
    "No gambling",
    "No intoxication",
  ]

  const templeSchedule = [
    { time: "4:30 AM", event: "Mangala Arati" },
    { time: "5:00 AM", event: "Mantra Meditation" },
    { time: "7:15 AM", event: "Shringara Arati" },
    { time: "7:30 AM", event: "Guru Puja" },
    { time: "8:00 AM", event: "Bhagavatam Class" },
    { time: "12:25 PM", event: "Rajbhoga Arati" },
    { time: "4:15 PM", event: "Dhupa Arati and Darshan Opens" },
    { time: "7:00 PM", event: "Sandhya Arati" },
    { time: "7:30 PM", event: "Bhagavad-Gita Discourse" },
    { time: "8:00 PM - 8:15 PM", event: "Shayana Arati and Darshan Closes" },
  ]

  const deities = [
    {
      title: "Sri Sri Krishna Rukmini Satyabhama",
      images: ["/assets/temple/deities/krishna-rukmini-satyabhama.jpg"],
    },
    {
      title: "Sri Sri Gaur Nitai",
      images: [
        "/assets/temple/deities/chaitanya-maha-prabhu.jpg",
        "/assets/temple/deities/gaur-nitai-mogappair.jpg",
      ],
    },
    {
      title: "Srila Prabhupada",
      images: ["/assets/temple/deities/prabhupada.jpg"],
    },
  ]

  const initiatives = [
    {
      title: "Temple Programs",
      icon: CalendarDays,
      image: "/assets/temple-darshan.jpg",
      description:
        "Daily worship, kirtan, sevas, festivals, and community gatherings create a steady rhythm of devotion for devotees and visitors.",
      extra:
        "Morning temple programs are live streamed regularly for those who wish to join from home.",
      linkLabel: "Watch live on YouTube",
      href: "https://www.youtube.com/@hkmchennai",
      accent: "from-[#7f1d1d] to-[#ea580c]",
      popupLabel: "View temple schedule",
    },
    {
      title: "Annadanam",
      icon: HandPlatter,
      image: "/assets/diety-seva/annadanam.jpg",
      description:
        "Nutritious sanctified prasadam is distributed during festivals, youth outreach programs, and service initiatives beyond the temple campus.",
      extra:
        "No one should leave the temple premises without being cared for and fed.",
      accent: "from-[#b45309] to-[#f59e0b]",
    },
    {
      title: "Kala Madhuryam",
      icon: Music4,
      image: "/assets/temple/kalamadhuryam.jpeg",
      description:
        "A devotional platform for classical dance and music where artists offer their art in service to Lord Krishna.",
      extra:
        "The initiative raises appreciation for India's treasured art traditions and helps preserve them for future generations.",
      contact: "9600330108",
      href: "/activities/kala-madhuryam",
      linkLabel: "Explore Kala Madhuryam",
      accent: "from-[#9a3412] to-[#f97316]",
    },
    {
      title: "Vidyabhyasam",
      icon: GraduationCap,
      image: "/assets/temple/vidyabhyasam-logo-full.png",
      imageFit: "contain",
      imageBg: "bg-white",
      description:
        "After-school support for underprivileged rural children with homework help, nutritious sattvic prasadam, and value-based education.",
      extra:
        "The program nurtures discipline, confidence, character, and a stronger foundation for life.",
      contact: "97909 72034",
      href: "https://vidyabhyasam.org",
      linkLabel: "Visit",
      accent: "from-[#0f766e] to-[#14b8a6]",
    },
    {
      title: "FOLK",
      icon: Users,
      image: "/assets/temple/folk-img.jpg",
      imageFit: "contain",
      imageBg: "bg-white",
      description:
        "Friends of Lord Krishna is a vibrant youth outreach program for students from institutions such as IIT Madras, Anna University, SRM, and more.",
      extra:
        "Participants are guided in disciplined, purposeful living through Bhakti Yoga, with value education, accommodation, and food support.",
      contact: "9789057101",
      href: "/activities/folk",
      linkLabel: "Explore FOLK",
      accent: "from-[#7c2d12] to-[#f59e0b]",
    },
    {
      title: "ICVK",
      icon: Baby,
      image: "/assets/activities/icvk/krishna_radha_header_final_v4.png",
      imageFit: "contain",
      imageBg: "bg-white",
      description:
        "Indian Culture and Values for Kids introduces children aged 3 to 15 to the Ramayana, Bhagavad Gita, and Srimad Bhagavatam in a joyful format.",
      extra:
        "Children build character, values, cultural rootedness, and compassion through trained, age-appropriate teaching.",
      contact: "96008 15108",
      href: "/activities/icvk",
      linkLabel: "Explore ICVK",
      accent: "from-[#7e22ce] to-[#ec4899]",
    },
    {
      title: "Cultural Festivals",
      icon: Sparkles,
      image: "/assets/activities/cultural-festivals/fest-1.jpg",
      description:
        "Janmashtami, Ratha Yatra, Vaikuntha Ekadashi, and many more festivals bring together people from all backgrounds in devotion and joy.",
      extra:
        "These vibrant celebrations deepen one's connection with Lord Krishna and uplift the community.",
      href: "https://www.youtube.com/@hkmchennai/playlists",
      linkLabel: "See festival glimpses",
      accent: "from-[#991b1b] to-[#facc15]",
    },
    {
      title: "Gita Life",
      icon: BookOpen,
      image: "/assets/temple/gita-life.jpg",
      description:
        "An accessible program for families to understand the Bhagavad Gita and apply its timeless teachings in daily life.",
      extra:
        "Sessions are interactive, welcoming questions, introducing the Hare Krishna Maha-mantra, and concluding with prasadam.",
      contact: "96009 67108",
      href: "/activities/gita-life",
      linkLabel: "Explore Gita Life",
      accent: "from-[#92400e] to-[#f59e0b]",
    },
    {
      title: "Atmarapanam",
      icon: Mic2,
      image: "/assets/activities/atmarpanam-poster.png",
      description:
        "Devotees offer their talents in singing, acting, dancing, and storytelling during major Vaishnava celebrations as heartfelt seva.",
      extra:
        "These performances are offerings to Lord Krishna and Srila Prabhupada, not merely stage presentations.",
      href: "/activities/atmarpanam",
      linkLabel: "Explore devotional offerings",
      accent: "from-[#831843] to-[#db2777]",
    },
    {
      title: "Yatramritam",
      icon: Plane,
      image: "/assets/yatramritam_logo.png",
      imageFit: "contain",
      imageBg: "bg-white",
      imagePadding: "p-1",
      description:
        "Sacred pilgrimages to Dwaraka, Jagannath Puri, Mathura-Vrindavan, Mayapur, Char Dham, and more for immersive spiritual travel.",
      extra:
        "Each yatra includes kathas, kirtans, prasadam, and thoughtfully arranged travel and accommodation.",
      contact: "99402 42656",
      href: "/activities/tirtha-yatra",
      linkLabel: "Explore yatras",
      accent: "from-[#0f172a] to-[#0369a1]",
    },
    {
      title: "Soulful Sangam",
      icon: Home,
      image: "/assets/temple/soulful-sangam.jpeg",
      description:
        "Temple blessings come home through satsang gatherings with arati, kirtan, spiritual discourse, and prasadam distribution.",
      extra:
        "A warm way to host devotional culture in your own home and neighborhood.",
      contact: "95512 86004",
      href: "/activities/soulful-sangam",
      linkLabel: "Explore Soulful Sangam",
      accent: "from-[#134e4a] to-[#14b8a6]",
    },
    {
      title: "Promoting Yuga Dharma",
      icon: AudioLines,
      image: "/activities/yuga-dharma/mantra-card.png",
      description:
        "The Hare Krishna Maha-mantra is lovingly promoted as the most powerful spiritual practice for this age, as prescribed in the Kali Santarana Upanishad.",
      extra:
        "Visitors are encouraged to chant and experience peace, joy, and inner clarity.",
      href: "/activities/yuga-dharma",
      linkLabel: "Learn about Yuga Dharma",
      accent: "from-[#7c3aed] to-[#f59e0b]",
    },
    {
      title: "Spiritual Book Distribution",
      icon: BookMarked,
      image: "/assets/activities/distribution-of-spiritual-knowledge/book-stall.png",
      description:
        "Srila Prabhupada's Vedic literature, including Bhagavad Gita As It Is and Srimad Bhagavatam, is made available for sincere seekers.",
      extra:
        "These books continue to serve as a lighthouse of wisdom for people of every background.",
      href: "/activities/distribution-of-spiritual-knowledge",
      linkLabel: "Explore book distribution",
      accent: "from-[#3f3f46] to-[#ca8a04]",
    },
    {
      title: "Ask A Question",
      icon: MessageCircleQuestion,
      image: "/assets/srila_prabhupada_lecture.png",
      description:
        "An open spiritual Q and A forum where seekers receive thoughtful, scripture-based answers from experienced devotees.",
      extra:
        "It is designed as a welcoming space for curiosity, inquiry, and sincere spiritual exploration.",
      href: "https://youtube.com/playlist?list=PL2CCUWOdqqaOvHMzlo-FWS541FgRbl-LQ&si=fmiRGg2sDRSIRs1d",
      linkLabel: "Watch Ask A Question",
      accent: "from-[#1d4ed8] to-[#38bdf8]",
    },
    {
      title: "Spiritual Discourses",
      icon: Mic2,
      image: "/assets/activities/spiritual-discourses/srimad-bhagavatam.png",
      description:
        "Regular discourses on Bhagavad Gita and Srimad Bhagavatam bring practical wisdom, clarity, and inspiration into daily life.",
      extra:
        "These talks are delivered by temple devotees with a focus on both depth and application.",
      href: "https://www.youtube.com/@Hkmcsangam",
      linkLabel: "Listen on YouTube",
      accent: "from-[#7f1d1d] to-[#f97316]",
    },
    {
      title: "Basilwoods School",
      icon: Leaf,
      image: "/assets/temple/basilwood-img.png",
      imageFit: "contain",
      imageBg: "bg-white",
      description:
        "A Hare Krishna Movement Chennai initiative in Thiruvanmiyur offering a nurturing preschool and daycare for children aged 2 to 6 years.",
      extra:
        "It is rooted in care, creativity, and character for wholesome early childhood formation.",
      href: "https://basilwoodschennai.in/",
      linkLabel: "Visit",
      accent: "from-[#166534] to-[#84cc16]",
    },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <AboutHKMSaffronHeader />

      <section className="py-20 md:py-32 relative overflow-hidden bg-[#FFFBF2]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/assets/temple_texture_bg.png')] bg-fixed opacity-35 bg-repeat bg-[length:400px_400px] mix-blend-multiply pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBF2] via-transparent to-[#FFFBF2] pointer-events-none"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none z-0 opacity-[0.03] select-none flex items-center justify-center overflow-hidden">
          <img
            src="/assets/sanskrit_watermark.png"
            alt="Background Texture"
            className="w-[1500px] max-w-none h-auto object-contain rotate-[-5deg]"
          />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-[600px] h-[600px] opacity-20 md:opacity-80 pointer-events-none -rotate-12 z-0">
          <img src="/assets/peacock_feather_premium.png" alt="Peacock Flourish" className="w-full h-full object-contain" />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-[600px] h-[600px] opacity-20 md:opacity-80 pointer-events-none rotate-[190deg] z-0">
          <img src="/assets/peacock_feather_premium.png" alt="Peacock Flourish" className="w-full h-full object-contain" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative py-8 md:py-12 bg-white/60 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none rounded-3xl p-5 md:p-0 md:rounded-none"
            >
              <h2 className="text-[#ea580c] font-bold text-xs sm:text-sm md:text-base uppercase tracking-[0.18em] sm:tracking-[0.24em] md:tracking-[0.3em] mb-8 md:mb-12 relative z-10 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-[#ea580c]/30">
                Our Sacred Mission
              </h2>

              <div className="relative z-10">
                <span className="hidden md:block absolute -top-16 -left-12 text-[10rem] text-[#FFB81C] font-serif opacity-20 leading-none" style={{ fontFamily: "var(--font-playfair)" }}>
                  "
                </span>
                <blockquote className="text-2xl sm:text-3xl md:text-5xl font-medium text-gray-800 leading-tight md:leading-snug drop-shadow-sm" style={{ fontFamily: "var(--font-manrope)" }}>
                  We are trying to give human society the opportunity for a life of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-[#d97706] font-bold">happiness</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-[#d97706] font-bold">good health</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-[#d97706] font-bold">peace of mind</span> and all good qualities through God consciousness.
                </blockquote>
                <span className="hidden md:block absolute -bottom-24 -right-8 text-[10rem] text-[#FFB81C] font-serif opacity-20 leading-none rotate-180" style={{ fontFamily: "var(--font-playfair)" }}>
                  "
                </span>
              </div>
              <cite className="block mt-8 md:mt-16 text-lg md:text-xl font-bold text-[#78350f] not-italic tracking-wide">- His Divine Grace A. C. Bhaktivedanta Swami Srila Prabhupada</cite>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#fff7ed] py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.05] bg-repeat pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] xl:grid-cols-[0.9fr_1.1fr] items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:max-w-[520px]"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#f59e0b]/20 to-[#7f1d1d]/10 blur-2xl"></div>
              <div className="relative overflow-hidden rounded-[2rem] border border-[#fbbf24]/30 shadow-2xl">
                <Image
                  src="/assets/about-hkm-krishna-arjuna.jpg"
                  alt="Krishna and Arjuna"
                  width={1200}
                  height={900}
                  className="h-[420px] sm:h-[540px] md:h-[700px] lg:h-[760px] xl:h-[800px] w-full object-cover"
                  style={{ objectPosition: "42% center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D0A0A]/85 via-[#2D0A0A]/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-10 lg:p-12">
                  <p className="text-[#fbbf24] text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.14em] sm:tracking-[0.22em] md:tracking-[0.3em] mb-3">Global Spiritual Tradition</p>
                  <h2 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-manrope)" }}>
                    About Srila Prabhupada&apos;s ISKCON
                  </h2>
                  <p className="mt-3 sm:mt-4 max-w-2xl text-white/85 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                    Rooted in Bhagavad Gita As It Is and Srimad Bhagavatam, the movement continues the Gaudiya-Vaishnava disciplic succession with temples, outreach, education, prasadam distribution, and cow care across the world.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ea580c]/20 bg-white px-4 py-2 shadow-sm">
                  <Sparkles className="h-4 w-4 text-[#ea580c]" />
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ea580c]">Vedic Foundation</span>
                </div>
                <h3 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D0A0A]" style={{ fontFamily: "var(--font-manrope)" }}>
                  A movement of philosophy, devotion, and service
                </h3>
              </div>

              <div className="space-y-5 text-base md:text-lg leading-relaxed text-gray-700">
                <p>
                  Srila Prabhupada&apos;s ISKCON is a global spiritual tradition inspired by His Divine Grace Vishwa Guru A. C. Bhaktivedanta Swami Srila Prabhupada, Founder-Acharya of ISKCON.
                </p>
                <p>
                  Philosophically rooted in authentic Vedic scriptures, the movement carries forward the sacred disciplic succession of the Gaudiya-Vaishnava sampradaya.
                </p>
                <p>
                  With monumental temples, preaching centers, restaurants, food distribution hubs, and Gaushalas around the world, the movement supports humanity through festivals, education, prasada distribution, and cow care.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-[#f59e0b]/20 bg-white/90 p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <HeartHandshake className="h-6 w-6 text-[#ea580c]" />
                  <h4 className="text-xl font-bold text-[#2D0A0A]">Core Spiritual Practices</h4>
                </div>
                <div className="mt-5 space-y-4">
                  {corePractices.map((practice) => (
                    <div key={practice} className="flex gap-3 rounded-2xl bg-[#fff7ed] p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ea580c]" />
                      <p className="text-sm md:text-base leading-relaxed text-gray-700">{practice}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#2D0A0A] to-[#5b130f] p-5 text-white shadow-lg">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#fbbf24]">Hare Krishna Maha-mantra</p>
                  <p className="mt-3 text-lg md:text-xl font-semibold leading-relaxed text-[#fff7ed]">
                    Hare Krishna Hare Krishna Krishna Krishna Hare Hare
                    <br />
                    Hare Rama Hare Rama Rama Rama Hare Hare
                  </p>
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-[#92400e]">
                  Four Regulative Principles
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {regulativePrinciples.map((item) => (
                    <div key={item} className="rounded-2xl border border-[#f59e0b]/15 bg-[#fffaf2] px-4 py-3 text-sm font-semibold text-[#78350f]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute inset-0 bg-[url('/assets/temple-pattern.webp')] opacity-[0.05] bg-repeat pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid gap-12 xl:grid-cols-[1.05fr_0.95fr] items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] border border-[#fbbf24]/20 bg-[#fffaf2] p-6 md:p-8 shadow-[0_30px_80px_rgba(126,34,17,0.08)]"
            >
              <div className="mb-8 overflow-hidden rounded-[1.75rem] border border-[#fbbf24]/20">
                <Image
                  src="/assets/dakshina-dwaraka-dham.webp"
                  alt="Dakshina Dwaraka Dham"
                  width={1200}
                  height={900}
                  className="h-[300px] md:h-[380px] w-full object-cover"
                />
              </div>

              <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full bg-[#2D0A0A] px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.25em] text-[#fbbf24]">
                <CalendarDays className="h-4 w-4" />
                Hare Krishna Movement Chennai
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D0A0A]" style={{ fontFamily: "var(--font-manrope)" }}>
                Dakshina Dwaraka Dham
              </h3>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700">
                Dakshina Dwaraka Dham is a sacred cultural complex dedicated to preserving and promoting India&apos;s timeless spiritual heritage. It is a project of Hare Krishna Movement Chennai, registered in 2008 as a Non-Profit Charitable Organisation, Regn. No. 828, Chennai, and affiliated to ISKCON Bangalore, Regn. S-49/78-79.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700">
                The temple is currently under construction. The presiding deities are Sri Sri Krishna Rukmini Satyabhama, Sri Sri Gaur Nitai, and Srila Prabhupada. Visitors from all walks of life come here seeking peace, devotion, and spiritual nourishment.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7f1d1d] to-[#ea580c] px-5 sm:px-6 py-3 text-[11px] sm:text-sm font-bold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-white shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  Support the construction
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => setIsScheduleOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-[#7f1d1d]/20 bg-white px-5 sm:px-6 py-3 text-[11px] sm:text-sm font-bold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-[#7f1d1d] shadow-sm transition-colors hover:border-[#ea580c]/40 hover:text-[#ea580c]"
                >
                  <Clock3 className="h-4 w-4" />
                  Temple schedule
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="rounded-[2rem] bg-gradient-to-br from-[#2D0A0A] via-[#4a0d0d] to-[#7f1d1d] p-6 md:p-8 text-white shadow-2xl">
                <p className="text-xs uppercase tracking-[0.28em] text-[#fbbf24]">Registered Identity</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur-sm">
                    <p className="text-sm font-medium text-[#fff1dc]">Registration</p>
                    <p className="mt-2 text-xl sm:text-2xl md:text-[1.75rem] leading-tight font-black text-white">Regn. No. 828, Chennai</p>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur-sm">
                    <p className="text-sm font-medium text-[#fff1dc]">Affiliation</p>
                    <p className="mt-2 text-xl sm:text-2xl md:text-[1.75rem] leading-tight font-black text-white">ISKCON Bangalore, S-49/78-79</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
                {deities.map((deity) => (
                  <div key={deity.title} className="overflow-hidden rounded-[1.75rem] border border-[#fbbf24]/20 bg-white shadow-xl">
                    <div className={`relative ${deity.images.length > 1 ? "grid h-56 grid-cols-2 gap-1 bg-[#fff7ed] p-1" : "h-56"}`}>
                      {deity.images.map((image, index) => (
                        <div key={image} className="relative h-full overflow-hidden rounded-[1.2rem]">
                          <Image
                            src={image}
                            alt={deity.images.length > 1 ? `${deity.title} ${index + 1}` : deity.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ea580c]">Presiding Deity</p>
                      <h4 className="mt-2 text-lg font-bold leading-snug text-[#2D0A0A]">{deity.title}</h4>
                      {deity.subtitle && (
                        <p className="mt-2 text-sm leading-relaxed text-gray-500">{deity.subtitle}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fff7ed] py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ea580c]/20 bg-white px-4 py-2 shadow-sm">
              <Sparkles className="h-4 w-4 text-[#ea580c]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ea580c]">Our Initiatives</span>
            </div>
            <h3 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-bold text-[#2D0A0A]" style={{ fontFamily: "var(--font-manrope)" }}>
              Spiritual culture in action
            </h3>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-600">
              From temple worship and youth outreach to pilgrimages, arts, education, prasadam distribution, and spiritual study, these initiatives reflect the living service culture of Hare Krishna Movement Chennai.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon

              return (
                <motion.article
                  key={initiative.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  className="group overflow-hidden rounded-[2rem] border border-[#fbbf24]/20 bg-white shadow-[0_18px_50px_rgba(126,34,17,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(126,34,17,0.14)]"
                >
                  <div className={`relative h-52 sm:h-60 overflow-hidden ${initiative.imageBg ?? ""}`}>
                    <Image
                      src={initiative.image}
                      alt={initiative.title}
                      fill
                      className={`${initiative.imageFit === "contain" ? `object-contain ${initiative.imagePadding ?? "p-4"}` : "object-cover"} transition-transform duration-700 group-hover:scale-105`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md border border-white/20">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="mt-4 text-xl sm:text-2xl font-bold text-white">{initiative.title}</h4>
                    </div>
                  </div>

                  <div className="space-y-4 p-6">
                    <p className="text-base leading-relaxed text-gray-700">{initiative.description}</p>
                    <p className="text-sm leading-relaxed text-gray-500">{initiative.extra}</p>

                    {initiative.contact && (
                      <div className="rounded-2xl bg-[#fff7ed] px-4 py-3 text-sm font-semibold text-[#7c2d12]">
                        Contact: {initiative.contact}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {initiative.popupLabel && (
                        <button
                          type="button"
                          onClick={() => setIsScheduleOpen(true)}
                          className="inline-flex items-center gap-2 rounded-full border border-[#ea580c]/20 bg-[#fff7ed] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.16em] text-[#ea580c] transition-colors hover:bg-[#ffedd5]"
                        >
                          <Clock3 className="h-4 w-4" />
                          {initiative.popupLabel}
                        </button>
                      )}

                      {initiative.href && initiative.href.startsWith("http") ? (
                        <Link
                          href={initiative.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[#2D0A0A] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.16em] text-white transition-colors hover:bg-[#4a0d0d]"
                        >
                          {initiative.linkLabel ?? "Learn more"}
                          <PlayCircle className="h-4 w-4" />
                        </Link>
                      ) : initiative.href ? (
                        <Link
                          href={initiative.href}
                          className="inline-flex items-center gap-2 rounded-full bg-[#2D0A0A] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.16em] text-white transition-colors hover:bg-[#4a0d0d]"
                        >
                          {initiative.linkLabel ?? "Learn more"}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isScheduleOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsScheduleOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-3xl overflow-hidden rounded-[2rem] border border-[#fbbf24]/20 bg-white shadow-2xl"
            >
              <div className="bg-gradient-to-r from-[#2D0A0A] via-[#4a0d0d] to-[#7f1d1d] px-6 py-5 text-white md:px-8">
                <button
                  type="button"
                  onClick={() => setIsScheduleOpen(false)}
                  className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </button>
                <p className="text-xs uppercase tracking-[0.25em] text-[#fbbf24]">Temple Timings</p>
                <h4 className="mt-2 text-3xl font-bold">Daily Temple Schedule</h4>
              </div>

              <div className="max-h-[70vh] overflow-y-auto p-6 md:p-8">
                <div className="grid gap-4">
                  {templeSchedule.map((item) => (
                    <div key={`${item.time}-${item.event}`} className="flex items-center gap-4 rounded-2xl border border-[#fbbf24]/15 bg-[#fffaf2] p-4">
                      <div className="w-28 shrink-0 text-right text-sm font-black text-[#b45309] md:w-40 md:text-base">
                        {item.time}
                      </div>
                      <div className="h-10 w-px bg-[#f59e0b]/20"></div>
                      <div className="text-sm font-semibold leading-relaxed text-slate-700 md:text-base">{item.event}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FooterSection />
    </main>
  )
}
