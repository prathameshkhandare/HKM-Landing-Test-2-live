import type { Metadata } from "next"
import JahnavaDeviClient from "./JahnavaDeviClient"

const path = "/blog/srimati-jahnava-devi-appearance-disappearance-day"
const ogImage = "https://hkmchennai.org/assets/blog/srimati-jahnava-devi/orgradhikai2.png"

export const metadata: Metadata = {
  title: "Śrīmatī Jāhnavā Devī — Appearance & Disappearance Glories | Srila Prabhupada's ISKCON Thiruvanmiyur",
  description:
    "Glorification of Śrīmatī Jāhnavā Devī — eternal consort of Lord Nityānanda Prabhu and ācārya in the Gauḍīya Vaiṣṇava tradition — compiled from Śrīla Prabhupāda’s books, purports, and conversations.",
  keywords: [
    "Jāhnavā Devī",
    "Jāhnavā Mata",
    "Nityānanda Prabhu",
    "Anaṅga-mañjarī",
    "Gauḍīya Vaiṣṇavism",
    "Śrīla Prabhupāda",
    "Srila Prabhupada's ISKCON Thiruvanmiyur",
  ],
  alternates: { canonical: `https://hkmchennai.org${path}` },
  openGraph: {
    type: "article",
    title: "Śrīmatī Jāhnavā Devī — The Pleasure Potency of Lord Nityānanda",
    description:
      "Who is Śrīmatī Jāhnavā Devī? Her glories from Śrī Caitanya-caritāmṛta, conversations, and tradition — at Srila Prabhupada's ISKCON Thiruvanmiyur.",
    url: `https://hkmchennai.org${path}`,
    siteName: "Dakshina Dvārakā Dhāma — Srila Prabhupada's ISKCON Thiruvanmiyur",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "All glories to Śrīmatī Jāhnavā Devī | Srila Prabhupada's ISKCON Thiruvanmiyur",
    description:
      "The pleasure potency of Śrī Nityānanda Prabhu — from His Divine Grace A.C. Bhaktivedanta Swami Prabhupāda’s teachings.",
    images: [ogImage],
  },
}

export default function SrimatiJahnavaDeviPage() {
  return <JahnavaDeviClient />
}
