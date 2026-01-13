import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gita Life — Free Bhagavad Gita Classes for All Ages | Hare Krishna Chennai",
  description:
    "Join Gita Life, our flagship program offering free weekly Bhagavad Gita classes in Chennai. Learn practical wisdom for modern life from ancient Vedic texts. Open to all ages and backgrounds. Discover life's purpose through Krishna's timeless teachings.",
  keywords: [
    "Gita Life",
    "Bhagavad Gita Classes Chennai",
    "Free Gita Classes",
    "Spiritual Education",
    "Vedic Wisdom",
    "Krishna Teachings",
    "Life Purpose",
    "ISKCON Classes Chennai"
  ],
  openGraph: {
    title: "Gita Life — Transform Your Life with Bhagavad Gita Wisdom",
    description:
      "Free weekly Bhagavad Gita classes in Chennai. Learn practical spiritual wisdom applicable to modern life challenges.",
    url: "https://hkm-landing-test-2.vercel.app/activities/gita-life",
    images: [
      {
        url: "/assets/gita-life-class.jpg",
        width: 1200,
        height: 630,
        alt: "Gita Life - Bhagavad Gita Classes",
      },
    ],
  },
  alternates: {
    canonical: "https://hkm-landing-test-2.vercel.app/activities/gita-life"
  }
}

export default function GitaLifeLayout({
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
            "@type": "EducationEvent",
            "name": "Gita Life - Bhagavad Gita Classes",
            "description": "Free weekly Bhagavad Gita classes in Chennai teaching practical spiritual wisdom.",
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
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            "image": [
              "https://hkm-landing-test-2.vercel.app/assets/gita-life-class.jpg"
            ]
          })
        }}
      />
      {children}
    </>
  )
}
