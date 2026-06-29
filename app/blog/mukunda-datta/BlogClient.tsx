"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/FooterSection"
import "../sri-shyamananda-prabhu/styles.css"
import Link from "next/link"

function Divider() {
  return (
    <div className="at-divider" aria-hidden="true">
      <span>✦</span>
    </div>
  )
}

function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="sp-sec-head">
      <span className="sp-sec-num">{num}</span>
      <h2 className="sp-sec-title">{title}</h2>
    </div>
  )
}

function SectionImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <div className="sp-sec-image-wrap">
      <img src={src} alt={alt} />
      <span className="sp-sec-caption">{caption}</span>
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
                    <p className="at-hero-label">Vaishnava Acharyas Series</p>
                    <h1 className="at-blog-title">
                        Sri Mukunda Datta<br />
                        The Eternal Singer Whose Voice Made the Lord Dance
                    </h1>
                    <div className="at-hero-line" />
                    <p className="at-blog-subtitle">
                        Discover Sri Mukunda Datta — Lord Chaitanya's class friend, beloved singer, and devoted associate.
                    </p>
                    <p className="at-blog-byline">
                        By <strong>HKM Chennai</strong>
                        {" "}— Dakshina Dwaraka Dham, Thiruvanmiyur
                    </p>
                    <div className="at-meta-row">
                        <span>📅 June 29, 2026</span>
                        <span>⏱ 12 min read</span>
                        <span>🏷 Vaishnava Acharya</span>
                    </div>
                </header>

                <div className="sp-sec-image-wrap sp-hero-short">
                    <img src="/assets/blog/mukunda-datta/cover.png" alt="Sri Mukunda Datta" />
                    <span className="sp-sec-caption">Sri Mukunda Datta — The Eternal Singer Whose Voice Made the Lord Dance.</span>
                </div>

                {/* ── OPENING QUOTE ── */}
                <div className="at-pull-quote">
                    <p>
                        "Mukunda Datta, a class friend of Lord Caitanya's, was another branch of the Caitanya tree. Lord Caitanya danced while he sang."
                    </p>
                    <cite>— Srila Prabhupada · Sri Caitanya-caritamrita, Adi-lila 10.40, Translation</cite>
                </div>

                <div className="sp-prose">
                    <p>There is a kind of devotee the scriptures describe as <em>priya-karau</em> — one who is dear to the Lord and whose every act of service gives the Lord pleasure. Among all the intimate associates of Sri Chaitanya Mahaprabhu, Sri Mukunda Datta holds a singular distinction: he was the devotee whose <em>kirtana</em> made the Supreme Lord Himself rise and dance in ecstasy. Not once. Not occasionally. Consistently — whenever Mukunda's voice rose in the courtyard of Srivasa Prabhu, Lord Chaitanya could not remain still.</p>
                    <p>Classmate, singer, confidant, and tested devotee — Mukunda Datta's life is a treasury of lessons for every practitioner of <em>bhakti</em>. His story teaches us how the mercy of the Lord operates in unexpected ways; how even a devotee who momentarily touches wrong association can be fully redeemed by sincere surrender; and how the power of transcendental song is not ornamental to devotion but lies at its very heart.</p>
                    <p>On this sacred occasion — whether we honour his <em>avirbhava</em> (appearance day) or his <em>tirobhava</em> (disappearance day) — we at Dakshina Dwaraka Dham, ISKCON Thiruvanmiyur, on the shores of the Bay of Bengal, bow at the lotus feet of this great associate of the Lord and invite all devotees into the nectar of his life.</p>
                </div>

                <Divider />

                <nav className="sp-toc" aria-label="Table of Contents">
                    <p className="sp-toc-label">Table of Contents</p>
                    <ol>
                        <li><a href="#origins"><span className="sp-toc-num">01</span>From Eternal Vraja to Navadvipa</a></li>
                        <li><a href="#classmate"><span className="sp-toc-num">02</span>The Lord's Own Classmate</a></li>
                        <li><a href="#kirtana"><span className="sp-toc-num">03</span>The Voice That Moved the Lord</a></li>
                        <li><a href="#chastisement"><span className="sp-toc-num">04</span>The Lord's Loving Chastisement</a></li>
                        <li><a href="#sevas"><span className="sp-toc-num">05</span>Key Moments of Mukunda Datta's Sevas</a></li>
                        <li><a href="#puri"><span className="sp-toc-num">06</span>At Jagannatha Puri</a></li>
                        <li><a href="#lessons"><span className="sp-toc-num">07</span>Lessons for Every Devotee</a></li>
                    </ol>
                </nav>

                <Divider />

                <section className="sp-section" id="origins">
                    <SectionHead num="01" title="From Eternal Vraja to Navadvipa: The Origins of Mukunda Datta" />
                    <div className="sp-prose">
                        <p>To understand Mukunda Datta is to begin in Goloka Vrindavana itself. The <em>Gaura-ganoddesa-dipika</em> — the authoritative Gaudiya text that identifies each associate of Lord Chaitanya in terms of their eternal identity in the Lord's Vraja pastimes — reveals that Mukunda Datta was not an ordinary soul who happened to befriend the Lord of the universe. He was one of two celestially gifted singers of Vraja who descended specifically to serve in the Lord's <em>Chaitanya-lila</em>. Srila Prabhupada quotes this directly in his purport to Adi-lila 10.40:</p>
                    </div>
                    <div className="at-pull-quote">
                        <p>"In Vraja there were two very nice singers named Madhukaṇṭha and Madhuvrata. They appeared in caitanya-līlā as Mukunda and Vāsudeva Datta, who were singers in the society of Lord Caitanya Mahāprabhu."</p>
                        <cite>— Srila Prabhupada · CC Adi-lila 10.40, Purport (quoting Gaura-ganoddesa-dipika, verse 140)</cite>
                    </div>
                    <div className="sp-prose">
                        <p>The very name <em>Madhukahntha</em> — "one who has a throat sweet as honey" — reveals the divine endowment that Mukunda Datta brought into this world. This was not a talent cultivated by practice alone; it was an eternal gift embedded in his very identity as a servant of the Lord in the spiritual world, now manifesting in Navadvipa.</p>
                        <p>In his earthly manifestation, Sri Mukunda Datta was born in the <strong>Chattagram district</strong> — present-day Chittagong in Bangladesh — in the village of <strong>Chanhaara</strong>, under the jurisdiction of the police station named Patiya. As Srila Prabhupada records in his purport to Adi-lila 10.40: "This village is situated ten krosas, or about twenty miles, from the home of Pundarika Vidyanidhi." This geographical detail is significant: Pundarika Vidyanidhi, one of the most exalted devotees of the age, was practically Mukunda Datta's neighbour. The devotional environment of Chattagram, rich with the association of such personalities, shaped Mukunda Datta from his earliest years.</p>
                        <p>His family connection with the saintly <strong>Vasudeva Datta</strong> — described by Srila Prabhupada as Mukunda Datta's brother [CC Adi-lila 10.41, Purport] — further illuminates the extraordinary devotional lineage into which he was born. Vasudeva Datta was himself so exalted that Lord Chaitanya declared: "I am only Vasudeva Datta's man. My body is only meant to please Vasudeva Datta, and he can sell Me anywhere." For Mukunda Datta to grow in the shadow of such a personality was itself divine arrangement.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="classmate">
                    <SectionHead num="02" title="The Lord's Own Classmate: A Friendship Born in the Academy" />
                    <div className="sp-prose">
                        <p>Among all the relationships that Sri Chaitanya Mahaprabhu cultivated in His Navadvipa pastimes, the bond with Mukunda Datta has a distinctive informality and intimacy — that of schoolmates who debated and sparred before they knew, in their external consciousness, the full magnitude of Who sat beside them.</p>
                        <p>Srila Prabhupada states in his purport: "When Lord Caitanya was a student, Mukunda Datta was His class friend, and they frequently engaged in logical arguments. Sometimes Lord Caitanya Mahaprabhu would fight with Mukunda Datta, using tricks of logic." [CC Adi-lila 10.40, Purport.] The specific <em>Chaitanya-bhagavata</em> chapters documenting these debates are the <strong>Adi-khanda, Chapters Eleven and Twelve</strong> — passages in which the future golden avatara of the Kali-yuga can be seen playfully testing and provoking His dear friend through the tools of Sanskrit logic. That the Supreme Lord chose to play in this way with Mukunda is itself a testament to the depth of their bond.</p>
                        <p>This kind of relationship — the Lord engaging a devotee through intellectual exchange before fully manifesting His divine nature — is part of the wonder of <em>Chaitanya-lila</em>. Mukunda Datta was among those closest to this divine unfolding.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="kirtana">
                    <SectionHead num="03" title="The Voice That Moved the Lord: Mukunda Datta's Sacred Gift of Kirtana" />
                    <div className="sp-prose">
                        <p>The hallmark of Mukunda Datta's service — the one act for which he is most celebrated in the Gaudiya tradition — is his <em>kirtana</em>. And it was no ordinary <em>kirtana</em>. When Mukunda Datta sang, the Supreme Lord could not remain seated.</p>
                    </div>
                    <div className="at-pull-quote">
                        <p>"When Mukunda Datta sang in the courtyard of Śrīvāsa Prabhu, Mahāprabhu danced with His singing."</p>
                        <cite>— Srila Prabhupada · CC Adi-lila 10.40, Purport</cite>
                    </div>
                    <div className="sp-prose">
                        <p>The setting is the sacred courtyard of Srivasa Thakura — the very <em>angana</em> that served as the birthplace of the <em>sankirtana</em> movement — and within that holy space, Mukunda's voice was the instrument through which the Lord's ecstatic love found its external expression. It is one thing to cook for the Lord, to clean His temple, or even to recite His glories in philosophical discourse. It is another to sing in such a way that the Supreme Person is moved to rise and dance. This is the power of <em>nama-sankirtana</em> when sung with pure devotion, and Mukunda Datta was its living embodiment in the Lord's own circle.</p>
                        
                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">The Sata-prahariya Manifestation</h3>
                        <p>One of the most celebrated events of Lord Chaitanya's Navadvipa pastimes was the manifestation of the <em>sata-prahariya</em> — a continuous ecstatic trance in which the Lord displayed the symptoms of divine love for twenty-one uninterrupted hours. Srila Prabhupada's purport records the pivotal role Mukunda Datta played:</p>
                    </div>
                    <div className="at-pull-quote">
                        <p>"when Lord Caitanya for twenty-one hours exhibited an ecstatic manifestation known as sāta-prahariyā, Mukunda Datta inaugurated the function by singing."</p>
                        <cite>— Srila Prabhupada · CC Adi-lila 10.40, Purport</cite>
                    </div>
                    <div className="sp-prose">
                        <p>The word <em>inaugurated</em> is deeply significant. It was Mukunda Datta's <em>kirtana</em> that opened the gateway through which the Lord entered His twenty-one-hour divine trance. He was, in that moment, the instrument of the Lord's own play.</p>

                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">When the Lord Dressed as the Goddess of Fortune</h3>
                        <p>Another extraordinary pastime preserved in Srila Prabhupada's purport concerns the occasion when Lord Chaitanya Mahaprabhu dressed Himself as the goddess of fortune, Sri Lakshmi, to dance in the house of Sri Chandrashekhara Acharya:</p>
                    </div>
                    <div className="at-pull-quote">
                        <p>"When Lord Caitanya Mahāprabhu dressed Himself as the goddess of fortune to dance in the house of Candrasekhara, Mukunda Datta began the first song."</p>
                        <cite>— Srila Prabhupada · CC Adi-lila 10.40, Purport</cite>
                    </div>
                    <div className="sp-prose">
                        <p>That the Lord entrusted the opening song of such an intimate and transcendental manifestation to Mukunda Datta speaks volumes. The Lord knew whose voice He wanted at the threshold of His divine revelations.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="chastisement">
                    <SectionHead num="04" title="A Lesson for All Devotees: The Lord's Loving Chastisement" />
                    <div className="sp-prose">
                        <p>The most spiritually instructive episode in the life of Mukunda Datta involves a moment of crisis — one that should resonate with every sincere seeker who has ever struggled at the borderline between transcendental and mixed association. Srila Prabhupada presents this pastime with great care in his purports to Adi-lila 10.40 and Adi-lila 17.65.</p>

                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">The Forbidden Association</h3>
                        <p>At some point during the Navadvipa pastimes, Mukunda Datta developed a habit that Lord Chaitanya found deeply troubling: while preaching the glories of devotional service among Vaishnavas, he would then go among the Mayavadi impersonalists to hear from them the <em>Yoga-vasistha-ramayana</em> — a philosophical text saturated with the impersonalist interpretation of reality. Srila Prabhupada explains in his purport to Adi-lila 17.65 that the Lord's response was one of profound displeasure:</p>
                    </div>
                    <div className="at-pull-quote">
                        <p>"Mukunda Datta was once forbidden to enter the association of Śrī Caitanya Mahāprabhu because of his mixing with the Māyāvādī impersonalists. When Lord Caitanya manifested His mahā-prakāśa, He called all the devotees one after another and blessed them, while Mukunda Datta stood outside the door."</p>
                        <cite>— Srila Prabhupada · CC Adi-lila 17.65, Purport</cite>
                    </div>
                    <div className="sp-prose">
                        <p>The devotees informed the Lord that Mukunda Datta was waiting outside. The Lord's reply, as recorded in Srila Prabhupada's purport, was categorical: "I shall not soon be pleased with Mukunda Datta, for he explains devotional service among devotees, but then he goes to Mayavadis to hear from them the Yoga-vasistha-ramayana, which is full of Mayavada philosophy. For this I am greatly displeased with him." [CC Adi-lila 17.65, Purport.]</p>
                        <p>The same devotee who had opened the <em>sata-prahariya</em> ecstasy with his song; the same friend who had debated logic with the Lord as a boy; the same singer whose voice had made the Supreme Person dance — this very devotee was now standing <em>outside the door</em> of the Lord's assembly. This is the Lord's clear teaching on the danger of philosophical compromise.</p>

                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">The Perfect Response: Joy in the Lord's Displeasure</h3>
                        <p>What follows is among the most remarkable moments in all of <em>Chaitanya-lila</em>. Mukunda Datta, standing outside, hearing that the Lord was displeased — did not despair. He did not argue. He did not leave in humiliation. According to Srila Prabhupada's purport:</p>
                    </div>
                    <div className="at-pull-quote">
                        <p>"Hearing the Lord speak in that way, Mukunda Datta, standing outside, was exceedingly glad that the Lord would at some time be pleased with him, although He was not pleased at that moment."</p>
                        <cite>— Srila Prabhupada · CC Adi-lila 17.65, Purport</cite>
                    </div>
                    <div className="sp-prose">
                        <p>Mukunda Datta heard only one word in the Lord's statement: <strong>"some time"</strong>. The Lord had said He would <em>not soon</em> be pleased — which meant He <em>would</em> be pleased, eventually. For Mukunda Datta, this was not a punishment. It was a promise. He rejoiced — <em>exceedingly</em>, the text says — at the certainty of the Lord's eventual mercy. This is the character of a pure devotee: he sees the Lord's will, in whatever form it comes, as cause for hope.</p>

                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">Full Redemption: The Lord's Compassion Prevails</h3>
                        <p>The resolution comes swiftly once Mukunda Datta makes the decisive commitment to permanently abandon Mayavadi association. Srila Prabhupada's purport continues: "But when the Lord understood that Mukunda Datta was going to give up the association of the Mayavadis for good, He was pleased, and He at once called to see Mukunda. Thus He delivered him from the association of the Mayavadis and gave him the association of pure devotees." [CC Adi-lila 17.65, Purport.]</p>
                        <p>The Lord's "punishment" was in fact a blessing. The temporary exclusion from His company had served its purpose: to bring Mukunda Datta to full clarity about where his heart truly belonged — at the Lord's lotus feet, in the company of pure devotees, never again touching the poison of impersonalist philosophy.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="sevas">
                    <SectionHead num="05" title="Serving the Lord's Pastimes: Key Moments of Mukunda Datta's Sevas" />
                    <div className="sp-prose">
                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">Reciting Bhagavatam on the Lord's Return from Gaya</h3>
                        <p>After Lord Chaitanya Mahaprabhu returned from Gaya, transformed by His initiation under Sri Isvara Puri, He was completely overwhelmed by <em>krishna-prema</em>. Nothing could satisfy His ecstatic longing except hearing of Krishna's pastimes. Srila Prabhupada notes in his purport that it was Mukunda Datta who rose to this occasion: "When Lord Caitanya Mahaprabhu returned from Gaya, Mukunda Datta gave Him pleasure by reciting verses from Srimad-Bhagavatam about krishna-lila." [CC Adi-lila 10.40, Purport.]</p>
                        <p>To recite Bhagavatam verses to the Lord Himself — to the very personality about Whom those verses speak — and to do so in a way that gives Him pleasure, requires not mere scholarship but the rare combination of genuine love for both Krishna and the literature that glorifies Him.</p>

                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">Bringing Gadadhara Pandita to Pundarika Vidyanidhi</h3>
                        <p>One of the most pivotal acts of Mukunda Datta's life was orchestrating the spiritual connection between two great souls: <strong>Gadadhara Pandita</strong> and <strong>Pundarika Vidyanidhi</strong>. Srila Prabhupada states in his purport: "It was by his endeavor that Gadadhara Pandita Gosvami became a disciple of Pundarika Vidyanidhi." [CC Adi-lila 10.40, Purport, citing Sri Chaitanya-bhagavata, Madhya-khanda, Chapter Seven.] Mukunda Datta was the instrument through whom this divine arrangement was made.</p>

                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">Present at the Lord's Sannyasa</h3>
                        <p>When the Lord secretly decided to accept the renounced order of life, He first went — significantly — to the house of Mukunda Datta. The <em>Chaitanya-bhagavata</em> (Madhya-khanda, Chapter Twenty-six) records that Mukunda Datta, sensing the imminent departure of his Lord from the householder life, entreated Him to continue the <em>sankirtana</em> movement for a few more days before taking sannyasa.</p>
                        <p>When the sannyasa ceremony eventually took place at Katwa, Mukunda Datta was fully present. Srila Prabhupada records: "The information of Lord Caitanya's accepting the renounced order was made known to Gadadhara Pandita, Chandrashekhara Acharya and Mukunda Datta by Nityananda Prabhu, and therefore all of them went to Katwa and arranged for kirtana and all the paraphernalia for Lord Caitanya's acceptance of sannyasa." [CC Adi-lila 10.40, Purport.]</p>
                        <p>After the ceremony, Mukunda Datta continued to follow the Lord as He began His journey northward. He was present at the famous episode at <strong>Jalesvara</strong> where Nityananda Prabhu broke the Lord's sannyasa rod. Srila Prabhupada notes simply: "Mukunda Datta was also present at that time." [CC Adi-lila 10.40, Purport.] These few words carry immense weight. Mukunda Datta was not a peripheral figure at these milestone moments — he was there, an intimate witness to the Lord's unfolding pastimes.</p>

                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">Annual Pilgrimage to Jagannatha Puri</h3>
                        <p>After the Lord settled at Puri and entered His period of intense separation from Vrindavana, the devotees of Bengal would make annual pilgrimages to be with Him. Srila Prabhupada records of Mukunda Datta: "He went every year from Bengal to see Lord Caitanya at Jagannatha Puri." [CC Adi-lila 10.40, Purport.]</p>
                        <p>The discipline and devotion required to undertake this annual journey — across hundreds of miles, on foot or by boat, through all seasons — is itself a testament to Mukunda Datta's unwavering commitment to his Lord.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="puri">
                    <SectionHead num="06" title="At Jagannatha Puri: Standing Firm for His Lord's Greatness" />
                    <div className="sp-prose">
                        <p>The <em>Chaitanya-caritamrita</em> Madhya-lila Chapter Six records one of the earliest episodes following the Lord's arrival in Puri, and Mukunda Datta plays a significant and illuminating role. Upon arriving in Puri, Mukunda Datta encountered his old acquaintance <strong>Gopinatha Acharya</strong> — the brother-in-law of the great scholar Sarvabhauma Bhattacharya — who was astonished to find him there.</p>
                        <p>Mukunda Datta informed Gopinatha Acharya that the Lord had taken sannyasa and had arrived in Puri, having fainted in ecstasy upon beholding Lord Jagannatha and been carried to Sarvabhauma's house. [CC Madhya-lila 6.23–26.] When Sarvabhauma Bhattacharya — not yet convinced of the Lord's true identity — suggested he could "bring Him into a first-class sampradaya by offering Him saffron cloth and performing the reformatory process again," the reaction of Mukunda Datta and Gopinatha Acharya was immediate:</p>
                    </div>
                    <div className="at-pull-quote">
                        <p>"Gopīnātha Ācārya and Mukunda Datta became very unhappy when they heard this."</p>
                        <cite>— CC Madhya-lila 6.77, Translation</cite>
                    </div>
                    <div className="sp-prose">
                        <p>Gopinatha Acharya then defended the Lord's supreme position at length. Mukunda Datta's inner state through this entire exchange is captured precisely in Srila Prabhupada's translation:</p>
                    </div>
                    <div className="at-pull-quote">
                        <p>"Śrīla Mukunda Datta felt very satisfied to hear the conclusive statements of Gopīnātha Ācārya, but he became very unhappy and angry to hear the statements put forward by Sārvabhauma Bhaṭṭācārya."</p>
                        <cite>— CC Madhya-lila 6.113, Translation</cite>
                    </div>
                    <div className="sp-prose">
                        <p>This moment reveals another dimension of Mukunda Datta's character: his instinctive and uncompromising recognition of his Lord's supreme position. Even before Sarvabhauma had been convinced of the Lord's divinity, Mukunda Datta's love gave him perfect vision. He was, in the truest sense, a devotee — not merely a friend, not merely a singer, but someone whose whole being was oriented toward the glory and honour of Lord Chaitanya Mahaprabhu.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="lessons">
                    <SectionHead num="07" title="What Mukunda Datta Teaches Every Devotee" />
                    <div className="sp-prose">
                        <p>The life of Mukunda Datta is not merely historical biography. It is a living curriculum for the practitioner of <em>bhakti-yoga</em>. Several lessons stand out with particular clarity.</p>

                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">Kirtana Is the Supreme Offering</h3>
                        <p>The clearest lesson from Mukunda Datta's life is the matchless power of transcendental song. Srila Prabhupada declares throughout his teachings that the method of this age is the chanting of the holy name — <em>harer nama eva kevalam</em> — and Mukunda Datta's life demonstrates exactly why: when sung with love, kirtana moves even the immovable Supreme Lord to dance.</p>

                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">Mayavada Association Is Spiritually Dangerous</h3>
                        <p>Lord Chaitanya's temporary exclusion of Mukunda Datta from His assembly — even a devotee of Mukunda's calibre — because of his contact with Mayavada literature is Srila Prabhupada's most important teaching arising from this episode. Impersonalist philosophy does not merely confuse; it destroys the very foundation of personal devotional relationship with the Lord.</p>

                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">The Devotee Finds Hope in Every Word of the Lord</h3>
                        <p>Mukunda Datta's joyful response to the Lord's "not soon" is perhaps the most sublimely devotional moment in his story. He did not collapse in despair. He read the Lord's statement with the eyes of a lover and found in it the certainty of eventual reunion. This is the mood of the highest devotees: even the Lord's correction is received as His mercy.</p>

                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">Service in Friendship Is as Sacred as Any Other</h3>
                        <p>Mukunda Datta shows that devotional service does not require formal renunciation to be profound. As a householder, as a classmate, as a singer, as a yearly pilgrim — in every role, he served. The variety of his sevas teaches us that the Lord receives service from wherever it is offered with love.</p>
                    </div>
                </section>

            </article>
            <Footer />
        </main>
    )
}
