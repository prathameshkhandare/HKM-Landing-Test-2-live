import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
  title: "Panihati Chida Dadhi Mahotsava: The Festival of Chipped Rice and Devotion | HKM Chennai",
  description:
    "Discover the sacred Panihati Chida Dadhi Mahotsava — Lord Nityananda's festival of chipped rice and yogurt. Learn its story, significance, and how HKM Chennai celebrates this blissful Vaishnava festival.",
  openGraph: {
    title: "Panihati Chida Dadhi Mahotsava — The Blissful Festival of Chipped Rice and Nityananda's Mercy",
    description:
      "The day Lord Nityananda 'punished' Raghunatha Dasa Goswami with a feast that fed thousands and opened the door to Sri Chaitanya Mahaprabhu's mercy.",
    type: "article",
  },
}

export default function BlogPostPage() {
  return <BlogClient />
}
