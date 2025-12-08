import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const donationMethods = [
  {
    title: "Online Payment",
    description: "Secure online donations through Razorpay or CCAvenue",
    steps: [
      "Visit our donation page",
      "Select your donation amount",
      "Choose your payment method",
      "Complete the secure transaction",
      "Receive confirmation and receipt",
    ],
  },
  {
    title: "Bank Transfer",
    description: "Direct transfer to our temple account",
    steps: [
      "Contact us for bank details",
      "Transfer funds to our account",
      "Send us a confirmation email",
      "We'll send you a receipt",
      "Your donation is tax-deductible",
    ],
  },
  {
    title: "Check or Draft",
    description: "Send a check or demand draft by mail",
    steps: [
      "Make check payable to HKM Chennai",
      "Mail to our temple address",
      "Include your contact information",
      "We'll acknowledge receipt",
      "Receive tax receipt by mail",
    ],
  },
  {
    title: "In-Person Donation",
    description: "Visit our temple and donate directly",
    steps: [
      "Visit our temple during office hours",
      "Speak with our staff",
      "Make your donation",
      "Receive immediate receipt",
      "Join us for prasadam",
    ],
  },
]

export default function HowToDonate() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A]">
      <NavbarDemo />

      {/* Hero Section */}
      <section
        className="relative py-20 px-4 md:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?key=how-donate')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">How to Donate</h1>
          <p className="text-xl md:text-2xl text-gray-100">Multiple Ways to Support Our Mission</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="mb-12 bg-white rounded-lg p-8 border-l-4 border-[#FFB81C]">
          <h2 className="text-2xl font-bold mb-4 text-[#1B7CB8]">Easy Steps to Give</h2>
          <p className="text-[#666666] leading-relaxed">
            We've made it simple for you to support our mission. Choose the donation method that works best for you. All
            donations are secure, confidential, and tax-deductible.
          </p>
        </div>

        {/* Donation Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {donationMethods.map((method, index) => (
            <Card key={index} className="border-[#FFB81C] border-2">
              <CardHeader className="bg-[#FFF9F0]">
                <CardTitle className="text-[#1B7CB8]">{method.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-[#666666]">{method.description}</p>
                <div>
                  <p className="font-semibold text-[#3A3A3A] mb-3">Steps:</p>
                  <ol className="space-y-2">
                    {method.steps.map((step, i) => (
                      <li key={i} className="text-[#666666] text-sm flex gap-3">
                        <span className="text-[#E8725C] font-bold">{i + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Information */}
        <div className="bg-gradient-to-r from-[#FFF9F0] to-white rounded-lg p-8 border-2 border-[#FFB81C] mb-12">
          <h3 className="text-2xl font-bold mb-6 text-[#1B7CB8]">Important Information</h3>
          <div className="space-y-4 text-[#666666]">
            <div>
              <p className="font-semibold text-[#3A3A3A] mb-2">Tax Benefits</p>
              <p>
                All donations to HKM Chennai are tax-deductible under Section 80G of the Indian Income Tax Act. You will
                receive a receipt for your records.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#3A3A3A] mb-2">Privacy & Security</p>
              <p>
                Your personal information is kept confidential and secure. We never share your details with third
                parties without your consent.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#3A3A3A] mb-2">Transparency</p>
              <p>
                We maintain complete transparency in how donations are used. Regular financial reports are available
                upon request.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/donate/pandava-seva"
            className="inline-block px-8 py-3 bg-[#1B7CB8] text-white rounded-lg hover:bg-[#E8725C] transition-colors"
          >
            Make a Donation Now
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
