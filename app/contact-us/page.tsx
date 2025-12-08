"use client"

import type React from "react"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import Link from "next/link"
import { useState } from "react"
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Linkedin, Youtube } from "lucide-react"

const activities = [
  { name: "ACTIVITIES", link: "/activities/" },
  { name: "FESTIVALS", link: "/festivals/" },
]

const festivals = [
  { name: "RATHA YATRA", link: "/festivals/ratha-yatra" },
  { name: "SRI NITYANANDA TRAYODASHI", link: "/festivals/nityananda-trayodashi" },
  { name: "SRI GAURA PURNIMA", link: "/festivals/gaura-purnima" },
]

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ firstName: "", email: "", phone: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A]">
      <NavbarDemo />

      {/* Hero Section */}
      <section
        className="relative py-32 px-4 md:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/ancient-temple-spiritual-architecture.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance !text-white">DAKṢIṆA DVĀRAKĀ DHĀMA</h1>
              <p className="text-2xl md:text-3xl font-light mb-6 !text-white">
                Cultural Complex to promote and preserve Indian heritage
              </p>
            </div>
            <div className="bg-red-700/80 rounded-lg p-8">
              <p className="text-white text-center text-xl md:text-2xl font-semibold leading-relaxed">
                HARE KRISHNA HARE KRISHNA
                <br />
                KRISHNA KRISHNA HARE HARE !
                <br />
                HARE RAMA HARE RAMA
                <br />
                RAMA RAMA HARE HARE !!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Page Title */}
        <h2 className="text-6xl font-bold text-center mb-16 text-[#3A3A3A]">CONTACT US</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1">
            {/* Address */}
            <div className="bg-white rounded-lg p-6 border border-[#E5E5E5] mb-8">
              <h3 className="text-xl font-bold text-[#1B7CB8] mb-4 flex items-center gap-2">
                <MapPin size={20} />
                Address
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed mb-4">
                Hare Krishna Movement Chennai
                <br />
                #63, 1st Seaward Road,
                <br />
                Valmiki Nagar, Thiruvanmiyur,
                <br />
                Chennai 600041.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-[#666666]">
                  <span className="font-semibold text-[#1B7CB8]">Ph:</span> 044-4005 4001
                </p>
                <p className="text-[#666666]">
                  <span className="font-semibold text-[#1B7CB8]">Mob:</span> +91 78458 71028
                </p>
                <p className="text-[#666666]">
                  <span className="font-semibold text-[#1B7CB8]">Email:</span> connect@hkmchennai.org
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="bg-white rounded-lg p-6 border border-[#E5E5E5]">
              <h3 className="text-xl font-bold text-[#1B7CB8] mb-4">Connect With Us</h3>
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="#"
                  className="p-3 bg-[#FFF9F0] rounded-lg hover:bg-[#1B7CB8] hover:text-white transition-colors flex items-center justify-center"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-[#FFF9F0] rounded-lg hover:bg-[#1B7CB8] hover:text-white transition-colors flex items-center justify-center"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-[#FFF9F0] rounded-lg hover:bg-[#1B7CB8] hover:text-white transition-colors flex items-center justify-center"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-[#FFF9F0] rounded-lg hover:bg-[#1B7CB8] hover:text-white transition-colors flex items-center justify-center"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-[#FFF9F0] rounded-lg hover:bg-[#1B7CB8] hover:text-white transition-colors flex items-center justify-center"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-[#FFF9F0] rounded-lg hover:bg-[#1B7CB8] hover:text-white transition-colors flex items-center justify-center"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg overflow-hidden border border-[#E5E5E5] mt-8 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0847147447256!2d80.24733867520748!3d12.981556512508888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f77b4f4f4f4f%3A0x4f4f4f4f4f4f4f4f!2sHare%20Krishna%20Movement%20Chennai!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-8 border border-[#E5E5E5]">
              <h3 className="text-2xl font-bold text-[#1B7CB8] mb-2">Enquiry / Comments Form</h3>
              <p className="text-[#666666] mb-8">
                Please fill out the following brief inquiring form and let us know how we can help you. A representative
                will be in touch with you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#3A3A3A] mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#1B7CB8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#3A3A3A] mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#1B7CB8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#3A3A3A] mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#1B7CB8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#3A3A3A] mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={180}
                    rows={4}
                    className="w-full px-4 py-2 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#1B7CB8] resize-none"
                  ></textarea>
                  <p className="text-xs text-[#999999] mt-1">{formData.message.length}/180</p>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#1B7CB8] text-white font-semibold rounded-lg hover:bg-[#E8725C] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar positioned below on mobile */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="hidden lg:grid grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 border-l-4 border-[#FFB81C]">
            <h4 className="text-xl font-bold mb-4 text-[#1B7CB8]">ACTIVITIES</h4>
            <div className="space-y-3">
              {activities.map((activity, idx) => (
                <Link
                  key={idx}
                  href={activity.link}
                  className="block text-sm font-medium text-[#1B7CB8] hover:text-[#E8725C] transition-colors py-2 px-3 rounded hover:bg-[#FFF9F0]"
                >
                  {activity.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-[#E8725C]">
            <h4 className="text-xl font-bold mb-4 text-[#1B7CB8]">FESTIVALS</h4>
            <div className="space-y-2">
              {festivals.map((festival, idx) => (
                <Link
                  key={idx}
                  href={festival.link}
                  className="block text-sm font-medium text-[#1B7CB8] hover:text-[#E8725C] transition-colors py-2 px-3 rounded hover:bg-[#FFF9F0]"
                >
                  {festival.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
