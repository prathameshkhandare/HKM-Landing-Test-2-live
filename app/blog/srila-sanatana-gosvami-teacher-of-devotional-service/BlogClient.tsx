'use client';

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
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

const SectionImage = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
    <div className="sp-sec-image-wrap">
        <img src={src} alt={alt} />
        <span className="sp-sec-caption">{caption}</span>
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

function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
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
  { label: "Full name", value: "Sri Sanatana Gosvami, formerly known as Sakara Mallik" },
  { label: "Born", value: "1488 A.D. (1410 Sakabda), in a Sarasvata brahmana family of Bengal" },
  { label: "Disappeared", value: "Full moon day of Ashadha, 1558 A.D. (1480 Sakabda), at the age of 70" },
  { label: "Braja-lila identity", value: "Rati-manjari, also called Lavanga-manjari — a dear associate of Rupa-manjari (Srila Rupa Gosvami) — according to Kavi-karnapura's Gaura-ganoddesha-dipika (181)" },
  { label: "Former occupation", value: "Chief minister (sakara mallik) in the government of Nawab Hussain Shah of Bengal" },
  { label: "Position among Gosvamis", value: "Eldest of the Six Gosvamis of Vrindavana; elder brother of Srila Rupa Gosvami" },
  { label: "Siksha from", value: "Sri Chaitanya Mahaprabhu Himself, who personally instructed him for two months at Varanasi" },
  { label: "Deities installed", value: "Sri Sri Madana-mohana, in Vrindavana" },
  { label: "Major works", value: "Brihad-Bhagavatamrita, Sri Hari-bhakti-vilasa, Sri Vaishnava-toshani (Dashama-tippani, commentary on Srimad-Bhagavatam Tenth Canto)" },
  { label: "Known for", value: "Renouncing his ministerial post to join Sri Chaitanya Mahaprabhu; receiving the Lord's confidential teachings on the science of devotional service; establishing Deity worship and literature in Vrindavana" },
  { label: "Samadhi", value: "Located beside the Sri Sri Radha-Madana-mohana temple, Vrindavana" }
];

const lilaSthali = [
  { place: "Ramakeli, Malda district, West Bengal", description: "Capital of Nawab Hussain Shah's Bengal government, where Sanatana Gosvami served as chief minister alongside his brother Rupa, and where Sri Chaitanya Mahaprabhu first accepted their obeisances. It was here that Sanatana Gosvami's resolve to leave ministerial life first took shape." },
  { place: "Varanasi (Kashi), Uttar Pradesh", description: "Where Sanatana Gosvami arrived after his escape from prison, and where Sri Chaitanya Mahaprabhu personally instructed him for two months in the complete science of devotional service, converting the Mayavadi sannyasis headed by Prakashananda Sarasvati into Vaishnavas." },
  { place: "Sri Sri Radha-Madana-mohana Temple, Vrindavana", description: "The first Deity worship established in Vrindavana by Sanatana Gosvami himself at the Lord's instruction. His samadhi is located beside this temple, where Krishna appeared before him as a cowherd boy and gave him the Govardhana-shila bearing His own footprints." },
  { place: "Radha-kunda and Syama-kunda, Vraja", description: "The sacred pair of ponds rediscovered by Sri Chaitanya Mahaprabhu. At the Lord's direction, Sanatana Gosvami and Rupa Gosvami renovated and re-excavated both kundas." },
  { place: "Govardhana Hill, Vraja", description: "The site of Sanatana Gosvami's lifelong vow of daily circumambulation, and of Krishna's mercy in providing the shila that allowed him to keep that vow in his old age." },
  { place: "Pavan Sarovar, Nandagrama, Vraja", description: "The site of Sanatana Gosvami's bhajan-kutir, where he was so absorbed in chanting that Krishna Himself brought a pot of fresh milk to him." },
  { place: "Jagannatha Puri, Odisha", description: "Where Sanatana Gosvami, suffering from skin disease, resolved to end his life beneath the Ratha-yatra wheels, and where Sri Chaitanya Mahaprabhu's forced embrace cured him completely." }
];

