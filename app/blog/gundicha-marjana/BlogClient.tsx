'use client'

import React from 'react'
import Image from 'next/image'
import Navbar from "@/components/Navbar"
import Footer from "@/components/FooterSection"
import Head from 'next/head'
import '../sri-shyamananda-prabhu/styles.css'

const Divider = () => (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '3rem 0' }}>
        <div style={{ width: '80px', height: '2px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
    </div>
)

const SectionHead = ({ num, title }: { num: string; title: string }) => (
    <div className="sp-sec-head">
        <span className="sp-sec-num">{num}</span>
        <h2 className="sp-sec-title">{title}</h2>
    </div>
)

const SectionImage = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
    <div className="sp-sec-image-wrap">
        <img src={src} alt={alt} />
        <span className="sp-sec-caption">{caption}</span>
    </div>
)

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

const QuickFacts = ({ facts }: { facts: { label: string; value: string | React.ReactNode }[] }) => (
    <div className="my-10 p-6 sm:p-8 bg-gradient-to-br from-[#fffdfa] to-[#fff8ea] rounded-xl border border-[rgba(201,168,76,0.2)] border-l-[3px] border-l-[#C9A84C] shadow-sm">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#3D1A00] mb-6 flex items-center gap-3">
            <svg className="w-6 h-6 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Quick Facts
        </h3>
        <div className="flex flex-col gap-5">
            {facts.map((fact, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:gap-6 border-b border-[rgba(201,168,76,0.15)] pb-4 last:border-0 last:pb-0">
                    <span className="text-xs sm:text-sm font-bold text-[#C9A84C] uppercase tracking-widest sm:w-1/3 shrink-0 mt-1">{fact.label}</span>
                    <span className="text-[#3D1A00] sm:w-2/3 leading-relaxed">{fact.value}</span>
                </div>
            ))}
        </div>
    </div>
)

