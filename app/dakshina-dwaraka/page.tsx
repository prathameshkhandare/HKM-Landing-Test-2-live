"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"
import { Check, Heart, ArrowRight, Users, MessagesSquare, Church, X, ChevronLeft, ChevronRight, Sun, Crown, User, Star } from "lucide-react"
import FooterSection from "@/components/FooterSection"
import PhilosophyTempleHeader from "@/components/PhilosophyTempleHeader"
import { useState } from "react"
import Image from "next/image"

// Construction Images - Strictly Ordered 1 to 7
const constructionImages = [
    "/assets/dakshina-vision/1.jpg", // Big View
    "/assets/dakshina-vision/2.jpg",
    "/assets/dakshina-vision/3.jpg",
    "/assets/dakshina-vision/4.png",
    "/assets/dakshina-vision/5.jpg",
    "/assets/dakshina-vision/6.jpg",
    "/assets/dakshina-vision/7.jpg"
]





const architectureHighlights = [
    "Temple Hall: 108 ft x 57 ft with a soaring 27 ft ceiling, accommodating over 600 devotees for congregational worship and festivals.",
    "Twin Majestic Gopurams: two grand towers above the main mandapam, one rising to 113 ft and another to 175 ft, making it the tallest in Chennai.",
    "Garbha Griha and Vimana: the main sanctum for Sri Sri Rukmini Dwarakadhisha, crowned by a Vimana rising nearly 90 ft above the ground.",
    "Total Built-up Area: approximately 40,000 sq. ft., blending devotion, knowledge, and heritage under one roof.",
]

const divinePresences = [
    "Sri Sri Krishna, Rukmini and Satyabhama — the Lord of Dwaraka in His divine splendour with His beloved consorts.",
    "Sri Sri Nitai Gauranga — Sri Chaitanya Mahaprabhu and Nityananda Prabhu, the twin embodiments of divine love and compassion.",
    "Srila Prabhupada — the Founder-Acharya whose transcendental vision brought Krishna Consciousness to the whole world.",
]

const culturalFacilities = [
    "Bhagavad-Gita classrooms: four dedicated classrooms serving nearly 200 participants, where children and adults learn Bhagavad-gita, ethics, and timeless Vedic values.",
    "Multipurpose cultural hall: a spacious 300-seater hall hosting cultural programs, classical arts, heritage festivals, and student competitions.",
]

const visionAtGlance = [
    {
        icon: Church,
        title: "Pallava-Style Heritage",
        text: "Envisioned as the second Shore Temple of Tamil Nadu, inspired by the sacred temple tradition of South India."
    },
    {
        icon: Crown,
        title: "Chennai Landmark",
        text: "Twin gopurams rising to 113 ft and 175 ft will make this one of the most striking temple landmarks in the city."
    },
    {
        icon: Users,
        title: "Community Capacity",
        text: "Designed for worship, education, festivals, and cultural gatherings with spaces serving hundreds of devotees and students."
    }
]

