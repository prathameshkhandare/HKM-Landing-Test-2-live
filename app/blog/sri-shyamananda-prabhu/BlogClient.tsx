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

function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                        key={item.q}
                        style={{ border: '1px solid rgba(201,168,76,0.3)', borderRadius: '0.75rem', overflow: 'hidden', transition: 'all 0.3s ease' }}
                    >
                        <button
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            style={{ width: '100%', background: '#3D1A00', padding: '0.85rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', border: 'none', textAlign: 'left' }}
                        >
                            <p style={{ fontFamily: 'serif', fontWeight: 600, color: '#FDF6E3', margin: 0, fontSize: '1.15rem', paddingRight: '1rem' }}>{item.q}</p>
                            <span style={{ color: '#C9A84C', fontSize: '1.5rem', transition: 'transform 0.3s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                        </button>
                        <div style={{ background: '#fff', padding: isOpen ? '1.25rem 1.25rem' : '0 1.25rem', maxHeight: isOpen ? '1000px' : '0', overflow: 'hidden', transition: 'all 0.3s ease', opacity: isOpen ? 1 : 0 }}>
                            <p style={{ color: '#3D1A00', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
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

                {/* ── OPENING VERSE ── */}
                <div className="at-pull-quote">
                    <p className="italic text-center font-serif text-[#ea580c] mb-4">
                        yaṃ loka bhuvi kīrtayanti hṛdayanāndasya śiśyaṃ priyam<br />
                        sākhye śrī-subalasya yaṃ bhagavataḥ preṣṭhānuśiśyam tathā<br />
                        sa śrīmān rasikendra-mastaka-maṇiś citte mamāharnisham<br />
                        śrī-rādhāpriyā-narma-marmasu rucim sampadayan bhāsatam
                    </p>
                    <p className="mb-4">
                        &quot;He who is celebrated in this world as the dear disciple of Hridayananda, who is the grand-disciple of Subala-sakha, the most intimate friend of the Supreme Lord; he who is the crest-jewel upon the head of Rasikananda; may that glorious Sri Shyamananda perpetually reside within my heart, bestowing upon me a taste for the intimate joys of Srimati Radharani.&quot;
                    </p>
                    <cite>— Shyamananda-shataka — Traditional verse of glorification</cite>
                </div>

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
                        <li><a href="#faq"><span className="sp-toc-num">14</span>Frequently Asked Questions</a></li>
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
                        <p>His story is inseparable from humility, from the extraordinary mercy of Srimati Radharani, from perfect obedience to the guru, and from tireless preaching in the face of every obstacle.</p>
                        <p>This single statement of the acharya (mentioned above) places the importance of Sri Shyamananda Prabhu beyond question. He was not merely a regional saint. He was an instrument of Srila Jiva Goswami himself, carrying the will of Sri Rupa, Sanatana, and ultimately Sri Chaitanya Mahaprabhu into the world.</p>
                        <p>The life of Sri Shyamananda Prabhu stands as living evidence that devotional qualification is never determined by birth, social standing, or external circumstance. It is measured solely by the depth of one&apos;s surrender to guru and Krishna. This blog is offered at the lotus feet of Sri Shyamananda Prabhu, praying that his causeless mercy may flow into our hearts today.</p>
                    </div>
                </section>

                <Divider />

                {/* ── SECTION 2: BIRTH ── */}
                <section className="sp-section" id="birth">
                    <SectionHead num="02" title="Birth and Early Life: From Grief to Grace" />
                    <div className="sp-prose">
                        <p>Sri Shyamananda Prabhu appeared on the full moon day of the month of Chaitra in 1534 AD — a date corresponding to the Shaka era year 1456 — in the village of Dharenda Bahadurpura, situated in the Medinipur district (presently West Bengal), near what is today known as the Kharigapura railway station. The Bhakti-ratnakara of Narahari Chakravarti Thakura confirms this birth.</p>
                        <p>His father was <strong>Sri Krishna Mandal</strong> and his mother was <strong>Sri Durika Devi</strong>. His father&apos;s ancestral home was in a place called Dandeshvara, on the banks of the Suvarnarekha river, now within Odisha. Krishna Mandal&apos;s family descended from the Sadgopa community — a community of cowherds — a lineage that, in the reckoning of Gaudiya Vaishnavism, is spiritually auspicious, connected as it is to the eternal cowherd community of Vraja.</p>
                        <p>Before Shyamananda Prabhu&apos;s birth, his parents had endured the heartbreak of losing all their previous children. Overwhelmed by grief, and yet trusting in divine will, they vowed to surrender their next child to the Lord&apos;s service if he survived. When their son was born alive and healthy, they gave him the name <em>Dukhi</em>, meaning &quot;one who is sorrowful,&quot; as a way of warding off further misfortune. He was also called Dukhia by those around him. This poignant name — Dukhi — would eventually transform into the most glorious of titles, for this same Dukhi would come to bear the name Shyamananda, conferred by none other than Srila Jiva Goswami himself.</p>
                        <p>From childhood, the signs of divine grace were clearly visible in young Dukhi. He showed deep dispassion for material pleasures from a very young age. When he heard the glories of Sri Gaura-Nityananda from the Vaishnavas of his village, tears would flow spontaneously from his eyes. He could repeat the pastimes of the Lord with ease and eloquence, and his heart would become deeply stirred whenever he heard of the divine mercy of Sri Chaitanya Mahaprabhu. His parents, observing his extraordinary devotional nature, encouraged him to take formal initiation.</p>
                    </div>
                </section>

                <Divider />

                {/* ── SECTION 3: LINEAGE ── */}
                <section className="sp-section" id="lineage">
                    <SectionHead num="03" title="The Lineage: Gauri Das Pandit and the Chain of Mercy" />
                    <div className="sp-prose">
                        <p>To understand Sri Shyamananda Prabhu, one must understand the divine lineage from which he emerged — for the spiritual potency of a Vaishnava flows from the pure chain of disciplic succession.</p>
                        <p>Sri Shyamananda Prabhu&apos;s initiating guru was Sri Hridaya Chaitanya, also known as Hridayananda. Hridaya Chaitanya was himself a disciple of Sri Gauri Das Pandit, one of the most intimate associates of Sri Chaitanya Mahaprabhu and Sri Nityananda Prabhu. Srila Prabhupada in his Chaitanya-charitamrita describes Gauri Das Pandit as one of the twelve Gopals, the group of devotees who were eternal associates of Lord Nityananda. He was the incarnation of Subala-sakha, Krishna&apos;s most intimate cowherd friend in Vraja.</p>
                    </div>
                    <div className="sp-bq">
                        <p><strong>Disciplic Lineage:</strong></p>
                        <p>Gauri Das Pandit → Hridaya Chaitanya (Sri Hridayananda) → Sri Shyamananda Prabhu → Sri Rasikananda Prabhu</p>
                    </div>
                    <div className="sp-prose">
                        <p>This lineage is significant: the mood of Gauri Das Pandit was sakhya-rasa — the mood of friendship with the Lord. Yet Shyamananda Prabhu, through the instructions of Srila Jiva Goswami and the direct mercy of Srimati Radharani, was elevated into the conjugal mood of devotional service — madhurya-rasa.</p>
                        <p>This did not constitute any offense to his initiating guru. The mood of friendship is contained within the conjugal mood; advancement in devotional service honors rather than diminishes one&apos;s guru. Srila Jiva Goswami himself confirmed this understanding when he wrote a letter to Hridaya Chaitanya explaining the extraordinary circumstances of Shyamananda Prabhu&apos;s transformation in Vrindavan. The initiating guru then blessed his disciple&apos;s advancement with joy.</p>
                    </div>
                </section>

                <Divider />

                {/* ── SECTION 4: INITIATION ── */}
                <section className="sp-section" id="initiation">
                    <SectionHead num="04" title="Initiation and the Journey to Vrindavan" />
                    <div className="sp-prose">
                        <p>Young Dukhi expressed his desire to his parents to take initiation from Hridaya Chaitanya, who resided in Ambika-Kalna, near the holy Ganga. His parents gave their joyful permission. On the way to meet his guru, Dukhi had the great fortune of bathing in the sacred Ganga. When he met Hridaya Chaitanya, his guru immediately recognized the extraordinary renunciation and devotion blooming in this young soul. He took Dukhi as his disciple and gave him the name <em>Dukhi Krishnadasa</em>.</p>
                        <p>After Dukhi Krishnadasa had spent time in serving his guru, learning the scriptures and developing his devotional practice, Hridaya Chaitanya saw that the time had come to send him to Vrindavan. With his guru&apos;s blessings, Dukhi Krishnadasa began the long journey to Vrindavan Dham, stopping at holy places along the way — Navadvip, Gaya, Kashi — taking darshan and blessings of senior Vaishnavas at each place.</p>
                        <p>At Navadvip, he took darshan of the birthplace of Sri Chaitanya Mahaprabhu. At Gaya, he was overcome with ecstasy contemplating the initiation pastimes of the Lord. At Kashi, he visited the senior devotees. In this way, step by step, the young devotee moved toward Vrindavan.</p>
                        <p>Upon arriving in Vrindavan, Dukhi Krishnadasa sought out the bhajana kutira of Srila Jiva Goswami and offered his humble obeisances at his lotus feet. The moment Jiva Goswami saw the young devotee prostrate before him, he was overwhelmed with joy. He understood at that moment that the great flood of Mahaprabhu&apos;s love, which had been waiting to burst forth in Bengal and Odisha, was now about to flow — through this very soul before him.</p>
                    </div>
                </section>

                <Divider />

                {/* ── SECTION 5: UNDER JIVA GOSWAMI ── */}
                <section className="sp-section" id="jiva">
                    <SectionHead num="05" title="Under the Shelter of Srila Jiva Goswami" />
                    <div className="sp-prose">
                        <p>In Vrindavan, Dukhi Krishnadasa had the extraordinary blessing of studying the scriptures of the Goswamis under Srila Jiva Goswami, the foremost scholar and philosopher of the Gaudiya Vaishnava sampradaya. At the same time, two other exceptional devotees — Srinivasa Acharya and Narottama Dasa Thakura — had also arrived in Vrindavan to study under Jiva Goswami. The three of them formed a sacred brotherhood that would shape the future of Gaudiya Vaishnavism.</p>
                        <p>Dukhi Krishnadasa&apos;s days in Vrindavan were filled with scripture study, humble service, and absorption in devotional practice. He and his two brothers in devotion spent their time studying the bhakti-rasa scriptures of the Goswamis and begging a little to eat from door to door in the manner of mendicants. Together they practiced madhukari — accepting a little food from each house like a bee collecting nectar from many flowers. They were deeply fixed and determined in their devotional service.</p>
                        <p>Dukhi Krishnadasa served Jiva Goswami with extraordinary dedication. He asked for the service of sweeping the forest groves of Vrindavan — particularly Seva Kunj — every day before dawn, so that the Vaishnavas would not hurt their feet while walking to the temples on the dusty paths. As he swept, tears would pour from his eyes. Sometimes, overwhelmed by love, he would place the broom — still covered in the sacred dust of Vrindavan — upon his head, knowing that even Lord Brahma and Lord Shiva pray to receive a particle of this dust. The Bhakti-ratnakara (1.401-2) of Narahari Chakravarti Thakura records that Jiva Goswami, seeing the charm of his activities and his love for Vraja, kept him close and personally instructed him in the Vaishnava scriptures. Through this intimate association, Dukhi Krishnadasa developed a profound taste for serving Radha and Krishna in the conjugal mood — madhurya-rasa — which became the defining spiritual characteristic of the Shyamanandi sampradaya.</p>
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
                        <p>Among all the pastimes in the life of Sri Shyamananda Prabhu, none is more celebrated, more wondrous, and more revealing of his exalted spiritual station than the pastime of the divine ankle bracelet — the <em>nupur</em> — of Srimati Radharani. This pastime is narrated in detail in the Bhakti-ratnakara of Narahari Chakravarti Thakura and confirmed in the accounts preserved at the Sri Sri Radha-Shyamsundar Temple in Vrindavan.</p>
                        <p>One morning, while Dukhi Krishnadasa was sweeping the Rasa-mandala in Vrindavan in an ecstatic trance, absorbed in meditating on the divine pastimes of Radha and Krishna, his eyes fell upon a captivating golden ankle bracelet lying in the dust. It was no ordinary object. It was the ankle bracelet of Srimati Radharani herself, left there by Her divine arrangement.</p>
                        <p>In his natural humility, Dukhi Krishnadasa touched the ankle bracelet reverentially to his forehead before picking it up. At that very moment, the bracelet left a divine mark — a tilaka mark — upon his forehead. He then carefully wrapped the bracelet in the corner of his upper cloth, resolving to return it to whoever came seeking it.</p>
                        <p>The next morning, Lalita-sakhi and Vishakha-sakhi came searching for the missing bracelet. When they asked Dukhi Krishnadasa for it, he replied with great humility that he would return it only to its rightful owner. The two sakhis then blindfolded him and led him through the sacred groves of Vrindavan. When the blindfold was removed, Dukhi Krishnadasa found himself in the most sacred and intimate company — in the presence of Srimati Radharani Herself.</p>
                        <p>As Dukhi Krishnadasa fastened the anklet onto Srimati Radharani&apos;s lotus foot with great reverence, Srimati Radharani was deeply pleased by his pure love and humility. She revealed to him his eternal identity as <strong>Kanaka Manjari</strong>, one of Her intimate maidservants. She then manifested from Her own lotus heart the most beautiful and unique Deity of Sri Shyamsundar — Lord Krishna in the three-fold bending form — and gave this transcendental Deity to Dukhi Krishnadasa through Lalita-sakhi.</p>
                    </div>
                    <div className="at-pull-quote">
                        <p>
                            &quot;O Shyamananda! The living entities of Kali-yuga are short-lived and often devoid of devotion to the Lord. I am giving you this Deity as a simple means of liberation for these living entities. Whoever has darshan of this Deity even once with full faith shall attain the divine abode of Lord Krishna.&quot;
                        </p>
                        <cite>— Srimati Radharani, as narrated in the Bhakti-ratnakara</cite>
                    </div>
                    <div className="sp-prose">
                        <p>The Bhakti-ratnakara records that Sri Raghunatha Dasa Goswami and Sri Krishnadasa Kaviraja Goswami, who would otherwise never leave Sri Radha Kunda, would travel to Vrindavan despite their old age specifically to have darshan of the Deity of Sri Shyamsundar — the only Deity within all creation manifested directly from the lotus heart of Srimati Radharani. The acharya Sri Baladeva Vidyabhushana spent most of his time in Vrindavan in the service of this very Deity.</p>
                        <p>Sri Lalita-sakhi then gave Dukhi Krishnadasa a firm instruction: to reveal this pastime to no one except Srila Jiva Goswami. With tears of overwhelming ecstasy and a golden hue now visibly radiating from his form, Dukhi Krishnadasa returned to his bhajana, carrying the divine Deity upon his head. Sri Shyamsundar (Lala ji), this unique and transcendental Deity manifested directly from Srimati Radharani&apos;s lotus heart, was received by Sri Shyamananda Prabhu on the auspicious occasion of Vasanta Panchami in 1578 AD, and was installed by him in his underground bhajana kutira located in Seva Kunj in Sri Vrindavan Dham.</p>
                    </div>
                </section>

                <Divider />

                {/* ── SECTION 7: THE SACRED NAME ── */}
                <section className="sp-section" id="name">
                    <SectionHead num="07" title="The Sacred Name 'Shyamananda' and the Nupur Tilaka" />
                    <div className="sp-prose">
                        <p>When Dukhi Krishnadasa presented himself before Srila Jiva Goswami in an ecstatic state — his form now glowing golden, his iron sweeping broom miraculously turned to gold by Radharani&apos;s touch, the divine Deity of Shyamsundar upon his head, and the new tilaka mark upon his forehead — Jiva Goswami was astonished. Dukhi Krishnadasa carefully narrated the entire pastime in a private moment, in a choked voice full of devotion.</p>
                        <p>Upon hearing the account of Srimati Radharani&apos;s extraordinary mercy, Srila Jiva Goswami was overwhelmed with love. He began dancing like a child in divine joy and shed rivers of tears. Embracing Dukhi Krishnadasa he declared:</p>
                    </div>
                    <div className="at-pull-quote">
                        <p>&quot;You are the most blessed soul in this world. Just by touching you, I too feel blessed by Her. From today, you shall be known as <strong>Shyamananda</strong> — the one who gives joy to Shyamasundar and who delights Srimati Radharani.&quot;</p>
                        <cite>— Srila Jiva Goswami, as narrated in the Bhakti-ratnakara</cite>
                    </div>
                    <div className="sp-prose">
                        <p className="italic text-[#ea580c] font-serif mb-2">śyāmānandeti nāmnā ca prasīddho gaudīyo varaḥ<br/>hṛdayanāndasya śiśyo jīva-gosvāmi-sevakaḥ</p>
                        <p>&quot;He is celebrated in the Gaudiya Vaishnava world as Shyamananda — the foremost disciple of Hridayananda and the dedicated servant of Srila Jiva Goswami.&quot;<br/><span className="text-sm opacity-70">— Traditional Gaudiya biographical verse</span></p>
                        <p>Jiva Goswami further declared: &quot;The mark of Radharani&apos;s ankle bracelet that appeared upon your forehead shall henceforth be known as the <strong>Shyamanandi Tilaka</strong>. It shall distinguish your followers in every age.&quot; The unique tilaka of the Shyamanandi Vaishnavas — shaped like the imprint of an ankle bracelet, called the Nupur Tilaka, with a radiant round dot in its center — has distinguished the followers of Sri Shyamananda Prabhu to this day.</p>
                        <p>When news of these events reached Hridaya Chaitanya, he was initially disturbed upon seeing the changed tilaka of his disciple. But Jiva Goswami personally explained the entire pastime, and the initiating guru was quickly pacified and deeply moved. He gave his joyful blessing to his disciple&apos;s extraordinary advancement. Jiva Goswami also established a marble altar at the exact spot in Seva Kunj where the divine anklet had been found, so that pilgrims could forever meditate on this extraordinary pastime of divine mercy.</p>
                    </div>
                </section>

                <Divider />

                {/* ── SECTION 8: THE MISSION ── */}
                <section className="sp-section" id="mission">
                    <SectionHead num="08" title="The Mission Begins: Book Distribution and the Sacred Trio" />
                    <div className="sp-prose">
                        <p>In Vrindavan, the Six Goswamis had produced an ocean of scripture: Bhakti-rasamrita-sindhu, Ujjvala-nilamani, Sat Sandarbhas, Vidagdha-madhava, and many other texts that presented the complete theology of Gaudiya Vaishnavism. The Chaitanya-charitamrita of Sri Krishnadasa Kaviraja Goswami was also completed during this period. The Goswamis held a council. They decided that the best way to fulfill the mission of Sri Chaitanya Mahaprabhu — who had declared that the Hare Krishna movement would one day spread to every town and village of the world — was to send their three finest disciples back to Bengal and Odisha carrying manuscripts of these sacred books.</p>
                    </div>
                    <div className="sp-bq">
                        <p><strong>The Conferring of Titles and the Book Distribution Mission:</strong></p>
                        <p>On an auspicious day, Srila Jiva Goswami bestowed formal titles upon his three disciples in a grand assembly of Vaishnavas:</p>
                        <p>• <strong>To Narottama:</strong> <em>&quot;From this day forward, you shall be known as Narottama Thakura Mahasaya.&quot;</em></p>
                        <p>• <strong>To Srinivasa:</strong> <em>&quot;You shall be known as Srinivasa Acharya.&quot;</em></p>
                        <p>• <strong>To Dukhi Krishnadasa:</strong> <em>&quot;Because you have brought such great joy (ananda) to Radharani (Shyama), you shall now be called Shyamananda.&quot;</em></p>
                        <p className="mt-2">Jiva Goswami then revealed their mission: to carry the scriptures of the Goswamis into Bengal, Odisha, and beyond, and to preach the teachings of Sri Chaitanya Mahaprabhu.</p>
                    </div>
                    <div className="sp-prose">
                        <p>Sri Jiva arranged everything for the long and arduous journey — a large ox-cart, armed guards, and a sealed chest containing the priceless manuscripts. He even secured a royal passport from the King of Jaipur so that the three missionaries could travel safely through different kingdoms. As the caravan left Vrindavan, Jiva Goswami and other devotees accompanied them for part of the way, unable to bear the separation.</p>
                        <p>The mission immediately encountered its first great trial. While passing through the kingdom of Vana Vishnupura in Bengal, the dacoit king Virahambira (also known as Vira Hambira) had the books stolen. Srinivasa Acharya stayed behind in Vishnupura to recover the manuscripts and eventually converted the king to Vaishnavism. Narottama Dasa Thakura continued toward Kheturi in northern Bengal. And Sri Shyamananda Prabhu proceeded toward Ambika-Kalna to report to his initiating guru Hridaya Chaitanya, who in turn instructed him to begin preaching in Odisha immediately. All three great preachers later reunited at the historic Kheturi festival in 1613 AD, organized by Narottama Dasa Thakura — the first major Gaura-purnima festival after the disappearance of Sri Chaitanya Mahaprabhu. Sri Shyamananda Prabhu attended with his disciples including Sri Rasikananda Prabhu. The reunion of this sacred trio was itself a great blessing for all the assembled devotees.</p>
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
                        <p>When Sri Shyamananda Prabhu arrived in Odisha, the devotional atmosphere that Sri Chaitanya Mahaprabhu had once personally established there had largely faded. Most of the associates of the Lord in that land had passed away. The preaching of Mahaprabhu&apos;s message had all but come to a halt. Into this spiritual vacuum, Sri Shyamananda Prabhu arrived like a monsoon cloud — and the rain he poured was pure prema bhakti.</p>
                        <p>His preaching method was primarily through kirtan. Of the three great preachers of the second generation, Narottama Dasa Thakura and Shyamananda Prabhu in particular made kirtan the central vehicle of their outreach. Srinivasa Acharya is associated with the kirtan style called Manohara-sahi. Narottama Dasa Thakura established the Gariana-hati style. And Sri Shyamananda Prabhu preached through the kirtan style known as <em>Reneti</em> — a style that, according to the Bhakti-ratnakara, enchanted all who heard it.</p>
                        <p>He traveled throughout the length and breadth of Odisha — through Dharenda, Nrisinghpur, Balarampur, Gopiballabhpur, and many other towns and villages. Everywhere he went, harikatha resounded and thousands of souls took shelter at his lotus feet. His preaching was so powerful that even staunch atheists, powerful yogis, cruel landlords, and proud scholars were melted by his love for Krishna.</p>
                        
                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">The Conversion of Yogi Damodara</h3>
                        <p>In the village of Chakulia, Sri Shyamananda Prabhu encountered a renowned yogi named Damodara who was filled with pride in his yogic powers and had no inclination to accept Vaishnavism. Damodara declared he would accept Shyamananda as his guru only if he witnessed something beyond ordinary. One day, while performing his yoga by the bank of the Kharba river in a forest grove, Damodara saw an extraordinary vision: the entire forest transformed into the divine city of Vrindavan, and within it, the eternal form of Sri Shyamsundar dancing in resplendent glory. Utterly overwhelmed, Damodara rushed to Shyamananda Prabhu and surrendered at his lotus feet. With tears in his eyes, Shyamananda Prabhu spoke to him: &quot;In your purified state, always chant the holy names of Sri Gaura-Nityananda. They are supremely merciful and will bestow upon you love of Krishna.&quot; The former king of yogis became a great devotee.</p>

                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">Transforming Tyrants and Criminals</h3>
                        <p>Near Nrisinghpur lived a cruel landlord named Uddanda Bhuinya, who had cold-bloodedly murdered countless Vaishnavas and kept 718 rags — the only possessions of his victims — in a room of his palace as trophies. This very person, by the extraordinary mercy of Sri Shyamananda Prabhu, became a Vaishnava. Such was the transformative power of his divine mercy that not only individuals but entire villages and provinces took to the path of devotion.</p>
                        <p>Sri Shyamananda Prabhu&apos;s preaching extended beyond human society. Historical accounts in the Shyamananda Prakasha record that on his journey through the Jharikhand forest on the way to Vrindavan, even animals, birds, and immovable living beings in the forest were touched by his kirtan and received the gift of love of God. This is the mark of a true mahabhagavat — one whose mercy knows no boundary.</p>
                        <p>As a result of his preaching in Odisha, not only Hindus but many Muslims also became his devoted disciples. His charisma and purity transcended all social and religious boundaries. The Bhakti-ratnakara lists numerous disciples by name — Radhananda, Purushottama, Manohara, Cintamani, Balabhadra, Jagadishvara, Uddhava, Akrura, and many more — indicating the vast scale of his preaching success.</p>
                    </div>
                </section>

                <Divider />

                {/* ── SECTION 10: RASIKANANDA ── */}
                <section className="sp-section" id="rasikananda">
                    <SectionHead num="10" title="Sri Rasikananda Prabhu: The Foremost Disciple" />
                    <div className="sp-prose">
                        <p>Among the thousands of disciples of Sri Shyamananda Prabhu, one stands in a class of his own — <strong>Sri Rasikananda Prabhu</strong>, also known as Rasika Murari. He was the son of Achyutananda, the zamindar of Rohini village on the banks of the Suvarnarekha river. From childhood, Rasikananda was a devoted soul with an irresistible attraction to Krishna-bhakti.</p>
                    </div>
                    <div className="at-pull-quote">
                        <p>
                            &quot;Rasikananda! Do not sit brooding. Very soon a great devotee, a mahabhagavat named Shyamananda Prabhu will arrive here. Go to him and take shelter of his lotus feet.&quot;
                        </p>
                        <cite>— Divine voice received by Sri Rasikananda Prabhu, as narrated in the Rasika Mangala</cite>
                    </div>
                    <div className="sp-prose">
                        <p>When Shyamananda Prabhu finally appeared at his door, Rasikananda recognized him immediately as his guru and surrendered at his feet with overwhelming joy. On an auspicious day, Sri Shyamananda Prabhu initiated Rasikananda and his wife Ichcha-devi, giving them the names Rasikananda and Shyama Dasi respectively.</p>
                        <p>This disciple would go on to become one of the most powerful preachers that Gaudiya Vaishnavism has ever known, carrying his guru&apos;s mission throughout Odisha with extraordinary force. Together, guru and disciple installed the Deities of Sri Sri Radha-Govinda and held magnificent festivals throughout the land. Before leaving this world, Sri Shyamananda Prabhu entrusted the worship of the sacred Deities of Sri Sri Radha-Shyamsundar to Sri Rasikananda. He also installed the Deity of Gopijanaballabha at a place he renamed Gopiballabhpur (formerly Kashipur), a preaching center that continues to exist as a sacred pilgrimage site in West Bengal to this day.</p>
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
                        <p>Sri Shyamananda Prabhu sanctified many places by his presence and pastimes. The devout pilgrim who visits these sacred sites today walks upon ground saturated with his footprints and prayers.</p>
                    </div>
                    <div className="sp-bq"><p><strong>1. Sri Sri Radha-Shyamsundar Mandir, Vrindavan</strong> — Located near the Radha-Damodara Temple, this is one of the seven principal Gaudiya Vaishnava temples of Vrindavan. The presiding Deity — Sri Shyamsundar (Lala ji) — is the transcendental Deity manifested directly from the lotus heart of Srimati Radharani. The Deity of Srimati Radharani (Lali ji), who self-manifested in the treasury of the King of Bharatpur, is also enshrined here. The acharya Srila Baladeva Vidyabhushana spent most of his life here serving this Deity.</p></div>
                    <div className="sp-bq"><p><strong>2. Shyamananda Tilaka Sthana and Pushpa Samadhi, Vrindavan</strong> — Directly across the road from the Radha-Shyamsundar Temple stands the pushpa samadhi of Sri Shyamananda Prabhu, surrounded by twenty-four-hour kirtan. Inside the temple courtyard is the underground bhajana kutira where he performed his bhajana.</p></div>
                    <div className="sp-bq"><p><strong>3. Seva Kunj, Vrindavan</strong> — The sacred grove of Seva Kunj, where Srimati Radharani and Sri Krishna perform Their eternal night pastimes, is the very place where Dukhi Krishnadasa swept the paths each morning before dawn and discovered Radharani&apos;s divine anklet.</p></div>
                    <div className="sp-bq"><p><strong>4. Dharenda Bahadurpura, Medinipur, West Bengal</strong> — The birthplace of Sri Shyamananda Prabhu, situated in the Medinipur district of West Bengal. The Shyamananda Gaudiya Math in Midnapore city was established in his memory.</p></div>
                    <div className="sp-bq"><p><strong>5. Sripat Gopiballabhpur, West Bengal</strong> — Situated near Jhargram on the banks of the Suvarnarekha river, this is one of the five principal seats (sripats) of the Shyamanandi sampradaya. Sri Shyamananda Prabhu installed the Deity of Sri Gopijanaballabha here and entrusted the worship to Sri Rasikananda Prabhu.</p></div>
                    <div className="sp-bq"><p><strong>6. Rayani (Rohini), Odisha</strong> — The village where Sri Shyamananda Prabhu first met Sri Rasikananda Prabhu and initiated him as his foremost disciple. The meeting took place on the banks of the Suvarnarekha river.</p></div>
                    <div className="sp-bq"><p><strong>7. Nrisinghpur, Odisha</strong> — An important preaching center of Sri Shyamananda Prabhu where he spent his final years, transforming atheists, scholars, and landlords through his divine mercy. His earthly pastimes came to a close here in 1630 AD.</p></div>
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
                        <p>Sri Shyamananda Prabhu spent the latter years of his life in Nrisinghpur, Odisha, continuing to preach the message of Sri Gaura-Nityananda with undiminished enthusiasm. His earthly pastimes concluded on Krishna Pratipad — the first day of the waning moon — in the month of Ashadh in the Shaka year 1552, corresponding to 1630 AD. This date is recorded in the Bhakti-ratnakara and in the accounts preserved at the Shyamanandi sripats of Odisha.</p>
                        <p>Before his departure, Sri Shyamananda Prabhu installed Sri Rasikananda Prabhu as the Mahanta and head of the Shyamanandi sect, entrusting to him the continuation of the preaching mission. Having thus ensured that the river of Gaudiya Vaishnavism would continue to flow through Odisha, he entered into the eternal lila of Radha and Krishna.</p>
                        <p>The legacy of Sri Shyamananda Prabhu is immense. He is credited with single-handedly reviving the bhakti tradition in Odisha after the passing of Sri Chaitanya Mahaprabhu&apos;s generation. The Shyamanandi branch of Gaudiya Vaishnavism became one of the most vibrant devotional traditions in eastern India. His foremost disciple Rasikananda Prabhu continued the mission with equal power, establishing devotional centers throughout Odisha and attracting kings, scholars, and ordinary people alike to the path of pure bhakti.</p>
                        <p>Perhaps most significantly, the lineage of Sri Shyamananda Prabhu produced <strong>Srila Baladeva Vidyabhushana</strong> — the great Vedanta acharya who wrote the Govinda-bhashya commentary on Vedanta Sutras and established the philosophical soundness of Gaudiya Vaishnavism against sectarian challenge in the eighteenth century. The intellectual and devotional inheritance of Shyamananda Prabhu thus shaped not only the bhakti practice but also the philosophical identity of the entire sampradaya.</p>
                    </div>
                </section>

                <Divider />

                {/* ── SECTION 13: LESSONS ── */}
                <section className="sp-section" id="lessons">
                    <SectionHead num="13" title="Lessons for the Devotee" />
                    <div className="sp-prose">
                        <p>The life of Sri Shyamananda Prabhu is a treasury of spiritual lessons that are as relevant today as they were in the sixteenth century.</p>
                    </div>
                    <div className="sp-bq"><p><strong>Humility is the foundation of all mercy.</strong> The name Dukhi — one who is sad — is profoundly symbolic. One who recognizes their own spiritual poverty, who sweeps the path so that others do not hurt their feet, who asks for the simplest service — such a person naturally attracts the highest mercy. Sri Shyamananda Prabhu received Radharani&apos;s direct darshan not because he was a great scholar or a powerful ascetic, but because his humility and love were complete.</p></div>
                    <div className="sp-bq"><p><strong>Guru-seva is the gateway to divine grace.</strong> Everything Shyamananda Prabhu received — the service in Vrindavan, the name, the tilaka, the Deity, the mission — came through his connection to guru. First Hridaya Chaitanya, then Jiva Goswami. He accepted his guru&apos;s instruction fully and without reservation. The result was that his guru&apos;s grace opened the door to the direct mercy of Srimati Radharani herself.</p></div>
                    <div className="sp-bq"><p><strong>Preaching is the highest service.</strong> Sri Shyamananda Prabhu did not remain in Vrindavan absorbed only in his own bhajana. He accepted the order to go and preach — even though this meant leaving the holy dham — because he understood that giving Krishna-consciousness to others is the most pleasing offering to the Lord. His preaching transformed criminals, atheists, and scholars alike.</p></div>
                    <div className="sp-bq">
                        <p><strong>Devotional qualification is never determined by birth.</strong> Sri Shyamananda Prabhu was born in a community of cowherds. Yet he received the most intimate mercy of Srimati Radharani herself and the title Prabhu from the foremost acharya of the sampradaya. The Padma Purana&apos;s teaching — cited by Srila Prabhupada in Sri Chaitanya-charitamrita — is Shyamananda Prabhu&apos;s own life made scripture:</p>
                        <p className="italic text-[#ea580c] font-serif text-center my-4">
                            na me bhaktaś caturvedī mad-bhaktaḥ śvāpacaḥ priyaḥ<br/>
                            tasmai deyaṃ tato grāhyaṃ sa ca pūjyo yathā hy aham
                        </p>
                        <p>&quot;Even a learned scholar versed in the four Vedas is not dear to Me if he is not My devotee. But a devotee — even if born in a family that eats dogs — is dear to Me. To him one should give charity, from him one should accept, and he should be worshiped just as I am worshiped.&quot;<br/><span className="text-sm opacity-70">— Padma Puraṇa (cited in Śrī Caitanya-caritāmṛta)</span></p>
                    </div>
                    <div className="sp-prose mt-6">
                        <p>The life of Sri Shyamananda Prabhu calls each of us to examine whether we have truly grasped this lesson — that the only qualification that matters in spiritual life is surrender, love, and the mercy of the Vaishnava.</p>
                    </div>
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

                {/* ── FAQ ── */}
                <section className="sp-section" id="faq">
                    <SectionHead num="14" title="Frequently Asked Questions" />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
                        {[
                            {
                                q: "Who was Sri Shyamananda Prabhu?",
                                a: "Sri Shyamananda Prabhu (born Dukhi Krishnadasa, 1534 AD) was one of the three foremost preachers of the second generation of Gaudiya Vaishnavism. Chosen by Srila Jiva Goswami along with Srinivasa Acharya and Narottama Dasa Thakura, he flooded Odisha with the message of Sri Chaitanya Mahaprabhu and Sri Nityananda Prabhu.",
                            },
                            {
                                q: "Why was he originally named 'Dukhi'?",
                                a: "Before Shyamananda Prabhu's birth, his parents had lost all their previous children. When he was born healthy, they named him Dukhi ('one who is sorrowful') to ward off misfortune. This name was later transformed by Srila Jiva Goswami into 'Shyamananda' — the one who gives joy to Shyamasundar and delights Srimati Radharani.",
                            },
                            {
                                q: "What is the significance of the divine anklet (nupur) pastime?",
                                a: "While sweeping the Rasa-mandala in Vrindavan, Dukhi Krishnadasa found Srimati Radharani's golden ankle bracelet. When he touched it to his forehead, it left a divine tilaka mark. He was then led by Lalita-sakhi and Vishakha-sakhi into the presence of Srimati Radharani Herself, who revealed his eternal identity as Kanaka Manjari and manifested the Deity of Sri Shyamsundar from Her own lotus heart.",
                            },
                            {
                                q: "What is the Nupur Tilaka (Shyamanandi Tilaka)?",
                                a: "The Nupur Tilaka is the unique tilaka mark worn by followers of Sri Shyamananda Prabhu. It is shaped like the imprint of an ankle bracelet with a radiant round dot in its center, commemorating the divine mark left on Dukhi Krishnadasa's forehead by Srimati Radharani's anklet. Srila Jiva Goswami formally named it the Shyamanandi Tilaka.",
                            },
                            {
                                q: "Who was Sri Rasikananda Prabhu?",
                                a: "Sri Rasikananda Prabhu (also known as Rasika Murari) was the foremost disciple of Sri Shyamananda Prabhu. The son of zamindar Achyutananda, he received a divine voice directing him to take shelter of Shyamananda Prabhu. He became one of the most powerful preachers in Gaudiya Vaishnavism and carried his guru's mission throughout Odisha.",
                            },
                            {
                                q: "What is the Shyamanandi sampradaya?",
                                a: "The Shyamanandi sampradaya is the branch of Gaudiya Vaishnavism established through Sri Shyamananda Prabhu's preaching in Odisha. It became one of the most vibrant devotional traditions in eastern India. The lineage notably produced Srila Baladeva Vidyabhushana, who wrote the Govinda-bhashya commentary on Vedanta Sutras.",
                            },
                            {
                                q: "What happened at the Kheturi festival?",
                                a: "The Kheturi festival (1613 AD), organized by Narottama Dasa Thakura, was the first major Gaura-purnima festival after the disappearance of Sri Chaitanya Mahaprabhu. It reunited the sacred trio — Srinivasa Acharya, Narottama Dasa Thakura, and Sri Shyamananda Prabhu (who attended with his disciple Rasikananda Prabhu) — and was a landmark event for the Gaudiya Vaishnava tradition.",
                            },
                            {
                                q: "Who is the Deity of Sri Shyamsundar (Lala ji)?",
                                a: "Sri Shyamsundar (Lala ji) is the transcendental Deity of Lord Krishna in the three-fold bending form, manifested directly from the lotus heart of Srimati Radharani. He was given to Sri Shyamananda Prabhu on Vasanta Panchami in 1578 AD and installed in Seva Kunj, Vrindavan. He is now worshiped at the Sri Sri Radha-Shyamsundar Temple in Vrindavan.",
                            },
                        ].map((item) => (
                            <div
                                key={item.q}
                                style={{ border: '1px solid rgba(201,168,76,0.3)', borderRadius: '0.75rem', overflow: 'hidden' }}
                            >
                                <div style={{ background: '#3D1A00', padding: '0.75rem 1.25rem' }}>
                                    <p style={{ fontFamily: 'serif', fontWeight: 600, color: '#FDF6E3', margin: 0, fontSize: '1rem' }}>{item.q}</p>
                                </div>
                                <div style={{ background: '#fff', padding: '1rem 1.25rem' }}>
                                    <p style={{ color: '#3D1A00', fontSize: '0.9375rem', lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <Divider />

                {/* ── NEW CONNECT WITH US ── */}
                <div className="sp-connect-header">
                    <h2>Connect with Us</h2>
                    <p>Follow Hare Krsna Movement Chennai across all platforms for daily darsana and event updates.</p>
                </div>
                
                <div className="sp-connect-grid">
                    <a href="https://hkmchennai.org" target="_blank" rel="noopener noreferrer" className="sp-connect-card">
                        <span className="sp-connect-icon">🌐</span>
                        <div className="sp-connect-info">
                            <span className="sp-connect-label">Website</span>
                            <span className="sp-connect-value">hkmchennai.org</span>
                        </div>
                        <span className="sp-connect-arrow">→</span>
                    </a>
                    <a href="https://twitter.com/ChennaiHare" target="_blank" rel="noopener noreferrer" className="sp-connect-card">
                        <span className="sp-connect-icon">🕊️</span>
                        <div className="sp-connect-info">
                            <span className="sp-connect-label">Twitter (X)</span>
                            <span className="sp-connect-value">@ChennaiHare</span>
                        </div>
                        <span className="sp-connect-arrow">→</span>
                    </a>
                    <a href="https://www.instagram.com/hkm_chennai/" target="_blank" rel="noopener noreferrer" className="sp-connect-card">
                        <span className="sp-connect-icon">📸</span>
                        <div className="sp-connect-info">
                            <span className="sp-connect-label">Instagram</span>
                            <span className="sp-connect-value">@hkm_chennai</span>
                        </div>
                        <span className="sp-connect-arrow">→</span>
                    </a>
                    <a href="https://www.linkedin.com/company/iskcon-chennai" target="_blank" rel="noopener noreferrer" className="sp-connect-card">
                        <span className="sp-connect-icon">💼</span>
                        <div className="sp-connect-info">
                            <span className="sp-connect-label">LinkedIn</span>
                            <span className="sp-connect-value">Srila Prabhupada&apos;s ISKCON<br/>Thiruvanmiyur</span>
                        </div>
                        <span className="sp-connect-arrow">→</span>
                    </a>
                    <a href="https://campaigns.hkmchennai.org" target="_blank" rel="noopener noreferrer" className="sp-connect-card">
                        <span className="sp-connect-icon">🎯</span>
                        <div className="sp-connect-info">
                            <span className="sp-connect-label">Support</span>
                            <span className="sp-connect-value">campaigns.hkmchennai.org</span>
                        </div>
                        <span className="sp-connect-arrow">→</span>
                    </a>
                    <a href="https://whatsapp.com/channel/0029VaF5hH15fM5cE8tSNa1M" target="_blank" rel="noopener noreferrer" className="sp-connect-card">
                        <span className="sp-connect-icon">📲</span>
                        <div className="sp-connect-info">
                            <span className="sp-connect-label">WhatsApp</span>
                            <span className="sp-connect-value">Join our WhatsApp Channel</span>
                        </div>
                        <span className="sp-connect-arrow">→</span>
                    </a>
                </div>
                <div className="sp-connect-divider"></div>

            </article>
            <Footer />
        </main>
    )
}
