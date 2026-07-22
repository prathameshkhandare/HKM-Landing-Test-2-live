'use client'

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import '../sri-shyamananda-prabhu/styles.css';

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

function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div key={item.q} style={{ border: '1px solid rgba(201,168,76,0.3)', borderRadius: '0.75rem', overflow: 'hidden', transition: 'all 0.3s ease' }}>
                        <button onClick={() => setOpenIndex(isOpen ? null : index)} style={{ width: '100%', background: '#3D1A00', padding: '0.85rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', border: 'none', textAlign: 'left' }}>
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

const quickFacts = [
  { label: "Full name", value: "Sri Srivasa Thakura, also known as Srivasa Pandita" },
  { label: "Appeared", value: "Roughly thirty years before Sri Chaitanya Mahaprabhu, in Sri Hatta (Sylhet, now in Bangladesh)" },
  { label: "Family", value: "Son of Jaladhara Pandita; brothers Sri Rama Pandita, Sripati, and Srinidhi; wife Srimati Malini Devi" },
  { label: "Residence", value: "Srivasa Angan, Navadvipa (present-day Mayapur) — later Kumarahatta in his final years" },
  { label: "Position", value: "One of the five members of the Panca-tattva, representing the pure devotee (bhakta / jiva-tattva)" },
  { label: "Incarnation of", value: "Srila Narada Muni, according to Sri Gaura-ganoddesha-dipika (verse 90)" },
  { label: "Known for", value: "Hosting Lord Chaitanya's nightly sankirtana at his home for a full year; the site of the Maha-prakasha-lila; leading a kirtana party at the Jagannatha Puri Ratha-yatra" },
  { label: "Wife's identity", value: "Srimati Malini Devi, regarded as an incarnation of Mother Ambika" },
  { label: "Niece", value: "Srimati Narayani, who received the Lord's own remnants and later became the mother of Srila Vrindavana dasa Thakura, author of Sri Chaitanya-bhagavata" },
];

const lilaSthali = [
  { place: "Pancha Khanda, Beanibazar, Sylhet district, Bangladesh", description: "Srivasa Thakura's ancestral birthplace, the property of his Parasara-gotra brahmana family, named after him. His elder brother Nalina Pandita passed away here at a young age before the family relocated to Navadvipa." },
  { place: "Srivasa Angan, Sri Mayapur (Navadvipa), West Bengal", description: "The site of his family home, where Sri Chaitanya Mahaprabhu conducted nightly sankirtana for a year and enacted the Maha-prakasha-lila. A temple stands on the site today with four altars: the left altar with Sri Sri Radha-Krishna and Lord Chaitanya; the central altar depicting the Maha-prakasha scene, with Lord Chaitanya enthroned, Gadadhara Pandita fanning Him, and Nityananda Prabhu holding an umbrella over Him; the right altar showing Sri Sri Gaura-Nitai leading the sankirtana procession toward Chand Kazi's house; and a fourth altar commemorating the khol-bhanga incident, where the mridanga was broken in opposition to the kirtana." },
  { place: "Kumarahatta, West Bengal", description: "Where Srivasa Thakura resided in his final years, having left Navadvipa in separation after Sri Chaitanya Mahaprabhu's acceptance of sannyasa, and where he was later joined by fellow devotees including Sivananda Sena and Vasudeva Datta." },
  { place: "Jagannatha Puri, Odisha", description: "Where Srivasa Thakura led one of the principal kirtana parties before Lord Jagannatha's car during the annual Ratha-yatra, and where King Pratparudra personally witnessed his complete absorption in the Lord's dancing." },
];

const lessons = [
  { title: "A devotee's home can become a temple, and family life is no obstacle to the highest devotional service.", body: "Srivasa Thakura was a householder brahmana with a wife and children, yet his home became the very courtyard in which the Supreme Personality of Godhead chose to reveal His most confidential pastimes. We should never imagine that our own household duties, our marriage, or our children stand between us and the deepest levels of Krishna consciousness. What qualifies a home to become a place of pilgrimage is not its outward simplicity or opulence, but the sincerity and surrender of the devotee who lives there." },
  { title: "Real compassion for a fellow devotee sometimes means risking the Lord's own displeasure on their behalf.", body: "When Srivasa Thakura pleaded on behalf of the hidden brahmana, he was willing to submit before Sri Chaitanya Mahaprabhu's own momentary displeasure in order to secure mercy for another soul. A mature devotee does not merely observe rules and regulations for their own sake; he actively intercedes, out of compassion, for others who are struggling to receive the Lord's mercy, trusting that sincere compassion is itself pleasing to Krishna." },
  { title: "Equanimity in the face of personal loss is not indifference — it is the deepest realization of the soul's eternal relationship with the Lord.", body: "Srivasa Thakura did not forbid his household from grieving because he was unfeeling; he did so because he understood, at the deepest level, that every soul is the eternal servant of Krishna, coming and going according to the Lord's own arrangement, and that the sankirtana of the Lord's holy names must never be interrupted for any temporary material circumstance, however painful. We should not mistake genuine transcendental equipoise for coldness; it is, in fact, the highest tenderness." },
  { title: "Opposition to the chanting of the holy names, however severe, becomes the very occasion by which the sankirtana movement expands further.", body: "The breaking of the mridanga during the kirtana connected with Srivasa Thakura's household did not end the sankirtana movement — it directly precipitated Sri Chaitanya Mahaprabhu's first public sankirtana procession and the conversion of Chand Kazi himself. A devotee engaged in preaching the holy names should therefore not be discouraged by opposition or criticism." },
  { title: "An offense at the feet of a pure devotee is more serious than an offense against the Lord Himself, yet no offense, however grave, lies beyond the reach of Vaishnava mercy.", body: "Gopala Capala's attempt to defame Srivasa Thakura brought upon him leprosy and years of suffering — far more severe than Sri Chaitanya Mahaprabhu's own response to ordinary irreligion. Yet the very same pastime, ending with his transformation into Devakinandana dasa Thakura, teaches that this severity is never the last word. Vaishnava mercy, once sincerely sought, restores even the most determined offender completely." },
  { title: "Simple, faithful service to the Lord's holy names can become the doorway to His most powerful and confidential moods.", body: "Srivasa Thakura's ordinary act of reading the thousand names of Vishnu at the Lord's own request became the direct occasion for Sri Chaitanya Mahaprabhu's ecstatic manifestation of Lord Nrisimhadeva's mood. A devotee need not seek out extraordinary or dramatic service; humble, exact execution of whatever service is asked is itself sufficient to invite the Lord's deepest mercy." },
  { title: "A devotee's spiritual standing is not diminished by his outward simplicity, and true humility recognizes that standing even in a moment of embarrassment.", body: "When Srivasa Thakura, completely absorbed in watching the Lord dance at the Ratha-yatra, unknowingly struck the hand of King Pratparudra's own attendant, the King did not rebuke the devotee; instead, he reminded his attendant what a rare fortune it was to have been touched by so exalted a Vaishnava. Real greatness expresses itself as honour toward Krishna's servants rather than insistence on one's own status." },
];

