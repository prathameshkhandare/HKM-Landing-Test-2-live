import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const activityData: Record<string, any> = {
  "spiritual-discourses": {
    name: "Spiritual Discourses",
    description: "Deep Exploration of Bhagavad-gita and Vedic Wisdom",
    overview:
      "Our spiritual discourses provide an in-depth exploration of the Bhagavad-gita, Srimad Bhagavatam, and other sacred texts. Led by experienced teachers, these sessions help participants understand the profound wisdom of Krishna Consciousness and how to apply it in their lives.",
    whatTaught: [
      "Bhagavad-gita - Krishna's teachings on dharma, karma, and devotion",
      "Srimad Bhagavatam - Stories and teachings about Krishna's pastimes",
      "Vedic philosophy - Understanding the nature of reality and consciousness",
      "Practical spirituality - How to integrate spiritual principles into daily life",
      "Meditation techniques - Methods for developing spiritual awareness",
    ],
    schedule: "Sundays: 4:00 PM - 5:30 PM | Weekdays: 6:30 PM - 7:30 PM",
    benefits:
      "Participants gain clarity on spiritual concepts, develop a deeper relationship with Krishna, and learn practical methods for spiritual advancement.",
  },
  folk: {
    name: "Youth Empowerment Club - FOLK",
    description: "Programs and Mentorship for Young Devotees",
    overview:
      "FOLK (Forum of Loving Krishna) is our youth empowerment program designed specifically for young people. We provide mentorship, spiritual guidance, and practical programs that help youth navigate modern challenges while maintaining spiritual values.",
    whatTaught: [
      "Character development and moral values",
      "Spiritual practices suitable for youth",
      "Leadership and service opportunities",
      "Peer support and mentorship",
      "Integration of spirituality with education and career",
      "Social responsibility and community service",
    ],
    schedule: "Saturdays: 3:00 PM - 5:00 PM | Special workshops and retreats",
    benefits:
      "Youth develop strong spiritual foundations, build meaningful friendships, gain mentorship from experienced devotees, and learn how to be positive influences in society.",
  },
  "knowledge-distribution": {
    name: "Distribution of Spiritual Knowledge",
    description: "Sharing Sacred Texts and Spiritual Teachings",
    overview:
      "We are committed to making spiritual knowledge accessible to everyone. Through various methods, we distribute sacred texts, conduct classes, and share the teachings of Krishna Consciousness with the broader community.",
    whatTaught: [
      "Distribution of Bhagavad-gita and other sacred texts",
      "Free classes and seminars on Krishna Consciousness",
      "Online resources and digital content",
      "Community outreach programs",
      "Educational materials for all age groups",
      "Spiritual literature in multiple languages",
    ],
    schedule: "Ongoing throughout the year",
    benefits:
      "Individuals gain access to authentic spiritual knowledge, understand the principles of Krishna Consciousness, and have opportunities to deepen their spiritual practice.",
  },
  "cultural-festivals": {
    name: "Cultural Festivals",
    description: "Celebrating Sacred Festivals Throughout the Year",
    overview:
      "Our cultural festivals celebrate the sacred events in Krishna's life and the spiritual calendar. These festivals provide opportunities for the community to gather, celebrate, and deepen their spiritual connection.",
    whatTaught: [
      "Significance of each festival",
      "Traditional practices and rituals",
      "Stories and pastimes of Krishna",
      "Community participation and seva",
      "Cultural traditions and spiritual values",
    ],
    schedule: "Throughout the year - see Temple page for festival dates",
    benefits:
      "Participants experience the joy of spiritual celebration, understand the deeper meaning of festivals, and strengthen their connection to the Krishna consciousness community.",
  },
  "sunday-retreats": {
    name: "Sunday Retreats",
    description: "Make Your Holiday a Holy Day",
    overview:
      "Our Sunday Retreats offer a unique spiritual program that transforms your Sunday into a holy day. The program includes arati, meditation, prasadam, and fellowship with the spiritual community.",
    whatTaught: [
      "Morning arati and meditation",
      "Bhagavad-gita class",
      "Kirtan (devotional chanting)",
      "Prasadam (blessed food) preparation and sharing",
      "Community service and fellowship",
    ],
    schedule: "Every Sunday: 4:00 PM - 7:00 PM",
    benefits:
      "Participants experience spiritual renewal, develop a regular spiritual practice, enjoy community fellowship, and receive nourishment for both body and soul.",
  },
  "yuga-dharma": {
    name: "Yuga Dharma",
    description: "Chanting Practices and Community Events",
    overview:
      "Yuga Dharma refers to the spiritual practice prescribed for this age - the chanting of the Hare Krishna mantra. Our Yuga Dharma programs provide opportunities for devotees to practice this powerful spiritual technique in community.",
    whatTaught: [
      "The Hare Krishna mantra and its significance",
      "Kirtan (congregational chanting)",
      "Japa (individual chanting) practice",
      "Benefits of chanting",
      "Community chanting events",
    ],
    schedule: "Regular kirtan sessions and special chanting events",
    benefits:
      "Practitioners experience spiritual purification, develop inner peace, strengthen their connection to Krishna, and enjoy the joy of congregational chanting.",
  },
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
