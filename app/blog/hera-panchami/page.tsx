import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import BlogConnectSection from "@/components/BlogConnectSection";
import "./styles.css";

/* =========================================================================
   Hera Panchami (Lakshmi Vijaya) — Blog Page
   Srila Prabhupada's ISKCON Thiruvanmiyur | Dakshina Dwaraka Dham, Chennai
   Built per Master Blog Standard v3.0
   ========================================================================= */

export const metadata: Metadata = {
  title: "Hera Panchami: When the Goddess of Fortune Marches on Her Lord | ISKCON Thiruvanmiyur",
  description:
    "The story of Hera Panchami (Lakshmi Vijaya) — Srimati Lakshmidevi's proud procession to Jagannath's temple, five days after Ratha Yatra, as narrated in Sri Chaitanya Charitamrita, Madhya-lila 14.106-139.",
  keywords: [
    "Hera Panchami",
    "Lakshmi Vijaya",
    "Ratha Yatra",
    "Jagannath Puri",
    "Chaitanya Charitamrita Madhya-lila 14",
    "Svarupa Damodara Gosvami",
    "Goddess of Fortune Lakshmi",
    "ISKCON Thiruvanmiyur",
    "Dakshina Dwaraka Dham",
  ],
  openGraph: {
    title: "Hera Panchami: When the Goddess of Fortune Marches on Her Lord",
    description:
      "Five days after Ratha Yatra, Srimati Lakshmidevi sets out in gorgeous procession to confront Lord Jagannath. The full pastime from Sri Chaitanya Charitamrita, Madhya-lila 14.",
    type: "article",
    siteName: "Srila Prabhupada's ISKCON Thiruvanmiyur | Dakshina Dwaraka Dham, Chennai",
  },
};

/* -------------------------------------------------------------------------
   JSON-LD structured data (BlogPosting + FAQPage) — AEO/SEO
   ------------------------------------------------------------------------- */
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Hera Panchami: When the Goddess of Fortune Marches on Her Lord",
  description:
    "The story of Hera Panchami (Lakshmi Vijaya), Srimati Lakshmidevi's procession to confront Lord Jagannath, five days after Ratha Yatra, as narrated in Sri Chaitanya Charitamrita, Madhya-lila 14.106-139.",
  author: {
    "@type": "Organization",
    name: "Srila Prabhupada's ISKCON Thiruvanmiyur | Dakshina Dwaraka Dham, Chennai",
  },
  publisher: {
    "@type": "Organization",
    name: "Srila Prabhupada's ISKCON Thiruvanmiyur | Dakshina Dwaraka Dham, Chennai",
    address: {
      "@type": "PostalAddress",
      streetAddress: "63, 1st Seaward Road, Valmiki Nagar, Thiruvanmiyur",
      addressLocality: "Chennai",
      postalCode: "600041",
      addressCountry: "IN",
    },
  },
  about: ["Hera Panchami", "Lakshmi Vijaya", "Jagannath Ratha Yatra", "Sri Chaitanya Charitamrita"],
  mainEntityOfPage: "https://hkmchennai.org/blog/hera-panchami",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Hera Panchami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hera Panchami, also called Lakshmi Vijaya, is a festival observed on the fifth day after Ratha Yatra begins. It commemorates Srimati Lakshmidevi, the goddess of fortune, setting out in a grand procession from the Jagannath Temple to the Gundicha Temple to confront Lord Jagannath for having left Puri without her.",
      },
    },
    {
      "@type": "Question",
      name: "Why does the goddess of fortune become angry at Lord Jagannath?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lord Jagannath leaves Lakshmidevi behind and travels to Sundarachala under the pretext of the Ratha Yatra festival, but His deeper purpose is to relish the pastimes of Vrindavana with the gopis. Because Lakshmidevi cannot enter the confidential mellows of Vrindavana, she is left behind, and out of intense love she becomes indignant at the apparent neglect.",
      },
    },
    {
      "@type": "Question",
      name: "Why can Lakshmidevi not take part in the pastimes of Vrindavana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "According to Svarupa Damodara Gosvami's explanation in Sri Chaitanya Charitamrita, only the gopis can attract the mind of Krishna in the intimate pastimes of Vrindavana. Lakshmidevi, who worships Krishna in awe and reverence as the goddess of fortune, does not have access to this most confidential mood of pure, unconditional love.",
      },
    },
    {
      "@type": "Question",
      name: "What happens during the Hera Panchami procession?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lakshmidevi's palanquin, escorted by hundreds of maidservants, musicians and dancers, arrives at the main gate of the Jagannath Temple. Her maidservants seize and bind the principal servants of Lord Jagannath, symbolically arresting them, before the procession returns.",
      },
    },
  ],
};

