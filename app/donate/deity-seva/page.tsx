"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Heart, Sparkles, HandPlatter, Flower2, UtensilsCrossed, ArrowRight } from "lucide-react"
import Link from "next/link"

const sevaOptions = [
    {
        id: "nitya-aradhana",
        title: "Nitya Aradhana Seva",
        amount: "15,000",
        shortDesc: "Daily worship and arati offerings.",
        fullDesc: "Contribute to the daily worship (Nitya Seva) of Their Lordships Sri Sri Rukmini Dwarakashisha. This includes the various aratis offered throughout the day, ensuring the highest standard of daily devotion.",
        image: "/assets/daily-darshan/darshan-main.jpg",
        icon: <Heart size={24} className="fill-current" />,
        color: "#ea580c",
        link: "https://rzp.io/rzp/XpquK2mb"
    },
    {
        id: "raja-bhojanam",
        title: "Raja Bhojanam Seva",
        amount: "5,000",
        shortDesc: "Majestic daily food offerings.",
        fullDesc: "Support the preparation of opulent daily food offerings (Raja Bhojanam) for the Deities. Your contribution ensures that Their Lordships are served with the finest ingredients and devotion.",
        image: "/assets/diety-seva/naivedyam-sevaa.png",
        icon: <HandPlatter size={24} className="fill-current" />,
        color: "#701a1a",
        link: "https://rzp.io/rzp/XpquK2mb"
    },
    {
        id: "annadana",
        title: "Annadana Seva",
        amount: "5,000",
        shortDesc: "Distribution of spiritual food.",
        fullDesc: "Participate in the sacred act of Annadanam (food distribution). After the food is offered to the Deities (becoming Prasadam), it is distributed to devotees and visitors, nourishing both body and soul.",
        image: "/assets/diety-seva/annadanam.jpg",
        icon: <UtensilsCrossed size={24} className="fill-current" />,
        color: "#d97706",
        link: "https://rzp.io/rzp/XpquK2mb"
    },
    {
        id: "nitya-pushpa",
        title: "Nitya Pushpa Seva",
        amount: "4,000",
        shortDesc: "Beautiful flower decorations.",
        fullDesc: "Sponsor the exquisite daily floral arrangements and garlands (Pushpalankar). The Deities are adorned with fresh, fragrant flowers every day, enhancing Their divine beauty.",
        image: "/assets/gaura-purnima/3.7.JPG",
        icon: <Flower2 size={24} className="fill-current" />,
        color: "#b45309",
        link: "https://rzp.io/rzp/XpquK2mb"
    },
    {
        id: "shodashopachara",
        title: "Shodashopachara Seva",
        amount: "2,000",
        shortDesc: "Sixteen types of royal offerings.",
        fullDesc: "Offer the traditional Shodashopachara (sixteen items of worship) to Their Lordships. This encompasses a complete and elaborate worship standard as prescribed in the Agamas.",
        image: "/assets/Sri-krishna-Janmashtami.jpg",
        icon: <Sparkles size={24} className="fill-current" />,
        color: "#9f1239",
        link: "https://rzp.io/rzp/XpquK2mb"
    },
    {
        id: "any-amount",
        title: "Donate Any Amount",
        amount: "Any Amount",
        shortDesc: "Contribute according to your desire.",
        fullDesc: "Support the ongoing Deity worship and temple activities with a contribution of your choice. Every offering, big or small, made with devotion is accepted by the Lord.",
        image: "/assets/diety-seva/annadanam.jpg",
        icon: <Heart size={24} className="fill-current" />,
        color: "#a16207",
        link: "https://rzp.io/rzp/XpquK2mb"
    }
]

