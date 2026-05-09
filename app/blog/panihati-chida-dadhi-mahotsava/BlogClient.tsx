"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import "./styles.css";

const socialLinks = [
  { icon: "🌍", label: "Website", display: "hkmchennai.org", url: "https://hkmchennai.org/" },
  { icon: "🕊", label: "Twitter (X)", display: "@ChennaiHare", url: "https://x.com/ChennaiHare" },
  { icon: "📸", label: "Instagram", display: "@hkm_chennai", url: "https://www.instagram.com/hkm_chennai" },
  { icon: "💼", label: "LinkedIn", display: "HKM Chennai", url: "https://www.linkedin.com/company/hare-krishna-movement-chennai/" },
  { icon: "🎯", label: "Support", display: "campaigns.hkmchennai.org", url: "https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign" },
  { icon: "📲", label: "WhatsApp", display: "Join our WhatsApp Channel", url: "https://www.whatsapp.com/channel/0029Vaa2fjKEVccFHx5YDt1O" },
];

const faqs = [
  {
    q: "What does 'Chida Dadhi' mean?",
    a: "Chida (also spelled chira or poha) refers to flattened or chipped rice — a common staple across India. Dadhi means yogurt. Together, chida dadhi is the prasadam that forms the centrepiece of this festival, prepared following the pattern described in the Chaitanya-charitamrita, Antya-lila 6.",
  },
  {
    q: "Is the festival only for ISKCON devotees?",
    a: "Not at all. The Panihati Mahotsava, both historically and as celebrated at HKM Chennai, is open to everyone. The original festival at Panihati itself welcomed all comers — brahmanas, traders, shopkeepers, curious bystanders — and fed them all. That inclusive spirit continues.",
  },
  {
    q: "Can children attend?",
    a: "Absolutely. The festival is family-friendly. The drama presentation is particularly accessible to children, and the prasadam distribution is something the whole family can enjoy together.",
  },
  {
    q: "Is there an entry fee?",
    a: "No. Entry to the festival, participation in all programmes, and the mahaprasadam distribution are all completely free of charge.",
  },
  {
    q: "What is the significance of Lord Nityananda in this festival?",
    a: "Lord Nityananda Prabhu is understood in the Gaudiya tradition as the embodiment of divine mercy — specifically the mercy accessible even to the most fallen souls. The Panihati pastime perfectly illustrates this: He transformed what could have been an ordinary meeting into a transcendental festival, and in doing so personally blessed Raghunatha Dasa and, through him, all future participants in this celebration.",
  },
  {
    q: "Where is Panihati, and can one visit?",
    a: "Panihati is a town approximately 20 kilometres north of Kolkata on the western bank of the Hooghly river in West Bengal. There is a temple marking the site of the festival, and it is included in pilgrimage itineraries of the Gauda-mandala circuit that devotees undertake through West Bengal.",
  },
  {
    q: "How does observing this festival benefit the devotee?",
    a: "Lord Nityananda Himself gave the answer: by His causeless mercy, all impediments meant for the devotee's bondage are removed, and one obtains the shelter of Sri Chaitanya Mahaprabhu (Antya-lila 6.141-143). Participating in the festival — the kirtana, hearing the pastime, taking mahaprasadam — all constitute direct devotional service which purifies the heart and strengthens one's connection to the Lord.",
  },
];

function Bq({ children }: { children: React.ReactNode }) {
  return <blockquote className="gp-bq">{children}</blockquote>;
}

function Divider() {
  return <div className="gp-divider">✦</div>;
}

function BlogImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div className="gp-image-container">
      <img src={src} alt={alt} className="gp-image" />
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
          <a href="/">Home</a> / <a href="/blog">Blog</a> / <span>Panihati Chida Dadhi Mahotsava</span>
        </nav>

        {/* HERO */}
        <header className="gp-blog-header">
          <p className="gp-hero-label">~ Divine Appearance Festival ~</p>
          <h1 className="gp-blog-title">
            Panihati Chida Dadhi Mahotsava:<br />
            The Blissful Festival of Chipped Rice and Nityananda's Mercy
          </h1>
          <div className="gp-hero-line" />
          <p className="gp-blog-subtitle">
            The day Lord Nityananda "punished" Raghunatha Dasa Goswami with a feast that fed thousands — and opened the door to Sri Chaitanya Mahaprabhu's mercy
          </p>
          <div className="mp-hero-meta">
            <span>By HKM Team</span>
            <span>·</span>
            <span>May 2026</span>
            <span>·</span>
            <span>~12 min read</span>
          </div>
          <p className="gp-blog-byline">
            Based on <strong>Sri Chaitanya-charitamrita, Antya-lila, Chapter 6</strong>{" "}
            and the teachings of{" "}
            <strong>His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada</strong>
          </p>
        </header>

        {/* HERO IMAGE */}
        <BlogImage
          src="/assets/blog/panihati-chida-dadhi-mahotsava/Lord_Chaitanya_Mahaprabhu_and_Lord_Nityananda_Prabhu_joyfully_participate_in_the_Panihati_Chida-Dadhi_Mahotsava..png"
          alt="Lord Chaitanya Mahaprabhu and Lord Nityananda Prabhu joyfully participating in the Panihati Chida Dadhi Mahotsava"
          caption="Lord Chaitanya Mahaprabhu and Lord Nityananda Prabhu joyfully participating in the Panihati Chida Dadhi Mahotsava — the transcendental festival of chipped rice and yogurt on the banks of the Ganges."
        />

        <Divider />

        {/* SECTION 1 */}
        <h2 className="gp-sh">1. What Is the Panihati Chida Dadhi Mahotsava?</h2>
        <p>Every year, on the Ekadasi of the bright fortnight in the month of Jyestha (May–June), Vaishnavas across the world gather to celebrate the Panihati Chida Dadhi Mahotsava — a festival of pure joy, overflowing grace, and delicious prasadam. The name itself is a doorway into the pastime: <em>Panihati</em> is the village on the banks of the Ganges where the event took place; <em>chida</em> means flattened or chipped rice; <em>dadhi</em> means yogurt; and <em>mahotsava</em> means great festival.</p>
        <p>At its heart, this is not merely a cultural event. It is the anniversary of a divine command — the day Lord Nityananda Prabhu, in His infinite mercy and characteristic playfulness, ordered Sri Raghunatha Dasa Goswami to feed all the Vaishnavas with chipped rice mixed with yogurt, condensed milk, bananas, and sugar. What began as a "punishment" became one of the most celebrated feasts in Gaudiya Vaishnava history.</p>
        <Bq>
          <p><em>Imagine a gathering where hundreds of people sit on the banks of a river, eating together in pure happiness, remembering God — and where God Himself joins in, invisibly but really. That is the Panihati Mahotsava.</em></p>
        </Bq>

        <Divider />

        {/* SECTION 2 */}
        <h2 className="gp-sh">2. Who Was Srila Raghunatha Dasa Goswami?</h2>
        <p>To understand the festival, we first need to understand the man at its centre — Sri Raghunatha Dasa Goswami, one of the Six Gosvamis of Vrindavana and among the most intimate associates of Sri Chaitanya Mahaprabhu.</p>

        <BlogImage
          src="/assets/blog/panihati-chida-dadhi-mahotsava/Srila_Raghunath_Dasa_Goswami.png"
          alt="Srila Raghunatha Dasa Goswami"
          caption="Srila Raghunatha Dasa Goswami — one of the Six Gosvamis of Vrindavana, whose intense renunciation and pure devotion remain an eternal inspiration for all Gaudiya Vaishnavas."
        />

        <p>Raghunatha Dasa was born into immense wealth. His father, Govardhana, and uncle, Hiranya Dasa, were among the wealthiest landlords of Bengal. His wife was famously beautiful, his household well-ordered, and every material comfort was available without effort. To the world around him, he had everything.</p>
        <p>Yet from a young age, Raghunatha Dasa burned with a single desire — to surrender completely at the lotus feet of Sri Chaitanya Mahaprabhu and live the life of a renounced devotee. The Chaitanya-charitamrita describes how he made repeated attempts to leave home. His mother once told his father despairingly: "Our son has become mad. Just keep him by binding him with ropes." His father replied with quiet wisdom:</p>
        <Bq>
          <p>"Raghunatha dasa, our son, has opulences like Indra, the heavenly king, and his wife is as beautiful as an angel. Yet all this could not tie down his mind. How then could we keep this boy home by binding him with ropes? It is not possible even for one's father to nullify the reactions of one's past activities."</p>
          <cite>— Sri Chaitanya-charitamrita, Antya-lila 6.39–40</cite>
        </Bq>
        <p>This is the extraordinary quality of a soul touched by genuine bhakti — no amount of material comfort can substitute for the direct shelter of the Lord. Raghunatha Dasa eventually reached Jagannatha Puri and was placed under the care of Svarupa Damodara Goswami by Sri Chaitanya Mahaprabhu Himself. He later moved to Vrindavana, where he lived a life of extreme renunciation — living on a few morsels of rejected food, sleeping minimal hours, chanting constantly.</p>

        <Divider />

        {/* SECTION 3 */}
        <h2 className="gp-sh">3. The Pastime: How the Festival Came to Be</h2>
        <p>The story unfolds in the village of Panihati. Lord Nityananda Prabhu — the embodiment of divine mercy and the elder brother of Sri Chaitanya Mahaprabhu — was sitting beneath a great tree on the bank of the Ganges, surrounded by hundreds of devotees. He was resplendent, His effulgence comparable to hundreds of thousands of rising suns (Antya-lila 6.44).</p>
        <p>Raghunatha Dasa arrived and offered his prostrated obeisances from a distance. Lord Nityananda, who misses nothing, immediately called out to him — and with His characteristic mixture of affection and mischief, declared:</p>
        <Bq>
          <p>"You are a thief. Now you have come to see Me. Come here, come here. Today I shall punish you!"</p>
          <cite>— Lord Nityananda Prabhu, Chaitanya-charitamrita, Antya-lila 6.47</cite>
        </Bq>
        <p>Before Raghunatha Dasa could approach, the Lord caught him and placed His lotus feet upon his head. Then came the "punishment": <em>feed all My associates with yogurt and chipped rice.</em></p>
        <p>What followed was extraordinary. Raghunatha Dasa immediately sent his men to purchase chipped rice, yogurt, milk, sugar, bananas, and various sweetmeats from surrounding villages. As word spread, learned scholars, brahmanas, priests, and devotees arrived by the hundreds — then thousands. Huge earthen pots were filled with chipped rice soaked in hot milk, then mixed with yogurt, sugar, and bananas. Another preparation was made with condensed milk, campa-kala bananas, clarified butter, and camphor. Two pots were offered to each person (Antya-lila 6.53–58).</p>
        <p>Some sat on the raised platform, some on the riverbank, some waded into the Ganges itself and ate standing in the water, such was the overflow of the gathering.</p>

        <BlogImage
          src="/assets/blog/panihati-chida-dadhi-mahotsava/Lord_Nityananda_Prabhu_bestowing_His_causeless_mercy_upon_Raghunatha_dasa_Goswami_at_the_Panihati.png"
          alt="Lord Nityananda Prabhu bestowing His causeless mercy upon Raghunatha Dasa Goswami at the Panihati festival"
          caption="Lord Nityananda Prabhu bestowing His causeless mercy upon Raghunatha Dasa Goswami at Panihati — placing His lotus feet upon the devotee's head and ordering the great festival of chipped rice."
        />

        <p>Then came the moment that transforms this story from a generous feast into a transcendental event. Lord Nityananda, in meditation, brought Sri Chaitanya Mahaprabhu to the site. As Nityananda walked through the groups of eating devotees, He playfully pushed a morsel of chipped rice into the mouth of Sri Chaitanya Mahaprabhu, who smiled and returned the gesture. Most could not see this exchange; only the most fortunate devotees, absorbed in ecstatic love, perceived that Sri Chaitanya Mahaprabhu was present (Antya-lila 6.77–82).</p>
        <p>The following morning, Lord Nityananda placed His lotus feet upon Raghunatha Dasa's head and gave him the great benediction — Sri Chaitanya Mahaprabhu Himself had come to Panihati for his sake. Return home. Very soon, without any obstacles, you will attain His shelter. That promise was fulfilled within a short time, when Raghunatha Dasa finally reached Sri Chaitanya Mahaprabhu at Jagannatha Puri.</p>

        <Divider />

        {/* SECTION 4 */}
        <h2 className="gp-sh">4. Panihati: The Sacred Festival Site</h2>
        <p>Panihati — located on the western bank of the Hooghly (Ganges) river, approximately 20 kilometres north of Kolkata in West Bengal — holds a place of great affection in Gaudiya Vaishnava geography. It was here that Lord Nityananda Prabhu regularly visited and stayed with His close associate Raghava Pandita, whose home became a place where both Lord Nityananda and Sri Chaitanya Mahaprabhu were said to partake of prasadam.</p>
        <p>The kitchen of Raghava Pandita's house is described in the Chaitanya-charitamrita as one where Srimati Radharani Herself cooked, owing to a benediction received from Durvasa Muni that whatever She cooked would be sweeter than nectar (Antya-lila 6.115–116).</p>
        <p>A temple at Panihati today marks the site of the festival — specifically the location of the great tree on the Ganges bank under which Lord Nityananda sat. The place breathes with the memory of that extraordinary afternoon when God and devotee sat together on a riverbank eating chipped rice.</p>

        <Divider />

        {/* SECTION 5 */}
        <h2 className="gp-sh">5. How Panihati Reveals the Pastimes of Vrindavana</h2>
        <p>The Panihati festival is not simply a commemoration of a historical event. It is a re-enactment of something far more ancient — the simple, joyful meals that Krishna and Balarama shared with Their cowherd friends on the banks of the Yamuna in Vrindavana.</p>
        <p>This parallel is stated directly in the Chaitanya-charitamrita. As Lord Nityananda walked among the groups of devotees eating their chida dadhi by the Ganges, the most fortunate among them were transported entirely:</p>
        <Bq>
          <p>"All the confidential devotees who were cowherd boys, headed by Sri Ramadasa, were absorbed in ecstatic love. They thought the bank of the Ganges to be the bank of the Yamuna."</p>
          <cite>— Sri Chaitanya-charitamrita, Antya-lila 6.90</cite>
        </Bq>
        <Bq>
          <p>"When all the Vaishnavas were chanting the holy names 'Hari, Hari' and eating, they remembered how Krishna and Balarama ate with Their companions the cowherd boys on the bank of the Yamuna."</p>
          <cite>— Sri Chaitanya-charitamrita, Antya-lila 6.87</cite>
        </Bq>
        <p>Lord Nityananda Himself makes this connection explicit:</p>
        <Bq>
          <p>"I belong to a community of cowherd boys, and therefore I generally have many cowherd associates with Me. I am happy when we eat together in a picnic like this by the sandy bank of the river."</p>
          <cite>— Sri Chaitanya-charitamrita, Antya-lila 6.75</cite>
        </Bq>
        <p>This is the inner meaning of the feast. Lord Nityananda is Balarama — Krishna's elder brother and eternal companion. When He sits with His associates on the riverbank and eats simple food, He is restoring, for those present, the atmosphere of Vrindavana itself. The Ganges becomes the Yamuna. The devotees become the cowherd boys. The chipped rice and yogurt become the simple forest picnic of the eternal pastimes.</p>
        <p>When we participate in the Panihati Chida Dadhi Mahotsava — sitting together, chanting, eating prasadam by the grace of Lord Nityananda — we are, in the Vaishnava understanding, being given a taste of that same Vrindavana mood.</p>

        <Divider />

        {/* SECTION 6 */}
        <h2 className="gp-sh">6. Srila Prabhupada on the Panihati Festival</h2>
        <p>His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada spoke about the Panihati pastime and its significance for practising devotees on several occasions. This festival offers the mercy of Lord Nityananda — the gateway through which the most conditioned souls can approach Sri Chaitanya Mahaprabhu.</p>
        <Bq>
          <p>"Just like Raghunatha dasa Goswami did. He came here, lived in Vrndavana. He was a very, very rich man's son. Five hundred years ago his father's income was twelve lakhs of rupees. And very beautiful wife. But he was not attracted. He was not even going inside the house. He was lying down outside the house, young man. He had no taste for visaya. Therefore later on he became Raghunatha dasa Goswami."</p>
          <cite>— Srila Prabhupada, Lecture on Srimad-Bhagavatam 6.2.14, Vrindavana, September 17, 1975</cite>
        </Bq>
        <p>Srila Prabhupada also emphasised the significance of prasadam distribution as a core devotional activity, frequently citing the Panihati festival as a historical precedent. The principle of feeding everyone who arrives — invited or not, devotee or curious bystander — is the Vaishnava expression of universal compassion. This is the principle behind ISKCON's worldwide prasadam distribution programme and the Sunday feast tradition that Srila Prabhupada established from the very beginning of his preaching in the West.</p>

        <Divider />

        {/* SECTION 7 */}
        <h2 className="gp-sh">7. How We Celebrate at Dakshina Dwaraka Dham, Chennai</h2>
        <p>At Dakshina Dwaraka Dham — Srila Prabhupada's ISKCON Thiruvanmiyur, Chennai — the Panihati Chida Dadhi Mahotsava is observed as a full evening of devotional celebration, open to all without any entry fee or prior registration.</p>

        <div className="gp-teachings-list" style={{ marginTop: "1.25rem" }}>
          {[
            {
              title: "Pallaki Utsavam",
              desc: "The celebration opens with a grand procession in which Sri Sri Gaura Nitai are carried in a beautifully decorated palanquin through the nearby seashore area of Thiruvanmiyur, accompanied by jubilant kirtana and ecstatic chanting of the holy names. Upon reaching the seashore, Sri Sri Gaura Nitai are ceremoniously offered a sacred ocean dip, creating a deeply spiritual and joyous atmosphere for all devotees.",
            },
            {
              title: "Abhishekam",
              desc: "An elaborate abhishekam — ceremonial bathing of the Deities — is performed with the chanting of Vedic hymns and devotional songs. The Deities are bathed with milk, yogurt, honey, rose water, and other sacred substances, each offered with prayers accompanied by the blowing of conch shells and the ringing of bells.",
            },
            {
              title: "Kirtana",
              desc: "The heart of any Gaudiya celebration is kirtana — the congregational chanting of the holy names. At the Panihati Mahotsava, the kirtana programme is especially joyful. Devotees sing songs glorifying Lord Nityananda, Raghunatha Dasa Goswami, and the mercy of Sri Chaitanya Mahaprabhu, accompanied by mridanga drums and karatalas.",
            },
            {
              title: "Drama",
              desc: "A live dramatic presentation of the Panihati pastime brings the story to life for all visitors, including those encountering it for the first time. Particularly appreciated by families with children, the dramatic form makes the philosophical and devotional depth of the story immediately accessible.",
            },
            {
              title: "Arati",
              desc: "A grand arati is performed to the Deities, with the waving of ghee lamps, incense, flowers, and fans, to the singing of traditional Vaishnava prayers. The arati marks the formal worship portion of the festival evening and creates a moment of deep collective absorption in devotion.",
            },
            {
              title: "Mahaprasadam — Chida Dadhi",
              desc: "The climax of the evening is the distribution of chida dadhi mahaprasadam. Following the tradition of the Panihati festival, chipped rice is mixed with yogurt, sweetened condensed milk, ripe bananas, and sugar, and served to every single person present — without exception, without charge. Sitting together and taking this prasadam is a direct participation in the mercy that descended at Panihati five centuries ago.",
            },
          ].map(({ title, desc }) => (
            <div key={title} className="gp-teaching-item">
              <strong>{title} —</strong> {desc}
            </div>
          ))}
        </div>

        <Bq>
          <p><em>All are cordially invited. There is no entry fee, no prior booking required, and no restriction based on background or faith. The festival is open to all who wish to come and participate in this beautiful Vaishnava tradition.</em></p>
        </Bq>

        <Divider />

        {/* FAQs */}
        <h2 className="gp-sh">Frequently Asked Questions</h2>
        <div className="gp-faq-grid">
          {faqs.map((f, i) => <FaqItem key={i} {...f} />)}
        </div>

        <Divider />

        {/* SECTION 9 — COME AND TAKE PART */}
        <section style={{
          position: "relative",
          background: "#3d0f0f",
          borderRadius: "1.75rem",
          padding: "3.5rem 2.5rem",
          textAlign: "center",
          overflow: "hidden",
          border: "2px solid #FFB81C40",
          boxShadow: "0 16px 48px rgba(0,0,0,0.3)",
        }}>
          {/* gold top border */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent, #FFB81C, transparent)" }} />

          {/* label */}
          <p style={{ margin: "0 0 0.75rem", fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.28em", textTransform: "uppercase", color: "#FFB81C" }}>
            ✦ &nbsp; You Are Invited &nbsp; ✦
          </p>

          {/* heading */}
          <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.9rem,4vw,2.6rem)", fontWeight: 800, color: "#fff8ed", margin: "0 0 1.25rem", lineHeight: 1.2 }}>
            Come and Take Part
          </h2>

          {/* description */}
          <p style={{ color: "#f5dbb8", fontSize: "1rem", lineHeight: 1.9, maxWidth: "640px", margin: "0 auto 2rem" }}>
            The Panihati Chida Dadhi Mahotsava at Dakshina Dwaraka Dham is one of the most joyful evenings in the temple calendar. Whether you are a practising devotee, a curious visitor, or someone who simply wants to experience something genuinely beautiful and spiritually nourishing —{" "}
            <strong style={{ color: "#FFB81C" }}>this festival is for you.</strong>
          </p>

          {/* programme pills */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.6rem", marginBottom: "2rem" }}>
            {["Pallaki Utsavam","Abhishekam","Kirtana","Drama","Arati","Chida Dadhi Mahaprasadam"].map(item => (
              <span key={item} style={{
                background: "#FFB81C",
                color: "#3d0f0f",
                borderRadius: "999px",
                padding: "0.35rem 1.1rem",
                fontSize: "0.8rem",
                fontWeight: 800,
                letterSpacing: "0.03em",
              }}>{item}</span>
            ))}
          </div>

          {/* free badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#5a1a1a", border: "1px solid #FFB81C60", borderRadius: "999px", padding: "0.45rem 1.4rem", marginBottom: "2rem" }}>
            <span style={{ fontSize: "1rem" }}>🎉</span>
            <span style={{ color: "#f5dbb8", fontWeight: 700, fontSize: "0.88rem" }}>Free entry · No registration · Open to all</span>
          </div>

          {/* address card */}
          <div style={{
            background: "#5a1a1a",
            border: "1px solid #FFB81C50",
            borderRadius: "1.1rem",
            padding: "1.5rem 2rem",
            maxWidth: "400px",
            margin: "0 auto 2.5rem",
          }}>
            <p style={{ margin: 0, color: "#FFB81C", fontWeight: 800, fontSize: "0.95rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>📍 Dakshina Dwaraka Dham</p>
            <p style={{ margin: "0.5rem 0 0", color: "#f5dbb8", fontSize: "0.92rem", lineHeight: 1.7 }}>
              63, 1st Seaward Road, Valmiki Nagar<br />Thiruvanmiyur, Chennai — 600041
            </p>
          </div>

          {/* mahamantra */}
          <div style={{ borderTop: "1px solid #FFB81C30", paddingTop: "2rem" }}>
            <p style={{ margin: 0, fontFamily: "serif", fontSize: "clamp(1rem,2.5vw,1.15rem)", color: "#FFB81C", fontWeight: 700, fontStyle: "italic", lineHeight: 2.2, letterSpacing: "0.01em" }}>
              Hare Krishna Hare Krishna Krishna Krishna Hare Hare<br />
              Hare Rama Hare Rama Rama Rama Hare Hare
            </p>
          </div>

          {/* gold bottom border */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent, #FFB81C, transparent)" }} />
        </section>

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
