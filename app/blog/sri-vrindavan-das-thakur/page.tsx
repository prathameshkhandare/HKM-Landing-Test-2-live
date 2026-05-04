import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
  title: "Śrī Vṛndāvana Dāsa Ṭhākura: The Vyāsa of the Chaitanya-līlā | HKM Chennai",
  description:
    "Discover the glories of Śrī Vṛndāvana Dāsa Ṭhākura — Vyāsa of the Chaitanya-līlā, author of the Chaitanya Bhāgavata, disciple of Śrī Nityānanda Prabhu. Based exclusively on Śrīla Prabhupāda's verified teachings. HKM Chennai.",
  openGraph: {
    title: "Śrī Vṛndāvana Dāsa Ṭhākura: The Vyāsa of the Chaitanya-līlā",
    description:
      "The life, glories, and sacred places of Śrī Vṛndāvana Dāsa Ṭhākura — the incarnation of Vedavyāsa who preserved the pastimes of Lord Chaitanya for the entire world.",
    type: "article",
  },
}

export default function BlogPostPage() {
  return <BlogClient />
}
