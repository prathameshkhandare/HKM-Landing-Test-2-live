import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const faqs = [
  {
    question: "Are donations tax-deductible?",
    answer:
      "Yes, all donations to HKM Chennai are tax-deductible under Section 80G of the Indian Income Tax Act. You will receive a receipt for your donation that can be used for tax purposes.",
  },
  {
    question: "How can I make a donation?",
    answer:
      "You can donate through multiple methods: online payment (Razorpay/CCAvenue), bank transfer, check/draft by mail, or in-person at our temple. Visit our 'How to Donate' page for detailed instructions.",
  },
  {
    question: "Is my donation secure?",
    answer:
      "Yes, all online donations are processed through secure payment gateways. Your personal and financial information is encrypted and protected. We never share your details with third parties.",
  },
  {
    question: "Can I make a recurring donation?",
    answer:
      "Yes, we offer recurring giving programs: Pandava Seva (monthly), Sudama Seva (quarterly), and Gopala Seva (annual). These programs allow you to support our mission consistently.",
  },
  {
    question: "How are donations used?",
    answer:
      "Donations support our spiritual programs, community service, youth empowerment, temple operations, and outreach activities. We maintain complete transparency and provide financial reports upon request.",
  },
  {
    question: "Can I donate in someone's name?",
    answer:
      "Yes, you can make a donation in honor of or in memory of someone. Please mention this when making your donation, and we'll acknowledge it appropriately.",
  },
  {
    question: "Do you accept donations of property or assets?",
    answer:
      "Yes, we accept donations of property, vehicles, and other assets. Please contact us directly to discuss the details and process.",
  },
  {
    question: "How will I receive my receipt?",
    answer:
      "For online donations, you'll receive an immediate confirmation. For other methods, we'll send a receipt by email or mail within 7 business days.",
  },
]

export default function DonationFAQs() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A]">
      <NavbarDemo />

      {/* Hero Section */}
      <section
        className="relative py-20 px-4 md:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?key=faq')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Donation FAQs</h1>
          <p className="text-xl md:text-2xl text-gray-100">Answers to Common Questions</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-[#FFB81C] border-2">
              <CardHeader className="bg-[#FFF9F0]">
                <CardTitle className="text-[#1B7CB8] text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-[#666666] leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#FFF9F0] to-white rounded-lg p-8 border-2 border-[#FFB81C] text-center">
          <h3 className="text-2xl font-bold mb-4 text-[#1B7CB8]">Still Have Questions?</h3>
          <p className="text-[#666666] mb-6">
            If you have additional questions about donations, please don't hesitate to contact us.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#1B7CB8] text-white rounded-lg hover:bg-[#E8725C] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
