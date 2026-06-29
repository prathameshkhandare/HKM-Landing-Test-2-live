import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
    title: "Sri Shyamananda Prabhu — The Torchbearer of Gaura-Nityananda's Message | HKM Chennai",
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
        "Hare Krishna Movement Chennai",
        "ISKCON Thiruvanmiyur",
        "HKM Chennai blog",
        "Dakshina Dwaraka Dham",
        "Kanaka Manjari",
        "Shyamanandi sampradaya",
    ],
    alternates: {
        canonical: "https://hkmchennai.org/blog/sri-shyamananda-prabhu",
    },
    openGraph: {
        title: "Sri Shyamananda Prabhu — The Torchbearer of Gaura-Nityananda's Message in Odisha",
        description: "Discover the extraordinary life of the devotee who received Srimati Radharani's direct mercy and flooded Odisha with pure devotion.",
        url: "https://hkmchennai.org/blog/sri-shyamananda-prabhu",
        siteName: "HKM Chennai — Dakshina Dwaraka Dham",
        locale: "en_IN",
        type: "article",
        publishedTime: "2026-06-28T00:00:00+05:30",
        authors: ["HKM Chennai Digital Content Team"],
        images: [
            {
                url: "https://hkmchennai.org/assets/blog/sri-shyamananda-prabhu/Sri_Shyamananda_Prabhu_The_Torchbearer_of_Gaura-Nityananda_s_Message_in_Odisha.png",
                width: 1200,
                height: 630,
                alt: "Sri Shyamananda Prabhu — The Torchbearer of Gaura-Nityananda's Message in Odisha",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Sri Shyamananda Prabhu — The Torchbearer of Gaura-Nityananda's Message",
        description: "Discover the extraordinary life of the devotee who received Srimati Radharani's direct mercy and flooded Odisha with pure devotion.",
        images: ["https://hkmchennai.org/assets/blog/sri-shyamananda-prabhu/Sri_Shyamananda_Prabhu_The_Torchbearer_of_Gaura-Nityananda_s_Message_in_Odisha.png"],
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
      "@id": "https://hkmchennai.org/blog/sri-shyamananda-prabhu#article",
      headline: "Sri Shyamananda Prabhu: The Torchbearer of Gaura-Nityananda's Message in Odisha",
      description: "The complete life, pastimes, and teachings of Sri Shyamananda Prabhu — the Vaishnava acharya who received Srimati Radharani's direct mercy and flooded Odisha with pure devotion.",
      image: "https://hkmchennai.org/assets/blog/sri-shyamananda-prabhu/Sri_Shyamananda_Prabhu_The_Torchbearer_of_Gaura-Nityananda_s_Message_in_Odisha.png",
      datePublished: "2026-06-28T00:00:00+05:30",
      author: { "@type": "Organization", name: "HKM Chennai — Dakshina Dwaraka Dham", url: "https://hkmchennai.org" },
      publisher: { "@type": "ReligiousOrganization", name: "Hare Krishna Movement Chennai", url: "https://hkmchennai.org", logo: { "@type": "ImageObject", url: "https://hkmchennai.org/images/logo.png" } },
      mainEntityOfPage: "https://hkmchennai.org/blog/sri-shyamananda-prabhu",
      about: { "@type": "Person", name: "Sri Shyamananda Prabhu", description: "Vaishnava acharya of the second generation of Gaudiya Vaishnavism; born Dukhi Krishnadasa; received Srimati Radharani's direct mercy; flooded Odisha with prema bhakti.", birthPlace: "Dharenda Bahadurpura, Medinipur, West Bengal", affiliation: "Gaudiya Vaishnava sampradaya" },
      keywords: "Sri Shyamananda Prabhu, Dukhi Krishnadasa, Gaudiya Vaishnavism, Nupur Tilaka, Radharani anklet, HKM Chennai",
      inLanguage: "en",
      isPartOf: { "@type": "Blog", name: "HKM Chennai Blog", url: "https://hkmchennai.org/blog" },
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
        { "@type": "ListItem", position: 3, name: "Sri Shyamananda Prabhu", item: "https://hkmchennai.org/blog/sri-shyamananda-prabhu" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Who was Sri Shyamananda Prabhu?", acceptedAnswer: { "@type": "Answer", text: "Sri Shyamananda Prabhu (born Dukhi Krishnadasa, 1534 AD) was one of the three foremost preachers of the second generation of Gaudiya Vaishnavism. Chosen by Srila Jiva Goswami along with Srinivasa Acharya and Narottama Dasa Thakura, he flooded Odisha with the message of Sri Chaitanya Mahaprabhu and Sri Nityananda Prabhu." } },
        { "@type": "Question", name: "What is the significance of the divine anklet (nupur) pastime?", acceptedAnswer: { "@type": "Answer", text: "While sweeping the Rasa-mandala in Vrindavan, Dukhi Krishnadasa found Srimati Radharani's golden ankle bracelet. When he touched it to his forehead, it left a divine tilaka mark. He was then led into the presence of Srimati Radharani Herself, who revealed his eternal identity as Kanaka Manjari and manifested the Deity of Sri Shyamsundar from Her lotus heart." } },
        { "@type": "Question", name: "What is the Nupur Tilaka (Shyamanandi Tilaka)?", acceptedAnswer: { "@type": "Answer", text: "The Nupur Tilaka is the unique tilaka mark worn by followers of Sri Shyamananda Prabhu, shaped like the imprint of an ankle bracelet with a radiant round dot in its center. It was formally named by Srila Jiva Goswami and has distinguished the Shyamanandi Vaishnavas to this day." } },
        { "@type": "Question", name: "Who was Sri Rasikananda Prabhu?", acceptedAnswer: { "@type": "Answer", text: "Sri Rasikananda Prabhu was the foremost disciple of Sri Shyamananda Prabhu. Directed by a divine voice, he took shelter of Shyamananda Prabhu and became one of the most powerful preachers in Gaudiya Vaishnavism, carrying his guru's mission throughout Odisha." } },
        { "@type": "Question", name: "What is the Shyamanandi sampradaya?", acceptedAnswer: { "@type": "Answer", text: "The Shyamanandi sampradaya is the branch of Gaudiya Vaishnavism established through Sri Shyamananda Prabhu's preaching in Odisha. It became one of the most vibrant devotional traditions in eastern India and notably produced Srila Baladeva Vidyabhushana, who wrote the Govinda-bhashya commentary on Vedanta Sutras." } },
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
