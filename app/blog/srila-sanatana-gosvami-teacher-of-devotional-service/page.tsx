import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Srila Sanatana Gosvami: Teacher of Devotional Service | HKM Chennai",
  description:
    "Discover Srila Sanatana Gosvami, the minister-turned-Gosvami who received Lord Chaitanya's teachings and founded Vrindavana's Deity worship and literature.",
  keywords: [
    "Srila Sanatana Gosvami",
    "Six Gosvamis of Vrindavana",
    "Rupa Gosvami brother",
    "Madana-mohana temple",
    "Hari-bhakti-vilasa",
    "Brihad-Bhagavatamrita",
    "jivera swarupa haya",
    "touchstone story",
    "Govardhana shila",
    "Gaudiya Vaishnava saints",
    "ISKCON Thiruvanmiyur blog",
  ],
  alternates: {
    canonical: "https://hkmchennai.org/blog/srila-sanatana-gosvami-teacher-of-devotional-service",
  },
  openGraph: {
    title: "Srila Sanatana Gosvami: Teacher of Devotional Service",
    description:
      "The minister-turned-Gosvami who received Lord Chaitanya's teachings and founded Vrindavana's Deity worship and literature.",
    url: "https://hkmchennai.org/blog/srila-sanatana-gosvami-teacher-of-devotional-service",
    type: "article",
    images: [
      {
        url: "https://hkmchennai.org/assets/blog/srila-sanatana-gosvami/Srila%20Sanatan%20goswami.png",
        width: 1200,
        height: 630,
        alt: "Srila Sanatana Gosvami, eldest of the Six Gosvamis of Vrindavana.",
      },
    ],
  },
};

export default function Page() {
  return <BlogClient />;
}
