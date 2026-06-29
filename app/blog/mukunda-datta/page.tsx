
import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
  title: "Sri Mukunda Datta: The Eternal Singer Whose Voice Made the Lord Dance | HKM Chennai",
  description:
    "Discover Sri Mukunda Datta — Lord Chaitanya's class friend, beloved singer, and devoted associate whose transcendental kirtana made the Lord Himself rise and dance in ecstasy in the courtyard of Srivasa Prabhu.",
  keywords: [
    "Mukunda Datta",
    "Sri Mukunda Datta",
    "Lord Chaitanya associate",
    "Mukunda Datta kirtana",
    "Caitanya Bhagavata",
    "Gaudiya Vaishnava saints",
    "ISKCON Thiruvanmiyur",
    "HKM Chennai blog",
    "Dakshina Dwaraka Dham",
    "Mukunda Datta appearance day",
    "Navadvipa devotees",
    "Madhukahntha singer Vraja",
    "Gaura-ganoddesa-dipika",
    "Mayavada association danger",
    "sata-prahariya ecstasy",
  ],
  alternates: {
    canonical: "https://hkmchennai.org/blog/mukunda-datta",
  },
  openGraph: {
    title: "Sri Mukunda Datta: The Eternal Singer Whose Voice Made the Lord Dance",
    description:
      "A devotional tribute from Dakshina Dwaraka Dham, ISKCON Thiruvanmiyur. Discover the life, kirtanas, and timeless lessons of Lord Chaitanya's intimate classmate and singer.",
    url: "https://hkmchennai.org/blog/mukunda-datta",
    siteName: "HKM Chennai — Dakshina Dwaraka Dham",
    locale: "en_IN",
    type: "article",
    publishedTime: "2025-01-01T00:00:00+05:30",
    authors: ["HKM Chennai Digital Content Team"],
    images: [
      {
        url: "https://hkmchennai.org/assets/blog/mukunda-datta/cover.png",
        width: 1200,
        height: 630,
        alt: "Sri Mukunda Datta — Lord Chaitanya's Eternal Singer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Mukunda Datta: The Eternal Singer Whose Voice Made the Lord Dance",
    description:
      "Discover the life of Lord Chaitanya's classmate and beloved singer whose kirtana made the Supreme Lord Himself dance. A devotional tribute from HKM Chennai.",
    images: ["https://hkmchennai.org/assets/blog/mukunda-datta/cover.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

export default function Page() {
    return <BlogClient />
}
