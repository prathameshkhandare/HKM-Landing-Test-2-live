import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Sri Srivasa Thakura: Heart of the Sankirtana Movement | HKM Chennai",
  description:
    "Discover Sri Srivasa Thakura, the Panca-tattva devotee in whose courtyard Lord Chaitanya first held nightly sankirtana that grew into a worldwide movement.",
  keywords: [
    "Sri Srivasa Thakura",
    "Srivasa Angan",
    "Panca-tattva",
    "Maha-prakasha-lila",
    "Chand Kazi sankirtana",
    "Narayani",
    "Vrindavana dasa Thakura",
    "Nrisimha-avesa",
    "Ratha-yatra sankirtana",
    "Gaudiya Vaishnava saints",
    "Sri Chaitanya Mahaprabhu associates",
    "ISKCON Thiruvanmiyur blog",
  ],
  alternates: {
    canonical: "https://hkmchennai.org/blog/sri-srivasa-thakura-heart-of-sankirtana",
  },
  openGraph: {
    title: "Sri Srivasa Thakura: Heart of the Sankirtana Movement",
    description:
      "The Panca-tattva devotee in whose courtyard Lord Chaitanya first revealed the nightly sankirtana that would flood the world.",
    url: "https://hkmchennai.org/blog/sri-srivasa-thakura-heart-of-sankirtana",
    type: "article",
    images: [
      {
        url: "https://hkmchennai.org/og/sri-srivasa-thakura.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Srivasa Thakura, member of the Panca-tattva and host of Lord Chaitanya's nightly sankirtana.",
      },
    ],
  },
};

export default function Page() {
    return <BlogClient />;
}
