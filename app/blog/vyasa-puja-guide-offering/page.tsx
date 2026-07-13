import { Metadata } from 'next';
import BlogClient from './BlogClient';

const SITE_URL = "https://hkmchennai.org";
const PAGE_PATH = "/blog/vyasa-puja-guide-offering";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "Vyasa Puja Guide: Meaning & How to Write Your Offering";
const PAGE_DESCRIPTION = "A complete devotee's guide to Vyasa Puja — its meaning, significance, and how to write a heartfelt offering to Srila Prabhupada.";
const OG_IMAGE = `${SITE_URL}/images/vyasa-puja-guide-offering/hero.png`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  openGraph: {
    type: "article",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Srila Prabhupada's ISKCON Thiruvanmiyur",
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Srila Prabhupada, founder-acharya of ISKCON",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ChennaiHare",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vyasa Puja: Understanding the Festival & Writing Your Offering",
  description: "A devotee's guide to the meaning of Vyasa Puja and how to write a heartfelt offering to Srila Prabhupada.",
  image: [OG_IMAGE],
  author: {
    "@type": "Organization",
    name: "Srila Prabhupada's ISKCON Thiruvanmiyur",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Srila Prabhupada's ISKCON Thiruvanmiyur",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo.png`,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_URL,
  },
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
};

const faqs = [
  {
    question: "What is Vyasa Puja and why is it celebrated?",
    answer: "Vyasa Puja is the annual observance of a spiritual master's appearance day, honoring him as the living representative of Srila Vyasadeva, the original compiler of Vedic knowledge. It is celebrated to express gratitude for the transcendental knowledge he has delivered unchanged through disciplic succession.",
  },
  {
    question: "Do I need to be formally initiated to write a Vyasa Puja offering?",
    answer: "No. Any devotee or well-wisher inspired by Srila Prabhupada's teachings is welcome to write an offering, whether initiated or not. Simply use “Bhakta” or “Bhaktin” before your name if you have not yet received spiritual initiation.",
  },
  {
    question: "Can I write my offering in a language other than English?",
    answer: "Yes. Offerings are welcome in any language — write in the language that lets you express your gratitude most sincerely.",
  },
  {
    question: "I have never written a Vyasa Puja offering before — where do I start?",
    answer: "Start with a simple traditional opening, then write about one or two genuine experiences or realizations from your own Krishna-conscious life. Sincerity matters far more than literary polish.",
  },
  {
    question: "What happens if my offering exceeds the word or line limit?",
    answer: "It will be gently edited to fit the standard length, with a note sent to let the devotee know.",
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
    { "@type": "ListItem", position: 3, name: "Vyasa Puja Guide", item: PAGE_URL },
  ],
};

export default function VyasaPujaGuidePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <BlogClient />
        </>
    );
}
