"use client"

import React, { useState } from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, User, CheckCircle, Download, BookOpen, Send, Calendar, X, ExternalLink } from "lucide-react"

// Magazine Data Structure with Cover Images
const magazinesByYear: { [key: number]: any[] } = {
    2024: [
        {
            id: "24-1",
            month: "July 2024",
            title: "Vaikuntha Varthai",
            link: "https://hkmchennai.org/wp-content/uploads/2024/07/VV-Magazine_compress_July-2024.pdf",
            coverImage: "/assets/magazine-covers/july-2024.png?v=2"
        },
        {
            id: "24-2",
            month: "April 2024",
            title: "Vaikuntha Varthai",
            link: "https://hkmchennai.org/wp-content/uploads/2024/04/VV-MAGAZINE-FINALISED-APR-2024-2.pdf",
            coverImage: "/assets/magazine-covers/april-2024.png?v=2"
        },
        {
            id: "24-3",
            month: "January 2024",
            title: "Vaikuntha Varthai",
            link: "https://hkmchennai.org/wp-content/uploads/2024/04/Vaikuntha-Varthai_full-magazinecompress-February-2024.pdf",
            coverImage: "/assets/magazine-covers/january-2024.png?v=2"
        }
    ],
    2023: [
        {
            id: "23-1",
            month: "October 2023",
            title: "Vaikuntha Varthai",
            link: "https://hkmchennai.org/wp-content/uploads/2023/10/Vaikuntha-Varthai_Magazine-October-2023-1.pdf",
            coverImage: "/assets/magazine-covers/october-2023.png?v=2"
        },
        {
            id: "23-2",
            month: "June 2023",
            title: "Vaikuntha Varthai",
            link: "https://hkmchennai.org/wp-content/uploads/2023/10/Vaikuntha-Varthai_Online-Magazine_Finished-01-08-2023.pdf",
            coverImage: "/assets/magazine-covers/june-2023.png?v=2"
        }
    ],
    2021: [
        { 
            id: "21-1", 
            month: "Annual 2021", 
            title: "Vaikuntha Varthai", 
            link: "#",
            coverImage: "/assets/magazine-covers/annual-2021.png?v=2"
        }
    ],
    2020: [
        { 
            id: "20-1", 
            month: "Annual 2020", 
            title: "Vaikuntha Varthai", 
            link: "#",
            coverImage: "/assets/magazine-covers/annual-2020.png?v=2"
        }
    ],
    2019: [
        { 
            id: "19-1", 
            month: "Annual 2019", 
            title: "Vaikuntha Varthai", 
            link: "#",
            coverImage: "/assets/magazine-covers/annual-2019.png?v=2"
        }
    ],
    2018: [
        { 
            id: "18-1", 
            month: "Annual 2018", 
            title: "Vaikuntha Varthai", 
            link: "#",
            coverImage: "/assets/magazine-covers/annual-2018.png?v=2"
        }
    ],
    2017: [
        { 
            id: "17-1", 
            month: "Annual 2017", 
            title: "Vaikuntha Varthai", 
            link: "#",
            coverImage: "/assets/magazine-covers/annual-2017.png?v=2"
        }
    ]
}

