import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
    title: "Akshaya Tritiya 2026 – Meaning, Significance & How to Observe | HKM Chennai",
    description: "Discover the true meaning of Akshaya Tritiya — 9 sacred events, pastimes of Sudāmā & Rukmiṇī, and how to observe this auspicious day with devotion to Lord Kṛṣṇa.",
    keywords: ["Akshaya Tritiya", "Akshaya Tritiya significance", "Akshaya Tritiya meaning", "what is Akshaya Tritiya", "Akshaya Tritiya 2026", "how to observe Akshaya Tritiya", "Chandan Yatra", "Sudama Krishna", "Tulabhara"],
    openGraph: {
        title: "Akshaya Tritiya – The Inexhaustible Day of Eternal Blessings",
        description: "Discover the true meaning of Akshaya Tritiya — 9 sacred events, pastimes of Sudāmā & Rukmiṇī, and how to observe this auspicious day with devotion to Lord Kṛṣṇa.",
        images: ["/assets/blog/akshaya-tritiya/sudama_krishna.png"],
    },
}

export default function AkshayaTritiyaPage() {
    return <BlogClient />
}
