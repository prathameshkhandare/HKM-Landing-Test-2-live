"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/FooterSection"
import "./styles.css"

const socialLinks = [
  { icon: "🌍", label: "Website", display: "hkmchennai.org", url: "https://hkmchennai.org/" },
  { icon: "🕊", label: "Twitter (X)", display: "@ChennaiHare", url: "https://x.com/ChennaiHare" },
  { icon: "📸", label: "Instagram", display: "@hkm_chennai", url: "https://www.instagram.com/hkm_chennai" },
  { icon: "💼", label: "LinkedIn", display: "HKM Chennai", url: "https://www.linkedin.com/company/hare-krishna-movement-chennai/" },
  { icon: "🎯", label: "Support", display: "campaigns.hkmchennai.org", url: "https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign" },
  { icon: "📲", label: "WhatsApp", display: "Join our WhatsApp Channel", url: "https://www.whatsapp.com/channel/0029Vaa2fjKEVccFHx5YDt1O" },
]

const sacredEvents = [
  {
    icon: "🏛️",
    title: "Beginning of Treta Yuga",
    desc: "According to Vedic cosmology, Treta Yuga — the second of the four great ages — began on Akshaya Tritiya, marking a monumental transition in cosmic time. This day thus carries the energy of new beginnings at the grandest possible scale.",
  },
  {
    icon: "📖",
    title: "Beginning of the Mahābhārata",
    desc: "On this auspicious tithi, Sage Veda Vyāsa began dictating the Mahābhārata — one of the greatest spiritual literatures ever composed — while Lord Gaṇeśa accepted the role of divine scribe. That such a monumental work of dharmic wisdom was initiated on Akshaya Tritiya speaks to the inexhaustible knowledge this day bestows.",
  },
  {
    icon: "🌾",
    title: "The Sudāmā–Kṛṣṇa Pastime",
    desc: "On this sacred day, the beloved pastime of Sudāmā and Lord Kṛṣṇa unfolded. Sudāmā's humble offering of flattened rice (poha) was lovingly accepted by Kṛṣṇa, who in return bestowed unlimited blessings upon him. This pastime reveals the eternal truth: even the smallest offering made with pure devotion becomes infinite in the eyes of the Lord.",
  },
  {
    icon: "💧",
    title: "Descent of the River Gaṅgā",
    desc: "The holy river Gaṅgā descended to Earth on Akshaya Tritiya, bringing her purifying, divine grace to humanity. Her descent was itself an act of inexhaustible mercy — a river whose waters have been liberating souls across countless generations.",
  },
  {
    icon: "⚔️",
    title: "Appearance of Lord Paraśurāma",
    desc: "Akshaya Tritiya is also celebrated as Paraśurāma Jayantī — the appearance day of Lord Paraśurāma, the sixth incarnation of Lord Viṣṇu. His advent signifies the protection of dharma and the vigorous destruction of adharma. The Lord appeared in the evening of this tithi, confirming Akshaya Tritiya as a day of divine descent.",
  },
  {
    icon: "🏺",
    title: "Blessing of the Akshaya Pātra",
    desc: "During their years of exile in the forest, the Pāṇḍavas received the divine Akshaya Pātra on this day — a mystical vessel that provided an inexhaustible supply of food to all who sought shelter with them. The very name \"Akshaya Pātra\" (the vessel that never empties) is a living embodiment of the principle of this tithi: the Lord's mercy in sustaining His devotees knows no limit.",
  },
  {
    icon: "🙏",
    title: "Divine Grace to Draupadī",
    desc: "On Akshaya Tritiya, Draupadī received the Lord's unending protection and mercy. Her complete surrender to Lord Kṛṣṇa in her moment of greatest need was answered with grace that never diminished. Her story embodies the very meaning of Akshaya — that divine protection, once sought with sincerity, is truly inexhaustible.",
  },
  {
    icon: "🪙",
    title: "Blessings of Kubera",
    desc: "On this day, Kubera — the treasurer of the demigods and guardian of celestial wealth — is believed to have been blessed with prosperity and abundance, making Akshaya Tritiya a traditionally auspicious time for invoking material and spiritual abundance alike. Yet as the scriptures remind us, even Kubera's wealth has its limit; only Kṛṣṇa's grace is truly Akshaya.",
  },
  {
    icon: "🌟",
    title: "Lord Nārāyaṇa's Assurance to Indra",
    desc: "When King Bali and the asuras wrested control of the heavenly planets, Lord Indra approached his spiritual master Bṛhaspati, who instructed him to worship Lord Nārāyaṇa. Lord Nārāyaṇa appeared to Indra on Akshaya Tritiya and gave him the assurance: \"Do not worry — I will come as Vāmana Deva and restore what you have lost.\" This pastime teaches that what is lost through one's own misfortune can be restored fully by the unlimited grace of the Lord.",
  },
]

