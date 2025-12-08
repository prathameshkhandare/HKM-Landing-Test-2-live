import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SudamaSeva() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A]">
      <NavbarDemo />

      {/* Hero Section */}
      <section
        className="relative py-20 px-4 md:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?key=sudama')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Sudama Seva</h1>
          <p className="text-xl md:text-2xl text-gray-100">Quarterly Giving Program</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8 border-l-4 border-[#FFB81C]">
            <h2 className="text-2xl font-bold mb-4 text-[#1B7CB8]">About Sudama Seva</h2>
            <p className="text-[#666666] leading-relaxed mb-4">
              Sudama Seva is our quarterly giving program, inspired by the story of Sudama, a dear friend of Krishna who
              gave with pure devotion. By becoming a Sudama Seva member, you commit to supporting our mission with
              quarterly contributions.
            </p>
            <p className="text-[#666666] leading-relaxed">
              Quarterly giving allows for larger contributions while maintaining flexibility. Your support helps us plan
              and execute major programs and initiatives throughout the year.
            </p>
          </div>

          <Card className="border-[#FFB81C] border-2">
            <CardHeader className="bg-[#FFF9F0]">
              <CardTitle className="text-[#1B7CB8]">Program Details</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4 text-[#666666]">
              <div>
                <p className="font-semibold text-[#3A3A3A]">Frequency</p>
                <p>Quarterly (4 times per year)</p>
              </div>
              <div>
                <p className="font-semibold text-[#3A3A3A]">Flexibility</p>
                <p>Adjust amount or cancel anytime</p>
              </div>
              <div>
                <p className="font-semibold text-[#3A3A3A]">Tax Benefit</p>
                <p>Section 80G tax deduction</p>
              </div>
              <div>
                <p className="font-semibold text-[#3A3A3A]">Receipt</p>
                <p>Quarterly receipt via email</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Form */}
        <Card className="border-[#E8725C] border-2 mb-12">
          <CardHeader className="bg-[#FFF9F0]">
            <CardTitle className="text-[#1B7CB8]">Set Up Your Quarterly Donation</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <form className="space-y-4">
              <div>
                <label className="block text-[#3A3A3A] font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#1B7CB8]"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-[#3A3A3A] font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#1B7CB8]"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-[#3A3A3A] font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#1B7CB8]"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-[#3A3A3A] font-semibold mb-2">Quarterly Amount (₹)</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#1B7CB8]"
                  placeholder="Enter amount"
                  min="500"
                />
              </div>
              <div>
                <label className="block text-[#3A3A3A] font-semibold mb-2">Payment Method</label>
                <select className="w-full px-4 py-2 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-[#1B7CB8]">
                  <option>Select payment method</option>
                  <option>Credit Card</option>
                  <option>Debit Card</option>
                  <option>Bank Transfer</option>
                  <option>UPI</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#1B7CB8] text-white rounded-lg hover:bg-[#E8725C] transition-colors font-semibold"
              >
                Set Up Quarterly Donation
              </button>
            </form>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-[#FFF9F0] to-white rounded-lg p-8 border-2 border-[#FFB81C]">
          <h3 className="text-2xl font-bold mb-6 text-[#1B7CB8]">Sudama Seva Benefits</h3>
          <div className="grid md:grid-cols-2 gap-6 text-[#666666]">
            <div className="flex gap-4">
              <span className="text-[#E8725C] font-bold text-2xl">✓</span>
              <div>
                <p className="font-semibold text-[#3A3A3A] mb-1">Quarterly Impact Reports</p>
                <p>Detailed reports on major initiatives and their outcomes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-[#E8725C] font-bold text-2xl">✓</span>
              <div>
                <p className="font-semibold text-[#3A3A3A] mb-1">Community Recognition</p>
                <p>Featured in our quarterly community newsletter.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-[#E8725C] font-bold text-2xl">✓</span>
              <div>
                <p className="font-semibold text-[#3A3A3A] mb-1">Special Puja Offerings</p>
                <p>Special prayers and puja offerings in your name.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-[#E8725C] font-bold text-2xl">✓</span>
              <div>
                <p className="font-semibold text-[#3A3A3A] mb-1">VIP Event Access</p>
                <p>VIP invitations to major temple events and celebrations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
