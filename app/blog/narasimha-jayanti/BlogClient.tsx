"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import "./styles.css";

// --- CONSTANTS ---
const socialLinks = [
  { icon: "🌍", label: "Website", display: "hkmchennai.org", url: "https://hkmchennai.org/" },
  { icon: "🕊", label: "Twitter (X)", display: "@ChennaiHare", url: "https://x.com/ChennaiHare" },
  { icon: "📸", label: "Instagram", display: "@hkm_chennai", url: "https://www.instagram.com/hkm_chennai" },
  { icon: "💼", label: "LinkedIn", display: "Srila Prabhupada's ISKCON Thiruvanmiyur", url: "https://www.linkedin.com/company/hare-krishna-movement-chennai/" },
  { icon: "🎯", label: "Support", display: "campaigns.hkmchennai.org", url: "https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign" },
  { icon: "📲", label: "WhatsApp", display: "Join our WhatsApp Channel", url: "https://www.whatsapp.com/channel/0029Vaa2fjKEVccFHx5YDt1O" },
];

const faqs = [
  {
    q: "What is Narasimha Jayanti and when is it observed?",
    a: "Narasimha Jayanti, also known as Nrsimha Caturdasi, is the divine appearance day of Lord Nrsimhadeva — the half-man, half-lion incarnation of Lord Visnu. It is observed on the fourteenth tithi (sukla paksa caturdasi) of the waxing moon in the month of Vaisakha. Devotees observe fasting, hear the glories of the Lord, and attend special evening programmes.",
  },
  {
    q: "Why did Lord Visnu appear as half-man, half-lion?",
    a: "Hiranyakasipu had obtained a boon from Lord Brahma that he could not be killed by any man or animal. Lord Visnu appeared in a form that was neither fully man nor fully animal — transcending every category in Hiranyakasipu's boon. In this way, He demonstrated that the Supreme Lord cannot be limited by any conditional benediction. He is always beyond all material categories.",
  },
  {
    q: "Who is Prahlada Maharaja and why is he worshipped?",
    a: "Prahlada Maharaja was the five-year-old son of Hiranyakasipu who received spiritual knowledge from Narada Muni while still in the womb. Despite being born in a demoniac family and subjected to extreme persecution, his devotion to Lord Visnu never wavered. He is worshipped as the ideal devotee — a model of surrender, courage, compassion and unalloyed love for God.",
  },
  {
    q: "What are the nine processes of devotional service taught by Prahlada?",
    a: "Prahlada Maharaja taught his classmates the nine processes of bhakti: sravanam (hearing), kirtanam (chanting), smaranam (remembering), pada-sevanam (serving the Lord's feet), arcananam (deity worship), vandanam (offering prayers), dasyam (serving as a servant), sakhyam (friendship) and atma-nivedanam (complete self-surrender). These nine processes, any one of which is sufficient for liberation, form the foundation of Vaisnava practice.",
  },
  {
    q: "Why is Lord Nrsimhadeva worshipped for protection?",
    a: "Lord Nrsimhadeva is considered the supreme protector of devotees. His appearance demonstrated that the Lord will personally intervene — from any place, in any form, at any time — to protect His surrendered devotees. Vaisnava tradition holds that chanting Nrsimhadeva's names and meditating on His form removes all fear, destroys all obstacles and purifies the environment.",
  },
  {
    q: "What is the Narasimha Jayanti celebration at Daksina Dwaraka Dham?",
    a: "Every year on Narasimha Jayanti, Daksina Dwaraka Dham holds a special evening programme beginning at 5:45 PM. Devotees observe a full fast until dusk. The programme includes Nrsimha Abhisekam, a Narasimha Avatara Drama, Sandhya Arati, Kirtana, a Festival Discourse from the Srimad-Bhagavatam, Sayana Arati, and Maha-prasadam. All are welcome to attend.",
  },
  {
    q: "How should one observe Narasimha Jayanti at home?",
    a: "Devotees may observe Narasimha Jayanti by fasting until sunset, reading or hearing the Nrsimha kavaca and the relevant chapters of the Srimad-Bhagavatam (Canto 7), singing the Nrsimha kirtana and the maha-mantra, offering incense, flowers and a lamp to the Lord, and attending the nearest Vaisnava temple for the evening programme. The most important observance is to hear the glories of the Lord and Prahlada Maharaja with attention and devotion.",
  },
];

// --- SUB-COMPONENTS ---
function Bq({ children }: { children: React.ReactNode }) {
  return <blockquote className="nj-bq">{children}</blockquote>;
}

