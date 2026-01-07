"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Heart, Calendar, Sparkles, Check } from "lucide-react"

export default function PandavaSeva() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans selection:bg-[#FFB81C] selection:text-white">
      <NavbarDemo />

      {/* Hero Section - Matching Sevakartas Style */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#2D0A0A]">
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
            {/* Calendar Icon */}
            <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#FFB81C]/10 rounded-full flex items-center justify-center border-2 border-[#FFB81C] shadow-[0_0_30px_rgba(255,184,28,0.4)] backdrop-blur-sm">
                    <Calendar size={32} className="text-[#FFB81C]" />
                </div>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
              Pandava <span className="text-[#FFB81C] font-serif italic">Seva</span>
            </h1>
            
            {/* Ornamental Divider */}
            <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-[2px] w-16 bg-gradient-to-l from-[#FFB81C] to-transparent"></div>
                <div className="w-3 h-3 rotate-45 border-2 border-[#FFB81C]"></div>
                <div className="h-[2px] w-16 bg-gradient-to-r from-[#FFB81C] to-transparent"></div>
            </div>

            <p className="text-xl md:text-2xl text-[#ffe8cc] font-light leading-relaxed max-w-3xl mx-auto italic">
              "Monthly Giving Program - ₹10,000/month"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-20 relative z-10 -mt-20">
        
        {/* About & Program Details */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* About Card - Sacred Scroll Style */}
          <div className="relative bg-[#FFF9F0] p-1.5 rounded-[2rem] shadow-xl overflow-hidden">
            <div className="absolute inset-0 border-[4px] border-[#FFB81C]/20 rounded-[2rem] pointer-events-none"></div>
            <div className="bg-white rounded-[1.7rem] p-8 relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] bg-repeat pointer-events-none"></div>
              <div className="relative z-10">
                <span className="text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">About</span>
                <h2 className="text-2xl font-bold mb-4 text-[#701a1a] font-serif">Pandava <span className="text-[#FFB81C]">Seva</span></h2>
                <p className="text-[#666666] leading-relaxed mb-4">
                  Pandava Seva is our monthly giving program, named after the five Pandava brothers who were devoted to
                  Krishna. By becoming a Pandava Seva member, you commit to supporting our mission with a monthly
                  contribution.
                </p>
                <p className="text-[#666666] leading-relaxed">
                  Your monthly donation helps us maintain our spiritual programs, support community service, and spread
                  Krishna Consciousness. Every contribution, no matter the amount, makes a meaningful difference.
                </p>
                <div className="h-1.5 w-24 bg-gradient-to-r from-[#FFB81C] to-transparent rounded-full mt-6"></div>
              </div>
            </div>
          </div>

          {/* Program Details Card */}
          <Card className="border-2 border-[#FFB81C]/30 rounded-2xl shadow-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white">
              <CardTitle className="text-white font-serif text-xl">Program Details</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4 text-[#666666] bg-white">
              {[
                { label: "Frequency", value: "Monthly automatic deduction" },
                { label: "Flexibility", value: "Change or cancel anytime" },
                { label: "Tax Benefit", value: "Section 80G tax deduction" },
                { label: "Receipt", value: "Monthly receipt via email" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 bg-[#FFF9F0] rounded-xl border border-[#FFB81C]/20 hover:border-[#FFB81C] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#FFB81C]/10 flex items-center justify-center text-[#ea580c]">
                    <Sparkles size={18} className="fill-current" />
                  </div>
                  <div>
                    <p className="font-bold text-[#701a1a]">{item.label}</p>
                    <p className="text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Payment Form - Sacred Scroll Style */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#FFF9F0] p-1.5 rounded-[2.5rem] shadow-2xl overflow-hidden mb-12"
        >
          <div className="absolute inset-0 border-[6px] border-[#FFB81C]/20 rounded-[2.5rem] pointer-events-none"></div>
          <div className="absolute inset-3 border-[2px] border-[#FFB81C]/10 border-dashed rounded-[2rem] pointer-events-none"></div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] bg-repeat pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <span className="text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Get Started</span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#701a1a] font-serif">Set Up Your Monthly <span className="text-[#FFB81C]">Donation</span></h3>
              </div>
              
              <form className="space-y-6 max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#701a1a] font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-[#FFB81C]/30 rounded-xl focus:outline-none focus:border-[#FFB81C] bg-[#FFF9F0]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#701a1a] font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border-2 border-[#FFB81C]/30 rounded-xl focus:outline-none focus:border-[#FFB81C] bg-[#FFF9F0]"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#701a1a] font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border-2 border-[#FFB81C]/30 rounded-xl focus:outline-none focus:border-[#FFB81C] bg-[#FFF9F0]"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-[#701a1a] font-semibold mb-2">Monthly Amount (₹)</label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 border-2 border-[#FFB81C]/30 rounded-xl focus:outline-none focus:border-[#FFB81C] bg-[#FFF9F0]"
                      placeholder="10000"
                      min="100"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#701a1a] font-semibold mb-2">Payment Method</label>
                  <select className="w-full px-4 py-3 border-2 border-[#FFB81C]/30 rounded-xl focus:outline-none focus:border-[#FFB81C] bg-[#FFF9F0]">
                    <option>Select payment method</option>
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                    <option>Bank Transfer</option>
                    <option>UPI</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white rounded-xl hover:from-[#d97706] hover:to-[#c2410c] transition-all duration-300 font-bold shadow-lg hover:shadow-xl text-lg flex items-center justify-center gap-2"
                >
                  <Heart size={20} className="fill-current" /> Set Up Monthly Donation
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Benefits - Sacred Scroll Style */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#FFF9F0] p-1.5 rounded-[2.5rem] shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 border-[6px] border-[#FFB81C]/20 rounded-[2.5rem] pointer-events-none"></div>
          <div className="absolute inset-3 border-[2px] border-[#FFB81C]/10 border-dashed rounded-[2rem] pointer-events-none"></div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] bg-repeat pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <span className="text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Exclusive</span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#701a1a] font-serif">Pandava Seva <span className="text-[#FFB81C]">Benefits</span></h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Monthly Impact Reports", desc: "Receive detailed reports on how your donation is being used." },
                  { title: "Community Recognition", desc: "Featured in our monthly newsletter and community updates." },
                  { title: "Special Blessings", desc: "Receive special prayers and blessings from our spiritual leaders." },
                  { title: "Event Invitations", desc: "Exclusive invitations to special temple events and celebrations." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#FFF9F0] p-4 rounded-xl border border-[#FFB81C]/20 flex items-start gap-4 hover:border-[#FFB81C] transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-[#FFB81C]/10 flex items-center justify-center text-[#d97706] group-hover:bg-[#FFB81C] group-hover:text-white transition-colors shrink-0">
                      <Check size={20} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#701a1a] text-lg font-serif">{item.title}</h4>
                      <p className="text-[#666666] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </section>

      <FooterSection />
    </div>
  )
}
