import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
  title: "Srila Baladeva Vidyabhushana: The Gaudiya Acharya Who Defended a Sampradaya | HKM Chennai",
  description:
    "Discover the life and glories of Srila Baladeva Vidyabhushana — who wrote the Govinda-bhashya and defended the Gaudiya sampradaya at Jaipur. Based on Srila Prabhupada's teachings.",
  openGraph: {
    title: "Srila Baladeva Vidyabhushana — The Gaudiya Acharya Who Defended a Sampradaya",
    description:
      "The acharya who composed the Govinda-bhashya, prostrated before Govindaji for three days, and secured the victory of the Gaudiya sampradaya at Galta, Jaipur in 1718 CE.",
    type: "article",
  },
}

export default function BlogPostPage() {
  return <BlogClient />
}
