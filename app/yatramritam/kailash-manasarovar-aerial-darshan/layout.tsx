import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Kailash Mansarovar Yatra 2026 — Aerial Darshan | No Passport, No Visa | Yatramritam",
  description:
    "Join Yatramritam's Kailash Mansarovar Yatra by Aerial Darshan — 23–26 Sept 2026 from Lucknow. No passport, no visa, no age limit. ₹1,25,000 all-inclusive. ISKCON Chennai devotee-guided pilgrimage.",
  alternates: {
    canonical: "https://hkmchennai.org/yatramritam/kailash-manasarovar-aerial-darshan",
  },
  keywords: [
    "Kailash Mansarovar Yatra 2026",
    "Kailash aerial darshan",
    "Kailash yatra no passport no visa",
    "Yatramritam HKM Chennai",
    "ISKCON Chennai Kailash yatra",
    "Mount Kailash darshan flight",
    "Manasa Sarovar darshan",
    "Bageshwari Shakti Peeth Nepalgunj",
    "Kailash yatra for senior citizens",
    "Dakshina Dwaraka Dham pilgrimage",
    "Kailash yatra from Lucknow",
    "4 day Kailash yatra package",
  ].join(", "),
  openGraph: {
    type: "website",
    url: "https://hkmchennai.org/yatramritam/kailash-manasarovar-aerial-darshan",
    title: "Kailash Mansarovar Yatra 2026 — Aerial Darshan | Yatramritam",
    description:
      "No passport. No visa. No age limit. Witness Mount Kailash & Manasa Sarovar by aerial darshan — 23–26 Sept 2026. ₹1,25,000 all-inclusive.",
    siteName: "HKM Chennai — Srila Prabhupada's ISKCON Thiruvanmiyur",
    locale: "en_IN",
    images: [
      {
        url: "https://hkmchennai.org/images/yatramritam/kailash-yatra-og.jpg",
        width: 1200,
        height: 630,
        alt: "Kailash Mansarovar Yatra 2026 — Yatramritam by HKM Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ChennaiHare",
    title: "Kailash Mansarovar Yatra 2026 | Yatramritam — HKM Chennai",
    description:
      "Aerial darshan of Mount Kailash & Manasa Sarovar. No passport, no visa, no age limit. 23–26 Sept 2026. ₹1,25,000 all-inclusive.",
    images: ["https://hkmchennai.org/images/yatramritam/kailash-yatra-og.jpg"],
  },
};

export default function KailashYatraLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
