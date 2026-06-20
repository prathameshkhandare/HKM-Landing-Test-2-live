import KailashYatraPage from "./KailashYatraPage";

export const metadata = {
  title: "Kailash Mansarovar Yatra 2026 | Yatramritam — ISKCON Thiruvanmiyur",
  description: "Join the 13-day Kailash Mansarovar Yatra (23 Aug – 4 Sep 2026) with Srila Prabhupada's ISKCON Thiruvanmiyur. Complete Kailash Parikrama, Manasarovar darshan, Pashupatinath puja & more. Limited seats.",
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
    title: "Kailash Mansarovar Yatra 2026 | Yatramritam",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Kailash Mansarovar Yatra 2026",
    "description": "13-day sacred journey to Mount Kailash and Manasarovar Lake with Srila Prabhupada's ISKCON Thiruvanmiyur.",
    "image": "https://www.hkmchennai.org/assets/kailash-yatra/kailash-manasarovar-hero.jpg",
    "startDate": "2026-08-23",
    "endDate": "2026-09-04",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Mount Kailash",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "CN"
      }
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.hkmchennai.org/kailash-manasarovar-yatra",
      "price": "329000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01"
    },
    "organizer": {
      "@type": "Organization",
      "name": "Srila Prabhupada's ISKCON Thiruvanmiyur - HKM Chennai",
      "url": "https://hkmchennai.org"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KailashYatraPage />
    </>
  );
}
