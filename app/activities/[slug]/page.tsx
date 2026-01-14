import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

  "ask-question": {
    name: "Ask a Question",
    description: "Interactive Q&A and Audio Archives",
    overview:
      "We believe in encouraging questions and providing thoughtful answers based on Vedic wisdom. Our Ask a Question program provides an interactive platform for seekers to get their spiritual questions answered by experienced teachers.",
    whatTaught: [
      "Answers to spiritual questions",
      "Clarification of philosophical concepts",
      "Practical guidance for spiritual practice",
      "Audio archives of previous Q&A sessions",
      "Interactive discussions",
    ],
    schedule: "Monthly Q&A sessions | Audio archives available online",
    benefits:
      "Participants get clarity on spiritual concepts, receive personalized guidance, learn from the experiences of others, and develop a deeper understanding of Krishna Consciousness.",
  },
}

export async function generateStaticParams() {
  return Object.keys(activityData).map((slug) => ({
    slug: slug,
  }))
}

export default function ActivityPage({ params }: { params: { slug: string } }) {
  const activity = activityData[params.slug]

  if (!activity) {
    return (
      <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A]">
        <NavbarDemo />
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Activity Not Found</h1>
          <Link href="/activities" className="text-[#1B7CB8] hover:underline">
            Back to Activities
          </Link>
        </div>
        <FooterSection />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A]">
      <NavbarDemo />

      {/* Hero Section */}
      <section
        className="relative py-20 px-4 md:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?key=activity-detail')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance text-white">{activity.name}</h1>
          <p className="text-xl md:text-2xl text-white">{activity.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        {/* Overview */}
        <div className="mb-12 bg-white rounded-lg p-8 border-l-4 border-[#FFB81C]">
          <h2 className="text-2xl font-bold mb-4 text-[#1B7CB8]">About This Activity</h2>
          <p className="text-[#666666] leading-relaxed">{activity.overview}</p>
        </div>

        {/* Schedule */}
        <Card className="mb-12 border-[#E8725C] border-2">
          <CardHeader className="bg-[#FFF9F0]">
            <CardTitle className="text-[#1B7CB8]">Schedule</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-[#666666]">{activity.schedule}</p>
          </CardContent>
        </Card>

        {/* What's Taught */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-[#1B7CB8]">What You'll Learn</h3>
          <div className="bg-white rounded-lg p-8 border-l-4 border-[#1B7CB8]">
            <ul className="space-y-3">
              {activity.whatTaught.map((item: string, index: number) => (
                <li key={index} className="flex gap-3 text-[#666666]">
                  <span className="text-[#E8725C] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-[#FFF9F0] to-white rounded-lg p-8 border-2 border-[#FFB81C] mb-12">
          <h3 className="text-2xl font-bold mb-4 text-[#1B7CB8]">Benefits</h3>
          <p className="text-[#666666] leading-relaxed">{activity.benefits}</p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#1B7CB8] text-white rounded-lg hover:bg-[#E8725C] transition-colors"
          >
            Get Involved Today
          </Link>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link href="/activities" className="text-[#1B7CB8] hover:underline">
            Back to All Activities
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
