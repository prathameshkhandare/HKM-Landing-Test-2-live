import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
  title: "Caste System Truth: What Srila Prabhupada Actually Taught",
  description:
    "Discover what Srila Prabhupada teaches about caste: the divine varnasrama system vs. birth-based caste, how it corrupted society, and why Krishna consciousness is the solution.",
  openGraph: {
    title: "Caste System Truth: What Srila Prabhupada Actually Taught",
    description:
      "Discover what Srila Prabhupada teaches about caste: the divine varnasrama system vs. birth-based caste, how it corrupted society, and why Krishna consciousness is the solution.",
    type: "article",
  },
}

export default function BlogPostPage() {
  return <BlogClient />
}
