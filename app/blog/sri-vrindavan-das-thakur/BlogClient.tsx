"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import "./styles.css";

const TEMPLE_FULL =
  "ISKCON Thiruvanmiyur (Hare Krishna Movement Chennai — Affiliated to ISKCON Bangalore Regn. S-49/78-79)";

const socialLinks = [
  { icon: "🌍", label: "Website",       display: "hkmchennai.org",                   href: "https://hkmchennai.org/" },
  { icon: "📸", label: "Instagram",     display: "@hkm_chennai",                     href: "https://www.instagram.com/hkm_chennai" },
  { icon: "👍", label: "Facebook",      display: "Hare Krishna Movement Chennai",    href: "https://www.facebook.com/hkmcworld/" },
  { icon: "🐦", label: "Twitter / X",   display: "@ChennaiHare",                     href: "https://x.com/ChennaiHare" },
  { icon: "💼", label: "LinkedIn",      display: "Srila Prabhupada's ISKCON Thiruvanmiyur",                      href: "https://www.linkedin.com/company/hare-krishna-movement-chennai?originalSubdomain=in" },
  { icon: "📱", label: "WhatsApp",      display: "Join our WhatsApp Channel",        href: "https://www.whatsapp.com/channel/0029Vaa2fjKEVccFHx5YDt1O" },
  { icon: "🙏", label: "Support",       display: "Dakshina Dwaraka Dham Campaign",   href: "https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign" },
  { icon: "📍", label: "Google Maps",   display: "Click here for directions",        href: "https://maps.app.goo.gl/o2m98vJQHQjUHHDy6" },
];

const faqs = [
  {
    q: "Who is Sri Vrndavana Dasa Thakura?",
    a: "Sri Vrndavana Dasa Thakura is the author of the Chaitanya Bhagavata, the primary scripture describing the pastimes of Sri Chaitanya Mahaprabhu. He was the initiated disciple of Sri Nityananda Prabhu and the son of Narayani Devi. Srila Prabhupada confirms in CC Adi 11.55 Purport that he was a combined incarnation of Vedavyasa and the cowherd boy Kusumapida — and is therefore the Vyasa of the Chaitanya-lila.",
  },
  {
    q: "What is the Chaitanya Bhagavata?",
    a: "The Chaitanya Bhagavata — originally called Sri Chaitanya-mangala — is the scripture compiled by Sri Vrndavana Dasa Thakura narrating the pastimes of Lord Chaitanya, divided into Adi-khanda, Madhya-khanda, and Antya-khanda. It was written on the direct order of Sri Nityananda Prabhu. Krsnadasa Kaviraja Gosvami in CC Adi 8.33–44 describes it as a work through which Sri Chaitanya Mahaprabhu has personally spoken.",
  },
  {
    q: "Why is Sri Vrndavana Dasa Thakura called the Vyasa of the Chaitanya-lila?",
    a: "This title appears in CC Adi 11.55, Translation and is elaborated in the Purport by Srila Prabhupada, who confirms his identity as an incarnation of Vedavyasa based on the Gaura-ganoddesa-dipika. Just as Vyasadeva compiled and preserved Vedic scripture, Sri Vrndavana Dasa Thakura compiled and preserved the pastimes of Lord Chaitanya for all future generations.",
  },
  {
    q: "Who was Narayani Devi, his mother?",
    a: "Narayani Devi was the daughter of Srivasa Thakura's brother. Srila Prabhupada describes her identity in his purport to CC Adi 8.41, citing the Gaura-ganoddesa-dipika: she was formerly Kilimbika, the younger sister of Ambika who nursed Lord Krsna as a child. In the Chaitanya-lila, she ate the prasadam remnants of Lord Chaitanya directly, becoming completely absorbed in love of God.",
  },
  {
    q: "What is the significance of his appearance and disappearance days?",
    a: "These are auspicious occasions in the Gaudiya Vaisnava calendar when the mercy of a great acarya is especially accessible to sincere souls. Devotees honour Sri Vrndavana Dasa Thakura by reading from the Chaitanya Bhagavata, hearing his glories, performing sankirtana, and praying for his blessings to deepen their devotional service.",
  },
];

