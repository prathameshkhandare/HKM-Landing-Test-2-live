"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import "./styles.css";

const TEMPLE_SHORT = "ISKCON Thiruvanmiyur";
const TEMPLE_FULL =
  "ISKCON Thiruvanmiyur (Hare Krishna Movement Chennai — Affiliated to ISKCON Bangalore Regn. S-49/78-79)";

const socialLinks = [
  { icon: "🌍", label: "Website",       display: "hkmchennai.org",                   href: "https://hkmchennai.org/" },
  { icon: "📸", label: "Instagram",     display: "@hkm_chennai",                     href: "https://www.instagram.com/hkm_chennai" },
  { icon: "👍", label: "Facebook",      display: "Hare Krishna Movement Chennai",    href: "https://www.facebook.com/hkmcworld/" },
  { icon: "🐦", label: "Twitter / X",   display: "@ChennaiHare",                     href: "https://x.com/ChennaiHare" },
  { icon: "💼", label: "LinkedIn",      display: "Srila Prabhupada's ISKCON Thiruvanmiyur",                      href: "https://www.linkedin.com/company/hare-krishna-movement-chennai?originalSubdomain=in" },
  { icon: "📱", label: "WhatsApp",      display: "Join our WhatsApp Channel",        href: "https://www.whatsapp.com/channel/0029Vaa2fjKEVccFHx5YDt1O" },
  { icon: "🙏", label: "Support",       display: "Dakshina Dwaraka Dham Campaign",   href: "https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign" },
  { icon: "📍", label: "Google Maps",   display: "Click here for directions",        href: "https://maps.app.goo.gl/o2m98vJQHQjUHHDy6" },
];

const faqs = [
  {
    q: "Who was Sri Madhavendra Puri and why is he important in the Gaudiya Vaisnava tradition?",
    a: "Sri Madhavendra Puri was a great Vaisnava sannyasi in the Madhva-sampradaya, initiated by Sri Laksmipati Tirtha. Krsnadasa Kaviraja Gosvami calls him 'the spiritual master of the entire world' (Cc. Antya 8.33). He was the first person in that disciplic succession to exhibit the symptoms of love of Godhead, and he planted the seed of pure devotion that Lord Caitanya Mahaprabhu later distributed to the entire world. Without him there is no Isvara Puri; without Isvara Puri there is no Lord Caitanya's movement of sankirtana.",
  },
  {
    q: "What is the significance of the Gopala Deity at Govardhana and Madhavendra Puri's connection to Him?",
    a: "The Gopala Deity at Govardhana Hill was originally installed by Vajra, the great-grandson of Lord Krsna, but was hidden in the jungle when Muslim invaders attacked. Lord Krsna personally appeared to Madhavendra Puri in a dream, revealed the Deity's location, and said: 'For many days I have been observing you, wondering when will Madhavendra Puri come here to serve Me?' Madhavendra Puri organised the installation, the Annakuta festival, and established the full Deity worship standard still followed in ISKCON temples today. This original Gopala Deity is now worshipped at Nathdvara, Rajasthan, and is known as Sri Nathaji.",
  },
  {
    q: "Why is the Deity at Remuna called Ksira-cora Gopinatha?",
    a: "Ksira-cora means 'the one who stole the sweet rice.' When Madhavendra Puri stopped at Remuna en route to Jagannatha Puri, he privately desired to taste the famous amrta-keli sweet rice — not for himself, but to learn how to prepare a similar offering for Gopala. He immediately felt ashamed and left the temple without asking for anything. That night, Gopinatha appeared in the head priest's dream and said He had hidden a pot of sweet rice behind His cloth curtain for the sannyasi in the marketplace. The priest found it exactly as described and called out: 'Gopinatha has stolen this pot of sweet rice for you! You are the most fortunate person within these three worlds!' From that day the Deity has been known as Ksira-cora Gopinatha.",
  },
  {
    q: "What is the verse 'ayi dina-dayardra natha' and why is it so important in our sampradaya?",
    a: "This verse composed by Madhavendra Puri is the one he repeated constantly until the moment of his departure, and by uttering it he attained the ultimate goal of life (Cc. Madhya 4.196). It was actually spoken originally by Srimati Radharani Herself, and by Her mercy alone it appeared in the words of Madhavendra Puri (Cc. Madhya 4.194). Krsnadasa Kaviraja Gosvami says it is the most precious of all devotional verses — like the Kaustubha gem — and like the moon it has spread illumination all over the world (Madhya 4.191–193). Only three persons have fully understood it: Srimati Radharani, Sri Madhavendra Puri, and Sri Caitanya Mahaprabhu.",
  },
  {
    q: "What can we learn from the contrast between Isvara Puri and Ramacandra Puri?",
    a: "Both were disciples of Madhavendra Puri, but their service was completely different. Isvara Puri served his spiritual master at the end of his life with total selflessness — personally cleaning his stool and urine, constantly chanting the Holy Name for his hearing, and reminding him of Krsna's pastimes. Pleased with this service, Madhavendra Puri gave Isvara Puri his full blessing, and Isvara Puri became an ocean of love of Godhead — through whom Lord Caitanya Himself was initiated. Ramacandra Puri, on the other hand, presumed to instruct his own spiritual master at his deathbed, and due to this offense fell into dry speculation and fault-finding. Krsnadasa Kaviraja Gosvami says: 'Madhavendra Puri instructed the entire world by presenting these two examples' (Cc. Antya 8.32).",
  },
];

