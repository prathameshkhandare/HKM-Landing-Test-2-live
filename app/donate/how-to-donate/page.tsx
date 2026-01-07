"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { CreditCard, Landmark, Mail, MapPin, CheckCircle, Heart, Shield, FileText } from "lucide-react"
import Link from "next/link"

const donationMethods = [
  {
    title: "Online Payment",
    description: "Secure online donations through Razorpay or CCAvenue",
    icon: <CreditCard className="w-8 h-8 text-[#ea580c]" />,
    steps: [
      "Visit our donation page",
      "Select your donation amount",
      "Choose your payment method",
      "Complete the secure transaction",
      "Receive confirmation and receipt",
    ],
  },
  {
    title: "Bank Transfer",
    description: "Direct transfer to our temple account",
    icon: <Landmark className="w-8 h-8 text-[#ea580c]" />,
    steps: [
      "Contact us for bank details",
      "Transfer funds to our account",
      "Send us a confirmation email",
      "We'll send you a receipt",
      "Your donation is tax-deductible",
    ],
  },
  {
    title: "Check or Draft",
    description: "Send a check or demand draft by mail",
    icon: <Mail className="w-8 h-8 text-[#ea580c]" />,
    steps: [
      "Make check payable to HKM Chennai",
      "Mail to our temple address",
      "Include your contact information",
      "We'll acknowledge receipt",
      "Receive tax receipt by mail",
    ],
  },
  {
    title: "In-Person Donation",
    description: "Visit our temple and donate directly",
    icon: <MapPin className="w-8 h-8 text-[#ea580c]" />,
    steps: [
      "Visit our temple during office hours",
      "Speak with our staff",
      "Make your donation",
      "Receive immediate receipt",
      "Join us for prasadam",
    ],
  },
]

export default function HowToDonate() {
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
            {/* Heart Icon */}
            <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#FFB81C]/10 rounded-full flex items-center justify-center border-2 border-[#FFB81C] shadow-[0_0_30px_rgba(255,184,28,0.4)] backdrop-blur-sm">
                    <Heart size={32} className="text-[#FFB81C] fill-current" />
                </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
              How to <span className="text-[#FFB81C] font-serif italic">Donate</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#ffe8cc] font-light leading-relaxed max-w-3xl mx-auto italic">
              "Multiple Ways to Support Our Mission"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 relative z-10 -mt-10">
        
        {/* Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 bg-white rounded-2xl p-8 border-l-8 border-[#ea580c] shadow-lg relative overflow-hidden"
        >
             <div className="absolute top-0 right-0 p-4 opacity-5">
                 <Heart size={100} />
             </div>
             <h2 className="text-2xl font-bold mb-4 text-[#701a1a] font-serif">Easy Steps to Give</h2>
             <p className="text-[#666666] leading-relaxed text-lg relative z-10">
                We've made it simple for you to support our mission. Choose the donation method that works best for you. All
                donations are secure, confidential, and tax-deductible.
             </p>
        </motion.div>

        {/* Donation Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {donationMethods.map((method, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
            >
                <Card className="h-full border-2 border-[#FFB81C]/20 hover:border-[#FFB81C] hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
                <CardHeader className="bg-[#FFF9F0] border-b border-[#FFB81C]/10 flex flex-row items-center gap-4 py-5">
                    <div className="bg-white p-3 rounded-full shadow-sm border border-[#FFB81C]/20 group-hover:scale-110 transition-transform">
                        {method.icon}
                    </div>
                    <div>
                        <CardTitle className="text-[#701a1a] text-xl font-serif">{method.title}</CardTitle>
                        <p className="text-sm text-[#ea580c] font-medium mt-1">{method.description}</p>
                    </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <div>
                    <p className="font-bold text-[#701a1a] mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                        <CheckCircle size={16} className="text-[#FFB81C]" /> Follow these steps:
                    </p>
                    <ol className="space-y-3">
                        {method.steps.map((step, i) => (
                        <li key={i} className="text-[#666666] text-sm md:text-base flex gap-3 items-start">
                            <span className="text-[#ea580c] font-bold bg-[#FFF9F0] w-6 h-6 flex items-center justify-center rounded-full text-xs shrink-0 mt-0.5 border border-[#FFB81C]/30">{i + 1}</span>
                            <span className="leading-snug">{step}</span>
                        </li>
                        ))}
                    </ol>
                    </div>
                </CardContent>
                </Card>
            </motion.div>
          ))}
        </div>

        {/* Important Information - Sacred Scroll Style */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#FFF9F0] p-1.5 rounded-[2.5rem] shadow-2xl overflow-hidden mb-16"
        >
          <div className="absolute inset-0 border-[6px] border-[#FFB81C]/20 rounded-[2.5rem] pointer-events-none"></div>
          <div className="absolute inset-3 border-[2px] border-[#FFB81C]/10 border-dashed rounded-[2rem] pointer-events-none"></div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] bg-repeat pointer-events-none"></div>
             
             <div className="relative z-10">
                <div className="text-center mb-10">
                    <span className="text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Good to Know</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#701a1a] font-serif">Important <span className="text-[#FFB81C]">Information</span></h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Tax Benefits", desc: "All donations to HKM Chennai are tax-deductible under Section 80G of the Indian Income Tax Act. You will receive a receipt for your records.", icon: <FileText className="text-[#ea580c]" /> },
                        { title: "Privacy & Security", desc: "Your personal information is kept confidential and secure. We never share your details with third parties without your consent.", icon: <Shield className="text-[#ea580c]" /> },
                        { title: "Transparency", desc: "We maintain complete transparency in how donations are used. Regular financial reports are available upon request.", icon: <CheckCircle className="text-[#ea580c]" /> }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-[#FFF9F0] p-6 rounded-xl border border-[#FFB81C]/20 hover:shadow-lg transition-shadow text-center group">
                            <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h4 className="font-bold text-[#701a1a] text-lg mb-3 font-serif">{item.title}</h4>
                            <p className="text-[#666666] text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
             </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center pb-12">
          <Link
            href="/donate/pandava-seva"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white rounded-full hover:from-[#d97706] hover:to-[#c2410c] transition-all duration-300 font-bold shadow-lg hover:shadow-xl text-lg hover:-translate-y-1"
          >
            <Heart size={20} className="fill-current" /> Make a Donation Now
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
