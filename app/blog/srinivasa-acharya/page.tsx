import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
  title: "Sri Srinivasa Acharya: The Link Between the Gosvamis and All of Us | HKM Chennai",
  description:
    "Sri Srinivasa Acharya is the direct link between the Six Gosvamis of Vrindavana and all subsequent acharyas — including Srila Prabhupada. Learn about his life, his mission to Bengal, the Sad-gosvamy-ashtaka, and why every devotee owes him an eternal debt.",
  openGraph: {
    title: "Sri Srinivasa Acharya: The Link Between the Gosvamis and All of Us",
    description:
      "The life, mission and glories of Sri Srinivasa Acharya — the preacher who carried the Gosvamis' treasure from Vrindavana to Bengal.",
    type: "article",
  },
}

export default function BlogPostPage() {
  return <BlogClient />
}
