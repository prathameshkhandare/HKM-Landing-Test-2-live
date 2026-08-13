'use client';

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import Link from "next/link";
import './styles.css';

const Divider = () => (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '3rem 0' }}>
        <div style={{ width: '80px', height: '2px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
    </div>
);

const SectionHead = ({ num, title }: { num: string; title: string }) => (
    <div className="sp-sec-head">
        <span className="sp-sec-num">{num}</span>
        <h2 className="sp-sec-title">{title}</h2>
    </div>
);

const SubSectionHead = ({ title }: { title: string }) => (
    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#b45309] mt-8 mb-4 italic">
        {title}
    </h3>
);

const SectionImage = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
    <div className="sp-sec-image-wrap">
        <img src={src} alt={alt} />
        <span className="sp-sec-caption">{caption}</span>
    </div>
);

const VerseBlock = ({ children, citation }: { children: React.ReactNode; citation?: string }) => (
    <div className="my-6 p-6 sm:p-7 rounded-r-xl bg-[#fff8ea] text-[#3D1A00] text-center font-serif text-lg sm:text-xl leading-relaxed shadow-sm border-l-4 border-l-[#C9A84C] border border-[#C9A84C]/30">
        <p className="italic">{children}</p>
        {citation && (
            <p className="mt-3 text-xs uppercase tracking-widest text-[#b45309] font-sans font-semibold">
                — {citation}
            </p>
        )}
    </div>
);

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
);

