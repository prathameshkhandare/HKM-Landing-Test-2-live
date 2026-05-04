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
  { icon: "💼", label: "LinkedIn",      display: "HKM Chennai",                      href: "https://www.linkedin.com/company/hare-krishna-movement-chennai?originalSubdomain=in" },
  { icon: "📱", label: "WhatsApp",      display: "Join our WhatsApp Channel",        href: "https://www.whatsapp.com/channel/0029Vaa2fjKEVccFHx5YDt1O" },
  { icon: "🙏", label: "Support",       display: "Dakshina Dwaraka Dham Campaign",   href: "https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign" },
  { icon: "📍", label: "Google Maps",   display: "Click here for directions",        href: "https://maps.app.goo.gl/o2m98vJQHQjUHHDy6" },
];

const faqs = [
  {
    q: "Who is Śrī Vṛndāvana Dāsa Ṭhākura?",
    a: "Śrī Vṛndāvana Dāsa Ṭhākura is the author of the Chaitanya Bhāgavata, the primary scripture describing the pastimes of Śrī Chaitanya Mahāprabhu. He was the initiated disciple of Śrī Nityānanda Prabhu and the son of Nārayaṇī Devī. Śrīla Prabhupāda confirms in CC Ādi 11.55 Purport that he was a combined incarnation of Vedavyāsa and the cowherd boy Kusuṃāpīda — and is therefore the Vyāsa of the Chaitanya-līlā.",
  },
  {
    q: "What is the Chaitanya Bhāgavata?",
    a: "The Chaitanya Bhāgavata — originally called Śrī Chaitanya-maṅgala — is the scripture compiled by Śrī Vṛndāvana Dāsa Ṭhākura narrating the pastimes of Lord Chaitanya, divided into Ādi-khaṇḍa, Madhya-khaṇḍa, and Antya-khaṇḍa. It was written on the direct order of Śrī Nityānanda Prabhu. Kṛṣṇadāsa Kavirāja Gosvāmī in CC Ādi 8.33–44 describes it as a work through which Śrī Chaitanya Mahāprabhu has personally spoken.",
  },
  {
    q: "Why is Śrī Vṛndāvana Dāsa Ṭhākura called the Vyāsa of the Chaitanya-līlā?",
    a: "This title appears in CC Ādi 11.55, Translation and is elaborated in the Purport by Śrīla Prabhupāda, who confirms his identity as an incarnation of Vedavyāsa based on the Gaura-gaṇoddeśa-dīpikā. Just as Vyāsadeva compiled and preserved Vedic scripture, Śrī Vṛndāvana Dāsa Ṭhākura compiled and preserved the pastimes of Lord Chaitanya for all future generations.",
  },
  {
    q: "Who was Nārayaṇī Devī, his mother?",
    a: "Nārayaṇī Devī was the daughter of Śrīvāsa Ṭhākura's brother. Śrīla Prabhupāda describes her identity in his purport to CC Ādi 8.41, citing the Gaura-gaṇoddeśa-dīpikā: she was formerly Kilimbikā, the younger sister of Ambikā who nursed Lord Kṛṣṇa as a child. In the Chaitanya-līlā, she ate the prasādam remnants of Lord Chaitanya directly, becoming completely absorbed in love of God.",
  },
  {
    q: "What is the significance of his appearance and disappearance days?",
    a: "These are auspicious occasions in the Gauḍīya Vaiṣṇava calendar when the mercy of a great ācārya is especially accessible to sincere souls. Devotees honour Śrī Vṛndāvana Dāsa Ṭhākura by reading from the Chaitanya Bhāgavata, hearing his glories, performing saṅkīrtana, and praying for his blessings to deepen their devotional service.",
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
            <li aria-current="page">Śrī Vṛndāvana Dāsa Ṭhākura</li>
          </ol>
        </div>

        {/* Header */}
        <header className="gp-blog-header">
          <p className="gp-hero-label">Gauḍīya Vaiṣṇava — Vyāsa of the Chaitanya-līlā</p>
          <h1 className="gp-blog-title">
            Śrī Vṛndāvana Dāsa Ṭhākura<br />
            <span className="text-[clamp(1.5rem,3vw,2.5rem)] text-gray-700 font-normal">The Vyāsa of the Chaitanya-līlā and Refuge of the Fallen</span>
          </h1>
          <p className="gp-blog-subtitle mt-4 mb-6">
            How the author of Chaitanya Bhāgavata became the eternal shelter for souls seeking the mercy of Lord Chaitanya. Compiled from the lectures and purports of His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupāda.
          </p>
          <div className="gp-hero-line"></div>
          <p className="gp-blog-byline">
            By <strong>HKM Chennai Editorial Team</strong> • May 3, 2026 • 10 min read
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
            alt="Śrī Vṛndāvana Dāsa Ṭhākura"
            width={800}
            height={450}
            className="gp-image"
            priority
          />
        </div>

        <div className="gp-content">

          {/* Intro */}
          <p>
            If you have ever opened the Chaitanya Bhāgavata — the sacred scripture that narrates the pastimes of Śrī Chaitanya Mahāprabhu in Navadvīpa — you have already received the mercy of Śrī Vṛndāvana Dāsa Ṭhākura. Not merely as a reader, but as a soul touched by a Vaiṣṇava so elevated that His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupāda himself described him as the Vyāsa of the Chaitanya-līlā — the one who performed for Lord Chaitanya's pastimes the same incomparable service that Vyāsadeva performed for the Vedic scriptures.
          </p>
          <p>
            Śrī Vṛndāvana Dāsa Ṭhākura is not simply a historical figure. He is a living mercy-shelter for all who approach Lord Chaitanya. He was the direct initiated disciple of Śrī Nityānanda Prabhu, and through his monumental work, the Chaitanya Bhāgavata, he preserved the divine pastimes of Lord Chaitanya for the entire world. On his appearance and disappearance days, Vaiṣṇavas everywhere remember his incomparable contribution to Gauḍīya Vaiṣṇavism with deep gratitude and reverence.
          </p>

          <div className="gp-divider"></div>

          {/* Section 1 */}
          <h2 className="gp-sh" id="who-is-vrindavan-das-thakur">1. Who is Śrī Vṛndāvana Dāsa Ṭhākura?</h2>
          <p>
            Śrī Vṛndāvana Dāsa Ṭhākura appeared in the village of Māmgāchi, also known as Modadrumadvīpa, one of the nine islands of Navadvīpa Dhāma in Bengal. He was born to his mother Nārayaṇī Devī, whose position in the Chaitanya-līlā is profoundly exalted. Nārayaṇī Devī was the daughter of Śrīvāsa Ṭhākura's brother. As a tiny child, she received the direct personal mercy of Lord Śrī Chaitanya Mahāprabhu himself.
          </p>
          <p>
            Śrīla Prabhupāda describes this in his purport to CC Ādi 8.41, citing the Gaura-gaṇoddeśa-dīpikā of Kavi-karṇapūra. That scripture reveals that Nārayaṇī was in a previous life Kilimbikā — the younger sister of Ambikā, the woman who nursed Lord Kṛṣṇa as a child. In the Chaitanya-līlā, the same Kilimbikā appeared as Nārayaṇī and eternally ate the remnants of Lord Chaitanya's prasādam, thereby becoming completely filled with love of God (prema).
          </p>
          <p>
            Śrī Vṛndāvana Dāsa Ṭhākura is therefore the son of a mother whose eternal identity is tied to the nursing pastimes of Lord Kṛṣṇa himself. His very birth was steeped in the mercy of Lord Chaitanya. Śrīla Prabhupāda confirms that he was Lord Nityānanda Prabhu's most beloved devotee — the disciple whom Nityānanda Prabhu held as most dear among all those he initiated. He received initiation from Śrī Nityānanda Prabhu and it was on Nityānanda Prabhu's direct order that he composed the Chaitanya Bhāgavata.
          </p>

          <div className="gp-image-container my-8">
            <Image
              src="/assets/blog/sri-vrindavan-das-thakur/Gaura_Nitai_Deities_Sripat.png"
              alt="The worshippable Gaura-Nitai Deities of Śrī Vṛndāvana Dāsa Ṭhākura at Srīpāṭa"
              width={800}
              height={450}
              className="gp-image"
            />
            <span className="gp-image-caption">The worshippable Śrī Śrī Gaura-Nitāi Deities installed and served by Śrī Vṛndāvana Dāsa Ṭhākura — still present and worshipped daily at Srīpāṭa, Māmgāchi</span>
          </div>

          <div className="gp-divider"></div>

          {/* Section 2 */}
          <h2 className="gp-sh" id="eternal-spiritual-identity">2. His Eternal Spiritual Identity</h2>
          <p>
            One of the most extraordinary aspects of Śrī Vṛndāvana Dāsa Ṭhākura's position, confirmed by Śrīla Prabhupāda in the purport to CC Ādi 11.55, is the revelation of his eternal spiritual identity. Śrīla Prabhupāda writes that Śrīla Vṛndāvana Dāsa Ṭhākura was an incarnation of Vedavyāsa and also a friendly cowherd boy named Kusuṃāpīda in Kṛṣṇa-līlā — a combined incarnation of Vedavyāsa and the cowherd boy Kusuṃāpīda. This is based on the Gaura-gaṇoddeśa-dīpikā (verse 109):
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
            The import of this verse is immense. Vedavyāsa is the compiler of the entire body of Vedic scripture. He appeared again as Śrī Vṛndāvana Dāsa Ṭhākura to perform the equivalent service for the Chaitanya-līlā: to compile and preserve the pastimes of Lord Chaitanya in the form of the Chaitanya Bhāgavata. Śrīla Prabhupāda therefore confirms with full authority that Śrī Vṛndāvana Dāsa Ṭhākura is not merely a great biographer, but the very incarnation of the literary potency of Vyāsadeva, appearing to serve Lord Chaitanya.
          </p>

          <div className="gp-bq">
            <p>
              "Śrīla Vyāsadeva described the pastimes of Kṛṣṇa in Śrīmad-Bhāgavatam. The Vyāsa of the pastimes of Lord Chaitanya Mahāprabhu was Vṛndāvana dāsa."
            </p>
            <cite>— His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupāda, CC Ādi 11.55, Translation</cite>
          </div>

          <p>
            In the purport to CC Ādi 11.55, Śrīla Prabhupāda states: <em>"Śrīla Vṛndāvana dāsa Ṭhākura was an incarnation of Vedavyāsa and also a friendly cowherd boy named Kusumāpīda in kṛṣṇa-līlā. In other words, the author of Śrī Caitanya-bhāgavata, Śrīla Vṛndāvana dāsa Ṭhākura, the son of Śrīvāsa Ṭhākura's niece Nārayaṇī, was a combined incarnation of Vedavyāsa and the cowherd boy Kusumāpīda."</em>
          </p>

          <div className="gp-divider"></div>

          {/* Section 3 */}
          <h2 className="gp-sh" id="chaitanya-bhagavata">3. The Chaitanya Bhāgavata — Scripture of the Chaitanya-līlā</h2>
          <p>
            The Chaitanya Bhāgavata was originally entitled Śrī Chaitanya-maṅgala. When Śrīla Locanā Dāsa Ṭhākura later wrote another book by the same name, Śrī Vṛndāvana Dāsa Ṭhākura changed the name of his own book to Śrī Chaitanya Bhāgavata. This history is recorded by Śrīla Prabhupāda in his purport to CC Ādi 8.33.
          </p>
          <p>
            The book is divided into three sections: the Ādi-khaṇḍa (early pastimes), the Madhya-khaṇḍa (middle pastimes), and the Antya-khaṇḍa (concluding pastimes). It is the first major biography of Lord Chaitanya and the primary source for his pastimes in Navadvīpa — including his years as a scholar and teacher, his spiritual awakening at Gayā, his return to Navadvīpa, and the inauguration of the saṅkīrtana movement. It was composed on the direct order of Śrī Nityānanda Prabhu.
          </p>
          <p>
            Śrīla Kṛṣṇadāsa Kavirāja Gosvāmī pays the highest tribute to Śrī Vṛndāvana Dāsa Ṭhākura across CC Ādi 8.33–44, saying: <em>"O fools, just read Śrī Caitanya-maṅgala! By reading this book you can understand all the glories of Śrī Caitanya Mahāprabhu. I offer millions of obeisances unto the lotus feet of Vṛndāvana Dāsa Ṭhākura. No one else could write such a wonderful book for the deliverance of all fallen souls."</em>
          </p>

          <div className="gp-bq">
            <p>
              "The life of Śrī Caitanya Mahāprabhu is very elaborately described in the Chaitanya-bhāgavata, and Kṛṣṇadāsa Kavirāja Gosvāmī has already informed us that in his Śrī Chaitanya-caritāmṛta he has described whatever Vṛndāvana Dāsa Ṭhākura has not mentioned. This acceptance of Śrī Chaitanya-bhāgavata by Kṛṣṇadāsa Kavirāja Gosvāmī indicates his acceptance of the disciplic succession. A writer of transcendental literature never tries to surpass the previous ācāryas."
            </p>
            <cite>— His Divine Grace Vishwa Guru Śrīla Prabhupāda, CC Ādi 8.33, Purport</cite>
          </div>

          <p>
            The secret behind this sublime quality of the Chaitanya Bhāgavata is explained by Śrīla Prabhupāda: when a devotee writes about the pastimes of the Lord in service, the Lord from within gives him so much intelligence that he writes in near proximity to the Lord. Kṛṣṇadāsa Kavirāja Gosvāmī confirms that what Vṛndāvana Dāsa Ṭhākura wrote was actually spoken by Lord Chaitanya himself, and that Vṛndāvana Dāsa simply repeated it.
          </p>
          <p>
            Śrīla Prabhupāda describes the Chaitanya Bhāgavata as a "shower of nectar," and confirms that hearing it annihilates all misfortune for the listener. The power of the text is so extraordinary, he explains, that even those who are considered great atheists can immediately become great devotees simply by hearing it.
          </p>

          <div className="gp-divider"></div>

          {/* Section 4 */}
          <h2 className="gp-sh" id="spiritual-lineage">4. His Extraordinary Spiritual Lineage</h2>
          <p>
            Śrī Vṛndāvana Dāsa Ṭhākura was the initiated disciple of Śrī Nityānanda Prabhu, as confirmed in CC Ādi 11.54–55. Nityānanda Prabhu is accepted in the Gauḍīya sampradāya as the incarnation of Lord Balarāma, Kṛṣṇa's elder brother and eternal companion. In the līlā of Lord Chaitanya, Nityānanda Prabhu embodies the most unconditional, all-forgiving mercy.
          </p>
          <p>
            Śrī Nityānanda Prabhu is famous for giving his mercy freely even to the most fallen souls. The celebrated pastime of his encounter with Jagāi and Mādhāi — two terribly sinful brothers who physically attacked him and drew blood from his forehead — illustrates this perfectly. Rather than becoming angry, Nityānanda Prabhu embraced them with compassion and brought them to the shelter of Lord Chaitanya. This pastime is narrated in vivid detail in the Chaitanya Bhāgavata itself, in the Madhya-khaṇḍa.
          </p>
          <p>
            Śrī Vṛndāvana Dāsa Ṭhākura was deeply absorbed in the consciousness of his spiritual master, and therefore his entire literary output carries this same quality of unlimited mercy. The Chaitanya Bhāgavata is particularly celebrated for its ecstatic, extensive descriptions of the pastimes of Nityānanda Prabhu — a direct reflection of the author's devotion and the spiritual flavour he had received through disciplic connection.
          </p>
          <p>
            The chain of mercy in Śrī Vṛndāvana Dāsa Ṭhākura's life runs without interruption: from Lord Chaitanya directly to Nārayaṇī Devī (who ate the Lord's prasādam as a child), through Śrī Nityānanda Prabhu (who ordered him to write), and through Śrī Vṛndāvana Dāsa Ṭhākura himself to all who read his text.
          </p>

          <div className="gp-divider"></div>

          {/* Section 5 */}
          <h2 className="gp-sh" id="mercy">5. The Mercy of Śrī Vṛndāvana Dāsa Ṭhākura</h2>
          <p>
            One of the most remarkable qualities of the Chaitanya Bhāgavata is its tone of absolute surrender and devotional love. Śrī Vṛndāvana Dāsa Ṭhākura does not write as a scholar. He writes as a devotee overwhelmed by love for his Lord, and every line breathes the atmosphere of Navadvīpa Dhāma and the saṅkīrtana movement of Śrī Chaitanya Mahāprabhu.
          </p>
          <p>
            Because he was the disciple of the all-merciful Nityānanda Prabhu, Śrī Vṛndāvana Dāsa Ṭhākura's mercy flows freely to anyone who sincerely calls upon him. Just as Nityānanda Prabhu gave himself to Jagāi and Mādhāi — the most fallen of souls — Śrī Vṛndāvana Dāsa Ṭhākura through his writings gives himself freely to anyone who approaches with humility. His mercy is not reserved for scholars or advanced practitioners.
          </p>
          <p>
            In Gauḍīya Vaiṣṇava tradition, the appearance and disappearance days of great ācāryas are auspicious occasions when their mercy becomes especially accessible. On such days, devotees recite from the ācārya's works, hear his glories, and pray for his blessings.
          </p>

          <div className="gp-divider"></div>

          {/* Section 6 */}
          <h2 className="gp-sh" id="what-prabhupada-says">6. What Śrīla Prabhupāda Says About Śrī Vṛndāvana Dāsa Ṭhākura</h2>
          <p>
            His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupāda quoted and referenced Śrī Vṛndāvana Dāsa Ṭhākura extensively throughout his purports, lectures, and conversations. The reverence with which Śrīla Prabhupāda spoke of Vṛndāvana Dāsa Ṭhākura reveals the depth of this ācārya's position in the Gauḍīya paramparā.
          </p>

          <div className="gp-bq">
            <p>
              "Actually the authorized compiler of the pastimes of Śrī Chaitanya Mahāprabhu is Śrīla Vṛndāvana Dāsa, the incarnation of Vyāsadeva. Only upon his orders am I trying to chew the remnants of food that he has left."
            </p>
            <cite>— His Divine Grace Vishwa Guru Śrīla Prabhupāda, CC Madhya 1.13, Translation</cite>
          </div>

          <p>
            In a recorded conversation, Śrīla Prabhupāda also stated: <em>"Just like our Vṛndāvana Dāsa Ṭhākura. He is described as incarnation of Vyāsadeva because Vyāsadeva wrote Bhāgavatam and he wrote Caitanya-bhāgavata."</em> This is entirely consistent with the purport statements in CC Ādi 11.55 confirming his Vyāsa-identity.
          </p>
          <p>
            Śrīla Bhaktisiddhānta Sarasvatī Ṭhākura — Śrīla Prabhupāda's own spiritual master — notes in his commentary that all pure devotees who follow in Śrī Vṛndāvana Dāsa Ṭhākura's footsteps by faithfully describing the Lord's activities are to be considered like Vyāsa themselves. The title of Vyāsa is not a biographical accident unique to one soul — it is a living standard set by Śrī Vṛndāvana Dāsa Ṭhākura for all who serve Lord Chaitanya through the written word.
          </p>

          <div className="gp-divider"></div>

          {/* Section 7 */}
          <h2 className="gp-sh" id="how-to-honour">7. How to Honour Śrī Vṛndāvana Dāsa Ṭhākura</h2>
          <p>
            The most direct way to receive the mercy of Śrī Vṛndāvana Dāsa Ṭhākura is to read the Chaitanya Bhāgavata — approaching it as sacred scripture, not as historical or academic literature. Śrīla Prabhupāda himself was a passionate reader of Gauḍīya Vaiṣṇava literature from a very young age, and the writings of the ācāryas in the paramparā formed the spiritual foundation of his own mission.
          </p>
          <p>
            A second way to honour him is to deepen one's connection with Śrī Nityānanda Prabhu, his spiritual master. Chanting the Pañca-tattva mantra — <em>Śrī Kṛṣṇa Chaitanya Prabhu Nityānanda Śrī Advaita Gadādhara Śrīvāsādi-gaura-bhakta-vṛnda</em> — with particular attention and love for the name of Nityānanda Prabhu is a means of entering the same spiritual current that nourished Śrī Vṛndāvana Dāsa Ṭhākura throughout his life.
          </p>
          <p>
            Third, one can honour him through service to the Vaiṣṇava community — by distributing prasādam, by sharing knowledge of Lord Chaitanya's pastimes with others, and by engaging in saṅkīrtana. Śrī Vṛndāvana Dāsa Ṭhākura spent his entire life in service to Lord Chaitanya's mission: to distribute love of God freely and without discrimination. Participating in that same mission, however modestly, is the deepest homage we can offer.
          </p>

          <div className="gp-divider"></div>

          {/* Section 8 — Sacred Places */}
          <h2 className="gp-sh" id="sacred-places">8. Sacred Places of Śrīla Vṛndāvana Dāsa Ṭhākura (Līlā-Sthālī)</h2>
          <p>
            The external life of Śrīla Vṛndāvana Dāsa Ṭhākura is enshrined in three sacred places, each of which represents a distinct chapter of his divine mission. For any devotee wishing to deepen their connection with this great ācārya, visiting these places is an act of the highest devotional fortune.
          </p>

          <h3 className="text-xl font-bold text-[#701a1a] font-serif mt-8 mb-3">1. Māmgāchi, Modadrumadvīpa, Navadvīpa — Birthplace (Janma-Sthāna)</h3>

          <div className="gp-image-container my-6">
            <Image
              src="/assets/blog/sri-vrindavan-das-thakur/Birthplace_of_Sri_Vrindavan_Das_Thakur.png"
              alt="Birthplace of Śrī Vṛndāvana Dāsa Ṭhākura at Māmgāchi, Modadrumadvīpa"
              width={800}
              height={450}
              className="gp-image"
            />
            <span className="gp-image-caption">The sacred birthplace of Śrī Vṛndāvana Dāsa Ṭhākura at Māmgāchi, Modadrumadvīpa, Navadvīpa Dhāma</span>
          </div>

          <p>
            Located in the village of Māmgāchi on the sacred island of Modadrumadvīpa — one of the nine islands of Navadvīpa-dhāma — this is the hallowed ground where Śrīla Vṛndāvana Dāsa Ṭhākura took his birth on the Kṛṣṇa-dvādaśī tithi of the month of Vaiśākha, around 1507 AD. The island of Modadrumadvīpa itself carries immense spiritual antiquity: in a previous age, Lord Rāmacandra came here with brother Lakṣmaṇa and Sītā Devī during His forest exile and resided here for some days, narrating the glories of Navadvīpa-dhāma.
          </p>
          <p>
            The property here was the ancestral home of Śrīman Mālinī Devī, the wife of Śrīvāsa Ṭhākura. After marriage, Śrīmatī Nārayaṇī Devī — the Ṭhākura's mother — came to reside here in Mālinī Devī's ancestral home. It was here that Śrīla Vṛndāvana Dāsa Ṭhākura was born, grew up until the age of ten, and began his early studies, nourished and raised, as Śrīla Bhaktisiddhānta Sarasvatī Ṭhākura writes, "just like a valuable gem."
          </p>
          <p>
            Today this ancestral property stands as the recognised Srīpāṭa of Śrīla Vṛndāvana Dāsa Ṭhākura. The original worshippable Śrī Śrī Gaura-Nitāi Deities installed and served by the Ṭhākura himself are still present here and diligently worshipped to this day. Śrīla Bhaktisiddhānta Sarasvatī Ṭhākura also established the Śrī Modadruma Gauḍīya Maṭha at this sacred site.
          </p>

          <h3 className="text-xl font-bold text-[#701a1a] font-serif mt-8 mb-3">2. Denur, Bardhaman — Where the Chaitanya Bhāgavata Was Composed (Srīpāṭa)</h3>

          <div className="gp-image-container my-6">
            <Image
              src="/assets/blog/sri-vrindavan-das-thakur/Composition_Site_Denur.png"
              alt="Śrīla Vṛndāvana Dāsa Ṭhākura's composition site of Śrī Chaitanya Bhāgavata at Denur"
              width={800}
              height={450}
              className="gp-image"
            />
            <span className="gp-image-caption">The sacred spot at Denur, Bardhaman, where Śrīla Vṛndāvana Dāsa Ṭhākura composed the immortal Śrī Chaitanya Bhāgavata on the direct order of Śrī Nityānanda Prabhu</span>
          </div>

          <p>
            Denur, situated in the Monteswar Block of the Bardhaman District of West Bengal, is the most spiritually significant place in the Ṭhākura's manifest life — for it was here, on the direct order of Śrī Nityānanda Prabhu, that Śrīla Vṛndāvana Dāsa Ṭhākura settled and composed the immortal Śrī Chaitanya Bhāgavata.
          </p>
          <p>
            After taking initiation at age sixteen and travelling with Nityānanda Prabhu, the Lord ordered him to remain at Denur through a beautiful pastime. When Śrī Nityānanda accepted lunch at the home of a devoted landlord named Rāmhari Chakraborty, He called for harītakī — a digestive fruit — after the meal. Śrīla Vṛndāvana Dāsa immediately produced it, having kept it folded in his cloth since morning, knowing the Lord would require it. Nityānanda Prabhu, in His characteristic way of blessing through apparent reproach, chastised him for accumulating things rather than fully depending on Kṛṣṇa's mercy — and ordered him to remain at Denur and perform his bhajana there. Though the Ṭhākura wept at the prospect of separation from his beloved Guru, he accepted the order as his very life and soul.
          </p>
          <p>
            The harītakī fruit which Śrī Nityānanda chewed and cast to the ground that day took root and grew into a beautiful tree that stands at Denur to this day. Beside it, the lotus footprints of Śrī Nityānanda Prabhu are preserved. The original handwritten manuscript of the Śrī Caitanya Bhāgavata is carefully preserved at Denur to this day.
          </p>

          <h3 className="text-xl font-bold text-[#701a1a] font-serif mt-8 mb-3">3. Śrī Vṛndāvana Dhāma — Samādhi in the 64 Samādhis Area</h3>

          <div className="gp-image-container my-6">
            <Image
              src="/assets/blog/sri-vrindavan-das-thakur/64_Samadhis_Vrindavana.jpeg"
              alt="64 Samādhis Area of Śrī Vṛndāvana Dhāma"
              width={800}
              height={450}
              className="gp-image"
            />
            <span className="gp-image-caption">The celebrated 64 Samādhis Area of Śrī Vṛndāvana Dhāma, where the samādhi of Śrīla Vṛndāvana Dāsa Ṭhākura rests alongside the intimate associates of Lord Chaitanya Mahāprabhu</span>
          </div>

          <p>
            The samādhi of Śrīla Vṛndāvana Dāsa Ṭhākura rests in the celebrated 64 Samādhis Area of Śrī Vṛndāvana Dhāma, alongside the samādhis of many of the intimate associates of Lord Caitanya Mahāprabhu. This is entirely fitting: the ācāryas proclaim that Śrīla Vṛndāvana Dāsa Ṭhākura is an incarnation of Vedavyāsa — and Vedavyāsa, in Kṛṣṇa's pastimes, resided and performed his service eternally in Vṛndāvana dhāma. The great Vyāsa of Caitanya-līlā thus rests in the same eternal abode as the Vyāsa of Kṛṣṇa-līlā.
          </p>
          <p>
            Visiting the samādhi of a pure Vaiṣṇava is a deeply auspicious act. The ācāryas explain that a nitya-siddha devotee is truly present at his samādhi and is able to extend his blessings to those who approach with sincerity and humility. To come before the samādhi of Śrīla Vṛndāvana Dāsa Ṭhākura, chant his glories, and bow down at his lotus feet is to place oneself in the direct flow of the mercy that descended from Lord Caitanya through Śrī Nityānanda Prabhu to this Ṭhākura — and through him to all of us.
          </p>

          <div className="gp-divider"></div>

          {/* Section 9 — Conclusion */}
          <h2 className="gp-sh" id="conclusion">9. Conclusion</h2>
          <p>
            Śrī Vṛndāvana Dāsa Ṭhākura stands as one of the most indispensable figures in the history of Gauḍīya Vaiṣṇavism. His identity as a combined incarnation of Vedavyāsa and Kusumāpīda, his position as the initiated disciple of Śrī Nityānanda Prabhu, his birth from the womb of the blessed Nārayaṇī Devī, and his composition of the Chaitanya Bhāgavata on the Lord's own order — all of these place him at the very heart of the transmission of Lord Chaitanya's pastimes to the world.
          </p>
          <p>
            Without the Chaitanya Bhāgavata, an irreplaceable portion of Lord Chaitanya's pastimes would have been lost to time. Kṛṣṇadāsa Kavirāja Gosvāmī himself describes his Chaitanya Caritāmṛta as merely chewing the remnants left by Śrī Vṛndāvana Dāsa Ṭhākura. Śrīla Prabhupāda confirms this fully when he writes that Vṛndāvana Dāsa Ṭhākura is the authorized writer of the pastimes of Śrī Chaitanya Mahāprabhu — as good as Śrīla Vyāsadeva himself.
          </p>
          <p>
            On the auspicious occasion of his appearance or disappearance, let us approach Śrī Vṛndāvana Dāsa Ṭhākura with humility and gratitude. Let us open the Chaitanya Bhāgavata, read his words, and allow his mercy — saturated with the love of Lord Chaitanya and Śrī Nityānanda Prabhu — to enter our hearts.
          </p>

          <p className="text-center font-bold text-xl mt-6 text-[#b8600a] font-serif">
            Śrī Vṛndāvana Dāsa Ṭhākura kī jaya!
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