const practices = [
  {
    num: "1",
    title: "Offer Tulasī to Lord Kṛṣṇa",
    desc: "This is the single most important practice of the day. Even those who cannot offer gold or flowers must not miss offering a Tulasī leaf to Kṛṣṇa. If you have a Śāligrāma, offering Tulasī on this day is especially significant. If Tulasī is not physically available, offer it sincerely from the heart — the Lord will accept it.",
  },
  {
    num: "2",
    title: "Apply Chandan — Begin the Chandan Yātrā",
    desc: "From Akshaya Tritiya, Vaiṣṇava temples worldwide begin the Chandan Yātrā — a festival of adorning the Lord's form with fragrant sandalwood paste. Prepare a chandan paste at home by mixing sandalwood (chandan), Tulasī leaf or stem, camphor (karpura), saffron (kesar), and cardamom (elaichi). Apply this paste to the deity of Kṛṣṇa to invoke the fragrance of the ātmā — humility, knowledge, and devotion.",
  },
  {
    num: "3",
    title: "Worship with Flowers",
    desc: "Worship Nārāyaṇa with as many flowers as possible. Vaishakha is the season of abundant flowers; fresh, fragrant flowers (never plastic) are the appropriate offering. When we offer a fragrant flower, our prayer is: \"My Lord, let my original spiritual fragrance of the ātmā come forth.\"",
  },
  {
    num: "4",
    title: "Offer Poha (Chipped Rice)",
    desc: "Following Sudāmā Brāhmaṇa's example, offer chipped rice (poha) to the Lord with love and devotion on this day. What matters is not the richness of the offering but the sincerity behind it.",
  },
  {
    num: "5",
    title: "Charity — Especially of Scriptures",
    desc: "Dāna (charity) on Akshaya Tritiya is highly recommended in the Purāṇas. The most pleasing charity to the Lord is the donation of scriptures — Bhagavad Gītā, Śrīmad Bhāgavatam, and other Vaiṣṇava literature. Other forms of charity — bhu-dāna (land), suvarṇa-dāna (gold), dhānya (grains) — are also meritorious when done with the right spirit.",
  },
  {
    num: "6",
    title: "Harinam Saṅkīrtana — Chanting the Holy Names",
    desc: "Increase your rounds of the Hare Kṛṣṇa mahā-mantra today. Reading Bhagavad Gītā and Śrīmad Bhāgavatam on Akshaya Tritiya yields unlimited benefit. Participate in kīrtan, attend the temple programme, and spend as much time as possible in the service of the Lord.",
  },
]

function SocialCard({ icon, label, url, display }: { icon: string; label: string; url: string; display: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="at-social-card">
      <span className="at-s-icon">{icon}</span>
      <div className="at-s-text">
        <span className="at-s-label">{label}</span>
        <span className="at-s-url">{display}</span>
      </div>
      <span className="at-s-arrow">→</span>
    </a>
  )
}

function Divider() {
  return (
    <div className="at-divider" aria-hidden="true">
      <span>✦</span>
    </div>
  )
}

