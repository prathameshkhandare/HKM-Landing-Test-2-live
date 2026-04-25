import type { Metadata } from "next"
import JahnavaDeviClient from "./JahnavaDeviClient"

const path = "/blog/srimati-jahnava-devi-appearance-disappearance-day"
const ogImage = "https://hkmchennai.org/assets/blog/srimati-jahnava-devi/orgradhikai2.png"

export const metadata: Metadata = {
  title: "Śrīmatī Jāhnavā Devī — Appearance & Disappearance Glories | HKM Chennai",
  description:
    "Glorification of Śrīmatī Jāhnavā Devī — eternal consort of Lord Nityānanda Prabhu and ācārya in the Gauḍīya Vaiṣṇava tradition — compiled from Śrīla Prabhupāda’s books, purports, and conversations.",
  keywords: [
    "Jāhnavā Devī",
    "Jāhnavā Mata",
    "Nityānanda Prabhu",
    "Anaṅga-mañjarī",
    "Gauḍīya Vaiṣṇavism",
    "Śrīla Prabhupāda",
    "HKM Chennai",
  ],
  alternates: { canonical: `https://hkmchennai.org${path}` },
  openGraph: {
    type: "article",
    title: "Śrīmatī Jāhnavā Devī — The Pleasure Potency of Lord Nityānanda",
    description:
      "Who is Śrīmatī Jāhnavā Devī? Her glories from Śrī Caitanya-caritāmṛta, conversations, and tradition — at HKM Chennai.",
    url: `https://hkmchennai.org${path}`,
    siteName: "Dakshina Dvārakā Dhāma — HKM Chennai",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "All glories to Śrīmatī Jāhnavā Devī | HKM Chennai",
    description:
      "The pleasure potency of Śrī Nityānanda Prabhu — from His Divine Grace A.C. Bhaktivedanta Swami Prabhupāda’s teachings.",
    images: [ogImage],
  },
}

export default function SrimatiJahnavaDeviPage() {
  return <JahnavaDeviClient />
}