function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div key={item.question} style={{ border: '1px solid rgba(201,168,76,0.3)', borderRadius: '0.75rem', overflow: 'hidden', transition: 'all 0.3s ease' }}>
                        <button onClick={() => setOpenIndex(isOpen ? null : index)} style={{ width: '100%', background: '#3D1A00', padding: '0.85rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', border: 'none', textAlign: 'left' }}>
                            <p style={{ fontFamily: 'serif', fontWeight: 600, color: '#FDF6E3', margin: 0, fontSize: '1.15rem', paddingRight: '1rem' }}>{item.question}</p>
                            <span style={{ color: '#C9A84C', fontSize: '1.5rem', transition: 'transform 0.3s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                        </button>
                        <div style={{ background: '#fff', padding: isOpen ? '1.25rem 1.25rem' : '0 1.25rem', maxHeight: isOpen ? '1000px' : '0', overflow: 'hidden', transition: 'all 0.3s ease', opacity: isOpen ? 1 : 0 }}>
                            <p style={{ color: '#3D1A00', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>{item.answer}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

const quickFacts = [
  { label: "Festivals", value: "Bahuda Yatra (the return chariot journey) and Suna Besha (the golden attire), also called Raja Besha or Rajarajeshwara Besha" },
  { label: "When Celebrated", value: "Bahuda Yatra falls on the ninth day of the Ratha Yatra festival, after the deities have spent seven days at the Gundicha Temple. Suna Besha follows the very next day, on Ashadha Shukla Ekadashi" },
  { label: "Meaning of the Names", value: "“Bahuda” simply means “return” (also called Ulta Ratha, the “reverse chariot”). “Suna” means gold and “Besha” means attire or costume" },
  { label: "Central Figures", value: "Lord Jagannath, Balabhadra, and Subhadra; the Gajapati King of Puri; and, in Suna Besha's history, King Kapilendra Deva" },
  { label: "Where It Happens", value: "Along the Grand Road (Bada Danda) between the Gundicha Temple and Srimandir, with a stop at the Mausi Maa Temple; Suna Besha itself takes place on the three chariots parked at Singhadwara (the Lion's Gate)" },
  { label: "Historical Root", value: "Suna Besha traces to 1460 CE, during the reign of King Kapilendra Deva, and is recorded in temple chronicles such as the Madala Panji" },
  { label: "Connection to Ratha Yatra", value: "Bahuda Yatra completes the nine-day festival cycle and directly fulfils the three-day promise Jagannath made to Goddess Lakshmi at Hera Panchami" }
];

const faqData = [
  { question: "How many days do the deities stay at the Gundicha Temple?", answer: "Seven days. They travel to Gundicha on day one of the festival and begin the return journey, Bahuda Yatra, on day nine." },
  { question: "What does Bahuda Yatra mean?", answer: "“Bahuda” means “return.” It refers to the chariots travelling back from the Gundicha Temple to the main Jagannath Temple, and is also called Ulta Ratha, the reverse chariot." },
  { question: "Why is the Gundicha Temple named after Queen Gundicha?", answer: "Queen Gundicha was the consort of King Indradyumna, the king credited with establishing the first Jagannath Temple at Puri. When the deities were first manifested, Queen Gundicha was so moved by their beauty that she requested the king to build a second temple and begin the Ratha Yatra festival so the Lord could come out and meet His devotees. Lord Jagannath was pleased by her devotion and promised to visit her temple annually. That promise is kept every Ratha Yatra, and the temple carries her name in her honour." },
  { question: "Is the Gundicha Temple Jagannath's birthplace?", answer: "Yes, in an important sense. The Gundicha Temple stands on the site of the Mahavedi — the sacred ground where the deities first appeared during King Indradyumna's thousand Ashwamedha Yajnas. The Skanda Purana (Utkala Khanda, Chapter 29) records Lord Jagannath Himself declaring: ‘The place called Gundicha Mandapa is where I first manifested. There is no holier place on this Earth than this.’ This is why the Lord's departure from Gundicha on Bahuda Yatra carries such tender weight — He is leaving His own birthplace." },
  { question: "What is Adapa Darshan, and why is it special?", answer: "Adapa Darshan is the name given to the darshan of Lord Jagannath during His seven-day stay at the Gundicha Temple. The Niladri Mahodaya states that the spiritual merit of one day's Adapa Darshan equals ten years of regular darshan at the main Jagannath Temple. The seven-day stay is known as the Mahavedi Mahotsav — the festival of the sacred original altar — and is considered one of the most auspicious periods in the entire Jagannath calendar. The evening darshan on any of those seven days is held to multiply that benefit tenfold." },
  { question: "Is the Gundicha Temple empty the rest of the year?", answer: "Yes. The Gundicha Temple has no resident deities and no regular worship outside the nine days of Ratha Yatra. The complex is maintained throughout the year, but the sanctum itself stands empty — for 356 days — solely in readiness for the Lord's annual visit." },
  { question: "Can non-Hindus visit the Gundicha Temple during Ratha Yatra?", answer: "Non-Hindus are barred from entering the temple structure itself, but are traditionally permitted to walk within the surrounding garden and grounds during the Ratha Yatra period, subject to respectful dress and conduct. Visitors should confirm current entry rules with the temple administration before travelling." },
  { question: "Why does the chariot stop at the Mausi Maa Temple?", answer: "Local tradition holds that this temple belongs to Jagannath's maternal aunt, who once sheltered Subhadra and fed the family in a time of hardship. Every year, Jagannath's chariot stops here to be offered Poda Pitha, one of His favourite simple foods." },
  { question: "Why is Balabhadra's chariot pulled before Jagannath's on the return journey?", answer: "This mirrors the pastime in which Balarama and Subhadra travel ahead to prepare Vrindavana for Krishna's return, while Krishna Himself needs more time and help before He is ready to leave — so His chariot always follows theirs." },
  { question: "What is Suna Besha?", answer: "Suna Besha, meaning “Golden Attire,” is the day after Bahuda Yatra when Jagannath, Balabhadra, and Subhadra are dressed in gold ornaments weighing over 200 kilograms while still seated on Their chariots outside the temple." },
  { question: "Why did Suna Besha begin?", answer: "Temple tradition credits King Kapilendra Deva, who in 1460 CE donated a vast fortune in gold won in war to Lord Jagannath. A temple servitor, Tadhau Karana, suggested the ornaments be shown on the chariots outside the temple so that everyone, regardless of background, could see them — and the king agreed." },
  { question: "Does ISKCON Thiruvanmiyur celebrate Bahuda Yatra or Suna Besha?", answer: "Not as physical ceremonies, since the temple does not currently have Jagannath, Balabhadra, and Subhadra deities installed. Both are shared here as devotional history and teaching." }
];

const references = [
  "Sri Chaitanya-charitamrita, Madhya-lila, Chapter 1 (verses 46–49, 134–135) — records Sri Chaitanya Mahaprabhu's yearly attendance at Ratha Yatra and His instruction that devotees return every year to see the Gundicha festival.",
  "Sri Chaitanya-charitamrita, Madhya-lila, Chapter 12 — records Sri Chaitanya Mahaprabhu personally cleaning the Gundicha Temple, including the detail of Him weeping while cleaning.",
  "The timing of Bahuda Yatra (day nine of the festival, after seven days at Gundicha) and its rituals (Dakshina Moda, Goti Pahandi, Chhera Pahara, the order of the three chariots) are confirmed across multiple independent sources, including Odisha Tourism's official website.",
  "The Mausi Maa Temple, the begging/Ardhasini legend, and the Poda Pitha offering are confirmed across numerous independent temple and heritage sources.",
  "Suna Besha's origin with King Kapilendra Deva in 1460 CE, the gold's source in his military campaigns, and the role of the servitor Tadhau Karana are confirmed across multiple independent sources, including the Madala Panji temple chronicle.",
  "Queen Gundicha's identity as Indradyumna's queen and her role in founding both the Gundicha Temple and the Ratha Yatra festival: confirmed across official tourism and temple heritage records.",
  "The Mahavedi / birthplace tradition and the Ashwamedha Yajna ground: confirmed in ISKCON Desire Tree and Gaudiya Vaishnava historical literature.",
  "Skanda Purana, Utkala Khanda, Chapter 29, verses 34–35 (Lord Jagannath declares the Gundicha Mandapa the holiest place on earth): cited and translated in Jagannath scholarship.",
  "Adapa Darshan, the ten-years-in-one-day merit claim, and the Mahavedi Mahotsav: confirmed in Niladri Mahodaya and Gaudiya Treasures of Bengal.",
  "Year-round emptiness of Gundicha: confirmed in Puri temple guidebooks and regional chronicles.",
  "Sundarachala / Garden House: confirmed in historical records of Puri pilgrimage sites."
];

export default function BlogClient() {
    const PAGE_URL = "https://hkmchennai.org/blog/bahuda-yatra-suna-besha-jagannath";
    const PAGE_DESCRIPTION = "Discover Bahuda Yatra, Lord Jagannath's return journey, and Suna Besha, His golden attire — their story, rituals, and Chaitanya Mahaprabhu connection.";

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Bahuda Yatra & Suna Besha: Lord Jagannath's Journey Home and Golden Return",
        description: PAGE_DESCRIPTION,
        datePublished: "2026-07-30",
        dateModified: "2026-07-30",
        author: {
            "@type": "Organization",
            name: "Srila Prabhupada's ISKCON Thiruvanmiyur — Dakshina Dwaraka Dham",
            url: "https://hkmchennai.org",
        },
        publisher: {
            "@type": "Organization",
            name: "Srila Prabhupada's ISKCON Thiruvanmiyur — Dakshina Dwaraka Dham",
        },
        mainEntityOfPage: PAGE_URL,
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqData.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
    };

    return (
        <div className="min-h-screen bg-[#FFF9F0] selection:bg-[#c9973a] selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            <Navbar />
            <article className="at-blog-wrap">
                <header className="at-blog-header">
                    <p className="at-hero-label">HKM Chennai — Dakshina Dwaraka Dham · Jagannath Ratha Yatra Series</p>
                    <h1 className="at-blog-title">Bahuda Yatra &amp; Suna Besha</h1>
                    <div className="at-hero-line" />
                    <p className="at-blog-subtitle">
                        <strong>Lord Jagannath’s Journey Home and Golden Return:</strong> After seven days away, Jagannath comes home — and the very next day, He comes home dressed like the King of the whole universe.
                    </p>
                    <p className="at-blog-byline">
                        By <strong>HKM Chennai</strong> — Dakshina Dwaraka Dham, Thiruvanmiyur
                    </p>
                </header>

                <nav className="sp-toc" aria-label="Table of Contents">
                    <h2 className="sp-toc-title">Table of Contents</h2>
                    <ol className="sp-toc-list">
                        <li><a href="#quick-facts"><span className="sp-toc-num">01</span>Quick Facts</a></li>
                        <li><a href="#what-is-bahuda-yatra"><span className="sp-toc-num">02</span>What Is Bahuda Yatra?</a></li>
                        <li><a href="#why-celebrated"><span className="sp-toc-num">03</span>Why Is Bahuda Yatra Celebrated?</a></li>
                        <li><a href="#gundicha-temple"><span className="sp-toc-num">04</span>The Gundicha Temple & Its Secrets</a></li>
                        <li><a href="#how-observed"><span className="sp-toc-num">05</span>How Bahuda Yatra Is Observed</a></li>
                        <li><a href="#what-is-suna-besha"><span className="sp-toc-num">06</span>What Is Suna Besha?</a></li>
                        <li><a href="#chaitanya-connection"><span className="sp-toc-num">07</span>Sri Chaitanya Mahaprabhu's Connection</a></li>
                        <li><a href="#prabhupada-teaching"><span className="sp-toc-num">08</span>Srila Prabhupada's Teaching</a></li>
                        <li><a href="#living-tradition"><span className="sp-toc-num">09</span>Living Tradition Today</a></li>
                        <li><a href="#conclusion"><span className="sp-toc-num">10</span>Conclusion</a></li>
                        <li><a href="#faqs"><span className="sp-toc-num">11</span>Frequently Asked Questions</a></li>
                        <li><a href="#references"><span className="sp-toc-num">12</span>References</a></li>
                    </ol>
                </nav>

                <div className="sp-content-body">
                    <div id="quick-facts" className="sp-sec-block">
                        <SectionHead num="01" title="Quick Facts" />
                        <QuickFacts facts={quickFacts} />
                    </div>
                    <Divider />

                    <div id="what-is-bahuda-yatra" className="sp-sec-block">
                        <SectionHead num="02" title="What Is Bahuda Yatra?" />
                        <SectionImage 
                            src="/assets/blog/bahuda-yatra-suna-besha-jagannath/Lord Jagannath’s chariot Nandighosha during Bahuda Yatra return journey.jpeg" 
                            alt="Lord Jagannath's chariot Nandighosha during Bahuda Yatra return journey" 
                            caption="Lord Jagannath's chariot Nandighosha during Bahuda Yatra return journey"
                        />
                        <p>
                            Bahuda Yatra is the return journey of Ratha Yatra — the day Lord Jagannath, His elder brother Balabhadra, and His sister Subhadra travel back from the Gundicha Temple to Their own sanctum at Srimandir. The word <em>bahuda</em> simply means &ldquo;return.&rdquo; Devotees also call it Ulta Ratha, the &ldquo;reverse chariot.&rdquo;
                        </p>
                        <p>
                            The timing matters here, so it&rsquo;s worth being precise: the deities travel to Gundicha on the very first day of the festival, spend seven days there as honoured guests, and then begin the journey home on the ninth day overall. That ninth day is Bahuda Yatra. The very next day — Ashadha Shukla Ekadashi — brings Suna Besha, when the deities are dressed in gold from head to toe while still seated on their chariots outside the temple.
                        </p>
                    </div>
                    <Divider />

                    <div id="why-celebrated" className="sp-sec-block">
                        <SectionHead num="03" title="Why Is Bahuda Yatra Celebrated? The Story Behind the Homecoming" />
                        <p>
                            Every year, Jagannath, Balabhadra, and Subhadra leave Their own temple and spend time at Gundicha — a place devotees think of as standing in for Vrindavana, and also, in local tradition, as the home of Their maternal aunt. It is the one time all year the deities leave the inner sanctum of Srimandir and come close enough for every devotee, of any background, to have Their darshan.
                        </p>
                        <p>
                            This homecoming carries an emotional thread that started five days earlier, at <Link href="/blog/hera-panchami" className="text-[#b45309] font-bold hover:underline">Hera Panchami</Link>, when Goddess Lakshmi went to Gundicha herself, upset that Jagannath had not returned as promised. On that day, Jagannath&rsquo;s representative offered her an <strong>Agyan Mala</strong> — a garland carrying His assurance that He would return within three days. Bahuda Yatra is that very promise being kept. The Lord who once made Lakshmi wait finally comes home.
                        </p>
                    </div>
                    <Divider />

                    <div id="gundicha-temple" className="sp-sec-block">
                        <SectionHead num="04" title="The Gundicha Temple: What It Really Is, and What the Lord Does There" />
                        <p>
                            Before following the Lord on His homeward journey, it is worth pausing to understand the place He is leaving. The blog has so far mentioned Gundicha as a stand-in for Vrindavana and as a maternal aunt&rsquo;s home. Both of those are true — but they are only part of the picture. The Gundicha Temple carries a significance that goes deeper than either description, and understanding it changes how Bahuda Yatra feels.
                        </p>

                        <div id="queen-gundicha">
                            <SubSectionHead title="Queen Gundicha: The Personality Behind the Temple's Name" />
                            <p>
                                The temple is named after a real person: <strong>Queen Gundicha</strong>, the consort of King Indradyumna himself — the same king whose long search for the Lord led to the very first Jagannath deities being installed at Puri. She was the empress of Avanti, and she is, across multiple traditions, identified as the reason both the Gundicha Temple and the Ratha Yatra festival itself exist.
                            </p>
                            <p>
                                The story told in Puri temple tradition is this: when the deities of Jagannath, Balabhadra, and Subhadra were first manifested, Queen Gundicha saw them and was so moved by their beauty and sweetness that she could not bear for them to remain enclosed behind temple walls alone. She requested the king to build a second temple — one that the deities could visit every year — and to begin a festival in which the Lord would come out onto the streets and travel to meet His devotees. The king agreed, and the temple built in response to her request was named in her honour.
                            </p>
                            <VerseBlock>
                                Queen Gundicha&rsquo;s unwavering faith in Lord Jagannath was so profound that the Lord himself promised to visit her home annually.
                            </VerseBlock>
                            <p>
                                Pleased by her devotion, Lord Jagannath made Queen Gundicha a direct promise: He would visit her temple every single year. <strong>Ratha Yatra is that promise kept. Bahuda Yatra is the moment it concludes</strong> — the Lord, having honoured His word in full, turning His chariot home again.
                            </p>
                            <p>
                                This annual promise carries a deeper story behind it. When Jagannath Swami manifested at Gundica, He offered King Indradyumna a boon, and the king chose to have no sons, so that no descendant could ever lay claim to Lord Jagannath&rsquo;s property. Queen Gundicha grieved greatly over this, knowing she would never bear a son. The compassionate Lord Jagannath consoled her, assuring her that He Himself would act as her son, and filled her heart with the words, &ldquo;For your pleasure, I will come here to Gundica once a year.&rdquo; Ratha Yatra, in this telling, is not only a promise kept to a devoted queen — it is a son&rsquo;s yearly visit to his mother.
                            </p>
                        </div>

                        <div id="lords-birthplace">
                            <SubSectionHead title="The Lord's Own Birthplace — Not Just an Aunt's Home" />
                            <p>
                                Of all the details that enrich Bahuda Yatra, this is the most significant. The Gundicha Temple is not only the home of a devoted queen, or a symbolic Vrindavana. According to both the ancient temple chronicle (the <strong>Madala Panji</strong>) and the <strong>Skanda Purana</strong> itself, the Gundicha Temple stands on the very ground where the deities of Jagannath, Balabhadra, Subhadra, and Sudarshana <strong>first appeared in this world</strong>.
                            </p>
                            <p>
                                Inside the Gundicha Temple there is a sacred raised platform called the <strong>Mahavedi</strong> — also known as the Yajnavedi — which marks the exact spot where the Chaturdha Murti first manifested during the time of King Indradyumna, at the conclusion of his thousand <strong>Ashwamedha Yajnas</strong>.
                            </p>
                            <VerseBlock citation="Lord Jagannath speaking in the Skanda Purana, Utkala Khanda, Chapter 29, verses 34–35">
                                &ldquo;Gundicha Mandapam Nama Yatrahamajanam Pura… Tasyah Punyatamam Sthanam Prithivyam Neha Vidyate — The place called Gundicha Mandapa is where I first manifested. There is no holier place on this Earth than this.&rdquo;
                            </VerseBlock>
                            <p>
                                Lord Brahma personally descended and performed the <em>Pran Pratishtha</em> — the life-installation ceremony — of Lord Jagannath, Lord Balabhadra, Devi Subhadra, and Sudarshana at this very spot. When Bahuda Yatra comes and the Lord turns His chariot homeward, He is <strong>leaving His birthplace</strong>. The homecoming carries a tender grief alongside its joy.
                            </p>
                        </div>

                        <div id="adapa-darshan">
                            <SubSectionHead title="What Happens During the Seven Days — Adapa Darshan" />
                            <p>
                                When the deities arrive at the Gundicha Temple, they are installed on the sacred platform called the <strong>Adapa Mandapa</strong> — the Mahavedi itself. The darshan of Jagannath during His stay at Gundicha has its own special name: <strong>Adapa Darshan</strong>.
                            </p>
                            <VerseBlock citation="Traditional verse cited in Niladri Mahodaya">
                                &ldquo;Niladrau Dasha Varshani Adapa Mandape Dine — What is gained in ten years of darshan at Niladri (the main temple at Srimandir) can be attained in a single day at the Adapa Mandapa.&rdquo;
                            </VerseBlock>
                            <p>
                                The <strong>Niladri Mahodaya</strong> states this plainly: whatever spiritual benefit a devotee accumulates over <strong>ten full years</strong> of regular darshan at Srimandir can be received in a <strong>single day</strong> of Adapa Darshan at Gundicha. And the <strong>evening darshan (Sandhya Darshan)</strong> on any of those seven days multiplies that benefit <strong>tenfold</strong> further.
                            </p>
                        </div>

                        <div id="sundarachala">
                            <SubSectionHead title="God's Summer Garden Retreat — Sundarachala" />
                            <p>
                                The Gundicha Temple stands in the centre of a large walled garden known traditionally as <strong>Sundarachala</strong> (the beautiful hill), often called the <strong>Garden House of Jagannath</strong>. The Lord who is worshipped with great ceremony at the main temple spends these seven days in a simple, garden setting in the mood of His cowherd years in Vrindavana.
                            </p>
                        </div>

                        <div id="356-days">
                            <SubSectionHead title="Three Hundred and Fifty-Six Days of Waiting" />
                            <p>
                                The Gundicha Temple stands completely empty for the rest of the year. No daily worship, no resident deities, no regular pilgrims. The entire complex exists for exactly nine days out of 365 — built solely out of love, kept in readiness solely out of hope, and vindicated every single year when the Lord keeps His word and comes.
                            </p>
                        </div>

                        <div id="open-door">
                            <SubSectionHead title="An Open Door: Who Can Enter Gundicha" />
                            <p>
                                Non-Hindus are barred from entering the temple structure itself, but are traditionally permitted to walk within the surrounding garden and grounds during the Ratha Yatra period, subject to respectful dress and conduct. The birthplace of Lord Jagannath is, during the festival, among the most accessible places of worship in Puri.
                            </p>
                        </div>
                    </div>
                    <Divider />

                    <div id="how-observed" className="sp-sec-block">
                        <SectionHead num="05" title="How Bahuda Yatra Is Observed" />
                        <p>
                            The day before Bahuda Yatra, the three chariots are turned to face south in a ritual called <strong>Dakshina Moda</strong>. On the day itself, the deities are brought out in a ceremony called <strong>Goti Pahandi</strong> and placed back on Their chariots. The Gajapati King of Puri performs <strong>Chhera Pahara</strong> again — sweeping the chariot path with a golden broom.
                        </p>
                        <p>
                            The order of the chariots is: <strong>Balabhadra&rsquo;s chariot (Taladhwaja)</strong> first, followed by <strong>Subhadra&rsquo;s chariot (Darpadalana)</strong>, with <strong>Jagannath&rsquo;s chariot (Nandighosha)</strong> coming last.
                        </p>

                        <div id="mausi-maa">
                            <SubSectionHead title="The Stop at Mausi Maa Temple" />
                            <SectionImage 
                                src="/assets/blog/bahuda-yatra-suna-besha-jagannath/Mausi Maa Temple on Bada Danda, Puri, where Poda Pitha is offered.jpeg" 
                                alt="Mausi Maa Temple on Bada Danda, Puri, where Poda Pitha is offered" 
                                caption="Mausi Maa Temple on Bada Danda, Puri, where Poda Pitha is offered"
                            />
                            <p>
                                Partway down the Grand Road, Jagannath&rsquo;s chariot pauses at the <strong>Mausi Maa Temple</strong> (the Maternal Aunt's temple), also known as the <strong>Ardhasini Temple</strong>. There, the deity is offered <strong>Poda Pitha</strong>, a baked cake made from rice, lentils, coconut, and jaggery — one of Lord Jagannath&rsquo;s favourite simple foods.
                            </p>
                        </div>
                    </div>
                    <Divider />

                    <div id="what-is-suna-besha" className="sp-sec-block">
                        <SectionHead num="06" title="What Is Suna Besha?" />
                        <SectionImage 
                            src="/assets/blog/bahuda-yatra-suna-besha-jagannath/Jagannath Baladeva and subhadra Deities adorned in gold ornaments during Suna Besha at Singhadwara 1.jpeg" 
                            alt="Jagannath Baladeva and subhadra Deities adorned in gold ornaments during Suna Besha at Singhadwara" 
                            caption="Jagannath Baladeva and Subhadra Deities adorned in gold ornaments during Suna Besha at Singhadwara"
                        />
                        <p>
                            The day after Bahuda Yatra, on Ashadha Shukla Ekadashi, the three deities are adorned from head to toe in gold while still seated on Their chariots outside the temple at Singhadwara. This is <strong>Suna Besha</strong> (the Golden Attire), also known as <strong>Raja Besha</strong> (the Royal Attire) or <strong>Rajarajeshwara Besha</strong> (attire of the King of Kings).
                        </p>
                        <p>
                            Lord Jagannath holds a <strong>gold chakra</strong> in His right hand and a <strong>silver conch</strong> in His left. Lord Balabhadra holds a <strong>golden plough</strong> in His left hand and a <strong>golden mace</strong> in His right. Devi Subhadra is adorned with gold crowns, tiaras, and necklaces. The total gold display weighs well over 200 kilograms.
                        </p>

                        <div id="history-of-gold">
                            <SubSectionHead title="The History Behind the Gold" />
                            <SectionImage 
                                src="/assets/blog/bahuda-yatra-suna-besha-jagannath/Jagannath Baladeva and subhadra Deities adorned in gold ornaments during Suna Besha at Singhadwara 2.jpeg" 
                                alt="Deities in Suna Besha outside Srimandir at Singhadwara" 
                                caption="Deities in Suna Besha (Golden Attire) outside Srimandir at Singhadwara"
                            />
                            <p>
                                Suna Besha traces back to <strong>1460 CE</strong>, to the reign of the Gajapati king <strong>Kapilendra Deva</strong>. After winning military victories, he offered his entire gold treasure to Lord Jagannath. A temple servitor named <strong>Tadhau Karana</strong> suggested the gold ornaments be displayed on the chariots outside the temple so that everyone, including those who could not enter the temple, could behold the deities in gold. The king agreed, creating a public tradition that continues to this day.
                            </p>
                        </div>
                    </div>
                    <Divider />

                    <div id="chaitanya-connection" className="sp-sec-block">
                        <SectionHead num="07" title="Sri Chaitanya Mahaprabhu's Connection to This Season" />
                        <p>
                            Sri Chaitanya Mahaprabhu spent eighteen years at Puri and attended Ratha Yatra every single year, dancing before Jagannath&rsquo;s chariot in ecstatic love. He instructed His devotees from Bengal to return every year for the Gundicha festival.
                        </p>
                        <p>
                            In <em>Sri Chaitanya-charitamrita</em> (Madhya-lila, Chapter 12), it is recorded how Lord Chaitanya personally cleaned the Gundicha Temple before the Lord's arrival, sweeping and washing it with His own tears of devotion.
                        </p>
                    </div>
                    <Divider />

                    <div id="prabhupada-teaching" className="sp-sec-block">
                        <SectionHead num="08" title="Srila Prabhupada's Teaching" />
                        <SectionImage 
                            src="/assets/blog/bahuda-yatra-suna-besha-jagannath/Jagannath Baladeva and subhadra Deities adorned in gold ornaments during Suna Besha at Singhadwara 3.jpeg" 
                            alt="Suna Besha divine golden darshan" 
                            caption="The divine golden darshan of Lord Jagannath during Suna Besha"
                        />
                        <p>
                            Srila Prabhupada carried this spirit to the West, establishing Ratha Yatra in San Francisco in 1967 so that people everywhere could have darshan of Lord Jagannath.
                        </p>
                        <p>
                            Bahuda Yatra shows the Lord coming close enough to touch in a simple wooden form at Gundicha. Suna Besha shows the very same Lord dressed in royal gold. Devotees learn to see both as equally real: Jagannath is simultaneously the simplest, most approachable friend and the supreme sovereign of the universe.
                        </p>
                    </div>
                    <Divider />

                    <div id="living-tradition" className="sp-sec-block">
                        <SectionHead num="09" title="Living Tradition Today" />
                        <p>
                            Bahuda Yatra and Suna Besha continue to draw lakhs of pilgrims to Puri every year. The chariots retrace the Grand Road, the Gajapati King performs Chhera Pahara, and the Mausi Maa Temple offers Poda Pitha along the return journey.
                        </p>
                    </div>
                    <Divider />

                    <div id="conclusion" className="sp-sec-block">
                        <SectionHead num="10" title="Conclusion" />
                        <p>
                            Bahuda Yatra brings Lord Jagannath back home on time, three days after He left, fulfilling His promise. The very next day is Suna Besha — the grand golden appearance that reminds everyone of His supreme majesty. Both festivals trace back to the Gundicha Temple — the sacred birthplace and garden retreat of the Lord.
                        </p>
                        <p className="italic text-[#b45309] font-serif text-lg mt-4">
                            Hare Krishna. Our next article will cover Adhara Pana and Niladri Bije, where the festival finally comes to an end — including the story of Lakshmi, Jagannath, and a rasagola that people in Odisha still celebrate every year.
                        </p>
                    </div>
                    <Divider />

                    <div id="faqs" className="sp-sec-block">
                        <SectionHead num="11" title="Frequently Asked Questions" />
                        <FaqAccordion items={faqData} />
                    </div>
                    <Divider />

                    <div id="references" className="sp-sec-block">
                        <SectionHead num="12" title="References" />
                        <ul className="list-disc space-y-3 pl-5 font-serif text-[1.05rem] leading-relaxed text-[#3D1A00]/80">
                            {references.map((ref, idx) => (
                                <li key={idx}>{ref}</li>
                            ))}
                        </ul>
                    </div>
                    <Divider />

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
                                <span className="sp-connect-value">Srila Prabhupada's ISKCON Thiruvanmiyur</span>
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
                            <span className="sp-connect-icon">📱</span>
                            <div className="sp-connect-info">
                                <span className="sp-connect-label">WhatsApp</span>
                                <span className="sp-connect-value">Join our WhatsApp Channel</span>
                            </div>
                            <span className="sp-connect-arrow">→</span>
                        </a>
                    </div>
                    
                    <p className="mt-14 border-t border-[#C9A84C]/30 pt-6 text-sm italic text-[#3D1A00]/70 text-center">
                        Srila Prabhupada's ISKCON Thiruvanmiyur | Dakshina Dwaraka Dham, Chennai
                    </p>
                </div>
            </article>
            <Footer />
        </div>
    );
}
