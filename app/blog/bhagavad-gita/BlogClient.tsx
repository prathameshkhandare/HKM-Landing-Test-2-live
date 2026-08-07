"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import "./styles.css";

// ── DATA ─────────────────────────────────────────────────────────────────────

const TEMPLE_SHORT = "ISKCON Thiruvanmiyur";
const TEMPLE_FULL =
  "ISKCON Thiruvanmiyur (Hare Krishna Movement Chennai — Affiliated to ISKCON Bangalore Regn. S-49/78-79)";

const socialLinks = [
  {
    icon: "🌍",
    label: "Website",
    display: "hkmchennai.org",
    href: "https://hkmchennai.org/",
  },
  {
    icon: "📸",
    label: "Instagram",
    display: "@hkm_chennai",
    href: "https://www.instagram.com/hkm_chennai",
  },
  {
    icon: "👍",
    label: "Facebook",
    display: "Hare Krishna Movement Chennai",
    href: "https://www.facebook.com/hkmcworld/",
  },
  {
    icon: "🐦",
    label: "Twitter / X",
    display: "@ChennaiHare",
    href: "https://x.com/ChennaiHare",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    display: "Srila Prabhupada's ISKCON Thiruvanmiyur",
    href: "https://www.linkedin.com/company/hare-krishna-movement-chennai?originalSubdomain=in",
  },
  {
    icon: "📲",
    label: "WhatsApp Channel",
    display: "Join our WhatsApp Channel",
    href: "https://www.whatsapp.com/channel/0029Vaa2fjKEVccFHx5YDt1O",
  },
  {
    icon: "🙏",
    label: "Support Our Temple",
    display: "Dakshina Dwaraka Dham Campaign",
    href: "https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign",
  },
  {
    icon: "📍",
    label: "Google Maps",
    display: "Click here for directions",
    href: "https://maps.app.goo.gl/o2m98vJQHQjUHHDy6",
  },
];

const faqs = [
  {
    q: "What is the main teaching of the Bhagavad Gita?",
    a: "The central teaching is that we are not the material body but eternal spirit souls. Our ultimate perfection lies in reviving our lost relationship with the Supreme Personality of Godhead, Krsna, through the process of bhakti, or devotional service.",
  },
  {
    q: "Are there any Bhagavad Gita classes near me in Chennai?",
    a: `Yes — ${TEMPLE_SHORT} conducts Gita class courses every Sunday morning at 10:00 AM. All are welcome regardless of background or experience.`,
  },
  {
    q: "How can I apply the Gita to my busy modern life?",
    a: "The Gita teaches us to transform our work into worship. By performing our duties as a service to the Divine and offering the results of our labor, we can stay spiritually connected even in the most demanding environments.",
  },
  {
    q: "Where can I get an authentic copy of the Bhagavad Gita?",
    a: `You can visit our temple at ${TEMPLE_SHORT} to get a copy of Bhagavad-gita As It Is by Srila Prabhupada. This edition provides the original Sanskrit, word-for-word meanings, and purports that make the message self-evident and easy to apply in daily life.`,
  },
];

// ── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function SanskritVerse({ lines, translation, citation }: { lines: string[], translation: string, citation: string }) {
  return (
    <div className="verse-block">
      <div className="sanskrit-lines">
        {lines.map((l, i) => (
          <p key={i} className="sanskrit-line">
            {l}
          </p>
        ))}
      </div>
      <blockquote className="verse-translation">
        <p>
          {translation} <span className="citation">({citation})</span>
        </p>
      </blockquote>
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="pull-quote">
      <span className="pull-quote-mark">&ldquo;</span>
      <p>{children}</p>
      <span className="pull-quote-mark pull-quote-mark--right">&rdquo;</span>
    </div>
  );
}

function TempleNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="temple-note">
      <span className="temple-note-icon">📍</span>
      <p>{children}</p>
    </div>
  );
}

function Lesson({ number, title, children }: { number: string, title: string, children: React.ReactNode }) {
  return (
    <section className="lesson">
      <div className="lesson-number">
        <span>{number}</span>
      </div>
      <h2 className="lesson-title">{title}</h2>
      {children}
    </section>
  );
}

function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <span>✦</span>
    </div>
  );
}

// ── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function BhagavadGitaBlogPage() {
  return (
    <main className="min-h-screen bg-[#FDFAF3] selection:bg-[#E8650A] selection:text-white">
      <Navbar />
      <article className="blog-page">

        {/* ── HERO ── */}
        <header className="hero">
          <p className="hero-temple">🛕 {TEMPLE_SHORT}</p>
          <p className="hero-temple-full">{TEMPLE_FULL}</p>
          <div className="hero-divider" />
          <h1 className="hero-title">
            Bhagavad-Gita Teachings:<br />
            <span>5 Life Lessons from Lord Krsna</span>
          </h1>
          <p className="hero-subtitle">for Daily Life</p>
          <div className="hero-divider" />
          <p className="hero-byline">
            Based on the teachings of{" "}
            <strong>His Divine Grace A.C. Bhaktivedanta Swami Prabhupada</strong>
            <br />
            Founder-Acarya of the International Society for Krishna Consciousness (ISKCON)
          </p>
        </header>

        {/* ── BODY ── */}
        <div className="article-body">

          {/* Introduction */}
          <section className="intro">
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10 shadow-2xl border-4 border-[#e8b830]/20">
               <Image src="/assets/lessons-from-gita-image-2.png" alt="Bhagavad Gita Wisdom" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <p>
              Everywhere we look, we see people working very hard. In the great bustling
              cities of the world, we are running here and there, from early morning until
              late at night. Why? If we ask, we are told it is for &ldquo;happiness.&rdquo; But if we
              look into the eyes of modern society, we see they are full of anxiety, full of
              a deep restlessness that no amount of money or material comfort can seem to
              quiet. We are building skyscraper buildings and flying to the moon, but we
              cannot sit peacefully in our own homes.
            </p>
            <p>
              Consider the great warrior Arjuna. Five thousand years ago, on the Battlefield
              of Kuruksetra, he was the most celebrated hero of his time. He was strong,
              famous, and highly educated. Yet, at the most critical moment of his life, he
              collapsed. His hands trembled, his bow slipped from his grip, and he sat down
              in his chariot, refusing to act. He was overwhelmed by a &ldquo;burnout&rdquo; so severe
              that he simply could not go on.
            </p>
            <p>
              Does this sound familiar? We may have a high-salaried position, a beautiful
              home, and a respected family, but when the &ldquo;battle&rdquo; of life becomes too
              heavy — when a crisis hits or we feel the crushing weight of expectation — we
              feel empty and paralyzed. We are searching for peace, but like a traveler in a
              desert chasing a mirage, we find only dry sand. This is where the
              Bhagavad-gita begins. It is not a book of old stories; it is the science of
              the soul. If we follow these five lessons from Lord Krsna, our lives will be
              successful.
            </p>
          </section>

          <Divider />

          {/* ── LESSON 1 ── */}
          <Lesson number="1" title="Why Do We Feel Restless Even After Getting What We Wanted?">
            <p>
              The beginning of spiritual education is to understand that we are not these
              bodies. This is not a matter of &ldquo;belief&rdquo; or &ldquo;religion&rdquo;; it is a scientific
              fact of our existence. Krsna tells Arjuna:
            </p>
            <SanskritVerse
              lines={[
                "dehino 'smin yathā dehe",
                "kaumāraṁ yauvanaṁ jarā",
                "tathā dehāntara-prāptir",
                "dhīras tatra na muhyati",
              ]}
              translation="As the embodied soul continuously passes, in this body, from boyhood to youth to old age, the soul similarly passes into another body at death. A sober person is not bewildered by such a change."
              citation="BG 2.13"
            />
            <p className="practical-label">The Practical Solution</p>
            <p>
              Suppose we are driving a car. If the car breaks down, do we cry as if we are
              broken? No, we understand we are the driver, distinct from the machine.
              Similarly, this body is just a machine (yantra). In our modern civilization, we
              have many universities to study the &ldquo;car,&rdquo; but where is the university to
              study the &ldquo;driver&rdquo;?
            </p>
            <PullQuote>
              We are so busy washing the car — the outward dress of the body — that we have
              forgotten to feed the driver, the spirit soul. This is the root of our
              restlessness.
            </PullQuote>
            <p>
              We spend all our time decorating a &ldquo;dead body&rdquo; while letting the soul
              starve. This is why we feel restless. We identify as a &ldquo;manager,&rdquo; a
              &ldquo;father,&rdquo; &ldquo;young,&rdquo; or &ldquo;old.&rdquo; These are temporary stage-parts. We are
              spirit soul, aham brahmasmi. When we understand that we are eternal, the small
              problems of this material world — the business loss, the family quarrel, the
              health trouble — cannot touch our inner peace. We become dhira — sober and
              undisturbed.
            </p>
            <TempleNote>
              Spiritual Note: We invite you to experience this peace practically by joining
              our morning Srimad-Bhagavatam class every day at 8:00 AM at {TEMPLE_SHORT},
              Chennai.
            </TempleNote>
          </Lesson>

          <Divider />

          {/* ── LESSON 2 ── */}
          <Lesson number="2" title="How to Work Without Stress: The Secret of Karma-Yoga">
            <p>
              Many people think that spiritual life means &ldquo;retirement&rdquo; — giving up work
              and going to a forest to be quiet. This is a great mistake. Krsna did not
              tell Arjuna to go to the mountains; He told him to stay and fight. But He gave
              him a new consciousness for his work.
            </p>
            <SanskritVerse
              lines={[
                "karmaṇy evādhikāras te mā phaleṣu kadācana",
                "mā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi",
              ]}
              translation="You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty."
              citation="BG 2.47"
            />
            <p className="practical-label">The Practical Solution</p>
            <p>
              Consider a manager in a large firm. He works very hard to produce results, but
              he knows the profit belongs to the proprietor. He is not crushed by a loss nor
              puffed up by a gain, because he is simply doing his duty for the boss.
            </p>
            <p>
              Now, we must ask: who is the proprietor of this world? Krsna says He is the
              Supreme Proprietor (sarva-loka-mahesvaram). When we work for our own &ldquo;sense
              gratification,&rdquo; we become tied to the results. If we succeed, we become
              proud; if we fail, we become depressed. This is the source of all workplace
              stress.
            </p>
            <p>
              But if we &ldquo;dovetail&rdquo; our energy and work as an offering to the Supreme, we
              are freed from the law of karma. Whether we are a doctor, a student, or a
              laborer, if we do our work as a service, the burden of the result is on the
              Lord. We work with full energy, but our hearts remain light.
            </p>
            <PullQuote>
              Everything in this world belongs to the Supreme Lord. If we use things for our
              own pleasure, we are thieves. If we use them for His service, we are liberated.
            </PullQuote>
          </Lesson>

          <Divider />

          {/* ── LESSON 3 ── */}
          <Lesson number="3" title="Why Is Our Mind Like a Puppet? (Navigating the Modes of Nature)">
            <p>
              Why is it that on some days we feel inspired and kind, while on other days we
              are driven by sudden anger or lethargy? Krsna explains that we are all being
              pulled by the &ldquo;three modes of material nature&rdquo;: Goodness (sattva), Passion
              (rajas), and Ignorance (tamas).
            </p>
            <SanskritVerse
              lines={[
                "prakṛteḥ kriyamāṇāni",
                "guṇaiḥ karmāṇi sarvaśaḥ",
                "ahaṅkāra-vimūḍhātmā",
                "kartāham iti manyate",
              ]}
              translation="The spirit soul bewildered by the influence of false ego believes himself the doer of activities that are in actuality carried out by the three modes of material nature."
              citation="BG 3.27"
            />
            <p className="practical-label">The Practical Solution</p>
            <p>
              Look at the average person today. He wakes up already anxious, checks his phone
              immediately, rushes through breakfast, battles traffic, fights deadlines, comes
              home exhausted, and scrolls through screens until he falls asleep — only to
              repeat the same cycle tomorrow. This is the &ldquo;mode of passion&rdquo; (rajas) in
              full force — constant competition, restless desire, and intense labor for
              temporary things. The result is not satisfaction; it is only deeper exhaustion
              and frustration.
            </p>
            <p>
              To find peace, we must first rise to the &ldquo;mode of goodness&rdquo; (sattva-guna).
              Think of it like this: if we want to be healthy, we cannot eat whatever we
              like; we must follow a diet. Similarly, if we want a clear mind, we must follow
              a regulated life — one of cleanliness, truthfulness, and compassion.
            </p>
            <p>
              When we adopt this lifestyle, the &ldquo;dust&rdquo; on our consciousness begins to
              clear. We are no longer puppets of our impulses; we become masters of our own
              happiness. And from goodness, Krsna consciousness lifts us further — to the
              transcendental platform (visuddha-sattva) — where we are completely free.
            </p>
            <TempleNote>
              Practical Tip: Come and relish Krsna Prasadam at {TEMPLE_SHORT}. Food offered
              to the Lord with love and devotion is no ordinary food — it purifies the heart,
              elevates the consciousness, and naturally situates us in the mode of goodness.
              Taste it once, and you will understand what no philosophy book can fully
              explain.
            </TempleNote>
          </Lesson>

          <Divider />

          {/* ── LESSON 4 ── */}
          <Lesson number="4" title='The "Peace Formula" for a Chaotic World'>
            <p>
              We see so many &ldquo;Peace Conferences&rdquo; in the world today, yet there is no
              peace. Why? Because people are fighting over property that does not belong to
              them. If two people fight over a house that belongs to the government, they
              will never find a solution until they recognize the true owner.
            </p>
            <SanskritVerse
              lines={[
                "bhoktāraṁ yajña-tapasāṁ",
                "sarva-loka-maheśvaram",
                "suhṛdaṁ sarva-bhūtānāṁ",
                "jñātvā māṁ śāntim ṛcchati",
              ]}
              translation="A person in full consciousness of Me, knowing Me to be the ultimate beneficiary of all sacrifices and austerities, the Supreme Lord of all planets and demigods, and the benefactor and well-wisher of all living entities, attains peace from the pangs of material miseries."
              citation="BG 5.29"
            />
            <p className="practical-label">The Practical Solution</p>
            <p>
              Imagine a finger trying to enjoy a delicious fruit by itself. It cannot. The
              finger can only be happy by giving the fruit to the stomach. When the stomach
              is satisfied, the whole body — including the finger — is nourished.
            </p>
            <p>
              Similarly, Krsna is the &ldquo;stomach&rdquo; of the universe. He is our best friend
              (suhrdam). When we understand that He is the owner and the enjoyer, the
              &ldquo;struggle for existence&rdquo; ends. We don&rsquo;t need to fight for our share; we
              realize the Supreme Father has provided enough for everyone&rsquo;s need — but not
              for everyone&rsquo;s greed. When we serve the center, we are naturally satisfied.
              This is the only formula for lasting peace.
            </p>
            <PullQuote>
              Real peace comes from knowing three things: God is the Enjoyer, God is the
              Owner, and God is your Best Friend.
            </PullQuote>
          </Lesson>

          <Divider />

          {/* ── LESSON 5 ── */}
          <Lesson number="5" title="The Easiest Way to Perfection: The Power of Sound">
            <p>
              In this modern age, it is very difficult to sit in silent meditation for hours.
              Our minds are too restless, and our schedules are too full. Therefore, the Gita
              and the Vedas provide a special &ldquo;shortcut&rdquo; for our times.
            </p>
            <SanskritVerse
              lines={[
                "man-manā bhava mad-bhakto",
                "mad-yājī māṁ namaskuru",
                "mām evaiṣyasi satyaṁ te",
                "pratijāne priyo 'si me",
              ]}
              translation="Always think of Me, become My devotee, worship Me and offer your homage unto Me. Thus you will come to Me without fail. I promise you this because you are My very dear friend."
              citation="BG 18.65"
            />
            <p className="practical-label">The Practical Solution</p>
            <p>
              &ldquo;Always think of Me.&rdquo; This sounds impossible, but it is made effortless
              through sound. By chanting the Holy Names —
            </p>
            <div className="mahamantra">
              <p>Hare Krsna, Hare Krsna, Krsna Krsna, Hare Hare</p>
              <p>Hare Rama, Hare Rama, Rama Rama, Hare Hare</p>
            </div>
            <p>
              — we are immediately in connection with the Supreme. There is no tax for this.
              There is no loss. We can chant while driving, while cooking, or while walking.
            </p>
            <p>
              This chanting is like a &ldquo;medicine&rdquo; for the heart (ceto-darpana-marjanam).
              It cleans the mirror of our consciousness. As we chant, the heavy weight of
              anxiety begins to lift, and we feel a natural, ecstatic joy that is independent
              of our material circumstances.
            </p>
            <PullQuote>
              Chanting is not a sectarian ritual. It is the process of cleaning the dust from
              the mirror of the heart — so we can finally see our true self.
            </PullQuote>
          </Lesson>

          <Divider />

          {/* ── HOW TO START ── */}
          <div className="how-to-start">
            <h2>How to Start Your Journey Today</h2>
            <p style={{ marginBottom: "1.25rem" }}>
              We do not need to change our job or our family situation. We simply need to add
              a few spiritual habits to our daily routine:
            </p>
            <div className="start-items">
              <div className="start-item">
                <div className="start-icon">🎵</div>
                <p>
                  <strong>Chant:</strong> Spend 10 minutes every morning chanting the Hare
                  Krsna maha-mantra. It is the best &ldquo;inner cleansing&rdquo; we can do.
                </p>
              </div>
              <div className="start-item">
                <div className="start-icon">📖</div>
                <p>
                  <strong>Read:</strong> Read just one verse of{" "}
                  <em>Bhagavad-gita As It Is</em> daily. It is the manual for human life.
                </p>
              </div>
              <div className="start-item">
                <div className="start-icon">🛕</div>
                <p>
                  <strong>Visit:</strong> We invite you to join us at {TEMPLE_SHORT},
                  Chennai. Our program starts every morning at 4:30 AM with the
                  Mangala-arati ceremony. Experience the bliss, the peace, and the purpose
                  that we have all been looking for.
                </p>
              </div>
            </div>
          </div>

          <Divider />

          {/* ── CONCLUSION ── */}
          <section className="conclusion">
            <h2>Conclusion: Your Life is a Mission</h2>
            <p>
              Human life is a rare and precious asset. Out of 8,400,000 species of life,
              only in this human form can we ask the most important questions: &ldquo;Who am
              I? Why am I suffering? How can I find real, lasting love and peace?&rdquo; We must
              not waste this extraordinary opportunity by living like polished animals —
              simply eating, sleeping, mating, and defending. That kind of life, however
              comfortable, leads only to the same destination: repeated birth, old age,
              disease, and death.
            </p>
            <p>
              The Bhagavad-gita offers us a way out. It is not a book for a particular
              nation, religion, or century. It is the perfect map for every human soul on
              the journey &ldquo;Back to Godhead.&rdquo;
            </p>
            <p>
              We invite you to take that first step with us. At {TEMPLE_SHORT}, Chennai,
              every morning at 4:30 AM, this journey begins together — with music, with
              prayer, and with the warm company of sincere seekers. You are welcome here,
              exactly as you are. Come and experience the bliss and the purpose that we have
              all been searching for.
            </p>
            <p className="hare-krishna">Hare Krsna! 🙏</p>
          </section>

          <div className="share-line">
            If this article has been helpful to you, please share it with someone who is
            searching for answers. Sharing this knowledge is itself a form of seva — a
            service to the Lord and to humanity.
          </div>

          <Divider />

          {/* ── FAQ ── */}
          <section className="faq">
            <h2>Frequently Asked Questions</h2>
            {faqs.map((f, i) => (
              <div key={i} className="faq-item">
                <p className="faq-q">Q: {f.q}</p>
                <p className="faq-a">A: {f.a}</p>
              </div>
            ))}
          </section>

          <Divider />

          {/* ── CONNECT ── */}
          <section className="connect-section">
            <h2>🌿 Connect With Us</h2>
            <p className="connect-sub">
              We would love to welcome you to our growing community of seekers. Reach us
              through any of the platforms below or visit us in person.
            </p>
            <div className="connect-grid">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="connect-item"
                >
                  <span className="connect-emoji">{s.icon}</span>
                  <span className="connect-info">
                    <span className="connect-label">{s.label}</span>
                    <span className="connect-url">{s.display}</span>
                  </span>
                </a>
              ))}
            </div>
            <p className="connect-address">
              📍 {TEMPLE_FULL}
              <br />
              <a
                href="https://maps.app.goo.gl/o2m98vJQHQjUHHDy6"
                target="_blank"
                rel="noopener noreferrer"
              >
                🗺️ Open in Google Maps →
              </a>
            </p>
          </section>

        </div>
      </article>
      <Footer />
    </main>
  );
}
