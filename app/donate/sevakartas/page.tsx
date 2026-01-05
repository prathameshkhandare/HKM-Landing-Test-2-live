"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Sparkles, Flower, Heart, Check } from "lucide-react"
import Link from "next/link"

const sevaPrograms = [
  {
    name: "Krishnalaya Seva",
    frequency: "One-time / Sq.ft",
    description: "An Opportunity to contribute for Construction of Cultural Complex",
    amounts: ["₹5000 / Sq.ft"],
    image: "/donate/krishnalaya_seva.png",
    benefits: [
      "Sevakarta names will be inscribed",
      "Get the blessings of Their Lordships",
      "Certificate of Appreciation",
    ],
    link: "/donate/sevakartas/krishnalaya",
  },
  {
    name: "Pandava Seva",
    frequency: "Monthly",
    description: "Donate monthly Rs. 10000.00",
    amounts: ["₹10,000 / Monthly"],
    image: "/donate/pandava_seva.jpg",
    benefits: [
      "Get the blessings of Their Lordships",
      "Special Archana on birthdays for family",
      "Prasadam delivery to your home",
    ],
    link: "/donate/sevakartas/pandava",
  },
  {
    name: "Sudama Seva",
    frequency: "Monthly",
    description: "Donate monthly Rs. 5000.00",
    amounts: ["₹5000 / Monthly"],
    image: "/donate/sudama_seva.jpg",
    benefits: [
      "Get the blessings of Their Lordships",
      "Special prayers on auspicious days",
    ],
    link: "/donate/sevakartas/sudama",
  },
  {
    name: "Gopala Seva",
    frequency: "Monthly",
    description: "Donate monthly Rs. 1000.00",
    amounts: ["₹1000 / Monthly"],
    image: "/donate/gopala_seva.jpg",
    benefits: [
      "Get the blessings of Their Lordships",
      "Support daily bhoga offering",
    ],
    link: "/donate/sevakartas/gopala",
  },
  {
    name: "General Donation",
    frequency: "Any Amount",
    description: "Donate for DAKṢIṆA DVĀRAKĀ",
    amounts: ["Custom Amount"],
    image: "/donate/general_donation.png",
    benefits: [
      "Contribute to Cultural Complex Construction",
      "Get the blessings of Sri Sri Rukmini Dwarakadhish",
    ],
    link: "/donate/sevakartas/general-donation",
  },
]

