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
  Sparkles, 
  Send,
  Calendar,
  Layers,
  ChevronRight
} from "lucide-react"

const activities = [
  { name: "Spiritual Discourses", link: "/activities/spiritual-discourses" },
  { name: "FOLK", link: "/activities/folk" },
  { name: "Cow Protection", link: "/activities/cow-protection" },
  { name: "Annadhanam", link: "/activities/annadhanam" },
]

const festivals = [
  { name: "RATHA YATRA", link: "/festivals/ratha-yatra" },
  { name: "SRI NITYANANDA TRAYODASHI", link: "/festivals/nityananda-trayodashi" },
  { name: "SRI GAURA PURNIMA", link: "/festivals/gaura-purnima" },
  { name: "SRI KRISHNA JANMASHTAMI", link: "/festivals/janmashtami" },
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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#2D0A0A] pt-32 pb-20 md:pt-40">
        {/* Background - Saffron/Gold Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#701a1a] via-[#ea580c] to-[#b45309] opacity-90"></div>
        
        {/* Sacred Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 49px, #FFB81C 50px)' }}></div>

        {/* Central Divine Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFB81C] rounded-full blur-[120px] opacity-20 animate-pulse"></div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] font-serif text-balance">
                DAKṢIṆA <span className="text-[#FFB81C] italic">DVĀRAKĀ</span> DHĀMA
              </h1>
              
              {/* Ornamental Divider */}
              <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-[2px] w-16 bg-gradient-to-l from-[#FFB81C] to-transparent"></div>
                  <div className="rotate-45 p-1 border border-[#FFB81C] bg-[#ea580c] transform"></div>
                  <div className="h-[2px] w-16 bg-gradient-to-r from-[#FFB81C] to-transparent"></div>
              </div>

              <p className="text-lg md:text-2xl lg:text-3xl text-[#ffe8cc] font-light leading-relaxed max-w-4xl mx-auto italic drop-shadow-md text-balance">
                "Cultural Complex to promote and preserve Indian heritage"
              </p>
              
              <div className="bg-red-900/40 backdrop-blur-md rounded-xl p-4 md:p-6 mt-8 border border-[#FFB81C]/30 max-w-sm md:max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-500">
                <p className="text-white text-center text-base md:text-lg lg:text-xl font-semibold leading-relaxed font-serif tracking-wide shadow-black drop-shadow-lg">
                  HARE KRISHNA HARE KRISHNA KRISHNA KRISHNA HARE HARE !<br className="hidden md:block" />
                  HARE RAMA HARE RAMA RAMA RAMA HARE HARE !!
                </p>
              </div>
          </motion.div>
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
                    <span className="font-bold text-[#701a1a] block mb-1">Hare Krishna Movement Chennai</span>
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
                    { icon: Facebook, color: "hover:bg-[#1877F2]" },
                    { icon: Instagram, color: "hover:bg-[#E4405F]" },
                    { icon: Mail, color: "hover:bg-[#ea580c]" }, // Using standard mail color
                    { icon: MessageCircle, color: "hover:bg-[#25D366]" },
                    { icon: Linkedin, color: "hover:bg-[#0A66C2]" },
                    { icon: Youtube, color: "hover:bg-[#FF0000]" }
                ].map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className={`p-3 bg-[#FFF9F0] rounded-xl text-[#5a5a5a] ${item.color} hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md transform hover:scale-110`}
                    >
                      <item.icon size={24} />
                    </a>
                ))}
              </div>
            </motion.div>

            {/* Map Card */}
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-[#FFB81C]/20 h-64 relative group"
            >
              <div className="absolute inset-0 border-4 border-white/50 z-10 pointer-events-none rounded-2xl"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0847147447256!2d80.24733867520748!3d12.981556512508888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f77b4f4f4f4f%3A0x4f4f4f4f4f4f4f4f!2sHare%20Krishna%20Movement%20Chennai!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
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
          </div>
        </div>
      </section>

      {/* Navigation Links Sidebar (Styled as Cards Bottom) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Activities Card */}
          <div className="bg-white rounded-2xl p-8 border-l-8 border-[#FFB81C] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(255,184,28,0.2)] transition-all duration-300 bg-[url('/assets/mandala-pattern.png')] bg-no-repeat bg-right-bottom bg-[length:300px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#FFB81C]/10 opacity-90 group-hover:opacity-80 transition-opacity z-0"></div>
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 border-b border-[#FFB81C]/30 pb-4">
                    <div className="w-10 h-10 rounded-full bg-[#FFB81C]/10 flex items-center justify-center text-[#ea580c] group-hover:scale-110 transition-transform">
                        <Layers size={20} />
                    </div>
                    <h4 className="text-2xl font-bold text-[#701a1a] font-serif tracking-wide">ACTIVITIES</h4>
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
                      <span className="text-base font-semibold text-[#5a5a5a] group-hover/item:text-[#ea580c] transition-colors font-medium">
                          {activity.name}
                      </span>
                    </Link>
                  ))}
                </div>
            </div>
          </div>

          {/* Festivals Card */}
          <div className="bg-white rounded-2xl p-8 border-l-8 border-[#ea580c] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(234,88,12,0.2)] transition-all duration-300 bg-[url('/assets/mandala-pattern.png')] bg-no-repeat bg-right-bottom bg-[length:300px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#ea580c]/10 opacity-90 group-hover:opacity-80 transition-opacity z-0"></div>
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 border-b border-[#ea580c]/30 pb-4">
                    <div className="w-10 h-10 rounded-full bg-[#ea580c]/10 flex items-center justify-center text-[#ea580c] group-hover:scale-110 transition-transform">
                        <Calendar size={20} />
                    </div>
                    <h4 className="text-2xl font-bold text-[#701a1a] font-serif tracking-wide">FESTIVALS</h4>
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
                      <span className="text-base font-semibold text-[#5a5a5a] group-hover/item:text-[#ea580c] transition-colors font-medium">
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
