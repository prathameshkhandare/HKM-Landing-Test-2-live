"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import "./styles.css";

// ── CONSTANTS ─────────────────────────────────────────────────────────────────
const TEMPLE_SHORT = "ISKCON Thiruvanmiyur";
const TEMPLE_FULL =
  "ISKCON Thiruvanmiyur (Hare Krishna Movement Chennai \u2014 Affiliated to ISKCON Bangalore Regn. S-49/78-79)";
const PRABHUPADA_FULL =
  "His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhup\u0101da";

const socialLinks = [
  { icon: "\uD83C\uDF0D", label: "Website",          display: "hkmchennai.org",                   href: "https://hkmchennai.org/" },
  { icon: "\uD83D\uDCF8", label: "Instagram",        display: "@hkm_chennai",                     href: "https://www.instagram.com/hkm_chennai" },
  { icon: "\uD83D\uDC4D", label: "Facebook",         display: "Hare Krishna Movement Chennai",    href: "https://www.facebook.com/hkmcworld/" },
  { icon: "\uD83D\uDC26", label: "Twitter / X",      display: "@ChennaiHare",                     href: "https://x.com/ChennaiHare" },
  { icon: "\uD83D\uDCBC", label: "LinkedIn",         display: "HKM Chennai",                      href: "https://www.linkedin.com/company/hare-krishna-movement-chennai?originalSubdomain=in" },
  { icon: "\uD83D\uDCF2", label: "WhatsApp",         display: "Join our WhatsApp Channel",        href: "https://www.whatsapp.com/channel/0029Vaa2fjKEVccFHx5YDt1O" },
  { icon: "\uD83D\uDE4F", label: "Support",          display: "Dakshina Dwaraka Dham Campaign",   href: "https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign" },
  { icon: "\uD83D\uDCCD", label: "Google Maps",      display: "Click here for directions",        href: "https://maps.app.goo.gl/o2m98vJQHQjUHHDy6" },
];

const faqs = [
  {
    q: "What is R\u0101ma Nav\u0101m\u012b and why is it celebrated?",
    a: "R\u0101ma Nav\u0101m\u012b is the appearance day of Lord R\u0101macandra \u2014 the Supreme Personality of Godhead who descended to earth during the Tret\u0101-yuga to demonstrate the perfect example of dharmic life. It falls on the ninth day of the waxing moon in the month of Chaitra (March\u2013April). Devotees observe it through fasting till sunset, chanting, hearing the R\u0101m\u0101ya\u1e47a, and visiting temples to take dar\u015bana of Lord R\u0101macandra.",
  },
  {
    q: "Is Lord R\u0101ma the same as Lord K\u1e5b\u1e63\u1e47a?",
    a: "According to Vedic scripture \u2014 specifically the Brahma-sa\u1e43hit\u0101 (5.39) and \u015ar\u012bmad-Bh\u0101gavatam (1.3.28) \u2014 Lord R\u0101macandra is an expansion of Lord K\u1e5b\u1e63\u1e47a, the original Supreme Person. Just as one candle can light many others without losing its own flame, K\u1e5b\u1e63\u1e47a expands into countless divine forms \u2014 all equally powerful, all equally divine. Lord R\u0101ma is not a lesser God; He is God Himself in a different form, appearing for a specific purpose.",
  },
  {
    q: "Are there any R\u0101ma Nav\u0101m\u012b or Krishna consciousness programs near me in Chennai?",
    a: `Yes \u2014 ${TEMPLE_SHORT} celebrates R\u0101ma Nav\u0101m\u012b with special programs including kirtan, Bh\u0101gavatam discourses, and pras\u0101dam distribution. Our daily program begins at 4:30\u00a0AM with Ma\u1e45gala-\u0101rati, and our \u015ar\u012bmad-Bh\u0101gavatam class is held every morning at 8:00\u00a0AM. Sunday classes begin at 10:00\u00a0AM. All are welcome.`,
  },
  {
    q: "How should I observe R\u0101ma Nav\u0101m\u012b at home?",
    a: "The most powerful practice is to chant the Hare K\u1e5b\u1e63\u1e47a mah\u0101-mantra \u2014 which includes the holy name of R\u0101ma \u2014 throughout the day. Observing a fast till sunset, reading or hearing the R\u0101m\u0101ya\u1e47a, and offering simple prayers to Lord R\u0101macandra are all auspicious. If possible, visit a temple for dar\u015bana and hear the Lord\u2019s glories in the association of devotees.",
  },
  {
    q: "Where can I learn more about Lord R\u0101macandra and the Vedic scriptures?",
    a: `You can visit our temple at ${TEMPLE_SHORT} to attend daily classes and receive a copy of \u015ar\u012bmad-Bh\u0101gavatam or Bhagavad-g\u012bt\u0101 As It Is by \u015ar\u012bla Prabhup\u0101da. These editions provide the original Sanskrit, word-for-word meanings, and \u015ar\u012bla Prabhup\u0101da\u2019s own purports that bring the scriptural message to life.`,
  },
];

