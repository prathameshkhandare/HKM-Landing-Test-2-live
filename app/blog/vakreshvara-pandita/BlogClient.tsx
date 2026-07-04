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

const QuickFact = ({ label, value }: { label: string; value: React.ReactNode }) => (
    <div style={{ padding: '0.75rem 0', borderBottom: '1px solid rgba(201,168,76,0.2)', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        <span style={{ fontWeight: 600, color: '#6B4C2A', minWidth: '140px' }}>{label}:</span>
        <span style={{ color: '#3D1A00', flex: 1 }}>{value}</span>
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

export default function BlogClient() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Who was Sri Vakreshvara Pandita?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sri Vakreshvara Pandita was an intimate eternal associate of Sri Chaitanya Mahaprabhu, renowned for dancing in ecstasy for seventy-two continuous hours, identified as an incarnation of Aniruddha and, in Krishna's Vrindavan pastimes, as the gopi Tungavidya."
                }
            },
            {
                "@type": "Question",
                "name": "What is the famous 'wing' pastime of Vakreshvara Pandita?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "After dancing for seventy-two hours, Vakreshvara Pandita asked Lord Chaitanya for ten thousand Gandharvas to sing so he could keep dancing. The Lord replied that Vakreshvara Pandita was His one wing, and with another He could fly in the sky."
                }
            },
            {
                "@type": "Question",
                "name": "Where are the lila sthalis of Vakreshvara Pandita located?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "His three principal lila sthalis are Guptipara in West Bengal (birthplace), Srivasa Angan in Sri Mayapur (site of the 72-hour dance), and the Gambhira/Radhakanta Math in Jagannatha Puri, Odisha."
                }
            }
        ]
    }

    return (
        <main className="min-h-screen bg-[#FFF9F0] selection:bg-[#c9973a] selection:text-white">
            <Head>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            </Head>
            <Navbar />

            <article className="at-blog-wrap">
                <header className="at-blog-header">
                    <p className="at-hero-label">
                        Eternal Associates of Lord Chaitanya
                    </p>
                    <h1 className="at-blog-title">
                        Sri Vakreshvara Pandita:<br />
                        The One Wing of Lord Chaitanya
                    </h1>
                    <div className="at-hero-line" />
                    <p className="at-blog-subtitle">
                        Glorifying the ecstatic devotee-dancer who danced for seventy-two hours in the sankirtana of Sri Chaitanya Mahaprabhu
                    </p>
                    <p className="at-blog-byline">
                        By <strong>HKM Chennai</strong>
                        {" "}— Dakshina Dwaraka Dham, Thiruvanmiyur
                    </p>
                    <div className="at-meta-row">
                        <span>📅 July 05, 2026</span>
                        <span>⏱ 9 min read</span>
                        <span>🏷 Vaishnava Acharya</span>
                    </div>
                </header>

                <div className="sp-sec-image-wrap" style={{ marginTop: '0', marginBottom: '3rem' }}>
                    <img src="/assets/blog/vakreshvara-pandita/sri-vakreshvara-pandita.jpg" alt="Sri Vakreshvara Pandita dancing in kirtana" />
                    <span className="sp-sec-caption">Sri Vakreshvara Pandita immersed in ecstatic sankirtana.</span>
                </div>

                <div className="sp-prose mb-12">
                    <p>It is well past midnight in Srivasa Pandita's courtyard. Lord Chaitanya is singing. Vakreshvara Pandita has been dancing, without pause, for two full days and nights. When he finally falls at the Lord's feet, breathless, he does not ask to rest — he begs for ten thousand celestial Gandharvas to sing so that he can keep dancing. Mahaprabhu's reply becomes one of the most tender lines in all of Vaishnava literature: &quot;I have only one wing like you, but if I had another, certainly I would fly in the sky.&quot;</p>
                    <p>That single exchange tells you almost everything about who Vakreshvara Pandita was.</p>
                </div>

                <div className="sp-toc mb-12">
                    <h3 className="sp-toc-title">Table of Contents</h3>
                    <ol>
                        <li><a href="#quick-facts"><span className="sp-toc-num">01</span>Quick Facts</a></li>
                        <li><a href="#birth"><span className="sp-toc-num">02</span>Birth and Early Life in Guptipara</a></li>
                        <li><a href="#aniruddha"><span className="sp-toc-num">03</span>An Eternal Associate: Aniruddha Incarnate</a></li>
                        <li><a href="#learned"><span className="sp-toc-num">04</span>Glorified Among the Learned Devotees</a></li>
                        <li><a href="#seventytwo"><span className="sp-toc-num">05</span>The Seventy-Two Hour Dance and the &quot;Wing&quot; Pastime</a></li>
                        <li><a href="#devananda"><span className="sp-toc-num">06</span>The Deliverance of Devananda Pandita</a></li>
                        <li><a href="#puri"><span className="sp-toc-num">07</span>Life in Jagannatha Puri</a></li>
                        <li><a href="#gambhira"><span className="sp-toc-num">08</span>Seva at the House of Kashi Mishra</a></li>
                        <li><a href="#legacy"><span className="sp-toc-num">09</span>Disciplic Legacy</a></li>
                        <li><a href="#sthali"><span className="sp-toc-num">10</span>Lila Sthali: Places to Remember</a></li>
                        <li><a href="#lessons"><span className="sp-toc-num">11</span>What Vakreshvara Pandita Teaches Us</a></li>
                        <li><a href="#faq"><span className="sp-toc-num">12</span>Frequently Asked Questions</a></li>
                    </ol>
                </div>

                <section className="sp-section" id="quick-facts">
                    <SectionHead num="01" title="Quick Facts (At a Glance)" />
                    <div style={{ background: '#fcfaf5', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '1rem', padding: '1.5rem', marginBottom: '2rem' }}>
                        <QuickFact label="Identity" value="Eternal associate of Sri Chaitanya Mahaprabhu; incarnation of Aniruddha (per Gaura-ganoddesa-dipika)" />
                        <QuickFact label="Vraja Identity" value="The gopi Tungavidya, among the ashta-sakhis, expert in music and dance" />
                        <QuickFact label="Birthplace" value="Guptipara, near Triveni, Hooghly district, West Bengal" />
                        <QuickFact label="Known For" value="Dancing continuously for 72 hours in sankirtana; called by Mahaprabhu 'My one wing'" />
                        <QuickFact label="Disciplic Line" value="Disciple: Gopal Guru Goswami → disciple: Dhyanachandra Goswami (author of Dhyana-chandra-paddhati)" />
                        <QuickFact label="Principal Lila Sthalis" value="Guptipara (birthplace) • Srivasa Angan, Mayapur (72-hour dance) • Gambhira / Kashi Mishra's house, Puri (seva & residence)" />
                    </div>
                    <div className="sp-prose">
                        <p>Among the eternal associates of Sri Chaitanya Mahaprabhu, there is one devotee whose very body became an instrument of Krishna's ecstasy — Vakreshvara Pandita. Srila Prabhupada describes him as &quot;the fifth branch of the tree&quot; of Lord Chaitanya's associates (Chaitanya-charitamrita, Adi 10.17), so dear to the Lord that Mahaprabhu Himself compared Vakreshvara Pandita to His own missing wing.</p>
                        <p>What follows is his story — from his birth in a Bengal town already steeped in Vaishnava culture, to his identity as an eternal Vrindavan gopi, to the pastimes and places that keep his memory alive today.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="birth">
                    <SectionHead num="02" title="Birth and Early Life in Guptipara" />
                    <div className="sp-prose">
                        <p>Sri Vakreshvara Pandita took birth in the village of Guptipara, near Triveni, in Bengal. From his youth he was expert in singing and dancing — gifts that were not mere artistic talent but instruments of pure devotional ecstasy, later to be fully revealed in the presence of Lord Chaitanya.</p>
                        <p>Guptipara itself has long been a stronghold of Vaishnava culture on the banks of the Hooghly River. The town is home to the historic Brindaban Chandra Math, a walled quadrangle of four terracotta temples — dedicated to Chaitanya-Nityananda, Radha-Krishna-Jagannath (Brindabanchandra), Rama-Sita-Lakshmana-Hanuman, and Radha-Krishna (Krishnachandra) — and to one of Bengal's oldest and tallest ratha-yatra chariots, second in length only to the Ratha-yatra of Puri. The area was historically known as a center of Sanskrit scholarship and Vaishnava devotion, a fitting birthplace for a devotee whose own learning would later be overshadowed only by his ecstatic love for Krishna.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="aniruddha">
                    <SectionHead num="03" title="An Eternal Associate: Aniruddha Incarnate" />
                    <div className="sp-prose">
                        <p>Srila Prabhupada explains the transcendental identity of this great devotee in his purport to Chaitanya-charitamrita Adi 10.17:</p>
                    </div>
                    <div className="at-pull-quote">
                        <p>&quot;In the Gaura-ganoddesa-dipika (71) it is stated that Vakresvara Pandita was an incarnation of Aniruddha, one of the quadruple expansions of Visnu (Vasudeva, Sankarsana, Aniruddha and Pradyumna).&quot;</p>
                        <cite>— Srila Prabhupada</cite>
                    </div>
                    <div className="sp-prose">
                        <p>In the Dhyana-chandra-paddhati, written by Dhyanachandra Goswami — the disciple of Vakreshvara Pandita's own disciple, Gopal Guru Goswami — it is revealed that in Krishna's eternal pastimes of Vrindavan, Vakreshvara Pandita was the gopi Tungavidya, celebrated among the ashta-sakhis for her expertise in music and dance. That same eternal associate of Radha and Krishna appeared in Gaura-lila as Vakreshvara Pandita, to relish and distribute the ecstasy of the sankirtana movement.</p>
                        <p>The Dhyana-chandra-paddhati also records his appearance and disappearance tithis: he appeared on Krishna Panchami (the fifth day of the waning moon) of the month of Ashadha, and concluded his earthly pastimes on Shukla Shashthi (the sixth day of the waxing moon), also in Ashadha — dates that, following the lunar calendar, shift each year in the Gregorian reckoning.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="learned">
                    <SectionHead num="04" title="Glorified Among the Learned Devotees" />
                    <div className="sp-prose">
                        <p>Sri Chaitanya-charitamrita records Vakreshvara Pandita among the most exalted and learned devotees of the Lord. As Srila Prabhupada translates in Adi 6.49–50:</p>
                    </div>
                    <div className="at-pull-quote">
                        <p>&quot;Srivasa, Haridasa, Ramadasa, Gadadhara, Murari, Mukunda, Candrasekhara and Vakresvara are all glorious and are all learned scholars, but the sentiment of servitude to Lord Caitanya makes them mad in ecstasy.&quot;</p>
                        <cite>— Sri Chaitanya-charitamrita, Adi-lila 6.49-50</cite>
                    </div>
                    <div className="sp-prose">
                        <p>Great scholarship bowed before pure devotional madness — and Vakreshvara Pandita embodied this madness of love more visibly than almost any other associate.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="seventytwo">
                    <SectionHead num="05" title="The Seventy-Two Hour Dance and the 'Wing' Pastime" />
                    <div className="sp-prose">
                        <p>The most celebrated pastime of Vakreshvara Pandita's life took place in the house of Srivasa Pandita, where Lord Chaitanya engaged in dramatic performances of sankirtana. Srila Prabhupada narrates this pastime in Chaitanya-charitamrita:</p>
                    </div>
                    <div className="at-pull-quote">
                        <p>&quot;Vakresvara Pandita, the fifth branch of the tree, was a very dear servant of Lord Caitanya's. He could dance with constant ecstasy for seventy-two hours.&quot;</p>
                        <cite>— Sri Chaitanya-charitamrita, Adi 10.17</cite>
                    </div>
                    <SectionImage 
                        src="/assets/blog/vakreshvara-pandita/srivasa-angan.jpg" 
                        alt="Srivasa Angan, where Vakreshvara Pandita danced for 72 hours" 
                        caption="Srivasa Angan in Sri Mayapur, the site of the 72-Hour Dance and the 'Wing' Pastime." 
                    />
                    <div className="sp-prose">
                        <p>Sri Chaitanya Mahaprabhu Himself sang while Vakreshvara Pandita danced without cessation. Overwhelmed, Vakreshvara Pandita fell at the lotus feet of the Lord and made a bold and loving request:</p>
                    </div>
                    <div className="at-pull-quote">
                        <p>&quot;O Candramukha! Please give me ten thousand Gandharvas. Let them sing as I dance, and then I will be greatly happy.&quot;</p>
                        <cite>— Sri Chaitanya-charitamrita, Adi 10.19</cite>
                    </div>
                    <div className="sp-prose">
                        <p>Srila Prabhupada explains in his purport that the Gandharvas are the celestial singers of Gandharvaloka, capable of singing continuously for days — and so Vakreshvara Pandita, in his insatiable hunger to dance in the Lord's service, wished for their unending song. (Adi 10.19, purport)</p>
                        <p>Lord Chaitanya's reply is among the most tender exchanges recorded between the Lord and His devotee:</p>
                    </div>
                    <div className="at-pull-quote">
                        <p>&quot;I have only one wing like you, but if I had another, certainly I would fly in the sky!&quot;</p>
                        <cite>— Sri Chaitanya-charitamrita, Adi 10.20</cite>
                    </div>
                    <div className="sp-prose">
                        <p>Mahaprabhu compared Himself to a bird with only one wing — Vakreshvara Pandita being that wing — unable to fly without his ecstatic dancing to carry Him aloft in sankirtana bliss.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="devananda">
                    <SectionHead num="06" title="The Deliverance of Devananda Pandita" />
                    <div className="sp-prose">
                        <p>Vakreshvara Pandita's mercy was not confined to dancing before the Lord; it extended to the deliverance of fallen souls. Devananda Pandita, a renowned scholar of Srimad-Bhagavatam residing in Kuliya (present-day Navadvipa), had committed a grave offense: when Srivasa Thakura wept in ecstasy while hearing his Bhagavatam recital, Devananda's own disciples drove Srivasa Thakura away, and Devananda made no protest.</p>
                        <p>When Lord Chaitanya later passed through Kuliya, He chastised Devananda severely for his Mayavadi interpretation of the Bhagavatam. At that time, Devananda had little faith in Sri Chaitanya Mahaprabhu as an incarnation of Krishna. But providence brought Vakreshvara Pandita as a guest to a devotee's house in Kuliya, across the Ganges from Nadia. One evening Vakreshvara Pandita performed kirtana and dance there for two praharas — some six hours — and Devananda, hearing the news, came to witness it.</p>
                        <p>Seeing the visible symptoms of divine love manifest in Vakreshvara Pandita's dancing body, Devananda himself took up a cane to keep the gathering crowd from obstructing the ecstatic performance. When the dancing ended, Devananda offered dandavat pranams at Vakreshvara Pandita's feet, who blessed him simply: &quot;May you attain devotion to Sri Krishna.&quot;</p>
                        <p>As Srila Prabhupada writes in Adi 10.77:</p>
                    </div>
                    <div className="at-pull-quote">
                        <p>&quot;Devananda Pandita was a professional reciter of Srimad-Bhagavatam, but by the mercy of Vakresvara Pandita and the grace of the Lord he understood the devotional interpretation of the Bhagavatam.&quot;</p>
                        <cite>— Sri Chaitanya-charitamrita, Adi 10.77</cite>
                    </div>
                    <div className="sp-prose">
                        <p>Later, when Lord Chaitanya returned to Nadia to see His mother and the Ganges, He personally told Devananda Pandita: &quot;Because you have rendered service to Vakreshvara Pandita I consider you to be one of my own. Vakreshvara Pandita is completely empowered by the Lord.&quot; (Chaitanya-charitamrita, Adi 10.77 and purport)</p>
                        <p>This pastime teaches a central truth of Gaudiya Vaishnava philosophy — that service to a pure Vaishnava is the direct means of attaining the mercy of Krishna Himself.</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="puri">
                    <SectionHead num="07" title="Life in Jagannatha Puri" />
                    <div className="sp-prose">
                        <p>When Sri Chaitanya Mahaprabhu accepted sannyasa and took up residence in Jagannatha Puri, Vakreshvara Pandita was counted among His most intimate and permanent associates there. Srila Prabhupada writes that among these devotees, Paramananda Puri and Svarupa Damodara were the heart and soul of the Lord, and among the others were Gadadhara, Jagadananda, Sankara, Vakreshvara, Damodara Pandita, Thakura Haridasa, Raghunatha Vaidya, and Raghunatha dasa. (Chaitanya-charitamrita, Adi 10.124–126)</p>
                        
                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">Chief Dancer in Sankirtana</h3>
                        <p>During the annual Ratha-yatra festival, Sri Chaitanya Mahaprabhu personally ordered Nityananda Prabhu, Advaita Acharya, Thakura Haridasa, and Vakreshvara Pandita to each dance in one of four kirtana parties. (Chaitanya-charitamrita, Madhya-lila 13.35) Two brothers, Madhava Ghosha and Vasudeva Ghosha, joined Vakreshvara Pandita's party as responsive singers, with Vakreshvara Pandita as the dancer. (Chaitanya-charitamrita, Madhya-lila 13.43)</p>
                        
                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">In the Gundicha Temple Courtyard</h3>
                        <p>Srila Prabhupada records that Sri Chaitanya Mahaprabhu would sometimes engage Vakreshvara Pandita and other devotees in chanting and dancing, performing sankirtana three times daily — morning, noon, and evening — in the yard of the Gundicha temple. (Chaitanya-charitamrita, Madhya-lila 14.72)</p>
                        
                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">In the Water Pastimes</h3>
                        <p>In the gardens near the Gundicha temple, during the Vrindavana pastimes re-enacted there, a duel of throwing water took place between Raghava Pandita and Vakreshvara Pandita, one among several such playful exchanges among the devotees. (Chaitanya-charitamrita, Madhya-lila 14.82) On another occasion, the Lord personally ordered Vakreshvara Pandita to dance, and as he began, the Lord Himself began to sing. (Chaitanya-charitamrita, Madhya-lila 14.101)</p>
                        
                        <h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">Every Day of Mahaprabhu's Puri Pastimes</h3>
                        <p>Vakreshvara Pandita is named among the devotees to whom Sri Chaitanya Mahaprabhu introduced Sanatana Gosvami (Chaitanya-charitamrita, Antya-lila 4.108–110), among those who danced with the Lord in the great sankirtana processions where he was again named chief dancer (Antya-lila 11.48, 11.64), and among those who danced in jubilation around the Lord's body as He passed in ecstasy (Antya-lila 11.67).</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="gambhira">
                    <SectionHead num="08" title="Seva at the House of Kashi Mishra" />
                    <SectionImage 
                        src="/assets/blog/vakreshvara-pandita/sri-sri-radha-kanta.jfif" 
                        alt="Sri Sri Radha-Kanta at Gambhira" 
                        caption="Sri Sri Radha-Kanta, the Deities worshiped at the house of Kashi Mishra (Gambhira) in Jagannatha Puri." 
                    />
                    <div className="sp-prose">
                        <p>In Jagannatha Puri, Lord Chaitanya resided at the house of Kashi Mishra, the priest of the King. Srila Prabhupada notes in his purport to Adi 10.131 that this sacred house was later inherited by Vakreshvara Pandita himself, and thereafter by his disciple, Gopal Guru Goswami, who established there the worship of Sri Sri Radha-Kanta — a seva that continues to this day.</p>
                        <p>Kashi Mishra served as rajguru to King Prataparudra, who gifted him a house with a large garden near the Jagannatha temple. Within it was a small, secluded room called the Gambhira — meaning &quot;deep&quot; or &quot;hidden&quot; — where Mahaprabhu spent the final twelve years of His manifest pastimes, absorbed in intense feelings of separation from Krishna.</p>
                        <p>After Mahaprabhu's disappearance, Vakreshvara Pandita took up residence in the Gambhira and continued the seva of Sri Radha-Kanta received from Kashi Mishra, before entrusting it to Gopal Guru Goswami. Between 1538 and 1548, Gopal Guru renovated and expanded the temple, installing additional Deities of Radharani, Lalita Devi, and dancing Gauranga-Nityananda alongside Radha-Kanta — the same Deities worshiped there today at what is now known as Radhakanta Math.</p>
                    </div>
                    <SectionImage 
                        src="/assets/blog/vakreshvara-pandita/radha-kanta-math.jfif" 
                        alt="Radha Kanta Math, inherited by Sri Vakreshvara Pandita" 
                        caption="Radha Kanta Math (Gambhira), inherited by Sri Vakreshvara Pandita from Kashi Mishra." 
                    />
                </section>

                <Divider />

                <section className="sp-section" id="legacy">
                    <SectionHead num="09" title="Disciplic Legacy" />
                    <div className="sp-prose">
                        <p>Vakreshvara Pandita's foremost disciple was Gopal Guru Goswami, who inherited both his spiritual mood and his seva at Kashi Mishra's house. Gopal Guru Goswami's own disciple, Dhyanachandra Goswami, authored the Dhyana-chandra-paddhati — a Gaudiya Vaishnava meditational text distinct from Chaitanya-charitamrita — through which the identity of Vakreshvara Pandita as Tungavidya gopi has been preserved for devotees.</p>
                        <p>Many disciples of Vakreshvara Pandita took root in Orissa, where they are honored as Gaudiya Vaishnavas though they are Oriyas by birth. (Gaudiya History)</p>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="sthali">
                    <SectionHead num="10" title="Lila Sthali: Places to Remember Vakreshvara Pandita" />
                    <div className="sp-prose">
                        <ol>
                            <li><strong>Guptipara, West Bengal — Birthplace</strong><br/>Guptipara lies on the eastern bank of the Hooghly River in the Hooghly district, roughly 60–80 km north of Kolkata. Long a center of Sanskrit learning and Vaishnava devotion, the town today is known for the Brindaban Chandra Math temple complex, its terracotta shrines, and one of Bengal's grandest Ratha-yatra festivals.</li>
                            <li><strong>Srivasa Angan, Sri Mayapur — Site of the 72-Hour Dance</strong><br/>Srivasa Angan, the former homestead of Srivasa Thakura, stands close to the Yogapitha in present-day Sri Mayapur. It was here, at the nightly closed-door sankirtana gatherings of Mahaprabhu's inner circle, that Vakreshvara Pandita's celebrated seventy-two-hour dance and the &quot;one wing&quot; exchange took place.</li>
                            <li><strong>Gambhira (Radhakanta Math), Jagannatha Puri — Residence & Seva</strong><br/>Located in Bali Sahi, southeast of the Jagannatha temple, this site was Kashi Mishra's residence and the place where Mahaprabhu spent His last twelve years in a small room called the Gambhira. After Vakreshvara Pandita inherited the seva here, he passed it to his disciple Gopal Guru Goswami. It remains an active place of worship and darshan for pilgrims visiting Puri.</li>
                        </ol>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="lessons">
                    <SectionHead num="11" title="What Vakreshvara Pandita Teaches Us" />
                    <div className="sp-prose">
                        <p>Srila Prabhupada's presentation of Vakreshvara Pandita's life offers devotees several enduring lessons:</p>
                        <ul>
                            <li><strong>Devotion beyond scholarship.</strong> Though counted among the most learned associates of the Lord, it was not his scholarship but his ecstatic servitude that made him dear to Mahaprabhu.</li>
                            <li><strong>The body as an instrument of bhakti.</strong> His dancing was not artistic performance but the direct manifestation of Krishna's presence within his heart — a living example that devotional service engages the whole being.</li>
                            <li><strong>The power of Vaishnava association.</strong> The transformation of Devananda Pandita, a proud and offensive scholar, into a genuine devotee came about not through argument but through simple, humble association with a pure Vaishnava.</li>
                            <li><strong>Humility despite empowerment.</strong> Though declared an incarnation of Aniruddha and completely empowered by Krishna, Vakreshvara Pandita remained a servant, dancing at the Lord's pleasure rather than seeking recognition.</li>
                        </ul>
                    </div>
                </section>

                <Divider />

                <section className="sp-section" id="faq">
                    <SectionHead num="12" title="Frequently Asked Questions" />
                    <FaqAccordion items={[
                        {
                            q: "Who was Sri Vakreshvara Pandita?",
                            a: "Sri Vakreshvara Pandita was an intimate eternal associate of Sri Chaitanya Mahaprabhu, renowned for his ability to dance in ecstasy for seventy-two continuous hours. He is identified in the Gaura-ganoddesa-dipika as an incarnation of Aniruddha, and in Krishna's Vrindavan pastimes as the gopi Tungavidya.",
                        },
                        {
                            q: "What is the famous 'wing' pastime of Vakreshvara Pandita?",
                            a: "After Vakreshvara Pandita danced ceaselessly for seventy-two hours while Lord Chaitanya sang, he begged the Lord for ten thousand Gandharvas to sing so he could dance without stopping. The Lord replied that Vakreshvara Pandita was like His one wing, and that with another such wing, He could fly in the sky.",
                        },
                        {
                            q: "How did Vakreshvara Pandita deliver Devananda Pandita?",
                            a: "Devananda Pandita, a scholar who had committed an offense against Srivasa Thakura, witnessed Vakreshvara Pandita's ecstatic kirtana and dancing one night in Kuliya. Moved by what he saw, Devananda became convinced of Lord Chaitanya's divinity and was freed from his offense, going on to explain Srimad-Bhagavatam according to pure devotional understanding.",
                        },
                        {
                            q: "Who was Vakreshvara Pandita's disciple?",
                            a: "His principal disciple was Gopal Guru Goswami, who inherited his seva at Kashi Mishra's house in Jagannatha Puri and established the worship of Sri Sri Radha-Kanta there.",
                        },
                        {
                            q: "Where are the lila sthalis of Vakreshvara Pandita located?",
                            a: "His three principal lila sthalis are Guptipara in West Bengal's Hooghly district (birthplace), Srivasa Angan in Sri Mayapur (site of the 72-hour dance), and the Gambhira / Radhakanta Math in Jagannatha Puri, Odisha (his later residence and seva).",
                        },
                    ]} />
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
