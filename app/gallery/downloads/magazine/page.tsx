"use client"

import React, { useState } from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, User, CheckCircle, Download, BookOpen, Send, Calendar, X, ExternalLink } from "lucide-react"

// Magazine Data Structure
const magazinesByYear: { [key: number]: any[] } = {
    2024: [
        {
            id: "24-1",
            month: "July 2024",
            title: "Vaikuntha Varthai",
            link: "https://hkmchennai.org/wp-content/uploads/2024/07/VV-Magazine_compress_July-2024.pdf"
        },
        {
            id: "24-2",
            month: "April 2024",
            title: "Vaikuntha Varthai",
            link: "https://hkmchennai.org/wp-content/uploads/2024/04/VV-MAGAZINE-FINALISED-APR-2024-2.pdf"
        },
        {
            id: "24-3",
            month: "January 2024",
            title: "Vaikuntha Varthai",
            link: "https://hkmchennai.org/wp-content/uploads/2024/04/Vaikuntha-Varthai_full-magazinecompress-February-2024.pdf"
        }
    ],
    2023: [
        {
            id: "23-1",
            month: "October 2023",
            title: "Vaikuntha Varthai",
            link: "https://hkmchennai.org/wp-content/uploads/2023/10/Vaikuntha-Varthai_Magazine-October-2023-1.pdf"
        },
        {
            id: "23-2",
            month: "June 2023",
            title: "Vaikuntha Varthai",
            link: "https://hkmchennai.org/wp-content/uploads/2023/10/Vaikuntha-Varthai_Online-Magazine_Finished-01-08-2023.pdf"
        }
    ],
    // Placeholders for older years to demonstrate functionality
    2021: [
        { id: "21-1", month: "Annual 2021", title: "Vaikuntha Varthai", link: "#" }
    ],
    2020: [
        { id: "20-1", month: "Annual 2020", title: "Vaikuntha Varthai", link: "#" }
    ],
    2019: [
        { id: "19-1", month: "Annual 2019", title: "Vaikuntha Varthai", link: "#" }
    ],
    2018: [
        { id: "18-1", month: "Annual 2018", title: "Vaikuntha Varthai", link: "#" }
    ],
    2017: [
        { id: "17-1", month: "Annual 2017", title: "Vaikuntha Varthai", link: "#" }
    ]
}

export default function MagazinePage() {
    const [selectedYear, setSelectedYear] = useState(2024)
    const [viewingMagazine, setViewingMagazine] = useState<any | null>(null)
    
    // Form State
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
        
        // Construct mailto link
        const subject = `Magazine Subscription Request: ${formData.firstName} ${formData.lastName}`
        const body = `Hare Krishna,\n\nI would like to subscribe to the magazine.\n\nDetails:\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubscription Status: ${formData.subscriptionStatus}\n\nThank you.`
        
        const mailtoLink = `mailto:connect@hkmchennai.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        
        // Open default mail client
        window.location.href = mailtoLink
        
        setIsSubmitting(false)
        setIsSuccess(true)
    }

    return (
        <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#FBB201] selection:text-white relative">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 bg-[#001E36] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/assets/10BlackWhiteMandalaPattern1.jpg')] bg-cover animate-pulse-slow"></div>
                <div className="container mx-auto text-center relative z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold text-[#FBB201] mb-6 font-serif"
                    >
                        Vaikuntha Varthai
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
                    >
                        Immerse yourself in the transcendental knowledge of Krishna Consciousness.
                    </motion.p>
                </div>
            </section>

            <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
                
                {/* Left Column: Magazine Showcase */}
                <div className="w-full lg:w-1/2">
                    <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div>
                            <h2 className="text-3xl font-bold text-[#0078BF] mb-2 flex items-center gap-3">
                                <BookOpen className="text-[#FBB201]" /> Editions ({selectedYear})
                            </h2>
                            <div className="h-1 w-20 bg-[#FBB201] rounded-full"></div>
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
                                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group"
                                >
                                    <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
                                        {/* Placeholder Cover */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0078BF]/10 to-[#FBB201]/10 text-gray-500 text-center p-4">
                                            <div>
                                                <span className="block font-serif italic text-xl font-bold text-[#0078BF]">{item.title}</span>
                                                <span className="block text-sm mt-2">{item.month}</span>
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4">
                                            <button 
                                                onClick={() => setViewingMagazine(item)}
                                                className="px-4 py-2 bg-[#FBB201] text-black font-bold rounded-full text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform hover:bg-white hover:text-[#0078BF]"
                                            >
                                                <BookOpen size={16} /> Read PDF
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-500">{item.month}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Calendar className="text-[#FBB201]" size={20} /> Browse Archives
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                            {[2024, 2023, 2021, 2020, 2019, 2018, 2017].map((year) => (
                                <button
                                    key={year}
                                    onClick={() => setSelectedYear(year)}
                                    className={`px-4 py-3 rounded-lg text-sm font-bold transition-all border ${
                                        selectedYear === year 
                                        ? "bg-[#0078BF] text-white border-[#0078BF] shadow-md" 
                                        : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-[#FBB201] hover:text-white hover:border-[#FBB201]"
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
                        className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-t-8 border-[#FBB201] relative sticky top-32"
                    >
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Subscribe for our magazine</h2>
                            <p className="text-[#0078BF] font-medium">Hare Krishna!</p>
                            <p className="text-gray-600 mt-2">Help us to get in touch with you by filling up a small form.</p>
                        </div>
                        
                        {/* ... Existing form code ... */}
                        {isSuccess ? (
                            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-fade-in">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                                <p className="text-green-700">Your subscription request has been received. We will contact you shortly.</p>
                                <button 
                                    onClick={() => setIsSuccess(false)}
                                    className="mt-6 text-[#0078BF] font-bold hover:underline"
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
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FBB201] focus:border-transparent outline-none transition-all pl-10"
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
                                                placeholder="E.g. Krishnan"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FBB201] focus:border-transparent outline-none transition-all pl-10"
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
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FBB201] focus:border-transparent outline-none transition-all pl-10"
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
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FBB201] focus:border-transparent outline-none transition-all pl-10"
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
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FBB201] focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
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
                                    className="w-full bg-[#0078BF] hover:bg-[#005a9e] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>Processing...</>
                                    ) : (
                                        <>
                                            <Send size={20} /> Subscribe
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                        {/* ... End of form ... */}

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
                            className="bg-white w-full h-full max-w-6xl rounded-2xl relative overflow-hidden flex flex-col shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-4 bg-[#0078BF] text-white">
                                <div>
                                    <h3 className="font-bold text-lg">{viewingMagazine.title}</h3>
                                    <p className="text-sm text-blue-100">{viewingMagazine.month}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <a 
                                        href={viewingMagazine.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors flex items-center gap-2 text-sm font-medium"
                                        title="Open in New Tab"
                                    >
                                        <ExternalLink size={18} /> <span className="hidden sm:inline">Open New Tab</span>
                                    </a>
                                    <button 
                                        onClick={() => setViewingMagazine(null)}
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
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
