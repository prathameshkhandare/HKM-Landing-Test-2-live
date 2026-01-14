"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, Gift, HelpCircle, Users, Sparkles, Quote, CheckCircle } from "lucide-react"

const donationOptions = [
  {
    title: "How to Donate",
    description: "Learn about different ways to support our mission",
    link: "/donate/how-to-donate",
    icon: "💳",
  },
  {
    title: "Recent Causes",
    description: "See where your donations are making a difference",
    link: "/donate/recent-causes",
    icon: "❤️",
  },
  {
    title: "FAQs",
    description: "Common questions about donations and giving",
    link: "/donate/faqs",
    icon: "❓",
  },
  {
    title: "SevaKartas",
    description: "Join our recurring giving program",
    link: "/donate/sevakartas",
    icon: "🙏",
  },
]

const paymentMethods = [
  {
    name: "Pandava Seva",
    description: "Monthly giving program",
    link: "/donate/pandava-seva",
    image: "/donate/pandava_seva.jpg",
  },
  {
    name: "Sudama Seva",
    description: "Quarterly giving program",
    link: "/donate/sudama-seva",
    image: "/donate/sudama_seva.jpg",
  },
  {
    name: "Gopala Seva",
    description: "Annual giving program",
    link: "/donate/gopala-seva",
    image: "/donate/gopala_seva.jpg",
  },
]

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans selection:bg-[#FFB81C] selection:text-white">
      <NavbarDemo />

      {/* Hero Section - Matching Yuga Dharma / Sevakartas Style */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#2D0A0A]">
        {/* Background - Saffron/Gold Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#701a1a] via-[#ea580c] to-[#b45309] opacity-90 pointer-events-none"></div>
        
        {/* Mandala Pattern Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow pointer-events-none"></div>
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 49px, #FFB81C 50px)' }}></div>

        {/* Central Divine Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFB81C] rounded-full blur-[120px] opacity-20 animate-pulse pointer-events-none"></div>

        <div className="container mx-auto text-center relative z-40 px-4">
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

            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
              Support Our <span className="text-[#FFB81C] font-serif italic">Mission</span>
            </h1>
            
            {/* Ornamental Divider */}
            <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-[2px] w-16 bg-gradient-to-l from-[#FFB81C] to-transparent"></div>
                <div className="w-3 h-3 rotate-45 border-2 border-[#FFB81C]"></div>
                <div className="h-[2px] w-16 bg-gradient-to-r from-[#FFB81C] to-transparent"></div>
            </div>

            <p className="text-xl md:text-2xl text-[#ffe8cc] font-light leading-relaxed max-w-3xl mx-auto italic mb-8">
              "Help Spread Krishna Consciousness and serve humanity with compassion"
            </p>

            <Link href="/donate/make-donation" className="inline-block bg-[#FFB81C] text-[#3A3A3A] px-8 py-3 rounded-full font-semibold text-lg shadow-xl hover:bg-[#E5A519] transition-all duration-300 hover:scale-105 cursor-pointer">
                Donate Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative z-10">
        
        {/* Introduction Card - Sacred Scroll Style */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#FFF9F0] p-1.5 rounded-[2.5rem] shadow-2xl overflow-hidden mb-16 transform hover:scale-[1.002] transition-transform duration-500"
        >
          <div className="absolute inset-0 border-[6px] border-[#FFB81C]/20 rounded-[2.5rem] pointer-events-none"></div>
          <div className="absolute inset-3 border-[2px] border-[#FFB81C]/10 border-dashed rounded-[2rem] pointer-events-none"></div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] bg-repeat pointer-events-none"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <span className="text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Your Generosity</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#701a1a] mb-6 font-serif">
                Makes a <span className="text-[#FFB81C] italic">Difference</span>
              </h2>
              <div className="space-y-4 text-[#444444] text-base md:text-lg leading-relaxed">
                <p>
                  The Hare Krishna Movement Chennai relies on the generous support of devotees and well-wishers to continue
                  our spiritual programs, community service, and outreach activities. Your donation helps us spread Krishna
                  Consciousness and serve humanity with compassion.
                </p>
                <p>
                  Every contribution, no matter the size, is deeply appreciated and used responsibly to further our mission.
                  We maintain the highest standards of transparency and accountability in managing donations.
                </p>
              </div>
              <div className="h-1.5 w-24 bg-gradient-to-r from-[#FFB81C] to-transparent rounded-full mx-auto mt-8"></div>
            </div>
          </div>
        </motion.div>

        {/* Quick Links - Ways to Give */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Explore Options</span>
            <h3 className="text-2xl md:text-3xl font-bold text-[#701a1a] font-serif">Ways to <span className="text-[#FFB81C]">Give</span></h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationOptions.map((option, idx) => (
              <motion.div
                key={option.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={option.link}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-[#FFB81C]/30 hover:border-[#FFB81C] hover:scale-105 bg-gradient-to-br from-orange-50 to-white group">
                    <CardHeader className="text-center">
                      <div className="text-5xl mb-3">{option.icon}</div>
                      <CardTitle className="text-[#701a1a] text-xl font-serif group-hover:text-[#ea580c] transition-colors">{option.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-2">
                      <p className="text-[#666666] text-sm text-center">{option.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Giving Programs */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Recurring Support</span>
            <h3 className="text-2xl md:text-3xl font-bold text-[#701a1a] font-serif">Giving <span className="text-[#FFB81C]">Programs</span></h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {paymentMethods.map((method, idx) => (
              <motion.div
                key={method.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <Link href={method.link}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-[#FFB81C]/20 hover:border-[#FFB81C] bg-white group hover:-translate-y-2 overflow-hidden rounded-2xl">
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={method.image}
                        alt={method.name}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute bottom-0 left-0 w-full p-4 z-20 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-xl font-bold text-white font-serif tracking-wide text-center drop-shadow-md">{method.name}</h3>
                      </div>
                    </div>
                    <CardContent className="pt-6 pb-6 space-y-4 text-center">
                      <p className="text-[#666666] text-base">{method.description}</p>
                      <button className="w-full px-6 py-3 bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white rounded-full hover:from-[#d97706] hover:to-[#c2410c] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                        Learn More
                      </button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Where Your Donation Goes - Sacred Scroll Style */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#FFF9F0] p-1.5 rounded-[2.5rem] shadow-2xl overflow-hidden transform hover:scale-[1.002] transition-transform duration-500"
        >
          <div className="absolute inset-0 border-[6px] border-[#FFB81C]/20 rounded-[2.5rem] pointer-events-none"></div>
          <div className="absolute inset-3 border-[2px] border-[#FFB81C]/10 border-dashed rounded-[2rem] pointer-events-none"></div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] bg-repeat pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <span className="text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Transparency</span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#701a1a] font-serif">
                  Where Your Donation <span className="text-[#FFB81C]">Goes</span>
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {[
                  { title: "Spiritual Programs", desc: "Supporting classes, discourses, and meditation sessions." },
                  { title: "Community Service", desc: "Funding outreach programs and charitable initiatives." },
                  { title: "Youth Programs", desc: "Supporting FOLK and youth empowerment initiatives." },
                  { title: "Temple Operations", desc: "Maintaining our sacred space and daily activities." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#FFF9F0] p-4 rounded-xl border border-[#FFB81C]/20 flex items-center gap-4 hover:border-[#FFB81C] transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-[#FFB81C]/10 flex items-center justify-center text-[#d97706] group-hover:bg-[#FFB81C] group-hover:text-white transition-colors shrink-0">
                        <Sparkles size={20} className="fill-current" />
                    </div>
                    <div>
                      <p className="font-bold text-[#701a1a] text-lg font-serif">{item.title}</p>
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
