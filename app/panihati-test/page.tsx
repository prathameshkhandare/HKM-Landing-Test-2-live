import Image from "next/image";
import Link from "next/link";

// ─── SEO METADATA ────────────────────────────────────────────────────────────
export const metadata = {
  title:
    "Panihati Chida Dadhi Mahotsava | Srila Prabhupada's ISKCON Thiruvanmiyur – Dakshina Dwaraka Dham",
  description:
    "Celebrate Panihati Chida Dadhi Mahotsava at Srila Prabhupada's ISKCON Thiruvanmiyur – Dakshina Dwaraka Dham, Chennai. Join us for Pallaki Utsavam, sacred ocean dip of Sri Sri Gaur Nitai, Abhishekam, Kirtan, Festival Discourse, Arati, and Chida Dadhi Mahaprasadam. All are cordially invited.",
  keywords: [
    "Panihati Chida Dadhi Mahotsava",
    "Panihati festival Chennai",
    "Danda Mahotsava",
    "ISKCON Thiruvanmiyur",
    "Hare Krishna Movement Chennai",
    "Dakshina Dwaraka Dham",
    "Gaur Nitai ocean dip",
    "Chida Dadhi Mahaprasadam",
    "Lord Nityananda festival",
    "Gaudiya Vaishnava festival Chennai",
  ],
  openGraph: {
    title:
      "Panihati Chida Dadhi Mahotsava | Srila Prabhupada's ISKCON Thiruvanmiyur",
    description:
      "Join us for Pallaki Utsavam, sacred ocean dip of Sri Sri Gaur Nitai, Kirtan, and Chida Dadhi Mahaprasadam at Dakshina Dwaraka Dham, Chennai.",
    url: "https://hkmchennai.org/festivals/panihati-chida-dadhi-mahotsava",
    siteName: "HKM Chennai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Panihati Chida Dadhi Mahotsava | Srila Prabhupada's ISKCON Thiruvanmiyur",
    description:
      "Celebrate the Festival of Lord Nityananda's Boundless Mercy at Dakshina Dwaraka Dham, Chennai.",
  },
  alternates: {
    canonical:
      "https://hkmchennai.org/festivals/panihati-chida-dadhi-mahotsava",
  },
};

