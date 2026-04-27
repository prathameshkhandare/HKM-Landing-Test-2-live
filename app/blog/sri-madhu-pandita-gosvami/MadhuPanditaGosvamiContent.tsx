// ============================================================
// HKM Chennai — Blog Page
// Sri Madhu Paṇḍita Gosvāmī — Appearance & Disappearance Day
// Next.js 13/14 App Router | Tailwind CSS
// Full SEO + JSON-LD Schema + LLM-Ready + Social Footer + FAQ
// ============================================================
// File: app/blog/sri-madhu-pandita-gosvami/MadhuPanditaGosvamiContent.tsx
// ============================================================

import Script from "next/script"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/FooterSection"
import "./styles.css"

// ─── JSON-LD SCHEMA DATA ──────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Śrī Madhu Paṇḍita Gosvāmī — The Devoted Servant of Gopinātha",
  description:
    "The life, devotion, and eternal glory of Śrī Madhu Paṇḍita Gosvāmī — disciple of Śrī Gadadhara Paṇḍita, founder of the Gopinātha Temple in Vṛndāvana, and beloved associate in the Caitanya-paramparā.",
  image: "https://hkmchennai.org/assets/blog/sri-madhu-pandita-gosvami/Madhu_Pandita_Goswami.png",
  datePublished: "2025-04-27T00:00:00+05:30",
  dateModified: "2025-04-27T00:00:00+05:30",
  author: {
    "@type": "Organization",
    name: "HKM Chennai — Hare Krishna Movement",
    url: "https://hkmchennai.org",
  },
  publisher: {
    "@type": "Organization",
    name: "HKM Chennai — Hare Krishna Movement",
    logo: {
      "@type": "ImageObject",
      url: "https://hkmchennai.org/images/hkm-logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://hkmchennai.org/blog/sri-madhu-pandita-gosvami",
  },
  keywords:
    "Madhu Pandita Gosvami, Gopinatha temple Vrindavan, Gadadhara Pandita, Chaitanya Mahaprabhu associates",
  articleSection: "Vaiṣṇava Saints",
  inLanguage: "en-IN",
  about: {
    "@type": "Person",
    name: "Śrī Madhu Paṇḍita Gosvāmī",
    description:
      "A great Vaiṣṇava saint, disciple of Śrī Gadadhara Paṇḍita, and founder of the Gopinātha Temple in Vṛndāvana — one of the seven principal ancient temples of the holy dhāma.",
    sameAs: [
      "https://en.wikipedia.org/wiki/Madhu_Pandita",
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who was Śrī Madhu Paṇḍita Gosvāmī?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Śrī Madhu Paṇḍita Gosvāmī was a great Vaiṣṇava saint and a disciple of Śrī Gadadhara Paṇḍita, one of the pañca-tattva associates of Śrī Caitanya Mahāprabhu. He is celebrated as the devotee who founded and established the Gopinātha Temple in Vṛndāvana — one of the Saptadevalyas (seven ancient principal temples) of the holy dhāma.",
      },
    },
    {
      "@type": "Question",
      name: "What is the significance of the Gopinātha Temple founded by Madhu Paṇḍita Gosvāmī?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Gopinātha Temple in Vṛndāvana is one of the seven principal Gosvāmī temples of the dhāma. The presiding Deity, Śrī Gopinātha, was originally installed by Vajranābha, Lord Kṛṣṇa's great-grandson, approximately 5,000 years ago. The Deity was rediscovered at Vaṁśīvaṭa during the time of the Gosvāmīs and entrusted to Madhu Paṇḍita Gosvāmī, who served the Deity faithfully for forty years. The temple holds the unique distinction of having Anangā Mañjarī (the younger sister of Śrīmatī Rādhārāṇī) on the altar — reflecting the divine pastimes of Śrī Jāhnava Devī.",
      },
    },
    {
      "@type": "Question",
      name: "Who was Madhu Paṇḍita Gosvāmī's spiritual master?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Śrī Madhu Paṇḍita Gosvāmī was a disciple of Śrī Gadadhara Paṇḍita Gosvāmī, one of the most intimate associates of Śrī Caitanya Mahāprabhu and a member of the pañca-tattva. Gadadhara Paṇḍita is identified in the scriptures as the embodiment of Śrīmatī Rādhārāṇī's devotional energy in Gaura-līlā.",
      },
    },
    {
      "@type": "Question",
      name: "What is the connection between Madhu Paṇḍita Gosvāmī and Śrīnivāsa Ācārya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Madhu Paṇḍita Gosvāmī was present in Vṛndāvana when the great ācāryas Narottama Dāsa Ṭhākura, Śyāmānanda Paṇḍita, and Śrīnivāsa Ācārya departed from Vṛndāvana to carry the writings of the Six Gosvāmīs to Bengal. As an act of profound blessing, Madhu Paṇḍita Gosvāmī garlanded Śrīnivāsa Ācārya with a flower garland that had been worn by Lord Gopinātha Himself — a blessing whose significance the Bhakti-ratnākara records with great reverence.",
      },
    },
    {
      "@type": "Question",
      name: "When is the Disappearance Day of Śrī Madhu Paṇḍita Gosvāmī observed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Tirobhava (Disappearance Day) of Śrī Madhu Paṇḍita Gosvāmī is traditionally observed on the Vaiṣṇava calendar, falling around the month of April (Vaiśākha). Devotees observe this sacred day by reading about his life and glories, performing kīrtana, visiting Gopinātha temples, and honouring his extraordinary service to the Deity and the Vaiṣṇava community.",
      },
    },
    {
      "@type": "Question",
      name: "Where is the samādhi of Madhu Paṇḍita Gosvāmī located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The samādhi (memorial tomb) of Śrī Madhu Paṇḍita Gosvāmī is located within the premises of the Gopinātha Temple in Vṛndāvana, on the eastern side of the temple courtyard. Pilgrims visiting the Gopinātha Temple are able to offer their praṇāmas at his samādhi.",
      },
    },
    {
      "@type": "Question",
      name: "What can we learn from the life of Madhu Paṇḍita Gosvāmī?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupāda teaches us that the purest standard of devotional service is demonstrated by such great souls who give their entire lives in unbroken Deity worship, personal surrender to the spiritual master, and selfless service to the Vaiṣṇava community. Madhu Paṇḍita Gosvāmī's forty years of worship of Lord Gopinātha, his humble position in the lineage of Gadadhara Paṇḍita, and his blessing of Śrīnivāsa Ācārya all illustrate the deepest principles of bhakti.",
      },
    },
    {
      "@type": "Question",
      name: "How can I observe the Appearance or Disappearance Day of Śrī Madhu Paṇḍita Gosvāmī at HKM Chennai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HKM Chennai — Dakshina Dvāraka Dhāma at Thiruvanmiyur observes all major Vaiṣṇava calendar events including the appearance and disappearance days of the great ācāryas and associates of Śrī Caitanya Mahāprabhu. You are welcome to join us for our daily programmes including Maṅgala Āratī at 4:30 AM and Śrīmad-Bhāgavatam classes. Visit hkmchennai.org or call us for the specific programme schedule.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hkmchennai.org" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://hkmchennai.org/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Śrī Madhu Paṇḍita Gosvāmī",
      item: "https://hkmchennai.org/blog/sri-madhu-pandita-gosvami",
    },
  ],
};

