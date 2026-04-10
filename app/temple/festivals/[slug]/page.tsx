import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  CalendarDays,
  Flower2,
  Heart,
  Sparkles,
  Star,
} from "lucide-react"

type FestivalContent = {
  name: string
  subtitle: string
  season: string
  image: string
  overview: string
  significance: string
  templeCelebration: string
  meditation: string
  observances: string[]
  highlights: string[]
}

const festivalData: Record<string, FestivalContent> = {
  "vaikuntha-ekadashi": {
    name: "Sri Vaikuntha Ekadashi",
    subtitle: "A sacred day of vrata, kirtan, and prayerful entry into the Lord's mercy.",
    season: "Margashirsha / Dhanur month",
    image: "/assets/culteral-festivals-page/1_Sri_Vaikuntha_Ekadashi.JPG",
    overview:
      "Sri Vaikuntha Ekadashi is revered as one of the most spiritually potent Ekadashi observances of the year. Devotees dedicate the day to fasting, chanting the holy names, hearing hari-katha, and offering prayers for purity of heart and deeper devotion to Lord Narayana and Sri Krishna.",
    significance:
      "In the Vaishnava tradition, Ekadashi is a day of turning inward. Vaikuntha Ekadashi especially reminds devotees that the real doorway to the spiritual world opens through surrender, remembrance, and steady bhakti. The festival encourages simplicity, discipline, and joyful dependence on the Lord.",
    templeCelebration:
      "At Dakshina Dwaraka Dham, this festival can be experienced as a serene day of darshan, kirtan, scripture hearing, vrata, and special offerings to the Lord. The mood is one of humility and aspiration: to spend the day with greater attention, sacred sound, and heartfelt prayer.",
    meditation:
      "May this Ekadashi open the door to steadier remembrance, gentler speech, and stronger determination in devotional life.",
    observances: [
      "Ekadashi fasting according to one's capacity",
      "Extra japa, kirtan, and recitation of Vishnu prayers",
      "Hearing scripture with a prayerful heart",
      "Offering simple, sattvic devotion and gratitude",
    ],
    highlights: [
      "Sacred vrata focused on inner purification",
      "Extended chanting and temple darshan",
      "Atmosphere of quiet devotion and surrender",
    ],
  },
  pongal: {
    name: "Pongal",
    subtitle: "A thanksgiving festival of gratitude, abundance, and offering the first bounty to the Lord.",
    season: "Makara Sankranti season",
    image: "/assets/culteral-festivals-page/2_Pongal.JPG",
    overview:
      "Pongal is celebrated in a mood of thanksgiving for harvest, nourishment, and divine providence. In a devotional setting, the spirit of Pongal becomes an offering of gratitude to Krishna for sustaining life through land, cows, sunlight, rain, and community.",
    significance:
      "The festival teaches a simple but deep lesson: prosperity becomes meaningful when it is first offered back to the Lord. Gratitude, charity, and sharing sanctified food stand at the heart of the celebration, making Pongal both cultural and deeply spiritual.",
    templeCelebration:
      "At the temple, Pongal can be marked through festive decoration, harvest-themed offerings, special prasadam, and joyful community participation. The mood blends Tamil cultural warmth with Vaishnava devotion, emphasizing gratitude, seva, and auspicious beginnings.",
    meditation:
      "May every blessing we receive become an offering, and may every meal remind us of Krishna's sustaining mercy.",
    observances: [
      "Offering freshly prepared sweet Pongal to the Lord",
      "Community prasadam and festive darshan",
      "Gratitude for cows, land, and harvest",
      "Charity and acts of care during the auspicious season",
    ],
    highlights: [
      "Harvest gratitude in a devotional setting",
      "Family-friendly celebration rooted in offering",
      "Warm, festive atmosphere with prasadam sharing",
    ],
  },
  varshikotsava: {
    name: "Varshikotsavam",
    subtitle: "An annual festival of gratitude marking the temple's continuing journey of worship and service.",
    season: "Temple anniversary celebration",
    image: "/assets/culteral-festivals-page/3_Varshikotsavam.JPG",
    overview:
      "Varshikotsavam is celebrated in the mood of remembering the Lord's presence in the temple and offering gratitude for another year of seva, darshan, and spiritual shelter. It is a time to honor the deity installation, temple worship, and the growing devotional community around the Lord.",
    significance:
      "Annual temple celebrations remind devotees that a temple is not only a structure but a living center of worship, transformation, and grace. Varshikotsavam invites everyone to renew their relationship with the Lord through service, gratitude, and participation in collective celebration.",
    templeCelebration:
      "Following the spirit of Patotsav celebrations seen in the broader Hare Krishna tradition, this observance can include special alankara, abhisheka, processions, kirtan, cultural offerings, and mahaprasadam. The emphasis is on rededicating the heart to ongoing temple service.",
    meditation:
      "May we continue to serve the Lord's house with gratitude, steadiness, and a growing desire to please Him.",
    observances: [
      "Special alankara and expanded darshan",
      "Kirtan, discourse, and community participation",
      "Mahaprasadam distribution and festival service",
      "Expressions of gratitude for the Lord's presence",
    ],
    highlights: [
      "Anniversary mood of renewal and celebration",
      "Temple-centered devotion and cultural offerings",
      "Community gratitude in a premium festive setting",
    ],
  },
  "nityananda-trayodashi": {
    name: "Sri Nityananda Trayodashi",
    subtitle: "Celebrating the appearance of Lord Nityananda, the embodiment of boundless mercy.",
    season: "Magha Shukla Trayodashi",
    image: "/assets/culteral-festivals-page/4_Sri_Nityananda_Trayodashi.JPG",
    overview:
      "Sri Nityananda Trayodashi marks the appearance of Lord Nityananda Prabhu, who assists Sri Chaitanya Mahaprabhu in distributing the holy name and divine compassion to all. The day carries a mood of generosity, outreach, and joyful sankirtana.",
    significance:
      "Lord Nityananda represents shelter for the fallen and strength for the struggling. To remember Him is to remember that bhakti is not earned by perfection but received through mercy. His festival encourages devotees to become kinder, more inclusive, and more enthusiastic in sharing Krishna consciousness.",
    templeCelebration:
      "Inspired by Hare Krishna Mandir's festival observance, the celebration is especially suited to grand kirtan, abhishekam for Nitai Gauranga, devotional talks, and prasadam with a festive congregational mood. It is one of the most uplifting gatherings in the Gaudiya calendar.",
    meditation:
      "May Lord Nityananda soften the heart and awaken taste for the holy name and service to all souls.",
    observances: [
      "Harinaam sankirtan and extended kirtan sessions",
      "Maha abhishekam for Sri Sri Nitai Gauranga",
      "Festival lecture on mercy and outreach",
      "Prasadam in a joyful congregational atmosphere",
    ],
    highlights: [
      "Mercy-filled celebration centered on Nitai Gauranga",
      "Abhishekam, kirtan, and devotional association",
      "A festival that inspires outreach and humility",
    ],
  },
  "panihati-chida-dahi": {
    name: "Panihati Chidadadhi Mahotsava",
    subtitle: "A sweet festival of humility, mercy, and serving devotees with joyful simplicity.",
    season: "Jyeshtha bright fortnight",
    image: "/assets/culteral-festivals-page/9_Panihati_Chidadadhi_Mahotsava.png",
    overview:
      "Panihati Chida-Dahi Utsava commemorates the meeting of Srila Raghunatha dasa Gosvami with Lord Nityananda Prabhu at Panihati. The festival is also known as Danda Mahotsava and is remembered through the offering and distribution of chipped rice preparations in yogurt, milk, and other cooling combinations.",
    significance:
      "This festival beautifully teaches that mercy descends through humility and service to devotees. Raghunatha dasa Gosvami received Lord Nityananda's blessings through obedience and seva, and the whole event became a celebration of spiritual hospitality and affectionate correction.",
    templeCelebration:
      "Following the observance described by Hare Krishna Mandir, the festival mood naturally includes Nitai Gauranga worship, kirtan, abhishekam, narration of the Panihati pastime, and prasadam distribution. The emphasis is warm, communal, and deeply Gaudiya in flavor.",
    meditation:
      "May we learn to receive mercy through humility, serving Vaishnavas, and valuing even simple devotional offerings.",
    observances: [
      "Talks on the Panihati pastime and Gaudiya heritage",
      "Offerings of chida-dahi style prasadam",
      "Kirtan and festive worship of Nitai Gauranga",
      "Seva performed in a mood of humility and gratitude",
    ],
    highlights: [
      "One of the sweetest festivals in Gaudiya Vaishnavism",
      "Community-focused celebration with prasadam at the center",
      "A practical meditation on humility and mercy",
    ],
  },
  "jhulan-utsava": {
    name: "Jhulan Utsava",
    subtitle: "The flower-filled swing festival of Sri Sri Radha Krishna during the monsoon season.",
    season: "Shravana month",
    image: "/assets/culteral-festivals-page/10_Jhula_Utsava.JPG",
    overview:
      "Jhulan Utsava celebrates the intimate and playful monsoon pastimes of Radha and Krishna. The Divine Couple are placed on a beautifully decorated swing and lovingly worshiped with flowers, music, and soft devotional songs.",
    significance:
      "The festival carries the sweetness of Vrindavan. It reminds devotees that devotion is not only solemn and philosophical, but also tender, artistic, and full of loving service. Jhulan Utsava invites the heart into beauty, gentleness, and personal offering.",
    templeCelebration:
      "Inspired by the official Jhulan Utsav celebrations at Hare Krishna Mandir, the ideal observance includes floral decoration, evening arati, sweet kirtan, and the cherished opportunity for devotees to gently sway the swing of Radha Krishna as a personal act of seva.",
    meditation:
      "May the heart become soft enough to serve the Divine Couple with beauty, gentleness, and loving attention.",
    observances: [
      "Jhulan seva with floral swing decoration",
      "Sweet kirtan and evening arati",
      "Personal participation in gently swaying the swing",
      "Darshan of Radha Krishna in a festive monsoon mood",
    ],
    highlights: [
      "An especially visual and devotional festival",
      "Flowers, music, and personal seva for Radha Krishna",
      "Elegant atmosphere suited to premium temple presentation",
    ],
  },
  "balarama-purnima": {
    name: "Balarama Jayanti",
    subtitle: "Honoring Lord Balarama, the source of spiritual strength and the original servant of the Lord.",
    season: "Shravana Purnima",
    image: "/assets/culteral-festivals-page/11_Balarama_Jayanti.JPG",
    overview:
      "Balarama Jayanti marks the appearance of Lord Balarama, the elder brother of Sri Krishna, also known as Baladeva and Sankarshana. Devotees remember Him as the source of spiritual strength, guru-tattva, and steady service.",
    significance:
      "Without spiritual strength, devotional life remains fragile. Lord Balarama empowers the devotee to cross inner obstacles, remain truthful, and serve with steadiness. His festival inspires grounded devotion rather than mere sentiment.",
    templeCelebration:
      "The celebration takes inspiration from Hare Krishna Mandir's Balaram Jayanti observance, with kirtan, arati, floral offerings, and prayer for strength in sadhana. It pairs naturally with the lingering sweetness of Jhulan season, making the day both festive and spiritually weighty.",
    meditation:
      "May Lord Balarama give us the inner strength to serve, the honesty to grow, and the humility to remain under guidance.",
    observances: [
      "Fasting according to capacity and focused remembrance",
      "Kirtan, arati, and festive deity worship",
      "Prayers for strength in spiritual practice",
      "Offerings of flowers, bhoga, and gratitude",
    ],
    highlights: [
      "Festival of strength, service, and guru-tattva",
      "Beautiful bridge between sweetness and discipline",
      "Ideal for deepening spiritual resolve",
    ],
  },
  janmashtami: {
    name: "Sri Krishna Janmashtami",
    subtitle: "The grand celebration of Lord Krishna's divine appearance, filled with joy, beauty, and midnight worship.",
    season: "Bhadrapada Krishna Ashtami",
    image: "/assets/culteral-festivals-page/12_Sri_Krishna_Janmashtami.JPG",
    overview:
      "Janmashtami commemorates the appearance of Lord Krishna, the Supreme Personality of Godhead. It is among the most widely celebrated Vaishnava festivals, marked by fasting, kirtan, abhishekam, ornate decoration, and eager waiting for the midnight moment of the Lord's appearance.",
    significance:
      "Krishna's appearance renews hope in the heart of the devotee. Janmashtami is both majestic and intimate: the Lord of all worlds appears as the darling child of Vraja. The festival carries the bhava of joy, protection, beauty, and loving surrender.",
    templeCelebration:
      "Borrowing from the schedule and atmosphere shown on Hare Krishna Mandir's Janmashtami observance, the day may feature special darshan, abhishekam, cultural offerings, kirtan, and the climactic midnight arati. It is a high point of the devotional year and naturally invites the whole community to gather.",
    meditation:
      "May the heart become a worthy birthplace for Krishna through chanting, purity, and loving remembrance.",
    observances: [
      "Day-long vrata with midnight focus",
      "Abhishekam, alankara, and festive darshan",
      "Kirtan, cultural programs, and scripture hearing",
      "Midnight arati and mahaprasadam celebration",
    ],
    highlights: [
      "One of the grandest temple festivals of the year",
      "Deep devotional intensity with joyful celebration",
      "Ideal for immersive darshan and community participation",
    ],
  },
  "vyasa-puja": {
    name: "Sri Vyasa Puja",
    subtitle: "A day of gratitude to Srila Prabhupada and the living current of guru-parampara.",
    season: "Nandotsava period",
    image: "/assets/culteral-festivals-page/13_Sri_Vyasa_Puja_1.JPG",
    overview:
      "Sri Vyasa Puja celebrates the appearance day of Srila Prabhupada and honors the principle of the bona fide spiritual master as representative of Vyasadeva. It is a day of heartfelt gratitude for the gift of scripture, guidance, and Krishna consciousness.",
    significance:
      "Bhakti reaches us through disciplic succession. Vyasa Puja teaches that spiritual life matures through gratitude, hearing, and honoring those who carry divine knowledge without distortion. The festival strengthens the culture of humility, remembrance, and service to the mission.",
    templeCelebration:
      "In the spirit of Hare Krishna Mandir's observance, the day may include offering homages, special worship of Srila Prabhupada, kirtan, readings from his life and teachings, and devotional offerings made with personal gratitude. The atmosphere is reverential, affectionate, and mission-centered.",
    meditation:
      "May gratitude to guru deepen our seriousness, our compassion, and our commitment to preserving and sharing spiritual wisdom.",
    observances: [
      "Reading and offering personal homages",
      "Special worship of Srila Prabhupada",
      "Kirtan and remembrance of guru-parampara",
      "Renewed commitment to hearing and sharing wisdom",
    ],
    highlights: [
      "A deeply reflective and gratitude-filled observance",
      "Connects scripture, lineage, and personal transformation",
      "Ideal for mission-centered devotional culture",
    ],
  },
  radhashtami: {
    name: "Sri Radhashtami",
    subtitle: "The appearance day of Srimati Radharani, the embodiment of pure devotion and Krishna-prema.",
    season: "Bhadrapada Shukla Ashtami",
    image: "/assets/culteral-festivals-page/14_Sri_Radhashtami.JPG",
    overview:
      "Sri Radhashtami marks the divine appearance of Srimati Radharani, the eternal consort of Lord Krishna and the highest exemplar of pure devotion. For Gaudiya Vaishnavas, this is one of the most sacred and tender festivals of the year.",
    significance:
      "Radhashtami teaches that access to Krishna comes through the mercy of Srimati Radharani. She is worshiped as the queen of devotion, the one who embodies the highest love for Krishna. The day invites devotees to pray not for material gain, but for sincerity, humility, and devotional longing.",
    templeCelebration:
      "Reflecting the mood described on the official Hare Krishna Mandir Radhashtami page, the celebration is marked by grand abhishekam, kirtan, special outfits, fragrant flowers, offerings, and deep glorification of Radharani's compassion. The atmosphere is refined, joyful, and spiritually intimate.",
    meditation:
      "May Srimati Radharani bless the heart with sincerity, softness, and a genuine desire to serve Krishna.",
    observances: [
      "Radhashtami vrata and devotional restraint",
      "Abhishekam, alankara, and flower offerings",
      "Kirtan, Radharani glorification, and prayer",
      "Bhoga offerings and festive mahaprasadam",
    ],
    highlights: [
      "One of the most tender and elevated Vaishnava festivals",
      "Celebration of pure devotion rather than worldly desire",
      "A premium spiritual mood of beauty, fragrance, and bhava",
    ],
  },
  deepotsava: {
    name: "Deepotsavam",
    subtitle: "A festival of lamps, Kartika devotion, and the heart's offering of light to the Lord.",
    season: "Kartika month",
    image: "/assets/culteral-festivals-page/15_Deepotsavam.JPG",
    overview:
      "Deepotsavam brings together the beauty of Kartika, the offering of lamps, and the spiritual symbolism of light dispelling darkness. In the Vaishnava mood, it especially recalls Lord Damodara and the sweetness of devotion expressed through simple offerings made with love.",
    significance:
      "A single lamp offered with devotion becomes a prayer of the heart. Deepotsavam reminds devotees that bhakti illuminates what ego and distraction obscure. The month-long Kartika spirit encourages increased chanting, hearing, lamp offering, and remembrance of the Lord's intimate pastimes.",
    templeCelebration:
      "Inspired by the official Deepotsava observance at Hare Krishna Mandir, the temple atmosphere can be transformed by rows of ghee lamps, Damodarashtakam singing, evening arati, and a devotional ambiance that feels both intimate and majestic. It is one of the most visually moving celebrations in the calendar.",
    meditation:
      "May the lamp we offer outside awaken deeper light within: remembrance, gratitude, and loving service.",
    observances: [
      "Daily or special deepa-daan offerings",
      "Damodarashtakam and Kartika bhajans",
      "Evening arati in a lamp-lit atmosphere",
      "Increased chanting, hearing, and personal vows",
    ],
    highlights: [
      "Kartika beauty expressed through living light",
      "Deeply spiritual yet highly visual festival experience",
      "A natural fit for immersive temple ambience and design",
    ],
  },
  "govardhana-puja": {
    name: "Sri Govardhana Puja",
    subtitle: "The Annakuta festival celebrating Krishna's shelter, gratitude, and loving dependence on the Lord.",
    season: "Kartika, following Diwali",
    image: "/assets/culteral-festivals-page/16_Sri_Govardhana_Puja.JPG",
    overview:
      "Govardhana Puja commemorates Lord Krishna lifting Govardhana Hill to protect the residents of Vrindavana from Indra's wrath. It is also known as Annakuta, the festival of grand food offerings made in gratitude and devotion to the Lord.",
    significance:
      "The festival teaches that the devotee's protection comes from Krishna alone. It also restores proper spiritual vision: rather than pride and display, true religion honors the Lord, the cows, the land, and the simple life of devotion. Govardhana Puja is therefore both theological and deeply practical.",
    templeCelebration:
      "Using the mood and ritual details highlighted by Hare Krishna Mandir, the celebration is ideally marked by Annakuta darshan, Govardhana-katha, go-puja, kirtan, and the offering of many varieties of bhoga arranged as a symbolic hill. The result is a richly devotional and visually abundant festival experience.",
    meditation:
      "May Govardhana remind us that Krishna's shelter is complete, and that gratitude is best expressed through offering and service.",
    observances: [
      "Grand Annakuta offering and darshan",
      "Govardhana pastime narration and kirtan",
      "Go-puja and gratitude for Krishna's protection",
      "Distribution of sanctified food to all visitors",
    ],
    highlights: [
      "A theology of gratitude made visible through Annakuta",
      "One of the most abundant and celebratory temple festivals",
      "Strong connection to cows, land, and Krishna's shelter",
    ],
  },
  "srila-prabhupada-disappearance-day": {
    name: "Srila Prabhupada Disappearance Day",
    subtitle: "A solemn and grateful remembrance of the acharya whose mercy carried Krishna consciousness around the world.",
    season: "Kartika remembrance",
    image: "/assets/culteral-festivals-page/17_Srila_Prabhupada_Disappearance_day.JPG",
    overview:
      "Srila Prabhupada Disappearance Day is observed in a mood of remembrance, gratitude, and introspection. Devotees honor his unparalleled sacrifice, his books, his mission, and the global spiritual movement he established in service to Sri Chaitanya Mahaprabhu.",
    significance:
      "In the Vaishnava understanding, disappearance is not mere loss. It is an opportunity to deepen remembrance and live closer to the instructions of the acharya. The day encourages devotees to reconnect with Srila Prabhupada's teachings, character, and spirit of bold compassion.",
    templeCelebration:
      "Based on the official event description from Hare Krishna Mandir, the day is well suited for fasting according to tradition, reading from Srila Prabhupada's life and books, kirtan, offerings of homage, and honoring prasadam in gratitude. The mood is simple, grave, and full of affection.",
    meditation:
      "May remembrance become responsibility, and may gratitude mature into sincere service to Srila Prabhupada's mission.",
    observances: [
      "Reading and hearing about Srila Prabhupada's life",
      "Offering homages, flowers, and kirtan",
      "Fasting according to Vaishnava practice",
      "Renewing commitment to books, sadhana, and service",
    ],
    highlights: [
      "A festival of remembrance rather than spectacle",
      "Centers the founder-acharya and his living instructions",
      "Creates a deeply reflective devotional atmosphere",
    ],
  },
}

