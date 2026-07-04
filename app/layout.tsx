import type React from "react"
import type { Metadata } from "next"
import { Poppins, Cinzel, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://hkm-landing-test-2.vercel.app"),
  title: {
    default: "Hare Krishna Movement Chennai — Learn Bhagavad Gita & Spiritual Wisdom",
    template: "%s | Hare Krishna Movement Chennai",
  },
  description:
    "Join free weekly Bhagavad Gita sessions in Chennai. Discover timeless spiritual wisdom through our programs for all ages - Gita Life, ICVK for kids, FOLK for youth, and sacred festivals. Part of ISKCON serving Srila Prabhupada's mission.",
  keywords: [
    "Hare Krishna Chennai",
    "ISKCON Chennai",
    "ISKCON Thiruvanmiyur",
    "ISKCON temple Chennai",
    "ISKCON temple Thiruvanmiyur",
    "Hare Krishna temple Chennai",
    "Krishna temple Chennai",
    "HKM Chennai",
    "Hare Krishna Movement Chennai",
    "Bhagavad Gita Classes Chennai",
    "Bhagavad Gita classes near me",
    "free spiritual classes Chennai",
    "Gita Life",
    "FOLK Youth Club Chennai",
    "ICVK Kids Program Chennai",
    "Srila Prabhupada",
    "Temple Chennai",
    "Spiritual Retreats Chennai",
    "Vedic Culture Chennai",
    "Meditation Chennai",
    "Annadanam Chennai",
    "free food distribution Chennai",
    "Ratha Yatra Chennai",
    "Janmashtami Chennai",
    "Gaura Purnima Chennai",
    "Ram Navami Chennai",
    "Krishna Consciousness",
    "Hare Krishna temple near me",
    "spiritual programs Chennai",
    "kirtan Chennai",
    "Dakshina Dwaraka",
  ],
  authors: [{ name: "Hare Krishna Movement Chennai" }],
  creator: "Hare Krishna Movement Chennai",
  publisher: "Hare Krishna Movement Chennai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Hare Krishna Movement Chennai — Spiritual Wisdom & Community",
    description:
      "Join us for Bhagavad Gita classes, cultural festivals, and spiritual retreats in Chennai. Experience the joy of Krishna Consciousness.",
    url: "https://hkm-landing-test-2.vercel.app",
    siteName: "Hare Krishna Movement Chennai",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/hkm-hero-new.jpg",
        width: 1200,
        height: 630,
        alt: "Hare Krishna Movement Chennai Temple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hare Krishna Movement Chennai",
    description:
      "Discover spiritual wisdom, meditation, and community at Hare Krishna Movement Chennai. Join our programs for all ages.",
    images: ["/assets/hkm-hero-new.jpg"],
    creator: "@ChennaiHare", // Official handle from x.com/ChennaiHare
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon-iskcon.png",
    shortcut: "/favicon-iskcon.png",
    apple: "/favicon-iskcon.png",
  },
}

import Navbar from "@/components/Navbar"
import FloatingDonateButton from "@/components/FloatingDonateButton"
// import NavbarTest from "@/components/NavbarTest"

