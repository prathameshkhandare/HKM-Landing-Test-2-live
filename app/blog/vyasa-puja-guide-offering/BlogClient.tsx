'use client'

import React from 'react'
import Navbar from "@/components/Navbar"
import Footer from "@/components/FooterSection"
import '../shared-blog-styles.css'

const SectionHead = ({ num, title }: { num: string; title: string }) => (<h2 className="gp-sh">{num}. {title}</h2>)

const SectionImage = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
    <div className="gp-image-container">
        <img src={src} alt={alt} className="gp-image" />
        {caption && <span className="gp-image-caption">{caption}</span>}
    </div>
)

export default function BlogClient() {
    return (
        <div className="min-h-screen bg-[#FFF9F0] selection:bg-[#c9973a] selection:text-white">
            <Navbar />

            <article className="gp-blog-wrap">
                <header className="gp-blog-header">
                    <p className="gp-hero-label">Festival Guide</p>
                    <h1 className="gp-blog-title">
                        Sri Vyasa Puja:<br />
                        Understanding the Festival &amp; Writing Your Offering
                    </h1>
                    <div className="gp-hero-line" />
                    <p className="gp-blog-subtitle">
                        A complete devotee&apos;s guide to the meaning of Vyasa Puja, its significance, and how to write a heartfelt offering to Srila Prabhupada.
                    </p>
                    <p className="gp-blog-byline">
                        By <strong>HKM Chennai</strong>
                        {" "}— Dakshina Dwaraka Dham, Thiruvanmiyur
                    </p>
                </header>

                <div className="gp-image-container" style={{ marginTop: '0', marginBottom: '3rem' }}>
                    <img src="/images/vyasa-puja-guide-offering/hero.png" alt="Devotees offering Guru Puja to Srila Prabhupada at ISKCON Thiruvanmiyur on Vyasa Puja" className="gp-image" style={{ objectPosition: 'top' }} />
                </div>

                <div className="gp-content">
                    <p>
                        Every year, devotees around the world observe Sri Vyasa Puja — the appearance day of His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada, founder-acharya of the International Society for Krishna Consciousness (ISKCON). This guide explains what Vyasa Puja means, why it holds such an important place in the Vaishnava calendar, and how you can prepare a heartfelt written offering for the occasion — whether this is your first time or your tenth.
                    </p>

                    <div className="gp-divider">✦</div>

                    <SectionHead num="01" title="What Is Vyasa Puja?" />
                    <p>
                        Vyasa Puja literally means &ldquo;worship of Vyasa.&rdquo; Srila Vyasadeva compiled the Vedic literatures — the Vedas, the Puranas, the Mahabharata and the Vedanta-sutra — for the benefit of all living beings, and is honored as the original spiritual master in the disciplic succession, or parampara. In gratitude for this gift of transcendental knowledge, it is a time-honored Vedic tradition that a bona fide spiritual master, as the living representative of Vyasadeva, is honored by his disciples on his appearance day. This annual ceremony is what we call Vyasa Puja.
                    </p>
                    <p>
                        If you are new to this tradition: think of Vyasa Puja as a day set aside each year to formally thank and glorify the spiritual master who connects us to Krishna. Just as we approach Krishna through the spiritual master, on this day disciples and well-wishers approach the spiritual master directly — through remembrance, service, and a written offering of gratitude.
                    </p>

                    <SectionHead num="02" title="The Significance of Vyasa Puja" />
                    <p>
                        Vyasa Puja is not a ceremony of worshipping a person — it is a ceremony of honoring the parampara itself, the unbroken chain through which transcendental knowledge is passed down without alteration. Srila Prabhupada often explained this carefully, so that newcomers would not mistake the ceremony for ordinary reverence of a man.
                    </p>
                    <p>
                        Vyasadeva, he taught, is the original author of Vedic literature, who received knowledge from Narada Muni, who received it from Brahma, who received it from Krishna Himself. Every bona fide spiritual master in the line of disciplic succession is understood to be a representative of Vyasadeva — one whose role is simply to deliver that knowledge exactly as received, without adding to it or changing it in any way.
                    </p>
                    <blockquote className="gp-bq">
                        <p>&ldquo;Vyāsa-pūjā means a spiritual master is representative of Vyāsa.&rdquo;</p>
                        <cite>— Srila Prabhupada, Lecture on SB 1.1.5–6, London, 23 August 1971</cite>
                    </blockquote>
                    <p>
                        He compared this role to that of a trusted courier: a spiritual master who delivers Krishna&apos;s message exactly as it was given — without subtraction or addition — is, in that respect, perfect. This is why the honor offered to the spiritual master on his appearance day is understood to travel further upward, ultimately as an offering to Krishna Himself.
                    </p>
                    <blockquote className="gp-bq">
                        <p>&ldquo;Guru is the representative of Vyāsadeva because he does not change anything.&rdquo;</p>
                        <cite>— Srila Prabhupada, Lecture, Hyderabad, 10 December 1976</cite>
                    </blockquote>
                    <p>
                        In this sense, Vyasa Puja is simply the observance of the spiritual master&apos;s appearance day — a day when disciples pause to formally express what his mercy and teachings mean in their lives.
                    </p>
                    <blockquote className="gp-bq">
                        <p>&ldquo;Vyāsa-pūjā means to observe the birthday of the spiritual master.&rdquo;</p>
                        <cite>— Srila Prabhupada, Sri Vyasa-puja lecture, Hamburg, 5 September 1969</cite>
                    </blockquote>

                    <SectionHead num="03" title="Why This Festival Falls Near Sri Krishna Janmashtami" />
                    <p>
                        During his 1968 Vyāsa-pūjā address in Montreal, Śřīla Prabhupāda pointed out that his appearance day had coincided with Nandotsava, the festival celebrated by Nanda Mahārāja after Lord Kṛṣṇa&apos;s birth. He explained that Nandotsava commemorates the joyous celebration of Kṛṣṇa&apos;s appearance in Vṛndāvana and noted the happy coincidence that his own Vyāsa-pūjā fell on that sacred day. Thus, in the annual Vaiṣṇava calendar, the celebration of Lord Kṛṣṇa&apos;s appearance is followed by the celebration of the spiritual master&apos;s appearance, highlighting the natural progression from honoring Kṛṣṇa&apos;s advent to honoring the representative who brings Kṛṣṇa&apos;s message to the world.
                    </p>
                    <p style={{fontSize: '0.9em', color: '#666', marginTop: '1rem'}}>(Srila Prabhupada, Vyasa-puja lecture, Montreal, 17 August 1968.)</p>

                    <SectionHead num="04" title="How We Celebrate at Srila Prabhupada's ISKCON Thiruvanmiyur" />
                    <p>
                        Every year, devotees and well-wishers gather at Dakshina Dwaraka Dham for a joyous day-long celebration. The program generally begins in the morning around 10:30 AM and includes:
                    </p>
                    <ul className="gp-teachings-list">
                        <li>Presentation of the Vyasa Puja offering book to Srila Prabhupada</li>
                        <li>An elaborate Abhishekam ceremony for Srila Prabhupada</li>
                        <li>A special discourse or video presentation on his life and teachings</li>
                        <li>Guru Puja to Srila Prabhupada</li>
                        <li>Rajabhoga Arati</li>
                        <li>Mahaprasadam honored by all devotees present</li>
                    </ul>
                    <p>
                        All devotees and well-wishers are warmly welcome to attend and take part in this festive occasion.
                    </p>

                    <div className="gp-divider">✦</div>

                    <SectionHead num="05" title="Why We Write an Offering" />
                    <p>
                        Srila Prabhupada himself instructed that writing a homage on Vyasa Puja is an important duty and a rare opportunity for every devotee to glorify and thank the spiritual master. It is not a formality to complete quickly — it is a chance to reflect on your own journey in Krishna consciousness and to express, in your own words, what Srila Prabhupada means to you. We encourage every devotee to take full benefit of this opportunity.
                    </p>

                    <SectionHead num="06" title="What Can I Write About?" />
                    <p>
                        Your offering may draw from any of the following — you do not need to cover all of them:
                    </p>
                    <ul className="gp-teachings-list">
                        <li>Srila Prabhupada&apos;s influence and impact on your Krishna-conscious life</li>
                        <li>Your personal realizations gained through his books, lectures or teachings</li>
                        <li>Instances of his reciprocation, mercy or guidance that you have experienced</li>
                        <li>Your gratitude and indebtedness toward him</li>
                        <li>Challenges in your daily life, and how his teachings help you face them</li>
                        <li>Philosophy of guru-tattva (the science of the spiritual master)</li>
                        <li>Pastimes and transcendental qualities of Srila Prabhupada</li>
                        <li>Your hopes, aspirations and prayers for the year ahead</li>
                        <li>Relevant references or quotes from Bhagavad-gita, Srimad-Bhagavatam or his other books</li>
                    </ul>

                    <SectionHead num="07" title="Before You Begin — General Principles" />
                    <ul className="gp-teachings-list">
                        <li>Write in the mood of glorification. The offering is meant to honor Srila Prabhupada — it is not a platform for grievances or criticism of devotees or the mission.</li>
                        <li>Write it yourself, in your own words. You may read previous years&apos; offerings by senior devotees for inspiration, but do not reuse, edit or copy anyone else&apos;s offering, including your own from a previous year.</li>
                        <li>Any language is welcome. Write in whichever language you can express yourself most sincerely — English, Tamil, Hindi, or any other language.</li>
                        <li>Keep the tone personal and heartfelt rather than formal or academic.</li>
                    </ul>

                    <SectionHead num="08" title="Structure of Your Offering" />
                    <h3 className="gp-sh3">Opening</h3>
                    <p>
                        A simple, traditional opening works well. For example:
                    </p>
                    <blockquote className="gp-bq">
                        <p>&ldquo;Dear Srila Prabhupada, please accept my humble obeisances. All glories to Srila Prabhupada. All glories to you on this auspicious day of your Vyasa Puja.&rdquo;</p>
                    </blockquote>
                    <p>
                        Any equivalent greeting in your own language and words is equally acceptable.
                    </p>

                    <h3 className="gp-sh3">Body</h3>
                    <p>
                        This is the heart of your offering — draw from the ideas in Section 06 above. Let it flow naturally from your own experience rather than following a rigid formula.
                    </p>

                    <h3 className="gp-sh3">Ending</h3>
                    <p>
                        Close with a simple expression of appreciation and aspiration to serve, such as &ldquo;Your humble servant,&rdquo; followed by your name. Use your initiated name if you have one; otherwise your legal name, prefixed by &ldquo;Bhakta&rdquo; (for men) or &ldquo;Bhaktin&rdquo; (for women), with initials after the name. For example: Bhaktin Shailaja M S, Bhakta Raghuram P.
                    </p>

                    <SectionImage
                        src="/images/vyasa-puja-guide-offering/s.jpeg"
                        alt="Srila Prabhupada Vyasa Puja Celebration"
                        caption="Srila Prabhupada Vyasa Puja Celebration"
                    />

                    <div className="gp-divider">✦</div>

                    <SectionHead num="09" title="Using Quotations & References" />
                    <ul className="gp-teachings-list">
                        <li>You may include brief verses or quotations from Vedabase where relevant.</li>
                        <li>Always mention the exact source — book name, chapter and verse number — exactly as it appears in Srila Prabhupada&apos;s books. Example: SB 6.4.15.</li>
                        <li>Retain the diacritical marks (accents) when quoting Sanskrit verses.</li>
                        <li>Include the English translation if the verse is not widely known.</li>
                        <li>Write all quotations in italics.</li>
                    </ul>
                    <p>
                        Example of a properly formatted quotation:
                    </p>
                    <blockquote className="gp-bq">
                        <p>mūkaṃ karoti vācālaṃ<br/>
                        paṅguṃ laṅghayate girim<br/>
                        yat-kṛpā tam ahaṃ vande<br/>
                        śrī-gurum dīna-tāraṇam</p>
                        <cite>&ldquo;I offer my respectful obeisances unto my spiritual master, the deliverer of the fallen souls. His mercy turns dumb into eloquent speakers and enables the lame to cross mountains.&rdquo; (Srimad-Bhagavatam 6.7.23)</cite>
                    </blockquote>

                    <SectionHead num="10" title="Format & Length" />
                    <ul className="gp-teachings-list">
                        <li>Maximum 750 words for prose offerings. Shorter, concise and sharp writing is welcome and encouraged.</li>
                        <li>If writing a poem, limit it to 40 lines maximum, including spacing.</li>
                        <li>Offerings beyond these limits will be edited to fit our standard, with a simple note to you — so it helps to keep this in mind while writing.</li>
                        <li>You may submit your offering in any language.</li>
                    </ul>

                    <SectionHead num="11" title="How to Submit" />
                    <p>
                        Submission details — including the exact deadline and submission link — are announced separately by the temple ahead of each year&apos;s festival. Please watch temple communications (website, social media and devotee groups) for the current year&apos;s submission window, and submit well ahead of the deadline to allow time for compilation.
                    </p>

                    <div className="gp-divider">✦</div>

                    <SectionHead num="12" title="Frequently Asked Questions" />
                    <div className="gp-faq-grid">
                        <div className="gp-faq-item">
                            <p className="gp-faq-q">What is Vyasa Puja and why is it celebrated?</p>
                            <p className="gp-faq-a">Vyasa Puja is the annual observance of a spiritual master&apos;s appearance day, honoring him as the living representative of Srila Vyasadeva, the original compiler of Vedic knowledge. It is celebrated to express gratitude for the transcendental knowledge he has delivered unchanged through disciplic succession.</p>
                        </div>
                        <div className="gp-faq-item">
                            <p className="gp-faq-q">Do I need to be formally initiated to write a Vyasa Puja offering?</p>
                            <p className="gp-faq-a">No. Any devotee or well-wisher inspired by Srila Prabhupada&apos;s teachings is welcome to write an offering, whether initiated or not. Simply use &ldquo;Bhakta&rdquo; or &ldquo;Bhaktin&rdquo; before your name if you have not yet received spiritual initiation.</p>
                        </div>
                        <div className="gp-faq-item">
                            <p className="gp-faq-q">Can I write my offering in a language other than English?</p>
                            <p className="gp-faq-a">Yes. Offerings are welcome in any language — write in the language that lets you express your gratitude most sincerely.</p>
                        </div>
                        <div className="gp-faq-item">
                            <p className="gp-faq-q">I have never written a Vyasa Puja offering before — where do I start?</p>
                            <p className="gp-faq-a">Start with the opening lines suggested in Section 8, then simply write about one or two genuine experiences or realizations from your own Krishna-conscious life, guided by the ideas in Section 6. Sincerity matters far more than literary polish.</p>
                        </div>
                        <div className="gp-faq-item">
                            <p className="gp-faq-q">What happens if my offering exceeds the word or line limit?</p>
                            <p className="gp-faq-a">It will be gently edited to fit our standard length, with a simple note to let you know. Keeping the limits in mind while writing helps avoid this.</p>
                        </div>
                    </div>

                    <SectionHead num="13" title="Quick Checklist Before You Submit" />
                    <ul className="gp-teachings-list">
                        <li>Written entirely in my own words, in the mood of glorification</li>
                        <li>No grievances, complaints or criticism of devotees included</li>
                        <li>Not copied or reused from a previous year or another devotee&apos;s writing</li>
                        <li>Quotations, if any, are properly referenced, italicized, with diacritics retained</li>
                        <li>Within the word limit (750 words) or line limit (40 lines for poems)</li>
                        <li>Ends with &ldquo;Your humble servant&rdquo; and my name in the correct format</li>
                    </ul>
                    <p style={{fontWeight: 'bold', marginTop: '2rem', textAlign: 'center'}}>
                        Thank you for taking part in this special offering to Srila Prabhupada.<br/>Hare Krishna.
                    </p>

                    <div className="gp-divider">✦</div>

                    <div className="gp-connect-section" id="connect">
                        <h2 className="gp-connect-h">Connect with Us</h2>
                        <p className="gp-connect-desc">Follow Hare Krsna Movement Chennai across all platforms for daily darsana and event updates.</p>
                    </div>

                    <div className="gp-social-grid">
                        <a href="https://hkmchennai.org" target="_blank" rel="noopener noreferrer" className="gp-social-card">
                            <span className="gp-s-icon">🌐</span>
                            <div className="gp-s-text">
                                <span className="gp-s-label">Website</span>
                                <span className="gp-s-url">hkmchennai.org</span>
                            </div>
                            <span className="gp-s-arrow">→</span>
                        </a>
                        <a href="https://twitter.com/ChennaiHare" target="_blank" rel="noopener noreferrer" className="gp-social-card">
                            <span className="gp-s-icon">🕊️</span>
                            <div className="gp-s-text">
                                <span className="gp-s-label">Twitter (X)</span>
                                <span className="gp-s-url">@ChennaiHare</span>
                            </div>
                            <span className="gp-s-arrow">→</span>
                        </a>
                        <a href="https://www.instagram.com/hkm_chennai/" target="_blank" rel="noopener noreferrer" className="gp-social-card">
                            <span className="gp-s-icon">📸</span>
                            <div className="gp-s-text">
                                <span className="gp-s-label">Instagram</span>
                                <span className="gp-s-url">@hkm_chennai</span>
                            </div>
                            <span className="gp-s-arrow">→</span>
                        </a>
                        <a href="https://www.linkedin.com/company/iskcon-chennai" target="_blank" rel="noopener noreferrer" className="gp-social-card">
                            <span className="gp-s-icon">💼</span>
                            <div className="gp-s-text">
                                <span className="gp-s-label">LinkedIn</span>
                                <span className="gp-s-url">Srila Prabhupada&apos;s ISKCON Thiruvanmiyur</span>
                            </div>
                            <span className="gp-s-arrow">→</span>
                        </a>
                        <a href="https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign" target="_blank" rel="noopener noreferrer" className="gp-social-card">
                            <span className="gp-s-icon">🎯</span>
                            <div className="gp-s-text">
                                <span className="gp-s-label">Support</span>
                                <span className="gp-s-url">campaigns.hkmchennai.org</span>
                            </div>
                            <span className="gp-s-arrow">→</span>
                        </a>
                        <a href="https://whatsapp.com/channel/0029VaF5hH15fM5cE8tSNa1M" target="_blank" rel="noopener noreferrer" className="gp-social-card">
                            <span className="gp-s-icon">📱</span>
                            <div className="gp-s-text">
                                <span className="gp-s-label">WhatsApp</span>
                                <span className="gp-s-url">Join our WhatsApp Channel</span>
                            </div>
                            <span className="gp-s-arrow">→</span>
                        </a>
                    </div>

                    <footer className="gp-blog-footer">
                        <p>Hare Krishna Movement Chennai | Daksina Dvaraka Dham, Thiruvanmiyur</p>
                        <p>Affiliated to ISKCON Bangalore | Non-Profit Charitable Organisation Regn. No. 828, Chennai, 2008</p>
                    </footer>
                </div>

            </article>

            <Footer />
        </div>
    )
}
