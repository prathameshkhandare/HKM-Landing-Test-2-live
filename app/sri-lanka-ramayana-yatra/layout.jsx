// app/yatramritam/sri-lanka-ramayana-yatra/layout.jsx
// Next.js 13/14 App Router — place at the route segment level

import { Cinzel, Cinzel_Decorative, Inter } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel-decorative",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// ─── METADATA (Next.js 13/14 native) ─────────────────────────────────────────
export const metadata = {
  // ── Core ──────────────────────────────────────────────────────────────────
  title:
    "Sri Lanka Ramayana Yatra 2026 | 7-Day Sacred Pilgrimage | HKM Chennai — Yatramritam",
  description:
    "Join HKM Chennai's Yatramritam initiative for a 7-day, 6-night Sri Lanka Ramayana Yatra (26 Jul – 1 Aug 2026). Visit Seetha Amman Temple, Ravana Falls, Sigiriya, Hanuman Giri, ISKCON Sri Lanka & more. ₹1,32,000 all-inclusive. Limited seats.",

  // ── Canonical / Robots ────────────────────────────────────────────────────
  alternates: {
    canonical:
      "https://hkmchennai.org/yatramritam/sri-lanka-ramayana-yatra",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Keywords (legacy but still parsed by some crawlers/AI) ───────────────
  keywords: [
    "Sri Lanka Ramayana Yatra 2026",
    "Sri Lanka pilgrimage tour Chennai",
    "HKM Chennai yatra",
    "Yatramritam HKM Chennai",
    "Seetha Amman Temple Sri Lanka",
    "Ravana Falls Ella Sri Lanka tour",
    "ISKCON Thiruvanmiyur Sri Lanka yatra",
    "Ramayana sacred sites Sri Lanka",
    "devotional tour Sri Lanka",
    "Hanuman Giri Sri Lanka",
    "Divurumpola Agni Pariksha site",
    "Kathirgama Skanda Temple tour",
    "Dakshina Dwaraka Dham Chennai pilgrimage",
    "7 day Sri Lanka spiritual tour",
    "Ramayana trail Sri Lanka group tour",
  ].join(", "),

  // ── Authors / Publisher ───────────────────────────────────────────────────
  authors: [{ name: "Hare Krishna Movement Chennai", url: "https://hkmchennai.org" }],
  publisher: "Srila Prabhupada's ISKCON Thiruvanmiyur, Dakshina Dwaraka Dham, Chennai",
  creator: "HKM Chennai Digital Team",

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    url: "https://hkmchennai.org/yatramritam/sri-lanka-ramayana-yatra",
    title: "Sri Lanka Ramayana Yatra 2026 — 7 Days of Sacred Pilgrimage | Yatramritam by HKM Chennai",
    description:
      "Walk the sacred land where Maa Seetha Devi waited, Sri Hanuman searched, and Lord Ram's glory still echoes. 26 Jul – 1 Aug 2026. ₹1,32,000 all-inclusive. Register now.",
    siteName: "HKM Chennai — Srila Prabhupada's ISKCON Thiruvanmiyur",
    locale: "en_IN",
    images: [
      {
        url: "https://hkmchennai.org/images/yatramritam/sri-lanka-ramayana-yatra-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Lanka Ramayana Yatra 2026 — Yatramritam by HKM Chennai",
        type: "image/jpeg",
      },
    ],
  },

  // ── Twitter / X Card ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@ChennaiHare",
    creator: "@ChennaiHare",
    title: "Sri Lanka Ramayana Yatra 2026 | Yatramritam — HKM Chennai",
    description:
      "7-day sacred pilgrimage across Sri Lanka's Ramayana sites. 26 Jul – 1 Aug 2026. ₹1,32,000 all-inclusive. Only limited seats.",
    images: ["https://hkmchennai.org/images/yatramritam/sri-lanka-ramayana-yatra-og.jpg"],
  },

  // ── Verification (add your actual codes) ─────────────────────────────────
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  },

  // ── Additional meta for AI/GEO discovery ─────────────────────────────────
  other: {
    "article:publisher": "https://www.instagram.com/hkm_chennai",
    "og:locale:alternate": "ta_IN",
    "theme-color": "#0A0F2E",
  },
};

export default function RamayanaYatraLayout({ children }) {
  return (
    <div
      className={`${cinzel.variable} ${cinzelDecorative.variable} ${inter.variable}`}
    >
      {children}
    </div>
  );
}
