import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sunday Retreats — Weekly Spiritual Gatherings | Hare Krishna Chennai",
  description:
    "Join our uplifting Sunday Retreats featuring kirtan, spiritual discourses, prasadam (sanctified vegetarian feast), and community fellowship. Experience the joy of Krishna Consciousness every Sunday. Open to all, free entry. Discover peace, wisdom, and community.",
  keywords: [
    "Sunday Retreat Chennai",
    "Kirtan Chennai",
    "Spiritual Gathering",
    "ISKCON Sunday Program",
    "Prasadam Chennai",
    "Community Fellowship",
    "Bhakti Yoga",
    "Free Spiritual Program"
  ],
  openGraph: {
    title: "Sunday Retreats — Experience Spiritual Bliss Every Week",
    description:
      "Join us every Sunday for kirtan, spiritual wisdom, and prasadam. Free entry, open to all. Experience the joy of Krishna Consciousness.",
    url: "https://hkm-landing-test-2.vercel.app/activities/sunday-retreats",
    images: [
      {
        url: "/assets/sunday-retreat.jpg",
        width: 1200,
        height: 630,
        alt: "Sunday Retreat - Spiritual Gathering",
      },
    ],
  },
  alternates: {
    canonical: "https://hkm-landing-test-2.vercel.app/activities/sunday-retreats"
  }
}

export default function SundayRetreatsLayout({
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
            "@type": "Event",
            "name": "Sunday Spiritual Retreat",
            "description": "Weekly spiritual gathering featuring kirtan, discourse, and prasadam.",
            "eventSchedule": {
              "@type": "Schedule",
              "repeatFrequency": "Weekly",
              "byDay": "Sunday",
              "startTime": "17:00",
              "endTime": "20:30"
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
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            "image": [
              "https://hkm-landing-test-2.vercel.app/assets/sunday-retreat.jpg"
            ]
          })
        }}
      />
      {children}
    </>
  )
}
