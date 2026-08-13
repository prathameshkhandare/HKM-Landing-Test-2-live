'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/FooterSection';
import '../shared-blog-styles.css';

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

export default function BlogClient() {
    return (
        <div className="min-h-screen bg-[#FFF9F0] selection:bg-[#c9973a] selection:text-white">
            <Navbar />

            <article className="gp-blog-wrap">
                <header className="gp-blog-header">
                    <p className="gp-hero-label">Ratha Yatra Series</p>
                    <h1 className="gp-blog-title">Hera Panchami</h1>
                    <div className="gp-hero-line" />
                    <p className="gp-blog-subtitle">When Goddess Lakshmi Comes Looking for Lord Jagannath</p>
                    <p className="gp-blog-byline">By <strong>HKM Chennai</strong> — Dakshina Dwaraka Dham, Thiruvanmiyur</p>
                </header>

                <div className="gp-content">
                    <QuickFacts facts={[
                        { label: 'Festival', value: 'Hera Panchami, also called Lakshmi Vijaya' },
                        { label: 'When Celebrated', value: 'The fifth day after Ratha Yatra begins, in the evening, while Lord Jagannath is still staying at the Gundicha Temple' },
                        { label: 'Meaning of the Name', value: '"Hera" means to see or to search for; "Panchami" means the fifth day' },
                        { label: 'Central Figures', value: "Goddess Mahalakshmi, Lord Jagannath, the Pati Mahapatra (Jagannath's representative), Goddess Bimala, and King Prataparudra" },
                        { label: 'Where It Happens', value: 'Between the Srimandir (the main Jagannath Temple) and the Gundicha Temple, along the Grand Road (Bada Danda) in Puri' },
                        { label: 'Old Sources', value: "Sri Chaitanya Mahaprabhu personally witnessing this festival is reliably recorded in Sri Chaitanya-charitamrita, Madhya-lila, Chapter 14. The ritual's history is also described in temple chronicles such as the Madala Panji and the Ratha Chakada" },
                        { label: 'Connection to Ratha Yatra', value: 'Explains why Goddess Lakshmi does not travel on the chariots with Jagannath, Balabhadra, and Subhadra, and marks the emotional turning point of the nine-day festival' }
                    ]} />

                    <nav className="gp-toc" aria-label="Table of Contents">
                        <div className="gp-toc-inner">
                            <p className="gp-toc-title">Table of Contents</p>
                            <ol className="gp-toc-list">
                                <li><a href="#what-is-hera-panchami"><span className="gp-toc-num">01</span>What Is Hera Panchami?</a></li>
                                <li><a href="#why-celebrated"><span className="gp-toc-num">02</span>Why Is It Celebrated? The Story Behind the Day</a></li>
                                <li><a href="#how-observed"><span className="gp-toc-num">03</span>How Hera Panchami Is Observed Today</a></li>
                                <li><a href="#mahaprabhus-lila"><span className="gp-toc-num">04</span>Hera Panchami and Sri Chaitanya Mahaprabhu&apos;s Own Lila</a></li>
                                <li><a href="#prabhupadas-teaching"><span className="gp-toc-num">05</span>Srila Prabhupada&apos;s Teaching</a></li>
                                <li><a href="#living-tradition"><span className="gp-toc-num">06</span>Living Tradition Today</a></li>
                                <li><a href="#conclusion"><span className="gp-toc-num">07</span>Conclusion</a></li>
                                <li><a href="#faq"><span className="gp-toc-num">08</span>Frequently Asked Questions</a></li>
                                <li><a href="#references"><span className="gp-toc-num">09</span>References</a></li>
                            </ol>
                        </div>
                    </nav>

                    <h2 id="what-is-hera-panchami" className="gp-sh">What Is Hera Panchami?</h2>
                    <p>Every year, five days into the Ratha Yatra festival, while Lord Jagannath, Balabhadra, and Subhadra are still staying at the Gundicha Temple, something unusual happens back at the main temple in Puri. Goddess Mahalakshmi, Lord Jagannath&apos;s own consort, decides she has waited long enough. She sets out to go and see Him for herself.</p>
                    <p>That is really all the name means. &ldquo;Hera&rdquo; means to see, or to search for. &ldquo;Panchami&rdquo; simply means the fifth day. Put together, Hera Panchami is the day the Goddess goes looking for her Lord — and it&apos;s also known as Lakshmi Vijaya, the victorious outing of Lakshmi.</p>
                    <p>It&apos;s worth noticing something here: the main temple in Puri is itself called Srimandir. &ldquo;Sri&rdquo; is another name for Lakshmi, so the temple&apos;s own name quietly reminds everyone that the Goddess of Fortune is not a side character in this story. She belongs there just as much as Jagannath does.</p>

                    <div className="gp-divider">✦</div>

                    <h2 id="why-celebrated" className="gp-sh">Why Is It Celebrated? The Story Behind the Day</h2>
                    <p>When Ratha Yatra begins, Lord Jagannath leaves the main temple with only Balabhadra and Subhadra, travelling to the Gundicha Temple — a place devotees think of as standing in for Vrindavana, the home Krishna loved before He ever became a king. Lakshmi is left behind.</p>
                    <p>Sri Chaitanya-charitamrita itself explains why this journey matters so much to Him: although Lord Jagannath enjoys wonderful pastimes at Dvaraka and naturally shows great generosity there, once every year He becomes unlimitedly eager to see Vrindavana again. In fact, when Sri Chaitanya Mahaprabhu once pointed out the gardens near the Gundicha Temple to His devotees, He remarked that they look exactly like Vrindavana — which is precisely why Jagannath longs so much to visit them.</p>
                    <p>Before He left, Jagannath had promised Lakshmi He would be back the very next day. But the next day came and went, and He didn&apos;t return. Then another day passed, and another. By the fifth day, Lakshmi decided she wasn&apos;t going to simply wait anymore. If He wouldn&apos;t come back to her, she would go and find out why, herself.</p>
                    <p>So she sets out from Srimandir toward Gundicha, in a mood that is equal parts hurt, angry, and determined — not unlike anyone who has ever waited for someone they love to come home.</p>

                    <div className="gp-divider">✦</div>

                    <h2 id="how-observed" className="gp-sh">How Hera Panchami Is Observed Today</h2>
                    <p>In the evening of the fifth day, a golden deity form of Mahalakshmi, called Subarna Mahalakshmi, is carried out of Srimandir in a beautifully decorated palanquin. Temple servants called Bimanabadu sevakas carry her on their shoulders, and the whole procession moves down Bada Danda, the Grand Road of Puri, with music, priests, and much fanfare. Along the way, devotees sing what&apos;s simply called the Hera Panchami song — a song that openly voices the Goddess&apos;s anger at being left behind.</p>
                    <p>The procession halts near the Nandighosha, which is Jagannath&apos;s own chariot, still parked outside the Gundicha Temple. There, the Pati Mahapatra, a priest who represents Lord Jagannath, comes out to greet her with a formal welcome ceremony called Bandapana. She is then taken near a gateway called the Jaya Bijaya Dwara.</p>
                    <p>There, in a lovely small detail many devotees enjoy, she throws a powder called Mohana Churna at her husband — a powder said to have been given to her by another temple deity, Goddess Bimala, and meant to charm and draw Jagannath&apos;s attention back to her. Whatever its exact effect, it is this gesture that leads the Pati Mahapatra to step forward and offer her an Agyan Mala on Jagannath&apos;s behalf — a garland that carries His assurance that He will return to her within three days.</p>
                    <p>Even so, Lakshmi doesn&apos;t get the reunion she truly came for. Lord Jagannath is in the middle of the evening rituals inside the temple, and the door simply stays closed to her. Feeling neglected and unable to hold back her frustration any longer, she asks her own attendants to break off a small part of the Nandighosha chariot — a symbolic act, meant to teach her husband a lesson for leaving her behind.</p>
                    <p>What happens next is one of the most tender details of the whole festival. No sooner has the chariot been damaged than Lakshmi feels guilty about what she&apos;s done. Rather than returning the same grand way she came, she slips away quietly, without any procession or music, along a smaller lane known as Hera Gohiri Sahi — anger giving way, almost at once, to a very human kind of embarrassment.</p>
                    <p>According to temple chronicles such as the Madala Panji and the Ratha Chakada, this specific way of marking the day — with a gold deity, a full procession, and the breaking of the chariot — was established by King Kapilendra Deb. Before that, temple tradition holds that Hera Panchami was observed much more simply, through the recitation of Vedic mantras alone.</p>

                    <div className="gp-divider">✦</div>

                    <h2 id="mahaprabhus-lila" className="gp-sh">Hera Panchami and Sri Chaitanya Mahaprabhu&apos;s Own Lila</h2>
                    <p>This day isn&apos;t only an old ritual. It&apos;s recorded as something Sri Chaitanya Mahaprabhu Himself witnessed, in Sri Chaitanya-charitamrita, Madhya-lila, Chapter 14 — a chapter which describes both the Vrindavana pastimes at Gundicha and the Hera Panchami festival itself.</p>
                    <p>As the festival approached, King Prataparudra spoke carefully with his priest, Kasi Misra, asking that the celebration be held &ldquo;in a way it has never been held before,&rdquo; gorgeous enough that Sri Chaitanya Mahaprabhu Himself would be pleased and astonished. He gave wonderfully specific instructions: gather every printed cloth, bell, umbrella, and fan in his own storehouse and the Deity&apos;s storehouse; collect flags of every size; bring musical and dancing troupes to accompany the procession; and prepare so much prasadam that it would even surpass the offerings of Ratha Yatra itself.</p>

                    <blockquote className="gp-bq">
                        <p>Knowing that the Hera-pancami festival was drawing near, King Prataparudra attentively talked with Kasi Misra: &ldquo;Tomorrow will be the function of Hera-pancami or Lakshmi-vijaya. Hold this festival in a way that it has never been held before … Hold this festival in such a gorgeous way that upon seeing it, Caitanya Mahaprabhu will be completely pleased and astonished.&rdquo;</p>
                        <cite>— Madhya-lila 14.106–108</cite>
                    </blockquote>

                    <blockquote className="gp-bq">
                        <p>&ldquo;Take as many printed cloths, small bells, umbrellas and camaras as there are in my storehouse and in the Deity&apos;s storehouse. Collect all kinds of small and large flags and ringing bells … You should also double the quantity of prasada. Make so much that it will even surpass the Ratha-yatra festival. Arrange the festival in such a way that Sri Caitanya Mahaprabhu may freely go with His devotees to visit the Deity without difficulty.&rdquo;</p>
                        <cite>— Madhya-lila 14.109–112</cite>
                    </blockquote>

                    <p>The next morning, Sri Chaitanya Mahaprabhu took His personal associates to see Lord Jagannath at Sundarachala — another name for the Gundicha Temple, since the main temple at Puri is called Nilachala. When the day of the festival itself arrived, Kasi Misra received Mahaprabhu with great respect and seated Him and His devotees comfortably. Taking His seat, Mahaprabhu turned to His dear companion Svarupa Damodara Gosvami and, smiling gently, asked to hear about a particular mellow, or mood, of devotional service.</p>
                    <p>And then, in the text&apos;s own vivid words, the Goddess of Fortune&apos;s outing is described plainly: she manifests her own opulence and even goes with her soldiers to attack her husband. Svarupa Damodara Gosvami, watching this unfold, turned the moment into a teaching for Mahaprabhu:</p>

                    <blockquote className="gp-bq">
                        <p>&ldquo;My Lord, I never experienced anything like the behavior of the goddess of fortune. We sometimes see a beloved wife becoming proud of her position and then frustrated due to some neglect. She then gives up caring for her appearance, accepts dirty clothes and morosely sits on the floor and draws lines with her nails. We have heard of such egoistic pride in Satyabhama and the gopis of Vrindavana, but what we see in the goddess of fortune here at Jagannatha Puri is completely different. She becomes very angry with her husband, and attacks Him with her great opulence.&rdquo;</p>
                        <cite>— Svarupa Damodara Gosvami, as recorded in Sri Chaitanya-charitamrita, Madhya-lila, Chapter 14</cite>
                    </blockquote>

                    <p>The point being made is a gentle but important one. Lakshmi&apos;s anger, however grand the display, still comes from a place of position and opulence — she is, after all, the Goddess of Fortune, and her protest naturally takes the form of soldiers and great opulence, not quiet longing. The gopis of Vrindavana, by contrast, love Krishna with no thought at all for their own status or dignity. Their jealousy, when it appears, comes purely from love itself, without a trace of pride. This is why Gaudiya Vaishnavas consider the gopis&apos; love to be the highest and purest expression of devotion — not because Lakshmi&apos;s love isn&apos;t real, but because theirs holds back nothing at all, not even their own reputation.</p>

                    <div className="gp-divider">✦</div>

                    <h2 id="prabhupadas-teaching" className="gp-sh">Srila Prabhupada&apos;s Teaching</h2>
                    <p>Srila Prabhupada preserved this entire scene for devotees today in his own purport to Chaitanya-charitamrita, Madhya-lila 14.107. He explained plainly what the festival means:</p>

                    <blockquote className="gp-bq">
                        <p>&ldquo;Lord Jagannatha has left His wife, the goddess of fortune, and gone to Vrindavana, which is the Gundica temple. Due to separation from the Lord, the goddess of fortune decides to come to see the Lord at Gundica.&rdquo;</p>
                        <cite>— Srila Prabhupada, Bhaktivedanta Purport to Sri Chaitanya-charitamrita, Madhya-lila 14.107</cite>
                    </blockquote>

                    <p>In just a few words, Srila Prabhupada draws the whole symbolic map of the festival: Puri stands in for Dvaraka, where Krishna lived as a king with Lakshmi at His side; Gundicha stands in for Vrindavana, where His heart truly belongs. Hera Panchami, in this light, isn&apos;t only about a Goddess&apos;s hurt feelings. It&apos;s a yearly reminder of the same truth Krishna&apos;s own queens in Dvaraka had to learn: however much opulence and position one has, it cannot substitute for the simple, complete love of Vrindavana.</p>
                    <p>In the very same purport, Srila Prabhupada also took care to correct a small but real error he&apos;d noticed among some devotees, noting that the festival&apos;s name is sometimes mispronounced as &ldquo;Hara-panchami.&rdquo; He preserved the exact meaning of the word hera — to see — so that the true sense of the festival wouldn&apos;t be lost over time.</p>

                    <div className="gp-divider">✦</div>

                    <h2 id="living-tradition" className="gp-sh">Living Tradition Today</h2>
                    <p>Hera Panchami is still celebrated with great festivity every single year at the original Jagannath Temple in Puri. The procession, the song, the Agyan Mala, and the small breaking of the chariot are all still performed today, exactly as they have been for generations — a living reminder that even in the middle of a nine-day festival full of chariots and crowds, this tradition still makes space for one Goddess&apos;s very personal, very human moment of missing someone she loves.</p>

                    <div className="gp-divider">✦</div>

                    <h2 id="conclusion" className="gp-sh">Conclusion</h2>
                    <p>Hera Panchami is, at its heart, a very relatable story wearing very grand clothes: someone who loves you didn&apos;t come home when they said they would, so you go and find them yourself — and even feel a little foolish about it afterward. That it happens to be the Goddess of Fortune confronting the Lord of the Universe only makes the lesson land more gently — if even she has to learn that love matters more than opulence, so might we all.</p>
                    <p style={{ fontStyle: 'italic', opacity: 0.8 }}>Hare Krishna. If you enjoyed this story, look out for our other articles on Ratha Yatra and the appearance of Lord Jagannath, where many of these same characters and places appear again.</p>

                    <div className="gp-divider">✦</div>

                    <h2 id="faq" className="gp-sh">Frequently Asked Questions</h2>
                    <div className="gp-faq-grid">
                        <div className="gp-faq-item">
                            <p className="gp-faq-q">What does Hera Panchami mean?</p>
                            <p className="gp-faq-a">&ldquo;Hera&rdquo; means to see or to search for, and &ldquo;Panchami&rdquo; means the fifth day. Together, the name describes Goddess Lakshmi going to see, or search for, Lord Jagannath on the fifth day of Ratha Yatra.</p>
                        </div>
                        <div className="gp-faq-item">
                            <p className="gp-faq-q">Why does Goddess Lakshmi go to the Gundicha Temple?</p>
                            <p className="gp-faq-a">Lord Jagannath had promised to return to her the day after Ratha Yatra began, but five days pass with no sign of Him. Rather than wait any longer, Lakshmi sets out herself to find out why.</p>
                        </div>
                        <div className="gp-faq-item">
                            <p className="gp-faq-q">Why is a part of the Nandighosha chariot broken during Hera Panchami?</p>
                            <p className="gp-faq-a">Before returning to the main temple, Lakshmi&apos;s attendants break off a small part of Jagannath&apos;s chariot as a final gesture of her displeasure at being kept away. This custom comes from temple ritual tradition rather than from Chaitanya-charitamrita itself, and the piece is quietly repaired afterward.</p>
                        </div>
                        <div className="gp-faq-item">
                            <p className="gp-faq-q">Is Hera Panchami connected to Sri Chaitanya Mahaprabhu?</p>
                            <p className="gp-faq-a">Yes. It is recorded in Sri Chaitanya-charitamrita, Madhya-lila, Chapter 14, that Sri Chaitanya Mahaprabhu personally witnessed this festival, and that His companion Svarupa Damodara Gosvami used the occasion to teach Him about the different kinds of jealous love found in devotion.</p>
                        </div>
                        <div className="gp-faq-item">
                            <p className="gp-faq-q">Why doesn&apos;t Goddess Lakshmi travel on the Ratha Yatra chariots?</p>
                            <p className="gp-faq-a">Jagannath&apos;s journey to Gundicha represents Krishna&apos;s own heart belonging to Vrindavana, a place of pure, simple love rather than royal opulence. Lakshmi staying behind, and then going to find Him herself on Hera Panchami, is how this symbolism is preserved every year.</p>
                        </div>
                    </div>

                    <div className="gp-divider">✦</div>

                    <h2 id="references" className="gp-sh">References</h2>
                    <ul className="gp-teachings-list">
                        <li>Sri Chaitanya-charitamrita, Madhya-lila, Chapter 14 (&ldquo;Performance of the Vrindavana Pastimes and the Hera-pancami-yatra,&rdquo; verses 106–139) — Srila Krishnadasa Kaviraja Gosvami&apos;s account of King Prataparudra&apos;s instructions, Sri Chaitanya Mahaprabhu witnessing Hera Panchami, and Svarupa Damodara Gosvami&apos;s teaching on jealous love. Verified directly against the text on vedabase.io, including verses 106–119 and the passage describing the goddess of fortune attacking with her opulence.</li>
                        <li>Bhaktivedanta Purport to Sri Chaitanya-charitamrita, Madhya-lila 14.107 — His Divine Grace A.C. Bhaktivedanta Swami Prabhupada&apos;s explanation of the festival&apos;s name and meaning, including his note on the common &ldquo;Hara-panchami&rdquo; mispronunciation. Verified directly against the text on vedabase.io.</li>
                        <li>Temple tradition regarding King Kapilendra Deb&apos;s role in introducing the gold Mahalakshmi deity and the chariot-breaking custom is recorded in temple chronicles referred to as the Madala Panji and the Ratha Chakada, and is repeated across multiple temple sources, but could not be independently checked here against those chronicles directly, so it is presented as temple tradition rather than an independently verified primary citation.</li>
                        <li>Ritual details such as the Bandapana welcome, the Jaya Bijaya Dwara, Goddess Bimala&apos;s role in providing the Mohana Churna, and the Hera Gohiri Sahi return route reflect current temple ritual practice as reported by multiple independent Odisha news and temple sources.</li>
                    </ul>

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
                        <p>Prepared by Srila Prabhupada&apos;s ISKCON Thiruvanmiyur | Dakshina Dwaraka Dham, Chennai, for the Ratha Yatra content series.</p>
                    </footer>
                </div>
            </article>
            <Footer />
        </div>
    );
}
