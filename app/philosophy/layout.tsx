import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Philosophy & Vedic Wisdom — Hare Krishna Movement Chennai",
  description:
    "Dive deep into the science of self-realization. Learn about Bhagavad Gita, Lord Krishna, and the path of Bhakti Yoga.",
  openGraph: {
    title: "Philosophy & Vedic Wisdom — Hare Krishna Movement Chennai",
    description:
      "Discover the timeless wisdom of the Vedas. Understand the purpose of life and the nature of the soul.",
    images: [
      {
        url: "/assets/krishna-flute-art.jpg", // Using a relevant image from the section
        width: 1200,
        height: 630,
        alt: "Lord Sri Krishna",
      },
    ],
  },
}

export default function PhilosophyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
