import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cultural Festivals — Celebrate Vedic Traditions | Hare Krishna Chennai",
  description:
    "Experience the vibrant cultural festivals at Hare Krishna Movement Chennai. Celebrate Janmashtami, Radhashtami, Gaura Purnima, Ratha Yatra, and more. Join thousands in joyous kirtan, traditional performances, and spiritual festivities throughout the year.",
  keywords: [
    "Cultural Festivals Chennai",
    "Janmashtami Chennai",
    "Radhashtami",
    "Gaura Purnima",
    "Ratha Yatra Chennai",
    "ISKCON Festivals",
    "Vedic Festivals",
    "Hindu Festivals Chennai"
  ],
  openGraph: {
    title: "Cultural Festivals — Celebrate Divine Joy with Us",
    description:
      "Join vibrant celebrations of Vedic culture. Experience Janmashtami, Ratha Yatra, and more at Hare Krishna Movement Chennai.",
    url: "https://hkm-landing-test-2.vercel.app/activities/cultural-festivals",
    images: [
      {
        url: "/assets/cultutral-festival.JPG",
        width: 1200,
        height: 630,
        alt: "Cultural Festivals at Hare Krishna Movement Chennai",
      },
    ],
  },
  alternates: {
    canonical: "https://hkm-landing-test-2.vercel.app/activities/cultural-festivals"
  }
}

export default function CulturalFestivalsLayout({
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
            "@type": "Festival",
            "name": "HKM Chennai Cultural Festivals",
            "description": "Grand celebrations of Janmashtami, Radhashtami, Ratha Yatra, and other Vedic festivals.",
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
            "image": [
              "https://hkm-landing-test-2.vercel.app/assets/cultutral-festival.JPG"
            ]
          })
        }}
      />
      {children}
    </>
  )
}
