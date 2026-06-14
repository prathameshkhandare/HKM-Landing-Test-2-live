// app/blog/sita-devi-appearance-day/page.tsx
// Next.js 13/14 App Router — Server Component (no 'use client' needed here)

import type { Metadata } from 'next';
import Image from 'next/image';
import FaqAccordion from './FaqAccordion';
import styles from './SitaDeviBlog.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/FooterSection';

/* ── METADATA (replaces all <meta>, <title>, OG, Twitter tags) ── */
export const metadata: Metadata = {
  title: 'Srimati Sita Devi Appearance Day — Sita Navami | Who Is Mother Sita? | Dakshina Dwaraka Dham',
  description:
    "Celebrate Srimati Sita Devi's Appearance Day (Sita Navami). Discover who Mother Sita is — the divine pleasure potency of the Lord — through the authentic teachings of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, Sanskrit shlokas, and Vaishnava siddhanta.",
  keywords: [
    'Sita Devi appearance day',
    'Sita Navami',
    'Janaki Navami',
    'Srimati Sita Devi',
    'Mother Sita ISKCON',
    'Prabhupada on Sita Devi',
    'Sita Lakshmi expansion',
    'Hare Krishna Sita Navami',
    'who is Sita Devi',
    'Dakshina Dwaraka Dham',
    'Srila Prabhupada\'s ISKCON Thiruvanmiyur',
  ],
  authors: [{ name: 'Hare Krishna Movement Chennai — Dakshina Dwaraka Dham' }],
  alternates: { canonical: 'https://hkmchennai.org/blog/sita-devi-appearance-day' },
  openGraph: {
    type: 'article',
    title: 'Srimati Sita Devi Appearance Day — The Goddess Born of the Earth',
    description:
      "Who is Srimati Sita Devi? On her divine Appearance Day, explore the Vaishnava understanding of Mother Sita through Srila Prabhupada's teachings, Sanskrit shlokas, and devotional siddhanta.",
    url: 'https://hkmchennai.org/blog/sita-devi-appearance-day',
    siteName: 'Dakshina Dwaraka Dham — Srila Prabhupada\'s ISKCON Thiruvanmiyur',
    authors: ['Hare Krishna Movement Chennai'],
    locale: 'en_IN',
    images: [
      {
        url: '/assets/blog/sita-devi-appearance-day/Sita_Rama_and_Lakshman_in_the_Forest.png',
        width: 1200,
        height: 800,
        alt: 'Sri Rama, Sita, and Lakshman in the forest',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ChennaiHare',
    title: 'Srimati Sita Devi Appearance Day — Sita Navami',
    description:
      "Discover who Mother Sita is through Srila Prabhupada's teachings — the hladini-sakti, the ideal consort, the goddess born of the earth.",
  },
};

/* ── JSON-LD STRUCTURED DATA ── */
const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Srimati Sita Devi Appearance Day — The Goddess Born of the Earth',
  description:
    "An authentic exploration of Srimati Sita Devi's divine identity through the teachings of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, on the occasion of her Appearance Day (Sita Navami).",
  author: {
    '@type': 'Organization',
    name: 'Hare Krishna Movement Chennai',
    url: 'https://hkmchennai.org',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Dakshina Dwaraka Dham — Srila Prabhupada\'s ISKCON Thiruvanmiyur',
    logo: { '@type': 'ImageObject', url: 'https://hkmchennai.org/logo.png' },
  },
  keywords: ['Sita Devi', 'Sita Navami', 'Janaki Navami', 'ISKCON', 'Prabhupada', 'Ramayana', 'Vaishnava'],
  inLanguage: 'en-IN',
  about: { '@type': 'Thing', name: 'Srimati Sita Devi' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is Srimati Sita Devi according to Vaishnava scripture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "According to Srila Prabhupada's purport to Srimad-Bhagavatam 9.10.4, Srimati Sita Devi is the goddess of fortune who resides on the chest of the Lord — non-different from Lakshmi Devi and the eternal consort of Lord Ramachandra. She is the internal pleasure energy (hladini-shakti) of the Supreme Lord. The Kurma Purana (quoted in CC Madhya-lila 9.201) declares her the mother of the three worlds and the supreme among chaste women.",
      },
    },
    {
      '@type': 'Question',
      name: 'When is Sita Navami?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sita Navami, also known as Janaki Navami or Srimati Sita Devi\'s Appearance Day, is observed annually on Vaishakha Shukla Navami — the ninth day of the bright fortnight in the month of Vaishakha.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the significance of Sita Navami?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sita Navami commemorates the divine appearance of Srimati Sita Devi, who emerged from the earth as King Janaka ploughed a field in preparation for a yajna. Devotees observe this day by chanting the Hare Krishna maha-mantra, reading Srimad-Bhagavatam Canto 9 Chapter 10, offering flowers at the altar, and observing a partial fast until noon.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Sita Devi and Radha Rani?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "According to Srila Prabhupada's purport to Srimad-Bhagavatam 10.47.60, both Srimati Sita Devi and Srimati Radharani are expansions of the Lord's pleasure potency (hladini-shakti). Sita Devi is the eternal consort of Lord Ramachandra in the Vaikuntha mood of aishvarya. Radharani is the consort of Lord Krishna in the Vraja mood of madhurya.",
      },
    },
    {
      '@type': 'Question',
      name: 'How is Sita Devi connected to Sri Chaitanya Mahaprabhu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'According to the Navadvipa-dhama Mahatmya, when Lord Ramachandra passed through Navadvipa in Treta-yuga, He revealed to Sita Devi that He would return in Kali-yuga as Sri Chaitanya Mahaprabhu, and that She would appear as Srimati Vishnupriya Devi.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Srila Prabhupada say about Sita Devi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Srila Prabhupada describes Sita Devi as the personification of the hladini-shakti — the divine pleasure potency. Her pativratya-dharma gave her supernatural protection even against Ravana. He cites Srimad-Bhagavatam 9.10.27 to show how chastity becomes the greatest spiritual armour.',
      },
    },
  ],
};

