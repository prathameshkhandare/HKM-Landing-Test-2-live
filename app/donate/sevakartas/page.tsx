import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const sevaPrograms = [
  {
    name: "Pandava Seva",
    frequency: "Monthly",
    description: "Support our mission with a monthly contribution",
    amounts: [500, 1000, 2500, 5000, 10000],
    benefits: [
      "Monthly receipt and impact report",
      "Recognition in our newsletter",
      "Special blessings from the temple",
      "Invitation to exclusive events",
    ],
    link: "/donate/pandava-seva",
  },
  {
    name: "Sudama Seva",
    frequency: "Quarterly",
    description: "Make a difference with quarterly giving",
    amounts: [2000, 5000, 10000, 25000, 50000],
    benefits: [
      "Quarterly impact reports",
      "Recognition in our community",
      "Special puja offerings",
      "VIP event invitations",
    ],
    link: "/donate/sudama-seva",
  },
  {
    name: "Gopala Seva",
    frequency: "Annual",
    description: "Commit to annual support for our programs",
    amounts: [5000, 10000, 25000, 50000, 100000],
    benefits: [
      "Annual recognition ceremony",
      "Detailed annual report",
      "Special blessing from spiritual leaders",
      "Lifetime recognition plaque",
    ],
    link: "/donate/gopala-seva",
  },
]

export default function SevaKartas() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A]">
      <NavbarDemo />

      {/* Hero Section */}
      <section
        className="relative py-20 px-4 md:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?key=seva')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">SevaKartas</h1>
          <p className="text-xl md:text-2xl text-gray-100">Recurring Giving Programs</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="mb-12 bg-white rounded-lg p-8 border-l-4 border-[#FFB81C]">
          <h2 className="text-2xl font-bold mb-4 text-[#1B7CB8]">Become a SevaKarta</h2>
          <p className="text-[#666666] leading-relaxed mb-4">
            SevaKartas are dedicated supporters who commit to regular giving to support our spiritual mission. By
            becoming a SevaKarta, you become part of our extended spiritual family and help ensure the continuity of our
            programs.
          </p>
          <p className="text-[#666666] leading-relaxed">
            Choose from our three giving programs based on your capacity and commitment level. All SevaKartas receive
            special recognition and regular updates on how their contributions are making a difference.
          </p>
        </div>

        {/* Seva Programs */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {sevaPrograms.map((program) => (
            <Card key={program.name} className="border-[#FFB81C] border-2 flex flex-col">
              <CardHeader className="bg-gradient-to-br from-[#FFF9F0] to-white">
                <CardTitle className="text-[#1B7CB8]">{program.name}</CardTitle>
                <p className="text-[#E8725C] font-semibold mt-2">{program.frequency}</p>
              </CardHeader>
              <CardContent className="pt-6 flex-1 flex flex-col">
                <p className="text-[#666666] mb-6">{program.description}</p>

                <div className="mb-6">
                  <p className="font-semibold text-[#3A3A3A] mb-3">Suggested Amounts:</p>
                  <div className="flex flex-wrap gap-2">
                    {program.amounts.map((amount) => (
                      <span key={amount} className="px-3 py-1 bg-[#FFF9F0] text-[#1B7CB8] rounded text-sm">
                        ₹{amount.toLocaleString()}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="font-semibold text-[#3A3A3A] mb-3">Benefits:</p>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, i) => (
                      <li key={i} className="text-[#666666] text-sm flex gap-2">
                        <span className="text-[#E8725C]">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={program.link} className="mt-auto">
                  <button className="w-full px-4 py-2 bg-[#1B7CB8] text-white rounded hover:bg-[#E8725C] transition-colors">
                    Join Now
                  </button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why SevaKarta */}
        <div className="bg-gradient-to-r from-[#FFF9F0] to-white rounded-lg p-8 border-2 border-[#FFB81C]">
          <h3 className="text-2xl font-bold mb-6 text-[#1B7CB8]">Why Become a SevaKarta?</h3>
          <div className="grid md:grid-cols-2 gap-6 text-[#666666]">
            <div className="flex gap-4">
              <span className="text-[#E8725C] font-bold text-2xl">✓</span>
              <div>
                <p className="font-semibold text-[#3A3A3A] mb-1">Consistent Impact</p>
                <p>Your regular contributions ensure our programs continue year-round.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-[#E8725C] font-bold text-2xl">✓</span>
              <div>
                <p className="font-semibold text-[#3A3A3A] mb-1">Spiritual Growth</p>
                <p>Regular giving is a spiritual practice that deepens your connection to Krishna.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-[#E8725C] font-bold text-2xl">✓</span>
              <div>
                <p className="font-semibold text-[#3A3A3A] mb-1">Community Recognition</p>
                <p>SevaKartas are honored members of our spiritual family.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-[#E8725C] font-bold text-2xl">✓</span>
              <div>
                <p className="font-semibold text-[#3A3A3A] mb-1">Tax Benefits</p>
                <p>All contributions are tax-deductible under Section 80G.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
