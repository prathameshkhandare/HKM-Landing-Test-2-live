import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import ClickSpark from "@/components/ClickSpark"
import "./globals.css"

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
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
    "Bhagavad Gita Classes",
    "Spiritual Wisdom",
    "Meditation Chennai",
    "Gita Life",
    "FOLK Youth Club",
    "ICVK Kids Program",
    "Srila Prabhupada",
    "Temple Chennai",
    "Spiritual Retreats",
    "Vedic Culture",
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
    creator: "@hkmchennai", // Assuming handle, update if known
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

import Navbar from "@/components/Navbar"
// import NavbarTest from "@/components/NavbarTest"

// ... (existing imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans page-dark-bg antialiased`}>
        <div className="gold-glow"></div>
        <Navbar />
        {/* <NavbarTest /> */}
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
