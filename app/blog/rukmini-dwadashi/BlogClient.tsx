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
  { icon: "💼", label: "LinkedIn", display: "Srila Prabhupada's ISKCON Thiruvanmiyur", url: "https://www.linkedin.com/company/hare-krishna-movement-chennai/" },
  { icon: "🎯", label: "Support", display: "campaigns.hkmchennai.org", url: "https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign" },
  { icon: "📲", label: "WhatsApp", display: "Join our WhatsApp Channel", url: "https://www.whatsapp.com/channel/0029Vaa2fjKEVccFHx5YDt1O" },
];

const faqs = [
  {
    q: "What is Rukmini Dvadasi and why is it celebrated?",
    a: "Rukmini Dvadasi is the divine appearance day of Srimati Rukminidevi, the eternal consort of Lord Sri Krsna. It falls on the Sukla Paksa Dvadasi tithi in the month of Vaisakha. Devotees celebrate this day with abhisekam, kirtana, and hearing the glories of Rukminidevi — following the same path of sravanam through which she herself attained Krsna.",
  },
  {
    q: "Is Rukmini Devi the same as Laksmi Devi?",
    a: "Yes. Rukminidevi is worshipped as Maha-Laksmi — the Supreme Goddess of Fortune — in her role as the eternal consort of Lord Krsna. She is also described in the Caitanya-caritamrta as an expansion of Srimati Radharani's internal potency (sakti-tattva), embodying the mood of Svakiya-rasa (wedded devotional love).",
  },
  {
    q: "What is the significance of Rukminidevi's letter to Krsna?",
    a: "Rukminidevi's letter to Krsna, preserved in Srimad-Bhagavatam (10.52.37–43), is one of the most beautiful examples of atma-nivedanam — complete self-surrender — in all of Vedic literature. It teaches us that surrender to Krsna includes both the offering of oneself and the intelligence to act in His service.",
  },
  {
    q: "Why did Krsna speak harsh words to Rukminidevi?",
    a: "Krsna spoke those apparently harsh joking words out of love — to gently remove a trace of subtle pride and to relish the beauty of her emotional response. When Rukmini turned every 'insult' into a philosophical glorification, Krsna declared that she had 'purchased' Him for all time with her unalloyed devotion.",
  },
  {
    q: "What is abhisekam and why is it performed?",
    a: "Abhisekam is the sacred Vedic ritual of ceremonially bathing the deity with auspicious substances — milk, yogurt, honey, ghee, tender coconut water, rose water — while chanting sacred mantras. It is a direct act of loving personal seva to the Lord. Witnessing or participating in an abhisekam is considered highly purifying and deeply auspicious.",
  },
  {
    q: "How can I attend the Rukmini Dvadasi celebration in Chennai?",
    a: "Come to Daksina Dvaraka Dham, Thiruvanmiyur, Chennai. Our annual evening programme begins after 6:00 PM every Rukmini Dvadasi. All are welcome. For programme details, visit hkmchennai.org or follow us on social media.",
  },
  {
    q: "Does Daksina Dvaraka Dham have Rukmini Devi as a presiding deity?",
    a: "Yes. Sri Sri Krsna-Rukmini-Satyabhama are the presiding deities worshipped daily on the ground floor. The forthcoming main sanctum will house Sri Sri Rukmini Dvarakadhisa — making Rukmini Dvadasi one of the most important festivals of this temple.",
  },
  {
    q: "What is the benefit of worshipping Rukminidevi?",
    a: "Srila Prabhupada teaches that Rukminidevi is so devoted to Krsna that she considers any sincere devotee of the Lord as supremely dear to her. By worshipping and hearing about Rukminidevi, a devotee draws the mercy of the Goddess of Fortune — not merely material fortune, but the supreme fortune of love for God.",
  },
];

// --- SUB-COMPONENTS ---
function Bq({ children }: { children: React.ReactNode }) {
  return <blockquote className="rd-bq">{children}</blockquote>;
}

