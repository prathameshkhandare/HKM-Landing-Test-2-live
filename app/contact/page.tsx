"use client"

import type React from "react"
import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Linkedin,
  Youtube,
  Twitter,
  Sparkles,
  Send,
  Calendar,
  Layers,
  ChevronRight
} from "lucide-react"

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="M19.05 4.94A9.9 9.9 0 0 0 12.03 2C6.56 2 2.1 6.46 2.1 11.93c0 1.75.46 3.47 1.33 4.98L2 22l5.24-1.37a9.88 9.88 0 0 0 4.78 1.22h.01c5.47 0 9.93-4.46 9.93-9.93 0-2.65-1.03-5.13-2.91-6.98ZM12.03 20.17h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.11.81.83-3.03-.2-.31a8.24 8.24 0 0 1-1.27-4.39c0-4.53 3.69-8.22 8.23-8.22 2.2 0 4.26.85 5.82 2.41a8.17 8.17 0 0 1 2.4 5.82c0 4.54-3.69 8.23-8.21 8.23Zm4.51-6.16c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.57.12-.17.25-.65.81-.8.98-.15.17-.29.19-.54.06-.25-.13-1.04-.38-1.98-1.2-.73-.65-1.22-1.44-1.36-1.69-.15-.25-.02-.38.11-.5.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.38-.78-1.88-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.13.17 1.77 2.7 4.28 3.79.6.26 1.08.42 1.45.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29Z" />
  </svg>
)

const activities = [
  { name: "Spiritual Discourses", link: "/activities/spiritual-discourses" },
  { name: "FOLK", link: "/activities/folk" },
  { name: "Annadanam", link: "/donate/deity-seva" },
]

