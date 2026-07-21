import React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/FooterSection"
import BlogConnectSection from "@/components/BlogConnectSection"
import Script from "next/script"
import { Facebook, Twitter, Mail, Link as LinkIcon, Instagram, Youtube } from 'lucide-react'
import "./styles.css"

function SectionHeading({ id, children }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 font-serif text-2xl sm:text-3xl text-[#3D1A00] font-semibold tracking-tight mt-16 mb-6 pb-3 border-b border-[#C9A84C]/40"
    >
      {children}
    </h2>
  );
}

function PrabhupadaQuote({ children, cite }) {
  return (
    <figure className="relative my-8 rounded-lg bg-[#FDF6E3] border-l-4 border-[#C9A84C] px-6 py-5 sm:px-8 sm:py-6 shadow-sm">
      <span
        aria-hidden="true"
        className="absolute top-2 left-3 font-serif text-5xl text-[#C9A84C]/40 select-none"
      >
        &ldquo;
      </span>
      <blockquote className="relative italic text-[#3D1A00]/90 leading-relaxed text-[1.05rem] sm:text-lg pl-4">
        {children}
      </blockquote>
      {cite && (
        <figcaption className="relative mt-3 pl-4 text-sm font-medium tracking-wide text-[#3D1A00]/60">
          — {cite}
        </figcaption>
      )}
    </figure>
  );
}