// ── SUB-COMPONENTS ────────────────────────────────────────────────────────────

function Divider() {
  return (
    <div className="rn-divider" aria-hidden="true">
      <span>✦</span>
    </div>
  );
}

function SanskritVerse({ lines, translation, citation }: { lines: string[], translation: string, citation: string }) {
  return (
    <div className="rn-verse">
      <div className="rn-verse-skt">
        {lines.map((l, i) => <p key={i}>{l}</p>)}
      </div>
      <blockquote className="rn-verse-trans">
        <p>&ldquo;{translation}&rdquo; <cite>({citation})</cite></p>
      </blockquote>
    </div>
  );
}

function PullQuote({ quote, attribution }: { quote: string, attribution: string }) {
  return (
    <div className="rn-pq">
      <span className="rn-pq-mark">&ldquo;</span>
      <p>{quote}</p>
      <span className="rn-pq-mark rn-pq-mark--r">&rdquo;</span>
      <p className="rn-pq-attr">&mdash; {attribution}</p>
    </div>
  );
}

function TempleNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rn-tnote">
      <span className="rn-tnote-icon">📍</span>
      <p>{children}</p>
    </div>
  );
}

function SectionHeading({ num, title }: { num: string, title: string }) {
  return (
    <h2 className="rn-sh">
      <span className="rn-sh-num">{num}</span>
      {title}
    </h2>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function RamaNavamiBlogPage() {
  return (
    <main className="min-h-screen bg-[#FDFAF3] selection:bg-[#E8650A] selection:text-white">
      <Navbar />
      <article className="rn-page">

        {/* ── HERO ── */}
        <header className="rn-hero">
          <p className="rn-hero-temple">\uD83D\uDED5  {TEMPLE_SHORT}</p>
          <p className="rn-hero-reg">{TEMPLE_FULL}</p>
          <div className="rn-hero-line" />
          <p className="rn-hero-festival">~ Śrī Rāma-Navamī Special ~</p>
          <h1 className="rn-hero-title">
            Rāma Navamī:<br />
            <span>The Appearance Day of Lord Rāmacandra</span>
          </h1>
          <p className="rn-hero-sub">and What It Means for Your Life</p>
          <div className="rn-hero-line" />
          <p className="rn-hero-byline">
            Based on lectures delivered by<br />
            <strong>{PRABHUPADA_FULL}</strong><br />
            Founder-Ācārya of the International Society for Krishna Consciousness (ISKCON)<br />
            <span style={{ fontSize: "10px", color: "#4A3A18" }}>
              Hawaii, March 27, 1969 &bull; Bombay, April 1, 1974
            </span>
          </p>
        </header>


        <div className="rn-body">

          {/* ── INTRODUCTION ── */}
          <section className="rn-intro">
            <p>
              Every year, on the ninth day of the waxing moon in the month of Chaitra, millions
              of people across the world observe Rāma Navamī &mdash; the appearance day of Lord
              Rāmacandra. Temples ring with kirtan. Devotees fast. The name of Rāma fills the air.
            </p>
            <p>
              But let us ask ourselves honestly: do we know <em>why</em> we celebrate? Do we
              understand <em>who</em> Lord Rāmacandra truly is &mdash; not merely as a historical
              king, not merely as the hero of the Rāmāyaṇa &mdash; but as the Supreme Personality
              of Godhead Himself, appearing on this earth to show us the perfect example of how a
              soul should live?
            </p>
            <p>
              Today, on this most auspicious occasion, let us sit together &mdash; as Śrīla
              Prabhupāda once sat with his students in Hawaii and Bombay &mdash; and hear the story
              of Lord Rāmacandra. Because as Śrīla Prabhupāda himself said: <em>&ldquo;If we hear
              His transcendental pastimes, that means we are associating with Rāmacandra.&rdquo;</em>
            </p>
          </section>

          <Divider />

          {/* ── SECTION 1 ── */}
          <SectionHeading num="1" title="Who Is Lord Rāmacandra? The Candle That Never Dims" />

          <p className="rn-p">
            Before we tell the story, we must understand the philosophy. Otherwise we will treat
            the Rāmāyaṇa as mythology, as poetry, as entertainment &mdash; and miss the entire point.
          </p>
          <p className="rn-p">In the Brahma-saṁhitā, the great scripture of Brahmā himself, it is declared:</p>

          <SanskritVerse
            lines={[
              "rāmādi-mūrtiṣu kalā-niyamena tiṣṭhan",
              "nānāvatāram akarod bhuvaneṣu kintu",
              "kṛṣṇaḥ svayaṁ samabhavat paramaḥ pumān yo",
              "govindam ādi-puruṣaṁ tam ahaṁ bhajāmi",
            ]}
            translation="I worship Govinda, the primeval Lord, who is Kṛṣṇa Himself — the Supreme Person — who expands Himself as Lord Rāma and many other incarnations, according to the requirements of time and circumstance, and who appeared personally in this universe."
            citation="Brahma-saṁhitā 5.39"
          />

          <p className="rn-p">
            Śrīla Prabhupāda explains this with a simple but perfect example. Think of a candle.
            You light one candle, and from that candle you light a second, a third, a fourth.
            Now &mdash; are all these candles of different power? No. Each candle burns with the
            same flame. The original candle and the tenth candle give the same light.
          </p>

          <PullQuote
            quote="All the expansions of Kṛṣṇa are of the same potency, same power. The difference is that one you can call the original candle and the others the second, the third. But so far the candle's power is concerned — there is no difference."
            attribution="Śrīla Prabhupāda, Bombay, 1974"
          />

          <p className="rn-p">
            Kṛṣṇa is the original candle &mdash; the ādi-puruṣa, the original person. Lord
            Rāmacandra is His expansion &mdash; complete, perfect, fully divine. As the
            Śrīmad-Bhāgavatam confirms:
          </p>

          <SanskritVerse
            lines={["ete cāṁśa-kalāḥ puṁsaḥ kṛṣṇas tu bhagavān svayam"]}
            translation="All these are either plenary portions or portions of the plenary portions of the Lord, but Kṛṣṇa is the Supreme Personality of Godhead Himself."
            citation="Śrīmad-Bhāgavatam 1.3.28"
          />

          <p className="rn-p">
            This is the correct understanding as given by the Vedic scriptures. We do not say
            Lord Rāma is less than Kṛṣṇa. We say Lord Rāma <em>is</em> God &mdash; the same
            Supreme Lord, appearing in a different form, at a different time, for a different
            purpose. And that purpose was to show the world what a perfect king, a perfect
            husband, a perfect son, and a perfect soul looks like.
          </p>

          <Divider />

          {/* ── SECTION 2 ── */}
          <SectionHeading num="2" title="When Did Lord Rāmacandra Appear — and Where?" />

          <p className="rn-p">
            Lord Rāmacandra appeared in Ayodhyā &mdash; a city in northern India, approximately
            five hundred miles northeast of New Delhi. He appeared in the Tretā-yuga, an age that
            ended more than two million years ago. His father was the great King Daśaratha, one of
            the most celebrated monarchs of the solar dynasty, tracing his lineage all the way back
            to Mahārāja Ikṣvāku, the son of Manu.
          </p>
          <p className="rn-p">
            Today &mdash; Rāma Navamī &mdash; marks the ninth day of the moon on which this
            extraordinary event took place. The Supreme Lord descended from the spiritual world
            and took birth as the son of Kauśalyā, the eldest queen of Daśaratha. He was named
            Rāmacandra &mdash; Rāma, the reservoir of all pleasure, and Candra, as brilliant and
            cooling as the moon.
          </p>
          <p className="rn-p">And from the very first day of His life, He came to teach us something.</p>

          <Divider />

          {/* ── SECTION 3 ── */}
          <SectionHeading num="3" title='What Does "Rāma-Rājya" Mean — and Why Does the World Need It Today?' />

          <p className="rn-p">
            There is a phrase in India that has survived for thousands of years: <em>Rāma-rājya</em>
            &mdash; the kingdom of Rāma. Whenever people dream of a just society, a peaceful nation,
            a government that truly serves its people &mdash; they say: <em>&ldquo;We want
            Rāma-rājya.&rdquo;</em>
          </p>
          <p className="rn-p">
            Śrīla Prabhupāda tells a remarkable story. Once, during the reign of Lord Rāmacandra,
            a citizen came to the king&rsquo;s open court and said: <em>&ldquo;My dear king, my son
            has died. How is it that in the presence of his father, a son can die? There must be
            something wrong in Your government.&rdquo;</em>
          </p>
          <p className="rn-p">
            Let us pause and understand what is being said. This man was not complaining about taxes
            or roads. He was charging the king with <em>responsibility for the untimely death of his
            child.</em> And the king &mdash; Lord Rāmacandra &mdash; took that complaint seriously.
          </p>

          <PullQuote
            quote="The kings were so much responsible. They were always thinking of the happiness of the citizens — and the citizens were also so nice."
            attribution="Śrīla Prabhupāda, Hawaii, 1969"
          />

          <p className="rn-p">
            And the citizens? Śrīla Prabhupāda tells us of a brāhmaṇa who would not eat a single
            morsel until he had taken <em>darśana</em> of Lord Rāmacandra each morning. When the
            Lord went on a tour for a fortnight, this brāhmaṇa did not eat for the entire duration
            &mdash; not a drop of water &mdash; simply because he could not see his king, his God,
            his beloved Lord.
          </p>
          <p className="rn-p">
            This is Rāma-rājya. Not merely good administration &mdash; but a civilization where
            both the ruler and the ruled are God-conscious. Where every relationship &mdash; between
            king and subject, husband and wife, father and son, brother and brother &mdash; is rooted
            in dharma, in duty, in divine love. Is it any wonder the world still longs for this?
          </p>

          <Divider />

          {/* ── SECTION 4 ── */}
          <SectionHeading num="4" title="The Test of a Great Soul — Renunciation and Obedience" />

          <p className="rn-p">
            Of all the stories in the Rāmāyaṇa, none is more moving &mdash; and more instructive
            &mdash; than the story of Lord Rāmacandra&rsquo;s exile.
          </p>
          <p className="rn-p">
            One day before His coronation as king of Ayodhyā, His stepmother Kaikeyī reminded King
            Daśaratha of an old promise. Her demand was extraordinary: Lord Rāmacandra must be exiled
            to the forest for fourteen years. Her own son Bharata must be crowned instead.
          </p>
          <p className="rn-p">
            Daśaratha was shattered. But he was a kṣatriya &mdash; a man of his word. So with a
            heart full of grief, he called his son. And what did Lord Rāmacandra say?
          </p>

          <p className="rn-drama-quote">&ldquo;Yes, father. I am ready.&rdquo;</p>

          <p className="rn-p">
            No argument. No protest. No anger. The entire kingdom was waiting for His coronation
            &mdash; decorations had been hung, citizens had gathered &mdash; and He simply said:
            <em> Yes, father. I am ready.</em>
          </p>
          <p className="rn-p">
            Śrīla Prabhupāda identifies this as the display of one of the six great opulences of
            the Supreme Lord. In the Viṣṇu Purāṇa it is described:
          </p>

          <SanskritVerse
            lines={[
              "aiśvaryasya samāgrasya vīryasya yaśasaḥ śriyaḥ",
              "jñāna-vairāgyayoś caiva ṣaṇṇāṁ bhāgam itīṅganā",
            ]}
            translation="Complete wealth, strength, fame, beauty, knowledge, and renunciation — these six are the opulences of the Supreme Lord."
            citation="Viṣṇu Purāṇa 6.5.47"
          />

          <PullQuote
            quote="Rāmacandra exhibited the quality of renunciation — He renounced the whole kingdom simply on the order of His father. Out of the six opulences of God, this is one quality."
            attribution="Śrīla Prabhupāda, Hawaii, 1969"
          />

          <p className="rn-p">
            This is not the renunciation of a defeated man. This is the voluntary, joyful surrender
            of the Supreme Lord &mdash; demonstrating for all time that obedience, acceptance of
            God&rsquo;s will, and detachment from material position are the highest qualities a soul
            can cultivate.
          </p>

          <Divider />

          {/* ── SECTION 5 ── */}
          <SectionHeading num="5" title="Sītā Devī — The Ideal of Devotion and Loyalty" />

          <p className="rn-p">
            When Lord Rāmacandra prepared to leave for the forest, He turned to His young bride
            Sītā Devī and said: <em>&ldquo;You cannot come. The forest is harsh. You are a
            king&rsquo;s daughter, raised in comfort. Stay here.&rdquo;</em>
          </p>
          <p className="rn-p">Sītā&rsquo;s reply has echoed through the ages:</p>

          <p className="rn-drama-quote">&ldquo;I am Your wife. I must go &mdash; even if You go to hell.&rdquo;</p>

          <p className="rn-p">
            And so she went. Into the forest. Into hardship. Into danger. Because she understood
            a truth our modern world has largely forgotten: devotion does not choose its circumstances.
          </p>
          <p className="rn-p">
            And when Rāvaṇa &mdash; the demon king of Laṅkā &mdash; kidnapped Sītā through deceit,
            Lord Rāmacandra&rsquo;s response was equally absolute. He was in exile &mdash; ordered
            to live in the forest &mdash; and He would not break that order. Instead, He built an
            alliance with the forest animals &mdash; the monkeys led by Hanumān and Sugrīva. He
            constructed a bridge of floating stones across the ocean to Laṅkā. And He fought and
            defeated Rāvaṇa with an army of monkeys.
          </p>
          <p className="rn-p">Why monkeys? Because the Lord does not depend on material power. He depends on <em>devotion.</em></p>

          <PullQuote
            quote="For Sītā, Lord Rāmacandra massacred the whole family of Rāvaṇa. The wife was so faithful she could not remain alone. And the husband was so faithful — He massacred the whole family of Rāvaṇa."
            attribution="Śrīla Prabhupāda, Hawaii, 1969"
          />

          <Divider />

          {/* ── SECTION 6 ── */}
          <SectionHeading num="6" title="How Do We Observe Rāma Navamī? The Power of Hearing and Chanting" />

          <p className="rn-p">
            We have now heard a portion of the story of Lord Rāmacandra. But we must ask: what is
            the <em>purpose</em> of hearing it? Why do we fast? Why do we chant? Why do we come to
            the temple on this day?
          </p>
          <p className="rn-p">Śrīla Prabhupāda answers this with perfect clarity:</p>

          <div className="rn-sp-quote">
            &ldquo;Rāmacandra&rsquo;s life, God&rsquo;s activities, pastimes &mdash; if we hear,
            that means we are associating with Rāmacandra. There is no difference between His form,
            His name, His pastimes, and Himself. He is absolute. Therefore either you chant the holy
            name of Rāma, or you see the statue of Rāma, or you talk of His transcendental pastimes
            &mdash; everything means you are associating with the Supreme Personality of Godhead.&rdquo;
          </div>

          <p className="rn-p">
            This is the unique gift of Vedic philosophy. God is <em>absolute</em> &mdash; meaning
            there is no difference between Him and His name, His form, His activities. When we chant
            Hare Rāma, we are not merely repeating a word. We are <em>touching</em> the Supreme
            Lord. As the Śrīmad-Bhāgavatam says:
          </p>

          <SanskritVerse
            lines={[
              "śṛṇvatāṁ sva-kathāḥ kṛṣṇaḥ puṇya-śravaṇa-kīrtanaḥ",
              "hṛdy antaḥ-stho hy abhadrāṇi vidhunoti suhṛt satām",
            ]}
            translation="Lord Kṛṣṇa — who dwells in the heart of every living being as the Supersoul — cleanses the desire for material enjoyment from the heart of the devotee who relishes hearing His messages, which are in themselves virtuous when properly heard and chanted."
            citation="Śrīmad-Bhāgavatam 1.2.17"
          />

          <p className="rn-p">
            This is why we observe Rāma Navamī. Not as a ritual. Not as a cultural tradition. But
            as a direct opportunity to associate with the Supreme Lord. Every moment we spend hearing
            about Lord Rāmacandra today, our heart becomes a little cleaner, our consciousness a
            little purer, our life a little more purposeful.
          </p>

          <Divider />

          {/* ── SECTION 7 ── */}
          <SectionHeading num="7" title="What Can We Learn from Lord Rāma for Our Daily Life?" />

          <p className="rn-p">
            The story of Lord Rāmacandra is not an ancient tale for museum shelves. It is a living
            instruction manual for every soul who wishes to walk with dignity and purpose.
          </p>

          <div className="rn-lesson-bullets">
            {[
              ["On duty:", "Lord Rāmacandra accepted fourteen years of forest exile without a single word of protest. The Lord shows us that a noble soul accepts prescribed duty without complaint, performs it perfectly, and leaves the result in God\u2019s hands."],
              ["On loyalty:", "S\u012bt\u0101 Dev\u012b did not abandon her husband when life became difficult. Lak\u1e63ma\u1e47a did not stay behind in comfort. Han\u016bm\u0101n crossed an ocean out of pure devotion. In an age where relationships break at the first sign of inconvenience, Lord R\u0101ma\u2019s world shows us what real loyalty and real love look like."],
              ["On leadership:", "Lord R\u0101ma held open court. Any citizen could approach the king directly. He took personal responsibility for the welfare of every soul in his kingdom. He is the eternal standard of a righteous ruler."],
              ["On God consciousness:", "The br\u0101hma\u1e47a who would not eat until he had seen Lord R\u0101macandra each morning \u2014 this is the level of God consciousness to which we are all being invited. Not fanaticism. Not superstition. But a deep, personal, daily relationship with the Supreme Lord."],
            ].map(([bold, rest], i) => (
              <div key={i} className="rn-lb">
                <div className="rn-lb-dot" />
                <p><strong>{bold}</strong> {rest}</p>
              </div>
            ))}
          </div>

          <Divider />

          {/* ── HOW TO OBSERVE ── */}
          <div className="rn-hto">
            <h2>How to Observe Rāma Navamī Today</h2>
            <p style={{ marginBottom: "1.25rem", fontSize: "15px" }}>
              We do not need to change our lives overnight. We simply need to take one step forward:
            </p>
            <div className="rn-hto-items">
              {[
                ["♪", "Chant:", "Today, add the Hare Rāma mahā-mantra to your chanting — Hare Kṛṣṇa, Hare Kṛṣṇa, Kṛṣṇa Kṛṣṇa, Hare Hare / Hare Rāma, Hare Rāma, Rāma Rāma, Hare Hare. There is no cost. There is no loss. Only purification."],
                ["✦", "Hear:", "Read or listen to the Rāmāyaṇa — or simply sit with this article and let the story of Lord Rāmacandra enter your heart. Hearing is direct association with God."],
                ["☽", "Fast:", "Observe a fast on Rāma Navamī — ideally till sunset. Even a partial fast is auspicious and pleasing to the Lord."],
                ["\uD83D\uDED5", "Visit:", `We warmly invite you to join us at ${TEMPLE_SHORT}, Chennai for our Rāma Navamī celebrations.`],
              ].map(([icon, bold, text], i) => (
                <div key={i} className="rn-hto-item">
                  <div className="rn-hto-icon">{icon}</div>
                  <p><strong>{bold}</strong> {text}</p>
                </div>
              ))}
            </div>
          </div>

          <TempleNote>
            Our daily program begins every morning at 4:30 AM with Maṅgala-ārati. Come and take
            darśana of Lord Rāmacandra, hear His glories in our Śrīmad-Bhāgavatam class at
            8:00 AM, and relish Kṛṣṇa Prasādam &mdash; food offered with love and devotion to
            the Lord. Taste it once, and you will understand what no philosophy book can fully
            explain.
          </TempleNote>

          <Divider />

          {/* ── CONCLUSION ── */}
          <section className="rn-concl">
            <h2>Conclusion: The King Who Came for All of Us</h2>
            <p>
              Lord Rāmacandra did not appear on this earth for the people of Ayodhyā alone. He
              appeared for every soul who has ever been confused, who has ever suffered, who has
              ever asked: <em>&ldquo;How should I live? What is the right thing to do? Where is
              God?&rdquo;</em>
            </p>
            <p>
              He came to show us the answer &mdash; not in words, but in His own life. In every
              step He took toward the forest in exile. In every tear Sītā shed in Rāvaṇa&rsquo;s
              captivity. In every stone that floated on the ocean to build His bridge. In every
              moment of the Rāmāyaṇa, the Supreme Lord is teaching us &mdash; patiently, lovingly,
              perfectly &mdash; what it means to live a life rooted in dharma, devotion, and divine love.
            </p>
            <p>
              As Śrīla Prabhupāda said: <em>&ldquo;Our process is purification. Kṛṣṇa
              consciousness means simply we are purifying our consciousness.&rdquo;</em> And on
              this day of Rāma Navamī, the most powerful purification available to us is simply
              this &mdash; to hear His name, to tell His story, and to bow our heads before the
              Supreme Lord Rāmacandra.
            </p>
            <p className="rn-jaya">Śrī Rāma, Jaya Rāma, Jaya Jaya Rāma! 🙏</p>
            <p className="rn-hk">Hare Kṛṣṇa!</p>
          </section>

          <div className="rn-share">
            If this article has moved your heart, please share it with someone who is searching for
            meaning. Sharing the glories of the Lord is itself a form of sevā &mdash; a service to
            God and to humanity.
          </div>

          <Divider />

          {/* ── FAQ ── */}
          <section className="rn-faq">
            <h2>Frequently Asked Questions</h2>
            {faqs.map((f, i) => (
              <div key={i} className="rn-faq-item">
                <p className="rn-faq-q">Q: {f.q}</p>
                <p className="rn-faq-a">A: {f.a}</p>
              </div>
            ))}
          </section>

          <Divider />

          {/* ── CONNECT ── */}
          <section className="rn-conn">
            <h2>🌿 Connect With Us</h2>
            <p className="rn-conn-sub">
              We would love to welcome you to our growing community of seekers. Reach us through
              any of the platforms below or visit us in person.
            </p>
            <div className="rn-conn-grid">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="rn-ci">
                  <span className="rn-ci-emoji">{s.icon}</span>
                  <span>
                    <span className="rn-ci-label">{s.label}</span>
                    <span className="rn-ci-url">{s.display}</span>
                  </span>
                </a>
              ))}
            </div>
            <p className="rn-conn-addr">
              {TEMPLE_FULL}<br />
              <a href="https://maps.app.goo.gl/o2m98vJQHQjUHHDy6" target="_blank" rel="noopener noreferrer">
                🗺️ Open in Google Maps &rarr;
              </a>
            </p>
          </section>

        </div>
      </article>
      <Footer />
    </main>
  );
}
