import type { Metadata } from "next"
import MadhuPanditaGosvamiContent from "./MadhuPanditaGosvamiContent"

const ogImage = "/assets/blog/sri-madhu-pandita-gosvami/Madhu_Pandita_Goswami.png"

export const metadata: Metadata = {
  title: "Śrī Madhu Paṇḍita Gosvāmī — Gopinātha, Lineage & Glories | Srila Prabhupada's ISKCON Thiruvanmiyur",
  description:
    "The life and devotion of Śrī Madhu Paṇḍita Gosvāmī — disciple of Śrī Gadadhara Paṇḍita, founder of the Gopinātha Temple in Vṛndāvana, and his place in the Caitanya-paramparā.",
  keywords: [
    "Madhu Pandita Gosvami",
    "Gopinatha",
    "Gadadhara Pandita",
    "Saptadevalyas",
    "Vrindavan Gopinatha",
    "Caitanya Mahaprabhu",
    "Srila Prabhupada's ISKCON Thiruvanmiyur",
  ],
  alternates: { canonical: "https://hkmchennai.org/blog/sri-madhu-pandita-gosvami" },
  openGraph: {
    type: "article",
    title: "Śrī Madhu Paṇḍita Gosvāmī — The Devoted Servant of Gopinātha",
    description:
      "The life, devotion, and eternal glories of Śrī Madhu Paṇḍita Gosvāmī in the Gaudīya Vaiṣṇava tradition.",
    url: "https://hkmchennai.org/blog/sri-madhu-pandita-gosvami",
    siteName: "Dakshina Dvāraka Dhāma — Srila Prabhupada's ISKCON Thiruvanmiyur",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Śrī Madhu Paṇḍita Gosvāmī — The Devoted Servant of Gopinātha",
    description: "Disciple of Śrī Gadadhara Paṇḍita and founder of the Gopinātha Temple in Vṛndāvana.",
    images: [ogImage],
  },
}

export default function SriMadhuPanditaGosvamiPage() {
  return <MadhuPanditaGosvamiContent />
}
