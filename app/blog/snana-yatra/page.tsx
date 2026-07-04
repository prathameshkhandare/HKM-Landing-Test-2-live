import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
    title: "Snana Yatra: Lord Jagannath's Bathing Festival & Its Connection to Sri Chaitanya Mahaprabhu | HKM Chennai",
    description: "Discover the deep meaning of Snana Yatra, Lord Jagannath's sacred bathing festival, and its moving connection to Sri Chaitanya Mahaprabhu's pastimes at Alarnath.",
    keywords: [
        "Snana Yatra", 
        "Snana Yatra date", 
        "Lord Jagannath bathing festival", 
        "Anavasara meaning", 
        "why Jagannath temple closes 15 days", 
        "Chaitanya Mahaprabhu Alarnath pastime", 
        "Deva Snana Purnima significance", 
        "Jagannath Snana Yatra ISKCON", 
        "Gajanana Vesha Jagannath", 
        "Snana Yatra to Ratha Yatra", 
        "Netrotsava Jagannath", 
        "Hare Krishna Movement Chennai",
        "HKM Chennai blog"
    ],
    alternates: {
        canonical: "https://hkmchennai.org/blog/snana-yatra",
    },
    openGraph: {
        title: "Snana Yatra — Jagannath's Bath & Mahaprabhu's Pastime",
        description: "Discover the deep meaning of Snana Yatra, Lord Jagannath's sacred bathing festival, and its moving connection to Sri Chaitanya Mahaprabhu's pastimes at Alarnath.",
        url: "https://hkmchennai.org/blog/snana-yatra",
        siteName: "HKM Chennai — Dakshina Dwaraka Dham",
        locale: "en_IN",
        type: "article",
        publishedTime: "2026-07-04T00:00:00+05:30",
        authors: ["HKM Chennai Digital Content Team"],
        images: [
            {
                url: "https://hkmchennai.org/assets/blog/snana-yatra/bathing.jpg.jpeg",
                width: 1200,
                height: 630,
                alt: "Lord Jagannath, Balabhadra and Subhadra being ceremonially bathed during Snana Yatra at Puri",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Snana Yatra — Jagannath's Bath & Mahaprabhu's Pastime",
        description: "Discover the deep meaning of Snana Yatra, Lord Jagannath's sacred bathing festival, and its moving connection to Sri Chaitanya Mahaprabhu's pastimes at Alarnath.",
        images: ["https://hkmchennai.org/assets/blog/snana-yatra/bathing.jpg.jpeg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://hkmchennai.org/blog/snana-yatra#article",
      headline: "Snana Yatra: Lord Jagannath's Bathing Festival & Its Connection to Sri Chaitanya Mahaprabhu",
      description: "Discover the deep meaning of Snana Yatra, Lord Jagannath's sacred bathing festival, and its moving connection to Sri Chaitanya Mahaprabhu's pastimes at Alarnath.",
      image: "https://hkmchennai.org/assets/blog/snana-yatra/bathing.jpg.jpeg",
      datePublished: "2026-07-04T00:00:00+05:30",
      author: { "@type": "Organization", name: "Srila Prabhupada's ISKCON Thiruvanmiyur — Dakshina Dwaraka Dham", url: "https://hkmchennai.org" },
      publisher: { "@type": "ReligiousOrganization", name: "Hare Krishna Movement Chennai", url: "https://hkmchennai.org", logo: { "@type": "ImageObject", url: "https://hkmchennai.org/images/logo.png" } },
      mainEntityOfPage: "https://hkmchennai.org/blog/snana-yatra",
      keywords: "Snana Yatra, Jagannath, Ratha Yatra Series, Chaitanya Mahaprabhu, Puri, Anavasara, Alarnath, Gaudiya Vaishnavism",
      inLanguage: "en",
      isPartOf: { "@type": "Blog", name: "HKM Chennai Blog", url: "https://hkmchennai.org/blog" },
      articleBody: "Snana Yatra is the annual bathing festival of Lord Jagannath, Lord Balabhadra, and Devi Subhadra, observed on the full moon day of Jyeshtha (May–June) at the Jagannath Temple in Puri. Also known as Deva Snana Purnima, it marks the only day of the year when the deities leave the temple's inner sanctum to be publicly bathed — and it opens a fortnight of pastimes that carries profound meaning for followers of Sri Chaitanya Mahaprabhu."
    },
    {
      "@type": "ReligiousOrganization",
      "@id": "https://hkmchennai.org#organization",
      name: "Hare Krishna Movement Chennai — Dakshina Dwaraka Dham",
      alternateName: ["ISKCON Thiruvanmiyur", "HKM Chennai"],
      url: "https://hkmchennai.org",
      address: { "@type": "PostalAddress", streetAddress: "63, 1st Seaward Road, Valmiki Nagar", addressLocality: "Thiruvanmiyur", addressRegion: "Chennai, Tamil Nadu", postalCode: "600041", addressCountry: "IN" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hkmchennai.org" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://hkmchennai.org/blog" },
        { "@type": "ListItem", position: 3, name: "Snana Yatra", item: "https://hkmchennai.org/blog/snana-yatra" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "When is Snana Yatra?", acceptedAnswer: { "@type": "Answer", text: "Snana Yatra falls on Jyeshtha Purnima, the full moon day of the lunar month of Jyeshtha. Because this is a lunar date, it shifts each year on the Gregorian calendar, so devotees should check the temple's current Vaishnava calendar for this year's exact date." } },
        { "@type": "Question", name: "What is Anavasara?", acceptedAnswer: { "@type": "Answer", text: "Anavasara (also spelled Anasara) is the fifteen-day period following Snana Yatra during which Lord Jagannath, Balabhadra, and Subhadra are withdrawn from public darshan while Their pigments are traditionally restored. Temple tradition describes this as the Lord catching a fever from the bathing." } },
        { "@type": "Question", name: "Why does the Jagannath Temple close for 15 days after Snana Yatra?", acceptedAnswer: { "@type": "Answer", text: "The temple does not fully close, but the deities are moved out of public view during Anavasara so that their pigments can be restored by hereditary painters. Devotees worship cloth paintings called Anasara Patti in Their place until Netrotsava." } },
        { "@type": "Question", name: "Why does Chaitanya Mahaprabhu go to Alarnath during this period?", acceptedAnswer: { "@type": "Answer", text: "Unable to bear separation from Lord Jagannath during Anavasara, Sri Chaitanya Mahaprabhu walked roughly fourteen miles to the Alarnath temple in Brahmagiri, where His ecstatic obeisances are said to have left an imprint in stone, the Prema Shila, an event recorded in Sri Chaitanya-charitamrita, Madhya-lila 11." } },
        { "@type": "Question", name: "Does Srila Prabhupada's ISKCON Thiruvanmiyur celebrate Snana Yatra?", acceptedAnswer: { "@type": "Answer", text: "Not as a temple ceremony, since ISKCON Thiruvanmiyur does not have Jagannath, Balabhadra, and Subhadra deities installed. The pastime and its teachings on divine separation remain part of the temple's devotional and educational content during this season." } },
      ],
    },
  ],
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BlogClient />
        </>
    )
}
