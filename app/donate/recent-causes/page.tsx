import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const causes = [
  {
    title: "Prasadam Distribution",
    description: "Providing blessed food to devotees and the community",
    goal: 50000,
    raised: 42000,
    impact: "Fed over 500 people this month",
  },
  {
    title: "Youth Empowerment Program",
    description: "Supporting FOLK and youth spiritual development",
    goal: 100000,
    raised: 78500,
    impact: "Mentored 50+ young devotees",
  },
  {
    title: "Temple Maintenance",
    description: "Keeping our sacred space clean and beautiful",
    goal: 75000,
    raised: 65000,
    impact: "Completed major repairs and renovations",
  },
  {
    title: "Community Outreach",
    description: "Spreading spiritual knowledge to underserved areas",
    goal: 60000,
    raised: 48000,
    impact: "Reached 200+ people in local communities",
  },
  {
    title: "Festival Celebrations",
    description: "Organizing sacred festivals for the community",
    goal: 80000,
    raised: 72000,
    impact: "Celebrated 8 major festivals this year",
  },
  {
    title: "Spiritual Education",
    description: "Supporting classes and spiritual discourses",
    goal: 45000,
    raised: 38000,
    impact: "Conducted 50+ classes and seminars",
  },
]

export default function RecentCauses() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A]">
      <NavbarDemo />

      {/* Hero Section */}
      <section
        className="relative py-20 px-4 md:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?key=causes')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Recent Causes</h1>
          <p className="text-xl md:text-2xl text-gray-100">See Where Your Donations Make a Difference</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="mb-12 bg-white rounded-lg p-8 border-l-4 border-[#FFB81C]">
          <h2 className="text-2xl font-bold mb-4 text-[#1B7CB8]">Our Current Initiatives</h2>
          <p className="text-[#666666] leading-relaxed">
            Your generous donations support various causes that help us spread Krishna Consciousness and serve the
            community. Below are our current fundraising initiatives and their impact.
          </p>
        </div>

        {/* Causes Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {causes.map((cause, index) => {
            const percentage = (cause.raised / cause.goal) * 100
            return (
              <Card key={index} className="border-[#FFB81C] border-2">
                <CardHeader className="bg-[#FFF9F0]">
                  <CardTitle className="text-[#1B7CB8]">{cause.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-[#666666]">{cause.description}</p>

                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-[#3A3A3A]">Progress</span>
                      <span className="text-sm text-[#666666]">
                        ₹{cause.raised.toLocaleString()} / ₹{cause.goal.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#E8725C] h-2 rounded-full transition-all"
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-[#666666] mt-2">{Math.round(percentage)}% funded</p>
                  </div>

                  {/* Impact */}
                  <div className="bg-[#FFF9F0] rounded p-3 border-l-2 border-[#1B7CB8]">
                    <p className="text-sm text-[#666666]">
                      <span className="font-semibold text-[#3A3A3A]">Impact:</span> {cause.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