// ─── JSON-LD SCHEMA ───────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Event",
      name: "Panihati Chida Dadhi Mahotsava",
      alternateName: ["Danda Mahotsava", "Chipped Rice Festival"],
      description:
        "Annual Gaudiya Vaishnava festival commemorating the divine pastime of Lord Nityananda Prabhu and Srila Raghunatha Dasa Gosvami. Celebrated with Pallaki Utsavam, sacred ocean dip of Sri Sri Gaur Nitai, Abhishekam, Kirtan, Festival Discourse, Arati, and Chida Dadhi Mahaprasadam.",
      startDate: "2026-06-27T17:15:00+05:30",
      location: {
        "@type": "Place",
        name: "Dakshina Dwaraka Dham – Srila Prabhupada's ISKCON Thiruvanmiyur",
        address: {
          "@type": "PostalAddress",
          streetAddress: "#63, 1st Seaward Road, Valmiki Nagar",
          addressLocality: "Thiruvanmiyur",
          addressRegion: "Tamil Nadu",
          postalCode: "600041",
          addressCountry: "IN",
        },
      },
      organizer: {
        "@type": "ReligiousOrganization",
        name: "Hare Krishna Movement Chennai",
        url: "https://hkmchennai.org",
      },
      isAccessibleForFree: true,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode:
        "https://schema.org/OfflineEventAttendanceMode",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Panihati Chida Dadhi Mahotsava?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Panihati Chida Dadhi Mahotsava is an annual Gaudiya Vaishnava festival commemorating the divine pastime of Lord Nityananda Prabhu and Srila Raghunatha Dasa Gosvami at Panihati on the banks of the Ganges. It is also known as Danda Mahotsava — the Festival of Punishment. Through Lord Nityananda's causeless mercy, Raghunatha Dasa Gosvami received the shelter of Sri Chaitanya Mahaprabhu and became one of the Six Gosvamis of Vrindavan.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Panihati Chida Dadhi Mahotsava celebrated in Chennai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In Chennai, this festival is celebrated at Dakshina Dwaraka Dham — Srila Prabhupada's ISKCON Thiruvanmiyur, located at #63, 1st Seaward Road, Valmiki Nagar, Thiruvanmiyur, Chennai 600041.",
          },
        },
        {
          "@type": "Question",
          name: "What is special about ISKCON Thiruvanmiyur's Panihati celebration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Srila Prabhupada's ISKCON Thiruvanmiyur uniquely celebrates this festival with an ocean dip of Sri Sri Gaur Nitai at the Thiruvanmiyur beach, directly in front of the temple — followed by Pallaki Utsavam, Abhishekam, Kirtan, Festival Discourse, Arati, and Chida Dadhi Mahaprasadam distribution.",
          },
        },
        {
          "@type": "Question",
          name: "What is Danda Mahotsava?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Danda Mahotsava means the Festival of Punishment. It refers to the playful way in which Lord Nityananda Prabhu 'punished' Raghunatha Dasa Gosvami by ordering him to arrange a grand feast of chipped rice and yogurt for all the assembled Vaishnavas. This act of apparent punishment was in fact the greatest act of mercy.",
          },
        },
        {
          "@type": "Question",
          name: "How can I support the Panihati Chida Dadhi Mahotsava?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can sponsor the festival seva by contributing through our dedicated donation link at https://rzp.io/rzp/iJuAYqIe. Your offering helps us celebrate this grand festival and distribute Chida Dadhi Mahaprasadam to hundreds of devotees and guests.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://hkmchennai.org",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Festivals",
          item: "https://hkmchennai.org/festivals",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Panihati Chida Dadhi Mahotsava",
          item: "https://hkmchennai.org/festivals/panihati-chida-dadhi-mahotsava",
        },
      ],
    },
  ],
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const highlights = [
  {
    icon: "🪷",
    title: "Pallaki Utsavam",
    desc: "Their Lordships Sri Sri Gaur Nitai carried in a grand palanquin procession",
  },
  {
    icon: "🌊",
    title: "Sacred Ocean Dip",
    desc: "Sri Sri Gaur Nitai lovingly brought to Thiruvanmiyur beach for an ocean dip — right in front of the temple",
  },
  {
    icon: "🪔",
    title: "Abhishekam",
    desc: "Sacred bathing ceremony of Sri Sri Gaur Nitai",
  },
  {
    icon: "🎵",
    title: "Kirtan",
    desc: "Ecstatic congregational chanting of the Holy Names",
  },
  {
    icon: "📖",
    title: "Festival Discourse",
    desc: "Illuminating talk on the divine pastime and its eternal significance",
  },
  {
    icon: "🙏",
    title: "Arati",
    desc: "Offering of lamps to Their Lordships Sri Sri Gaur Nitai",
  },
  {
    icon: "🍚",
    title: "Chida Dadhi Mahaprasadam",
    desc: "Sacred chipped rice and yogurt distributed to all attendees",
  },
];

