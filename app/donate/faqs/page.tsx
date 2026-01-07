"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { HelpCircle, ChevronR, MessageCircle } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "Are donations tax-deductible?",
    answer:
      "Yes, all donations to HKM Chennai are tax-deductible under Section 80G of the Indian Income Tax Act. You will receive a receipt for your donation that can be used for tax purposes.",
  },
  {
    question: "How can I make a donation?",
    answer:
      "You can donate through multiple methods: online payment (Razorpay/CCAvenue), bank transfer, check/draft by mail, or in-person at our temple. Visit our 'How to Donate' page for detailed instructions.",
  },
  {
    question: "Is my donation secure?",
    answer:
      "Yes, all online donations are processed through secure payment gateways. Your personal and financial information is encrypted and protected. We never share your details with third parties.",
  },
  {
    question: "Can I make a recurring donation?",
    answer:
      "Yes, we offer recurring giving programs: Pandava Seva (monthly), Sudama Seva (quarterly), and Gopala Seva (annual). These programs allow you to support our mission consistently.",
  },
  {
    question: "How are donations used?",
    answer:
      "Donations support our spiritual programs, community service, youth empowerment, temple operations, and outreach activities. We maintain complete transparency and provide financial reports upon request.",
  },
  {
    question: "Can I donate in someone's name?",
    answer:
      "Yes, you can make a donation in honor of or in memory of someone. Please mention this when making your donation, and we'll acknowledge it appropriately.",
  },
  {
    question: "Do you accept donations of property or assets?",
    answer:
      "Yes, we accept donations of property, vehicles, and other assets. Please contact us directly to discuss the details and process.",
  },
  {
    question: "How will I receive my receipt?",
    answer:
      "For online donations, you'll receive an immediate confirmation. For other methods, we'll send a receipt by email or mail within 7 business days.",
  },
]

export default function DonationFAQs() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans selection:bg-[#FFB81C] selection:text-white">
      <NavbarDemo />

      {/* Hero Section - Saffron Theme */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#2D0A0A]">
        {/* Background - Saffron/Gold Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#701a1a] via-[#ea580c] to-[#b45309] opacity-90"></div>
        
        {/* Mandala Pattern Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 49px, #FFB81C 50px)' }}></div>

        {/* Central Divine Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFB81C] rounded-full blur-[120px] opacity-20 animate-pulse"></div>

        <div className="container mx-auto text-center relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Help Icon */}
            <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#FFB81C]/10 rounded-full flex items-center justify-center border-2 border-[#FFB81C] shadow-[0_0_30px_rgba(255,184,28,0.4)] backdrop-blur-sm">
                    <HelpCircle size={32} className="text-[#FFB81C]" />
                </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
              Donation <span className="text-[#FFB81C] font-serif italic">FAQs</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#ffe8cc] font-light leading-relaxed max-w-3xl mx-auto italic">
              "Answers to Common Questions"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 relative z-10 -mt-10">
        <div className="grid gap-6">
          {faqs.map((faq, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
            >
                <Card className="border-2 border-[#FFB81C]/20 hover:border-[#FFB81C] transition-colors rounded-xl overflow-hidden shadow-md">
                <CardHeader className="bg-[#FFF9F0] border-b border-[#FFB81C]/10 flex flex-row items-center gap-4 py-4">
                    <div className="bg-[#FFB81C]/10 p-2 rounded-full hidden md:block">
                        <HelpCircle size={20} className="text-[#ea580c]" />
                    </div>
                    <CardTitle className="text-[#701a1a] text-lg md:text-xl font-serif leading-snug">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 bg-white">
                    <p className="text-[#666666] leading-relaxed text-base md:text-lg">{faq.answer}</p>
                </CardContent>
                </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA - Sacred Scroll Style */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#FFF9F0] p-1.5 rounded-[2rem] shadow-xl overflow-hidden max-w-4xl mx-auto"
        >
            <div className="absolute inset-0 border-[4px] border-[#FFB81C]/20 rounded-[2rem] pointer-events-none"></div>
            <div className="bg-white rounded-[1.7rem] p-8 md:p-12 relative overflow-hidden text-center">
                 <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] bg-repeat pointer-events-none"></div>
                 <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#701a1a] font-serif">Still Have Questions?</h3>
                    <p className="text-[#666666] mb-8 text-lg">
                        If you have additional questions about donations, please don't hesitate to contact us.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white rounded-full hover:from-[#d97706] hover:to-[#c2410c] transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        <MessageCircle size={20} /> Contact Us
                    </Link>
                 </div>
            </div>
        </motion.div>
      </section>

      <FooterSection />
    </div>
  )
}