function SocialCard({ icon, label, url, display }: { icon: string; label: string; url: string; display: string }) {
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

function SubHeading({ title }: { title: string }) {
  return <h3 className="rd-sh3">{title}</h3>;
}

function BlogImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
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
          <h1 className="rd-blog-title">Rukmini Dvadasi: The Appearance Day of Srimati Rukminidevi</h1>
          <p className="rd-blog-subtitle">Her Story, Her Glories, Her Letter to Krsna — and Our Annual Evening Celebration at Daksina Dvaraka Dham, Chennai</p>
          <div className="rd-hero-line" />
          <p className="rd-blog-byline">
            Based on the teachings of <strong>His Divine Grace Visva Guru A.C. Bhaktivedanta Swami Prabhupada</strong><br />
            Founder-Acarya of the International Society for Krsna Consciousness
          </p>
        </header>

        <div className="rd-content">

          {/* ─── SECTION 1 ─── */}
          <SectionHeading title="What Does It Mean to Truly Love God?" />
          <p>Most of us think of love as something we feel only for those we can see and speak to. But what about love for someone you have only heard about — whose form you have never seen with your own eyes, whose voice you have never heard with your physical ears — and yet your heart is so full that you are willing to give up everything, even your very life, for Him?</p>
          <p>This is not a philosophical question. This is the life of Srimati Rukminidevi.</p>
          <p>Her story answers one of the deepest questions a spiritual seeker can ask: What does pure, unalloyed devotion look like in practice? And it answers that question not through a lecture — but through love, courage, intelligence, and complete surrender.</p>
          <p>On the auspicious occasion of Rukmini Dvadasi — the divine appearance day of Srimati Rukminidevi, observed on Sukla Paksa Dvadasi in the sacred month of Vaisakha — let us gather our hearts and minds to understand this extraordinary personality who stands at the very summit of devotion.</p>

          <Bq>
            <p><em>She had never seen Him. Yet she gave everything for Him. This is the power of hearing the Lord's glories from the right sources.</em></p>
          </Bq>

          <BlogImage
            src="/assets/TA_987_sudama_and_krishna.png"
            alt="Lord Krsna's divine qualities"
            caption="Lord Krsna, the reservoir of all pleasure and the object of Rukminidevi's pure devotion."
          />

          <Divider />

          {/* ─── SECTION 2 ─── */}
          <SectionHeading title="The Divine Identity: Who Is Srimati Rukminidevi?" />
          <p>To glorify Srimati Rukminidevi, we must first understand her true identity — for she is not merely a queen, nor simply a beautiful princess from a royal family. She is the Supreme Goddess of Fortune, Maha-Laksmi Herself, descending to this world to participate in the divine pastimes of Lord Sri Krsna.</p>
          <p>As the Caitanya-caritamrta confirms, just as Lord Krsna expands Himself into various Visnu-tattva forms, Srimati Radharani expands Herself into various Sakti-tattva forms — and Srimati Rukminidevi is the foremost of those expansions. In the realm of Vaikuntha, she resides as Laksmi beside Narayana. In the royal city of Dvaraka, she is the embodiment of opulence, beauty, chaste devotion, and eternal love.</p>
          <p>She is the principal queen among the 16,108 queens of Dvaraka — descending to earth not by accident, but by her own will, to participate in Krsna's transcendental pastimes as Dvarakadhisa.</p>

          <Bq>
            <p><em>Rukmini was the most beloved of all Lord Krsna's queens. She is described as the goddess of fortune who is never separated from Lord Visnu.</em></p>
            <cite>— Srila Prabhupada, Krsna, the Supreme Personality of Godhead</cite>
          </Bq>

          <Divider />

          {/* ─── SECTION 3 ─── */}
          <SectionHeading title="Her Appearance in Vidarbha" />
          <p>Rukminidevi appeared as the daughter of King Bhismaka, the pious ruler of Vidarbha, and his wife Sudhimati. She was the youngest among six siblings — five brothers named Rukmi, Rukmaratha, Rukmahu, Rukmakersa, and Rukmali, and herself. From her very birth, she was known as Ruciranana — she whose face is as beautiful and expansive as a lotus flower.</p>

          <Divider />

          {/* ─── SECTION 4 ─── */}
          <SectionHeading title="Devotion Born of Hearing: The Power of Sravanam" />
          <p>Rukminidevi's love for Krsna is a unique and extraordinary example of purva-raga — love before meeting. In a palace visited by saintly sages and the great celestial traveller Narada Muni, Rukmini spent her youth listening. She heard of Krsna's six opulences: His unmatched beauty, His infinite strength, His boundless fame, His total wealth, His perfect knowledge, and His complete renunciation.</p>
          <p>Simply by the process of sravanam — submissive hearing from authoritative sources — she surrendered her heart entirely. This is one of the most important spiritual lessons her life teaches us: physical presence is not a prerequisite for love. You do not need to see the Lord first. You need only to hear His glories, with an open and sincere heart.</p>
          <p>Rukminidevi heard, and she was transformed. She decided with complete certainty that she would marry no one else. Her parents, King Bhismaka and Sudhimati, were supportive of her wish. But one powerful obstacle stood in the way.</p>

          <Bq>
            <p><em>Simply by hearing the Lord's glories, Rukmini surrendered her entire heart. Sravanam — submissive hearing — is the very foundation of bhakti.</em></p>
          </Bq>

          <Divider />

          {/* ─── SECTION 5 ─── */}
          <SectionHeading title="The Conflict: The Lion and the Jackals" />
          <p>Rukmini's eldest brother Rukmi was consumed by envy toward Krsna. As a close friend of the wicked Sisupala, the King of Cedi, Rukmi conspired to arrange Rukmini's marriage to Sisupala — against her will and against the wishes of her parents.</p>
          <p>When Rukmini heard of this arrangement, she did not sink into helpless despair. Being a daughter of the ksatriya lineage, she possessed both intelligence and decisive courage. She selected a qualified, truthful Brahmana from the royal court as her secret messenger and sent him all the way to Dvaraka — carrying a personal letter addressed to Lord Sri Krsna Himself.</p>

          <Divider />

          {/* ─── SECTION 6 ─── */}
          <SectionHeading title="Krsna's Reception of the Brahmana" />
          <p>The scene of this Brahmana arriving at Krsna's palace is a masterclass in humility. Lord Krsna — the Supreme Lord of all creation — immediately rose from His golden throne to honour the Brahmana. He washed the guest's feet personally and massaged them with His own hands, teaching the entire world that the worship of His devotee is even more valuable than the worship of Himself.</p>

          <Divider />

          {/* ─── SECTION 7 ─── */}
          <SectionHeading title="The Letter: A Blueprint for Total Surrender" />
          <p>The letter Rukminidevi sent to Krsna is one of the most beautiful documents in all of Vedic literature. In it, she addresses Him as Mukunda (the giver of liberation) and Ajita (the Unconquerable). Comprising seven verses in Srimad-Bhagavatam (10.52.37–43), this letter is a living example of atma-nivedanam — complete self-surrender.</p>

          <Bq>
            <p><em>Her letter to Krsna is not merely a request. It is a perfect prayer of surrender — the soul calling out to the Supreme Soul.</em></p>
          </Bq>

          <SubHeading title="The Call of the Soul (Verse 37)" />
          <p>Rukmini begins by explaining that her love is not based on physical sight — but on the profound impact of hearing Krsna's glories:</p>

          <div className="rd-verse">
            <p className="rd-verse-skt">
              śrutvā guṇān bhuvana-sundara śṛṇvatāṃ te<br />
              nirviśya karṇa-vivarāir harato 'ṅga-tāpam<br />
              rūpaṃ dṛśāṃ dṛśimatām akhilārtha-lābhaṃ<br />
              tvayy acyutāviśati cittaṃ apartrāpam me
            </p>
            <Bq>
              <p>"O Acyuta, most beautiful of the world! After hearing of Your qualities, which enter through the ear-holes and remove the distress of all who hear them, and of Your form, which is the fulfillment of all desires for those who have eyes, my mind has shamelessly entered into You."</p>
              <cite>— Śrīmad-Bhāgavatam 10.52.37</cite>
            </Bq>
          </div>

          <SubHeading title="The Sovereign Choice (Verse 39)" />
          <p>She declares her surrender with absolute clarity, identifying Krsna as her only husband:</p>

          <div className="rd-verse">
            <p className="rd-verse-skt">
              tan me bhavān khalu vṛtaḥ patir aṅga jāyām<br />
              ātmārpitāś ca bhavato 'tra vibho videhi<br />
              mā vīra-bhāgam abhimarśatu caidya ādo<br />
              go-māyu-val mṛga-pater balim ambu-jākṣa
            </p>
            <Bq>
              <p>"Therefore, my dear Lord, I have chosen You as my husband and have surrendered my soul unto You. Please come and claim me as Your wife. O lotus-eyed hero, let not the King of Cedi touch the booty that belongs to the lion, just as a jackal should not touch the lion's prey."</p>
              <cite>— Śrīmad-Bhāgavatam 10.52.39</cite>
            </Bq>
          </div>

          <SubHeading title="The Vow of Persistence (Verse 43)" />
          <p>Perhaps the most moving part of her letter is her iron-willed determination. She was prepared to undergo severe austerities for hundreds of lifetimes:</p>

          <div className="rd-verse">
            <p className="rd-verse-skt">
              yasyāṅghri-paṅkaja-rajaḥ-snapānaṃ mahānto<br />
              vāñchanty umā-patir ivātma-tamo-nud aptaye<br />
              yarhy ambu-jākṣe na labheya bhavat-prasādaṃ<br />
              jahāyam asūn vrata-kṛśān śata-janmabhiḥ syāt
            </p>
            <Bq>
              <p>"O lotus-eyed Lord, even great souls like Lord Śiva seek to bathe in the dust of Your lotus feet to destroy their ignorance. If I do not receive Your mercy, I shall give up my life, which has been thinned by severe vows. If not in this life, then after hundreds of births of such penance, I hope to attain Your favour."</p>
              <cite>— Śrīmad-Bhāgavatam 10.52.43</cite>
            </Bq>
          </div>

          <Bq>
            <p><em>"If not in this life, then after hundreds of births — I hope to attain Your favour." The determination of Rukminidevi is the standard of a true devotee.</em></p>
          </Bq>

          <p>Finally, with practical intelligence, she offered a plan: Krsna should come during her traditional pre-wedding visit to the temple of Goddess Girija (Durga) — the only time a bride appears in public before her wedding. This was her complete surrender: offering even the plan, and leaving the outcome entirely to the Lord.</p>

          <Divider />

          {/* ─── SECTION 8 ─── */}
          <SectionHeading title="The Kidnapping: Love That Could Not Be Stopped" />
          <p>Upon hearing the letter, Krsna's heart was moved. He confessed to the Brahmana that He too could not sleep at night for thinking of Rukmini. That very night, Krsna and the Brahmana travelled over a thousand miles in a chariot drawn by His four legendary horses — Saibya, Sugriva, Meghapuspa, and Balahaka — arriving at the city of Kundina by morning.</p>

          <SubHeading title="The Scene at Kundina" />
          <p>The city was richly decorated for the wedding — but the atmosphere was tense. Kings like Jarasandha, Dantavakra, Sisupala, and Paundraka had gathered to ensure Krsna would not interfere. Lord Balarama followed with the full army of the Yadu dynasty.</p>
          <p>Inside the palace, Rukminidevi was in agony. But then — auspicious signs appeared. Her left eyelid, arm, and thigh began to tremble. Moments later, the Brahmana appeared with a smile. Krsna had come.</p>

          <SubHeading title="The Temple Procession" />
          <p>As Rukmini walked toward the temple of Ambika, her beauty was so overwhelming that the assembled princes fell from their horses in a daze. Yet she was completely indifferent to all of them. She entered the temple and prayed to Goddess Durga with only one request: "May Lord Krsna become my husband."</p>

          <BlogImage
            src="/assets/krishna_kidnaps_rukmini_1.png"
            alt="Krsna carries away Rukminidevi"
            caption="Lord Krsna daringly carries away Srimati Rukminidevi from the midst of all the assembled kings."
          />

          <p>As she stepped out of the temple, she saw Him. Krsna did not hesitate. In the presence of all His rivals, He reached down, lifted Rukmini onto His chariot bearing the flag of Garuda, and drove away — exactly as a lion takes its prey from among jackals.</p>

          <Divider />

          {/* ─── SECTION 9 ─── */}
          <SectionHeading title="The Battle and the Fate of Rukmi" />
          <p>Lord Balarama and the Yadu army defeated the forces of Jarasandha and Sisupala. Rukmi boasted he would not return until he had killed the 'cowherd boy' — but Krsna neutralised all his weapons. Just as He was about to end Rukmi's life, Rukminidevi fell at Krsna's feet and pleaded for her brother. Out of love for Rukmini, Krsna spared Rukmi — but humiliated him by shaving his head in a jagged pattern. Too ashamed to return home, Rukmi spent the rest of his life in exile at Bhojakata.</p>

          <Bq>
            <p><em>Krsna spared Rukmi not because of Rukmi's merit — but because Rukminidevi asked. The devotee's plea moves the heart of the Supreme Lord.</em></p>
          </Bq>

          <Divider />

          {/* ─── SECTION 10 ─── */}
          <SectionHeading title="Balarama's Spiritual Teachings" />
          <p>When Lord Balarama arrived and saw Rukmini weeping, He used the moment to teach profound spiritual philosophy:</p>

          <ul className="rd-teachings-list">
            <li>
              <strong>The soul is pure:</strong> The spirit soul is of the same quality in every body. The differences of 'friend' and 'enemy' exist only in the bodily concept of life.
            </li>
            <li>
              <strong>The body is transitory:</strong> Just as the moon appears to wax and wane while remaining unchanged, the soul remains constant while the body undergoes transformation.
            </li>
            <li>
              <strong>Material existence is like a dream:</strong> In a dream one suffers or enjoys events that are not real. Krsna consciousness is the process of waking up from this dream.
            </li>
          </ul>

          <p>Pacified by Balarama's words, Rukmini accepted her brother's fate with equanimity. Krsna then brought His queen to Dvaraka — where the entire city erupted in celebration.</p>

          <Divider />

          {/* ─── SECTION 11 ─── */}
          <SectionHeading title="Life in Dvaraka: The Ideal of Devoted Service" />
          <p>Dvaraka received Rukminidevi with a grand festival. The city was a vision of gold and jewels, fragrant with incense and illuminated by thousands of lamps. Rukmini and Krsna were married with full Vedic ceremony and great pomp.</p>
          <p>What is most remarkable about Rukminidevi's life in Dvaraka is not the opulence — it is her seva (service). Despite having thousands of maidservants at her command, she insisted on serving Krsna personally. She would fan Him with a jewelled camara, massage His lotus feet, and remain always focused on Him — not on her status as the principal queen.</p>

          <Bq>
            <p><em>She was the Goddess of Fortune — yet she fanned Krsna with a camara like a humble maidservant. This is the secret of her glory.</em></p>
          </Bq>

          <p>While Krsna's pastimes in Vrndavana with the gopis are simple and spontaneous, His pastimes in Dvaraka with Rukmini represent the height of formal, regal devotion (vaidhi bhakti). Rukmini embodies the aisvarya (majestic opulence) aspect of the Lord, yet her heart is just as completely bound to Him as any resident of Vraja.</p>

          <Divider />

          {/* ─── SECTION 12 ─── */}
          <SectionHeading title="The Test of Love: When Krsna Spoke Harsh Words" />
          <p>One day, Krsna noticed that Rukmini carried a trace of subtle pride in her great fortune of having the Lord always beside her. To gently remove this and to relish the beauty of her emotional response, He began to speak apparently harsh and joking words to her.</p>
          <p>He told her things like: "You made a mistake marrying Me. I am a coward who fled to the sea out of fear of Jarasandha. I am penniless and have no kingdom. My devotees are usually poor beggars. You should have married Sisupala. It is better late than never — you can still leave Me."</p>
          <p>Rukmini, being deeply in love and perfectly simple-hearted, did not recognise the joke. She took His words literally and was seized by the terror of separation. Her heart palpitated. She lost her power of reason. The jewelled camara slipped from her hand. She collapsed — like a banana tree in a whirlwind.</p>
          <p>Krsna immediately lifted her gently and confessed He had spoken only to see her in the mood of loving distress.</p>

          <Divider />

          {/* ─── SECTION 13 ─── */}
          <SectionHeading title="Rukmini's Brilliant Philosophical Rebuttal" />
          <p>Once she composed herself, Rukminidevi gave a response that astonished even the Lord. She turned every apparent 'insult' into a philosophical glorification:</p>

          <ul className="rd-teachings-list">
            <li>
              <strong>On being 'unfit':</strong> She agreed they were not a match — for He is the Supreme Lord and she is merely a product of the modes of nature. How could the Absolute ever be 'matched' to the relative?
            </li>
            <li>
              <strong>On being 'penniless':</strong> He is penniless because He is everything. The owner of the universe has no need to 'possess' anything. He distributes Himself to His devotees and thus appears to have nothing left.
            </li>
            <li>
              <strong>On being a 'vagabond':</strong> Even His greatest devotees appear as vagabonds to common people — their true wealth is invisible to material eyes.
            </li>
            <li>
              <strong>On her 'mistake':</strong> She chose Him precisely to follow the path of Narada Muni and the great sages — who possess nothing but the Supreme Lord Himself.
            </li>
          </ul>

          <Bq>
            <p><em>"My dear Rukmini, I can never repay you for your unalloyed devotion. You have purchased Me for all time."</em></p>
            <cite>— Lord Sri Krsna to Srimati Rukminidevi, Krsna Book</cite>
          </Bq>

          <Bq>
            <p><em>"My dear Rukmini, you have purchased Me for all time." — When the Lord of the universe declares Himself conquered by the love of His devotee.</em></p>
          </Bq>

          <Divider />

          {/* ─── SECTION 14 ─── */}
          <SectionHeading title="The Qualities of Rukminidevi: Lessons for Every Devotee" />
          <p>The life of Srimati Rukminidevi is not merely a beautiful story. It is a living textbook of bhakti — devotional service to the Supreme Lord.</p>

          <ul className="rd-qualities-list">
            <li><strong>Determination</strong> She never once wavered in her choice of Krsna — not when her brother conspired against her, not when the entire world of kings gathered to stop Him.</li>
            <li><strong>Devotion through Hearing (Sravanam)</strong> She fell completely in love with Krsna simply by hearing His glories from saintly persons. Sravanam — submissive hearing — is the very foundation of bhakti.</li>
            <li><strong>Humility</strong> Despite being the Goddess of Fortune herself, she served Krsna as a humble maidservant — fanning Him, massaging His feet, considering this the greatest privilege in the universe.</li>
            <li><strong>Intelligence</strong> Both her letter and her philosophical rebuttal display a profound understanding of the Absolute Truth. In a true devotee, devotion and intelligence are inseparable.</li>
            <li><strong>Chastity (Pativrta-dharma)</strong> Her devotion was exclusive and one-pointed. Every other prince was, in her eyes, a mere insect compared to the Supreme Lord.</li>
            <li><strong>Forgiveness (Ksama)</strong> Even when her brother acted against her and was humiliated, she pleaded for his life. A devotee's heart is naturally compassionate.</li>
          </ul>

          <Bq>
            <p><em>Determination. Humility. Intelligence. Forgiveness. The life of Rukminidevi is a living textbook of bhakti — devotional service to the Supreme Lord.</em></p>
          </Bq>

          <Divider />

          {/* ─── SECTION 15 ─── */}
          <SectionHeading title="Glorifying the Eternal Queen" />
          <p>Rukminidevi is the mother of the universe and the eternal consort of our hearts' Lord. On her appearance day, we pray to her not for gold or silver, but for a drop of the determination she showed in her letter to Krsna.</p>
          <p>She teaches us that the Lord is conquered by love, not by power. He is the "beggar" of the devotee's affection. Just as Rukmini "purchased" Krsna with her silence and her service, we too can aspire to draw closer to Him by following in her footsteps.</p>
          <p>The marriage of Rukmini and Krsna is the union of the soul with the Super-soul, the energy with the energetic. When the Goddess of Fortune is united with the Maintainer of all, the entire world becomes jubilant.</p>

          <Bq>
            <p><em>Jay Sri Rukmini-Dvarakadhisa! May the grace of Srimati Rukminidevi illuminate our hearts and guide us back home, back to Godhead.</em></p>
          </Bq>

          <Divider />

          {/* ─── SECTION 16 ─── */}
          <SectionHeading title="Why Rukmini Dvadasi Is So Auspicious" />
          <p>Rukmini Dvadasi falls on the Sukla Paksa Dvadasi — the twelfth day of the waxing moon — in the month of Vaisakha. This sacred tithi is celebrated across the Vaisnava world as the divine appearance day of Srimati Rukminidevi.</p>

          <Bq>
            <p><em>This indicates that when food is offered to Lord Krsna with love and devotion and He is pleased and accepts it from the devotee, Rukmini-devi, the goddess of fortune, becomes so greatly obliged to the devotee that she has to go personally to the devotee's home to turn it into the most opulent home in the world.</em></p>
            <cite>— Srila Prabhupada, Krsna Book, Chapter 81</cite>
          </Bq>

          <p>On her appearance day, Rukminidevi's mercy is especially accessible. By hearing her glories, worshipping the Lord, offering flowers and prayers, and chanting the Holy Names — a devotee directly participates in the very process by which Rukminidevi herself attained Krsna: through hearing, through surrender, through love.</p>

          <Bq>
            <p><em>On Rukmini Dvadasi, the Goddess of Fortune herself is looking for sincere devotees to bless. Come to the temple. Hear. Chant. Surrender.</em></p>
          </Bq>

          <Divider />

          {/* ─── EVENT CALLOUT ─── */}
          <section className="rd-event-callout">
            <h3>Annual Rukmini Dvadasi Evening Celebration</h3>
            <p className="rd-event-loc">Daksina Dvaraka Dham, Thiruvanmiyur, Chennai</p>
            <p className="rd-event-time">Program Begins After 6:00 PM</p>
            <ul className="rd-event-list">
              <li>Maha-Abhisekam</li>
              <li>Harinama Sankirtana</li>
              <li>Special Discourse</li>
              <li>Sandhya Arati</li>
              <li>Sayana Arati</li>
            </ul>
          </section>

          <p>At Daksina Dvaraka Dham — the temple of Hare Krsna Movement Chennai in Thiruvanmiyur — Srimati Rukminidevi is worshipped every single day as part of Sri Sri Krsna-Rukmini-Satyabhama, the presiding deities on the ground floor. She is also the central deity of our forthcoming main sanctum, Sri Sri Rukmini Dvarakadhisa — making this day a festival that is deeply personal to our temple's identity and mission.</p>
          <p>You do not need any prior knowledge or experience to attend. All you need is a willing heart. Rukminidevi herself was someone who heard about Krsna and gave everything. If you come to the temple on her appearance day and do the same — hear, chant, take darsana — you are walking the very path she walked.</p>

          <Divider />

          {/* ─── FAQs ─── */}
          <SectionHeading title="Frequently Asked Questions About Rukmini Dvadasi" />
          <div className="rd-faq-grid">
            {faqs.map((f, i) => (
              <div key={i} className="rd-faq-item">
                <h4 className="rd-faq-q">{f.q}</h4>
                <p className="rd-faq-a">{f.a}</p>
              </div>
            ))}
          </div>

          <Divider />

          {/* ─── SOCIAL MEDIA ─── */}
          <section className="rd-connect-section">
            <h2 className="rd-connect-h">Connect with Us</h2>
            <p className="rd-connect-desc">Follow Hare Krsna Movement Chennai across all platforms for daily darsana and event updates.</p>
            <div className="rd-social-grid">
              {socialLinks.map((s, i) => <SocialCard key={i} {...s} />)}
            </div>
          </section>

          <footer className="rd-blog-footer">
            <p>Hare Krsna Movement Chennai | Daksina Dvaraka Dham, Thiruvanmiyur</p>
            <p>Affiliated to ISKCON Bangalore | Non-Profit Charitable Organisation Regn. No. 828, Chennai, 2008</p>
          </footer>
        </div>
      </article>

      <Footer />
    </main>
  );
}