const lessons = [
  { title: "Krishna accepts the sincerity of an offering, never its material value.", body: "Sanatana Gosvami had nothing to give his Deity but plain dry chapatis without salt — yet Madana-mohana accepted this simple offering year after year because it came from a heart with nothing held back." },
  { title: "No worldly position, however powerful or comfortable, is worth clinging to once Krishna's service calls.", body: "Sanatana Gosvami held one of the two most powerful ministerial posts in Bengal. He gave up every bit of it, enduring imprisonment and arriving as a beggar, because no worldly position compared to sitting at the feet of Sri Chaitanya Mahaprabhu." },
  { title: "Real humility means seeing one's own past honestly, not performing false modesty.", body: "When Sanatana Gosvami told Sri Chaitanya Mahaprabhu that he considered himself fallen, he was honestly reporting the state of his heart after serving in a court surrounded by materialists, seeking spiritual purification." },
  { title: "A devotee's compassion is never limited by calculating what he personally stands to gain.", body: "Sanatana Gosvami gave the poor brahmana his touchstone without a second thought, and when the brahmana asked for something higher, he gave initiation into the holy name." },
  { title: "Shame over one's bodily condition should never block the association of a pure devotee.", body: "Sanatana Gosvami's instinct to protect Sri Chaitanya Mahaprabhu from his diseased body was out of devotion, but the Lord showed that His embrace purifies everything, healing Sanatana Gosvami instantly." }
];

const faqs = [
  { q: "Who was Srila Sanatana Gosvami?", a: "Sanatana Gosvami was the eldest of the Six Gosvamis of Vrindavana and elder brother of Srila Rupa Gosvami. A former chief minister in Bengal, he renounced his post to receive Lord Chaitanya's teachings and establish Deity worship and literature in Vrindavana." },
  { q: "What did Sri Chaitanya Mahaprabhu teach Sanatana Gosvami?", a: "Over two months at Varanasi, the Lord taught him the constitutional position of the soul as Krishna's eternal servant, the opulence and sweetness of Krishna, the process of devotional service, and 61 explanations of the atmarama verse." },
  { q: "What books did Sanatana Gosvami write?", a: "His major works are Brihad-Bhagavatamrita (gradations of devotees and bhakti), Hari-bhakti-vilasa (Vaishnava rules and etiquette), and Sri Vaishnava-toshani (commentary on the Tenth Canto of Srimad-Bhagavatam)." },
  { q: "What is the story of Sanatana Gosvami's touchstone?", a: "A poor brahmana sent by Lord Shiva asked Sanatana Gosvami for the best benediction and received a touchstone discarded in garbage. Realizing Sanatana Gosvami possessed something even greater, he threw away the stone and received initiation into the Hare Krishna maha-mantra." },
  { q: "When is Sanatana Gosvami's disappearance day observed?", a: "Srila Sanatana Gosvami disappeared on the full moon day of Ashadha in 1558 A.D. (1480 Sakabda). The date follows the lunar (tithi) calendar each year." },
  { q: "What is Sanatana Gosvami's eternal identity in Krishna's pastimes?", a: "According to Gaura-ganoddesha-dipika (181), Sanatana Gosvami is eternally Rati-manjari (or Lavanga-manjari), a dear associate of Rupa-manjari (Srila Rupa Gosvami)." },
  { q: "What is the story of Madana-mohana and the dry chapati?", a: "Sanatana Gosvami could only offer plain dry chapatis to Madana-mohana. When the Deity gently asked for salt, Sanatana Gosvami explained he had nothing more to give. Moved by his devotion, Madana-mohana arranged for Krishnadasa Kapoor to build a grand temple and establish elaborate worship." }
];

