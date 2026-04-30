"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import "./styles.css";

const TEMPLE_SHORT = "ISKCON Thiruvanmiyur";
const TEMPLE_FULL =
  "ISKCON Thiruvanmiyur (Hare Krishna Movement Chennai — Affiliated to ISKCON Bangalore Regn. S-49/78-79)";
const PRABHUPADA_FULL =
  "His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupāda";

const socialLinks = [
  { icon: "🌍", label: "Website",          display: "hkmchennai.org",                   href: "https://hkmchennai.org/" },
  { icon: "📸", label: "Instagram",        display: "@hkm_chennai",                     href: "https://www.instagram.com/hkm_chennai" },
  { icon: "👍", label: "Facebook",         display: "Hare Krishna Movement Chennai",    href: "https://www.facebook.com/hkmcworld/" },
  { icon: "🐦", label: "Twitter / X",      display: "@ChennaiHare",                     href: "https://x.com/ChennaiHare" },
  { icon: "💼", label: "LinkedIn",         display: "HKM Chennai",                      href: "https://www.linkedin.com/company/hare-krishna-movement-chennai?originalSubdomain=in" },
  { icon: "📱", label: "WhatsApp",         display: "Join our WhatsApp Channel",        href: "https://www.whatsapp.com/channel/0029Vaa2fjKEVccFHx5YDt1O" },
  { icon: "🙏", label: "Support",          display: "Dakshina Dwaraka Dham Campaign",   href: "https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign" },
  { icon: "📍", label: "Google Maps",      display: "Click here for directions",        href: "https://maps.app.goo.gl/o2m98vJQHQjUHHDy6" },
];

const faqs = [
  {
    q: "Who was Śrī Jayānanda Prabhu?",
    a: "Śrī Jayānanda Prabhu (1939–1977), born James Kohr in Dayton, Ohio, was one of the earliest and most beloved disciples of Śrīla Prabhupāda in San Francisco. An engineering graduate who gave up material success to serve his spiritual master, he became temple president of the San Francisco ISKCON centre and is celebrated throughout the Vaiṣṇava world for his extraordinary humility, selfless service, and the glorious manner in which he departed this world."
  },
  {
    q: "What is Jayānanda Prabhu's disappearance day and why is it celebrated?",
    a: "Śrī Jayānanda Prabhu left his body on 1st May 1977 in Los Angeles. Śrīla Prabhupāda personally instructed, in a letter dated 11th May 1977, that Jayānanda Prabhu's disappearance day should be observed in all ISKCON temples as a festival — just as the disappearance days of other great Vaiṣṇavas are honoured. It is a day to remember his life of pure devotion and draw inspiration from his example."
  },
  {
    q: "What was Jayānanda Prabhu's role in Ratha Yātrā?",
    a: "Jayānanda Prabhu organised the first-ever ISKCON Ratha Yātrā festival outside India, held in San Francisco's Golden Gate Park in 1967. He personally designed, built, and arranged the Ratha carts with minimal resources, relying entirely on devotion and determination. He continued this service in New York and Los Angeles until his very last months, designing transportable carts even while battling leukaemia."
  },
  {
    q: "What did Śrīla Prabhupāda say about Jayānanda Prabhu's death?",
    a: "In his personal letter to Rāmeśvara Dāsa on 11th May 1977, Śrīla Prabhupāda wrote: \"Jayānanda's death is glorious... He has left his body very wonderfully, and he has been transferred to Vaikuṇṭha... I am very proud that I had such a nice disciple.\" This is one of the strongest personal endorsements Śrīla Prabhupāda ever gave to a disciple's spiritual standing."
  },
  {
    q: "How can I follow the example of Jayānanda Prabhu in daily life?",
    a: "Jayānanda Prabhu's life offers simple, practical inspiration for every devotee: rise early and chant your rounds without fail; serve whatever service is in front of you without looking for recognition; offer prasādam generously to all; never speak ill of other devotees; and, above all, keep the holy name at the centre of your life — in joy, in difficulty, and even at the very moment of death."
  }
];