/* -------------------------------------------------------------------------
   Reusable presentational bits (Tailwind, brand palette)
   maroon:  #3D1A00   gold: #C9A84C   cream: #FDF6E3
   ------------------------------------------------------------------------- */

function VerseBlock({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 rounded-lg border border-[#C9A84C]/40 bg-[#FDF6E3] px-5 py-4 shadow-sm">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
        {number}
      </span>
      <p className="font-serif text-[1.05rem] italic leading-relaxed text-[#3D1A00]">
        {children}
      </p>
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-8 border-l-4 border-[#C9A84C] bg-[#3D1A00]/5 px-6 py-4">
      <p className="font-serif text-xl italic leading-snug text-[#3D1A00]">{children}</p>
    </blockquote>
  );
}

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="mt-14 mb-4 scroll-mt-24 border-b-2 border-[#C9A84C]/50 pb-2 font-serif text-2xl font-bold text-[#3D1A00] md:text-3xl"
    >
      {children}
    </h2>
  );
}

/* -------------------------------------------------------------------------
   Table of Contents data
   ------------------------------------------------------------------------- */
const toc = [
  { id: "quick-facts", label: "Quick Facts" },
  { id: "lila-sthali", label: "Lila Sthali — Where This Pastime Unfolded" },
  { id: "introduction", label: "Introduction" },
  { id: "kings-command", label: "The King's Command" },
  { id: "mahaprabhu-returns", label: "Mahaprabhu Returns for the Festival" },
  { id: "confidential-question", label: "A Confidential Question" },
  { id: "why-lakshmi-is-left-behind", label: "Why the Goddess of Fortune Is Left Behind" },
  { id: "the-procession", label: "The Grand Procession Arrives" },
  { id: "the-arrest", label: "The Arrest of the Lord's Servants" },
  { id: "divine-jealousy", label: "Svarupa Damodara on Divine Jealousy" },
  { id: "significance", label: "Spiritual Significance for Devotees" },
  { id: "faq", label: "Frequently Asked Questions" },
];

