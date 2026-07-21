import type { Metadata } from "next";
import Image from "next/image";
import BlogConnectSection from "@/components/BlogConnectSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import "../hera-panchami/styles.css";

/* ------------------------------------------------------------------ */
/*  Metadata (App Router Metadata API)                                 */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Sri Srivasa Thakura: Heart of the Sankirtana Movement | HKM Chennai",
  description:
    "Discover Sri Srivasa Thakura, the Panca-tattva devotee in whose courtyard Lord Chaitanya first held nightly sankirtana that grew into a worldwide movement.",
  keywords: [
    "Sri Srivasa Thakura",
    "Srivasa Angan",
    "Panca-tattva",
    "Maha-prakasha-lila",
    "Chand Kazi sankirtana",
    "Narayani",
    "Vrindavana dasa Thakura",
    "Nrisimha-avesa",
    "Ratha-yatra sankirtana",
    "Gaudiya Vaishnava saints",
    "Sri Chaitanya Mahaprabhu associates",
    "ISKCON Thiruvanmiyur blog",
  ],
  alternates: {
    canonical: "https://hkmchennai.org/blog/sri-srivasa-thakura-heart-of-sankirtana",
  },
  openGraph: {
    title: "Sri Srivasa Thakura: Heart of the Sankirtana Movement",
    description:
      "The Panca-tattva devotee in whose courtyard Lord Chaitanya first revealed the nightly sankirtana that would flood the world.",
    url: "https://hkmchennai.org/blog/sri-srivasa-thakura-heart-of-sankirtana",
    type: "article",
    images: [
      {
        url: "https://hkmchennai.org/og/sri-srivasa-thakura.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Srivasa Thakura, member of the Panca-tattva and host of Lord Chaitanya's nightly sankirtana.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Content data                                                       */
/* ------------------------------------------------------------------ */

const quickFacts: { label: string; value: string }[] = [
  { label: "Full name", value: "Sri Srivasa Thakura, also known as Srivasa Pandita" },
  {
    label: "Appeared",
    value: "Roughly thirty years before Sri Chaitanya Mahaprabhu, in Sri Hatta (Sylhet, now in Bangladesh)",
  },
  {
    label: "Family",
    value: "Son of Jaladhara Pandita; brothers Sri Rama Pandita, Sripati, and Srinidhi; wife Srimati Malini Devi",
  },
  {
    label: "Residence",
    value: "Srivasa Angan, Navadvipa (present-day Mayapur) — later Kumarahatta in his final years",
  },
  {
    label: "Position",
    value: "One of the five members of the Panca-tattva, representing the pure devotee (bhakta / jiva-tattva)",
  },
  { label: "Incarnation of", value: "Srila Narada Muni, according to Sri Gaura-ganoddesha-dipika (verse 90)" },
  {
    label: "Known for",
    value:
      "Hosting Lord Chaitanya's nightly sankirtana at his home for a full year; the site of the Maha-prakasha-lila; leading a kirtana party at the Jagannatha Puri Ratha-yatra",
  },
  { label: "Wife's identity", value: "Srimati Malini Devi, regarded as an incarnation of Mother Ambika" },
  {
    label: "Niece",
    value:
      "Srimati Narayani, who received the Lord's own remnants and later became the mother of Srila Vrindavana dasa Thakura, author of Sri Chaitanya-bhagavata",
  },
];

const lilaSthali: { place: string; description: string }[] = [
  {
    place: "Pancha Khanda, Beanibazar, Sylhet district, Bangladesh",
    description:
      "Srivasa Thakura's ancestral birthplace, the property of his Parasara-gotra brahmana family, named after him. His elder brother Nalina Pandita passed away here at a young age before the family relocated to Navadvipa.",
  },
  {
    place: "Srivasa Angan, Sri Mayapur (Navadvipa), West Bengal",
    description:
      "The site of his family home, where Sri Chaitanya Mahaprabhu conducted nightly sankirtana for a year and enacted the Maha-prakasha-lila. A temple stands on the site today with four altars: the left altar with Sri Sri Radha-Krishna and Lord Chaitanya; the central altar depicting the Maha-prakasha scene, with Lord Chaitanya enthroned, Gadadhara Pandita fanning Him, and Nityananda Prabhu holding an umbrella over Him; the right altar showing Sri Sri Gaura-Nitai leading the sankirtana procession toward Chand Kazi's house; and a fourth altar commemorating the khol-bhanga incident, where the mridanga was broken in opposition to the kirtana.",
  },
  {
    place: "Kumarahatta, West Bengal",
    description:
      "Where Srivasa Thakura resided in his final years, having left Navadvipa in separation after Sri Chaitanya Mahaprabhu's acceptance of sannyasa, and where he was later joined by fellow devotees including Sivananda Sena and Vasudeva Datta.",
  },
  {
    place: "Jagannatha Puri, Odisha",
    description:
      "Where Srivasa Thakura led one of the principal kirtana parties before Lord Jagannatha's car during the annual Ratha-yatra, and where King Pratparudra personally witnessed his complete absorption in the Lord's dancing.",
  },
];

const lessons: { title: string; body: string }[] = [
  {
    title: "A devotee's home can become a temple, and family life is no obstacle to the highest devotional service.",
    body: "Srivasa Thakura was a householder brahmana with a wife and children, yet his home became the very courtyard in which the Supreme Personality of Godhead chose to reveal His most confidential pastimes. We should never imagine that our own household duties, our marriage, or our children stand between us and the deepest levels of Krishna consciousness. What qualifies a home to become a place of pilgrimage is not its outward simplicity or opulence, but the sincerity and surrender of the devotee who lives there.",
  },
  {
    title: "Real compassion for a fellow devotee sometimes means risking the Lord's own displeasure on their behalf.",
    body: "When Srivasa Thakura pleaded on behalf of the hidden brahmana, he was willing to submit before Sri Chaitanya Mahaprabhu's own momentary displeasure in order to secure mercy for another soul. A mature devotee does not merely observe rules and regulations for their own sake; he actively intercedes, out of compassion, for others who are struggling to receive the Lord's mercy, trusting that sincere compassion is itself pleasing to Krishna.",
  },
  {
    title: "Equanimity in the face of personal loss is not indifference — it is the deepest realization of the soul's eternal relationship with the Lord.",
    body: "Srivasa Thakura did not forbid his household from grieving because he was unfeeling; he did so because he understood, at the deepest level, that every soul is the eternal servant of Krishna, coming and going according to the Lord's own arrangement, and that the sankirtana of the Lord's holy names must never be interrupted for any temporary material circumstance, however painful. We should not mistake genuine transcendental equipoise for coldness; it is, in fact, the highest tenderness.",
  },
  {
    title: "Opposition to the chanting of the holy names, however severe, becomes the very occasion by which the sankirtana movement expands further.",
    body: "The breaking of the mridanga during the kirtana connected with Srivasa Thakura's household did not end the sankirtana movement — it directly precipitated Sri Chaitanya Mahaprabhu's first public sankirtana procession and the conversion of Chand Kazi himself. A devotee engaged in preaching the holy names should therefore not be discouraged by opposition or criticism.",
  },
  {
    title: "An offense at the feet of a pure devotee is more serious than an offense against the Lord Himself, yet no offense, however grave, lies beyond the reach of Vaishnava mercy.",
    body: "Gopala Capala's attempt to defame Srivasa Thakura brought upon him leprosy and years of suffering — far more severe than Sri Chaitanya Mahaprabhu's own response to ordinary irreligion. Yet the very same pastime, ending with his transformation into Devakinandana dasa Thakura, teaches that this severity is never the last word. Vaishnava mercy, once sincerely sought, restores even the most determined offender completely.",
  },
  {
    title: "Simple, faithful service to the Lord's holy names can become the doorway to His most powerful and confidential moods.",
    body: "Srivasa Thakura's ordinary act of reading the thousand names of Vishnu at the Lord's own request became the direct occasion for Sri Chaitanya Mahaprabhu's ecstatic manifestation of Lord Nrisimhadeva's mood. A devotee need not seek out extraordinary or dramatic service; humble, exact execution of whatever service is asked is itself sufficient to invite the Lord's deepest mercy.",
  },
  {
    title: "A devotee's spiritual standing is not diminished by his outward simplicity, and true humility recognizes that standing even in a moment of embarrassment.",
    body: "When Srivasa Thakura, completely absorbed in watching the Lord dance at the Ratha-yatra, unknowingly struck the hand of King Pratparudra's own attendant, the King did not rebuke the devotee; instead, he reminded his attendant what a rare fortune it was to have been touched by so exalted a Vaishnava. Real greatness expresses itself as honour toward Krishna's servants rather than insistence on one's own status.",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Who was Srivasa Thakura?",
    a: "Srivasa Thakura, also known as Srivasa Pandita, was a learned brahmana of Navadvipa and one of the five members of the Panca-tattva, the closest confidential associates of Sri Chaitanya Mahaprabhu. He is regarded as the incarnation of Srila Narada Muni and represents the pure devotee within Gaudiya Vaishnava theology.",
  },
  {
    q: "What is Srivasa Angan?",
    a: "Srivasa Angan is the courtyard of Srivasa Thakura's own home in Navadvipa, where Sri Chaitanya Mahaprabhu conducted nightly congregational kirtana with His most intimate devotees for a full year, and where the Lord revealed His six-armed, four-armed, and original two-armed forms to Nityananda Prabhu before remaining in an ecstatic, self-revealing state for twenty-one continuous hours — the pastime known as the Maha-prakasha-lila.",
  },
  {
    q: "What forms did Sri Chaitanya Mahaprabhu show, and to whom, during the Maha-prakasha-lila?",
    a: "According to Srila Prabhupada's own Chaitanya-charitamrita, the Lord first revealed a six-armed form (holding a conch, disc, club, lotus, bow, and flute) to Nityananda Prabhu specifically, then a four-armed form, and finally His original two-armed form as Krishna playing the flute. He then remained in an ecstatic state for twenty-one hours before the wider assembly of devotees at Srivasa Thakura's house.",
  },
  {
    q: "Why is Srivasa Thakura considered an incarnation of Narada Muni?",
    a: "According to Sri Gaura-ganoddesha-dipika (verse 90), a scripture that identifies the eternal spiritual identities of Sri Chaitanya Mahaprabhu's associates, Srivasa Thakura is the incarnation of Srila Narada Muni, while his brother Sri Rama Pandita is the incarnation of Parvata Muni, Narada's own intimate friend.",
  },
  {
    q: "What does the incident of Srivasa Thakura's son teach devotees?",
    a: "It teaches that pure devotional service transcends even the most painful material loss. Srivasa Thakura did not allow his son's death to interrupt Sri Chaitanya Mahaprabhu's kirtana, understanding that every soul is Krishna's eternal servant and departs strictly according to the Lord's own arrangement.",
  },
  {
    q: "Did anyone try to defame Srivasa Thakura as a worshiper of the goddess Durga?",
    a: "Yes. A brahmana named Gopala Capala, envious of Srivasa Thakura's standing, placed the paraphernalia for goddess worship, including wine, outside his door to make people believe he secretly worshiped Bhavani. Sri Chaitanya Mahaprabhu regarded this as a severe offense at a pure devotee's feet, and Gopala Capala suffered from leprosy until he sought Srivasa Thakura's forgiveness and was fully restored, later becoming the Vaishnava devotee known as Devakinandana dasa Thakura.",
  },
  {
    q: "Who was Narayani, and how is she connected to Srivasa Thakura?",
    a: "Narayani was Srivasa Thakura's niece, raised within his household. As a small child she received the personal remnants of Sri Chaitanya Mahaprabhu's own food during the Maha-prakasha-lila, and she later became the mother of Srila Vrindavana dasa Thakura, the author of Sri Chaitanya-bhagavata.",
  },
  {
    q: "What happened when Srivasa Thakura read the thousand names of Vishnu to Sri Chaitanya Mahaprabhu?",
    a: "At the Lord's own request, Srivasa Thakura read aloud from the Brhat-sahasra-nama. When he reached the holy name of Lord Nrisimhadeva, Sri Chaitanya Mahaprabhu became fully absorbed in that mood and ran through the streets of Navadvipa with a club, in the ecstasy of the Lord's fierce incarnation, before returning to Srivasa Thakura's house.",
  },
  {
    q: "Did Srivasa Thakura take part in the Ratha-yatra festival at Jagannatha Puri?",
    a: "Yes. Sri Chaitanya Mahaprabhu personally appointed Srivasa Thakura as the leader of one of the kirtana parties that danced before Lord Jagannatha's car, honouring him, together with Svarupa Damodara, as one of the two chief performers of that festival's sankirtana.",
  },
  {
    q: "When are Srivasa Thakura's appearance and disappearance days observed?",
    a: "As with all Vaishnava commemorative days, the dates follow the lunar (tithi) calendar and shift each year. Please refer to the current Gaudiya Vaishnava calendar for the exact dates.",
  },
];

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

function Ornament() {
  return (
    <div className="flex justify-center my-10 sm:my-14">
        <div className="w-16 h-px bg-[#C9A84C]/40"></div>
        <div className="mx-4 text-[#C9A84C] text-xl leading-none -mt-3">✦</div>
        <div className="w-16 h-px bg-[#C9A84C]/40"></div>
    </div>
  );
}

function Reference({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 font-sans text-xs uppercase tracking-[0.14em] text-[#3D1A00]/60">
      <span className="font-semibold text-[#C9A84C]">Reference — </span>
      {children}
    </p>
  );
}

function Quote({ text, source }: { text: string; source: string }) {
  return (
    <figure className="relative my-8 rounded-lg bg-[#FDF6E3] border-l-4 border-[#C9A84C] px-6 py-5 sm:px-8 sm:py-6 shadow-sm">
      <span aria-hidden="true" className="absolute top-2 left-3 font-serif text-5xl text-[#C9A84C]/40 select-none">&ldquo;</span>
      <blockquote className="relative italic text-[#3D1A00]/90 leading-relaxed text-[1.05rem] sm:text-lg pl-4">
        {text}
      </blockquote>
      {source && (
        <figcaption className="relative mt-3 pl-4 text-sm font-medium tracking-wide text-[#3D1A00]/60">
          — {source}
        </figcaption>
      )}
    </figure>
  );
}

function SectionHeading({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 font-serif text-2xl sm:text-3xl text-[#3D1A00] font-semibold tracking-tight mt-16 mb-6 pb-3 border-b border-[#C9A84C]/40"
    >
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 leading-relaxed text-[#3D1A00]/90 font-serif text-[1.05rem] sm:text-[1.125rem]">
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  JSON-LD                                                             */
/* ------------------------------------------------------------------ */

function JsonLd() {
  const url = "https://hkmchennai.org/blog/sri-srivasa-thakura-heart-of-sankirtana";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sri Srivasa Thakura: Heart of the Sankirtana Movement",
    description:
      "Discover Sri Srivasa Thakura, the Panca-tattva devotee in whose courtyard Lord Chaitanya first held nightly sankirtana that grew into a worldwide movement.",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    about: {
      "@type": "Person",
      name: "Sri Srivasa Thakura",
      alternateName: "Srivasa Pandita",
      description:
        "One of the five members of the Panca-tattva and the eternal representative of the pure devotee (jiva-tattva) in Gaudiya Vaishnava tradition, regarded as the incarnation of Srila Narada Muni.",
    },
    publisher: {
      "@type": "Organization",
      name: "ISKCON Thiruvanmiyur | Sri Sri Radha Gopinatha, Dakshina Dwaraka Dham, Chennai",
      url: "https://hkmchennai.org",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function Page() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main className="min-h-screen bg-[#FFF9F0] selection:bg-[#c9973a] selection:text-white">
        <article className="gp-blog-wrap">
          {/* ---------- Hero ---------- */}
          <header className="gp-blog-header">
            <p className="gp-hero-label">Gaudiya Vaishnava Saints Series</p>
            <h1 className="gp-blog-title">
              Sri Srivasa Thakura
            </h1>
            <div className="gp-hero-line" />
            <p className="gp-blog-subtitle text-center mx-auto max-w-3xl">
              <strong>The Heart of the Sankirtana Movement:</strong> Glorifying the foremost devotee of the Panca-tattva, in whose courtyard Sri Chaitanya Mahaprabhu first revealed the nightly sankirtana that would flood the world.
            </p>
          </header>

          <div className="max-w-3xl mx-auto px-6 pb-24">
          {/* ---------- Introduction ---------- */}
          <section>
            <P>
              A pure devotee of the Lord is not measured by wealth, scholarship, or social position, but by the
              completeness of his surrender. Sri Srivasa Thakura, one of the five eternal features of the
              Panca-tattva, is the scriptural standard by which this truth is taught.
            </P>
            <P>
              He was not a king, nor a renunciant, nor a famed scholar — he was a mere brahmana householder of
              Navadvipa — yet the Supreme Personality of Godhead Himself, in the form of Sri Chaitanya Mahaprabhu,
              chose no other place to manifest His most confidential pastimes than the modest courtyard of Srivasa
              Thakura&rsquo;s own home. This is the process of bhakti: it does not wait upon material qualification,
              and wherever it is present in a pure heart, the Lord Himself is drawn to reside.
            </P>
            <P>
              It is therefore not incidental that Sri Krishnadasa Kaviraja Gosvami, when beginning to describe the
              innumerable devotees of Lord Chaitanya in Sri Caitanya-caritamrta, places Srivasa Thakura&rsquo;s name
              first.
            </P>
            <Quote
              text="All glories to the devotees of Lord Caitanya, headed by Srivasa Thakura!"
              source="Srila Prabhupada, Sri Caitanya-caritamrta, Adi-lila 9.1, Translation"
            />
            <P>
              This article gathers every pastime concerning Srivasa Thakura that Srila Prabhupada himself narrates or
              references in Sri Chaitanya-charitamrita — from his birth and family, through the nightly sankirtana
              at his home, to his final years in separation from the Lord. Every pastime examined below teaches the
              same conclusion from a different angle: that a devotee fixed in Krishna consciousness is unshaken by
              material circumstance, that an offense at the feet of such a devotee is more dangerous than an offense
              against the Lord Himself, and that the Lord&rsquo;s own mercy flows through His pure devotees rather
              than around them.
            </P>
          </section>

          <Ornament />

          {/* ---------- Quick Facts ---------- */}
          <section>
            <SectionHeading>Quick Facts</SectionHeading>
            <dl className="mt-6 overflow-hidden rounded-lg border border-[#C9A84C]/30 bg-white">
              {quickFacts.map((f, i) => (
                <div
                  key={f.label}
                  className={`grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4 ${
                    i % 2 === 0 ? "bg-white" : "bg-[#FDF6E3]/30"
                  }`}
                >
                  <dt className="font-sans text-xs font-bold uppercase tracking-[0.08em] text-[#C9A84C]">
                    {f.label}
                  </dt>
                  <dd className="font-serif text-[1.05rem] leading-relaxed text-[#3D1A00]/90">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* ---------- Obeisances ---------- */}
          <SectionHeading>Offering Obeisances to Srivasa Thakura</SectionHeading>
          <P>
            Srivasa Thakura is one of the foremost associates of Sri Chaitanya Mahaprabhu and is eternally glorified
            as a member of the <strong>Panca-tattva</strong>. His name is lovingly remembered whenever devotees
            chant the Panca-tattva maha-mantra before the Hare Krishna maha-mantra:
          </P>
          <div className="my-8 rounded-lg bg-[#FDF6E3] border border-[#C9A84C]/30 px-6 py-6 text-center sm:px-8 sm:py-8 shadow-sm">
            <p className="font-serif italic text-lg leading-relaxed text-[#3D1A00] sm:text-xl">
              (jaya) śrī-kṛṣṇa-caitanya prabhu nityānanda
              <br />
              śrī-advaita gadādhara śrīvāsādi-gaura-bhakta-vṛnda
            </p>
          </div>
          <P>
            The phrase <em>&ldquo;śrīvāsādi-gaura-bhakta-vṛnda&rdquo;</em> means &ldquo;Srivasa Thakura and all the
            devotees of Lord Gauranga,&rdquo; honoring Srivasa Thakura as one of Mahaprabhu&rsquo;s most intimate
            associates and the representative of the pure devotees within the Panca-tattva.
          </P>

          {/* ---------- Family and Early Life ---------- */}
          <SectionHeading>Family and Early Life</SectionHeading>
          <div className="my-8 w-full rounded-xl overflow-hidden shadow-md">
            <Image 
              src="/images/blogs/sri-srivasa-thakura/image2.png"
              alt="Family and Early Life"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <P>
            Every acharya&rsquo;s life demonstrates that the Lord prepares His eternal associates long before their
            mission becomes visible to the world. Srivasa Thakura was born to Sri Jaladhara Pandita, a traditional
            brahmana of Sri Hatta (present-day Sylhet, Bangladesh), some thirty years before Sri Chaitanya
            Mahaprabhu Himself appeared — a gap that is itself significant, since it meant Srivasa Thakura was
            already a mature, learned householder by the time the Lord&rsquo;s own pastimes began, ready to receive
            Him rather than needing to be trained alongside Him.
          </P>
          <P>
            Jaladhara Pandita had five sons, and two of them, Srivasa and his youngest brother Sri Rama Pandita,
            became founders of their own branches on the tree of Lord Chaitanya&rsquo;s devotees. This is not
            incidental family history; Sri Gaura-ganoddesha-dipika identifies Srivasa Pandita as the incarnation of
            Srila Narada Muni himself, and Sri Rama Pandita as the incarnation of Parvata Muni, Narada&rsquo;s
            constant companion. The eternal friendship of these two great sages had, in other words, descended again
            in this age specifically to help the Lord distribute love of Krishna to the world — nothing about their
            appearance was accidental or ordinary.
          </P>
          <P>
            When Srivasa Thakura was still young, his eldest brother Nalina Pandita passed away, and the family
            relocated from Sri Hatta to Navadvipa, on the bank of the Ganges, so that Srivasa could grow up in the
            constant association of devotees rather than in relative isolation. There he married Srimati Malini
            Devi, herself glorified as an incarnation of Mother Ambika, who nursed the child Krishna in Vraja.
            Srivasa Thakura and Malini Devi were on terms of close family friendship with Jagannatha Mishra and
            Sacidevi, the parents of Sri Chaitanya Mahaprabhu, and Malini Devi was personally present to help at the
            time of Nimai&rsquo;s birth — placing Srivasa Thakura&rsquo;s household at the very centre of the
            Lord&rsquo;s pastimes from the first day of His earthly life.
          </P>
          <P>
            Srila Prabhupada notes in his purport to Sri Caitanya-caritamrta that Srivasa Thakura lived at Navadvipa
            together with his three younger brothers, Sri Rama, Sripati, and Srinidhi, along with their entire
            extended household, and that this joint family gave itself over completely to the Lord&rsquo;s service:
          </P>
          <Quote text="They knew no other god or goddess." source="Srila Prabhupada, Sri Chaitanya-charitamrita, Adi-lila 10.8, Purport" />
          <P>
            Srila Prabhupada adds in the same purport that this single-minded dedication is the actual qualification
            of a Vaishnava household, and warns that no one who wishes to become a pure, staunch devotee should
            divide his shelter between the Supreme Lord and the various demigods.
          </P>
          <Reference>Sri Gaura-ganoddesha-dipika, verse 90; Sri Chaitanya-charitamrita, Adi-lila 10.8, Purport</Reference>

          {/* ---------- Position in Panca-tattva ---------- */}
          <SectionHeading>His Position in the Panca-tattva</SectionHeading>
          <P>
            Srila Bhaktisiddhanta Sarasvati Thakura explains in his Anubhasya commentary that although Sri Chaitanya
            Mahaprabhu, Nityananda Prabhu, Advaita Acharya, Gadadhara Pandita, and Srivasa Thakura are all situated
            on the very same absolute platform, they manifest distinct spiritual features so that devotees may
            relish different varieties of transcendental relationship with the Lord. Srila Prabhupada summarises the
            distinction directly: Sri Chaitanya Mahaprabhu is the Lord Himself appearing in the mood of a devotee;
            Nityananda Prabhu is His plenary expansion; Advaita Acharya is His incarnation; Gadadhara Pandita is His
            internal potency; and Srivasa Thakura is the manifestation of the pure devotee himself.
          </P>
          <P>
            Within this framework, Srivasa Thakura represents jiva-tattva — the constitutional position of the pure
            devotee soul, as distinct from the Lord&rsquo;s own personal or plenary manifestations. He stands as the
            archetype and leader of the countless unalloyed devotees of the Lord.
          </P>
          <Quote
            text="There are innumerable pure devotees of the Lord, headed by Srivasa Thakura."
            source="Srila Prabhupada, Sri Chaitanya-charitamrita, Adi-lila 7.16, Translation"
          />
          <P>
            This is precisely why, whenever the Panca-tattva mantra is chanted, all such devotees are addressed
            collectively as srivasadi-gaura-bhakta-vrinda — the devotees of Lord Chaitanya headed by Srivasa
            Thakura. A devotee chanting this mantra is, in effect, praying to be counted among that same company.
          </P>
          <Reference>Sri Chaitanya-charitamrita, Adi-lila 7.6–17, Purports</Reference>

          {/* ---------- Srivasa Angan ---------- */}
          <SectionHeading>
            Srivasa Angan: The Courtyard Where the Sankirtana Movement Was Born
          </SectionHeading>
          <div className="my-8 w-full rounded-xl overflow-hidden shadow-md">
            <Image 
              src="/images/blogs/sri-srivasa-thakura/srivasa-angan.jpg"
              alt="Srivasa Angan, the courtyard of sankirtana"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <P>
            A pure devotee does not need to be told twice when the Lord&rsquo;s service calls. As Nimai grew from a
            brilliant, restless child into the finest scholar of Navadvipa, Srivasa Thakura quietly understood, well
            before it was publicly declared, that this boy was Krishna Himself, and simply waited for the moment the
            Lord would choose to reveal His mission. That moment came when Sri Chaitanya Mahaprabhu began to
            manifest waves of pure devotional ecstasy following His initiation, and Srivasa Thakura&rsquo;s response
            was immediate: he and his brothers threw open the doors of their home without a moment&rsquo;s
            hesitation. It is in the courtyard of that house — remembered ever since as Srivasa Angan — that Sri
            Chaitanya Mahaprabhu held nightly kirtana with His most confidential devotees for a full year.
          </P>
          <P>
            These were not ordinary devotional gatherings. The kirtanas at Srivasa Angan were so intensely
            transcendental that the Lord&rsquo;s own associates would lose external consciousness and manifest
            their eternal spiritual forms while chanting and dancing, so much so that this courtyard is considered
            non-different from Vrindavana itself, transplanted into Navadvipa. Because the gathering was this
            confidential, Srivasa Thakura kept the doors bolted every night, admitting only the Lord&rsquo;s most
            intimate devotees, while the merely curious and the openly envious were left standing outside the gate.
          </P>
          <Quote
            text="This ecstatic chanting was performed with the doors closed so that nonbelievers who came to make fun could not gain entrance."
            source="Srila Prabhupada, Sri Chaitanya-charitamrita, Adi-lila 17.35, Translation"
          />
          <P>
            He adds that this is a special-case instruction rather than the ordinary policy of the sankirtana
            movement: large-scale congregational chanting of the Hare Krishna maha-mantra is meant to be open to
            everyone, and it is only when nonbelievers come specifically to disturb or mock the chanting that such
            doors should be closed.
          </P>

          {/* ---------- Animals ---------- */}
          <SectionHeading>Even the Animals in His Household Were Delivered</SectionHeading>
          <P>
            Such was the purifying power of the sankirtana performed nightly at Srivasa Thakura&rsquo;s home that
            its influence was not confined to human beings alone. Discussing how even a doglike nondevotee can
            gradually become a devotee simply through the association of a pure Vaishnava, Srila Prabhupada gives
            Srivasa Thakura&rsquo;s own household as a direct example:
          </P>
          <Quote
            text="Cats and dogs in the household of Srivasa Thakura were also liberated."
            source="Srila Prabhupada, Sri Chaitanya-charitamrita, Adi-lila 10.1, Purport"
          />
          <P>
            Srila Prabhupada explains that cats and dogs are not ordinarily expected to develop devotion, yet in the
            association of a pure devotee even they are delivered. This small but striking detail is offered by
            Srila Prabhupada not as an exaggeration but as sober evidence of exactly how spiritually charged the
            atmosphere of Srivasa Angan was — evidence that a devotee&rsquo;s home, when fully surrendered to the
            Lord&rsquo;s service, purifies everything and everyone within its walls.
          </P>
          <Reference>Sri Chaitanya-charitamrita, Adi-lila 10.1, Purport</Reference>

          {/* ---------- Maha-prakasha-lila ---------- */}
          <SectionHeading>The Maha-prakasha-lila: Lord Chaitanya Reveals His Divine Form</SectionHeading>
          <div className="my-8 w-full rounded-xl overflow-hidden shadow-md">
            <Image 
              src="/images/blogs/sri-srivasa-thakura/gour-nityananda.jpg"
              alt="Sri Sri Gaura Nityananda"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <P>
            Sri Chaitanya Mahaprabhu ordinarily conceals His identity as the Supreme Personality of Godhead behind
            the mood of His own devotee, tasting the love that a devotee feels for Krishna rather than openly
            displaying His Godhood. What happened at Srivasa Thakura&rsquo;s house is the great exception to that
            concealment, and it unfolded in two connected stages that are worth separating clearly, since each has a
            specific devotee at its centre.
          </P>
          <P>
            The first stage was shown specifically to Sri Nityananda Prabhu. This took place after an abhisheka
            ceremony held in Srivasa Thakura&rsquo;s house, in which the Lord sat on the bed of Vishnu while the
            devotees worshiped Him with the Vedic hymns of the Purusha-sukta. Immediately afterward, when
            Nityananda Prabhu arrived and met Sri Chaitanya Mahaprabhu, the Lord revealed Himself to him in three
            successive forms. First He showed a six-armed form, holding a conchshell, disc, club, lotus, bow, and
            flute. Then He showed a four-armed form, standing in a three-curved posture, with two hands playing a
            flute and the other two holding a conch and disc. Finally He showed Nityananda Prabhu His original
            two-armed form as Krishna, the son of Maharaja Nanda, simply playing His flute, His body bluish and
            dressed in yellow — the same darshan mother Sachi herself received of her two sons as Krishna and
            Balarama on this occasion. Nityananda Prabhu then personally performed Vyasa-puja, worship of the
            spiritual master, to Sri Chaitanya Mahaprabhu in gratitude.
          </P>
          <P>
            This is a precise, deliberate sequence, not a random display: six arms, then four, then two, ending on
            Krishna&rsquo;s own original two-armed form as a cowherd boy — each revelation drawing closer to the
            Lord&rsquo;s most intimate identity, shown to the one devotee, Nityananda Prabhu, whose own position as
            Krishna&rsquo;s plenary expansion made him fit to receive it.
          </P>
          <P>
            Following this, Sri Chaitanya Mahaprabhu remained in that ecstatic, self-revealing state for a
            continuous twenty-one hours, and it is this second, longer stage that Gaudiya Vaishnava tradition
            specifically calls the Maha-prakasha-lila, or sata-prahariya-bhava, &ldquo;the ecstasy of twenty-one
            hours.&rdquo; Unlike the vision shown only to Nityananda Prabhu, this extended manifestation was
            witnessed by the whole assembly of devotees gathered in Srivasa Thakura&rsquo;s courtyard. Sri
            Chaitanya-bhagavata records that during these twenty-one hours the Lord exhibited the forms of several
            of His own incarnations in turn, that the devotees performed a royal abhisheka worthy of the king of
            kings, and that the Lord granted personal benedictions to each devotee according to his own
            heart&rsquo;s desire — on this same occasion He even blessed a humble maidservant named Duhkhi, &ldquo;the
            sorrowful one,&rdquo; with the new name Sukhi, &ldquo;the joyful one.&rdquo;
          </P>
          <P>
            What is the point of such an extraordinary, twenty-one-hour self-revelation? Not merely to astonish the
            devotees present, but to remove any last doubt from their hearts. Having personally seen the
            Lord&rsquo;s own forms with their own eyes, the devotees of Srivasa Angan no longer needed faith alone
            to know that Sri Chaitanya Mahaprabhu was Krishna Himself, the source of all incarnations — they had
            direct realization. And this realization was granted nowhere else but in the home of Srivasa Thakura,
            which is why Gaudiya Vaishnava tradition names his courtyard, alongside the home of Mother Sachi, as one
            of the handful of places where the Lord&rsquo;s most confidential pastimes eternally take place.
          </P>
          <Reference>
            Sri Chaitanya-charitamrita, Adi-lila 17.12–18; Sri Chaitanya-bhagavata (Vrindavana dasa Thakura),
            Madhya-khanda, Chapters 9–10
          </Reference>

          {/* ---------- Narayani ---------- */}
          <SectionHeading>Narayani&rsquo;s Blessing: Mercy Extended to His Own Household</SectionHeading>
          <P>
            The mercy that flooded Srivasa Thakura&rsquo;s courtyard during the Maha-prakasha-lila did not fall only
            on adult, learned devotees. Srivasa Thakura&rsquo;s own niece, a small child named Narayani, who was
            being raised within his household, received the Lord&rsquo;s direct and personal favour on this same
            occasion. Srila Prabhupada identifies her precisely, connecting her destiny to the future of Gaudiya
            Vaishnava literature itself, in a translated verse whose importance cannot be overstated:
          </P>
          <Quote
            text="Narayani eternally eats the remnants of the food of Caitanya Mahaprabhu."
            source="Srila Prabhupada, Sri Chaitanya-charitamrita, Adi-lila 8.41, Translation"
          />
          <P>
            Srila Prabhupada explains in his purport that this same Narayani, favoured from childhood with the
            Lord&rsquo;s own remnants, grew up to become the mother of Srila Vrindavana dasa Thakura — the very
            author of Sri Chaitanya-bhagavata, the first and foundational biography of Sri Chaitanya
            Mahaprabhu&rsquo;s pastimes. Srila Prabhupada further notes, citing the Gaura-ganoddesha-dipika, that
            Srivasa Thakura&rsquo;s wife Malini Devi is celebrated as an incarnation of Mother Ambika, the nurse who
            fed the child Krishna at her own breast, and that Narayani herself was, in that same krishna-lila, the
            sister of Ambika — so that the entire household of Srivasa Thakura carried, generation after generation,
            an eternal and specific relationship with the Lord&rsquo;s own confidential service.
          </P>
          <P>
            This pastime carries a gentle but important lesson for every householder devotee: the mercy that flows
            through a surrendered Vaishnava home does not skip the children of that home. A pure devotee&rsquo;s
            household is not merely a place he personally serves the Lord from — it becomes, by his own surrender, a
            channel through which the Lord&rsquo;s mercy naturally extends to everyone sheltered within it, down to
            a small child not yet capable of understanding what was being given to her.
          </P>
          <Reference>Sri Chaitanya-charitamrita, Adi-lila 10.8 and Adi-lila 8.41, Translation and Purport</Reference>

          {/* ---------- Gopala Capala ---------- */}
          <SectionHeading>Gopala Capala&rsquo;s Attempt to Defame Srivasa Thakura</SectionHeading>
          <P>
            Shastra warns repeatedly that an offense committed at the feet of a Vaishnava is graver, and its
            reaction more severe, than an offense committed directly against the Lord — for the Lord can tolerate an
            insult to Himself far more easily than He tolerates an insult to His pure devotee. Nowhere in Sri
            Chaitanya Mahaprabhu&rsquo;s pastimes is this principle demonstrated more sharply than in the case of
            Gopala Capala.
          </P>
          <P>
            Srivasa Thakura&rsquo;s reputation as an exalted Vaishnava was, by this time, well established and
            widely respected throughout Navadvipa. This very reputation became the target of envy. One night, while
            kirtana was proceeding as usual within the closed doors of Srivasa Thakura&rsquo;s house, a brahmana
            named Gopala Capala — described in Sri Chaitanya-charitamrita as talkative, rough-spoken, and the chief
            among the nonbelievers of the town — resolved to destroy that reputation by a single act of deception.
            Srila Prabhupada explains his motive plainly:
          </P>
          <Quote
            text="wanted to reduce his prestige by bringing him down to the platform of the saktas"
            source="Srila Prabhupada, Sri Chaitanya-charitamrita, Adi-lila 17.37-38, Purport"
          />
          <P>
            Under cover of darkness, Gopala Capala placed before Srivasa Thakura&rsquo;s own door the paraphernalia
            used for worshiping the goddess Bhavani — a red flower, a plantain leaf, a pot of wine, and reddish
            sandalwood paste. His intention was transparent: any respectable brahmana of the neighbourhood who saw
            this the following morning would conclude that Srivasa Thakura, whom everyone believed to be a pure
            Vaishnava, was in fact secretly a sakta who worshiped the goddess with wine under cover of night.
          </P>
          <P>
            When Srivasa Thakura opened his door at dawn and discovered what had been arranged there, he did not
            panic, nor did he angrily search for the culprit. He gathered the respectable people of the
            neighbourhood and, with open irony, told them plainly that this was his nightly worship of the goddess,
            and that they could now judge his position for themselves. A devotee whose relationship with Krishna is
            secure is not shaken by what others choose to believe about him, however serious the accusation — he can
            even meet it with a smile.
          </P>
          <P>
            The residents of Navadvipa, who knew Srivasa Thakura&rsquo;s character intimately, were not deceived by
            the scheme. But Sri Chaitanya Mahaprabhu, for whom an offense at a devotee&rsquo;s feet is never a small
            matter, did not allow it to end merely in Gopala Capala&rsquo;s public embarrassment. In time, Gopala
            Capala&rsquo;s body broke out in the sores of leprosy, and in that suffering and universally shunned
            condition he finally approached the Lord directly and begged for mercy. The Lord&rsquo;s reply, in
            Srila Prabhupada&rsquo;s rendering, leaves no doubt about how seriously this offense was regarded:
          </P>
          <Quote
            text="you will have to fall down into hellish life for ten million births"
            source="Srila Prabhupada, Sri Chaitanya-charitamrita, Adi-lila 17.52, Translation"
          />
          <P>
            Srila Prabhupada explains further that this is precisely why sastra treats false accusation of a
            Vaishnava so gravely: it is a form of black magic dressed up as religion, no different in principle from
            the tantric worship of the goddess practised by those who wish to justify meat and wine under a
            religious name. Yet even so grave an offense was never beyond the Lord&rsquo;s mercy. Sri Chaitanya
            Mahaprabhu did not personally forgive the sin Himself; He directed Gopala Capala to go straight to
            Srivasa Thakura, take shelter at his feet, and beg his forgiveness — since it was Srivasa Thakura who
            had been wronged, only Srivasa Thakura&rsquo;s own mercy could release him from the reaction.
          </P>
          <P>
            Gopala Capala did exactly this, and the outcome is the real heart of the pastime: he was freed from his
            suffering not through any penance of his own, but purely by the mercy of the devotee he had once tried
            to destroy. He was later initiated, taking the name Devakinandana dasa Thakura, and became a Vaishnava
            author in his own right, composing prayers of humility toward the very devotees he had once maligned.
          </P>
          <P>
            This pastime carries two lessons that must be held together, not separately. It is a warning that an
            offense against a pure devotee invites a reaction far more severe than an offense against ordinary
            religious principles. But it is equally a demonstration that Vaishnava mercy has no limit: the very man
            who tried to defame Srivasa Thakura became, through that same devotee&rsquo;s forgiveness, a Vaishnava
            remembered with honour to this day.
          </P>
          <Reference>Sri Chaitanya-charitamrita, Adi-lila, Chapter 17, verses 38–59 (including verse 52)</Reference>

          {/* ---------- Death of son ---------- */}
          <SectionHeading>A Test of Pure Devotion: The Death of His Son</SectionHeading>
          <P>
            Bhagavad-gita teaches, na jayate mriyate va kadacit — the soul is never born and never dies
            (Bhagavad-gita 2.20). This is not a comforting sentiment to be recited only at times of ease; it is a
            conclusion meant to be lived, and Srivasa Thakura lived it at the very moment most human beings find it
            impossible to remember. One night, while Sri Chaitanya Mahaprabhu was dancing in the midst of His
            devotees in the very kirtana that Srivasa Thakura himself hosted, one of Srivasa Thakura&rsquo;s own
            sons, who had been suffering from fever, quietly passed away in another part of the house.
          </P>
          <P>
            A lesser devotee, however sincere, would have felt justified in stopping everything: the kirtana, the
            dancing, the very presence of the Lord Himself, in order to attend to a father&rsquo;s natural and
            legitimate grief. Srivasa Thakura did not. He gave immediate and firm instruction that no one in his
            household was to weep or cry out, specifically so that the sound of the Lord&rsquo;s sankirtana would
            not be disturbed for even a moment. The chanting continued through the night exactly as before, without
            so much as a broken breath of lamentation escaping the house.
          </P>
          <P>
            Sri Chaitanya Mahaprabhu is antaryami, the Lord seated within the heart of every living being, and He is
            never actually deceived by outward composure. Sensing that something in the house was amiss despite the
            unbroken kirtana, He stopped and asked directly whether some calamity had occurred. When the devotees,
            unable to conceal it any longer, informed Him of the child&rsquo;s death, the Lord did not receive the
            news with detachment; Vaishnava tradition records that He wept, exactly as anyone who loves purely weeps
            for a devotee&rsquo;s loss, and declared that He could never bear to give up the association of a
            devotee so completely surrendered to Him.
          </P>
          <P>
            The Lord then did something that reveals the actual metaphysics of the soul, not merely His personal
            affection: He caused the dead child himself to speak, so that the family would receive realization
            rather than mere consolation. The child&rsquo;s own words, as Srila Prabhupada renders them, explained
            that he had simply been living in that house for exactly as long as the Lord&rsquo;s arrangement
            required, and that he was now departing according to that same direction — not through any will of his
            own, since a living being has no independent power apart from the Lord&rsquo;s sanction.
          </P>
          <P>
            Notice what is being taught here. The child does not describe himself primarily as Srivasa
            Thakura&rsquo;s son; he describes himself first as the Lord&rsquo;s eternal servant, temporarily
            resident in a particular household exactly as long as the Lord&rsquo;s own arrangement required, and
            departing the moment that arrangement changed. This is the constitutional position of every living being
            — jivera swarupa haya krishnera nitya-dasa — made vivid rather than merely quoted. Srila Prabhupada notes
            the effect these words had on the entire family:
          </P>
          <Quote
            text="All the members of Srivasa Thakura's family received transcendental knowledge."
            source="Srila Prabhupada, Sri Chaitanya-charitamrita, Adi-lila 17.229, Purport"
          />
          <P>
            After the funeral rites were duly performed — for Srivasa Thakura&rsquo;s transcendental equanimity was
            never an excuse to neglect proper duty — Sri Chaitanya Mahaprabhu personally consoled him, assuring him
            that although one son had been taken, the Lord and Nityananda Prabhu would remain his sons eternally and
            would never abandon his company. Srila Prabhupada treats this assurance as evidence of a real, eternal
            relationship between the Lord and His devotee, not a mere figure of speech offered to soften grief.
          </P>
          <P>
            Tradition further records that the Lord blessed Srivasa Thakura on this occasion that poverty would
            never enter his house — a benediction Srivasa Thakura received not as compensation for his loss, but
            simply as one further token of the Lord&rsquo;s inexhaustible affection for a devotee who had placed the
            Lord&rsquo;s pleasure, without calculation, above his own heart.
          </P>
          <P>
            What should we conclude from this pastime? Not that grief itself is unspiritual, and not that a devotee
            must suppress natural human feeling as a show of advancement. The point is subtler and more exacting:
            Srivasa Thakura&rsquo;s equanimity did not arise from indifference to his son, but from a complete and
            living conviction that the soul is eternal and that the Lord&rsquo;s arrangement, however painful to the
            senses, is always for the ultimate good of everyone concerned. This is the standard the shastra sets
            before us — not that we will never feel loss, but that our faith in Krishna&rsquo;s arrangement should
            be strong enough that even the gravest loss cannot pull our service away from Him.
          </P>
          <Reference>Sri Chaitanya-charitamrita, Adi-lila 17.227–230</Reference>

          {/* ---------- Nrsimha Ecstasy ---------- */}
          <SectionHeading>The Lord&rsquo;s Nrsimha Ecstasy in Srivasa Thakura&rsquo;s House</SectionHeading>
          <P>
            Srivasa Thakura&rsquo;s service to Sri Chaitanya Mahaprabhu was not confined to hosting the kirtana; the
            Lord personally engaged him in the recitation of scripture as well, and on one occasion that recitation
            itself became the direct cause of an extraordinary manifestation of the Lord&rsquo;s own ecstasy. Srila
            Prabhupada narrates that the Lord specifically asked Srivasa Thakura to read aloud from the
            Brhat-sahasra-nama, the thousand names of Lord Vishnu, simply because He wished to hear them at that
            time.
          </P>
          <P>
            As Srivasa Thakura read through the sacred names in due course, he arrived at the holy name of Lord
            Nrisimhadeva. The moment Sri Chaitanya Mahaprabhu heard this single name spoken aloud in his own
            courtyard, He became completely absorbed, and the mood of the fierce, protective incarnation overtook
            Him entirely. Srila Prabhupada describes what followed:
          </P>
          <Quote
            text="ran through the city streets, club in hand, ready to kill all the atheists"
            source="Srila Prabhupada, Sri Chaitanya-charitamrita, Adi-lila 17.92, Translation"
          />
          <P>
            The residents of Navadvipa, seeing the Lord in this fierce ecstasy, fled from the streets in fear, until
            He gradually returned to external consciousness and came back to Srivasa Thakura&rsquo;s house, where He
            set the club aside. It was in Srivasa Thakura&rsquo;s own courtyard, through an ordinary act of reading
            the Lord&rsquo;s holy names aloud at His request, that this pastime both began and ended — a reminder
            that even the simplest service a devotee performs, offered exactly as the Lord asks, can become the
            doorway to the Lord&rsquo;s own most confidential and powerful moods.
          </P>
          <Reference>Sri Chaitanya-charitamrita, Adi-lila 17.90–94</Reference>

          {/* ---------- Chand Kazi ---------- */}
          <SectionHeading>Public Sankirtana and the Confrontation with Chand Kazi</SectionHeading>
          <P>
            As Sri Chaitanya Mahaprabhu&rsquo;s private nightly kirtanas at Srivasa Angan grew in intensity, envious
            residents of Navadvipa complained to the local magistrate, Chand Kazi, who ordered the congregational
            chanting suppressed and had a mridanga drum broken during one such kirtana in protest. Far from
            silencing the movement, this opposition became the occasion for Sri Chaitanya Mahaprabhu&rsquo;s first
            great public demonstration of sankirtana: He organised a massive nagara-sankirtana procession through
            the streets of Navadvipa that proceeded directly to the Kazi&rsquo;s own residence.
          </P>
          <P>Srila Prabhupada notes the outcome of this historic confrontation plainly:</P>
          <Quote
            text="the Kazi was converted to a devotee"
            source="Srila Prabhupada, Sri Chaitanya-charitamrita, Adi-lila 17.224-226, Purport"
          />
          <P>
            This single episode — beginning with opposition to the kirtana associated with Srivasa Thakura&rsquo;s
            household — marks the turning point at which Lord Chaitanya&rsquo;s sankirtana movement stepped out from
            behind closed courtyard doors and into the public streets of Navadvipa, exactly as it continues to do in
            every town and village where devotees chant Hare Krishna in public today.
          </P>
          <Reference>Sri Chaitanya-charitamrita, Adi-lila 17.124–226</Reference>

          {/* ---------- Two headquarters ---------- */}
          <SectionHeading>Srivasa Thakura&rsquo;s House: One of the Two Headquarters of the Sankirtana Movement</SectionHeading>
          <P>
            Srila Prabhupada, describing the whole sweep of Lord Chaitanya&rsquo;s early preaching in Navadvipa,
            identifies Srivasa Thakura&rsquo;s home as one of only two households from which the entire sankirtana
            movement was administered and spread. Together with Sri Advaita Acharya&rsquo;s house, Srivasa
            Thakura&rsquo;s home became the base from which Nityananda Prabhu and Haridasa Thakura, described by
            Srila Prabhupada as the Lord&rsquo;s two chief lieutenants, were sent out daily, door to door, to preach
            Srimad-Bhagavatam and invite the people of Navadvipa into the sankirtana movement. Srivasa
            Thakura&rsquo;s courtyard was, in other words, not simply a private residence but functioned as one of
            the movement&rsquo;s two operational centres during this most active phase of Lord Chaitanya&rsquo;s
            household life.
          </P>
          <P>
            Srila Prabhupada also records that Sri Chaitanya Mahaprabhu personally staged dramatic performances of
            pastimes from the life of Lord Krishna together with His devotees, and that Srivasa Thakura, alongside
            Advaita Prabhu, was among the intimate associates who took part in these dramas at the house of
            Chandrasekhara — showing that Srivasa Thakura&rsquo;s service to the Lord extended even to this playful,
            artistic dimension of devotional life, always performed in the association of pure devotees rather than
            by professional actors with no devotional sentiment.
          </P>
          <Reference>Srila Prabhupada, Introduction to Sri Chaitanya-charitamrita; Sri Chaitanya-charitamrita, Adi-lila 10, Purport</Reference>

          {/* ---------- Ratha-yatra ---------- */}
          <SectionHeading>Leading Sankirtana at the Jagannatha Puri Ratha-yatra</SectionHeading>
          <div className="my-8 w-full rounded-xl overflow-hidden shadow-md">
            <Image 
              src="/images/blogs/sri-srivasa-thakura/image1.png"
              alt="Sankirtana at Ratha-yatra"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <P>
            Srivasa Thakura&rsquo;s role as a leader of sankirtana was not confined to Navadvipa. Years later, when
            Sri Chaitanya Mahaprabhu resided at Jagannatha Puri and personally organised the ecstatic dancing before
            the Ratha-yatra car, He divided His assembled devotees into several kirtana parties, each with its own
            leading singer and group of responsive chanters. Srila Prabhupada records that of these parties:
          </P>
          <Quote
            text="The Lord then formed another group with Srivasa Thakura as the chief man."
            source="Srila Prabhupada, Sri Chaitanya-charitamrita, Madhya-lila 13, Translation"
          />
          <P>
            Srivasa Thakura led this party of singers before Lord Jagannatha&rsquo;s car alongside Svarupa Damodara,
            who led the first party — the two of them singled out by Srila Prabhupada as the two chief performers of
            that year&rsquo;s sankirtana, honoured personally by the Lord with garlands and sandalwood pulp from His
            own hand.
          </P>
          <P>
            A further incident from this same festival shows how completely Srivasa Thakura&rsquo;s mind remained
            absorbed in the Lord&rsquo;s dancing, undistracted even by his own physical surroundings. As King
            Pratparudra watched Sri Chaitanya Mahaprabhu dance, his personal attendant Haricandana repeatedly touched
            and pushed Srivasa Thakura, asking him to step aside so the King could see. So completely absorbed was
            Srivasa Thakura in watching the Lord that he did not understand why he was being touched, and after
            being pushed again and again, he turned and struck Haricandana&rsquo;s hand away. When the King himself
            saw what had happened, far from taking offense on his attendant&rsquo;s behalf, he corrected Haricandana
            directly, reminding him what a rare fortune it was to have been touched at all by a devotee as elevated
            as Srivasa Thakura. The King&rsquo;s own humility before a simple brahmana devotee — even while that
            devotee was, in that moment, unaware of the King&rsquo;s presence altogether — is itself part of what
            this pastime teaches: a Vaishnava&rsquo;s spiritual position is not diminished by his outward simplicity,
            and a wise ruler recognises that position even when the devotee himself has no such thought in mind.
          </P>
          <Reference>Sri Chaitanya-charitamrita, Madhya-lila, Chapter 13</Reference>

          {/* ---------- Later Life ---------- */}
          <SectionHeading>Later Life and Disappearance</SectionHeading>
          <P>
            After Sri Chaitanya Mahaprabhu accepted the sannyasa order and departed Navadvipa for Jagannatha Puri,
            Srivasa Thakura found the separation unbearable. Navadvipa without the daily presence of his beloved
            Lord had become a place of intolerable absence, and he eventually left the city of his most cherished
            pastimes to reside at Kumarahatta, where he passed the remainder of his life immersed in remembrance of
            Sri Chaitanya Mahaprabhu. Srila Prabhupada notes that other exalted devotees were drawn to the same
            place in the years that followed: Sivananda Sena, the great householder devotee who personally organised
            the annual pilgrimage of Bengali devotees to Jagannatha Puri, resided there as well, and Vasudeva Datta
            later took up residence in the same town.
          </P>
          <Reference>Sri Chaitanya-charitamrita, Adi-lila 10.8, Purport</Reference>
          <P>
            As with most Gaudiya Vaishnava saints, the precise calendar date of Srivasa Thakura&rsquo;s appearance
            and disappearance is reckoned according to the lunar tithi each year rather than a fixed solar date, and
            devotees traditionally glorify him on both occasions, since the whole of his life — from his birth as
            Narada&rsquo;s incarnation to his final days in separation from the Lord — is a single continuous
            offering of devotional service.
          </P>

          <Ornament />

          {/* ---------- Lila Sthali ---------- */}
          <section>
            <SectionHeading>Lila Sthali: Places Sanctified by Srivasa Thakura</SectionHeading>
            <div className="mt-6 space-y-6">
              {lilaSthali.map((l) => (
                <div key={l.place} className="rounded-lg border border-[#C9A84C]/40 bg-white p-5 sm:p-6 shadow-sm">
                  <h3 className="font-serif text-lg font-semibold text-[#3D1A00]">{l.place}</h3>
                  <p className="mt-2 font-serif text-[1.05rem] leading-relaxed text-[#3D1A00]/80">
                    {l.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <Ornament />

          {/* ---------- Lessons ---------- */}
          <section>
            <SectionHeading>Lessons for the Devotee</SectionHeading>
            <div className="mt-6 space-y-6">
              {lessons.map((l, i) => (
                <div key={i} className="rounded-lg border border-[#C9A84C]/30 bg-[#FDF6E3]/50 p-6 sm:p-7 shadow-sm">
                  <h3 className="font-serif text-xl font-semibold italic text-[#3D1A00]">{l.title}</h3>
                  <p className="mt-3 font-serif text-[1.05rem] leading-relaxed text-[#3D1A00]/90">
                    {l.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <Ornament />

          {/* ---------- FAQ ---------- */}
          <section>
            <SectionHeading>Frequently Asked Questions</SectionHeading>
            <div className="space-y-4 mt-8">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-lg border border-[#C9A84C]/40 bg-white open:bg-[#FDF6E3]/60 transition-colors">
                  <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-4 font-serif text-[#3D1A00] font-semibold sm:text-[1.05rem]">
                    {f.q}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-[#C9A84C] text-2xl leading-none transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-[#3D1A00]/80 leading-relaxed sm:text-base">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ---------- Footer credit ---------- */}
          <BlogConnectSection />
          <div className="mt-16 border-t border-[#C9A84C]/30 pt-8 text-center">
            <p className="font-sans text-xs uppercase tracking-[0.14em] text-[#3D1A00]/50 font-bold">
              Srila Prabhupada&rsquo;s ISKCON Thiruvanmiyur | Dakshina Dwaraka Dham, Chennai
            </p>
          </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
