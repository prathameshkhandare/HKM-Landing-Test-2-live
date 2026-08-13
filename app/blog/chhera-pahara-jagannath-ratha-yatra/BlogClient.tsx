'use client'

import React from 'react'
import Navbar from "@/components/Navbar"
import Footer from "@/components/FooterSection"
import '../shared-blog-styles.css'

const SectionHead = ({ num, title }: { num: string; title: string }) => (<h2 className="gp-sh">{num}. {title}</h2>)

const SectionImage = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
    <div className="gp-image-container">
        <img src={src} alt={alt} className="gp-image" />
        <span className="gp-image-caption">{caption}</span>
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

export default function BlogClient() {
    return (
        <div className="min-h-screen bg-[#FFF9F0] selection:bg-[#c9973a] selection:text-white">
            <Navbar />

            <article className="gp-blog-wrap">
                <header className="gp-blog-header">
                    <p className="gp-hero-label">Festivals / Jagannath Ratha Yatra Series</p>
                    <h1 className="gp-blog-title">
                        Chhera Pahara and Jagannath Ratha Yatra:<br />
                        Why the King of Puri Sweeps the Chariots
                    </h1>
                    <div className="gp-hero-line" />
                    <p className="gp-blog-subtitle">
                        Before the chariots move, the King of Puri himself takes up a broom.
                    </p>
                    <p className="gp-blog-byline">
                        By <strong>HKM Chennai</strong>
                        {" "}— Dakshina Dwaraka Dham, Thiruvanmiyur
                    </p>
                    <div className="gp-meta-row">
                        <span>📅 July 09, 2026</span>
                        <span>⏱ 8 min read</span>
                        <span>🏷 Festival</span>
                    </div>
                </header>

                <div className="gp-image-container" style={{ marginTop: '0', marginBottom: '3rem' }}>
                    <img src="/images/chhera-pahara/King_Prataparudra_sweeping_the_chariot_path_during_Chhera_Pahara.png" alt="King Prataparudra sprinkling sandalwood water before Lord Jagannath's chariot" className="gp-image" />
                    <span className="gp-image-caption">King Prataparudra sprinkling sandalwood water before Lord Jagannath&apos;s chariot.</span>
                </div>

                <QuickFacts facts={[
                    { label: "Pastime / Festival", value: "Chhera Pahara (also spelled Chhera Pahanra)" },
                    { label: "When Observed", value: "Twice during the festival — right after Pahandi, before the deities' outward journey to the Gundicha Temple, and again before the Bahuda Yatra return journey" },
                    { label: "Performed By / Central Figure", value: "The Gajapati King of Puri (currently Dibyasingha Deb); historically King Prataparudra, witnessed by Sri Chaitanya Mahaprabhu" },
                    { label: "Location", value: "Jagannath Temple, Puri — at the chariot platforms just outside the Lion's Gate" },
                    { label: "Primary Scriptural Source", value: "Sri Chaitanya-charitamrita, Madhya-lila, Chapter 13 (verses 15–18, 56, 60)" },
                    { label: "Core Teaching", value: "Seeing the King accept this menial service made Sri Chaitanya Mahaprabhu very happy, and the King received the Lord's mercy through this humility (CC Madhya 13.18, 13.60)" },
                    { label: "Connection to Ratha Yatra", value: "Chhera Pahara takes place immediately after Pahandi and just before the chariots are pulled — by long-standing tradition, the chariots do not move until it is completed" },
                ]} />

                <nav className="gp-toc" aria-label="Table of Contents">
                    <div className="gp-toc-inner">
                        <p className="gp-toc-title">Table of Contents</p>
                        <ol className="gp-toc-list">
                            <li><a href="#intro"><span className="gp-toc-num">01</span>Introduction</a></li>
                            <li><a href="#what-is-chhera-pahara"><span className="gp-toc-num">02</span>What Is Chhera Pahara?</a></li>
                            <li><a href="#scene-in-cc"><span className="gp-toc-num">03</span>The Scene in Chaitanya-charitamrita</a></li>
                            <li><a href="#why-king-performs-service"><span className="gp-toc-num">04</span>Why the King Performs This Service</a></li>
                            <li><a href="#legend-of-king"><span className="gp-toc-num">05</span>The Legend of King Purushottama and Padmavati</a></li>
                            <li><a href="#why-this-matters"><span className="gp-toc-num">06</span>Why This Matters for Gaudiya Vaishnavas</a></li>
                            <li><a href="#living-tradition"><span className="gp-toc-num">07</span>Living Tradition Today</a></li>
                            <li><a href="#conclusion"><span className="gp-toc-num">08</span>Conclusion</a></li>
                            <li><a href="#faq"><span className="gp-toc-num">09</span>Frequently Asked Questions</a></li>
                            <li><a href="#references"><span className="gp-toc-num">10</span>References</a></li>
                            <li><a href="#connect"><span className="gp-toc-num">11</span>Connect With Us</a></li>
                        </ol>
                    </div>
                </nav>

                <div className="gp-content">

                    <section id="intro">
                        <SectionHead num="01" title="Introduction" />
                        <p>
                            Right after the deities are carried to Their chariots in Pahandi, and just before the ropes are pulled, one more ritual happens first: the King of Puri sweeps the chariot platforms with his own hands. This is Chhera Pahara, and Chaitanya-charitamrita records that Sri Chaitanya Mahaprabhu watched it happen and was very pleased by what He saw.
                        </p>
                        <p>
                            Without Chhera Pahara, the chariots do not move. It is a short ritual, but it sits at the exact hinge point between the deities being placed on Their chariots and the festival&apos;s main procession beginning.
                        </p>
                    </section>

                    <div className="gp-divider">✦</div>

                    <section id="what-is-chhera-pahara">
                        <SectionHead num="02" title="What Is Chhera Pahara?" />
                        <p>
                            Chhera Pahara (also spelled Chhera Pahanra) is an Odia term referring to the sweeping and sprinkling of the road or chariot platform. In this ritual, the Gajapati King of Puri sweeps the platforms of all three chariots with a broom that has a golden handle, and then sprinkles the swept area with water scented with sandalwood.
                        </p>
                        <p>
                            The ritual is performed twice during the festival: once after Pahandi, before the chariots set out for the Gundicha Temple, and again during Bahuda Yatra, before the chariots return to the main temple. In both cases, it takes place immediately before the chariots are due to move.
                        </p>
                    </section>

                    <div className="gp-divider">✦</div>

                    <section id="scene-in-cc">
                        <SectionHead num="03" title="The Scene in Chaitanya-charitamrita" />
                        <p>
                            Krishnadasa Kaviraja Gosvami describes this ritual directly in the same chapter of Chaitanya-charitamrita that records Pahandi, naming the king who performed it: Maharaja Prataparudra, the Gajapati of Puri during Sri Chaitanya Mahaprabhu&apos;s years there.
                        </p>
                        <p>
                            The text states that while the deities were being carried to Their chariots, the King personally cleansed the road with a golden-handled broom and sprinkled it with sandalwood-scented water. Krishnadasa Kaviraja Gosvami then makes the point directly: though the King was the owner of the royal throne, he had taken up menial service for the Lord&apos;s sake, and it was this act, not his rank, that made him &ldquo;a suitable candidate for receiving the Lord&apos;s mercy&rdquo; (CC Madhya 13.17).
                        </p>
                        <p>
                            Seeing the King engaged in this way is recorded as having made Sri Chaitanya Mahaprabhu &ldquo;very happy&rdquo; (CC Madhya 13.18). Later in the same chapter, watching the sankirtana that followed the sweeping, the King himself became so absorbed that Krishnadasa Kaviraja Gosvami describes him as being converted to ecstatic love of Krishna (CC Madhya 13.56), and states again that it was specifically his willingness to accept &ldquo;the menial task of sweeping the street&rdquo; that earned him the Lord&apos;s mercy (CC Madhya 13.60).
                        </p>
                    </section>

                    <div className="gp-divider">✦</div>

                    <section id="why-king-performs-service">
                        <SectionHead num="04" title="Why the King Performs This Service" />
                        <p>
                            The Gajapati kings of Puri have long held titles such as Rauta and Routaraya, meaning servant, or servant-king, of Lord Jagannath. This tradition is traced to Anangabhima III, a 13th-century successor of the temple&apos;s original 12th-century builder, Anantavarman Chodaganga Deva, who formally dedicated the kingdom of Odisha to Lord Jagannath and adopted the title Rauta in his own inscriptions, ruling thereafter as the Lord&apos;s deputy rather than as a sovereign in his own right.
                        </p>
                        <p>
                            Chhera Pahara is the clearest yearly public expression of that title: whatever his rank on any other day of the year, on this occasion the king performs the same task a temple sweeper would perform, in full view of the assembled crowd. Historians are not fully agreed on when the specific practice of sweeping the chariots began; some trace it to the reign of Kapilendra Deva or his son Purushottama Deva, both of whom ruled Puri before Prataparudra Deva&apos;s time, decades before Sri Chaitanya Mahaprabhu witnessed it Himself.
                        </p>
                    </section>

                    <div className="gp-divider">✦</div>

                    <section id="legend-of-king">
                        <SectionHead num="05" title="The Legend of King Purushottama and Padmavati" />
                        <p>
                            Odia tradition preserves an older, separate story about Chhera Pahara, centered on Purushottama Deva, Prataparudra&apos;s father, who ruled Puri from 1467 to 1497. This account, known as the Kanchi-Kaveri Upakhyana, is a popular legend rather than a scriptural account, and its exact historical details are debated among historians, but its outline is told consistently across Odia literature, art, and oral tradition.
                        </p>
                        <p>
                            According to the legend, Purushottama Deva sought to marry Padmavati, daughter of a southern king named Saluva Narasimha, ruler of a kingdom remembered in the story as Kanchi. When Saluva Narasimha&apos;s envoys visited Puri during Ratha Yatra to assess the proposal, they were startled to see the powerful Gajapati himself sweeping the chariot platforms during Chhera Pahara. Considering this beneath royal dignity, Saluva Narasimha refused the marriage, sending word that his daughter would not be given to a mere sweeper.
                        </p>
                        <p>
                            Purushottama Deva took this as an insult not only to himself but to the Jagannath tradition his family upheld, and marched south to war. He was defeated in his first attempt and returned to Puri humbled, where he prayed before Lord Jagannath. The legend holds that the Lord assured him in a dream that He and Lord Balabhadra would personally accompany his army, disguised as soldiers, for a second campaign.
                        </p>
                        <p>
                            On the march south, the two Lords are said to have ridden ahead of the army as two young soldiers, one dark-complexioned and one fair, and to have stopped at a milkmaid named Manika&apos;s stall to drink curd, paying her with a ring and telling her that the King following behind would settle the debt. When Purushottama Deva reached her and recognized the ring as Lord Jagannath&apos;s own, he realized the Lords had already gone ahead to secure his victory, and later founded the village of Manikapatana in her honor.
                        </p>
                        <p>
                            Purushottama Deva went on to defeat Saluva Narasimha and brought Padmavati back to Odisha, along with two deities taken from Kanchi as symbols of victory: a form of Lord Ganesha known as Uchchhishta Ganapati, also called Kanchi Ganesha, still housed within the Jagannath Temple complex in Puri, and a form of Lord Krishna known as Sakshi Gopal, originally installed at Puri and later moved to Satyabadi, where the Sakshi Gopal Temple stands today. Still smarting from the earlier insult, he ordered his minister to marry Padmavati to whoever was performing a sweeper&apos;s work, so as to keep his earlier vow to the letter. Rather than carry this out literally, the minister is said to have kept her in his own household and waited.
                        </p>
                        <p>
                            At the following year&apos;s Ratha Yatra, while Purushottama Deva was himself sweeping the chariots during Chhera Pahara, the minister brought Padmavati forward and had her place a wedding garland around the king&apos;s neck. When the king demanded an explanation, the minister is said to have replied that he had simply obeyed the royal order, since no one better fit the description of a sweeper at that moment than the king himself. Purushottama Deva accepted Padmavati as his queen.
                        </p>
                        <p>
                            Historians treat the story with caution. Purushottama Deva and Saluva Narasimha were real historical rulers, but several details are disputed: some historical texts name the queen Rupamvika or Ratnambika rather than Padmavati, possibly reflecting the Odia custom of a bride taking a new name after marriage, and the historian K. C. Panigrahi argued that the &ldquo;Kanchi&rdquo; of the legend may refer to Chandragiri rather than the city of that name associated with the Pallava dynasty. Whatever its historical core, the story remains widely told in Odisha, preserved in the poem Kanchi-Kaveri Upakhyana and depicted in Pattachitra paintings, plays, and songs, and it reinforces the same point found in Chaitanya-charitamrita: this ritual measures a king by his willingness to serve, not by his throne.
                        </p>
                    </section>

                    <div className="gp-divider">✦</div>

                    <section id="why-this-matters">
                        <SectionHead num="06" title="Why This Matters for Gaudiya Vaishnavas" />
                        <ul className="gp-teachings-list">
                            <li>Chaitanya-charitamrita states directly, not as later commentary, that the King&apos;s willingness to do this menial task is what made him a suitable candidate for the Lord&apos;s mercy (CC Madhya 13.17).</li>
                            <li>Sri Chaitanya Mahaprabhu&apos;s happiness at seeing this service is recorded in the text itself (CC Madhya 13.18), placing royal humility on the same page as the grand spectacle of the chariots and the dancing that follows.</li>
                            <li>The ritual repeats every year, and twice within the same festival, keeping this specific act of service a fixed part of Ratha Yatra rather than a one-time historical event.</li>
                        </ul>
                    </section>

                    <div className="gp-divider">✦</div>

                    <section id="living-tradition">
                        <SectionHead num="07" title="Living Tradition Today" />
                        <p>
                            Chhera Pahara continues to be performed every year in Puri by the current Gajapati Maharaja, Dibyasingha Deb (Divyasingha Deva IV), the titular king and hereditary head of the Bhoi dynasty. Once temple officials send word through a specially deputed messenger that the deities have taken Their places on the chariots, the King, dressed in spotless white, leaves his palace in a silver-plated palanquin and proceeds along the Grand Avenue in a small procession led by a caparisoned elephant.
                        </p>
                        <SectionImage
                            src="/images/chhera-pahara/Gajapati_Maharaja_sweeping.jpeg"
                            alt="Gajapati King of Puri sweeping the chariot platform during Chhera Pahara"
                            caption="Gajapati King of Puri sweeping the chariot platform during Chhera Pahara."
                        />
                        <p>
                            At the chariots, he climbs each one in turn, first offering his prayers to the deity seated there, and only then cleaning the platform with a golden broom and sprinkling it with flowers and sandalwood-scented water. By long-standing custom, the chariots are not pulled until he has completed this act on all three.
                        </p>
                    </section>

                    <div className="gp-divider">✦</div>

                    <section id="conclusion">
                        <SectionHead num="08" title="Conclusion" />
                        <p>
                            Chhera Pahara is a short ritual sandwiched between two much larger events — Pahandi before it, and the chariots being pulled after it. But Krishnadasa Kaviraja Gosvami chose to record it in detail, naming the king by name and stating clearly why his action mattered: not because he was a king, but because he set aside his rank to sweep a road.
                        </p>
                        <p>
                            The text makes this point in its own words, in the same chapter where it describes Sri Chaitanya Mahaprabhu&apos;s happiness at seeing it happen. That is what the scripture says about this pastime.
                        </p>
                        <p>
                            Hare Krishna. This concludes the Pahandi and Chhera Pahara pair of posts. Continue following the Ratha Yatra series with our companion article on the Main Ratha Yatra Procession, the next event in the sequence.
                        </p>
                    </section>

                    <div className="gp-divider">✦</div>

                    <section id="faq">
                        <SectionHead num="09" title="Frequently Asked Questions" />
                        <div className="gp-faq-grid">
                            <div className="gp-faq-item">
                                <p className="gp-faq-q">What does Chhera Pahara mean?</p>
                                <p className="gp-faq-a">Chhera Pahara (also spelled Chhera Pahanra) is an Odia term for the sweeping and sprinkling of the chariot platforms, performed by the King of Puri before the chariots move.</p>
                            </div>
                            <div className="gp-faq-item">
                                <p className="gp-faq-q">Who performs Chhera Pahara?</p>
                                <p className="gp-faq-a">The Gajapati King of Puri performs it. Chaitanya-charitamrita records King Prataparudra performing it during Sri Chaitanya Mahaprabhu&apos;s time; today it is performed by the current Gajapati Maharaja, Dibyasingha Deb.</p>
                            </div>
                            <div className="gp-faq-item">
                                <p className="gp-faq-q">How many times is Chhera Pahara performed during Ratha Yatra?</p>
                                <p className="gp-faq-a">Twice: once after Pahandi, before the chariots depart for the Gundicha Temple, and again before the Bahuda Yatra return journey.</p>
                            </div>
                            <div className="gp-faq-item">
                                <p className="gp-faq-q">Why did Sri Chaitanya Mahaprabhu react to this ritual?</p>
                                <p className="gp-faq-a">Chaitanya-charitamrita, Madhya-lila 13.18, states that Sri Chaitanya Mahaprabhu became very happy upon seeing King Prataparudra accept this menial service, since his willingness to do so, despite his rank, made him a suitable candidate for the Lord&apos;s mercy.</p>
                            </div>
                            <div className="gp-faq-item">
                                <p className="gp-faq-q">Is Chhera Pahara connected to Pahandi?</p>
                                <p className="gp-faq-a">Yes. Both are described in the same chapter of Chaitanya-charitamrita, Madhya-lila 13, and Chhera Pahara takes place immediately after Pahandi, while the deities are being placed on Their chariots, and before the chariots are pulled.</p>
                            </div>
                            <div className="gp-faq-item">
                                <p className="gp-faq-q">Is there a legend about Chhera Pahara besides the Chaitanya-charitamrita account?</p>
                                <p className="gp-faq-a">Yes. Odia tradition tells of an earlier king, Purushottama Deva (Prataparudra&apos;s father), whose performance of Chhera Pahara caused a southern king to refuse him marriage to his daughter Padmavati, calling him a mere sweeper. Purushottama Deva later won her hand after defeating that king in battle, in a story known as the Kanchi-Kaveri Upakhyana. This is a popular legend, not a scriptural account, and historians differ on how much of it is historical.</p>
                            </div>
                        </div>
                    </section>

                    <div className="gp-divider">✦</div>

                    <section id="references">
                        <SectionHead num="10" title="References" />
                        <ul className="gp-teachings-list">
                            <li>Sri Chaitanya-charitamrita, Madhya-lila, Chapter 13, &ldquo;The Ecstatic Dancing of the Lord at Ratha-yatra&rdquo; (verses 15–18, 56, 60) — Srila Krishnadasa Kaviraja Gosvami, with purports by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada.</li>
                            <li>Official Shree Jagannath Temple ritual documentation and Gajapati Maharaja biographical sources — on the current performance of Chhera Pahara, the reigning Gajapati Maharaja, and the historical Rauta title dating to Anangabhima III.</li>
                            <li>Kanchi-Kaveri Upakhyana (traditional Odia legend, also recorded in Purushottama Deva&apos;s historical accounts) — on the folk tradition connecting Chhera Pahara to King Purushottama Deva; historicity debated among historians.</li>
                        </ul>
                    </section>

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
                            <span className="gp-s-icon">📲</span>
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
