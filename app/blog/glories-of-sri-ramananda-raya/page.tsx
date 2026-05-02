import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
  title: "Glories of Sri Ramananda Raya | HKM Chennai",
  description:
    "Comprehensive glories of Sri Ramananda Raya — the most confidential associate of Lord Chaitanya Mahaprabhu, governor of Rajamahendri, and the only devotee who saw Lord Chaitanya's combined form of Radha and Krishna. Based on CC Madhya Chapter 8.",
  openGraph: {
    title: "Glories of Sri Ramananda Raya | Srila Prabhupada's ISKCON Thiruvanmiyur",
    description:
      "The most confidential associate of Lord Chaitanya Mahaprabhu — the devotee who saw Lord Chaitanya's combined form of Radha and Krishna, and conducted the greatest conversation in all of Gaudiya Vaishnava literature.",
    type: "article",
  },
}

export default function BlogPostPage() {
  return <BlogClient />
}
