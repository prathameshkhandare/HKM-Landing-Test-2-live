"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, Sparkles, Check, AlertCircle, ArrowRight } from "lucide-react"

const section1Sevas = [
  {
    name: "Support Construction of Dakshina Dwaraka Dham",
    badge: "Construction",
    description: "An opportunity to participate in the temple project by donating for 1 sq.ft towards the construction of the magnificent Dakshina Dwaraka Dham.",
    amount: "Any Amount",
    link: "https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign",
    image: "/donate/temple_render.png",
  }
]

const section2Sevas = [
  {
    name: "Nitya Seva",
    badge: "Deity Worship",
    description: "Support the daily worship, bhoga offerings, arati, and grand festivals for Their Lordships Sri Sri Rukmini Dwarakashisha.",
    amount: "Any Amount",
    link: "/donate/deity-seva",
    image: "/donate/deities.jpg",
  },
  {
    name: "Youth Empowerment (FOLK)",
    badge: "Youth",
    description: "Empower the youth with scientific spiritual knowledge and values through our FOLK programs.",
    amount: "Any Amount",
    link: "https://pages.razorpay.com/pl_R4IdxTYoX0AorN/view",
    image: "/donate/folk_youth.jpg",
  },
  {
    name: "Sri Ram Navami Seva",
    badge: "Festival",
    description: "Celebrate the auspicious appearance of Lord Ramachandra by participating in divine offerings.",
    amount: "Any Amount",
    link: "/donate/ram-navami",
    image: "/donate/ram-navami/1.JPG",
  },
  /*
  {
    name: "Gaura Purnima Seva",
    badge: "Festival",
    description: "Receive the boundless mercy of Sri Chaitanya Mahaprabhu on His auspicious appearance day.",
    amount: "Any Amount",
    link: "/donate/gaura-purnima",
    image: "/assets/gaura-purnima/3.5.JPG",
  },
  {
    name: "Ratha Yatra Seva",
    badge: "Festival",
    description: "Experience the joy of serving the Lord of the Universe during the grand Ratha Yatra festival.",
    amount: "Any Amount",
    link: "/donate/ratha-yatra",
    image: "/assets/discover-v2/4.1_Ratha_Yatra.JPG",
  }
  */
]

const donationMethods = [
  {
    title: "Online Payment",
    description: "Secure online donations through Razorpay or CCAvenue",
    steps: [
      "Select your donation cause above",
      "Choose your donation amount",
      "Complete the secure transaction",
      "Receive instant confirmation",
    ],
  },
  {
    title: "Check or Draft",
    description: "Send a check or demand draft by mail",
    steps: [
      "Make check payable to 'Hare Krishna Movement Chennai'",
      "Mail to:connect@hkmchennai.org",
      "Include your contact details",
    ],
  }
]

