import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
    title: "Sri Svarupa Damodara Gosvami: Secretary and Confidant of Sri Chaitanya Mahaprabhu | HKM Chennai",
    description: "The life of Sri Svarupa Damodara Gosvami — secretary, singer, and most intimate confidant of Sri Chaitanya Mahaprabhu's final twelve years in Jagannatha Puri, drawn from Srila Prabhupada's Sri Chaitanya-charitamrita.",
    keywords: ["Svarupa Damodara Gosvami", "Chaitanya Mahaprabhu", "Jagannatha Puri", "Gambhira", "Vishakha-sakhi", "Gaudiya Vaishnavism"],
    alternates: {
        canonical: "https://hkmchennai.org/blog/svarupa-damodara-gosvami",
    },
    openGraph: {
        title: "Sri Svarupa Damodara Gosvami: Secretary and Confidant of Sri Chaitanya Mahaprabhu",
        description: "The life of Sri Svarupa Damodara Gosvami — secretary, singer, and most intimate confidant of Sri Chaitanya Mahaprabhu's final twelve years in Jagannatha Puri.",
        url: "https://hkmchennai.org/blog/svarupa-damodara-gosvami",
        siteName: "Srila Prabhupada's ISKCON Thiruvanmiyur — Dakshina Dwaraka Dham",
        type: "article",
        images: ["/assets/blog/svarupa-damodara-gosvami/hero.jpg"],
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sri Svarupa Damodara Gosvami: Secretary and Confidant of Sri Chaitanya Mahaprabhu",
        description: "The life of Sri Svarupa Damodara Gosvami — secretary, singer, and most intimate confidant of Sri Chaitanya Mahaprabhu's final twelve years in Jagannatha Puri.",
        images: ["/assets/blog/svarupa-damodara-gosvami/hero.jpg"],
    },
}

export default function SvarupaDamodaraGosvamiPage() {
    return <BlogClient />
}