export default function BlogClient() {
    return (
        <div className="min-h-screen bg-[#FFF9F0] selection:bg-[#c9973a] selection:text-white">
            <Head>
                <title>Gundicha Marjana: The Sacred Cleaning That Begins the Jagannath Ratha Yatra | HKM Chennai</title>
                <meta name="description" content="Discover Gundicha Marjana, the sacred cleaning pastime of Sri Chaitanya Mahaprabhu before Jagannath Ratha Yatra, and its deep teaching on cleansing the heart." />
            </Head>
            <Navbar />

            <article className="at-blog-wrap">
                <header className="at-blog-header">
                    <p className="at-hero-label">Festivals / Jagannath Ratha Yatra Series</p>
                    <h1 className="at-blog-title">
                        Gundicha Marjana:<br />
                        The Sacred Cleaning That Begins the Jagannath Ratha Yatra
                    </h1>
                    <div className="at-hero-line" />
                    <p className="at-blog-subtitle">
                        How Sri Chaitanya Mahaprabhu, With Broom and Water Pot, Taught the World How to Prepare the Heart for the Lord
                    </p>
                    <p className="at-blog-byline">
                        By <strong>HKM Chennai</strong>
                        {" "}— Dakshina Dwaraka Dham, Thiruvanmiyur
                    </p>
                    <div className="at-meta-row">
                        <span>📅 July 06, 2026</span>
                        <span>⏱ 8 min read</span>
                        <span>🏷 Festival</span>
                    </div>
                </header>

                <div className="sp-sec-image-wrap" style={{ marginTop: '0', marginBottom: '3rem' }}>
                    <img src="/images/gundicha-marjana-header.jpg" alt="Devotees joyfully cleaning the Gundicha temple with brooms and water pots" />
                    <span className="sp-sec-caption">Devotees joyfully cleansing the Gundicha temple in preparation for Lord Jagannath's arrival.</span>
                </div>

                <QuickFacts facts={[
                    { label: "Pastime", value: "Gundicha Marjana — cleansing of the Gundicha Temple" },
                    { label: "When Observed", value: "The day before Ratha Yatra, every year" },
                    { label: "Performed By", value: "Sri Chaitanya Mahaprabhu and hundreds of devotees (500 years ago), today, it is performed by devotees worldwide." },
                    { label: "Location", value: "Gundicha Temple, Sundarachala, ~3 km from Sri Mandira, Puri" },
                    { label: "Core Teaching", value: "Ceto-darpana-marjanam — cleansing the heart (Antya-lila 20.12)" },
                    { label: "Connection to Ratha Yatra", value: "The opening pastime that prepares Vrindavana (Gundicha) to receive Krishna (Jagannath)" },
                ]} />

                <nav className="sp-toc" aria-label="Table of Contents">
                    <h2 className="sp-toc-title">Table of Contents</h2>
                    <ol className="sp-toc-list">
                        <li><a href="#intro"><span className="sp-toc-num">01</span>Introduction</a></li>
                        <li><a href="#gundicha-temple"><span className="sp-toc-num">02</span>The Gundicha Temple: The Lord&apos;s Garden House</a></li>
                        <li><a href="#cleaning-need"><span className="sp-toc-num">03</span>Why the Temple Needs Cleaning</a></li>
                        <li><a href="#pastime"><span className="sp-toc-num">04</span>The Pastime, As Recorded in Chaitanya-charitamrita</a></li>
                        <li><a href="#dvaraka-vrindavana"><span className="sp-toc-num">05</span>Nilachala as Dvaraka-Kurukshetra, Gundicha as Vrindavana</a></li>
                        <li><a href="#cleaning-heart"><span className="sp-toc-num">06</span>Cleaning the Heart: Srila Prabhupada&apos;s Teaching</a></li>
                        <li><a href="#leadership"><span className="sp-toc-num">07</span>An Acharya&apos;s Example of Leadership</a></li>
                        <li><a href="#conclusion"><span className="sp-toc-num">08</span>Conclusion</a></li>
                        <li><a href="#faq"><span className="sp-toc-num">09</span>Frequently Asked Questions</a></li>
                        <li><a href="#references"><span className="sp-toc-num">10</span>References</a></li>
                        <li><a href="#connect"><span className="sp-toc-num">11</span>Connect With Us</a></li>
                    </ol>
                </nav>

                <Divider />

                <section className="sp-section" id="intro">
                    <div className="sp-prose">
                        <p>A day before Lord Jagannath&apos;s chariot ever begins to move, a quieter — but equally essential — pastime unfolds. This is not a separate festival, disconnected from Ratha Yatra; it is the very first scene of the Ratha Yatra story. Before the Lord can journey to the Gundicha Temple and be reunited with His devotees in the mood of Vrindavana, His temporary home must be made ready to receive Him. And it was Sri Chaitanya Mahaprabhu Himself, five hundred years ago in Jagannath Puri, who showed the world exactly how that preparation should be done — not by delegating the work, but by picking up a broom Himself.</p>
                        <p>This pastime is called Gundicha Marjana, the cleansing of the Gundicha Temple, observed every year on the day before Ratha Yatra. It is one of the most cherished episodes in the life of Sri Chaitanya Mahaprabhu, recorded in loving detail by Srila Krishnadasa Kaviraja Gosvami in Sri Chaitanya-charitamrita, and it carries a teaching that goes far beyond temple maintenance: how to prepare one&apos;s own heart to receive the Lord.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="gundicha-temple">
                    <SectionHead num="02" title="The Gundicha Temple: The Lord's Garden House" />
                    <SectionImage 
                        src="/assets/blog/gundicha-marjana/gundicha-temple.jpg" 
                        alt="Gundicha Temple Puri, the Garden House of Lord Jagannath" 
                        caption="Gundicha Temple Puri, the Garden House of Lord Jagannath." 
                    />
                    <div className="sp-prose">
                        <p>The Gundicha Temple stands about three kilometers from the main Jagannath Temple (Shrimandira) in Puri, at the far end of the Bada Danda, the Grand Road along which the Ratha Yatra chariots travel. It is often called the Garden House of Lord Jagannath, since it stands amid an open garden enclosed by walls, in contrast to the densely built surroundings of the main temple.</p>
                        <p>Architecturally, the temple follows the Kalinga style of temple building, constructed in light-grey sandstone in the Deula tradition, with four main sections: the vimana (sanctum tower), jagamohana (assembly hall), nata mandapa (festival hall), and bhoga mandapa (hall of offerings).</p>
                        <p>The temple takes its name from Gundicha, the queen of King Indradyumna, the legendary devotee-king credited with establishing the worship of Lord Jagannath in Puri after a long search for the mystical form of Nila Madhava. It is in this temple, built in the queen&apos;s honor, that Lord Jagannath, Lord Balabhadra, and Devi Subhadra come to stay for seven days every year during Ratha Yatra — a visit that repeats, year after year, the Lord&apos;s original pastime of returning to a place of pure, simple devotion.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="cleaning-need">
                    <SectionHead num="03" title="Why the Temple Needs Cleaning" />
                    <div className="sp-prose">
                        <p>Apart from the seven days of Ratha Yatra, the Gundicha Temple remains empty for the rest of the year. Left open to the elements in the traditional style of Indian temple architecture, it naturally gathers dust, dirt, and debris over the months. So before Lord Jagannath&apos;s annual visit, the temple must be thoroughly cleaned and purified — made a fit and comfortable residence for the Supreme Lord.</p>
                        <p>This simple, practical necessity became the occasion for one of the most instructive pastimes of Sri Chaitanya Mahaprabhu&apos;s life in Puri.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="pastime">
                    <SectionHead num="04" title="The Pastime, As Recorded in Chaitanya-charitamrita" />
                    <div className="sp-prose">
                        <p>Srila Krishnadasa Kaviraja Gosvami devotes an entire chapter of Sri Chaitanya-charitamrita — Madhya-lila, Chapter 12 — to this single day&apos;s pastime, describing it in such loving detail that it remains one of the most cherished narratives in all of Gaudiya Vaishnava literature. What follows is a fuller account of that chapter, so that the depth and sweetness of the pastime is not lost in summary.</p>
                        
                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">Preparing for the Cleaning</h3>
                        <p>As the day of Ratha Yatra approached, Sri Chaitanya Mahaprabhu personally called for Kashi Mishra, the temple superintendent, and the great scholar Sarvabhauma Bhattacharya, and begged their permission to wash the Gundicha temple (Madhya-lila 12.72–73). The superintendent replied with deep humility that such labor was not really fitting service for the Lord, but that it would nonetheless be accepted as one of His pastimes, and he promised to supply everything required (12.74–77). True to his word, a hundred new water pots and a hundred brooms were delivered without delay (12.78).</p>
                        <p>Early the next morning, Sri Chaitanya Mahaprabhu gathered His personal associates and, with His own hand, applied sandalwood pulp to their bodies before the work began — a gesture of personal, loving attention to each devotee before the service itself even started. He then placed a broom in each devotee&apos;s hand Himself, and led the entire party to the Gundicha temple (12.79–80).</p>
                        
                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">The Sweeping</h3>
                        <p>The cleaning began with sweeping. Sri Chaitanya Mahaprabhu swept every part of the temple with great care, including the ceiling, and personally lifted the Lord&apos;s sitting place (simhasana) to clean beneath it before setting it back exactly in its place (12.81–83). Hundreds of devotees worked alongside Him throughout the temple grounds, while the Lord Himself moved through the work as though instructing by sheer example rather than by word (12.84).</p>
                        <p>Everyone chanted the holy name of Krishna continuously as they worked, and the Lord&apos;s own body, though transcendentally beautiful, became fully covered in the dust and dirt of the temple — a sight Krishnadasa Kaviraja Gosvami describes as itself a form of divine beauty (12.85–86). At certain moments, so intense was His absorption that tears fell from His eyes, and in some places He is described as having cleansed the floor with those very tears (12.86).</p>
                        <p>After the dust, straw, and sand were swept into a pile, Sri Chaitanya Mahaprabhu gathered it all into His own cloth and personally carried it outside the temple — a task the devotees then imitated, gathering their own collected dirt in their garments (12.87–89). The Lord playfully remarked that He could tell how hard each devotee had worked simply by looking at how much they had swept out (12.90) — and, in a touching detail, His own pile of collected dirt was noted to be far larger than anyone else&apos;s (12.91). The entire temple was then swept a second time, this time gathering even the finer dust and grains of sand that remained (12.92–94).</p>

                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">The Washing</h3>
                    </div>
                    <SectionImage 
                        src="/assets/blog/gundicha-marjana/devotees-sweeping.png" 
                        alt="Devotees sweeping and washing the Gundicha Temple during Gundicha Marjana" 
                        caption="Devotees sweeping and washing the Gundicha Temple during Gundicha Marjana." 
                    />
                    <div className="sp-prose">
                        <p>With the sweeping complete, a hundred men stood ready with filled water pots, awaiting the Lord&apos;s signal (12.95). The moment He called for water, all hundred pots were brought forward at once, and the washing began — the ceiling, walls, floor, and the Deity&apos;s sitting place were all thoroughly cleansed in turn (12.96–99). Devotees poured water into the Lord&apos;s own hands and over His feet as He worked, and in one especially tender detail, someone secretly drank the water that had washed His feet, while another begged for a share of it to give away in charity (12.101–102).</p>
                        <p>Sri Chaitanya Mahaprabhu was so absorbed in this seva that He removed the outer garment of His own sannyasa-dress and used it to mop the floors and polish the Deity&apos;s throne with His own hands (12.104). Krishnadasa Kaviraja Gosvami writes that once every room had been washed with the hundred pots, the minds of the devotees had themselves become as clean and clear as the temple rooms they had just cleansed (12.105) — and that the temple itself, now pure, cool, and radiant, appeared as though the Lord&apos;s own pure mind had taken physical form (12.106).</p>
                        <p>So many devotees were bringing water from the nearby lake that there was no longer any room to stand along its banks, and people began drawing water from a well instead (12.107–108). Throughout this entire process, the holy names of Krishna and Hari were the only words spoken — devotees requesting an empty pot or delivering a full one would simply chant &quot;Krishna! Krishna!&quot; to communicate, so that the work itself became a continuous kirtana (12.111–113). Krishnadasa Kaviraja Gosvami remarks that Sri Chaitanya Mahaprabhu, in His ecstatic absorption, appeared to be doing the work of a hundred men with a hundred hands (12.114–115).</p>

                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">Teaching Through Praise and Correction</h3>
                        <p>Throughout the cleaning, the Lord moved among the devotees, watching closely how each one worked. When someone worked well, He praised them and asked them to teach others to do the same; when someone worked carelessly, He corrected them at once, though never with any lingering displeasure (12.116–118). This combination of personal involvement, encouragement, and honest correction inspired every devotee present to give their fullest attention and effort to the task.</p>

                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">An Act of Humility: The Charanamrita Incident</h3>
                        <p>After the temple had been thoroughly washed within and without, a simple and sincere Vaishnava from Bengal approached and poured water over the Lord&apos;s lotus feet, then drank that water himself as caranamrita (12.122–123). Though Sri Chaitanya Mahaprabhu was inwardly pleased by his devotion, He displayed outward displeasure in order to uphold proper etiquette regarding the Deity&apos;s temple, remarking to Svarupa Damodara that he now did not know what would become of him because of this act (12.124–127). Svarupa Damodara then gently removed the devotee from the temple, but soon returned to ask the Lord&apos;s forgiveness on the devotee&apos;s behalf (12.128–129) — a small episode that illustrates how seriously proper conduct and humility are treated even in the midst of the most ecstatic devotional service.</p>

                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">After the Cleaning: Ecstatic Dancing</h3>
                    </div>
                    <SectionImage 
                        src="/assets/blog/gundicha-marjana/mahaprabhu-cleaning-2.png" 
                        alt="Sri Chaitanya Mahaprabhu personally cleaning the Gundicha Temple with devotees" 
                        caption="Sri Chaitanya Mahaprabhu personally cleaning the Gundicha Temple with devotees." 
                    />
                    <div className="sp-prose">
                        <p>Once the entire temple, along with the nearby Nrisimha temple, had been completely cleansed — even the roads outside the temple gate were found spotless, though no one could say exactly how — Sri Chaitanya Mahaprabhu rested briefly and then began to dance in ecstatic love, surrounded by the resounding kirtana of His devotees (12.133–137). Krishnadasa Kaviraja Gosvami describes how tears streamed from His eyes as He danced, falling upon the devotees around Him like monsoon rain, and how the earth itself seemed to shake with the force of His dancing (12.138–140).</p>
                        <p>During this outpouring of ecstasy, young Gopala, the son of Advaita Acharya, fainted while dancing and appeared not to be breathing, causing great alarm among the devotees, who began loudly chanting the name of Lord Nrisimha (12.144–147). Sri Chaitanya Mahaprabhu placed His hand on the boy&apos;s chest and called his name, and Gopala immediately regained consciousness, after which the kirtana resumed in full joy (12.148–149).</p>

                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">The Prasadam Feast</h3>
                        <p>After bathing in the nearby lake, Sri Chaitanya Mahaprabhu and His devotees were served a vast feast of prasadam — enough, it is said, for five hundred people — brought by Kashi Mishra and the temple superintendent (12.151–155). Many of the Lord&apos;s most intimate associates were present, and several small, sweet episodes unfolded during the meal: Svarupa Damodara and Jagadananda affectionately insisted the Lord accept the finest preparations, Haridasa Thakura humbly declined to sit among the assembled devotees out of deep humility, and Advaita Acharya and Nityananda Prabhu engaged in a loving, joking exchange as prasadam was distributed (12.160–197). Sri Chaitanya Mahaprabhu personally distributed the remnants of Lord Jagannath&apos;s own offered food to each devotee by name (12.187).</p>

                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">Netrotsava: The Joy of Seeing the Lord Again</h3>
                        <p>Krishnadasa Kaviraja Gosvami closes this pastime by noting that the very next day brought the festival of Netrotsava, when the devotees — who had been unable to see the Deity of Lord Jagannath throughout the Anavasara fortnight — were finally able to have His darshan again, filling their hearts with joy (12.204–205). He adds that simply hearing or reciting the pastime of the washing and cleansing of the Gundicha temple is enough to awaken Krishna consciousness even in the hearts of sinful men (12.221) — a statement that reflects why this pastime continues to be read and cherished by devotees every year, even those who live far from Puri and have never seen the Gundicha temple themselves.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="dvaraka-vrindavana">
                    <SectionHead num="05" title="Nilachala as Dvaraka-Kurukshetra, Gundicha as Vrindavana" />
                    <div className="sp-prose">
                        <p>For Sri Chaitanya Mahaprabhu, this was never simply a matter of hygiene. This symbolic understanding is itself described in Sri Chaitanya-charitamrita, Madhya-lila, Chapter 13, where Krishnadasa Kaviraja Gosvami explains the inner meaning Mahaprabhu perceived in the annual journey to Gundicha. In Krishna&apos;s original pastimes, after leaving Vrindavana, He resided in the opulent city of Dvaraka; it was only when He traveled to Kurukshetra during a solar eclipse that Radharani and the gopis of Vrindavana were able to meet Him again, and they longed to take Him back to the simplicity and intimacy of Vrindavana rather than remain amid Dvaraka&apos;s grandeur.</p>
                        <p>Sri Chaitanya Mahaprabhu saw this very pastime reflected in Ratha Yatra: the main Jagannath Temple at Nilachala corresponds to Dvaraka and Kurukshetra, the seat of Krishna&apos;s opulence and majesty, while the Gundicha Temple corresponds to Vrindavana, the abode of His most confidential and loving pastimes. Absorbed in the mood of Srimati Radharani, Mahaprabhu approached Ratha Yatra as the very pastime of drawing Krishna away from His opulent surroundings and back to the intimate love of Vrindavana.</p>
                        <p>Understood this way, Ratha Yatra becomes far more than a grand procession: it is Krishna, met at Kurukshetra, being lovingly drawn back to Vrindavana by those who cannot be satisfied with His opulence alone. And the cleaning of the Gundicha Temple, in this light, is the preparation of Vrindavana itself for that return — performed by Sri Chaitanya Mahaprabhu in the very mood of Srimati Radharani and Her friends lovingly preparing Their kunja to receive Krishna.</p>
                        <p>This is why Gundicha Marjana cannot be seen as a separate or minor event. It is the emotional and theological doorway into Ratha Yatra itself — without the Vrindavana mood established here, the Lord&apos;s arrival at Gundicha the next day would be only a procession, not a reunion.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="cleaning-heart">
                    <SectionHead num="06" title="Cleaning the Heart: Srila Prabhupada's Teaching" />
                    <div className="sp-prose">
                        <p>Sri Chaitanya Mahaprabhu Himself gave the key to understanding this pastime in the very first verse of His Shikshashtaka, recorded in Sri Chaitanya-charitamrita, Antya-lila 12.</p>
                    </div>
                    <div className="at-pull-quote">
                        <p>&quot;ceto-darpaṇa-mārjanaṁ bhava-mahā-dāvāgni-nirvāpaṇaṁ<br/>
                        śreyaḥ-kairava-candrikā-vitaraṇaṁ vidyā-vadhū-jīvanam<br/>
                        ānandāmbudhi-vardhanaṁ prati-padaṁ pūrṇāmṛtāsvādanaṁ<br/>
                        sarvātma-snapanaṁ paraṁ vijayate śrī-kṛṣṇa-saṅkīrtanam&quot;</p>
                        <cite>Glory to the Sri Krishna sankirtana, which cleanses the heart of all the dust accumulated for years and extinguishes the fire of conditional life, of repeated birth and death. <br/>— Sri Chaitanya-charitamrita, Antya-lila 20.12 (Shikshashtaka, Verse 1)</cite>
                    </div>
                    <div className="sp-prose">
                        <p>Srila Prabhupada frequently explained this verse using the analogy of a dust-covered mirror: just as a mirror covered in dust cannot show one&apos;s true reflection, the heart covered by lifetimes of material contamination cannot perceive its true, spiritual identity, or recognize the presence of the Lord within. Chanting the holy names, Srila Prabhupada taught, is the process by which this dust is gradually cleared away.</p>
                        <p>The cleaning of the Gundicha Temple is this same teaching made visible. Srila Prabhupada often pointed out that if one cleans the temple, one is cleaning one&apos;s own heart; if one polishes the Deity&apos;s paraphernalia, one is polishing one&apos;s own consciousness. The physical act of cleaning becomes, when performed in devotion, identical in spiritual effect to the chanting of Krishna&apos;s names — both are methods of clearing away the anarthas, the unwanted things, that cover the heart.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="leadership">
                    <SectionHead num="07" title="An Acharya's Example of Leadership" />
                    <div className="sp-prose">
                        <p>There is also a distinct lesson in leadership within this pastime. Sri Chaitanya Mahaprabhu did not merely instruct others to clean; He personally led by example, laboring alongside hundreds of devotees, praising sincere effort, and correcting carelessness without harboring any grudge against those He corrected. Chaitanya-charitamrita notes that a word of encouragement from Him was enough to inspire everyone present to work with full attention. This is presented as the ideal conduct of an acharya — a spiritual teacher who instructs not from a distance, but by personally engaging in the very service he asks of others.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="conclusion">
                    <SectionHead num="08" title="Conclusion" />
                    <div className="sp-prose">
                        <p>Gundicha Marjana is the opening chapter of the Ratha Yatra story, not a separate observance from it. Before Lord Jagannath&apos;s chariot can move, before the crowds can pull the ropes in ecstatic kirtana, the ground must be prepared — a preparation Sri Chaitanya Mahaprabhu Himself performed with broom, water, and tears of love.</p>
                        <p>For every devotee today, this pastime remains a living instruction: that receiving the Lord, whether in a temple or within one&apos;s own heart, begins with the humble, wholehearted work of cleaning away whatever does not belong there. As the Ratha Yatra season approaches each year, remembering Gundicha Marjana turns the festival from a spectacle witnessed from the outside into an invitation to prepare one&apos;s own heart, exactly as Mahaprabhu prepared Vrindavana to receive Krishna. Every year, on the day before Ratha Yatra, thousands of devotees from Puri and pilgrims from across the world gather at the Gundicha Temple to take part in this very tradition, sweeping and washing the temple exactly as Mahaprabhu and His associates once did.</p>
                    </div>
                </section>

                <Divider />

                {/* ── FAQ ── */}
                <section className="sp-section" id="faq">
                    <SectionHead num="09" title="Frequently Asked Questions" />
                    <FaqAccordion items={[
                            {
                                q: "What is Gundicha Marjana?",
                                a: "Gundicha Marjana is the ceremonial cleansing of the Gundicha Temple in Puri, performed the day before Ratha Yatra to prepare the temple for the arrival of Lord Jagannath, Lord Balabhadra, and Devi Subhadra. Sri Chaitanya Mahaprabhu personally performed this cleaning with hundreds of devotees five hundred years ago."
                            },
                            {
                                q: "When is Gundicha Marjana observed?",
                                a: "It is observed every year on the day immediately preceding Ratha Yatra, as part of the preparations for the Lord's week-long stay at the Gundicha Temple."
                            },
                            {
                                q: "Why does the Gundicha Temple need to be cleaned every year?",
                                a: "The temple stands empty for most of the year and, being open to the elements in traditional temple architecture, gathers dust and dirt. It must be thoroughly cleaned to be a fit residence for Lord Jagannath during His annual seven-day stay."
                            },
                            {
                                q: "What does ceto-darpana-marjanam mean?",
                                a: "It is the opening line of Sri Chaitanya Mahaprabhu's Shikshashtaka (Chaitanya-charitamrita, Antya-lila 20.12), meaning 'cleansing of the mirror of the heart.' It compares the heart to a dust-covered mirror that must be cleaned — through chanting the holy names — before one can perceive the Lord within."
                            },
                            {
                                q: "How is Gundicha Marjana connected to Ratha Yatra?",
                                a: "It is not a separate festival but the opening chapter of the Ratha Yatra story. In Sri Chaitanya Mahaprabhu's understanding, the main Jagannath Temple represents Dvaraka-Kurukshetra, and the Gundicha Temple represents Vrindavana. Cleansing the Gundicha Temple is the preparation of Vrindavana itself to receive Krishna, making Ratha Yatra a reunion, not merely a procession."
                            },
                            {
                                q: "Did Sri Chaitanya Mahaprabhu really clean the temple Himself?",
                                a: "Yes. According to Sri Chaitanya-charitamrita, Madhya-lila, Chapter 12, He personally swept, washed, and mopped the temple alongside hundreds of devotees, even using His own garment to clean the Deity's throne, and shed tears of love while doing so."
                            }
                        ]} />
                    <Divider />

                    {/* 09 References */}
                    <div id="references" className="sp-sec-block">
                        <SectionHead num="09" title="References" />
                        <ul className="list-disc pl-6 space-y-4 text-[#3D1A00] leading-relaxed">
                            <li>Sri Chaitanya-charitamrita, Madhya-lila, Chapter 12, "The Cleansing of the Gundicha Temple" — Srila Krishnadasa Kaviraja Gosvami, with purports by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada.</li>
                            <li>Niladri Mahodaya — temple-specific accounts of the preparations at the Gundicha Temple.</li>
                        </ul>
                    </div>

                    <Divider />
                </section>

                {/* 10 CONNECT WITH US */}
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
                    <a href="https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign" target="_blank" rel="noopener noreferrer" className="sp-connect-card">
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
        </div>
    )
}