const SevaCard = ({ seva }: { seva: any }) => (
  <Card className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-[#FFB81C]/20 group overflow-hidden relative rounded-2xl bg-white shadow-lg flex flex-col h-full ring-1 ring-black/5">
    <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        <Image
            src={seva.image}
            alt={seva.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute bottom-4 left-6 z-20">
            <div className="bg-[#FFB81C] w-12 h-12 rounded-full flex items-center justify-center shadow-lg mb-3 text-[#701a1a]">
                <Sparkles size={24} className="fill-current" />
            </div>
            <h3 className="text-white font-bold text-xl font-serif">{seva.badge}</h3>
        </div>
    </div>

    <CardContent className="pt-8 px-8 pb-8 flex-1 flex flex-col">
        <CardTitle className="text-2xl text-[#701a1a] font-serif leading-tight mb-4 group-hover:text-[#ea580c] transition-colors">
            {seva.name}
        </CardTitle>
        <p className="text-[#666666] leading-relaxed mb-6 font-medium flex-1">
            {seva.description}
        </p>
        
        {seva.amount !== "Any Amount" && (
            <span className="inline-block px-4 py-1.5 bg-[#FFF9F0] text-[#701a1a] rounded-full text-sm font-bold border border-[#FFB81C]/30 shadow-sm mb-6 w-max">
                {seva.amount}
            </span>
        )}

        {seva.link.startsWith("/") ? (
            <Link href={seva.link} className="mt-auto w-full py-3 px-2 bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white rounded-xl font-bold hover:from-[#d97706] hover:to-[#c2410c] transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-1 group-hover:gap-2 text-center whitespace-nowrap text-[10px] sm:text-xs lg:text-sm">
                Donate for {seva.badge} <ArrowRight size={14} className="flex-shrink-0" />
            </Link>
        ) : (
            <a href={seva.link} target="_blank" rel="noopener noreferrer" className="mt-auto w-full py-3 px-2 bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white rounded-xl font-bold hover:from-[#d97706] hover:to-[#c2410c] transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-1 group-hover:gap-2 text-center whitespace-nowrap text-[10px] sm:text-xs lg:text-sm">
                Donate for {seva.badge} <ArrowRight size={14} className="flex-shrink-0" />
            </a>
        )}
    </CardContent>
  </Card>
)

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans selection:bg-[#FFB81C] selection:text-white">
      <NavbarDemo />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#2D0A0A]">
        {/* Background - Saffron/Gold Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#701a1a] via-[#ea580c] to-[#b45309] opacity-90 pointer-events-none"></div>
        
        {/* Mandala Pattern Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow pointer-events-none"></div>
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 49px, #FFB81C 50px)' }}></div>

        {/* Central Divine Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFB81C] rounded-full blur-[120px] opacity-20 animate-pulse pointer-events-none"></div>

        <div className="container mx-auto text-center relative z-40 px-4 pt-24 md:pt-32">
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

            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] font-serif">
              Make a <span className="text-[#FFB81C] italic">Donation</span>
            </h1>
            
            {/* Ornamental Divider */}
            <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-[2px] w-16 bg-gradient-to-l from-[#FFB81C] to-transparent"></div>
                <div className="w-3 h-3 rotate-45 border-2 border-[#FFB81C]"></div>
                <div className="h-[2px] w-16 bg-gradient-to-r from-[#FFB81C] to-transparent"></div>
            </div>

            <p className="text-xl md:text-2xl text-[#ffe8cc] font-light max-w-3xl mx-auto leading-relaxed italic mb-8">
              "It doesn’t matter much whether you contribute publicly or in a private way – either way is good. What matters is your true intention."
            </p>
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

        {/* Section 1: Dakshina Dwaraka Dham temple Construction sevas */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Temple Project</span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#701a1a] font-serif inline-block relative">
              Dakshina Dwaraka Dham <span className="text-[#FFB81C]">Construction Sevas</span>
              <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent"></div>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {section1Sevas.map((seva, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <SevaCard seva={seva} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Sri Sri Rukhmini Dwarakadhish sevas */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Ongoing Services</span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#701a1a] font-serif inline-block relative">
              Sri Sri Rukhmini Dwarakadhish <span className="text-[#FFB81C]">Sevas</span>
              <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent"></div>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {section2Sevas.map((seva, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`${idx === 2 && section2Sevas.length === 3 ? 'md:col-span-2 lg:col-span-1 max-w-md mx-auto w-full' : ''}`}
              >
                <SevaCard seva={seva} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* How To Donate - "Sacred Scroll" Style */}
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

            <div className="relative z-10 mb-12 text-center">
                <span className="text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Alternative Methods</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#701a1a] font-serif">Other Ways to Give</h2>
                <p className="text-[#666666] mt-4 max-w-2xl mx-auto">We've made it simple for you to support our mission. Choose the method that works best for you.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 relative z-10">
                {donationMethods.map((method, index) => (
                    <div key={index} className="flex gap-6 p-6 rounded-2xl bg-[#F8F6F1] border border-[#FFB81C]/10 hover:border-[#FFB81C]/50 transition-all duration-300 hover:shadow-lg hover:bg-[#FFF9F0] group">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#701a1a] to-[#ea580c] text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform ring-4 ring-[#FFB81C]/10">
                                {index + 1}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#701a1a] mb-3 font-serif group-hover:text-[#ea580c] transition-colors">{method.title}</h3>
                            <p className="text-[#666666] mb-5 text-sm font-medium italic">{method.description}</p>
                            <ul className="space-y-3">
                                {method.steps.map((step, i) => (
                                    <li key={i} className="text-sm text-gray-700 flex items-start gap-3">
                                        <Check size={14} className="text-[#ea580c] mt-1 shrink-0 stroke-[3px]" />
                                        <span className="leading-snug font-medium">{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-orange-50 to-white rounded-xl border border-orange-100 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden shadow-sm">
                <div className="flex-shrink-0 bg-orange-100/50 p-3 rounded-full text-[#ea580c]">
                    <AlertCircle size={28} />
                </div>
                <div className="relative z-10 text-center md:text-left">
                    <h4 className="font-bold text-[#701a1a] text-lg mb-1 font-serif">Tax Benefits & Privacy</h4>
                    <p className="text-[#666666] text-sm leading-relaxed">
                        All contributions to HKM Chennai are tax exempt under section 80G of Income Tax Act.
                        Your privacy is paramount; we never share donor details.
                    </p>
                </div>
            </div>
          </div>
        </motion.div>

        {/* Where Your Donation Goes (Legacy specific) */}
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
