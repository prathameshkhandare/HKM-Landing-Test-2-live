"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import "./styles.css";

// --- CONSTANTS ---
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
    q: "What is Rukmini Dwadashi and why is it celebrated?",
    a: "Rukmini Dwadashi is the divine appearance day of Srimati Rukmini Devi, the eternal consort of Lord Sri Krishna. It falls on the Shukla Paksha Dvadashi tithi in the month of Vaishakha. Devotees celebrate this day with abhishekam, kirtan, and hearing the glories of Rukmini Devi.",
  },
  {
    q: "Is Rukmini Devi the same as Lakshmi Devi?",
    a: "Yes. Rukmini Devi is worshipped as Maha-Lakshmi — the Supreme Goddess of Fortune — in her role as the eternal consort of Lord Krishna. She is also described as an expansion of Srimati Radharani's internal potency.",
  },
  {
    q: "What is the significance of Rukmini Devi's letter to Krishna?",
    a: "Rukmini Devi's letter to Krishna, preserved in Srimad-Bhagavatam (10.52.37–43), is one of the most beautiful examples of atma-nivedanam (complete self-surrender). It teaches us that surrender to Krishna includes both the offering of oneself and the intelligence to act in His service.",
  },
  {
    q: "How can I attend the Rukmini Dwadashi celebration in Chennai?",
    a: "Join us at Dakshina Dwaraka Dham, Thiruvanmiyur, Chennai. Our annual evening programme begins after 6:00 PM every Rukmini Dwadashi. All are welcome for abhishekam, kirtan, and special discourses.",
  },
];

// --- SUB-COMPONENTS ---
function Bq({ children }: { children: React.ReactNode }) {
  return <blockquote className="rd-bq">{children}</blockquote>;
}

function SocialCard({ icon, label, url, display }: any) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="rd-social-card">
      <span className="rd-s-icon">{icon}</span>
      <div className="rd-s-text">
        <span className="rd-s-label">{label}</span>
        <span className="rd-s-url">{display}</span>
      </div>
      <span className="rd-s-arrow">→</span>
    </a>
  );
}

