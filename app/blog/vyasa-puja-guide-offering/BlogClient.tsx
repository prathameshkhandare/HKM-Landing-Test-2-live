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

const SectionImage = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
    <div className="sp-sec-image-wrap">
        <img src={src} alt={alt} />
        {caption && <span className="sp-sec-caption">{caption}</span>}
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
    return (
        <div className="min-h-screen bg-[#FFF9F0] selection:bg-[#c9973a] selection:text-white">
            <Navbar />

            <article className="at-blog-wrap">
                <header className="at-blog-header">
                    <p className="at-hero-label">Festival Guide</p>
                    <h1 className="at-blog-title">
                        Sri Vyasa Puja:<br />
                        Understanding the Festival & Writing Your Offering
                    </h1>
                    <div className="at-hero-line" />
                    <p className="at-blog-subtitle">
                        A complete devotee's guide to the meaning of Vyasa Puja, its significance, and how to write a heartfelt offering to Srila Prabhupada.
                    </p>
                    <p className="at-blog-byline">
                        By <strong>HKM Chennai</strong>
                        {" "}— Dakshina Dwaraka Dham, Thiruvanmiyur
                    </p>
                </header>

                <div className="sp-sec-image-wrap" style={{ marginTop: '0', marginBottom: '3rem' }}>
                    <img src="/images/vyasa-puja-guide-offering/hero.png" alt="Devotees offering Guru Puja to Srila Prabhupada at ISKCON Thiruvanmiyur on Vyasa Puja" style={{ objectPosition: 'top' }} />
                </div>

                <div className="at-blog-content">
                    <div className="sp-sec-block">
                        <p className="sp-sec-paragraph">
                            Every year, devotees around the world observe Sri Vyasa Puja — the appearance day of His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada, founder-acharya of the International Society for Krishna Consciousness (ISKCON). This guide explains what Vyasa Puja means, why it holds such an important place in the Vaishnava calendar, and how you can prepare a heartfelt written offering for the occasion — whether this is your first time or your tenth.
                        </p>
                    </div>

                    <Divider />

                    <div className="sp-sec-block">
                        <SectionHead num="01" title="What Is Vyasa Puja?" />
                        <p className="sp-sec-paragraph">
                            Vyasa Puja literally means “worship of Vyasa.” Srila Vyasadeva compiled the Vedic literatures — the Vedas, the Puranas, the Mahabharata and the Vedanta-sutra — for the benefit of all living beings, and is honored as the original spiritual master in the disciplic succession, or parampara. In gratitude for this gift of transcendental knowledge, it is a time-honored Vedic tradition that a bona fide spiritual master, as the living representative of Vyasadeva, is honored by his disciples on his appearance day. This annual ceremony is what we call Vyasa Puja.
                        </p>
                        <p className="sp-sec-paragraph">
                            If you are new to this tradition: think of Vyasa Puja as a day set aside each year to formally thank and glorify the spiritual master who connects us to Krishna. Just as we approach Krishna through the spiritual master, on this day disciples and well-wishers approach the spiritual master directly — through remembrance, service, and a written offering of gratitude.
                        </p>
                    </div>

                    <div className="sp-sec-block">
                        <SectionHead num="02" title="The Significance of Vyasa Puja" />
                        <p className="sp-sec-paragraph">
                            Vyasa Puja is not a ceremony of worshipping a person — it is a ceremony of honoring the parampara itself, the unbroken chain through which transcendental knowledge is passed down without alteration. Srila Prabhupada often explained this carefully, so that newcomers would not mistake the ceremony for ordinary reverence of a man.
                        </p>
                        <p className="sp-sec-paragraph">
                            Vyasadeva, he taught, is the original author of Vedic literature, who received knowledge from Narada Muni, who received it from Brahma, who received it from Krishna Himself. Every bona fide spiritual master in the line of disciplic succession is understood to be a representative of Vyasadeva — one whose role is simply to deliver that knowledge exactly as received, without adding to it or changing it in any way.
                        </p>
                        <blockquote className="sp-sec-blockquote">
                            <p style={{ fontStyle: 'italic', color: '#3D1A00' }}>“Vyāsa-pūjā means a spiritual master is representative of Vyāsa.”</p>
                            <span style={{ fontSize: '0.9em', color: '#666' }}>(Srila Prabhupada, Lecture on SB 1.1.5–6, London, 23 August 1971)</span>
                        </blockquote>
                        <p className="sp-sec-paragraph">
                            He compared this role to that of a trusted courier: a spiritual master who delivers Krishna's message exactly as it was given — without subtraction or addition — is, in that respect, perfect. This is why the honor offered to the spiritual master on his appearance day is understood to travel further upward, ultimately as an offering to Krishna Himself.
                        </p>
                        <blockquote className="sp-sec-blockquote">
                            <p style={{ fontStyle: 'italic', color: '#3D1A00' }}>“Guru is the representative of Vyāsadeva because he does not change anything.”</p>
                            <span style={{ fontSize: '0.9em', color: '#666' }}>(Srila Prabhupada, Lecture, Hyderabad, 10 December 1976)</span>
                        </blockquote>
                        <p className="sp-sec-paragraph">
                            In this sense, Vyasa Puja is simply the observance of the spiritual master's appearance day — a day when disciples pause to formally express what his mercy and teachings mean in their lives.
                        </p>
                        <blockquote className="sp-sec-blockquote">
                            <p style={{ fontStyle: 'italic', color: '#3D1A00' }}>“Vyāsa-pūjā means to observe the birthday of the spiritual master.”</p>
                            <span style={{ fontSize: '0.9em', color: '#666' }}>(Srila Prabhupada, Sri Vyasa-puja lecture, Hamburg, 5 September 1969)</span>
                        </blockquote>
                    </div>

                    <div className="sp-sec-block">
                        <SectionHead num="03" title="Why This Festival Falls Near Sri Krishna Janmashtami" />
                        <p className="sp-sec-paragraph">
                            During his 1968 Vyāsa-pūjā address in Montreal, Śřīla Prabhupāda pointed out that his appearance day had coincided with Nandotsava, the festival celebrated by Nanda Mahārāja after Lord Kṛṣṇa's birth. He explained that Nandotsava commemorates the joyous celebration of Kṛṣṇa's appearance in Vṛndāvana and noted the happy coincidence that his own Vyāsa-pūjā fell on that sacred day. Thus, in the annual Vaiṣṇava calendar, the celebration of Lord Kṛṣṇa's appearance is followed by the celebration of the spiritual master's appearance, highlighting the natural progression from honoring Kṛṣṇa's advent to honoring the representative who brings Kṛṣṇa's message to the world.
                        </p>
                        <p className="sp-sec-paragraph" style={{fontSize: '0.9em', color: '#666', marginTop: '1rem'}}>(Srila Prabhupada, Vyasa-puja lecture, Montreal, 17 August 1968.)</p>
                    </div>

                    <div className="sp-sec-block">
                        <SectionHead num="04" title="How We Celebrate at Srila Prabhupada's ISKCON Thiruvanmiyur" />
                        <p className="sp-sec-paragraph">
                            Every year, devotees and well-wishers gather at Dakshina Dwaraka Dham for a joyous day-long celebration. The program generally begins in the morning around 10:30 AM and includes:
                        </p>
                        <ul className="sp-sec-list" style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Presentation of the Vyasa Puja offering book to Srila Prabhupada</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>An elaborate Abhishekam ceremony for Srila Prabhupada</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>A special discourse or video presentation on his life and teachings</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Guru Puja to Srila Prabhupada</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Rajabhoga Arati</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Mahaprasadam honored by all devotees present</li>
                        </ul>
                        <p className="sp-sec-paragraph">
                            All devotees and well-wishers are warmly welcome to attend and take part in this festive occasion.
                        </p>
                    </div>

                    <Divider />

                    <div className="sp-sec-block">
                        <SectionHead num="05" title="Why We Write an Offering" />
                        <p className="sp-sec-paragraph">
                            Srila Prabhupada himself instructed that writing a homage on Vyasa Puja is an important duty and a rare opportunity for every devotee to glorify and thank the spiritual master. It is not a formality to complete quickly — it is a chance to reflect on your own journey in Krishna consciousness and to express, in your own words, what Srila Prabhupada means to you. We encourage every devotee to take full benefit of this opportunity.
                        </p>
                    </div>

                    <div className="sp-sec-block">
                        <SectionHead num="06" title="What Can I Write About?" />
                        <p className="sp-sec-paragraph">
                            Your offering may draw from any of the following — you do not need to cover all of them:
                        </p>
                        <ul className="sp-sec-list" style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Srila Prabhupada's influence and impact on your Krishna-conscious life</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Your personal realizations gained through his books, lectures or teachings</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Instances of his reciprocation, mercy or guidance that you have experienced</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Your gratitude and indebtedness toward him</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Challenges in your daily life, and how his teachings help you face them</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Philosophy of guru-tattva (the science of the spiritual master)</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Pastimes and transcendental qualities of Srila Prabhupada</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Your hopes, aspirations and prayers for the year ahead</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Relevant references or quotes from Bhagavad-gita, Srimad-Bhagavatam or his other books</li>
                        </ul>
                    </div>

                    <div className="sp-sec-block">
                        <SectionHead num="07" title="Before You Begin — General Principles" />
                        <ul className="sp-sec-list" style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Write in the mood of glorification. The offering is meant to honor Srila Prabhupada — it is not a platform for grievances or criticism of devotees or the mission.</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Write it yourself, in your own words. You may read previous years' offerings by senior devotees for inspiration, but do not reuse, edit or copy anyone else's offering, including your own from a previous year.</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Any language is welcome. Write in whichever language you can express yourself most sincerely — English, Tamil, Hindi, or any other language.</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Keep the tone personal and heartfelt rather than formal or academic.</li>
                        </ul>
                    </div>

                    <div className="sp-sec-block">
                        <SectionHead num="08" title="Structure of Your Offering" />
                        <h3 style={{ fontSize: '1.5rem', fontFamily: 'serif', color: '#3D1A00', fontWeight: 'bold', marginTop: '1.5rem', marginBottom: '1rem' }}>Opening</h3>
                        <p className="sp-sec-paragraph">
                            A simple, traditional opening works well. For example:
                        </p>
                        <blockquote className="sp-sec-blockquote">
                            <p style={{ fontStyle: 'italic', color: '#3D1A00' }}>“Dear Srila Prabhupada, please accept my humble obeisances. All glories to Srila Prabhupada. All glories to you on this auspicious day of your Vyasa Puja.”</p>
                        </blockquote>
                        <p className="sp-sec-paragraph">
                            Any equivalent greeting in your own language and words is equally acceptable.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontFamily: 'serif', color: '#3D1A00', fontWeight: 'bold', marginTop: '1.5rem', marginBottom: '1rem' }}>Body</h3>
                        <p className="sp-sec-paragraph">
                            This is the heart of your offering — draw from the ideas in Section 06 above. Let it flow naturally from your own experience rather than following a rigid formula.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontFamily: 'serif', color: '#3D1A00', fontWeight: 'bold', marginTop: '1.5rem', marginBottom: '1rem' }}>Ending</h3>
                        <p className="sp-sec-paragraph">
                            Close with a simple expression of appreciation and aspiration to serve, such as “Your humble servant,” followed by your name. Use your initiated name if you have one; otherwise your legal name, prefixed by “Bhakta” (for men) or “Bhaktin” (for women), with initials after the name. For example: Bhaktin Shailaja M S, Bhakta Raghuram P.
                        </p>
                    </div>

                    <SectionImage 
                        src="/images/vyasa-puja-guide-offering/s.jpeg" 
                        alt="Srila Prabhupada Vyasa Puja Celebration" 
                    />

                    <Divider />

                    <div className="sp-sec-block">
                        <SectionHead num="09" title="Using Quotations & References" />
                        <ul className="sp-sec-list" style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>You may include brief verses or quotations from Vedabase where relevant.</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Always mention the exact source — book name, chapter and verse number — exactly as it appears in Srila Prabhupada's books. Example: SB 6.4.15.</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Retain the diacritical marks (accents) when quoting Sanskrit verses.</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Include the English translation if the verse is not widely known.</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Write all quotations in italics.</li>
                        </ul>
                        <p className="sp-sec-paragraph">
                            Example of a properly formatted quotation:
                        </p>
                        <blockquote className="sp-sec-blockquote">
                            <p style={{ fontStyle: 'italic', color: '#3D1A00' }}>mūkaṃ karoti vācālaṃ<br/>
                            paṅguṃ laṅghayate girim<br/>
                            yat-kṛpā tam ahaṃ vande<br/>
                            śrī-gurum dīna-tāraṇam</p><br/>
                            <p style={{ fontStyle: 'italic', color: '#3D1A00' }}>“I offer my respectful obeisances unto my spiritual master, the deliverer of the fallen souls. His mercy turns dumb into eloquent speakers and enables the lame to cross mountains.” (Srimad-Bhagavatam 6.7.23)</p>
                        </blockquote>
                    </div>

                    <div className="sp-sec-block">
                        <SectionHead num="10" title="Format & Length" />
                        <ul className="sp-sec-list" style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Maximum 750 words for prose offerings. Shorter, concise and sharp writing is welcome and encouraged.</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>If writing a poem, limit it to 40 lines maximum, including spacing.</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Offerings beyond these limits will be edited to fit our standard, with a simple note to you — so it helps to keep this in mind while writing.</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>You may submit your offering in any language.</li>
                        </ul>
                    </div>

                    <div className="sp-sec-block">
                        <SectionHead num="11" title="How to Submit" />
                        <p className="sp-sec-paragraph">
                            Submission details — including the exact deadline and submission link — are announced separately by the temple ahead of each year's festival. Please watch temple communications (website, social media and devotee groups) for the current year's submission window, and submit well ahead of the deadline to allow time for compilation.
                        </p>
                    </div>

                    <Divider />

                    <div className="sp-sec-block">
                        <SectionHead num="12" title="Frequently Asked Questions" />
                        <FaqAccordion
                            items={[
                                {
                                    q: "What is Vyasa Puja and why is it celebrated?",
                                    a: "Vyasa Puja is the annual observance of a spiritual master's appearance day, honoring him as the living representative of Srila Vyasadeva, the original compiler of Vedic knowledge. It is celebrated to express gratitude for the transcendental knowledge he has delivered unchanged through disciplic succession."
                                },
                                {
                                    q: "Do I need to be formally initiated to write a Vyasa Puja offering?",
                                    a: "No. Any devotee or well-wisher inspired by Srila Prabhupada's teachings is welcome to write an offering, whether initiated or not. Simply use “Bhakta” or “Bhaktin” before your name if you have not yet received spiritual initiation."
                                },
                                {
                                    q: "Can I write my offering in a language other than English?",
                                    a: "Yes. Offerings are welcome in any language — write in the language that lets you express your gratitude most sincerely."
                                },
                                {
                                    q: "I have never written a Vyasa Puja offering before — where do I start?",
                                    a: "Start with the opening lines suggested in Section 8, then simply write about one or two genuine experiences or realizations from your own Krishna-conscious life, guided by the ideas in Section 6. Sincerity matters far more than literary polish."
                                },
                                {
                                    q: "What happens if my offering exceeds the word or line limit?",
                                    a: "It will be gently edited to fit our standard length, with a simple note to let you know. Keeping the limits in mind while writing helps avoid this."
                                }
                            ]}
                        />
                    </div>

                    <div className="sp-sec-block" style={{ marginTop: '3rem' }}>
                        <SectionHead num="13" title="Quick Checklist Before You Submit" />
                        <ul className="sp-sec-list" style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Written entirely in my own words, in the mood of glorification</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>No grievances, complaints or criticism of devotees included</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Not copied or reused from a previous year or another devotee's writing</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Quotations, if any, are properly referenced, italicized, with diacritics retained</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Within the word limit (750 words) or line limit (40 lines for poems)</li>
                            <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>Ends with “Your humble servant” and my name in the correct format</li>
                        </ul>
                        <p className="sp-sec-paragraph" style={{fontWeight: 'bold', marginTop: '2rem', textAlign: 'center'}}>
                            Thank you for taking part in this special offering to Srila Prabhupada.<br/>Hare Krishna.
                        </p>
                    </div>

                    <Divider />

                    {/* CONNECT WITH US */}
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
