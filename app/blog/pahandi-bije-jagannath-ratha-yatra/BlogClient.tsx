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
                        Pahandi Bije:<br />
                        The Sacred Procession That Carries Lord Jagannath to His Chariot
                    </h1>
                    <div className="gp-hero-line" />
                    <p className="gp-blog-subtitle">
                        Even the Lord who moves the universe chooses, for a few sacred moments, to be carried by the hands of His own devotees.
                    </p>
                    <p className="gp-blog-byline">
                        By <strong>HKM Chennai</strong>
                        {" "}— Dakshina Dwaraka Dham, Thiruvanmiyur
                    </p>
                    <div className="gp-meta-row">
                        <span>📅 July 07, 2026</span>
                        <span>⏱ 7 min read</span>
                        <span>🏷 Festival</span>
                    </div>
                </header>

                <div className="gp-image-container" style={{ marginTop: '0', marginBottom: '3rem' }}>
                    <img src="/images/pahandi-bije/Temple_servitors_carrying_Lord_Jagannath_in_the_Pahandi_procession_at_Puri.jfif" alt="Temple servitors carrying Lord Jagannath in the Pahandi procession at Puri" className="gp-image" />
                    <span className="gp-image-caption">Temple servitors carrying Lord Jagannath in the Pahandi procession at Puri.</span>
                </div>

                <QuickFacts facts={[
                    { label: "Pastime / Festival", value: "Pahandi (Pahandi Bije), known in Chaitanya-charitamrita as Pāṇḍu-vijaya" },
                    { label: "When Observed", value: "On the morning of Ratha Yatra itself, immediately after Netrotsava and just before the chariots begin to move" },
                    { label: "Performed By / Central Figure", value: "The dayitapatis (hereditary temple servitors); witnessed in ecstasy by Sri Chaitanya Mahaprabhu (500 years ago)" },
                    { label: "Location", value: "Jagannath Temple, Puri — from the Ratna Simhasana (jewelled throne) to the three chariots waiting outside the Lion's Gate" },
                    { label: "Primary Scriptural Source", value: "Sri Chaitanya-charitamrita, Madhya-lila, Chapter 13 (verses 4–18)" },
                    { label: "Core Teaching", value: "The Lord who sustains the universe allows Himself to be carried by His own servants, moving only by His own will (CC Madhya 13.13)" },
                    { label: "Connection to Ratha Yatra", value: "Pahandi is the opening ritual act of Ratha Yatra — without the deities first being carried to Their chariots, the festival's procession cannot begin" },
                ]} />

                <nav className="gp-toc" aria-label="Table of Contents">
                    <div className="gp-toc-inner">
                        <p className="gp-toc-title">Table of Contents</p>
                        <ol className="gp-toc-list">
                            <li><a href="#intro"><span className="gp-toc-num">01</span>Introduction</a></li>
                            <li><a href="#what-is-pahandi"><span className="gp-toc-num">02</span>What Is Pahandi?</a></li>
                            <li><a href="#rigging-music"><span className="gp-toc-num">03</span>Rigging, Music, and Ornament</a></li>
                            <li><a href="#scene-krishnadasa"><span className="gp-toc-num">04</span>The Scene Krishnadasa Kaviraja Gosvami Describes</a></li>
                            <li><a href="#chhera-pahara"><span className="gp-toc-num">05</span>Chhera Pahara: The King&apos;s Service Alongside Pahandi</a></li>
                            <li><a href="#why-this-matters"><span className="gp-toc-num">06</span>Why This Matters for Gaudiya Vaishnavas</a></li>
                            <li><a href="#prabhupada-teaching"><span className="gp-toc-num">07</span>Srila Prabhupada&apos;s Teaching on This Pastime</a></li>
                            <li><a href="#living-tradition"><span className="gp-toc-num">08</span>Living Tradition Today</a></li>
                            <li><a href="#conclusion"><span className="gp-toc-num">09</span>Conclusion</a></li>
                            <li><a href="#faq"><span className="gp-toc-num">10</span>Frequently Asked Questions</a></li>
                            <li><a href="#references"><span className="gp-toc-num">11</span>References</a></li>
                            <li><a href="#connect"><span className="gp-toc-num">12</span>Connect With Us</a></li>
                        </ol>
                    </div>
                </nav>

                <div className="gp-content">

                    <section id="intro">
                        <SectionHead num="01" title="Introduction" />
                        <p>
                            Ratha Yatra does not begin with the chariots rolling down the Grand Road. It begins earlier, and more quietly, in the moment the deities leave the throne They have occupied all year and are carried, step by careful step, into the open air. This moment is called Pahandi, and every subsequent event of the festival — the King&apos;s sweeping of the chariot path, the pulling of the ropes, the journey to the Gundicha Temple — depends on it happening first.
                        </p>
                        <p>
                            For followers of Sri Chaitanya Mahaprabhu, Pahandi carries an added layer of meaning, because Krishnadasa Kaviraja Gosvami recorded, in unusual physical detail, exactly what Mahaprabhu witnessed on this morning: the strain of the servitors, the breaking of the carrying-pads beneath the Lord&apos;s weight, and His own soft cry that no one around Him could hear over the noise of the crowd.
                        </p>
                    </section>

                    <div className="gp-divider">✦</div>

                    <section id="what-is-pahandi">
                        <SectionHead num="02" title="What Is Pahandi?" />
                        <p>
                            Pahandi, popularly called Pahandi Bije in Puri today, is the ceremonial procession in which Lord Jagannath, Lord Balabhadra, and Devi Subhadra are carried from the Ratna Simhasana, Their jewelled throne inside the temple, to the three waiting chariots outside. In Sri Chaitanya-charitamrita, Krishnadasa Kaviraja Gosvami refers to this same ceremony by its formal name, Pandu-vijaya, describing how &ldquo;Lord Jagannatha leaves His throne and gets up onto the car.&rdquo;
                        </p>
                        <p>
                            The deities are not simply walked to the chariots. Each is bound at the waist with a thick silken rope, and teams of powerful hereditary servitors called dayitas — described in the Charitamrita as strong as intoxicated elephants — take hold of the rope and the Deity&apos;s form itself, some at the shoulders and some at the feet. Thick, pillow-like cotton pads called tulis are laid down in a path from the throne to the chariot, and the Deity is carried from one pad to the next in a slow, swaying rhythm.
                        </p>
                        <SectionImage
                            src="/images/pahandi-bije/Pahandi_Bije_of_Subhadra_Devi.jpg"
                            alt="Pahandi Bije of Subhadra Devi"
                            caption="Pahandi Bije of Subhadra Devi."
                        />
                        <p>
                            Traditional accounts describe a fixed order for this procession, known as Dhadi Pahandi: Sudarshana, the Lord&apos;s personal weapon in deity form, goes first and is placed on Subhadra&apos;s chariot, followed by Balabhadra, then Subhadra, and finally Lord Jagannath Himself. A second form, Goti Pahandi, in which each deity completes the journey before the next begins, is reserved for other occasions such as the return procession, Bahuda Yatra.
                        </p>
                        <p>
                            During the anasara fortnight, the deities are actually kept in the temple&apos;s audience hall, the Jagamohana, rather than the inner sanctum. From there, on the morning of the procession, They are first brought onto a flight of steps known as the sata pahacha, just outside the northern door of the natamandapa, the temple&apos;s dancing hall, before moving out toward the Lion&apos;s Gate.
                        </p>
                    </section>

                    <div className="gp-divider">✦</div>

                    <section id="rigging-music">
                        <SectionHead num="03" title="Rigging, Music, and Ornament: How the Procession Is Carried Out" />
                        <p>
                            Because Lord Jagannath and Lord Balabhadra are especially heavy, a wooden cross is fixed to Their backs and thick silken ropes are tied around Their heads and waists to secure Them for the journey — a specific rigging ritual known as Senapata lagi. Devi Subhadra, by contrast, is markedly lighter and is carried on the shoulders of the servitors in a reclining position, Her portion of the procession moving noticeably faster than Her brothers&apos;.
                        </p>
                        <SectionImage
                            src="/images/pahandi-bije/Pahandi_Bije_of_Lord_Balabhadra.jpg"
                            alt="Pahandi Bije of Lord Balabhadra"
                            caption="Pahandi Bije of Lord Balabhadra."
                        />
                        <p>
                            The procession moves to the sound of three traditional instruments: the ghanta, a hollow bell-metal gong struck with a cane baton; the kahali, a trumpet; and the telingi baja, a double-sided cane drum. Lord Balabhadra and Lord Jagannath are further adorned with tahia, tall crown-like floral headpieces made of flowers, leaves, and cork fixed to a bamboo frame, traditionally supplied for this ceremony by the Raghavadasa Matha, a monastery historically associated with the temple. As the deities near the Lion&apos;s Gate, Odissi dancers perform to the mardala and mridanga, and devotees break into sankirtana, chanting the Lord&apos;s names with rhythmic, jumping movements — a foretaste of the devotional anticipation that carries through the entire festival, later given voice by devotee-poets such as Salabega, whose verses capture the longing with which pilgrims wait each year to see the Lord seated on Nandighosha, His chariot.
                        </p>
                    </section>

                    <div className="gp-divider">✦</div>

                    <section id="scene-krishnadasa">
                        <SectionHead num="04" title="The Scene Krishnadasa Kaviraja Gosvami Describes" />
                        <p>
                            What makes the Chaitanya-charitamrita&apos;s account of Pahandi remarkable is its physical honesty. Rather than describing only the pageantry, Krishnadasa Kaviraja Gosvami records the sheer difficulty of the task: the cotton pads breaking under the Deity&apos;s weight with a heavy cracking sound, the cotton floating into the air, and the tumult of musical instruments all around.
                        </p>
                        <blockquote className="gp-bq">
                            <p>
                                viśvambhara jagannāthe ke cālāite pāre?<br />
                                āpana icchāya cale karite vihāre
                            </p>
                            <cite>Reflecting on the scene, the author affirms that Lord Jagannātha is the maintainer of the whole universe. Who can carry Him from one place to another? The Lord moves by His personal will just to perform His pastimes. — Sri Chaitanya-charitamrita, Madhya-lila 13.13</cite>
                        </blockquote>
                        <p>
                            In the very next verse, amid the noise of drums and conchs marking the Deity&apos;s transfer to the chariot, Sri Chaitanya Mahaprabhu is described crying out &ldquo;Manima! Manima!&rdquo; — a tender, affectionate address (maṇimā is used to address a respectable person in Orissa) — but His voice is lost entirely in the surrounding tumult. No one else even hears Him call.
                        </p>
                        <p>
                            This detail matters: the same Lord whose weight breaks reinforced cotton padding, whom hundreds of arms strain to carry, is simultaneously the object of the most intimate, almost inaudible personal address from His greatest devotee. Opulence and intimacy are shown occupying the very same instant.
                        </p>
                    </section>

                    <div className="gp-divider">✦</div>

                    <section id="chhera-pahara">
                        <SectionHead num="05" title="Chhera Pahara: The King's Service Alongside Pahandi" />
                        <p>
                            Pahandi does not happen in isolation. As the deities are being carried, Chaitanya-charitamrita records that King Prataparudra of Puri personally took up a broom with a golden handle and began sweeping the road before the Lord, then sprinkled it with sandalwood-scented water — despite being, in the text&apos;s own words, &ldquo;the owner of the royal throne.&rdquo; This royal sweeping ritual, today called Chhera Pahara, is covered in full in its own dedicated post in this series, but its timing alongside Pahandi is part of what gives the moment its force: sovereign and servant, king and temple worker, are shown performing menial service side by side for the same Lord.
                        </p>
                        <SectionImage
                            src="/images/pahandi-bije/King_Prataparudra_sweeping_the_chariot_path_during_Chhera_Pahara.png"
                            alt="King Prataparudra sweeping the chariot path during Chhera Pahara"
                            caption="King Prataparudra sweeping the chariot path during Chhera Pahara."
                        />
                        <p>
                            Today, this same service is performed each year by the current Gajapati Maharaja of Puri, Dibyasingha Deb (Divyasingha Deva IV), the titular king and hereditary head of the Bhoi dynasty, who as the temple&apos;s Adhyasevaka (chief servitor) sweeps the chariot platforms with a golden broom and sprinkles them with sandalwood water before the deities&apos; journey begins. The chariots traditionally do not move until he has completed this act — the same principle of royal humility that Maharaja Prataparudra first modeled before Sri Chaitanya Mahaprabhu.
                        </p>
                    </section>

                    <div className="gp-divider">✦</div>

                    <section id="why-this-matters">
                        <SectionHead num="06" title="Why This Matters for Gaudiya Vaishnavas" />
                        <ul className="gp-teachings-list">
                            <li>The Lord who is worshipped as the maintainer of the universe is shown, in this single ceremony, accepting the physical service of His devotees — a direct demonstration of manusa-lila, His human-like pastimes, rather than a display of unapproachable opulence alone.</li>
                            <li>Sri Chaitanya Mahaprabhu&apos;s inaudible cry of &ldquo;Manima! Manima!&rdquo; during Pahandi reflects the mood of a devotee whose intimate address to the Lord is never about being heard by the crowd, but about the private exchange of love itself.</li>
                            <li>The King&apos;s willingness to sweep the road during this same window, recorded a few verses later in the same chapter, reinforces that in the presence of Lord Jagannath, worldly rank offers no exemption from humble service — a theme foundational to Gaudiya Vaishnava practice.</li>
                            <li>Pahandi stands as the hinge between Netrotsava, when the Lord&apos;s freshly painted form is unveiled, and the beginning of the Ratha Yatra procession itself — without it, the festival&apos;s central journey cannot begin.</li>
                        </ul>
                    </section>

                    <div className="gp-divider">✦</div>

                    <section id="prabhupada-teaching">
                        <SectionHead num="07" title="Srila Prabhupada's Teaching on This Pastime" />
                        <p>
                            His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada consistently emphasized that pastimes such as this reveal the Lord&apos;s willingness to reciprocate with His devotees on their own terms, accepting apparent limitation out of love rather than necessity. The Chaitanya-charitamrita&apos;s own commentary on Pahandi makes this point directly: no ordinary strength could lift the maintainer of the universe, so the entire scene of servitors straining to carry Him is itself a display of the Lord&apos;s will, not a constraint upon it.
                        </p>
                    </section>

                    <div className="gp-divider">✦</div>

                    <section id="living-tradition">
                        <SectionHead num="08" title="Living Tradition Today" />
                        <p>
                            Pahandi Bije remains one of the most anticipated moments of Ratha Yatra in Puri each year. Devotees crowd the route between the temple&apos;s Lion&apos;s Gate and the chariots specifically to witness this procession, considering the sight of the deities being carried — swaying, rocking, accompanied by the chanting of the daitapatis — to be independently auspicious, distinct even from the darshan received once the deities are seated on the chariots themselves.
                        </p>
                    </section>

                    <div className="gp-divider">✦</div>

                    <section id="conclusion">
                        <SectionHead num="09" title="Conclusion" />
                        <p>
                            Pahandi is easy to skip over when retelling Ratha Yatra, since most attention goes to the chariots being pulled through the streets afterward. But Krishnadasa Kaviraja Gosvami gave this shorter procession its own detailed verses in Chaitanya-charitamrita, Madhya-lila 13 — describing the servitors straining to carry the deities, and Sri Chaitanya Mahaprabhu calling out to Lord Jagannath in a voice lost in the noise around Him.
                        </p>
                        <p>
                            As the text itself states, no ordinary strength could lift the maintainer of the universe — so the Lord moves only by His own will, using His servants as the visible means. That is the point the scripture makes about this pastime, in its own words, not a broader lesson added on top of it.
                        </p>
                        <p>
                            Hare Krishna. Continue following this pastime forward with our companion article on Chhera Pahara — the King&apos;s humble service alongside the chariots — the next event in the Ratha Yatra sequence.
                        </p>
                    </section>

                    <div className="gp-divider">✦</div>

                    <section id="faq">
                        <SectionHead num="10" title="Frequently Asked Questions" />
                        <div className="gp-faq-grid">
                            <div className="gp-faq-item">
                                <p className="gp-faq-q">What does the word Pahandi mean?</p>
                                <p className="gp-faq-a">Pahandi refers to the slow, step-by-step procession in which the deities of Lord Jagannath, Balabhadra, and Subhadra are carried from Their throne to Their chariots. Sri Chaitanya-charitamrita refers to the same ceremony by its formal name, Pandu-vijaya.</p>
                            </div>
                            <div className="gp-faq-item">
                                <p className="gp-faq-q">In what order are the deities carried during Pahandi?</p>
                                <p className="gp-faq-a">According to the Dhadi Pahandi tradition followed for the outward journey, Sudarshana is carried first, followed by Balabhadra, then Subhadra, and finally Lord Jagannath, each secured with silken rope and carried on padded cotton platforms called tulis.</p>
                            </div>
                            <div className="gp-faq-item">
                                <p className="gp-faq-q">What did Sri Chaitanya Mahaprabhu do during Pahandi?</p>
                                <p className="gp-faq-a">Sri Chaitanya Mahaprabhu watched the procession in ecstasy and called out &ldquo;Manima! Manima!&rdquo; as an affectionate address to the Lord, though the sound of musical instruments and the crowd meant no one else could hear Him, as recorded in Sri Chaitanya-charitamrita, Madhya-lila 13.14.</p>
                            </div>
                            <div className="gp-faq-item">
                                <p className="gp-faq-q">Is Pahandi connected to the King sweeping the chariot path?</p>
                                <p className="gp-faq-a">Yes. Chaitanya-charitamrita records that King Prataparudra swept the road with a golden-handled broom and sprinkled it with sandalwood water while the deities were being carried during Pahandi, a ritual now known as Chhera Pahara and covered in its own post in this series.</p>
                            </div>
                            <div className="gp-faq-item">
                                <p className="gp-faq-q">How does Pahandi fit into the overall Ratha Yatra sequence?</p>
                                <p className="gp-faq-a">Pahandi is the opening ritual act of Ratha Yatra day itself. It follows Netrotsava, the unveiling of the deities&apos; freshly painted forms, and must be completed before the chariots can begin their journey to the Gundicha Temple.</p>
                            </div>
                            <div className="gp-faq-item">
                                <p className="gp-faq-q">What instruments and ornaments accompany the Pahandi procession?</p>
                                <p className="gp-faq-a">The procession moves to the ghanta (a bell-metal gong), the kahali (trumpet), and the telingi baja (a cane drum). Lord Balabhadra and Lord Jagannath additionally wear tahia, tall floral crowns supplied by the Raghavadasa Matha, while Odissi dancers and sankirtana chanting accompany the deities toward the chariots.</p>
                            </div>
                        </div>
                    </section>

                    <div className="gp-divider">✦</div>

                    <section id="references">
                        <SectionHead num="11" title="References" />
                        <ul className="gp-teachings-list">
                            <li>Sri Chaitanya-charitamrita, Madhya-lila, Chapter 13, &ldquo;The Ecstatic Dancing of the Lord at Ratha-yatra&rdquo; (verses 4–18) — Srila Krishnadasa Kaviraja Gosvami, with purports by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada.</li>
                            <li>Sri Chaitanya-charitamrita, Madhya-lila 13.60–61 — on King Prataparudra&apos;s service during this same sequence.</li>
                            <li>Official Shree Jagannath Temple ritual documentation (jagannath.in / rathjatra.nic.in) — temple-tradition details on Senapata lagi, the Jagamohana–sata pahacha–natamandapa route, processional instruments, and tahia ornamentation.</li>
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
