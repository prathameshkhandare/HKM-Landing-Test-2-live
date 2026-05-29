"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import "../bhagavad-gita/styles.css";

// ── DATA ─────────────────────────────────────────────────────────────────────

const TEMPLE_SHORT = "ISKCON Thiruvanmiyur";
const TEMPLE_FULL =
  "ISKCON Thiruvanmiyur (Hare Krishna Movement Chennai — Affiliated to ISKCON Bangalore Regn. S-49/78-79)";

const socialLinks = [
  {
    icon: "🌍",
    label: "Website",
    display: "hkmchennai.org",
    href: "https://hkmchennai.org/",
  },
  {
    icon: "📸",
    label: "Instagram",
    display: "@hkm_chennai",
    href: "https://www.instagram.com/hkm_chennai",
  },
  {
    icon: "👍",
    label: "Facebook",
    display: "Hare Krishna Movement Chennai",
    href: "https://www.facebook.com/hkmcworld/",
  },
  {
    icon: "🐦",
    label: "Twitter / X",
    display: "@ChennaiHare",
    href: "https://x.com/ChennaiHare",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    display: "HKM Chennai",
    href: "https://www.linkedin.com/company/hare-krishna-movement-chennai?originalSubdomain=in",
  },
  {
    icon: "📲",
    label: "WhatsApp Channel",
    display: "Join our WhatsApp Channel",
    href: "https://www.whatsapp.com/channel/0029Vaa2fjKEVccFHx5YDt1O",
  },
  {
    icon: "🙏",
    label: "Support Our Temple",
    display: "Dakshina Dwaraka Dham Campaign",
    href: "https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign",
  },
  {
    icon: "📍",
    label: "Google Maps",
    display: "Click here for directions",
    href: "https://maps.app.goo.gl/o2m98vJQHQjUHHDy6",
  },
];

const faqs = [
  {
    q: "Does the Bhagavad-gita support the caste-by-birth system?",
    a: "No. Srila Prabhupada's commentary on Bhagavad-gita 4.13 is unambiguous: Krishna says catur-varnyam maya sristam guna-karma-vibhagasah — the four-fold division is created by quality (guna) and work (karma), not by birth. Nowhere in the Bhagavad-gita does Krishna say \"birth in a brahmana family makes one a brahmana.\" The current birth-based caste system is a corruption of the Vedic arrangement.",
  },
  {
    q: "Is Srila Prabhupada against having any social divisions?",
    a: "No. Srila Prabhupada teaches that social division by quality is natural, universal, and necessary. Just as the human body requires head, arms, belly, and legs, a healthy society requires intellectuals, administrators, producers, and laborers. What he opposes is the hereditary, birth-based version that denies qualified people their proper position and grants unqualified people social status they do not deserve.",
  },
  {
    q: "Can a person from any background become a brahmana?",
    a: "Yes. Srila Prabhupada teaches this explicitly. Any person — regardless of nationality, family, or birth — who receives proper initiation from a bona fide spiritual master, follows the regulative principles (no illicit sex, no intoxication, no meat-eating, no gambling), and chants the Hare Krishna maha-mantra, is to be accepted as a qualified brahmana. This is the pancaratrika system authorized by sastra.",
  },
  {
    q: "What does Srila Prabhupada say about the so-called caste gosvamis who claim hereditary spiritual authority?",
    a: "Srila Prabhupada is clear: \"Gosvami is not a caste title.\" Real Gosvami means one who has mastered the influence of the senses. The hereditary caste-Gosvamis who claim authority by family descent rather than spiritual qualification are described by Srila Bhaktisiddhanta Sarasvati Thakura (Srila Prabhupada's guru) as engaged in a \"society of cheaters and cheated.\"",
  },
  {
    q: "Is the Krishna consciousness movement a Hindu movement?",
    a: "No. Srila Prabhupada repeatedly states: \"The Krishna consciousness movement has nothing to do with the Hindu religion or any system of religion. No Christian gentleman will be interested in changing his faith from Christian to Hindu... We are giving a spiritual culture that can solve all the problems of life, and therefore it is being accepted all over the world.\" (The Science of Self-Realization, Ch. 3)",
  },
  {
    q: "What is the position of HKM Chennai on the caste question?",
    a: "HKM Chennai, following Srila Prabhupada's instructions and in affiliation with ISKCON Bangalore, welcomes all sincere seekers regardless of caste, community, nationality, or background. The temple's programs — Annadanam, Gita Life Foundation Course, bhakti festivals, and daily darshan — are open to all. We follow Sri Caitanya Mahaprabhu's principle: yei krisna-tattva-vetta, sei 'guru' haya — anyone genuinely advanced in Krishna consciousness is a qualified guide, regardless of birth.",
  }
];

// ── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function SanskritVerse({ lines, translation, citation }: { lines: string[], translation: string, citation: string }) {
  return (
    <div className="verse-block">
      <div className="sanskrit-lines">
        {lines.map((l, i) => (
          <p key={i} className="sanskrit-line">
            {l}
          </p>
        ))}
      </div>
      <blockquote className="verse-translation">
        <p>
          {translation} <span className="citation">({citation})</span>
        </p>
      </blockquote>
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="pull-quote">
      <span className="pull-quote-mark">&ldquo;</span>
      <p>{children}</p>
      <span className="pull-quote-mark pull-quote-mark--right">&rdquo;</span>
    </div>
  );
}

function TempleNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="temple-note">
      <span className="temple-note-icon">📍</span>
      <p>{children}</p>
    </div>
  );
}

function Lesson({ number, title, children }: { number: string, title: string, children: React.ReactNode }) {
  return (
    <section className="lesson">
      <div className="lesson-number">
        <span>{number}</span>
      </div>
      <h2 className="lesson-title">{title}</h2>
      {children}
    </section>
  );
}

function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <span>✦</span>
    </div>
  );
}

// ── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function VarnasramaBlogPage() {
  return (
    <main className="min-h-screen bg-[#FDFAF3] selection:bg-[#E8650A] selection:text-white">
      <Navbar />
      <article className="blog-page">

        {/* ── HERO ── */}
        <header className="hero">
          <p className="hero-temple">🛕 {TEMPLE_SHORT}</p>
          <p className="hero-temple-full">{TEMPLE_FULL}</p>
          <div className="hero-divider" />
          <h1 className="hero-title">
            Caste System Truth:<br />
            <span>What Srila Prabhupada Actually Taught</span>
          </h1>
          <p className="hero-subtitle">The Divine Varnasrama System vs. Birth-based Caste</p>
          <div className="hero-divider" />
          <p className="hero-byline">
            Based on the teachings of{" "}
            <strong>His Divine Grace A.C. Bhaktivedanta Swami Prabhupada</strong>
            <br />
            Founder-Acarya of the International Society for Krishna Consciousness (ISKCON)
          </p>
        </header>

        {/* ── BODY ── */}
        <div className="article-body">

          {/* Introduction */}
          <section className="intro">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-[#e8b830]/20">
               <Image src="/assets/blog/caste-system-varnashrama.png" alt="Divine Varnasrama System" width={800} height={800} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <span className="block w-full text-center mt-4 mb-8 text-[1.05rem] italic text-[#7a5c3a]">
              The divine varnasrama system — the natural division of human society into four orders based on quality and work (guna-karma), harmoniously cooperating with Lord Krishna at the center.
            </span>
            <p>
              When people hear about the Vedas or ancient Indian culture, one of the first questions that arises is about the caste system. For centuries, the birth-based caste system has been a source of division, exploitation, and immense social suffering. It has led many to reject Vedic culture entirely, assuming that the scriptures themselves authorize such discrimination.
            </p>
            <p>
              But what does the Bhagavad-gita actually say? What did Srila Prabhupada, the modern world's greatest exponent of Vedic wisdom, teach about this sensitive subject? 
            </p>
            <p>
              The truth may surprise both orthodox traditionalists and modern reformers. Srila Prabhupada entirely rejects the birth-based caste system, calling it a corruption of a scientific, universal, and divine social order known as <em>varnasrama-dharma</em>. Here is a clear look at his teachings on the absolute equality of the soul and the practical necessity of a spiritually guided society.
            </p>
          </section>

          <Divider />

          {/* ── LESSON 1 ── */}
          <Lesson number="1" title="The Absolute Equality of the Soul">
            <p>
              The foundation of Srila Prabhupada's teaching is the absolute spiritual equality of all living beings. The Bhagavad-gita states unequivocally that the soul is not the body. Therefore, any designation based on the body — whether nationality, race, gender, or caste — is an illusion.
            </p>
            <SanskritVerse
              lines={[
                "vidyā-vinaya-sampanne",
                "brāhmaṇe gavi hastini",
                "śuni caiva śva-pāke ca",
                "paṇḍitāḥ sama-darśinaḥ",
              ]}
              translation="The humble sages, by virtue of true knowledge, see with equal vision a learned and gentle brāhmaṇa, a cow, an elephant, a dog and a dog-eater [outcaste]."
              citation="BG 5.18"
            />
            <p className="practical-label">The True Vision</p>
            <p>
              As long as we identify with the material body, we are victims of the caste system — whether it is the Indian system of brahmanas and sudras or the Western system of upper-class elites and working-class poor. A spiritually realized person (pandita) sees the eternal soul (atma) in everyone, knowing that we are all part and parcel of the Supreme Lord.
            </p>
            <PullQuote>
              "The Krishna consciousness movement is an educational movement to lift everyone from the bodily concept of life to the spiritual platform."
            </PullQuote>
          </Lesson>

          <Divider />

          {/* ── LESSON 2 ── */}
          <Lesson number="2" title="The Disease of the Modern Caste System">
            <p>
              If the soul is equal, why does society have divisions? Srila Prabhupada explains that while the soul is equal, people's material qualities (gunas) and activities (karmas) are different. The tragedy of modern India is that a system originally based on qualification degraded into a system based solely on birthright.
            </p>
            <p>
              Suppose a man is a high-court judge. Does his son automatically become a high-court judge just by taking birth in his family? No. The son must undergo the same education, pass the same exams, and acquire the same qualifications. Similarly, being a brahmana (intellectual/spiritual guide) requires the qualities of peacefulness, self-control, austerity, purity, tolerance, honesty, knowledge, and wisdom (BG 18.42). 
            </p>
            <p>
              When unqualified people claim the privileges of brahmanas simply by pedigree, the system breaks down into tyranny. Srila Prabhupada was fierce in his condemnation of this corruption, stating that a person born in a brahmana family who engages in meat-eating, intoxication, or illicit activities is not a brahmana but a "dvija-bandhu" (a degraded relative of a brahmana).
            </p>
          </Lesson>

          <Divider />

          {/* ── LESSON 3 ── */}
          <Lesson number="3" title="Varnasrama: The Divine System of Natural Division">
            <p>
              While rejecting birth-based caste, Srila Prabhupada strongly advocated for <em>varnasrama-dharma</em> — the natural division of society based on quality and work. 
            </p>
            <SanskritVerse
              lines={[
                "cātur-varṇyaṁ mayā sṛṣṭaṁ",
                "guṇa-karma-vibhāgaśaḥ"
              ]}
              translation="According to the three modes of material nature and the work associated with them, the four divisions of human society are created by Me."
              citation="BG 4.13"
            />
            <p className="practical-label">A Universal Reality</p>
            <p>
              This division exists in every society, not just in India. 
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3 text-[1.125rem] text-[var(--ink-mid)]">
              <li><strong>Brahmanas (Intellectuals):</strong> Teachers, advisors, scientists, priests.</li>
              <li><strong>Ksatriyas (Administrators):</strong> Politicians, police, military, executives.</li>
              <li><strong>Vaisyas (Producers):</strong> Farmers, businessmen, merchants.</li>
              <li><strong>Sudras (Laborers):</strong> Artisans, workers, assistants.</li>
            </ul>
            <p>
              Srila Prabhupada often gave the analogy of the human body. The brahmanas are the head, the ksatriyas are the arms, the vaisyas are the belly, and the sudras are the legs. Is the head more important than the legs? Try walking without legs, or digesting food without a belly. All parts are essential. They must cooperate to keep the body healthy. The problem arises when the legs demand to be the head, or the head exploits the legs.
            </p>
            <PullQuote>
              The highest purpose of all social organization is to please the Supreme Lord Hari. When the center is Krishna, every occupation becomes perfect.
            </PullQuote>
          </Lesson>

          <Divider />
          
          {/* ── QUOTES ── */}
          <section className="conclusion">
            <h2>Srila Prabhupada Speaks: Quotes on Caste and Varnasrama</h2>
            <div className="space-y-6 mt-6">
              <div className="bg-[#FFF6E8] p-5 rounded-lg border-l-4 border-[#E8650A]">
                <p className="italic text-[1.15rem]">"According to Bhagavad-gītā, a brāhmaṇa is known by his qualities (guṇa) and his work (karma). There is no mention of birth."</p>
                <p className="text-base font-bold text-[#E8650A] mt-2">— Conversation, London, 1973</p>
              </div>
              <div className="bg-[#FFF6E8] p-5 rounded-lg border-l-4 border-[#E8650A]">
                <p className="italic text-[1.15rem]">"In this Krishna consciousness movement a chance is given to everyone without discrimination of caste, creed or color. Everyone is invited to join this movement, sit with us, take prasāda and hear about Krishna."</p>
                <p className="text-base font-bold text-[#E8650A] mt-2">— Nectar of Instruction 5, Purport</p>
              </div>
              <div className="bg-[#FFF6E8] p-5 rounded-lg border-l-4 border-[#E8650A]">
                <p className="italic text-[1.15rem]">"As bell metal is turned to gold when mixed with mercury... so one who is properly trained and initiated by a bona fide spiritual master becomes a brāhmaṇa immediately."</p>
                <p className="text-base font-bold text-[#E8650A] mt-2">— Caitanya Caritamrta, Antya 16.29</p>
              </div>
            </div>
          </section>

          <Divider />

          {/* ── CONCLUSION ── */}
          <section className="conclusion">
            <h2>Conclusion: A Society Built on Quality</h2>
            <p>
              The teaching of Srila Prabhupada on the caste system is not a compromise between reformers and traditionalists. It is something far more radical and compassionate. He boldly declared that the birth-based caste system is a degeneration, a tool of oppression. But he also warned that simply abolishing caste without instituting the scientific varnasrama system — training people according to their natural qualities — leads to a chaotic society.
            </p>
            <p>
              Most importantly, the Vaishnava path — Krishna consciousness — dissolves all material designations entirely. In the International Society for Krishna Consciousness, people from every community, nationality, and background sit together, chant together, and serve together. They belong to the <em>Acyuta-gotra</em> — the family of the infallible Lord.
            </p>
            <TempleNote>
              We welcome you to experience this spiritual unity at {TEMPLE_SHORT}. Our programs are open to all sincere seekers regardless of caste, community, nationality, or background. We follow Sri Caitanya Mahaprabhu's principle: anyone genuinely advanced in Krishna consciousness is a qualified guide.
            </TempleNote>
            <p className="hare-krishna">Hare Krishna! 🙏</p>
          </section>

          <div className="share-line">
            If this article has been helpful to you, please share it with someone who is
            searching for answers. Sharing this knowledge is itself a form of seva — a
            service to the Lord and to humanity.
          </div>

          <Divider />

          {/* ── FAQ ── */}
          <section className="faq">
            <h2>Frequently Asked Questions</h2>
            {faqs.map((f, i) => (
              <div key={i} className="faq-item">
                <p className="faq-q">Q: {f.q}</p>
                <p className="faq-a">A: {f.a}</p>
              </div>
            ))}
          </section>

          <Divider />

          {/* ── CONNECT ── */}
          <section className="connect-section">
            <h2>🌿 Connect With Us</h2>
            <p className="connect-sub">
              Follow Hare Krishna Movement Chennai across all platforms for daily darshana, event updates, and to join our growing community of seekers.
            </p>
            <div className="connect-grid">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="connect-item group hover:bg-[#FFF6E8] hover:border-[#E8650A] transition-all duration-300"
                >
                  <span className="connect-emoji text-2xl">{s.icon}</span>
                  <span className="connect-info flex-1">
                    <span className="connect-label font-bold text-[#E8650A]">{s.label}</span>
                    <span className="connect-url text-gray-700">{s.display}</span>
                  </span>
                  <span className="text-[#E8650A] opacity-0 group-hover:opacity-100 transition-opacity font-bold text-xl ml-2">→</span>
                </a>
              ))}
            </div>
            <p className="connect-address">
              📍 {TEMPLE_FULL}
              <br />
              <a
                href="https://maps.app.goo.gl/o2m98vJQHQjUHHDy6"
                target="_blank"
                rel="noopener noreferrer"
              >
                🗺️ Open in Google Maps →
              </a>
            </p>
          </section>

        </div>
      </article>
      <Footer />
    </main>
  );
}