const galleryImages = [
  {
    src: "/images/festivals/panihati/gaur-nitai-altar.jpg",
    alt: "Sri Sri Gaur Nitai adorned with flowers and mangoes during Panihati Chida Dadhi Mahotsava at Srila Prabhupada's ISKCON Thiruvanmiyur",
  },
  {
    src: "/images/festivals/panihati/pallaki-procession-beach.jpg",
    alt: "Pallaki Utsavam procession on Thiruvanmiyur beach during Panihati Mahotsava — ISKCON Thiruvanmiyur Chennai",
  },
  {
    src: "/images/festivals/panihati/pallaki-carrying.jpg",
    alt: "Devotees carrying Sri Sri Gaur Nitai Pallaki along the seashore at Thiruvanmiyur beach",
  },
  {
    src: "/images/festivals/panihati/abhishekam.jpg",
    alt: "Devotees performing Abhishekam of Sri Sri Gaur Nitai during Panihati Mahotsava at Dakshina Dwaraka Dham",
  },
  {
    src: "/images/festivals/panihati/ocean-dip.jpg",
    alt: "Sri Sri Gaur Nitai ocean dip at Thiruvanmiyur beach during Panihati Chida Dadhi Mahotsava",
  },
  {
    src: "/images/festivals/panihati/deity-ocean.jpg",
    alt: "Sri Sri Gaur Nitai brought to the Thiruvanmiyur beach in front of Dakshina Dwaraka Dham",
  },
  {
    src: "/images/festivals/panihati/cultural-performance.jpg",
    alt: "Cultural performance depicting the Panihati pastime at Srila Prabhupada's ISKCON Thiruvanmiyur",
  },
  {
    src: "/images/festivals/panihati/mahaprasadam-aerial.jpg",
    alt: "Aerial view of Chida Dadhi Mahaprasadam distribution to hundreds of devotees at Dakshina Dwaraka Dham",
  },
  {
    src: "/images/festivals/panihati/congregation.jpg",
    alt: "Devotees and guests seated together during Panihati Chida Dadhi Mahotsava celebrations at ISKCON Thiruvanmiyur",
  },
];

