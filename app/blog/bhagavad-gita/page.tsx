import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
  title: "Bhagavad Gita - Applying Eternal Wisdom in Daily Life | ISKCON Thiruvanmiyur",
  description:
    "A reflective blog article on the main teachings of the Bhagavad Gita and how they guide modern life, duty, devotion, and inner peace.",
  openGraph: {
    title: "Bhagavad Gita - Applying Eternal Wisdom in Daily Life | ISKCON Thiruvanmiyur",
    description:
      "A reflective blog article on the main teachings of the Bhagavad Gita and how they guide modern life, duty, devotion, and inner peace.",
    type: "article",
  },
}

export default function BlogPostPage() {
  return <BlogClient />
}
