"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/FooterSection"
import "./styles.css"

const socialLinks = [
  { icon: "🌍", label: "Website", display: "hkmchennai.org", url: "https://hkmchennai.org/" },
  { icon: "🕊", label: "Twitter (X)", display: "@ChennaiHare", url: "https://x.com/ChennaiHare" },
  { icon: "📸", label: "Instagram", display: "@hkm_chennai", url: "https://www.instagram.com/hkm_chennai" },
  { icon: "💼", label: "LinkedIn", display: "Srila Prabhupada's ISKCON Thiruvanmiyur", url: "https://www.linkedin.com/company/hare-krishna-movement-chennai/" },
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
    title: "Beginning of the Mahabharata",
    desc: "On this auspicious tithi, Sage Veda Vyasa began dictating the Mahabharata — one of the greatest spiritual literatures ever composed — while Lord Ganesha accepted the role of divine scribe. That such a monumental work of dharmic wisdom was initiated on Akshaya Tritiya speaks to the inexhaustible knowledge this day bestows.",
  },
  {
    icon: "🌾",
    title: "The Sudama–Krishna Pastime",
    desc: "On this sacred day, the beloved pastime of Sudama and Lord Krishna unfolded. Sudama's humble offering of flattened rice (poha) was lovingly accepted by Krishna, who in return bestowed unlimited blessings upon him. This pastime reveals the eternal truth: even the smallest offering made with pure devotion becomes infinite in the eyes of the Lord.",
  },
  {
    icon: "💧",
    title: "Descent of the River Ganga",
    desc: "The holy river Ganga descended to Earth on Akshaya Tritiya, bringing her purifying, divine grace to humanity. Her descent was itself an act of inexhaustible mercy — a river whose waters have been liberating souls across countless generations.",
  },
  {
    icon: "⚔️",
    title: "Appearance of Lord Parashurama",
    desc: "Akshaya Tritiya is also celebrated as Parashurama Jayanti — the appearance day of Lord Parashurama, the sixth incarnation of Lord Vishnu. His advent signifies the protection of dharma and the vigorous destruction of adharma. The Lord appeared in the evening of this tithi, confirming Akshaya Tritiya as a day of divine descent.",
  },
  {
    icon: "🏺",
    title: "Blessing of the Akshaya Patra",
    desc: "During their years of exile in the forest, the Pandavas received the divine Akshaya Patra on this day — a mystical vessel that provided an inexhaustible supply of food to all who sought shelter with them. The very name \"Akshaya Patra\" (the vessel that never empties) is a living embodiment of the principle of this tithi: the Lord's mercy in sustaining His devotees knows no limit.",
  },
  {
    icon: "🙏",
    title: "Divine Grace to Draupadi",
    desc: "On Akshaya Tritiya, Draupadi received the Lord's unending protection and mercy. Her complete surrender to Lord Krishna in her moment of greatest need was answered with grace that never diminished. Her story embodies the very meaning of Akshaya — that divine protection, once sought with sincerity, is truly inexhaustible.",
  },
  {
    icon: "🪙",
    title: "Blessings of Kubera",
    desc: "On this day, Kubera — the treasurer of the demigods and guardian of celestial wealth — is believed to have been blessed with prosperity and abundance, making Akshaya Tritiya a traditionally auspicious time for invoking material and spiritual abundance alike. Yet as the scriptures remind us, even Kubera's wealth has its limit; only Krishna's grace is truly Akshaya.",
  },
  {
    icon: "🌟",
    title: "Lord Narayana's Assurance to Indra",
    desc: "When King Bali and the asuras wrested control of the heavenly planets, Lord Indra approached his spiritual master Brihaspati, who instructed him to worship Lord Narayana. Lord Narayana appeared to Indra on Akshaya Tritiya and gave him the assurance: \"Do not worry — I will come as Vamana Deva and restore what you have lost.\" This pastime teaches that what is lost through one's own misfortune can be restored fully by the unlimited grace of the Lord.",
  },
]

