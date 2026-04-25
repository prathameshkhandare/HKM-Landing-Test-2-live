"use client";

// app/visitor-guide/VisitorGuideClient.tsx
// All interactive parts (FAQ accordion) live here as a Client Component

import React from "react";
import Link from "next/link";

// ─── DATA ────────────────────────────────────────────────────────────────────

const TIMINGS = [
  { time: "4:30 AM", programme: "Mangala Aarti" },
  { time: "5:00 AM", programme: "Mantra Meditation (Japa Session)" },
  { time: "7:15 AM", programme: "Shringara Aarti" },
  { time: "7:30 AM", programme: "Guru Puja" },
  { time: "8:00 AM", programme: "Srimad Bhagavatam Class" },
  { time: "12:25 PM", programme: "Rajbhoga Aarti" },
  { time: "4:15 PM", programme: "Dhupa Aarti — Darshan Opens" },
  { time: "7:00 PM", programme: "Sandhya Aarti" },
  { time: "7:30 PM", programme: "Bhagavad-Gita Discourse" },
  { time: "8:00 – 8:15 PM", programme: "Shayana Aarti — Darshan Closes" },
];

const DEITIES = [
  {
    icon: "🌕",
    images: ["/assets/temple/deities/gaur-nitai-dieties.jpg"],
    name: "Sri Sri Gaur Nitai",
    desc: "Sri Chaitanya Mahaprabhu and Nityananda Prabhu — the golden avatars of mercy who shower unconditional love upon all",
  },
  {
    icon: "🦚",
    images: ["/assets/temple/deities/krishna-rukmini-satyabhama.jpg"],
    name: "Sri Sri Krishna Rukmini Satyabhama",
    desc: "The Lord of Dwaraka in His full divine glory, with His beloved queens — the principal focus of worship at Dakshina Dwaraka Dham",
  },
  {
    icon: "📿",
    images: ["/assets/temple/deities/prabhupada.jpg"],
    name: "Srila Prabhupada",
    desc: "The Founder-Acharya of ISKCON who carried the message of Lord Krishna to every corner of the world",
  },
];

const INFO_CARDS = [
  {
    icon: "🎟️",
    title: "Entry & Donation",
    body: (
      <>
        Entry and Darshan are <strong>absolutely free of cost.</strong> We never charge for
        blessings. Devotees who wish to contribute may donate online through our website — for
        Dakshina Dwaraka Dham construction, festival sevas, or cultural programs.
      </>
    ),
  },
  {
    icon: "👗",
    title: "Dress Code",
    body: (
      <>
        Please dress modestly as a mark of respect. <strong>Men:</strong> Dhoti or full trousers
        with shirt. <strong>Women:</strong> Saree, salwar, or kurta. Shorts, sleeveless and
        revealing clothing are not permitted. Remove footwear before entering.
      </>
    ),
  },
  {
    icon: "📸",
    title: "Photography",
    body: (
      <>
        Photography of the deities and temple premises is welcome. However,{" "}
        <strong>selfies with the Lord are strictly not permitted.</strong> Maintain sanctity in
        the deity hall and avoid flash photography during aartis.
      </>
    ),
  },
  {
    icon: "🏛️",
    title: "What to See",
    body: (
      <>
        The main deity hall accommodates up to <strong>150 devotees.</strong> A book counter
        stocks Bhagavad Gita As It Is, Srimad Bhagavatam, and all of Srila Prabhupada&apos;s
        writings. The temple lawn opens to a breathtaking{" "}
        <strong>view of the Bay of Bengal.</strong>
      </>
    ),
  },
  {
    icon: "🏨",
    title: "Guest House",
    body: (
      <>
        Our <strong>Dwarka Palace</strong> — a Kalyana Mandapam with guest house facility — is
        available for visiting devotees. Please check availability in advance by calling{" "}
        <strong>+91 93449 14701.</strong>
      </>
    ),
  },
  {
    icon: "🚫",
    title: "Restricted Items",
    body: (
      <>
        Alcohol, cigarettes, tobacco, and all intoxicants are{" "}
        <strong>strictly prohibited</strong> on temple premises. Outside food is not permitted
        inside. Silence and decorum must be maintained in the deity hall at all times.
      </>
    ),
  },
];

