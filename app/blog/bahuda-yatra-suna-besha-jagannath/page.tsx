import type { Metadata } from "next";
import BlogClient from "./BlogClient";

const PAGE_URL = "https://hkmchennai.org/blog/bahuda-yatra-suna-besha-jagannath";
const PAGE_TITLE = "Bahuda Yatra & Suna Besha: Lord Jagannath's Journey Home and Golden Return | HKM Chennai";
const PAGE_DESCRIPTION =
  "Discover Bahuda Yatra, Lord Jagannath's return journey, and Suna Besha, His golden attire — their story, rituals, and Chaitanya Mahaprabhu connection.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "Bahuda Yatra",
    "Bahuda Yatra Suna Besha",
    "Bahuda Yatra meaning",
    "Suna Besha history Kapilendra Deva",
    "why Balabhadra chariot pulled first return",
    "Mausi Maa temple Poda Pitha",
    "Ulta Ratha Puri",
    "Suna Besha gold ornaments Jagannath",
    "Ardhasini Mausi Maa story",
    "Bahuda Yatra Chaitanya Mahaprabhu",
    "Dakshina Moda Goti Pahandi",
    "Tadhau Karana Suna Besha",
    "Queen Gundicha Jagannath temple origin",
    "Adapa Darshan Gundicha Temple significance",
    "Gundicha Temple Jagannath birthplace Mahavedi",
    "ISKCON Thiruvanmiyur blog"
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Bahuda Yatra & Suna Besha: Lord Jagannath's Journey Home and Golden Return",
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    siteName: "Srila Prabhupada's ISKCON Thiruvanmiyur — Dakshina Dwaraka Dham",
    images: [
      {
        url: "https://hkmchennai.org/assets/blog/bahuda-yatra-suna-besha-jagannath/Jagannath%20Baladeva%20and%20subhadra%20Deities%20adorned%20in%20gold%20ornaments%20during%20Suna%20Besha%20at%20Singhadwara%201.jpeg",
        width: 1200,
        height: 630,
        alt: "Jagannath Baladeva and Subhadra Deities adorned in gold ornaments during Suna Besha at Singhadwara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bahuda Yatra & Suna Besha: Lord Jagannath's Journey Home and Golden Return",
    description: PAGE_DESCRIPTION,
  },
};

export default function Page() {
  return <BlogClient />;
}
