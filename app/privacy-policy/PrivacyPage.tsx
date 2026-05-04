"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { ShieldCheck, Calendar, Info, ChevronRight, Mail, Phone, MapPin } from "lucide-react"
import { useState, useEffect } from "react"

const sections = [
  { id: "personal-info", title: "1. Personal Information" },
  { id: "donations", title: "2. Donations" },
  { id: "donor-data", title: "3. Donor Personal Data" },
  { id: "programme-registrations", title: "4. Programme and Course Registrations" },
  { id: "yatramritam", title: "5. Yatramritam — Rediscover Pilgrimage" },
  { id: "festival-seva", title: "6. Festival Seva Offerings" },
  { id: "annadanam", title: "7. Annadanam and Food Distribution" },
  { id: "subscriptions", title: "8. WhatsApp and Email Subscriptions" },
  { id: "enquiries", title: "9. Enquiries (Contact Us)" },
  { id: "third-party", title: "10. Third-Party Tools & Services" },
  { id: "refund-policy", title: "11. Donation Refund Policy" },
  { id: "security", title: "12. Security" },
  { id: "cookies", title: "13. Cookies" },
  { id: "external-links", title: "14. External Links" },
  { id: "data-retention", title: "15. Data Retention" },
  { id: "your-rights", title: "16. Your Rights" },
  { id: "sharing", title: "17. Sharing of Information" },
  { id: "amendments", title: "18. Amendments to This Policy" },
]

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <div className="flex items-center justify-center gap-6">
              <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-[#FFB81C]"></div>
              <ShieldCheck className="text-[#FFB81C] w-10 h-10" />
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
          <aside className="lg:col-span-3 hidden lg:block sticky top-28 self-start max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
            <h3 className="text-[#701a1a] font-bold text-lg uppercase tracking-widest mb-6 font-serif">Table of Contents</h3>
            <div className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`w-full text-left p-3 rounded-xl transition-all duration-300 text-sm flex items-center gap-2 group ${
                    activeSection === section.id 
                    ? "bg-[#701a1a] text-white shadow-lg translate-x-2" 
                    : "text-[#5a5a5a] hover:bg-[#FFB81C]/10 hover:text-[#701a1a]"
                  }`}
                >
                  <ChevronRight className={`w-4 h-4 shrink-0 ${activeSection === section.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                  <span className="line-clamp-1">{section.title}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Detailed Content */}
          <div className="lg:col-span-9 space-y-12">
            <div className="bg-white rounded-[3rem] shadow-2xl border border-[#FFB81C]/20 overflow-hidden relative">
              {/* Introduction Card */}
              <div className="p-10 md:p-16 border-b border-[#FFB81C]/10 bg-gradient-to-br from-white to-[#FFF9F0]">
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
                  <div className="space-y-4">
                    <h2 className="text-[#701a1a] font-serif text-3xl font-bold">Hare Krishna Movement (HKM) Chennai</h2>
                    <p className="text-[#5a5a5a] flex items-center gap-2">
                       <MapPin className="w-5 h-5 text-[#ea580c]" />
                       Dakshina Dwaraka Dham, Thiruvanmiyur, Chennai – 600 041
                    </p>
                  </div>
                  <div className="bg-[#ea580c]/10 px-6 py-3 rounded-2xl border border-[#ea580c]/20 self-start">
                    <span className="text-[#ea580c] font-bold text-sm flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Last Reviewed: April 2026
                    </span>
                  </div>
                </div>

                <div className="prose prose-lg prose-orange max-w-none font-sans text-[#4a4a4a] leading-relaxed [&_p]:font-sans [&_li]:font-sans [&_strong]:font-sans [font-family:var(--font-poppins),ui-sans-serif,system-ui,sans-serif]">
                  <p className="text-xl font-medium text-[#2D0A0A] mb-6">
                    This website is owned and operated by Hare Krishna Movement (HKM) Chennai, a Non-Profit Charitable Organisation registered under the Societies Registration Act (Regn. No. 828, 2008), affiliated to ISKCON Bangalore.
                  </p>
                  <p>
                    We recognise that you may be concerned about the information we collect from you through our website and how we treat that information. We are committed to ensuring that your privacy is protected. This policy describes what information we collect from you, why we collect it, how it is used, protected and retained, as well as your choices regarding this information.
                  </p>
                </div>
              </div>

              {/* Policy Sections */}
              <div className="p-10 md:p-16 space-y-20">
                
                {/* 1. Personal Information */}
                <section id="personal-info" className="space-y-6 scroll-mt-32">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif border-l-4 border-[#ea580c] pl-6 py-1 italic">1. Personal Information</h3>
                  <div className="text-[#4a4a4a] leading-relaxed space-y-4">
                    <p>We respect your privacy when you visit our website. You do not need to register or provide any personal information simply to access the general content of our website, including temple timings, programme details, event announcements and devotional resources.</p>
                    <p>However, we gather certain personally identifiable information under specific circumstances, such as when you make a donation, register for a programme, or submit an enquiry. We do not sell or trade such information to third parties. We do not share such information with third parties unless authorised by the person submitting the information or when required by law.</p>
                  </div>
                </section>

                {/* 2. Donations */}
                <section id="donations" className="space-y-6 scroll-mt-32">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif border-l-4 border-[#ea580c] pl-6 py-1 italic">2. Donations</h3>
                  <div className="text-[#4a4a4a] leading-relaxed space-y-6">
                    <p>When you make a donation through our online donation page, we collect the following information: Full name, Mobile number, Email address, and Postal address and PIN code.</p>
                    <div className="bg-[#FFF9F0] p-8 rounded-3xl border border-[#FFB81C]/20">
                      <p className="font-bold text-[#701a1a] mb-4 uppercase tracking-wider text-sm">We use this information to:</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Acknowledge receipt of your donation",
                          "Despatch prasadam or seva-related items",
                          "Issue an 80G tax exemption certificate",
                          "Communicate regarding processing difficulties"
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm">
                            <span className="w-2 h-2 rounded-full bg-[#ea580c]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p>If you are donating for a specific seva — such as Abhishekam, Annadanam, Go-seva, or any other temple programme — we may additionally collect the sevakarta’s name, relationship, Rashi, nakshatra and gotra required to perform the sankalpa.</p>
                  </div>
                </section>

                {/* 3. Donor Personal Data */}
                <section id="donor-data" className="space-y-6 scroll-mt-32">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif border-l-4 border-[#ea580c] pl-6 py-1 italic">3. Donor Personal Data</h3>
                  <p className="text-[#4a4a4a] leading-relaxed">
                    We retain your personal information collected at the time of your online donation for as long as it is required for statutory, legal or accounting purposes, including compliance with the Income Tax Act, 1961 (India). You may also opt to receive communications from us regarding temple festivals and events, and we will use your personal data for these communications where you have given consent.
                  </p>
                </section>

                {/* 4. Programme Registrations */}
                <section id="programme-registrations" className="space-y-6 scroll-mt-32">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif border-l-4 border-[#ea580c] pl-6 py-1 italic">4. Programme and Course Registrations</h3>
                  <div className="text-[#4a4a4a] leading-relaxed space-y-4">
                    <p>We conduct various programmes including Gita Life Foundation Course, FOLK, ICVK, and Vidyabhyasam. Online registration collects:</p>
                    <ul className="list-disc pl-10 space-y-2">
                       <li>Participant’s name, date of birth, gender and educational institution</li>
                       <li>Contact person’s name, email, mobile number, and address</li>
                    </ul>
                    <p>Details are used to confirm eligibility, manage participation, and issue certificates or awards.</p>
                  </div>
                </section>

                {/* 5. Yatramritam */}
                <section id="yatramritam" className="space-y-6 scroll-mt-32">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif border-l-4 border-[#ea580c] pl-6 py-1 italic">5. Yatramritam — Rediscover Pilgrimage</h3>
                  <p className="text-[#4a4a4a] leading-relaxed">
                    For Yatramritam pilgrimages, we collect name, DOB, contact, and Government-issued photo ID (Aadhaar, PAN, Passport) required for travel bookings and security. Passport details are collected for international travel. We also collect emergency contact details and any medical or dietary needs to ensure safety and well-being.
                  </p>
                </section>

                {/* 6. Festival Seva Offerings */}
                <section id="festival-seva" className="space-y-6 scroll-mt-32">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif border-l-4 border-[#ea580c] pl-6 py-1 italic">6. Festival Seva Offerings</h3>
                  <p className="text-[#4a4a4a] leading-relaxed">
                    On major festivals like Janmāṣṭamī or Ekādaśī, we collect contact details and sevakarta details (name, relation, Rashi, nakshatra, gotra) to perform the sankalpa correctly and issue receipts.
                  </p>
                </section>

                {/* 7. Annadanam */}
                <section id="annadanam" className="space-y-6 scroll-mt-32">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif border-l-4 border-[#ea580c] pl-6 py-1 italic">7. Annadanam and Food Distribution</h3>
                  <p className="text-[#4a4a4a] leading-relaxed">
                    For Annadanam sponsorships, we collect the sponsor’s name, mobile number, organization name (if any), and the preferred date for sponsorship to coordinate the distribution and acknowledgment.
                  </p>
                </section>

                {/* 8. Subscriptions */}
                <section id="subscriptions" className="space-y-6 scroll-mt-32">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif border-l-4 border-[#ea580c] pl-6 py-1 italic">8. WhatsApp and Email Subscriptions</h3>
                  <p className="text-[#4a4a4a] leading-relaxed">
                    When you subscribe for daily darshana, festival updates, or Ekadashi reminders, we collect your name and contact details (WhatsApp number or email) for the sole purpose of sending these free updates. You may unsubscribe at any time.
                  </p>
                </section>

                {/* 9. Enquiries */}
                <section id="enquiries" className="space-y-6 scroll-mt-32">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif border-l-4 border-[#ea580c] pl-6 py-1 italic">9. Enquiries (Contact Us)</h3>
                  <p className="text-[#4a4a4a] leading-relaxed">
                    Information sent via the ‘Contact Us’ page (name and email) is used solely to respond to your query and is not retained beyond the necessary period.
                  </p>
                </section>

                {/* 10. Third-Party */}
                <section id="third-party" className="space-y-6 scroll-mt-32">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif border-l-4 border-[#ea580c] pl-6 py-1 italic">10. Third-Party Tools and Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { title: "Email Communication", desc: "We use secure service providers to manage our newsletters and updates." },
                      { title: "Analytics", desc: "Google Analytics helps us improve website performance using anonymous, aggregate data." },
                      { title: "Payment Gateway", desc: "Razorpay securely processes all online donations. We do not store card details." }
                    ].map((tool, i) => (
                      <div key={i} className="bg-white p-6 rounded-2xl shadow-md border border-[#FFB81C]/10 flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-[#ea580c] text-white flex items-center justify-center mb-4 font-bold">{i + 1}</div>
                        <h4 className="font-bold text-[#701a1a] mb-2">{tool.title}</h4>
                        <p className="text-sm text-[#5a5a5a]">{tool.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 11. Refund Policy */}
                <section id="refund-policy" className="space-y-6 scroll-mt-32">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif border-l-4 border-[#ea580c] pl-6 py-1 italic">11. Donation Refund Policy</h3>
                  <div className="text-[#4a4a4a] leading-relaxed space-y-4">
                    <p>We respond to refund requests for erroneous deductions within 7 working days. Written requests must be submitted within two days of the transaction.</p>
                    <p className="font-bold text-[#701a1a]">Conditions:</p>
                    <ul className="list-disc pl-10 space-y-2">
                      <li>Proof of deduction must be provided.</li>
                      <li>Original receipt must be returned if already issued.</li>
                      <li>Refund is NOT possible if an 80G tax certificate has already been issued.</li>
                    </ul>
                  </div>
                </section>

                {/* 12. Security */}
                <section id="security" className="space-y-6 scroll-mt-32">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif border-l-4 border-[#ea580c] pl-6 py-1 italic">12. Security</h3>
                  <p className="text-[#4a4a4a] leading-relaxed">
                    We employ appropriate physical, electronic, and managerial procedures to protect your data from unauthorized access. However, please note that no internet transmission is 100% secure.
                  </p>
                </section>

                {/* 13. Cookies */}
                <section id="cookies" className="space-y-6 scroll-mt-32">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif border-l-4 border-[#ea580c] pl-6 py-1 italic">13. Cookies</h3>
                  <p className="text-[#4a4a4a] leading-relaxed">
                    Our third-party tools may use cookies to improve user experience and track usage. You can adjust your browser settings to deny cookies, though this may affect certain features.
                  </p>
                </section>

                {/* 14. External Links */}
                <section id="external-links" className="space-y-6 scroll-mt-32">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif border-l-4 border-[#ea580c] pl-6 py-1 italic">14. External Links</h3>
                  <p className="text-[#4a4a4a] leading-relaxed">
                    We are not responsible for the privacy practices of external sites linked on hkmchennai.org. We encourage you to read their privacy policies.
                  </p>
                </section>

                {/* 15. Data Retention */}
                <section id="data-retention" className="space-y-6 scroll-mt-32">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif border-l-4 border-[#ea580c] pl-6 py-1 italic">15. Data Retention</h3>
                  <p className="text-[#4a4a4a] leading-relaxed">
                    We retain information only as long as necessary for specified purposes or as required by law (e.g., tax compliance). Data is deleted or anonymized securely thereafter.
                  </p>
                </section>

                {/* 16. Your Rights */}
                <section id="your-rights" className="space-y-6 scroll-mt-32">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif border-l-4 border-[#ea580c] pl-6 py-1 italic">16. Your Rights</h3>
                  <p className="text-[#4a4a4a] leading-relaxed">
                    You have the right to access, rectify, restrict, or erase your information (unless required by law). Contact connect@hkmchennai.org to exercise these rights.
                  </p>
                </section>

                {/* 17. Sharing */}
                <section id="sharing" className="space-y-6 scroll-mt-32">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif border-l-4 border-[#ea580c] pl-6 py-1 italic">17. Sharing of Information</h3>
                  <p className="text-[#4a4a4a] leading-relaxed">
                    We do not sell, rent or trade your information. Disclosure only occurs under legal mandate, to protect rights/safety, or with your express written consent.
                  </p>
                </section>

                {/* 18. Amendments */}
                <section id="amendments" className="space-y-6 scroll-mt-32">
                  <h3 className="text-2xl font-bold text-[#701a1a] font-serif border-l-4 border-[#ea580c] pl-6 py-1 italic">18. Amendments to This Policy</h3>
                  <p className="text-[#4a4a4a] leading-relaxed">
                    We reserve the right to update this policy at any time. Material changes will be highlighted on this page. We encourage periodic reviews.
                  </p>
                </section>

              </div>

              {/* Contact Footer in Content */}
              <div className="bg-[#2D0A0A] p-10 md:p-16 text-white text-center space-y-8">
                <h3 className="text-3xl font-serif font-bold text-[#FFB81C]">Still Have Questions?</h3>
                <p className="text-[#ffe8cc] max-w-2xl mx-auto italic">
                  "Our team is always here to provide clarity and assistance regarding your privacy and data."
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-6 pt-4">
                  <a href="mailto:connect@hkmchennai.org" className="flex items-center gap-3 bg-white/10 px-8 py-4 rounded-2xl hover:bg-white/20 transition-all border border-white/20">
                    <Mail className="text-[#FFB81C] w-6 h-6" />
                    <span>connect@hkmchennai.org</span>
                  </a>
                  <a href="tel:+919789057101" className="flex items-center gap-3 bg-[#ea580c] px-8 py-4 rounded-2xl hover:bg-[#ff6b2b] transition-all shadow-xl font-bold">
                    <Phone className="w-6 h-6" />
                    <span>+91 97890 57101</span>
                  </a>
                </div>
                <div className="text-xs text-gray-400 pt-8 border-t border-white/10">
                   Hare Krishna Movement (HKM) Chennai | Dakshina Dwaraka Dham, Chennai 600041 | Affiliated to ISKCON Bangalore
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