const PROGRAMS = [
  {
    time: "Daily · 5:00 AM – 7:15 AM",
    title: "Japa Meditation Sessions",
    desc: "Every morning, devotees gather to chant the Hare Krishna Mahamantra in a peaceful, focused atmosphere. Open to all — beginners especially welcome. Simply come and experience the transformative power of mantra meditation.",
  },
  {
    time: "Daily · 8:00 AM",
    title: "Srimad Bhagavatam Class",
    desc: "A beautiful morning class on the timeless wisdom of the Srimad Bhagavatam. Families are welcome on weekends and receive prasadam after the class.",
  },
  {
    time: "Every Sunday",
    title: "ICVK Classes for Children",
    desc: "Young children are introduced to Indian culture, values, and Krishna consciousness in a fun, age-appropriate setting — building good character and helping them lead happy, spiritually grounded lives.",
  },
  {
    time: "Regular · Family Programme",
    title: "Bhagavad Gita Classes for Families",
    desc: "Families attend together — children join their classes while parents attend Bhagavad Gita sessions and learn to apply this timeless wisdom in everyday modern life.",
  },
  {
    time: "Saturdays & Sundays · 5:20 PM onwards",
    title: "Kala Madhuryam — Classical Arts Programme",
    desc: "Artists from across India present classical dance, music, bhajans, and devotional singing before Lord Krishna. Witness these performances absolutely free — an experience that naturally awakens devotion in the heart.",
  },
  {
    time: "Sundays · 5:30 PM onwards",
    title: "Youth Programme — Bhagavad Gita Fundamentals",
    desc: "Specially curated for young adults. Receive the foundational knowledge of the Bhagavad Gita, followed by aarti, kirtan, and prasadam. An evening that nourishes the heart, mind, and soul.",
  },
  {
    time: "Every Ekadashi · 5:15 AM – 8:15 PM",
    title: "Ekadashi Japa Yajna",
    desc: "On each Ekadashi, devotees sit together and chant the Hare Krishna Mahamantra throughout the entire day. Registration begins at 5:15 AM. Become fully absorbed in the Lord's holy names and receive His special blessings.",
  },
];

const FESTIVALS = [
  "🦚 Sri Krishna Janmashtami",
  "🌸 Sri Radhashtami",
  "🎡 Rath Yatra",
  "🌕 Vaikuntha Ekadashi",
  "✨ Sri Nityananda Trayodashi",
  "🌕 Sri Gaura Purnima",
  "🏹 Sri Ram Navami",
  "🦁 Sri Narasimha Jayanti",
  "🍚 Panihati Chidadhi Mahotsav",
  "🌿 Jhulan Utsav",
  "🌙 Sri Balram Jayanti",
  "📚 Sri Vyas Puja",
  "⛰️ Govardhan Puja",
  "🌾 Pongal",
  "🪔 Deepotsav — Karthik Month",
];

const DOS = [
  "Remove footwear before entering",
  "Dress modestly and respectfully",
  "Participate in aarti and kirtan",
  "Maintain silence in the deity hall",
  "Accept prasadam with both hands",
  "Arrive early for a peaceful darshan",
  "Bring your children — all are welcome",
  "Take photos of the deities and temple area",
];

const DONTS = [
  "Take selfies with the Lord — not permitted",
  "Bring outside food inside the temple",
  "Wear shorts, sleeveless or revealing attire",
  "Speak loudly inside the deity hall",
  "Bring alcohol, cigarettes or intoxicants",
  "Touch the deities or any sacred objects",
  "Use camera flash during aarti or worship",
];

const TIME_CARDS = [
  { icon: "🌅", title: "Morning Visit", desc: "Serene, peaceful darshan. Beautiful kirtan, Bhagavatam class, and morning prasadam. Ideal for Mangala Aarti at 4:30 AM." },
  { icon: "🌇", title: "Evening Visit", desc: "Most popular time. Vibrant Sandhya Aarti, Bhagavad Gita discourse, and Kala Madhuryam on weekends." },
  { icon: "📅", title: "Weekdays", desc: "Less crowded, more intimate darshan. Ideal for quiet contemplation and personal time with the Lord." },
  { icon: "🎉", title: "Weekends", desc: "Hundreds of devotees gather here. Vibrant energy, special cultural programmes, and a joyful community atmosphere." },
  { icon: "🌬️", title: "Best Season", desc: "October to February — the Chennai heat is gentle, the Bay of Bengal breeze is refreshing, and the atmosphere is perfect." },
];

const REACH_CARDS = [
  { icon: "🚌", title: "By Bus", desc: (<>Take a bus to <strong>Thiruvanmiyur Bus Depot.</strong> From there, the temple is just <strong>1.5 km</strong> away — a short and easy auto ride.</>) },
  { icon: "🚂", title: "By Local Train", desc: (<>Board a local train from <strong>Chennai Central</strong> to <strong>Thiruvanmiyur Railway Station.</strong> The temple is approximately <strong>2 km</strong> from the station by auto.</>) },
  { icon: "🚕", title: "By Auto / Cab", desc: (<>Ask for <strong>&quot;Dwarka Palace&quot;</strong>, <strong>&quot;Hare Krishna Kovil&quot;</strong>, or <strong>&quot;Behind Marundeeswarar Temple, Thiruvanmiyur.&quot;</strong> Any driver in the area will know it.</>) },
  { icon: "🚗", title: "Parking", desc: (<><strong>Free parking</strong> available for up to <strong>50 four-wheelers.</strong> Come early on weekends and festival days to secure a spot.</>) },
];

