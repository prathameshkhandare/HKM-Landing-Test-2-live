"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

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
  },
  {
    name: "Sudama Seva",
    description: "Quarterly giving program",
    link: "/donate/sudama-seva",
  },
  {
    name: "Gopala Seva",
    description: "Annual giving program",
    link: "/donate/gopala-seva",
  },
]

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white text-[#3A3A3A] relative overflow-hidden">
      {/* Mandala pattern backgrounds */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-10 w-[350px] h-[350px] opacity-4">
          <img src="/assets/BlackWhiteMandalaPattern5.jpg" alt="" className="w-full h-full object-contain rotate-45 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
        </div>
        <div className="absolute bottom-20 left-10 w-[300px] h-[300px] opacity-3">
          <img src="/assets/BlackWhiteMandalaPattern6.jpg" alt="" className="w-full h-full object-contain -rotate-30 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
        </div>
      </div>

      <div className="relative z-10">
        <NavbarDemo />

        {/* Hero Section */}
        <section
          className="relative py-24 md:py-32 px-4 md:px-8 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/ancient-temple-spiritual-architecture.jpg')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
          <div className="relative max-w-6xl mx-auto text-center text-white">
            <div className="inline-block mb-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-2 !text-white">Support Our Mission</h1>
              <div className="h-1 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">Help Spread Krishna Consciousness</p>
            <Link href="/donate/how-to-donate">
              <button className="bg-[#FFB81C] text-[#3A3A3A] px-8 py-3 rounded-full font-semibold text-lg shadow-xl hover:bg-[#E5A519] transition-all duration-300 hover:scale-105">
                Donate Now
              </button>
            </Link>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          {/* Introduction */}
          <div className="mb-12 bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 md:p-10 shadow-lg border-2 border-[#1B7CB8]/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1B7CB8] pb-4 border-b-2 border-[#FFB81C]/30">
              Your Generosity Makes a Difference
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
          </div>

          {/* Quick Links */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-[#1B7CB8] text-center">Ways to Give</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {donationOptions.map((option) => (
                <Link key={option.link} href={option.link}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-[#FFB81C]/30 hover:border-[#FFB81C] hover:scale-105 bg-gradient-to-br from-orange-50 to-white">
                    <CardHeader className="text-center">
                      <div className="text-5xl mb-3">{option.icon}</div>
                      <CardTitle className="text-[#1B7CB8] text-xl">{option.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-2">
                      <p className="text-[#666666] text-sm text-center">{option.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Giving Programs */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-[#1B7CB8] text-center">Recurring Giving Programs</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {paymentMethods.map((method) => (
                <Link key={method.link} href={method.link}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-[#E8725C]/30 hover:border-[#E8725C] bg-gradient-to-br from-red-50 to-white">
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-[#1B7CB8] text-2xl">{method.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 space-y-4 text-center">
                      <p className="text-[#666666] text-base">{method.description}</p>
                      <button className="w-full px-6 py-3 bg-[#1B7CB8] text-white rounded-full hover:bg-[#156399] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                        Learn More
                      </button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Where Your Donation Goes */}
          <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-white rounded-2xl p-6 md:p-10 border-2 border-[#FFB81C]/40 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-[#1B7CB8] text-center pb-4 border-b-2 border-[#FFB81C]/30">
              Where Your Donation Goes
            </h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {[
                { title: "Spiritual Programs", desc: "Supporting classes, discourses, and meditation sessions." },
                { title: "Community Service", desc: "Funding outreach programs and charitable initiatives." },
                { title: "Youth Programs", desc: "Supporting FOLK and youth empowerment initiatives." },
                { title: "Temple Operations", desc: "Maintaining our sacred space and daily activities." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-white/60 p-4 rounded-xl">
                  <span className="text-[#FFB81C] font-bold text-3xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-bold text-[#1B7CB8] mb-2 text-lg">{item.title}</p>
                    <p className="text-[#666666]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FooterSection />
      </div>
    </div>
  )
}
