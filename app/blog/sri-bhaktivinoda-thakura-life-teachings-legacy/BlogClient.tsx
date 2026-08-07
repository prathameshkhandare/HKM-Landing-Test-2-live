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
            <Navbar />

            <article className="at-blog-wrap">
                <header className="at-blog-header">
                    <p className="at-hero-label">Great Acharyas</p>
                    <h1 className="at-blog-title">
                        Srila Bhaktivinoda Thakura:<br />
                        The Seventh Gosvami
                    </h1>
                    <div className="at-hero-line" />
                    <p className="at-blog-subtitle">
                        Glorifying the acharya who discovered Mayapur, revived the mission of Sri Chaitanya Mahaprabhu, and predicted the worldwide sankirtana movement.
                    </p>
                    <p className="at-blog-byline">
                        By <strong>HKM Chennai</strong>
                        {" "}— Dakshina Dwaraka Dham, Thiruvanmiyur
                    </p>
                </header>

                <div className="sp-sec-image-wrap" style={{ marginTop: '0', marginBottom: '3rem' }}>
                    <img src="/images/sri-bhaktivinoda-thakura/a8ddd40c-2137-4b23-9f3a-5d7628ba5ad9.png" alt="Srila Bhaktivinoda Thakura, Gaudiya Vaishnava acharya and father of Srila Bhaktisiddhanta Sarasvati Thakura." style={{ objectPosition: 'top' }} />
                    <span className="sp-sec-caption">Srila Bhaktivinoda Thakura, Gaudiya Vaishnava acharya and father of Srila Bhaktisiddhanta Sarasvati Thakura.</span>
                </div>

                <QuickFacts facts={[
                    { label: "Full Name", value: "Srila Bhaktivinoda Thakura, born Kedaranatha Datta" },
                    { label: "Born", value: "2 September 1838, Ulagram (Birnagar), Nadia district, Bengal" },
                    { label: "Disappeared", value: "23 June 1914 (Jagannatha Puri)" },
                    { label: "Occupation", value: "Deputy Magistrate under British rule, 1866–1894; overseer of the Jagannatha Temple, Puri" },
                    { label: "Spiritual master", value: "Srila Jagannatha Dasa Babaji Maharaja" },
                    { label: "Spiritual Successor (Son)", value: "Srila Bhaktisiddhanta Sarasvati Thakura, who initiated Srila Prabhupada's own spiritual master" },
                    { label: "Known For", value: "Discovering the birthsite of Sri Chaitanya Mahaprabhu at Mayapur; authoring nearly a hundred books; predicting the worldwide sankirtana movement decades before it happened" },
                    { label: "Major Works", value: "Jaiva Dharma, Saranagati, Sri Harinama-chintamani, Amrita-pravaha-bhashya, Sajjana-toshani (journal)" },
                    { label: "Key Residences", value: "Surabhi Kunja and Svananda Sukhada Kunja (Godrumadvipa, Navadvipa); Chaitanya Math (Puri)" }
                ]} />

                <nav className="sp-toc" aria-label="Table of Contents">
                    <h2 className="sp-toc-title">Table of Contents</h2>
                    <ol className="sp-toc-list">
                        <li><a href="#intro"><span className="sp-toc-num">01</span>Introduction</a></li>
                        <li><a href="#pranama-mantra"><span className="sp-toc-num">02</span>Pranama Mantra</a></li>
                        <li><a href="#birth"><span className="sp-toc-num">03</span>Birth and Early Life</a></li>
                        <li><a href="#discipline"><span className="sp-toc-num">04</span>A Life of Discipline: Magistrate by Day, Acharya by Night</a></li>
                        <li><a href="#punishing-fraud"><span className="sp-toc-num">05</span>Punishing Fraud, Protecting Dharma</a></li>
                        <li><a href="#apasampradayas"><span className="sp-toc-num">06</span>Uprooting the Apasampradayas</a></li>
                        <li><a href="#discovery-mayapur"><span className="sp-toc-num">07</span>Discovery of the Birthplace of Lord Chaitanya</a></li>
                        <li><a href="#nama-hatta"><span className="sp-toc-num">08</span>Founding the Nama Hatta: Bringing Krishna to the People</a></li>
                        <li><a href="#author"><span className="sp-toc-num">09</span>Author of Nearly a Hundred Books</a></li>
                        <li><a href="#guru-disciple"><span className="sp-toc-num">10</span>Guru and Disciple: Preparing the Way for Bhaktisiddhanta Sarasvati</a></li>
                        <li><a href="#prophecy"><span className="sp-toc-num">11</span>The Prophecy of a Worldwide Sankirtana Movement</a></li>
                        <li><a href="#ideal-householder"><span className="sp-toc-num">12</span>The Ideal Householder</a></li>
                        <li><a href="#songs-surrender"><span className="sp-toc-num">13</span>Songs of Surrender</a></li>
                        <li><a href="#disappearance"><span className="sp-toc-num">14</span>Disappearance</a></li>
                        <li><a href="#lessons"><span className="sp-toc-num">15</span>Lessons for the Devotee</a></li>
                        <li><a href="#lila-sthali"><span className="sp-toc-num">16</span>Lila Sthali</a></li>
                        <li><a href="#faq"><span className="sp-toc-num">17</span>Frequently Asked Questions</a></li>
                        <li><a href="#connect"><span className="sp-toc-num">18</span>Connect With Us</a></li>
                    </ol>
                </nav>

                <div className="sp-content-body">
                    {/* 01 Introduction */}
                    <div id="intro" className="sp-sec-block">
                        <SectionHead num="01" title="Introduction" />
                        <p>
                            Among the great acharyas who appeared in the modern age to revive the pure teachings of Sri Chaitanya Mahaprabhu, none stands more prominently than His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada's own spiritual grandfather in the disciplic line — Srila Bhaktivinoda Thakura. A government magistrate who slept only a few hours a night, wrote nearly a hundred books, discovered the lost birthplace of Lord Chaitanya, and predicted, decades in advance, that Europeans and Americans would one day dance and chant Hare Krishna in the streets of the world — his life is a living lesson in what it means to be Krishna conscious while fully engaged in worldly duty.
                        </p>
                        <p>
                            Srila Prabhupada himself repeatedly credited Srila Bhaktivinoda Thakura, together with his son Srila Bhaktisiddhanta Sarasvati Thakura, with reviving the sankirtana movement of Lord Chaitanya in the modern age, and with directly preparing the ground for the worldwide Hare Krishna movement. In his own words, describing the disciplic succession from Sri Chaitanya Mahaprabhu:
                        </p>
                        <blockquote className="sp-quote">
                            "Lord Chaitanya, from Lord Chaitanya, the six Goswamis, and similarly, coming down, down, Bhaktivinoda Thakura, then Gaurakisora dasa Babaji Maharaja, then my spiritual master, then we are next generation, my disciples."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>(Srila Prabhupada, Appearance Day Lecture, London, September 23, 1969)</span>
                        </blockquote>
                    </div>

                    <Divider />

                    {/* 02 Pranama Mantra */}
                    <div id="pranama-mantra" className="sp-sec-block">
                        <SectionHead num="02" title="Pranama Mantra" />
                        <p>Devotees offer the following pranama mantra unto Srila Bhaktivinoda Thakura:</p>
                        <blockquote className="sp-quote" style={{ fontStyle: 'italic', textAlign: 'center' }}>
                            namo bhaktivinodāya<br />
                            sac-cid-ānanda-nāmine<br />
                            gaura-śakti-svarūpāya<br />
                            rūpānuga-varāya te
                        </blockquote>
                        <p>
                            <strong>Translation:</strong> I offer my respectful obeisances unto Sri Saccidananda Bhaktivinoda, who is the transcendental energy of Sri Chaitanya Mahaprabhu. He is a strict follower of the Gosvamis, headed by Srila Rupa Gosvami.
                        </p>
                    </div>

                    <Divider />

                    {/* 03 Birth and Early Life */}
                    <div id="birth" className="sp-sec-block">
                        <SectionHead num="03" title="Birth and Early Life" />
                        <p>
                            Bhaktivinoda Thakura was born as Kedaranatha Datta on September 2, 1838, at his maternal grandfather's home in Ulagram (Birnagar), in the Nadia district of Bengal — the same land sanctified by Sri Chaitanya Mahaprabhu's own pastimes. From his youth he was drawn to religious inquiry, studying Brahmoism, the Bible, and the Koran before his serious study of Chaitanya-charitamrita convinced him of the unparalleled depth of pure bhakti.
                        </p>
                    </div>

                    <Divider />

                    {/* 04 A Life of Discipline */}
                    <div id="discipline" className="sp-sec-block">
                        <SectionHead num="04" title="A Life of Discipline: Magistrate by Day, Acharya by Night" />
                        <p>
                            Perhaps nothing reveals Bhaktivinoda Thakura's extraordinary character more than his daily schedule. He served as a Deputy Magistrate under British rule from 1866 to 1894, carrying the full responsibilities of a government officer — yet he authored close to one hundred books, composed hundreds of devotional songs, edited a spiritual journal, and single-handedly reintroduced the pure teachings of Lord Chaitanya to a confused age, all without abandoning a single one of his official duties.
                        </p>
                        <blockquote className="sp-quote">
                            "Bhaktivinoda Thakura, regularly he was coming from his office, and after taking his supper immediately he goes to bed, and wake up at twelve o'clock, and he used to write books. He wrote, he left behind him about one hundred books. And he excavated the birthplace of Lord Caitanya, organized how to develop that birth site, Mayapur."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>(Srila Prabhupada, Appearance Day Lecture, London, September 23, 1969)</span>
                        </blockquote>
                        <blockquote className="sp-quote">
                            "So Bhaktivinoda Thakura was grihastha... very responsible officer, a magistrate. He was so exalted that he would come from his office generally at five o'clock, then take his supper and immediately go to bed. Immediately... One should not sleep more than five to six hours. Minimize as far as possible."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>(Srila Prabhupada, Appearance Day Lecture, London, September 23, 1969)</span>
                        </blockquote>
                        <p>
                            Srila Prabhupada also confirmed in this same lecture that Bhaktivinoda Thakura accepted sannyasa in his very last years, during his retired life — having served the entire preceding decades of his mission as a householder.
                        </p>
                        
                        <p className="mt-8 font-bold">His son, Sri Lalita Prasada, later described the fuller shape of that daily routine, which devotees still cite as an ideal of engaged spiritual discipline:</p>
                        
                        <div className="overflow-x-auto mt-4 mb-6">
                            <table className="min-w-full bg-white border border-[#C9A84C] text-[#3D1A00]">
                                <thead className="bg-[#fcf8f2]">
                                    <tr>
                                        <th className="py-3 px-4 border-b border-[#C9A84C] text-left font-bold w-1/3">Time</th>
                                        <th className="py-3 px-4 border-b border-[#C9A84C] text-left font-bold">Activity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-[#f0e4c8]"><td className="py-3 px-4 font-semibold">10:00 PM – 4:00 AM</td><td className="py-3 px-4">Writing devotional literature</td></tr>
                                    <tr className="border-b border-[#f0e4c8]"><td className="py-3 px-4 font-semibold">4:00 – 4:30 AM</td><td className="py-3 px-4">Rest</td></tr>
                                    <tr className="border-b border-[#f0e4c8]"><td className="py-3 px-4 font-semibold">4:30 – 7:00 AM</td><td className="py-3 px-4">Chanting japa</td></tr>
                                    <tr className="border-b border-[#f0e4c8]"><td className="py-3 px-4 font-semibold">7:00 – 7:30 AM</td><td className="py-3 px-4">Correspondence</td></tr>
                                    <tr className="border-b border-[#f0e4c8]"><td className="py-3 px-4 font-semibold">7:30 – 9:30 AM</td><td className="py-3 px-4">Studying scriptures</td></tr>
                                    <tr className="border-b border-[#f0e4c8]"><td className="py-3 px-4 font-semibold">9:30 – 10:00 AM</td><td className="py-3 px-4">Bath and prasadam</td></tr>
                                    <tr className="border-b border-[#f0e4c8]"><td className="py-3 px-4 font-semibold">10:00 AM – 1:00 PM</td><td className="py-3 px-4">Court duties</td></tr>
                                    <tr className="border-b border-[#f0e4c8]"><td className="py-3 px-4 font-semibold">1:00 – 2:00 PM</td><td className="py-3 px-4">Rest at home</td></tr>
                                    <tr className="border-b border-[#f0e4c8]"><td className="py-3 px-4 font-semibold">2:00 – 5:00 PM</td><td className="py-3 px-4">Court duties</td></tr>
                                    <tr className="border-b border-[#f0e4c8]"><td className="py-3 px-4 font-semibold">5:00 – 7:00 PM</td><td className="py-3 px-4">Translating Sanskrit shastra into Bengali</td></tr>
                                    <tr className="border-b border-[#f0e4c8]"><td className="py-3 px-4 font-semibold">7:00 – 8:00 PM</td><td className="py-3 px-4">Bath and prasadam</td></tr>
                                    <tr><td className="py-3 px-4 font-semibold">8:00 – 10:00 PM</td><td className="py-3 px-4">Rest</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm italic text-[#6a4220]">Schedule as recorded by his son Sri Lalita Prasada; secondary source, included for illustrative context alongside Srila Prabhupada's own description above.</p>
                    </div>

                    <Divider />

                    {/* 05 Punishing Fraud */}
                    <div id="punishing-fraud" className="sp-sec-block">
                        <SectionHead num="05" title="Punishing Fraud, Protecting Dharma" />
                        <p>
                            As a magistrate, Bhaktivinoda Thakura did not separate his devotion from his duty. Srila Prabhupada narrates this episode in the purport to Krishna Book, Chapter 33:
                        </p>
                        <blockquote className="sp-quote">
                            "In Orissa, Thakura Bhaktivinoda punished a so-called incarnation of Vishnu who was imitating the rasa-lila with young girls. There were many complaints against the so-called incarnation. At that time Bhaktivinoda Thakura was a magistrate, and the government deputed him to deal with that rascal, and he punished him very severely."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>(Srila Prabhupada, Krishna Book, Chapter 33, Purport)</span>
                        </blockquote>
                        <p>
                            Srila Prabhupada narrated the fuller story of this incident in his 1969 London lecture. A self-proclaimed "incarnation of Vishnu" had appeared in a village of Orissa, performing mock rasa-lila with local girls, and wealthy families had come under his sway. When sane men complained to the British commissioner, the case was handed to Bhaktivinoda Thakura, known to the commissioner as a sincerely religious man. He went to investigate personally, in plain clothes with police constables. When the impostor mocked the Jagannatha Deity as "made of wood" and claimed to be the Supreme Lord Himself, Bhaktivinoda Thakura, unable to tolerate blasphemy against the Lord, ordered his immediate arrest.
                        </p>
                        <p>
                            The man possessed some mystic power: following the arrest, Bhaktivinoda Thakura's own family and the constables were struck with a 105-degree fever. His wife, terrified, pleaded with him to release the man. Srila Prabhupada records his reply:
                        </p>
                        <blockquote className="sp-quote">
                            "Yes, let us all die, but this rascal must be punished."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>(Srila Prabhupada, Appearance Day Lecture, London, September 23, 1969)</span>
                        </blockquote>
                        <p>
                            At the trial, no barber in the village dared cut the prisoner's hair, fearing his mystic power, so Bhaktivinoda Thakura cut it himself and sentenced him to six months in jail. The man later took poison and died in custody. Srila Prabhupada cited this incident as proof that a genuine devotee cannot tolerate blasphemy against the Lord or His devotees, whatever the personal cost.
                        </p>
                    </div>

                    <Divider />

                    {/* 06 Uprooting Apasampradayas */}
                    <div id="apasampradayas" className="sp-sec-block">
                        <SectionHead num="06" title="Uprooting the Apasampradayas" />
                        <p>
                            By the nineteenth century, the pure sankirtana movement of Sri Chaitanya Mahaprabhu had been almost buried under the weight of numerous deviant sects falsely claiming to represent His teachings. Srila Prabhupada explained that Bhaktivinoda Thakura, as a householder devotee living in the very society where these cheating groups flourished, felt this degradation acutely:
                        </p>
                        <blockquote className="sp-quote">
                            "Bhaktivinoda Thakura... He was at that time a householder, government officer and magistrate. He felt very much: 'Oh, Lord Caitanya's movement is so... People... As soon as one will see that he belongs to the Caitanya sampradaya, he'll deride, "Oh, these are all rascals, simply taking sex pleasures."' "
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>(Srila Prabhupada, Bhaktisiddhanta Sarasvati Thakura's Appearance Day Lecture, Los Angeles, February 7, 1969)</span>
                        </blockquote>
                        <p>
                            Bhaktivinoda Thakura took it upon himself to clearly identify and refute these impostor groups, so that sincere souls would not mistake them for genuine Vaishnavism. Srila Prabhupada repeatedly cited his identification of thirteen such apasampradayas ("apa" meaning deviated) in his own lectures:
                        </p>
                        <blockquote className="sp-quote">
                            "There are so many apasampradayas, thirteen at least in the counting by Bhaktivinoda Thakura: aula, baula, kartabhaja, neda, daravesa, sani, sahajiya, sakhibheki, smarta, jata-gosani, ativadi, cudadhari, gauranga-nagari. These thirteen... apasampradayas. They are passing as Caitanya Mahaprabhu's sampradaya. But they're the worst, rejected."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>(Srila Prabhupada, Bhaktisiddhanta Sarasvati Thakura's Appearance Day Lecture, Los Angeles, February 7, 1969)</span>
                        </blockquote>
                        <p>
                            Srila Prabhupada also referenced this same list directly while lecturing on Chaitanya-charitamrita in Mayapur, stressing that a follower of Lord Chaitanya must not associate with any of these deviant groups, since sampradaya means strictly following Vedic principle as transmitted through a bona fide disciplic succession.
                        </p>
                        <p>
                            Bhaktivinoda Thakura's opposition was not merely theoretical. In an 1871 letter to the editor of a Cuttack newspaper, he publicly exposed the practices of the ativadi sect, and as a magistrate he personally arrested, tried, and jailed one of its most notorious self-proclaimed “incarnations,” Bisa Kisen, who had gathered a large following and vast wealth through fraud. Through his major Bengali works — particularly Jaiva Dharma and Sri Harinama-chintamani — he further distinguished the pure teachings of Lord Chaitanya from prakrita-sahajiya deviations, insisting that a bona fide spiritual master must be fully conversant with the scriptures and of spotless character, and that initiation in a lineage disconnected from authorized disciplic succession is a waste of time. This reform work laid the philosophical foundation his son, Srila Bhaktisiddhanta Sarasvati Thakura, would later build upon in his own decisive confrontations with caste-based and sahajiya pretenders.
                        </p>
                    </div>

                    <Divider />

                    {/* 07 Discovery of Mayapur */}
                    <div id="discovery-mayapur" className="sp-sec-block">
                        <SectionHead num="07" title="Discovery of the Birthplace of Lord Chaitanya" />
                        <SectionImage 
                            src="/images/sri-bhaktivinoda-thakura/Yogapith,_Mayapur.jpg.jpeg" 
                            alt="Yogapitha temple at Sridhama Mayapur, birthsite of Sri Chaitanya Mahaprabhu discovered by Srila Bhaktivinoda Thakura." 
                            caption="Yogapitha temple at Sridhama Mayapur, birthsite of Sri Chaitanya Mahaprabhu discovered by Srila Bhaktivinoda Thakura." 
                        />
                        <p>
                            For centuries, the exact birthsite of Sri Chaitanya Mahaprabhu in Navadvipa had been lost, obscured by the shifting course of the Ganges. Through careful research and, by the mercy of the Lord, Bhaktivinoda Thakura identified the true site at the Yogapitha in Sridhama Mayapur. In February 1891, he presented his findings to an assembly of learned scholars, who concurred with his conclusion.
                        </p>
                        <p>
                            The great siddha saint Srila Jagannatha Dasa Babaji Maharaja, Bhaktivinoda Thakura's own siksha-guru, confirmed the discovery. Out of this, the Sri Navadvipa Dhama Pracharini Sabha was formed, and on Gaura Purnima of that year, the Deities of Sri Sri Gaura-Vishnupriya were installed at the Yogapitha. Bhaktivinoda Thakura himself, in a spirit of deep humility, went door to door collecting donations to build a temple on the site.
                        </p>
                    </div>

                    <Divider />

                    {/* 08 Nama Hatta */}
                    <div id="nama-hatta" className="sp-sec-block">
                        <SectionHead num="08" title="Founding the Nama Hatta: Bringing Krishna to the People" />
                        <p>
                            Sri Chaitanya Mahaprabhu had personally declared that in every town and village of the world, His holy name would one day be preached. By the nineteenth century, however, the pure practice of Krishna consciousness had become largely confined to hereditary Goswami families and closed circles of babajis in Nadia, inaccessible to the ordinary householder or the common villager. Bhaktivinoda Thakura, seeing this, resolved that the mercy of the holy name could not remain the property of any one caste or lineage — it had to reach the general public, whatever their birth or social standing.
                        </p>
                        <p>
                            Toward this end, in 1890, while residing at Surabhi Kunja in Godrumadvipa, he established the Nama Hatta — literally, "the marketplace of the Holy Name." The image was deliberate: just as a hatta, or marketplace, is a place where anyone may come to buy and sell, a Nama Hatta was conceived as a place where anyone, regardless of caste, education, or social position, could come to freely take the wealth of Krishna's holy name.
                        </p>
                        <p>
                            Instead of restricting Krishna consciousness to Sanskrit discourses meant for the learned few, Bhaktivinoda Thakura sent preachers into villages and towns throughout Bengal to hold congregational chanting and simple, direct discourses in the language of the people.
                        </p>
                        <p>
                            He armed this preaching program with tools well ahead of his time: inexpensive printed pamphlets and books distributed at low cost or given freely, his own monthly journal Sajjana-toshani carrying philosophy and news of the movement into homes across Bengal, and hundreds of devotional songs — from Saranagati, Kalyana-kalpataru, and Gitamala — composed in simple Bengali so that even the unlettered could sing the glories of Radha and Krishna. The Nama Hatta preachers were not required to be born brahmanas or hereditary Goswamis; what qualified a person to preach, in Bhaktivinoda Thakura's vision, was sincere devotion and knowledge of the scriptures, not the accident of birth. This same conviction — that a bona fide spiritual master must be judged by his character and realization rather than his caste — is what allowed his own son, Srila Bhaktisiddhanta Sarasvati Thakura, to later found the Gaudiya Math and send preachers across India and, eventually, into the West.
                        </p>
                        <p>
                            The Nama Hatta that Bhaktivinoda Thakura founded in 1890 is, in essence, the direct spiritual ancestor of the congregational preaching programs that ISKCON and the Gaudiya Math continue to run today under the same name, carrying forward his conviction that the holy name of Krishna belongs to everyone.
                        </p>
                    </div>

                    <Divider />

                    {/* 09 Author */}
                    <div id="author" className="sp-sec-block">
                        <SectionHead num="09" title="Author of Nearly a Hundred Books" />
                        <p>
                            Bhaktivinoda Thakura is honored among devotees as the "Seventh Gosvami" for his unparalleled literary service to the mission of Lord Chaitanya, following in the footsteps of the six Gosvamis of Vrindavana. His major works include:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-[#3D1A00]">
                            <li><strong>Sri Krishna-samhita</strong></li>
                            <li><strong>Sri Chaitanya-shikshamrita</strong></li>
                            <li><strong>Jaiva Dharma</strong></li>
                            <li><strong>Sri Navadvipa-dhama-mahatmya</strong></li>
                            <li><strong>Sri Harinama-chintamani</strong></li>
                            <li><strong>Bhajana-rahasya</strong></li>
                            <li><strong>Gita-mala and Gitavali</strong></li>
                            <li><strong>Saranagati</strong></li>
                            <li><strong>Amrita-pravaha-bhashya</strong> — his commentary on Sri Chaitanya-charitamrita</li>
                        </ul>
                        <p className="mt-6">
                            Srila Prabhupada drew extensively upon the Amrita-pravaha-bhashya throughout his own purports to Chaitanya-charitamrita. For example, explaining the spiritual potency by which the Lord empowers His devotees, Srila Prabhupada writes:
                        </p>
                        <blockquote className="sp-quote">
                            "In his Amrita-pravaha-bhashya, Srila Bhaktivinoda Thakura explains that this spiritual potency is the essence of the pleasure potency and the knowledge potency. By these two potencies, one is empowered with devotional service."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>(Srila Prabhupada, Chaitanya-charitamrita, Madhya-lila 7.99, Purport)</span>
                        </blockquote>
                        <p>
                            In 1881 he began publishing Sajjana-toshani, a spiritual journal that carried the philosophy of Krishna consciousness to a wide readership and trained future preachers, including his own son. Srila Prabhupada himself confirmed that Bhaktivinoda Thakura personally sent his books abroad to preach Chaitanya Mahaprabhu's philosophy internationally:
                        </p>
                        <blockquote className="sp-quote">
                            "He used to go to preach about Caitanya's philosophy. He used to sell books to foreign countries. In 1896 he attempted to sell Life and Precepts of Caitanya in the McGill University in Montreal. So he was busy, acharya."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>(Srila Prabhupada, Appearance Day Lecture, London, September 23, 1969)</span>
                        </blockquote>
                    </div>

                    <Divider />

                    {/* 10 Guru and Disciple */}
                    <div id="guru-disciple" className="sp-sec-block">
                        <SectionHead num="10" title="Guru and Disciple: Preparing the Way for Bhaktisiddhanta Sarasvati" />
                        <p>
                            Bhaktivinoda Thakura's foremost spiritual instructor was Srila Jagannatha Dasa Babaji Maharaja, a solitary, illiterate-in-the-worldly-sense but supremely realized Vaishnava sadhu of Navadvipa. Though a householder himself, Bhaktivinoda Thakura directed his own son, Bimala Prasada — who would become Srila Bhaktisiddhanta Sarasvati Thakura, the spiritual master of Srila Prabhupada — to take initiation from Srila Gaurakishora Dasa Babaji Maharaja, thereby ensuring the transmission of pure devotional realization into the next generation.
                        </p>
                        <p>
                            When Bimala Prasada was only six months old, Lord Jagannatha's Ratha-yatra cart halted for three days in front of Bhaktivinoda Thakura's house in Puri — an event devotees regard as an early indication of the child's extraordinary future.
                        </p>
                    </div>

                    <Divider />

                    {/* 11 Prophecy */}
                    <div id="prophecy" className="sp-sec-block">
                        <SectionHead num="11" title="The Prophecy of a Worldwide Sankirtana Movement" />
                        <p>
                            Perhaps Bhaktivinoda Thakura's most remarkable legacy is his written prediction, decades before Srila Prabhupada's birth, that a personality would arise to carry Lord Chaitanya's sankirtana movement across the entire world. In his own words, later quoted extensively by devotees and biographers, he wrote:
                        </p>
                        <blockquote className="sp-quote">
                            "Oh, when will that day come when people from America, England, France, Germany, Russia will take up karatalas and mridangas and chant Hare Krishna in their towns and villages?"
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>(Sri Bhaktivinoda Thakura)</span>
                        </blockquote>
                        <p>
                            Srila Prabhupada affirmed the fulfillment of this vision directly in his own purport to Chaitanya-charitamrita:
                        </p>
                        <blockquote className="sp-quote">
                            "This prediction of Lord Chaitanya Mahaprabhu's is now actually coming to pass. The Krishna consciousness movement is being distributed all over the world through the chanting of the holy name of the Lord, the Hare Krishna maha-mantra, and people who were leading confused, chaotic lives are now feeling transcendental happiness."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>(Srila Prabhupada, Chaitanya-charitamrita, Adi-lila 9.40, Purport)</span>
                        </blockquote>
                        <blockquote className="sp-quote">
                            "Srila Bhaktivinoda Thakura and Srila Bhaktisiddhanta Sarasvati Prabhupada desired to fulfill this great prediction, and we are following in their footsteps."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>(Srila Prabhupada, Srimad-Bhagavatam 4.22.42, Purport)</span>
                        </blockquote>
                        <p>
                            Srila Prabhupada also spoke of the desire of Bhaktivinoda Thakura to see Western devotees come to Mayapur:
                        </p>
                        <blockquote className="sp-quote">
                            "It was the desire of Srila Bhaktivinoda Thakura that Europeans and Americans would come here [Mayapur] and chant Hare Krishna mantra. That prophecy is now being fulfilled, and that is my satisfaction."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>(Srila Prabhupada, Arrival Lecture, Mayapur, September 27, 1974)</span>
                        </blockquote>
                    </div>

                    <Divider />

                    {/* 12 Ideal Householder */}
                    <div id="ideal-householder" className="sp-sec-block">
                        <SectionHead num="12" title="The Ideal Householder" />
                        <p>
                            Despite his immense literary and preaching output, Bhaktivinoda Thakura remained a householder — a grihastha with a wife, Bhagavati Devi, and ten children — until the last years of his life. Srila Prabhupada held him up as the very model of Krishna conscious family life:
                        </p>
                        <blockquote className="sp-quote">
                            "Srila Bhaktivinode Thakura was also a householder, but he lived in so perfect Krishna Consciousness that he is better than many Sannyasis like us."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>(Srila Prabhupada, Letter to Rupanuga, Montreal, August 30, 1968)</span>
                        </blockquote>
                        <blockquote className="sp-quote">
                            "Srila Bhaktivinoda Thakura was a responsible officer and a householder, yet his service to the cause of expanding the mission of Lord Chaitanya Mahaprabhu is unique."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>(Srila Prabhupada, Srimad-Bhagavatam 5.1.17, Purport)</span>
                        </blockquote>
                    </div>

                    <Divider />

                    {/* 13 Songs of Surrender */}
                    <div id="songs-surrender" className="sp-sec-block">
                        <SectionHead num="13" title="Songs of Surrender" />
                        <p>
                            In the final years of his life, Bhaktivinoda Thakura renounced his householder duties, accepted babaji initiation, and absorbed himself fully in bhajana. His devotional songs, especially those collected in Saranagati, are sung by devotees worldwide to this day and are quoted repeatedly by Srila Prabhupada as perfect expressions of surrender to Krishna:
                        </p>
                        <blockquote className="sp-quote">
                            "My dear Lord, whatever I have — even my mind, the center of all material necessities, namely my home, my body and whatever I have in connection with this body — I now surrender unto You."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>(Bhaktivinoda Thakura, quoted by Srila Prabhupada, Srimad-Bhagavatam 4.17.30, Purport)</span>
                        </blockquote>
                        <blockquote className="sp-quote">
                            "I am Your eternal servant, and if You like You can kill me, or, if You like, You can protect me. In any case, I am fully surrendered unto You."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>(Bhaktivinoda Thakura, quoted by Srila Prabhupada, Srimad-Bhagavatam 5.9.14, Purport)</span>
                        </blockquote>
                        <p>
                            Perhaps no song of his better captures the depth of his humility than this prayer, which Srila Prabhupada quoted and explained in his 1971 London lecture:
                        </p>
                        <blockquote className="sp-quote">
                            "Kita-janma hou jatha tuya dasa, bahir-mukha brahma-janma nahi mora asa — My dear Lord, I have no objection if I have to take my birth next as an insect, so long as I remain in the house of a devotee. I don don't want my next birth as Lord Brahma if I forget You."
                            <br /><br />
                            <span style={{ fontSize: '0.9em', color: '#666' }}>(Bhaktivinoda Thakura, quoted by Srila Prabhupada, Appearance Day Lecture, London, September 3, 1971)</span>
                        </blockquote>
                        <p>
                            Srila Prabhupada explained that a pure devotee never prays for liberation or an elevated birth, but only that wherever he takes birth, he may never forget the Lord. He also noted that Bhaktivinoda Thakura's celebrated song “Ei nama gaya gauracand madhura svare” remains widely sung by devotees to this day.
                        </p>
                    </div>

                    <Divider />

                    {/* 14 Disappearance */}
                    <div id="disappearance" className="sp-sec-block">
                        <SectionHead num="14" title="Disappearance" />
                        <p>
                            On June 23, 1914, at Jagannatha Puri, Sri Bhaktivinoda Thakura left this world. Amid sankirtana, his remains were carried back to his beloved Godruma in the land of Nadia, the land of Lord Chaitanya's own pastimes, and interred there. A close friend, Calcutta High Court judge Sarada Charana Mitra, wrote in an obituary that even under the pressure of his official duties as magistrate, Bhaktivinoda Thakura always found time for absorbing in devotional service, and that their conversations invariably turned within moments to the subject of bhakti.
                        </p>
                    </div>

                    <Divider />

                    {/* 15 Lessons */}
                    <div id="lessons" className="sp-sec-block">
                        <SectionHead num="15" title="Lessons for the Devotee" />
                        <h4 className="font-bold text-[#3D1A00] mb-2 mt-4 text-xl">Krishna consciousness is not a renunciation of duty, but a transformation of it.</h4>
                        <p>
                            A common misunderstanding is that one must first give up one's work, family, and social position before spiritual life can properly begin. Bhaktivinoda Thakura's own life rejects this idea completely. He was a Deputy Magistrate under British rule, responsible for the strict duties of a government officer, and yet he did not consider this an obstacle to bhakti — he considered it the field in which bhakti was to be practised. Whatever occupation Krishna has placed before us, that very occupation, performed with sincerity and offered in consciousness of Krishna, becomes our path of liberation. There is no need to wait for a more "spiritual" set of circumstances; the devotee simply brings Krishna into the circumstance already at hand.
                        </p>

                        <h4 className="font-bold text-[#3D1A00] mb-2 mt-8 text-xl">Fixed discipline, even in small amounts of time, produces unlimited spiritual results.</h4>
                        <p>
                            Sleeping four to five hours a night and giving the rest of his time to his government post, his family, and Krishna's service, Bhaktivinoda Thakura nonetheless left behind nearly a hundred books, hundreds of devotional songs, a rediscovered holy dhama, and a son who would carry the mission forward to the entire world. The lesson is not that we must imitate his schedule exactly — few of us could — but that we should not underestimate what a small, fixed, unfailing period of sadhana can accomplish over years of steady practice. It is not the quantity of time available to us that determines our spiritual progress, but the quality of our sincerity within whatever time we do have.
                        </p>
                        
                        <h4 className="font-bold text-[#3D1A00] mb-2 mt-8 text-xl">A devotee's integrity in the material world and his devotion in the spiritual world are one and the same integrity.</h4>
                        <p>
                            When Bhaktivinoda Thakura, as a government magistrate, personally arrested and punished a fraudulent "incarnation" who was exploiting innocent people in the name of religion, he was not stepping outside his devotional life to perform a worldly duty — he was expressing that very devotional life through his worldly duty. A soul fixed in Krishna consciousness does not become soft or indecisive in the face of cheating and exploitation; rather, his compassion for the genuinely innocent and his intolerance of blasphemy against the Lord and His devotees both flow from the same pure heart. We should not imagine, therefore, that our professional responsibilities and our spiritual convictions must be kept in separate compartments. Handled properly, one strengthens the other.
                        </p>

                        <h4 className="font-bold text-[#3D1A00] mb-2 mt-8 text-xl">A single sincere soul's prayer, even if it seems to bear no fruit in his own lifetime, can be fulfilled generations later by the mercy of guru and Krishna.</h4>
                        <p>
                            Bhaktivinoda Thakura wrote, decades before it happened, that fair-skinned people from foreign lands would one day come to Sri Mayapur-dhama and dance in the streets chanting the holy names of Krishna alongside Bengali Vaishnavas. He did not live to see this vision fulfilled. It was his son, Srila Bhaktisiddhanta Sarasvati Thakura, and then his son's disciple, His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, who carried this prayer out of Bengal and delivered it to the entire world. We should therefore never measure the value of our own service, however small or seemingly unfruitful, by whether we personally see its result. A pure prayer, planted with sincerity in the line of disciplic succession, does not depend on our own lifetime to bear its fruit.
                        </p>
                    </div>

                    <Divider />

                    {/* 16 Lila Sthali */}
                    <div id="lila-sthali" className="sp-sec-block">
                        <SectionHead num="16" title="Lila Sthali" />
                        
                        <div className="mt-6 mb-8">
                            <h4 className="font-bold text-[#3D1A00] mb-3 text-xl">Ulagram (Birnagar), Nadia district, West Bengal</h4>
                            <p>Bhaktivinoda Thakura's birthplace, on 2 September 1838, at his maternal grandfather's home. The site, popularly called "Bhaktivinoda Ashrama," has since been renovated with a temple where Deities of Sri Sri Radha-Krishna, Sri Sri Gaura-Nitai, Sri Sri Jagannatha-Baladeva-Subhadra, and Sri Nrisimhadeva are worshipped, developed by disciples in the line of Sri Lalita Prasada Thakura, one of Bhaktivinoda Thakura's own sons. This is where his earliest years, education, and initial exposure to Vaishnava sentiment took root before his family's later relocation.</p>
                        </div>

                        <div className="mt-8 mb-8">
                            <h4 className="font-bold text-[#3D1A00] mb-3 text-xl">Yogapitha, Sridhama Mayapur</h4>

                            <p>The birthsite of Sri Chaitanya Mahaprabhu, which Bhaktivinoda Thakura personally identified through scriptural and geographical research in 1887, confirmed by his siksha-guru Srila Jagannatha Dasa Babaji Maharaja, and formally established as the appearance site in 1893. He personally raised the funds and built a small temple here, completed in 1906, in which he installed the Deities of Sri Sri Gaura-Narayana together with His two consorts, Lakshmipriya and Vishnupriya; he also installed separate Deities of Sri Sri Gaura-Gadadhara and Lakshmi-Nrisimhadeva elsewhere on the property. Srila Bhaktisiddhanta Sarasvati Thakura later built the present hundred-foot temple in 1934, inaugurated on Gaura Purnima 1935, and during its excavation discovered the small Deity of Adhokshaja Vishnu originally worshipped by Sri Chaitanya's father, Jagannatha Mishra. This discovery of the birthsite is regarded as one of Bhaktivinoda Thakura's three greatest contributions to the Gaudiya Vaishnava mission, alongside his writings and his training of Srila Bhaktisiddhanta Sarasvati Thakura.</p>
                        </div>

                        <div className="mt-8 mb-8">
                            <h4 className="font-bold text-[#3D1A00] mb-3 text-xl">Surabhi Kunja, Godrumadvipa (Navadvipa)</h4>
                            <SectionImage 
                                src="/images/sri-bhaktivinoda-thakura/Surabhi-kunj-scaled.jpg.jpeg" 
                                alt="The bhajan kutir and room of Srila Bhaktivinoda Thakur at Surabhi Kunj, Mayapur." 
                                caption="The bhajan kutir and room of Srila Bhaktivinoda Thakur at Surabhi Kunj, Mayapur." 
                            />
                            <p>Bhaktivinoda Thakura's first residence in Godruma, established while he was still in government service. In 1890 he founded here the Nama Hatta, a marketplace of the Holy Name, for congregational preaching of Krishna consciousness. The Gaudiya Math temple that stands on the site today, on the bank of the Jalangi River, a short walk from his later home at Svananda Sukhada Kunja, worships Sri Sri Radha-Madana Mohana, Sri Gaurasundara (Lord Chaitanya), Sri Nityananda Raya, and Srila Bhaktivinoda Thakura himself.</p>
                        </div>
                        
                        <div className="mt-8 mb-8">
                            <h4 className="font-bold text-[#3D1A00] mb-3 text-xl">Svananda Sukhada Kunja, Godrumadvipa</h4>
                            <SectionImage 
                                src="/images/sri-bhaktivinoda-thakura/Sri-Swananda-Sukhada-Kunja.jpg.jpeg" 
                                alt="Svananda Sukhada Kunja, Srila Bhaktivinoda Thakura's residence and samadhi site in Godrumadvipa." 
                                caption="Svananda Sukhada Kunja, Srila Bhaktivinoda Thakura's residence and samadhi site in Godrumadvipa." 
                            />
                            <div style={{ marginTop: '1.5rem' }}>
                                <SectionImage 
                                    src="/images/sri-bhaktivinoda-thakura/bbaf940d-0383-496c-b82e-add406378ff0.png" 
                                    alt="Sri Sri Gaura-Gadadhara Deities worshiped by Srila Bhaktivinoda Thakura at Svananda Sukhada Kunja." 
                                    caption="Sri Sri Gaura-Gadadhara Deities worshiped by Srila Bhaktivinoda Thakura at Svananda Sukhada Kunja." 
                                />
                            </div>
                            <p>Srila Bhaktivinoda Thakura's more permanent Godruma residence, built in 1899. His personal Deities, Sri Sri Gaura-Gadadhara, are worshipped in the temple beside the original house, and his samadhi is located here. On the first floor of the house itself are two adjoining rooms preserved with the personal belongings of the two acharyas: Bhaktivinoda Thakura's own room, the first room at the top of the stairs, where he wrote many of his books and issues of Sajjana-toshani, and — next door to it — the separate room of Srila Bhaktisiddhanta Sarasvati Thakura, preserving his own personal items. Srila Gaurakishora Dasa Babaji Maharaja's bhajana-kutira stands in the same courtyard, since he would stay here whenever visiting Bhaktivinoda Thakura. It was from the verandah outside Bhaktivinoda Thakura's room that he had his vision of Lord Chaitanya and Lord Nityananda dancing in kirtana and of the future golden temple to arise at Mayapur.</p>
                        </div>

                        <div className="mt-8 mb-8">
                            <h4 className="font-bold text-[#3D1A00] mb-3 text-xl">Jagannatha Puri, Odisha</h4>
                            <SectionImage 
                                src="/images/sri-bhaktivinoda-thakura/Birth-place-of-Srila-Bhaktisiddhanta-Saraswati-Thakur-.jpg.jpeg" 
                                alt="Sri Chaitanya Gaudiya Math, birthplace of Srila Bhaktisiddhanta Sarasvati Thakura on Grand Road in Jagannath Puri." 
                                caption="Sri Chaitanya Gaudiya Math, birthplace of Srila Bhaktisiddhanta Sarasvati Thakura on Grand Road in Jagannath Puri." 
                            />
                            <p>The city where Srila Bhaktivinoda Thakura served as Deputy Magistrate and overseer of the Jagannatha Temple, and where Srila Bhaktisiddhanta Sarasvati Thakura was born in 1874. During that year's Ratha Yatra, Lord Jagannatha's cart halted for three days in front of the family home on Grand Road, and a garland fell upon the infant Bimala Prasada when he was brought before the Deity. A Sri Chaitanya Math is established at this exact site today, developed by the Gaudiya Math, where Sri Sri Radha-Krishna (known here as Radha-Nayana Mani Jiu), Sri Sri Jagannatha-Baladeva-Subhadra, and a murti of Srila Bhaktisiddhanta Sarasvati Thakura himself are worshipped on the very spot of his birth. Bhaktivinoda Thakura's own bhajana cottage, Bhakti Kuti, stood separately on the sea beach near Srila Haridasa Thakura's samadhi.</p>
                        </div>
                    </div>

                    <Divider />

                    {/* 17 FAQ */}
                    <div id="faq" className="sp-sec-block">
                        <SectionHead num="17" title="Frequently Asked Questions" />
                        <FaqAccordion
                            items={[
                                {
                                    q: "Who was Srila Bhaktivinoda Thakura?",
                                    a: "Srila Bhaktivinoda Thakura (1838–1914) was a Gaudiya Vaishnava acharya, government magistrate, and prolific author who revived the pure teachings of Sri Chaitanya Mahaprabhu in the modern age. He was the father and spiritual grandfather (in the disciplic line) of Srila Prabhupada, founder-acharya of ISKCON."
                                },
                                {
                                    q: "What is Srila Bhaktivinoda Thakura famous for?",
                                    a: "He is renowned for discovering the lost birthsite of Lord Chaitanya at Mayapur, authoring nearly one hundred books on Krishna consciousness, and predicting decades in advance that people from every nation would one day chant Hare Krishna together — a prediction Srila Prabhupada fulfilled."
                                },
                                {
                                    q: "How did Srila Bhaktivinoda Thakura balance his career and his devotion?",
                                    a: "As a Deputy Magistrate, he maintained a strict daily schedule, sleeping only a few hours and rising at night to write, chant, and study, while fully discharging his government duties during the day."
                                },
                                {
                                    q: "Who was Srila Bhaktivinoda Thakura's spiritual master?",
                                    a: "His siksha-guru was Srila Jagannatha Dasa Babaji Maharaja, a realized Vaishnava sadhu of Navadvipa. Bhaktivinoda Thakura in turn directed his own son, Srila Bhaktisiddhanta Sarasvati Thakura, to take initiation from Srila Gaurakishora Dasa Babaji Maharaja."
                                },
                                {
                                    q: "When are Srila Bhaktivinoda Thakura's appearance and disappearance days observed?",
                                    a: "As with all Vaishnava commemorative days, the dates follow the lunar (tithi) calendar and shift each year. Please refer to the current Gaudiya Vaishnava calendar for the exact dates."
                                }
                            ]}
                        />
                    </div>
                    
                    <Divider />

                    {/* 18 CONNECT WITH US */}
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
                </div>

            </article>

            <Footer />
        </div>
    )
}