const FAQS = [
  {
    q: "Is ISKCON Thiruvanmiyur open every day?",
    a: "Yes! The temple is open every single day of the year — including Sundays and public holidays. Darshan begins with Mangala Aarti at 4:30 AM and closes with Shayana Aarti at 8:15 PM.",
  },
  {
    q: "Can non-Hindus visit ISKCON temple?",
    a: "Absolutely! Everyone is welcome — regardless of religion, caste, nationality, or background. Lord Krishna's house is open to all, and we warmly receive visitors from every walk of life.",
  },
  {
    q: "Is entry to the temple free?",
    a: "Yes, entry and darshan are completely free. We never charge for the Lord's blessings. If you wish to contribute, you may donate online through our website for temple construction or various sevas.",
  },
  {
    q: "What is the dress code at ISKCON Thiruvanmiyur?",
    a: "Please dress modestly. Men: dhoti or full trousers with a shirt. Women: saree, salwar, or kurta. Shorts, sleeveless tops, and revealing clothing are not permitted. Remove footwear before entering.",
  },
  {
    q: "Is photography allowed inside the temple?",
    a: "Yes, you may photograph the deities and temple premises. However, selfies with the Lord are not permitted. Please avoid flash photography during aartis to maintain the sanctity of worship.",
  },
  {
    q: "How long does a typical temple visit take?",
    a: "A darshan visit takes about 15–20 minutes. If you attend an aarti, Bhagavad Gita class, or the Kala Madhuryam programme on weekends, you may want to stay longer — and most visitors are delighted that they did!",
  },
  {
    q: "Is there a guest house at the temple?",
    a: "Yes. Our Dwarka Palace Kalyana Mandapam has guest house facilities for visiting devotees. Please check availability in advance by calling +91 93449 14701.",
  },
  {
    q: "Can I attend Mangala Aarti at 4:30 AM?",
    a: "Absolutely! Mangala Aarti at 4:30 AM is open to all. Predawn chanting, softly lit lamps, and the gentle sound of the Bay of Bengal in the background — it is one of the most blissful experiences the temple has to offer.",
  },
];

const CONNECT_LINKS = [
  {
    label: "Official Website",
    title: "Hare Krishna Movement Chennai",
    href: "https://hkmchennai.org/",
  },
  {
    label: "Twitter (X)",
    title: "HKM Chennai (Official X Handle)",
    href: "https://x.com/ChennaiHare",
  },
  {
    label: "Instagram",
    title: "HKM Chennai Official Instagram (@hkm_chennai)",
    href: "https://www.instagram.com/hkm_chennai",
  },
  {
    label: "Facebook",
    title: "Hare Krishna Movement Chennai (Official Page)",
    href: "https://www.facebook.com/hkmcworld/",
  },
  {
    label: "LinkedIn",
    title: "Hare Krishna Movement Chennai (Organization Profile)",
    href: "https://www.linkedin.com/company/hare-krishna-movement-chennai?originalSubdomain=in",
  },
  {
    label: "Donation / Campaign Page",
    title: "Dakshina Dwaraka Dham Construction Campaign",
    href: "https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign",
  },
  {
    label: "WhatsApp Channel",
    title: "HKM Chennai Official WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=919789057101&text&type=phone_number&app_absent=0",
  },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function TitleRule({ symbol = "🪷" }: { symbol?: string }) {
  return (
    <div className="flex items-center gap-3 my-4 mb-8">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C9922A] to-transparent" />
      <span className="text-[#C9922A] text-xl">{symbol}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C9922A] to-transparent" />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="block text-[11px] tracking-[6px] uppercase mb-2.5"
      style={{ fontFamily: "'Cinzel', serif", color: "#E8650A" }}
    >
      {children}
    </span>
  );
}

function SectionTitle({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className="font-bold leading-tight mb-2"
      style={{
        fontFamily: "'Cinzel Decorative', serif",
        fontSize: "clamp(22px, 4vw, 38px)",
        color: light ? "#F0C96B" : "#3D1C00",
      }}
    >
      {children}
    </h2>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="faq-item border border-[#C9922A]/20 rounded-2xl overflow-hidden bg-[#FDF3DC]">
      <summary
        className="w-full flex justify-between items-center gap-4 px-7 py-5 text-left cursor-pointer select-none hover:bg-[#C9922A]/10 transition-colors"
        style={{ fontFamily: "'Cinzel', serif", color: "#3D1C00", fontSize: "15px", letterSpacing: "0.5px" }}
      >
        <span>{q}</span>
        <span className="faq-chevron text-[#C9922A] text-xl flex-shrink-0" aria-hidden>
          ▼
        </span>
      </summary>
      <div className="px-7 pt-0 pb-6 border-t-0 bg-[#FFFDF5]">
        <p className="text-[#3D1C00] text-[17px] leading-relaxed">{a}</p>
      </div>
    </details>
  );
}

// ─── MAIN CLIENT COMPONENT ────────────────────────────────────────────────────

