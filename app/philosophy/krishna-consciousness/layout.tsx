import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Krishna Consciousness — Path to Spiritual Awakening | ISKCON Chennai",
  description:
    "Discover Krishna Consciousness, the ancient science of self-realization. Learn about bhakti yoga, the path of devotional service, and how to awaken your spiritual nature through love and devotion to Krishna.",
  keywords: [
    "Krishna Consciousness",
    "Bhakti Yoga",
    "Spiritual Awakening",
    "ISKCON",
    "Devotional Service",
    "Self Realization",
    "Vedic Spirituality",
    "Hare Krishna Movement"
  ],
  openGraph: {
    title: "Krishna Consciousness — Awaken Your Spiritual Nature",
    description:
      "Experience the bliss of Krishna Consciousness through bhakti yoga and devotional service. Join the Hare Krishna Movement in Chennai.",
    url: "https://hkm-landing-test-2.vercel.app/philosophy/krishna-consciousness",
    images: [
      {
        url: "/assets/krishna-flute-art.jpg",
        width: 1200,
        height: 630,
        alt: "Krishna Consciousness - Spiritual Awakening",
      },
    ],
  },
  alternates: {
    canonical: "https://hkm-landing-test-2.vercel.app/philosophy/krishna-consciousness"
  }
}

export default function KrishnaConsciousnessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
