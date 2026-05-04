"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { FileText, ScrollText, Scale, ChevronRight, Mail, Phone, MapPin, Calendar, Info } from "lucide-react"
import { useState, useEffect } from "react"

const sections = [
  { id: "copyright", title: "1. Copyright" },
  { id: "disclaimer", title: "2. Website Content and Disclaimer" },
  { id: "personal-info", title: "3. Personal Information" },
  { id: "donations", title: "4. Donations" },
  { id: "refund-policy", title: "5. Refund and Cancellation Policy" },
  { id: "programme-terms", title: "6. Terms for Sevas and Programmes" },
  { id: "temple-conduct", title: "7. Temple Conduct and Visitor Guidelines" },
  { id: "intellectual-property", title: "8. Intellectual Property" },
  { id: "acceptable-use", title: "9. Acceptable Use and Online Conduct" },
  { id: "external-links", title: "10. External Links" },
  { id: "data-retention", title: "11. Personal Data Retention" },
  { id: "governing-law", title: "12. Governing Law and Jurisdiction" },
  { id: "amendments", title: "13. Amendments to These Terms" },
]

export default function TermsConditionsClient() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans antialiased [font-family:var(--font-poppins),ui-sans-serif,system-ui,sans-serif] selection:bg-[#FFB81C] selection:text-[#2D0A0A]">
      <NavbarDemo />

      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden bg-[#2D0A0A] pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#701a1a] via-[#ea580c] to-[#b45309] opacity-95"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFB81C] rounded-full blur-[150px] opacity-20"></div>

        <div className="relative z-10 px-4 max-w-6xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-2xl font-serif uppercase">
              Terms & Conditions
            </h1>
            <div className="flex items-center justify-center gap-6">
              <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-[#FFB81C]"></div>
              <Scale className="text-[#FFB81C] w-10 h-10" />
              <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-[#FFB81C]"></div>
            </div>
            <div className="text-center space-y-1">
              <p className="text-white text-2xl md:text-3xl font-bold font-serif tracking-wide">DAKSHINA DWARAKA DHAM</p>
              <p className="text-[#ffe8cc] text-base md:text-lg font-medium">Project by Hare Krishna Movement Chennai</p>
              <p className="text-[#FFB81C] text-sm md:text-base font-medium">(Affiliated to ISKCON Bangalore Regn. S-49/78-79)</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1400px] mx-auto px-6 py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:col-span-3 hidden lg:block sticky top-28 self-start max-h-[80vh] overflow-y-auto pr-4">
            <h3 className="text-[#701a1a] font-bold text-lg uppercase tracking-widest mb-6 font-serif border-b border-[#701a1a]/20 pb-2">Agreement Sections</h3>
            <div className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`w-full text-left p-3 rounded-xl transition-all duration-300 text-sm flex items-center gap-3 group ${
                    activeSection === section.id 
                    ? "bg-[#ea580c] text-white shadow-lg translate-x-2" 
                    : "text-[#5a5a5a] hover:bg-[#FFB81C]/10 hover:text-[#701a1a]"
                  }`}
                >
                  <ScrollText className={`w-4 h-4 shrink-0 ${activeSection === section.id ? "text-white" : "text-[#701a1a]/40 group-hover:text-[#ea580c]"}`} />
                  <span className="line-clamp-2">{section.title}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Detailed Content */}
          <div className="lg:col-span-9 space-y-12">
            <div className="bg-white rounded-[3rem] shadow-2xl border border-[#FFB81C]/20 overflow-hidden relative">
              
              {/* Introduction Card */}
              <div className="p-10 md:p-16 border-b border-[#FFB81C]/10 bg-gradient-to-br from-white to-[#FFF9F0] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB81C]/5 rounded-bl-full pointer-events-none"></div>
                
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
                  <div className="space-y-4">
                    <h2 className="text-[#701a1a] font-serif text-3xl font-bold">Hare Krishna Movement (HKM) Chennai</h2>
                    <p className="text-[#5a5a5a] flex items-center gap-2">
                       <MapPin className="w-5 h-5 text-[#ea580c]" />
                       63, 1st Seaward Road, Thiruvanmiyur, Chennai – 600 041
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="bg-[#701a1a]/10 px-6 py-3 rounded-2xl border border-[#701a1a]/20 self-start">
                      <span className="text-[#701a1a] font-bold text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Last Reviewed: April 2026
                      </span>
                    </div>
                  </div>
                </div>

                <div className="prose prose-lg prose-orange max-w-none font-sans text-[#4a4a4a] leading-relaxed [&_p]:font-sans [&_li]:font-sans [&_strong]:font-sans [font-family:var(--font-poppins),ui-sans-serif,system-ui,sans-serif]">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#ea580c] font-bold mb-4">Official Agreement</p>
                  <p>
                    Thank you for visiting <strong>hkmchennai.org</strong>, the official website of Hare Krishna Movement (HKM) Chennai. By accessing or using this website (the “Site”), you agree to be bound by these Terms and Conditions, together with our Privacy Policy.
                  </p>
                  <p className="italic text-gray-500">
                    If you do not agree to these Terms and Conditions, please do not use this Site. HKM Chennai reserves the right to update or amend these Terms at any time without prior notice.
                  </p>
                </div>
              </div>

              {/* Policy Sections */}
              <div className="p-10 md:p-16 space-y-20">
                
                {/* 1. Copyright */}
                <section id="copyright" className="space-y-6 scroll-mt-32 border-b border-gray-100 pb-12">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-[#701a1a] text-white flex items-center justify-center text-sm">01</span>
                    Copyright
                  </h3>
                  <div className="text-[#4a4a4a] leading-relaxed space-y-4">
                    <p>All contents of hkmchennai.org — including text, deity photographs, kirtan recordings, and graphics — are the copyright of Hare Krishna Movement (HKM) Chennai. All rights reserved.</p>
                    <p className="font-bold">Permitted uses:</p>
                    <ul className="list-disc pl-10 space-y-2">
                      <li>Viewing for personal, non-commercial and devotional purposes.</li>
                      <li>Printing/downloading a single copy for personal reference with clear attribution.</li>
                      <li>Sharing links to articles via social media or email.</li>
                    </ul>
                    <p className="bg-red-50 p-4 rounded-xl text-red-800 text-sm italic">
                      Strictly NOT permitted: Reproducing content on other sites, usage for commercial purposes, or creating derivative works without written permission.
                    </p>
                  </div>
                </section>

                {/* 2. Disclaimer */}
                <section id="disclaimer" className="space-y-6 scroll-mt-32 border-b border-gray-100 pb-12">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-[#701a1a] text-white flex items-center justify-center text-sm">02</span>
                    Website Content and Disclaimer
                  </h3>
                  <p className="text-[#4a4a4a] leading-relaxed">
                    Content is provided for devotional and educational purposes. While we strive for accuracy, HKM Chennai does not warrant that the content is complete or error-free. To the fullest extent permitted by law, HKM Chennai and its office-bearers shall not be liable for any damages arising out of your use of this Site.
                  </p>
                </section>

                {/* 3. Personal Information */}
                <section id="personal-info" className="space-y-6 scroll-mt-32 border-b border-gray-100 pb-12">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-[#701a1a] text-white flex items-center justify-center text-sm">03</span>
                    Personal Information
                  </h3>
                  <p className="text-[#4a4a4a] leading-relaxed">
                    We respect your privacy. No registration is required for general access. Personal information is only collected during donations, registrations, or enquiries. For full details, please refer to our <a href="/privacy-policy" className="text-[#ea580c] underline">Privacy Policy</a>.
                  </p>
                </section>

                {/* 4. Donations */}
                <section id="donations" className="space-y-6 scroll-mt-32 border-b border-gray-100 pb-12">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-[#701a1a] text-white flex items-center justify-center text-sm">04</span>
                    Donations
                  </h3>
                  <div className="text-[#4a4a4a] leading-relaxed space-y-4">
                    <p>Donations are voluntary contributions towards temple activities and outreach. They are eligible for tax exemption under Section 80G, where applicable.</p>
                    <p className="p-4 bg-yellow-50 rounded-xl border border-yellow-100 text-sm">
                      By donating, you confirm the funds are your own lawful property and you are contributing voluntarily for religious and charitable purposes.
                    </p>
                  </div>
                </section>

                {/* 5. Refund Policy */}
                <section id="refund-policy" className="space-y-6 scroll-mt-32 border-b border-gray-100 pb-12">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-[#701a1a] text-white flex items-center justify-center text-sm">05</span>
                    Refund and Cancellation Policy
                  </h3>
                  <div className="text-[#4a4a4a] leading-relaxed space-y-4">
                    <p><strong>Donations:</strong> Generally final. Erroneous deduction refund requests must be made within two working days. No refund if an 80G certificate is issued.</p>
                    <p><strong>Programme & Yatra:</strong> Fees are generally non-refundable once confirmed. Yatramritam cancellations more than 30 days prior may receive a partial refund, minus non-recoverable costs.</p>
                    <p><strong>Festival Sevas:</strong> Non-refundable once the sankalpa and seva have been offered.</p>
                  </div>
                </section>

                {/* 6. Programme Terms */}
                <section id="programme-terms" className="space-y-6 scroll-mt-32 border-b border-gray-100 pb-12">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-[#701a1a] text-white flex items-center justify-center text-sm">06</span>
                    Terms for Sevas and Programmes
                  </h3>
                  <p className="text-[#4a4a4a] leading-relaxed">
                    You must provide accurate information when registering. HKM Chennai reserves the right to modify or cancel programmes due to unforeseen circumstances or temple operational requirements. All participants must follow the temple's standard code of conduct.
                  </p>
                </section>

                {/* 7. Temple Conduct */}
                <section id="temple-conduct" className="space-y-6 scroll-mt-32 border-b border-gray-100 pb-12">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-[#701a1a] text-white flex items-center justify-center text-sm">07</span>
                    Temple Conduct and Visitor Guidelines
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FFF9F0] p-8 rounded-3xl border border-[#FFB81C]/20">
                    {[
                      { icon: ScrollText, title: "Modest Dress", desc: "Dress appropriately for a place of worship." },
                      { icon: MapPin, title: "No Footwear", desc: "Remove shoes before entering temple premises." },
                      { icon: Info, title: "Silence", desc: "Maintain reverence in the deity hall." },
                      { icon: FileText, title: "Photography", desc: "No photos of deities without prior permission." },
                      { icon: Scale, title: "Strict Diet", desc: "No non-veg, alcohol or intoxicants on premises." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <item.icon className="w-6 h-6 text-[#ea580c] shrink-0" />
                        <div>
                          <h4 className="font-bold text-[#701a1a] mb-1">{item.title}</h4>
                          <p className="text-sm text-[#5a5a5a]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 8. Intellectual Property */}
                <section id="intellectual-property" className="space-y-6 scroll-mt-32 border-b border-gray-100 pb-12">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-[#701a1a] text-white flex items-center justify-center text-sm">08</span>
                    Intellectual Property
                  </h3>
                  <p className="text-[#4a4a4a] leading-relaxed">
                    All devotional content, recordings, and branding are the intellectual property of HKM Chennai or used with permission. Content from Srila Prabhupada's works is reproduced with reference to the Bhaktivedanta Book Trust (BBT).
                  </p>
                </section>

                {/* 9. Acceptable Use */}
                <section id="acceptable-use" className="space-y-6 scroll-mt-32 border-b border-gray-100 pb-12">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-[#701a1a] text-white flex items-center justify-center text-sm">09</span>
                    Acceptable Use and Online Conduct
                  </h3>
                  <p className="text-[#4a4a4a] leading-relaxed italic">
                    By using this website, you agree not to distribute unlawful content, attempt unauthorized server access, or use automated data extraction tools.
                  </p>
                </section>

                {/* 10. External Links */}
                <section id="external-links" className="space-y-6 scroll-mt-32 border-b border-gray-100 pb-12">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-[#701a1a] text-white flex items-center justify-center text-sm">10</span>
                    External Links
                  </h3>
                  <p className="text-[#4a4a4a] leading-relaxed text-sm">
                    Links to external sites are for convenience only. We do not endorse or accept responsibility for their content or privacy practices.
                  </p>
                </section>

                {/* 11. Data Retention */}
                <section id="data-retention" className="space-y-6 scroll-mt-32 border-b border-gray-100 pb-12">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-[#701a1a] text-white flex items-center justify-center text-sm">11</span>
                    Personal Data Retention
                  </h3>
                  <p className="text-[#4a4a4a] leading-relaxed">
                    Information for donations, registrations, and seva bookings is retained as required for statutory, legal, or accounting purposes under Indian law (e.g., Income Tax Act).
                  </p>
                </section>

                {/* 12. Governing Law */}
                <section id="governing-law" className="space-y-6 scroll-mt-32 border-b border-gray-100 pb-12">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-[#701a1a] text-white flex items-center justify-center text-sm">12</span>
                    Governing Law and Jurisdiction
                  </h3>
                  <p className="text-[#4a4a4a] leading-relaxed font-medium">
                    These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu, India.
                  </p>
                </section>

                {/* 13. Amendments */}
                <section id="amendments" className="space-y-6 scroll-mt-32 pb-12">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-[#701a1a] text-white flex items-center justify-center text-sm">13</span>
                    Amendments to These Terms
                  </h3>
                  <p className="text-[#4a4a4a] leading-relaxed">
                    HKM Chennai reserves the right to revise or update these Terms at any time. Continued use of the Site after posting changes constitutes acceptance of the revised Terms.
                  </p>
                </section>

              </div>

              {/* Contact Footer in Content */}
              <div className="bg-[#2D0A0A] p-10 md:p-16 text-white text-center space-y-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.05] animate-spin-slow-reverse"></div>
                
                <h3 className="text-3xl font-serif font-bold text-[#FFB81C] relative z-10">Connect With HKM Chennai</h3>
                <p className="text-[#ffe8cc] max-w-2xl mx-auto italic relative z-10">
                  "For any clarifications regarding these terms or your experience at Dakshina Dwaraka Dham, we are here to assist you."
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 relative z-10">
                  <div className="space-y-2">
                    <Mail className="w-8 h-8 text-[#FFB81C] mx-auto mb-4" />
                    <p className="text-xs uppercase tracking-widest text-[#ea580c] font-bold">Email</p>
                    <a href="mailto:connect@hkmchennai.org" className="text-sm font-medium hover:text-[#FFB81C]">connect@hkmchennai.org</a>
                  </div>
                  <div className="space-y-2 border-x border-white/10">
                    <Phone className="w-8 h-8 text-[#FFB81C] mx-auto mb-4" />
                    <p className="text-xs uppercase tracking-widest text-[#ea580c] font-bold">Phone</p>
                    <a href="tel:+919789057101" className="text-sm font-medium hover:text-[#FFB81C]">+91 97890 57101</a>
                  </div>
                  <div className="space-y-2">
                    <MapPin className="w-8 h-8 text-[#FFB81C] mx-auto mb-4" />
                    <p className="text-xs uppercase tracking-widest text-[#ea580c] font-bold">Address</p>
                    <p className="text-sm font-medium">Dakshina Dwaraka Dham, Thiruvanmiyur</p>
                  </div>
                </div>

                <div className="text-xs text-gray-400 pt-16 border-t border-white/10 relative z-10">
                   Hare Krishna Movement (HKM) Chennai | Registered Non-Profit Charitable Organisation (Regn. No. 828, 2008)
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