function Divider() {
  return (
    <div className="rd-divider" aria-hidden="true">
      <span>✦</span>
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  return <h2 className="rd-sh">{title}</h2>;
}

function BlogImage({ src, alt, caption }: { src: string, alt: string, caption?: string }) {
  return (
    <div className="rd-image-container">
      <img src={src} alt={alt} className="rd-image" />
      {caption && <span className="rd-image-caption">{caption}</span>}
    </div>
  );
}

export default function BlogClient() {
  return (
    <main className="min-h-screen bg-[#FFF9F0] selection:bg-[#c9973a] selection:text-white">
      <Navbar />
      
      <article className="rd-blog-wrap">
        {/* HERO */}
        <header className="rd-blog-header">
          <p className="rd-hero-festival">~ Divine Appearance Festival ~</p>
          <h1 className="rd-blog-title">Rukmini Dwadashi: The Appearance Day of Srimati Rukmini Devi</h1>
          <p className="rd-blog-subtitle">Her Story, Her Glories, Her Letter to Krishna — and Our Annual Evening Celebration at Dakshina Dwaraka Dham, Chennai</p>
          <div className="rd-hero-line" />
          <p className="rd-blog-byline">
            Based on the teachings of <strong>His Divine Grace A.C. Bhaktivedanta Swami Prabhupada</strong><br />
            Founder-Acarya of the International Society for Krishna Consciousness
          </p>
        </header>

        <div className="rd-content">
          <SectionHeading title="What Does It Mean to Truly Love God?" />
          <p>Most of us think of love as something we feel only for those we can see and speak to. But what about love for someone you have only heard about — whose form you have never seen with your own eyes, whose voice you have never heard with your physical ears — and yet your heart is so full that you are willing to give up everything, even your very life, for Him?</p>
          <p>This is not a philosophical question. This is the life of Srimati Rukmini Devi.</p>
          <p>Her story answers one of the deepest questions a spiritual seeker can ask: What does pure, unalloyed devotion look like in practice? And it answers that question not through a lecture — but through love, courage, intelligence, and complete surrender.</p>
          
          <Bq>
            <p><em>She had never seen Him. Yet she gave everything for Him. This is the power of hearing the Lord's glories from the right sources.</em></p>
          </Bq>

          <BlogImage 
            src="/assets/TA_987_sudama_and_krishna.png" 
            alt="Lord Krishna's divine qualities" 
            caption="Lord Krishna, the reservoir of all pleasure and the object of Rukmini Devi's pure devotion."
          />

          <Divider />

          <SectionHeading title="The Divine Identity: Who Is Srimati Rukmini Devi?" />
          <p>To glorify Srimati Rukmini Devi, we must first understand her true identity — for she is not merely a queen, nor simply a beautiful princess from a royal family. She is the Supreme Goddess of Fortune, Maha-Lakshmi Herself, descending to this world to participate in the divine pastimes of Lord Sri Krishna.</p>
          <p>As the Caitanya-caritamrta confirms, just as Lord Krishna expands Himself into various Vishnu-tattva forms, Srimati Radharani expands Herself into various Shakti-tattva forms — and Srimati Rukmini Devi is the foremost of those expansions. In the realm of Vaikuntha, she resides as Lakshmi beside Narayana. In the royal city of Dvaraka, she is the embodiment of opulence, beauty, chaste devotion, and eternal love.</p>
          
          <Bq>
            <p><em>Rukmini was the most beloved of all Lord Krishna's queens. She is described as the goddess of fortune who is never separated from Lord Vishnu.</em></p>
            <cite>— Srila Prabhupada, Krishna Book</cite>
          </Bq>

          <Divider />

          <SectionHeading title="The Letter: A Blueprint for Total Surrender" />
          <p>The letter Rukmini Devi sent to Krishna is one of the most beautiful documents in all of Vedic literature. In it, she addresses Him as Mukunda (the giver of liberation) and Ajita (the Unconquerable). Comprising seven verses in Srimad-Bhagavatam (10.52.37–43), this letter is a living example of atma-nivedanam — complete self-surrender.</p>
          
          <div className="rd-verse">
            <p className="rd-verse-skt">shrutva gunan bhuvana-sundara shrinvatam te...</p>
            <Bq>
              <p>"O Acyuta, most beautiful of the world! After hearing of Your qualities, which enter through the ear-holes and remove the distress of all who hear them, and of Your form... my mind has shamelessly entered into You."</p>
              <cite>— Srimad-Bhagavatam 10.52.37</cite>
            </Bq>
          </div>

          <p>Perhaps the most moving part of her letter is her iron-willed determination. She was prepared to undergo severe austerities for hundreds of lifetimes if that is what it would take:</p>
          
          <Bq>
            <p><em>"If not in this life, then after hundreds of births — I hope to attain Your favour." The determination of Rukmini Devi is the standard of a true devotee.</em></p>
          </Bq>

          <SectionHeading title="The Kidnapping: Love That Could Not Be Stopped" />
          <p>Upon hearing the letter, Krishna's heart was moved. He confessed to the Brahmana that He too could not sleep at night for thinking of Rukmini. That very night, Krishna and the Brahmana travelled over a thousand miles in a chariot drawn by His four legendary horses — Shaibya, Sugriva, Meghapushpa, and Balahaka — arriving at the city of Kundina by morning.</p>
          
          <BlogImage 
            src="/assets/krishna_kidnaps_rukmini_1.png" 
            alt="Krishna kidnaps Rukmini" 
            caption="Lord Krishna daringly carries away Srimati Rukmini Devi from the midst of all the assembled kings."
          />

          <p>As she stepped out of the temple of Goddess Girija, she saw Him. Krishna did not hesitate. In the presence of all His rivals, He reached down, lifted Rukmini onto His chariot bearing the flag of Garuda, and drove away — exactly as a lion takes its prey from among jackals.</p>

          <Divider />

          <SectionHeading title="Life in Dvaraka: The Ideal of Devoted Service" />
          <p>What is most remarkable about Rukmini Devi's life in Dvaraka is not the opulence — it is her service. Despite having thousands of maidservants at her command, she insisted on serving Krishna personally. She would fan Him with a jewelled camara, massage His lotus feet, and remain always focused on Him — not on her status as the principal queen.</p>
          
          <Bq>
            <p><em>She was the Goddess of Fortune — yet she fanned Krishna with a camara like a humble maidservant. This is the secret of her glory.</em></p>
          </Bq>

          <Divider />

          <section className="rd-event-callout">
            <h3>Annual Rukmini Dwadashi Evening Celebration</h3>
            <p className="rd-event-loc">Dakshina Dwaraka Dham, Thiruvanmiyur, Chennai</p>
            <p className="rd-event-time">Program Begins After 6:00 PM</p>
            <ul className="rd-event-list">
              <li>Maha-Abhishekam</li>
              <li>Harinama Sankirtana</li>
              <li>Special Discourse</li>
              <li>Sandhya Arati & Shayana Arati</li>
            </ul>
          </section>

          <Divider />

          <SectionHeading title="Frequently Asked Questions" />
          <div className="rd-faq-grid">
            {faqs.map((f, i) => (
              <div key={i} className="rd-faq-item">
                <h4 className="rd-faq-q">{f.q}</h4>
                <p className="rd-faq-a">{f.a}</p>
              </div>
            ))}
          </div>

          <Divider />

          {/* SOCIAL MEDIA */}
          <section className="rd-connect-section">
            <h2 className="rd-connect-h">Connect with Us</h2>
            <p className="rd-connect-desc">Follow Hare Krishna Movement Chennai across all platforms for daily darshan and event updates.</p>
            <div className="rd-social-grid">
              {socialLinks.map((s, i) => <SocialCard key={i} {...s} />)}
            </div>
          </section>

          <footer className="rd-blog-footer">
            <p>Hare Krishna Movement Chennai | Dakshina Dwaraka Dham, Thiruvanmiyur</p>
            <p>Affiliated to ISKCON Bangalore | Non-Profit Charitable Organisation</p>
          </footer>
        </div>
      </article>

      <Footer />
    </main>
  );
}
