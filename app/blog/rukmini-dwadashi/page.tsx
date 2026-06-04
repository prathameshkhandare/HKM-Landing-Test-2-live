import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
  title: "Rukmini Dwadashi: The Appearance Day of Srimati Rukmini Devi | Srila Prabhupada's ISKCON Thiruvanmiyur",
  description:
    "Rukmini Dwadashi is the divine appearance day of Srimati Rukmini Devi — Krishna's eternal queen and the Goddess of Fortune. Read her full story and join our celebration at Dakshina Dwaraka Dham, Chennai.",
  openGraph: {
    title: "Rukmini Dwadashi: The Appearance Day of Srimati Rukmini Devi | Srila Prabhupada's ISKCON Thiruvanmiyur",
    description:
      "Rukmini Dwadashi is the divine appearance day of Srimati Rukmini Devi — Krishna's eternal queen and the Goddess of Fortune.",
    type: "article",
  },
}

export default function BlogPostPage() {
  return <BlogClient />
}