function SocialCard({ icon, label, url, display }: { icon: string; label: string; url: string; display: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="nj-social-card">
      <span className="nj-s-icon">{icon}</span>
      <div className="nj-s-text">
        <span className="nj-s-label">{label}</span>
        <span className="nj-s-url">{display}</span>
      </div>
      <span className="nj-s-arrow">→</span>
    </a>
  );
}

function Divider() {
  return (
    <div className="nj-divider" aria-hidden="true">
      <span>✦</span>
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  return <h2 className="nj-sh">{title}</h2>;
}

function SubHeading({ title }: { title: string }) {
  return <h3 className="nj-sh3">{title}</h3>;
}

function BlogImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div className="nj-image-container">
      <img src={src} alt={alt} className="nj-image" />
      {caption && <span className="nj-image-caption">{caption}</span>}
    </div>
  );
}

export default function BlogClient() {
  return (
    <main className="min-h-screen bg-[#FFF9F0] selection:bg-[#b84a1a] selection:text-white">
      <Navbar />

      <article className="nj-blog-wrap">
        {/* HERO */}
        <header className="nj-blog-header">
          <p className="nj-hero-festival">~ Divine Appearance Festival ~</p>
          <h1 className="nj-blog-title">Narasimha Jayanti: The Divine Appearance of Lord Nrsimhadeva</h1>
          <p className="nj-blog-subtitle">The Lion-Man Who Appeared from a Pillar to Protect His Devotee — Story, Significance and Celebration at Daksina Dwaraka Dham, Chennai</p>
          <div className="nj-hero-line" />
          <p className="nj-blog-byline">
            Based on the teachings of <strong>His Divine Grace Visva Guru A.C. Bhaktivedanta Swami Prabhupada</strong><br />
            Founder-Acarya of the International Society for Krsna Consciousness<br />
            <em>as presented in the Srimad-Bhagavatam, Seventh Canto</em>
          </p>
        </header>

        <div className="nj-content">

          {/* ─── SECTION 1 ─── */}
          <SectionHeading title="When God Stepped Out of a Pillar" />
          <p>There is a moment in the Srimad-Bhagavatam that has echoed across the centuries, reverberating in the hearts of devotees from Vedic times to the present day. A five-year-old boy stands before his furious father — one of the most powerful demons the universe has ever known. The father raises his fist, strikes a stone column in contempt, and challenges: "If your God is everywhere, then let Him come out of this pillar!"</p>
          <p>And in that very instant — from that very pillar — emerges a form the universe had never before seen. Neither fully man nor fully lion, but both simultaneously. Eyes blazing like molten gold. A mane spreading across the cosmos. Nails sharp as thunderbolts. A roar that shook the foundations of all three worlds.</p>
          <p>This is the appearance of Lord Nrsimhadeva. This is Narasimha Jayanti.</p>
          <p>Narasimha Jayanti — also known as Nrsimha Caturdasi — is observed on the fourteenth day (sukla paksha caturdasi) of the waxing moon in the month of Vaisakha. On this sacred tithi, Lord Visnu manifested His most ferocious and most merciful form simultaneously — fierce toward the demoniac, tender toward His devotee. This day is among the most auspicious in the entire Vaishnava calendar.</p>

          <Bq>
            <p><em>He was not man. He was not lion. He was the Supreme Lord — appearing in the exact form no boon could protect against, from the exact place no one expected.</em></p>
          </Bq>

          <BlogImage
            src="/assets/blog/narasimha-jayanti/narasimha_hero.png"
            alt="Lord Nrsimhadeva"
            caption="Lord Nrsimhadeva — the half-man, half-lion incarnation of the Supreme Lord, appearing from the pillar to protect His devotee Prahlada Maharaja."
          />

          <Divider />

          {/* ─── SECTION 2 ─── */}
          <SectionHeading title="The Rise of Hiranyakasipu: Pride That Shook the Universe" />
          <p>To understand the full depth of Narasimha Jayanti, we must first understand why Lord Nrsimhadeva appeared. The story begins with Hiranyakasipu, a daitya king of immense power, whose brother Hiranyaksa had been slain by Lord Visnu in the form of Varaha, the divine boar. Consumed by grief and hatred, Hiranyakasipu's heart burned with one ambition: he would become immortal, conquer the universe, and destroy Visnu.</p>
          <p>As described in the Srimad-Bhagavatam (7th Canto), Hiranyakasipu immediately began to organise his demonic forces to disrupt the Vedic order on earth. His aim was to cut the root of dharma — for when dharma is destroyed, the demigods wither and Visnu has no foundation. But Hiranyakasipu was not content with mere destruction. He wanted the supreme position — the post of Lord Brahma himself. And for that, he undertook a tapasya so severe that it disturbed the entire universe.</p>

          <SubHeading title="The Severe Austerities at Mandaracala Mountain" />
          <p>In the valley of Mandara Hill, Hiranyakasipu stood with his toes on the ground, arms raised, eyes fixed at the sky — performing austerities for a hundred celestial years without food or water. The Srimad-Bhagavatam describes the effect vividly: fire emanated from his head, rivers and oceans were agitated, mountains trembled, stars fell from the sky, and the planets became unbearably hot. All the demigods fled their abodes and approached Lord Brahma, pleading with him to intervene.</p>
          <p>Lord Brahma descended to the site of the austerity. He found Hiranyakasipu in the anthill — his body completely consumed by ants and insects, yet his vital force still burning through his bones. Struck with wonder, Lord Brahma sprinkled water from his kamandalu upon him. Instantly, Hiranyakasipu arose — with a body luminous as molten gold, young and perfect in every limb.</p>

          <SubHeading title="The Five Impossible Boons" />
          <p>Hiranyakasipu offered respectful obeisances to Lord Brahma and made his famous prayer — a request so carefully constructed that it appeared to cover every possible means of death:</p>

          <ul className="nj-list">
            <li>Not to be killed by any living entity, whether created or uncreated</li>
            <li>Not to die inside a building or outside, in the sky or on the ground</li>
            <li>Not to die by day or by night</li>
            <li>Not to be killed by any weapon, nor by any human being or animal</li>
            <li>Not to be killed by any demigod, demon, or any other entity</li>
          </ul>

          <p>Lord Brahma, bound by the rules of benediction, granted these boons. Hiranyakasipu then became the absolute ruler of the universe. The demigods abandoned their posts. The yajnas ceased. The three worlds trembled under his reign. And even the Supreme Lord Himself, through His transcendental voice, promised the suffering demigods: "I shall stop him very soon. Please wait patiently until that time."</p>

          <Bq>
            <p><em>He thought he had outsmarted death. But the Supreme Lord, who is the author of all time, all space and all existence, cannot be contained within any boon.</em></p>
          </Bq>

          <Divider />

          {/* ─── SECTION 3 ─── */}
          <SectionHeading title="Prahlada Maharaja: Devotion Born in the Womb" />
          <p>Hiranyakasipu had four sons. But one among them — Prahlada — was no ordinary child. He was, as Narada Muni describes in the Srimad-Bhagavatam, a reservoir of all transcendental qualities. His devotion to Lord Visnu had begun before his birth.</p>
          <p>When Hiranyakasipu went to Mandaracala to perform austerities, the demigods attacked the demons. As Hiranyakasipu's wife Kayadhu — pregnant at the time — was being carried away, Narada Muni intervened. He freed her and brought her to his asrama. At Narada Muni's asrama, Narada gave both Kayadhu and the child in her womb instructions in bhagavata-dharma — devotional knowledge free from all material contamination. Prahlada Maharaja, though still an embryo in the womb, received and retained this transcendental knowledge fully.</p>

          <SubHeading title="The Qualities of Prahlada Maharaja" />
          <Bq>
            <p>"He was completely cultured as a qualified brahmana, having very good character and being determined to understand the Absolute Truth. He had full control of his senses and mind. Like the Supersoul, he was kind to every living entity and was the best friend of everyone. To respectable persons he acted exactly like a menial servant, to the poor he was like a father, to his equals he was attached like a sympathetic brother, and he considered his teachers, spiritual masters and older Godbrothers to be as good as the Supreme Personality of Godhead."</p>
            <cite>— Srila Prabhupada, Srimad-Bhagavatam 7.4.31–32</cite>
          </Bq>
          <p>Although Prahlada was born in a family of asuras, he was not an asura at heart. From his very earliest childhood, he was completely absorbed in Krsna consciousness. Sometimes he would cry in ecstasy. Sometimes he would laugh without cause. Sometimes he would sing loudly, dance in trance, or become completely silent, his body covered with goosebumps and tears flowing from his half-closed eyes. He was, in the truest sense, a great mahatma — a great soul — living in the body of a young child.</p>

          <Bq>
            <p><em>Though born the son of the most powerful demon in the universe, Prahlada Maharaja was the most exalted devotee of the age. Devotion has nothing to do with birth.</em></p>
          </Bq>

          <Divider />

          {/* ─── SECTION 4 ─── */}
          <SectionHeading title="The Persecution: A Father's Fury Against His Own Son" />
          <p>Hiranyakasipu had entrusted his son's education to Sanda and Amarka, the two sons of his priest Sukracarya. These teachers attempted to instruct Prahlada in politics, economics and all material sciences. But whenever they were absent, Prahlada would turn to his fellow students and quietly begin to teach them Krsna consciousness.</p>
          <p>One day, Hiranyakasipu lovingly placed his son on his lap and asked what was the best thing he had learned from his teachers. Prahlada calmly replied that for any person trapped in the darkness of material existence, the greatest wisdom was to take shelter of the Supreme Lord. He proceeded to describe the nine processes of devotional service — sravanam, kirtanam, smaranam, pada-sevanam, arcananam, vandanam, dasyam, sakhyam and atma-nivedanam.</p>
          <p>Hiranyakasipu's face twisted with rage. He declared Prahlada's teachers to be at fault. When they denied responsibility, Hiranyakasipu turned to Prahlada and demanded to know who had taught him this. Prahlada replied with perfect equanimity that the Supreme Lord Himself resides in every heart — and from Him alone comes all true knowledge.</p>

          <Bq>
            <p>"Those who are attached to family life do not develop Krsna consciousness, either personally or collectively. Instead, they suffer repeated birth and death in this material world and continue simply chewing the chewed. The duty of every man is to take shelter of a pure devotee and thus become eligible to understand Krsna consciousness."</p>
            <cite>— Srila Prabhupada, Srimad-Bhagavatam 7.5 Summary</cite>
          </Bq>

          <SubHeading title="Attempts to Kill Prahlada" />
          <p>This answer enraged Hiranyakasipu beyond all reason. What followed was a series of extraordinary attempts to take Prahlada's life, each more extreme than the last — and each one rendered powerless by the Lord's protection:</p>

          <ul className="nj-list">
            <li>Struck with sharp weapons — the weapons were turned aside</li>
            <li>Thrown under the feet of mighty elephants — he was unharmed</li>
            <li>Cast from the peak of a mountain — he landed safely</li>
            <li>Subjected to poisonous snakes directed to bite him — they could not harm him</li>
            <li>Submerged in water and buried under mountains — he remained unscathed</li>
            <li>Exposed to fierce winds, fire and cursed with mystic powers — none succeeded</li>
          </ul>

          <p>Each time, Prahlada emerged unharmed, his mind fixed on the Lord, his face calm and radiant. Hiranyakasipu grew increasingly alarmed. A deep, unspeakable fear crept into him — not of his son, but of the power that was clearly protecting him.</p>

          <BlogImage
            src="/assets/blog/narasimha-jayanti/narasimha_poster_1.png"
            alt="Prahlada Maharaja in meditation as soldiers attack with weapons and an elephant"
            caption="Prahlada Maharaja, calm in deep meditation, as Hiranyakasipu's soldiers attempt to harm him with weapons and a mighty elephant — each attempt rendered powerless by the Lord's protection."
          />

          <BlogImage
            src="/assets/blog/narasimha-jayanti/narasimha_poster_2.png"
            alt="Prahlada Maharaja surrounded by demons with weapons in a dungeon"
            caption="Prahlada Maharaja remains in deep meditation and prayer, showing complete fearlessness while being attacked by the soldiers of Hiranyakasipu."
          />

          <Bq>
            <p><em>Every arrow broke. Every flame was extinguished. Every serpent recoiled. Because wherever Krsna's devotee stands, that place is already Vaikuntha.</em></p>
          </Bq>

          <Divider />

          {/* ─── SECTION 5 ─── */}
          <SectionHeading title="The Moment of Appearance: The Pillar That Shook the Cosmos" />
          <p>The final confrontation came when Hiranyakasipu's patience finally collapsed. He summoned Prahlada before his royal assembly and demanded to know the source of his strength and fearlessness. Prahlada replied without hesitation:</p>

          <Bq>
            <p>"My dear King, the source of my strength, of which you are asking, is also the source of yours. Indeed, the original source of all kinds of strength is one. He is not only your strength or mine, but the only strength for everyone. Without Him, no one can get any strength. Whether moving or not moving, superior or inferior, everyone, including Lord Brahma, is controlled by the strength of the Supreme Personality of Godhead."</p>
            <cite>— Srila Prabhupada, Srimad-Bhagavatam 7.8.7</cite>
          </Bq>

          <p>Hiranyakasipu's face twisted with contempt. "You rascal," he thundered, "you have always spoken of a supreme being other than me — where is He? If He is everywhere, then why is He not present in this pillar?" He struck the pillar with his fist.</p>
          <p>What happened next is described in the Srimad-Bhagavatam (7.8.15–17) with breathtaking power:</p>

          <Bq>
            <p>"Then from within the pillar came a fearful sound, which appeared to crack the covering of the universe. This sound reached even the abodes of the demigods like Lord Brahma, and when the demigods heard it, they thought, 'Oh, now our planets are being destroyed!'"</p>
            <cite>— Srila Prabhupada, Srimad-Bhagavatam 7.8.15</cite>
          </Bq>

          <Bq>
            <p>"To prove that the statement of His servant Prahlada Maharaja was true — the Supreme Personality of Godhead, Hari, exhibited a wonderful form never before seen. The form was neither that of a man nor that of a lion."</p>
            <cite>— Srimad-Bhagavatam 7.8.17</cite>
          </Bq>

          <Divider />

          {/* ─── SECTION 6 ─── */}
          <SectionHeading title="The Form of Lord Nrsimhadeva" />
          <p>The Srimad-Bhagavatam (7.8.19–22) gives one of the most vivid descriptions of any divine form in all of Vedic literature:</p>

          <div className="nj-verse">
            <Bq>
              <p>"The Lord's form was extremely fearsome because of His angry eyes, which resembled molten gold; His shining mane, which expanded the dimensions of His fearful face; His deadly teeth; and His razor-sharp tongue, which moved about like a dueling sword. His ears were erect and motionless, and His nostrils and gaping mouth appeared like caves of a mountain. His jaws parted fearfully, and His entire body touched the sky. His neck was very short and thick, His chest broad, His waist thin, and the hairs on His body as white as the rays of the moon. His arms, which resembled flanks of soldiers, spread in all directions as He killed the demons with His conchshell, disc, club, lotus and other natural weapons."</p>
              <cite>— Śrīla Prabhupāda, Śrīmad-Bhāgavatam 7.8.19–22</cite>
            </Bq>
          </div>

          <p>Hiranyakasipu, though shaken, summoned his demoniac pride. He attacked the Lord with his club like an elephant — and disappeared into the Lord's effulgence like a small insect falling into fire.</p>

          <Divider />

          {/* ─── SECTION 7 ─── */}
          <SectionHeading title="The Defeat of Hiranyakasipu: Every Boon Undone" />
          <p>The Lord then played with Hiranyakasipu as Garuda plays with a snake — catching him, releasing him, catching him again. Hiranyakasipu, foolishly thinking the Lord was afraid of his prowess, attacked again with sword and shield. But this time the Lord's laughter rang like a thunderbolt. He caught Hiranyakasipu with the speed of a hawk.</p>
          <p>Then, in the most perfect and awe-inspiring resolution of divine justice, the Lord placed Hiranyakasipu across His lap at the threshold of the assembly hall — at twilight, neither day nor night. He was neither inside nor outside. He was neither on the ground nor in the sky. And the Lord tore him apart with His nails — not a weapon. Not a man. Not an animal. Not a demigod. Not inside. Not outside. Not day. Not night.</p>
          <p>Every single boon had been fulfilled — and simultaneously, every single boon had been transcended. The Supreme Lord, who is beyond all material categories, had Himself become the living answer to every so-called limitation.</p>

          <Bq>
            <p><em>The five boons became five impossibilities only for the conditioned mind. For the Supreme Lord, who exists beyond time, space and all categories, they were never limitations at all.</em></p>
          </Bq>

          <Divider />

          {/* ─── SECTION 8 ─── */}
          <SectionHeading title="Prahlada Pacifies Lord Nrsimhadeva" />
          <p>After Hiranyakasipu was destroyed, the Lord remained on the throne of the assembly hall, blazing with terrible anger. The entire universe was paralysed with fear. The demigods, headed by Lord Brahma and Lord Siva, came forward to offer prayers from a safe distance. Even Goddess Laksmi, the constant companion of Narayana, did not dare approach.</p>
          <p>Then Lord Brahma turned to the small boy standing nearby and said: "My dear son, Lord Nrsimhadeva is extremely angry at your demoniac father. Please go forward and appease the Lord."</p>
          <p>Prahlada Maharaja, who was not afraid of the Lord's fearsome form at all, walked forward with perfect confidence. He fell flat at the Lord's lotus feet, offering prostrated obeisances with folded hands. The Srimad-Bhagavatam records the beautiful moment that followed:</p>

          <Bq>
            <p>"When Lord Nrsimhadeva saw the small boy Prahlada Maharaja prostrated at the soles of His lotus feet, He became most ecstatic in affection toward His devotee. Raising Prahlada, the Lord placed His lotus hand upon the boy's head because His hand is always ready to create fearlessness in all of His devotees. By the touch of Lord Nrsimhadeva's hand on Prahlada Maharaja's head, Prahlada was completely freed of all material contaminations and desires."</p>
            <cite>— Srila Prabhupada, Srimad-Bhagavatam 7.10.4–6</cite>
          </Bq>

          <Bq>
            <p><em>Even Laksmi, the goddess of fortune, dared not approach the angry Nrsimhadeva. But a five-year-old boy walked forward without fear — because pure devotion has no barrier before the Lord.</em></p>
          </Bq>

        

          <Divider />

          {/* ─── SECTION 9 ─── */}
          <SectionHeading title="The Prayers of Prahlada Maharaja to Lord Nrsimhadeva" />
          <p>The prayers of Prahlada Maharaja (Srimad-Bhagavatam 7.9.8–50) are among the most profound devotional compositions in all of Vedic literature. They are studied, sung and meditated upon by Vaisnavas throughout the world.</p>

          <SubHeading title="Verse 8 — The Qualification of a Devotee" />
          <p>Prahlada begins with humility, wondering how he — born in a demoniac family — could possibly offer adequate prayers to the Lord:</p>
          <div className="nj-verse">
            <p className="nj-verse-skt">
              brahmādayaḥ sura-gaṇā munayo 'tha siddhāḥ<br />
              sattvaikatāna-gatayo vacasāṁ pravāhaiḥ<br />
              nārādhituṁ puru-guṇair adhunāpi pipruḥ<br />
              kiṁ toṣṭum arhati sa me harir ugra-jāteḥ
            </p>
            <Bq>
              <p>"How is it possible for me, who have been born in a family of asuras, to offer suitable prayers to satisfy the Supreme Personality of Godhead? Even until now, all the demigods, headed by Lord Brahmā, and all the saintly persons could not satisfy the Lord by streams of excellent words, although such persons are very qualified. Then what is to be said of me? I am not at all qualified."</p>
              <cite>— Śrīmad-Bhāgavatam 7.9.8</cite>
            </Bq>
          </div>

          <SubHeading title="Verse 9 — The Only True Qualification: Devotion" />
          <div className="nj-verse">
            <p className="nj-verse-skt">
              manye dhanābhijana-rūpa-tapaḥ-śrutaujas-<br />
              tejaḥ-prabhāva-bala-pauruṣa-buddhi-yogāḥ<br />
              nārādhanāya hi bhavanti parasya puṁso<br />
              bhaktyā tutoṣa bhagavān gaja-yūtha-pāya
            </p>
            <Bq>
              <p>"One may possess wealth, an aristocratic family, beauty, austerity, education, sensory expertise, luster, influence, physical strength, diligence, intelligence and mystic yogic power, but I think that even by all these qualifications one cannot satisfy the Supreme Personality of Godhead. However, one can satisfy the Lord simply by devotional service. Gajendra did this, and thus the Lord was satisfied with him."</p>
              <cite>— Śrīmad-Bhāgavatam 7.9.9</cite>
            </Bq>
          </div>

          <SubHeading title="Verse 16 — The Cry for the Lord's Lotus Feet" />
          <div className="nj-verse">
            <p className="nj-verse-skt">
              trasto 'smy ahaṁ kṛpaṇa-vatsala duḥsahogra-<br />
              saṁsāra-cakra-kadanād grasatāṁ praṇītaḥ<br />
              baddhaḥ sva-karmabhir uśattama te 'ṅghri-mūlaṁ<br />
              prīto 'pavarga-śaraṇaṁ hvayase kadā nu
            </p>
            <Bq>
              <p>"O most powerful, insurmountable Lord, who are kind to the fallen souls, I have been put into the association of demons as a result of my activities, and therefore I am very much afraid of my condition of life within this material world. When will that moment come when You will call me to the shelter of Your lotus feet, which are the ultimate goal for liberation from conditional life?"</p>
              <cite>— Śrīmad-Bhāgavatam 7.9.16</cite>
            </Bq>
          </div>

          <SubHeading title="Verse 43–44 — The Great Soul's Compassion for All" />
          <Bq>
            <p>"O best of the great personalities, I am not at all afraid of material existence, for wherever I stay I am fully absorbed in thoughts of Your glories and activities. My concern is only for the fools and rascals who are making elaborate plans for material happiness and maintaining their families, societies and countries. I am simply concerned with love for them."</p>
            <cite>— Srila Prabhupada, Srimad-Bhagavatam 7.9.43</cite>
          </Bq>
          <Bq>
            <p>"My dear Lord Nrsimhadeva, I see that there are many saintly persons indeed, but they are interested only in their own deliverance. As for me, however, I do not wish to be liberated alone, leaving aside all these poor fools and rascals. I know that without Krsna consciousness, without taking shelter of Your lotus feet, one cannot be happy. Therefore I wish to bring them back to shelter at Your lotus feet."</p>
            <cite>— Srila Prabhupada, Srimad-Bhagavatam 7.9.44</cite>
          </Bq>

          <Bq>
            <p><em>Prahlada Maharaja did not pray for wealth, heaven or even liberation. He prayed only to serve — and to bring every suffering soul back to the lotus feet of the Lord.</em></p>
          </Bq>

          <Divider />

          {/* ─── SECTION 10 ─── */}
          <SectionHeading title="The Lord's Response: 'You Have Pleased Me'" />
          <BlogImage
            src="/assets/blog/narasimha-jayanti/narasimha_poster_3.png"
            alt="Lord Nrsimhadeva appearing from the pillar"
            caption="Lord Nrsimhadeva — the ferocious yet supremely compassionate form — whose very appearance fulfilled His devotee's unwavering faith and shook the foundations of all three worlds."
          />
          <p>Lord Nrsimhadeva, completely pacified by Prahlada's prayers, placed His hand upon the boy's head once more and spoke with great affection:</p>

          <Bq>
            <p>"My dear Prahlada, most gentle one, best of the family of the asuras, all good fortune unto you. I am very much pleased with you. It is My pastime to fulfill the desires of all living beings, and therefore you may ask from Me any benediction that you desire to be fulfilled."</p>
            <cite>— Srila Prabhupada, Srimad-Bhagavatam 7.10.52</cite>
          </Bq>

          <p>Prahlada Maharaja's response was extraordinary. He did not ask for any material benediction. He asked only that he would never be attracted to material pleasures and would always remain a devoted servant of the servants of the Lord. When the Lord insisted on granting something, Prahlada asked for the liberation of his father — despite everything Hiranyakasipu had done to him.</p>
          <p>The Lord assured him that Hiranyakasipu, having been killed directly by the Supreme Lord's own hands, had already been liberated. He further blessed Prahlada to rule the universe with dharma until the end of his life, after which he would return to the spiritual world, Vaikuntha.</p>
          <p>The entire episode ends with the cosmos jubilant. Flowers rained from heaven. Drums were beaten. The Gandharvas sang. The demigods danced. And on the throne of Hiranyakasipu sat a five-year-old boy — now the rightful ruler of the universe — his small hands in the gesture of devotion, his eyes still filled with tears of love for the Lord.</p>

          <Divider />

          {/* ─── SECTION 11 ─── */}
          <SectionHeading title="The Spiritual Significance of Lord Nrsimhadeva" />
          <p>The appearance of Lord Nrsimhadeva carries profound teachings for every spiritual practitioner. Srila Prabhupada explains that Lord Nrsimhadeva appeared not only for Prahlada's personal benefit, but for the benefit of all human society.</p>

          <ul className="nj-teachings-list">
            <li>
              <strong>The Lord Is Omnipresent:</strong> When the Lord emerged from the pillar, He proved definitively what Prahlada had been declaring all along: the Supreme Lord is present everywhere — in every atom, in every pillar, in every heart. This is not merely a theological statement; it is the living reality that devotees experience through practice.
            </li>
            <li>
              <strong>The Lord Protects His Devotees:</strong> No material power, however vast, can harm one who has genuinely surrendered to the Supreme Lord. Prahlada survived poison, fire, weapons, elephants, snakes, the ocean and the peak of mountains — not by his own strength but by the Lord's protection. This is the promise given in the Bhagavad-gita (18.66): "Surrender unto Me. I shall deliver you from all sinful reactions. Do not fear."
            </li>
            <li>
              <strong>Fearlessness Through Devotion:</strong> The most fearsome form ever manifested in the universe could not frighten Prahlada. To a devotee, Nrsimhadeva is the most affectionate, most protective, most loving form of the Lord.
            </li>
            <li>
              <strong>Dharma Is Always Restored:</strong> However powerfully adharma may seem to rule the world, the Supreme Lord will ultimately act to protect dharma and His devotees — pari tranaya sadhunam vinasaya ca duskrtam: "To deliver the pious and to annihilate the miscreants, I appear millennium after millennium."
            </li>
            <li>
              <strong>Bhakti Transcends Birth and Status:</strong> Prahlada was born in a family of demons. Yet he was the greatest devotee of his age. Anyone — from any background — can take to devotional service and attain the highest perfection.
            </li>
          </ul>

          <Bq>
            <p><em>Nrsimhadeva is fierce toward adharma and tender toward bhakti. When we purify our hearts and take shelter of the Lord, His ferocious form becomes our protection.</em></p>
          </Bq>

          <Divider />

          {/* ─── SECTION 12 ─── */}
          <SectionHeading title="Narasimha Jayanti at Daksina Dwaraka Dham, Chennai" />
          <p>At Daksina Dwaraka Dham — the temple of Hare Krsna Movement Chennai in Thiruvanmiyur — Narasimha Jayanti is observed with great devotion every year. Devotees observe a full fast until dusk on this sacred tithi, following the traditional Vaisnava observance of nirahara — complete abstinence from food until after the evening arati. The fast is broken only after the Lord has been worshipped and the celebrations concluded.</p>
          <p>The special evening programme begins at 5:45 PM, open to all devotees and visitors regardless of background or prior experience. The celebrations bring together the beauty of abhisekam, devotional drama, kirtana, discourse and the joy of Maha-prasadam — a complete devotional experience for the whole family.</p>

          {/* ─── EVENT CALLOUT ─── */}
          <section className="nj-event-callout">
            <h3>Annual Narasimha Jayanti Evening Celebration</h3>
            <p className="nj-event-loc">Daksina Dwaraka Dham, Thiruvanmiyur, Chennai</p>
            <p className="nj-event-time">Programme Begins at 5:45 PM</p>
            <ul className="nj-event-list">
              <li>Nrsimha Abhisekam</li>
              <li>Narasimhavatara Drama</li>
              <li>Sandhya Arati</li>
              <li>Kirtana</li>
              <li>Festival Discourse</li>
              <li>Sayana Arati</li>
              <li>Maha-prasadam</li>
            </ul>
          </section>

          <ul className="nj-teachings-list">
            <li>
              <strong>Nrsimha Abhisekam —</strong> Sacred ceremonial bathing of Lord Nrsimhadeva with milk, yogurt, honey, ghee, rose water and other auspicious substances, accompanied by the chanting of Vedic mantras. The abhisekam is the centrepiece of the evening — a direct act of loving seva to the Lord who appeared to protect His devotee.
            </li>
            <li>
              <strong>Narasimhavatara Drama —</strong> A live devotional drama performed by our temple devotees enacting the divine appearance of Lord Nrsimhadeva — from Prahlada's persecution, to Hiranyakasipu's challenge, to the magnificent appearance from the pillar.
            </li>
            <li>
              <strong>Sandhya Arati —</strong> The magnificent lamp offering to the deities, accompanied by the singing of devotional hymns and prayers.
            </li>
            <li>
              <strong>Kirtana —</strong> Ecstatic congregational chanting of the Holy Names: Hare Krsna Hare Krsna Krsna Krsna Hare Hare / Hare Rama Hare Rama Rama Rama Hare Hare.
            </li>
            <li>
              <strong>Festival Discourse —</strong> A special class from the Srimad-Bhagavatam on the pastimes of Lord Nrsimhadeva and Prahlada Maharaja, based on the teachings of Srila Prabhupada.
            </li>
            <li>
              <strong>Maha-prasadam —</strong> Sacred food offered to Lord Nrsimhadeva is distributed to all devotees and guests at the conclusion of the programme. Receiving Maha-prasadam is the traditional way of breaking the Narasimha Jayanti fast.
            </li>
          </ul>

          <Bq>
            <p><em>You do not need any special qualifications to attend. Prahlada Maharaja was a five-year-old child — yet he was the greatest devotee. Come with an open mind and a willing heart.</em></p>
          </Bq>

          <Divider />

          {/* ─── FAQs ─── */}
          <SectionHeading title="Frequently Asked Questions About Narasimha Jayanti" />
          <div className="nj-faq-grid">
            {faqs.map((f, i) => (
              <div key={i} className="nj-faq-item">
                <h4 className="nj-faq-q">{f.q}</h4>
                <p className="nj-faq-a">{f.a}</p>
              </div>
            ))}
          </div>

          <Divider />

          {/* ─── CLOSING PRAYER ─── */}
          <Bq>
            <p><em>Namas te Narasimhaya Prahladahlada-dayine!</em></p>
            <p>"Obeisances to Lord Narasimha, the giver of bliss to Prahlada!"</p>
            <p style={{ marginTop: "0.75rem" }}>May Lord Nrsimhadeva protect all sincere devotees. May His roar destroy every obstacle on the path of bhakti. And may the example of Prahlada Maharaja inspire every heart to take shelter of the Lord's lotus feet.</p>
          </Bq>

          <Divider />

          {/* ─── SOCIAL MEDIA ─── */}
          <section className="nj-connect-section">
            <h2 className="nj-connect-h">Connect with Us</h2>
            <p className="nj-connect-desc">Follow Hare Krsna Movement Chennai across all platforms for daily darsana and event updates.</p>
            <div className="nj-social-grid">
              {socialLinks.map((s, i) => <SocialCard key={i} {...s} />)}
            </div>
          </section>

          <footer className="nj-blog-footer">
            <p>Hare Krsna Movement Chennai | Daksina Dwaraka Dham, Thiruvanmiyur</p>
            <p>Affiliated to ISKCON Bangalore | Non-Profit Charitable Organisation Regn. No. 828, Chennai, 2008</p>
          </footer>

        </div>
      </article>

      <Footer />
    </main>
  );
}
