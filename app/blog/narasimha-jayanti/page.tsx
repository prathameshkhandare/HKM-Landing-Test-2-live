import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
  title: "Narasimha Jayantī: The Divine Appearance of Lord Nṛsiṃhadeva | Srila Prabhupada's ISKCON Thiruvanmiyur",
  description:
    "Narasimha Jayanti celebrates the divine appearance of Lord Nṛsiṃhadeva, the half-man half-lion incarnation of Viṣṇu. Discover the full story, Prahlāda Mahārāja's prayers, and our celebration at Dakṣiṇa Dwārakā Dhām, Chennai.",
  openGraph: {
    title: "Narasimha Jayantī: The Divine Appearance of Lord Nṛsiṃhadeva | Srila Prabhupada's ISKCON Thiruvanmiyur",
    description:
      "Narasimha Jayanti celebrates the divine appearance of Lord Nṛsiṃhadeva, the half-man half-lion incarnation of Viṣṇu. Discover the full story, Prahlāda Mahārāja's prayers, and our celebration at Dakṣiṇa Dwārakā Dhām, Chennai.",
    type: "article",
  },
}

export default function BlogPostPage() {
  return <BlogClient />
}
