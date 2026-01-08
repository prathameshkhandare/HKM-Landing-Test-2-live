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
  title: "Hare Krishna Movement Chennai — Learn Bhagavad Gita & Spiritual Wisdom",
  description:
    "Join free weekly Bhagavad Gita sessions in Chennai. Discover timeless spiritual wisdom through our programs for all ages - Gita Life, ICVK for kids, FOLK for youth, and sacred festivals. Part of ISKCON serving Srila Prabhupada's mission.",
  generator: "v0.app",
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
