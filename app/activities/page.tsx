"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import Link from "next/link"

const activities = [
  { name: "ACTIVITIES", link: "/activities/" },
  { name: "FESTIVALS", link: "/festivals/" },
]

const festivals = [
  { name: "RATHA YATRA", link: "/festivals/ratha-yatra" },
  { name: "SRI NITYANANDA TRAYODASHI", link: "/festivals/nityananda-trayodashi" },
  { name: "SRI GAURA PURNIMA", link: "/festivals/gaura-purnima" },
]

const activityCards = [
  {
    title: "SPIRITUAL DISCOURSES",
    description:
      "Prahlad Maharaj states in Srimad Bhagavatam that of the nine process of Devotional Service, Read More...",
  },
  {
    title: "YOUTH EMPOWERMENT CLUB - FOLK",
    description:
      "FOLK – Youth Empowerment Club aimed at crystallizing the formative phase of the younger generation Read More...",
  },
  {
    title: "DISTRIBUTION OF SPIRITUAL KNOWLEDGE",
    description:
      "Srila Prabhupada presents Krishna consciousness in a very simple and practical way in his books. Read More...",
  },
  {
    title: "CULTURAL FESTIVAL",
    description: "Hare Krishna Movement Chennai celebrated following cultural festival Read More...",
  },
  {
    title: "SUNDAY RETREATS",
    description:
      "Make your holiday a holy day. Sunday Festival is a unique program to surcharge you spiritually Read More...",
  },
  {
    title: "YUGA DHARMA",
    description:
      "Sankirtana Yajna means congregational chanting of the holy names of the Supreme Lord. This is the Read More...",
  },
  {
    title: "ASK A QUESTION",
    description:
      "This section facilitates the spiritual seeker to ask a spiritual question and his questions will be get answered in few days. Read More...",
  },
]

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A]">
      <NavbarDemo />

      {/* Hero Section */}
      <section
        className="relative py-32 px-4 md:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/ancient-temple-spiritual-architecture.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance !text-white">DAKṢIṆA DVĀRAKĀ DHĀMA</h1>
              <p className="text-2xl md:text-3xl font-light mb-6 !text-white">
                Cultural Complex to promote and preserve Indian heritage
              </p>
            </div>
            <div className="bg-red-700/80 rounded-lg p-8">
              <p className="text-white text-center text-xl md:text-2xl font-semibold leading-relaxed">
                HARE KRISHNA HARE KRISHNA
                <br />
                KRISHNA KRISHNA HARE HARE !
                <br />
                HARE RAMA HARE RAMA
                <br />
                RAMA RAMA HARE HARE !!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Page Title */}
        <h2 className="text-6xl font-bold text-center mb-8 text-[#3A3A3A]">ACTIVITIES</h2>

        {/* Intro Text */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-lg text-[#666666] leading-relaxed">
            Activities including Spiritual Discourses, Youth Empowerment, Distribution of Spiritual Knowledge, Yuga
            dharma etc.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content area */}
          <div className="lg:col-span-2">
            {/* Activity Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activityCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-6 border border-[#E5E5E5] hover:shadow-md transition-shadow"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1B7CB8] to-[#E8725C] mb-4 flex items-center justify-center">
                    <span className="text-white text-4xl">○</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1B7CB8] mb-3">{card.title}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#FFB81C]">
              <h4 className="text-xl font-bold mb-4 text-[#1B7CB8]">ACTIVITIES</h4>
              <div className="space-y-3">
                {activities.map((activity, idx) => (
                  <Link
                    key={idx}
                    href={activity.link}
                    className="block text-sm font-medium text-[#1B7CB8] hover:text-[#E8725C] transition-colors py-2 px-3 rounded hover:bg-[#FFF9F0]"
                  >
                    {activity.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-[#E8725C]">
              <h4 className="text-xl font-bold mb-4 text-[#1B7CB8]">FESTIVALS</h4>
              <div className="space-y-2">
                {festivals.map((festival, idx) => (
                  <Link
                    key={idx}
                    href={festival.link}
                    className="block text-sm font-medium text-[#1B7CB8] hover:text-[#E8725C] transition-colors py-2 px-3 rounded hover:bg-[#FFF9F0]"
                  >
                    {festival.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