const faqs = [
  { q: "Who was Srivasa Thakura?", a: "Srivasa Thakura, also known as Srivasa Pandita, was a learned brahmana of Navadvipa and one of the five members of the Panca-tattva, the closest confidential associates of Sri Chaitanya Mahaprabhu. He is regarded as the incarnation of Srila Narada Muni and represents the pure devotee within Gaudiya Vaishnava theology." },
  { q: "What is Srivasa Angan?", a: "Srivasa Angan is the courtyard of Srivasa Thakura's own home in Navadvipa, where Sri Chaitanya Mahaprabhu conducted nightly congregational kirtana with His most intimate devotees for a full year, and where the Lord revealed His six-armed, four-armed, and original two-armed forms to Nityananda Prabhu before remaining in an ecstatic, self-revealing state for twenty-one continuous hours — the pastime known as the Maha-prakasha-lila." },
  { q: "What forms did Sri Chaitanya Mahaprabhu show, and to whom, during the Maha-prakasha-lila?", a: "According to Srila Prabhupada's own Chaitanya-charitamrita, the Lord first revealed a six-armed form (holding a conch, disc, club, lotus, bow, and flute) to Nityananda Prabhu specifically, then a four-armed form, and finally His original two-armed form as Krishna playing the flute. He then remained in an ecstatic state for twenty-one hours before the wider assembly of devotees at Srivasa Thakura's house." },
  { q: "Why is Srivasa Thakura considered an incarnation of Narada Muni?", a: "According to Sri Gaura-ganoddesha-dipika (verse 90), a scripture that identifies the eternal spiritual identities of Sri Chaitanya Mahaprabhu's associates, Srivasa Thakura is the incarnation of Srila Narada Muni, while his brother Sri Rama Pandita is the incarnation of Parvata Muni, Narada's own intimate friend." },
  { q: "What does the incident of Srivasa Thakura's son teach devotees?", a: "It teaches that pure devotional service transcends even the most painful material loss. Srivasa Thakura did not allow his son's death to interrupt Sri Chaitanya Mahaprabhu's kirtana, understanding that every soul is Krishna's eternal servant and departs strictly according to the Lord's own arrangement." },
  { q: "Did anyone try to defame Srivasa Thakura as a worshiper of the goddess Durga?", a: "Yes. A brahmana named Gopala Capala, envious of Srivasa Thakura's standing, placed the paraphernalia for goddess worship, including wine, outside his door to make people believe he secretly worshiped Bhavani. Sri Chaitanya Mahaprabhu regarded this as a severe offense at a pure devotee's feet, and Gopala Capala suffered from leprosy until he sought Srivasa Thakura's forgiveness and was fully restored, later becoming the Vaishnava devotee known as Devakinandana dasa Thakura." },
  { q: "Who was Narayani, and how is she connected to Srivasa Thakura?", a: "Narayani was Srivasa Thakura's niece, raised within his household. As a small child she received the personal remnants of Sri Chaitanya Mahaprabhu's own food during the Maha-prakasha-lila, and she later became the mother of Srila Vrindavana dasa Thakura, the author of Sri Chaitanya-bhagavata." },
  { q: "What happened when Srivasa Thakura read the thousand names of Vishnu to Sri Chaitanya Mahaprabhu?", a: "At the Lord's own request, Srivasa Thakura read aloud from the Brhat-sahasra-nama. When he reached the holy name of Lord Nrisimhadeva, Sri Chaitanya Mahaprabhu became fully absorbed in that mood and ran through the streets of Navadvipa with a club, in the ecstasy of the Lord's fierce incarnation, before returning to Srivasa Thakura's house." },
  { q: "Did Srivasa Thakura take part in the Ratha-yatra festival at Jagannatha Puri?", a: "Yes. Sri Chaitanya Mahaprabhu personally appointed Srivasa Thakura as the leader of one of the kirtana parties that danced before Lord Jagannatha's car, honouring him, together with Svarupa Damodara, as one of the two chief performers of that festival's sankirtana." },
  { q: "When are Srivasa Thakura's appearance and disappearance days observed?", a: "As with all Vaishnava commemorative days, the dates follow the lunar (tithi) calendar and shift each year. Please refer to the current Gaudiya Vaishnava calendar for the exact dates." },
];

