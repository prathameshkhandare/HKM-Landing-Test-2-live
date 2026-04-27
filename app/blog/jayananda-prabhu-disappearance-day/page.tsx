import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Śrī Jayānanda Prabhu Disappearance Day | ISKCON Thiruvanmiyur",
  description:
    "Discover the inspiring life and glorious departure of Śrī Jayānanda Prabhu — the beloved disciple of Śrīla Prabhupāda who lived and died in pure devotional service to Lord Kṛṣṇa.",
  openGraph: {
    title: "Śrī Jayānanda Prabhu Disappearance Day | ISKCON Thiruvanmiyur",
    description:
      "Discover the inspiring life and glorious departure of Śrī Jayānanda Prabhu — the beloved disciple of Śrīla Prabhupāda who lived and died in pure devotional service to Lord Kṛṣṇa.",
    type: "article",
    images: ["/assets/blog/jayananda-prabhu/Sri_Jayananda_Prabhu.png"],
  },
};

export default function BlogPostPage() {
  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Śrī Jayānanda Prabhu — A Glorious Life, a Glorious Departure",
              "image": [
                "https://hkmchennai.org/assets/blog/jayananda-prabhu/Sri_Jayananda_Prabhu.png"
              ],
              "datePublished": "2026-05-01T00:00:00+05:30",
              "dateModified": "2026-05-01T00:00:00+05:30",
              "author": [{
                "@type": "Organization",
                "name": "HKM Team",
                "url": "https://hkmchennai.org/"
              }],
              "publisher": {
                "@type": "Organization",
                "name": "ISKCON Thiruvanmiyur",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://hkmchennai.org/logo.png"
                }
              },
              "description": "Discover the inspiring life and glorious departure of Śrī Jayānanda Prabhu — the beloved disciple of Śrīla Prabhupāda who lived and died in pure devotional service to Lord Kṛṣṇa."
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Who was Śrī Jayānanda Prabhu?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Śrī Jayānanda Prabhu (1939–1977), born James Kohr in Dayton, Ohio, was one of the earliest and most beloved disciples of Śrīla Prabhupāda in San Francisco."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Jayānanda Prabhu's disappearance day and why is it celebrated?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Śrī Jayānanda Prabhu left his body on 1st May 1977 in Los Angeles. Śrīla Prabhupāda personally instructed that his disappearance day should be observed in all ISKCON temples as a festival."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What was Jayānanda Prabhu's role in Ratha Yātrā?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Jayānanda Prabhu organised the first-ever ISKCON Ratha Yātrā festival outside India, held in San Francisco's Golden Gate Park in 1967."
                  }
                }
              ]
            }
          ])
        }}
      />
      <BlogClient />
    </>
  );
}