/* ── PAGE COMPONENT ── */
export default function SitaDeviBlogPage() {
  return (
    <main className="min-h-screen bg-[#FDFAF3] selection:bg-[#E8650A] selection:text-white">
      <Navbar />
      <article className={styles.root}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ── */}
      <header className={styles.hero}>
        <div className={styles.heroRotating} aria-hidden="true" />
        <div className={styles.heroMandala} aria-hidden="true" />
        <p className={styles.heroTemple}>🛕  ISKCON Thiruvanmiyur</p>
        <p className={styles.heroReg}>
          Hare Krishna Movement Chennai — Affiliated to ISKCON Bangalore · Reg. S-49/78-79
        </p>
        <div className={styles.heroLine} aria-hidden="true" />
        <p className={styles.heroFestival}>~ Sita Navami &mdash; The Appearance of Srimati Sita Devi ~</p>
        <h1 className={styles.heroTitle}>
          <em>Srimati Sita Devi</em>
          <br />
          Appearance Day
        </h1>
        <p className={styles.heroSubtitle}>
          The Goddess Born of the Earth — Mother of the Three Worlds — Eternal Consort of Lord Ramacandra
        </p>
        <div className={styles.heroDateBadge}>
          <span aria-hidden="true">✦</span>
          <span>Vaisakha Sukla Navami · Sita Navami</span>
          <span aria-hidden="true">✦</span>
        </div>
        <div className={styles.heroDivider} aria-hidden="true" />
      </header>

      {/* ── ARTICLE ── */}
      <div className={styles.articleWrap}>

        {/* Table of Contents */}
        <nav className={styles.toc} aria-label="Table of contents">
          <h4>Contents</h4>
          <ol>
            <li><a href="#who-is-sita">Who Is Srimati Sita Devi?</a></li>
            <li><a href="#divine-birth">The Miraculous Birth — Born of the Earth</a></li>
            <li><a href="#shakti">Sita as Hladini-Sakti — The Pleasure Potency of the Lord</a></li>
            <li><a href="#ideal-wife">The Ideal Wife — Prabhupada&apos;s Purport on SB 9.10.55</a></li>
            <li><a href="#ravana">The Cosmic Message of Ravana&apos;s Abduction</a></li>
            <li><a href="#maya-sita">The Secret Sri Caitanya Revealed — Ravana Never Touched the Real Sita</a></li>
            <li><a href="#power-of-chastity">The Supernatural Power of Chastity</a></li>
            <li><a href="#sita-caitanya">Sita Devi and Sri Caitanya Mahaprabhu</a></li>
            <li><a href="#how-to-honour">How to Honour This Sacred Day</a></li>
          </ol>
        </nav>

        {/* Intro */}
        <p>
          Every year, on the auspicious <em>Navami</em> of <em>Sukla Paksa</em> in the month of
          Vaisakha, the Vaisnava world pauses to remember one of the most exalted personalities in
          all of creation: <strong>Srimati Sita Devi</strong>, the eternal consort of the Supreme
          Lord Ramacandra, the Mother of the Three Worlds, and the very embodiment of divine
          surrender.
        </p>
        <p>
          On this sacred day of Sita Navami, while our temple at Dakshina Dwaraka Dham does not
          hold a formal celebration on this occasion, the day invites every devotee — in the quiet
          of their heart, before the Deities, or in the pages of Srila Prabhupada&apos;s books —
          to meditate on this incomparably glorious personality.
        </p>
        <p>
          Who is Sita Devi, really? What does she represent in Vaisnava philosophy? What can the
          life of this eternally liberated goddess teach us as we struggle to purify our own lives?
          Let us explore these questions through the light of sastra and the unerring guidance of
          His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada.
        </p>

        <figure className={styles.blogFigure}>
          <Image
            className={styles.blogImage}
            src="/assets/blog/sita-devi-appearance-day/Sita_Rama_and_Lakshman_in_the_Forest.png"
            alt="Sri Rama, Sita, and Lakshman in the forest"
            width={1200}
            height={800}
            sizes="(max-width: 900px) 100vw, 820px"
            priority
          />
          <figcaption className={styles.imageCaption}>
            Sri Rama, Srimati Sita Devi, and Laksmana in the forest — the Lord with His eternal
            consort and His devoted brother.
          </figcaption>
        </figure>

        <div className={styles.ornament} aria-hidden="true">✦ ✦ ✦</div>

        {/* ── SECTION 1 ── */}
        <h2 id="who-is-sita">Who Is Srimati Sita Devi?</h2>
        <p>
          In popular understanding, Sita Devi is the devoted wife of Lord Ramacandra, kidnapped by
          the demon Ravana and eventually rescued in the great epic Ramayana. But this popular view
          captures only the surface of a bottomless ocean of transcendental reality.
        </p>
        <p>
          Srimati Sita Devi is not an ordinary woman, not even an extraordinary one. She is the
          eternal, divine pleasure potency of the Supreme Lord — identical in quality with Laksmi
          Devi, the goddess of fortune, who eternally resides upon the chest of Lord Narayana. As
          Srila Prabhupada explains in the <em>Srimad-Bhagavatam</em>, she is non-different from
          the original source of all spiritual energy.
        </p>
        <p>She is known by many sacred names. Each name reveals a different facet of her divine personality:</p>

        <div className={styles.namesGrid}>
          {[
            { name: 'Sita',     meaning: 'She who emerged from the furrow of the plough' },
            { name: 'Janaki',   meaning: 'Daughter of King Janaka of Mithila' },
            { name: 'Vaidehi',  meaning: 'Princess of the kingdom of Videha' },
            { name: 'Maithili', meaning: 'She who belongs to Mithila' },
            { name: 'Bhumija',  meaning: 'Born of the Earth (Bhumi Devi)' },
            { name: 'Rama',     meaning: 'She who gives pleasure to Lord Rama' },
          ].map(({ name, meaning }) => (
            <div key={name} className={styles.nameCard}>
              <div className={styles.nameMain}>{name}</div>
              <div className={styles.nameMeaning}>{meaning}</div>
            </div>
          ))}
        </div>

        <p>
          The <em>Srimad-Bhagavatam</em> (9.10.4) describes her as the very{' '}
          <em>goddess of fortune who constantly rests on the chest of the Lord</em>. This verse
          alone reveals her transcendental stature — she is not a historical queen, she is an
          eternal spiritual personality appearing in this world for the pleasure of the Lord and the
          instruction of all living beings.
        </p>

        <div className={styles.ornament} aria-hidden="true">✦ ✦ ✦</div>

        {/* ── SECTION 2 ── */}
        <h2 id="divine-birth">The Miraculous Birth — Born of the Earth</h2>
        <p>
          Among all the divine births recorded in Vedic literature, few are as extraordinary as
          that of Sita Devi. She did not take birth through a human womb. She appeared miraculously
          from within the earth — a child discovered in a golden casket in a field being ploughed
          by King Janaka of Mithila, who was preparing the sacred ground for a great{' '}
          <em>yajna</em> (sacrifice).
        </p>
        <p>
          The tradition records that the tip of a plough (<em>sira</em>) struck this hidden casket,
          and from it emerged a radiant infant girl of divine beauty. The word <em>sira</em> — the
          furrow made by a plough — gave the child her name: <strong>Sita</strong>. King Janaka,
          overwhelmed with wonder and devotion, accepted this miraculous child as his own beloved
          daughter.
        </p>
        <p>
          That she is <em>Bhumija</em> — born of the earth — is deeply significant. Bhumi Devi
          (Mother Earth) is herself a form of Laksmi, the divine consort of Lord Visnu. The earth
          sustains all beings, nourishes all life, bears all burdens without complaint, and gives
          freely without expectation of return. That Sita Devi emerged from the earth is not
          coincidence — it reveals her very nature: infinite patience, silent endurance, and
          selfless nourishment.
        </p>

        <div className={styles.shlokaBlock}>
          <div className={styles.shlokaDevanagari}>
            eka-patni-vrata-dharo rajarsi-caritah sucih<br />
            sva-dharmam grha-medhiyam siksayan svayam acarat
          </div>
          <div className={styles.shlokaTranslation}>
            &ldquo;Lord Ramacandra took a vow to accept only one wife and have no connection with
            any other women. He was a saintly king, and everything in His character was good,
            untinged by qualities like anger. He taught good behaviour for everyone, especially for
            householders, in terms of varnasrama-dharma. Thus He taught the general public by His
            personal activities.&rdquo;
          </div>
          <span className={styles.shlokaRef}>— Srimad-Bhagavatam 9.10.54</span>
        </div>

        <p>
          This verse sets the stage for understanding Sita Devi&apos;s divine appearance: Lord
          Ramacandra came as the ideal husband and dharmic king, and Sita Devi appeared as the
          inseparable other half of his eternal identity — his hladini-sakti, his pleasure potency
          in the form of the ideal wife.
        </p>

        <div className={styles.ornament} aria-hidden="true">✦ ✦ ✦</div>

        {/* ── SECTION 3 ── */}
        <h2 id="shakti">Sita as Hladini-Sakti — The Pleasure Potency of the Lord</h2>
        <p>
          To understand Sita Devi&apos;s position in Vaisnava philosophy, one must understand the
          nature of the Lord&apos;s potencies. Srila Prabhupada explains throughout his writings
          that the Supreme Lord has three principal internal potencies: <em>sandhini</em> (the
          potency of existence), <em>samvit</em> (the potency of knowledge), and <em>hladini</em>{' '}
          (the potency of bliss and pleasure).
        </p>
        <p>
          The <em>hladini-sakti</em> is the pleasure potency — the energy by which the Lord enjoys
          supreme bliss. In the highest understanding of Vaisnava philosophy, Srimati Radharani is
          the full manifestation of this <em>hladini-sakti</em>. But as the Lord expands Himself
          into various forms — as Narayana in Vaikuntha, as Ramacandra in the Treta-yuga — his
          pleasure potency also correspondingly expands as Laksmi Devi, as Sita Devi.
        </p>

        <div className={styles.prabhuQuote}>
          <blockquote>
            &ldquo;Sita-devi is the origin of all potencies of the Supreme Personality of Godhead.
            Cit-sakti. Parasya saktir vividhaiva sruyate. The Supreme Personality of Godhead has
            got many potencies, multipotencies, and one of the potency is hladini-sakti, pleasure
            potency. That pleasure potency is Sita, Radharani, Laksmi-devi. The Lord has got
            unlimited potencies, so one of the potency is Radharani or Laksmi or Sita. They are
            equal. There is no difference.&rdquo;
          </blockquote>
          <cite>
            — His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
            <br />
            Lecture on SB 7.9.26, Mayapur, 4 March 1976
          </cite>
        </div>

        <p>
          This is a most remarkable teaching. Srila Prabhupada here states unequivocally: Sita,
          Radharani, and Laksmi — they are equal. They are all manifestations of the one divine
          pleasure potency. There is no difference in their transcendental quality, only in their
          relational context with the particular form of the Lord they serve.
        </p>
        <p>
          The philosophical grounding comes from the verse of Svarupa Damodara Gosvami, quoted
          repeatedly by Srila Prabhupada:
        </p>

        <div className={styles.shlokaBlock}>
          <div className={styles.shlokaDevanagari}>
            radha krsna-pranaya-vikrtir hladini-saktir asmat<br />
            ekatmanav api bhuvi pura deha-bhedam gatau tau
          </div>
          <div className={styles.shlokaTranslation}>
            &ldquo;The loving affairs of Sri Radha and Krsna are transcendental manifestations of
            the Lord&apos;s internal pleasure potency. Although Radha and Krsna are one in Their
            identity, They separated Themselves eternally. Now these two transcendental identities
            have again united, in the form of Sri Krsna Caitanya.&rdquo;
          </div>
          <span className={styles.shlokaRef}>— Sri Caitanya-caritamrta, Adi-lila 1.5</span>
        </div>

        <p>
          Just as Radha and Krsna are one yet appear as two for the sake of transcendental loving
          exchange, so too Sita and Rama are one transcendental reality appearing in two forms.
          Because the Lord is always worshipped together with his potency, we always chant:{' '}
          <em>Sita-Rama, Laksmi-Narayana, Radha-Krsna</em>.
        </p>

        <div className={styles.prabhuQuote}>
          <blockquote>
            &ldquo;Hare Krsna means the Supreme Lord and His spiritual potency. Without energy,
            the Lord is incomplete. Radha-Krsna, Laksmi-Narayana, Sita-Rama. So God is always
            with energy. Without energy, He is incomplete.&rdquo;
          </blockquote>
          <cite>
            — His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
            <br />
            Room Conversation, 1966
          </cite>
        </div>

        <div className={styles.ornament} aria-hidden="true">✦ ✦ ✦</div>

        {/* ── SECTION 4 ── */}
        <h2 id="ideal-wife">The Ideal Wife — Prabhupada&apos;s Purport on SB 9.10.55</h2>
        <p>
          Of all the scriptural statements about Sita Devi, perhaps none is as concentrated and
          precise as the verse <em>Srimad-Bhagavatam</em> 9.10.55, where Sukadeva Gosvami
          glorifies her in a single verse that contains a universe of meaning.
        </p>

        <div className={styles.shlokaBlock}>
          <div className={styles.shlokaDevanagari}>
            premnanuvrttya silena prasrayavanata sati<br />
            bhiya hriya ca bhava-jna bhartuh sitaharan manah
          </div>
          <div className={styles.shlokaTranslation}>
            &ldquo;Mother Sita was very submissive, faithful, shy and chaste, always understanding
            the attitude of her husband. Thus by her character and her love and service she
            completely attracted the mind of the Lord.&rdquo;
          </div>
          <span className={styles.shlokaRef}>— Srimad-Bhagavatam 9.10.55</span>
        </div>

        <p>Srila Prabhupada&apos;s purport to this verse:</p>

        <div className={styles.prabhuQuote}>
          <blockquote>
            &ldquo;As Lord Ramacandra is the ideal husband (<em>eka-patni-vrata</em>), mother Sita
            is the ideal wife. Such a combination makes family life very happy.{' '}
            <em>Yad yad acarati sresthas tat tad evetaro janah</em>: whatever example a great man
            sets, common people follow. If the kings, the leaders, and the brahmanas, the teachers,
            would set forth the examples we receive from Vedic literature, the entire world would be
            heaven; indeed, there would no longer be hellish conditions within this material
            world.&rdquo;
          </blockquote>
          <cite>
            — His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
            <br />
            Purport to Srimad-Bhagavatam 9.10.55
          </cite>
        </div>

        <p>The Sanskrit synonyms of this verse are worth meditating upon individually:</p>
        <ul className={styles.synonymList}>
          <li><strong>premna anuvrttya</strong> — by service rendered to the husband with love and faith</li>
          <li><strong>silena</strong> — by good character</li>
          <li><strong>prasraya-avanata</strong> — always very submissive, ready to satisfy</li>
          <li><strong>sati</strong> — chaste and pure</li>
          <li><strong>bhiya</strong> — with reverential awe</li>
          <li><strong>hriya</strong> — with shyness and modesty</li>
          <li><strong>bhava-jna</strong> — understanding the innermost mood and intention of the Lord</li>
        </ul>

        <p>
          Each of these qualities is a spiritual virtue, not a social convention. Sita Devi does
          not serve Rama out of societal compulsion — she serves him because she <em>is</em> his
          pleasure potency. Her service is the expression of her spiritual identity, as natural to
          her as the warmth that radiates naturally from fire.
        </p>

        <div className={styles.pullquote}>
          <p>
            &ldquo;Just as Lord Ramacandra is the ideal husband (<em>eka-patni-vrata</em>), mother
            Sita is the ideal wife. Such a combination makes family life very happy.&rdquo;
          </p>
        </div>

        <div className={styles.prabhuQuote}>
          <blockquote>
            &ldquo;There are many stories — Nala-Damayanti, then Parvati, Sita — five chaste women
            in the history. They should read their life.&rdquo;
          </blockquote>
          <cite>
            — His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
            <br />
            Morning Walk Conversation, Dallas, 1973
          </cite>
        </div>

        <div className={styles.ornament} aria-hidden="true">✦ ✦ ✦</div>

        {/* ── SECTION 5 ── */}
        <h2 id="ravana">The Cosmic Message of Ravana&apos;s Abduction</h2>
        <p>
          The most dramatic episode in Sita Devi&apos;s pastimes is her abduction by the demon
          Ravana. Superficially, this reads as a tragedy — the virtuous queen taken by a powerful
          and lustful demon. But Srila Prabhupada reveals the cosmic significance of this event in
          a conversation that is both striking and profound.
        </p>

        <div className={styles.prabhuQuote}>
          <blockquote>
            &ldquo;Materialists are like Ravana — they have kidnapped Sita, or Laksmi. And we, as
            devotees, act as Hanuman to get Laksmi back from Ravana and return her to Rama, or
            Narayana, by engaging the materialists&apos; money in the service of the Lord.&rdquo;
          </blockquote>
          <cite>
            — His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
            <br />
            (As recalled by Giriraj Swami in conversation with Prabhupada)
          </cite>
        </div>

        <p>
          This teaching turns the Ramayana into a living, present-day reality. The <em>maya</em>{' '}
          of this world — the false notion that we can possess, control, and enjoy the Lord&apos;s
          energy for our own pleasure — is precisely the Ravana-tendency. Ravana did not want Sita
          to return to Rama. He wanted to enjoy Sita for himself. This is the very definition of
          material consciousness.
        </p>
        <p>
          Sita is Laksmi — the energy, the wealth, the beauty, the fertility of this world. All of
          it belongs to the Lord. When we try to exploit it for ourselves, separated from the Lord,
          we become Ravana. When we, like Hanuman, carry the Lord&apos;s message and reunite the
          energy with the energetic — we serve our highest calling.
        </p>

        <div className={styles.shlokaBlock}>
          <div className={styles.shlokaDevanagari}>
            nayam sriyo &apos;nga u nitanta-rateh prasadah<br />
            svar-yositam nalina-gandha-rucam kuto &apos;nyah<br />
            rasotsave &apos;sya bhuja-danda-grhita-kantha-<br />
            labdhasisam ya udagad vraja-vallabhinam
          </div>
          <div className={styles.shlokaTranslation}>
            &ldquo;Neither the goddess of fortune, Laksmi, nor even the damsels of the heavenly
            kingdom can attain the facilities of the damsels of Vrajabhumi — and what to speak of
            others.&rdquo;
          </div>
          <span className={styles.shlokaRef}>— Srimad-Bhagavatam 10.47.60</span>
        </div>

        <div className={styles.ornament} aria-hidden="true">✦ ✦ ✦</div>

        {/* ── SECTION 6 — MAYA SITA ── */}
        <h2 id="maya-sita">The Secret Sri Caitanya Revealed — Ravana Never Touched the Real Sita</h2>
        <p>
          Here is a teaching so profound that Sri Caitanya Mahaprabhu himself was described as
          becoming <em>deeply satisfied</em> upon reading it. It is recorded in the{' '}
          <em>Kurma Purana</em> and cited by Srila Prabhupada in both{' '}
          <em>Sri Caitanya-caritamrta</em> (Madhya-lila 9.201–206 and 9.211–212) and the purport
          to <em>Srimad-Bhagavatam</em> 9.10.11. It answers the question that has troubled
          thoughtful readers of the Ramayana for centuries:
        </p>

        <div className={styles.pullquote}>
          <p>
            <em>How could the chaste Sita Devi, the goddess of fortune herself, have been touched
            by a demon like Ravana?</em>
          </p>
        </div>

        <p>
          The answer, as revealed by the <em>Kurma Purana</em> and confirmed by Lord Caitanya
          himself: <strong>She was not.</strong>
        </p>
        <p>
          When Ravana arrived at the hermitage in the forest, the moment Sita Devi saw him — she
          immediately took shelter of Agni, the fire-god. The fire-god covered her, protected her,
          and produced an illusory shadow form — <em>maya-sita</em> — in her place. It was this
          shadow Sita that Ravana kidnapped. The real Sita Devi, hidden and protected, was brought
          by Agni to the care of goddess Parvati. The real Sita never entered Lanka. The real Sita
          was never in Ravana&apos;s captivity for a single moment.
        </p>

        <figure className={styles.blogFigure}>
          <Image
            className={styles.blogImage}
            src="/assets/blog/sita-devi-appearance-day/Agnidev_Carries_Sita_to_Rama.png"
            alt="Agnideva carries Sita to Lord Rama"
            width={1200}
            height={800}
            sizes="(max-width: 900px) 100vw, 820px"
          />
          <figcaption className={styles.imageCaption}>
            The fire-god returns the real Srimati Sita Devi to Lord Ramacandra — the true Sita
            protected and never touched by maya.
          </figcaption>
        </figure>

        <div className={styles.shlokaBlock}>
          <div className={styles.shlokaDevanagari}>
            ravana dekhiya sita laila agnira sarana<br />
            ravana haite agni kaila sitake avarana
          </div>
          <div className={styles.shlokaTranslation}>
            &ldquo;When Ravana came to kidnap mother Sita and she saw him, she took shelter of the
            fire-god, Agni. The fire-god covered the body of mother Sita, and in this way she was
            protected from the hands of Ravana.&rdquo;
          </div>
          <span className={styles.shlokaRef}>
            — Sri Caitanya-caritamrta, Madhya-lila 9.202 (from Kurma Purana)
          </span>
        </div>

        <div className={styles.shlokaBlock}>
          <div className={styles.shlokaDevanagari}>
            sita lana rakhilena parvatira sthane<br />
            &lsquo;maya-sita&rsquo; diya agni vancila ravane
          </div>
          <div className={styles.shlokaTranslation}>
            &ldquo;The fire-god, Agni, took away the real Sita and brought her to the place of
            Parvati, goddess Durga. An illusory form of mother Sita was then delivered to Ravana,
            and in this way Ravana was cheated.&rdquo;
          </div>
          <span className={styles.shlokaRef}>
            — Sri Caitanya-caritamrta, Madhya-lila 9.204 (from Kurma Purana)
          </span>
        </div>

        <div className={styles.shlokaBlock}>
          <div className={styles.shlokaDevanagari}>
            sitayaradhito vahnis chaya-sitam ajijanat<br />
            tam jahara dasa-grivah sita vahni-puram gata<br />
            pariksa-samaye vahnim chaya-sita vivesa sa<br />
            vahnih sitam samaniya tat-purastad aninayat
          </div>
          <div className={styles.shlokaTranslation}>
            &ldquo;When he was petitioned by mother Sita, the fire-god, Agni, brought forth an
            illusory form of Sita, and Ravana, who had ten heads, kidnapped the false Sita. The
            original Sita then went to the abode of the fire-god. When Lord Ramacandra tested the
            body of Sita, it was the false, illusory Sita that entered the fire. At that time the
            fire-god brought the original Sita from his abode and delivered her to Lord
            Ramacandra.&rdquo;
          </div>
          <span className={styles.shlokaRef}>
            — Kurma Purana, quoted in Sri Caitanya-caritamrta, Madhya-lila 9.211–212
            <br />
            (Srila Prabhupada&apos;s purport: <em>&ldquo;These two verses are taken from the Kurma Purana.&rdquo;</em>)
          </span>
        </div>

        <div className={styles.prabhuQuote}>
          <blockquote>
            &ldquo;Upon hearing from the Kurma Purana how Ravana had kidnapped a false form of
            mother Sita, Sri Caitanya Mahaprabhu became very much satisfied.&rdquo;
          </blockquote>
          <cite>
            — Sri Caitanya-caritamrta, Madhya-lila 9.203
            <br />
            Translation by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
          </cite>
        </div>

        <div className={styles.prabhuQuote}>
          <blockquote>
            &ldquo;It was actually impossible for Ravana to take away Sita. The form of Sita taken
            by Ravana was an illusory representation of mother Sita — <em>maya-sita</em>. When
            Sita was tested in the fire, this <em>maya-sita</em> was burnt, and the real Sita came
            out of the fire.&rdquo;
          </blockquote>
          <cite>
            — His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
            <br />
            Purport to Srimad-Bhagavatam 9.10.11
          </cite>
        </div>

        <h3>Why Does This Matter So Deeply?</h3>
        <div className={styles.lessonBox}>
          <h3>🔑 Three Profound Implications</h3>
          <ul>
            <li>
              <strong>Sita Devi is eternally untouchable by material forces.</strong> She is the{' '}
              <em>hladini-sakti</em>, the internal potency of the Supreme Lord. She cannot be
              possessed, enjoyed, or defiled by any conditioned soul — not even Ravana.
            </li>
            <li>
              <strong>The <em>agni-pariksa</em> was never a test of Sita&apos;s purity.</strong>{' '}
              Her purity was never in question. The fire test was the arrangement by which the real
              Sita was ceremonially returned to Lord Ramacandra — the <em>maya-sita</em> dissolved,
              and the real Sita stepped forward. It was a divine reunion, not an ordeal.
            </li>
            <li>
              <strong>Ravana never won anything.</strong> He thought he had captured Laksmi — the
              greatest prize in the universe. But he had captured only a shadow. This is the perfect
              metaphor for all material enjoyment: the materialist captures what he thinks is
              happiness — but it is always <em>maya-sita</em>, a false form. The real Sita belongs
              only to the Lord and returns only to the Lord.
            </li>
          </ul>
        </div>

        <p>
          This is why Sri Caitanya Mahaprabhu was &ldquo;very much satisfied&rdquo; upon reading
          this account. It vindicates the absolute purity of Sita Devi beyond any doubt, and
          reveals the deeper spiritual truth: the Lord&apos;s energy is eternally protected,
          eternally pure, and eternally inseparable from the Lord — no matter how it may appear to
          the external eye.
        </p>

        <div className={styles.ornament} aria-hidden="true">✦ ✦ ✦</div>

        {/* ── SECTION 7 ── */}
        <h2 id="power-of-chastity">The Supernatural Power of Chastity</h2>
        <p>
          One of the most important teachings embedded in the story of Sita Devi is the
          extraordinary spiritual power that flows from chastity and one-pointed devotion. Srila
          Prabhupada is explicit on this point:
        </p>

        <div className={styles.shlokaBlock}>
          <div className={styles.shlokaDevanagari}>
            na vai veda maha-bhaga bhavan kama-vasam gatah<br />
            tejo &apos;nubhavam sitaya yena nito dasam imam
          </div>
          <div className={styles.shlokaTranslation}>
            &ldquo;O greatly fortunate one, you came under the influence of lusty desires, and
            therefore you could not understand the influence of mother Sita. Now, because of her
            curse, you have been reduced to this state, having been killed by Lord Ramacandra.&rdquo;
          </div>
          <span className={styles.shlokaRef}>— Srimad-Bhagavatam 9.10.27 (Mandodari to Ravana)</span>
        </div>

        <p>Srila Prabhupada&apos;s purport to this verse states:</p>

        <div className={styles.prabhuQuote}>
          <blockquote>
            &ldquo;Not only was mother Sita powerful, but any woman who follows in the footsteps of
            mother Sita can also become similarly powerful. There are many instances of this in the
            history of Vedic literature. Whenever we find a description of ideal chaste women,
            mother Sita is among them. Mandodari, the wife of Ravana, was also very chaste.
            Similarly, Draupadi was one of five exalted chaste women. As a man must follow great
            personalities like Brahma and Narada, a woman must follow the path of such ideal women
            as Sita, Mandodari and Draupadi. By staying chaste and faithful to her husband, a woman
            enriches herself with supernatural power.&rdquo;
          </blockquote>
          <cite>
            — His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
            <br />
            Purport to Srimad-Bhagavatam 9.10.27
          </cite>
        </div>

        <p>
          When Ravana kidnapped the <em>maya-sita</em> and held her captive in Lanka, he could not
          touch her. He offered every material inducement — yet Sita remained immovable. She held a
          blade of grass between herself and Ravana and kept her mind fixed entirely on Lord Rama.
          Mandodari, Ravana&apos;s own wife, understood this perfectly. Because she herself was a
          chaste woman, she could perceive the power of another chaste woman. Ravana did not listen
          — and was destroyed.
        </p>

        <div className={styles.lessonBox}>
          <h3>🪷 Timeless Lessons from Sita Devi&apos;s Life</h3>
          <ul>
            <li><strong>Purity is power:</strong> Sita&apos;s chastity was her invincible armour. Inner strength rooted in devotion surpasses any material force.</li>
            <li><strong>Surrender is not weakness:</strong> Sita&apos;s surrender to Lord Rama was the surrender of energy to the energetic — a divine reality, not a social submission.</li>
            <li><strong>Patience in adversity:</strong> Whether in the forest or in Lanka, Sita Devi never lost faith. Her equanimity is a model for every sadhaka.</li>
            <li><strong>Renunciation without bitterness:</strong> Even when Lord Rama sent her to the forest, Sita accepted this without rancour, continuing to worship him.</li>
            <li><strong>Service as spiritual identity:</strong> Her service to Rama was not a duty imposed from outside — it was the expression of who she <em>is</em>, eternally.</li>
          </ul>
        </div>

        <div className={styles.ornament} aria-hidden="true">✦ ✦ ✦</div>

        {/* ── SECTION 8 ── */}
        <h2 id="sita-caitanya">Sita Devi and Sri Caitanya Mahaprabhu</h2>
        <p>
          It is recorded in the writings of the Vaisnava tradition that when Lord Ramacandra,
          Sita Devi, and Laksmana passed through the land of Navadvipa during the Treta-yuga,
          Lord Rama revealed to Sita Devi:
        </p>

        <div className={styles.prabhuQuote}>
          <blockquote>
            &ldquo;O Devi, this Navadvipa is very dear to Me. In the beginning of the upcoming
            Kali-yuga, I will come here in the form of Sri Caitanya Mahaprabhu, and You, Sita,
            will come here as Srimati Visnupriya.&rdquo;
          </blockquote>
          <cite>— Navadvipa-dhama Mahatmya (as recorded in the Vaisnava tradition)</cite>
        </div>

        <p>
          As Visnupriya Devi, she appeared once more as the devoted wife of the Lord, accepting
          the profound separation of Lord Caitanya&apos;s <em>sannyasa</em> — perhaps the most
          poignant expression of her eternal nature as the potency that accepts even the greatest
          separation in perfect love.
        </p>

        <div className={styles.shlokaBlock}>
          <div className={styles.shlokaDevanagari}>
            pativrata-siromani janaka-nandini<br />
            jagatera mata sita — ramera grhini
          </div>
          <div className={styles.shlokaTranslation}>
            &ldquo;Srimati Sitadevi is the mother of the three worlds and the wife of Lord
            Ramacandra. Among chaste women she is supreme, and she is the daughter of King
            Janaka.&rdquo;
          </div>
          <span className={styles.shlokaRef}>
            — Kurma Purana 9.201–202, quoted by Sri Caitanya Mahaprabhu ·{' '}
            Sri Caitanya-caritamrta, Madhya-lila 9.201 (Srila Prabhupada&apos;s purport)
          </span>
        </div>

        <div className={styles.ornament} aria-hidden="true">✦ ✦ ✦</div>

        {/* ── SECTION 9 ── */}
        <h2 id="how-to-honour">How to Honour This Sacred Day</h2>
        <p>
          At Dakshina Dwaraka Dham, we do not hold a formal observance on Sita Navami. Yet every
          devotee can personally observe this day in a meaningful way. Srila Prabhupada&apos;s
          recommendation is always the same: use every auspicious day to deepen one&apos;s
          devotional practice.
        </p>

        <div className={styles.lessonBox}>
          <h3>🌸 Personal Observance — Simple and Powerful</h3>
          <ul>
            <li><strong>Chant extra rounds</strong> of the Hare Krsna maha-mantra with the mood of Sita Devi — complete surrender, one-pointed devotion.</li>
            <li><strong>Read Srimad-Bhagavatam Canto 9, Chapter 10</strong> — Sukadeva Gosvami&apos;s account of Lord Ramacandra&apos;s pastimes with Sita Devi.</li>
            <li><strong>Chant or hear the Rama-nama:</strong> <em>Rama Rama Hare Rama, Hare Hare, Hare Krsna Hare Krsna, Krsna Krsna Hare Hare.</em></li>
            <li><strong>Offer a simple flower</strong> at the altar with the prayer: <em>Srimati Sita Devi, mother of the three worlds, please bless me with one drop of your surrender and chastity of heart.</em></li>
            <li><strong>Observe a partial fast</strong> until noon, as many Vaisnavas traditionally do on this day.</li>
            <li><strong>Share the glories of Sita Devi</strong> — with family, with friends, with whoever will listen. The <em>sravanam-kirtanam</em> of the Lord and his devotees is the very process of this age.</li>
          </ul>
        </div>

        <p>
          Whatever form our remembrance takes, the important thing is <em>smaranam</em> —
          remembrance. Srila Prabhupada repeatedly taught that hearing and chanting about the
          Lord&apos;s devotees purifies the heart just as hearing about the Lord himself does. And
          what greater devotee is there than Sita Devi — the very embodiment of devotion in its
          most exalted form?
        </p>

        {/* ── FAQ (Client Component) ── */}
        <FaqAccordion />

        {/* ── CONNECT WITH US ── */}
        <div className={styles.connectSection}>
          <h2>Connect With Us</h2>
          <p className={styles.connectIntro}>
            Follow Hare Krishna Movement Chennai across all platforms for daily darsan, spiritual
            insights, event updates, and seva opportunities.
          </p>

          <div className={styles.platformGrid}>
            <a className={`${styles.platformLink} ${styles.plWebsite}`} href="https://hkmchennai.org/" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              <span className={styles.plLabel}><strong>hkmchennai.org</strong><span className={styles.plName}>Official Website</span></span>
            </a>
            <a className={`${styles.platformLink} ${styles.plInstagram}`} href="https://www.instagram.com/hkm_chennai" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.851s-.011 3.585-.069 4.851c-.062 1.366-.333 2.633-1.308 3.608-.975.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.585-.011-4.851-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.975-1.246-2.242-1.308-3.608C2.175 15.585 2.163 15.205 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.333.013 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.013 8.333 0 8.741 0 12c0 3.259.013 3.668.072 4.948.085 1.856.601 3.698 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.333 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.856-.085 3.698-.601 5.038-1.942 1.341-1.34 1.857-3.182 1.942-5.038C23.987 15.668 24 15.259 24 12s-.013-3.667-.072-4.947c-.085-1.856-.601-3.698-1.942-5.038C20.646.673 18.804.157 16.948.072 15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              <span className={styles.plLabel}><strong>@hkm_chennai</strong><span className={styles.plName}>Instagram</span></span>
            </a>
            <a className={`${styles.platformLink} ${styles.plTwitter}`} href="https://x.com/ChennaiHare" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              <span className={styles.plLabel}><strong>@ChennaiHare</strong><span className={styles.plName}>X (Twitter)</span></span>
            </a>
            <a className={`${styles.platformLink} ${styles.plLinkedin}`} href="https://www.linkedin.com/company/hare-krishna-movement-chennai/" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <span className={styles.plLabel}><strong>Srila Prabhupada's ISKCON Thiruvanmiyur</strong><span className={styles.plName}>LinkedIn</span></span>
            </a>
            <a className={`${styles.platformLink} ${styles.plWhatsapp}`} href="https://www.whatsapp.com/channel/0029Vaa2fjKEVccFHx5YDt1O" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              <span className={styles.plLabel}><strong>WhatsApp Channel</strong><span className={styles.plName}>Srila Prabhupada's ISKCON Thiruvanmiyur Official</span></span>
            </a>
          </div>

          <a className={styles.donatePlatform} href="https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign" target="_blank" rel="noopener noreferrer">
            🪷&nbsp;&nbsp;Donate — Temple Construction Campaign
          </a>

          <div className={styles.templeMap}>
            <p className={styles.templeMapLabel}>📍 Dakshina Dwaraka Dham — Find Us</p>
            <iframe
              src="https://maps.google.com/maps?q=63,+1st+Seaward+Road,+Thiruvanmiyur,+Chennai+600+041&output=embed"
              width="100%"
              height="320"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dakshina Dwaraka Dham — Srila Prabhupada's ISKCON Thiruvanmiyur Location"
            />
            <a className={styles.mapDirectionsBtn} href="https://maps.app.goo.gl/tJEq5NoCUXdciRhP8" target="_blank" rel="noopener noreferrer">
              🗺️&nbsp;&nbsp;Get Directions
            </a>
          </div>
        </div>

        {/* ── CLOSING PANEL ── */}
        <div className={styles.closingPanel}>
          <h2>All Glories to Srimati Sita Devi!</h2>
          <p>
            On this most auspicious day of Vaisakha Sukla Navami, we bow at the lotus feet of the
            Mother of the Three Worlds. May her example of surrender, patience, and one-pointed
            love inspire every heart that seeks the Supreme.
          </p>
          <p className={styles.mantra}>
            Jaya Sita-Rama!<br />
            Jaya Jaya Sita-Rama!
          </p>
        </div>

      </div>

      {/* ── FOOTER ── */}
      <footer className={styles.templeCredit}>
        <p>
          <strong>Dakshina Dwaraka Dham</strong> · Hare Krishna Movement Chennai<br />
          Affiliated to ISKCON Bangalore · Reg. S-49/78-79<br />
          63, 1st Seaward Road, Thiruvanmiyur, Chennai 600 041<br />
          <a href="https://hkmchennai.org" target="_blank" rel="noopener noreferrer">hkmchennai.org</a>
          &nbsp;·&nbsp;
          <a href="https://www.instagram.com/hkm_chennai" target="_blank" rel="noopener noreferrer">Instagram</a>
          &nbsp;·&nbsp;
          <a href="https://x.com/ChennaiHare" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
          &nbsp;·&nbsp;
          <a href="https://www.whatsapp.com/channel/0029Vaa2fjKEVccFHx5YDt1O" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </p>
        <p style={{ marginTop: '0.6rem', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} Hare Krishna Movement Chennai. All rights reserved.
        </p>
      </footer>
      </article>
      <Footer />
    </main>
  );
}
