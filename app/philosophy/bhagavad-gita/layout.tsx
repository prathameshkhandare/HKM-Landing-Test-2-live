import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bhagavad Gita — Ancient Wisdom for Modern Life | Hare Krishna Chennai",
  description:
    "Discover the timeless wisdom of the Bhagavad Gita. Learn about Krishna's teachings to Arjuna on the battlefield of Kurukshetra and how they apply to modern life. Join our free Bhagavad Gita classes in Chennai.",
  keywords: [
    "Bhagavad Gita",
    "Bhagavad Gita Classes Chennai",
    "Krishna Teachings",
    "Vedic Wisdom",
    "Spiritual Knowledge",
    "Gita Life",
    "Ancient Philosophy",
    "Self Realization"
  ],
  openGraph: {
    title: "Bhagavad Gita — Timeless Spiritual Wisdom",
    description:
      "Explore the profound teachings of the Bhagavad Gita. Join free classes and discover ancient wisdom for modern challenges.",
    url: "https://hkm-landing-test-2.vercel.app/philosophy/bhagavad-gita",
    images: [
      {
        url: "/assets/krishna-flute-art.jpg",
        width: 1200,
        height: 630,
        alt: "Lord Krishna teaching Bhagavad Gita",
      },
    ],
  },
  alternates: {
    canonical: "https://hkm-landing-test-2.vercel.app/philosophy/bhagavad-gita"
  }
}

export default function BhagavadGitaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
