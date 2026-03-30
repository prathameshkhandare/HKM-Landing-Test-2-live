import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
  title: "Rama Navami - The Appearance Day of Lord Ramacandra | ISKCON Thiruvanmiyur",
  description:
    "Discover the spiritual significance of Rama Navami — the appearance day of Lord Ramachandra — through the timeless teachings of Srila Prabhupada.",
  openGraph: {
    title: "Rama Navami - The Appearance Day of Lord Ramacandra | ISKCON Thiruvanmiyur",
    description:
      "Discover the spiritual significance of Rama Navami — the appearance day of Lord Ramachandra — through the timeless teachings of Srila Prabhupada.",
    type: "article",
  },
}

export default function BlogPostPage() {
  return <BlogClient />
}
