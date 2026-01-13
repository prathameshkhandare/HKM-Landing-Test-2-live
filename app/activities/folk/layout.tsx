import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FOLK — Youth Empowerment Program | Hare Krishna Movement Chennai",
  description:
    "Join FOLK (Friends of Lord Krishna), a dynamic youth empowerment program for ages 13-30. Engage in spiritual discussions, leadership development, cultural activities, and community service. Build lasting friendships while discovering your spiritual potential.",
  keywords: [
    "FOLK Chennai",
    "Youth Program Chennai",
    "Friends of Lord Krishna",
    "Youth Empowerment",
    "Spiritual Youth Group",
    "ISKCON Youth",
    "Leadership Development",
    "Community Service Chennai"
  ],
  openGraph: {
    title: "FOLK — Empower Your Youth with Spiritual Wisdom",
    description:
      "Join Chennai's most vibrant youth community. FOLK offers spiritual growth, leadership skills, and meaningful friendships for ages 13-30.",
    url: "https://hkm-landing-test-2.vercel.app/activities/folk",
    images: [
      {
        url: "/assets/folk-youth.jpg",
        width: 1200,
        height: 630,
        alt: "FOLK Youth Program - Friends of Lord Krishna",
      },
    ],
  },
  alternates: {
    canonical: "https://hkm-landing-test-2.vercel.app/activities/folk"
  }
}

export default function FOLKLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SocialEvent",
            "name": "FOLK - Friends of Lord Krishna",
            "description": "Youth empowerment program for ages 13-30 offering spiritual discussions, leadership skills, and community.",
            "eventSchedule": {
              "@type": "Schedule",
              "repeatFrequency": "Weekly",
              "byDay": "Sunday"
            },
            "location": {
              "@type": "Place",
              "name": "Hare Krishna Movement Chennai",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "Hare Krishna Movement Chennai",
              "url": "https://hkm-landing-test-2.vercel.app"
            },
            "audience": {
              "@type": "PeopleAudience",
              "suggestedMinAge": "13",
              "suggestedMaxAge": "30",
              "audienceType": "Youth"
            },
            "image": [
              "https://hkm-landing-test-2.vercel.app/assets/folk-youth.jpg"
            ]
          })
        }}
      />
      {children}
    </>
  )
}
