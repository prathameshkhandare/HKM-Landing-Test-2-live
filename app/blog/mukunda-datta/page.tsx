
import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
  title: "Sri Mukunda Datta: The Eternal Singer Whose Voice Made the Lord Dance | HKM Chennai",
  description:
    "Discover Sri Mukunda Datta — Lord Chaitanya's class friend, beloved singer, and devoted associate whose transcendental kirtana made the Lord Himself rise and dance in ecstasy in the courtyard of Srivasa Prabhu.",
  keywords: [
    "Mukunda Datta",
    "Sri Mukunda Datta",
    "Lord Chaitanya associate",
    "Mukunda Datta kirtana",
    "Caitanya Bhagavata",
    "Gaudiya Vaishnava saints",
    "ISKCON Thiruvanmiyur",
    "HKM Chennai blog",
    "Dakshina Dwaraka Dham",
    "Mukunda Datta appearance day",
    "Navadvipa devotees",
    "Madhukahntha singer Vraja",
    "Gaura-ganoddesa-dipika",
    "Mayavada association danger",
    "sata-prahariya ecstasy",
  ],
  alternates: {
    canonical: "https://hkmchennai.org/blog/mukunda-datta",
  },
  openGraph: {
    title: "Sri Mukunda Datta: The Eternal Singer Whose Voice Made the Lord Dance",
    description:
      "A devotional tribute from Dakshina Dwaraka Dham, ISKCON Thiruvanmiyur. Discover the life, kirtanas, and timeless lessons of Lord Chaitanya's intimate classmate and singer.",
    url: "https://hkmchennai.org/blog/mukunda-datta",
    siteName: "HKM Chennai — Dakshina Dwaraka Dham",
    locale: "en_IN",
    type: "article",
    publishedTime: "2025-01-01T00:00:00+05:30",
    authors: ["HKM Chennai Digital Content Team"],
    images: [
      {
        url: "https://hkmchennai.org/assets/blog/mukunda-datta/cover.png",
        width: 1200,
        height: 630,
        alt: "Sri Mukunda Datta — Lord Chaitanya's Eternal Singer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Mukunda Datta: The Eternal Singer Whose Voice Made the Lord Dance",
    description:
      "Discover the life of Lord Chaitanya's classmate and beloved singer whose kirtana made the Supreme Lord Himself dance. A devotional tribute from HKM Chennai.",
    images: ["https://hkmchennai.org/assets/blog/mukunda-datta/cover.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://hkmchennai.org/blog/mukunda-datta#article",
      headline: "Sri Mukunda Datta: The Eternal Singer Whose Voice Made the Lord Dance",
      description:
        "A devotional tribute from Dakshina Dwaraka Dham, ISKCON Thiruvanmiyur, exploring the life, kirtanas, and spiritual lessons of Sri Mukunda Datta, intimate associate of Lord Sri Chaitanya Mahaprabhu.",
      image: "https://hkmchennai.org/assets/blog/mukunda-datta/cover.png",
      datePublished: "2025-01-01T00:00:00+05:30",
      author: {
        "@type": "Organization",
        name: "HKM Chennai — Dakshina Dwaraka Dham",
        url: "https://hkmchennai.org",
      },
      publisher: {
        "@type": "ReligiousOrganization",
        name: "Hare Krishna Movement Chennai",
        url: "https://hkmchennai.org",
        logo: {
          "@type": "ImageObject",
          url: "https://hkmchennai.org/images/logo.png",
        },
      },
      mainEntityOfPage: "https://hkmchennai.org/blog/mukunda-datta",
      about: {
        "@type": "Person",
        name: "Mukunda Datta",
        description:
          "Intimate associate of Lord Sri Chaitanya Mahaprabhu; class friend and transcendental singer whose kirtana made the Lord dance in ecstasy.",
        birthPlace: "Chanhaara, Chattagram district (present-day Chittagong, Bangladesh)",
        affiliation: "Gaudiya Vaishnava sampradaya",
      },
      keywords:
        "Mukunda Datta, Lord Chaitanya associate, Gaudiya Vaishnava, kirtana, Navadvipa, HKM Chennai",
      inLanguage: "en",
      isPartOf: {
        "@type": "Blog",
        name: "HKM Chennai Blog",
        url: "https://hkmchennai.org/blog",
      },
    },
    {
      "@type": "ReligiousOrganization",
      "@id": "https://hkmchennai.org#organization",
      name: "Hare Krishna Movement Chennai — Dakshina Dwaraka Dham",
      alternateName: ["ISKCON Thiruvanmiyur", "HKM Chennai"],
      url: "https://hkmchennai.org",
      address: {
        "@type": "PostalAddress",
        streetAddress: "63, 1st Seaward Road, Valmiki Nagar",
        addressLocality: "Thiruvanmiyur",
        addressRegion: "Chennai, Tamil Nadu",
        postalCode: "600041",
        addressCountry: "IN",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hkmchennai.org" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://hkmchennai.org/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Sri Mukunda Datta",
          item: "https://hkmchennai.org/blog/mukunda-datta",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who was Mukunda Datta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mukunda Datta was one of the intimate associates of Sri Chaitanya Mahaprabhu. He was the Lord's class friend in Navadvipa, a gifted singer whose kirtana made the Lord dance in ecstasy, and is identified in the Gaura-ganoddesa-dipika as the eternal Vraja singer Madhukahntha.",
          },
        },
        {
          "@type": "Question",
          name: "Where was Mukunda Datta born?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sri Mukunda Datta was born in the Chattagram district (present-day Chittagong, Bangladesh), in the village of Chanhaara, about twenty miles from the home of Pundarika Vidyanidhi, as confirmed by Srila Prabhupada in his purport to Caitanya-caritamrita, Adi-lila 10.40.",
          },
        },
        {
          "@type": "Question",
          name: "Why did Lord Chaitanya temporarily reject Mukunda Datta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lord Chaitanya was displeased because Mukunda Datta, while preaching devotional service among Vaishnavas, also frequented Mayavadi circles to hear the impersonalist Yoga-vasistha-ramayana. The Lord corrected him by excluding him temporarily from His assembly until Mukunda resolved to permanently abandon that association.",
          },
        },
        {
          "@type": "Question",
          name: "What was the sata-prahariya manifestation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The sata-prahariya was a continuous twenty-one-hour ecstatic manifestation displayed by Lord Sri Chaitanya Mahaprabhu. Mukunda Datta inaugurated this extraordinary event with his kirtana, making him the divine instrument through which the Lord entered this transcendental state.",
          },
        },
        {
          "@type": "Question",
          name: "What is the relationship between Mukunda Datta and Vasudeva Datta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "According to Srila Prabhupada's purport to Adi-lila 10.41, Vasudeva Datta was the brother of Mukunda Datta. Both were residents of the Chattagram district and intimate associates of Lord Sri Chaitanya Mahaprabhu.",
          },
        },
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
