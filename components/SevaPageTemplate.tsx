"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import CampaignDonationWidget from "@/components/CampaignDonationWidget"

import { Check, Sparkles } from "lucide-react"

interface SevaPageTemplateProps {
  title: string
  subtitle?: string
  description: string
  benefits: { title: string; desc: string }[]
  image: string
  unitName: string
  unitPrice: number
  checkoutUrl: string
  donors: string[]
}

export default function SevaPageTemplate({
  title,
  subtitle = "Join our family of dedicated supporters",
  description,
  benefits,
  image,
  unitName,
  unitPrice,
  checkoutUrl,
  donors
}: SevaPageTemplateProps) {
  
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans selection:bg-[#FFB81C] selection:text-white">
      <NavbarDemo />

      {/* Hero Section - Saffron Gradient (Updated to match Yuga Dharma style) */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#2D0A0A]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#701a1a] via-[#ea580c] to-[#b45309] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] bg-cover opacity-10 animate-pulse-slow"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 49px, #FFB81C 50px)' }}></div>
        <div className="container mx-auto text-center relative z-10 px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
                {title}
            </h1>
            <div className="h-[2px] w-24 bg-[#FFB81C] mx-auto mb-6 opacity-60"></div>
            <p className="text-xl md:text-2xl text-[#ffe8cc] font-light max-w-3xl mx-auto italic">
                "{subtitle}"
            </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 -mt-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-12">
                {/* Image */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFB81C]/20 aspect-video relative group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                        <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#ea580c] to-[#d97706] rounded-full text-[10px] font-bold uppercase tracking-widest mb-2 shadow-lg">
                            Seva Opportunity
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <h2 className="text-3xl font-bold text-[#701a1a] mb-6 font-serif">About this Seva</h2>
                    <p className="text-lg text-[#666666] leading-relaxed whitespace-pre-line">
                        {description}
                    </p>
                </div>

                {/* Benefits */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#FFB81C]/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB81C]/5 rounded-bl-full pointer-events-none"></div>
                    <h3 className="text-2xl font-bold text-[#701a1a] mb-8 font-serif flex items-center gap-3">
                        <Sparkles className="text-[#FFB81C] fill-current" /> Spiritual Benefits
                    </h3>
                    <div className="grid gap-6">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="flex gap-4 items-start group">
                                <div className="w-10 h-10 rounded-full bg-[#FFF9F0] border border-[#FFB81C]/30 flex items-center justify-center text-[#d97706] shrink-0 group-hover:bg-[#FFB81C] group-hover:text-white transition-colors">
                                    <Check size={18} strokeWidth={3} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#2D0A0A] text-lg group-hover:text-[#ea580c] transition-colors">{benefit.title}</h4>
                                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Widget (Sticky) */}
            <div className="lg:col-span-5 relative z-20">
                <div className="sticky top-28">
                    <CampaignDonationWidget 
                        unitName={unitName}
                        unitPrice={unitPrice}
                        checkoutUrl={checkoutUrl}
                    />
                    
                    <div className="mt-6 text-center">
                        <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
                             <span className="w-2 h-2 rounded-full bg-green-500"></span>
                             Secure Payment Gateway • 80G Tax Exemption Available
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Wall of Gratitude Section */}
      <section className="bg-white py-20 border-t border-[#FFB81C]/10 relative">
          <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.02] bg-repeat pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
              <span className="text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Our Supporters</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#701a1a] mb-12 font-serif">
                  Wall of Gratitude
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                  {donors.map((donor, i) => (
                      <div key={i} className="p-4 rounded-xl bg-[#FFF9F0] border border-[#FFB81C]/10 text-[#4A3728] font-medium hover:bg-[#FFB81C]/10 hover:border-[#FFB81C]/30 transition-all cursor-default">
                          {donor}
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <FooterSection />
    </div>
  )
}
