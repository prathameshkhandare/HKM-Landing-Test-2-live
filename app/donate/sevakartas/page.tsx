import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const sevaPrograms = [
  {
    name: "Krishnalaya Seva",
    frequency: "One-time / Sq.ft",
    description: "An Opportunity to contribute for Construction of Cultural Complex",
    amounts: ["₹5000 / Sq.ft"],
    benefits: [
      "Sevakarta names will be inscribed",
      "Get the blessings of Their Lordships",
      "Certificate of Appreciation",
    ],
    link: "https://formbuilder.ccavenue.com/live/indian-bank/hare-krishna-movement-chennai",
  },
  {
    name: "Pandava Seva",
    frequency: "Monthly",
    description: "Donate monthly Rs. 10000.00",
    amounts: ["₹10,000 / Monthly"],
    benefits: [
      "Get the blessings of Their Lordships",
      "Special Archana on birthdays",
      "Prasadam delivery",
    ],
    link: "https://formbuilder.ccavenue.com/live/indian-bank/hare-krishna-movement-chennai/pandava-seva",
  },
  {
    name: "Sudama Seva",
    frequency: "Monthly",
    description: "Donate monthly Rs. 5000.00",
    amounts: ["₹5000 / Monthly"],
    benefits: [
      "Get the blessings of Their Lordships",
      "Special prayers",
    ],
    link: "https://formbuilder.ccavenue.com/live/indian-bank/hare-krishna-movement-chennai/sudama-seva",
  },
  {
    name: "Gopala Seva",
    frequency: "Monthly",
    description: "Donate monthly Rs. 1000.00",
    amounts: ["₹1000 / Monthly"],
    benefits: [
      "Get the blessings of Their Lordships",
      "Support daily bhoga",
    ],
    link: "https://formbuilder.ccavenue.com/live/indian-bank/hare-krishna-movement-chennai/gopala-seva",
  },
]

export default function SevaKartas() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#3A3A3A] font-sans selection:bg-[#FFB81C] selection:text-white">
      <NavbarDemo />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-[#001E36] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/10BlackWhiteMandalaPattern1.jpg')] bg-cover animate-pulse-slow"></div>
        <div className="container mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-medium tracking-wider mb-6">
             SPIRITUAL GIVING
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-[#FBB201] mb-6 font-serif tracking-tight drop-shadow-sm">
            SevaKartas
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light max-w-2xl mx-auto leading-relaxed">
            Join our family of dedicated supporters ensuring the continuity of our spiritual mission.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative z-10">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B7CB8] font-serif mb-6">Become a Pillar of Devotion</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                SevaKartas are dedicated supporters who commit to regular giving to support our spiritual mission. 
                By becoming a SevaKarta, you become part of our extended spiritual family.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent mx-auto"></div>
        </div>

        {/* Seva Programs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {sevaPrograms.map((program) => (
            <Card key={program.name} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col group overflow-hidden bg-white relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1B7CB8] to-[#FFB81C] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <CardHeader className="bg-gradient-to-b from-[#FFF9F0] to-white pb-6 pt-8 text-center relative">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFB81C]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                 <h3 className="text-xl font-bold text-[#1B7CB8] font-serif mb-2 group-hover:text-[#E8725C] transition-colors">{program.name}</h3>
                 <p className="text-sm font-semibold tracking-wide text-gray-400 uppercase">{program.frequency}</p>
              </CardHeader>
              
              <CardContent className="pt-6 px-6 pb-8 flex-1 flex flex-col">
                <p className="text-gray-600 mb-6 text-center text-sm leading-relaxed min-h-[40px]">{program.description}</p>

                <div className="mb-6 flex-grow">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {program.amounts.map((amount) => (
                      <span key={amount} className="px-3 py-1 bg-[#F0F7FA] text-[#0f5480] rounded-lg text-sm font-semibold border border-[#E1F0F7]">
                        {amount}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8 space-y-3">
                    {program.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-gray-500">
                        <span className="text-[#FFB81C] mt-0.5 flex-shrink-0">✦</span>
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                </div>

                <a href={program.link} target="_blank" rel="noopener noreferrer" className="mt-auto relative z-10 block">
                  <button className="w-full py-3.5 bg-[#1B7CB8] text-white rounded-xl hover:bg-[#156399] transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform active:scale-[0.98]">
                    Donate Now
                  </button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why SevaKarta */}
        <div className="bg-[#1B7CB8] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/temple-pattern.PNG')] opacity-10 bg-repeat"></div>
             <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                 <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-[#FFB81C]">Why Become a SevaKarta?</h3>
                    <p className="text-blue-100 text-lg leading-relaxed mb-8">
                        Your regular contributions ensure our programs continue year-round, allowing us to plan effectively and serve more people.
                    </p>
                 </div>
                 <div className="grid gap-4">
                    {[
                        { title: "Consistent Impact", desc: "Sustain daily temple operations & feeding." },
                        { title: "Spiritual Growth", desc: "Regular giving purifies the heart." },
                        { title: "Community", desc: "Join an exclusive circle of supporters." },
                        { title: "Tax Benefits", desc: "100% Tax Exemption under 80G." }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 flex items-center gap-4 hover:bg-white/20 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-[#FFB81C] flex items-center justify-center text-[#1B7CB8] font-bold text-xl">✓</div>
                            <div>
                                <h4 className="font-bold text-white text-base">{item.title}</h4>
                                <p className="text-blue-100 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                 </div>
             </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
