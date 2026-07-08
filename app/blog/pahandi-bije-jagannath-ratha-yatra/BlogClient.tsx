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
                    <p className="at-hero-label">Festivals / Jagannath Ratha Yatra Series</p>
                    <h1 className="at-blog-title">
                        Pahandi Bije:<br />
                        The Sacred Procession That Carries Lord Jagannath to His Chariot
                    </h1>
                    <div className="at-hero-line" />
                    <p className="at-blog-subtitle">
                        Even the Lord who moves the universe chooses, for a few sacred moments, to be carried by the hands of His own devotees.
                    </p>
                    <p className="at-blog-byline">
                        By <strong>HKM Chennai</strong>
                        {" "}— Dakshina Dwaraka Dham, Thiruvanmiyur
                    </p>
                    <div className="at-meta-row">
                        <span>📅 July 07, 2026</span>
                        <span>⏱ 7 min read</span>
                        <span>🏷 Festival</span>
                    </div>
                </header>

                <div className="sp-sec-image-wrap" style={{ marginTop: '0', marginBottom: '3rem' }}>
                    <img src="/images/pahandi-bije/Temple_servitors_carrying_Lord_Jagannath_in_the_Pahandi_procession_at_Puri.jfif" alt="Temple servitors carrying Lord Jagannath in the Pahandi procession at Puri" />
                    <span className="sp-sec-caption">Temple servitors carrying Lord Jagannath in the Pahandi procession at Puri.</span>
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

                <nav className="sp-toc" aria-label="Table of Contents">
                    <h2 className="sp-toc-title">Table of Contents</h2>
                    <ol className="sp-toc-list">
                        <li><a href="#intro"><span className="sp-toc-num">01</span>Introduction</a></li>
                        <li><a href="#what-is-pahandi"><span className="sp-toc-num">02</span>What Is Pahandi?</a></li>
                        <li><a href="#rigging-music"><span className="sp-toc-num">03</span>Rigging, Music, and Ornament</a></li>
                        <li><a href="#scene-krishnadasa"><span className="sp-toc-num">04</span>The Scene Krishnadasa Kaviraja Gosvami Describes</a></li>
                        <li><a href="#chhera-pahara"><span className="sp-toc-num">05</span>Chhera Pahara: The King's Service Alongside Pahandi</a></li>
                        <li><a href="#why-this-matters"><span className="sp-toc-num">06</span>Why This Matters for Gaudiya Vaishnavas</a></li>
                        <li><a href="#prabhupada-teaching"><span className="sp-toc-num">07</span>Srila Prabhupada's Teaching on This Pastime</a></li>
                        <li><a href="#living-tradition"><span className="sp-toc-num">08</span>Living Tradition Today</a></li>
                        <li><a href="#conclusion"><span className="sp-toc-num">09</span>Conclusion</a></li>
                        <li><a href="#faq"><span className="sp-toc-num">10</span>Frequently Asked Questions</a></li>
                        <li><a href="#references"><span className="sp-toc-num">11</span>References</a></li>
                        <li><a href="#connect"><span className="sp-toc-num">12</span>Connect With Us</a></li>
                    </ol>
                </nav>

                <div className="sp-content-body">
                    {/* 01 Introduction */}
                    <div id="intro" className="sp-sec-block">
                        <SectionHead num="01" title="Introduction" />
                        <p>
                            Ratha Yatra does not begin with the chariots rolling down the Grand Road. It begins earlier, and more quietly, in the moment the deities leave the throne They have occupied all year and are carried, step by careful step, into the open air. This moment is called Pahandi, and every subsequent event of the festival — the King's sweeping of the chariot path, the pulling of the ropes, the journey to the Gundicha Temple — depends on it happening first.
                        </p>
                        <p>
                            For followers of Sri Chaitanya Mahaprabhu, Pahandi carries an added layer of meaning, because Krishnadasa Kaviraja Gosvami recorded, in unusual physical detail, exactly what Mahaprabhu witnessed on this morning: the strain of the servitors, the breaking of the carrying-pads beneath the Lord's weight, and His own soft cry that no one around Him could hear over the noise of the crowd.
                        </p>
                    </div>

                    <Divider />

                    {/* 02 What Is Pahandi */}
                    <div id="what-is-pahandi" className="sp-sec-block">
                        <SectionHead num="02" title="What Is Pahandi?" />
                        <p>
                            Pahandi, popularly called Pahandi Bije in Puri today, is the ceremonial procession in which Lord Jagannath, Lord Balabhadra, and Devi Subhadra are carried from the Ratna Simhasana, Their jewelled throne inside the temple, to the three waiting chariots outside. In Sri Chaitanya-charitamrita, Krishnadasa Kaviraja Gosvami refers to this same ceremony by its formal name, Pandu-vijaya, describing how "Lord Jagannatha leaves His throne and gets up onto the car."
                        </p>
                        <p>
                            The deities are not simply walked to the chariots. Each is bound at the waist with a thick silken rope, and teams of powerful hereditary servitors called dayitas — described in the Charitamrita as strong as intoxicated elephants — take hold of the rope and the Deity's form itself, some at the shoulders and some at the feet. Thick, pillow-like cotton pads called tulis are laid down in a path from the throne to the chariot, and the Deity is carried from one pad to the next in a slow, swaying rhythm.
                        </p>
                        <SectionImage 
                            src="/images/pahandi-bije/Pahandi_Bije_of_Subhadra_Devi.jpg" 
                            alt="Pahandi Bije of Subhadra Devi" 
                            caption="Pahandi Bije of Subhadra Devi." 
                        />
                        <p>
                            Traditional accounts describe a fixed order for this procession, known as Dhadi Pahandi: Sudarshana, the Lord's personal weapon in deity form, goes first and is placed on Subhadra's chariot, followed by Balabhadra, then Subhadra, and finally Lord Jagannath Himself. A second form, Goti Pahandi, in which each deity completes the journey before the next begins, is reserved for other occasions such as the return procession, Bahuda Yatra.
                        </p>
                        <p>
                            During the anasara fortnight, the deities are actually kept in the temple's audience hall, the Jagamohana, rather than the inner sanctum. From there, on the morning of the procession, They are first brought onto a flight of steps known as the sata pahacha, just outside the northern door of the natamandapa, the temple's dancing hall, before moving out toward the Lion's Gate.
                        </p>
                    </div>

                    <Divider />

                    {/* 03 Rigging, Music, and Ornament */}
                    <div id="rigging-music" className="sp-sec-block">
                        <SectionHead num="03" title="Rigging, Music, and Ornament: How the Procession Is Carried Out" />
                        <p>
                            Because Lord Jagannath and Lord Balabhadra are especially heavy, a wooden cross is fixed to Their backs and thick silken ropes are tied around Their heads and waists to secure Them for the journey — a specific rigging ritual known as Senapata lagi. Devi Subhadra, by contrast, is markedly lighter and is carried on the shoulders of the servitors in a reclining position, Her portion of the procession moving noticeably faster than Her brothers'.
                        </p>
                        <SectionImage 
                            src="/images/pahandi-bije/Pahandi_Bije_of_Lord_Balabhadra.jpg" 
                            alt="Pahandi Bije of Lord Balabhadra" 
                            caption="Pahandi Bije of Lord Balabhadra." 
                        />
                        <p>
                            The procession moves to the sound of three traditional instruments: the ghanta, a hollow bell-metal gong struck with a cane baton; the kahali, a trumpet; and the telingi baja, a double-sided cane drum. Lord Balabhadra and Lord Jagannath are further adorned with tahia, tall crown-like floral headpieces made of flowers, leaves, and cork fixed to a bamboo frame, traditionally supplied for this ceremony by the Raghavadasa Matha, a monastery historically associated with the temple. As the deities near the Lion's Gate, Odissi dancers perform to the mardala and mridanga, and devotees break into sankirtana, chanting the Lord's names with rhythmic, jumping movements — a foretaste of the devotional anticipation that carries through the entire festival, later given voice by devotee-poets such as Salabega, whose verses capture the longing with which pilgrims wait each year to see the Lord seated on Nandighosha, His chariot.
                        </p>
                    </div>

                    <Divider />

                    {/* 04 The Scene Krishnadasa Kaviraja Gosvami Describes */}
                    <div id="scene-krishnadasa" className="sp-sec-block">
                        <SectionHead num="04" title="The Scene Krishnadasa Kaviraja Gosvami Describes" />
                        <p>
                            What makes the Chaitanya-charitamrita's account of Pahandi remarkable is its physical honesty. Rather than describing only the pageantry, Krishnadasa Kaviraja Gosvami records the sheer difficulty of the task: the cotton pads breaking under the Deity's weight with a heavy cracking sound, the cotton floating into the air, and the tumult of musical instruments all around.
                        </p>
                        <div className="bg-[#3D1A00]/5 border-l-4 border-[#C9A84C] p-6 my-8 rounded-r-lg">
                            <p className="font-serif text-lg italic text-[#3D1A00] mb-4">
                                viśvambhara jagannāthe ke cālāite pāre?<br />
                                āpana icchāya cale karite vihāre
                            </p>
                            <p className="text-sm text-[#3D1A00]/80">
                                Reflecting on the scene, the author affirms that Lord Jagannätha is the maintainer of the whole universe. Who can carry Him from one place to another? The Lord moves by His personal will just to perform His pastimes. — Sri Chaitanya-charitamrita, Madhya-lila 13.13 
                            </p>
                        </div>
                        <p>
                            In the very next verse, amid the noise of drums and conchs marking the Deity's transfer to the chariot, Sri Chaitanya Mahaprabhu is described crying out "Manima! Manima!" — a tender, affectionate address (maṇimā is used to address a respectable person in Orissa) — but His voice is lost entirely in the surrounding tumult. No one else even hears Him call.
                        </p>
                        <p>
                            This detail matters: the same Lord whose weight breaks reinforced cotton padding, whom hundreds of arms strain to carry, is simultaneously the object of the most intimate, almost inaudible personal address from His greatest devotee. Opulence and intimacy are shown occupying the very same instant.
                        </p>
                    </div>

                    <Divider />

                    {/* 05 Chhera Pahara */}
                    <div id="chhera-pahara" className="sp-sec-block">
                        <SectionHead num="05" title="Chhera Pahara: The King's Service Alongside Pahandi" />
                        <p>
                            Pahandi does not happen in isolation. As the deities are being carried, Chaitanya-charitamrita records that King Prataparudra of Puri personally took up a broom with a golden handle and began sweeping the road before the Lord, then sprinkled it with sandalwood-scented water — despite being, in the text's own words, "the owner of the royal throne." This royal sweeping ritual, today called Chhera Pahara, is covered in full in its own dedicated post in this series, but its timing alongside Pahandi is part of what gives the moment its force: sovereign and servant, king and temple worker, are shown performing menial service side by side for the same Lord.
                        </p>
                        <SectionImage 
                            src="/images/pahandi-bije/King_Prataparudra_sweeping_the_chariot_path_during_Chhera_Pahara.png" 
                            alt="King Prataparudra sweeping the chariot path during Chhera Pahara" 
                            caption="King Prataparudra sweeping the chariot path during Chhera Pahara." 
                        />
                        <p>
                            Today, this same service is performed each year by the current Gajapati Maharaja of Puri, Dibyasingha Deb (Divyasingha Deva IV), the titular king and hereditary head of the Bhoi dynasty, who as the temple's Adhyasevaka (chief servitor) sweeps the chariot platforms with a golden broom and sprinkles them with sandalwood water before the deities' journey begins. The chariots traditionally do not move until he has completed this act — the same principle of royal humility that Maharaja Prataparudra first modeled before Sri Chaitanya Mahaprabhu.
                        </p>
                    </div>

                    <Divider />

                    {/* 06 Why This Matters for Gaudiya Vaishnavas */}
                    <div id="why-this-matters" className="sp-sec-block">
                        <SectionHead num="06" title="Why This Matters for Gaudiya Vaishnavas" />
                        <ul className="list-disc pl-6 space-y-4 mb-8 text-[#3D1A00] leading-relaxed">
                            <li>The Lord who is worshipped as the maintainer of the universe is shown, in this single ceremony, accepting the physical service of His devotees — a direct demonstration of manusa-lila, His human-like pastimes, rather than a display of unapproachable opulence alone.</li>
                            <li>Sri Chaitanya Mahaprabhu's inaudible cry of "Manima! Manima!" during Pahandi reflects the mood of a devotee whose intimate address to the Lord is never about being heard by the crowd, but about the private exchange of love itself.</li>
                            <li>The King's willingness to sweep the road during this same window, recorded a few verses later in the same chapter, reinforces that in the presence of Lord Jagannath, worldly rank offers no exemption from humble service — a theme foundational to Gaudiya Vaishnava practice.</li>
                            <li>Pahandi stands as the hinge between Netrotsava, when the Lord's freshly painted form is unveiled, and the beginning of the Ratha Yatra procession itself — without it, the festival's central journey cannot begin.</li>
                        </ul>
                    </div>

                    <Divider />

                    {/* 07 Srila Prabhupada's Teaching on This Pastime */}
                    <div id="prabhupada-teaching" className="sp-sec-block">
                        <SectionHead num="07" title="Srila Prabhupada's Teaching on This Pastime" />
                        <p>
                            His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada consistently emphasized that pastimes such as this reveal the Lord's willingness to reciprocate with His devotees on their own terms, accepting apparent limitation out of love rather than necessity. The Chaitanya-charitamrita's own commentary on Pahandi makes this point directly: no ordinary strength could lift the maintainer of the universe, so the entire scene of servitors straining to carry Him is itself a display of the Lord's will, not a constraint upon it.
                        </p>
                    </div>

                    <Divider />

                    {/* 08 Living Tradition Today */}
                    <div id="living-tradition" className="sp-sec-block">
                        <SectionHead num="08" title="Living Tradition Today" />
                        <p>
                            Pahandi Bije remains one of the most anticipated moments of Ratha Yatra in Puri each year. Devotees crowd the route between the temple's Lion's Gate and the chariots specifically to witness this procession, considering the sight of the deities being carried — swaying, rocking, accompanied by the chanting of the daitapatis — to be independently auspicious, distinct even from the darshan received once the deities are seated on the chariots themselves.
                        </p>
                    </div>

                    <Divider />

                    {/* 09 Conclusion */}
                    <div id="conclusion" className="sp-sec-block">
                        <SectionHead num="09" title="Conclusion" />
                        <p>
                            Pahandi is easy to skip over when retelling Ratha Yatra, since most attention goes to the chariots being pulled through the streets afterward. But Krishnadasa Kaviraja Gosvami gave this shorter procession its own detailed verses in Chaitanya-charitamrita, Madhya-lila 13 — describing the servitors straining to carry the deities, and Sri Chaitanya Mahaprabhu calling out to Lord Jagannath in a voice lost in the noise around Him.
                        </p>
                        <p>
                            As the text itself states, no ordinary strength could lift the maintainer of the universe — so the Lord moves only by His own will, using His servants as the visible means. That is the point the scripture makes about this pastime, in its own words, not a broader lesson added on top of it.
                        </p>
                        <p>
                            Hare Krishna. Continue following this pastime forward with our companion article on Chhera Pahara — the King's humble service alongside the chariots — the next event in the Ratha Yatra sequence.
                        </p>
                    </div>

                    <Divider />

                    {/* 10 Frequently Asked Questions */}
                    <div id="faq" className="sp-sec-block">
                        <SectionHead num="10" title="Frequently Asked Questions" />
                        <FaqAccordion items={[
                            {
                                q: "What does the word Pahandi mean?",
                                a: "Pahandi refers to the slow, step-by-step procession in which the deities of Lord Jagannath, Balabhadra, and Subhadra are carried from Their throne to Their chariots. Sri Chaitanya-charitamrita refers to the same ceremony by its formal name, Pandu-vijaya."
                            },
                            {
                                q: "In what order are the deities carried during Pahandi?",
                                a: "According to the Dhadi Pahandi tradition followed for the outward journey, Sudarshana is carried first, followed by Balabhadra, then Subhadra, and finally Lord Jagannath, each secured with silken rope and carried on padded cotton platforms called tulis."
                            },
                            {
                                q: "What did Sri Chaitanya Mahaprabhu do during Pahandi?",
                                a: "Sri Chaitanya Mahaprabhu watched the procession in ecstasy and called out \"Manima! Manima!\" as an affectionate address to the Lord, though the sound of musical instruments and the crowd meant no one else could hear Him, as recorded in Sri Chaitanya-charitamrita, Madhya-lila 13.14."
                            },
                            {
                                q: "Is Pahandi connected to the King sweeping the chariot path?",
                                a: "Yes. Chaitanya-charitamrita records that King Prataparudra swept the road with a golden-handled broom and sprinkled it with sandalwood water while the deities were being carried during Pahandi, a ritual now known as Chhera Pahara and covered in its own post in this series."
                            },
                            {
                                q: "How does Pahandi fit into the overall Ratha Yatra sequence?",
                                a: "Pahandi is the opening ritual act of Ratha Yatra day itself. It follows Netrotsava, the unveiling of the deities' freshly painted forms, and must be completed before the chariots can begin their journey to the Gundicha Temple."
                            },
                            {
                                q: "What instruments and ornaments accompany the Pahandi procession?",
                                a: "The procession moves to the ghanta (a bell-metal gong), the kahali (trumpet), and the telingi baja (a cane drum). Lord Balabhadra and Lord Jagannath additionally wear tahia, tall floral crowns supplied by the Raghavadasa Matha, while Odissi dancers and sankirtana chanting accompany the deities toward the chariots."
                            }
                        ]} />
                    </div>

                    <Divider />

                    {/* 11 References */}
                    <div id="references" className="sp-sec-block">
                        <SectionHead num="11" title="References" />
                        <ul className="list-disc pl-6 space-y-4 text-[#3D1A00] leading-relaxed">
                            <li>Sri Chaitanya-charitamrita, Madhya-lila, Chapter 13, "The Ecstatic Dancing of the Lord at Ratha-yatra" (verses 4–18) — Srila Krishnadasa Kaviraja Gosvami, with purports by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada.</li>
                            <li>Sri Chaitanya-charitamrita, Madhya-lila 13.60–61 — on King Prataparudra's service during this same sequence.</li>
                            <li>Official Shree Jagannath Temple ritual documentation (jagannath.in / rathjatra.nic.in) — temple-tradition details on Senapata lagi, the Jagamohana–sata pahacha–natamandapa route, processional instruments, and tahia ornamentation.</li>
                        </ul>
                    </div>

                    <Divider />
                </div>

                {/* 12 CONNECT WITH US */}
                <div id="connect" className="sp-connect-header">
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
                    <a href="https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign" target="_blank" rel="noopener noreferrer" className="sp-connect-card">
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
        </div>
    )
}
