"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import "./styles.css";

const socialLinks = [
  { icon: "🌍", label: "Website", display: "hkmchennai.org", url: "https://hkmchennai.org/" },
  { icon: "🕊", label: "Twitter (X)", display: "@ChennaiHare", url: "https://x.com/ChennaiHare" },
  { icon: "📸", label: "Instagram", display: "@hkm_chennai", url: "https://www.instagram.com/hkm_chennai" },
  { icon: "💼", label: "LinkedIn", display: "Srila Prabhupada's ISKCON Thiruvanmiyur", url: "https://www.linkedin.com/company/hare-krishna-movement-chennai/" },
  { icon: "🎯", label: "Support", display: "campaigns.hkmchennai.org", url: "https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign" },
  { icon: "📲", label: "WhatsApp", display: "Join our WhatsApp Channel", url: "https://www.whatsapp.com/channel/0029Vaa2fjKEVccFHx5YDt1O" },
];

const faqs = [
  {
    q: "Who was Srila Baladeva Vidyabhushana and why is he important?",
    a: "Srila Baladeva Vidyabhushana was a Gaudiya Vaishnava acharya who appeared in Orissa at the end of the seventeenth century. He is principally known for composing the Govinda-bhashya — the Gaudiya Vaishnava commentary on the Vedanta-sutra — in 1718 CE, defending the sampradaya before a royal assembly at Galta, near Jaipur. Srila Prabhupada dedicated the Bhagavad-gita As It Is to him, personally confirming: 'I have dedicated my Bhagavad-gita to Baladeva Vidyabhushana.' — Room Conversation, Jan. 24, 1977, Bhubaneswar.",
  },
  {
    q: "Is the Govindaji Deity in Jaipur the same as Srila Rupa Gosvami's Deity from Vrindavana?",
    a: "Yes — they are one and the same. The original Govindaji Deity was installed approximately 5,000 years ago by Vajranabha, the great-grandson of Lord Krishna, and later rediscovered by Srila Rupa Gosvami under the direct instruction of Sri Chaitanya Mahaprabhu. When Aurangzeb's armies attacked Vrindavana around 1669 CE, Maharaja Sawai Jai Singh II personally rescued the Deity and brought Him to Jaipur for protection. So when Srila Baladeva Vidyabhushana prayed before Govindaji for three days, he was praying before the very Deity personally served by Srila Rupa Gosvami himself.",
  },
  {
    q: "What was the significance of installing Vijaya Gopala at Galta?",
    a: "After the Govinda-bhashya was accepted and the Gaudiya sampradaya declared victorious at the assembly held at Galta near Jaipur, Srila Baladeva Vidyabhushana installed the Deity of Vijaya Gopala at the very site of the assembly. 'Vijaya' means victory. This Deity was a permanent commemoration of the sampradaya's triumph at that sacred spot. A small temple of Srila Baladeva Vidyabhushana exists at Galta to this day, housing his Deities and approximately one hundred Shaligram Shilas.",
  },
  {
    q: "Where are the personal Deities of Srila Baladeva Vidyabhushana and where is his samadhi?",
    a: "His personal Deities — Sri Jaya Govinda and Sri Vijaya Govinda — reside at Gokulananda Mandir in Vrindavana, worshipped to this day. His samadhi is located behind the altar of Sri Radha Shyamasundara Temple, Vrindavana — the very temple where he served as the main priest after returning victorious from Jaipur. Devotees should offer dandavats at the samadhi and take darshan of Sri Jaya and Vijaya Govinda at Gokulananda Mandir.",
  },
  {
    q: "What books by Srila Baladeva Vidyabhushana should a devotee study?",
    a: "The most accessible entry point is the Bhagavad-gita As It Is of Srila Prabhupada, where the Gita-bhushana Bhashya is quoted throughout the purports. The Prameya-ratnavali is available in English translation and provides an accessible introduction to his philosophical conclusions. Srila Prabhupada specifically recommends in CC Madhya 6.135 purport that serious students consult Baladeva Vidyabhushana's commentary on Jiva Gosvami's Tattva-sandarbha.",
  },
];

function Bq({ children }: { children: React.ReactNode }) {
  return <blockquote className="gp-bq">{children}</blockquote>;
}

function Divider() {
  return <div className="gp-divider">✦</div>;
}

