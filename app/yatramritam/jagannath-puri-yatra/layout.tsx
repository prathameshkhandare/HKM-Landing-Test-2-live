import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cinzel, Cormorant_Garamond, Inter } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jagannath Puri Yatra 2026 — Premium 3-Day Pilgrimage | Yatramritam",
  description:
    "Join Yatramritam's premium Jagannath Puri Yatra — 9-11 Oct 2026 from Chennai. Sri Jagannath Temple, Konark Sun Temple, Alarnath, Sakshi Gopal & more.",
  alternates: {
    canonical: "https://hkmchennai.org/jagannath-puri-yatra",
  },
  robots: {
    index: false,
    follow: false,
  },
  keywords: [
    "Jagannath Puri Yatra 2026",
    "Jagannath Puri pilgrimage Chennai",
    "Yatramritam HKM Chennai",
    "ISKCON Chennai Puri yatra",
    "Sri Jagannath Temple darshan",
    "Konark Sun Temple tour",
    "Alarnath Temple Puri",
    "Sakshi Gopal Temple",
    "Sri Chaitanya Mahaprabhu Puri",
    "premium Puri yatra package",
    "Dakshina Dwaraka Dham pilgrimage",
    "3 day Jagannath Puri tour from Chennai",
  ].join(", "),
  authors: [{ name: "Hare Krishna Movement Chennai", url: "https://hkmchennai.org" }],
  publisher: "Srila Prabhupada's ISKCON Thiruvanmiyur, Dakshina Dwaraka Dham, Chennai",
  creator: "HKM Chennai Digital Team",
  openGraph: {
    type: "website",
    url: "https://hkmchennai.org/jagannath-puri-yatra",
    title: "Jagannath Puri Yatra 2026 — Premium Pilgrimage | Yatramritam",
    description:
      "Walk the sacred land of Lord Jagannath and Sri Chaitanya Mahaprabhu. 9-11 Oct 2026. Limited seats.",
    siteName: "HKM Chennai — Srila Prabhupada's ISKCON Thiruvanmiyur",
    locale: "en_IN",
    images: [
      {
        url: "https://hkmchennai.org/images/yatramritam/puri-yatra-og.jpg",
        width: 1200,
        height: 630,
        alt: "Jagannath Puri Yatra 2026 — Yatramritam by HKM Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ChennaiHare",
    creator: "@ChennaiHare",
    title: "Jagannath Puri Yatra 2026 | Yatramritam — HKM Chennai",
    description: "Premium 3-day pilgrimage to Jagannath Puri, Konark & Bhubaneswar. 9-11 Oct 2026.",
    images: ["https://hkmchennai.org/images/yatramritam/puri-yatra-og.jpg"],
  },
  other: {
    "theme-color": "#050A14",
  },
};

export default function PuriYatraLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${cinzel.variable} ${cormorant.variable} ${inter.variable}`}>
      {children}
    </div>
  );
}