function QuickFactRow({ label, children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[11rem_1fr] gap-1 sm:gap-4 py-3 border-b border-[#C9A84C]/25 last:border-b-0">
      <dt className="font-semibold text-[#3D1A00] text-sm tracking-wide uppercase sm:pt-0.5">
        {label}
      </dt>
      <dd className="text-[#3D1A00]/85 leading-relaxed">{children}</dd>
    </div>
  );
}

function LilaSthaliCard({ number, place, children }) {
  return (
    <div className="rounded-lg border border-[#C9A84C]/40 bg-white p-5 sm:p-6 flex flex-col gap-2">
      <div className="flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3D1A00] text-[#C9A84C] text-sm font-semibold mt-0.5">
          {number}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-lg text-[#3D1A00] font-semibold leading-tight">
            {place}
          </h3>
        </div>
      </div>
      <p className="text-[#3D1A00]/80 leading-relaxed mt-2 text-sm sm:text-base">{children}</p>
    </div>
  );
}

function FaqItem({ question, children }) {
  return (
    <details className="group rounded-lg border border-[#C9A84C]/40 bg-white open:bg-[#FDF6E3]/60 transition-colors">
      <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-4 font-serif text-[#3D1A00] font-semibold">
        {question}
        <span
          aria-hidden="true"
          className="shrink-0 text-[#C9A84C] text-xl leading-none transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="px-5 pb-5 text-[#3D1A00]/80 leading-relaxed">
        {children}
      </div>
    </details>
  );
}

function TocLink({ href, children }) {
  return (
    <li>
      <a
        href={href}
        className="text-[#3D1A00]/75 hover:text-[#3D1A00] hover:underline underline-offset-4 decoration-[#C9A84C] transition-colors"
      >
        {children}
      </a>
    </li>
  );
}

function VerseBlock({ number, children }) {
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

const BlogClient = () => {
  return (
    <main className="min-h-screen bg-[#FFF9F0] selection:bg-[#c9973a] selection:text-white">
      <Navbar />
        <article className="gp-blog-wrap">
          <header className="gp-blog-header">
            <p className="gp-hero-label">Ratha Yatra Series</p>
            <h1 className="gp-blog-title">
              Hera Panchami: When the Goddess of Fortune Marches on Her Lord
            </h1>
            <div className="gp-hero-line" />
            <p className="gp-blog-subtitle">
              The Lakshmi Vijaya pastime, five days after Ratha Yatra — Sri Chaitanya Charitamrita, Madhya-lila, Chapter 14
            </p>
          </header>

          <div className="gp-image-container">
            <img
              src="/assets/blog/hera-panchami/hera_panchami_ritual.png"
              alt="Hera Panchami Ritual"
              className="gp-image"
            />
            <span className="gp-image-caption">Hera Panchami, Jagannath Puri</span>
          </div>

          <div className="max-w-3xl mx-auto px-6">
            <section className="pt-12">
              <p className="text-[#3D1A00]/90 leading-relaxed text-lg">
                Five days after Lord Jagannath departs on His Ratha Yatra chariot, Jagannath Puri
                observes a festival that is, on the surface, a domestic quarrel — and underneath, one
                of the most profound theological statements in the Gaudiya Vaishnava tradition. It is
                called Hera Panchami, or Lakshmi Vijaya: the day the goddess of fortune, Srimati
                Lakshmidevi, sets out from the temple in full royal procession to confront her Lord
                for leaving her behind.
              </p>
            </section>

            <nav aria-label="Table of contents" className="mt-12 rounded-lg border border-[#C9A84C]/40 bg-white px-6 py-6 sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-4">In this article</p>
              <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2 list-decimal list-inside">
                <TocLink href="#quick-facts">Quick Facts</TocLink>
                <TocLink href="#lila-sthali">Lila Sthali</TocLink>
                <TocLink href="#kings-command">The King's Command</TocLink>
                <TocLink href="#mahaprabhu-returns">Mahaprabhu Returns</TocLink>
                <TocLink href="#confidential-question">A Confidential Question</TocLink>
                <TocLink href="#why-lakshmi-is-left-behind">Why Lakshmi Is Left Behind</TocLink>
                <TocLink href="#the-procession">The Grand Procession Arrives</TocLink>
                <TocLink href="#the-arrest">The Arrest of the Lord's Servants</TocLink>
                <TocLink href="#divine-jealousy">Divine Jealousy</TocLink>
                <TocLink href="#significance">Spiritual Significance</TocLink>
                <TocLink href="#faq">FAQ</TocLink>
              </ol>
            </nav>

            <section id="quick-facts" className="mt-16">
              <SectionHeading id="quick-facts-heading">Quick Facts</SectionHeading>
              <dl className="rounded-lg border border-[#C9A84C]/40 bg-white px-6 py-2 sm:px-8">
                <QuickFactRow label="Festival Name">Hera Panchami, also known as Lakshmi Vijaya</QuickFactRow>
                <QuickFactRow label="When It Occurs">The fifth day after the start of the Ratha Yatra festival</QuickFactRow>
                <QuickFactRow label="Central Figures">Srimati Lakshmidevi (the goddess of fortune) and the servants of Lord Jagannath</QuickFactRow>
                <QuickFactRow label="Location">From the Jagannath Temple, Puri to the Gundicha Temple at Sundarachala</QuickFactRow>
                <QuickFactRow label="Scriptural Source">Sri Chaitanya Charitamrita, Madhya-lila, Chapter 14, Texts 106-139</QuickFactRow>
              </dl>
            </section>

            <section id="lila-sthali" className="mt-16">
              <SectionHeading id="lila-sthali-heading">Lila Sthali — Where This Pastime Unfolded</SectionHeading>
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <LilaSthaliCard number="1" place="Jagannath Vallabha Garden">
                  The large garden at Sundarachala where Sri Chaitanya Mahaprabhu rested for nine days during this period.
                </LilaSthaliCard>
                <LilaSthaliCard number="2" place="Sundarachala / Gundicha Temple">
                  The temple representing Vrindavana, where Lord Jagannath resides during Ratha Yatra and enjoys pastimes in the surrounding gardens.
                </LilaSthaliCard>
                <LilaSthaliCard number="3" place="The Main Temple Gate">
                  Where the goddess of fortune's procession arrives and her maidservants confront the Lord's servants.
                </LilaSthaliCard>
              </div>
            </section>

            <SectionHeading id="kings-command">The King's Command</SectionHeading>
            <p className="mb-4 leading-relaxed text-[#3D1A00]/90">
              As the day of Hera Panchami drew near, King Pratapa Rudra spoke with great attention
              to Kashi Mishra, determined that the festival be celebrated as never before.
            </p>
            <VerseBlock number="TEXT 106-108">
              Knowing that the Herā-pañcamī festival was drawing near, King Pratāparudra
              attentively talked with Kāśī Miśra. "Tomorrow will be the function of Herā-pañcamī or Lakṣmī-vijaya. Hold this
              festival in a way that it has never been held before. Hold this festival in such a gorgeous way that upon
              seeing it, Caitanya Mahāprabhu will be completely pleased and astonished."
            </VerseBlock>
            <p className="mb-4 leading-relaxed text-[#3D1A00]/90">
              The King's instructions were lavish and precise — nothing was to be spared from the
              royal and temple storehouses.
            </p>
            <VerseBlock number="TEXT 109-112">
              "Take as many printed cloths, small bells, umbrellas and cāmaras as there are in
              my storehouse and in the Deity's storehouse. Collect all kinds of small and large flags and ringing bells. Then decorate the
              carrier and have various musical and dancing parties accompany it. In this way
              decorate the carrier attractively. You should also double the quantity of prasāda. Make so much that it will even
              surpass the Ratha-yātrā festival. Arrange the festival in such a way that Śrī Caitanya Mahāprabhu may freely go
              with His devotees to visit the Deity without difficulty."
            </VerseBlock>

            <SectionHeading id="mahaprabhu-returns">Mahaprabhu Returns for the Festival</SectionHeading>
            <p className="mb-4 leading-relaxed text-[#3D1A00]/90">
              That morning, Sri Chaitanya Mahaprabhu had first gone with His personal associates to
              see Lord Jagannath at Sundarachala. He then returned to Nilachala with great
              eagerness, specifically to witness the Hera Panchami festival unfold at the main
              temple.
            </p>
            <VerseBlock number="TEXT 113-115">
              In the morning, Śrī Caitanya Mahāprabhu took His personal associates with Him to see
              Lord Jagannātha at Sundarācala. Śrī Caitanya Mahāprabhu and His personal devotees returned to Nīlācala with great
              eagerness to see the Herā-pañcamī festival. Kāśī Miśra received Caitanya Mahāprabhu with great respect, and taking the Lord and
              His associates to a very nice place, he had them seated.
            </VerseBlock>
            <p className="leading-relaxed text-[#3D1A00]/90">
              Once seated, Mahaprabhu's mood turned reflective. Smiling mildly, He wished to hear
              about a particular mellow of devotional service, and began to question His most
              intimate associate, Svarupa Damodara Gosvami.
            </p>

            <SectionHeading id="confidential-question">A Confidential Question</SectionHeading>
            <VerseBlock number="TEXT 116-118">
              After taking His seat, Śrī Caitanya Mahāprabhu wanted to hear about a particular
              mellow of devotional service; therefore, mildly smiling, He began to question Svarūpa
              Dāmodara. "Although Lord Jagannātha enjoys His pastimes at Dvārakā-dhāma and naturally
              manifests sublime liberality there, still, once a year, He becomes unlimitedly eager
              to see Vṛndāvana."
            </VerseBlock>
            <p className="mb-4 leading-relaxed text-[#3D1A00]/90">
              Gesturing toward the gardens surrounding the temple, Mahaprabhu pointed out something
              striking — these gardens were, to His eye, indistinguishable from Vrindavana itself.
            </p>
            <VerseBlock number="TEXT 119-121">
              Pointing out the neighboring gardens, Śrī Caitanya Mahāprabhu said, "All these
              gardens exactly resemble Vṛndāvana; therefore Lord Jagannātha is very eager to see
              them again. Externally He gives the excuse that He wants to participate in the
              Ratha-yātrā festival, but actually He wants to leave Jagannātha Purī to go to
              Sundarācala, Guṇḍicā temple, the replica of Vṛndāvana. The Lord enjoys His pastimes day and night in various flower gardens there.
              But why did He not take Lakṣmīdevī, the goddess of fortune, with Him?"
            </VerseBlock>
            <PrabhupadaQuote>
              Externally He gives the excuse that He wants to participate in the
              Ratha-yātrā festival, but actually He wants to... go to Sundarācala,
              Guṇḍicā temple, the replica of Vṛndāvana.
            </PrabhupadaQuote>

            <SectionHeading id="why-lakshmi-is-left-behind">Why the Goddess of Fortune Is Left Behind</SectionHeading>
            <p className="mb-4 leading-relaxed text-[#3D1A00]/90">
              Svarupa Damodara's answer goes to the very heart of Gaudiya Vaishnava theology — the
              distinction between the reverential opulence of Dvaraka and Vaikuntha, and the
              unconditional, confidential love found only in Vrindavana.
            </p>
            <VerseBlock number="TEXT 122-123">
              Svarūpa Dāmodara replied, "My dear Lord, please hear the reason for this.
              Lakṣmīdevī, the goddess of fortune, cannot be admitted to the pastimes of
              Vṛndāvana. In the pastimes of Vṛndāvana, the only assistants are the gopīs. But for the
              gopīs, no one can attract the mind of Kṛṣṇa."
            </VerseBlock>
            <p className="mb-4 leading-relaxed text-[#3D1A00]/90">
              Mahaprabhu continued the exchange, noting how Krishna uses the Ratha Yatra itself as a
              cover for these confidential pastimes.
            </p>
            <VerseBlock number="TEXT 124-127">
              The Lord said, "Using the car festival as an excuse, Kṛṣṇa goes there with
              Subhadrā and Baladeva. All the pastimes with the gopīs that take place in those gardens are very
              confidential ecstasies of Lord Kṛṣṇa. No one knows them. Since there is no fault at all in Kṛṣṇa's pastimes, why does the goddess of
              fortune become angry?" Svarūpa Dāmodara replied, "It is the nature of a girl afflicted by love to
              become immediately angry upon finding neglect on the part of her lover."
            </VerseBlock>
            <p className="leading-relaxed text-[#3D1A00]/90">
              In other words, Lakshmidevi's anger is not a flaw in Krishna's pastimes — it is itself
              an ornament of love, the natural response of a beloved who senses she has been kept
              apart from something intimate, even without knowing exactly what.
            </p>

            <SectionHeading id="the-procession">The Grand Procession Arrives</SectionHeading>
            <p className="mb-4 leading-relaxed text-[#3D1A00]/90">
              As this conversation unfolded, the procession of the goddess of fortune itself came
              into view — an extraordinary display of royal opulence befitting Lakshmidevi's
              position.
            </p>
            
            <div className="gp-image-container mt-12 mb-8">
              <img
                src="/assets/blog/hera-panchami/goddess_lakshmi_chariot.png"
                alt="Goddess Lakshmi approaching Nandighosha Chariot"
                className="gp-image rounded-xl shadow-lg border border-[#C9A84C]/20"
              />
              <span className="gp-image-caption">Goddess Lakshmi approaching Nandighosha Chariot</span>
            </div>

            <VerseBlock number="TEXT 128-131">
              While Svarūpa Dāmodara and Śrī Caitanya Mahāprabhu were talking, the procession of the
              goddess of fortune came by. She was riding upon a golden palanquin carried by four
              men and bedecked with a variety of jewels. The palanquin was also surrounded by people carrying umbrellas, cāmara whisks and
              flags, and it was preceded by musicians and dancing girls. The maidservants were carrying water pitchers, cāmara whisks and boxes for betel
              nuts. There were hundreds of maidservants, all attractively dressed with valuable
              necklaces. In an angry mood, the goddess of fortune arrived at the main gate of the temple
              accompanied by many members of her family, all of whom exhibited uncommon opulence.
            </VerseBlock>

            <SectionHeading id="the-arrest">The Arrest of the Lord's Servants</SectionHeading>
            <p className="mb-4 leading-relaxed text-[#3D1A00]/90">
              What followed was a scene equal parts theater and theology. Lakshmidevi's maidservants
              treated Lord Jagannath's own principal servants as errant thieves, binding them and
              forcing them before their mistress.
            </p>
            <VerseBlock number="TEXT 132-135">
              When the procession arrived, the maidservants of the goddess of fortune began to
              arrest all the principal servants of Lord Jagannātha. The maidservants bound the servants of Jagannātha, handcuffed them, and made them
              fall down at the lotus feet of the goddess of fortune. Indeed, they were arrested just
              like thieves who have all their riches taken away. When the servants fall down before the lotus feet of the goddess of fortune, they
              almost fall unconscious. They are chastised and made the butt of jokes and loose
              language. When Śrī Caitanya Mahāprabhu's associates saw such impudence exhibited by the
              maidservants of the goddess of fortune, they covered their faces with their hands and
              began to smile.
            </VerseBlock>

            <SectionHeading id="divine-jealousy">Svarupa Damodara on Divine Jealousy</SectionHeading>
            <p className="mb-4 leading-relaxed text-[#3D1A00]/90">
              Svarupa Damodara Gosvami then offered a comparison that places Lakshmidevi's pride in
              a category entirely her own — distinct even from the celebrated jealous moods of
              Satyabhama and the gopis of Vrindavana.
            </p>
            <VerseBlock number="TEXT 136-139">
              Svarūpa Dāmodara said, "There is no egoistic pride like this within the three
              worlds. At least I have neither seen nor heard of it. When a woman is neglected and disappointed, out of egoistic pride she gives up
              her ornaments and morosely sits down on the floor, marking lines on it with her
              nails. I have heard of this kind of pride in Satyabhāmā, Kṛṣṇa's proudest Queen, and I
              have also heard of it in the gopīs of Vṛndāvana, who are the reservoirs of all
              transcendental mellows. But in the case of the goddess of fortune, I see a different kind of pride. She
              manifests her own opulences and even goes with her soldiers to attack her
              husband."
            </VerseBlock>
            <PrabhupadaQuote>
              But in the case of the goddess of fortune, I see a different kind of pride. She
              manifests her own opulences and even goes with her soldiers to attack her husband.
            </PrabhupadaQuote>

            <SectionHeading id="significance">Spiritual Significance for Devotees</SectionHeading>
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

            <SectionHeading id="faq">Frequently Asked Questions</SectionHeading>
            <div className="space-y-4">
              <FaqItem question="What is Hera Panchami?">
                Hera Panchami, also called Lakshmi Vijaya, is observed on the fifth day after
                Ratha Yatra begins. It commemorates Srimati Lakshmidevi setting out in grand
                procession to confront Lord Jagannath for leaving her behind in Puri.
              </FaqItem>
              <FaqItem question="Why does the goddess of fortune become angry at Lord Jagannath?">
                Lord Jagannath leaves for Sundarachala under the pretext of Ratha Yatra, but His
                deeper purpose is to relish the confidential pastimes of Vrindavana with the
                gopis. As Lakshmidevi cannot enter these pastimes, she feels neglected and, out of
                intense love, becomes indignant.
              </FaqItem>
              <FaqItem question="Why can Lakshmidevi not take part in the pastimes of Vrindavana?">
                Svarupa Damodara Gosvami explains that only the gopis can attract Krishna's mind
                in the intimate pastimes of Vrindavana. Lakshmidevi worships Krishna in awe and
                reverence as the goddess of fortune, and this mood does not have access to the
                most confidential, unconditional love found among the gopis.
              </FaqItem>
              <FaqItem question="What happens during the Hera Panchami procession?">
                Lakshmidevi's palanquin, escorted by hundreds of maidservants, musicians and
                dancers, arrives at the main gate of the Jagannath Temple. Her maidservants seize
                and bind the principal servants of Lord Jagannath before the procession returns.
              </FaqItem>
            </div>

            <p className="mt-14 border-t border-[#C9A84C]/30 pt-6 text-sm italic text-[#3D1A00]/70 pb-8">
              Source: Sri Chaitanya Charitamrita, Madhya-lila, Chapter 14, Texts 106&ndash;139, by His
              Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada.
            </p>

            {/* Added standard "Connect with us" / "Visit Daksina Dvaraka Dham" section */}
            <div className="mt-16 rounded-2xl bg-[#FDF6E3] border border-[#C9A84C]/20 p-8 sm:p-10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                </div>
                
                <h3 className="text-xl font-serif text-[#3D1A00] font-semibold text-center mb-2">
                    Visit Daksina Dvaraka Dham, Chennai
                </h3>
                <p className="text-center font-bold text-[#C9A84C] text-sm tracking-wide uppercase mb-6">
                    ISKCON Thiruvanmiyur, Chennai
                </p>
                <p className="text-center text-[#3D1A00]/80 italic mb-8 max-w-lg mx-auto text-base sm:text-lg">
                    Join us for daily Srimad-Bhagavatam classes, sankirtana and deity darsana
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-12 w-full">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base font-semibold text-[#3D1A00]/90 w-full max-w-2xl mx-auto">
                        <li className="bg-white px-4 py-4 rounded-xl border border-[#C9A84C]/30 shadow-sm flex items-center justify-center text-center hover:border-[#C9A84C] transition-colors leading-tight">Morning Arati 4:30 AM</li>
                        <li className="bg-white px-4 py-4 rounded-xl border border-[#C9A84C]/30 shadow-sm flex items-center justify-center text-center hover:border-[#C9A84C] transition-colors leading-tight">Bhagavatam Class 8.05 AM</li>
                        <li className="bg-white px-4 py-4 rounded-xl border border-[#C9A84C]/30 shadow-sm flex items-center justify-center text-center hover:border-[#C9A84C] transition-colors leading-tight">Evening Arati 7:00 PM</li>
                        <li className="bg-white px-4 py-4 rounded-xl border border-[#C9A84C]/30 shadow-sm flex items-center justify-center text-center hover:border-[#C9A84C] transition-colors leading-tight">Harinaam sankirtan 7.35 AM</li>
                    </ul>
                </div>

                </div>
                <BlogConnectSection />
            </div>

          </div>
        </article>
        <Footer />
      </main>
  );
};

export default BlogClient;