const tocItems = [
  { num: "1.", label: "The Day a Commentary Saved a Sampradaya", id: "section-1" },
  { num: "2.", label: "A Scholar Who Sought the Absolute Truth", id: "section-2" },
  { num: "3.", label: "The Encounter That Changed Everything", id: "section-3" },
  { num: "4.", label: "At the Feet of Vishwanatha Chakravarti Thakura", id: "section-4" },
  { num: "5.", label: "The Challenge at Jaipur: When a Sampradaya Was on Trial", id: "section-5" },
  { num: "6.", label: "What Every Acharya Gives: Srila Prabhupada's Teaching", id: "section-6" },
  { num: "7.", label: "How Srila Prabhupada Honours This Acharya", id: "section-7" },
  { num: "8.", label: "An Ocean of Sastric Contribution", id: "section-8" },
  { num: "9.", label: "Lila Sthali: Sacred Places Connected to Srila Baladeva Vidyabhushana", id: "section-9" },
  { num: "10.", label: "Passing From This World and an Eternal Legacy", id: "section-10" },
  { num: "11.", label: "Why His Life Speaks to Us Today", id: "section-11" },
  { num: "12.", label: "Frequently Asked Questions", id: "section-faq" },
];

function TableOfContents() {
  return (
    <nav className="gp-toc" aria-label="Table of Contents">
      <div className="gp-toc-inner">
        <p className="gp-toc-title">Table of Contents</p>
        <ol className="gp-toc-list">
          {tocItems.map((item) => (
            <li key={item.id}>
              <span className="gp-toc-num">{item.num}</span>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

function BlogImage({ src, alt, caption, hero }: { src: string; alt: string; caption?: string; hero?: boolean }) {
  return (
    <div className={`gp-image-container${hero ? " gp-image-container--hero" : ""}`}>
      <img src={src} alt={alt} className={`gp-image${hero ? " gp-image-hero" : ""}`} />
      {caption && <span className="gp-image-caption">{caption}</span>}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="gp-faq-item" style={{ cursor: "pointer" }} onClick={() => setOpen(!open)}>
      <h4 className="gp-faq-q" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
        <span>{q}</span>
        <span style={{ fontSize: "1rem", flexShrink: 0, color: "#ea580c" }}>{open ? "▲" : "▼"}</span>
      </h4>
      {open && <p className="gp-faq-a">{a}</p>}
    </div>
  );
}

export default function BlogClient() {
  return (
    <main className="min-h-screen bg-[#FFF9F0] selection:bg-[#b84a1a] selection:text-white">
      <Navbar />

      <article className="gp-blog-wrap">

        {/* BREADCRUMB */}
        <nav className="mp-breadcrumb">
          <a href="/">Home</a> / <a href="/blog">Blog</a> / <span>Srila Baladeva Vidyabhushana</span>
        </nav>

        {/* HERO */}
        <header className="gp-blog-header">
          <p className="gp-hero-label">Vaishnava Acharya — Gaudiya Parampara</p>
          <h1 className="gp-blog-title">
            Srila Baladeva Vidyabhushana:<br />
            The Gaudiya Acharya Who Defended a Sampradaya
          </h1>
          <div className="gp-hero-line" />
          <p className="gp-blog-subtitle">
            The acharya who prostrated before Govindaji for three days, composed the Govinda-bhashya, and secured the victory of the Gaudiya sampradaya at Galta, Jaipur — 1718 CE
          </p>
          <div className="mp-hero-meta">
            <span>By Srila Prabhupada's ISKCON Thiruvanmiyur Editorial</span>
            <span>·</span>
            <span>May 10, 2026</span>
            <span>·</span>
            <span>~18 min read</span>
          </div>
          <p className="gp-blog-byline">
            Based on the teachings and purports of{" "}
            <strong>His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada</strong>
            {" "}— lectures, letters, room conversations, and sastra purports
          </p>
        </header>

        {/* TABLE OF CONTENTS */}
        <TableOfContents />

        {/* HERO IMAGE */}
        <BlogImage
          hero
          src="/assets/blog/srila-baladeva-vidyabhushana/Srila_Baladeva_Vidyabhushana.png"
          alt="Srila Baladeva Vidyabhushana — Gaudiya Acharya and author of the Govinda-bhashya"
          caption="Srila Baladeva Vidyabhushana — the acharya whose Govinda-bhashya established the Gaudiya sampradaya's philosophical legitimacy before the royal court of Jaipur."
        />

        <Divider />

        {/* SECTION 1 */}
        <h2 id="section-1" className="gp-sh">1. The Day a Commentary Saved a Sampradaya</h2>
        <p>Imagine arriving at a royal court as the sole representative of your entire spiritual tradition — thousands of years of wisdom, the teachings of Lord Chaitanya Mahaprabhu, the philosophical works of the Six Gosvamis of Vrindavana — and being told that unless you produce a written commentary on the Vedanta-sutra, the worship of your beloved Deities will be suspended.</p>
        <p>This was the precise situation Srila Baladeva Vidyabhushana faced in the city of Jaipur in 1718 CE. What he did in response is one of the most celebrated episodes in the entire history of the Gaudiya Vaishnava sampradaya — and it is a story every devotee deserves to know.</p>
        <p>His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada felt so deeply about this acharya's contribution that he dedicated his most widely distributed book — the Bhagavad-gita As It Is — to Srila Baladeva Vidyabhushana. In his own words:</p>
        <Bq>
          <p>"I have dedicated my Bhagavad-gita to Baladeva Vidyabhushana."</p>
          <cite>— Room Conversation, Jan. 24, 1977, Bhubaneswar</cite>
        </Bq>
        <p>For Srila Prabhupada to open his greatest literary gift to the world with a salutation to this acharya is itself the fullest testimony of Baladeva Vidyabhushana's place in the Gaudiya parampara. This article traces his life, his singular achievement, and why his legacy is inseparable from the Krishna consciousness we practise today.</p>

        <Divider />

        {/* SECTION 2 */}
        <h2 id="section-2" className="gp-sh">2. A Scholar Who Sought the Absolute Truth</h2>
        <p>Srila Baladeva Vidyabhushana appeared in Orissa at the end of the seventeenth century or the beginning of the eighteenth. Tradition points to the Balesore district, somewhere near Remuna. He appeared in the family of a vaisya community — his forefathers were agriculturists. Srila Prabhupada specifically mentions this:</p>
        <Bq>
          <p>"He appeared in the family of a vaishya community. His forefathers were agriculturists, but he became a great devotee and great scholar in Sanskrit."</p>
          <cite>— Srila Prabhupada, Lecture, Los Angeles, June 14, 1970</cite>
        </Bq>
        <p>From childhood he demonstrated extraordinary gifts, mastering Sanskrit grammar, poetry, rhetoric, and logic. After completing these studies he went on pilgrimage across India. During this time he studied deeply in Mysore, mastering the commentaries on Vedanta.</p>
        <p>During his travels he encountered the followers of the great teacher Madhvacharya (A.D. 1239-1319). Baladeva mastered their teachings, accepted sannyasa — the renounced order of life — and continued travelling, spreading the Madhva school as he went. He was, by all accounts, a man of formidable intellectual power. But he had not yet found what he was truly looking for.</p>

        <Divider />

        {/* SECTION 3 */}
        <h2 id="section-3" className="gp-sh">3. The Encounter That Changed Everything</h2>
        <p>At Jagannatha Puri, Baladeva Vidyabhushana met Sri Radha-Damodara Deva — a grand-disciple of Sri Rasikananda Deva in the Gaudiya line through Shyamananda Prabhu. In the Siddhanta-ratna, Radha-Damodara is unambiguously acknowledged as his mantra-guru — the guru from whom he received initiation.</p>
        <p>Despite years mastering the greatest philosophical systems of India, the scholar found himself humbled by the depth and completeness of the Gaudiya Vaishnava conclusions — the nature of the Supreme as Sri Krishna, the authority of Srimad-Bhagavatam as the natural commentary on Vedanta-sutra, and the supremacy of bhakti. He recognised here the full answer — sambandha, abhidheya, and prayojana — that all the great scriptures had been pointing toward.</p>
        <p>He surrendered entirely. He accepted initiation and began to study the Sat-sandarbhas of Srila Jiva Gosvami. He also took the dress of a Vaishnava vairagi, at which time he was given the name Ekanti Govinda Das — the servant who is exclusively devoted to Govinda.</p>
        <p>His pancharatrika parampara traces directly to Lord Nityananda Prabhu's associate Gauri Das Pandit: (1) Gauri Das Pandit → (2) Hriday Chaitanya Prabhu → (3) Shyamananda Prabhu → (4) Rasikananda Deva Goswami → (5) Nayanananda Goswami → (6) Radha Damodar Goswami → (7) Baladeva Vidyabhushana.</p>

        <Divider />

        {/* SECTION 4 */}
        <h2 id="section-4" className="gp-sh">4. At the Feet of Vishwanatha Chakravarti Thakura</h2>
        <p>Baladeva Vidyabhushana then went to Vrindavana to study under Vishwanatha Chakravarti Thakura, the foremost Gaudiya Vaishnava scholar of that age. Srila Prabhupada speaks of both these acharyas with the highest reverence:</p>
        <Bq>
          <p>"Vishwanatha Chakravarti Thakura, we say. Baladeva Vidyabhushana Thakura. All the big Vaishnavas, those who are representatives of Krishna, they are called Thakura."</p>
          <cite>— Srila Prabhupada, Lecture on SB 7.9.8-11, Hawaii, March 19, 1969</cite>
        </Bq>
        <Bq>
          <p>"Baladeva Vidyabhushana is a fourth-generation acharya from Lord Chaitanya — fourth or fifth. Anyway, he is one of the acharyas."</p>
          <cite>— Srila Prabhupada, Lecture, Los Angeles, June 14, 1970</cite>
        </Bq>
        <Bq>
          <p>"Sri Chaitanya Mahaprabhu amalgamated the views of all the previous acharyas in His thesis of acintya-bhedabheda tattva explicitly explained by Sri Baladeva Vidyabhushana in his Govinda-bhashya of the Vedanta-sutra."</p>
          <cite>— Srila Prabhupada, Letter to Sri Biswambhar Gosvami, Vrindavana, Dec. 1956</cite>
        </Bq>

        <Divider />

        {/* SECTION 5 */}
        <h2 id="section-5" className="gp-sh">5. The Challenge at Jaipur: When a Sampradaya Was on Trial</h2>

        <h3 className="gp-sh3">The Background: Rupa Gosvami's Own Deity in Jaipur</h3>
        <p>To understand the full gravity of what happened at Jaipur, one must first know which Deity was at stake. The Govindaji Deity worshipped in Jaipur is none other than the original Deity of Srila Rupa Gosvami — the Deity originally installed approximately five thousand years ago by Vajranabha, the great-grandson of Lord Krishna, and later rediscovered by Rupa Gosvami under direct instruction from Sri Chaitanya Mahaprabhu.</p>
        <p>When the Mughal emperor Aurangzeb sent his armies to destroy the Govindaji temple in Vrindavana around 1669-70 CE, Maharaja Sawai Jai Singh II of Jaipur — a deeply devoted Vaishnava — personally rushed to Vrindavana, rescued the original Govindaji Deity, and brought Him safely to Jaipur. Govindaji was moved to the present temple in Jaipur around 1728, situated next to the City Palace, from where the Maharaja could behold the Deity's darshan from his own royal quarters.</p>

        <BlogImage
          src="/assets/blog/srila-baladeva-vidyabhushana/Sri_Govindaji_Temple_Jaipur.png"
          alt="Sri Govindaji Temple, Jaipur"
          caption="Sri Govindaji Temple, Jaipur — where Srila Baladeva Vidyabhushana lay prostrate for three days before Srila Rupa Gosvami's original Deity, seeking divine sanction to compose the Govinda-bhashya."
        />

        <h3 className="gp-sh3">The Smarta-Brahmana Objection</h3>
        <p>The challenge came from smarta-brahmanas. Srila Prabhupada explains the principle at stake:</p>
        <Bq>
          <p>"In India, unless one follows the acharyas and has given commentary on the Brahma-sutra, he's not a bona fide. So any bona fide acharya must give his understanding about these three prasthanas: Sruti, Smriti, Nyaya."</p>
          <cite>— Srila Prabhupada, Interview, Toronto, June 18, 1976</cite>
        </Bq>
        <p>Using this principle, the challengers declared the Gaudiya sampradaya could not be considered a bona fide Vedic tradition — and therefore could not conduct Deity worship. They also objected to the worship of Srimati Radharani alongside Sri Govinda as unauthorised by sastra.</p>
        <p>Srila Prabhupada explains why the Gaudiya Vaishnavas had not previously written a Vedanta commentary:</p>
        <Bq>
          <p>"So far we are concerned, Madhva-Gaudiya Sampradaya, our acharyas took Srimad-Bhagavatam as the right commentary on Brahma-sutra. Chaitanya Mahaprabhu took Srimad-Bhagavatam as a natural commentary, because Srimad-Bhagavatam is also made by Vyasadeva and Vyasadeva is the original author of Brahma-sutra. So the author made his own commentary; so there was no need of another commentary. But those who are smarta-brahmanas, they objected in Jaipur."</p>
          <cite>— Srila Prabhupada, Lecture on BG 13.8-12, Bombay, Sept. 30, 1973</cite>
        </Bq>
        <p>Maharaja Sawai Jai Singh II — who had himself been initiated into the Gaudiya sampradaya — was bound by the assembly's protocol to suspend the Gaudiya pujaris. He quietly sent word to Vrindavana requesting the sampradaya produce a Vedanta commentary.</p>

        <h3 className="gp-sh3">Vishwanatha Chakravarti Thakura Sends Sri Baladeva</h3>
        <p>Srila Prabhupada narrates what happened next:</p>
        <Bq>
          <p>"In Jaipur, there was a challenge that 'The Gaudiya Sampradaya has no commentary on the Vedanta-sutra.' So at that time Vishwanatha Chakravarti Thakura was very old at that time, so he authorized Baladeva Vidyabhushana, that 'You do it.' There was no need, but people are demanding... So Baladeva Vidyabhushana, with the order of Govindaji at Jaipur, he wrote the commentary on Brahma-sutra. That name is Govinda-bhashya, commentary of Govinda. So the Gaudiya-Brahma Sampradaya, they have got also commentary on Brahma-sutra."</p>
          <cite>— Srila Prabhupada, Lecture on BG 13.8-12, Bombay, Sept. 30, 1973</cite>
        </Bq>

        <h3 className="gp-sh3">Three Days Prostrate Before Govindaji</h3>
        <p>Upon arriving in Jaipur, Baladeva Vidyabhushana went directly to the temple of Govindaji — the very Deity of Srila Rupa Gosvami — and fell at His feet in prayer. He did not immediately begin writing simply because he had the intellectual capacity to do so. Srila Prabhupada explains:</p>
        <Bq>
          <p>"This is the acharya, that 'Unless I am authorized, unless I am empowered, how I can write?' This is Vaishnava. Not that 'Because I have got some A-B-C-D knowledge I can write something.' No. You cannot write anything unless you are authorized by the disciplic succession. You have no access in it."</p>
          <cite>— Srila Prabhupada, Lecture, Los Angeles, June 14, 1970</cite>
        </Bq>
        <Bq>
          <p>"This Baladeva Vidyabhushana went to Jaipur, and for three days continually he laid himself flat, just like we offer obeisances in that way, without taking any food and water, asking permission from Govinda... Govindaji informed him, 'Yes, you write. I give you order.' So he began to write this bhashya, commentary of Vedanta-sutra, and it came out very, very successful."</p>
          <cite>— Srila Prabhupada, Lecture, Los Angeles, June 14, 1970</cite>
        </Bq>

        <BlogImage
          src="/assets/blog/srila-baladeva-vidyabhushana/Baladeva_at_Govindaji.png"
          alt="Srila Baladeva Vidyabhushana sought the blessings of Sri Govindaji to write the Govinda-bhashya"
          caption="Srila Baladeva Vidyabhushana prostrate before Sri Govindaji — seeking the Lord's personal sanction before composing a single word of the Govinda-bhashya."
        />

        <p>According to tradition, Govinda-deva's garland fell as a sign of divine sanction. And so he named his commentary 'Govinda-bhashya' — indicating: "These are not my words; I have written whatever Govinda-deva made me write." He wrote in the colophon: "Govinda, appearing in my dream, ordered this bhashya."</p>

        <h3 className="gp-sh3">The Debate at Galta — Victory of the Sampradaya</h3>
        <p>Having composed the Govinda-bhashya, Srila Baladeva Vidyabhushana brought it to the formal assembly — held at Galta (also written Goltaji), the sacred kund complex outside Jaipur city. When the commentary was presented, the scholars were rendered speechless. The Gaudiya sampradaya was declared victorious. The assembly took place in the year 1628 Sakabda, corresponding to 1718 CE.</p>

        <BlogImage
          src="/assets/blog/srila-baladeva-vidyabhushana/Galta_historic_site.png"
          alt="Galta — the historic site where the Gaudiya Sampradaya's legitimacy was challenged and won"
          caption="Galta (Goltaji), Jaipur — the sacred kund complex where the formal assembly was held and Srila Baladeva Vidyabhushana presented the Govinda-bhashya, securing the Gaudiya sampradaya's victory."
        />

        <p>The assembly of panditas conferred upon Baladeva the title <em>Vidyabhushana</em> — "one whose ornament is knowledge." Maharaja Sawai Jai Singh II decreed that from that day onwards, the arati of Sri Govindaji would be performed first before all other temples in the kingdom. The Gaudiya pujaris were reinstated and the worship of Sri Govindaji — with Srimati Radharani — resumed in full glory.</p>

        <h3 className="gp-sh3">Vijaya Gopala — Commemorating the Victory</h3>
        <p>At Galta — the very site of the assembly — Srila Baladeva Vidyabhushana installed the Deity of Vijaya Gopala. The name says everything: 'Vijaya' means victory. This Deity was installed as a permanent commemoration of the sampradaya's triumph at that sacred spot.</p>

        <Divider />

        {/* SECTION 6 */}
        <h2 id="section-6" className="gp-sh">6. What Every Acharya Gives: Srila Prabhupada's Teaching</h2>
        <p>Srila Prabhupada uses the occasion of Baladeva Vidyabhushana's appearance day to explain a profound principle about the nature of the acharya:</p>
        <Bq>
          <p>"Every acharya means he gives some special things. Previous acharya has given, and the next acharya gives something more. That is the symptom of acharya."</p>
          <cite>— Srila Prabhupada, Lecture, Los Angeles, June 14, 1970</cite>
        </Bq>
        <Bq>
          <p>"So Sri Baladeva Vidyabhushana also gave a further lift to this sampradaya. What is that? Baladeva Vidyabhushana wrote commentary on Brahma-sutra, Vedanta-sutra. Vedanta-sutra, his Vedanta-sutra commentary is known as Govinda-bhashya, commentary of Govinda."</p>
          <cite>— Srila Prabhupada, Lecture, Los Angeles, June 14, 1970</cite>
        </Bq>
        <Bq>
          <p>"The acharya's sampradaya... if my previous acharyas have written something, he will not touch those points, but he will write something which can develop further. That is acharya, not that chewing the chewed. If he at all writes, he will write something which will beautify, or glorify, or magnify the former idea."</p>
          <cite>— Srila Prabhupada, Lecture, Los Angeles, June 14, 1970</cite>
        </Bq>

        <Divider />

        {/* SECTION 7 */}
        <h2 id="section-7" className="gp-sh">7. How Srila Prabhupada Honours This Acharya</h2>
        <p>Across his books, lectures, conversations, and letters, His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada references Srila Baladeva Vidyabhushana with consistent reverence. The following are verified citations from authenticated works:</p>
        <Bq>
          <p>"Srila Baladeva Vidyabhushana, a great scholar and acharya in the line of the mat-para, remarks: 'The senses can be completely controlled only by the strength of devotional service to Krishna.'"</p>
          <cite>— Bhagavad-gita As It Is, 2.61, Purport</cite>
        </Bq>
        <Bq>
          <p>"Many devotees of Lord Chaitanya like Srila Vrindavana dasa Thakura, Sri Locana dasa Thakura... and in this latter age within two hundred years, Sri Visvanatha Cakravarti, Sri Baladeva Vidyabhushana, Sri Syamananda Gosvami, Sri Narottama dasa Thakura, Sri Bhaktivinoda Thakura and at last Sri Bhaktisiddhanta Sarasvati Thakura (our spiritual master) and many other great and renowned scholars and devotees of the Lord have prepared voluminous books and literatures on the life and precepts of the Lord."</p>
          <cite>— Srimad-Bhagavatam, Introduction</cite>
        </Bq>

        <Divider />

        {/* SECTION 8 */}
        <h2 id="section-8" className="gp-sh">8. An Ocean of Sastric Contribution</h2>
        <p>Srila Baladeva Vidyabhushana's literary output was vast, encompassing every major domain of Gaudiya Vaishnava theology. In each of his works he bows first to Sri Rupa and Sanatana Gosvamis, calling them the clouds that dispel the dust storms of Mayavada philosophy.</p>

        <div className="gp-teachings-list" style={{ marginTop: "1.25rem" }}>
          {[
            { title: "Govinda-bhashya", desc: "The first and only Gaudiya Vaishnava commentary on the Vedanta-sutra. Written in the tradition of acintya-bhedabheda, it establishes Sri Krishna as the ultimate subject of all Vedic inquiry. Srila Prabhupada expressed the desire to see it presented to the Western world." },
            { title: "Gita-bhushana Bhashya", desc: "A complete commentary on the Bhagavad-gita. Srila Prabhupada draws upon it directly throughout the Bhagavad-gita As It Is purports — particularly in chapters 2, 3, 8, 10, and 13." },
            { title: "Prameya-ratnavali", desc: "A short but philosophically decisive work outlining the nine principles held in common by the Madhva and Gaudiya schools, firmly establishing the Gaudiya sampradaya's connection to the Brahma-Madhva lineage. Available in English translation." },
            { title: "Siddhanta-ratna", desc: "A detailed philosophical treatise addressing key questions of Vaishnava siddhanta. Directly cited by Srila Prabhupada in the Srimad-Bhagavatam 5.26.40 supplementary note." },
            { title: "Commentaries on the Sat-sandarbhas", desc: "Srila Prabhupada specifically recommends these in the Srimad-Bhagavatam 3.7.39 purport: anyone serious about becoming a pure devotee must consult Baladeva Vidyabhushana's commentary on the Tattva-sandarbha." },
            { title: "Other Principal Works", desc: "He also composed: Vedanta-syamantaka, Siddhanta-darpana, Sahitya-kaumudi, Vyakarana-kaumudi, Vishnu-sahasra-nama-bhashya (Namartha Sudha), Vaishnava-nandini-tika, Stava-mala-vibhushana-bhashya, and several others. As Srila Prabhupada notes: 'He has written many other books, Baladeva Vidyabhushana... all in Sanskrit.'" },
          ].map(({ title, desc }) => (
            <div key={title} className="gp-teaching-item">
              <strong>{title} —</strong> {desc}
            </div>
          ))}
        </div>

        <Divider />

        {/* SECTION 9 */}
        <h2 id="section-9" className="gp-sh">9. Lila Sthali: Sacred Places Connected to Srila Baladeva Vidyabhushana</h2>
        <p>For devotees who visit Vrindavana or Jaipur, knowing the sacred places connected to this great acharya is a privilege and a responsibility.</p>

        <div className="gp-teachings-list" style={{ marginTop: "1.25rem" }}>
          {[
            { title: "Sri Govindaji Temple, Jaipur", desc: "It was here — before the original Govindaji Deity of Srila Rupa Gosvami — that Srila Baladeva Vidyabhushana lay prostrate for three full days without food or water, seeking Lord Govinda's divine sanction to compose the Govinda-bhashya. Govinda-deva's garland fell as a sign of acceptance. Every devotee who visits the Govindaji temple stands before the very same Deity who empowered this acharya to save the sampradaya." },
            { title: "Galta (Goltaji), Jaipur", desc: "The sacred kund complex outside Jaipur city — famous for the miraculous appearance of the Ganga from a rock — is where the formal assembly of scholars was held and where Srila Baladeva Vidyabhushana secured the victory of the Gaudiya sampradaya. To commemorate this triumph, he installed the Deity of Vijaya Gopala here. There is still a small temple of Srila Baladeva Vidyabhushana at Galta, where his Deities and approximately one hundred Shaligram Shilas are enshrined." },
            { title: "Gokulananda Mandir, Vrindavana", desc: "The Gokulananda temple houses the personal Deities of Srila Baladeva Vidyabhushana — Sri Jaya Govinda and Sri Vijaya Govinda — which he personally worshipped. This temple also houses the Deities of Lokanatha Gosvami and Visvanatha Cakravarti Thakura. Devotees visiting Vrindavana should take darshan of Sri Jaya and Vijaya Govinda here." },
            { title: "Sri Radha Shyamasundara Temple, Vrindavana", desc: "His Samadhi — After his victory at Jaipur, Srila Baladeva Vidyabhushana became the main priest of Sri Sri Radha Shyamasundara. He also installed the larger Deity of Syamasundara in this temple. Most significantly: the samadhi of Srila Baladeva Vidyabhushana is located behind the altar of this temple. Every devotee visiting Vrindavana should offer dandavats at this Samadhi." },
          ].map(({ title, desc }) => (
            <div key={title} className="gp-teaching-item">
              <strong>{title} —</strong> {desc}
            </div>
          ))}
        </div>

        <BlogImage
          src="/assets/blog/srila-baladeva-vidyabhushana/Radha_Vijaya_Govinda.png"
          alt="Sri Sri Radha Vijaya Govinda — the larger Deities on the right worshipped by Baladeva Vidyabhushana"
          caption="Sri Sri Radha Vijaya Govinda — the larger Deities on the right, installed and worshipped by Srila Baladeva Vidyabhushana at the Radha Shyamasundara Temple, Vrindavana."
        />

        <BlogImage
          src="/assets/blog/srila-baladeva-vidyabhushana/Samadhi_Vrindavan.png"
          alt="Samadhi of Srila Baladeva Vidyabhushana at the Radha Shyamasundara Temple, Vrindavana"
          caption="The Samadhi of Srila Baladeva Vidyabhushana behind the altar of Sri Radha Shyamasundara Temple, Vrindavana — where devotees offer their prostrated obeisances."
        />

        <Divider />

        {/* SECTION 10 */}
        <h2 id="section-10" className="gp-sh">10. Passing From This World and an Eternal Legacy</h2>
        <p>After the victory at Jaipur, Srila Baladeva Vidyabhushana returned to Vrindavana, presented the certificate of victory to Srila Vishwanatha Chakravarti Thakura, and narrated all that had transpired. All the devotees were in great ecstasy. Chakravarti Thakura bestowed his complete blessings on his dear student.</p>
        <p>After the passing of Vishwanatha Chakravarti Thakura, Baladeva Vidyabhushana became the leader of the Gaudiya Vaishnavas — the one who preserved the philosophical integrity of the sampradaya in the critical period between the Six Gosvamis' era and the modern acharyas.</p>
        <p>The parampara flowing eventually reached Srila Bhaktivinoda Thakura, Srila Bhaktisiddhanta Sarasvati Thakura, and then Srila Prabhupada himself — the very person who brought Gaudiya Vaishnavism to every corner of the world.</p>
        <Bq>
          <p>"He left this world for Lord Krishna's abode in 1768."</p>
          <cite>— Back to Godhead Magazine, #29-03, 1995</cite>
        </Bq>

        <Divider />

        {/* SECTION 11 */}
        <h2 id="section-11" className="gp-sh">11. Why His Life Speaks to Us Today</h2>
        <p>You may never read the Govinda-bhashya in Sanskrit. You may not be a scholar of Vedanta philosophy. Yet the fact that you can walk into any ISKCON temple — see Sri Radha and Krishna worshipped together on the altar, and hear Bhagavad-gita explained in its full philosophical depth — all of this rests, in no small measure, on what Srila Baladeva Vidyabhushana accomplished at the Govindaji temple and at Galta, Jaipur, in 1718.</p>
        <Bq>
          <p>"So it is our duty to commemorate the memory, I mean to say, activities of the acharyas and offer our respect and ask from them benediction for our progress. That is the system. Therefore we have listed the appearance and disappearance of the acharyas. We should take advantage of these auspicious dates and offer our respect to the acharyas."</p>
          <cite>— Srila Prabhupada, Lecture, Los Angeles, June 14, 1970</cite>
        </Bq>
        <p>The best way to honour Srila Baladeva Vidyabhushana on his appearance day is to go deeper into the philosophy he protected — and Srila Prabhupada has made that philosophy available to all of us in his matchless books. Every time we open the Bhagavad-gita As It Is and encounter a purport where Srila Prabhupada writes 'as Acharya Baladeva Vidyabhushana writes' — we are receiving the direct transmission of a chain linking us back to Sri Chaitanya Mahaprabhu, and ultimately to Sri Krishna Himself.</p>

        <Divider />

        {/* PRANAMA MANTRA */}
        <div className="gp-verse">
          <div className="gp-verse-skt">
            govinda-bhāṣya-karaṁ śrī gauḍīya-guru-sūryāya<br />
            baladeva-prabhuṁ vande vidyābhūṣaṇa-saṁjñakam
          </div>
          <div className="gp-verse-body">
            <p>"I offer my obeisances unto Srila Baladeva Vidyabhushana,<br />
            who is like the sun amongst Gaudiya acharyas,<br />
            who composed the Govinda-bhashya and is very dear to Lord Govindaji."</p>
            <cite>— Pranama-mantra to Srila Baladeva Vidyabhushana</cite>
          </div>
        </div>

        <Divider />

        {/* FAQs */}
        <h2 id="section-faq" className="gp-sh">Frequently Asked Questions</h2>
        <div className="gp-faq-grid">
          {faqs.map((f, i) => <FaqItem key={i} {...f} />)}
        </div>

        <Divider />

        {/* CONNECT */}
        <section className="gp-connect-section">
          <h2 className="gp-connect-h">Connect with Hare Krishna Movement Chennai</h2>
          <p className="gp-connect-desc">
            Follow us across platforms for daily darshan, event updates, and spiritual content.
          </p>
          <div className="gp-social-grid">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="gp-social-card">
                <span className="gp-s-icon">{s.icon}</span>
                <div className="gp-s-text">
                  <span className="gp-s-label">{s.label}</span>
                  <span className="gp-s-url">{s.display}</span>
                </div>
                <span className="gp-s-arrow">→</span>
              </a>
            ))}
          </div>
        </section>

        <footer className="gp-blog-footer">
          <p>Hare Krishna Movement Chennai | Dakshina Dwaraka Dham, Thiruvanmiyur</p>
          <p>Affiliated to ISKCON Bangalore | Non-Profit Charitable Organisation Regn. No. 828, Chennai, 2008</p>
        </footer>

      </article>

      <Footer />
    </main>
  );
}
