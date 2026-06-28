
import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
    title: "Sri Shyamananda Prabhu — The Torchbearer of Gaura-Nityananda's Message",
    description: "The complete life, pastimes, and teachings of Sri Shyamananda Prabhu — the Vaishnava acharya who received Srimati Radharani's direct mercy and flooded Odisha with pure devotion.",
    keywords: [
        "Sri Shyamananda Prabhu", 
        "Shyamananda", 
        "Gaudiya Vaishnavism", 
        "Vaishnava Acharya", 
        "Dukhi Krishnadasa", 
        "Srimati Radharani anklet", 
        "Nupur Tilaka", 
        "Sri Sri Radha-Shyamsundar Temple", 
        "Srila Jiva Goswami", 
        "Preaching in Odisha", 
        "Sri Rasikananda Prabhu", 
        "Hare Krishna Movement Chennai"
    ],
    openGraph: {
        title: "Sri Shyamananda Prabhu — The Torchbearer of Gaura-Nityananda's Message in Odisha",
        description: "Discover the extraordinary life of the devotee who received Srimati Radharani's direct mercy and flooded Odisha with pure devotion.",
        images: ["/assets/blog/sri-shyamananda-prabhu/Sri_Shyamananda_Prabhu_The_Torchbearer_of_Gaura-Nityananda_s_Message_in_Odisha.png"],
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sri Shyamananda Prabhu — The Torchbearer of Gaura-Nityananda's Message",
        description: "Discover the extraordinary life of the devotee who received Srimati Radharani's direct mercy and flooded Odisha with pure devotion.",
        images: ["/assets/blog/sri-shyamananda-prabhu/Sri_Shyamananda_Prabhu_The_Torchbearer_of_Gaura-Nityananda_s_Message_in_Odisha.png"],
    }
}

export default function Page() {
    return <BlogClient />
}