const festivals = [
  { name: "RATHA YATRA", link: "/donate/ratha-yatra" },
  { name: "SRI NITYANANDA TRAYODASHI", link: "/donate" },
  { name: "SRI GAURA PURNIMA", link: "/donate/gaura-purnima" },
  { name: "SRI KRISHNA JANMASHTAMI", link: "/donate" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log("Form submitted:", formData)
    setTimeout(() => {
      setFormData({ firstName: "", email: "", phone: "", message: "" })
      setIsSubmitting(false)
      alert("Thank you for your message! We will contact you soon.")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans selection:bg-[#FFB81C] selection:text-[#2D0A0A]">
      <NavbarDemo />

      {/* Hero Section - Vibrant Gradient & Mandala */}
      <section className="relative min-h-[50vh] max-h-[65vh] flex items-center justify-center overflow-hidden bg-[#2D0A0A] pt-32 pb-12 md:pt-32 md:pb-16">
        {/* Background - Saffron/Gold Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#701a1a] via-[#ea580c] to-[#b45309] opacity-90"></div>

        {/* Sacred Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 49px, #FFB81C 50px)' }}></div>

        {/* Central Divine Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFB81C] rounded-full blur-[120px] opacity-20 animate-pulse"></div>

        <div className="relative z-10 px-4 max-w-6xl mx-auto w-full pt-16 md:pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-center md:text-left flex-1"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white mb-4 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] font-serif leading-tight">
                <span className="block break-words">DAKṢHIṆA</span>
                <span className="block text-[#FFB81C] italic break-words">DWĀRAKĀ</span>
                <span className="block break-words">DHĀM</span>
              </h1>

              {/* Ornamental Divider */}
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="h-[2px] w-12 bg-[#ea580c] md:bg-transparent md:bg-gradient-to-r md:from-[#ea580c] md:to-transparent"></div>
                <div className="rotate-45 p-1.5 border border-[#FFB81C] bg-[#ea580c] transform"></div>
                <div className="h-[2px] w-32 bg-gradient-to-l from-transparent to-[#ea580c] md:bg-gradient-to-r md:from-transparent md:to-[#ea580c]"></div>
              </div>

              <p className="text-xl md:text-2xl lg:text-3xl text-[#ffe8cc] font-light leading-relaxed max-w-2xl italic drop-shadow-md text-balance">
                "Cultural Complex to promote and preserve Indian heritage"
              </p>
            </motion.div>

            {/* Right: Dakshina Dwaraka Dham Logo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 flex justify-center md:justify-end md:pr-4 lg:-mr-16 -mt-8 md:mt-0"
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
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 relative">

        {/* Background Floating Elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-[#ea580c]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-[#FFB81C]/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Page Title */}
        <div className="text-center mb-16 relative z-10">
          <span className="text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Get In Touch</span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#701a1a] font-serif">CONTACT <span className="text-[#ea580c]">US</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ea580c] to-[#FFB81C] mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {/* Address Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[#FFB81C]/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#ea580c]/5 rounded-bl-full transition-transform group-hover:scale-150 duration-500"></div>

              <h3 className="text-xl font-bold text-[#2D0A0A] mb-6 flex items-center gap-3 font-serif">
                <div className="w-10 h-10 rounded-full bg-[#ea580c]/10 flex items-center justify-center text-[#ea580c]">
                  <MapPin size={20} />
                </div>
                Address
              </h3>

              <div className="space-y-4 text-[#5a5a5a] relative z-10">
                <p className="leading-relaxed font-medium">
                  <span className="font-bold text-[#701a1a] block mb-1">Dakshina Dwaraka Dham</span>
                  #63, 1st Seaward Road,<br />
                  Valmiki Nagar, Thiruvanmiyur,<br />
                  Chennai 600041.
                </p>

                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <p className="flex items-center gap-3 group/link hover:text-[#ea580c] transition-colors">
                    <span className="w-8 h-8 rounded-full bg-[#FFF9F0] flex items-center justify-center text-[#2D0A0A] group-hover/link:bg-[#ea580c] group-hover/link:text-white transition-colors">
                      <span className="text-xs">Ph</span>
                    </span>
                    <span className="font-semibold">+91-9789057101</span>
                  </p>
                  <p className="flex items-center gap-3 group/link hover:text-[#ea580c] transition-colors">
                    <span className="w-8 h-8 rounded-full bg-[#FFF9F0] flex items-center justify-center text-[#2D0A0A] group-hover/link:bg-[#ea580c] group-hover/link:text-white transition-colors">
                      <Mail size={14} />
                    </span>
                    <span className="font-semibold">connect@hkmchennai.org</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Main Map Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[#FFB81C]/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ea580c]/5 rounded-bl-full transition-transform group-hover:scale-150 duration-500"></div>
              <div className="relative z-10 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ea580c] mb-2">Visit</p>
                  <h4 className="text-2xl font-bold text-[#2D0A0A] font-serif">Temple Location</h4>
                  <p className="text-[#666666] mt-2">Open the main temple location in Google Maps.</p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=63%201st%20Seaward%20Road%2C%20Valmiki%20Nagar%2C%20Thiruvanmiyur%2C%20Chennai%20600041"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Dakshina Dwaraka Dham in Google Maps"
                  className="shrink-0 w-14 h-14 rounded-full bg-[#FFF9F0] flex items-center justify-center text-[#ea580c] border border-[#FFB81C]/30 hover:bg-[#ea580c] hover:text-white transition-colors"
                >
                  <MapPin size={22} />
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[#FFB81C]/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#ea580c]/5 rounded-bl-full transition-transform group-hover:scale-150 duration-500"></div>

              <h3 className="text-xl font-bold text-[#2D0A0A] mb-6 flex items-center gap-3 font-serif">
                <div className="w-10 h-10 rounded-full bg-[#ea580c]/10 flex items-center justify-center text-[#ea580c]">
                  <MapPin size={20} />
                </div>
                Branch Centre
              </h3>

              <div className="space-y-4 text-[#5a5a5a] relative z-10">
                <p className="leading-relaxed font-medium">
                  <span className="font-bold text-[#701a1a] block mb-1">ISKCON Mogappair, Hare Krishna Movement Chennai - Mogappair Branch</span>
                  5/308, 5th Block, Tilkar Street,<br />
                  near Medway Hospital, Mogappair West,<br />
                  Ambattur Industrial Estate, Chennai 600037.
                </p>

                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <a href="tel:+919677171008" className="flex items-center gap-3 group/link hover:text-[#ea580c] transition-colors">
                    <span className="w-8 h-8 rounded-full bg-[#FFF9F0] flex items-center justify-center text-[#2D0A0A] group-hover/link:bg-[#ea580c] group-hover/link:text-white transition-colors">
                      <span className="text-xs">Ph</span>
                    </span>
                    <span className="font-semibold">+91-9677171008</span>
                  </a>
                  <a
                    href="https://maps.app.goo.gl/myG96WJ2ntoT3LSM6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group/link hover:text-[#ea580c] transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#FFF9F0] flex items-center justify-center text-[#2D0A0A] group-hover/link:bg-[#ea580c] group-hover/link:text-white transition-colors">
                      <MapPin size={14} />
                    </span>
                    <span className="font-semibold">Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Branch Map Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[#FFB81C]/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ea580c]/5 rounded-bl-full transition-transform group-hover:scale-150 duration-500"></div>
              <div className="relative z-10 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ea580c] mb-2">Visit</p>
                  <h4 className="text-2xl font-bold text-[#2D0A0A] font-serif">Branch Location</h4>
                  <p className="text-[#666666] mt-2">Open the Mogappair branch in Google Maps.</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/myG96WJ2ntoT3LSM6"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Mogappair branch in Google Maps"
                  className="shrink-0 w-14 h-14 rounded-full bg-[#FFF9F0] flex items-center justify-center text-[#ea580c] border border-[#FFB81C]/30 hover:bg-[#ea580c] hover:text-white transition-colors"
                >
                  <MapPin size={22} />
                </a>
              </div>
            </motion.div>

            {/* Social Icons Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[#FFB81C]/20 relative overflow-hidden"
            >
              <h3 className="text-xl font-bold text-[#2D0A0A] mb-6 flex items-center gap-3 font-serif">
                <div className="w-10 h-10 rounded-full bg-[#1B7CB8]/10 flex items-center justify-center text-[#1B7CB8]">
                  <MessageCircle size={20} />
                </div>
                Connect With Us
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Facebook, color: "hover:bg-[#1877F2]", href: "https://www.facebook.com/hkmcworld/" },
                  { icon: Instagram, color: "hover:bg-[#E4405F]", href: "https://www.instagram.com/hkm_chennai/?hl=en" },
                  { icon: Twitter, color: "hover:bg-[#1D9BF0]", href: "https://x.com/ChennaiHare" },
                  { icon: WhatsAppIcon, color: "hover:bg-[#25D366]", href: "https://api.whatsapp.com/send/?phone=919789057101&text&type=phone_number&app_absent=0" },
                  { icon: Linkedin, color: "hover:bg-[#0A66C2]", href: "https://www.linkedin.com/company/hare-krishna-movement-chennai?originalSubdomain=in" },
                  { icon: Youtube, color: "hover:bg-[#FF0000]", href: "https://youtube.com/@hkmchennai?si=R9Zp5_nuV--UfX0Y" }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`h-16 w-full bg-[#FFF9F0] rounded-xl text-[#5a5a5a] ${item.color} hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md transform hover:scale-105`}
                  >
                    <item.icon className="w-7 h-7" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-[#FFB81C]/20 relative overflow-hidden"
            >
              {/* Decorative Background for Form */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ea580c]/5 to-transparent rounded-bl-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[url('/assets/mandala-pattern.png')] opacity-5 bg-contain bg-no-repeat bg-bottom-left pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-[#2D0A0A] mb-3 font-serif flex items-center gap-3">
                  Enquiry / Comments
                  <Sparkles className="text-[#FFB81C]" size={24} />
                </h3>
                <p className="text-[#666666] mb-10 text-lg leading-relaxed max-w-2xl">
                  Please fill out the form below. Whether you have a question about our festivals, activities, or just want to say Hare Krishna, we'd love to hear from you!
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-[#2D0A0A] uppercase tracking-wider pl-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-[#FFF9F0] border-2 border-[#E5E5E5] rounded-xl focus:outline-none focus:border-[#ea580c] focus:bg-white transition-all font-medium text-[#3A3A3A] placeholder-gray-400"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-[#2D0A0A] uppercase tracking-wider pl-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-[#FFF9F0] border-2 border-[#E5E5E5] rounded-xl focus:outline-none focus:border-[#ea580c] focus:bg-white transition-all font-medium text-[#3A3A3A] placeholder-gray-400"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-[#2D0A0A] uppercase tracking-wider pl-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-[#FFF9F0] border-2 border-[#E5E5E5] rounded-xl focus:outline-none focus:border-[#ea580c] focus:bg-white transition-all font-medium text-[#3A3A3A] placeholder-gray-400"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-[#2D0A0A] uppercase tracking-wider pl-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      maxLength={180}
                      rows={4}
                      className="w-full px-6 py-4 bg-[#FFF9F0] border-2 border-[#E5E5E5] rounded-xl focus:outline-none focus:border-[#ea580c] focus:bg-white transition-all font-medium text-[#3A3A3A] placeholder-gray-400 resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                    <div className="flex justify-end">
                      <span className="text-xs font-bold text-[#999999] bg-[#FFF9F0] px-2 py-1 rounded-lg">{formData.message.length}/180</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#701a1a] to-[#991b1b] text-white font-bold rounded-xl hover:from-[#ea580c] hover:to-[#b45309] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="relative bg-[#FFF9F0] p-1.5 rounded-[2.5rem] shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                <div className="absolute inset-0 border-[6px] border-[#FFB81C]/20 rounded-[2.5rem] pointer-events-none"></div>
                <div className="absolute inset-3 border-[2px] border-[#FFB81C]/10 border-dashed rounded-[2rem] pointer-events-none"></div>
                <div className="bg-white rounded-[2rem] p-8 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] bg-repeat pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-[#FFF4D6] flex items-center justify-center text-[#ea580c] shadow-sm">
                        <Layers size={20} />
                      </div>
                      <div>
                        <span className="text-[#ea580c] font-bold tracking-[0.18em] text-xs uppercase block">Explore</span>
                        <h4 className="text-2xl md:text-3xl font-bold text-[#701a1a] font-serif">Activities</h4>
                      </div>
                    </div>
                    <p className="text-[#666666] text-sm md:text-base leading-relaxed mb-6">
                      Discover regular spiritual programs and community offerings at the temple.
                    </p>
                    <div className="space-y-3">
                      {activities.map((activity, idx) => (
                        <Link
                          key={idx}
                          href={activity.link}
                          className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F6F1] border border-[#FFB81C]/10 hover:border-[#FFB81C]/40 transition-all duration-300 hover:shadow-lg hover:bg-[#FFF9F0] group/item"
                        >
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#701a1a] to-[#ea580c] text-white flex items-center justify-center font-bold text-sm shadow-md group-hover/item:scale-110 transition-transform ring-4 ring-[#FFB81C]/10">
                            {idx + 1}
                          </div>
                          <span className="flex-1 text-sm md:text-base font-semibold text-[#5a5a5a] group-hover/item:text-[#ea580c] transition-colors">
                            {activity.name}
                          </span>
                          <div className="w-8 h-8 rounded-full border border-[#FFB81C]/40 flex items-center justify-center text-[#ea580c] group-hover/item:bg-[#ea580c] group-hover/item:text-white transition-colors">
                            <ChevronRight size={14} />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative bg-[#FFF9F0] p-1.5 rounded-[2.5rem] shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                <div className="absolute inset-0 border-[6px] border-[#ea580c]/15 rounded-[2.5rem] pointer-events-none"></div>
                <div className="absolute inset-3 border-[2px] border-[#ea580c]/10 border-dashed rounded-[2rem] pointer-events-none"></div>
                <div className="bg-white rounded-[2rem] p-8 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] bg-repeat pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-[#FFF1E8] flex items-center justify-center text-[#ea580c] shadow-sm">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <span className="text-[#ea580c] font-bold tracking-[0.18em] text-xs uppercase block">Celebrate</span>
                        <h4 className="text-2xl md:text-3xl font-bold text-[#701a1a] font-serif">Festivals</h4>
                      </div>
                    </div>
                    <p className="text-[#666666] text-sm md:text-base leading-relaxed mb-6">
                      Browse the major festival days and sacred celebrations observed through the year.
                    </p>
                    <div className="space-y-3">
                      {festivals.map((festival, idx) => (
                        <Link
                          key={idx}
                          href={festival.link}
                          className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F6F1] border border-[#ea580c]/10 hover:border-[#ea580c]/40 transition-all duration-300 hover:shadow-lg hover:bg-[#FFF9F0] group/item"
                        >
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#701a1a] to-[#ea580c] text-white flex items-center justify-center font-bold text-sm shadow-md group-hover/item:scale-110 transition-transform ring-4 ring-[#ea580c]/10">
                            {idx + 1}
                          </div>
                          <span className="flex-1 text-sm md:text-base font-semibold text-[#5a5a5a] group-hover/item:text-[#ea580c] transition-colors">
                            {festival.name}
                          </span>
                          <div className="w-8 h-8 rounded-full border border-[#ea580c]/40 flex items-center justify-center text-[#ea580c] group-hover/item:bg-[#ea580c] group-hover/item:text-white transition-colors">
                            <ChevronRight size={14} />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
