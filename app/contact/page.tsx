"use client"

import { motion } from "framer-motion"
import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-[#3A3A3A]">
      <NavbarDemo />

      {/* Hero Section */}
      <section
        className="relative py-32 px-4 md:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?key=contact')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto text-center text-white "
        >
          <h1 className="heading-1 mb-6 text-balance text-white">Contact Us</h1>
          <p className="body-large text-gray-100">We'd Love to Hear From You</p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Contact Information */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-[#FFB81C] border-2 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-[#FFF9F0]">
                <CardTitle className="text-[#1B7CB8]">Address</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-[#666666]">
                <p>63, 1st Seaward Rd</p>
                <p>Valmiki Nagar, Thiruvanmiyur</p>
                <p>Chennai, TN 600041</p>
                <p>India</p>
              </CardContent>
            </Card>
            </motion.div>

            <Card className="border-[#E8725C] border-2">
              <CardHeader className="bg-[#FFF9F0]">
                <CardTitle className="text-[#1B7CB8]">Phone</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-[#666666]">
                <p className="mb-2">
                  <span className="font-semibold text-[#3A3A3A]">Main:</span> +91 78458 71028
                </p>
                <p>
                  <span className="font-semibold text-[#3A3A3A]">Alternate:</span> 044-4005 4001
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#1B7CB8] border-2">
              <CardHeader className="bg-[#FFF9F0]">
                <CardTitle className="text-[#1B7CB8]">Email</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-[#666666]">
                <p className="mb-2">
                  <span className="font-semibold text-[#3A3A3A]">General:</span> connect@hkmchennai.org
                </p>
                <p>
                  <span className="font-semibold text-[#3A3A3A]">Careers:</span> events.hr@hkmchennai.org
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#FFB81C] border-2">
              <CardHeader className="bg-[#FFF9F0]">
                <CardTitle className="text-[#1B7CB8]">Follow Us</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Facebook", url: "#" },
                    { name: "Instagram", url: "#" },
                    { name: "YouTube", url: "#" },
                    { name: "Twitter", url: "#" },
                    { name: "LinkedIn", url: "#" },
                    { name: "WhatsApp", url: "#" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="px-4 py-2 bg-[#1B7CB8] text-white rounded hover:bg-[#E8725C] transition-colors text-sm"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 border-l-4 border-[#FFB81C]">
            <h3 className="heading-3 mb-6 text-[#1B7CB8]">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-[#3A3A3A] font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#1B7CB8]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[#3A3A3A] font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#1B7CB8]"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-[#3A3A3A] font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#1B7CB8]"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-[#3A3A3A] font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#1B7CB8]"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-[#3A3A3A] font-semibold mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#1B7CB8]"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#1B7CB8] text-white rounded-lg hover:bg-[#E8725C] transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <h3 className="heading-3 mb-6 text-[#1B7CB8]">Find Us on the Map</h3>
          <div className="w-full h-96 bg-gray-300 rounded-lg overflow-hidden border-2 border-[#FFB81C]">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5897394891!2d80.25!3d12.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f5f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sHare%20Krishna%20Movement%20Chennai!5e0!3m2!1sen!2sin!4v1234567890"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Office Hours */}
        <Card className="border-[#1B7CB8] border-2">
          <CardHeader className="bg-[#FFF9F0]">
            <CardTitle className="text-[#1B7CB8]">Office Hours</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6 text-[#666666]">
              <div>
                <p className="font-semibold text-[#3A3A3A] mb-2">Monday - Friday</p>
                <p>9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-[#3A3A3A] mb-2">Saturday - Sunday</p>
                <p>10:00 AM - 8:00 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <FooterSection />
    </div>
  )
}