const slugAliases: Record<string, string> = {
  "krishna-janmashtami": "janmashtami",
  "jhula-utsava": "jhulan-utsava",
  "balarama-jayanti": "balarama-purnima",
}

function getFestival(slug: string) {
  const resolvedSlug = slugAliases[slug] ?? slug
  return festivalData[resolvedSlug]
}

export async function generateStaticParams() {
  return [...Object.keys(festivalData), ...Object.keys(slugAliases)].map((slug) => ({
    slug,
  }))
}

export default function FestivalDetailPage({ params }: { params: { slug: string } }) {
  const festival = getFestival(params.slug)

  if (!festival) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A]">
      <NavbarDemo />

      <section className="relative min-h-[100svh] md:min-h-[75vh] overflow-hidden bg-[#2D0A0A] py-16 md:py-0 pt-28 md:pt-32 md:pb-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#701a1a] via-[#ea580c] to-[#b45309] opacity-95" />
          <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow" />
          <div
            className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 49px, #FFB81C 50px)" }}
          />
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFB81C] blur-[130px] opacity-20" />
          <div className="absolute -left-6 top-6 h-40 w-40 md:h-56 md:w-56 opacity-45">
            <Image
              src="/assets/peacock_feather_v2_clean.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-4 right-4 h-24 w-24 md:h-36 md:w-36 opacity-35">
            <Image
              src="/assets/golden_lotus_flourish_clean.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[90rem] flex-col items-center justify-center gap-y-8 px-4 pb-10 pt-10 md:flex-row md:flex-nowrap md:justify-between md:gap-10 md:px-12 md:pb-0">

          {/* Text Content */}
          <div className="relative z-30 w-full text-center md:w-3/5 md:-mt-2">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFCF73]/40 bg-[#5b140f]/35 px-4 py-2 backdrop-blur-md shadow-[0_0_25px_rgba(255,184,28,0.18)]">
              <Sparkles className="h-4 w-4 text-[#FFB81C]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#FFE8B5]">
                Temple Festival
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] md:text-6xl lg:text-7xl">
              {festival.name}
            </h1>

            <div className="mb-6 mt-5 flex items-center justify-center gap-4">
              <div className="h-[2px] w-12 bg-gradient-to-l from-[#FFB81C] to-transparent md:w-16" />
              <div className="h-3 w-3 rotate-45 border-2 border-[#FFB81C] shadow-[0_0_10px_#FFB81C]" />
              <div className="h-[2px] w-12 bg-gradient-to-r from-[#FFB81C] to-transparent md:w-16" />
            </div>

            <p className="mx-auto mt-4 max-w-2xl text-xl font-light leading-relaxed text-[#ffe8cc] italic drop-shadow-md md:text-2xl">
              {festival.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFB81C]/15 px-4 py-2 text-sm text-white backdrop-blur-sm">
                <CalendarDays className="h-4 w-4 text-[#FFB81C]" />
                <span>{festival.season}</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-[#FFE8B5] backdrop-blur-sm">
                <Flower2 className="h-4 w-4 text-[#FFB81C]" />
                <span>Spiritual and cultural observance</span>
              </div>
            </div>
          </div>

          {/* Single Festival Image */}
          <div className="relative flex w-full items-center justify-center md:w-2/5">
            <div className="relative h-72 w-64 md:h-[22rem] md:w-72 overflow-hidden rounded-t-[3rem] rounded-b-3xl border-[3px] border-[#FFB81C]/50 bg-white/5 shadow-[0_0_40px_rgba(255,184,28,0.25)] backdrop-blur-sm transition-all duration-500 hover:border-[#FFB81C] hover:shadow-[0_0_60px_rgba(255,184,28,0.4)]">
              <Image
                src={festival.image}
                alt={`${festival.name} festival`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D0A0A]/30 to-transparent mix-blend-overlay" />
            </div>
            <div className="absolute -right-3 top-8 hidden md:block">
              <Sparkles className="h-5 w-5 text-[#FFB81C]" />
            </div>
            <div className="absolute -left-3 bottom-8 hidden md:block">
              <Sparkles className="h-6 w-6 text-[#FFF9F0]" />
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 h-24 w-full bg-[#FFF9F0]"
          style={{ clipPath: "ellipse(72% 50% at 50% 100%)" }}
        />
      </section>

      <section className="relative z-10 mx-auto mt-0 max-w-7xl px-6 pb-24 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[2rem] border border-[#FFB81C]/20 bg-white p-8 shadow-[0_20px_60px_rgba(112,26,26,0.08)] md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFB81C]/15 text-[#b45309]">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ea580c]">
                  Festival Essence
                </p>
                <h2 className="text-3xl font-bold font-serif text-[#701a1a]">Why this festival matters</h2>
              </div>
            </div>

            <p className="text-base leading-8 text-[#5A4638] md:text-lg">{festival.overview}</p>

            <div className="mt-8 rounded-[1.75rem] bg-gradient-to-r from-[#FFF4D6] via-white to-[#FFE9D0] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a16207]">
                Spiritual Significance
              </p>
              <p className="mt-3 text-base leading-8 text-[#5A4638]">{festival.significance}</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#FFB81C]/20 bg-gradient-to-b from-[#2D0A0A] via-[#5b140f] to-[#8a3412] p-8 text-white shadow-[0_20px_60px_rgba(45,10,10,0.18)]">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#FFCF73]">
              Meditation
            </p>
            <p className="mt-5 text-2xl font-serif leading-relaxed text-[#FFF4DB]">
              "{festival.meditation}"
            </p>

            <div className="mt-8 h-px w-full bg-white/15" />

            <div className="mt-8 space-y-4">
              {festival.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white/8 px-4 py-4 backdrop-blur-sm"
                >
                  <Star className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFB81C]" />
                  <p className="text-sm leading-6 text-[#FFF0D5]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#EBCB8B]/40 bg-[#FFFDF8] p-8 shadow-[0_18px_50px_rgba(112,26,26,0.06)]">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ea580c]">
              Observances
            </p>
            <h3 className="mt-3 text-3xl font-serif font-bold text-[#701a1a]">
              Devotional practices
            </h3>
            <div className="mt-6 space-y-4">
              {festival.observances.map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-2xl bg-[#FFF5E8] px-5 py-4">
                  <div className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#FFB81C]" />
                  <p className="text-sm leading-7 text-[#5A4638]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#EBCB8B]/40 bg-white p-8 shadow-[0_18px_50px_rgba(112,26,26,0.06)]">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ea580c]">
              At Dakshina Dwaraka Dham
            </p>
            <h3 className="mt-3 text-3xl font-serif font-bold text-[#701a1a]">
              How the celebration can be experienced
            </h3>
            <p className="mt-6 text-sm leading-8 text-[#5A4638] md:text-base">
              {festival.templeCelebration}
            </p>

            <div className="mt-8 rounded-[1.5rem] bg-gradient-to-r from-[#701a1a] to-[#b45309] p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#FFE5A3]">
                Design Note
              </p>
              <p className="mt-3 text-sm leading-7 text-[#FFF2DC]">
                This page keeps the same spiritual-premium festival layout and updates only the
                festival-specific content and poster, so the whole section feels unified across the
                site.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#FFB81C]/25 bg-gradient-to-r from-[#FFF8EA] via-white to-[#FFF1DB] p-8 shadow-[0_18px_50px_rgba(112,26,26,0.05)]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ea580c]">
                Continue Exploring
              </p>
              <h3 className="mt-3 text-3xl font-serif font-bold text-[#701a1a]">
                Explore more temple celebrations
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5A4638] md:text-base">
                Each festival carries its own rasa, history, and devotional practice, but all of
                them invite the same thing: deeper remembrance of Krishna through kirtan, darshan,
                seva, and prasadam.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/activities/cultural-festivals"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#701a1a] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#8f2418]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Festivals
              </Link>
              <Link
                href="/temple"
                className="inline-flex items-center justify-center rounded-full border border-[#FFB81C] px-6 py-3 text-sm font-bold text-[#701a1a] transition hover:bg-[#FFB81C]/10"
              >
                Visit Temple Section
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