export default function VisitorGuideClient() {
  const visitorGuideStyles = `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

        @keyframes pulse-om {
          0%, 100% { opacity: 0.12; transform: translateX(-50%) scale(1); }
          50%       { opacity: 0.22; transform: translateX(-50%) scale(1.04); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up-1 { animation: fadeInUp 1s ease 0.1s both; }
        .animate-fade-in-up-2 { animation: fadeInUp 1s ease 0.2s both; }
        .animate-fade-in-up-3 { animation: fadeInUp 1s ease 0.3s both; }
        .animate-fade-in-up-4 { animation: fadeInUp 1s ease 0.4s both; }
        .animate-pulse-om      { animation: pulse-om 4s ease-in-out infinite; }

        .drop-cap::first-letter {
          font-family: 'Cinzel Decorative', serif;
          font-size: 72px;
          font-weight: 900;
          color: #C9922A;
          float: left;
          line-height: 0.75;
          margin: 8px 12px 0 0;
        }
        .pull-quote::before {
          content: '\\201C';
          font-size: 80px;
          color: #C9922A;
          opacity: 0.3;
          position: absolute;
          top: -10px;
          left: 14px;
          font-family: Georgia, serif;
          line-height: 1;
        }
        details.faq-item > summary { list-style: none; }
        details.faq-item > summary::-webkit-details-marker { display: none; }
        .faq-chevron { transition: transform 0.3s ease; }
        details.faq-item[open] .faq-chevron { transform: rotate(180deg); }
        html { scroll-behavior: smooth; }
      `;

  return (
      <>
        {/* Google Fonts */}
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: visitorGuideStyles }} />

      <main style={{ fontFamily: "'EB Garamond', Georgia, serif", background: "#FEF9EE", color: "#1A0A00" }}>

        {/* ── HERO ── */}
        <section
          className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(232,101,10,0.22) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(201,146,42,0.15) 0%, transparent 50%), linear-gradient(170deg, #1A0A00 0%, #2E0E00 40%, #0D2B30 100%)",
          }}
        >
          {/* Grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(201,146,42,0.04) 60px, rgba(201,146,42,0.04) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(201,146,42,0.04) 60px, rgba(201,146,42,0.04) 61px)",
            }}
          />
          {/* Om */}
          <span
            className="absolute top-28 md:top-14 lg:top-8 left-1/2 pointer-events-none animate-pulse-om"
            style={{ fontSize: "clamp(56px,10vw,110px)", color: "#C9922A" }}
          >
            ॐ
          </span>

          <p className="animate-fade-in-up-1 mb-5 uppercase tracking-[5px]"
            style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(10px,2vw,13px)", color: "#F5A623" }}>
            Complete Visitor Guide · 2025
          </p>

          <div className="animate-fade-in-up-3 text-[28px] tracking-[16px] mb-4" style={{ color: "#C9922A" }}>
            🪷 ✦ 🪷
          </div>

          <h1
            className="animate-fade-in-up-2 font-black max-w-4xl leading-tight"
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(26px, 5.5vw, 68px)",
              color: "#FFFDF5",
              textShadow: "0 4px 40px rgba(201,146,42,0.4)",
            }}
          >
            Dakshina Dwaraka Dham
            <br />
            <span style={{ background: "linear-gradient(135deg, #F0C96B, #E8650A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              ISKCON Thiruvanmiyur, Chennai
            </span>
          </h1>

          <p
            className="animate-fade-in-up-4 italic max-w-2xl mt-5"
            style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(16px,2.5vw,22px)", color: "rgba(253,243,220,0.82)" }}
          >
            Timings · Darshan · Prasadam · Festivals · How to Reach
            <br />
            &amp; Everything You Need to Know Before You Visit
          </p>

          {/* Wave */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 80" fill="none" className="block w-full">
              <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FEF9EE" />
            </svg>
          </div>
        </section>

        {/* ── INTRO BAND ── */}
        <div
          className="text-center px-6 py-7 font-semibold tracking-[2px]"
          style={{
            background: "linear-gradient(135deg, #E8650A 0%, #C9922A 100%)",
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(12px,2vw,16px)",
            color: "#1A0A00",
          }}
        >
          🌊 Nestled on the Shores of the Bay of Bengal · Thiruvanmiyur · Chennai · The Future Tallest Temple of Chennai 🌊
        </div>

        {/* ── INTRO ARTICLE ── */}
        <section className="py-20" style={{ background: "#FFFDF5" }}>
          <div className="max-w-3xl mx-auto px-6">
            <SectionLabel>Welcome</SectionLabel>
            <SectionTitle>
              A <span style={{ color: "#C9922A" }}>Divine Destination</span> Unlike Any Other
            </SectionTitle>
            <TitleRule />
            <p className="drop-cap text-[#2C1000] mb-6 text-justify" style={{ fontSize: "clamp(17px,2vw,20px)", lineHeight: 1.85 }}>
              Imagine stepping out of the rush of Chennai&apos;s city life and suddenly finding yourself standing at the
              edge of the Bay of Bengal, with the sound of ocean waves blending with the melodious chanting of{" "}
              <em>Hare Krishna</em>. The air fills with the fragrance of incense, flowers adorn the deities in glittering
              splendour, and a deep, inexplicable peace washes over your heart. This is not imagination — this is the
              everyday reality at <strong>Dakshina Dwaraka Dham, ISKCON Thiruvanmiyur.</strong>
            </p>
            <p className="text-[#2C1000] mb-6 text-justify" style={{ fontSize: "clamp(17px,2vw,20px)", lineHeight: 1.85 }}>
              Situated along the scenic seashore of Thiruvanmiyur, this magnificent spiritual and cultural complex is
              conceived by Srila Prabhupada&apos;s ISKCON Hare Krishna Movement, Chennai. Currently under construction,
              once complete, it will stand as the <strong>tallest temple in Chennai</strong> — a second Shore Temple of
              Tamil Nadu, designed in the magnificent tradition of <strong>Pallava-style architecture.</strong>
            </p>

            {/* Pull quote */}
            <div
              className="pull-quote relative border-l-4 border-[#C9922A] rounded-r-xl my-9 italic"
              style={{
                padding: "18px 28px 18px 48px",
                background: "linear-gradient(135deg, #FDF3DC, #FFFDF5)",
                fontSize: "clamp(17px,2.5vw,21px)",
                color: "#3D1C00",
              }}
            >
              Just as Dwaraka stands by the western sea as Lord Krishna&apos;s own divine city, Dakshina Dwaraka Dham
              rises on the southeastern shores of the Bay of Bengal — bringing that same divine presence to the South.
            </div>

            <p className="text-[#2C1000] mb-6 text-justify" style={{ fontSize: "clamp(17px,2vw,20px)", lineHeight: 1.85 }}>
              Whether you are a devoted bhakta, a curious first-time visitor, a family seeking a meaningful outing, or a
              traveller in search of stillness — this temple has something profound to offer. Every person who enters —
              regardless of religion, caste, or nationality — is welcomed with the blessings of{" "}
              <strong>Sri Sri Gaur Nitai, Sri Sri Krishna Rukmini Satyabhama,</strong> and{" "}
              <strong>Srila Prabhupada.</strong>
            </p>
          </div>
        </section>

        {/* ── DEITIES ── */}
        <section className="py-18 py-16" style={{ background: "linear-gradient(135deg, #0D2B30 0%, #1A0A00 100%)" }}>
          <div className="max-w-5xl mx-auto px-6">
            <SectionLabel>Our Beloved Lords</SectionLabel>
            <SectionTitle light>
              The <span style={{ color: "#F5A623" }}>Presiding Deities</span>
            </SectionTitle>
            <TitleRule symbol="✦" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
              {DEITIES.map((d) => (
                <div
                  key={d.name}
                  className="rounded-2xl p-6 text-center border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(201,146,42,0.15)] group"
                  style={{ background: "rgba(201,146,42,0.08)", border: "1px solid rgba(201,146,42,0.25)" }}
                >
                  <div className={`mb-6 relative w-full rounded-xl overflow-hidden border border-[#F0C96B]/30 bg-[#1A0A00] shadow-inner ${d.images && d.images.length > 1 ? "aspect-[8/5]" : "aspect-[4/5]"}`}
                  >
                    {/* Render images if available, otherwise fallback icon */}
                    {d.images && d.images.length > 0 ? (
                      <div className="flex w-full h-full gap-[2px]">
                        {d.images.map((img, idx) => (
                          <img 
                            key={idx}
                            src={img} 
                            alt={d.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            style={{ flex: 1 }}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center opacity-60">
                        <span className="text-6xl">{d.icon}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="mb-3 uppercase tracking-[2px] min-h-[40px] flex items-center justify-center" 
                    style={{ fontFamily: "'Cinzel', serif", fontSize: "14px", color: "#F0C96B", lineHeight: 1.4 }}>
                    {d.name}
                  </h3>
                  <div className="w-12 h-px bg-[#C9922A]/40 mx-auto mb-4" />
                  <p className="italic text-[15px] leading-relaxed min-h-[80px]" style={{ color: "rgba(253,243,220,0.72)" }}>
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIMINGS ── */}
        <section className="py-16" style={{ background: "#FFFDF5" }}>
          <div className="max-w-3xl mx-auto px-6">
            <SectionLabel>Daily Schedule</SectionLabel>
            <SectionTitle>
              Aarti &amp; <span style={{ color: "#C9922A" }}>Darshan Timings</span>
            </SectionTitle>
            <TitleRule />
            <div className="overflow-hidden rounded-2xl mt-6 shadow-lg">
              <table className="w-full border-collapse">
                <thead style={{ background: "linear-gradient(135deg, #3D1C00, #1A0A00)" }}>
                  <tr>
                    {["Time", "Programme"].map((h) => (
                      <th
                        key={h}
                        className="text-left px-6 py-4 uppercase tracking-[3px] text-[13px]"
                        style={{ fontFamily: "'Cinzel', serif", color: "#F0C96B" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TIMINGS.map((row, i) => (
                    <tr
                      key={row.time}
                      className="border-b border-[#C9922A]/10 transition-colors hover:bg-[#FDF3DC]"
                      style={{ background: i % 2 === 1 ? "rgba(201,146,42,0.04)" : "transparent" }}
                    >
                      <td
                        className="px-6 py-4 font-semibold whitespace-nowrap text-[14px] tracking-wide"
                        style={{ fontFamily: "'Cinzel', serif", color: "#E8650A" }}
                      >
                        {row.time}
                      </td>
                      <td className="px-6 py-4 text-[17px]" style={{ color: "#3D1C00" }}>
                        {row.programme}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 italic text-center text-[15px]" style={{ color: "#7A4A00" }}>
              ⏰ Temple is open every day of the year. Timings may vary slightly on major festival days.
            </p>
          </div>
        </section>

        {/* ── INFO CARDS ── */}
        <section
          className="py-16"
          style={{ background: "linear-gradient(180deg, #FEF9EE 0%, #FDF3DC 100%)" }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <SectionLabel>Before You Visit</SectionLabel>
            <SectionTitle>
              Essential <span style={{ color: "#C9922A" }}>Visitor Information</span>
            </SectionTitle>
            <TitleRule symbol="✦" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-9">
              {INFO_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl p-9 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "#FFFDF5",
                    borderTop: "4px solid #C9922A",
                    boxShadow: "0 4px 30px rgba(201,146,42,0.1)",
                  }}
                >
                  <span className="text-4xl mb-4 block">{card.icon}</span>
                  <h3
                    className="uppercase tracking-[2px] mb-3 text-[14px]"
                    style={{ fontFamily: "'Cinzel', serif", color: "#3D1C00" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-[16px] leading-7" style={{ color: "#4A2800" }}>
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRASADAM ── */}
        <section
          className="py-16 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #FDF3DC 0%, #FFF8EC 100%)" }}
        >
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <SectionLabel>Sanctified Food</SectionLabel>
            <SectionTitle>
              Prasadam — <span style={{ color: "#C9922A" }}>Food for the Soul</span>
            </SectionTitle>
            <TitleRule />
            <p className="mb-4 text-[#3D1C00]" style={{ fontSize: "18px", lineHeight: 1.85 }}>
              No visit to ISKCON is truly complete without tasting <strong>prasadam</strong> — the sanctified food
              offered to Lord Krishna. Free from onion and garlic, purely sattvic in nature, this is not merely food —
              it is the Lord&apos;s mercy. When you partake of prasadam, your very existence becomes purified, helping
              you lead a more peaceful and spiritually fulfilling life.
            </p>

            <div
              className="rounded-2xl p-9 my-8 relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #E8650A, #C9922A)", color: "#1A0A00" }}
            >
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-8xl opacity-20 pointer-events-none">🍛</span>
              <h3 className="mb-3" style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(16px,3vw,24px)" }}>
                🍽️ When is Prasadam Served?
              </h3>
              <p className="text-[17px] leading-7 max-w-[85%]">
                During <strong>major festivals</strong>, prasadam is distributed to all visitors. On{" "}
                <strong>weekends</strong>, prasadam is served in the morning after Srimad Bhagavatam class.{" "}
                <strong>Every day of the week</strong>, donna prasadam is available for all who visit the temple.
              </p>
            </div>

            <p className="text-[#3D1C00]" style={{ fontSize: "17px", lineHeight: 1.85 }}>
              🍴 We also have our special restaurant — <strong>Basil Bites at Taramani</strong> — serving a wide
              variety of delicious sattvic prasadam items. Order through <strong>Swiggy or Zomato</strong>, or visit
              in person and choose from the menu. A true treat for the body and the soul!
            </p>
          </div>
        </section>

        {/* ── PROGRAMS ── */}
        <section className="py-16" style={{ background: "#FFFDF5" }}>
          <div className="max-w-3xl mx-auto px-6">
            <SectionLabel>Join Us</SectionLabel>
            <SectionTitle>
              Weekly Programs <span style={{ color: "#C9922A" }}>&amp; Special Events</span>
            </SectionTitle>
            <TitleRule symbol="✦" />
            <ul className="mt-8 grid gap-5">
              {PROGRAMS.map((p, i) => (
                <li
                  key={p.title}
                  className="grid gap-5 p-6 rounded-2xl border border-[#C9922A]/15 transition-colors hover:border-[#C9922A]"
                  style={{
                    gridTemplateColumns: "56px 1fr",
                    background: "linear-gradient(135deg, #FDF3DC, #FFFDF5)",
                  }}
                >
                  <div
                    className="w-13 h-13 rounded-full flex items-center justify-center font-bold text-[#FFFDF5] flex-shrink-0"
                    style={{
                      width: 52,
                      height: 52,
                      background: "linear-gradient(135deg, #C9922A, #E8650A)",
                      fontFamily: "'Cinzel Decorative', serif",
                      fontSize: 18,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <span
                      className="inline-block text-[#1A0A00] text-[12px] tracking-wide px-3 py-0.5 rounded-full mb-2"
                      style={{ fontFamily: "'Cinzel', serif", background: "#C9922A" }}
                    >
                      {p.time}
                    </span>
                    <h3
                      className="mb-1.5 text-[15px] tracking-wide"
                      style={{ fontFamily: "'Cinzel', serif", color: "#3D1C00" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-[16px] leading-[1.65]" style={{ color: "#4A2800" }}>
                      {p.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FESTIVALS ── */}
        <section className="py-16" style={{ background: "linear-gradient(135deg, #1A0A00 0%, #0D2B30 100%)" }}>
          <div className="max-w-3xl mx-auto px-6">
            <SectionLabel>Celebrations</SectionLabel>
            <SectionTitle light>
              Festivals <span style={{ color: "#F5A623" }}>Throughout the Year</span>
            </SectionTitle>
            <TitleRule symbol="✦" />
            <p className="italic text-[17px] leading-relaxed mt-7" style={{ color: "rgba(253,243,220,0.75)" }}>
              We celebrate over 14–15 festivals every year — each one a magnificent occasion of devotion, culture, and
              community joy. These are the sacred celebrations that fill our temple with thousands of devotees:
            </p>
            <div className="flex flex-wrap gap-3.5 mt-8">
              {FESTIVALS.map((f) => (
                <span
                  key={f}
                  className="px-5 py-2.5 rounded-full border transition-all duration-300 hover:bg-[#C9922A] hover:text-[#1A0A00] hover:border-[#C9922A] cursor-default text-[13px] tracking-wide"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    background: "rgba(201,146,42,0.12)",
                    border: "1px solid rgba(201,146,42,0.3)",
                    color: "#F0C96B",
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
            <p className="italic text-[17px] leading-relaxed mt-7" style={{ color: "rgba(253,243,220,0.75)" }}>
              ⭐ The most spectacular days are <strong style={{ color: "#F0C96B" }}>Sri Krishna Janmashtami</strong>{" "}
              (midnight celebration), <strong style={{ color: "#F0C96B" }}>Rath Yatra</strong>, and{" "}
              <strong style={{ color: "#F0C96B" }}>Vaikuntha Ekadashi</strong> — plan ahead for these unforgettable occasions!
            </p>
          </div>
        </section>

        {/* ── DO'S & DON'TS ── */}
        <section className="py-16" style={{ background: "#FEF9EE" }}>
          <div className="max-w-3xl mx-auto px-6">
            <SectionLabel>Guidelines</SectionLabel>
            <SectionTitle>
              Do&apos;s &amp; <span style={{ color: "#C9922A" }}>Don&apos;ts</span>
            </SectionTitle>
            <TitleRule />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-9">
              <div className="rounded-2xl p-8" style={{ background: "linear-gradient(135deg,#E8F5E9,#F1FBF2)", border: "2px solid #81C784" }}>
                <h3 className="mb-5 text-[16px] tracking-[2px]" style={{ fontFamily: "'Cinzel', serif", color: "#2E7D32" }}>
                  ✔ Please Do
                </h3>
                <ul className="grid gap-3">
                  {DOS.map((d) => (
                    <li key={d} className="text-[16px] text-[#1A0A00] leading-snug">
                      <span className="text-[#43A047] font-bold mr-2">✔</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl p-8" style={{ background: "linear-gradient(135deg,#FFF3E0,#FFF8F0)", border: "2px solid #FFB74D" }}>
                <h3 className="mb-5 text-[16px] tracking-[2px]" style={{ fontFamily: "'Cinzel', serif", color: "#E65100" }}>
                  ✖ Please Do Not
                </h3>
                <ul className="grid gap-3">
                  {DONTS.map((d) => (
                    <li key={d} className="text-[16px] text-[#1A0A00] leading-snug">
                      <span className="text-[#E65100] font-bold mr-2">✖</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── BEST TIME ── */}
        <section className="py-16" style={{ background: "#FFFDF5" }}>
          <div className="max-w-3xl mx-auto px-6">
            <SectionLabel>Planning Your Visit</SectionLabel>
            <SectionTitle>
              Best Time <span style={{ color: "#C9922A" }}>to Visit</span>
            </SectionTitle>
            <TitleRule symbol="✦" />
            <p className="mb-7 text-[#3D1C00]" style={{ fontSize: "18px", lineHeight: 1.85 }}>
              The temple is open every day — and every moment in the Lord&apos;s presence is auspicious. Here is a
              guide to help you plan the perfect visit:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
              {TIME_CARDS.map((t) => (
                <div
                  key={t.title}
                  className="text-center p-7 rounded-2xl border border-[#C9922A]/20"
                  style={{ background: "linear-gradient(135deg, #FDF3DC, #FFFDF5)" }}
                >
                  <span className="text-4xl mb-3 block">{t.icon}</span>
                  <h4 className="mb-2 text-[13px] tracking-[2px]" style={{ fontFamily: "'Cinzel', serif", color: "#3D1C00" }}>
                    {t.title}
                  </h4>
                  <p className="text-[15px]" style={{ color: "#4A2800" }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW TO REACH ── */}
        <section
          className="py-16"
          style={{ background: "linear-gradient(135deg, #FDF3DC, #FEF9EE)" }}
        >
          <div className="max-w-3xl mx-auto px-6">
            <SectionLabel>Directions</SectionLabel>
            <SectionTitle>
              How to <span style={{ color: "#C9922A" }}>Reach Us</span>
            </SectionTitle>
            <TitleRule />
            <p className="text-[18px] text-[#3D1C00] mb-1" style={{ lineHeight: 1.7 }}>
              <strong>📍 Dakshina Dwaraka Dham — ISKCON Thiruvanmiyur</strong>
              <br />
              63, First Seaward Road, Valmiki Nagar, Thiruvanmiyur, Chennai – 600 041
            </p>
            <p className="italic text-[16px] mb-7" style={{ color: "#7A4A00" }}>
              Landmark: Behind Marundeeswarar Temple · Known locally as &quot;Dwarka Palace&quot; or &quot;Hare Krishna Kovil&quot;
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {REACH_CARDS.map((r) => (
                <div
                  key={r.title}
                  className="rounded-2xl p-7"
                  style={{
                    background: "#FFFDF5",
                    borderLeft: "4px solid #C9922A",
                    boxShadow: "0 4px 20px rgba(201,146,42,0.08)",
                  }}
                >
                  <span className="text-3xl mb-3 block">{r.icon}</span>
                  <h4
                    className="uppercase tracking-[2px] mb-2.5 text-[13px]"
                    style={{ fontFamily: "'Cinzel', serif", color: "#3D1C00" }}
                  >
                    {r.title}
                  </h4>
                  <p className="text-[15px] leading-[1.65]" style={{ color: "#4A2800" }}>
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="https://maps.app.goo.gl/TEhc1JrkdudU2jnWA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-bold rounded-full tracking-[2px] transition-all duration-300 hover:-translate-y-1"
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "14px",
                  padding: "16px 36px",
                  background: "linear-gradient(135deg, #E8650A, #C9922A)",
                  color: "#1A0A00",
                  boxShadow: "0 6px 30px rgba(232,101,10,0.35)",
                }}
              >
                🗺️ &nbsp; Open in Google Maps
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16" style={{ background: "#FFFDF5" }}>
          <div className="max-w-3xl mx-auto px-6">
            <SectionLabel>Common Questions</SectionLabel>
            <SectionTitle>
              Frequently Asked <span style={{ color: "#C9922A" }}>Questions</span>
            </SectionTitle>
            <TitleRule symbol="✦" />
            <div className="mt-9 grid gap-4">
              {FAQS.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-6" style={{ background: "#FEF9EE" }}>
          <div className="max-w-5xl mx-auto">
            <SectionLabel>Connect With Us</SectionLabel>
            <SectionTitle>
              Connect with <span style={{ color: "#C9922A" }}>Us</span>
            </SectionTitle>
            <TitleRule symbol="✦" />
            <p
              className="max-w-3xl mx-auto text-center mb-10"
              style={{ color: "#4A2800", fontSize: "clamp(16px,2vw,20px)", lineHeight: 1.8 }}
            >
              Follow Hare Krishna Movement Chennai across all platforms for daily darshan,
              spiritual insights, event updates, and seva opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {CONNECT_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-[22px] border border-[#C9922A]/20 p-6 transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(135deg, #FFFDF5 0%, #FDF3DC 100%)",
                    boxShadow: "0 10px 30px rgba(201,146,42,0.10)",
                  }}
                >
                  <p
                    className="text-[12px] uppercase tracking-[3px] mb-2"
                    style={{ fontFamily: "'Cinzel', serif", color: "#E8650A" }}
                  >
                    {item.label}
                  </p>
                  <h3
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "clamp(18px,2vw,24px)",
                      color: "#1A0A00",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[14px] break-all" style={{ color: "#7A4A00" }}>
                    {item.href}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-24 px-6 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1A0A00 0%, #0D2B30 50%, #1A0A00 100%)" }}
        >
          <span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
            style={{ fontSize: "400px", color: "rgba(201,146,42,0.04)" }}
          >
            ॐ
          </span>
          <h2
            className="relative mb-5"
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(24px,5vw,52px)",
              color: "#F0C96B",
              textShadow: "0 4px 30px rgba(201,146,42,0.4)",
            }}
          >
            Come. Experience. Be Transformed.
          </h2>
          <p
            className="relative italic max-w-xl mx-auto mb-10"
            style={{ color: "rgba(253,243,220,0.78)", fontSize: "clamp(16px,2vw,20px)" }}
          >
            The ocean waves sing the Lord&apos;s glories. The incense rises like prayers. The deities wait with open
            hearts. Your visit to Dakshina Dwaraka Dham is not just a temple trip — it is a journey to the divine.
          </p>
          <Link
            href="https://maps.app.goo.gl/TEhc1JrkdudU2jnWA"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block font-bold rounded-full tracking-[3px] transition-transform duration-300 hover:scale-105"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "15px",
              padding: "18px 48px",
              background: "linear-gradient(135deg, #F0C96B, #E8650A)",
              color: "#1A0A00",
              boxShadow: "0 8px 40px rgba(201,146,42,0.4)",
            }}
          >
            🪷 &nbsp; Plan Your Visit Today
          </Link>
        </section>

        {/* ── FOOTER ── */}
        <footer
          className="text-center px-6 py-9"
          style={{ background: "#1A0A00", fontFamily: "'Cinzel', serif", letterSpacing: "1px" }}
        >
          <p style={{ color: "#C9922A" }}>
            <strong>Dakshina Dwaraka Dham — ISKCON Thiruvanmiyur</strong>
          </p>
          <p className="mt-2 text-[14px]" style={{ color: "rgba(253,243,220,0.55)" }}>
            63, First Seaward Road, Valmiki Nagar, Thiruvanmiyur, Chennai – 600 041
          </p>
          <p className="mt-2 text-[13px]" style={{ color: "rgba(253,243,220,0.35)" }}>
            Hare Krishna Hare Krishna Krishna Krishna Hare Hare · Hare Rama Hare Rama Rama Rama Hare Hare
          </p>
        </footer>
      </main>
    </>
  );
}