const practices = [
  {
    num: "1",
    title: "Offer Tulasi to Lord Krishna",
    desc: "This is the single most important practice of the day. Even those who cannot offer gold or flowers must not miss offering a Tulasi leaf to Krishna. If you have a Shaligrama, offering Tulasi on this day is especially significant. If Tulasi is not physically available, offer it sincerely from the heart — the Lord will accept it.",
  },
  {
    num: "2",
    title: "Apply Chandan — Begin the Chandan Yatra",
    desc: "From Akshaya Tritiya, Vaishnava temples worldwide begin the Chandan Yatra — a festival of adorning the Lord's form with fragrant sandalwood paste. Prepare a chandan paste at home by mixing sandalwood (chandan), Tulasi leaf or stem, camphor (karpura), saffron (kesar), and cardamom (elaichi). Apply this paste to the deity of Krishna to invoke the fragrance of the atma — humility, knowledge, and devotion.",
  },
  {
    num: "3",
    title: "Worship with Flowers",
    desc: "Worship Narayana with as many flowers as possible. Vaishakha is the season of abundant flowers; fresh, fragrant flowers (never plastic) are the appropriate offering. When we offer a fragrant flower, our prayer is: \"My Lord, let my original spiritual fragrance of the atma come forth.\"",
  },
  {
    num: "4",
    title: "Offer Poha (Chipped Rice)",
    desc: "Following Sudama Brahmana's example, offer chipped rice (poha) to the Lord with love and devotion on this day. What matters is not the richness of the offering but the sincerity behind it.",
  },
  {
    num: "5",
    title: "Charity — Especially of Scriptures",
    desc: "Dana (charity) on Akshaya Tritiya is highly recommended in the Puranas. The most pleasing charity to the Lord is the donation of scriptures — Bhagavad Gita, Srimad-Bhagavatam, and other Vaishnava literature. Other forms of charity — bhu-dana (land), suvarna-dana (gold), dhanya (grains) — are also meritorious when done with the right spirit.",
  },
  {
    num: "6",
    title: "Harinam Sankirtana — Chanting the Holy Names",
    desc: "Increase your rounds of the Hare Krishna maha-mantra today. Reading Bhagavad Gita and Srimad-Bhagavatam on Akshaya Tritiya yields unlimited benefit. Participate in kirtan, attend the temple programme, and spend as much time as possible in the service of the Lord.",
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
          <p className="at-hero-label">Vaishnava Festival — Vaishakha Shukla Paksha Tritiya</p>
          <h1 className="at-blog-title">
            Akshaya Tritiya:<br />
            The Inexhaustible Day of Eternal Blessings
          </h1>
          <div className="at-hero-line" />
          <p className="at-blog-subtitle">
            Whatever is done on this tithi in devotion to the Lord yields results that are unlimited, permanent, and inexhaustible.
          </p>
          <p className="at-blog-byline">
            By <strong>His Grace Sampati Dasa</strong>
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
            "On Akshaya Tritiya, the real Akshaya result is possible only when you surrender to Krishna.
            What Krishna gives is always eternal — it is permanent, sanatana."
          </p>
          <cite>— His Grace Sampati Dasa</cite>
        </div>

        {/* ── HERO IMAGE ── */}
        <div className="at-image-container">
          <img
            src="/assets/blog/akshaya-tritiya/sudama_krishna.png"
            alt="Lord Krishna and Sudama — the pastime of the humble offering of chipped rice on Akshaya Tritiya"
            className="at-image"
          />
          <span className="at-image-caption">
            Sudama Brahmana offering his humble chipped rice to Lord Krishna at Dvaraka — a pastime that took place on Akshaya Tritiya and reveals the infinite power of a pure-hearted offering.
          </span>
        </div>

        <Divider />

        {/* ── SECTION 1: WHAT IS AKSHAYA TRITIYA ── */}
        <div className="at-content">
          <h2 className="at-sh">What Is Akshaya Tritiya?</h2>
          <p>
            Akshaya Tritiya falls on the third tithi (Tritiya) of the bright fortnight (Shukla Paksha) of the month of Vaishakha in the lunar calendar. In every month there are two Tritiya tithis — one in Krishna Paksha (the waning fortnight) and one in Shukla Paksha (the waxing fortnight). Across a full year, that gives us 24 Tritiya tithis. Yet only one is called Akshaya Tritiya, and for very profound reasons.
          </p>
          <p>
            The word <em>"Akshaya"</em> is the opposite of <em>"Kshaya."</em>
          </p>
          <div className="at-bq">
            <p>
              <strong>Kshaya</strong> means: reduce, deteriorate, decrease, loss, temporary, limited.<br />
              <strong>Akshaya</strong> means: unlimited, permanent, inexhaustible, abundant, eternal.
            </p>
          </div>
          <p>
            On this one tithi, unlike all other Tritiya tithis of the year, whatever we do in devotion to the Lord yields results that are unlimited, permanent, and inexhaustible. That is why the scriptures and our acharyas urge us never to miss this day.
          </p>
        </div>

        <Divider />

        {/* ── SECTION 2: DEEPER UNDERSTANDING ── */}
        <div className="at-content">
          <h2 className="at-sh">What Akshaya Really Means — A Deeper Understanding</h2>
          <p>
            Here a thoughtful question arises: we live in a temporary world. Sri Krishna Himself says in Bhagavad Gita (8.15):
          </p>
          <div className="at-verse">
            <div className="at-verse-skt">
              duḥkhālayam aśāśvatam
            </div>
            <div className="at-verse-body">
              <p>"This world is a place of misery and is temporary."</p>
              <cite>— Bhagavad Gita 8.15</cite>
            </div>
          </div>
          <p>
            So how can anything in a temporary world give a permanent result? His Grace Sampati Dasa explains this with great clarity: material "permanence" has a ceiling — one day of Lord Brahma, which spans 1,000 Satya Yugas + 1,000 Treta Yugas + 1,000 Dvapara Yugas + 1,000 Kali Yugas. After that cycle, everything resets to zero.
          </p>
          <div className="at-verse">
            <div className="at-verse-skt">
              antavat tu phalaṁ teṣāṁ tad bhavaty alpa-medhasām
            </div>
            <div className="at-verse-body">
              <p>"The results obtained from material worship all have an end. Only those of lesser intelligence do not understand this."</p>
              <cite>— Bhagavad Gita 7.23</cite>
            </div>
          </div>
          <p>
            Even the devatAs — celestial demigods — cannot give us truly eternal results, because they themselves are not eternal. Their powers and positions eventually change. The real Akshaya — the truly inexhaustible blessing — can only be received from Lord Krishna, because Krishna alone is Akshaya. Only He can restore to us what is truly ours: our eternal, loving relationship with God.
          </p>
        </div>

        <Divider />

        {/* ── SECTION 3: NINE SACRED EVENTS ── */}
        <div className="at-content">
          <h2 className="at-sh">Nine Sacred Events That Occurred on Akshaya Tritiya</h2>
          <p>
            The holiness of Akshaya Tritiya is confirmed by the sheer number of transcendental events that took place on this one tithi across cosmic history. Each event carries its own teaching, and together they reveal why this day is so uniquely dear to the Lord.
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
          <h2 className="at-sh">The Teachings of Rukmini Devi & Sudama Prabhu</h2>
          <p>
            Two of the most beloved pastimes connected to Akshaya Tritiya both took place on this very day — and both teach us the same profound lesson.
          </p>

          <h3 className="at-sh3">The Tulabhara — Rukmini Devi's Tulasi Leaf</h3>
          <p>
            When Narada Muni challenged Satyabhama to place gold equal to Krishna's weight on a scale, she piled every piece of gold in Dvaraka — yet the scale would not balance. No amount of material wealth could outweigh the Lord. Then Rukmini Devi arrived. She placed a single Tulasi leaf on the scale with pure love and prayer:
          </p>
          <div className="at-verse">
            <div className="at-verse-skt">
              vṛndāyai tulasī-devyai priyāyai keśavasya ca
            </div>
            <div className="at-verse-body">
              <p>"O Tulasi, most dear to Keshava, I offer this to you."</p>
            </div>
          </div>
          <p>
            Immediately the scale tipped. One Tulasi leaf, offered with bhakti, outweighed all the gold in Dvaraka. This is the teaching of Akshaya Tritiya: it is not the material value of our offering that matters, but the love with which we offer it.
          </p>
        </div>

        {/* ── TULABHARA IMAGE ── */}
        <div className="at-image-container">
          <img
            src="/assets/blog/akshaya-tritiya/satyabhama_tulabhara.png"
            alt="Satyabhama weighing Lord Krishna in the Tulabhara pastime — Rukmini Devi's single Tulasi leaf outweighs all the gold"
            className="at-image"
          />
          <span className="at-image-caption">
            Satyabhama's immense gold fails to balance the scale against Lord Krishna, while Rukmini Devi's single Tulasi leaf offered with pure bhakti tips it instantly — the eternal lesson of Akshaya Tritiya.
          </span>
        </div>

        <div className="at-content">
          <h3 className="at-sh3">Sudama's Chipped Rice — The Power of Pure Love</h3>
          <p>
            On this same day, Krishna's beloved childhood friend Sudama came to Dvaraka. Though a poor brahmana in material terms, he carried a small bundle of chipped rice (poha / avalakki) — the most valuable thing he possessed. Krishna received it with such joy that He ate it again and again, and He was prepared to bestow upon Sudama unlimited prosperity.
          </p>
          <div className="at-bq">
            <p>
              "Krishna does not see the value of the product. He sees how valuable that product is to you. Sudama's chipped rice was the most valuable thing he had — and that is what Krishna accepted with love."
            </p>
            <cite>— His Grace Sampati Dasa</cite>
          </div>
        </div>

        <Divider />

        {/* ── SECTION 5: HOW TO OBSERVE ── */}
        <div className="at-content">
          <h2 className="at-sh">How to Observe Akshaya Tritiya</h2>
          <p>
            The scriptures prescribe several beautiful practices for this day. The guiding principle for all of them is the verse from Bhagavad Gita (9.26):
          </p>
          <div className="at-verse">
            <div className="at-verse-skt">
              patraṁ puṣpaṁ phalaṁ toyaṁ<br />
              yo me bhaktyā prayacchati
            </div>
            <div className="at-verse-body">
              <p>"Whoever offers me a leaf, a flower, a fruit, or water with devotion, I accept that."</p>
              <cite>— Bhagavad Gita 9.26</cite>
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
            "Today is a day for worshipping Lord Krishna. Only God — another name of whom is Akshaya — can give you the truly unlimited, permanent result. Everything else will get over, will come to an end. But the loving relationship with Krishna is eternal."
          </p>
          <cite>— His Grace Sampati Dasa</cite>
        </div>

        {/* ── CLOSING PRAYER ── */}
        <div className="at-content">
          <h2 className="at-sh">A Prayer for Akshaya Tritiya</h2>
          <p>
            On this most auspicious Akshaya Tritiya, let us pray: <em>"My dear Lord Krishna, please revive my original, unlimited, inexhaustible loving relationship with You. Let this day be the beginning of my return to Your eternal service. Accept this humble offering of Tulasi, chandan, and whatever little I have — not for its material value, but for the love behind it."</em>
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
            Adapted from a lecture by His Grace Sampati Dasa<br />
            President, Hare Krishna Movement, Pune<br />
            <strong>Vishvaguru Srila Prabhupada ki jai!</strong>
          </p>
        </div>

        <Divider />

        {/* ── AUTHOR BIO ── */}
        <div className="at-author-divider">About the Author</div>
        <div className="at-author-bio">
          <img
            src="/assets/blog/akshaya-tritiya/sampatidasa.jpg"
            alt="His Grace Sampati Dasa"
            className="at-author-photo"
          />
          <div className="at-author-details">
            <h3>His Grace Sampati Dasa</h3>
            <p className="at-author-designation">
              Vice President, ISKCON Bangalore &nbsp;•&nbsp; President, Hare Krishna Movement, Pune
            </p>
            <p className="at-author-text">
              His Grace Sampati Dasa has been a dedicated servant of Srila Prabhupada's mission since joining ISKCON in 2008. Holding a Bachelor of Engineering in Electrical &amp; Electronics, he brings both intellectual rigour and heartfelt devotion to his service — a combination that reflects the ideal Vaishnava: learned in the world, yet surrendered to the Lord. His primary seva is in the FOLK (Friends of Lord Krishna) department, where he works tirelessly to engage young people in Krishna consciousness, inspired by Srila Prabhupada's vision of a generation rooted in spiritual values.
            </p>
          </div>
        </div>

        <Divider />

        {/* ── SOCIAL MEDIA ── */}
        <section className="at-connect-section">
          <h2 className="at-connect-h">Connect with Us</h2>
          <p className="at-connect-desc">Follow Hare Krishna Movement Chennai across all platforms for daily darshana and event updates.</p>
          <div className="at-social-grid">
            {socialLinks.map((s, i) => <SocialCard key={i} {...s} />)}
          </div>
        </section>

        <footer className="at-blog-footer">
          <p>Hare Krishna Movement Chennai | Dakshina Dvaraka Dham, Thiruvanmiyur</p>
          <p>Affiliated to ISKCON Bangalore | Non-Profit Charitable Organisation Regn. No. 828, Chennai, 2008</p>
        </footer>

      </article>
      <Footer />
    </main>
  )
}