export default function MagazinePage() {
    const [selectedYear, setSelectedYear] = useState(2024)
    const [viewingMagazine, setViewingMagazine] = useState<any | null>(null)
    
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subscriptionStatus: "New Subscription"
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        const subject = `Magazine Subscription Request: ${formData.firstName} ${formData.lastName}`
        const body = `Hare Krishna,\n\nI would like to subscribe to the magazine.\n\nDetails:\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubscription Status: ${formData.subscriptionStatus}\n\nThank you.`
        
        const mailtoLink = `mailto:connect@hkmchennai.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.location.href = mailtoLink
        
        setIsSubmitting(false)
        setIsSuccess(true)
    }

    return (
        <main className="min-h-screen bg-[#FFF9F0] font-sans selection:bg-[#FFB81C] selection:text-black relative">
            <Navbar />

            {/* Hero Section - Premium Spiritual Style */}
            <section className="relative h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden bg-[#2D0A0A]">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#501313] via-[#ea580c] to-[#9a3412] opacity-90 animate-gradient-slow"></div>
                
                {/* Mandala Overlay */}
                <div className="absolute inset-0 opacity-10 animate-spin-slow" style={{ backgroundImage: 'url("/assets/mandala-pattern.png")', backgroundSize: '800px', backgroundPosition: 'center' }}></div>
                
                {/* Spiritual Texture */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FFB81C 0px, transparent 1px, transparent 10px)' }}></div>
                
                {/* Divine Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                    <div className="w-[500px] h-[500px] bg-[#FFB81C] rounded-full blur-[120px] opacity-20 animate-pulse-slow"></div>
                </div>

                {/* Decorative Corners */}
                <div className="absolute top-8 left-8 w-32 h-32 border-t-2 border-l-2 border-[#FFB81C]/40 rounded-tl-3xl">
                   <div className="absolute top-2 left-2 w-2 h-2 bg-[#FFB81C] rounded-full"></div>
                </div>
                <div className="absolute bottom-8 right-8 w-32 h-32 border-b-2 border-r-2 border-[#FFB81C]/40 rounded-br-3xl">
                   <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#FFB81C] rounded-full"></div>
                </div>

                <div className="container mx-auto text-center relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Decorative Icon */}
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-[#FFB81C]/10 rounded-full flex items-center justify-center border-2 border-[#FFB81C] shadow-[0_0_20px_rgba(255,184,28,0.3)]">
                                <BookOpen size={32} className="text-[#FFB81C]" />
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] font-serif" style={{ textShadow: "0 4px 30px rgba(234, 88, 12, 0.6)" }}>
                            Vaikuntha Varthai
                        </h1>

                        {/* Divider */}
                        <div className="flex items-center justify-center gap-6 mb-8">
                             <div className="h-[1px] w-20 bg-gradient-to-l from-[#FFB81C] to-transparent opacity-80"></div>
                             <div className="w-2 h-2 rotate-45 bg-[#FFB81C] shadow-[0_0_10px_#FFB81C]"></div>
                             <div className="h-[1px] w-20 bg-gradient-to-r from-[#FFB81C] to-transparent opacity-80"></div>
                        </div>

                        <p className="text-xl md:text-2xl text-[#ffe8cc] max-w-4xl mx-auto leading-relaxed italic font-light tracking-wide">
                            Immerse yourself in the transcendental knowledge of Krishna Consciousness.
                        </p>
                        <p className="text-sm text-[#FFB81C] mt-4 font-bold tracking-widest uppercase">
                            A Divine Monthly from HKM Chennai
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16 relative">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#701a1a]/5 rounded-full blur-3xl -z-10"></div>
                
                {/* Left Column: Magazine Showcase */}
                <div className="w-full lg:w-1/2">
                    <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div>
                            <h2 className="text-3xl font-bold text-[#2D0A0A] mb-2 flex items-center gap-3 font-serif">
                                <BookOpen className="text-[#ea580c]" /> Divine Editions ({selectedYear})
                            </h2>
                            <div className="h-1 w-20 bg-gradient-to-r from-[#ea580c] to-[#FFB81C] rounded-full"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                        <AnimatePresence mode="wait">
                            {magazinesByYear[selectedYear]?.map((item) => (
                                <motion.div 
                                    key={item.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#FFB81C]/20 group relative"
                                >
                                    <div className="aspect-[3/4] bg-gradient-to-br from-[#2D0A0A] to-[#4a0e0e] relative overflow-hidden">
                                        {/* Magazine Cover or Placeholder */}
                                        {item.coverImage ? (
                                            <img src={item.coverImage} alt={`${item.title} - ${item.month}`} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                                                <div>
                                                    <span className="block font-serif italic text-2xl font-bold text-[#FFB81C] drop-shadow-md">{item.title}</span>
                                                    <span className="block text-sm mt-2 text-[#ffe8cc]">{item.month}</span>
                                                    <div className="mt-4 w-16 h-16 mx-auto opacity-30">
                                                        <BookOpen size={64} className="text-[#FFB81C]" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end gap-3 p-4 pb-6">
                                            <button 
                                                onClick={() => setViewingMagazine(item)}
                                                className="px-6 py-2 bg-[#FFB81C] text-[#2D0A0A] font-bold rounded-full text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform hover:bg-white shadow-lg"
                                            >
                                                <BookOpen size={16} /> Read PDF
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-gradient-to-b from-white to-[#FFF9F0]">
                                        <h3 className="font-bold text-[#2D0A0A] mb-1 font-serif">{item.title}</h3>
                                        <p className="text-sm text-[#ea580c] font-medium">{item.month}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="bg-gradient-to-br from-white to-[#FFF9F0] rounded-2xl p-6 shadow-xl border-2 border-[#FFB81C]/20">
                        <h3 className="text-xl font-bold text-[#2D0A0A] mb-4 flex items-center gap-2 font-serif">
                            <Calendar className="text-[#ea580c]" size={20} /> Sacred Archives
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                            {[2024, 2023, 2021, 2020, 2019, 2018, 2017].map((year) => (
                                <button
                                    key={year}
                                    onClick={() => setSelectedYear(year)}
                                    className={`px-4 py-3 rounded-xl text-sm font-bold transition-all border-2 shadow-sm ${
                                        selectedYear === year 
                                        ? "bg-gradient-to-br from-[#2D0A0A] to-[#4a0e0e] text-[#FFB81C] border-[#FFB81C] shadow-lg transform scale-105" 
                                        : "bg-white text-[#2D0A0A] border-[#FFB81C]/20 hover:bg-[#FFB81C] hover:text-[#2D0A0A] hover:border-[#FFB81C]"
                                    }`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Subscription Form */}
                <div className="w-full lg:w-1/2">
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-t-8 border-[#ea580c] relative sticky top-32"
                    >
                        {/* Decorative Glow */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FFB81C] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
                        
                        <div className="mb-8 relative z-10">
                            <h2 className="text-3xl font-bold text-[#2D0A0A] mb-2 font-serif">Subscribe for Divine Wisdom</h2>
                            <p className="text-[#ea580c] font-bold text-lg">Hare Krishna!</p>
                            <p className="text-gray-600 mt-2">Help us deliver transcendental knowledge to your doorstep.</p>
                        </div>
                        
                        {isSuccess ? (
                            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-2xl p-8 text-center animate-fade-in">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-green-800 mb-2 font-serif">Hare Krishna!</h3>
                                <p className="text-green-700">Your subscription request has been received. We will contact you shortly.</p>
                                <button 
                                    onClick={() => setIsSuccess(false)}
                                    className="mt-6 text-[#ea580c] font-bold hover:underline"
                                >
                                    Submit another response
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                                            First Name <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="firstName"
                                                required
                                                placeholder="E.g. Gopala"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFB81C] focus:border-[#FFB81C] outline-none transition-all pl-10"
                                            />
                                            <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                                            Last Name
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder="E.g. Krishna"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFB81C] focus:border-[#FFB81C] outline-none transition-all pl-10"
                                            />
                                            <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="E.g. connect@hkmchennai.org"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFB81C] focus:border-[#FFB81C] outline-none transition-all pl-10"
                                        />
                                        <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                                        Phone <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            placeholder="E.g. +91"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFB81C] focus:border-[#FFB81C] outline-none transition-all pl-10"
                                        />
                                        <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                                        Subscription Status <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="subscriptionStatus"
                                            required
                                            value={formData.subscriptionStatus}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFB81C] focus:border-[#FFB81C] outline-none transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="New Subscription">New Subscription</option>
                                            <option value="Renewal">Renewal</option>
                                            <option value="Physical Copy">Physical Copy Request</option>
                                            <option value="E-Magazine">E-Magazine Only</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-[#ea580c] to-[#9a3412] hover:from-[#9a3412] hover:to-[#ea580c] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>Processing...</>
                                    ) : (
                                        <>
                                            <Send size={20} /> Subscribe Now
                                        </>
                                    )}
                                </button>
                            </form>
                        )}

                    </motion.div>
                </div>
            </div>

            {/* PDF Viewer Modal */}
            <AnimatePresence>
                {viewingMagazine && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm"
                        onClick={() => setViewingMagazine(null)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white w-full h-full max-w-6xl rounded-2xl relative overflow-hidden flex flex-col shadow-2xl border-4 border-[#FFB81C]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#2D0A0A] to-[#4a0e0e] text-white">
                                <div>
                                    <h3 className="font-bold text-lg font-serif text-[#FFB81C]">{viewingMagazine.title}</h3>
                                    <p className="text-sm text-[#ffe8cc]">{viewingMagazine.month}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <a 
                                        href={viewingMagazine.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="p-2 hover:bg-[#FFB81C]/20 rounded-full transition-colors flex items-center gap-2 text-sm font-medium"
                                        title="Open in New Tab"
                                    >
                                        <ExternalLink size={18} /> <span className="hidden sm:inline">Open New Tab</span>
                                    </a>
                                    <button 
                                        onClick={() => setViewingMagazine(null)}
                                        className="p-2 hover:bg-[#FFB81C]/20 rounded-full transition-colors"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>
                            </div>
                            
                            {/* PDF View Area */}
                            <div className="flex-1 bg-gray-100 relative">
                                <iframe 
                                    src={viewingMagazine.link} 
                                    className="w-full h-full"
                                    title="PDF Viewer"
                                ></iframe>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <FooterSection />
        </main>
    )
}