const faqMainEntity = faqSchema.mainEntity as Array<{
  name: string
  acceptedAnswer: { text: string }
}>

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ReligiousOrganization",
  name: "HKM Chennai — Hare Krishna Movement",
  alternateName: ["Hare Krishna Movement Chennai", "ISKCON Bangalore Chennai", "Dakshina Dvaraka Dham"],
  url: "https://hkmchennai.org",
  logo: "https://hkmchennai.org/images/hkm-logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "63, 1st Seaward Road, Thiruvanmiyur",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600041",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/hkmchennai",
    "https://www.instagram.com/hkmchennai",
    "https://www.youtube.com/@hkmchennai",
    "https://x.com/ChennaiHare",
  ],
};

// ─── TABLE OF CONTENTS DATA ───────────────────────────────────────────────────

const TOC = [
  { id: "intro", label: "Who Was Śrī Madhu Paṇḍita Gosvāmī?" },
  { id: "lineage", label: "The Lineage: A Disciple of Śrī Gadadhara Paṇḍita" },
  { id: "gopinatha", label: "The Rediscovery of Lord Gopinātha" },
  { id: "forty-years", label: "Forty Years of Unbroken Devotional Service" },
  { id: "saptadevalya", label: "The Gopinātha Temple — One of the Saptadevalyas" },
  { id: "jahnava-devi", label: "Śrī Jāhnava Devī and the Mystery of Anangā Mañjarī" },
  { id: "srinivasa", label: "The Blessing of Śrīnivāsa Ācārya" },
  { id: "gopinatha-tattva", label: "Gopinātha and the Principle of Prayojana Tattva" },
  { id: "prabhupada-connection", label: "Śrīla Prabhupāda and the Gopinātha Lineage" },
  { id: "observing", label: "How to Observe This Sacred Day" },
  { id: "samadhi", label: "The Samādhi of Madhu Paṇḍita Gosvāmī" },
  { id: "faq", label: "Frequently Asked Questions" },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function MadhuPanditaGosvamiContent() {
  return (
    <>
      {/* ── JSON-LD Schema Injection ── */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main className="min-h-screen bg-[#FFF9F0] selection:bg-[#c9973a] selection:text-white">
        <Navbar />
        <nav className="mp-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li aria-hidden="true">›</li>
            <li aria-current="page">Śrī Madhu Paṇḍita Gosvāmī</li>
          </ol>
        </nav>

        <article
          className="gp-blog-wrap"
          itemScope
          itemType="https://schema.org/Article"
        >
            <meta itemProp="author" content="HKM Chennai Editorial Team" />
            <meta itemProp="datePublished" content="2025-04-27" />

            <header className="gp-blog-header">
              <p className="gp-hero-label">Gauḍīya Vaiṣṇava — Vaiṣṇava Saints</p>
              <h1 className="gp-blog-title">
                Śrī Madhu Paṇḍita Gosvāmī:
                <br />
                The Devoted Servant of Gopinātha
              </h1>
              <div className="gp-hero-line" />
              <p className="gp-blog-subtitle">
                Disciple of Śrī Gadadhara Paṇḍita · Founder of the ancient Gopinātha Temple in
                Vṛndāvana · Associate in the Caitanya-paramparā
              </p>
              <p className="gp-blog-byline">
                Based on the teachings and purports of{" "}
                <strong>His Divine Grace A.C. Bhaktivedanta Swami Prabhupāda</strong> —{" "}
                <em>Śrī Caitanya-caritāmṛta</em>, the Bhakti-ratnākara, and the Gauḍīya tradition
              </p>
              <p className="mp-hero-meta">
                <span>📅 Appearance &amp; Disappearance day themes</span>
                <span>⏱ ~15 min read</span>
                <span>✍️ HKM Chennai</span>
              </p>
            </header>

            <div className="gp-image-container">
              <Image
                src="/assets/blog/sri-madhu-pandita-gosvami/Madhu_Pandita_Goswami.png"
                alt="Śrī Madhu Paṇḍita Gosvāmī"
                width={800}
                height={1000}
                className="mp-hero-image"
                sizes="(max-width: 800px) 100vw, 800px"
                priority
              />
              <span className="gp-image-caption">
                Śrī Madhu Paṇḍita Gosvāmī — devoted servant of Śrī Gopinātha
              </span>
            </div>

            <div className="mp-toc">
              <h2 className="mp-toc-title">In this article</h2>
              <nav aria-label="Table of contents">
                <ol>
                  {TOC.map((item, i) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`}>
                        <span className="mp-toc-num">{String(i + 1).padStart(2, "0")}</span>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
              <div className="mp-toc-cta">
                <p>Study the Bhagavad-gītā — Gita Life Foundation Course</p>
                {/* <a
                  href="https://hkmchennai.org/gita-life"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register
                </a> */}
              </div>
            </div>

            {/* ── SECTION 1: WHO WAS HE ── */}
            <section id="intro" className="scroll-mt-6 gp-content">
              <h2 className="gp-sh">
                Who Was Śrī Madhu Paṇḍita Gosvāmī?
              </h2>
              <p>
                In the vast and luminous galaxy of devotees who orbited Śrī Caitanya Mahāprabhu — the
                Supreme Lord who descended in this age to distribute the treasure of pure love of
                Godhead — there are some souls whose contribution remains etched in the very stones
                and soil of Vṛndāvana. Śrī Madhu Paṇḍita Gosvāmī is one such exalted personality.
              </p>
              <p>
                His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupāda, in his
                commentary on Śrī Caitanya-caritāmṛta (Ādi-līlā 12.88), specifically lists
                Madhu Paṇḍita Gosvāmī among the notable disciples of Śrī Gadadhara Paṇḍita, noting that he
                &ldquo;lived near Khaḍadaha in the village known as Sāṅibonā-grāma, about two miles
                east of the Khaḍadaha station, and constructed the temple of Gopīnāthajī in
                Vṛndāvana.&rdquo;
              </p>
              <p>
                This single line from Śrīla Prabhupāda opens a door into an extraordinary life —
                a life of complete surrender, unbroken Deity worship, and selfless service to the
                Vaiṣṇava community. To observe his Tirobhava (Disappearance Day) or Āvirbhava
                (Appearance Day) is to remember a soul who literally built one of the seven most
                sacred temples on the face of the earth and spent forty years in devoted service
                before the lotus feet of Lord Gopinātha.
              </p>
              <blockquote className="gp-bq">
                <p>
                  &ldquo;A devotee should be fixed in the conclusion that the Lord's holy name is
                  identical with the Lord Himself and should chant the holy name with complete
                  conviction.&rdquo;
                </p>
                <cite>— Śrīmad-Bhāgavatam 11.2.40, as explained by Śrīla Prabhupāda</cite>
              </blockquote>
              <p>
                Such was the conclusion in which Madhu Paṇḍita Gosvāmī was firmly established.
                Every day of his life in Vṛndāvana was an expression of this principle — that
                devotional service, when rendered with purity and steadiness, becomes the highest
                gift one can offer both to the Lord and to future generations.
              </p>
            </section>

            {/* ── SECTION 2: LINEAGE ── */}
            <section id="lineage" className="scroll-mt-6 gp-content">
              <h2 className="gp-sh">
                The Lineage: A Disciple of Śrī Gadadhara Paṇḍita
              </h2>
              <p>
                To understand Madhu Paṇḍita Gosvāmī, we must first understand his spiritual master,
                Śrī Gadadhara Paṇḍita Gosvāmī — for the quality of a disciple is illuminated by
                the greatness of his guru.
              </p>
              <p>
                Śrī Gadadhara Paṇḍita is one of the pañca-tattva — the five-fold form of the
                Absolute Truth that descended with Śrī Caitanya Mahāprabhu. The Gaura-gaṇoddeśa-dīpikā,
                the authoritative text that identifies the roles of Mahāprabhu's associates,
                declares that Gadadhara Paṇḍita is none other than Śrīmatī Rādhārāṇī herself —
                the hlādinī-śakti (the pleasure potency) of the Lord — who appeared in Gaura-līlā
                to accompany the Lord in His pastimes of distributing prema-bhakti.
              </p>
              <p>
                Madhu Paṇḍita Gosvāmī received dīkṣā (spiritual initiation) from this ocean of divine
                love. Having come from the village of Sāṅibonā-grāma near Khaḍadaha in Bengal,
                he eventually made his way to Vṛndāvana — the eternal abode of Lord Kṛṣṇa — in
                search of the Supreme Lord and in the spirit of his master's teachings. There, he
                came under the guidance of Śrī Paramānanda Bhaṭṭācārya, another disciple of
                Gadadhara Paṇḍita, who would play a pivotal role in one of the most remarkable
                events of that era.
              </p>
              <div className="my-6">
                <h3 className="gp-sh3">The Disciplic Connection</h3>
                <div className="mp-card-grid mp-three">
                  <div className="mp-card">
                    <p className="text-2xl mb-1">🌸</p>
                    <p className="mp-card-title">Śrī Caitanya Mahāprabhu</p>
                    <p className="mp-card-sub">The Supreme Lord in Gaura-līlā</p>
                  </div>
                  <div className="mp-card">
                    <p className="text-2xl mb-1">🌺</p>
                    <p className="mp-card-title">Śrī Gadadhara Paṇḍita</p>
                    <p className="mp-card-sub">Pañca-tattva · Guru of Madhu Paṇḍita Gosvāmī</p>
                  </div>
                  <div className="mp-card">
                    <p className="text-2xl mb-1">🌼</p>
                    <p className="mp-card-title">Śrī Madhu Paṇḍita Gosvāmī</p>
                    <p className="mp-card-sub">Founder of Gopinātha Temple · Vṛndāvana</p>
                  </div>
                </div>
              </div>
              <p>
                The Śākhā-nirṇaya of Yadunandana Dāsa, cited by Śrīla Prabhupāda, lists
                Madhu Paṇḍita Gosvāmī as one of the significant branches of the Gadadhara Paṇḍita disciplic tree —
                a tree whose roots were nourished by the most intimate love of Śrī Caitanya
                Mahāprabhu Himself.
              </p>
            </section>

            {/* ── SECTION 3: GOPINATHA DISCOVERY ── */}
            <section id="gopinatha" className="scroll-mt-6 gp-content">
              <h2 className="gp-sh">
                The Rediscovery of Lord Gopinātha
              </h2>
              <div className="mp-inline-figure max-w-2xl mx-auto mb-8">
                <Image
                  src="/assets/blog/sri-madhu-pandita-gosvami/Radha_Gopinath_deities.png"
                  alt="Śrī Śrī Rādhā-Gopinātha — the presiding Deities of the ancient Gopinātha temple in Vṛndāvana served by Madhu Paṇḍita Gosvāmī"
                  width={1200}
                  height={800}
                  className="mp-hero-image w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
                <p className="mp-inline-figcaption text-center m-0">
                  Śrī Śrī Rādhā-Gopinātha — worshipped in the Gopinātha tradition established by Madhu Paṇḍita Gosvāmī
                </p>
              </div>
              <p>
                The story of how Lord Gopinātha was rediscovered in Vṛndāvana is one of the most
                touching episodes in the history of Gauḍīya Vaiṣṇavism — and Madhu Paṇḍita Gosvāmī
                stands at its very heart.
              </p>
              <p>
                Lord Gopinātha — meaning &ldquo;the Master of the Gopīs&rdquo; — is one of the three
                principal Deities of Vṛndāvana, the others being Śrī Madana-Mohana and Śrī
                Govinda Deva. Together, these three Deities represent the three great principles
                of spiritual life described in the Bhagavad-gītā and Śrīmad-Bhāgavatam:
                sambandha (our relationship with the Lord), abhidheya (our activities in that
                relationship), and prayojana (the ultimate goal — pure love of Godhead). Lord
                Gopinātha embodies prayojana — He is the Lord of the highest love.
              </p>
              <p>
                The original Deity of Gopinātha had been installed approximately 5,000 years ago
                by Vajranābha, the great-grandson of Lord Kṛṣṇa, who had several Deities carved
                based on the descriptions of Kṛṣṇa's divine form given by Uttarā, the mother of
                Mahārāja Parīkṣit. As narrated in the Śrīmad-Bhāgavatam, Parīkṣit was the last
                royal descendent of the Pāṇḍavas who heard the Bhāgavatam from Śukadeva Gosvāmī
                on the banks of the Gaṅgā before leaving his body — an event that is the very
                foundation of the Bhāgavata tradition.
              </p>
              <p>
                Over millennia, this ancient Deity became lost. During the time of the Gosvāmīs —
                the period following Śrī Caitanya Mahāprabhu's earthly pastimes — Madhu Paṇḍita Gosvāmī
                came to Vṛndāvana with a burning longing in his heart for Lord Gopinātha. He
                searched everywhere. Not finding the Deity, and feeling a grief that only a pure
                devotee can know, he gave up eating and sat at Vaṁśīvaṭa — the sacred place where
                Lord Kṛṣṇa had performed His rāsa-līlā — weeping in constant streams of tears and
                calling out to the Lord.
              </p>
              <blockquote className="gp-bq">
                <p>
                  &ldquo;śrīman rāsa-rasārambhī vaṁśīvaṭa-taṭa-sthitau
                  karman veṇu-svanair gopīr gopī-nāthau śriye 'stu nau&rdquo;
                </p>
                <cite>— Śrī Caitanya-caritāmṛta, Madhya 1.5 · The verse glorifying Lord Gopinātha</cite>
                <p style={{ marginTop: "0.75rem", fontStyle: "normal", fontSize: "1.1rem" }}>
                  Translation: Let the merciful blessings of Lord Gopinātha — who commences
                  the enchanting rāsa dance on the banks of the Yamunā at Vaṁśīvaṭa and
                  enthralls the gopīs with the sweet melodies of His flute — be upon us.
                </p>
              </blockquote>
              <p>
                As fate — or rather, the Lord's own mercy — would have it, the monsoon that season
                brought extraordinary floods. The Yamunā overflowed her banks with tremendous
                force, uprooting an ancient banyan tree at Vaṁśīvaṭa. When the waters finally
                receded, Madhu Paṇḍita Gosvāmī's close companion, Śrī Paramānanda Bhaṭṭācārya, saw
                a Deity half-buried in the earth at the very spot where the great banyan tree had
                once stood — Lord Gopinātha, resting where He had been for thousands of years,
                awaiting the arrival of His devoted servants.
              </p>
              <p>
                Paramānanda immediately called Madhu Paṇḍita Gosvāmī, who retrieved the Deity with tears
                of joy. The Lord who had been searched for with such longing and grief was now
                found — and the great chapter of Gopinātha's worship in Vṛndāvana had truly begun.
              </p>
            </section>

            {/* ── SECTION 4: FORTY YEARS ── */}
            <section id="forty-years" className="scroll-mt-6 gp-content">
              <h2 className="gp-sh">
                Forty Years of Unbroken Devotional Service
              </h2>
              <p>
                After the discovery of Lord Gopinātha, the Deity was moved to the spot where
                the present Gopinātha Temple now stands. The seva (worship) of the Deity was
                entrusted to Madhu Paṇḍita Gosvāmī — and for the next forty years, he served Lord
                Gopinātha with absolute steadiness, devotion, and love.
              </p>
              <p>
                This is not a small or incidental detail. The Śrīmad-Bhāgavatam repeatedly
                glorifies the power of steadfast, uninterrupted devotional service. As Śrīla
                Prabhupāda explains in his purports, the highest standard of bhakti is naiṣṭhikī
                — unswerving, unbroken, lifelong devotion. Madhu Paṇḍita Gosvāmī embodied this. Every
                day, for four decades, he rose before dawn, performed the full śṛṅgāra (dressing
                and ornamentation) of the Deity, offered bhoga (food), performed āratī, and read
                the Śrīmad-Bhāgavatam — the scripture that Śrī Caitanya Mahāprabhu declared to
                be the commentary on the Vedānta-sūtra and the essence of all spiritual knowledge.
              </p>
              <p>
                The Bhakti-ratnākara — the authoritative text of Narahari Cakravartī that records
                the lives of the Vaiṣṇavas after the disappearance of Śrī Caitanya Mahāprabhu —
                glorifies the extraordinary service of Madhu Paṇḍita Gosvāmī. It is the very text that
                the Six Gosvāmīs of Vṛndāvana, Śrīnivāsa Ācārya, and Narottama Dāsa Ṭhākura
                honoured and propagated.
              </p>
              <div className="my-6">
                <h3 className="gp-sh3">The Teaching of Steady Devotion</h3>
                <p>Śrīla Prabhupāda writes in his purport to Śrīmad-Bhāgavatam 1.2.6:</p>
                <div className="gp-mantra-box" style={{ marginTop: "1rem" }}>
                  <p>
                    &ldquo;The highest perfection of human life is to have one&apos;s complete absorption
                    in pure devotional service of the Lord without any cause or impediment.&rdquo;
                  </p>
                  <cite>
                    — His Divine Grace A.C. Bhaktivedanta Swami Prabhupāda, Śrīmad-Bhāgavatam 1.2.6, Purport
                  </cite>
                </div>
              </div>
              <p>
                This is precisely what Madhu Paṇḍita Gosvāmī demonstrated — not for a year, not for a
                decade, but for forty continuous years. His life is a living commentary on this
                verse. When we observe his Appearance or Disappearance Day, we celebrate not just
                a historical personality but an eternal principle: that a human life fully
                dedicated to Deity worship and the service of the Lord is the highest achievement
                possible in this world.
              </p>
            </section>

            {/* ── SECTION 5: SAPTADEVALYA ── */}
            <section id="saptadevalya" className="scroll-mt-6 gp-content">
              <h2 className="gp-sh">
                The Gopinātha Temple — One of the Saptadevalyas
              </h2>
              <p>
                The Gopinātha Temple that Madhu Paṇḍita Gosvāmī established is one of the
                Saptadevalyas — the seven principal and most ancient Vaiṣṇava temples of
                Vṛndāvana. These seven temples are the beating heart of the dhāma, each one
                associated with a great Gosvāmī or saint of the Caitanya tradition, and each
                one housing a Deity whose history connects us to the very earliest days of
                Kṛṣṇa's appearance on this earth.
              </p>
              <p>
                The seven Gosvāmī temples of Vṛndāvana are: Śrī Madan-Mohan (established by
                Śrī Sanātana Gosvāmī), Śrī Govinda Deva (established by Śrī Rūpa Gosvāmī),
                Śrī Gopinātha (established by Śrī Madhu Paṇḍita Gosvāmī), Śrī Rādhā Dāmodara
                (established by Śrī Jīva Gosvāmī), Śrī Rādhā Śyāmasundara (established by
                Śrīnivāsa Ācārya), Śrī Rādhā Rāmaṇa (established by Śrī Gopāla Bhaṭṭa Gosvāmī),
                and Śrī Rādhā Gokulananda (associated with Śrī Lokanātha Gosvāmī).
              </p>
              <p>
                There is a profound Vaiṣṇava tradition that states: if a pilgrim is fortunate
                enough to have darśana of the three principal Deities — Śrī Madana-Mohana,
                Śrī Gopinātha, and Śrī Govinda Deva — within a single day, before sunset, they
                receive a blessing equivalent to the direct darśana of Lord Kṛṣṇa Himself.
                These three Deities represent the complete spiritual journey — from first
                awakening our love for God, to deepening our service, to attaining the
                supreme goal.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                {[
                  {
                    deity: "Śrī Madana-Mohana",
                    principle: "Sambandha Tattva",
                    meaning: "Establishing our relationship with the Lord — the beginning of the path",
                    color: "bg-blue-50 border-blue-200",
                    textColor: "text-blue-900",
                  },
                  {
                    deity: "Śrī Govinda Deva",
                    principle: "Abhidheya Tattva",
                    meaning: "Our activities and service in that relationship — the practice",
                    color: "bg-green-50 border-green-200",
                    textColor: "text-green-900",
                  },
                  {
                    deity: "Śrī Gopinātha",
                    principle: "Prayojana Tattva",
                    meaning: "The supreme goal — pure love of Godhead in the footsteps of the gopīs",
                    color: "bg-amber-50 border-amber-200",
                    textColor: "text-amber-900",
                  },
                ].map((item) => (
                  <div
                    key={item.deity}
                    className={`${item.color} border rounded-2xl p-5 text-center`}
                  >
                    <p className={`font-bold ${item.textColor} mb-1`}>{item.deity}</p>
                    <p className={`text-xs font-semibold uppercase tracking-wider ${item.textColor} opacity-70 mb-2`}>
                      {item.principle}
                    </p>
                    <p className="text-sm text-gray-700">{item.meaning}</p>
                  </div>
                ))}
              </div>
              <p>
                That Madhu Paṇḍita Gosvāmī was chosen by the Lord to establish and serve the
                Deity representing the highest goal — prayojana — says everything about his
                spiritual stature. He was not merely a temple builder. He was a devotee who
                had achieved the very purpose of life and was thus fit to serve the Deity
                who embodies it.
              </p>
            </section>

            {/* ── SECTION 6: JAHNAVA DEVI ── */}
            <section id="jahnava-devi" className="scroll-mt-6 gp-content">
              <h2 className="gp-sh">
                Śrī Jāhnava Devī and the Mystery of Anangā Mañjarī
              </h2>
              <p>
                One of the most extraordinary pastimes associated with the Gopinātha Temple
                took place when Śrī Jāhnava Devī — the wife of Śrī Nityānanda Prabhu and one
                of the most venerated personalities in the entire Gauḍīya Vaiṣṇava tradition —
                visited Vṛndāvana. Jāhnava Mātā, as she is lovingly called, is identified in
                the Gauḍīya scriptures as Anangā Mañjarī — the younger sister of Śrīmatī
                Rādhārāṇī in Kṛṣṇa's eternal pastimes.
              </p>
              <p>
                During her visit to the evening āratī at the Gopinātha Temple, an extraordinary
                and mystical event occurred. The Lord Himself — in full view of the assembled
                Vaiṣṇavas — leapt from the altar and took Jāhnava Devī onto the altar, and the
                curtains closed. When the Vaiṣṇavas opened the curtain again, Jāhnava Devī was
                no longer visible in the assembly — and Lord Gopinātha stood on the altar.
              </p>
              <p>
                This pastime — recorded in the Vaiṣṇava literature — has a specific theological
                significance. Jāhnava Devī is Anangā Mañjarī; the Lord drew her into His own
                service on the altar. After this event, a new Deity of Anangā Mañjarī was
                installed beside Lord Gopinātha — and uniquely, in this temple alone among all
                the temples of Vṛndāvana, Śrīmatī Rādhārāṇī stands to the right of Lord
                Gopinātha and Anangā Mañjarī to His left, rather than the customary arrangement.
                The assembled senior Vaiṣṇavas understood this to be the Lord's own wish.
              </p>
              <p>
                The Bhagavad-gītā teaches us that the Lord is fully in control of all events:
                <span className="italic"> &ldquo;The Supreme Lord is situated in everyone's heart, O Arjuna, and is directing the wanderings of all living entities, who are seated as on a machine, made of the material energy.&rdquo;</span> (Bhagavad-gītā 18.61). The pastime at the Gopinātha Temple is a vivid reminder that the Lord's pastimes are never finished — they continue wherever pure devotees gather.
              </p>
            </section>

            {/* ── SECTION 7: SRINIVASA ── */}
            <section id="srinivasa" className="scroll-mt-6 gp-content">
              <h2 className="gp-sh">
                The Blessing of Śrīnivāsa Ācārya
              </h2>
              <p>
                Among the most heartwarming episodes involving Madhu Paṇḍita Gosvāmī is his
                role in blessing Śrīnivāsa Ācārya — one of the three most celebrated ācāryas
                of the post-Caitanya era, alongside Narottama Dāsa Ṭhākura and Śyāmānanda
                Paṇḍita — who were entrusted with carrying the precious writings of the Six
                Gosvāmīs from Vṛndāvana to Bengal.
              </p>
              <p>
                This was a monumental mission. The Six Gosvāmīs — Śrī Rūpa, Śrī Sanātana,
                Śrī Jīva, Śrī Gopāla Bhaṭṭa, Śrī Raghunātha Bhaṭṭa, and Śrī Raghunātha Dāsa —
                had produced an ocean of Vaiṣṇava theology, philosophy, and devotional poetry
                during their years in Vṛndāvana. These writings needed to be brought to Bengal
                and distributed, so that the people of India — and ultimately the world —
                could receive the gift of bhakti that Śrī Caitanya Mahāprabhu had come to give.
              </p>
              <p>
                As Śrīnivāsa Ācārya prepared to depart on this great service mission, Madhu
                Paṇḍita Gosvāmī came forward and garlanded him with a flower garland that had
                been worn by Lord Gopinātha Himself. In Vaiṣṇava tradition, the honour of
                receiving the Lord's own garland is among the most sacred blessings one can
                receive — it signifies the Lord's personal acceptance and blessing of the
                recipient's service. That Madhu Paṇḍita Gosvāmī, as the pujārī of Gopinātha, was the
                instrument through which this divine blessing was transmitted to Śrīnivāsa
                Ācārya shows his position of trust and intimacy in the community of the
                Vṛndāvana Gosvāmīs.
              </p>
              <blockquote className="gp-bq" style={{ textAlign: "center" }}>
                <p>
                  &ldquo;The garland that had graced the Lord was placed by Madhu Paṇḍita Gosvāmī
                  around the neck of Śrīnivāsa — and with it, the Lord&apos;s own blessing for
                  the great preaching mission that was about to unfold.&rdquo;
                </p>
                <cite>— From the Bhakti-ratnākara of Narahari Cakravartī</cite>
              </blockquote>
              <p>
                The Bhakti-ratnākara also records that when Śrī Bīracandra Prabhu (the son of
                Śrī Nityānanda) visited Vṛndāvana, Madhu Paṇḍita Gosvāmī was among the great devotees
                who came out to receive him — along with Śrī Jīva Gosvāmī, Kṛṣṇadāsa Kavirāja
                Gosvāmī, and other exalted personalities. This confirms that Madhu Paṇḍita Gosvāmī was
                an integral and respected figure in the full community of the Vṛndāvana Vaiṣṇavas
                during this golden era of the Caitanya tradition.
              </p>
            </section>

            {/* ── SECTION 8: GOPINATHA TATTVA ── */}
            <section id="gopinatha-tattva" className="scroll-mt-6 gp-content">
              <h2 className="gp-sh">
                Gopinātha and the Principle of Prayojana Tattva
              </h2>
              <p>
                The Deity that Madhu Paṇḍita Gosvāmī served — Lord Gopinātha — is not merely a
                beautiful murti (Deity form). In the Gauḍīya Vaiṣṇava theological tradition,
                each of the three principal Deities of Vṛndāvana represents a complete
                philosophical principle, and together they reveal the entire path of
                devotional life as taught by Śrī Caitanya Mahāprabhu.
              </p>
              <p>
                Lord Gopinātha — &ldquo;the Master of the Gopīs&rdquo; — represents prayojana tattva:
                the ultimate purpose and goal of existence. The gopīs of Vṛndāvana are
                the supreme exemplars of loving devotion. Their love for Kṛṣṇa — spontaneous,
                unconditional, selfless, and all-consuming — is what the Śrīmad-Bhāgavatam
                describes as the highest form of bhakti. The Tenth Canto of the
                Śrīmad-Bhāgavatam — which Śrīla Prabhupāda has described as the ripened fruit
                of the Vedic tree of knowledge — is largely dedicated to the narration of
                Lord Kṛṣṇa's pastimes with the gopīs, culminating in the rāsa-līlā at
                Vaṁśīvaṭa — the very spot where Lord Gopinātha was rediscovered.
              </p>
              <p>
                Śrīla Prabhupāda explains in his purport to Śrīmad-Bhāgavatam 10.33.39:
              </p>
              <blockquote className="gp-bq">
                <p>
                  &ldquo;The highest perfection of love of Godhead is exhibited by the gopīs of
                  Vṛndāvana. Their love is categorized as kāma, meaning it appears to
                  resemble lusty desires, but in fact it is the highest platform of prema,
                  or pure love.&rdquo;
                </p>
                <cite>— Śrīla Prabhupāda, Śrīmad-Bhāgavatam 10.33.39, Purport</cite>
              </blockquote>
              <p>
                By serving Lord Gopinātha — the Lord of this highest prema — every day for
                forty years, Madhu Paṇḍita Gosvāmī was himself absorbed in the contemplation of the
                highest goal of Vaiṣṇava life. His service was not mechanical ritual. It was
                the outpouring of a heart that had been trained by his spiritual master —
                who was himself the embodiment of Śrīmatī Rādhārāṇī — to love the Lord
                without reservation. There is a profound continuity in this: the śakti (divine
                energy) of Gadadhara Paṇḍita — who is Rādhārāṇī in Gaura-līlā — flowed
                through to the worship of Gopinātha — the Lord of Rādhārāṇī's gopīs —
                through the devotion of Madhu Paṇḍita Gosvāmī.
              </p>
            </section>

            {/* ── SECTION 9: PRABHUPADA ── */}
            <section id="prabhupada-connection" className="scroll-mt-6 gp-content">
              <h2 className="gp-sh">
                Śrīla Prabhupāda and the Gopinātha Lineage
              </h2>
              <p>
                His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupāda — the
                founder-ācārya of the International Society for Krishna Consciousness (ISKCON)
                and the spiritual parent of HKM Chennai — had a deep personal connection
                with the legacy of the Vṛndāvana Gosvāmīs and the temples they established.
              </p>
              <p>
                Before founding ISKCON, Śrīla Prabhupāda lived for years in Vṛndāvana,
                meditating on the Lord's pastimes and translating the Śrīmad-Bhāgavatam.
                He walked the same lanes and courtyards where Madhu Paṇḍita Gosvāmī once served.
                He had darśana of Lord Gopinātha in the very temple that Madhu Paṇḍita Gosvāmī
                established. The deep reverence Śrīla Prabhupāda carried for the Six Gosvāmīs
                and their associates — including personalities like Madhu Paṇḍita Gosvāmī — permeates
                every page of his translations and purports.
              </p>
              <p>
                When Śrīla Prabhupāda wrote his commentary on the Caitanya-caritāmṛta verse
                that mentions Madhu Paṇḍita Gosvāmī (Ādi 12.88), he was not merely providing a
                historical footnote. He was drawing our attention to a living example of the
                principles he spent his entire life teaching:
              </p>
              <ul className="mp-check-list">
                {[
                  "That the highest occupation is service to the Lord's Deity",
                  "That a pure disciple inherits the spiritual potency of a pure guru",
                  "That the Vaiṣṇava community functions as a family — each member blessed and blessing others",
                  "That the dhāma (holy place) is eternally alive because pure devotees have served there",
                ].map((point) => (
                  <li key={point}>
                    <span className="mp-bullet" aria-hidden>
                      ✦
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p>
                When we at HKM Chennai observe the Tirobhava of Madhu Paṇḍita Gosvāmī, we do
                so in the spirit of Śrīla Prabhupāda's teaching — that remembering the
                great Vaiṣṇavas purifies us and connects us to an unbroken chain of devotion
                that stretches from the present moment back to Lord Kṛṣṇa Himself.
              </p>
              <p>
                As the Śrīmad-Bhāgavatam declares (3.25.25): &ldquo;In the association of pure
                devotees, discussion of the pastimes and activities of the Supreme Personality
                of Godhead is very pleasing and satisfying to the ear and the heart. By
                cultivating such knowledge one gradually becomes advanced on the path of
                liberation, and thereafter he is freed, and his attraction becomes fixed.
                Then real devotion and devotional service begin.&rdquo;
              </p>
            </section>

            {/* ── SECTION 10: HOW TO OBSERVE ── */}
            <section id="observing" className="scroll-mt-6 gp-content">
              <h2 className="gp-sh">
                How to Observe This Sacred Day
              </h2>
              <p>
                In the Gauḍīya Vaiṣṇava tradition, both the Āvirbhava (Appearance Day) and
                Tirobhava (Disappearance Day) of great Vaiṣṇavas are observed with equal
                reverence and devotion. The Disappearance Day is not a day of mourning — it is
                a day of glorification and celebration, for the pure devotee never truly
                disappears. As the Bhagavad-gītā teaches, the soul is eternal, and the great
                Vaiṣṇavas continue their service to the Lord in the spiritual world, ever
                accessible to sincere devotees through their teachings and the mercy they
                bestow.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                {[
                  {
                    icon: "📖",
                    title: "Read About His Life",
                    desc: "Study the Bhakti-ratnākara and the relevant sections of Caitanya-caritāmṛta that mention Madhu Paṇḍita Gosvāmī and his service.",
                  },
                  {
                    icon: "🎵",
                    title: "Perform Kīrtana",
                    desc: "Chant the Hare Kṛṣṇa mahā-mantra and sing the songs of the Vaiṣṇava ācāryas — especially those composed by Narottama Dāsa Ṭhākura who was blessed by Madhu Paṇḍita Gosvāmī's tradition.",
                  },
                  {
                    icon: "🌸",
                    title: "Offer Prayers",
                    desc: "Offer a flower at your home altar or the temple Deity, remembering Madhu Paṇḍita Gosvāmī's forty years of Deity worship and his unbroken devotion to Lord Gopinātha.",
                  },
                  {
                    icon: "📿",
                    title: "Chant Extra Rounds",
                    desc: "On the Tirobhava of a great Vaiṣṇava, devotees traditionally chant extra rounds of japa to deepen their own practice of the holy name.",
                  },
                  {
                    icon: "🕌",
                    title: "Visit the Temple",
                    desc: "Visit HKM Chennai — Dakshina Dvāraka Dhāma at Thiruvanmiyur for special observances, Śrīmad-Bhāgavatam class, and darśana of Śrī Śrī Nitai Gaurāṅga.",
                  },
                  {
                    icon: "🙏",
                    title: "Share the Glories",
                    desc: "Share this article with devotees and seekers, so that more souls may hear about this great personality and receive the purifying benefit of such glorification.",
                  },
                ].map((item) => (
                  <div key={item.title} className="mp-card flex gap-3 text-left items-start">
                    <span className="text-2xl shrink-0" aria-hidden>
                      {item.icon}
                    </span>
                    <div>
                      <p className="mp-card-title" style={{ marginBottom: "0.35rem" }}>
                        {item.title}
                      </p>
                      <p className="mp-card-sub" style={{ textAlign: "left", fontSize: "0.95rem", lineHeight: 1.5 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION 11: SAMADHI ── */}
            <section id="samadhi" className="scroll-mt-6 gp-content">
              <h2 className="gp-sh">
                The Samādhi of Madhu Paṇḍita Gosvāmī
              </h2>
              <p>
                In the Vaiṣṇava tradition, the samādhi — the memorial tomb of a great saint —
                is not merely a monument. It is a place of ongoing spiritual presence. The
                Gauḍīya Vaiṣṇavas believe that a pure devotee is nirguṇa — transcendental to
                the material energy — and that his or her samādhi retains the spiritual
                potency of that personality. To visit the samādhi of a Vaiṣṇava and offer
                praṇāmas (obeisances) is to receive their mercy directly.
              </p>
              <p>
                The samādhi of Śrī Madhu Paṇḍita Gosvāmī stands on the eastern side of the
                Gopinātha Temple premises in Vṛndāvana — within the very courtyard of the
                temple he built and the Deity he served for forty years. Even today, pilgrims
                who visit the Gopinātha Temple can offer their respects at this samādhi and
                meditate on the extraordinary life of devotion it represents.
              </p>
              <p>
                For devotees who cannot make the pilgrimage to Vṛndāvana, the samādhi can
                be visited in spirit through prayer, reading, and remembrance. The Śrīmad-Bhāgavatam
                (7.14.30-33) confirms that even the homes of devotees become places of
                pilgrimage, because the devotee carries the Lord with them always. In the same
                spirit, whenever we remember Madhu Paṇḍita Gosvāmī — wherever we are — we
                make contact with his mercy.
              </p>
              <div className="mp-prayer-panel">
                <p aria-hidden style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                  🙏
                </p>
                <p>
                  &ldquo;I offer my respectful obeisances unto the feet of Śrī Madhu Paṇḍita
                  Gosvāmī — the devoted disciple of Śrī Gadadhara Paṇḍita, the great servant
                  of Lord Gopinātha, the blessed associate of the Vṛndāvana Gosvāmīs, and the
                  eternal recipient of the Lord&apos;s own mercy.&rdquo;
                </p>
                <cite>— A prayer of remembrance</cite>
              </div>
            </section>

            {/* ── FAQ SECTION ── */}
            <section id="faq" className="scroll-mt-6 gp-content">
              <h2 className="gp-sh">Frequently Asked Questions</h2>
              <div className="mp-faq-list">
                {faqMainEntity.map((faq, i) => (
                  <details key={i}>
                    <summary>
                      <span>{faq.name}</span>
                      <span className="text-lg leading-none" aria-hidden>
                        +
                      </span>
                    </summary>
                    <div className="mp-faq-body">
                      {faq.acceptedAnswer.text}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className="mp-donate-banner">
              <h2>Support Dakshina Dvāraka Dhāma</h2>
              <p>
                Help us complete Chennai&apos;s tallest temple — a Pallava-style monument to
                Śrī Śrī Kṛṣṇa-Rukmiṇī-Satyabhāmā. Your contribution is an act of devotional
                service in the spirit of great Vaiṣṇavas like Madhu Paṇḍita Gosvāmī.
              </p>
              <a href="https://hkmchennai.org/donate" target="_blank" rel="noopener noreferrer">
                🙏 Donate Now
              </a>
              <p className="mp-cta-note">80G Tax Exemption available · ISKCON Bangalore affiliated · Est. 2008</p>
            </section>

            <section className="scroll-mt-6 gp-content" style={{ marginTop: "2.5rem" }}>
              <h2 className="gp-sh" style={{ marginTop: 0 }}>
                Continue reading
              </h2>
              <div className="mp-continue-grid">
                {[
                  { href: "/blog/gadadhara-pandita", title: "Śrī Gadādhara Paṇḍita", tag: "Vaiṣṇava Saints" },
                  { href: "/blog/ramanavami", title: "Rāma Navamī — Lord Rāmacandra", tag: "Festivals" },
                  { href: "/blog/bhagavad-gita", title: "Bhagavad-gītā — Daily life", tag: "Articles" },
                ].map((article) => (
                  <Link key={article.href} href={article.href} className="mp-continue-card">
                    <p className="mp-tag">{article.tag}</p>
                    <h3>{article.title} →</h3>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mp-connect-wrap" aria-labelledby="connect-heading" style={{ marginTop: "2.5rem" }}>
              <h2 id="connect-heading">Connect With Us</h2>
              <p className="mp-connect-intro">
                Follow Hare Krishna Movement Chennai across all platforms for daily darśan, spiritual
                insights, event updates, and sevā opportunities.
              </p>

              <div className="mp-connect-grid">
                <a
                  href="https://hkmchennai.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mp-connect-link pl-website"
                >
                  <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                  <span className="flex flex-col leading-tight">
                    <strong>hkmchennai.org</strong>
                    <span className="text-xs font-normal opacity-90">Official Website</span>
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/hkm_chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mp-connect-link pl-instagram"
                >
                  <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.851s-.011 3.585-.069 4.851c-.062 1.366-.333 2.633-1.308 3.608-.975.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.585-.011-4.851-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.975-1.246-2.242-1.308-3.608C2.175 15.585 2.163 15.205 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.333.013 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.013 8.333 0 8.741 0 12c0 3.259.013 3.668.072 4.948.085 1.856.601 3.698 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.333 23.987 8.741 24 12 24s3.668-.014 4.948-.072c1.856-.085 3.698-.601 5.038-1.942 1.341-1.34 1.857-3.182 1.942-5.038C23.987 15.668 24 15.259 24 12s-.013-3.667-.072-4.947c-.085-1.856-.601-3.698-1.942-5.038C20.646.673 18.804.157 16.948.072 15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                  <span className="flex flex-col leading-tight">
                    <strong>@hkm_chennai</strong>
                    <span className="text-xs font-normal opacity-90">Instagram</span>
                  </span>
                </a>
                <a
                  href="https://x.com/ChennaiHare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mp-connect-link pl-twitter"
                >
                  <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="flex flex-col leading-tight">
                    <strong>@ChennaiHare</strong>
                    <span className="text-xs font-normal opacity-80">X (Twitter)</span>
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/company/hare-krishna-movement-chennai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mp-connect-link pl-linkedin"
                >
                  <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="flex flex-col leading-tight">
                    <strong>HKM Chennai</strong>
                    <span className="text-xs font-normal opacity-90">LinkedIn</span>
                  </span>
                </a>
                <a
                  href="https://www.whatsapp.com/channel/0029Vaa2fjKEVccFHx5YDt1O"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mp-connect-link pl-whatsapp"
                  style={{ gridColumn: "1 / -1" }}
                >
                  <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                  <span className="flex flex-col leading-tight">
                    <strong>WhatsApp Channel</strong>
                    <span className="text-xs font-normal opacity-90">HKM Chennai Official</span>
                  </span>
                </a>
              </div>

              <a
                href="https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign"
                target="_blank"
                rel="noopener noreferrer"
                className="mp-connect-donate"
              >
                <span aria-hidden>🪷</span>
                Donate — Temple Construction Campaign
              </a>

              <div className="mp-connect-map">
                <p className="mp-map-label">Dakshina Dwārakā Dhām — Find us</p>
                <div className="mp-map-box">
                  <iframe
                    src="https://maps.google.com/maps?q=63,+1st+Seaward+Road,+Thiruvanmiyur,+Chennai+600+041&output=embed"
                    className="mp-map-iframe"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dakshina Dwaraka Dham — HKM Chennai Location"
                  />
                </div>
                <div className="mp-map-directions">
                  <a href="https://maps.app.goo.gl/tJEq5NoCUXdciRhP8" target="_blank" rel="noopener noreferrer">
                    <span aria-hidden>🗺️</span> Get directions
                  </a>
                </div>
              </div>
            </section>
        </article>

        <Footer />
      </main>
    </>
  );
}
