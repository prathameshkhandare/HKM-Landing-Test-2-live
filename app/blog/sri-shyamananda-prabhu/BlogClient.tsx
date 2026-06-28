"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/FooterSection"
import "./styles.css"

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
                        Sri Shyamananda Prabhu:<br />
                        The Torchbearer of Gaura-Nityananda&apos;s Message in Odisha
                    </h1>
                    <div className="at-hero-line" />
                    <p className="at-blog-subtitle">
                        The extraordinary life of the devotee who received Srimati Radharani&apos;s direct mercy and flooded Odisha with pure devotion.
                    </p>
                    <p className="at-blog-byline">
                        By <strong>HKM Chennai</strong>
                        {" "}— Dakshina Dwaraka Dham, Thiruvanmiyur
                    </p>
                    <div className="at-meta-row">
                        <span>📅 June 28, 2026</span>
                        <span>⏱ 15 min read</span>
                        <span>🏷 Vaishnava Acharya</span>
                    </div>
                </header>

                {/* ── OPENING PULL QUOTE ── */}
                <div className="at-pull-quote">
                    <p>
                        &quot;Later, Srila Jiva Gosvami inspired Srinivasa Acarya, Narottama dasa Thakura and Duhkhi Krsnadasa to preach Krsna consciousness in Bengal.&quot;
                    </p>
                    <cite>— His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, Sri Chaitanya-charitamrita Purport</cite>
                </div>

                {/* ── TABLE OF CONTENTS ── */}
                <nav className="sp-toc" aria-label="Table of Contents">
                    <p className="sp-toc-label">Table of Contents</p>
                    <ol>
                        <li><a href="#intro"><span className="sp-toc-num">01</span>Introduction: A Flame Lit in the Second Generation</a></li>
                        <li><a href="#birth"><span className="sp-toc-num">02</span>Birth and Early Life: From Grief to Grace</a></li>
                        <li><a href="#lineage"><span className="sp-toc-num">03</span>The Lineage: Gauri Das Pandit</a></li>
                        <li><a href="#initiation"><span className="sp-toc-num">04</span>Initiation and the Journey to Vrindavan</a></li>
                        <li><a href="#jiva"><span className="sp-toc-num">05</span>Under the Shelter of Srila Jiva Goswami</a></li>
                        <li><a href="#anklet"><span className="sp-toc-num">06</span>The Divine Anklet</a></li>
                        <li><a href="#name"><span className="sp-toc-num">07</span>The Sacred Name &apos;Shyamananda&apos;</a></li>
                        <li><a href="#mission"><span className="sp-toc-num">08</span>The Mission Begins</a></li>
                        <li><a href="#odisha"><span className="sp-toc-num">09</span>Preaching in Odisha</a></li>
                        <li><a href="#rasikananda"><span className="sp-toc-num">10</span>Sri Rasikananda Prabhu</a></li>
                        <li><a href="#lila"><span className="sp-toc-num">11</span>Lila Sthali: Sacred Places</a></li>
                        <li><a href="#disappearance"><span className="sp-toc-num">12</span>Disappearance and Legacy</a></li>
                        <li><a href="#lessons"><span className="sp-toc-num">13</span>Lessons for the Devotee</a></li>
                        <li><a href="#connect"><span className="sp-toc-num">15</span>Connect With Us</a></li>
                    </ol>
                </nav>

                <Divider />

                {/* ── SECTION 1: INTRODUCTION ── */}
                <section className="sp-section" id="intro">
                    <SectionHead num="01" title="Introduction: A Flame Lit in the Second Generation" />
                    <div className="sp-sec-image-wrap sp-hero-short">
                        <img src="/assets/blog/sri-shyamananda-prabhu/Sri_Shyamananda_Prabhu_The_Torchbearer_of_Gaura-Nityananda_s_Message_in_Odisha.png" alt="Sri Shyamananda Prabhu — The Torchbearer of Gaura-Nityananda's Message in Odisha" />
                        <span className="sp-sec-caption">Sri Shyamananda Prabhu — one of the three foremost preachers of the second generation of Gaudiya Vaishnavism.</span>
                    </div>
                    <div className="sp-prose">
                        <p>When Sri Chaitanya Mahaprabhu departed from this world in 1534 AD, He left behind a sacred river of pure devotion — the Gaudiya Vaishnava tradition — whose waters He had set flowing through the Six Goswamis of Vrindavan. The immense philosophical literature they produced under His direction was the very lifeblood of the sampradaya. But literature alone does not build a tradition: it must be carried into the hearts of people.</p>
                        <p>That sacred task of carrying the torch from Vrindavan into the heartlands of Bengal and Odisha fell upon three extraordinary souls chosen by Srila Jiva Goswami. They were Srinivasa Acharya, Narottama Dasa Thakura, and Sri Shyamananda Prabhu — the blessed triumvirate of the second generation of Gaudiya Vaishnavism. Among them, it was Sri Shyamananda Prabhu who flooded the land of Odisha with the nectar of Gaura-Nityananda&apos;s message.</p>
                        <p>This single statement of the acharya places the importance of Sri Shyamananda Prabhu beyond question. He was not merely a regional saint. He was an instrument of Srila Jiva Goswami himself, carrying the will of Sri Rupa, Sanatana, and ultimately Sri Chaitanya Mahaprabhu into the world.</p>
                    </div>
                </section>

                <Divider />

                {/* ── SECTION 2: BIRTH ── */}
                <section className="sp-section" id="birth">
                    <SectionHead num="02" title="Birth and Early Life: From Grief to Grace" />
                    <div className="sp-prose">
                        <p>Sri Shyamananda Prabhu appeared on the full moon day of the month of Chaitra in 1534 AD — a date corresponding to the Shaka era year 1456 — in the village of Dharenda Bahadurpura, situated in the Medinipur district (presently West Bengal).</p>
                        <p>His father was <strong>Sri Krishna Mandal</strong> and his mother was <strong>Sri Durika Devi</strong>. Before Shyamananda Prabhu&apos;s birth, his parents had endured the heartbreak of losing all their previous children. Overwhelmed by grief, they vowed to surrender their next child to the Lord&apos;s service if he survived. When their son was born alive and healthy, they gave him the name <em>Dukhi</em>, meaning &quot;one who is sorrowful.&quot;</p>
                        <p>From childhood, the signs of divine grace were clearly visible in young Dukhi. He showed deep dispassion for material pleasures from a very young age. When he heard the glories of Sri Gaura-Nityananda from the Vaishnavas of his village, tears would flow spontaneously from his eyes.</p>
                    </div>
                </section>

                <Divider />

                {/* ── SECTION 3: LINEAGE ── */}
                <section className="sp-section" id="lineage">
                    <SectionHead num="03" title="The Lineage: Gauri Das Pandit and the Chain of Mercy" />
                    <div className="sp-prose">
                        <p>To understand Sri Shyamananda Prabhu, one must understand the divine lineage from which he emerged — for the spiritual potency of a Vaishnava flows from the pure chain of disciplic succession.</p>
                        <p>Sri Shyamananda Prabhu&apos;s initiating guru was Sri Hridaya Chaitanya, also known as Hridayananda. Hridaya Chaitanya was himself a disciple of Sri Gauri Das Pandit, one of the most intimate associates of Sri Chaitanya Mahaprabhu and Sri Nityananda Prabhu.</p>
                    </div>
                    <div className="sp-bq">
                        <p><strong>Disciplic Lineage:</strong></p>
                        <p>Gauri Das Pandit → Hridaya Chaitanya (Sri Hridayananda) → Sri Shyamananda Prabhu → Sri Rasikananda Prabhu</p>
                    </div>
                    <div className="sp-prose">
                        <p>This lineage is significant: the mood of Gauri Das Pandit was sakhya-rasa — the mood of friendship with the Lord. Yet Shyamananda Prabhu, through the instructions of Srila Jiva Goswami and the direct mercy of Srimati Radharani, was elevated into the conjugal mood of devotional service — madhurya-rasa.</p>
                    </div>
                </section>

                <Divider />

                {/* ── SECTION 4: INITIATION ── */}
                <section className="sp-section" id="initiation">
                    <SectionHead num="04" title="Initiation and the Journey to Vrindavan" />
                    <div className="sp-prose">
                        <p>Young Dukhi expressed his desire to his parents to take initiation from Hridaya Chaitanya, who resided in Ambika-Kalna, near the holy Ganga. His parents gave their joyful permission. When he met Hridaya Chaitanya, his guru immediately recognized the extraordinary renunciation and devotion blooming in this young soul. He took Dukhi as his disciple and gave him the name <em>Dukhi Krishnadasa</em>.</p>
                        <p>Upon arriving in Vrindavan, Dukhi Krishnadasa sought out the bhajana kutira of Srila Jiva Goswami and offered his humble obeisances at his lotus feet. The moment Jiva Goswami saw the young devotee prostrate before him, he was overwhelmed with joy.</p>
                    </div>
                </section>

                <Divider />

                {/* ── SECTION 5: UNDER JIVA GOSWAMI ── */}
                <section className="sp-section" id="jiva">
                    <SectionHead num="05" title="Under the Shelter of Srila Jiva Goswami" />
                    <div className="sp-prose">
                        <p>In Vrindavan, Dukhi Krishnadasa had the extraordinary blessing of studying the scriptures of the Goswamis under Srila Jiva Goswami. At the same time, two other exceptional devotees — Srinivasa Acharya and Narottama Dasa Thakura — had also arrived. The three of them formed a sacred brotherhood that would shape the future of Gaudiya Vaishnavism.</p>
                        <p>Dukhi Krishnadasa served Jiva Goswami with extraordinary dedication. He asked for the service of sweeping the forest groves of Vrindavan — particularly Seva Kunj — every day before dawn. As he swept, tears would pour from his eyes.</p>
                    </div>
                </section>

                <Divider />

                {/* ── SECTION 6: THE DIVINE ANKLET ── */}
                <section className="sp-section" id="anklet">
                    <SectionHead num="06" title="The Divine Anklet: Radharani's Extraordinary Mercy" />
                    <SectionImage
                        src="/assets/blog/sri-shyamananda-prabhu/Sri_Shyamsundar_deity_manifested_from_heart_of_Sri_Radha_at_Sri_Sri_Radha_Shyamasundar_temple_in_Vrindavan.jpg.jpeg"
                        alt="Sri Shyamasundar Deity manifested from the heart of Srimati Radharani"
                        caption="Sri Shyamsundar Deity — manifested directly from the lotus heart of Srimati Radharani, at Sri Sri Radha Shyamasundar Temple, Vrindavan."
                    />
                    <div className="sp-prose">
                        <p>Among all the pastimes in the life of Sri Shyamananda Prabhu, none is more celebrated than the pastime of the divine ankle bracelet — the <em>nupur</em> — of Srimati Radharani.</p>
                        <p>One morning, while Dukhi Krishnadasa was sweeping the Rasa-mandala in Vrindavan in an ecstatic trance, his eyes fell upon a captivating golden ankle bracelet lying in the dust. It was the ankle bracelet of Srimati Radharani herself.</p>
                        <p>In his natural humility, Dukhi Krishnadasa touched the ankle bracelet reverentially to his forehead. At that very moment, the bracelet left a divine mark — a tilaka mark — upon his forehead.</p>
                        <p>As Dukhi Krishnadasa fastened the anklet onto Srimati Radharani&apos;s lotus foot with great reverence, She was deeply pleased. She revealed to him his eternal identity as <strong>Kanaka Manjari</strong>, one of Her intimate maidservants. She then manifested from Her own lotus heart the most beautiful Deity of Sri Shyamsundar.</p>
                    </div>
                    <div className="at-pull-quote">
                        <p>
                            &quot;O Shyamananda! The living entities of Kali-yuga are short-lived and often devoid of devotion to the Lord. I am giving you this Deity as a simple means of liberation for these living entities.&quot;
                        </p>
                        <cite>— Srimati Radharani, as narrated in the Bhakti-ratnakara</cite>
                    </div>
                </section>

                <Divider />

                {/* ── SECTION 7: THE SACRED NAME ── */}
                <section className="sp-section" id="name">
                    <SectionHead num="07" title="The Sacred Name 'Shyamananda' and the Nupur Tilaka" />
                    <div className="sp-prose">
                        <p>When Dukhi Krishnadasa presented himself before Srila Jiva Goswami — his form now glowing golden, his iron sweeping broom miraculously turned to gold by Radharani&apos;s touch, the divine Deity of Shyamsundar upon his head — Jiva Goswami was astonished.</p>
                    </div>
                    <div className="at-pull-quote">
                        <p>&quot;You are the most blessed soul in this world. Just by touching you, I too feel blessed by Her. From today, you shall be known as <strong>Shyamananda</strong> — the one who gives joy to Shyamasundar and who delights Srimati Radharani.&quot;</p>
                        <cite>— Srila Jiva Goswami, as narrated in the Bhakti-ratnakara</cite>
                    </div>
                    <div className="sp-prose">
                        <p>Jiva Goswami further declared: &quot;The mark of Radharani&apos;s ankle bracelet that appeared upon your forehead shall henceforth be known as the <strong>Shyamanandi Tilaka</strong>. It shall distinguish your followers in every age.&quot;</p>
                    </div>
                </section>

                <Divider />

                {/* ── SECTION 8: THE MISSION ── */}
                <section className="sp-section" id="mission">
                    <SectionHead num="08" title="The Mission Begins: Book Distribution and the Sacred Trio" />
                    <div className="sp-prose">
                        <p>In Vrindavan, the Six Goswamis had produced an ocean of scripture. They decided to send their three finest disciples back to Bengal and Odisha carrying manuscripts of these sacred books.</p>
                    </div>
                    <div className="sp-bq">
                        <p><strong>The Conferring of Titles:</strong></p>
                        <p>• <strong>To Narottama:</strong> <em>&quot;From this day forward, you shall be known as Narottama Thakura Mahasaya.&quot;</em></p>
                        <p>• <strong>To Srinivasa:</strong> <em>&quot;You shall be known as Srinivasa Acharya.&quot;</em></p>
                        <p>• <strong>To Dukhi Krishnadasa:</strong> <em>&quot;Because you have brought such great joy (ananda) to Radharani (Shyama), you shall now be called Shyamananda.&quot;</em></p>
                    </div>
                    <div className="sp-prose">
                        <p>The mission immediately encountered its first great trial. While passing through the kingdom of Vana Vishnupura in Bengal, the dacoit king Virahambira had the books stolen. Srinivasa Acharya stayed behind to recover the manuscripts. Narottama Dasa Thakura continued toward Kheturi. And Sri Shyamananda Prabhu proceeded toward Odisha.</p>
                    </div>
                </section>

                <Divider />

                {/* ── SECTION 9: PREACHING IN ODISHA ── */}
                <section className="sp-section" id="odisha">
                    <SectionHead num="09" title="Preaching in Odisha: Flooding the Land with Prema Bhakti" />
                    <SectionImage
                        src="/assets/blog/sri-shyamananda-prabhu/Sri_Gopi_Vallabha_deities_installed_by_Shyamananda_Prabhu_at_Sripat_Gopiballavpur.jpeg"
                        alt="Sri Gopi Vallabha Deities installed by Shyamananda Prabhu"
                        caption="Sri Gopi Vallabha Deities installed by Sri Shyamananda Prabhu at Sripat Gopiballavpur, West Bengal."
                    />
                    <div className="sp-prose">
                        <p>When Sri Shyamananda Prabhu arrived in Odisha, the devotional atmosphere that Sri Chaitanya Mahaprabhu had once personally established there had largely faded. Into this spiritual vacuum, Sri Shyamananda Prabhu arrived like a monsoon cloud — and the rain he poured was pure prema bhakti.</p>
                        <p>His preaching method was primarily through kirtan. Sri Shyamananda Prabhu preached through the kirtan style known as <em>Reneti</em> — a style that, according to the Bhakti-ratnakara, enchanted all who heard it.</p>
                        <p>He traveled throughout the length and breadth of Odisha. Everywhere he went, harikatha resounded and thousands of souls took shelter at his lotus feet.</p>
                    </div>
                </section>

                <Divider />

                {/* ── SECTION 10: RASIKANANDA ── */}
                <section className="sp-section" id="rasikananda">
                    <SectionHead num="10" title="Sri Rasikananda Prabhu: The Foremost Disciple" />
                    <div className="sp-prose">
                        <p>Among the thousands of disciples, one stands in a class of his own — <strong>Sri Rasikananda Prabhu</strong>, also known as Rasika Murari. He was the son of Achyutananda, the zamindar of Rohini village on the banks of the Suvarnarekha river.</p>
                    </div>
                    <div className="at-pull-quote">
                        <p>
                            &quot;Rasikananda! Do not sit brooding. Very soon a great devotee, a mahabhagavat named Shyamananda Prabhu will arrive here. Go to him and take shelter of his lotus feet.&quot;
                        </p>
                        <cite>— Divine voice received by Sri Rasikananda Prabhu, as narrated in the Rasika Mangala</cite>
                    </div>
                    <div className="sp-prose">
                        <p>When Shyamananda Prabhu finally appeared at his door, Rasikananda recognized him immediately as his guru and surrendered at his feet with overwhelming joy. This disciple would go on to become one of the most powerful preachers that Gaudiya Vaishnavism has ever known.</p>
                    </div>
                </section>

                <Divider />

                {/* ── SECTION 11: LILA STHALI ── */}
                <section className="sp-section" id="lila">
                    <SectionHead num="11" title="Lila Sthali: Sacred Places Connected to Sri Shyamananda Prabhu" />
                    <SectionImage
                        src="/assets/blog/sri-shyamananda-prabhu/Shyamanada_Prabhu_pushpa_Samadhi_and_Nupur_Prapti_sthali.jpeg"
                        alt="Pushpa Samadhi and Nupur Prapti Sthali"
                        caption="Pushpa Samadhi and Nupur Prapti Sthali of Sri Shyamananda Prabhu in Vrindavan."
                    />
                    <div className="sp-prose">
                        <p>Sri Shyamananda Prabhu sanctified many places by his presence and pastimes.</p>
                    </div>
                    <div className="sp-bq"><p><strong>1. Sri Sri Radha-Shyamsundar Mandir, Vrindavan</strong> — One of the seven principal Gaudiya Vaishnava temples. The presiding Deity — Sri Shyamsundar (Lala ji) — manifested from Srimati Radharani&apos;s lotus heart.</p></div>
                    <div className="sp-bq"><p><strong>2. Pushpa Samadhi, Vrindavan</strong> — Directly across from the Radha-Shyamsundar Temple, surrounded by 24-hour kirtan.</p></div>
                    <div className="sp-bq"><p><strong>3. Seva Kunj, Vrindavan</strong> — The sacred grove where Dukhi Krishnadasa discovered Radharani&apos;s divine anklet.</p></div>
                    <div className="sp-bq"><p><strong>4. Dharenda Bahadurpura, Medinipur</strong> — The birthplace of Sri Shyamananda Prabhu.</p></div>
                    <div className="sp-bq"><p><strong>5. Sripat Gopiballabhpur, West Bengal</strong> — Where Sri Shyamananda Prabhu installed the Deity of Sri Gopijanaballabha.</p></div>
                    <div className="sp-bq"><p><strong>6. Rayani (Rohini), Odisha</strong> — Where he first met and initiated Sri Rasikananda Prabhu.</p></div>
                    <div className="sp-bq"><p><strong>7. Nrisinghpur, Odisha</strong> — Where his earthly pastimes came to a close in 1630 AD.</p></div>
                </section>

                <Divider />

                {/* ── SECTION 12: DISAPPEARANCE ── */}
                <section className="sp-section" id="disappearance">
                    <SectionHead num="12" title="Disappearance and Legacy" />
                    <SectionImage
                        src="/assets/blog/sri-shyamananda-prabhu/Shyamanand_Prabhu_s_Japa_beads_in_Pushpa_Samadhi_Area.jpeg"
                        alt="Japa Beads of Shyamananda Prabhu"
                        caption="The sacred japa beads of Sri Shyamananda Prabhu, preserved in the Pushpa Samadhi Area, Vrindavan."
                    />
                    <div className="sp-prose">
                        <p>Sri Shyamananda Prabhu spent the latter years of his life in Nrisinghpur, Odisha. His earthly pastimes concluded on Krishna Pratipad — the first day of the waning moon — in the month of Ashadh, corresponding to 1630 AD.</p>
                        <p>Before his departure, Sri Shyamananda Prabhu installed Sri Rasikananda Prabhu as the Mahanta and head of the Shyamanandi sect, entrusting to him the continuation of the preaching mission.</p>
                        <p>The legacy of Sri Shyamananda Prabhu is immense. He is credited with single-handedly reviving the bhakti tradition in Odisha. Perhaps most significantly, his lineage produced <strong>Srila Baladeva Vidyabhushana</strong> — the great Vedanta acharya who wrote the Govinda-bhashya commentary and established the philosophical soundness of Gaudiya Vaishnavism.</p>
                    </div>
                </section>

                <Divider />

                {/* ── SECTION 13: LESSONS ── */}
                <section className="sp-section" id="lessons">
                    <SectionHead num="13" title="Lessons for the Devotee" />
                    <div className="sp-prose">
                        <p>The life of Sri Shyamananda Prabhu is a treasury of spiritual lessons that are as relevant today as they were in the sixteenth century.</p>
                    </div>
                    <div className="sp-bq"><p><strong>Humility is the foundation of all mercy.</strong> Sri Shyamananda Prabhu received Radharani&apos;s direct darshan not because he was a great scholar, but because his humility and love were complete.</p></div>
                    <div className="sp-bq"><p><strong>Guru-seva is the gateway to divine grace.</strong> Everything Shyamananda Prabhu received came through his connection to guru.</p></div>
                    <div className="sp-bq"><p><strong>Preaching is the highest service.</strong> He accepted the order to go and preach — even though this meant leaving the holy dham.</p></div>
                    <div className="sp-bq"><p><strong>Devotional qualification is never determined by birth.</strong> Sri Shyamananda Prabhu was born in a community of cowherds. Yet he received the most intimate mercy of Srimati Radharani herself.</p></div>
                </section>

                <Divider />

                {/* ── SOURCES ── */}
                <section className="sp-section">
                    <SectionHead num="14" title="Sources and Citations" />
                    <div className="sp-bq">
                        <p>• Sri Chaitanya-charitamrita with purports by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada (BBT)</p>
                        <p>• Bhakti-ratnakara of Narahari Chakravarti Thakura</p>
                        <p>• Shyamananda-shataka</p>
                        <p>• Sri Prema Vilasa of Nityananda Dasa</p>
                        <p>• Rasika Mangala of Gopijanavallabha Dasa</p>
                        <p>• Shyamananda Prakasha of Krishnacharana Dasa</p>
                        <p>• Accounts from Sri Sri Radha-Shyamsundar Temple, Vrindavan</p>
                        <p>• Back to Godhead Magazine #26-02, 1992</p>
                    </div>
                </section>

                <Divider />

                {/* ── CTA ── */}
                <section className="sp-section" id="connect">
                    <div className="sp-cta-gold-bar" />
                    <div className="sp-cta-card">
                        <div className="sp-sec-head sp-cta-head">
                            <h2 className="sp-sec-title">Connect With Us</h2>
                        </div>
                        <p><strong>Dakshina Dwaraka Dham</strong></p>
                        <p>No. 63, 1st Seaward Road, Valmiki Nagar, Thiruvanmiyur, Chennai — 600 041</p>
                        <p className="sp-cta-links" style={{ marginTop: "1.5rem" }}>
                            <a href="https://hkmchennai.org" target="_blank" rel="noopener noreferrer">Visit hkmchennai.org</a>
                            {" "} | {" "}
                            <a href="https://hkmchennai.org/donate" target="_blank" rel="noopener noreferrer">Donate Now</a>
                        </p>
                        <p className="sp-cta-glorification">All Glories to Sri Guru and Gauranga! All Glories to Srila Prabhupada!</p>
                        <p className="sp-cta-mantra">
                            Hare Krishna Hare Krishna Krishna Krishna Hare Hare<br/>
                            Hare Rama Hare Rama Rama Rama Hare Hare
                        </p>
                    </div>
                    <div className="sp-cta-gold-bar" />
                </section>

            </article>
            <Footer />
        </main>
    )
}
