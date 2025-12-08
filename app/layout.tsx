import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import ClickSpark from "@/components/ClickSpark"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Hare Krishna Movement Chennai — Learn Bhagavad Gita & Spiritual Wisdom",
  description:
    "Join free weekly Bhagavad Gita sessions in Chennai. Discover timeless spiritual wisdom through our programs for all ages - Gita Life, ICVK for kids, FOLK for youth, and sacred festivals. Part of ISKCON serving Srila Prabhupada's mission.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${playfair.variable} ${manrope.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