export default function DakshinaDwarakaPage() {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(0)

    const openLightbox = (index: number) => {
        setSelectedImage(index)
        setIsLightboxOpen(true)
    }

    const closeLightbox = () => setIsLightboxOpen(false)

    const navigateImage = (direction: number) => {
        setSelectedImage((prev) => {
            const next = prev + direction
            if (next >= constructionImages.length) return 0
            if (next < 0) return constructionImages.length - 1
            return next
        })
    }

    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">
            <Navbar />

            {/* Hero Section - Using Philosophy Style Header */}
            <PhilosophyTempleHeader 
                title="Dakshina Dwaraka Dham"
                subtitle="A magnificent spiritual and cultural complex on the shores of Thiruvanmiyur, envisioned to preserve and promote India's eternal spiritual and cultural heritage."
                stickerText="Future Cultural Landmark"
                imageSrc="/assets/dakshina-dwaraka-dham.png"
            />

            {/* About Section */}
            <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#FFF9F0] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] animate-spin-slow-reverse pointer-events-none"></div>
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-12 items-start">
                        <div className="w-full">
                            <h2 className="text-xs sm:text-sm font-bold text-[#ea580c] uppercase tracking-[0.18em] sm:tracking-widest mb-2 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-[#ea580c]"></span> Vision & Heritage
                            </h2>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D0A0A] mb-6 md:mb-8 leading-tight font-serif">
                                Dakshina Dwaraka Dham
                            </h3>
                            <p className="text-[#4a4a4a] text-base md:text-lg leading-relaxed mb-5 md:mb-6 font-light">
                                Nestled along the scenic seashore of the Bay of Bengal in Thiruvanmiyur, Chennai, <strong className="text-[#701a1a]">Dakshina Dwaraka Dham</strong> is a magnificent spiritual and cultural complex conceived by Srila Prabhupada&apos;s ISKCON Chennai, Hare Krishna Movement Chennai, affiliated to ISKCON Bangalore Regn. S-49/78-79. It is envisioned as a timeless landmark to promote and preserve India&apos;s eternal spiritual and cultural heritage.
                            </p>
                            <p className="text-[#4a4a4a] text-base md:text-lg leading-relaxed mb-5 md:mb-6 font-light">
                                &quot;Dakshina Dwaraka&quot; is inspired by Dwaraka in Gujarat, Lord Krishna&apos;s sacred coastal kingdom on the western shores of India. Just as Dwaraka stands by the sea as the Lord&apos;s own divine city, this temple is being raised beside the Bay of Bengal in Thiruvanmiyur to bring that same divine presence to the South.
                            </p>
                            <p className="text-[#4a4a4a] text-base md:text-lg leading-relaxed mb-8 md:mb-10 font-light">
                                Designed in the magnificent tradition of Pallava-style architecture, Dakshina Dwaraka Dham is envisioned as the second Shore Temple of Tamil Nadu, a living tribute to the artistic and spiritual genius of ancient South India, reborn for generations to come.
                            </p>

                            <div className="space-y-8">
                                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-[#FFB81C]/20 p-5 md:p-6 shadow-sm">
                                    <h4 className="text-xl md:text-2xl font-bold text-[#2D0A0A] mb-5 font-serif">Key Architectural Highlights</h4>
                                    <div className="space-y-4">
                                        {architectureHighlights.map((item, i) => (
                                            <div key={i} className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB81C] to-[#ea580c] flex items-center justify-center text-white shadow-md shrink-0 mt-1">
                                                    <Church size={18} />
                                                </div>
                                                <p className="text-[#4a4a4a] text-sm md:text-base leading-relaxed">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-[#FFB81C]/20 p-5 md:p-6 shadow-sm">
                                        <h4 className="text-xl md:text-2xl font-bold text-[#2D0A0A] mb-5 font-serif">Divine Presences</h4>
                                        <div className="space-y-4">
                                            {divinePresences.map((item, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <Star className="w-5 h-5 text-[#ea580c] shrink-0 mt-1" />
                                                    <p className="text-[#4a4a4a] text-sm md:text-base leading-relaxed">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-[#FFB81C]/20 p-5 md:p-6 shadow-sm">
                                        <h4 className="text-xl md:text-2xl font-bold text-[#2D0A0A] mb-5 font-serif">Educational & Cultural Facilities</h4>
                                        <div className="space-y-4">
                                            {culturalFacilities.map((item, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <MessagesSquare className="w-5 h-5 text-[#ea580c] shrink-0 mt-1" />
                                                    <p className="text-[#4a4a4a] text-sm md:text-base leading-relaxed">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="w-full relative xl:sticky xl:top-28 space-y-5 md:space-y-6">
                            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white ring-1 ring-[#FFB81C]/20 bg-white group">
                                <div className="aspect-[6/4.2] relative bg-gradient-to-br from-[#fffaf2] to-[#fff1dc]">
                                    <img 
                                        src="/assets/dakshina-dwaraka-dham.webp" 
                                        alt="Dakshina Dwaraka Dham render" 
                                        className="w-full h-full object-contain scale-[1.08] md:scale-[1.12] object-center transition-transform duration-700 group-hover:scale-[1.15]" 
                                    />
                                </div>
                            </div>

                            <div className="rounded-[1.75rem] border border-[#FFB81C]/20 bg-white p-5 md:p-6 shadow-lg">
                                <div className="inline-flex max-w-full items-center rounded-full border border-[#f97316]/30 bg-[#fff7ed] px-4 py-2 shadow-sm mb-4">
                                    <p className="text-[#c2410c] text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.3em] font-extrabold">Timeless Landmark</p>
                                </div>
                                <p className="text-[#2D0A0A] text-base sm:text-lg md:text-2xl font-serif font-bold leading-snug">
                                    A sacred coastal temple vision rising in Thiruvanmiyur to reflect the glory of Sri Sri Rukmini Dwarakadhisha&apos;s eternal abode.
                                </p>
                            </div>

                            <div className="grid gap-4">
                                {visionAtGlance.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -4 }}
                                        className="flex items-start gap-4 rounded-2xl border border-[#FFB81C]/20 bg-white/80 backdrop-blur-sm p-5 shadow-sm"
                                    >
                                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#FFB81C] to-[#ea580c] flex items-center justify-center text-white shadow-md shrink-0">
                                            <item.icon size={18} />
                                        </div>
                                        <div className="min-w-0">
                                            <h4 className="text-base md:text-lg font-bold text-[#2D0A0A] mb-1">{item.title}</h4>
                                            <p className="text-sm leading-relaxed text-[#5a5a5a]">{item.text}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="rounded-2xl border border-[#FFB81C]/20 bg-[#fff7ed] p-5 shadow-sm">
                                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#ea580c] mb-3">Vision Statement</p>
                                <p className="text-sm md:text-base leading-relaxed font-light text-[#4a4a4a]">
                                    Dakshina Dwaraka Dham is envisioned as a spiritual, educational, and cultural beacon for pilgrims, students, artists, and seekers across Tamil Nadu and beyond.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-gradient-to-r from-[#2D0A0A] to-[#5b130f] p-6 md:p-8 text-white shadow-xl">
                                <h4 className="text-xl md:text-2xl font-bold font-serif mb-4">A Beacon for Society</h4>
                                <p className="text-white/90 text-sm md:text-lg leading-relaxed font-light">
                                    Dakshina Dwaraka Dham aspires to be far more than a place of worship. It is envisioned as a spiritual, educational, and cultural beacon drawing pilgrims, scholars, students, artists, and seekers from across Tamil Nadu and beyond. Hundreds of devotees visit daily to partake in sacred Deity Darshan, melodious Hare Krishna Kirtans, Gita seminars, and the distribution of sanctified prasada, carrying forward Srila Prabhupada&apos;s sacred mission to unite devotion, knowledge, and heritage for the upliftment of all.
                                </p>
                            </div>

                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[url('/assets/mandala-pattern.png')] bg-contain opacity-10 animate-spin-slow"></div>
                            <div className="absolute -top-10 -left-10 w-32 h-32 border-2 border-[#FFB81C]/30 rounded-full animate-pulse-slow"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seva Opportunities (Simple & Clean) */}
            <section id="contribute" className="py-24 px-6 bg-[#FFF9F0] relative overflow-hidden">
                {/* Simple Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#e0e7ff] via-[#fff1f2] to-[#FFF9F0] opacity-50"></div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="text-center mb-12">
                         <h2 className="text-xs font-bold text-[#ea580c] uppercase tracking-[0.2em] mb-4">
                             Seva Opportunities
                         </h2>
                        <h3 className="text-5xl font-serif text-[#2D0A0A] mb-6">
                            Join the Divine Mission
                        </h3>
                         <div className="w-16 h-[2px] bg-[#ea580c] mx-auto mb-6"></div>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto font-serif italic">
                            "Your contribution helps build a home for the Lord and a center for spiritual education. Choose a seva that resonates with your heart."
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <a 
                            href="https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign?utm_medium=paid&utm_source=ig&utm_id=120240422290590310&utm_content=120240422290600310&utm_term=120240422290610310&utm_campaign=120240422290590310&fbclid=PAaWdyZAPF5G1leHRuA2FlbQEwAGFkaWQBqy4HAGkAlnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp_NDbUirFR3cK26jRHkow4-8oSvGj8mEcvLbzn3z52AUPcH--EAukd7M5N-e_aem_ZeWws-aa6CE-KWm_CnzV1A"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#ea580c] text-white px-8 py-3 rounded hover:bg-[#c2410c] transition-colors font-medium text-lg uppercase tracking-wide flex items-center gap-2 shadow-sm"
                        >
                            Donate Now 
                            <ArrowRight size={18} />
                        </a>
                        
                        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-gray-500 font-light">
                             <span className="flex items-center gap-2"><Check size={12} className="text-[#ea580c]" /> 80G Tax Exemption Available</span>
                             <span>•</span>
                             <span className="flex items-center gap-2"><Check size={12} className="text-[#ea580c]" /> Secure Payment Gateway</span>
                        </div>
                    </div>
                        

                    

                </div>
            </section>

            {/* Architectural Vision Section */}
            <section className="py-24 px-6 bg-white relative overflow-hidden">
                 <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                         <h2 className="text-sm font-bold text-[#ea580c] uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
                            <span className="w-8 h-[2px] bg-[#ea580c]"></span> Divine Architecture <span className="w-8 h-[2px] bg-[#ea580c]"></span>
                         </h2>
                         <h3 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[#2D0A0A]">Architectural Vision</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Main Render - Large Card */}
                        <div className="md:col-span-2 aspect-video rounded-2xl overflow-hidden shadow-xl relative group">
                            <Image 
                                src="https://cdn.hkmchennai.org/cdn-files/ddd_arc_1.jpg" 
                                alt="Grand Front View" 
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 80vw"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent opacity-90"></div>
                             
                             {/* Label Overlay */}
                             <div className="absolute bottom-6 left-6 flex items-center gap-3 z-10">
                                 <div className="w-10 h-10 rounded-full bg-[#334155]/80 backdrop-blur-md flex items-center justify-center border border-white/10 text-[#FFB81C]">
                                     <Church size={20} />
                                 </div>
                                 <h4 className="text-xl font-bold text-white font-sans tracking-wide">Grand Front View</h4>
                             </div>
                        </div>

                        {/* Aerial View - Blue Card Style */}
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative group bg-[#1e293b]">
                             <Image 
                                src="https://cdn.hkmchennai.org/cdn-files/ddd_arc_2.jpg" 
                                alt="Aerial Perspective" 
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                                sizes="(max-width: 768px) 100vw, 50vw"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
                             <div className="absolute bottom-6 left-6 flex items-center gap-3 z-10">
                                 <div className="w-10 h-10 rounded-full bg-[#334155]/80 backdrop-blur-md flex items-center justify-center border border-white/10 text-[#FFB81C]">
                                     <div className="w-4 h-4 border-2 border-[#FFB81C] border-dashed rounded-[2px]" />
                                 </div>
                                 <h4 className="text-lg font-bold text-white font-sans tracking-wide">Aerial Perspective</h4>
                             </div>
                        </div>

                         {/* Side View - Blue Card Style */}
                        <div className="grid grid-rows-2 gap-6 h-full">
                            <div className="rounded-2xl overflow-hidden shadow-xl relative group bg-[#1e293b] h-full min-h-[200px]">
                                <Image 
                                    src="https://cdn.hkmchennai.org/cdn-files/ddd_arc_3.jpg" 
                                    alt="Side View" 
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                                    <div className="w-8 h-8 rounded-full bg-[#334155]/80 backdrop-blur-md flex items-center justify-center border border-white/10 text-[#FFB81C]">
                                        <div className="w-3 h-3 bg-[#FFB81C] rounded-[1px]" />
                                    </div>
                                    <h4 className="text-sm font-bold text-white font-sans tracking-wide">Thiruvanmiyur Beach View</h4>
                                </div>
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-xl relative group bg-[#1e293b] h-full min-h-[200px]">
                                <Image 
                                    src="https://cdn.hkmchennai.org/cdn-files/ddd_arc_4.jpg" 
                                    alt="Side Perspective" 
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 border-4 border-transparent" 
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                                    <div className="w-8 h-8 rounded-full bg-[#334155]/80 backdrop-blur-md flex items-center justify-center border border-white/10 text-[#FFB81C]">
                                        <div className="w-3 h-3 bg-[#FFB81C] rounded-[1px]" />
                                    </div>
                                    <h4 className="text-sm font-bold text-white font-sans tracking-wide">Side View</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </section>

            {/* Construction Status Section */}
            <section className="py-20 px-6 bg-white border-t border-gray-100 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea580c] opacity-[0.03] rounded-bl-full pointer-events-none"></div>
                
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-10 border-b border-gray-100 pb-6">
                        <div className="text-left">
                             <h2 className="text-sm font-bold text-[#ea580c] uppercase tracking-widest mb-2 flex items-center gap-2">
                                <span className="w-6 h-[2px] bg-[#ea580c]"></span> Progress Update
                             </h2>
                             <h3 className="text-3xl md:text-4xl font-bold font-serif text-[#2D0A0A]">Construction Status</h3>
                        </div>
                        <p className="text-gray-500 font-medium italic mt-2 md:mt-0 bg-[#FFF9F0] px-4 py-1 rounded-full border border-[#ea580c]/10 text-sm">
                            PROGRESS TILL NOW 
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Main Collage - Takes up 7 cols - SHOWS IMAGE 1 (BIG VIEW) */}
                        <div className="lg:col-span-7 w-full h-[500px] relative" onClick={() => openLightbox(0)}>
                            <div className="absolute inset-0 h-full w-full rounded-xl overflow-hidden shadow-xl border-[6px] border-white group relative hover:shadow-2xl transition-all duration-500 cursor-pointer">
                                <Image 
                                    src={constructionImages[0]} // 1.jpg
                                    alt="Construction Main" 
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 1024px) 100vw, 60vw"
                                />
                                <div className="absolute inset-0 border border-black/5 rounded-lg pointer-events-none"></div>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 z-10 pointer-events-none">
                                     <div className="bg-black/50 p-2 rounded-full text-white"><ArrowRight size={24} /></div>
                                </div>
                            </div>
                            <p className="absolute -bottom-8 w-full text-center text-gray-400 text-xs uppercase tracking-widest">Site Progress Overview</p>
                        </div>

                        {/* Recent Snaps Grid - Takes up 5 cols - SHOWS IMAGES 2, 3, 4 */}
                        <div className="lg:col-span-5 flex flex-col gap-4">
                            <div className="bg-[#FFF9F0] p-6 rounded-xl border border-[#ea580c]/10">
                                <h4 className="text-[#2D0A0A] font-bold font-serif mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Latest Snapshots
                                </h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {/* Displaying 2, 3, 4 only in grid */}
                                    {constructionImages.slice(1, 4).map((src, index) => (
                                        <div 
                                            key={index}
                                            onClick={() => openLightbox(index + 1)} // Correct index for lightbox
                                            className="rounded-lg overflow-hidden shadow-sm h-32 border border-white group relative cursor-pointer"
                                        >
                                             <Image 
                                                src={src} 
                                                alt={`Snap ${index + 1}`} 
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                sizes="(max-width: 768px) 50vw, 20vw"
                                             />
                                             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                                                <div className="bg-black/50 p-1 rounded-full text-white"><ArrowRight size={16} /></div>
                                             </div>
                                        </div>
                                    ))}
                                    
                                     {/* View All Button */}
                                     <div 
                                        onClick={() => openLightbox(0)}
                                        className="rounded-lg overflow-hidden shadow-sm h-32 border border-white group relative cursor-pointer flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition-colors"
                                    >
                                         <div className="w-8 h-8 rounded-full bg-[#FFF9F0] flex items-center justify-center text-[#ea580c] mb-2 border border-[#ea580c]/20">
                                            <span className="font-bold text-lg">+</span>
                                         </div>
                                         <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">View All</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Lightbox Modal */}
            {isLightboxOpen && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-sm" onClick={closeLightbox}>
                    <button 
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
                    >
                        <X size={32} />
                    </button>
                    
                    <button 
                        onClick={(e) => { e.stopPropagation(); navigateImage(-1); }}
                        className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-2 bg-white/5 hover:bg-white/10 rounded-full"
                    >
                        <ChevronLeft size={32} />
                    </button>

                     <button 
                        onClick={(e) => { e.stopPropagation(); navigateImage(1); }}
                        className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-2 bg-white/5 hover:bg-white/10 rounded-full"
                    >
                        <ChevronRight size={32} />
                    </button>

                    <div className="relative w-full max-w-5xl h-[80vh] flex flex-col items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
                        <motion.img 
                            key={selectedImage}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                            src={constructionImages[selectedImage]} 
                            alt="Construction View" 
                            className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
                        />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-light tracking-widest bg-black/50 px-4 py-1 rounded-full">
                            {selectedImage + 1} / {constructionImages.length}
                        </div>
                    </div>
                </div>
            )}


            {/* Sevakartas - Sponsors Section */}
            <section className="py-24 px-6 bg-[#FFF9F0] relative overflow-hidden text-center text-[#2D0A0A]">
                 {/* Very Subtle Pattern */}
                 <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[url('/assets/mandala-pattern.png')] bg-fixed opacity-[0.03]"></div>
                
                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-6xl font-black font-serif text-[#2D0A0A] mb-4 uppercase tracking-wider drop-shadow-sm">Dakshina Dwaraka Dham</h2>
                        <div className="flex items-center justify-center gap-6">
                            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#ea580c]"></span>
                            <h3 className="text-2xl md:text-3xl font-light font-serif text-[#ea580c] uppercase tracking-[0.2em]">Sevakartas</h3>
                            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#ea580c]"></span>
                        </div>
                    </div>
                    
                    {/* Heritage Patron - Centerpiece */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.8 }}
                        className="mb-16 relative group"
                    >
                        {/* More subtle ambient glow */}
                        <div className="absolute inset-0 bg-[#ea580c]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-1000"></div>
                        
                        {/* Refined Frame Container */}
                        <div className="relative w-full max-w-3xl mx-auto">
                             <div className="bg-white border-2 border-[#ea580c]/20 p-2 rounded-xl shadow-2xl relative overflow-hidden">
                                 {/* Heritage Specific Background - Subtle Mandala */}
                                 <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.06] bg-center bg-contain bg-no-repeat pointer-events-none animate-spin-slow-reverse"></div>
                                 <div className="absolute inset-0 bg-gradient-to-br from-[#ea580c]/5 to-transparent pointer-events-none"></div>

                                 {/* Decorative Corner Elements - Intricate */}
                                 <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#ea580c]/30 rounded-tl-3xl pointer-events-none"></div>
                                 <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-[#ea580c]/30 rounded-tr-3xl pointer-events-none"></div>
                                 <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-[#ea580c]/30 rounded-bl-3xl pointer-events-none"></div>
                                 <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#ea580c]/30 rounded-br-3xl pointer-events-none"></div>

                                 <div className="relative z-10 p-12 flex flex-col items-center">
                                     <div className="mb-6">
                                         <div className="flex items-center gap-4 bg-[#ea580c]/10 px-6 py-2 rounded-full border border-[#ea580c]/30">
                                            <Sun size={16} className="text-[#ea580c] animate-spin-slow" />
                                            <span className="text-[#ea580c] text-sm font-serif font-bold uppercase tracking-[0.3em]">Heritage Patron</span>
                                            <Sun size={16} className="text-[#ea580c] animate-spin-slow" />
                                         </div>
                                     </div>
                                     
                                     <h4 className="text-4xl md:text-6xl font-serif font-bold text-[#2D0A0A] leading-tight text-center mb-6 relative">
                                        <span className="relative z-10">Sri Vaidyanathan K</span>
                                        {/* Text flourish */}
                                        <span className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl text-[#ea580c]/5 font-serif whitespace-nowrap blur-sm">Sri Vaidyanathan</span>
                                     </h4>
                                     
                                     <div className="flex items-center gap-3 opacity-60">
                                         <span className="h-[1px] w-16 bg-[#ea580c]"></span>
                                         <div className="w-3 h-3 rotate-45 border-2 border-[#ea580c]"></div>
                                         <span className="h-[1px] w-16 bg-[#ea580c]"></span>
                                     </div>
                                 </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Founder Patrons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                         {[
                             "Nandhika Sri TS, Janani,\nSenthil Kumar TKM",
                             "Sri Devarajan Kabilan"
                         ].map((patron, i) => (
                             <motion.div 
                                key={i} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="bg-white p-8 rounded-xl border-t-4 border-t-[#ea580c] border-x border-b border-gray-100 relative group hover:shadow-xl transition-all duration-300 shadow-sm overflow-hidden"
                             >
                                {/* Founder Background Element */}
                                <div className="absolute -right-6 -bottom-6 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500">
                                    <Church size={120} className="text-[#ea580c]" />
                                </div>
                                <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#FFF5E0]/50 to-transparent"></div>
                                
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="mb-4">
                                        <span className="inline-block py-1 px-4 text-[#ea580c] font-serif text-sm font-bold uppercase tracking-[0.2em] border-b-2 border-[#ea580c]/20">Founder Patron</span>
                                    </div>
                                    <p className="text-xl md:text-2xl font-serif text-[#2D0A0A] leading-relaxed whitespace-pre-line group-hover:text-black transition-colors">{patron}</p>
                                </div>
                             </motion.div>
                         ))}
                    </div>

                    {/* Standard Styles for List Groups - New Horizontal Design */}
                    <div className="space-y-8 max-w-5xl mx-auto">
                        {/* Reusable Seva Card Component */}
                        {[
                            { title: "Gopuram Seva", names: ["Smt Renuka Rowvey Bengaluru", "Mrs. Sushma Sarin (w/o MR B.R.Sarin)"], icon: <Church className="w-6 h-6" /> },
                            { title: "Dharmadhikari", names: ["Vikram, Vandana, Aditya, Anupama Agarwal"], icon: <Users className="w-6 h-6" /> },
                            { title: "Kalasha Seva", names: ["Kishor Kumar Gokaldas & Family"], icon: <Sun className="w-6 h-6" /> }
                        ].map((section, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all border border-[#ea580c]/10">
                                <div className="bg-[#FFF5E0] px-6 py-4 border-b border-[#ea580c]/10 flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-[#ea580c]">
                                        {section.icon}
                                        <h4 className="font-bold text-lg uppercase tracking-widest font-serif">{section.title}</h4>
                                    </div>
                                    <div className="h-1 w-12 bg-[#ea580c]/30 rounded-full"></div>
                                </div>
                                <div className="p-8 relative">
                                     <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#FFF5E0]/30 to-transparent pointer-events-none"></div>
                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {section.names.map((name, nIdx) => (
                                            <div key={nIdx} className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#ea580c]/60"></div>
                                                <p className="text-lg text-gray-700 font-light font-serif tracking-wide">{name}</p>
                                            </div>
                                        ))}
                                     </div>
                                </div>
                            </div>
                        ))}

                        {/* Dharma Karta */}
                         <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all border border-[#ea580c]/10">
                            <div className="bg-[#FFF5E0] px-8 py-5 border-b border-[#ea580c]/10 flex items-center justify-between">
                                <div className="flex items-center gap-3 text-[#ea580c]">
                                    <Crown size={24} />
                                    <h4 className="font-bold text-xl uppercase tracking-widest font-serif">Dharma Karta</h4>
                                </div>
                                <div className="h-1 w-16 bg-[#ea580c]/30 rounded-full"></div>
                            </div>
                            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 relative">
                                <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none rotate-12">
                                    <Crown size={150} />
                                </div>
                                <ul className="space-y-4">
                                    {["Sri Balaji Jayaraman", "Smt Rada Raghunaathan", "Sri Senthil Kumar R"].map((name, i) => (
                                         <li key={i} className="flex items-center gap-3 text-lg text-gray-700 font-light font-serif">
                                            <ArrowRight size={14} className="text-[#ea580c]" /> {name}
                                         </li>
                                    ))}
                                </ul>
                                <ul className="space-y-4">
                                    {["Sri Subhash Chandra Goel", "Sri Vikram Agarwal", "Smt Vishaka K"].map((name, i) => (
                                         <li key={i} className="flex items-center gap-3 text-lg text-gray-700 font-light font-serif">
                                            <ArrowRight size={14} className="text-[#ea580c]" /> {name}
                                         </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                         {/* Dharma Sevak - Wide List */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all border border-[#ea580c]/10">
                            <div className="bg-[#FFF5E0] px-8 py-5 border-b border-[#ea580c]/10 flex items-center justify-between">
                                <div className="flex items-center gap-3 text-[#ea580c]">
                                    <Heart size={24} />
                                    <h4 className="font-bold text-xl uppercase tracking-widest font-serif">Dharma Sevak</h4>
                                </div>
                                <div className="h-1 w-16 bg-[#ea580c]/30 rounded-full"></div>
                            </div>
                            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-gray-700 font-serif text-lg relative">
                                 <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.02] pointer-events-none"></div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100">Sri Anil Jonnalagadda</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100">R Srinivas Babu</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100">Sri Anurag</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100">Sundari Gopi Devi Dasi & Giridhari Ramamoorthy</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100">Balachandar Srinivasan</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100">Sri Sundeep Anand</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100">Smt Geetha Kalyani Viswakumar</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100">M/S Suryanarayana Aggregates & Sands</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100">(Late) Smt. Kausalya R</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100 relative group-hover:pl-2 transition-all cursor-default">
                                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#ea580c] opacity-0 group-hover:opacity-100 rounded-full transition-opacity"></span>
                                    M/s TVS Motor Company Ltd
                                </div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100">Sri Lakshmanan K N</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100">Dr Uma Jaganmohan & Jaganmohan</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100">Smt Mangala Nagarajan</div>
                                <div className="text-center md:text-left hover:text-[#ea580c] transition-colors p-2 border-b border-dashed border-gray-100">Sri Nagarajan V</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Project Team Section */}
            <section className="py-20 px-6 bg-white relative">
                 <div className="container mx-auto max-w-5xl">
                      <h2 className="text-2xl font-bold font-serif text-[#2D0A0A] text-center mb-12 uppercase tracking-widest">Project Team</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                           {/* Principal Architect */}
                           <div className="flex flex-col items-center text-center p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-sm font-bold text-[#ea580c] uppercase tracking-widest mb-4">Principal Architect</h4>
                                <div className="mb-4">
                                     {/* Placeholder for Logo if not available, replacing with stylized text */}
                                     <div className="text-3xl font-serif font-black text-[#2e4c9c]">InGenious</div>
                                     <div className="text-sm text-gray-500 uppercase tracking-tight">Studio Private Limited</div>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Office No. 158, First Floor, Tower B1<br/>
                                    Spaze I Tech Park, Sohna Road, Sector 49<br/>
                                    Gurgaon, Haryana - 122 002
                                </p>
                           </div>

                             {/* Architect & Structural Consultant */}
                             <div className="flex flex-col items-center text-center p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-sm font-bold text-[#ea580c] uppercase tracking-widest mb-4">Architect & Structural Consultant</h4>
                                <div className="mb-4">
                                     <p className="text-xl font-bold font-serif text-gray-800">Sri. B.S Muralidhara</p>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    No.827 Dhun Building, 2nd Floor North Wing,<br/>
                                    Mount Road, Chennai-600 002.<br/>
                                    Phone: 044-28555581
                                </p>
                           </div>

                            {/* Facade Consultant */}
                             <div className="flex flex-col items-center text-center p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-sm font-bold text-[#ea580c] uppercase tracking-widest mb-4">Facade Consultant</h4>
                                <div className="mb-4">
                                     <div className="text-3xl font-serif font-bold text-[#452c63]">Nemcon</div>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    G K Venkatesh No.569,<br/>
                                    Sector - 5, Vaishali,<br/>
                                    Ghaziabad – 201 012.<br/>
                                    Phone: +91 93800 82928.
                                </p>
                           </div>

                            {/* MEP Consultant */}
                             <div className="flex flex-col items-center text-center p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-sm font-bold text-[#ea580c] uppercase tracking-widest mb-4">MEP Consultant</h4>
                                <div className="mb-4">
                                     <div className="bg-[#005f6b] text-white px-3 py-1 text-2xl font-bold tracking-widest rounded-sm">BESTEN</div>
                                </div>
                                <p className="text-gray-600 text-sm italic mb-2">Besten Engineers & Consultants India Pvt. Ltd</p>
                                <p className="text-gray-600 text-xs text-center">
                                    F-2, Lakshmi Apartments, 95, Periyar Pathai,<br/>
                                    Choolaimedu (W), Near 100ft Road,<br/>
                                    Chennai- 600 094 Phone: +91 44 2361 1595 / 96
                                </p>
                           </div>
                      </div>
                 </div>
            </section>
        </main>
    )
}
