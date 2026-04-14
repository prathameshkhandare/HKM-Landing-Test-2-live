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
    q: "What is Rukmiṇī Dvādaśī and why is it celebrated?",
    a: "Rukmiṇī Dvādaśī is the divine appearance day of Śrīmatī Rukmiṇīdevī, the eternal consort of Lord Śrī Kṛṣṇa. It falls on the Śukla Pakṣa Dvādaśī tithi in the month of Vaiśākha. Devotees celebrate this day with abhiṣekam, kīrtana, and hearing the glories of Rukmiṇīdevī — following the same path of śravaṇam through which she herself attained Kṛṣṇa.",
  },
  {
    q: "Is Rukmiṇī Devī the same as Lakṣmī Devī?",
    a: "Yes. Rukmiṇīdevī is worshipped as Mahā-Lakṣmī — the Supreme Goddess of Fortune — in her role as the eternal consort of Lord Kṛṣṇa. She is also described in the Caitanya-caritāmṛta as an expansion of Śrīmatī Rādhārāṇī's internal potency (śakti-tattva), embodying the mood of Svakīyā-rasa (wedded devotional love).",
  },
  {
    q: "What is the significance of Rukmiṇīdevī's letter to Kṛṣṇa?",
    a: "Rukmiṇīdevī's letter to Kṛṣṇa, preserved in Śrīmad-Bhāgavatam (10.52.37–43), is one of the most beautiful examples of ātma-nivedanam — complete self-surrender — in all of Vedic literature. It teaches us that surrender to Kṛṣṇa includes both the offering of oneself and the intelligence to act in His service.",
  },
  {
    q: "Why did Kṛṣṇa speak harsh words to Rukmiṇīdevī?",
    a: "Kṛṣṇa spoke those apparently harsh joking words out of love — to gently remove a trace of subtle pride and to relish the beauty of her emotional response. When Rukmiṇī turned every 'insult' into a philosophical glorification, Kṛṣṇa declared that she had 'purchased' Him for all time with her unalloyed devotion.",
  },
  {
    q: "What is abhiṣekam and why is it performed?",
    a: "Abhiṣekam is the sacred Vedic ritual of ceremonially bathing the deity with auspicious substances — milk, yogurt, honey, ghee, tender coconut water, rose water — while chanting sacred mantras. It is a direct act of loving personal sevā to the Lord. Witnessing or participating in an abhiṣekam is considered highly purifying and deeply auspicious.",
  },
  {
    q: "How can I attend the Rukmiṇī Dvādaśī celebration in Chennai?",
    a: "Come to Dakṣiṇa Dvārakā Dhām, Thiruvanmiyur, Chennai. Our annual evening programme begins after 6:00 PM every Rukmiṇī Dvādaśī. All are welcome. For programme details, visit hkmchennai.org or follow us on social media.",
  },
  {
    q: "Does Dakṣiṇa Dvārakā Dhām have Rukmiṇī Devī as a presiding deity?",
    a: "Yes. Śrī Śrī Kṛṣṇa-Rukmiṇī-Satyabhāmā are the presiding deities worshipped daily on the ground floor. The forthcoming main sanctum will house Śrī Śrī Rukmiṇī Dvārakādhīśa — making Rukmiṇī Dvādaśī one of the most important festivals of this temple.",
  },
  {
    q: "What is the benefit of worshipping Rukmiṇīdevī?",
    a: "Śrīla Prabhupāda teaches that Rukmiṇīdevī is so devoted to Kṛṣṇa that she considers any sincere devotee of the Lord as supremely dear to her. By worshipping and hearing about Rukmiṇīdevī, a devotee draws the mercy of the Goddess of Fortune — not merely material fortune, but the supreme fortune of love for God.",
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
          <h1 className="rd-blog-title">Rukmiṇī Dvādaśī: The Appearance Day of Śrīmatī Rukmiṇīdevī</h1>
          <p className="rd-blog-subtitle">Her Story, Her Glories, Her Letter to Kṛṣṇa — and Our Annual Evening Celebration at Dakṣiṇa Dvārakā Dhām, Chennai</p>
          <div className="rd-hero-line" />
          <p className="rd-blog-byline">
            Based on the teachings of <strong>His Divine Grace Viśva Guru A.C. Bhaktivedanta Swami Prabhupāda</strong><br />
            Founder-Ācārya of the International Society for Kṛṣṇa Consciousness
          </p>
        </header>

        <div className="rd-content">

          {/* ─── SECTION 1 ─── */}
          <SectionHeading title="What Does It Mean to Truly Love God?" />
          <p>Most of us think of love as something we feel only for those we can see and speak to. But what about love for someone you have only heard about — whose form you have never seen with your own eyes, whose voice you have never heard with your physical ears — and yet your heart is so full that you are willing to give up everything, even your very life, for Him?</p>
          <p>This is not a philosophical question. This is the life of Śrīmatī Rukmiṇīdevī.</p>
          <p>Her story answers one of the deepest questions a spiritual seeker can ask: What does pure, unalloyed devotion look like in practice? And it answers that question not through a lecture — but through love, courage, intelligence, and complete surrender.</p>
          <p>On the auspicious occasion of Rukmiṇī Dvādaśī — the divine appearance day of Śrīmatī Rukmiṇīdevī, observed on Śukla Pakṣa Dvādaśī in the sacred month of Vaiśākha — let us gather our hearts and minds to understand this extraordinary personality who stands at the very summit of devotion.</p>

          <Bq>
            <p><em>She had never seen Him. Yet she gave everything for Him. This is the power of hearing the Lord's glories from the right sources.</em></p>
          </Bq>

          <BlogImage
            src="/assets/TA_987_sudama_and_krishna.png"
            alt="Lord Kṛṣṇa's divine qualities"
            caption="Lord Kṛṣṇa, the reservoir of all pleasure and the object of Rukmiṇīdevī's pure devotion."
          />

          <Divider />

          {/* ─── SECTION 2 ─── */}
          <SectionHeading title="The Divine Identity: Who Is Śrīmatī Rukmiṇīdevī?" />
          <p>To glorify Śrīmatī Rukmiṇīdevī, we must first understand her true identity — for she is not merely a queen, nor simply a beautiful princess from a royal family. She is the Supreme Goddess of Fortune, Mahā-Lakṣmī Herself, descending to this world to participate in the divine pastimes of Lord Śrī Kṛṣṇa.</p>
          <p>As the Caitanya-caritāmṛta confirms, just as Lord Kṛṣṇa expands Himself into various Viṣṇu-tattva forms, Śrīmatī Rādhārāṇī expands Herself into various Śakti-tattva forms — and Śrīmatī Rukmiṇīdevī is the foremost of those expansions. In the realm of Vaikuṇṭha, she resides as Lakṣmī beside Nārāyaṇa. In the royal city of Dvārakā, she is the embodiment of opulence, beauty, chaste devotion, and eternal love.</p>
          <p>She is the principal queen among the 16,108 queens of Dvārakā — descending to earth not by accident, but by her own will, to participate in Kṛṣṇa's transcendental pastimes as Dvārakādhīśa.</p>

          <Bq>
            <p><em>Rukmiṇī was the most beloved of all Lord Kṛṣṇa's queens. She is described as the goddess of fortune who is never separated from Lord Viṣṇu.</em></p>
            <cite>— Śrīla Prabhupāda, Kṛṣṇa, the Supreme Personality of Godhead</cite>
          </Bq>

          <Divider />

          {/* ─── SECTION 3 ─── */}
          <SectionHeading title="Her Appearance in Vidarbha" />
          <p>Rukmiṇīdevī appeared as the daughter of King Bhīṣmaka, the pious ruler of Vidarbha, and his wife Sudhīmatī. She was the youngest among six siblings — five brothers named Rukmī, Rukmaratha, Rukmāhu, Rukmakerśa, and Rukmāḷī, and herself. From her very birth, she was known as Rucīrānanā — she whose face is as beautiful and expansive as a lotus flower.</p>

          <Divider />

          {/* ─── SECTION 4 ─── */}
          <SectionHeading title="Devotion Born of Hearing: The Power of Śravaṇam" />
          <p>Rukmiṇīdevī's love for Kṛṣṇa is a unique and extraordinary example of pūrva-rāga — love before meeting. In a palace visited by saintly sages and the great celestial traveller Nārada Muni, Rukmiṇī spent her youth listening. She heard of Kṛṣṇa's six opulences: His unmatched beauty, His infinite strength, His boundless fame, His total wealth, His perfect knowledge, and His complete renunciation.</p>
          <p>Simply by the process of śravaṇam — submissive hearing from authoritative sources — she surrendered her heart entirely. This is one of the most important spiritual lessons her life teaches us: physical presence is not a prerequisite for love. You do not need to see the Lord first. You need only to hear His glories, with an open and sincere heart.</p>
          <p>Rukmiṇīdevī heard, and she was transformed. She decided with complete certainty that she would marry no one else. Her parents, King Bhīṣmaka and Sudhīmatī, were supportive of her wish. But one powerful obstacle stood in the way.</p>

          <Bq>
            <p><em>Simply by hearing the Lord's glories, Rukmiṇī surrendered her entire heart. Śravaṇam — submissive hearing — is the very foundation of bhakti.</em></p>
          </Bq>

          <Divider />

          {/* ─── SECTION 5 ─── */}
          <SectionHeading title="The Conflict: The Lion and the Jackals" />
          <p>Rukmiṇī's eldest brother Rukmī was consumed by envy toward Kṛṣṇa. As a close friend of the wicked Śiśupāla, the King of Cedi, Rukmī conspired to arrange Rukmiṇī's marriage to Śiśupāla — against her will and against the wishes of her parents.</p>
          <p>When Rukmiṇī heard of this arrangement, she did not sink into helpless despair. Being a daughter of the kṣatriya lineage, she possessed both intelligence and decisive courage. She selected a qualified, truthful Brāhmaṇa from the royal court as her secret messenger and sent him all the way to Dvārakā — carrying a personal letter addressed to Lord Śrī Kṛṣṇa Himself.</p>

          <Divider />

          {/* ─── SECTION 6 ─── */}
          <SectionHeading title="Kṛṣṇa's Reception of the Brāhmaṇa" />
          <p>The scene of this Brāhmaṇa arriving at Kṛṣṇa's palace is a masterclass in humility. Lord Kṛṣṇa — the Supreme Lord of all creation — immediately rose from His golden throne to honour the Brāhmaṇa. He washed the guest's feet personally and massaged them with His own hands, teaching the entire world that the worship of His devotee is even more valuable than the worship of Himself.</p>

          <Divider />

          {/* ─── SECTION 7 ─── */}
          <SectionHeading title="The Letter: A Blueprint for Total Surrender" />
          <p>The letter Rukmiṇīdevī sent to Kṛṣṇa is one of the most beautiful documents in all of Vedic literature. In it, she addresses Him as Mukunda (the giver of liberation) and Ajita (the Unconquerable). Comprising seven verses in Śrīmad-Bhāgavatam (10.52.37–43), this letter is a living example of ātma-nivedanam — complete self-surrender.</p>

          <Bq>
            <p><em>Her letter to Kṛṣṇa is not merely a request. It is a perfect prayer of surrender — the soul calling out to the Supreme Soul.</em></p>
          </Bq>

          <SubHeading title="The Call of the Soul (Verse 37)" />
          <p>Rukmiṇī begins by explaining that her love is not based on physical sight — but on the profound impact of hearing Kṛṣṇa's glories:</p>

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
          <p>She declares her surrender with absolute clarity, identifying Kṛṣṇa as her only husband:</p>

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
            <p><em>"If not in this life, then after hundreds of births — I hope to attain Your favour." The determination of Rukmiṇīdevī is the standard of a true devotee.</em></p>
          </Bq>

          <p>Finally, with practical intelligence, she offered a plan: Kṛṣṇa should come during her traditional pre-wedding visit to the temple of Goddess Girijā (Durgā) — the only time a bride appears in public before her wedding. This was her complete surrender: offering even the plan, and leaving the outcome entirely to the Lord.</p>

          <Divider />

          {/* ─── SECTION 8 ─── */}
          <SectionHeading title="The Kidnapping: Love That Could Not Be Stopped" />
          <p>Upon hearing the letter, Kṛṣṇa's heart was moved. He confessed to the Brāhmaṇa that He too could not sleep at night for thinking of Rukmiṇī. That very night, Kṛṣṇa and the Brāhmaṇa travelled over a thousand miles in a chariot drawn by His four legendary horses — Śaibya, Sugrīva, Meghapuspa, and Balāhaka — arriving at the city of Kuṇḍina by morning.</p>

          <SubHeading title="The Scene at Kuṇḍina" />
          <p>The city was richly decorated for the wedding — but the atmosphere was tense. Kings like Jarāsandha, Dantavakra, Śiśupāla, and Pauṇḍraka had gathered to ensure Kṛṣṇa would not interfere. Lord Balarāma followed with the full army of the Yadu dynasty.</p>
          <p>Inside the palace, Rukmiṇīdevī was in agony. But then — auspicious signs appeared. Her left eyelid, arm, and thigh began to tremble. Moments later, the Brāhmaṇa appeared with a smile. Kṛṣṇa had come.</p>

          <SubHeading title="The Temple Procession" />
          <p>As Rukmiṇī walked toward the temple of Ambikā, her beauty was so overwhelming that the assembled princes fell from their horses in a daze. Yet she was completely indifferent to all of them. She entered the temple and prayed to Goddess Durgā with only one request: "May Lord Kṛṣṇa become my husband."</p>

          <BlogImage
            src="/assets/krishna_kidnaps_rukmini_1.png"
            alt="Kṛṣṇa carries away Rukmiṇīdevī"
            caption="Lord Kṛṣṇa daringly carries away Śrīmatī Rukmiṇīdevī from the midst of all the assembled kings."
          />

          <p>As she stepped out of the temple, she saw Him. Kṛṣṇa did not hesitate. In the presence of all His rivals, He reached down, lifted Rukmiṇī onto His chariot bearing the flag of Garuḍa, and drove away — exactly as a lion takes its prey from among jackals.</p>

          <Divider />

          {/* ─── SECTION 9 ─── */}
          <SectionHeading title="The Battle and the Fate of Rukmī" />
          <p>Lord Balarāma and the Yadu army defeated the forces of Jarāsandha and Śiśupāla. Rukmī boasted he would not return until he had killed the 'cowherd boy' — but Kṛṣṇa neutralised all his weapons. Just as He was about to end Rukmī's life, Rukmiṇīdevī fell at Kṛṣṇa's feet and pleaded for her brother. Out of love for Rukmiṇī, Kṛṣṇa spared Rukmī — but humiliated him by shaving his head in a jagged pattern. Too ashamed to return home, Rukmī spent the rest of his life in exile at Bhojakata.</p>

          <Bq>
            <p><em>Kṛṣṇa spared Rukmī not because of Rukmī's merit — but because Rukmiṇīdevī asked. The devotee's plea moves the heart of the Supreme Lord.</em></p>
          </Bq>

          <Divider />

          {/* ─── SECTION 10 ─── */}
          <SectionHeading title="Balarāma's Spiritual Teachings" />
          <p>When Lord Balarāma arrived and saw Rukmiṇī weeping, He used the moment to teach profound spiritual philosophy:</p>

          <ul className="rd-teachings-list">
            <li>
              <strong>The soul is pure:</strong> The spirit soul is of the same quality in every body. The differences of 'friend' and 'enemy' exist only in the bodily concept of life.
            </li>
            <li>
              <strong>The body is transitory:</strong> Just as the moon appears to wax and wane while remaining unchanged, the soul remains constant while the body undergoes transformation.
            </li>
            <li>
              <strong>Material existence is like a dream:</strong> In a dream one suffers or enjoys events that are not real. Kṛṣṇa consciousness is the process of waking up from this dream.
            </li>
          </ul>

          <p>Pacified by Balarāma's words, Rukmiṇī accepted her brother's fate with equanimity. Kṛṣṇa then brought His queen to Dvārakā — where the entire city erupted in celebration.</p>

          <Divider />

          {/* ─── SECTION 11 ─── */}
          <SectionHeading title="Life in Dvārakā: The Ideal of Devoted Service" />
          <p>Dvārakā received Rukmiṇīdevī with a grand festival. The city was a vision of gold and jewels, fragrant with incense and illuminated by thousands of lamps. Rukmiṇī and Kṛṣṇa were married with full Vedic ceremony and great pomp.</p>
          <p>What is most remarkable about Rukmiṇīdevī's life in Dvārakā is not the opulence — it is her sevā (service). Despite having thousands of maidservants at her command, she insisted on serving Kṛṣṇa personally. She would fan Him with a jewelled cāmara, massage His lotus feet, and remain always focused on Him — not on her status as the principal queen.</p>

          <Bq>
            <p><em>She was the Goddess of Fortune — yet she fanned Kṛṣṇa with a cāmara like a humble maidservant. This is the secret of her glory.</em></p>
          </Bq>

          <p>While Kṛṣṇa's pastimes in Vṛndāvana with the gopīs are simple and spontaneous, His pastimes in Dvārakā with Rukmiṇī represent the height of formal, regal devotion (vaidhī bhakti). Rukmiṇī embodies the aiśvarya (majestic opulence) aspect of the Lord, yet her heart is just as completely bound to Him as any resident of Vraja.</p>

          <Divider />

          {/* ─── SECTION 12 ─── */}
          <SectionHeading title="The Test of Love: When Kṛṣṇa Spoke Harsh Words" />
          <p>One day, Kṛṣṇa noticed that Rukmiṇī carried a trace of subtle pride in her great fortune of having the Lord always beside her. To gently remove this and to relish the beauty of her emotional response, He began to speak apparently harsh and joking words to her.</p>
          <p>He told her things like: "You made a mistake marrying Me. I am a coward who fled to the sea out of fear of Jarāsandha. I am penniless and have no kingdom. My devotees are usually poor beggars. You should have married Śiśupāla. It is better late than never — you can still leave Me."</p>
          <p>Rukmiṇī, being deeply in love and perfectly simple-hearted, did not recognise the joke. She took His words literally and was seized by the terror of separation. Her heart palpitated. She lost her power of reason. The jewelled cāmara slipped from her hand. She collapsed — like a banana tree in a whirlwind.</p>
          <p>Kṛṣṇa immediately lifted her gently and confessed He had spoken only to see her in the mood of loving distress.</p>

          <Divider />

          {/* ─── SECTION 13 ─── */}
          <SectionHeading title="Rukmiṇī's Brilliant Philosophical Rebuttal" />
          <p>Once she composed herself, Rukmiṇīdevī gave a response that astonished even the Lord. She turned every apparent 'insult' into a philosophical glorification:</p>

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
              <strong>On her 'mistake':</strong> She chose Him precisely to follow the path of Nārada Muni and the great sages — who possess nothing but the Supreme Lord Himself.
            </li>
          </ul>

          <Bq>
            <p><em>"My dear Rukmiṇī, I can never repay you for your unalloyed devotion. You have purchased Me for all time."</em></p>
            <cite>— Lord Śrī Kṛṣṇa to Śrīmatī Rukmiṇīdevī, Kṛṣṇa Book</cite>
          </Bq>

          <Bq>
            <p><em>"My dear Rukmiṇī, you have purchased Me for all time." — When the Lord of the universe declares Himself conquered by the love of His devotee.</em></p>
          </Bq>

          <Divider />

          {/* ─── SECTION 14 ─── */}
          <SectionHeading title="The Qualities of Rukmiṇīdevī: Lessons for Every Devotee" />
          <p>The life of Śrīmatī Rukmiṇīdevī is not merely a beautiful story. It is a living textbook of bhakti — devotional service to the Supreme Lord.</p>

          <ul className="rd-qualities-list">
            <li><strong>Determination</strong> She never once wavered in her choice of Kṛṣṇa — not when her brother conspired against her, not when the entire world of kings gathered to stop Him.</li>
            <li><strong>Devotion through Hearing (Śravaṇam)</strong> She fell completely in love with Kṛṣṇa simply by hearing His glories from saintly persons. Śravaṇam — submissive hearing — is the very foundation of bhakti.</li>
            <li><strong>Humility</strong> Despite being the Goddess of Fortune herself, she served Kṛṣṇa as a humble maidservant — fanning Him, massaging His feet, considering this the greatest privilege in the universe.</li>
            <li><strong>Intelligence</strong> Both her letter and her philosophical rebuttal display a profound understanding of the Absolute Truth. In a true devotee, devotion and intelligence are inseparable.</li>
            <li><strong>Chastity (Pātivrta-dharma)</strong> Her devotion was exclusive and one-pointed. Every other prince was, in her eyes, a mere insect compared to the Supreme Lord.</li>
            <li><strong>Forgiveness (Kṣamā)</strong> Even when her brother acted against her and was humiliated, she pleaded for his life. A devotee's heart is naturally compassionate.</li>
          </ul>

          <Bq>
            <p><em>Determination. Humility. Intelligence. Forgiveness. The life of Rukmiṇīdevī is a living textbook of bhakti — devotional service to the Supreme Lord.</em></p>
          </Bq>

          <Divider />

          {/* ─── SECTION 15 ─── */}
          <SectionHeading title="Glorifying the Eternal Queen" />
          <p>Rukmiṇīdevī is the mother of the universe and the eternal consort of our hearts' Lord. On her appearance day, we pray to her not for gold or silver, but for a drop of the determination she showed in her letter to Kṛṣṇa.</p>
          <p>She teaches us that the Lord is conquered by love, not by power. He is the "beggar" of the devotee's affection. Just as Rukmiṇī "purchased" Kṛṣṇa with her silence and her service, we too can aspire to draw closer to Him by following in her footsteps.</p>
          <p>The marriage of Rukmiṇī and Kṛṣṇa is the union of the soul with the Super-soul, the energy with the energetic. When the Goddess of Fortune is united with the Maintainer of all, the entire world becomes jubilant.</p>

          <Bq>
            <p><em>Jay Śrī Rukmiṇī-Dvārakādhīśa! May the grace of Śrīmatī Rukmiṇīdevī illuminate our hearts and guide us back home, back to Godhead.</em></p>
          </Bq>

          <Divider />

          {/* ─── SECTION 16 ─── */}
          <SectionHeading title="Why Rukmiṇī Dvādaśī Is So Auspicious" />
          <p>Rukmiṇī Dvādaśī falls on the Śukla Pakṣa Dvādaśī — the twelfth day of the waxing moon — in the month of Vaiśākha. This sacred tithi is celebrated across the Vaiṣṇava world as the divine appearance day of Śrīmatī Rukmiṇīdevī.</p>

          <Bq>
            <p><em>This indicates that when food is offered to Lord Kṛṣṇa with love and devotion and He is pleased and accepts it from the devotee, Rukmiṇī-devī, the goddess of fortune, becomes so greatly obliged to the devotee that she has to go personally to the devotee's home to turn it into the most opulent home in the world.</em></p>
            <cite>— Śrīla Prabhupāda, Kṛṣṇa Book, Chapter 81</cite>
          </Bq>

          <p>On her appearance day, Rukmiṇīdevī's mercy is especially accessible. By hearing her glories, worshipping the Lord, offering flowers and prayers, and chanting the Holy Names — a devotee directly participates in the very process by which Rukmiṇīdevī herself attained Kṛṣṇa: through hearing, through surrender, through love.</p>

          <Bq>
            <p><em>On Rukmiṇī Dvādaśī, the Goddess of Fortune herself is looking for sincere devotees to bless. Come to the temple. Hear. Chant. Surrender.</em></p>
          </Bq>

          <Divider />

          {/* ─── EVENT CALLOUT ─── */}
          <section className="rd-event-callout">
            <h3>Annual Rukmiṇī Dvādaśī Evening Celebration</h3>
            <p className="rd-event-loc">Dakṣiṇa Dvārakā Dhām, Thiruvanmiyur, Chennai</p>
            <p className="rd-event-time">Program Begins After 6:00 PM</p>
            <ul className="rd-event-list">
              <li>Mahā-Abhiṣekam</li>
              <li>Harīnāma Saṅkīrtana</li>
              <li>Special Discourse</li>
              <li>Sandhyā Āratī</li>
              <li>Śayanā Āratī</li>
            </ul>
          </section>

          <p>At Dakṣiṇa Dvārakā Dhām — the temple of Hare Kṛṣṇa Movement Chennai in Thiruvanmiyur — Śrīmatī Rukmiṇīdevī is worshipped every single day as part of Śrī Śrī Kṛṣṇa-Rukmiṇī-Satyabhāmā, the presiding deities on the ground floor. She is also the central deity of our forthcoming main sanctum, Śrī Śrī Rukmiṇī Dvārakādhīśa — making this day a festival that is deeply personal to our temple's identity and mission.</p>
          <p>You do not need any prior knowledge or experience to attend. All you need is a willing heart. Rukmiṇīdevī herself was someone who heard about Kṛṣṇa and gave everything. If you come to the temple on her appearance day and do the same — hear, chant, take darśana — you are walking the very path she walked.</p>

          <Divider />

          {/* ─── FAQs ─── */}
          <SectionHeading title="Frequently Asked Questions About Rukmiṇī Dvādaśī" />
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
            <p className="rd-connect-desc">Follow Hare Kṛṣṇa Movement Chennai across all platforms for daily darśana and event updates.</p>
            <div className="rd-social-grid">
              {socialLinks.map((s, i) => <SocialCard key={i} {...s} />)}
            </div>
          </section>

          <footer className="rd-blog-footer">
            <p>Hare Kṛṣṇa Movement Chennai | Dakṣiṇa Dvārakā Dhām, Thiruvanmiyur</p>
            <p>Affiliated to ISKCON Bangalore | Non-Profit Charitable Organisation Regn. No. 828, Chennai, 2008</p>
          </footer>
        </div>
      </article>

      <Footer />
    </main>
  );
}