export default function SevaKartasPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans selection:bg-[#FFB81C] selection:text-white">
      <NavbarDemo />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#FFB81C]">
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFB81C] via-[#ea580c] to-[#FFB81C] opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-60"></div>
        
        {/* Patterns */}
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow"></div>
        
        <div className="container mx-auto text-center relative z-10 px-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 border border-white/40 text-white text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm shadow-sm">
                 Divine Service
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#4A3728] mb-6 font-serif tracking-tight drop-shadow-sm">
                Seva-<span className="text-white italic">Kartas</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#4A3728]/90 font-medium max-w-3xl mx-auto leading-relaxed italic">
                "Join our family of dedicated supporters ensuring the continuity of our spiritual mission."
            </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative z-10 -mt-20">
        
        {/* Seva Programs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mb-24">
          {sevaPrograms.map((program) => (
            <Card key={program.name} className="border-2 border-[#FFB81C]/20 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col group overflow-hidden bg-white rounded-2xl ring-1 ring-black/5">
              
              <div className="relative h-64 overflow-hidden">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img 
                    src={program.image}
                    alt={program.name}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute bottom-0 left-0 w-full p-4 z-20 bg-gradient-to-t from-black/80 to-transparent">
                     <h3 className="text-2xl font-bold text-white font-serif tracking-wide text-center drop-shadow-md">{program.name}</h3>
                 </div>
              </div>
              
              <CardContent className="pt-6 px-6 pb-8 flex-1 flex flex-col bg-white">
                <p className="text-xs font-bold tracking-widest text-[#ea580c] uppercase text-center mb-4">{program.frequency}</p>
                <p className="text-gray-600 mb-6 text-center text-sm leading-relaxed min-h-[40px] font-medium">{program.description}</p>

                <div className="mb-6 flex-grow">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {program.amounts.map((amount) => (
                      <span key={amount} className="px-4 py-1.5 bg-[#FFF9F0] text-[#701a1a] rounded-full text-xs font-bold border border-[#FFB81C]/30 shadow-sm">
                        {amount}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8 space-y-3 bg-[#FDFBF7] p-4 rounded-xl border border-[#FFB81C]/10">
                    {program.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs text-gray-600">
                        <span className="text-[#FFB81C] mt-0.5 flex-shrink-0">
                            <Sparkles size={12} className="fill-current" />
                        </span>
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                </div>

                {program.link.startsWith("/") ? (
                  <Link href={program.link} className="mt-auto relative z-10 block">
                    <button className="w-full py-3 bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white rounded-xl hover:from-[#d97706] hover:to-[#c2410c] transition-all duration-300 font-bold shadow-md hover:shadow-lg transform active:scale-[0.98] flex items-center justify-center gap-2 uppercase tracking-wide text-xs">
                      <Heart size={14} className="fill-current animate-pulse" /> Donate Now
                    </button>
                  </Link>
                ) : (
                  <a href={program.link} target="_blank" rel="noopener noreferrer" className="mt-auto relative z-10 block">
                    <button className="w-full py-3 bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white rounded-xl hover:from-[#d97706] hover:to-[#c2410c] transition-all duration-300 font-bold shadow-md hover:shadow-lg transform active:scale-[0.98] flex items-center justify-center gap-2 uppercase tracking-wide text-xs">
                      <Heart size={14} className="fill-current animate-pulse" /> Donate Now
                    </button>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sevakartas List Banner */}
        <div className="mb-20">
            <Link href="/donate/sevakartas/krishnalaya">
                <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer h-[400px] border-4 border-[#FFB81C]/30">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src="/donate/krishnalaya_temple.png" 
                            alt="Krishnalaya Temple" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 max-w-2xl">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#FFB81C] text-[#701a1a] text-xs font-bold tracking-widest uppercase mb-4 w-max">
                            Wall of Gratitude
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif leading-tight">
                            KRISHNALAYA <br/>
                            <span className="text-[#FFB81C]">SEVAKARTAS</span>
                        </h2>
                        <p className="text-gray-200 text-lg mb-8 font-medium">
                            With hearts full of devotion, these souls have helped build the divine abode. View the list of our cherished donors.
                        </p>
                        
                        <div className="bg-white text-[#701a1a] px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-[#FFB81C] hover:text-white transition-all duration-300 w-max flex items-center gap-2">
                            Click Here to View Names <Heart size={16} className="fill-current" />
                        </div>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#FFB81C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
            </Link>
        </div>

        {/* Why SevaKarta - Sacred Scroll Style */}
        <div className="relative bg-[#FFF9F0] p-1.5 rounded-[2.5rem] shadow-2xl overflow-hidden mb-12 transform hover:scale-[1.002] transition-transform duration-500">
             <div className="absolute inset-0 border-[6px] border-[#FFB81C]/20 rounded-[2.5rem] pointer-events-none"></div>
             <div className="absolute inset-3 border-[2px] border-[#FFB81C]/10 border-dashed rounded-[2rem] pointer-events-none"></div>

             <div className="bg-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                 <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] bg-repeat pointer-events-none"></div>
                 
                 <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                     <div>
                        <span className="text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Benefits of Giving</span>
                        <h3 className="text-3xl md:text-5xl font-bold mb-6 font-serif text-[#2D0A0A]">
                            Why Become a <span className="text-[#FFB81C] italic">Seva-Karta?</span>
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                            Your regular contributions ensure our programs continue year-round, allowing us to plan effectively and serve more people.
                        </p>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-[#FFB81C] to-transparent rounded-full"></div>
                     </div>
                     <div className="grid gap-4">
                        {[
                            { title: "Consistent Impact", desc: "Sustain daily temple operations & feeding." },
                            { title: "Spiritual Growth", desc: "Regular giving purifies the heart." },
                            { title: "Community", desc: "Join an exclusive circle of supporters." },
                            { title: "Tax Benefits", desc: "100% Tax Exemption under 80G." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#FFF9F0] p-4 rounded-xl border border-[#FFB81C]/20 flex items-center gap-4 hover:border-[#FFB81C] transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-[#FFB81C]/10 flex items-center justify-center text-[#d97706] group-hover:bg-[#FFB81C] group-hover:text-white transition-colors">
                                    <Check size={20} strokeWidth={3} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#2D0A0A] text-lg font-serif">{item.title}</h4>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </div>
                            </div>
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
