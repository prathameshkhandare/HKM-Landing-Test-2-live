"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Heart, Landmark, Users, Check, Sparkles, AlertCircle, ArrowRight } from "lucide-react"

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
    title: "Bank Transfer",
    description: "Direct transfer to our temple account",
    steps: [
      "Account Name: ISKCON Chennai",
      "Bank: HDFC Bank",
      "Acc No: 000000000000",
      "IFSC: HDFC0001234",
      "Email us transaction details",
    ],
  },
  {
    title: "Check or Draft",
    description: "Send a check or demand draft by mail",
    steps: [
      "Make check payable to 'HKM Chennai'",
      "Mail to: HKM Chennai, Valmiki Nagar, Thiruvanmiyur",
      "Include your contact details",
    ],
  },
  {
    title: "In-Person Donation",
    description: "Visit our temple and donate directly",
    steps: [
      "Visit our temple at Thiruvanmiyur",
      "Visit the donation counter",
      "Make your offering",
      "Receive prasadam",
    ],
  },
]

export default function MakeDonationPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans selection:bg-[#FFB81C] selection:text-white">
      <NavbarDemo />

      {/* Hero Section - Saffron Theme */}
      <section className="relative h-[50vh] min-h-[400px] pt-32 flex items-center justify-center overflow-hidden bg-[#2D0A0A]">
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#701a1a] via-[#ea580c] to-[#b45309] opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FFB81C]/20 via-transparent to-transparent opacity-60"></div>
        
        {/* Patterns */}
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow"></div>
        
        <div className="container mx-auto text-center relative z-10 px-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(255,184,28,0.3)]">
                 Heart of Devotion
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif tracking-tight drop-shadow-lg">
                Make a <span className="text-[#FFB81C] italic">Donation</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#ffe8cc] font-light max-w-3xl mx-auto leading-relaxed italic">
                "It doesn’t matter much whether you contribute publicly or in a private way – either way is good. What matters is your true intention."
            </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20 -mt-20 relative z-10">
        
        {/* Primary Donation Causes (Images Added) */}
        <div className="mb-24">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-[#701a1a] font-serif inline-block relative">
                   Choose a Cause to Support
                   <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent"></div>
               </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* 1. Seva - Deities Image */}
                <Card className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-[#FFB81C]/20 group overflow-hidden relative rounded-2xl bg-white shadow-lg flex flex-col h-full ring-1 ring-black/5">
                    <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <Image 
                           src="/donate/deities.jpg" 
                           alt="Sri Sri Rukmini Dwarakashisha" 
                           fill 
                           className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute bottom-4 left-6 z-20">
                            <div className="bg-[#FFB81C] w-12 h-12 rounded-full flex items-center justify-center shadow-lg mb-3 text-[#701a1a]">
                                <Heart size={24} className="fill-current" />
                            </div>
                            <h3 className="text-white font-bold text-xl font-serif">Deity Worship</h3>
                        </div>
                    </div>
                    
                    <CardContent className="pt-8 px-8 pb-8 flex-1 flex flex-col">
                        <CardTitle className="text-2xl text-[#701a1a] font-serif leading-tight mb-4 group-hover:text-[#ea580c] transition-colors">
                            Sri Sri Rukmini Dwarakashisha Seva
                        </CardTitle>
                        <p className="text-[#666666] leading-relaxed mb-8 font-medium">
                            Support the daily worship, bhoga offerings, arati, and grand festivals for Their Lordships.
                        </p>
                        <Link href="/dakshina-dwaraka#contribute" className="mt-auto block w-full py-4 bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white rounded-xl font-bold hover:from-[#d97706] hover:to-[#c2410c] transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 group-hover:gap-3 text-center">
                                 Donate for Deity Seva <ArrowRight size={18} />
                        </Link>
                    </CardContent>
                </Card>

                {/* 2. Cultural Complex - Temple Render Image */}
                <Card className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-[#FFB81C]/20 group overflow-hidden relative rounded-2xl bg-white shadow-lg flex flex-col h-full ring-1 ring-black/5">
                    <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <Image 
                           src="/donate/temple_render.png" 
                           alt="Cultural Complex" 
                           fill 
                           className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute bottom-4 left-6 z-20">
                            <div className="bg-[#FFB81C] w-12 h-12 rounded-full flex items-center justify-center shadow-lg mb-3 text-[#701a1a]">
                                <Landmark size={24} className="fill-current" />
                            </div>
                            <h3 className="text-white font-bold text-xl font-serif">Construction</h3>
                        </div>
                    </div>

                    <CardContent className="pt-8 px-8 pb-8 flex-1 flex flex-col">
                        <CardTitle className="text-2xl text-[#701a1a] font-serif leading-tight mb-4 group-hover:text-[#ea580c] transition-colors">
                            Cultural Complex Fund
                        </CardTitle>
                        <p className="text-[#666666] leading-relaxed mb-8 font-medium">
                            Contribute towards the construction of the magnificent Dakshina Dwaraka Dham spiritual complex.
                        </p>
                        <Link href="/donate/sevakartas" className="mt-auto block w-full py-4 bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white rounded-xl font-bold hover:from-[#d97706] hover:to-[#c2410c] transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 group-hover:gap-3 text-center">
                                 Donate for Construction <ArrowRight size={18} />
                        </Link>
                    </CardContent>
                </Card>

                {/* 3. FOLK - Youth Image */}
                <Card className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-[#FFB81C]/20 group overflow-hidden relative rounded-2xl bg-white shadow-lg flex flex-col h-full ring-1 ring-black/5">
                    <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <Image 
                           src="/donate/folk_youth.jpg" 
                           alt="FOLK Youth" 
                           fill 
                           className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute bottom-4 left-6 z-20">
                            <div className="bg-[#FFB81C] w-12 h-12 rounded-full flex items-center justify-center shadow-lg mb-3 text-[#701a1a]">
                                <Users size={24} className="fill-current" />
                            </div>
                            <h3 className="text-white font-bold text-xl font-serif">Youth Empowerment</h3>
                        </div>
                    </div>

                    <CardContent className="pt-8 px-8 pb-8 flex-1 flex flex-col">
                        <CardTitle className="text-2xl text-[#701a1a] font-serif leading-tight mb-4 group-hover:text-[#ea580c] transition-colors">
                            Youth Empowerment (FOLK)
                        </CardTitle>
                        <p className="text-[#666666] leading-relaxed mb-8 font-medium">
                            Empower the youth with scientific spiritual knowledge and values through our FOLK programs.
                        </p>
                        <a href="https://pages.razorpay.com/pl_R4IdxTYoX0AorN/view" target="_blank" rel="noopener noreferrer" className="mt-auto block w-full py-4 bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white rounded-xl font-bold hover:from-[#d97706] hover:to-[#c2410c] transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 group-hover:gap-3 text-center">
                                 Donate for Youth <ArrowRight size={18} />
                        </a>
                    </CardContent>
                </Card>
            </div>
        </div>

        {/* How To Donate - "Sacred Scroll" Style */}
        <div className="relative bg-[#FFF9F0] p-1.5 rounded-[2.5rem] shadow-2xl overflow-hidden mb-12 transform hover:scale-[1.005] transition-transform duration-500">
             {/* Note: Reusing the beautiful scroll container style from other pages */}
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

                 {/* Important Note */}
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
        </div>

      </section>

      <FooterSection />
    </div>
  )
}