export default function BlogClient() {
  return (
    <div className="bg-[#FFF9F0] min-h-screen selection:bg-[#c9973a] selection:text-white pb-20">
      <Navbar />

      <main className="gp-blog-wrap pt-28">

        {/* Header */}
        <header className="gp-blog-header">
          <p className="gp-hero-label">Appearance & Disappearance Day Special</p>
          <h1 className="gp-blog-title">
            Sri Madhavendra Puri Gosvami <br />
            <span className="text-[clamp(1.8rem,3.5vw,3rem)] text-gray-700 font-normal">
              The Root from Which the Tree of Pure Devotion Grew
            </span>
          </h1>
          <p className="gp-blog-subtitle mt-4 mb-6">
            The grand-spiritual-master of the Golden Avatara — the acarya who first planted the seed
            of love of Godhead in this world, in the disciplic succession of Sri Madhva-Gaudiya-sampradaya.
          </p>
          <div className="gp-hero-line"></div>
          <p className="gp-blog-byline">
            By <strong>HKM Team</strong> • {TEMPLE_SHORT}
          </p>
          <div className="mp-hero-meta">
            <span>Appearance Day: May 1</span>
            <span>•</span>
            <span>Disappearance Day: March 19</span>
            <span>•</span>
            <span>Vaishnava Acarya</span>
          </div>
        </header>

        {/* Feature Image */}
        <div className="gp-image-container" style={{ maxWidth: '560px', margin: '2rem auto' }}>
          <Image
            src="/assets/blog/madhavendra-puri/Madhavendra_Puri_Worships_Gopala.png"
            alt="Sri Madhavendra Puri worshipping the Gopala Deity at Govardhana Hill"
            width={560}
            height={360}
            className="gp-image"
            priority
          />
          <span className="gp-image-caption">
            Sri Madhavendra Puri Gosvami worshipping Sri Gopala at Govardhana Hill
          </span>
        </div>

        <div className="gp-content">

          {/* Introduction */}
          <p>
            In the vast garden of Gaudiya Vaisnava tradition, there is one great soul whose very name
            moves Lord Caitanya Mahaprabhu to spontaneous tears. He is Sri Madhavendra Puri Gosvami —
            the grand-spiritual-master of the Golden Avatara Himself, the acarya who first planted the
            seed of pure love of Godhead in this world.
          </p>
          <p>
            Whether we honour the anniversary of his divine appearance or his departure from this world,
            the devotional community of the Gaudiya-Madhva-sampradaya pauses to remember and glorify
            this extraordinary personality. Everything here is drawn entirely from the
            Caitanya-caritamrta, Madhya-lila Chapter 4 and Antya-lila Chapter 8 — the complete account
            of Sri Madhavendra Puri's life and service, as narrated by Lord Caitanya Mahaprabhu Himself.
          </p>

          <div className="gp-divider"></div>

          {/* Section 1 */}
          <h2 className="gp-sh" id="who-is-madhavendra-puri">Who Is Sri Madhavendra Puri?</h2>
          <p>
            Sri Madhavendra Puri was a great Vaisnava sannyasi in the disciplic succession coming from
            Madhvacarya, initiated by Sri Laksmipati Tirtha. Krsnadasa Kaviraja Gosvami, in
            Antya-lila Chapter 8, gives him the title that sums up his position in one phrase:{" "}
            <em>"the spiritual master of the entire world."</em> He stands at the most important
            junction in the entire history of the Gaudiya-Vaisnava movement.
          </p>
          <p>
            The disciplic succession runs precisely: from Krsna to Brahma, to Narada, to Vyasa, to
            Madhvacarya — through a chain of great acaryas down to Laksmipati Tirtha, then to
            Madhavendra Puri, then to Isvara Puri, and then to Lord Caitanya Mahaprabhu Himself.
          </p>

          <div className="gp-bq">
            <p>
              "Our sampradaya belongs to the disciplic succession of Madhavendra Puri, who belonged to
              the Madhva-sampradaya. We are in the disciplic succession of Sri Caitanya Mahaprabhu,
              who was initiated by Sri Isvara Puri, a disciple of Madhavendra Puri's. Our sampradaya
              is therefore called the Madhva-Gaudiya-sampradaya."
            </p>
            <cite>— Cc. Madhya 4, purport by Srila Prabhupada</cite>
          </div>

          <p>
            Without Madhavendra Puri there is no Isvara Puri; without Isvara Puri there is no
            Caitanya Mahaprabhu's great movement of sankirtana; without that — no worldwide chanting
            of the Holy Names. His position in the parampara is that essential.
          </p>

          <div className="gp-divider"></div>

          {/* Section 2 */}
          <h2 className="gp-sh" id="first-seed-of-love">The First Seed of Love of Godhead</h2>
          <p>
            Before Sri Madhavendra Puri, the Madhvacarya-sampradaya was followed with great strictness
            — correct philosophy, careful study of scripture, formal worship. But the intense, melting
            love of God known as <em>madhurya-bhava</em> — the ecstasy of the gopis, the love of
            Vrajabhumi — had not yet appeared in that line.
          </p>
          <p>
            Sri Madhavendra Puri was the first person in that disciplic succession to exhibit the
            symptoms of love of Godhead. As stated in the purport to Cc. Madhya 4.197:
          </p>

          <div className="gp-verse">
            <div className="gp-verse-body">
              <p>
                "Śrī Mādhavendra Purī was the first person in that disciplic succession to exhibit the
                symptoms of love of Godhead and the first to write a poem beginning with the words
                ayi dīna-dayārdra nātha… In that poem is the seed of Caitanya Mahāprabhu's cultivation
                of love of Godhead."
              </p>
              <cite>— Cc. Madhya 4.197, purport</cite>
            </div>
          </div>

          <p>
            Krsnadasa Kaviraja Gosvami in Antya-lila 8.36 puts it simply and powerfully:
          </p>

          <div className="gp-bq">
            <p>
              "Madhavendra Puri sowed the seed of ecstatic love for Krsna within this material world
              and then departed. That seed later became a great tree in the form of Sri Caitanya
              Mahaprabhu."
            </p>
            <cite>— Cc. Antya 8.36</cite>
          </div>

          <p>
            Madhavendra Puri is thus the <em>kalpa-vrksa</em> — the wish-fulfilling tree of devotional
            service — in whom the seed of prema first took root. Isvara Puri is the sprouting. Lord
            Caitanya Mahaprabhu is the great tree. And the fruit — love of Godhead freely distributed
            to all fallen souls — is what we taste today through the chanting of the Hare Krsna
            maha-mantra.
          </p>

          <div className="gp-divider"></div>

          {/* Section 3 */}
          <h2 className="gp-sh" id="renunciation">The Renunciation of Madhavendra Puri</h2>
          <p>
            Madhavendra Puri's own celebrated verse, cited in the purport to Srimad-Bhagavatam 2.4.3–4,
            shows the state of a devotee who has gone completely beyond all ritualistic duties out of
            pure love:
          </p>

          <div className="mp-skt-verse">
            <div className="mp-skt-lines">
              sandhyā-vandana bhadram astu bhavato bhoḥ snāna tubhyaṃ namo<br />
              bho devāḥ pitarāśca tarpaṇa-vidhau nāhaṃ kṣamaḥ kṣamyatām<br />
              yatra kvāpi niṣadya yādava-kulottaṃsasya kaṃsa-dviṣaḥ<br />
              smāraṃ smāram aghaṃ harāmi tad alaṃ manye kim anyena me
            </div>
            <p className="mp-skt-translation">
              "O my evening prayer, all good unto you. O my morning bath, I bid you good-bye. O demigods
              and forefathers, please excuse me. I am unable to perform any more offerings for your
              pleasure. Now I have decided to free myself from all reactions to sins simply by
              remembering anywhere and everywhere the great descendant of Yadu and the great enemy of
              Kaṃsa [Lord Kṛṣṇa]. I think that this is sufficient for me. So what is the use of
              further endeavours?"
            </p>
            <cite className="mp-skt-cite">— SB 2.4.3–4 purport</cite>
          </div>

          <p>
            This is not carelessness. This is the voice of a soul completely absorbed in love of
            Krsna — the highest stage of bhakti. Lord Caitanya Mahaprabhu Himself describes
            Madhavendra Puri's daily character:
          </p>

          <div className="gp-bq">
            <p>
              "Madhavendra Puri used to remain alone. He was completely renounced and always very
              silent. He was uninterested in everything material, and for fear of talking about mundane
              things, he always lived without a companion."
            </p>
            <cite>— Cc. Madhya 4.179</cite>
          </div>

          <p>
            His renunciation was not performance. He avoided begging entirely (Cc. Madhya 4.123): if,
            without his begging, someone offered food, he would eat; otherwise he would fast. Material
            hunger and thirst simply could not impede his activities. As the Caitanya-caritamrta states
            (Text 124):{" "}
            <em>"A paramahamsa like Madhavendra Puri is always satisfied in the loving service of the Lord."</em>
          </p>

          <div className="gp-divider"></div>

          {/* Section 4 — Three Dreams */}
          <h2 className="gp-sh" id="three-dreams-three-commands">
            Three Dreams, Three Commands: The Gopala Pastime
          </h2>
          <p>
            The greatest pastimes of Sri Madhavendra Puri unfold across three separate dream-instructions
            from the Lord — each one deeper in surrender than the last. This full account is found in
            Caitanya-caritamrta, Madhya-lila Chapter 4, narrated by Lord Caitanya Mahaprabhu Himself
            to Nityananda Prabhu at the temple of Ksira-cora Gopinatha in Remuna, Orissa.
          </p>

          {/* Dream One */}
          <h3 className="mp-dream-h" id="dream-one">Dream One — Gopala Reveals Himself</h3>
          <p>
            Madhavendra Puri arrived at Govinda-kunda near Govardhana Hill in a state of ecstatic love
            (Cc. Madhya 4.22):{" "}
            <em>
              "Madhavendra Puri was almost mad in his ecstasy of love of Godhead, and he did not know
              whether it was day or night. Sometimes he stood up, and sometimes he fell to the ground."
            </em>{" "}
            He simply sat down in meditation.
          </p>

          {/* Image — Meets A Cowherd Boy */}
          <div className="gp-image-container my-8">
            <Image
              src="/assets/blog/madhavendra-puri/Madhavendra_Puri_Meets_A_Cowherd_Boy.png"
              alt="Gopala appears before Madhavendra Puri as a cowherd boy offering milk"
              width={800}
              height={480}
              className="gp-image"
            />
            <span className="gp-image-caption">
              The Lord appears as a beautiful cowherd boy and offers milk to Madhavendra Puri
            </span>
          </div>

          <p>
            While sitting, a young and beautiful smiling cowherd boy approached with a pot of milk
            (Madhya 4.25):
          </p>

          <div className="gp-bq">
            <p>
              "O Madhavendra Puri, please drink the milk I have brought. Why don't you beg some food
              to eat? What kind of meditation are you undergoing?"
            </p>
            <cite>— Cc. Madhya 4.25</cite>
          </div>

          <p>
            When Madhavendra Puri saw the beauty of that boy, he became very satisfied. Hearing His
            sweet words, he forgot all hunger and thirst (Madhya 4.26). The boy said He was a cowherd
            from the village, that He must go very soon to milk the cows, and that He would return to
            take back the milk pot (Madhya 4.28–31). Saying this, the boy left — and suddenly could be
            seen no more (Madhya 4.32).
          </p>
          <p>
            Madhavendra Puri could not sleep. He sat and chanted the Hare Krsna maha-mantra, and only
            at the end of the night did he doze a little (Madhya 4.34). In that sleep, the same boy
            appeared in dream, took him by the hand, led him to a bush in the jungle, and spoke:
          </p>

          <div className="gp-bq">
            <p>
              "For many days I have been observing you, and I have been wondering, 'When will
              Madhavendra Puri come here to serve Me?' I have accepted your service due to your ecstatic
              love for Me. Thus I shall appear, and by My audience all fallen souls will be delivered.
              My name is Gopala. I am the lifter of Govardhana Hill. I was installed by Vajra, and
              here I am the authority. When the Muslims attacked, the priest who was serving Me hid Me
              in this bush. Since the priest went away, I have been staying here. Now just remove Me
              with care."
            </p>
            <cite>— Cc. Madhya 4.39–43</cite>
          </div>

          <p>
            When Madhavendra Puri woke, he lamented bitterly (Madhya 4.45):{" "}
            <em>"I saw Lord Krsna directly, but I could not recognize Him!"</em> And he fell to the
            ground in ecstatic love.
          </p>
          <p>
            He then assembled the villagers, cleared the jungle, and the Deity was placed on a stone
            throne atop Govardhana Hill. A full abhiseka was performed with nine hundred pots of water
            from Govinda-kunda, panca-gavya, pancamrta, and maha-snana. The Annakuta festival was
            then arranged in one day: mountains of rice, dhal, vegetables, chapatis covered in ghee,
            pots of yogurt, sweet rice, cream, and buttermilk — and Gopala ate everything offered.
          </p>
          <p>
            Madhavendra Puri initiated all the brahmanas present into the Vaisnava cult and engaged
            them in Deity service. Each family in Vrajabhumi contributed one cow — and in this way
            thousands of cows became the property of Gopala (Madhya 4.102). This Annakuta festival
            continued village after village for two full years (Madhya 4.105). The standard of Deity
            worship established here — six aratrikas from mangala-aratrika to sayana-aratrika — is
            the same standard followed in ISKCON temples worldwide today.
          </p>

          <div className="gp-verse">
            <div className="gp-verse-body">
              <p>
                "Being obliged because of the loving affairs of Mādhavendra Purī, Lord Kṛṣṇa Himself
                appeared as the Gopāla Deity, and, accepting his service, He liberated the whole world."
              </p>
              <cite>— Lord Caitanya Mahāprabhu, Cc. Madhya 4.173</cite>
            </div>
          </div>

          {/* Dream Two */}
          <h3 className="mp-dream-h" id="dream-two">Dream Two — Fetch Sandalwood from Jagannatha Puri</h3>
          <p>
            After two years of gorgeous Deity worship, Gopala appeared again in Madhavendra Puri's
            dream with a new instruction (Madhya 4.106–107):
          </p>

          <div className="gp-bq">
            <p>
              "My bodily temperature still has not decreased. Please bring sandalwood from the Malaya
              province and smear the pulp over My body to cool Me. Bring sandalwood pulp from Jagannatha
              Puri. Kindly go quickly. Since no one else can do it, you must."
            </p>
            <cite>— Cc. Madhya 4.106–107</cite>
          </div>

          <p>
            Madhavendra Puri immediately made arrangements for the Deity's continued worship and
            departed. He stopped at Santipura where Advaita Acarya, so moved by the ecstatic love of
            Godhead he witnessed in Madhavendra Puri, begged to be initiated and received that blessing
            (Madhya 4.110–111).
          </p>
          <p>
            Passing through Orissa, he arrived at Remuna and entered the Gopinatha temple. He danced
            and chanted in ecstasy. Then he asked the priest about the Deity's food offerings — so that
            by making arrangements in their kitchen, similar foods could be offered to Sri Gopala
            (Madhya 4.115). The priest described the famous <em>amrta-keli</em> — sweet rice offered
            in twelve earthen pots every evening.
          </p>
          <p>
            Madhavendra Puri privately thought:{" "}
            <em>
              "If, without my asking, a little sweet rice is given to me, I can taste it and make a
              similar preparation to offer my Lord Gopala."
            </em>{" "}
            He was immediately overcome with shame for even this thought — considering he had committed
            an offense by desiring to eat what was being offered to the Deity (Madhya 4.124) — and
            without a word to anyone, left the temple and sat alone in the vacant marketplace, chanting
            (Madhya 4.125).
          </p>
          <p>
            That night, Gopinatha appeared in the dream of the head priest (Madhya 4.127–129):
          </p>

          <div className="gp-bq">
            <p>
              "O priest, please get up and open the door of the temple. I have kept one pot of sweet
              rice for the sannyasi Madhavendra Puri… A sannyasi named Madhavendra Puri is sitting in
              the vacant marketplace. Please take this pot and deliver it to him."
            </p>
            <cite>— Cc. Madhya 4.127–129</cite>
          </div>

          <p>
            The priest found the pot exactly as described, went to the marketplace and called out:{" "}
            <em>
              "Will he whose name is Madhavendra Puri please come and take this pot! Gopinatha has
              stolen this pot of sweet rice for you! You are the most fortunate person within these
              three worlds!"
            </em>{" "}
            (Madhya 4.133–134). Thus the Deity of Remuna received forever the name{" "}
            <strong>Ksira-cora Gopinatha</strong> — the Gopinatha who stole the pot of sweet rice.
          </p>
          <p>
            Madhavendra Puri ate the sweet rice in ecstatic love, broke the pot into pieces, bound
            them in his cloth, and every day thereafter ate one piece — overwhelmed with ecstasy at
            each remembrance of the Lord's mercy (Madhya 4.139–140). Being afraid of his reputation,
            he quietly slipped away from Remuna before morning. Yet even in flight his greatness
            pursued him (Madhya 4.147):{" "}
            <em>
              "The reputation brought by love of Godhead is so sublime that it goes along with the
              devotee, as if following him."
            </em>
          </p>
          <p>
            Reaching Jagannatha Puri, he saw Lord Jagannatha and was overwhelmed — sometimes falling,
            sometimes dancing, sometimes laughing, sometimes crying (Madhya 4.144). The devotees
            there enthusiastically collected one maund — approximately eighty-two pounds — of
            sandalwood, and twenty tolas of camphor, along with two assistants and official release
            papers to pass the Muslim toll collectors of Orissa (Madhya 4.151–153, 182–183).
          </p>

          {/* Dream Three */}
          <h3 className="mp-dream-h" id="dream-three">Dream Three — Gopala's Final Merciful Order</h3>
          <p>
            Carrying his eighty-two-pound load back toward Vrndavana, Madhavendra Puri set out
            through provinces governed by Muslims. Lord Caitanya Mahaprabhu describes the journey
            (Madhya 4.181–185):
          </p>

          <div className="gp-bq">
            <p>
              "Although Madhavendra Puri was hungry, he would not beg food to eat. This renounced
              person carried a load of sandalwood for the sake of Sri Gopala… Madhavendra Puri was
              not at all anxious during the long journey through the provinces governed by the Muslims.
              Although Madhavendra Puri did not have a farthing with him, he was not afraid to pass
              by the toll officers. His only enjoyment was in carrying the load of sandalwood to
              Vrndavana for Gopala."
            </p>
            <cite>— Cc. Madhya 4.181–185</cite>
          </div>

          <p>
            When he reached Remuna again, the priest joyfully gave him the sweet rice prasadam. That
            night, Gopala appeared in the third and final dream:
          </p>

          <div className="gp-bq">
            <p>
              "O Madhavendra Puri, I have already received all the sandalwood and camphor. Now just
              grind all the sandalwood together with the camphor and smear the pulp on the body of
              Gopinatha daily until it is finished. There is no difference between My body and
              Gopinatha's body. They are one and the same."
            </p>
            <cite>— Cc. Madhya 4.158–160</cite>
          </div>

          <p>
            Lord Caitanya Mahaprabhu Himself reveals the real purpose of the entire journey
            (Madhya 4.187–190):
          </p>

          <div className="gp-verse">
            <div className="gp-verse-body">
              <p>
                "Śrī Gopāla wanted to show how intensely Mādhavendra Purī loved Kṛṣṇa; therefore He
                asked him to go to Nīlācala to fetch sandalwood and camphor. To test the intense love
                of Mādhavendra Purī, Gopāla, the Supreme Personality of Godhead, ordered him to bring
                sandalwood, and when Mādhavendra Purī passed this examination, the Lord became very
                merciful to him."
              </p>
              <cite>— Cc. Madhya 4.187–190</cite>
            </div>
          </div>

          <p>
            Madhavendra Puri carried out the third order without hesitation: he had the sandalwood
            ground with camphor and smeared on Gopinatha daily until the entire stock was finished,
            then returned peacefully to Jagannatha Puri for Caturmasya (Madhya 4.168–169). Lord
            Caitanya's verdict (Madhya 4.186):{" "}
            <em>
              "This is the natural result of intense love of Godhead. The devotee does not consider
              personal inconveniences or impediments. In all circumstances he wants to serve the
              Supreme Personality of Godhead."
            </em>
          </p>

          <div className="gp-divider"></div>

          {/* Section 5 */}
          <h2 className="gp-sh" id="caitanya-glorifies">Lord Caitanya Glorifies Madhavendra Puri at Remuna</h2>
          <p>
            When Lord Caitanya Mahaprabhu visited the Ksira-cora Gopinatha temple at Remuna, He
            offered His obeisances with great devotion. At that moment the flower helmet on Gopinatha's
            head fell directly onto the head of Caitanya Mahaprabhu (Madhya 4.14). He became very
            pleased and began to chant and dance in ecstasy.
          </p>
          <p>
            He then narrated the entire story of Madhavendra Puri to Nityananda Prabhu and asked
            (Madhya 4.171):{" "}
            <em>
              "Please judge whether there was anyone within this world as fortunate as Madhavendra Puri."
            </em>{" "}
            Then He declared (Madhya 4.191):{" "}
            <em>
              "That verse is just like the moon. It has spread illumination all over the world."
            </em>
          </p>
          <p>
            Then He recited the verse. Immediately He fell to the ground unconscious (Madhya 4.198).
            Nityananda Prabhu quickly placed Him on His lap. When He came to His senses He ran here
            and there, laughed, cried, danced and sang. He could not even recite the whole verse — He
            only cried again and again (Madhya 4.201):{" "}
            <em>"Ayi dina! Ayi dina! — He simply said these words repeatedly."</em> All twelve
            ecstatic symptoms appeared in His body simultaneously.
          </p>

          <div className="gp-verse">
            <div className="gp-verse-body">
              <p>
                "In this way, Lord Śrī Caitanya Mahāprabhu personally tasted with His own mouth the
                transcendental qualities of Gopālajī, Gopīnātha and Śrī Mādhavendra Purī."
              </p>
              <cite>— Kṛṣṇadāsa Kavirāja Gosvāmī, Cc. Madhya 4.210</cite>
            </div>
          </div>

          <div className="gp-divider"></div>

          {/* Section 6 — The Verse */}
          <h2 className="gp-sh" id="ayi-dina">Ayi Dina-Dayardra Natha: The Most Precious Verse</h2>
          <p>
            At the end of his time in this world, Sri Madhavendra Puri — the spiritual master of the
            entire world (Cc. Antya 8.33) — repeated one verse again and again until he left his body:
          </p>

          <div className="mp-skt-verse">
            <div className="mp-skt-lines">
              ayi dīna-dayārdra nātha he<br />
              mathurā-nātha kadāvalokyase<br />
              hṛdayaṃ tvad-aloka-kātaraṃ<br />
              dayita bhrāmyati kiṃ karomy aham
            </div>
            <p className="mp-skt-translation">
              "O My Lord! O most merciful master! O master of Mathurā! When shall I see You again?
              Because of My not seeing You, My agitated heart has become unsteady. O most beloved one,
              what shall I do now?"
            </p>
            <cite className="mp-skt-cite">— Cc. Madhya 4.197 / Cc. Antya 8.34</cite>
          </div>

          <p>
            Krsnadasa Kaviraja Gosvami declares in Cc. Madhya 4.193: as the Kaustubha-mani is the
            most precious of all valuable stones, this verse is similarly the most precious of all
            poems in devotional service. It is{" "}
            <em>"just like the moon — it has spread illumination all over the world"</em>{" "}
            (Madhya 4.191). And the more one considers it, the more its fragrance increases — like
            Malaya sandalwood whose aroma grows the more it is rubbed (Madhya 4.192).
          </p>
          <p>
            Cc. Madhya 4.195 makes clear that only three personalities have fully understood this
            verse: Srimati Radharani, Sri Madhavendra Puri, and Sri Caitanya Mahaprabhu. And the
            reason:
          </p>

          <div className="gp-bq">
            <p>
              "Actually this verse was spoken by Srimati Radharani Herself, and by Her mercy only
              was it manifest in the words of Madhavendra Puri."
            </p>
            <cite>— Cc. Madhya 4.194</cite>
          </div>

          <p>
            This verse is Radharani's lament when Krsna left Vrndavana for Mathura and She was left
            behind, burning in the fire of separation. That divine agony was transmitted by Her mercy
            alone into the heart and words of Madhavendra Puri. Worship in separation{" "}
            [<em>vipralambha-seva</em>] is the topmost level of devotional service. In this mood the
            devotee does not demand the Lord's presence — he simply feels his own poverty, his own
            inability to reach the Lord, and he cries.
          </p>

          <div className="gp-verse">
            <div className="gp-verse-body">
              <p>
                "Mādhavendra Purī recited this verse again and again at the end of his material
                existence. Thus uttering this verse, he attained the ultimate goal of life."
              </p>
              <cite>— Cc. Madhya 4.196</cite>
            </div>
          </div>

          <div className="gp-divider"></div>

          {/* Section 7 — Two Disciples */}
          <h2 className="gp-sh" id="two-disciples">The Two Disciples: An Instruction to the Whole World</h2>
          <p>
            In the final days of Madhavendra Puri's life, he lay completely invalid, absorbed in the
            agony of separation, crying: <em>"O my Lord, I did not get shelter at Mathura"</em>{" "}
            (Antya 8.19). Two disciples came to attend him. Their contrasting responses became, as
            Krsnadasa Kaviraja Gosvami declares, an instruction by Madhavendra Puri to the entire
            world (Antya 8.32).
          </p>

          <h3 className="gp-sh3">Isvara Puri — The Ocean of Ecstatic Love</h3>
          <p>
            Isvara Puri, the future spiritual master of Sri Caitanya Mahaprabhu, served Madhavendra
            Puri at his deathbed with complete selflessness — personally cleaning his stool and urine
            with his own hands, constantly chanting the holy name and narrating the pastimes of Lord
            Krsna for Madhavendra Puri to hear. In this way he helped his spiritual master remember
            the holy name at the time of death.
          </p>

          <div className="gp-bq">
            <p>
              "Pleased with Isvara Puri, Madhavendra Puri embraced him and gave him the benediction
              that he would be a great devotee and lover of Krsna."
            </p>
            <cite>— Cc. Antya 8.28–30</cite>
          </div>

          <p>
            That single blessing turned Isvara Puri into an ocean of love of Godhead (Antya 8.31) —
            which later engulfed Lord Caitanya Himself. This is the power of sincere, selfless service
            to the spiritual master.
          </p>

          <h3 className="gp-sh3">Ramacandra Puri — A Warning for All Disciples</h3>
          <p>
            Ramacandra Puri came to Madhavendra Puri's deathbed and, seeing his spiritual master
            crying in separation from Krsna, presumed to instruct him (Antya 8.20–21):{" "}
            <em>"If you are in full transcendental bliss, you should now remember only Brahman. Why
            are you crying?"</em>
          </p>
          <p>
            Madhavendra Puri was greatly angered and rebuked him sharply (Antya 8.22–25):{" "}
            <em>
              "Get out, you sinful rascal! I am dying without achieving the shelter of Krsna, and
              this condemned rascal has come to instruct me about Brahman."
            </em>
          </p>
          <p>
            Due to this offense, Ramacandra Puri fell into dry speculation and fault-finding
            (Antya 8.26–27). He later stayed at Jagannatha Puri where he would first induce someone
            to eat more than necessary, then criticise them; he gathered information about how everyone
            was eating and conducting their affairs; he could find no fault in Caitanya Mahaprabhu but
            invented one — finding ants in the Lord's room and accusing Him of keeping sweets. Because
            of his criticism, Caitanya Mahaprabhu reduced His own eating by half, and all the devotees
            became miserable (Antya 8.56–57).
          </p>

          <div className="gp-verse">
            <div className="gp-verse-body">
              <p>
                "Īśvara Purī received the blessing of Mādhavendra Purī, whereas Rāmacandra Purī
                received a rebuke from him. Therefore these two persons are examples of the objects of
                a great personality's benediction and punishment. Mādhavendra Purī instructed the
                entire world by presenting these two examples."
              </p>
              <cite>— Cc. Antya 8.32</cite>
            </div>
          </div>

          <div className="gp-divider"></div>

          {/* Conclusion */}
          <h2 className="gp-sh" id="conclusion">Conclusion — The Root of All That We Have</h2>
          <p>
            Sri Madhavendra Puri Gosvami stands at the very root of the Gaudiya Vaisnava tradition
            — the acarya without whom the great tree of Lord Caitanya's movement could never have
            grown. He was not a loud preacher or a prolific writer. He did not build institutions or
            gather large communities around himself. He was a solitary, silent, wandering sannyasi —
            absolutely merged in love of Krsna, dependent on no one, afraid of nothing, motivated
            only by the Lord's pleasure.
          </p>
          <p>
            Yet from this one soul's pure love, an entire spiritual revolution was born. The Gopala
            Deity at Govardhana was revealed through him. The standard of Deity worship that fills
            ISKCON temples worldwide today was established by him. The ecstatic seed of madhurya-bhava
            that Lord Caitanya Mahaprabhu later distributed to the whole world was first planted by him.
            Even the verse that moves the Golden Avatara to unconscious ecstasy —
            <em>ayi dina-dayardra natha</em> — was uttered first by Madhavendra Puri, by the mercy
            of Srimati Radharani Herself.
          </p>
          <p>
            His life teaches us three great lessons. First, that Krsna is not indifferent to the love
            of His devotees — He personally comes to serve those who serve Him with a pure heart.
            Second, that true renunciation is not dry or mechanical, but is the natural flowering of
            love: a soul so absorbed in Krsna that hunger, reputation, hardship and comfort simply
            cease to matter. Third, that the quality of our relationship with the spiritual master
            determines everything — as Isvara Puri and Ramacandra Puri demonstrate so powerfully,
            humility and selfless service open the gates of divine grace, while arrogance and
            presumption close them.
          </p>
          <p>
            On this sacred day of his appearance / disappearance, we bow our heads at the lotus feet
            of Sri Madhavendra Puri Gosvami and pray that even a single drop of his love for Krsna
            may touch our hearts. We are the inheritors of the tradition he planted. The maha-mantra
            we chant, the Deities we worship, the books we study, the sampradaya we belong to — all
            of it flows from the root of his pure devotion.
          </p>

          <div className="gp-verse">
            <div className="gp-verse-body">
              <p>
                "He reasons ill who says that Vaiṣṇavas die, when thou art living still in sound!
                The Vaiṣṇavas die to live, and living try, to spread the holy name around."
              </p>
              <cite>— Śrīla Bhaktivinoda Ṭhākura</cite>
            </div>
          </div>

          <p className="text-center font-bold text-xl mt-6 text-[#b8600a] font-serif">
            Sri Madhavendra Puri Gosvami ki — Jaya!
          </p>

          <div className="gp-divider"></div>

          {/* FAQ */}
          <h2 className="gp-sh" id="faq">Frequently Asked Questions — Sri Madhavendra Puri</h2>
          <div className="gp-faq-grid mb-12">
            {faqs.map((faq, index) => (
              <div key={index} className="gp-faq-item">
                <h3 className="gp-faq-q">{faq.q}</h3>
                <p className="gp-faq-a">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="gp-divider"></div>

          {/* Connect */}
          <div className="gp-connect-section">
            <h2 className="gp-connect-h">🌿 Connect With Us</h2>
            <p className="gp-connect-desc">
              We would love to welcome you to our growing community of seekers. Reach us through any
              of the platforms below or visit us in person.
            </p>
            <div className="gp-social-grid mb-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gp-social-card"
                >
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
              <a
                href="https://maps.app.goo.gl/o2m98vJQHQjUHHDy6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9973a] font-bold not-italic hover:underline mt-2 inline-block"
              >
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
