import KailashYatraPage from "./KailashYatraPage";

export const metadata = {
  title: "Kailash Manasa Sarovar Yatra 2026 | Yatramritam — ISKCON Thiruvanmiyur",
  description: "Join the 13-day Kailash Manasa Sarovar Yatra (23 Aug – 4 Sep 2026) with Srila Prabhupada's ISKCON Thiruvanmiyur. Complete Kailash Parikrama, Manasarovar darshan, Pashupatinath puja & more. Limited seats.",
  keywords: [
    "Kailash Manasarovar Yatra 2026",
    "Kailash Yatra ISKCON",
    "Mount Kailash Parikrama",
    "Manasarovar Yatra Chennai",
    "Yatramritam",
    "HKM Chennai pilgrimage",
    "Kailash Yatra land route",
    "ISKCON Thiruvanmiyur yatra",
  ],
  alternates: {
    canonical: `https://www.hkmchennai.org/kailash-manasarovar-yatra`,
  },
  openGraph: {
    title: "Kailash Manasa Sarovar Yatra 2026 | Yatramritam",
    description: "A 13-day sacred journey to the divine abode of Lord Śiva — guided by Srila Prabhupada's ISKCON Thiruvanmiyur. 23 Aug – 4 Sep 2026.",
    url: `https://www.hkmchennai.org/kailash-manasarovar-yatra`,
    siteName: "Hare Krishna Movement Chennai",
    images: [
      {
        url: `https://www.hkmchennai.org/assets/kailash-yatra/kailash-manasarovar-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Mount Kailash and Manasarovar Lake",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KailashYatraPage />;
}
