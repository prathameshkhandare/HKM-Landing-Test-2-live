// ============================================================
// HKM Chennai — Blog Page
// Sri Madhu Pandita Gosvami — Appearance & Disappearance Day
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
  headline: "Sri Madhu Pandita Gosvami — The Devoted Servant of Gopinatha",
  description:
    "The life, devotion, and eternal glory of Sri Madhu Pandita Gosvami — disciple of Sri Gadadhara Pandita, founder of the Gopinatha Temple in Vrndavana, and beloved associate in the Caitanya-parampara.",
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
  articleSection: "Vaisnava Saints",
  inLanguage: "en-IN",
  about: {
    "@type": "Person",
    name: "Sri Madhu Pandita Gosvami",
    description:
      "A great Vaisnava saint, disciple of Sri Gadadhara Pandita, and founder of the Gopinatha Temple in Vrndavana — one of the seven principal ancient temples of the holy dhama.",
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
      name: "Who was Sri Madhu Pandita Gosvami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sri Madhu Pandita Gosvami was a great Vaisnava saint and a disciple of Sri Gadadhara Pandita, one of the panca-tattva associates of Sri Caitanya Mahaprabhu. He is celebrated as the devotee who founded and established the Gopinatha Temple in Vrndavana — one of the Saptadevalyas (seven ancient principal temples) of the holy dhama.",
      },
    },
    {
      "@type": "Question",
      name: "What is the significance of the Gopinatha Temple founded by Madhu Pandita Gosvami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Gopinatha Temple in Vrndavana is one of the seven principal Gosvami temples of the dhama. The presiding Deity, Sri Gopinatha, was originally installed by Vajranabha, Lord Krsna's great-grandson, approximately 5,000 years ago. The Deity was rediscovered at Vamsivata during the time of the Gosvamis and entrusted to Madhu Pandita Gosvami, who served the Deity faithfully for forty years. The temple holds the unique distinction of having Ananga Manjari (the younger sister of Srimati Radharani) on the altar — reflecting the divine pastimes of Sri Jahnava Devi.",
      },
    },
    {
      "@type": "Question",
      name: "Who was Madhu Pandita Gosvami's spiritual master?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sri Madhu Pandita Gosvami was a disciple of Sri Gadadhara Pandita Gosvami, one of the most intimate associates of Sri Caitanya Mahaprabhu and a member of the panca-tattva. Gadadhara Pandita is identified in the scriptures as the embodiment of Srimati Radharani's devotional energy in Gaura-lila.",
      },
    },
    {
      "@type": "Question",
      name: "What is the connection between Madhu Pandita Gosvami and Srinivasa Acarya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Madhu Pandita Gosvami was present in Vrndavana when the great acaryas Narottama Dasa Thakura, Syamananda Pandita, and Srinivasa Acarya departed from Vrndavana to carry the writings of the Six Gosvamis to Bengal. As an act of profound blessing, Madhu Pandita Gosvami garlanded Srinivasa Acarya with a flower garland that had been worn by Lord Gopinatha Himself — a blessing whose significance the Bhakti-ratnakara records with great reverence.",
      },
    },
    {
      "@type": "Question",
      name: "When is the Disappearance Day of Sri Madhu Pandita Gosvami observed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Tirobhava (Disappearance Day) of Sri Madhu Pandita Gosvami is traditionally observed on the Vaisnava calendar, falling around the month of April (Vaisakha). Devotees observe this sacred day by reading about his life and glories, performing kirtana, visiting Gopinatha temples, and honouring his extraordinary service to the Deity and the Vaisnava community.",
      },
    },
    {
      "@type": "Question",
      name: "Where is the samadhi of Madhu Pandita Gosvami located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The samadhi (memorial tomb) of Sri Madhu Pandita Gosvami is located within the premises of the Gopinatha Temple in Vrndavana, on the eastern side of the temple courtyard. Pilgrims visiting the Gopinatha Temple are able to offer their pranamas at his samadhi.",
      },
    },
    {
      "@type": "Question",
      name: "What can we learn from the life of Madhu Pandita Gosvami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada teaches us that the purest standard of devotional service is demonstrated by such great souls who give their entire lives in unbroken Deity worship, personal surrender to the spiritual master, and selfless service to the Vaisnava community. Madhu Pandita Gosvami's forty years of worship of Lord Gopinatha, his humble position in the lineage of Gadadhara Pandita, and his blessing of Srinivasa Acarya all illustrate the deepest principles of bhakti.",
      },
    },
    {
      "@type": "Question",
      name: "How can I observe the Appearance or Disappearance Day of Sri Madhu Pandita Gosvami at HKM Chennai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HKM Chennai — Dakshina Dvaraka Dhama at Thiruvanmiyur observes all major Vaisnava calendar events including the appearance and disappearance days of the great acaryas and associates of Sri Caitanya Mahaprabhu. You are welcome to join us for our daily programmes including Mangala Arati at 4:30 AM and Srimad-Bhagavatam classes. Visit hkmchennai.org or call us for the specific programme schedule.",
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
      name: "Sri Madhu Pandita Gosvami",
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
  { id: "intro", label: "Who Was Sri Madhu Pandita Gosvami?" },
  { id: "lineage", label: "The Lineage: A Disciple of Sri Gadadhara Pandita" },
  { id: "gopinatha", label: "The Rediscovery of Lord Gopinatha" },
  { id: "forty-years", label: "Forty Years of Unbroken Devotional Service" },
  { id: "saptadevalya", label: "The Gopinatha Temple — One of the Saptadevalyas" },
  { id: "jahnava-devi", label: "Sri Jahnava Devi and the Mystery of Ananga Manjari" },
  { id: "srinivasa", label: "The Blessing of Srinivasa Acarya" },
  { id: "gopinatha-tattva", label: "Gopinatha and the Principle of Prayojana Tattva" },
  { id: "prabhupada-connection", label: "Srila Prabhupada and the Gopinatha Lineage" },
  { id: "observing", label: "How to Observe This Sacred Day" },
  { id: "samadhi", label: "The Samadhi of Madhu Pandita Gosvami" },
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
            <li aria-current="page">Sri Madhu Pandita Gosvami</li>
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
              <p className="gp-hero-label">Gaudiya Vaisnava — Vaisnava Saints</p>
              <h1 className="gp-blog-title">
                Sri Madhu Pandita Gosvami:
                <br />
                The Devoted Servant of Gopinatha
              </h1>
              <div className="gp-hero-line" />
              <p className="gp-blog-subtitle">
                Disciple of Sri Gadadhara Pandita · Founder of the ancient Gopinatha Temple in
                Vrndavana · Associate in the Caitanya-parampara
              </p>
              <p className="gp-blog-byline">
                Based on the teachings and purports of{" "}
                <strong>His Divine Grace A.C. Bhaktivedanta Swami Prabhupada</strong> —{" "}
                <em>Sri Caitanya-caritamrta</em>, the Bhakti-ratnakara, and the Gaudiya tradition
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
                alt="Sri Madhu Pandita Gosvami"
                width={800}
                height={1000}
                className="mp-hero-image"
                sizes="(max-width: 800px) 100vw, 800px"
                priority
              />
              <span className="gp-image-caption">
                Sri Madhu Pandita Gosvami — devoted servant of Sri Gopinatha
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
                <p></p>
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
                Who Was Sri Madhu Pandita Gosvami?
              </h2>
              <p>
                In the vast and luminous galaxy of devotees who orbited Sri Caitanya Mahaprabhu — the
                Supreme Lord who descended in this age to distribute the treasure of pure love of
                Godhead — there are some souls whose contribution remains etched in the very stones
                and soil of Vrndavana. Sri Madhu Pandita Gosvami is one such exalted personality.
              </p>
              <p>
                His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada, in his
                commentary on Sri Caitanya-caritamrta (Adi-lila 12.88), specifically lists
                Madhu Pandita Gosvami among the notable disciples of Sri Gadadhara Pandita, noting that he
                &ldquo;lived near Khadadaha in the village known as Sanibona-grama, about two miles
                east of the Khadadaha station, and constructed the temple of Gopinathaji in
                Vrndavana.&rdquo;
              </p>
              <p>
                This single line from Srila Prabhupada opens a door into an extraordinary life —
                a life of complete surrender, unbroken Deity worship, and selfless service to the
                Vaisnava community. To observe his Tirobhava (Disappearance Day) or Avirbhava
                (Appearance Day) is to remember a soul who literally built one of the seven most
                sacred temples on the face of the earth and spent forty years in devoted service
                before the lotus feet of Lord Gopinatha.
              </p>
              <blockquote className="gp-bq">
                <p>
                  &ldquo;A devotee should be fixed in the conclusion that the Lord's holy name is
                  identical with the Lord Himself and should chant the holy name with complete
                  conviction.&rdquo;
                </p>
                <cite>— Srimad-Bhagavatam 11.2.40, as explained by Srila Prabhupada</cite>
              </blockquote>
              <p>
                Such was the conclusion in which Madhu Pandita Gosvami was firmly established.
                Every day of his life in Vrndavana was an expression of this principle — that
                devotional service, when rendered with purity and steadiness, becomes the highest
                gift one can offer both to the Lord and to future generations.
              </p>
            </section>

            {/* ── SECTION 2: LINEAGE ── */}
            <section id="lineage" className="scroll-mt-6 gp-content">
              <h2 className="gp-sh">
                The Lineage: A Disciple of Sri Gadadhara Pandita
              </h2>
              <p>
                To understand Madhu Pandita Gosvami, we must first understand his spiritual master,
                Sri Gadadhara Pandita Gosvami — for the quality of a disciple is illuminated by
                the greatness of his guru.
              </p>
              <p>
                Sri Gadadhara Pandita is one of the panca-tattva — the five-fold form of the
                Absolute Truth that descended with Sri Caitanya Mahaprabhu. The Gaura-ganoddesa-dipika,
                the authoritative text that identifies the roles of Mahaprabhu's associates,
                declares that Gadadhara Pandita is none other than Srimati Radharani herself —
                the hladini-sakti (the pleasure potency) of the Lord — who appeared in Gaura-lila
                to accompany the Lord in His pastimes of distributing prema-bhakti.
              </p>
              <p>
                Madhu Pandita Gosvami received diksa (spiritual initiation) from this ocean of divine
                love. Having come from the village of Sanibona-grama near Khadadaha in Bengal,
                he eventually made his way to Vrndavana — the eternal abode of Lord Krsna — in
                search of the Supreme Lord and in the spirit of his master's teachings. There, he
                came under the guidance of Sri Paramananda Bhattacarya, another disciple of
                Gadadhara Pandita, who would play a pivotal role in one of the most remarkable
                events of that era.
              </p>
              <div className="my-6">
                <h3 className="gp-sh3">The Disciplic Connection</h3>
                <div className="mp-card-grid mp-three">
                  <div className="mp-card">
                    <p className="text-2xl mb-1">🌸</p>
                    <p className="mp-card-title">Sri Caitanya Mahaprabhu</p>
                    <p className="mp-card-sub">The Supreme Lord in Gaura-lila</p>
                  </div>
                  <div className="mp-card">
                    <p className="text-2xl mb-1">🌺</p>
                    <p className="mp-card-title">Sri Gadadhara Pandita</p>
                    <p className="mp-card-sub">Panca-tattva · Guru of Madhu Pandita Gosvami</p>
                  </div>
                  <div className="mp-card">
                    <p className="text-2xl mb-1">🌼</p>
                    <p className="mp-card-title">Sri Madhu Pandita Gosvami</p>
                    <p className="mp-card-sub">Founder of Gopinatha Temple · Vrndavana</p>
                  </div>
                </div>
              </div>
              <p>
                The Sakha-nirnaya of Yadunandana Dasa, cited by Srila Prabhupada, lists
                Madhu Pandita Gosvami as one of the significant branches of the Gadadhara Pandita disciplic tree —
                a tree whose roots were nourished by the most intimate love of Sri Caitanya
                Mahaprabhu Himself.
              </p>
            </section>

            {/* ── SECTION 3: GOPINATHA DISCOVERY ── */}
            <section id="gopinatha" className="scroll-mt-6 gp-content">
              <h2 className="gp-sh">
                The Rediscovery of Lord Gopinatha
              </h2>
              <div className="mp-inline-figure max-w-2xl mx-auto mb-8">
                <Image
                  src="/assets/blog/sri-madhu-pandita-gosvami/Radha_Gopinath_deities.png"
                  alt="Sri Sri Radha-Gopinatha — the presiding Deities of the ancient Gopinatha temple in Vrndavana served by Madhu Pandita Gosvami"
                  width={1200}
                  height={800}
                  className="mp-hero-image w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
                <p className="mp-inline-figcaption text-center m-0">
                  Sri Sri Radha-Gopinatha — worshipped in the Gopinatha tradition established by Madhu Pandita Gosvami
                </p>
              </div>
              <p>
                The story of how Lord Gopinatha was rediscovered in Vrndavana is one of the most
                touching episodes in the history of Gaudiya Vaisnavism — and Madhu Pandita Gosvami
                stands at its very heart.
              </p>
              <p>
                Lord Gopinatha — meaning &ldquo;the Master of the Gopis&rdquo; — is one of the three
                principal Deities of Vrndavana, the others being Sri Madana-Mohana and Sri
                Govinda Deva. Together, these three Deities represent the three great principles
                of spiritual life described in the Bhagavad-gita and Srimad-Bhagavatam:
                sambandha (our relationship with the Lord), abhidheya (our activities in that
                relationship), and prayojana (the ultimate goal — pure love of Godhead). Lord
                Gopinatha embodies prayojana — He is the Lord of the highest love.
              </p>
              <p>
                The original Deity of Gopinatha had been installed approximately 5,000 years ago
                by Vajranabha, the great-grandson of Lord Krsna, who had several Deities carved
                based on the descriptions of Krsna's divine form given by Uttara, the mother of
                Maharaja Pariksit. As narrated in the Srimad-Bhagavatam, Pariksit was the last
                royal descendent of the Pandavas who heard the Bhagavatam from Sukadeva Gosvami
                on the banks of the Ganga before leaving his body — an event that is the very
                foundation of the Bhagavata tradition.
              </p>
              <p>
                Over millennia, this ancient Deity became lost. During the time of the Gosvamis —
                the period following Sri Caitanya Mahaprabhu's earthly pastimes — Madhu Pandita Gosvami
                came to Vrndavana with a burning longing in his heart for Lord Gopinatha. He
                searched everywhere. Not finding the Deity, and feeling a grief that only a pure
                devotee can know, he gave up eating and sat at Vamsivata — the sacred place where
                Lord Krsna had performed His rasa-lila — weeping in constant streams of tears and
                calling out to the Lord.
              </p>
              <blockquote className="gp-bq">
                <p>
                  &ldquo;sriman rasa-rasarambhi vamsivata-tata-sthitau
                  karman venu-svanair gopir gopi-nathau sriye 'stu nau&rdquo;
                </p>
                <cite>— Sri Caitanya-caritamrta, Madhya 1.5 · The verse glorifying Lord Gopinatha</cite>
                <p style={{ marginTop: "0.75rem", fontStyle: "normal", fontSize: "1.1rem" }}>
                  Translation: Let the merciful blessings of Lord Gopinatha — who commences
                  the enchanting rasa dance on the banks of the Yamuna at Vamsivata and
                  enthralls the gopis with the sweet melodies of His flute — be upon us.
                </p>
              </blockquote>
              <p>
                As fate — or rather, the Lord's own mercy — would have it, the monsoon that season
                brought extraordinary floods. The Yamuna overflowed her banks with tremendous
                force, uprooting an ancient banyan tree at Vamsivata. When the waters finally
                receded, Madhu Pandita Gosvami's close companion, Sri Paramananda Bhattacarya, saw
                a Deity half-buried in the earth at the very spot where the great banyan tree had
                once stood — Lord Gopinatha, resting where He had been for thousands of years,
                awaiting the arrival of His devoted servants.
              </p>
              <p>
                Paramananda immediately called Madhu Pandita Gosvami, who retrieved the Deity with tears
                of joy. The Lord who had been searched for with such longing and grief was now
                found — and the great chapter of Gopinatha's worship in Vrndavana had truly begun.
              </p>
            </section>

            {/* ── SECTION 4: FORTY YEARS ── */}
            <section id="forty-years" className="scroll-mt-6 gp-content">
              <h2 className="gp-sh">
                Forty Years of Unbroken Devotional Service
              </h2>
              <p>
                After the discovery of Lord Gopinatha, the Deity was moved to the spot where
                the present Gopinatha Temple now stands. The seva (worship) of the Deity was
                entrusted to Madhu Pandita Gosvami — and for the next forty years, he served Lord
                Gopinatha with absolute steadiness, devotion, and love.
              </p>
              <p>
                This is not a small or incidental detail. The Srimad-Bhagavatam repeatedly
                glorifies the power of steadfast, uninterrupted devotional service. As Srila
                Prabhupada explains in his purports, the highest standard of bhakti is naisthiki
                — unswerving, unbroken, lifelong devotion. Madhu Pandita Gosvami embodied this. Every
                day, for four decades, he rose before dawn, performed the full srngara (dressing
                and ornamentation) of the Deity, offered bhoga (food), performed arati, and read
                the Srimad-Bhagavatam — the scripture that Sri Caitanya Mahaprabhu declared to
                be the commentary on the Vedanta-sutra and the essence of all spiritual knowledge.
              </p>
              <p>
                The Bhakti-ratnakara — the authoritative text of Narahari Cakravarti that records
                the lives of the Vaisnavas after the disappearance of Sri Caitanya Mahaprabhu —
                glorifies the extraordinary service of Madhu Pandita Gosvami. It is the very text that
                the Six Gosvamis of Vrndavana, Srinivasa Acarya, and Narottama Dasa Thakura
                honoured and propagated.
              </p>
              <div className="my-6">
                <h3 className="gp-sh3">The Teaching of Steady Devotion</h3>
                <p>Srila Prabhupada writes in his purport to Srimad-Bhagavatam 1.2.6:</p>
                <div className="gp-mantra-box" style={{ marginTop: "1rem" }}>
                  <p>
                    &ldquo;The highest perfection of human life is to have one&apos;s complete absorption
                    in pure devotional service of the Lord without any cause or impediment.&rdquo;
                  </p>
                  <cite>
                    — His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, Srimad-Bhagavatam 1.2.6, Purport
                  </cite>
                </div>
              </div>
              <p>
                This is precisely what Madhu Pandita Gosvami demonstrated — not for a year, not for a
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
                The Gopinatha Temple — One of the Saptadevalyas
              </h2>
              <p>
                The Gopinatha Temple that Madhu Pandita Gosvami established is one of the
                Saptadevalyas — the seven principal and most ancient Vaisnava temples of
                Vrndavana. These seven temples are the beating heart of the dhama, each one
                associated with a great Gosvami or saint of the Caitanya tradition, and each
                one housing a Deity whose history connects us to the very earliest days of
                Krsna's appearance on this earth.
              </p>
              <p>
                The seven Gosvami temples of Vrndavana are: Sri Madan-Mohan (established by
                Sri Sanatana Gosvami), Sri Govinda Deva (established by Sri Rupa Gosvami),
                Sri Gopinatha (established by Sri Madhu Pandita Gosvami), Sri Radha Damodara
                (established by Sri Jiva Gosvami), Sri Radha Syamasundara (established by
                Srinivasa Acarya), Sri Radha Ramana (established by Sri Gopala Bhatta Gosvami),
                and Sri Radha Gokulananda (associated with Sri Lokanatha Gosvami).
              </p>
              <p>
                There is a profound Vaisnava tradition that states: if a pilgrim is fortunate
                enough to have darsana of the three principal Deities — Sri Madana-Mohana,
                Sri Gopinatha, and Sri Govinda Deva — within a single day, before sunset, they
                receive a blessing equivalent to the direct darsana of Lord Krsna Himself.
                These three Deities represent the complete spiritual journey — from first
                awakening our love for God, to deepening our service, to attaining the
                supreme goal.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                {[
                  {
                    deity: "Sri Madana-Mohana",
                    principle: "Sambandha Tattva",
                    meaning: "Establishing our relationship with the Lord — the beginning of the path",
                    color: "bg-blue-50 border-blue-200",
                    textColor: "text-blue-900",
                  },
                  {
                    deity: "Sri Govinda Deva",
                    principle: "Abhidheya Tattva",
                    meaning: "Our activities and service in that relationship — the practice",
                    color: "bg-green-50 border-green-200",
                    textColor: "text-green-900",
                  },
                  {
                    deity: "Sri Gopinatha",
                    principle: "Prayojana Tattva",
                    meaning: "The supreme goal — pure love of Godhead in the footsteps of the gopis",
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
                That Madhu Pandita Gosvami was chosen by the Lord to establish and serve the
                Deity representing the highest goal — prayojana — says everything about his
                spiritual stature. He was not merely a temple builder. He was a devotee who
                had achieved the very purpose of life and was thus fit to serve the Deity
                who embodies it.
              </p>
            </section>

            {/* ── SECTION 6: JAHNAVA DEVI ── */}
            <section id="jahnava-devi" className="scroll-mt-6 gp-content">
              <h2 className="gp-sh">
                Sri Jahnava Devi and the Mystery of Ananga Manjari
              </h2>
              <p>
                One of the most extraordinary pastimes associated with the Gopinatha Temple
                took place when Sri Jahnava Devi — the wife of Sri Nityananda Prabhu and one
                of the most venerated personalities in the entire Gaudiya Vaisnava tradition —
                visited Vrndavana. Jahnava Mata, as she is lovingly called, is identified in
                the Gaudiya scriptures as Ananga Manjari — the younger sister of Srimati
                Radharani in Krsna's eternal pastimes.
              </p>
              <p>
                During her visit to the evening arati at the Gopinatha Temple, an extraordinary
                and mystical event occurred. The Lord Himself — in full view of the assembled
                Vaisnavas — leapt from the altar and took Jahnava Devi onto the altar, and the
                curtains closed. When the Vaisnavas opened the curtain again, Jahnava Devi was
                no longer visible in the assembly — and Lord Gopinatha stood on the altar.
              </p>
              <p>
                This pastime — recorded in the Vaisnava literature — has a specific theological
                significance. Jahnava Devi is Ananga Manjari; the Lord drew her into His own
                service on the altar. After this event, a new Deity of Ananga Manjari was
                installed beside Lord Gopinatha — and uniquely, in this temple alone among all
                the temples of Vrndavana, Srimati Radharani stands to the right of Lord
                Gopinatha and Ananga Manjari to His left, rather than the customary arrangement.
                The assembled senior Vaisnavas understood this to be the Lord's own wish.
              </p>
              <p>
                The Bhagavad-gita teaches us that the Lord is fully in control of all events:
                <span className="italic"> &ldquo;The Supreme Lord is situated in everyone's heart, O Arjuna, and is directing the wanderings of all living entities, who are seated as on a machine, made of the material energy.&rdquo;</span> (Bhagavad-gita 18.61). The pastime at the Gopinatha Temple is a vivid reminder that the Lord's pastimes are never finished — they continue wherever pure devotees gather.
              </p>
            </section>

            {/* ── SECTION 7: SRINIVASA ── */}
            <section id="srinivasa" className="scroll-mt-6 gp-content">
              <h2 className="gp-sh">
                The Blessing of Srinivasa Acarya
              </h2>
              <p>
                Among the most heartwarming episodes involving Madhu Pandita Gosvami is his
                role in blessing Srinivasa Acarya — one of the three most celebrated acaryas
                of the post-Caitanya era, alongside Narottama Dasa Thakura and Syamananda
                Pandita — who were entrusted with carrying the precious writings of the Six
                Gosvamis from Vrndavana to Bengal.
              </p>
              <p>
                This was a monumental mission. The Six Gosvamis — Sri Rupa, Sri Sanatana,
                Sri Jiva, Sri Gopala Bhatta, Sri Raghunatha Bhatta, and Sri Raghunatha Dasa —
                had produced an ocean of Vaisnava theology, philosophy, and devotional poetry
                during their years in Vrndavana. These writings needed to be brought to Bengal
                and distributed, so that the people of India — and ultimately the world —
                could receive the gift of bhakti that Sri Caitanya Mahaprabhu had come to give.
              </p>
              <p>
                As Srinivasa Acarya prepared to depart on this great service mission, Madhu
                Pandita Gosvami came forward and garlanded him with a flower garland that had
                been worn by Lord Gopinatha Himself. In Vaisnava tradition, the honour of
                receiving the Lord's own garland is among the most sacred blessings one can
                receive — it signifies the Lord's personal acceptance and blessing of the
                recipient's service. That Madhu Pandita Gosvami, as the pujari of Gopinatha, was the
                instrument through which this divine blessing was transmitted to Srinivasa
                Acarya shows his position of trust and intimacy in the community of the
                Vrndavana Gosvamis.
              </p>
              <blockquote className="gp-bq" style={{ textAlign: "center" }}>
                <p>
                  &ldquo;The garland that had graced the Lord was placed by Madhu Pandita Gosvami
                  around the neck of Srinivasa — and with it, the Lord&apos;s own blessing for
                  the great preaching mission that was about to unfold.&rdquo;
                </p>
                <cite>— From the Bhakti-ratnakara of Narahari Cakravarti</cite>
              </blockquote>
              <p>
                The Bhakti-ratnakara also records that when Sri Biracandra Prabhu (the son of
                Sri Nityananda) visited Vrndavana, Madhu Pandita Gosvami was among the great devotees
                who came out to receive him — along with Sri Jiva Gosvami, Krsnadasa Kaviraja
                Gosvami, and other exalted personalities. This confirms that Madhu Pandita Gosvami was
                an integral and respected figure in the full community of the Vrndavana Vaisnavas
                during this golden era of the Caitanya tradition.
              </p>
            </section>

            {/* ── SECTION 8: GOPINATHA TATTVA ── */}
            <section id="gopinatha-tattva" className="scroll-mt-6 gp-content">
              <h2 className="gp-sh">
                Gopinatha and the Principle of Prayojana Tattva
              </h2>
              <p>
                The Deity that Madhu Pandita Gosvami served — Lord Gopinatha — is not merely a
                beautiful murti (Deity form). In the Gaudiya Vaisnava theological tradition,
                each of the three principal Deities of Vrndavana represents a complete
                philosophical principle, and together they reveal the entire path of
                devotional life as taught by Sri Caitanya Mahaprabhu.
              </p>
              <p>
                Lord Gopinatha — &ldquo;the Master of the Gopis&rdquo; — represents prayojana tattva:
                the ultimate purpose and goal of existence. The gopis of Vrndavana are
                the supreme exemplars of loving devotion. Their love for Krsna — spontaneous,
                unconditional, selfless, and all-consuming — is what the Srimad-Bhagavatam
                describes as the highest form of bhakti. The Tenth Canto of the
                Srimad-Bhagavatam — which Srila Prabhupada has described as the ripened fruit
                of the Vedic tree of knowledge — is largely dedicated to the narration of
                Lord Krsna's pastimes with the gopis, culminating in the rasa-lila at
                Vamsivata — the very spot where Lord Gopinatha was rediscovered.
              </p>
              <p>
                Srila Prabhupada explains in his purport to Srimad-Bhagavatam 10.33.39:
              </p>
              <blockquote className="gp-bq">
                <p>
                  &ldquo;The highest perfection of love of Godhead is exhibited by the gopis of
                  Vrndavana. Their love is categorized as kama, meaning it appears to
                  resemble lusty desires, but in fact it is the highest platform of prema,
                  or pure love.&rdquo;
                </p>
                <cite>— Srila Prabhupada, Srimad-Bhagavatam 10.33.39, Purport</cite>
              </blockquote>
              <p>
                By serving Lord Gopinatha — the Lord of this highest prema — every day for
                forty years, Madhu Pandita Gosvami was himself absorbed in the contemplation of the
                highest goal of Vaisnava life. His service was not mechanical ritual. It was
                the outpouring of a heart that had been trained by his spiritual master —
                who was himself the embodiment of Srimati Radharani — to love the Lord
                without reservation. There is a profound continuity in this: the sakti (divine
                energy) of Gadadhara Pandita — who is Radharani in Gaura-lila — flowed
                through to the worship of Gopinatha — the Lord of Radharani's gopis —
                through the devotion of Madhu Pandita Gosvami.
              </p>
            </section>

            {/* ── SECTION 9: PRABHUPADA ── */}
            <section id="prabhupada-connection" className="scroll-mt-6 gp-content">
              <h2 className="gp-sh">
                Srila Prabhupada and the Gopinatha Lineage
              </h2>
              <p>
                His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada — the
                founder-acarya of the International Society for Krishna Consciousness (ISKCON)
                and the spiritual parent of HKM Chennai — had a deep personal connection
                with the legacy of the Vrndavana Gosvamis and the temples they established.
              </p>
              <p>
                Before founding ISKCON, Srila Prabhupada lived for years in Vrndavana,
                meditating on the Lord's pastimes and translating the Srimad-Bhagavatam.
                He walked the same lanes and courtyards where Madhu Pandita Gosvami once served.
                He had darsana of Lord Gopinatha in the very temple that Madhu Pandita Gosvami
                established. The deep reverence Srila Prabhupada carried for the Six Gosvamis
                and their associates — including personalities like Madhu Pandita Gosvami — permeates
                every page of his translations and purports.
              </p>
              <p>
                When Srila Prabhupada wrote his commentary on the Caitanya-caritamrta verse
                that mentions Madhu Pandita Gosvami (Adi 12.88), he was not merely providing a
                historical footnote. He was drawing our attention to a living example of the
                principles he spent his entire life teaching:
              </p>
              <ul className="mp-check-list">
                {[
                  "That the highest occupation is service to the Lord's Deity",
                  "That a pure disciple inherits the spiritual potency of a pure guru",
                  "That the Vaisnava community functions as a family — each member blessed and blessing others",
                  "That the dhama (holy place) is eternally alive because pure devotees have served there",
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
                When we at HKM Chennai observe the Tirobhava of Madhu Pandita Gosvami, we do
                so in the spirit of Srila Prabhupada's teaching — that remembering the
                great Vaisnavas purifies us and connects us to an unbroken chain of devotion
                that stretches from the present moment back to Lord Krsna Himself.
              </p>
              <p>
                As the Srimad-Bhagavatam declares (3.25.25): &ldquo;In the association of pure
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
                In the Gaudiya Vaisnava tradition, both the Avirbhava (Appearance Day) and
                Tirobhava (Disappearance Day) of great Vaisnavas are observed with equal
                reverence and devotion. The Disappearance Day is not a day of mourning — it is
                a day of glorification and celebration, for the pure devotee never truly
                disappears. As the Bhagavad-gita teaches, the soul is eternal, and the great
                Vaisnavas continue their service to the Lord in the spiritual world, ever
                accessible to sincere devotees through their teachings and the mercy they
                bestow.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                {[
                  {
                    icon: "📖",
                    title: "Read About His Life",
                    desc: "Study the Bhakti-ratnakara and the relevant sections of Caitanya-caritamrta that mention Madhu Pandita Gosvami and his service.",
                  },
                  {
                    icon: "🎵",
                    title: "Perform Kirtana",
                    desc: "Chant the Hare Krsna maha-mantra and sing the songs of the Vaisnava acaryas — especially those composed by Narottama Dasa Thakura who was blessed by Madhu Pandita Gosvami's tradition.",
                  },
                  {
                    icon: "🌸",
                    title: "Offer Prayers",
                    desc: "Offer a flower at your home altar or the temple Deity, remembering Madhu Pandita Gosvami's forty years of Deity worship and his unbroken devotion to Lord Gopinatha.",
                  },
                  {
                    icon: "📿",
                    title: "Chant Extra Rounds",
                    desc: "On the Tirobhava of a great Vaisnava, devotees traditionally chant extra rounds of japa to deepen their own practice of the holy name.",
                  },
                  {
                    icon: "🕌",
                    title: "Visit the Temple",
                    desc: "Visit HKM Chennai — Dakshina Dvaraka Dhama at Thiruvanmiyur for special observances, Srimad-Bhagavatam class, and darsana of Sri Sri Nitai Gauranga.",
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
                The Samadhi of Madhu Pandita Gosvami
              </h2>
              <p>
                In the Vaisnava tradition, the samadhi — the memorial tomb of a great saint —
                is not merely a monument. It is a place of ongoing spiritual presence. The
                Gaudiya Vaisnavas believe that a pure devotee is nirguna — transcendental to
                the material energy — and that his or her samadhi retains the spiritual
                potency of that personality. To visit the samadhi of a Vaisnava and offer
                pranamas (obeisances) is to receive their mercy directly.
              </p>
              <p>
                The samadhi of Sri Madhu Pandita Gosvami stands on the eastern side of the
                Gopinatha Temple premises in Vrndavana — within the very courtyard of the
                temple he built and the Deity he served for forty years. Even today, pilgrims
                who visit the Gopinatha Temple can offer their respects at this samadhi and
                meditate on the extraordinary life of devotion it represents.
              </p>
              <p>
                For devotees who cannot make the pilgrimage to Vrndavana, the samadhi can
                be visited in spirit through prayer, reading, and remembrance. The Srimad-Bhagavatam
                (7.14.30-33) confirms that even the homes of devotees become places of
                pilgrimage, because the devotee carries the Lord with them always. In the same
                spirit, whenever we remember Madhu Pandita Gosvami — wherever we are — we
                make contact with his mercy.
              </p>
              <div className="mp-prayer-panel">
                <p aria-hidden style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                  🙏
                </p>
                <p>
                  &ldquo;I offer my respectful obeisances unto the feet of Sri Madhu Pandita
                  Gosvami — the devoted disciple of Sri Gadadhara Pandita, the great servant
                  of Lord Gopinatha, the blessed associate of the Vrndavana Gosvamis, and the
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
              <h2>Support Dakshina Dvaraka Dhama</h2>
              <p>
                Help us complete Chennai&apos;s tallest temple — a Pallava-style monument to
                Sri Sri Krsna-Rukmini-Satyabhama. Your contribution is an act of devotional
                service in the spirit of great Vaisnavas like Madhu Pandita Gosvami.
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
                  { href: "/blog/gadadhara-pandita", title: "Sri Gadadhara Pandita", tag: "Vaisnava Saints" },
                  { href: "/blog/ramanavami", title: "Rama Navami — Lord Ramacandra", tag: "Festivals" },
                  { href: "/blog/bhagavad-gita", title: "Bhagavad-gita — Daily life", tag: "Articles" },
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
                Follow Hare Krishna Movement Chennai across all platforms for daily darsan, spiritual
                insights, event updates, and seva opportunities.
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
                <p className="mp-map-label">Dakshina Dwaraka Dham — Find us</p>
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