export default function BlogClient() {
  return (
    <main className="min-h-screen bg-[#FFF9F0] selection:bg-[#c9973a] selection:text-white">
      <Navbar />
      <article className="at-blog-wrap">

        {/* ── HEADER ── */}
        <header className="at-blog-header">
          <p className="at-hero-label">Vaiṣṇava Festival — Vaishakha Śukla Pakṣa Tṛtīyā</p>
          <h1 className="at-blog-title">
            Akshaya Tṛtīyā:<br />
            The Inexhaustible Day of Eternal Blessings
          </h1>
          <div className="at-hero-line" />
          <p className="at-blog-subtitle">
            Whatever is done on this tithi in devotion to the Lord yields results that are unlimited, permanent, and inexhaustible.
          </p>
          <p className="at-blog-byline">
            By <strong>His Grace Sampati Dāsa</strong>
            {" "}— President, Hare Krishna Movement, Pune
          </p>
          <div className="at-meta-row">
            <span>📅 April 20, 2026</span>
            <span>⏱ 8 min read</span>
            <span>🏷 Festival</span>
          </div>
        </header>

        {/* ── OPENING PULL QUOTE ── */}
        <div className="at-pull-quote">
          <p>
            "On Akshaya Tritiya, the real Akshaya result is possible only when you surrender to Kṛṣṇa.
            What Kṛṣṇa gives is always eternal — it is permanent, sanātana."
          </p>
          <cite>— His Grace Sampati Dāsa</cite>
        </div>

        {/* ── HERO IMAGE ── */}
        <div className="at-image-container">
          <img
            src="/assets/blog/akshaya-tritiya/sudama_krishna.png"
            alt="Lord Kṛṣṇa and Sudāmā — the pastime of the humble offering of chipped rice on Akshaya Tritiya"
            className="at-image"
          />
          <span className="at-image-caption">
            Sudāmā Brāhmaṇa offering his humble chipped rice to Lord Kṛṣṇa at Dvārakā — a pastime that took place on Akshaya Tṛtīyā and reveals the infinite power of a pure-hearted offering.
          </span>
        </div>

        <Divider />

        {/* ── SECTION 1: WHAT IS AKSHAYA TRITIYA ── */}
        <div className="at-content">
          <h2 className="at-sh">What Is Akshaya Tṛtīyā?</h2>
          <p>
            Akshaya Tṛtīyā falls on the third tithi (Tṛtīyā) of the bright fortnight (Śukla Pakṣa) of the month of Vaishakha in the lunar calendar. In every month there are two Tṛtīyā tithis — one in Kṛṣṇa Pakṣa (the waning fortnight) and one in Śukla Pakṣa (the waxing fortnight). Across a full year, that gives us 24 Tṛtīyā tithis. Yet only one is called Akshaya Tṛtīyā, and for very profound reasons.
          </p>
          <p>
            The word <em>"Akshaya"</em> is the opposite of <em>"Kṣaya."</em>
          </p>
          <div className="at-bq">
            <p>
              <strong>Kṣaya</strong> means: reduce, deteriorate, decrease, loss, temporary, limited.<br />
              <strong>Akshaya</strong> means: unlimited, permanent, inexhaustible, abundant, eternal.
            </p>
          </div>
          <p>
            On this one tithi, unlike all other Tṛtīyā tithis of the year, whatever we do in devotion to the Lord yields results that are unlimited, permanent, and inexhaustible. That is why the scriptures and our ācāryas urge us never to miss this day.
          </p>
        </div>

        <Divider />

        {/* ── SECTION 2: DEEPER UNDERSTANDING ── */}
        <div className="at-content">
          <h2 className="at-sh">What Akshaya Really Means — A Deeper Understanding</h2>
          <p>
            Here a thoughtful question arises: we live in a temporary world. Śrī Kṛṣṇa Himself says in Bhagavad Gītā (8.15):
          </p>
          <div className="at-verse">
            <div className="at-verse-skt">
              duḥkhālayam aśāśvatam
            </div>
            <div className="at-verse-body">
              <p>"This world is a place of misery and is temporary."</p>
              <cite>— Bhagavad Gītā 8.15</cite>
            </div>
          </div>
          <p>
            So how can anything in a temporary world give a permanent result? His Grace Sampati Dāsa explains this with great clarity: material "permanence" has a ceiling — one day of Lord Brahmā, which spans 1,000 Satya Yugas + 1,000 Tretā Yugas + 1,000 Dvāpara Yugas + 1,000 Kali Yugas. After that cycle, everything resets to zero.
          </p>
          <div className="at-verse">
            <div className="at-verse-skt">
              antavat tu phalaṁ teṣāṁ tad bhavaty alpa-medhasām
            </div>
            <div className="at-verse-body">
              <p>"The results obtained from material worship all have an end. Only those of lesser intelligence do not understand this."</p>
              <cite>— Bhagavad Gītā 7.23</cite>
            </div>
          </div>
          <p>
            Even the devatās — celestial demigods — cannot give us truly eternal results, because they themselves are not eternal. Their powers and positions eventually change. The real Akshaya — the truly inexhaustible blessing — can only be received from Lord Kṛṣṇa, because Kṛṣṇa alone is Akshaya. Only He can restore to us what is truly ours: our eternal, loving relationship with God.
          </p>
        </div>

        <Divider />

        {/* ── SECTION 3: NINE SACRED EVENTS ── */}
        <div className="at-content">
          <h2 className="at-sh">Nine Sacred Events That Occurred on Akshaya Tṛtīyā</h2>
          <p>
            The holiness of Akshaya Tṛtīyā is confirmed by the sheer number of transcendental events that took place on this one tithi across cosmic history. Each event carries its own teaching, and together they reveal why this day is so uniquely dear to the Lord.
          </p>
          <div className="at-events-grid">
            {sacredEvents.map((e, i) => (
              <div className="at-event-item" key={i}>
                <span className="at-event-icon">{e.icon}</span>
                <div className="at-event-body">
                  <strong>{i + 1}. {e.title}</strong>
                  <p>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── SECTION 4: RUKMINI & SUDAMA ── */}
        <div className="at-content">
          <h2 className="at-sh">The Teachings of Rukmiṇī Devī & Sudāmā Prabhu</h2>
          <p>
            Two of the most beloved pastimes connected to Akshaya Tṛtīyā both took place on this very day — and both teach us the same profound lesson.
          </p>

          <h3 className="at-sh3">The Tulābhāra — Rukmiṇī Devī's Tulasī Leaf</h3>
          <p>
            When Nārada Muni challenged Satyabhāmā to place gold equal to Kṛṣṇa's weight on a scale, she piled every piece of gold in Dvārakā — yet the scale would not balance. No amount of material wealth could outweigh the Lord. Then Rukmiṇī Devī arrived. She placed a single Tulasī leaf on the scale with pure love and prayer:
          </p>
          <div className="at-verse">
            <div className="at-verse-skt">
              vṛndāyai tulasī-devyai priyāyai keśavasya ca
            </div>
            <div className="at-verse-body">
              <p>"O Tulasī, most dear to Keśava, I offer this to you."</p>
            </div>
          </div>
          <p>
            Immediately the scale tipped. One Tulasī leaf, offered with bhakti, outweighed all the gold in Dvārakā. This is the teaching of Akshaya Tṛtīyā: it is not the material value of our offering that matters, but the love with which we offer it.
          </p>
        </div>

        {/* ── TULABHARA IMAGE ── */}
        <div className="at-image-container">
          <img
            src="/assets/blog/akshaya-tritiya/satyabhama_tulabhara.png"
            alt="Satyabhāmā weighing Lord Kṛṣṇa in the Tulābhāra pastime — Rukmiṇī Devī's single Tulasī leaf outweighs all the gold"
            className="at-image"
          />
          <span className="at-image-caption">
            Satyabhāmā's immense gold fails to balance the scale against Lord Kṛṣṇa, while Rukmiṇī Devī's single Tulasī leaf offered with pure bhakti tips it instantly — the eternal lesson of Akshaya Tṛtīyā.
          </span>
        </div>

        <div className="at-content">
          <h3 className="at-sh3">Sudāmā's Chipped Rice — The Power of Pure Love</h3>
          <p>
            On this same day, Kṛṣṇa's beloved childhood friend Sudāmā came to Dvārakā. Though a poor brāhmaṇa in material terms, he carried a small bundle of chipped rice (poha / avalakki) — the most valuable thing he possessed. Kṛṣṇa received it with such joy that He ate it again and again, and He was prepared to bestow upon Sudāmā unlimited prosperity.
          </p>
          <div className="at-bq">
            <p>
              "Kṛṣṇa does not see the value of the product. He sees how valuable that product is to you. Sudāmā's chipped rice was the most valuable thing he had — and that is what Kṛṣṇa accepted with love."
            </p>
            <cite>— His Grace Sampati Dāsa</cite>
          </div>
        </div>

        <Divider />

        {/* ── SECTION 5: HOW TO OBSERVE ── */}
        <div className="at-content">
          <h2 className="at-sh">How to Observe Akshaya Tṛtīyā</h2>
          <p>
            The scriptures prescribe several beautiful practices for this day. The guiding principle for all of them is the verse from Bhagavad Gītā (9.26):
          </p>
          <div className="at-verse">
            <div className="at-verse-skt">
              patraṁ puṣpaṁ phalaṁ toyaṁ<br />
              yo me bhaktyā prayacchati
            </div>
            <div className="at-verse-body">
              <p>"Whoever offers me a leaf, a flower, a fruit, or water with devotion, I accept that."</p>
              <cite>— Bhagavad Gītā 9.26</cite>
            </div>
          </div>
        </div>

        <ul className="at-practices-list">
          {practices.map((p, i) => (
            <li key={i}>
              <strong>{p.num}. {p.title}</strong>
              {p.desc}
            </li>
          ))}
        </ul>

        <Divider />

        {/* ── CLOSING QUOTE ── */}
        <div className="at-pull-quote">
          <p>
            "Today is a day for worshipping Lord Kṛṣṇa. Only God — another name of whom is Akshaya — can give you the truly unlimited, permanent result. Everything else will get over, will come to an end. But the loving relationship with Kṛṣṇa is eternal."
          </p>
          <cite>— His Grace Sampati Dāsa</cite>
        </div>

        {/* ── CLOSING PRAYER ── */}
        <div className="at-content">
          <h2 className="at-sh">A Prayer for Akshaya Tṛtīyā</h2>
          <p>
            On this most auspicious Akshaya Tṛtīyā, let us pray: <em>"My dear Lord Kṛṣṇa, please revive my original, unlimited, inexhaustible loving relationship with You. Let this day be the beginning of my return to Your eternal service. Accept this humble offering of Tulasī, chandan, and whatever little I have — not for its material value, but for the love behind it."</em>
          </p>
        </div>

        {/* ── MAHA MANTRA ── */}
        <div className="at-mantra-box">
          <p>
            Hare Kṛṣṇa Hare Kṛṣṇa Kṛṣṇa Kṛṣṇa Hare Hare<br />
            Hare Rāma Hare Rāma Rāma Rāma Hare Hare
          </p>
        </div>

        <div className="at-content">
          <p style={{ textAlign: "center", fontStyle: "italic", color: "#8b6914" }}>
            Adapted from a lecture by His Grace Sampati Dāsa<br />
            President, Hare Krishna Movement, Pune<br />
            <strong>Viśvaguru Śrīla Prabhupāda ki jai!</strong>
          </p>
        </div>

        <Divider />

        {/* ── AUTHOR BIO ── */}
        <div className="at-author-divider">About the Author</div>
        <div className="at-author-bio">
          <img 
            src="/assets/blog/akshaya-tritiya/sampatidasa.jpg" 
            alt="His Grace Sampati Dāsa" 
            className="at-author-photo"
          />
          <div className="at-author-details">
            <h3>His Grace Sampati Dāsa</h3>
            <p className="at-author-designation">
              Vice President, ISKCON Bangalore &nbsp;•&nbsp; President, Hare Krishna Movement, Pune
            </p>
            <p className="at-author-text">
              His Grace Sampati Dāsa has been a dedicated servant of Śrīla Prabhupāda's mission since joining ISKCON in 2008. Holding a Bachelor of Engineering in Electrical &amp; Electronics, he brings both intellectual rigour and heartfelt devotion to his service — a combination that reflects the ideal Vaiṣṇava: learned in the world, yet surrendered to the Lord. His primary sevā is in the FOLK (Friends of Lord Kṛṣṇa) department, where he works tirelessly to engage young people in Kṛṣṇa consciousness, inspired by Śrīla Prabhupāda's vision of a generation rooted in spiritual values.
            </p>
          </div>
        </div>

        <Divider />

        {/* ── SOCIAL MEDIA ── */}
        <section className="at-connect-section">
          <h2 className="at-connect-h">Connect with Us</h2>
          <p className="at-connect-desc">Follow Hare Kṛṣṇa Movement Chennai across all platforms for daily darśana and event updates.</p>
          <div className="at-social-grid">
            {socialLinks.map((s, i) => <SocialCard key={i} {...s} />)}
          </div>
        </section>

        <footer className="at-blog-footer">
          <p>Hare Kṛṣṇa Movement Chennai | Dakṣiṇa Dvārakā Dhām, Thiruvanmiyur</p>
          <p>Affiliated to ISKCON Bangalore | Non-Profit Charitable Organisation Regn. No. 828, Chennai, 2008</p>
        </footer>

      </article>
      <Footer />
    </main>
  )
}
