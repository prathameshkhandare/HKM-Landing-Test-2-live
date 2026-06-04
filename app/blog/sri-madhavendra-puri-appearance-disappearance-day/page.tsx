import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Śrī Mādhavendra Purī — Appearance & Disappearance Day | Srila Prabhupada's ISKCON Thiruvanmiyur",
  description:
    "Honour Śrī Mādhavendra Purī on his appearance and disappearance day. Discover how this great ācārya first planted the seed of divine love in the Gauḍīya tradition — the Gopāla pastimes, the verse ayi dīna-dayārdra nātha, and the two disciples.",
  keywords: [
    "Madhavendra Puri", "Madhavendra Puri appearance day", "Madhavendra Puri disappearance day",
    "Gaudiya Vaishnava acharya", "Gopala deity Govardhana", "Ksira-cora Gopinatha",
    "ayi dina-dayardra natha", "Isvara Puri disciple", "Srila Prabhupada's ISKCON Thiruvanmiyur", "ISKCON Thiruvanmiyur",
    "Vaishnava sampradaya", "Madhva Gaudiya sampradaya",
  ],
  openGraph: {
    title: "Śrī Mādhavendra Purī — The Root from Which the Tree of Devotion Grew | Srila Prabhupada's ISKCON Thiruvanmiyur",
    description:
      "Honour Śrī Mādhavendra Purī on his appearance and disappearance day. The Gopāla pastimes, the most precious verse, and the lesson of the two disciples.",
    type: "article",
    images: ["/assets/blog/madhavendra-puri/Madhavendra_Puri_Worships_Gopala.png"],
  },
};

export default function BlogPostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Śrī Mādhavendra Purī — The Root from Which the Tree of Pure Devotion Grew",
              image: [
                "https://hkmchennai.org/assets/blog/madhavendra-puri/Madhavendra_Puri_Worships_Gopala.png",
                "https://hkmchennai.org/assets/blog/madhavendra-puri/Madhavendra_Puri_Meets_A_Cowherd_Boy.png",
              ],
              datePublished: "2026-05-01T00:00:00+05:30",
              dateModified: "2026-05-01T00:00:00+05:30",
              author: [{ "@type": "Organization", name: "HKM Team", url: "https://hkmchennai.org/" }],
              publisher: {
                "@type": "Organization",
                name: "ISKCON Thiruvanmiyur",
                logo: { "@type": "ImageObject", url: "https://hkmchennai.org/logo.png" },
              },
              description:
                "Honour Śrī Mādhavendra Purī on his appearance and disappearance day. Discover how this great ācārya first planted the seed of divine love in the Gauḍīya tradition.",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Who was Śrī Mādhavendra Purī and why is he important?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Śrī Mādhavendra Purī was a great Vaiṣṇava sannyāsī in the Madhva-sampradāya, called 'the spiritual master of the entire world' by Kṛṣṇadāsa Kavirāja Gosvāmī. He was the first to exhibit symptoms of love of Godhead in that disciplic succession, and planted the seed of pure devotion that Lord Caitanya Mahāprabhu later distributed to the world.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the Gopāla Deity at Govardhana and its connection to Mādhavendra Purī?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Gopāla Deity was originally installed by Vajra, Kṛṣṇa's great-grandson, but hidden when Muslims attacked. Lord Kṛṣṇa appeared in Mādhavendra Purī's dream, revealed the Deity's location, and said He had been waiting for Mādhavendra Purī to come and serve Him. Mādhavendra Purī organised the installation, Annakūṭa festival, and the Deity worship standard still followed in ISKCON today.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why is the Deity at Remuṇā called Kṣīra-corā Gopīnātha?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Kṣīra-corā means 'the one who stole the sweet rice.' When Mādhavendra Purī privately desired to taste the famous amṛta-keli sweet rice, he immediately felt ashamed and left without asking. That night Gopīnātha appeared in the priest's dream and said He had hidden a pot for the sannyāsī in the marketplace. From that day the Deity has been known as Kṣīra-corā Gopīnātha.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the verse 'ayi dīna-dayārdra nātha' and why is it important?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This verse composed by Mādhavendra Purī — 'O most merciful master, O master of Mathurā, when shall I see You again?' — was actually spoken first by Śrīmatī Rādhārāṇī. By Her mercy it appeared in his words. Kṛṣṇadāsa Kavirāja Gosvāmī calls it the most precious of all devotional verses. When Caitanya Mahāprabhu heard it, He fell unconscious in ecstasy.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What can we learn from Īśvara Purī and Rāmacandra Purī?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Īśvara Purī served Mādhavendra Purī selflessly at his deathbed, chanting the Holy Name for him — and received the blessing that made him an ocean of love of Godhead. Rāmacandra Purī presumed to instruct his spiritual master and received a rebuke, then fell into dry speculation. Kṛṣṇadāsa Kavirāja Gosvāmī says: 'Mādhavendra Purī instructed the entire world by presenting these two examples.'",
                  },
                },
              ],
            },
          ]),
        }}
      />
      <BlogClient />
    </>
  );
}