export default function DeitySevaPage() {
    return (
        <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans selection:bg-[#FFB81C] selection:text-white pb-20">
            <NavbarDemo />

            {/* Hero Section - Saffron Theme (Matches Make Donation) */}
            <section className="relative h-[50vh] min-h-[400px] pt-32 flex items-center justify-center overflow-hidden bg-[#2D0A0A]">
                {/* Gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#701a1a] via-[#ea580c] to-[#b45309] opacity-90"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FFB81C]/20 via-transparent to-transparent opacity-60"></div>

                {/* Patterns */}
                <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow"></div>

                <div className="container mx-auto text-center relative z-10 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(255,184,28,0.3)]">
                            Sri Sri Rukmini Dwarakashisha
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif tracking-tight drop-shadow-lg">
                            Deity <span className="text-[#fbb201] italic">Worship</span> Sevas
                        </h1>
                        <p className="text-xl md:text-2xl text-[#ffe8cc] font-light max-w-3xl mx-auto leading-relaxed italic">
                            "By engaging in the service of the Lord, one’s heart becomes purified, and love for God naturally awakens."
                        </p>
                    </motion.div>
                </div>

                {/* Waves removed for consistency with make-donation hero */}
            </section>

            {/* Introduction & Philosophy Section */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                <div className="flex justify-center mb-6">
                    <Sparkles className="text-[#ea580c] w-12 h-12 opacity-80" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#701a1a] font-serif mb-8">
                    The Importance of Deity Seva
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                        In the Vedic tradition, worshiping the Deity form of the Lord (Archa-vigraha) in the temple is a fundamental practice of Bhakti Yoga. The Supreme Lord, out of His causeless mercy, appears in a form made of material elements like brass, stone, or wood, so that we can render direct service to Him with our material senses.
                    </p>
                    <p>
                        By contributing to the various services offered to Their Lordships Sri Sri Rukmini Dwarakashisha, you directly participate in Their daily worship. This pleases the Lord immensely and brings auspiciousness, spiritual advancement, and eternal merit to you and your family.
                    </p>
                </div>
            </section>

            {/* The 4 Sevas Grid */}
            <section className="max-w-7xl mx-auto px-4 py-8 mb-24">
                <div className="text-center mb-16 relative">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#701a1a] font-serif inline-block relative z-10 px-8 bg-[#FFF9F0]">
                        Offer Your Service
                    </h2>
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent z-0"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                    {sevaOptions.map((seva, index) => (
                        <motion.div
                            key={seva.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className={`h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden relative rounded-2xl flex flex-col group ${
                                seva.id === 'any-amount' 
                                    ? "bg-gradient-to-br from-[#FFF9F0] via-white to-[#FFF3E0] shadow-xl border-2 border-[#FFB81C]/40 ring-1 ring-[#FFB81C]/20" 
                                    : "bg-white border-2 border-[#FFB81C]/20 shadow-xl ring-1 ring-black/5"
                            }`}>
                                {seva.id === 'any-amount' ? (
                                    <div className="flex flex-col h-full justify-between items-center text-center p-6 lg:p-8 relative z-10 w-full min-h-[420px] overflow-hidden group/special">
                                        {/* Light Warm Background */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9F0] via-white to-[#FFF3E0] pointer-events-none"></div>
                                        
                                        {/* Animated Glow Blobs - warm tones */}
                                        <motion.div 
                                            animate={{ 
                                                scale: [1, 1.2, 1],
                                                x: [0, 50, 0],
                                                y: [0, -30, 0]
                                            }}
                                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#FFB81C]/15 rounded-full blur-[120px] pointer-events-none"
                                        />
                                        <motion.div 
                                            animate={{ 
                                                scale: [1, 1.3, 1],
                                                x: [0, -60, 0],
                                                y: [0, 40, 0]
                                            }}
                                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                            className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#ea580c]/10 rounded-full blur-[120px] pointer-events-none"
                                        />

                                        {/* Subtle CSS Pattern */}
                                        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:24px_24px]"></div>

                                        <div className="flex flex-col items-center flex-grow justify-center w-full z-10">
                                            {/* Floating Icon Section */}
                                            <motion.div 
                                                animate={{ 
                                                    y: [0, -20, 0],
                                                    rotate: [12, 8, 12]
                                                }}
                                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                                className="relative mb-8"
                                            >
                                                <div className="absolute inset-0 bg-[#FFB81C] blur-[40px] opacity-20 rounded-full scale-150"></div>
                                                <Heart size={56} className="text-[#ea580c] fill-[#ea580c] drop-shadow-[0_4px_20px_rgba(234,88,12,0.4)] relative z-10" />
                                            </motion.div>
                                            
                                            <motion.h3 
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                className="text-[#701a1a] font-bold text-2xl lg:text-3xl font-serif mb-4 tracking-tight leading-tight"
                                            >
                                                {seva.title}
                                            </motion.h3>
                                            
                                            <div className="inline-flex items-center gap-2 mb-6 relative group/badge">
                                                <div className="absolute -inset-2 bg-gradient-to-r from-[#FFB81C] to-[#ea580c] blur-lg opacity-30 group-hover/badge:opacity-50 transition-opacity duration-500 animate-pulse-slow"></div>
                                                <span className="relative bg-white/90 backdrop-blur-xl text-[#ea580c] px-8 py-2.5 rounded-full text-lg font-black shadow-lg tracking-[0.1em] border border-[#FFB81C]/50 flex items-center gap-3">
                                                    <Sparkles size={20} className="text-[#FFB81C] animate-pulse" />
                                                    ₹ Any Amount
                                                </span>
                                            </div>
                                            
                                            <p className="text-[#666666] leading-relaxed mb-6 text-sm font-medium max-w-sm italic">
                                                {seva.fullDesc}
                                            </p>
                                        </div>

                                        <div className="w-full mt-auto pt-5 border-t border-[#FFB81C]/20 relative z-20">
                                            <a
                                                href={seva.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="relative overflow-hidden w-full py-3.5 px-6 rounded-xl font-bold transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 group/btn bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white cursor-pointer transform hover:-translate-y-1 text-base border border-white/30 uppercase tracking-tight"
                                            >
                                                {/* Shimmer Effect */}
                                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[100%] group-hover/btn:animate-[shimmer_1.5s_infinite_linear] pointer-events-none"></div>
                                                
                                                <span className="relative z-10 flex items-center gap-2">
                                                    Contribute heartfully <Heart size={18} className="fill-current transform group-hover/btn:scale-125 transition-transform duration-300" />
                                                </span>
                                            </a>
                                            <p className="text-[#ea580c]/50 text-xs mt-3 uppercase tracking-[0.2em] font-bold">Sacred Offering</p>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {/* Image Container */}
                                        <div className="relative h-48 md:h-56 overflow-hidden bg-gray-900">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>

                                            {/* Fallback styling if image fails to load or is a placeholder */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                                <div className="text-[#FFB81C] scale-[5]">{seva.icon}</div>
                                            </div>

                                            <Image
                                                src={seva.image}
                                                alt={seva.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                onError={(e) => {
                                                    // Optional: Hide broken image icon if placeholder doesn't exist yet
                                                    (e.target as HTMLImageElement).style.display = 'none';
                                                }}
                                            />

                                            <div className="absolute bottom-4 left-6 z-20 right-6">
                                                <div
                                                    className="w-10 h-10 rounded-full flex items-center justify-center shadow-md mb-2 text-white transform group-hover:scale-110 transition-transform duration-500"
                                                    style={{ backgroundColor: seva.color }}
                                                >
                                                    {seva.icon}
                                                </div>
                                                <h3 className="text-white font-bold text-xl font-serif drop-shadow-lg">{seva.title}</h3>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <span className="bg-[#FFB81C]/20 text-[#FFB81C] px-3 py-1 rounded-full text-sm font-bold border border-[#FFB81C]/30 backdrop-blur-sm shadow-sm inline-block">
                                                        {seva.amount === "Any Amount" ? "₹ Any Amount" : `₹ ${seva.amount}`}
                                                    </span>
                                                </div>
                                                <p className="text-gray-200 font-medium text-sm mt-1.5 drop-shadow-md">{seva.shortDesc}</p>
                                            </div>
                                        </div>

                                        <CardContent className="pt-5 px-5 pb-6 flex-1 flex flex-col relative bg-white">
                                            <div className="absolute top-0 right-10 w-20 h-1 bg-gradient-to-r from-transparent to-[#FFB81C] opacity-50"></div>

                                            <p className="text-[#666666] leading-relaxed mb-6 text-sm">
                                                {seva.fullDesc}
                                            </p>

                                            <div className="mt-auto">
                                                <a
                                                    href={seva.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="relative overflow-hidden w-full py-3 px-4 rounded-xl font-bold transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 group/btn border text-sm group-hover:border-transparent"
                                                    style={{
                                                        borderColor: `${seva.color}40`,
                                                        color: typeof seva.color === 'string' && seva.color.includes('d97706') ? '#b45309' : seva.color
                                                    }}
                                                >
                                                    <div
                                                        className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                                                        style={{
                                                            background: `linear-gradient(to right, ${seva.color}, ${typeof seva.color === 'string' && (seva.color === '#ea580c' || seva.color === '#d97706') ? '#b45309' : '#4a0f0f'})`
                                                        }}
                                                    ></div>
                                                    <span className="relative z-10 group-hover/btn:text-white flex items-center gap-2 transition-colors duration-300">
                                                        Contribute for {seva.title.split(' ')[0]} <ArrowRight size={20} className="transform group-hover/btn:translate-x-1 transition-transform" />
                                                    </span>
                                                </a>
                                            </div>
                                        </CardContent>
                                    </>
                                )}
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            <FooterSection />
        </div>
    )
}
