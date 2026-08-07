"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/FooterSection"
import "../sri-shyamananda-prabhu/styles.css"

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
                    <p className="at-hero-label">Festivals / Jagannath Ratha Yatra Series</p>
                    <h1 className="at-blog-title">
                        Snana Yatra:<br />
                        The Sacred Bathing Festival of Lord Jagannath
                    </h1>
                    <div className="at-hero-line" />
                    <p className="at-blog-subtitle">
                        And Its Deep Connection to Sri Chaitanya Mahaprabhu and the Gaudiya Vaishnava Tradition
                    </p>
                    <p className="at-blog-byline">
                        By <strong>HKM Chennai</strong>
                        {" "}— Dakshina Dwaraka Dham, Thiruvanmiyur
                    </p>
                    <div className="at-meta-row">
                        <span>📅 July 04, 2026</span>
                        <span>⏱ 7 min read</span>
                        <span>🏷 Festival</span>
                    </div>
                </header>

                {/* ── TABLE OF CONTENTS ── */}
                <nav className="sp-toc" aria-label="Table of Contents">
                    <h2 className="sp-toc-title">Table of Contents</h2>
                    <ol className="sp-toc-list">
                        <li><a href="#intro"><span className="sp-toc-num">01</span>Introduction</a></li>
                        <li><a href="#what-is-snana-yatra"><span className="sp-toc-num">02</span>What Is Snana Yatra?</a></li>
                        <li><a href="#scriptural-foundation"><span className="sp-toc-num">03</span>Scriptural Foundation</a></li>
                        <li><a href="#anavasara"><span className="sp-toc-num">04</span>Anavasara: When the Lord &quot;Falls Ill&quot;</a></li>
                        <li><a href="#alarnath-pastime"><span className="sp-toc-num">05</span>The Alarnath Pastime of Sri Chaitanya Mahaprabhu</a></li>
                        <li><a href="#why-this-matters"><span className="sp-toc-num">06</span>Why This Matters for Gaudiya Vaishnavas</a></li>
                        <li><a href="#netrotsava"><span className="sp-toc-num">07</span>Netrotsava: The Lord&apos;s Reappearance</a></li>
                        <li><a href="#snana-yatra-iskcon-chennai"><span className="sp-toc-num">08</span>Snana Yatra and Srila Prabhupada&apos;s ISKCON Thiruvanmiyur</a></li>
                        <li><a href="#conclusion"><span className="sp-toc-num">09</span>Conclusion</a></li>
                        <li><a href="#faq"><span className="sp-toc-num">10</span>Frequently Asked Questions</a></li>
                        <li><a href="#references"><span className="sp-toc-num">11</span>References</a></li>
                        <li><a href="#connect"><span className="sp-toc-num">12</span>Connect With Us</a></li>
                    </ol>
                </nav>

                <Divider />

                <section className="sp-section" id="intro">
                    <div className="sp-prose">
                        <p>Snana Yatra is the annual bathing festival of Lord Jagannath, Lord Balabhadra, and Devi Subhadra, observed on the full moon day of Jyeshtha (May–June) at the Jagannath Temple in Puri. Also known as Deva Snana Purnima, it marks the only day of the year when the deities leave the temple&apos;s inner sanctum to be publicly bathed — and it opens a fortnight of pastimes that carries profound meaning for followers of Sri Chaitanya Mahaprabhu.</p>
                        <p>It is a festival of grand opulence, tender human-like pastimes, and deep separation — all held together in a single sequence of divine lila that unfolds over the following fortnight. For devotees in the line of Sri Chaitanya Mahaprabhu, Snana Yatra is far more than a temple ritual observed in a distant city; it is the opening chapter of a story that carries some of the most touching displays of ecstatic devotion recorded in Gaudiya Vaishnava literature.</p>
                    </div>
                </section>

                <section className="sp-section" id="what-is-snana-yatra">
                    <SectionHead num="02" title="What Is Snana Yatra?" />
                    <SectionImage 
                        src="/assets/blog/snana-yatra/bathing.jpg.jpeg" 
                        alt="Lord Jagannath, Balabhadra and Subhadra being ceremonially bathed during Snana Yatra at Puri" 
                        caption="Lord Jagannath, Balabhadra and Subhadra being ceremonially bathed during Snana Yatra at Puri." 
                    />
                    <div className="sp-prose">
                        <p>Snana Yatra, also called Deva Snana Purnima or Jyeshtha Abhisheka, is observed on Jyeshtha Purnima. On this day alone, the deities are brought out of the temple&apos;s inner sanctum to a specially constructed bathing platform called the Snana Bedi (or Snana Mandapa), where every devotee — including those who cannot normally approach the sanctum — is able to have darshan.</p>
                        <p>It is not only the well-known trinity of Jagannath, Balabhadra, and Subhadra who receive this sacred bath. Two additional deities are bathed alongside Them: Sudarshana Chakra, the Lord&apos;s personal weapon and protector, worshipped in His own deity form, and Madanmohana, a small deity of Krishna who accompanies the main trinity in many of Puri&apos;s rituals and processions. Together, these five forms are ceremonially bathed on the Snana Bedi, making Snana Yatra a festival of the complete Jagannath pancha-devata, not the trinity alone.</p>
                        <p>Before the ceremony begins, the deities are carried from the sanctum to the Snana Bedi in a procession known as Pahandi Bije, accompanied by the sounding of conches, the beating of drums, and the chanting of the holy names. The bathing itself is performed with 108 pots of water drawn from a sacred well within the temple compound, ceremonially purified and mixed with sandalwood pulp, camphor, fragrant flowers, and medicinal herbs. Priests chant Vedic mantras throughout, and the entire compound resounds with kirtana as the water is poured over the deities, pot by pot.</p>
                        
                        <SectionImage 
                            src="/assets/blog/snana-yatra/gajanana-vesha.jpeg" 
                            alt="Traditional depiction of Lord Jagannath in Gajanana Vesha, elephant form, after Snana Yatra" 
                            caption="Traditional depiction of Lord Jagannath in Gajanana Vesha, elephant form, after Snana Yatra." 
                        />
                        <p>Following the bath, Lord Jagannath and Lord Balabhadra are adorned in Gajanana Vesha — dressed to resemble Lord Ganesha, with elephant-like headgear — while Subhadra is decorated in a lotus-flower vesha. This distinctive dress is tied to a well-known pastime involving a devotee of Lord Ganesha who initially refused to see Jagannath, only to behold Him in this very form and thereby recognise that all forms of Godhead rest within Him.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="scriptural-foundation">
                    <SectionHead num="03" title="Scriptural Foundation" />
                    <div className="sp-prose">
                        <p>The authority for Snana Yatra is traced principally to the Skanda Purana, in its section glorifying Purushottama Kshetra (Puri). This portion of the Purana describes how the ritual was first instituted by King Indradyumna, the legendary monarch credited with establishing the Jagannath deities after they were carved from a sacred log of neem wood — the Daru Brahma — by a celestial artisan believed to be Vishwakarma himself.</p>
                        <p>The Purana also declares that simply witnessing or even hearing about Snana Yatra bestows spiritual merit comparable to a great pilgrimage, and that this day marks the very appearance (birth) anniversary of Lord Jagannath. A later, temple-specific text, the Niladri Mahodaya, elaborates further on the precise sequence of rituals, including the Anavasara period that follows.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="anavasara">
                    <SectionHead num="04" title="Anavasara: When the Lord 'Falls Ill'" />
                    <div className="sp-prose">
                        <p>Immediately after the grand bath, something remarkable happens: the deities disappear from public view for a full fortnight. This period is called Anavasara (also spelled Anasara), meaning literally &quot;no opportunity for darshan.&quot; According to temple tradition, the deities are believed to catch a fever from the extensive bathing and are moved to a private chamber — variously called the Anasara Pindi or Ratan Vedi — where they are attended by temple physicians (Vaidyas) who administer herbal preparations and light, medicinal foods instead of the usual elaborate offerings.</p>
                        <p>On a practical level, this fortnight is when the natural pigments on the wooden deities, which fade during the bath, are traditionally restored by the temple&apos;s hereditary painters — a process called Nava Yauvana, or &quot;renewed youth.&quot; In place of darshan of the deities themselves, devotees during this period worship a set of cloth paintings called Anasara Patti, which depict the trinity in their mood of Ananta Narayana, Bhuvaneshwari, and Shesha Naga.</p>
                        <p>For devotees, the theological heart of Anavasara is not the physical explanation but the emotional one: the Lord&apos;s temporary absence is what makes the fortnight before Ratha Yatra a period of intense longing (viraha) — a longing that transforms the eventual reunion at Ratha Yatra into an experience of overwhelming joy.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="alarnath-pastime">
                    <SectionHead num="05" title="The Alarnath Pastime of Sri Chaitanya Mahaprabhu" />
                    
                    <div className="sp-prose">
                        <p>It is in this fortnight of separation that one of the most poignant episodes in the life of Sri Chaitanya Mahaprabhu unfolds — an episode recorded by Srila Krishnadasa Kaviraja Gosvami in Sri Chaitanya-charitamrita, Madhya-lila, Chapter 11.</p>
                    </div>

                    <div className="at-pull-quote">
                        <p className="italic text-center font-serif text-[#ea580c] mb-4">
                            snāna-yātrā dekhi&apos; prabhura hailā baḍa sukha<br/>
                            īśvarera &apos;anavasare&apos; pāila baḍa duḥkha
                        </p>
                        <p>
                            Upon seeing the bathing ceremony of Lord Jagannatha, Sri Chaitanya Mahaprabhu became very happy. But when Lord Jagannatha retired after the ceremony, Lord Chaitanya became very unhappy, because He could no longer see Him.
                        </p>
                        <cite>— Sri Chaitanya-charitamrita, Madhya-lila 11.62</cite>
                    </div>

                    <SectionImage 
                        src="/assets/blog/snana-yatra/1shreealarnath.jpeg" 
                        alt="Sri Chaitanya Mahaprabhu in ecstasy at the Alarnath temple during Anavasara" 
                        caption="Sri Chaitanya Mahaprabhu would be in ecstasy at the Alarnath temple during Anavasara period." 
                    />

                    <div className="sp-prose">
                        <p>Unable to bear the Lord&apos;s absence, Mahaprabhu — who throughout His Puri pastimes remained absorbed in the mood of Srimati Radharani in separation from Krishna — left Jagannath Puri and walked nearly fourteen miles on foot to a place called Alalanatha, also known as Alarnath, in the area of Brahmagiri. There, in a temple housing a four-armed form of Lord Vishnu, He sought some relief for His unbearable feelings of separation.</p>
                        <p>What happened there is described as nothing short of miraculous. When Mahaprabhu offered His obeisances, prostrating Himself fully upon the stone floor in ecstatic love, the stone is said to have melted beneath Him, taking the impression of His entire body — an imprint still shown to pilgrims today and worshipped as the Prema Shila. Some accounts also describe that the intensity of His mood affected the very form of the Deity there, whose extra pair of arms is said to have disappeared, leaving a two-armed form of Shyamasundara.</p>
                        <p>Since that time, it has become a living tradition among Gaudiya Vaishnavas to visit Alarnath specifically during the Anavasara fortnight, performing kirtana and bhajana at the very place sanctified by Mahaprabhu&apos;s tears of separation. In this way, Snana Yatra is not merely a Puri-based festival for followers of Sri Chaitanya Mahaprabhu — it is the doorway into one of the deepest instructions of Gaudiya theology: that separation from the Lord (vipralambha), when felt in pure devotion, is itself a form of the highest ecstasy, not a state to be avoided.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="why-this-matters">
                    <SectionHead num="06" title="Why This Matters for Gaudiya Vaishnavas" />
                    <div className="sp-prose">
                        <ul className="space-y-4">
                            <li><strong>Jagannath Puri is described in the Gaudiya tradition as vipralambha-dhama</strong> — the abode of divine separation — and Snana Yatra through Anavasara is the period when this mood is most palpable.</li>
                            <li><strong>Lord Jagannath is understood in this tradition as Krishna Himself</strong>, feeling separation from Srimati Radharani and the residents of Vrindavana even while seated on His opulent throne in Puri.</li>
                            <li><strong>Sri Chaitanya Mahaprabhu&apos;s pastimes during this fortnight model</strong>, for every devotee, how longing for the Lord&apos;s darshan should feel — not as mere ritual deprivation, but as an intensification of love.</li>
                            <li><strong>The eventual reunion at Ratha Yatra</strong>, when the Lord finally comes out on His chariot, is understood by Gaudiya Vaishnavas as a re-enactment of Krishna returning to Vrindavana — with Mahaprabhu, in the mood of Radharani, bringing Krishna back to the hearts of the residents of Vraja.</li>
                        </ul>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="netrotsava">
                    <SectionHead num="07" title="Netrotsava: The Lord's Reappearance" />
                    <div className="sp-prose">
                        <p>At the close of the fifteen-day Anavasara period, the newly repainted deities are unveiled to the public once again in a festival called Netrotsava, or Nava Yauvana Darshan — literally, the &quot;festival of the eyes,&quot; celebrating the first glimpse of the Lord&apos;s freshly restored form. This joyous reappearance sets the stage for Ratha Yatra itself, when the deities finally emerge from the temple and mount Their chariots for the journey to the Gundicha Temple.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="snana-yatra-iskcon-chennai">
                    <SectionHead num="08" title="Snana Yatra and Srila Prabhupada's ISKCON Thiruvanmiyur" />
                    <div className="sp-prose">
                        <p>Srila Prabhupada&apos;s ISKCON Thiruvanmiyur (Dakshina Dwaraka Dham), on the Bay of Bengal seafront in Chennai, does not currently have Jagannath, Balabhadra, and Subhadra deities installed, and so Snana Yatra is not observed here as a temple ceremony the way it is in Puri. There is no local bathing ritual, Snana Bedi, or Anavasara period to announce.</p>
                        <p>What does travel from Puri to Chennai, however, is the teaching at the heart of this festival. The longing Sri Chaitanya Mahaprabhu felt at Alarnath, and the truth that separation from the Lord can itself become an offering of love, are as relevant to a devotee chanting on Elliot&apos;s Beach as to a pilgrim in Odisha. Devotees at ISKCON Thiruvanmiyur who wish to mark this season are warmly encouraged to do so through japa, kirtana, and reading this very pastime from Sri Chaitanya-charitamrita, Madhya-lila 11, rather than through a physical ceremony that the temple&apos;s deity worship does not include.</p>
                        <p>As His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada consistently taught, the essence of festivals such as this lies not in ritual alone but in remembering Krishna&apos;s pastimes with the heart — a remembrance any devotee, anywhere, can enter into.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="conclusion">
                    <SectionHead num="09" title="Conclusion" />
                    <div className="sp-prose">
                        <p>Snana Yatra, though it is only a single day&apos;s ceremony, opens an entire cycle of pastimes — bathing, illness, seclusion, longing, and joyous reunion — that mirrors the deepest truths of Krishna consciousness: that the Lord, though supremely opulent, willingly exhibits human-like feelings out of love for His devotees, and that separation from Him, far from being an obstacle, can become the very fuel of devotion when experienced in the mood shown by Sri Chaitanya Mahaprabhu Himself.</p>
                        <p>As the festival season begins each year, remembering this connection transforms Snana Yatra from a distant temple event in Puri into a living, personal invitation to feel — even in a small way — the same longing that carried Mahaprabhu, barefoot, fourteen miles down the coast to Alarnath.</p>
                        <p><em>Hare Krishna. To continue following this pastime through to its joyous conclusion, read our companion article on Ratha Yatra — the Festival of the Chariots — where the Lord finally returns to His devotees.</em></p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="faq">
                    <SectionHead num="10" title="Frequently Asked Questions" />
                    <FaqAccordion
                        items={[
                            {
                                q: "When is Snana Yatra?",
                                a: "Snana Yatra falls on Jyeshtha Purnima, the full moon day of the lunar month of Jyeshtha. Because this is a lunar date, it shifts each year on the Gregorian calendar, so devotees should check the temple's current Vaishnava calendar for this year's exact date.",
                            },
                            {
                                q: "What is Anavasara?",
                                a: "Anavasara (also spelled Anasara) is the fifteen-day period following Snana Yatra during which Lord Jagannath, Balabhadra, and Subhadra are withdrawn from public darshan while Their pigments are traditionally restored. Temple tradition describes this as the Lord catching a fever from the bathing.",
                            },
                            {
                                q: "Why does the Jagannath Temple close for 15 days after Snana Yatra?",
                                a: "The temple does not fully close, but the deities are moved out of public view during Anavasara so that their pigments can be restored by hereditary painters. Devotees worship cloth paintings called Anasara Patti in Their place until Netrotsava.",
                            },
                            {
                                q: "Why does Chaitanya Mahaprabhu go to Alarnath during this period?",
                                a: "Unable to bear separation from Lord Jagannath during Anavasara, Sri Chaitanya Mahaprabhu walked roughly fourteen miles to the Alarnath temple in Brahmagiri, where His ecstatic obeisances are said to have left an imprint in stone, the Prema Shila, an event recorded in Sri Chaitanya-charitamrita, Madhya-lila 11.",
                            },
                            {
                                q: "Does Srila Prabhupada's ISKCON Thiruvanmiyur celebrate Snana Yatra?",
                                a: "Not as a temple ceremony, since ISKCON Thiruvanmiyur does not have Jagannath, Balabhadra, and Subhadra deities installed. The pastime and its teachings on divine separation remain part of the temple's devotional and educational content during this season.",
                            },
                        ]}
                    />
                </section>

                <Divider />

                {/* 11 References */}
                <div id="references" className="sp-sec-block">
                    <SectionHead num="11" title="References" />
                    <ul className="list-disc pl-6 space-y-4 text-[#3D1A00] leading-relaxed">
                        <li>Skanda Purana, Purushottama-kshetra Mahatmya section — origin of Snana Yatra and King Indradyumna.</li>
                        <li>Niladri Mahodaya — ritual details of the Anasara period at the Jagannath Temple, Puri.</li>
                        <li>Sri Chaitanya-charitamrita, Madhya-lila, Chapter 11 (verses 62–63 and surrounding narrative) — Srila Krishnadasa Kaviraja Gosvami, with purports by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada.</li>
                        <li>Sri Chaitanya-charitamrita, Madhya-lila, Chapter 9 (verses 147–150) — background on the four-armed Vishnu form and its connection to Krishna's rasa-lila.</li>
                    </ul>
                </div>

                <Divider />

                {/* 12 CONNECT WITH US */}
                <div className="sp-connect-header" id="connect">
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

                <Divider />

                <section className="sp-section" id="references">
                    <div className="sp-prose text-gray-500">
                        <strong>References:</strong>
                        <ul className="list-disc pl-5 mt-2">
                            <li>Skanda Purana, Purushottama-kshetra Mahatmya section — origin of Snana Yatra and King Indradyumna.</li>
                            <li>Niladri Mahodaya — ritual details of the Anasara period at the Jagannath Temple, Puri.</li>
                            <li>Sri Chaitanya-charitamrita, Madhya-lila, Chapter 11 (verses 62–63 and surrounding narrative) — Srila Krishnadasa Kaviraja Gosvami, with purports by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada.</li>
                            <li>Sri Chaitanya-charitamrita, Madhya-lila, Chapter 9 (verses 147–150) — background on the four-armed Vishnu form and its connection to Krishna&apos;s rasa-lila.</li>
                        </ul>
                    </div>
                </section>

            </article>
            <Footer />
        </main>
    )
}
