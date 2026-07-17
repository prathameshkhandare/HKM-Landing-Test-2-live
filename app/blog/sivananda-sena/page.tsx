import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
    title: "Sri Sivananda Sena: Guide of the Pilgrims | HKM Chennai",
    description: "Discover Sri Sivananda Sena, the devotee who guided and financed the annual Bengal-to-Puri pilgrimage for Sri Chaitanya Mahaprabhu's devotees.",
    keywords: [
        "Sri Sivananda Sena",
        "Chaitanya tree branches",
        "Kavi-karnapura",
        "Gaura-ganoddesha-dipika",
        "Kumarahatta",
        "Kanchadapada temple",
        "Jagannatha Puri pilgrimage",
        "Vasudeva Datta sarakhela",
        "Gaudiya Vaishnava saints",
        "ISKCON Thiruvanmiyur blog",
    ],
    alternates: {
        canonical: "https://hkmchennai.org/blog/sivananda-sena",
    },
    openGraph: {
        title: "Sri Sivananda Sena: Guide of the Pilgrims",
        description: "Discover Sri Sivananda Sena, the devotee who guided and financed the annual Bengal-to-Puri pilgrimage for Sri Chaitanya Mahaprabhu's devotees.",
        url: "https://hkmchennai.org/blog/sivananda-sena",
        siteName: "Srila Prabhupada's ISKCON Thiruvanmiyur — Dakshina Dwaraka Dham",
        type: "article",
        images: ["/assets/blog/sivananda-sena/sivananda-sena-featured.jpg"],
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sri Sivananda Sena: Guide of the Pilgrims",
        description: "Discover Sri Sivananda Sena, the devotee who guided and financed the annual Bengal-to-Puri pilgrimage for Sri Chaitanya Mahaprabhu's devotees.",
        images: ["/assets/blog/sivananda-sena/sivananda-sena-featured.jpg"],
    },
}

export default function SivanandaSenaPage() {
    return <BlogClient />
}