export default function BlogClient() {
  return (
    <div className="bg-[#FFF9F0] min-h-screen selection:bg-[#c9973a] selection:text-white pb-20">
      <Navbar />

      <main className="gp-blog-wrap pt-28">
        {/* Breadcrumb */}
        <div className="mp-breadcrumb mb-6">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><span className="mx-2">/</span></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><span className="mx-2">/</span></li>
            <li aria-current="page">Śrī Jayānanda Prabhu Disappearance Day</li>
          </ol>
        </div>

        {/* Header */}
        <header className="gp-blog-header">
          <p className="gp-hero-label">Śrī Jayānanda Prabhu Disappearance Day</p>
          <h1 className="gp-blog-title">
            Śrī Jayānanda Prabhu <br />
            <span className="text-[clamp(1.5rem,3vw,2.5rem)] text-gray-700 font-normal">A Glorious Life, a Glorious Departure</span>
          </h1>
          <p className="gp-blog-subtitle mt-4 mb-6">
            Remembering a Life of Selfless Service and Pure Devotion, Disciple of His Divine Grace Vishwa Guru Srila Prabhupada.
          </p>
          <div className="gp-hero-line"></div>
          <p className="gp-blog-byline">
            By <strong>HKM Team</strong> • May 1, 2026
          </p>
          <div className="mp-hero-meta">
            <span>Disappearance Day Special</span>
            <span>•</span>
            <span>Articles</span>
          </div>
        </header>

        {/* Feature Image */}
        <div className="gp-image-container">
          <Image
            src="/assets/blog/jayananda-prabhu/Sri_Jayananda_Prabhu.png"
            alt="Śrī Jayānanda Prabhu"
            width={800}
            height={450}
            className="gp-image"
            priority
          />
        </div>

        <div className="gp-content">
          <h2 className="gp-sh" id="what-does-it-mean-to-die-gloriously">What Does It Mean to Die Gloriously?</h2>
          <p>
            Most of us fear death. We do not speak of it openly, do not wish to think about it, and when it draws close, we look away. And yet, the Vaiṣṇava tradition teaches that there is such a thing as a glorious death — a departure so saturated with devotion that even the spiritual master pauses, writes a personal letter across the world, and declares it to be a cause for celebration.
          </p>
          <p>
            That is exactly what happened on 1st May 1977, when Śrī Jayānanda Prabhu — an American engineer-turned-taxi-driver-turned-pure-devotee — quietly left his body in Los Angeles, holding a tape recorder tightly to his chest, listening to his beloved spiritual master chanting Hare Kṛṣṇa.
          </p>
          <p>
            His name was Jayānanda. It means "one who gives joy to all." And that is precisely what he did — for every soul fortunate enough to cross his path, from the bustling streets of San Francisco to the very end of his earthly journey.
          </p>

          <div className="gp-divider"></div>

          <h2 className="gp-sh" id="from-ohio-to-srila-prabhupada">From Ohio to the Feet of Śrīla Prabhupāda — The Journey of a Seeker</h2>
          <p>
            Born James Kohr in Dayton, Ohio, Jayānanda Prabhu held not one but two degrees — an engineering degree from Ohio State University and a teaching degree from San Francisco State College. By every external measure, he was a success. And yet, as he would later say himself, he was "never happy" before finding Kṛṣṇa consciousness.
          </p>
          <p>
            His depression was almost suicidal when, in 1967, he read a small article in a San Francisco paper about an Indian Swami who had come to the Bay Area to propagate the chanting of the names of God. Jayānanda Prabhu felt a "ray of hope" when he read that article. Thinking the Swami may have something to offer, he made up his mind to attend the lectures.
          </p>
          <p>
            That Indian Swami was none other than <strong>{PRABHUPADA_FULL}</strong> — the Founder-Ācārya of the International Society for Kṛṣṇa Consciousness (ISKCON). The moment Jayānanda Prabhu walked into that room, his eternal life began.
          </p>
          <p>
            This is not a romantic exaggeration. In the Bhagavad-Gītā As It Is (7.16), Śrīla Prabhupāda translates Lord Kṛṣṇa's words:
          </p>

          <div className="gp-verse">
            <div className="gp-verse-body">
              <p>
                "O best among the Bhāratas, four kinds of pious men begin to render devotional service unto Me — the distressed, the desirer of wealth, the inquisitive, and he who is searching for knowledge of the Absolute."
              </p>
              <cite>— Bhagavad-Gītā As It Is (7.16)</cite>
            </div>
          </div>

          <p>
            Jayānanda Prabhu was that last type — a sincere seeker, distressed by the emptiness of material life, searching for something real. And Kṛṣṇa, through His pure representative, found him.
          </p>
          <p className="text-sm italic text-[#7a5c3a] mt-2">
            (Source: "The Life of Jayānanda Prabhu," by Kalakantha Dāsa — published on krishna.com, the official digital platform of the Bhaktivedanta Book Trust)
          </p>

          <div className="gp-divider"></div>

          <h2 className="gp-sh" id="disciple-srila-prabhupada-loved">The Disciple Śrīla Prabhupāda Loved</h2>
          <p>
            From the very beginning, the bond between Śrīla Prabhupāda and Jayānanda Prabhu was extraordinary.
          </p>
          
          <div className="gp-image-container my-8">
            <Image
              src="/assets/blog/jayananda-prabhu/Jayananda_Prabhu_with_Srila_Prabhupada.png"
              alt="Śrī Jayānanda Prabhu with Śrīla Prabhupāda"
              width={800}
              height={450}
              className="gp-image"
            />
            <span className="gp-image-caption">Śrī Jayānanda Prabhu with His Divine Grace Śrīla Prabhupāda</span>
          </div>

          <p>
            Śrīla Prabhupāda was always fond of Jayānanda Prabhu and would sometimes invite his budding disciple to take prasādam with him in his room. "Śrīla Prabhupāda would cook prasādam and serve me," Jayānanda Prabhu recalled. "He didn't say anything — he just kept feeding me, and I kept eating."
          </p>
          <p>
            Prasādam — food offered to Lord Kṛṣṇa with love — is considered in the Vaiṣṇava tradition to be a direct channel of the Lord's mercy. To be served prasādam from Śrīla Prabhupāda's own hands was a blessing beyond measure, not just materially, but spiritually.
          </p>
          <p>
            Jayānanda Prabhu soon donated his entire life savings of $5,000 to Śrīla Prabhupāda to help print the Bhagavad-Gītā As It Is. From that point forward, he continued working as a taxi driver and contributed all his earnings to support the temple.
          </p>
          <p>
            At twenty-eight, he became the senior devotee in San Francisco, and soon the temple president. Mukunda Dāsa, who was there at the time, remembered Jayānanda Prabhu's rare qualities: <em>"He proved himself to be the most responsible and selfless person. You could never detect even the most subtle type of wish to satisfy his own personal needs. He had that very unique attribute — whatever needed to be done, he would do. He was driving his taxicab fifteen hours a day or more to get overtime to pay the temple's rent and various other expenses, and he was looking after fifteen or twenty new brahmacārīs."</em>
          </p>
          <p>
            Brahmacārīs are celibate students — young devotees who had just joined the movement, still learning, still growing. Jayānanda Prabhu looked after them all, even while working long hours to keep the temple financially alive.
          </p>
          <p className="text-sm italic text-[#7a5c3a] mt-2">
            (Source: "Condolences for Jayānanda Prabhu," Back to Godhead magazine, Vol. 12, No. 6, June 1977 — the official ISKCON publication, published immediately after his departure)
          </p>

          <div className="gp-bq">
            <p>
              "A successful life is one of Kṛṣṇa consciousness. While living he is engaged in Kṛṣṇa conscious business, and when dying he goes back home, back to Godhead."
            </p>
            <cite>— Śrīla Prabhupāda, personal letter to Jayānanda Prabhu, 26 February 1977</cite>
          </div>

          <div className="gp-divider"></div>

          <h2 className="gp-sh" id="man-who-brought-lord-jagannatha">The Man Who Brought Lord Jagannātha to the Western World</h2>
          <p>
            If you have ever seen a Ratha Yātrā — the magnificent festival of Lord Jagannātha's chariot rolling through city streets — you have witnessed something that Śrī Jayānanda Prabhu made possible for the entire Western world.
          </p>
          <p>
            Ratha Yātrā means the "chariot festival." Ratha means chariot, and yātrā means journey or procession. In this ancient festival, Lord Jagannātha — a form of Lord Kṛṣṇa who is the Lord of the Universe — comes out of the temple to bless all who behold Him, without distinction of caste, creed, or background.
          </p>

          <div className="gp-image-container my-8">
            <Image
              src="/assets/blog/jayananda-prabhu/Jayananda_Prabhu_building_Ratha_Yatra_Cart.png"
              alt="Śrī Jayānanda Prabhu building Ratha Yatra Cart"
              width={800}
              height={450}
              className="gp-image"
            />
            <span className="gp-image-caption">Śrī Jayānanda Prabhu actively building the Ratha Yātrā Chariot</span>
          </div>

          <p>
            Jayānanda Prabhu organised the construction of the cart for the first-ever ISKCON Ratha Yātrā festival, held in Golden Gate Park, San Francisco, in 1967 — the first such festival ever to be held outside India.
          </p>
          <p>
            He drove all around San Francisco collecting donations of fruits and flowers, found people to help decorate the cart, installed the sound system, and distributed posters in the shops. He had no budget, no blueprint, and no precedent. He had only devotion — and that was enough.
          </p>
          <p>
            Śrīla Prabhupāda was so pleased that he renamed the San Francisco temple "New Jagannātha Purī" in honour of the festival. And from that first chariot rolling down Frederick Street to the sea in 1967, Jayānanda Prabhu never stopped. From then until his passing ten years later, he spent several months of every year doing whatever was needed to make the festival a success — first in San Francisco, and later in New York and Los Angeles.
          </p>
          <p>
            During his final days, incapacitated as he was, he still helped design special Ratha carts that could be disassembled and transported from city to city — so that Lord Jagannātha could travel to even more devotees.
          </p>
          <p>
            He was on his deathbed. He was designing chariots.
          </p>
          <p className="text-sm italic text-[#7a5c3a] mt-2">
            (Source: Berkeley Art and Interreligious Pilgrimage Project, Graduate Theological Union; "Condolences for Jayānanda Prabhu," Back to Godhead magazine, June 1977)
          </p>

          <div className="gp-divider"></div>

          <h2 className="gp-sh" id="qualities-of-a-true-vaisnava">How He Lived — The Qualities of a True Vaiṣṇava</h2>
          <p>
            A Vaiṣṇava is a devotee of Lord Viṣṇu, or Kṛṣṇa — one who has surrendered fully to the Lord's service. In the Nectar of Instruction (Text 5), Śrīla Prabhupāda explains six loving exchanges between Vaiṣṇavas, including prasāda-sevā — honouring the Lord's food with reverence. Jayānanda Prabhu lived every one of these principles naturally.
          </p>
          <p>
            He would rise every morning before four, attend maṅgala-āratī, chant all his rounds of japa, read, and cook prasādam — never once deviating. He was, as those around him remembered, "completely happy as long as he was practising Kṛṣṇa consciousness."
          </p>
          <p>
            Japa is the meditative chanting of the Hare Kṛṣṇa mahā-mantra on prayer beads. Maṅgala-āratī is the early morning ceremony of greeting the Deities — the sacred forms of the Lord — with lamps, flowers, and song. Beginning the day in this way is the foundation of sādhana-bhakti, or regulated devotional practice.
          </p>
          <p>
            During his early years in Kṛṣṇa consciousness, senior devotees would often describe Jayānanda Prabhu as "the most advanced devotee in the movement." Though respected by all, he was always humble and unassuming. His obvious discomfort at hearing criticism of other devotees was one characteristic that stuck in the memory of all who knew him — if someone began speaking unfavourably about another devotee, Jayānanda Prabhu would quietly change the subject, or simply leave to do some service.
          </p>
          <p>
            He was a cook, janitor, fundraiser, taxi driver, temple president, chariot builder, book distributor, incense salesman, and street kīrtana leader — whatever was needed, he did.
          </p>
          <p>
            This is sevā — selfless service — in its purest expression. Not service when convenient. Not service when recognised. Service as the very breath of his existence.
          </p>
          <p className="text-sm italic text-[#7a5c3a] mt-2">
            (Source: "Remembering a Friend and an Inspiration," Back to Godhead magazine, May/June 2017)
          </p>

          <div className="gp-bq">
            <p>
              "When I leave my body, I want very much to come back to continue serving Śrīla Prabhupāda in this world."
            </p>
            <cite>— Śrī Jayānanda Prabhu, in his final days (Recorded in Back to Godhead magazine, June 1977)</cite>
          </div>

          <div className="gp-divider"></div>

          <h2 className="gp-sh" id="his-last-gift">His Last Gift — Medicine Money Offered at the Guru's Feet</h2>
          <p>
            There is one detail about Śrī Jayānanda Prabhu's life that, more than any other, reveals the depths of his surrender.
          </p>
          <p>
            In his very last letter to Śrīla Prabhupāda, Jayānanda Prabhu enclosed a gift of $5,000 — money that had been set aside specifically for his own medical expenses. He was dying of leukaemia. He had little time left. And his final act of correspondence to his spiritual master was to send away the very funds meant to ease his own suffering.
          </p>
          <p>
            He was so anxious to serve Śrīla Prabhupāda that he even gave up the desire to return to the spiritual world. "When I leave my body," he said near the end, "I want very much to come back to continue serving Śrīla Prabhupāda in this world."
          </p>
          <p>
            This is the sentiment of an utterly pure devotee — one who does not even desire liberation or Vaikuṇṭha, but only more sevā, more service to the mission of his spiritual master. In the Bhagavad-Gītā As It Is (18.54), Śrīla Prabhupāda translates:
          </p>

          <div className="gp-verse">
            <div className="gp-verse-body">
              <p>
                "One who is thus transcendentally situated at once realises the Supreme Brahman and becomes fully joyful. He never laments or desires to have anything. He is equally disposed toward every living entity. In that state he attains pure devotional service unto Me."
              </p>
              <cite>— Bhagavad-Gītā As It Is (18.54)</cite>
            </div>
          </div>

          <p>
            That state — free from personal desire, equally loving to all, absorbed in pure devotional service — was the state Jayānanda Prabhu lived in, every single day, right until the very end.
          </p>
          <p className="text-sm italic text-[#7a5c3a] mt-2">
            (Source: "Condolences for Jayānanda Prabhu," Back to Godhead magazine, June 1977)
          </p>

          <div className="gp-divider"></div>

          <h2 className="gp-sh" id="the-final-departure">The Final Departure — A Death That Silenced All Doubt</h2>
          <p>
            For the last few months, Jayānanda Prabhu's body had been ravaged by leukaemia. Eventually, he abandoned all attempts at recovery and moved to the Los Angeles temple — New Dvārakā — to immerse himself in the pure association of Lord Kṛṣṇa's Deity and His devotees.
          </p>
          <p>
            Even during his time in hospital, rather than dwelling on his own suffering, he used every opportunity to preach about Kṛṣṇa consciousness to doctors, nurses, and patients around him.
          </p>
          <p>
            On his last day, the pain increased to the point where he could no longer even chant the holy name. Moaning in great pain, he expressed the uselessness of maintaining his diseased body any longer. At the very end, he hugged his tape recorder tightly, listening to his spiritual master's chanting of Hare Kṛṣṇa — and left his body.
          </p>
          <p>
            He departed on 1st May 1977 — four days after his thirty-eighth birthday, and just one day before the festival celebrating the appearance of Lord Nṛsiṁhadeva.
          </p>

          <div className="gp-verse">
            <div className="gp-verse-body">
              <p>
                "Whoever, at the time of death, gives up the body while remembering the Supreme Lord will attain to His nature; of this there is no doubt."
              </p>
              <cite>— Śrīmad-Bhāgavatam (2.1.6)</cite>
            </div>
          </div>

          <p>
            Jayānanda Prabhu Prabhu did not just remember the Lord at the time of death. He had remembered Him, served Him, and lived for Him every single day of the ten years from 1967 to 1977. The mahā-mantra on his tape recorder was the final sound his ears carried him out of this world on.
          </p>
          <p className="text-sm italic text-[#7a5c3a] mt-2">
            (Source: Śrīla Prabhupāda Līlā — the authenticated diary of Śrīla Prabhupāda's personal secretary, recording the events surrounding Jayānanda Prabhu's departure)
          </p>

          <div className="gp-divider"></div>

          <h2 className="gp-sh" id="what-srila-prabhupada-said">What Śrīla Prabhupāda Said — Words That Settle Every Question</h2>
          <p>
            Śrīla Prabhupāda's personal letters to and about Jayānanda Prabhu are among the most moving documents in ISKCON's history. They are also the most authoritative testimony we have.
          </p>
          <p>
            On 26th February 1977, writing to Jayānanda Prabhu as his disciple faced his final months, Śrīla Prabhupāda wrote:
          </p>

          <div className="gp-bq">
            <p>
              "This body is today or tomorrow finished. We should not be very much bothered about the body. Trees also live for thousands of years, but that does not mean a successful life. A successful life is one of Kṛṣṇa consciousness. By the grace of Kṛṣṇa, from the very beginning you are a devotee, and that is the real profit of your life. About a sādhu it is said, jīva vā māra vā — a sādhu may live or die, it doesn't matter. While living he is engaged in Kṛṣṇa conscious business, and when dying he goes back home, back to Godhead."
            </p>
            <cite>— Śrīla Prabhupāda, Personal Letter to Jayānanda Dāsa, 26 February 1977</cite>
          </div>

          <p>
            Four days after Jayānanda Prabhu's departure, writing from Mumbai on 5th May 1977, Śrīla Prabhupāda wrote:
          </p>

          <div className="gp-bq">
            <p>
              "I am feeling very intensely your separation. In 1967 you joined me in San Francisco. You were driving my car and chanting Hare Kṛṣṇa. You were the first man to give me some contribution ($5,000) for printing my Bhagavad-gītā."
            </p>
            <cite>— Śrīla Prabhupāda, Personal Letter to Jayānanda Dāsa, 5 May 1977</cite>
          </div>

          <p>
            And then, in his letter to Rāmeśvara Dāsa on 11th May 1977 — the declaration that every devotee should carry always:
          </p>

          <div className="gp-bq">
            <p>
              "Jayānanda's death is glorious. It is very good that he had stated, 'What is the use of such a useless body? Better to give it up.' He has left his body very wonderfully, and he has been transferred to Vaikuṇṭha. I have already sent a condolence letter for publication in Back to Godhead. Everyone should follow the example of Jayānanda. I am very proud that I had such a nice disciple. If possible, Jayānanda's picture should be hung in the ratha of Lord Jagannātha, and in all of our temples a day may be set aside for holding a festival in his honour, just as we do on the disappearance day of the other great Vaiṣṇavas."
            </p>
            <cite>— Śrīla Prabhupāda, Personal Letter to Rāmeśvara Dāsa, 11 May 1977</cite>
          </div>

          <p>
            These are not words of ordinary condolence. These are the words of a pure devotee certifying the spiritual destination of his disciple — and instructing the entire ISKCON world to honour that destination every year.
          </p>
          <p className="text-sm italic text-[#7a5c3a] mt-2">
            (Source: All three letters authenticated and published in Back to Godhead magazine, June 1977, and in the ISKCON Letters Archive)
          </p>

          <div className="gp-divider"></div>

          <h2 className="gp-sh" id="conclusion">Conclusion — The Life That Teaches Us Everything</h2>
          <p>
            Śrī Jayānanda  Prabhu gave his savings not once but twice to his spiritual master's mission. He built Lord Jagannātha's chariot from nothing, year after year after year. He chanted on street corners, cooked mountains of prasādam, drove taxis, cleaned floors, and then — in his final, most beautiful moment — held a tape recorder to his heart as Śrīla Prabhupāda's voice chanted the mahā-mantra, and left this world.
          </p>
          <p>
            His spiritual master said it plainly and with great love: his death is glorious.
          </p>
          <p>
            For those of us who have not yet reached that standard — and most of us have not — his life remains the most gentle, practical, and joyful guide. We do not need to be extraordinary. We need only to be sincere. We need only to chant, to serve, to love — as Śrī Jayānanda Prabhu did, every single day.
          </p>

          <div className="gp-verse">
            <div className="gp-verse-body">
              <p>
                "He reasons ill who says that Vaiṣṇavas die, when thou art living still in sound! The Vaiṣṇavas die to live, and living try, to spread the holy name around."
              </p>
              <cite>— Śrīla Bhaktivinoda Ṭhākura</cite>
            </div>
          </div>

          <p>
            Jayānanda Prabhu is living still — in every Ratha Yātrā cart that rolls through any street in any city in the world. May we all receive a drop of his mercy.
          </p>
          <p className="text-center font-bold text-xl mt-6 text-[#b8600a] font-serif">
            Śrī Jayānanda Prabhu kī jaya!
          </p>

          <div className="gp-divider"></div>

          {/* FAQ Section */}
          <h2 className="gp-sh" id="faq">Frequently Asked Questions — Śrī Jayānanda Prabhu</h2>
          <div className="gp-faq-grid mb-12">
            {faqs.map((faq, index) => (
              <div key={index} className="gp-faq-item">
                <h3 className="gp-faq-q">{faq.q}</h3>
                <p className="gp-faq-a">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="gp-divider"></div>

          {/* Connect Section */}
          <div className="gp-connect-section">
            <h2 className="gp-connect-h">🌿 Connect With Us</h2>
            <p className="gp-connect-desc">
              We would love to welcome you to our growing community of seekers. Reach us through any of the platforms below or visit us in person.
            </p>
            <div className="gp-social-grid mb-8">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="gp-social-card">
                  <span className="gp-s-icon">{link.icon}</span>
                  <span className="gp-s-text">
                    <span className="gp-s-label">{link.label}</span>
                    <span className="gp-s-url">{link.display}</span>
                  </span>
                  <span className="gp-s-arrow">→</span>
                </a>
              ))}
            </div>
            <div className="text-center text-[#7a5c3a] italic mt-6">
              <p>{TEMPLE_FULL}</p>
              <a href="https://maps.app.goo.gl/o2m98vJQHQjUHHDy6" target="_blank" rel="noopener noreferrer" className="text-[#c9973a] font-bold not-italic hover:underline mt-2 inline-block">
                🗺️ Open in Google Maps →
              </a>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
