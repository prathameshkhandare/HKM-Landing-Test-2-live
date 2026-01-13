import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lord Krishna — The Supreme Personality of Godhead | Hare Krishna Chennai",
  description:
    "Learn about Lord Krishna, the Supreme Personality of Godhead. Discover His divine pastimes, teachings, and the path of devotion. Explore Krishna's role in Vedic philosophy and His message of love and wisdom.",
  keywords: [
    "Lord Krishna",
    "Supreme Personality of Godhead",
    "Krishna Pastimes",
    "Vedic Philosophy",
    "Hindu God",
    "Krishna Teachings",
    "Bhagavad Gita Krishna",
    "ISKCON Chennai"
  ],
  openGraph: {
    title: "Lord Krishna — The Supreme Personality of Godhead",
    description:
      "Discover the divine nature of Lord Krishna and His eternal message of love, wisdom, and devotion.",
    url: "https://hkm-landing-test-2.vercel.app/philosophy/lord-krishna",
    images: [
      {
        url: "/assets/krishna-flute-art.jpg",
        width: 1200,
        height: 630,
        alt: "Lord Sri Krishna",
      },
    ],
  },
  alternates: {
    canonical: "https://hkm-landing-test-2.vercel.app/philosophy/lord-krishna"
  }
}

export default function LordKrishnaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