export default function BlogClient() {
    return (
        <div className="min-h-screen bg-[#FFF9F0] selection:bg-[#c9973a] selection:text-white">
            <Navbar />
            <article className="at-blog-wrap">
                <header className="at-blog-header">
                <p className="at-hero-label">Gaudiya Vaishnava Saints Series</p>
                <h1 className="at-blog-title">Sri Srivasa Thakura</h1>
                <div className="at-hero-line" />
                <p className="at-blog-subtitle">
                    <strong>The Heart of the Sankirtana Movement:</strong> Glorifying the foremost devotee of the Panca-tattva, in whose courtyard Sri Chaitanya Mahaprabhu first revealed the nightly sankirtana that would flood the world.
                </p>
                <p className="at-blog-byline">
                    By <strong>HKM Chennai</strong> — Dakshina Dwaraka Dham, Thiruvanmiyur
                </p>
            </header>

            <nav className="sp-toc" aria-label="Table of Contents">
                <h2 className="sp-toc-title">Table of Contents</h2>
                <ol className="sp-toc-list">
                    <li><a href="#quick-facts"><span className="sp-toc-num">01</span>Quick Facts</a></li>
                    <li><a href="#obeisances"><span className="sp-toc-num">02</span>Offering Obeisances</a></li>
                    <li><a href="#early-life"><span className="sp-toc-num">03</span>Family and Early Life</a></li>
                    <li><a href="#panca-tattva"><span className="sp-toc-num">04</span>Position in Panca-tattva</a></li>
                    <li><a href="#srivasa-angan"><span className="sp-toc-num">05</span>Srivasa Angan</a></li>
                    <li><a href="#animals"><span className="sp-toc-num">06</span>Liberation of Animals</a></li>
                    <li><a href="#maha-prakasha"><span className="sp-toc-num">07</span>Maha-prakasha-lila</a></li>
                    <li><a href="#narayani"><span className="sp-toc-num">08</span>Narayani's Blessing</a></li>
                    <li><a href="#gopala-capala"><span className="sp-toc-num">09</span>Gopala Capala</a></li>
                    <li><a href="#chand-kazi"><span className="sp-toc-num">10</span>Public Sankirtana</a></li>
                    <li><a href="#headquarters"><span className="sp-toc-num">11</span>Sankirtana Headquarters</a></li>
                    <li><a href="#ratha-yatra"><span className="sp-toc-num">12</span>Ratha-yatra Sankirtana</a></li>
                    <li><a href="#later-life"><span className="sp-toc-num">13</span>Later Life and Disappearance</a></li>
                    <li><a href="#lila-sthali"><span className="sp-toc-num">14</span>Lila Sthali</a></li>
                    <li><a href="#lessons"><span className="sp-toc-num">15</span>Lessons for the Devotee</a></li>
                    <li><a href="#faqs"><span className="sp-toc-num">16</span>Frequently Asked Questions</a></li>
                </ol>
            </nav>

            <div className="sp-content-body">
                <p>
                    A pure devotee of the Lord is not measured by wealth, scholarship, or social position, but by the
                    completeness of his surrender. Sri Srivasa Thakura, one of the five eternal features of the
                    Panca-tattva, is the scriptural standard by which this truth is taught.
                </p>
                <p>
                    He was not a king, nor a renunciant, nor a famed scholar — he was a mere brahmana householder of
                    Navadvipa — yet the Supreme Personality of Godhead Himself, in the form of Sri Chaitanya Mahaprabhu,
                    chose no other place to manifest His most confidential pastimes than the modest courtyard of Srivasa
                    Thakura's own home. This is the process of bhakti: it does not wait upon material qualification,
                    and wherever it is present in a pure heart, the Lord Himself is drawn to reside.
                </p>
                <p>
                    It is therefore not incidental that Sri Krishnadasa Kaviraja Gosvami, when beginning to describe the
                    innumerable devotees of Lord Chaitanya in Sri Caitanya-caritamrta, places Srivasa Thakura's name
                    first.
                </p>

                <blockquote className="sp-quote">
                    "All glories to the devotees of Lord Caitanya, headed by Srivasa Thakura!"
                    <br /><br />
                    <span style={{ fontSize: '0.9em', color: '#666' }}>— Srila Prabhupada, Sri Caitanya-caritamrta, Adi-lila 9.1, Translation</span>
                </blockquote>

                <p>
                    This article gathers every pastime concerning Srivasa Thakura that Srila Prabhupada himself narrates or
                    references in Sri Chaitanya-charitamrita — from his birth and family, through the nightly sankirtana
                    at his home, to his final years in separation from the Lord. Every pastime examined below teaches the
                    same conclusion from a different angle: that a devotee fixed in Krishna consciousness is unshaken by
                    material circumstance, that an offense at the feet of such a devotee is more dangerous than an offense
                    against the Lord Himself, and that the Lord's own mercy flows through His pure devotees rather
                    than around them.
                </p>
                <Divider />

                <div id="quick-facts" className="sp-sec-block">
                    <SectionHead num="01" title="Quick Facts" />
                    <QuickFacts facts={quickFacts} />
                </div>
                <Divider />

                <div id="obeisances" className="sp-sec-block">
                    <SectionHead num="02" title="Offering Obeisances to Srivasa Thakura" />
                    <p>
                        Srivasa Thakura is one of the foremost associates of Sri Chaitanya Mahaprabhu and is eternally glorified
                        as a member of the <strong>Panca-tattva</strong>. His name is lovingly remembered whenever devotees
                        chant the Panca-tattva maha-mantra before the Hare Krishna maha-mantra:
                    </p>
                    <blockquote className="sp-quote">
                        (jaya) śrī-kṛṣṇa-caitanya prabhu nityānanda<br />
                        śrī-advaita gadādhara śrīvāsādi-gaura-bhakta-vṛnda
                    </blockquote>
                    <p>
                        The phrase <em>"śrīvāsādi-gaura-bhakta-vṛnda"</em> means "Srivasa Thakura and all the
                        devotees of Lord Gauranga," honoring Srivasa Thakura as one of Mahaprabhu's most intimate
                        associates and the representative of the pure devotees within the Panca-tattva.
                    </p>
                </div>
                <Divider />

                <div id="early-life" className="sp-sec-block">
                    <SectionHead num="03" title="Family and Early Life" />
                    <SectionImage 
                        src="/images/blogs/sri-srivasa-thakura/32b097fc-87b5-4f7a-9a13-4e3d7bb319d8.png" 
                        alt="Srivasa Thakura" 
                        caption="Srivasa Thakura (far right), an eternal associate of Sri Chaitanya Mahaprabhu"
                    />
                    <p>
                        Every acharya's life demonstrates that the Lord prepares His eternal associates long before their
                        mission becomes visible to the world. Srivasa Thakura was born to Sri Jaladhara Pandita, a traditional
                        brahmana of Sri Hatta (present-day Sylhet, Bangladesh), some thirty years before Sri Chaitanya
                        Mahaprabhu Himself appeared — a gap that is itself significant, since it meant Srivasa Thakura was
                        already a mature, learned householder by the time the Lord's own pastimes began, ready to receive
                        Him rather than needing to be trained alongside Him.
                    </p>
                    <p>
                        Jaladhara Pandita had five sons, and two of them, Srivasa and his youngest brother Sri Rama Pandita,
                        became founders of their own branches on the tree of Lord Chaitanya's devotees. This is not
                        incidental family history; Sri Gaura-ganoddesha-dipika identifies Srivasa Pandita as the incarnation of
                        Srila Narada Muni himself, and Sri Rama Pandita as the incarnation of Parvata Muni, Narada's
                        constant companion. The eternal friendship of these two great sages had, in other words, descended again
                        in this age specifically to help the Lord distribute love of Krishna to the world — nothing about their
                        appearance was accidental or ordinary.
                    </p>
                    <p>
                        When Srivasa Thakura was still young, his eldest brother Nalina Pandita passed away, and the family
                        relocated from Sri Hatta to Navadvipa, on the bank of the Ganges, so that Srivasa could grow up in the
                        constant association of devotees rather than in relative isolation. There he married Srimati Malini
                        Devi, herself glorified as an incarnation of Mother Ambika, who nursed the child Krishna in Vraja.
                        Srivasa Thakura and Malini Devi were on terms of close family friendship with Jagannatha Mishra and
                        Sacidevi, the parents of Sri Chaitanya Mahaprabhu, and Malini Devi was personally present to help at the
                        time of Nimai's birth — placing Srivasa Thakura's household at the very centre of the
                        Lord's pastimes from the first day of His earthly life.
                    </p>
                    <p>
                        Srila Prabhupada notes in his purport to Sri Caitanya-caritamrta that Srivasa Thakura lived at Navadvipa
                        together with his three younger brothers, Sri Rama, Sripati, and Srinidhi, along with their entire
                        extended household, and that this joint family gave itself over completely to the Lord's service:
                    </p>
                    <blockquote className="sp-quote">
                        "They knew no other god or goddess."
                        <br /><br />
                        <span style={{ fontSize: '0.9em', color: '#666' }}>— Srila Prabhupada, Sri Chaitanya-charitamrita, Adi-lila 10.8, Purport</span>
                    </blockquote>
                    <p>
                        Srila Prabhupada adds in the same purport that this single-minded dedication is the actual qualification
                        of a Vaishnava household, and warns that no one who wishes to become a pure, staunch devotee should
                        divide his shelter between the Supreme Lord and the various demigods.
                    </p>
                    <p style={{ fontSize: '0.9em', color: '#666' }}>
                        Reference: Sri Gaura-ganoddesha-dipika, verse 90; Sri Chaitanya-charitamrita, Adi-lila 10.8, Purport
                    </p>
                </div>
                <Divider />

                <div id="panca-tattva" className="sp-sec-block">
                    <SectionHead num="04" title="His Position in the Panca-tattva" />
                    <p>
                        Srila Bhaktisiddhanta Sarasvati Thakura explains in his Anubhasya commentary that although Sri Chaitanya
                        Mahaprabhu, Nityananda Prabhu, Advaita Acharya, Gadadhara Pandita, and Srivasa Thakura are all situated
                        on the very same absolute platform, they manifest distinct spiritual features so that devotees may
                        relish different varieties of transcendental relationship with the Lord. Srila Prabhupada summarises the
                        distinction directly: Sri Chaitanya Mahaprabhu is the Lord Himself appearing in the mood of a devotee;
                        Nityananda Prabhu is His plenary expansion; Advaita Acharya is His incarnation; Gadadhara Pandita is His
                        internal potency; and Srivasa Thakura is the manifestation of the pure devotee himself.
                    </p>
                    <p>
                        Within this framework, Srivasa Thakura represents jiva-tattva — the constitutional position of the pure
                        devotee soul, as distinct from the Lord's own personal or plenary manifestations. He stands as the
                        archetype and leader of the countless unalloyed devotees of the Lord.
                    </p>
                    <blockquote className="sp-quote">
                        "There are innumerable pure devotees of the Lord, headed by Srivasa Thakura."
                        <br /><br />
                        <span style={{ fontSize: '0.9em', color: '#666' }}>— Srila Prabhupada, Sri Chaitanya-charitamrita, Adi-lila 7.16, Translation</span>
                    </blockquote>
                    <p>
                        This is precisely why, whenever the Panca-tattva mantra is chanted, all such devotees are addressed
                        collectively as srivasadi-gaura-bhakta-vrinda — the devotees of Lord Chaitanya headed by Srivasa
                        Thakura. A devotee chanting this mantra is, in effect, praying to be counted among that same company.
                    </p>
                    <p style={{ fontSize: '0.9em', color: '#666' }}>
                        Reference: Sri Chaitanya-charitamrita, Adi-lila 7.6–17, Purports
                    </p>
                </div>
                <Divider />

                <div id="srivasa-angan" className="sp-sec-block">
                    <SectionHead num="05" title="Srivasa Angan: The Courtyard Where the Sankirtana Movement Was Born" />
                    <SectionImage 
                        src="/images/blogs/sri-srivasa-thakura/Srivasa_Angan_Site_of_the_72_Hour_Dance_and_the_Wing_Pastime.jpg" 
                        alt="Srivasa Angan, the courtyard of sankirtana" 
                        caption='Srivasa Angan- Site of the 72-Hour Dance and the "Wing" Pastime.'
                    />
                    <p>
                        A pure devotee does not need to be told twice when the Lord's service calls. As Nimai grew from a
                        brilliant, restless child into the finest scholar of Navadvipa, Srivasa Thakura quietly understood, well
                        before it was publicly declared, that this boy was Krishna Himself, and simply waited for the moment the
                        Lord would choose to reveal His mission. That moment came when Sri Chaitanya Mahaprabhu began to
                        manifest waves of pure devotional ecstasy following His initiation, and Srivasa Thakura's response
                        was immediate: he and his brothers threw open the doors of their home without a moment's
                        hesitation. It is in the courtyard of that house — remembered ever since as Srivasa Angan — that Sri
                        Chaitanya Mahaprabhu held nightly kirtana with His most confidential devotees for a full year.
                    </p>
                    <p>
                        These were not ordinary devotional gatherings. The kirtanas at Srivasa Angan were so intensely
                        transcendental that the Lord's own associates would lose external consciousness and manifest
                        their eternal spiritual forms while chanting and dancing, so much so that this courtyard is considered
                        non-different from Vrindavana itself, transplanted into Navadvipa. Because the gathering was this
                        confidential, Srivasa Thakura kept the doors bolted every night, admitting only the Lord's most
                        intimate devotees, while the merely curious and the openly envious were left standing outside the gate.
                    </p>
                    <blockquote className="sp-quote">
                        "This ecstatic chanting was performed with the doors closed so that nonbelievers who came to make fun could not gain entrance."
                        <br /><br />
                        <span style={{ fontSize: '0.9em', color: '#666' }}>— Srila Prabhupada, Sri Chaitanya-charitamrita, Adi-lila 17.35, Translation</span>
                    </blockquote>
                    <p>
                        He adds that this is a special-case instruction rather than the ordinary policy of the sankirtana
                        movement: large-scale congregational chanting of the Hare Krishna maha-mantra is meant to be open to
                        everyone, and it is only when nonbelievers come specifically to disturb or mock the chanting that such
                        doors should be closed.
                    </p>
                </div>
                <Divider />

                <div id="animals" className="sp-sec-block">
                    <SectionHead num="06" title="Even the Animals in His Household Were Delivered" />
                    <p>
                        Such was the purifying power of the sankirtana performed nightly at Srivasa Thakura's home that
                        its influence was not confined to human beings alone. Discussing how even a doglike nondevotee can
                        gradually become a devotee simply through the association of a pure Vaishnava, Srila Prabhupada gives
                        Srivasa Thakura's own household as a direct example:
                    </p>
                    <blockquote className="sp-quote">
                        "Cats and dogs in the household of Srivasa Thakura were also liberated."
                        <br /><br />
                        <span style={{ fontSize: '0.9em', color: '#666' }}>— Srila Prabhupada, Sri Chaitanya-charitamrita, Adi-lila 10.1, Purport</span>
                    </blockquote>
                    <p>
                        Srila Prabhupada explains that cats and dogs are not ordinarily expected to develop devotion, yet in the
                        association of a pure devotee even they are delivered. This small but striking detail is offered by
                        Srila Prabhupada not as an exaggeration but as sober evidence of exactly how spiritually charged the
                        atmosphere of Srivasa Angan was — evidence that a devotee's home, when fully surrendered to the
                        Lord's service, purifies everything and everyone within its walls.
                    </p>
                    <p style={{ fontSize: '0.9em', color: '#666' }}>
                        Reference: Sri Chaitanya-charitamrita, Adi-lila 10.1, Purport
                    </p>
                </div>
                <Divider />

                <div id="maha-prakasha" className="sp-sec-block">
                    <SectionHead num="07" title="The Maha-prakasha-lila: Lord Chaitanya Reveals His Divine Form" />
                    <SectionImage 
                        src="/images/blogs/sri-srivasa-thakura/f872a50a-0780-455c-8ba7-9046af38fe32.png" 
                        alt="Mahaprakash lila" 
                        caption="At Srivasa Angan, Lord Caitanya showed Nityananda Prabhu His six armed form holding a bow and arrow, a flute, a water pot, and a danda."
                    />
                    <p>
                        Sri Chaitanya Mahaprabhu ordinarily conceals His identity as the Supreme Personality of Godhead behind
                        the mood of His own devotee, tasting the love that a devotee feels for Krishna rather than openly
                        displaying His Godhood. What happened at Srivasa Thakura's house is the great exception to that
                        concealment, and it unfolded in two connected stages that are worth separating clearly, since each has a
                        specific devotee at its centre.
                    </p>
                    <p>
                        The first stage was shown specifically to Sri Nityananda Prabhu. This took place after an abhisheka
                        ceremony held in Srivasa Thakura's house, in which the Lord sat on the bed of Vishnu while the
                        devotees worshiped Him with the Vedic hymns of the Purusha-sukta. Immediately afterward, when
                        Nityananda Prabhu arrived and met Sri Chaitanya Mahaprabhu, the Lord revealed Himself to him in three
                        successive forms. First He showed a six-armed form, holding a conchshell, disc, club, lotus, bow, and
                        flute. Then He showed a four-armed form, standing in a three-curved posture, with two hands playing a
                        flute and the other two holding a conch and disc. Finally He showed Nityananda Prabhu His original
                        two-armed form as Krishna, the son of Maharaja Nanda, simply playing His flute, His body bluish and
                        dressed in yellow — the same darshan mother Sachi herself received of her two sons as Krishna and
                        Balarama on this occasion. Nityananda Prabhu then personally performed Vyasa-puja, worship of the
                        spiritual master, to Sri Chaitanya Mahaprabhu in gratitude.
                    </p>
                    <p>
                        This is a precise, deliberate sequence, not a random display: six arms, then four, then two, ending on
                        Krishna's own original two-armed form as a cowherd boy — each revelation drawing closer to the
                        Lord's most intimate identity, shown to the one devotee, Nityananda Prabhu, whose own position as
                        Krishna's plenary expansion made him fit to receive it.
                    </p>
                    <p>
                        Following this, Sri Chaitanya Mahaprabhu remained in that ecstatic, self-revealing state for a
                        continuous twenty-one hours, and it is this second, longer stage that Gaudiya Vaishnava tradition
                        specifically calls the Maha-prakasha-lila, or sata-prahariya-bhava, "the ecstasy of twenty-one
                        hours." Unlike the vision shown only to Nityananda Prabhu, this extended manifestation was
                        witnessed by the whole assembly of devotees gathered in Srivasa Thakura's courtyard. Sri
                        Chaitanya-bhagavata records that during these twenty-one hours the Lord exhibited the forms of several
                        of His own incarnations in turn, that the devotees performed a royal abhisheka worthy of the king of
                        kings, and that the Lord granted personal benedictions to each devotee according to his own
                        heart's desire — on this same occasion He even blessed a humble maidservant named Duhkhi, "the
                        sorrowful one," with the new name Sukhi, "the joyful one."
                    </p>
                    <p>
                        What is the point of such an extraordinary, twenty-one-hour self-revelation? Not merely to astonish the
                        devotees present, but to remove any last doubt from their hearts. Having personally seen the
                        Lord's own forms with their own eyes, the devotees of Srivasa Angan no longer needed faith alone
                        to know that Sri Chaitanya Mahaprabhu was Krishna Himself, the source of all incarnations — they had
                        direct realization. And this realization was granted nowhere else but in the home of Srivasa Thakura,
                        which is why Gaudiya Vaishnava tradition names his courtyard, alongside the home of Mother Sachi, as one
                        of the handful of places where the Lord's most confidential pastimes eternally take place.
                    </p>
                    <p style={{ fontSize: '0.9em', color: '#666' }}>
                        Reference: Sri Chaitanya-charitamrita, Adi-lila 17.12–18; Sri Chaitanya-bhagavata (Vrindavana dasa Thakura),
                        Madhya-khanda, Chapters 9–10
                    </p>
                </div>
                <Divider />

                <div id="narayani" className="sp-sec-block">
                    <SectionHead num="08" title="Narayani's Blessing: Mercy Extended to His Own Household" />
                    <p>
                        The mercy that flooded Srivasa Thakura's courtyard during the Maha-prakasha-lila did not fall only
                        on adult, learned devotees. Srivasa Thakura's own niece, a small child named Narayani, who was
                        being raised within his household, received the Lord's direct and personal favour on this same
                        occasion. Srila Prabhupada identifies her precisely, connecting her destiny to the future of Gaudiya
                        Vaishnava literature itself, in a translated verse whose importance cannot be overstated:
                    </p>
                    <blockquote className="sp-quote">
                        "Narayani eternally eats the remnants of the food of Caitanya Mahaprabhu."
                        <br /><br />
                        <span style={{ fontSize: '0.9em', color: '#666' }}>— Srila Prabhupada, Sri Chaitanya-charitamrita, Adi-lila 8.41, Translation</span>
                    </blockquote>
                    <p>
                        Srila Prabhupada explains in his purport that this same Narayani, favoured from childhood with the
                        Lord's own remnants, grew up to become the mother of Srila Vrindavana dasa Thakura — the very
                        author of Sri Chaitanya-bhagavata, the first and foundational biography of Sri Chaitanya
                        Mahaprabhu's pastimes. Srila Prabhupada further notes, citing the Gaura-ganoddesha-dipika, that
                        Srivasa Thakura's wife Malini Devi is celebrated as an incarnation of Mother Ambika, the nurse who
                        fed the child Krishna at her own breast, and that Narayani herself was, in that same krishna-lila, the
                        sister of Ambika — so that the entire household of Srivasa Thakura carried, generation after generation,
                        an eternal and specific relationship with the Lord's own confidential service.
                    </p>
                    <p>
                        This pastime carries a gentle but important lesson for every householder devotee: the mercy that flows
                        through a surrendered Vaishnava home does not skip the children of that home. A pure devotee's
                        household is not merely a place he personally serves the Lord from — it becomes, by his own surrender, a
                        channel through which the Lord's mercy naturally extends to everyone sheltered within it, down to
                        a small child not yet capable of understanding what was being given to her.
                    </p>
                    <p style={{ fontSize: '0.9em', color: '#666' }}>
                        Reference: Sri Chaitanya-charitamrita, Adi-lila 10.8 and Adi-lila 8.41, Translation and Purport
                    </p>
                </div>
                <Divider />

                <div id="gopala-capala" className="sp-sec-block">
                    <SectionHead num="09" title="Gopala Capala's Attempt to Defame Srivasa Thakura" />
                    <p>
                        Shastra warns repeatedly that an offense committed at the feet of a Vaishnava is graver, and its
                        reaction more severe, than an offense committed directly against the Lord — for the Lord can tolerate an
                        insult to Himself far more easily than He tolerates an insult to His pure devotee. Nowhere in Sri
                        Chaitanya Mahaprabhu's pastimes is this principle demonstrated more sharply than in the case of
                        Gopala Capala.
                    </p>
                    <p>
                        Srivasa Thakura's reputation as an exalted Vaishnava was, by this time, well established and
                        widely respected throughout Navadvipa. This very reputation became the target of envy. One night, while
                        kirtana was proceeding as usual within the closed doors of Srivasa Thakura's house, a brahmana
                        named Gopala Capala — described in Sri Chaitanya-charitamrita as talkative, rough-spoken, and the chief
                        among the nonbelievers of the town — resolved to destroy that reputation by a single act of deception.
                        Srila Prabhupada explains his motive plainly:
                    </p>
                    <blockquote className="sp-quote">
                        "wanted to reduce his prestige by bringing him down to the platform of the saktas"
                        <br /><br />
                        <span style={{ fontSize: '0.9em', color: '#666' }}>— Srila Prabhupada, Sri Chaitanya-charitamrita, Adi-lila 17.37-38, Purport</span>
                    </blockquote>
                    <p>
                        Under cover of darkness, Gopala Capala placed before Srivasa Thakura's own door the paraphernalia
                        used for worshiping the goddess Bhavani — a red flower, a plantain leaf, a pot of wine, and reddish
                        sandalwood paste. His intention was transparent: any respectable brahmana of the neighbourhood who saw
                        this the following morning would conclude that Srivasa Thakura, whom everyone believed to be a pure
                        Vaishnava, was in fact secretly a sakta who worshiped the goddess with wine under cover of night.
                    </p>
                    <p>
                        When Srivasa Thakura opened his door at dawn and discovered what had been arranged there, he did not
                        panic, nor did he angrily search for the culprit. He gathered the respectable people of the
                        neighbourhood and, with open irony, told them plainly that this was his nightly worship of the goddess,
                        and that they could now judge his position for themselves. A devotee whose relationship with Krishna is
                        secure is not shaken by what others choose to believe about him, however serious the accusation — he can
                        even meet it with a smile.
                    </p>
                    <p>
                        The residents of Navadvipa, who knew Srivasa Thakura's character intimately, were not deceived by
                        the scheme. But Sri Chaitanya Mahaprabhu, for whom an offense at a devotee's feet is never a small
                        matter, did not allow it to end merely in Gopala Capala's public embarrassment. In time, Gopala
                        Capala's body broke out in the sores of leprosy, and in that suffering and universally shunned
                        condition he finally approached the Lord directly and begged for mercy. The Lord's reply, in
                        Srila Prabhupada's rendering, leaves no doubt about how seriously this offense was regarded:
                    </p>
                    <blockquote className="sp-quote">
                        "you will have to fall down into hellish life for ten million births"
                        <br /><br />
                        <span style={{ fontSize: '0.9em', color: '#666' }}>— Srila Prabhupada, Sri Chaitanya-charitamrita, Adi-lila 17.52, Translation</span>
                    </blockquote>
                    <p>
                        Srila Prabhupada explains further that this is precisely why sastra treats false accusation of a
                        Vaishnava so gravely: it is a form of black magic dressed up as religion, no different in principle from
                        worshiping a demigod to inflict harm, and its reaction is correspondingly severe. Gopala Capala was
                        only saved, years later, when Sri Chaitanya Mahaprabhu accepted sannyasa and returned to Kulia; the
                        Lord then instructed him that he could be freed from the reaction only if he approached Srivasa Thakura
                        himself and sincerely begged his forgiveness. Srivasa Thakura, being a pure Vaishnava whose nature was
                        compassionate, naturally forgave him, and Gopala Capala was fully cured, later becoming a recognized
                        devotee of the Lord known as Devakinandana dasa Thakura.
                    </p>
                    <p style={{ fontSize: '0.9em', color: '#666' }}>
                        Reference: Sri Chaitanya-charitamrita, Adi-lila 17.37–58
                    </p>
                </div>
                <Divider />

                <div id="chand-kazi" className="sp-sec-block">
                    <SectionHead num="10" title="Public Sankirtana and the Confrontation with Chand Kazi" />
                    <SectionImage 
                        src="/images/blogs/sri-srivasa-thakura/Gour-Nityananda2.jpg.jpeg" 
                        alt="Khol Banga Danga" 
                        caption="Khol Banga Danga (Srivas Angan): the place where the Mirdanga was broken"
                    />
                    <p>
                        As Sri Chaitanya Mahaprabhu's private nightly kirtanas at Srivasa Angan grew in intensity, envious
                        residents of Navadvipa complained to the local magistrate, Chand Kazi, who ordered the congregational
                        chanting suppressed and had a mridanga drum broken during one such kirtana in protest. Far from
                        silencing the movement, this opposition became the occasion for Sri Chaitanya Mahaprabhu's first
                        great public demonstration of sankirtana: He organised a massive nagara-sankirtana procession through
                        the streets of Navadvipa that proceeded directly to the Kazi's own residence.
                    </p>
                    <p>Srila Prabhupada notes the outcome of this historic confrontation plainly:</p>
                    <blockquote className="sp-quote">
                        "the Kazi was converted to a devotee"
                        <br /><br />
                        <span style={{ fontSize: '0.9em', color: '#666' }}>— Srila Prabhupada, Sri Chaitanya-charitamrita, Adi-lila 17.224-226, Purport</span>
                    </blockquote>
                    <p>
                        This single episode — beginning with opposition to the kirtana associated with Srivasa Thakura's
                        household — marks the turning point at which Lord Chaitanya's sankirtana movement stepped out from
                        behind closed courtyard doors and into the public streets of Navadvipa, exactly as it continues to do in
                        every town and village where devotees chant Hare Krishna in public today.
                    </p>
                    <p style={{ fontSize: '0.9em', color: '#666' }}>
                        Reference: Sri Chaitanya-charitamrita, Adi-lila 17.124–226
                    </p>
                </div>
                <Divider />

                <div id="headquarters" className="sp-sec-block">
                    <SectionHead num="11" title="Srivasa Thakura's House: One of the Two Headquarters of the Sankirtana Movement" />
                    <p>
                        Srila Prabhupada, describing the whole sweep of Lord Chaitanya's early preaching in Navadvipa,
                        identifies Srivasa Thakura's home as one of only two households from which the entire sankirtana
                        movement was administered and spread. Together with Sri Advaita Acharya's house, Srivasa
                        Thakura's home became the base from which Nityananda Prabhu and Haridasa Thakura, described by
                        Srila Prabhupada as the Lord's two chief lieutenants, were sent out daily, door to door, to preach
                        Srimad-Bhagavatam and invite the people of Navadvipa into the sankirtana movement. Srivasa
                        Thakura's courtyard was, in other words, not simply a private residence but functioned as one of
                        the movement's two operational centres during this most active phase of Lord Chaitanya's
                        household life.
                    </p>
                    <p>
                        Srila Prabhupada also records that Sri Chaitanya Mahaprabhu personally staged dramatic performances of
                        pastimes from the life of Lord Krishna together with His devotees, and that Srivasa Thakura, alongside
                        Advaita Prabhu, was among the intimate associates who took part in these dramas at the house of
                        Chandrasekhara — showing that Srivasa Thakura's service to the Lord extended even to this playful,
                        artistic dimension of devotional life, always performed in the association of pure devotees rather than
                        by professional actors with no devotional sentiment.
                    </p>
                    <p style={{ fontSize: '0.9em', color: '#666' }}>
                        Reference: Srila Prabhupada, Introduction to Sri Chaitanya-charitamrita; Sri Chaitanya-charitamrita, Adi-lila 10, Purport
                    </p>
                </div>
                <Divider />

                <div id="ratha-yatra" className="sp-sec-block">
                    <SectionHead num="12" title="Leading Sankirtana at the Jagannatha Puri Ratha-yatra" />
                    <SectionImage 
                        src="/images/blogs/sri-srivasa-thakura/image1.png" 
                        alt="Sankirtana at Ratha-yatra" 
                        caption="Srivasa Thakura leading sankirtana at the Jagannatha Puri Ratha-yatra"
                    />
                    <p>
                        Srivasa Thakura's role as a leader of sankirtana was not confined to Navadvipa. Years later, when
                        Sri Chaitanya Mahaprabhu resided at Jagannatha Puri and personally organised the ecstatic dancing before
                        the Ratha-yatra car, He divided His assembled devotees into several kirtana parties, each with its own
                        leading singer and group of responsive chanters. Srila Prabhupada records that of these parties:
                    </p>
                    <blockquote className="sp-quote">
                        "The Lord then formed another group with Srivasa Thakura as the chief man."
                        <br /><br />
                        <span style={{ fontSize: '0.9em', color: '#666' }}>— Srila Prabhupada, Sri Chaitanya-charitamrita, Madhya-lila 13, Translation</span>
                    </blockquote>
                    <p>
                        Srivasa Thakura led this party of singers before Lord Jagannatha's car alongside Svarupa Damodara,
                        who led the first party — the two of them singled out by Srila Prabhupada as the two chief performers of
                        that year's sankirtana, honoured personally by the Lord with garlands and sandalwood pulp from His
                        own hand.
                    </p>
                    <p>
                        A further incident from this same festival shows how completely Srivasa Thakura's mind remained
                        absorbed in the Lord's dancing, undistracted even by his own physical surroundings. As King
                        Pratparudra watched Sri Chaitanya Mahaprabhu dance, his personal attendant Haricandana repeatedly touched
                        and pushed Srivasa Thakura, asking him to step aside so the King could see. So completely absorbed was
                        Srivasa Thakura in watching the Lord that he did not understand why he was being touched, and after
                        being pushed again and again, he turned and struck Haricandana's hand away. When the King himself
                        saw what had happened, far from taking offense on his attendant's behalf, he corrected Haricandana
                        directly, reminding him what a rare fortune it was to have been touched at all by a devotee as elevated
                        as Srivasa Thakura. The King's own humility before a simple brahmana devotee — even while that
                        devotee was, in that moment, unaware of the King's presence altogether — is itself part of what
                        this pastime teaches: a Vaishnava's spiritual position is not diminished by his outward simplicity,
                        and a wise ruler recognises that position even when the devotee himself has no such thought in mind.
                    </p>
                    <p style={{ fontSize: '0.9em', color: '#666' }}>
                        Reference: Sri Chaitanya-charitamrita, Madhya-lila, Chapter 13
                    </p>
                </div>
                <Divider />

                <div id="later-life" className="sp-sec-block">
                    <SectionHead num="13" title="Later Life and Disappearance" />
                    <p>
                        After Sri Chaitanya Mahaprabhu accepted the sannyasa order and departed Navadvipa for Jagannatha Puri,
                        Srivasa Thakura found the separation unbearable. Navadvipa without the daily presence of his beloved
                        Lord had become a place of intolerable absence, and he eventually left the city of his most cherished
                        pastimes to reside at Kumarahatta, where he passed the remainder of his life immersed in remembrance of
                        Sri Chaitanya Mahaprabhu. Srila Prabhupada notes that other exalted devotees were drawn to the same
                        place in the years that followed: Sivananda Sena, the great householder devotee who personally organised
                        the annual pilgrimage of Bengali devotees to Jagannatha Puri, resided there as well, and Vasudeva Datta
                        later took up residence in the same town.
                    </p>
                    <p style={{ fontSize: '0.9em', color: '#666' }}>
                        Reference: Sri Chaitanya-charitamrita, Adi-lila 10.8, Purport
                    </p>
                    <p>
                        As with most Gaudiya Vaishnava saints, the precise calendar date of Srivasa Thakura's appearance
                        and disappearance is reckoned according to the lunar tithi each year rather than a fixed solar date, and
                        devotees traditionally glorify him on both occasions, since the whole of his life — from his birth as
                        Narada's incarnation to his final days in separation from the Lord — is a single continuous
                        offering of devotional service.
                    </p>
                </div>
                <Divider />

                <div id="lila-sthali" className="sp-sec-block">
                    <SectionHead num="14" title="Lila Sthali: Places Sanctified by Srivasa Thakura" />
                    <div className="mt-6 space-y-6">
                        {lilaSthali.map((l) => (
                            <div key={l.place} className="rounded-lg border border-[#C9A84C]/40 bg-white p-5 sm:p-6 shadow-sm">
                                <h3 className="font-serif text-lg font-semibold text-[#3D1A00]">{l.place}</h3>
                                <p className="mt-2 font-serif text-[1.05rem] leading-relaxed text-[#3D1A00]/80">
                                    {l.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <Divider />

                <div id="lessons" className="sp-sec-block">
                    <SectionHead num="15" title="Lessons for the Devotee" />
                    <div className="mt-6 space-y-6">
                        {lessons.map((l, i) => (
                            <div key={i} className="rounded-lg border border-[#C9A84C]/30 bg-[#FDF6E3]/50 p-6 sm:p-7 shadow-sm">
                                <h3 className="font-serif text-xl font-semibold italic text-[#3D1A00]">{l.title}</h3>
                                <p className="mt-3 font-serif text-[1.05rem] leading-relaxed text-[#3D1A00]/90">
                                    {l.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <Divider />

                <div id="faqs" className="sp-sec-block">
                    <SectionHead num="16" title="Frequently Asked Questions" />
                    <FaqAccordion items={faqs} />
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
