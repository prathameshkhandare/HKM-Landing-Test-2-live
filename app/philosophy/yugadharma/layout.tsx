import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Yuga Dharma — The Religion of the Age | Hare Krishna Chennai",
  description:
    "Learn about Yuga Dharma and Harinama Sankirtana, the prescribed spiritual practice for the Age of Kali. Discover why chanting the holy names is the most effective path to self-realization in this age.",
  keywords: [
    "Yuga Dharma",
    "Harinama Sankirtana",
    "Kali Yuga",
    "Chanting Hare Krishna",
    "Age of Kali",
    "Spiritual Practice",
    "Vedic Philosophy",
    "Krishna Consciousness"
  ],
  openGraph: {
    title: "Yuga Dharma — Chanting for the Age of Kali",
    description:
      "In this Age of Kali, the congregational chanting of the Holy Names is the only means for self-realization. Learn about the religion of the age.",
    url: "https://hkm-landing-test-2.vercel.app/philosophy/yugadharma",
    images: [
      {
        url: "/assets/sankirtana.jpg",
        width: 1200,
        height: 630,
        alt: "Harinama Sankirtana - Chanting the Holy Names",
      },
    ],
  },
  alternates: {
    canonical: "https://hkm-landing-test-2.vercel.app/philosophy/yugadharma"
  }
}

export default function YugadharmaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