const faqs = [
  {
    q: "What is Panihati Chida Dadhi Mahotsava?",
    a: "Panihati Chida Dadhi Mahotsava is an annual Gaudiya Vaishnava festival commemorating the divine pastime of Lord Nityananda Prabhu and Srila Raghunatha Dasa Gosvami at Panihati on the banks of the Ganges. Also known as Danda Mahotsava — the Festival of Punishment — it celebrates how Lord Nityananda's causeless mercy led Raghunatha Dasa Gosvami to take shelter of Sri Chaitanya Mahaprabhu and become one of the Six Gosvamis of Vrindavan.",
  },
  {
    q: "Where is this festival celebrated in Chennai?",
    a: "In Chennai, this festival is celebrated at Dakshina Dwaraka Dham — Srila Prabhupada's ISKCON Thiruvanmiyur, located at #63, 1st Seaward Road, Valmiki Nagar, Thiruvanmiyur, Chennai 600041.",
  },
  {
    q: "What is special about ISKCON Thiruvanmiyur's celebration?",
    a: "Srila Prabhupada's ISKCON Thiruvanmiyur uniquely celebrates this festival with an ocean dip of Sri Sri Gaur Nitai at the Thiruvanmiyur beach, directly in front of the temple — followed by Pallaki Utsavam, Abhishekam, Kirtan, Festival Discourse, Arati, and Chida Dadhi Mahaprasadam distribution for all.",
  },
  {
    q: "What is Danda Mahotsava?",
    a: "Danda Mahotsava means the Festival of Punishment. It refers to the playful way Lord Nityananda Prabhu 'punished' Raghunatha Dasa Gosvami by ordering him to arrange a grand feast of chipped rice and yogurt for all assembled Vaishnavas. This apparent punishment was in fact the greatest act of mercy — opening the door to his eternal life at the lotus feet of Sri Chaitanya Mahaprabhu.",
  },
  {
    q: "How can I support the Panihati Chida Dadhi Mahotsava?",
    a: "You can sponsor the festival seva by contributing through our dedicated donation link. Your offering helps us celebrate this grand festival and distribute Chida Dadhi Mahaprasadam to hundreds of devotees and guests.",
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#8B6914] mb-3">
      {children}
    </p>
  );
}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 my-2">
      <span className="w-16 h-px bg-[#C9A84C]/40" />
      <span className="text-[#C9A84C] text-lg">✦</span>
      <span className="w-16 h-px bg-[#C9A84C]/40" />
    </div>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  return (
    <details
      className="group border-b border-[#C9A84C]/20 py-5"
      key={index}
    >
      <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
        <span className="font-semibold text-[#3D1A00] text-base leading-snug pr-4 group-open:text-[#8B1A1A]">
          {q}
        </span>
        <span className="shrink-0 w-6 h-6 rounded-full border border-[#C9A84C]/50 flex items-center justify-center text-[#8B6914] text-sm group-open:rotate-45 transition-transform duration-300">
          +
        </span>
      </summary>
      <p className="mt-4 text-[#5C3A1E]/80 leading-relaxed text-sm">{a}</p>
    </details>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function PanihatiPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[#FDF6E3] text-[#3D1A00] font-serif overflow-x-hidden">

        {/* ── BREADCRUMB ── */}
        <nav
          aria-label="Breadcrumb"
          className="bg-[#3D1A00] px-6 py-2.5"
        >
          <ol className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-[#C9A84C]/70 font-sans">
            <li><Link href="/" className="hover:text-[#C9A84C] transition-colors">Home</Link></li>
            <li className="text-[#C9A84C]/40">›</li>
            <li><Link href="/festivals" className="hover:text-[#C9A84C] transition-colors">Festivals</Link></li>
            <li className="text-[#C9A84C]/40">›</li>
            <li className="text-[#C9A84C]">Panihati Chida Dadhi Mahotsava</li>
          </ol>
        </nav>

        {/* ── HERO ── */}
        <section className="relative bg-[#3D1A00] overflow-hidden">
          {/* Decorative background pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M30 0L37.5 15H52.5L41.25 24.375L45 37.5L30 30L15 37.5L18.75 24.375L7.5 15H22.5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          {/* Gold top border */}
          <div className="h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

          <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
            {/* Temple name */}
            <p className="text-[#C9A84C]/70 text-xs tracking-[0.3em] uppercase font-sans mb-6">
              Srila Prabhupada's ISKCON Thiruvanmiyur · Dakshina Dwaraka Dham
            </p>

            {/* Festival badge */}
            <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-4 py-1.5 text-[#C9A84C] text-xs tracking-widest uppercase font-sans mb-8">
              <span>✦</span>
              <span>Annual Vaishnava Festival</span>
              <span>✦</span>
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F5E6C8] leading-tight mb-4"
              style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}
            >
              Panihati Chida Dadhi
              <span className="block text-[#C9A84C]">Mahotsava</span>
            </h1>

            <Divider />

            <p className="text-[#E8D5A3] text-lg md:text-xl mt-6 mb-4 italic">
              The Festival of Lord Nityananda's Boundless Mercy
            </p>
            <p className="text-[#C9A84C]/60 text-sm font-sans tracking-widest uppercase">
              Also known as Danda Mahotsava · The Festival of Punishment
            </p>

            <p className="mt-8 text-[#D4B896]/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-sans">
              One of the most joyful festivals in the Gaudiya Vaishnava calendar —
              celebrated every year at Dakshina Dwaraka Dham with a grand Pallaki
              Utsavam, ocean dip of Sri Sri Gaur Nitai, Abhishekam, ecstatic Kirtan,
              and Chida Dadhi Mahaprasadam for all.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#program"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#B8962E] text-[#3D1A00] font-bold px-8 py-3.5 rounded text-sm tracking-wide transition-all duration-200 font-sans uppercase"
              >
                Join the Celebration
              </a>
              <a
                href="https://rzp.io/rzp/iJuAYqIe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#C9A84C]/60 hover:border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10 font-bold px-8 py-3.5 rounded text-sm tracking-wide transition-all duration-200 font-sans uppercase"
              >
                Support This Festival
              </a>
            </div>
          </div>

          {/* Gold bottom border */}
          <div className="h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
        </section>

        {/* ── ABOUT ── */}
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <SectionLabel>About the Festival</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D1A00] mb-6 leading-snug"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}
          >
            Lord Nityananda's Mercy Upon Raghunatha Dasa Gosvami
          </h2>
          <Divider />
          <div className="mt-8 text-[#5C3A1E] text-base md:text-lg leading-relaxed space-y-5 text-left max-w-3xl mx-auto font-sans">
            <p>
              Panihati Chida Dadhi Mahotsava commemorates a divine pastime from
              the Gaudiya Vaishnava tradition — the meeting of Srila Raghunatha Dasa
              Gosvami with Lord Nityananda Prabhu on the banks of the Ganges at the
              village of Panihati.
            </p>
            <p>
              Through the playful yet supremely merciful "punishment" of Lord
              Nityananda, Raghunatha Dasa Gosvami received the causeless mercy of
              Sri Chaitanya Mahaprabhu and took eternal shelter at His lotus feet —
              ultimately becoming one of the Six Gosvamis of Vrindavan and one of the
              most exalted saints in the Vaishnava tradition.
            </p>
            <p>
              On this most auspicious day, devotees across the world honour this
              extraordinary chain of mercy by distributing chipped rice and yogurt as
              Mahaprasadam — just as it was done on that eternal day at Panihati.
            </p>
          </div>

          {/* Link to blog */}
          <div className="mt-10 inline-flex items-center gap-3 border border-[#C9A84C]/40 rounded px-6 py-4 bg-[#FDF0D0] hover:bg-[#FAE8B0] transition-colors group">
            <span className="text-[#C9A84C] text-xl">📖</span>
            <div className="text-left">
              <p className="text-xs text-[#8B6914] font-sans uppercase tracking-wider mb-0.5">Read the Full Story</p>
              <Link
                href="/blog/panihati-chida-dadhi-mahotsava"
                className="text-[#8B1A1A] font-semibold text-sm group-hover:underline"
              >
                Discover the complete pastime and significance →
              </Link>
            </div>
          </div>
        </section>

        {/* ── HIGHLIGHTS ── */}
        <section className="bg-[#3D1A00] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <SectionLabel>
                <span className="text-[#C9A84C]/70">Festival Highlights</span>
              </SectionLabel>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#F5E6C8]"
                style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}
              >
                What to Expect
              </h2>
              <Divider />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#2A1000] border border-[#C9A84C]/20 rounded-lg p-6 hover:border-[#C9A84C]/50 hover:bg-[#321200] transition-all duration-300 group"
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {item.icon}
                  </div>
                  <h3 className="text-[#C9A84C] font-bold text-base mb-2 font-sans">
                    {item.title}
                  </h3>
                  <p className="text-[#D4B896]/70 text-sm leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROGRAM DETAILS ── */}
        <section id="program" className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <SectionLabel>Program Details</SectionLabel>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#3D1A00]"
                style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}
              >
                Join Us This Year
              </h2>
              <Divider />
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Venue card */}
              <div className="bg-[#FDF0D0] border border-[#C9A84C]/30 rounded-xl p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">⏰</span>
                  <div>
                    <p className="text-xs font-sans uppercase tracking-wider text-[#8B6914] mb-1">Time</p>
                    <p className="text-[#3D1A00] font-bold text-xl">5:15 PM Onwards</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">📍</span>
                  <div>
                    <p className="text-xs font-sans uppercase tracking-wider text-[#8B6914] mb-1">Venue</p>
                    <p className="text-[#3D1A00] font-bold text-base leading-snug">
                      Dakshina Dwaraka Dham
                    </p>
                    <p className="text-[#5C3A1E] text-sm font-sans mt-0.5">
                      Srila Prabhupada's ISKCON Thiruvanmiyur
                    </p>
                    <p className="text-[#5C3A1E]/70 text-sm font-sans mt-1">
                      #63, 1st Seaward Road, Valmiki Nagar<br />
                      Thiruvanmiyur, Chennai — 600041
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">🎟️</span>
                  <div>
                    <p className="text-xs font-sans uppercase tracking-wider text-[#8B6914] mb-1">Entry</p>
                    <p className="text-[#3D1A00] font-bold">Free · All Are Cordially Invited</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Dakshina+Dwaraka+Dham+ISKCON+Thiruvanmiyur+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#3D1A00] hover:bg-[#5C2A00] text-[#C9A84C] py-3 rounded text-sm font-sans font-bold uppercase tracking-wider transition-colors mt-2"
                >
                  Get Directions →
                </a>
              </div>

              {/* Poster slot */}
              <div className="rounded-xl overflow-hidden border-2 border-[#C9A84C]/30 shadow-xl">
                <div className="bg-[#F5E6C8] aspect-[3/4] flex items-center justify-center">
                  {/* Festival poster goes here */}
                  <div className="text-center p-8">
                    <p className="text-[#C9A84C] text-4xl mb-4">🪷</p>
                    <p className="text-[#8B6914] font-sans text-sm">
                      Festival Poster
                    </p>
                    <p className="text-[#B8962E]/60 font-sans text-xs mt-1">
                      {/* Replace with Next.js Image component pointing to your poster */}
                      {/* <Image src="/images/festivals/panihati/poster.jpg" alt="Panihati Chida Dadhi Mahotsava 2026 Poster" fill className="object-cover" /> */}
                      Place poster image here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DONATE ── */}
        <section className="bg-[#8B1A1A] py-20 px-6 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 3L25 15H37L27 23L31 35L20 27L9 35L13 23L3 15H15z' fill='%23C9A84C'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative max-w-3xl mx-auto text-center">
            <p className="text-[#F5C842]/70 text-xs tracking-[0.3em] uppercase font-sans mb-4">
              Festival Seva
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#F5E6C8] mb-6"
              style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}
            >
              Become Part of This Seva
            </h2>
            <Divider />
            <p className="mt-8 text-[#F5E6C8]/80 text-base md:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
              Your contribution helps us offer a grand celebration to Their Lordships
              Sri Sri Gaur Nitai and distribute Chida Dadhi Mahaprasadam to hundreds
              of devotees and guests. By supporting this festival, you become part of
              the unbroken chain of mercy that flows from Lord Nityananda Prabhu to
              all of us.
            </p>
            <p className="text-[#F5C842]/60 text-sm font-sans italic mt-4">
              Every offering, however small, is received by the Lord with great pleasure.
            </p>
            <a
              href="https://rzp.io/rzp/iJuAYqIe"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-3 bg-[#C9A84C] hover:bg-[#B8962E] text-[#3D1A00] font-bold px-10 py-4 rounded text-sm tracking-wide transition-all duration-200 font-sans uppercase shadow-lg hover:shadow-xl"
            >
              🙏 Donate Now — Support Panihati Mahotsava
            </a>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section className="py-20 px-6 bg-[#FDF6E3]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <SectionLabel>Celebration Gallery</SectionLabel>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#3D1A00]"
                style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}
              >
                A Glimpse of the Celebration
              </h2>
              <Divider />
              <p className="mt-4 text-[#5C3A1E]/70 font-sans text-base max-w-xl mx-auto">
                See how devotees came together to celebrate this most joyful festival
                at Dakshina Dwaraka Dham.
              </p>
            </div>

            {/* Gallery grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-lg bg-[#F5E6C8] group ${
                    i === 0 ? "col-span-2 md:col-span-2 aspect-video" : "aspect-square"
                  }`}
                >
                  {/* Changed to regular img tags since Images from public directory won't exist */}
                  {/* Alternatively, just display a placeholder image for testing */}
                  <div className="w-full h-full bg-[#E8D5A3] flex items-center justify-center">
                    <span className="text-[#8B6914] text-xs font-sans text-center px-2">{img.alt}</span>
                  </div>
                  <div className="absolute inset-0 bg-[#3D1A00]/0 group-hover:bg-[#3D1A00]/20 transition-colors duration-300" />
                </div>
              ))}
            </div>

            {/* YouTube */}
            <div className="mt-14 text-center">
              <p className="text-xs font-sans uppercase tracking-[0.25em] text-[#8B6914] mb-3">
                Watch the Celebration
              </p>
              <h3
                className="text-2xl font-bold text-[#3D1A00] mb-3"
                style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}
              >
                Relive the Devotion, the Procession, and the Joy
              </h3>
              <p className="text-[#5C3A1E]/70 font-sans text-sm mb-8">
                Panihati Mahotsava at Dakshina Dwaraka Dham
              </p>
              <div className="max-w-lg mx-auto rounded-xl overflow-hidden shadow-2xl border-2 border-[#C9A84C]/30">
                <div className="relative aspect-video bg-[#1a0a00]">
                  <iframe
                    src="https://www.youtube.com/embed/D4ZRbESqE3s"
                    title="Panihati Chida Dadhi Mahotsava at Dakshina Dwaraka Dham ISKCON Thiruvanmiyur Chennai"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-[#FDF0D0] py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel>Common Questions</SectionLabel>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#3D1A00]"
                style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}
              >
                Frequently Asked Questions
              </h2>
              <Divider />
            </div>
            <div>
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CLOSING CTA ── */}
        <section className="bg-[#3D1A00] py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-[#C9A84C] text-4xl mb-6">🙏</div>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#F5E6C8] mb-4"
              style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}
            >
              Receive the Mercy of Sri Sri Gaur Nitai
            </h2>
            <Divider />
            <p className="mt-6 text-[#D4B896]/80 font-sans text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              All are cordially invited to be part of this most joyful celebration.
              Come, chant, and receive Mahaprasadam.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a
                href="https://maps.google.com/?q=Dakshina+Dwaraka+Dham+ISKCON+Thiruvanmiyur+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#C9A84C]/60 hover:border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10 font-bold px-7 py-3 rounded text-sm tracking-wide transition-all duration-200 font-sans uppercase"
              >
                📍 Get Directions
              </a>
              <a
                href="tel:+919789057101"
                className="inline-flex items-center justify-center gap-2 border border-[#C9A84C]/60 hover:border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10 font-bold px-7 py-3 rounded text-sm tracking-wide transition-all duration-200 font-sans uppercase"
              >
                📞 Contact Us
              </a>
              <a
                href="https://rzp.io/rzp/iJuAYqIe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#B8962E] text-[#3D1A00] font-bold px-7 py-3 rounded text-sm tracking-wide transition-all duration-200 font-sans uppercase"
              >
                🙏 Donate Now
              </a>
            </div>

            {/* Internal links */}
            <div className="mt-16 pt-10 border-t border-[#C9A84C]/20">
              <p className="text-[#C9A84C]/50 text-xs font-sans uppercase tracking-wider mb-5">
                Explore More
              </p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-sans">
                <Link href="/blog/panihati-chida-dadhi-mahotsava" className="text-[#C9A84C]/70 hover:text-[#C9A84C] transition-colors">
                  Full Pastime Article →
                </Link>
                <Link href="/deities" className="text-[#C9A84C]/70 hover:text-[#C9A84C] transition-colors">
                  Sri Sri Gaur Nitai →
                </Link>
                <Link href="/festivals" className="text-[#C9A84C]/70 hover:text-[#C9A84C] transition-colors">
                  All Festivals →
                </Link>
                <Link href="/annadanam" className="text-[#C9A84C]/70 hover:text-[#C9A84C] transition-colors">
                  Prasadam Seva →
                </Link>
                <Link href="/donate" className="text-[#C9A84C]/70 hover:text-[#C9A84C] transition-colors">
                  Donate →
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