// ... (existing imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8LLZJ0XKJ1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8LLZJ0XKJ1');
          `}
        </Script>
      </head>
      <body className={`${poppins.variable} font-sans page-dark-bg antialiased`}>
        {/* Organization Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Hare Krishna Movement Chennai",
              "alternateName": ["ISKCON Chennai", "ISKCON Thiruvanmiyur", "HKM Chennai", "Hare Krishna temple Chennai", "Krishna temple Thiruvanmiyur"],
              "url": "https://hkmchennai.org",
              "logo": "https://hkmchennai.org/assets/hkm-hero-new.jpg",
              "description": "Hare Krishna Movement Chennai (ISKCON Chennai / ISKCON Thiruvanmiyur) offers free Bhagavad Gita classes, spiritual retreats, children's cultural programs (ICVK), youth programs (FOLK), and sacred festivals. Dedicated to spreading Krishna Consciousness under the guidance of Srila Prabhupada.",
              "foundingDate": "2000",
              "sameAs": [
                "https://www.facebook.com/hkmcworld/",
                "https://www.instagram.com/hkmchennai",
                "https://x.com/ChennaiHare",
                "https://www.youtube.com/@hkmchennai",
                "https://www.linkedin.com/company/hare-krishna-movement-chennai?originalSubdomain=in"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@hkmchennai.org",
                "contactType": "customer service",
                "availableLanguage": ["English", "Tamil", "Hindi"]
              }
            })
          }}
        />
        {/* HinduTemple Schema for SEO & AI Overview Correction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HinduTemple",
              "name": "Hare Krishna Movement Chennai — Dakshina Dwaraka",
              "alternateName": ["ISKCON Chennai Temple", "ISKCON Thiruvanmiyur Temple", "Dakshina Dwaraka"],
              "description": "ISKCON temple in Chennai (Thiruvanmiyur) offering daily darshan, Bhagavad Gita classes, spiritual programs for all ages, Annadanam, and grand festival celebrations including Ratha Yatra, Janmashtami, and Gaura Purnima.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "63, 1st Seaward Road, Valmiki Nagar, Thiruvanmiyur",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "postalCode": "600041",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 12.9830,
                "longitude": 80.2594
              },
              "url": "https://hkmchennai.org",
              "telephone": ["+91-97890-57101", "+91-96009-67108", "+91-91500-44121"],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-97890-57101",
                  "contactType": "General Queries"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-91500-44121",
                  "contactType": "Donations and Sevas"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-96008-15108",
                  "contactType": "ICVK Kids Programme"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-78458-71028",
                  "contactType": "Tirtha Yatra (Pilgrimages)"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-96009-67108",
                  "contactType": "Gita Life Classes"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-75500-00774",
                  "contactType": "Kalyana Mandapam"
                }
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  "opens": "04:30",
                  "closes": "13:00",
                  "description": "Morning Darshan and Arati"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  "opens": "16:15",
                  "closes": "20:15",
                  "description": "Evening Darshan and Arati"
                }
              ],
              "event": [
                { "@type": "Event", "name": "Mangala Arati", "startDate": "T04:30:00", "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode" },
                { "@type": "Event", "name": "Mantra Meditation", "startDate": "T05:00:00", "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode" },
                { "@type": "Event", "name": "Shringara Arati", "startDate": "T07:15:00", "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode" },
                { "@type": "Event", "name": "Guru Puja", "startDate": "T07:30:00", "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode" },
                { "@type": "Event", "name": "Bhagavatam Class", "startDate": "T08:00:00", "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode" },
                { "@type": "Event", "name": "Rajbhoga Arati", "startDate": "T12:25:00", "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode" },
                { "@type": "Event", "name": "Dhupa Arati", "startDate": "T16:15:00", "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode" },
                { "@type": "Event", "name": "Sandhya Arati", "startDate": "T19:00:00", "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode" },
                { "@type": "Event", "name": "Bhagavad-Gita discourse", "startDate": "T19:30:00", "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode" },
                { "@type": "Event", "name": "Shayana Arati", "startDate": "T20:00:00", "endDate": "T20:15:00", "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode" }
              ],
              "priceRange": "Free",
              "image": "https://hkmchennai.org/assets/hkm-hero-new.jpg"
            })
          }}
        />
        {/* FAQPage Schema for LLM Discovery */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Where is ISKCON in Chennai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ISKCON Chennai (Hare Krishna Movement Chennai) operates its main temple Dakshina Dwaraka in Thiruvanmiyur, Chennai, Tamil Nadu. Additional centers are located in Mogappair. Visit hkmchennai.org for details."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What programs does ISKCON Chennai offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HKM Chennai offers free Bhagavad Gita classes (Gita Life), youth programs (FOLK), children's cultural education (ICVK for ages 3-15), Sunday retreats, spiritual discourses, Soulful Sangam kirtans, Tirtha Yatra pilgrimages, and major festival celebrations like Ratha Yatra and Janmashtami."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are the Bhagavad Gita classes at ISKCON Chennai free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, the Gita Life classes at HKM Chennai are completely free and open to everyone regardless of background or prior knowledge of the scriptures."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is ISKCON Thiruvanmiyur?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ISKCON Thiruvanmiyur refers to the Hare Krishna Movement Chennai temple and cultural center located in Thiruvanmiyur, Chennai. It is the main hub for spiritual programs, deity worship, festivals, and community activities of HKM Chennai."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I donate to ISKCON Chennai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can donate online at hkmchennai.org/donate. Various seva options include Deity Seva, Gopala Seva, Pandava Seva, Sudama Seva, Annadanam sponsorship, and festival sponsorships for Ratha Yatra, Ram Navami, and Gaura Purnima."
                  }
                }
              ]
            })
          }}
        />
        <div className="gold-glow"></div>
        <Navbar />
        {/* <NavbarTest /> */}
        <Suspense fallback={null}>{children}</Suspense>
        <FloatingDonateButton />
        <Analytics />
      </body>
    </html>
  )
}