export default function HeraPanchamiPage() {
  return (
    <main className="min-h-screen bg-[#FFF9F0] selection:bg-[#c9973a] selection:text-white">
      <Navbar />
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="gp-blog-wrap">
        <header className="gp-blog-header">
          <p className="gp-hero-label">
            Ratha Yatra Series
          </p>
          <h1 className="gp-blog-title">
            Hera Panchami: When the Goddess of Fortune Marches on Her Lord
          </h1>
          <div className="gp-hero-line" />
          <p className="gp-blog-subtitle">
            The Lakshmi Vijaya pastime, five days after Ratha Yatra — Sri Chaitanya
            Charitamrita, Madhya-lila, Chapter 14
          </p>
        </header>

        <div className="max-w-3xl mx-auto px-6 py-12">
        {/* -------------------------------------------------------------- */}
        {/* Table of Contents */}
        {/* -------------------------------------------------------------- */}
        <nav
          aria-label="Table of contents"
          className="mb-10 rounded-xl border border-[#C9A84C]/40 bg-[#FDF6E3] p-6"
        >
          <h2 className="mb-3 font-serif text-lg font-bold text-[#3D1A00]">
            On This Page
          </h2>
          <ol className="grid list-decimal grid-cols-1 gap-x-6 gap-y-1 pl-5 text-sm text-[#3D1A00]/90 sm:grid-cols-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:text-[#C9A84C] hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* -------------------------------------------------------------- */}
        {/* Quick Facts */}
        {/* -------------------------------------------------------------- */}
        <section id="quick-facts" className="scroll-mt-24">
          <SectionHeading id="quick-facts-heading">Quick Facts</SectionHeading>
          <div className="overflow-hidden rounded-xl border border-[#C9A84C]/40">
            <dl className="divide-y divide-[#C9A84C]/30">
              {[
                ["Festival Name", "Hera Panchami, also known as Lakshmi Vijaya"],
                ["When It Occurs", "The fifth day after the start of the Ratha Yatra festival"],
                ["Central Figures", "Srimati Lakshmidevi (the goddess of fortune) and the servants of Lord Jagannath"],
                ["Location", "From the Jagannath Temple, Puri to the Gundicha Temple at Sundarachala"],
                ["Scriptural Source", "Sri Chaitanya Charitamrita, Madhya-lila, Chapter 14, Texts 106-139"],
                ["Witnessed By", "Sri Chaitanya Mahaprabhu and His personal associates, seated with Kashi Mishra"],
                ["Core Theme", "The difference between the opulent, awe-filled love of Dvaraka and the confidential, unconditional love of Vrindavana"],
              ].map(([term, desc]) => (
                <div key={term} className="grid grid-cols-1 gap-1 bg-white px-5 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold text-[#3D1A00]">{term}</dt>
                  <dd className="text-[#3D1A00]/90 sm:col-span-2">{desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* Lila Sthali */}
        {/* -------------------------------------------------------------- */}
        <section id="lila-sthali" className="scroll-mt-24">
          <SectionHeading id="lila-sthali-heading">
            Lila Sthali — Where This Pastime Unfolded
          </SectionHeading>
          <ul className="list-disc space-y-2 pl-5 text-[#3D1A00]/90">
            <li>
              <span className="font-semibold text-[#3D1A00]">Jagannath Vallabha Garden</span> —
              the large garden at Sundarachala where Sri Chaitanya Mahaprabhu rested for nine
              days during this period.
            </li>
            <li>
              <span className="font-semibold text-[#3D1A00]">Sundarachala / Gundicha Temple</span> —
              the temple representing Vrindavana, where Lord Jagannath resides during Ratha
              Yatra and enjoys pastimes in the surrounding gardens.
            </li>
            <li>
              <span className="font-semibold text-[#3D1A00]">Nilachala</span> — Jagannath Puri,
              the seat of Lord Jagannath's temple, to which Mahaprabhu and His devotees returned
              to witness the Hera Panchami festival.
            </li>
            <li>
              <span className="font-semibold text-[#3D1A00]">The Main Temple Gate</span> — where
              the goddess of fortune's procession arrives and her maidservants confront the
              Lord's servants.
            </li>
          </ul>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* Introduction */}
        {/* -------------------------------------------------------------- */}
        <section id="introduction" className="scroll-mt-24">
          <SectionHeading id="introduction-heading">Introduction</SectionHeading>
          <div className="my-8 overflow-hidden rounded-xl border border-[#C9A84C]/20 shadow-md">
            <Image
              src="/blog/hera-panchami/HeraPanchami_ritual_held_in_Odisha_Puri.png"
              alt="Hera Panchami ritual held in Odisha, Puri"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="mb-4 leading-relaxed text-[#3D1A00]/90">
            Five days after Lord Jagannath departs on His Ratha Yatra chariot, Jagannath Puri
            observes a festival that is, on the surface, a domestic quarrel — and underneath, one
            of the most profound theological statements in the Gaudiya Vaishnava tradition. It is
            called Hera Panchami, or Lakshmi Vijaya: the day the goddess of fortune, Srimati
            Lakshmidevi, sets out from the temple in full royal procession to confront her Lord
            for leaving her behind.
          </p>
          <p className="leading-relaxed text-[#3D1A00]/90">
            Sri Chaitanya Mahaprabhu Himself came to witness this festival, and what followed was
            a remarkable conversation with Svarupa Damodara Gosvami that reveals why even the
            goddess of fortune, worshipable by countless demigods, cannot enter the intimate
            pastimes of Vrindavana. This is that story, as narrated in Sri Chaitanya Charitamrita,
            Madhya-lila, Chapter 14.
          </p>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* The King's Command */}
        {/* -------------------------------------------------------------- */}
        <section id="kings-command" className="scroll-mt-24">
          <SectionHeading id="kings-command-heading">The King's Command</SectionHeading>
          <p className="mb-4 leading-relaxed text-[#3D1A00]/90">
            As the day of Hera Panchami drew near, King Pratapa Rudra spoke with great attention
            to Kashi Mishra, determined that the festival be celebrated as never before.
          </p>

          <VerseBlock number="TEXT 106">
            Knowing that the Herā-pañcamī festival was drawing near, King Pratāparudra
            attentively talked with Kāśī Miśra.
          </VerseBlock>
          <VerseBlock number="TEXT 107">
            &ldquo;Tomorrow will be the function of Herā-pañcamī or Lakṣmī-vijaya. Hold this
            festival in a way that it has never been held before.&rdquo;
          </VerseBlock>
          <VerseBlock number="TEXT 108">
            King Pratāparudra said, &ldquo;Hold this festival in such a gorgeous way that upon
            seeing it, Caitanya Mahāprabhu will be completely pleased and astonished.
          </VerseBlock>

          <p className="mb-4 leading-relaxed text-[#3D1A00]/90">
            The King's instructions were lavish and precise — nothing was to be spared from the
            royal and temple storehouses.
          </p>

          <VerseBlock number="TEXT 109">
            &ldquo;Take as many printed cloths, small bells, umbrellas and cāmaras as there are in
            my storehouse and in the Deity's storehouse.
          </VerseBlock>
          <VerseBlock number="TEXT 110">
            &ldquo;Collect all kinds of small and large flags and ringing bells. Then decorate the
            carrier and have various musical and dancing parties accompany it. In this way
            decorate the carrier attractively.
          </VerseBlock>
          <VerseBlock number="TEXT 111">
            &ldquo;You should also double the quantity of prasāda. Make so much that it will even
            surpass the Ratha-yātrā festival.
          </VerseBlock>
          <VerseBlock number="TEXT 112">
            &ldquo;Arrange the festival in such a way that Śrī Caitanya Mahāprabhu may freely go
            with His devotees to visit the Deity without difficulty.&rdquo;
          </VerseBlock>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* Mahaprabhu Returns */}
        {/* -------------------------------------------------------------- */}
        <section id="mahaprabhu-returns" className="scroll-mt-24">
          <SectionHeading id="mahaprabhu-returns-heading">
            Mahaprabhu Returns for the Festival
          </SectionHeading>
          <p className="mb-4 leading-relaxed text-[#3D1A00]/90">
            That morning, Sri Chaitanya Mahaprabhu had first gone with His personal associates to
            see Lord Jagannath at Sundarachala. He then returned to Nilachala with great
            eagerness, specifically to witness the Hera Panchami festival unfold at the main
            temple.
          </p>

          <VerseBlock number="TEXT 113">
            In the morning, Śrī Caitanya Mahāprabhu took His personal associates with Him to see
            Lord Jagannātha at Sundarācala.
          </VerseBlock>
          <VerseBlock number="TEXT 114">
            Śrī Caitanya Mahāprabhu and His personal devotees returned to Nīlācala with great
            eagerness to see the Herā-pañcamī festival.
          </VerseBlock>
          <VerseBlock number="TEXT 115">
            Kāśī Miśra received Caitanya Mahāprabhu with great respect, and taking the Lord and
            His associates to a very nice place, he had them seated.
          </VerseBlock>

          <p className="leading-relaxed text-[#3D1A00]/90">
            Once seated, Mahaprabhu's mood turned reflective. Smiling mildly, He wished to hear
            about a particular mellow of devotional service, and began to question His most
            intimate associate, Svarupa Damodara Gosvami.
          </p>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* Confidential Question */}
        {/* -------------------------------------------------------------- */}
        <section id="confidential-question" className="scroll-mt-24">
          <SectionHeading id="confidential-question-heading">
            A Confidential Question
          </SectionHeading>

          <VerseBlock number="TEXT 116">
            After taking His seat, Śrī Caitanya Mahāprabhu wanted to hear about a particular
            mellow of devotional service; therefore, mildly smiling, He began to question Svarūpa
            Dāmodara.
          </VerseBlock>
          <VerseBlock number="TEXT 117-118">
            &ldquo;Although Lord Jagannātha enjoys His pastimes at Dvārakā-dhāma and naturally
            manifests sublime liberality there, still, once a year, He becomes unlimitedly eager
            to see Vṛndāvana.&rdquo;
          </VerseBlock>

          <p className="mb-4 leading-relaxed text-[#3D1A00]/90">
            Gesturing toward the gardens surrounding the temple, Mahaprabhu pointed out something
            striking — these gardens were, to His eye, indistinguishable from Vrindavana itself.
          </p>

          <VerseBlock number="TEXT 119">
            Pointing out the neighboring gardens, Śrī Caitanya Mahāprabhu said, &ldquo;All these
            gardens exactly resemble Vṛndāvana; therefore Lord Jagannātha is very eager to see
            them again.
          </VerseBlock>
          <VerseBlock number="TEXT 120">
            &ldquo;Externally He gives the excuse that He wants to participate in the
            Ratha-yātrā festival, but actually He wants to leave Jagannātha Purī to go to
            Sundarācala, Guṇḍicā temple, the replica of Vṛndāvana.
          </VerseBlock>
          <VerseBlock number="TEXT 121">
            &ldquo;The Lord enjoys His pastimes day and night in various flower gardens there.
            But why did He not take Lakṣmīdevī, the goddess of fortune, with Him?&rdquo;
          </VerseBlock>

          <PullQuote>
            &ldquo;Externally He gives the excuse that He wants to participate in the
            Ratha-yātrā festival, but actually He wants to&hellip; go to Sundarācala,
            Guṇḍicā temple, the replica of Vṛndāvana.&rdquo;
          </PullQuote>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* Why Lakshmi Is Left Behind */}
        {/* -------------------------------------------------------------- */}
        <section id="why-lakshmi-is-left-behind" className="scroll-mt-24">
          <SectionHeading id="why-lakshmi-is-left-behind-heading">
            Why the Goddess of Fortune Is Left Behind
          </SectionHeading>
          <p className="mb-4 leading-relaxed text-[#3D1A00]/90">
            Svarupa Damodara's answer goes to the very heart of Gaudiya Vaishnava theology — the
            distinction between the reverential opulence of Dvaraka and Vaikuntha, and the
            unconditional, confidential love found only in Vrindavana.
          </p>

          <VerseBlock number="TEXT 122">
            Svarūpa Dāmodara replied, &ldquo;My dear Lord, please hear the reason for this.
            Lakṣmīdevī, the goddess of fortune, cannot be admitted to the pastimes of
            Vṛndāvana.
          </VerseBlock>
          <VerseBlock number="TEXT 123">
            &ldquo;In the pastimes of Vṛndāvana, the only assistants are the gopīs. But for the
            gopīs, no one can attract the mind of Kṛṣṇa.&rdquo;
          </VerseBlock>

          <p className="mb-4 leading-relaxed text-[#3D1A00]/90">
            Mahaprabhu continued the exchange, noting how Krishna uses the Ratha Yatra itself as a
            cover for these confidential pastimes.
          </p>

          <VerseBlock number="TEXT 124">
            The Lord said, &ldquo;Using the car festival as an excuse, Kṛṣṇa goes there with
            Subhadrā and Baladeva.
          </VerseBlock>
          <VerseBlock number="TEXT 125">
            &ldquo;All the pastimes with the gopīs that take place in those gardens are very
            confidential ecstasies of Lord Kṛṣṇa. No one knows them.
          </VerseBlock>
          <VerseBlock number="TEXT 126">
            &ldquo;Since there is no fault at all in Kṛṣṇa's pastimes, why does the goddess of
            fortune become angry?&rdquo;
          </VerseBlock>
          <VerseBlock number="TEXT 127">
            Svarūpa Dāmodara replied, &ldquo;It is the nature of a girl afflicted by love to
            become immediately angry upon finding neglect on the part of her lover.&rdquo;
          </VerseBlock>

          <p className="leading-relaxed text-[#3D1A00]/90">
            In other words, Lakshmidevi's anger is not a flaw in Krishna's pastimes — it is itself
            an ornament of love, the natural response of a beloved who senses she has been kept
            apart from something intimate, even without knowing exactly what.
          </p>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* The Procession */}
        {/* -------------------------------------------------------------- */}
        <section id="the-procession" className="scroll-mt-24">
          <SectionHeading id="the-procession-heading">
            The Grand Procession Arrives
          </SectionHeading>
          <div className="my-8 overflow-hidden rounded-xl border border-[#C9A84C]/20 shadow-md">
            <Image
              src="/blog/hera-panchami/Goddess_Lakshmi_approaching_Nandighosha_Chariot.png"
              alt="Goddess Lakshmi approaching Nandighosha Chariot"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="mb-4 leading-relaxed text-[#3D1A00]/90">
            As this conversation unfolded, the procession of the goddess of fortune itself came
            into view — an extraordinary display of royal opulence befitting Lakshmidevi's
            position.
          </p>

          <VerseBlock number="TEXT 128">
            While Svarūpa Dāmodara and Śrī Caitanya Mahāprabhu were talking, the procession of the
            goddess of fortune came by. She was riding upon a golden palanquin carried by four
            men and bedecked with a variety of jewels.
          </VerseBlock>
          <VerseBlock number="TEXT 129">
            The palanquin was also surrounded by people carrying umbrellas, cāmara whisks and
            flags, and it was preceded by musicians and dancing girls.
          </VerseBlock>
          <VerseBlock number="TEXT 130">
            The maidservants were carrying water pitchers, cāmara whisks and boxes for betel
            nuts. There were hundreds of maidservants, all attractively dressed with valuable
            necklaces.
          </VerseBlock>
          <VerseBlock number="TEXT 131">
            In an angry mood, the goddess of fortune arrived at the main gate of the temple
            accompanied by many members of her family, all of whom exhibited uncommon opulence.
          </VerseBlock>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* The Arrest */}
        {/* -------------------------------------------------------------- */}
        <section id="the-arrest" className="scroll-mt-24">
          <SectionHeading id="the-arrest-heading">
            The Arrest of the Lord's Servants
          </SectionHeading>
          <p className="mb-4 leading-relaxed text-[#3D1A00]/90">
            What followed was a scene equal parts theater and theology. Lakshmidevi's maidservants
            treated Lord Jagannath's own principal servants as errant thieves, binding them and
            forcing them before their mistress.
          </p>

          <VerseBlock number="TEXT 132">
            When the procession arrived, the maidservants of the goddess of fortune began to
            arrest all the principal servants of Lord Jagannātha.
          </VerseBlock>
          <VerseBlock number="TEXT 133">
            The maidservants bound the servants of Jagannātha, handcuffed them, and made them
            fall down at the lotus feet of the goddess of fortune. Indeed, they were arrested just
            like thieves who have all their riches taken away.
          </VerseBlock>
          <VerseBlock number="TEXT 134">
            When the servants fall down before the lotus feet of the goddess of fortune, they
            almost fall unconscious. They are chastised and made the butt of jokes and loose
            language.
          </VerseBlock>

          <p className="leading-relaxed text-[#3D1A00]/90">
            Watching this spectacle, Mahaprabhu's own associates could not contain themselves.
          </p>

          <VerseBlock number="TEXT 135">
            When Śrī Caitanya Mahāprabhu's associates saw such impudence exhibited by the
            maidservants of the goddess of fortune, they covered their faces with their hands and
            began to smile.
          </VerseBlock>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* Divine Jealousy */}
        {/* -------------------------------------------------------------- */}
        <section id="divine-jealousy" className="scroll-mt-24">
          <SectionHeading id="divine-jealousy-heading">
            Svarupa Damodara on Divine Jealousy
          </SectionHeading>
          <p className="mb-4 leading-relaxed text-[#3D1A00]/90">
            Svarupa Damodara Gosvami then offered a comparison that places Lakshmidevi's pride in
            a category entirely her own — distinct even from the celebrated jealous moods of
            Satyabhama and the gopis of Vrindavana.
          </p>

          <VerseBlock number="TEXT 136">
            Svarūpa Dāmodara said, &ldquo;There is no egoistic pride like this within the three
            worlds. At least I have neither seen nor heard of it.
          </VerseBlock>
          <VerseBlock number="TEXT 137">
            &ldquo;When a woman is neglected and disappointed, out of egoistic pride she gives up
            her ornaments and morosely sits down on the floor, marking lines on it with her
            nails.
          </VerseBlock>
          <VerseBlock number="TEXT 138">
            &ldquo;I have heard of this kind of pride in Satyabhāmā, Kṛṣṇa's proudest Queen, and I
            have also heard of it in the gopīs of Vṛndāvana, who are the reservoirs of all
            transcendental mellows.
          </VerseBlock>
          <VerseBlock number="TEXT 139">
            &ldquo;But in the case of the goddess of fortune, I see a different kind of pride. She
            manifests her own opulences and even goes with her soldiers to attack her
            husband.&rdquo;
          </VerseBlock>

          <PullQuote>
            &ldquo;But in the case of the goddess of fortune, I see a different kind of pride. She
            manifests her own opulences and even goes with her soldiers to attack her
            husband.&rdquo;
          </PullQuote>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* Significance */}
        {/* -------------------------------------------------------------- */}
        <section id="significance" className="scroll-mt-24">
          <SectionHeading id="significance-heading">
            Spiritual Significance for Devotees
          </SectionHeading>
          <p className="mb-4 leading-relaxed text-[#3D1A00]/90">
            Hera Panchami is often enjoyed simply as festive drama — palanquins, whisks, mock
            arrests, laughter. But Sri Chaitanya Mahaprabhu's own questions to Svarupa Damodara
            show it holds a far deeper teaching for every sincere devotee.
          </p>
          <p className="mb-4 leading-relaxed text-[#3D1A00]/90">
            Even Lakshmidevi, worshiped by demigods and rulers as the very source of opulence and
            fortune, cannot enter the intimate loving exchanges of Vrindavana, because those
            pastimes are reserved for the unconditional, unmotivated love of the gopis. This
            teaches that Krishna is attracted not by grandeur or worship offered in awe and
            reverence, but by simple, selfless affection.
          </p>
          <p className="leading-relaxed text-[#3D1A00]/90">
            For devotees walking the path of bhakti, the festival is a gentle reminder that
            genuine closeness to the Lord is not won through opulence or position, but through the
            kind of unpretentious, heartfelt love exemplified by the residents of Vrindavana.
          </p>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* FAQ */}
        {/* -------------------------------------------------------------- */}
        <section id="faq" className="scroll-mt-24">
          <SectionHeading id="faq-heading">Frequently Asked Questions</SectionHeading>
          <div className="space-y-4 mt-8">
            {faqJsonLd.mainEntity.map((f, i) => (
              <details key={i} className="group rounded-lg border border-[#C9A84C]/40 bg-white open:bg-[#FDF6E3]/60 transition-colors">
                <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-4 font-serif text-[#3D1A00] font-semibold sm:text-[1.05rem]">
                  {f.name}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[#C9A84C] text-2xl leading-none transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-[#3D1A00]/80 leading-relaxed sm:text-base">
                  {f.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* Source note */}
        {/* -------------------------------------------------------------- */}
        <p className="mt-14 border-t border-[#C9A84C]/30 pt-6 text-sm italic text-[#3D1A00]/70">
          Source: Sri Chaitanya Charitamrita, Madhya-lila, Chapter 14, Texts 106&ndash;139, by His
          Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada.
        </p>

        <BlogConnectSection />
        </div>
      </article>

      <Footer />
    </main>
  );
}
