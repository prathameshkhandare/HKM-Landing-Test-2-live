"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Heart, Landmark, Users } from "lucide-react"

const donationMethods = [
  {
    title: "Online Payment",
    description: "Secure online donations through Razorpay or CCAvenue",
    steps: [
      "Select your donation cause below",
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
      "Acc No: 1234567890",
      "IFSC: HDFC0001234",
      "Email us transaction details",
    ],
  },
  {
    title: "Check or Draft",
    description: "Send a check or demand draft by mail",
    steps: [
      "Make check payable to 'HKM Chennai'",
      "Mail to: 63, 1st Seaward Rd, Valmiki Nagar, Thiruvanmiyur, Chennai",
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
    <div className="min-h-screen bg-[#FDFBF7] text-[#3A3A3A] font-sans selection:bg-[#FFB81C] selection:text-white">
      <NavbarDemo />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-[#001E36] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/10BlackWhiteMandalaPattern1.jpg')] bg-cover animate-pulse-slow"></div>
        <div className="container mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-[#FBB201] mb-6 font-serif tracking-tight drop-shadow-md">
                Make a Donation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-medium max-w-3xl mx-auto leading-relaxed italic">
                "It doesn’t matter much whether you contribute publicly or in a private way – either way is good. What matters is your true intention."
            </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20 -mt-10 relative z-10">
        
        {/* Primary Donation Causes (From Reference) */}
        <div className="mb-24">
            <h2 className="text-3xl font-bold text-center text-[#1B7CB8] mb-12 font-serif">
                Choose a Cause to Support
                <span className="block h-1.5 w-20 bg-[#FFB81C] mt-4 mx-auto rounded-full"></span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {/* 1. Seva */}
                <Card className="hover:shadow-2xl transition-all duration-500 border-0 group overflow-hidden relative rounded-2xl bg-white shadow-lg flex flex-col h-full">
                    <div className="absolute top-0 left-0 w-full h-2 bg-[#FFB81C] transform scale-x-100 group-hover:h-3 transition-getAll"></div>
                    
                    <CardHeader className="text-center pt-10 pb-2">
                        <div className="text-[#FFB81C] mx-auto mb-6 bg-[#FFB81C]/10 p-5 rounded-full w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <Heart size={40} />
                        </div>
                        <CardTitle className="text-2xl text-[#1B7CB8] font-serif leading-tight px-4">Sri Sri Rukmini Dwarakashisha Seva</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pb-10 px-8 flex-1 flex flex-col">
                        <p className="text-gray-600 leading-relaxed mb-8">Support the daily worship, bhoga offerings, and festivals for Their Lordships.</p>
                        <Link href="/dakshina-dwaraka#contribute" className="mt-auto block w-full py-4 bg-[#1B7CB8] text-white rounded-xl font-bold hover:bg-[#156399] transition-all shadow-md hover:shadow-lg transform active:scale-[0.98]">
                            Donate for Aarthi / Bhoga
                        </Link>
                    </CardContent>
                </Card>

                {/* 2. Cultural Complex */}
                <Card className="hover:shadow-2xl transition-all duration-500 border-0 group overflow-hidden relative rounded-2xl bg-white shadow-lg flex flex-col h-full">
                    <div className="absolute top-0 left-0 w-full h-2 bg-[#E8725C] transform scale-x-100 group-hover:h-3 transition-getAll"></div>

                    <CardHeader className="text-center pt-10 pb-2">
                        <div className="text-[#E8725C] mx-auto mb-6 bg-[#E8725C]/10 p-5 rounded-full w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <Landmark size={40} />
                        </div>
                        <CardTitle className="text-2xl text-[#1B7CB8] font-serif leading-tight px-4">Cultural Complex Fund</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pb-10 px-8 flex-1 flex flex-col">
                        <p className="text-gray-600 leading-relaxed mb-8">Contribute towards the construction and maintenance of our spiritual and cultural complex.</p>
                        <Link href="/donate/sevakartas" className="mt-auto block w-full py-4 bg-[#E8725C] text-white rounded-xl font-bold hover:bg-[#c65e4a] transition-all shadow-md hover:shadow-lg transform active:scale-[0.98]">
                            Donate for Construction
                        </Link>
                    </CardContent>
                </Card>

                {/* 3. FOLK */}
                <Card className="hover:shadow-2xl transition-all duration-500 border-0 group overflow-hidden relative rounded-2xl bg-white shadow-lg flex flex-col h-full">
                    <div className="absolute top-0 left-0 w-full h-2 bg-[#2E8B57] transform scale-x-100 group-hover:h-3 transition-getAll"></div>

                    <CardHeader className="text-center pt-10 pb-2">
                        <div className="text-[#2E8B57] mx-auto mb-6 bg-[#2E8B57]/10 p-5 rounded-full w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <Users size={40} />
                        </div>
                        <CardTitle className="text-2xl text-[#1B7CB8] font-serif leading-tight px-4">Youth Empowerment (FOLK)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pb-10 px-8 flex-1 flex flex-col">
                        <p className="text-gray-600 leading-relaxed mb-8">Empower the youth with spiritual knowledge and values through our FOLK programs.</p>
                        <a href="https://pages.razorpay.com/pl_R4IdxTYoX0AorN/view" target="_blank" rel="noopener noreferrer" className="mt-auto block w-full py-4 bg-[#2E8B57] text-white rounded-xl font-bold hover:bg-[#236b42] transition-all shadow-md hover:shadow-lg transform active:scale-[0.98]">
                            Donate for Youth
                        </a>
                    </CardContent>
                </Card>
            </div>
        </div>

        {/* How To Donate (Merged Content) */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDFBF7] rounded-full -mr-20 -mt-20 opacity-50"></div>
             
             <div className="relative z-10 mb-16 border-l-8 border-[#FFB81C] pl-6 md:pl-10">
                <h2 className="text-3xl font-bold mb-4 text-[#1B7CB8] font-serif">Other Ways to Give</h2>
                <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                    We've made it simple for you to support our mission. Don't prefer online payments? Choose the method that works best for you. 
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {donationMethods.map((method, index) => (
                <div key={index} className="flex gap-6 p-8 rounded-2xl bg-[#F8F6F1] border border-transparent hover:border-[#FFB81C]/50 transition-all duration-300 hover:shadow-lg hover:bg-white group">
                    <div className="flex-shrink-0">
                         <div className="w-10 h-10 rounded-full bg-[#1B7CB8] text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                            {index + 1}
                         </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#3A3A3A] mb-3 font-serif group-hover:text-[#1B7CB8] transition-colors">{method.title}</h3>
                        <p className="text-gray-500 mb-5 text-sm font-medium">{method.description}</p>
                        <ul className="space-y-3">
                             {method.steps.map((step, i) => (
                                <li key={i} className="text-sm text-gray-600 flex items-start gap-3">
                                     <span className="w-1.5 h-1.5 rounded-full bg-[#FFB81C] mt-1.5 flex-shrink-0"></span>
                                     <span className="leading-snug">{step}</span>
                                </li>
                             ))}
                        </ul>
                    </div>
                </div>
            ))}
            </div>

             {/* Important Note */}
             <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-white rounded-2xl border border-blue-100 flex flex-col md:flex-row items-start gap-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('/assets/temple-pattern.PNG')] opacity-5"></div>
                
                <div className="flex-shrink-0 bg-blue-100 p-4 rounded-full text-[#1B7CB8] relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                </div>
                <div className="relative z-10">
                     <h4 className="font-bold text-[#1B7CB8] text-xl mb-3 font-serif">Tax Benefits & Privacy</h4>
                     <p className="text-gray-700 text-base leading-relaxed max-w-3xl">
                        All contributions to HKM Chennai are tax exempt under section 80G of Income Tax Act. 
                        Your privacy is paramount; we never share donor details with third parties. 
                        Receipts will be sent to your registered email or address.
                     </p>
                </div>
             </div>
        </div>

      </section>

      <FooterSection />
    </div>
  )
}
