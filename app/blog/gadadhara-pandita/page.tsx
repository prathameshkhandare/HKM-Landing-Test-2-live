import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
    title: "Śrī Gadādhara Paṇḍita: The Foremost Among the Internal Potencies | Srila Prabhupada's ISKCON Thiruvanmiyur",
    description: "Śrī Gadādhara Paṇḍita — the foremost internal potency of Lord Caitanya, an incarnation of Śrīmatī Rādhārāṇī Herself. A comprehensive article based on Śrīla Prabhupāda's Caitanya-caritāmṛta purports, lectures and letters.",
    keywords: ["Gadadhara Pandita", "Panca-tattva", "internal potency Caitanya", "Tota Gopinatha", "Radharani incarnation"],
    openGraph: {
        title: "Śrī Gadādhara Paṇḍita: The Foremost Among the Internal Potencies",
        description: "An incarnation of Śrīmatī Rādhārāṇī in the pastimes of Lord Śrī Caitanya Mahāprabhu.",
        images: ["/assets/blog/gadadhara-pandita/panchtattva.jpg"],
    },
}

export default function GadadharaPanditaPage() {
    return <BlogClient />
}