export default function BlogClient() {
    return (
        <div className="min-h-screen bg-[#FFF9F0] selection:bg-[#c9973a] selection:text-white">
            <Navbar />
            <article className="at-blog-wrap">
                <header className="at-blog-header">
                    <p className="at-hero-label">Gaudiya Vaishnava Saints Series</p>
                    <h1 className="at-blog-title">Srila Sanatana Gosvami</h1>
                    <div className="at-hero-line" />
                    <p className="at-blog-subtitle">
                        <strong>The Teacher of Devotional Service:</strong> Glorifying the eldest of the Six Gosvamis of Vrindavana, who gave up a minister's fortune to receive, and then teach the world, the science of pure devotional service.
                    </p>
                    <p className="at-blog-byline">
                        By <strong>HKM Chennai</strong> — Dakshina Dwaraka Dham, Thiruvanmiyur
                    </p>
                </header>

                <nav className="sp-toc" aria-label="Table of Contents">
                    <h2 className="sp-toc-title">Table of Contents</h2>
                    <ol className="sp-toc-list">
                        <li><a href="#quick-facts"><span className="sp-toc-num">01</span>Quick Facts</a></li>
                        <li><a href="#glorification"><span className="sp-toc-num">02</span>Glorification of Srila Sanatana Gosvami</a></li>
                        <li><a href="#ministers-life"><span className="sp-toc-num">03</span>A Minister's Life & Decision to Leave</a></li>
                        <li><a href="#escape-from-prison"><span className="sp-toc-num">04</span>Escape from Prison & Renunciation</a></li>
                        <li><a href="#teaching-at-varanasi"><span className="sp-toc-num">05</span>Two Months of Teaching at Varanasi</a></li>
                        <li><a href="#sent-to-vrindavana"><span className="sp-toc-num">06</span>Sent to Vrindavana: Deity Worship</a></li>
                        <li><a href="#madana-mohana-story"><span className="sp-toc-num">07</span>Madana-mohana & Dry Chapati</a></li>
                        <li><a href="#govardhana-shila"><span className="sp-toc-num">08</span>The Vow & Govardhana-shila</a></li>
                        <li><a href="#radharanis-gift"><span className="sp-toc-num">09</span>Radharani's Hidden Gift of Rice</a></li>
                        <li><a href="#touchstone-story"><span className="sp-toc-num">10</span>The Touchstone & Poor Brahmana</a></li>
                        <li><a href="#skin-disease"><span className="sp-toc-num">11</span>The Skin Disease & Lord's Embrace</a></li>
                        <li><a href="#foundational-literature"><span className="sp-toc-num">12</span>Author of Foundational Literature</a></li>
                        <li><a href="#lila-sthali"><span className="sp-toc-num">13</span>Lila Sthali: Sacred Places</a></li>
                        <li><a href="#lessons"><span className="sp-toc-num">14</span>Lessons for the Devotee</a></li>
                        <li><a href="#faqs"><span className="sp-toc-num">15</span>Frequently Asked Questions</a></li>
                    </ol>
                </nav>

                <div className="sp-content-body">
                    <p>
                        Among the Six Gosvamis of Vrindavana, Srila Sanatana Gosvami holds the position of the eldest — not merely in age, but in the sense that Sri Chaitanya Mahaprabhu personally chose him to receive, in the most systematic and detailed form, the entire science of devotional service, so that he could then transmit it to everyone else. A former chief minister of the Muslim government of Bengal, learned in Sanskrit, Persian, and Arabic, Sanatana Gosvami gave up wealth, position, and family entirely, and after a harrowing escape from imprisonment, sat before Sri Chaitanya Mahaprabhu at Varanasi as a humble student, prepared to unlearn everything he thought he knew.
                    </p>
                    <p>
                        Srila Prabhupada describes him simply, in his purport introducing the Six Gosvamis' literary contribution, as the teacher of the science of devotional service who wrote several foundational books explaining exactly what a devotee, and devotional service itself, actually consist of.
                    </p>

                    <Divider />

                    <div id="quick-facts" className="sp-sec-block">
                        <SectionHead num="01" title="Quick Facts" />
                        <QuickFacts facts={quickFacts} />
                    </div>
                    <Divider />

                    <div id="glorification" className="sp-sec-block">
                        <SectionHead num="02" title="Glorification of Srila Sanatana Gosvami" />
                        <SectionImage 
                            src="/assets/blog/srila-sanatana-gosvami/Srila Sanatan goswami.png" 
                            alt="Srila Sanatana Gosvami" 
                            caption="Srila Sanatana Gosvami, eldest of the Six Gosvamis of Vrindavana."
                        />
                        <p>
                            Srila Sanatana Gosvami is glorified together with his younger brother Srila Rupa Gosvami and the other Gosvamis in Srinivasa Acharya's <em>Sad-gosvamy-ashtaka</em>, a prayer of homage to all six of them. Srila Prabhupada quotes its fourth verse specifically in connection with Rupa and Sanatana's renunciation of their ministerial post:
                        </p>
                        <blockquote className="sp-quote">
                            tyaktvā tūrṇam aśeṣa-maṇḍala-pati-śreṇīṁ sadā tuccha-vat<br />
                            bhūtvā dīna-gaṇeśakau karuṇayā kaupīna-kanthāśritau<br />
                            gopī-bhāva-rasāmṛtābdhi-laharī-kallola-magnau muhur<br />
                            vande rūpa-sanātanau raghu-yugau śrī-jīva-gopālakau
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>
                                <strong>Translation:</strong> I offer my obeisances to Sri Rupa and Sanatana, who at once gave up the association of every worldly ruler as insignificant, mercifully became the protectors of the fallen, and remain forever plunged in the waves of the nectar ocean of the gopis' love — together with the two Raghunathas, Sri Jiva, and Gopala Bhatta.
                            </span>
                        </blockquote>
                        <p style={{ fontSize: '0.9em', color: '#666' }}>
                            Reference: Sri Sri Sad-gosvamy-ashtaka, verse 4 (Srinivasa Acharya), quoted by Srila Prabhupada in his Nectar of Devotion lecture series, Vrindavana, October 1972
                        </p>
                    </div>
                    <Divider />

                    <div id="ministers-life" className="sp-sec-block">
                        <SectionHead num="03" title="A Minister's Life, and the Decision to Leave It" />
                        <p>
                            Srila Prabhupada traces Sanatana Gosvami's family lineage in some detail in his purport to the Adi-lila, going back to a gentleman named Sarvajna who appeared in a wealthy brahmana family of Karnata in the twelfth century Sakabda era. Several generations later, this family's line moved to Naihati in Bengal on the bank of the Ganges, and eventually settled at Phateyabad, bordering Bakla-Chandradvipa in what is now Bangladesh. It was from this same family that Sanatana Gosvami, his brother Rupa Gosvami, and their brother Vallabha (Anupama) were all born, before relocating to Ramakeli in the Malda district of Bengal, where they served as ministers.
                        </p>
                        <p>
                            Before he was Sanatana Gosvami, he was known as Sakara Mallik, holding one of the two most powerful ministerial posts in the government of Nawab Hussain Shah, the Muslim ruler of Bengal in the early sixteenth century. Srila Prabhupada describes the weight of what such a position actually cost a soul seeking Krishna, in Sanatana Gosvami's own later words of self-assessment before Sri Chaitanya Mahaprabhu:
                        </p>
                        <blockquote className="sp-quote">
                            "I was born in a low family, and my associates are all low-class men."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>— Sri Sanatana Gosvami, quoted by Srila Prabhupada, Sri Caitanya-caritamrta, Madhya-lila 20.99, Translation</span>
                        </blockquote>
                        <p>
                            Srila Prabhupada's purport clarifies immediately that this was not a statement of actual social fact — Sanatana Gosvami belonged to a respected Sarasvata brahmana family — but a statement of spiritual self-assessment. Holding a minister's post in a Muslim court had forced him into constant association with meat-eaters and drunkards, and by that association, he considered himself to have fallen, however elevated his birth.
                        </p>
                        <p>
                            The turning point came when Sri Chaitanya Mahaprabhu, travelling to Bengal to see His mother, passed through Ramakeli. All three brothers came before the Lord and offered their obeisances, and even the infant Jiva was brought before Sri Chaitanya Mahaprabhu on this occasion. After the Lord departed for Puri, the brothers began keeping vows of their own to secure shelter at His feet. Rupa and Anupama soon resigned their posts and departed with their accumulated wealth, leaving Sanatana alone to face the Nawab's displeasure.
                        </p>
                        <p style={{ fontSize: '0.9em', color: '#666' }}>
                            Reference: Sri Chaitanya-charitamrita, Adi-lila 10.84, Purport; Madhya-lila 1 and 20.99, Purports
                        </p>
                    </div>
                    <Divider />

                    <div id="escape-from-prison" className="sp-sec-block">
                        <SectionHead num="04" title="Escape from Prison, and the Test of Renunciation" />
                        <p>
                            While in confinement, Sanatana Gosvami received word from his brother Rupa that eight hundred gold coins had been deposited with a grocer for his use. Srila Prabhupada records the outcome plainly:
                        </p>
                        <blockquote className="sp-quote">
                            "Sanatana Gosvami took advantage of this money to bribe the jail keeper."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>— Srila Prabhupada, Sri Caitanya-caritamrta, Adi-lila 10.84, Purport</span>
                        </blockquote>
                        <p>
                            He set out for Varanasi with a single servant, Ishana, who secretly carried the remaining gold coins. At a wayside inn, the innkeeper's suspiciously excessive hospitality alerted Sanatana Gosvami that the man had learned of the money and intended to murder them for it. Rather than concealing the coins more carefully, Sanatana Gosvami simply took the money from Ishana and handed all of it over to the innkeeper, asking only for safe passage the rest of the way.
                        </p>
                        <p>
                            Sanatana Gosvami arrived at Varanasi dressed in torn, dirty clothes, his hair and beard completely unkempt, carrying nothing but a beggar's pot. When Sri Chaitanya Mahaprabhu had him properly dressed and shaved so that he would appear as a gentleman, Sanatana Gosvami accepted new cloth from Chandrashekhara but almost immediately exchanged it for a single old, torn dhoti, which he tore further into two pieces to serve as his only lower and upper garments — abandoning, quite literally, the very last of his former wealth.
                        </p>
                        <p style={{ fontSize: '0.9em', color: '#666' }}>
                            Reference: Sri Chaitanya-charitamrita, Adi-lila 10.84 and Madhya-lila 20, Purports
                        </p>
                    </div>
                    <Divider />

                    <div id="teaching-at-varanasi" className="sp-sec-block">
                        <SectionHead num="05" title="Two Months of Confidential Teaching at Varanasi" />
                        <SectionImage 
                            src="/assets/blog/srila-sanatana-gosvami/Lord Chaitanya embraces Srila Sanatana Goswami at Tapan Mishra's house.png" 
                            alt="Lord Chaitanya embraces Srila Sanatana Goswami" 
                            caption="Lord Chaitanya embraces Srila Sanatana Goswami at Tapan Mishra's house in Varanasi."
                        />
                        <p>
                            For two consecutive months, Sri Chaitanya Mahaprabhu personally instructed Sanatana Gosvami in the complete science of devotional service, an event Srila Prabhupada summarises with striking simplicity:
                        </p>
                        <blockquote className="sp-quote">
                            "Lord Caitanya Mahaprabhu instructed Sri Sanatana Gosvami in all the conclusions of devotional service."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>— Srila Prabhupada, Sri Caitanya-caritamrta, Madhya-lila 25.1, Translation</span>
                        </blockquote>
                        <p>
                            These teachings, recorded across Chapters Twenty through Twenty-Five of the Madhya-lila, cover the constitutional position of the living entity, the opulence and sweetness of Krishna, the process and goal of devotional service, and the celebrated sixty-one explanations of the <em>atmarama</em> verse from Srimad-Bhagavatam. Sri Chaitanya Mahaprabhu began at the very foundation:
                        </p>
                        <blockquote className="sp-quote">
                            "jīvera 'svarūpa' haya — kṛṣṇera 'nitya-dāsa'"<br />
                            "It is the living entity's constitutional position to be an eternal servant of Krishna."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>— Srila Prabhupada, Sri Caitanya-caritamrta, Madhya-lila 20.108–109, Translation</span>
                        </blockquote>
                        <p>
                            Srila Prabhupada explains in his purport that this single instruction is the foundation on which everything else Sanatana Gosvami would later teach and write depends: the living entity is simultaneously one with and different from Krishna, exactly as a ray of sunshine is both part of the sun and distinct from it.
                        </p>
                        <p style={{ fontSize: '0.9em', color: '#666' }}>
                            Reference: Sri Chaitanya-charitamrita, Madhya-lila, Chapters 20–25
                        </p>
                    </div>
                    <Divider />

                    <div id="sent-to-vrindavana" className="sp-sec-block">
                        <SectionHead num="06" title="Sent to Vrindavana: Founder of Deity Worship" />
                        <SectionImage 
                            src="/assets/blog/srila-sanatana-gosvami/Sri Radha Madanmohan temple at Vrindavan established by Srila Sanatana Goswami.webp" 
                            alt="Sri Sri Radha-Madana-mohana Temple" 
                            caption="Sri Sri Radha-Madana-mohana temple, Vrindavana, established by Srila Sanatana Goswami."
                        />
                        <p>
                            After completing His instruction, Sri Chaitanya Mahaprabhu sent Sanatana Gosvami to Vrindavana with a fourfold mission: to excavate the lost places of Krishna's pastimes, to install Deities and establish proper Deity worship, to write books systematically presenting the science of devotional service, and to establish Vaishnava etiquette. When Rupa and Sanatana Gosvami first arrived, Vrindavana was largely an empty forest; they had no fixed residence, slept beneath different trees each night, and lived on whatever alms they could beg.
                        </p>
                        <p>
                            It was Sanatana Gosvami who first established Deity worship in Vrindavana, installing the Deity of Sri Sri Madana-mohana — an event Srila Prabhupada and the disciplic tradition regard as the actual founding of what would become the modern temple city of Vrindavana.
                        </p>
                        <p style={{ fontSize: '0.9em', color: '#666' }}>
                            Reference: Sri Chaitanya-charitamrita, Adi-lila 7 and Madhya-lila 1, 19; Antya-lila 4
                        </p>
                    </div>
                    <Divider />

                    <div id="madana-mohana-story" className="sp-sec-block">
                        <SectionHead num="07" title="How Madana-mohana Came to Live With a Beggar" />
                        <SectionImage 
                            src="/assets/blog/srila-sanatana-gosvami/From left to right stand Lalita Sakhi, Lord Madan Mohan holding a flute, Srimati Radharani, and Ananga Manjari at Madan Mohan Temple.jpeg" 
                            alt="Deities at Madan Mohan Temple" 
                            caption="From left to right stand Lalita Sakhi, Lord Madan Mohan holding a flute, Srimati Radharani, and Ananga Manjari at Madan Mohan Temple."
                        />
                        <p>
                            The story of how the Madana-mohana Deity came into Sanatana Gosvami's care is preserved in Bhakti-ratnakara. The Deity was residing in the home of a Mathura brahmana named Damodara Chaube. Both Sanatana Gosvami and the brahmana's wife separately had a dream in which Madana Gopala expressed His wish to live with Sanatana Gosvami. Sanatana Gosvami accepted the Deity, built a small hut on a hillock, and began to serve Him there.
                        </p>
                        <p>
                            Living purely on alms, Sanatana Gosvami had nothing to offer the Deity but plain, dry chapatis without salt. Srila Prabhupada narrated what happened next:
                        </p>
                        <blockquote className="sp-quote">
                            "Sanatana, you are bringing all these dry chapatis, without even little salt."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>— Srila Prabhupada, Lecture, Deity Installation, Los Angeles, July 16, 1969</span>
                        </blockquote>
                        <p>
                            Sanatana Gosvami explained to the Deity that he was an old man with books to write, that he could not go running after salt and sweets, and that Madana-mohana would have to accept the plain chapati or arrange something better Himself. Soon after, a wealthy merchant named Krishnadasa Kapoor whose boat was stuck on a sandbar prayed to Madana-mohana, sold his goods, and used the profits to build a magnificent temple for Madana-mohana.
                        </p>
                        <p style={{ fontSize: '0.9em', color: '#666' }}>
                            Reference: Srila Prabhupada, Lecture, Los Angeles, July 16, 1969; Sri Narahari Chakravarti Thakura, Bhakti-ratnakara
                        </p>
                    </div>
                    <Divider />

                    <div id="govardhana-shila" className="sp-sec-block">
                        <SectionHead num="08" title="The Vow, and the Govardhana-shila" />
                        <p>
                            Sanatana Gosvami had taken a strict personal vow to circumambulate Govardhana Hill every single day without fail. As he grew older and infirm, walking around Govardhana Hill each day became a severe physical hardship.
                        </p>
                        <p>
                            Rather than allow His elderly devotee to suffer, Krishna appeared before Sanatana Gosvami as a young cowherd boy, stood upon a flat stone from Govardhana Hill, and played His flute until the stone melted and took the impression of His lotus feet. Presenting the stone to Sanatana Gosvami, Krishna told him that circumambulating this single shila would be equal to circumambulating all of Govardhana Hill — allowing Sanatana Gosvami to keep his vow intact. This Govardhana-shila is worshipped by devotees to this day.
                        </p>
                        <p style={{ fontSize: '0.9em', color: '#666' }}>
                            Reference: Gaudiya Vaishnava literature (Bhakti-ratnakara)
                        </p>
                    </div>
                    <Divider />

                    <div id="radharanis-gift" className="sp-sec-block">
                        <SectionHead num="09" title="Radharani's Hidden Gift of Rice" />
                        <p>
                            One day, Srila Rupa Gosvami wished to prepare sweet rice for his elder brother Sanatana Gosvami, but lacked milk and sugar. A young girl appeared at his hut and offered rice, milk, and sugar as a gift. When Sanatana Gosvami tasted the extraordinarily sweet prasadam, he asked where the ingredients came from — and declared with tears that no one but Srimati Radharani Herself could have supplied such divine ingredients.
                        </p>
                        <p style={{ fontSize: '0.9em', color: '#666' }}>
                            Reference: Gaudiya Vaishnava literature (Bhakti-ratnakara)
                        </p>
                    </div>
                    <Divider />

                    <div id="touchstone-story" className="sp-sec-block">
                        <SectionHead num="10" title="The Touchstone and the Poor Brahmana" />
                        <p>
                            A poor brahmana, having worshipped Lord Shiva for the best benediction, was directed to seek it from Sanatana Gosvami. Srila Prabhupada tells what happened:
                        </p>
                        <blockquote className="sp-quote">
                            "He had a touchstone with him, left in a pile of refuse."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>— Srila Prabhupada, Srimad-Bhagavatam 4.7.7, Purport</span>
                        </blockquote>
                        <p>
                            The brahmana received the touchstone (which turns iron to gold), but realized that if Sanatana Gosvami kept such a stone in garbage, he must possess something far greater. Returning, he threw the touchstone into the river and received initiation into the Hare Krishna maha-mantra from Sanatana Gosvami.
                        </p>
                        <p style={{ fontSize: '0.9em', color: '#666' }}>
                            Reference: Srimad-Bhagavatam 4.7.7, Purport
                        </p>
                    </div>
                    <Divider />

                    <div id="skin-disease" className="sp-sec-block">
                        <SectionHead num="11" title="The Skin Disease and the Lord's Forced Embrace" />
                        <p>
                            Travelling to Jagannatha Puri to see Sri Chaitanya Mahaprabhu, Sanatana Gosvami contracted painful weeping sores over his entire body. He resolved to end his life beneath the wheels of the Ratha-yatra cart rather than contaminate the Lord. But when he arrived, Sri Chaitanya Mahaprabhu ran and embraced him repeatedly, unconcerned for His own bodily comfort, until every trace of the disease vanished from Sanatana Gosvami's body completely.
                        </p>
                        <p style={{ fontSize: '0.9em', color: '#666' }}>
                            Reference: Sri Chaitanya-charitamrita, Antya-lila 4.130–197
                        </p>
                    </div>
                    <Divider />

                    <div id="foundational-literature" className="sp-sec-block">
                        <SectionHead num="12" title="Author of the Foundational Gosvami Literature" />
                        <p>
                            At Sri Chaitanya Mahaprabhu's instruction, Sanatana Gosvami authored three foundational works:
                        </p>
                        <blockquote className="sp-quote">
                            "Anyone who wants to know about devotees and devotional service must read this book."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>— Srila Prabhupada, Sri Caitanya-caritamrta, Adi-lila 5.203, Purport, on Brihad-Bhagavatamrita</span>
                        </blockquote>
                        <p>
                            The <em>Brihad-Bhagavatamrita</em> systematically presents the gradations of devotees; <em>Hari-bhakti-vilasa</em> establishes Vaishnava rules and etiquette; and <em>Sri Vaishnava-toshani</em> (Dashama-tippani) is a rich commentary on the Tenth Canto of Srimad-Bhagavatam.
                        </p>
                        <p style={{ fontSize: '0.9em', color: '#666' }}>
                            Reference: Sri Chaitanya-charitamrita, Adi-lila 5.203, Purport
                        </p>
                    </div>
                    <Divider />

                    <div id="lila-sthali" className="sp-sec-block">
                        <SectionHead num="13" title="Lila Sthali: Places Sanctified by Sanatana Gosvami" />
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
                        <SectionHead num="14" title="Lessons for the Devotee" />
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
                        <SectionHead num="15" title="Frequently Asked Questions" />
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