export default function BlogClient() {
  return (
    <div className="bg-[#FFF9F0] min-h-screen selection:bg-[#c9973a] selection:text-white pb-20">
      <Navbar />

      <main className="gp-blog-wrap pt-28">
        {/* Breadcrumb */}
        <div className="mp-breadcrumb mb-6">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><span className="mx-2">/</span></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><span className="mx-2">/</span></li>
            <li aria-current="page">Sri Vrndavana Dasa Thakura</li>
          </ol>
        </div>

        {/* Header */}
        <header className="gp-blog-header">
          <p className="gp-hero-label">Gaudiya Vaisnava — Vyasa of the Chaitanya-lila</p>
          <h1 className="gp-blog-title">
            Sri Vrndavana Dasa Thakura<br />
            <span className="text-[clamp(1.5rem,3vw,2.5rem)] text-gray-700 font-normal">The Vyasa of the Chaitanya-lila and Refuge of the Fallen</span>
          </h1>
          <p className="gp-blog-subtitle mt-4 mb-6">
            How the author of Chaitanya Bhagavata became the eternal shelter for souls seeking the mercy of Lord Chaitanya. Compiled from the lectures and purports of His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada.
          </p>
          <div className="gp-hero-line"></div>
          <p className="gp-blog-byline">
            By <strong>Srila Prabhupada's ISKCON Thiruvanmiyur Editorial Team</strong> • May 3, 2026 • 10 min read
          </p>
          <div className="mp-hero-meta">
            <span>Appearance Day Special</span>
            <span>•</span>
            <span>Vaishnava Acharya</span>
          </div>
        </header>

        {/* Feature Image */}
        <div className="gp-image-container">
          <Image
            src="/assets/blog/sri-vrindavan-das-thakur/Sri_Vrindavan_Das_Thakur.png"
            alt="Sri Vrndavana Dasa Thakura"
            width={800}
            height={450}
            className="gp-image"
            priority
          />
        </div>

        <div className="gp-content">

          {/* Intro */}
          <p>
            If you have ever opened the Chaitanya Bhagavata — the sacred scripture that narrates the pastimes of Sri Chaitanya Mahaprabhu in Navadvipa — you have already received the mercy of Sri Vrndavana Dasa Thakura. Not merely as a reader, but as a soul touched by a Vaisnava so elevated that His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada himself described him as the Vyasa of the Chaitanya-lila — the one who performed for Lord Chaitanya's pastimes the same incomparable service that Vyasadeva performed for the Vedic scriptures.
          </p>
          <p>
            Sri Vrndavana Dasa Thakura is not simply a historical figure. He is a living mercy-shelter for all who approach Lord Chaitanya. He was the direct initiated disciple of Sri Nityananda Prabhu, and through his monumental work, the Chaitanya Bhagavata, he preserved the divine pastimes of Lord Chaitanya for the entire world. On his appearance and disappearance days, Vaisnavas everywhere remember his incomparable contribution to Gaudiya Vaisnavism with deep gratitude and reverence.
          </p>

          <div className="gp-divider"></div>

          {/* Section 1 */}
          <h2 className="gp-sh" id="who-is-vrindavan-das-thakur">1. Who is Sri Vrndavana Dasa Thakura?</h2>
          <p>
            Sri Vrndavana Dasa Thakura appeared in the village of Mamgachi, also known as Modadrumadvipa, one of the nine islands of Navadvipa Dhama in Bengal. He was born to his mother Narayani Devi, whose position in the Chaitanya-lila is profoundly exalted. Narayani Devi was the daughter of Srivasa Thakura's brother. As a tiny child, she received the direct personal mercy of Lord Sri Chaitanya Mahaprabhu himself.
          </p>
          <p>
            Srila Prabhupada describes this in his purport to CC Adi 8.41, citing the Gaura-ganoddesa-dipika of Kavi-karnapura. That scripture reveals that Narayani was in a previous life Kilimbika — the younger sister of Ambika, the woman who nursed Lord Krsna as a child. In the Chaitanya-lila, the same Kilimbika appeared as Narayani and eternally ate the remnants of Lord Chaitanya's prasadam, thereby becoming completely filled with love of God (prema).
          </p>
          <p>
            Sri Vrndavana Dasa Thakura is therefore the son of a mother whose eternal identity is tied to the nursing pastimes of Lord Krsna himself. His very birth was steeped in the mercy of Lord Chaitanya. Srila Prabhupada confirms that he was Lord Nityananda Prabhu's most beloved devotee — the disciple whom Nityananda Prabhu held as most dear among all those he initiated. He received initiation from Sri Nityananda Prabhu and it was on Nityananda Prabhu's direct order that he composed the Chaitanya Bhagavata.
          </p>

          <div className="gp-image-container my-8">
            <Image
              src="/assets/blog/sri-vrindavan-das-thakur/Gaura_Nitai_Deities_Sripat.png"
              alt="The worshippable Gaura-Nitai Deities of Sri Vrndavana Dasa Thakura at Sripata"
              width={800}
              height={450}
              className="gp-image"
            />
            <span className="gp-image-caption">The worshippable Sri Sri Gaura-Nitai Deities installed and served by Sri Vrndavana Dasa Thakura — still present and worshipped daily at Sripata, Mamgachi</span>
          </div>

          <div className="gp-divider"></div>

          {/* Section 2 */}
          <h2 className="gp-sh" id="eternal-spiritual-identity">2. His Eternal Spiritual Identity</h2>
          <p>
            One of the most extraordinary aspects of Sri Vrndavana Dasa Thakura's position, confirmed by Srila Prabhupada in the purport to CC Adi 11.55, is the revelation of his eternal spiritual identity. Srila Prabhupada writes that Srila Vrndavana Dasa Thakura was an incarnation of Vedavyasa and also a friendly cowherd boy named Kusumapida in Krsna-lila — a combined incarnation of Vedavyasa and the cowherd boy Kusumapida. This is based on the Gaura-ganoddesa-dipika (verse 109):
          </p>

          <div className="gp-verse">
            <div className="gp-verse-body">
              <p className="italic font-serif text-lg">
                vedavyāso ya evāsīd dāso vṛndāvano'dhunā<br />
                sakhā yaḥ kusumāpīdaḥ kāryatas taṁ samāviśat
              </p>
              <cite>— Gaura-gaṇoddeśa-dīpikā 109, cited in CC Ādi 11.55, Purport</cite>
            </div>
          </div>

          <p>
            The import of this verse is immense. Vedavyasa is the compiler of the entire body of Vedic scripture. He appeared again as Sri Vrndavana Dasa Thakura to perform the equivalent service for the Chaitanya-lila: to compile and preserve the pastimes of Lord Chaitanya in the form of the Chaitanya Bhagavata. Srila Prabhupada therefore confirms with full authority that Sri Vrndavana Dasa Thakura is not merely a great biographer, but the very incarnation of the literary potency of Vyasadeva, appearing to serve Lord Chaitanya.
          </p>

          <div className="gp-bq">
            <p>
              "Srila Vyasadeva described the pastimes of Krsna in Srimad-Bhagavatam. The Vyasa of the pastimes of Lord Chaitanya Mahaprabhu was Vrndavana dasa."
            </p>
            <cite>— His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada, CC Adi 11.55, Translation</cite>
          </div>

          <p>
            In the purport to CC Adi 11.55, Srila Prabhupada states: <em>"Srila Vrndavana dasa Thakura was an incarnation of Vedavyasa and also a friendly cowherd boy named Kusumapida in krsna-lila. In other words, the author of Sri Caitanya-bhagavata, Srila Vrndavana dasa Thakura, the son of Srivasa Thakura's niece Narayani, was a combined incarnation of Vedavyasa and the cowherd boy Kusumapida."</em>
          </p>

          <div className="gp-divider"></div>

          {/* Section 3 */}
          <h2 className="gp-sh" id="chaitanya-bhagavata">3. The Chaitanya Bhagavata — Scripture of the Chaitanya-lila</h2>
          <p>
            The Chaitanya Bhagavata was originally entitled Sri Chaitanya-mangala. When Srila Locana Dasa Thakura later wrote another book by the same name, Sri Vrndavana Dasa Thakura changed the name of his own book to Sri Chaitanya Bhagavata. This history is recorded by Srila Prabhupada in his purport to CC Adi 8.33.
          </p>
          <p>
            The book is divided into three sections: the Adi-khanda (early pastimes), the Madhya-khanda (middle pastimes), and the Antya-khanda (concluding pastimes). It is the first major biography of Lord Chaitanya and the primary source for his pastimes in Navadvipa — including his years as a scholar and teacher, his spiritual awakening at Gaya, his return to Navadvipa, and the inauguration of the sankirtana movement. It was composed on the direct order of Sri Nityananda Prabhu.
          </p>
          <p>
            Srila Krsnadasa Kaviraja Gosvami pays the highest tribute to Sri Vrndavana Dasa Thakura across CC Adi 8.33–44, saying: <em>"O fools, just read Sri Caitanya-mangala! By reading this book you can understand all the glories of Sri Caitanya Mahaprabhu. I offer millions of obeisances unto the lotus feet of Vrndavana Dasa Thakura. No one else could write such a wonderful book for the deliverance of all fallen souls."</em>
          </p>

          <div className="gp-bq">
            <p>
              "The life of Sri Caitanya Mahaprabhu is very elaborately described in the Chaitanya-bhagavata, and Krsnadasa Kaviraja Gosvami has already informed us that in his Sri Chaitanya-caritamrta he has described whatever Vrndavana Dasa Thakura has not mentioned. This acceptance of Sri Chaitanya-bhagavata by Krsnadasa Kaviraja Gosvami indicates his acceptance of the disciplic succession. A writer of transcendental literature never tries to surpass the previous acaryas."
            </p>
            <cite>— His Divine Grace Vishwa Guru Srila Prabhupada, CC Adi 8.33, Purport</cite>
          </div>

          <p>
            The secret behind this sublime quality of the Chaitanya Bhagavata is explained by Srila Prabhupada: when a devotee writes about the pastimes of the Lord in service, the Lord from within gives him so much intelligence that he writes in near proximity to the Lord. Krsnadasa Kaviraja Gosvami confirms that what Vrndavana Dasa Thakura wrote was actually spoken by Lord Chaitanya himself, and that Vrndavana Dasa simply repeated it.
          </p>
          <p>
            Srila Prabhupada describes the Chaitanya Bhagavata as a "shower of nectar," and confirms that hearing it annihilates all misfortune for the listener. The power of the text is so extraordinary, he explains, that even those who are considered great atheists can immediately become great devotees simply by hearing it.
          </p>

          <div className="gp-divider"></div>

          {/* Section 4 */}
          <h2 className="gp-sh" id="spiritual-lineage">4. His Extraordinary Spiritual Lineage</h2>
          <p>
            Sri Vrndavana Dasa Thakura was the initiated disciple of Sri Nityananda Prabhu, as confirmed in CC Adi 11.54–55. Nityananda Prabhu is accepted in the Gaudiya sampradaya as the incarnation of Lord Balarama, Krsna's elder brother and eternal companion. In the lila of Lord Chaitanya, Nityananda Prabhu embodies the most unconditional, all-forgiving mercy.
          </p>
          <p>
            Sri Nityananda Prabhu is famous for giving his mercy freely even to the most fallen souls. The celebrated pastime of his encounter with Jagai and Madhai — two terribly sinful brothers who physically attacked him and drew blood from his forehead — illustrates this perfectly. Rather than becoming angry, Nityananda Prabhu embraced them with compassion and brought them to the shelter of Lord Chaitanya. This pastime is narrated in vivid detail in the Chaitanya Bhagavata itself, in the Madhya-khanda.
          </p>
          <p>
            Sri Vrndavana Dasa Thakura was deeply absorbed in the consciousness of his spiritual master, and therefore his entire literary output carries this same quality of unlimited mercy. The Chaitanya Bhagavata is particularly celebrated for its ecstatic, extensive descriptions of the pastimes of Nityananda Prabhu — a direct reflection of the author's devotion and the spiritual flavour he had received through disciplic connection.
          </p>
          <p>
            The chain of mercy in Sri Vrndavana Dasa Thakura's life runs without interruption: from Lord Chaitanya directly to Narayani Devi (who ate the Lord's prasadam as a child), through Sri Nityananda Prabhu (who ordered him to write), and through Sri Vrndavana Dasa Thakura himself to all who read his text.
          </p>

          <div className="gp-divider"></div>

          {/* Section 5 */}
          <h2 className="gp-sh" id="mercy">5. The Mercy of Sri Vrndavana Dasa Thakura</h2>
          <p>
            One of the most remarkable qualities of the Chaitanya Bhagavata is its tone of absolute surrender and devotional love. Sri Vrndavana Dasa Thakura does not write as a scholar. He writes as a devotee overwhelmed by love for his Lord, and every line breathes the atmosphere of Navadvipa Dhama and the sankirtana movement of Sri Chaitanya Mahaprabhu.
          </p>
          <p>
            Because he was the disciple of the all-merciful Nityananda Prabhu, Sri Vrndavana Dasa Thakura's mercy flows freely to anyone who sincerely calls upon him. Just as Nityananda Prabhu gave himself to Jagai and Madhai — the most fallen of souls — Sri Vrndavana Dasa Thakura through his writings gives himself freely to anyone who approaches with humility. His mercy is not reserved for scholars or advanced practitioners.
          </p>
          <p>
            In Gaudiya Vaisnava tradition, the appearance and disappearance days of great acaryas are auspicious occasions when their mercy becomes especially accessible. On such days, devotees recite from the acarya's works, hear his glories, and pray for his blessings.
          </p>

          <div className="gp-divider"></div>

          {/* Section 6 */}
          <h2 className="gp-sh" id="what-prabhupada-says">6. What Srila Prabhupada Says About Sri Vrndavana Dasa Thakura</h2>
          <p>
            His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada quoted and referenced Sri Vrndavana Dasa Thakura extensively throughout his purports, lectures, and conversations. The reverence with which Srila Prabhupada spoke of Vrndavana Dasa Thakura reveals the depth of this acarya's position in the Gaudiya parampara.
          </p>

          <div className="gp-bq">
            <p>
              "Actually the authorized compiler of the pastimes of Sri Chaitanya Mahaprabhu is Srila Vrndavana Dasa, the incarnation of Vyasadeva. Only upon his orders am I trying to chew the remnants of food that he has left."
            </p>
            <cite>— His Divine Grace Vishwa Guru Srila Prabhupada, CC Madhya 1.13, Translation</cite>
          </div>

          <p>
            In a recorded conversation, Srila Prabhupada also stated: <em>"Just like our Vrndavana Dasa Thakura. He is described as incarnation of Vyasadeva because Vyasadeva wrote Bhagavatam and he wrote Caitanya-bhagavata."</em> This is entirely consistent with the purport statements in CC Adi 11.55 confirming his Vyasa-identity.
          </p>
          <p>
            Srila Bhaktisiddhanta Sarasvati Thakura — Srila Prabhupada's own spiritual master — notes in his commentary that all pure devotees who follow in Sri Vrndavana Dasa Thakura's footsteps by faithfully describing the Lord's activities are to be considered like Vyasa themselves. The title of Vyasa is not a biographical accident unique to one soul — it is a living standard set by Sri Vrndavana Dasa Thakura for all who serve Lord Chaitanya through the written word.
          </p>

          <div className="gp-divider"></div>

          {/* Section 7 */}
          <h2 className="gp-sh" id="how-to-honour">7. How to Honour Sri Vrndavana Dasa Thakura</h2>
          <p>
            The most direct way to receive the mercy of Sri Vrndavana Dasa Thakura is to read the Chaitanya Bhagavata — approaching it as sacred scripture, not as historical or academic literature. Srila Prabhupada himself was a passionate reader of Gaudiya Vaisnava literature from a very young age, and the writings of the acaryas in the parampara formed the spiritual foundation of his own mission.
          </p>
          <p>
            A second way to honour him is to deepen one's connection with Sri Nityananda Prabhu, his spiritual master. Chanting the Panca-tattva mantra — <em>Sri Krsna Chaitanya Prabhu Nityananda Sri Advaita Gadadhara Srivasadi-gaura-bhakta-vrnda</em> — with particular attention and love for the name of Nityananda Prabhu is a means of entering the same spiritual current that nourished Sri Vrndavana Dasa Thakura throughout his life.
          </p>
          <p>
            Third, one can honour him through service to the Vaisnava community — by distributing prasadam, by sharing knowledge of Lord Chaitanya's pastimes with others, and by engaging in sankirtana. Sri Vrndavana Dasa Thakura spent his entire life in service to Lord Chaitanya's mission: to distribute love of God freely and without discrimination. Participating in that same mission, however modestly, is the deepest homage we can offer.
          </p>

          <div className="gp-divider"></div>

          {/* Section 8 — Sacred Places */}
          <h2 className="gp-sh" id="sacred-places">8. Sacred Places of Srila Vrndavana Dasa Thakura (Lila-Sthali)</h2>
          <p>
            The external life of Srila Vrndavana Dasa Thakura is enshrined in three sacred places, each of which represents a distinct chapter of his divine mission. For any devotee wishing to deepen their connection with this great acarya, visiting these places is an act of the highest devotional fortune.
          </p>

          <h3 className="text-xl font-bold text-[#701a1a] font-serif mt-8 mb-3">1. Mamgachi, Modadrumadvipa, Navadvipa — Birthplace (Janma-Sthana)</h3>

          <div className="gp-image-container my-6">
            <Image
              src="/assets/blog/sri-vrindavan-das-thakur/Birthplace_of_Sri_Vrindavan_Das_Thakur.png"
              alt="Birthplace of Sri Vrndavana Dasa Thakura at Mamgachi, Modadrumadvipa"
              width={800}
              height={450}
              className="gp-image"
            />
            <span className="gp-image-caption">The sacred birthplace of Sri Vrndavana Dasa Thakura at Mamgachi, Modadrumadvipa, Navadvipa Dhama</span>
          </div>

          <p>
            Located in the village of Mamgachi on the sacred island of Modadrumadvipa — one of the nine islands of Navadvipa-dhama — this is the hallowed ground where Srila Vrndavana Dasa Thakura took his birth on the Krsna-dvadasi tithi of the month of Vaisakha, around 1507 AD. The island of Modadrumadvipa itself carries immense spiritual antiquity: in a previous age, Lord Ramacandra came here with brother Laksmana and Sita Devi during His forest exile and resided here for some days, narrating the glories of Navadvipa-dhama.
          </p>
          <p>
            The property here was the ancestral home of Sriman Malini Devi, the wife of Srivasa Thakura. After marriage, Srimati Narayani Devi — the Thakura's mother — came to reside here in Malini Devi's ancestral home. It was here that Srila Vrndavana Dasa Thakura was born, grew up until the age of ten, and began his early studies, nourished and raised, as Srila Bhaktisiddhanta Sarasvati Thakura writes, "just like a valuable gem."
          </p>
          <p>
            Today this ancestral property stands as the recognised Sripata of Srila Vrndavana Dasa Thakura. The original worshippable Sri Sri Gaura-Nitai Deities installed and served by the Thakura himself are still present here and diligently worshipped to this day. Srila Bhaktisiddhanta Sarasvati Thakura also established the Sri Modadruma Gaudiya Matha at this sacred site.
          </p>

          <h3 className="text-xl font-bold text-[#701a1a] font-serif mt-8 mb-3">2. Denur, Bardhaman — Where the Chaitanya Bhagavata Was Composed (Sripata)</h3>

          <div className="gp-image-container my-6">
            <Image
              src="/assets/blog/sri-vrindavan-das-thakur/Composition_Site_Denur.png"
              alt="Srila Vrndavana Dasa Thakura's composition site of Sri Chaitanya Bhagavata at Denur"
              width={800}
              height={450}
              className="gp-image"
            />
            <span className="gp-image-caption">The sacred spot at Denur, Bardhaman, where Srila Vrndavana Dasa Thakura composed the immortal Sri Chaitanya Bhagavata on the direct order of Sri Nityananda Prabhu</span>
          </div>

          <p>
            Denur, situated in the Monteswar Block of the Bardhaman District of West Bengal, is the most spiritually significant place in the Thakura's manifest life — for it was here, on the direct order of Sri Nityananda Prabhu, that Srila Vrndavana Dasa Thakura settled and composed the immortal Sri Chaitanya Bhagavata.
          </p>
          <p>
            After taking initiation at age sixteen and travelling with Nityananda Prabhu, the Lord ordered him to remain at Denur through a beautiful pastime. When Sri Nityananda accepted lunch at the home of a devoted landlord named Ramhari Chakraborty, He called for haritaki — a digestive fruit — after the meal. Srila Vrndavana Dasa immediately produced it, having kept it folded in his cloth since morning, knowing the Lord would require it. Nityananda Prabhu, in His characteristic way of blessing through apparent reproach, chastised him for accumulating things rather than fully depending on Krsna's mercy — and ordered him to remain at Denur and perform his bhajana there. Though the Thakura wept at the prospect of separation from his beloved Guru, he accepted the order as his very life and soul.
          </p>
          <p>
            The haritaki fruit which Sri Nityananda chewed and cast to the ground that day took root and grew into a beautiful tree that stands at Denur to this day. Beside it, the lotus footprints of Sri Nityananda Prabhu are preserved. The original handwritten manuscript of the Sri Caitanya Bhagavata is carefully preserved at Denur to this day.
          </p>

          <h3 className="text-xl font-bold text-[#701a1a] font-serif mt-8 mb-3">3. Sri Vrndavana Dhama — Samadhi in the 64 Samadhis Area</h3>

          <div className="gp-image-container my-6">
            <Image
              src="/assets/blog/sri-vrindavan-das-thakur/64_Samadhis_Vrindavana.jpeg"
              alt="64 Samadhis Area of Sri Vrndavana Dhama"
              width={800}
              height={450}
              className="gp-image"
            />
            <span className="gp-image-caption">The celebrated 64 Samadhis Area of Sri Vrndavana Dhama, where the samadhi of Srila Vrndavana Dasa Thakura rests alongside the intimate associates of Lord Chaitanya Mahaprabhu</span>
          </div>

          <p>
            The samadhi of Srila Vrndavana Dasa Thakura rests in the celebrated 64 Samadhis Area of Sri Vrndavana Dhama, alongside the samadhis of many of the intimate associates of Lord Caitanya Mahaprabhu. This is entirely fitting: the acaryas proclaim that Srila Vrndavana Dasa Thakura is an incarnation of Vedavyasa — and Vedavyasa, in Krsna's pastimes, resided and performed his service eternally in Vrndavana dhama. The great Vyasa of Caitanya-lila thus rests in the same eternal abode as the Vyasa of Krsna-lila.
          </p>
          <p>
            Visiting the samadhi of a pure Vaisnava is a deeply auspicious act. The acaryas explain that a nitya-siddha devotee is truly present at his samadhi and is able to extend his blessings to those who approach with sincerity and humility. To come before the samadhi of Srila Vrndavana Dasa Thakura, chant his glories, and bow down at his lotus feet is to place oneself in the direct flow of the mercy that descended from Lord Caitanya through Sri Nityananda Prabhu to this Thakura — and through him to all of us.
          </p>

          <div className="gp-divider"></div>

          {/* Section 9 — Conclusion */}
          <h2 className="gp-sh" id="conclusion">9. Conclusion</h2>
          <p>
            Sri Vrndavana Dasa Thakura stands as one of the most indispensable figures in the history of Gaudiya Vaisnavism. His identity as a combined incarnation of Vedavyasa and Kusumapida, his position as the initiated disciple of Sri Nityananda Prabhu, his birth from the womb of the blessed Narayani Devi, and his composition of the Chaitanya Bhagavata on the Lord's own order — all of these place him at the very heart of the transmission of Lord Chaitanya's pastimes to the world.
          </p>
          <p>
            Without the Chaitanya Bhagavata, an irreplaceable portion of Lord Chaitanya's pastimes would have been lost to time. Krsnadasa Kaviraja Gosvami himself describes his Chaitanya Caritamrta as merely chewing the remnants left by Sri Vrndavana Dasa Thakura. Srila Prabhupada confirms this fully when he writes that Vrndavana Dasa Thakura is the authorized writer of the pastimes of Sri Chaitanya Mahaprabhu — as good as Srila Vyasadeva himself.
          </p>
          <p>
            On the auspicious occasion of his appearance or disappearance, let us approach Sri Vrndavana Dasa Thakura with humility and gratitude. Let us open the Chaitanya Bhagavata, read his words, and allow his mercy — saturated with the love of Lord Chaitanya and Sri Nityananda Prabhu — to enter our hearts.
          </p>

          <p className="text-center font-bold text-xl mt-6 text-[#b8600a] font-serif">
            Sri Vrndavana Dasa Thakura ki jaya!
          </p>

          <div className="gp-divider"></div>

          {/* FAQ */}
          <h2 className="gp-sh" id="faq">10. Frequently Asked Questions</h2>
          <div className="gp-faq-grid mb-12">
            {faqs.map((faq, index) => (
              <div key={index} className="gp-faq-item">
                <h3 className="gp-faq-q">{faq.q}</h3>
                <p className="gp-faq-a">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="gp-divider"></div>

          {/* Connect */}
          <div className="gp-connect-section">
            <h2 className="gp-connect-h">🌿 Connect With Us</h2>
            <p className="gp-connect-desc">
              We would love to welcome you to our growing community of seekers. Reach us through any of the platforms below or visit us in person.
            </p>
            <div className="gp-social-grid mb-8">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="gp-social-card">
                  <span className="gp-s-icon">{link.icon}</span>
                  <span className="gp-s-text">
                    <span className="gp-s-label">{link.label}</span>
                    <span className="gp-s-url">{link.display}</span>
                  </span>
                  <span className="gp-s-arrow">→</span>
                </a>
              ))}
            </div>
            <div className="text-center text-[#7a5c3a] italic mt-6">
              <p>{TEMPLE_FULL}</p>
              <a href="https://maps.app.goo.gl/o2m98vJQHQjUHHDy6" target="_blank" rel="noopener noreferrer" className="text-[#c9973a] font-bold not-italic hover:underline mt-2 inline-block">
                🗺️ Open in Google Maps →
              </a>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
