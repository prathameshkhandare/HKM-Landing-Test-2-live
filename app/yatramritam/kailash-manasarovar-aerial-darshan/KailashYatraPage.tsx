"use client";
import { useState, useRef, useEffect, FormEvent, ChangeEvent, ReactNode } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";

// ─── TYPES ───────────────────────────────────────────────────────────────────
interface CountdownValue {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface Destination {
  key: string;
  name: string;
  sub: string;
  desc: string;
}

interface ItineraryDay {
  day: string;
  date: string;
  title: string;
  loc: string;
  points: string[];
}

interface Highlight {
  icon: string;
  title: string;
  desc: string;
}

interface Faq {
  q: string;
  a: string;
}

interface FormState {
  name: string;
  phone: string;
  city: string;
  participants: string;
  message: string;
}

interface ComparisonRow {
  label: string;
  traditional: string;
  yatramritam: string;
}

// ─── COUNTDOWN HOOK ───────────────────────────────────────────────────────────
function useCountdown(targetDate: string): CountdownValue {
  const [timeLeft, setTimeLeft] = useState<CountdownValue>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate).getTime() - new Date().getTime();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const t = setInterval(calc, 1000);
    return () => clearInterval(t);
  }, [targetDate]);
  return timeLeft;
}

// ─── SCROLL-REVEAL WRAPPER ────────────────────────────────────────────────────
function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
    >
      {children}
    </div>
  );
}

// ─── SCHEMA JSON-LD ──────────────────────────────────────────────────────────
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristTrip",
      "@id": "https://hkmchennai.org/yatramritam/kailash-manasarovar-aerial-darshan#trip",
      name: "Kailash Mansarovar Yatra — Aerial Darshan",
      description:
        "A 4-day aerial darshan pilgrimage to Mount Kailash and Manasa Sarovar via Nepalgunj — no passport, no visa, no age limit. Organised by Yatramritam, Srila Prabhupada's ISKCON Thiruvanmiyur.",
      startDate: "2026-09-23",
      endDate: "2026-09-26",
      offers: {
        "@type": "Offer",
        price: "125000",
        priceCurrency: "INR",
        availability: "https://schema.org/LimitedAvailability",
        description: "Inclusive of return flights to/fro Chennai, 5% GST included",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need a passport or visa for this yatra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No passport or visa is required. The aerial darshan is conducted entirely from the Nepalgunj side of the border. Only a valid government photo ID is needed.",
          },
        },
        {
          "@type": "Question",
          name: "Is there an age limit for this Kailash Yatra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no strict age limit. The itinerary is senior-friendly and avoids the physically demanding overland Kailash parikrama.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in the ₹1,25,000 package?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Return flights to and fro Chennai, hotel stays at Lucknow and Nepalgunj, the aerial Kailash darshan flight, all ground transport, daily satvik meals, special Hawan at Bageshwari Shakti Peeth, and an ISKCON devotee guide throughout. 5% GST included.",
          },
        },
      ],
    },
  ],
};

// ─── DATA ────────────────────────────────────────────────────────────────────
const IMG = "/images/kailash-yatra";

const destinations: Destination[] = [
  {
    key: "hero_kailash.jpg",
    name: "Mount Kailāsh — Aerial Darshan",
    sub: "The Sacred Abode of Lord Shiva",
    desc: "The South & East faces of the divine mountain, witnessed from the sky — the rarest darshan a pilgrim can receive.",
  },
  {
    key: "manasarovar.jpg",
    name: "Mānasa Sarovar",
    sub: "The Divine Mind-Born Lake",
    desc: "Formed from the mind of Brahmā, its pure waters are said to wash away lifetimes of karma — darshan on the very same day as Kailāsh.",
  },
  {
    key: "pashupatinath.jpg",
    name: "Shree Pashupatināth Temple",
    sub: "Nepalgunj",
    desc: "A sacred temple echoing the glory of the original Pashupatinath — a place of deep Shaiva devotion on the yatra route.",
  },
  {
    key: "saipal.jpg",
    name: "Mount Saipal",
    sub: "The Slumbering Golden Ox Ridge",
    desc: "A majestic snow-crowned peak visible en route — one of the great Himalayan sentinels watching over this sacred land.",
  },
  {
    key: "bageshwari.jpg",
    name: "Bāgeshwari Shakti Pīṭha",
    sub: "Special Darshan & Hawan",
    desc: "One of the revered Shakti Pīṭhas, where a special Hawan and Devi darshan form a powerful highlight of Day 2.",
  },
];

const itinerary: ItineraryDay[] = [
  {
    day: "01",
    date: "23 Sept 2026",
    title: "Arrival in Lucknow",
    loc: "Lucknow",
    points: [
      "Arrival in Lucknow — warmly received by the Yatramritam team",
      "Hotel check-in and rest",
      "Evening orientation satsang",
      "Dinner and overnight stay at Lucknow",
    ],
  },
  {
    day: "02",
    date: "24 Sept 2026",
    title: "Lucknow → Nepalgunj — Bāgeshwari Darshan",
    loc: "Nepalgunj",
    points: [
      "Drive to Nepalgunj (4–5 hrs by road)",
      "Hotel check-in at Nepalgunj",
      "Bāgeshwari Shakti Pīṭha — special darshan",
      "Special Hawan performed for all pilgrims",
      "Orientation & briefing for the Aerial Darshan flight",
      "Dinner and overnight stay at Nepalgunj",
    ],
  },
  {
    day: "03",
    date: "25 Sept 2026",
    title: "Mount Kailāsh Aerial Darshan — The Rarest Day",
    loc: "Nepalgunj",
    points: [
      "Aerial flight for Mount Kailāsh Darshan — South & East faces",
      "Manasa Sarovar darshan on the very same day",
      "Linga Abhishekam performed in devotion",
      "Spiritual narrations on Kailāsh & Manasa Sarovar glories",
      "Mantra meditation and ecstatic bhajans",
      "Overnight stay at Nepalgunj",
    ],
  },
  {
    day: "04",
    date: "26 Sept 2026",
    title: "Departure",
    loc: "Departure",
    points: [
      "Drive to Lucknow Airport (4–5 hrs)",
      "Farewell and departure with sacred memories for a lifetime",
    ],
  },
];

const highlights: Highlight[] = [
  { icon: "🚫", title: "No Passport Needed", desc: "Aerial darshan from the Nepalgunj side — no international travel documents required" },
  { icon: "🚫", title: "No Visa Needed", desc: "Complete pilgrimage without the visa process that typically accompanies Kailash yatras" },
  { icon: "👴", title: "No Age Limit", desc: "Senior-friendly pacing makes this sacred darshan accessible to devotees of every age" },
  { icon: "✈️", title: "Aerial Darshan", desc: "Witness the South & East faces of Kailāsh from the sky — a rare and unforgettable perspective" },
  { icon: "🕉️", title: "Same-Day Sarovar Darshan", desc: "Mānasa Sarovar and Kailāsh darshan on the very same sacred day" },
  { icon: "🙏", title: "ISKCON Devotee Guide", desc: "Personally accompanied throughout by an experienced Hare Krishna devotee" },
];

const inclusions: string[] = [
  "Return flights to/fro Chennai (all-inclusive of the ₹1,25,000 package)",
  "Hotel accommodation at Lucknow & Nepalgunj",
  "Aerial flight for Mount Kailāsh Darshan",
  "All ground transport (car/bus) throughout the yatra",
  "Pure Indian Satvik meals — Breakfast, Lunch & Dinner",
  "Special Hawan at Bāgeshwari Shakti Pīṭha",
  "Personally guided by an ISKCON temple devotee guide",
  "Special bhajans, kirtans & mantra meditation sessions",
  "Sthala Purāṇa narrations from Rāmāyaṇa, Mahābhārata & Śrīmad Bhāgavatam",
  "Welcome kit and take-home gift",
  "Prayers and sankalpa archana at each sacred location",
];

const comparisonRows: ComparisonRow[] = [
  { label: "Passport & Visa", traditional: "Required — foreign visa process", yatramritam: "Not required" },
  { label: "Physical Trek", traditional: "Multi-day high-altitude parikrama on foot", yatramritam: "No trek — aerial darshan from the sky" },
  { label: "Duration", traditional: "2–3 weeks", yatramritam: "4 days" },
  { label: "Suitable For", traditional: "Only the very fit", yatramritam: "All ages, including seniors" },
  { label: "Altitude Risk", traditional: "High — altitude sickness common", yatramritam: "Minimal — no prolonged high-altitude exposure" },
  { label: "Spiritual Guidance", traditional: "Usually self-arranged", yatramritam: "ISKCON devotee guide throughout" },
  { label: "Meals", traditional: "Variable, often arranged locally", yatramritam: "Pure Satvik meals included" },
];

const faqs: Faq[] = [
  {
    q: "Do I need a passport or visa for this yatra?",
    a: "No. This is one of the unique advantages of this Kailāsh Manasa Sarovar Yatra — the aerial darshan is conducted entirely from the Nepalgunj side, so no passport or visa is required. Only a valid government photo ID is needed.",
  },
  {
    q: "Is there any age limit to join?",
    a: "There is no strict age limit. The itinerary is designed with senior-friendly pacing, and many elderly devotees join this yatra specifically because it avoids the physically demanding trek of the traditional Kailash parikrama.",
  },
  {
    q: "What exactly is 'Aerial Darshan' of Kailāsh?",
    a: "Aerial Darshan means witnessing the sacred South and East faces of Mount Kailāsh directly from a flight, along with Mānasa Sarovar on the same day — a rare and precious darshan that does not require the physically strenuous overland pilgrimage.",
  },
  {
    q: "What does the ₹1,25,000 package include?",
    a: "The package includes return flights to and fro Chennai, hotel stays at Lucknow and Nepalgunj, the aerial flight for Kailāsh darshan, all ground transport, three satvik meals daily, the special Hawan at Bāgeshwari Shakti Pīṭha, and the constant guidance of an ISKCON devotee throughout. 5% GST included.",
  },
  {
    q: "Who leads and guides this yatra?",
    a: "The yatra is personally guided by an experienced devotee from Srila Prabhupada's ISKCON Thiruvanmiyur, under the Yatramritam pilgrimage initiative. Devotees receive spiritual narrations, lead bhajans, and provide support throughout the journey.",
  },
  {
    q: "How do I register my seat?",
    a: "Seats are limited and allocated strictly on a first-come, first-served basis. Call or WhatsApp 99402 42656 to register and receive complete payment details.",
  },
];

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function KailashYatraPage() {
  const [openDay, setOpenDay] = useState<string | null>("01");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormState>({ name: "", phone: "", city: "", participants: "1 person", message: "" });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>("");
  const formRef = useRef<HTMLElement | null>(null);
  const countdown = useCountdown("2026-09-23T00:00:00");

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/yatra-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          city: formData.city,
          participants: formData.participants,
          message: formData.message,
          yatra_name: "Kailash Manasarovar Aerial Darshan",
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Submission failed");
      setSubmitted(true);
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const [activeSection, setActiveSection] = useState<string>("");
  useEffect(() => {
    const ids = ["why", "guide", "destinations", "itinerary", "compare", "faq"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <div className="bg-[#FBF6EC] text-[#1A1410] pb-20 md:pb-0">
        <Navbar />

        {/* ══════════════ HERO ══════════════ */}
        <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
          <Image
            src={`${IMG}/hero_kailash.jpg`}
            alt="Mount Kailash Aerial View"
            fill
            priority
            className="object-cover object-[center_55%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050A14]/85 via-[#050A14]/55 to-[#050A14]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A14]/70 via-transparent to-transparent" />

          {/* ── Top logo banner ── */}
          <div className="relative z-10 px-6 pt-20 pb-8 flex flex-col items-center justify-center text-center gap-3">
            {/* Logo with strong glow */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-[#FFE066] blur-3xl opacity-70 rounded-full scale-[2.5]" />
              <Image
                src="/assets/yatramritam_logo.png"
                alt="Yatramritam"
                width={140}
                height={140}
                className="relative z-10 h-32 w-32 object-contain brightness-125 saturate-200 drop-shadow-[0_0_30px_rgba(255,224,102,1)]"
              />
            </div>
            <p className="text-[#FFED4E] text-xs md:text-sm font-black tracking-[0.28em] uppercase leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Srila Prabhupada&apos;s ISKCON Thiruvanmiyur · Dakshina Dwaraka Dham, Chennai
            </p>
            {/* Vibrant gold ornamental divider */}
            <div className="flex items-center gap-3 -mt-3">
              <div className="h-[1.5px] w-16 bg-gradient-to-r from-transparent to-[#FFED4E]" />
              <div className="w-2.5 h-2.5 rotate-45 bg-[#FFED4E] shadow-[0_0_10px_rgba(255,237,78,1)]" />
              <div className="h-[1.5px] w-16 bg-gradient-to-l from-transparent to-[#FFED4E]" />
            </div>
          </div>

          {/* ── Main hero content (left-aligned) ── */}
          <div className="relative z-10 flex-1 flex items-center px-6 md:px-14 py-10">
            <div className="max-w-xl text-white">

              {/* Title */}
              <h1 className="leading-tight mb-4">
                <span
                  className="block text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white"
                  style={{ fontFamily: "var(--font-display), 'Cinzel', serif", textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
                >
                  Kailash Manasarovar
                </span>
                <span
                  className="block text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tight text-[#FFD84D]"
                  style={{ fontFamily: "var(--font-display), 'Cinzel', serif", textShadow: "0 4px 30px rgba(0,0,0,0.7)" }}
                >
                  Aerial Darshan
                </span>
              </h1>

              {/* Description */}
              <p className="text-[#F5EFE0] text-base md:text-lg leading-relaxed mb-8" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}>
                Witness the sacred South & East faces of Mount Kailāsh and Mānasa Sarovar on the very same day — guided by devotees of Srila Prabhupada's ISKCON Thiruvanmiyur.
              </p>

              {/* Info boxes */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="bg-[#050A14]/75 border border-[#C9A24A]/50 backdrop-blur-sm rounded-xl px-5 py-3">
                  <p className="text-[#C9A24A] text-[0.6rem] tracking-[0.22em] uppercase font-bold mb-0.5">Departure</p>
                  <p className="font-bold text-base text-white" style={{ fontFamily: "var(--font-display), serif" }}>23 – 26 Sept 2026 · 4 Days</p>
                </div>
                <div className="bg-[#050A14]/75 border border-[#C9A24A]/50 backdrop-blur-sm rounded-xl px-5 py-3">
                  <p className="text-[#C9A24A] text-[0.6rem] tracking-[0.22em] uppercase font-bold mb-0.5">Yatra Cost</p>
                  <p className="font-bold text-base text-white" style={{ fontFamily: "var(--font-display), serif" }}>₹1,25,000 <span className="text-xs font-normal text-white/60">5% GST included</span></p>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={scrollToForm}
                  className="bg-gradient-to-r from-[#C9A24A] to-[#E0BC6C] text-[#050A14] font-bold text-sm px-8 py-3.5 rounded-full tracking-wider shadow-[0_8px_30px_rgba(201,162,74,0.4)] hover:-translate-y-0.5 transition-transform"
                  style={{ fontFamily: "var(--font-display), serif" }}
                >
                  Reserve Your Seat →
                </button>
                <a
                  href="#itinerary"
                  className="border border-white/60 text-white font-semibold text-sm px-8 py-3.5 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  View Itinerary
                </a>
              </div>
            </div>
          </div>

          {/* ── Route strip ── */}
          <div className="relative z-10 bg-[#050A14]/80 backdrop-blur-sm border-t border-[#C9A24A]/20 py-4 px-6">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {[
                { label: "✈ Chennai", gold: false },
                { label: "Lucknow", gold: false },
                { label: "Nepalgunj", gold: false },
                { label: "☁ Kailāsh Darshan", gold: true },
                { label: "Mānasa Sarovar", gold: false },
                { label: "Lucknow", gold: false },
                { label: "✈ Chennai", gold: false },
              ].map((stop, i, arr) => (
                <span key={i} className="flex items-center gap-3">
                  <span className={`text-sm md:text-base font-bold tracking-wide ${stop.gold ? "text-[#FFD84D] drop-shadow-[0_0_8px_rgba(255,216,77,0.8)]" : "text-white"}`}>
                    {stop.label}
                  </span>
                  {i < arr.length - 1 && <span className="text-[#C9A24A] font-bold text-base">→</span>}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ POSTER HIGHLIGHTS STRIP ══════════════ */}
        <div className="bg-[#050A14] py-10 px-5">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-[#C9A24A] font-bold text-sm tracking-[0.2em] uppercase mb-6" style={{ fontFamily: "var(--font-display), serif" }}>✦ Highlights ✦</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {[
                ["🙏", "Personally guided by ISKCON temple devotee guide"],
                ["🎶", "Special bhajans & kirtans"],
                ["🔥", "Special Pujas & Sankalpa Archana"],
                ["🍱", "Satvik Food"],
                ["📿", "Prayers at each location"],
                ["🎁", "Welcome kit, take-home gift & more"],
              ].map(([icon, text]) => (
                <div key={text as string} className="text-center text-[#F5EFE0]">
                  <div className="text-2xl mb-2">{icon}</div>
                  <div className="text-xs leading-snug">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════ WHY THIS YATRA ══════════════ */}
        <section id="why" className="py-20 px-5">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[#6E1423] text-xs tracking-[0.35em] uppercase font-bold mb-3">The Invitation</p>
            <h2 className="text-2xl md:text-4xl font-bold leading-snug" style={{ fontFamily: "var(--font-display), serif" }}>Why This Yatra Is Unlike Any Other</h2>
            <div className="w-[4.5rem] h-0.5 bg-[#C9A24A] mx-auto mt-4" />
            <p className="text-xl leading-relaxed text-[#3a2f26] mt-6" style={{ fontFamily: "var(--font-serif), serif" }}>
              Mount Kailāsh has drawn seekers for millennia — yet for most, the journey demands rare fitness, months of preparation, a foreign visa, and weeks away from home. This yatra removes every one of those barriers.
            </p>
            <p className="text-xl leading-relaxed text-[#3a2f26] mt-4" style={{ fontFamily: "var(--font-serif), serif" }}>
              Under the Yatramritam initiative of Srila Prabhupada's ISKCON Thiruvanmiyur, devotees now receive the sacred aerial darshan of Kailāsh and Mānasa Sarovar — on the same day — accompanied throughout by a devotee guide, satvik meals, and the constant chanting of the holy names.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {[["🚫", "No Passport"], ["🚫", "No Visa"], ["👴", "No Age Limit"], ["🏔️", "No Trek Required"]].map(([icon, label]) => (
                <Reveal key={label as string}>
                  <div className="text-center p-6 bg-white border border-[#6E1423]/10 rounded-2xl h-full">
                    <div className="text-2xl mb-2">{icon}</div>
                    <div className="font-bold text-sm text-[#6E1423]" style={{ fontFamily: "var(--font-display), serif" }}>{label}</div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Promo Video */}
            <Reveal>
              <div className="max-w-sm mx-auto mt-11 rounded-2xl overflow-hidden border-[3px] border-[#C9A24A] shadow-[0_25px_60px_rgba(110,20,35,0.2)]">
                <iframe
                  src="https://www.youtube.com/embed/GMjIOTSs400"
                  title="Kailash Mansarovar Yatra — Promo Video"
                  className="w-full aspect-[9/16] block border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════ MEET YOUR GUIDE ══════════════ */}
        <section id="guide" className="py-20 px-5 bg-[#F3EBDA]">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#6E1423] text-xs tracking-[0.35em] uppercase font-bold text-center mb-3">Your Companion on This Journey</p>
            <h2 className="text-2xl md:text-4xl font-bold text-center" style={{ fontFamily: "var(--font-display), serif" }}>Meet Your Guide</h2>
            <div className="mx-auto mt-4 w-[4.5rem] h-0.5 bg-[#C9A24A]" />

            <Reveal>
              <div className="mt-11 bg-white rounded-3xl border border-[#C9A24A]/30 shadow-[0_20px_60px_rgba(110,20,35,0.10)] overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Image column */}
                  <div className="relative w-full md:w-64 flex-shrink-0 h-80 md:h-auto">
                    <Image
                      src={`${IMG}/guide_venugopal.jpg`}
                      alt="Venugopal Dasa — Yatramritam Head"
                      fill
                      className="object-cover object-top"
                    />
                    {/* Gradient overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#6E1423]/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-white/10" />
                    {/* Name badge over image on mobile */}
                    <div className="absolute bottom-4 left-4 md:hidden">
                      <h3 className="text-white text-xl font-bold drop-shadow-lg" style={{ fontFamily: "var(--font-display), serif" }}>Venugopal Dāsa</h3>
                      <p className="text-[#FFD84D] text-xs uppercase tracking-widest font-bold">Yatramritam Head</p>
                    </div>
                  </div>

                  {/* Content column */}
                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                    {/* Name — desktop only */}
                    <div className="hidden md:block mb-5">
                      <h3 className="text-2xl font-bold text-[#6E1423]" style={{ fontFamily: "var(--font-display), serif" }}>Venugopal Dāsa</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <div className="h-[2px] w-8 bg-[#C9A24A]" />
                        <p className="text-[#C9A24A] text-xs uppercase tracking-[0.25em] font-bold">Yatramritam Head</p>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="relative">
                      <span className="absolute -top-4 -left-2 text-6xl text-[#C9A24A]/20 font-serif leading-none select-none">"</span>
                      <p className="italic text-base md:text-lg leading-relaxed text-[#3a2f26] relative z-10" style={{ fontFamily: "var(--font-serif), serif" }}>
                        At Yatramritam, we believe every pilgrimage should be a meaningful and transformative experience. With devotional care, spiritual guidance, satsanga, kirtan, and thoughtfully planned arrangements, we strive to ensure that every pilgrim returns with lasting inspiration, inner peace, cherished memories, and a deeper appreciation of our timeless spiritual heritage. I warmly invite you to join us on this sacred journey.
                      </p>
                      <span className="absolute -bottom-4 right-0 text-6xl text-[#C9A24A]/20 font-serif leading-none select-none">"</span>
                    </div>

                    {/* Contact pill */}
                    <a href="https://wa.me/919940242656" target="_blank" rel="noopener noreferrer"
                      className="mt-8 self-start inline-flex items-center gap-2 bg-[#6E1423] text-white text-xs font-bold px-5 py-2.5 rounded-full tracking-wider hover:bg-[#8a1a2e] transition-colors shadow-md">
                      📞 WhatsApp: 99402 42656
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════ HIGHLIGHTS ══════════════ */}
        <section className="py-20 px-5 bg-[#F3EBDA]">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#6E1423] text-xs tracking-[0.35em] uppercase font-bold text-center mb-3">Sacred Highlights</p>
            <h2 className="text-2xl md:text-4xl font-bold text-center" style={{ fontFamily: "var(--font-display), serif" }}>What Makes This Yatra Precious</h2>
            <div className="mx-auto mt-4 w-[4.5rem] h-0.5 bg-[#C9A24A]" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-11">
              {highlights.map(({ icon, title, desc }) => (
                <div key={title} className="bg-white border border-[#6E1423]/10 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(110,20,35,0.1)] hover:border-[#C9A24A]/50 transition-all duration-300">
                  <div className="text-3xl mb-3.5">{icon}</div>
                  <h3 className="font-bold text-sm text-[#6E1423] mb-2 leading-snug" style={{ fontFamily: "var(--font-display), serif" }}>{title}</h3>
                  <p className="text-sm text-[#5a4d42] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ DESTINATIONS ══════════════ */}
        <section id="destinations" className="py-20 px-5">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#6E1423] text-xs tracking-[0.35em] uppercase font-bold text-center mb-3">Sacred Sites</p>
            <h2 className="text-2xl md:text-4xl font-bold text-center" style={{ fontFamily: "var(--font-display), serif" }}>Destinations on This Yatra</h2>
            <div className="mx-auto mt-4 w-[4.5rem] h-0.5 bg-[#C9A24A]" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-11">
              {destinations.map(({ key, name, sub, desc }) => (
                <div key={key} className="rounded-2xl overflow-hidden bg-white border border-[#6E1423]/10 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(110,20,35,0.15)] transition-all duration-300 group">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={`${IMG}/${key}`} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,20,0.75) 0%, transparent 55%)" }} />
                    <p className="absolute bottom-3 left-3.5 text-[#C9A24A] text-xs font-bold tracking-wide" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}>{sub}</p>
                  </div>
                  <div className="p-5 pb-6">
                    <h3 className="text-base font-bold text-[#6E1423] mb-2">{name}</h3>
                    <p className="text-sm text-[#5a4d42] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ ITINERARY ══════════════ */}
        <section id="itinerary" className="py-20 px-5 bg-[#050A14] text-[#F5EFE0]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#C9A24A] text-xs tracking-[0.35em] uppercase font-bold text-center mb-3">4 Days of Divine Darshan</p>
            <h2 className="text-2xl md:text-4xl font-bold text-center text-[#F5EFE0]" style={{ fontFamily: "var(--font-display), serif" }}>Day-by-Day Itinerary</h2>
            <div className="mx-auto mt-4 w-[4.5rem] h-0.5 bg-[#C9A24A]" />
            <p className="text-lg text-[#C9A24A] text-center mt-2" style={{ fontFamily: "var(--font-serif), serif" }}>
              Lucknow → Nepalgunj → Kailāsh Aerial Darshan → Return
            </p>
            <div className="flex flex-col gap-3.5 mt-10">
              {itinerary.map(({ day, date, title, loc, points }) => {
                const isOpen = openDay === day;
                return (
                  <div key={day} className={`rounded-2xl overflow-hidden border transition-colors duration-300 ${isOpen ? "border-[#C9A24A]/70 bg-[#C9A24A]/[0.06]" : "border-[#C9A24A]/25 bg-white/[0.02]"}`}>
                    <button onClick={() => setOpenDay(isOpen ? null : day)} className="w-full flex items-center gap-5 p-6 text-left">
                      <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[#C9A24A]/15 border border-[#C9A24A]/40 flex flex-col items-center justify-center">
                        <span className="text-[#C9A24A] font-bold text-[.65rem] leading-tight text-center" style={{ fontFamily: "var(--font-display), serif" }}>Day<br />{day}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[#C9A24A] text-xs tracking-widest uppercase font-bold">{date}</p>
                        <p className="font-bold text-base mt-1 leading-snug text-white" style={{ fontFamily: "var(--font-display), serif" }}>{title}</p>
                        <p className="text-[#F5EFE0]/70 text-xs mt-1">📍 {loc}</p>
                      </div>
                      <span className={`text-[#C9A24A] text-2xl flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 border-t border-[#C9A24A]/15 pt-4">
                        <div className="flex flex-col gap-2">
                          {points.map((p) => (
                            <div key={p} className="flex items-start gap-2.5 text-sm text-[#F5EFE0]/80 leading-relaxed">
                              <span className="text-[#C9A24A] flex-shrink-0 mt-1 text-xs">◆</span>
                              <span>{p}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════ COMPARISON ══════════════ */}
        <section id="compare" className="py-20 px-5">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#6E1423] text-xs tracking-[0.35em] uppercase font-bold text-center mb-3">See The Difference</p>
            <h2 className="text-2xl md:text-4xl font-bold text-center" style={{ fontFamily: "var(--font-display), serif" }}>Traditional Yatra vs. This Yatra</h2>
            <div className="mx-auto mt-4 w-[4.5rem] h-0.5 bg-[#C9A24A]" />

            <Reveal>
              <div className="mt-11 rounded-2xl overflow-hidden border border-[#6E1423]/10 shadow-[0_15px_40px_rgba(110,20,35,0.06)]">
                <div className="grid grid-cols-3 bg-[#050A14] text-white text-xs md:text-sm font-bold">
                  <div className="p-3 md:p-4"></div>
                  <div className="p-3 md:p-4 text-center border-l border-white/10">Traditional Yatra</div>
                  <div className="p-3 md:p-4 text-center border-l border-[#C9A24A]/40 bg-[#C9A24A]/15 text-[#C9A24A]">This Yatra ✦</div>
                </div>
                {comparisonRows.map((row, i) => (
                  <div key={row.label} className={`grid grid-cols-3 text-xs md:text-sm ${i % 2 === 0 ? "bg-white" : "bg-[#F3EBDA]/50"}`}>
                    <div className="p-3 md:p-4 font-semibold text-[#6E1423] flex items-center">{row.label}</div>
                    <div className="p-3 md:p-4 text-[#5a4d42] border-l border-[#6E1423]/[0.06] flex items-center">
                      <span className="text-[#B45309] mr-1.5">✕</span>{row.traditional}
                    </div>
                    <div className="p-3 md:p-4 text-[#1A1410] border-l border-[#C9A24A]/20 bg-[#C9A24A]/[0.06] flex items-center font-medium">
                      <span className="text-[#1F6E64] mr-1.5">✓</span>{row.yatramritam}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════ BATCH / PRICING ══════════════ */}
        <section className="py-20 px-5 bg-[#F3EBDA]">
          <div className="max-w-lg mx-auto">
            <p className="text-[#6E1423] text-xs tracking-[0.35em] uppercase font-bold text-center mb-3">Secure Your Place</p>
            <h2 className="text-2xl md:text-4xl font-bold text-center" style={{ fontFamily: "var(--font-display), serif" }}>Available Batch</h2>
            <div className="mx-auto mt-4 w-[4.5rem] h-0.5 bg-[#C9A24A]" />

            <div className="mt-11 bg-[#6E1423] rounded-2xl p-9 text-white shadow-[0_25px_60px_rgba(110,20,35,0.3)]">
              <div className="flex justify-between items-start gap-4 flex-wrap border-b border-white/20 pb-5 mb-5">
                <div>
                  <p className="text-[#C9A24A] text-xs tracking-widest uppercase font-bold">Batch Details</p>
                  <p className="text-2xl font-extrabold mt-1.5 text-[#FFD84D]" style={{ fontFamily: "var(--font-display), serif" }}>23 – 26 Sept 2026</p>
                </div>
                <span className="bg-[#C9A24A]/25 border border-[#C9A24A]/50 rounded-full px-4 py-1.5 text-xs font-bold text-[#C9A24A] h-fit">Limited Seats</span>
              </div>
              <div className="flex flex-col gap-2.5 mb-6">
                {[
                  ["Day 1 — Arrival Lucknow", "Wed, 23 Sept"],
                  ["Day 2 — Nepalgunj, Bāgeshwari Darshan", "Thu, 24 Sept"],
                  ["Day 3 — Kailāsh Aerial Darshan", "Fri, 25 Sept"],
                  ["Day 4 — Departure", "Sat, 26 Sept"],
                ].map(([label, date]) => (
                  <div key={label as string} className="flex justify-between items-baseline gap-4 text-sm text-white">
                    <span className="flex-1 min-w-0 font-medium">{label}</span>
                    <b className="flex-shrink-0 whitespace-nowrap text-right text-[#FFD84D]">{date}</b>
                  </div>
                ))}
              </div>
              <div className="text-center py-5 border-y border-dashed border-white/25 mb-6">
                <div className="text-3xl font-extrabold text-[#C9A24A]" style={{ fontFamily: "var(--font-display), serif" }}>₹1,25,000</div>
                <p className="text-xs text-white/60 mt-1.5">Per person · Inclusive of flights to/fro Chennai · 5% GST included</p>
              </div>
              <button onClick={scrollToForm} className="w-full bg-gradient-to-r from-[#C9A24A] to-[#E0BC6C] text-[#050A14] font-bold text-sm py-3.5 rounded-lg tracking-wider" style={{ fontFamily: "var(--font-display), serif" }}>
                Register Your Seat
              </button>
            </div>
          </div>
        </section>

        {/* ══════════════ INCLUSIONS ══════════════ */}
        <section className="py-20 px-5">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#6E1423] text-xs tracking-[0.35em] uppercase font-bold text-center mb-3">Package Details</p>
            <h2 className="text-2xl md:text-4xl font-bold text-center" style={{ fontFamily: "var(--font-display), serif" }}>What's Included</h2>
            <div className="mx-auto mt-4 w-[4.5rem] h-0.5 bg-[#C9A24A]" />
            <div className="mt-11 bg-white border border-[#6E1423]/10 rounded-2xl p-8">
              <h3 className="text-[#6E1423] font-bold text-base text-center mb-6" style={{ fontFamily: "var(--font-display), serif" }}>✅ Everything Covered in ₹1,25,000</h3>
              {inclusions.map((item, i) => (
                <div key={item} className={`flex items-start gap-3 text-sm text-[#3a2f26] leading-relaxed py-2.5 ${i < inclusions.length - 1 ? "border-b border-[#6E1423]/[0.06]" : ""}`}>
                  <span className="text-[#1F6E64] font-bold flex-shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ FAQ ══════════════ */}
        <section id="faq" className="py-20 px-5 bg-[#F3EBDA]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#6E1423] text-xs tracking-[0.35em] uppercase font-bold text-center mb-3">Pilgrims Ask</p>
            <h2 className="text-2xl md:text-4xl font-bold text-center" style={{ fontFamily: "var(--font-display), serif" }}>Frequently Asked Questions</h2>
            <div className="mx-auto mt-4 w-[4.5rem] h-0.5 bg-[#C9A24A]" />
            <div className="flex flex-col gap-3 mt-11">
              {faqs.map(({ q, a }, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className={`bg-white rounded-xl overflow-hidden border transition-colors duration-300 ${isOpen ? "border-[#C9A24A]" : "border-[#6E1423]/10"}`}>
                    <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full flex justify-between items-center gap-4 p-5 text-left">
                      <span className="font-semibold text-sm leading-snug">{q}</span>
                      <span className={`text-[#6E1423] text-2xl flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 border-t border-[#6E1423]/[0.08] pt-4">
                        <p className="text-sm text-[#5a4d42] leading-relaxed">{a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════ REGISTRATION FORM ══════════════ */}
        <section ref={formRef} id="register" className="py-20 px-5">
          <div className="max-w-xl mx-auto">
            <p className="text-[#6E1423] text-xs tracking-[0.35em] uppercase font-bold text-center mb-3">Join the Yatra</p>
            <h2 className="text-2xl md:text-4xl font-bold text-center" style={{ fontFamily: "var(--font-display), serif" }}>Register Your Interest</h2>
            <div className="mx-auto mt-4 w-[4.5rem] h-0.5 bg-[#C9A24A]" />

            <div className="mt-10 bg-white border border-[#6E1423]/10 rounded-2xl p-9 shadow-[0_20px_50px_rgba(110,20,35,0.08)]">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="text-5xl mb-4">🙏</div>
                  <h3 className="text-2xl text-[#6E1423] font-bold mb-3" style={{ fontFamily: "var(--font-display), serif" }}>Hare Krishna!</h3>
                  <p className="text-[#5a4d42] leading-relaxed text-sm">
                    Your registration has been received. Our team will reach you within 24 hours to confirm your seat.
                    <br /><br />
                    For immediate confirmation, call{" "}
                    <a href="tel:919940242656" className="text-[#6E1423] font-bold">99402 42656</a>{" "}
                    or email{" "}
                    <a href="mailto:yatra@hkmchennai.org" className="text-[#6E1423] font-bold">yatra@hkmchennai.org</a>.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs tracking-wider uppercase font-bold text-[#6E1423]">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="border-[1.5px] border-[#6E1423]/20 rounded-lg px-4 py-3 text-sm bg-[#FBF6EC] focus:outline-none focus:border-[#C9A24A] transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs tracking-wider uppercase font-bold text-[#6E1423]">WhatsApp / Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="border-[1.5px] border-[#6E1423]/20 rounded-lg px-4 py-3 text-sm bg-[#FBF6EC] focus:outline-none focus:border-[#C9A24A] transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs tracking-wider uppercase font-bold text-[#6E1423]">City</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Chennai"
                        className="border-[1.5px] border-[#6E1423]/20 rounded-lg px-4 py-3 text-sm bg-[#FBF6EC] focus:outline-none focus:border-[#C9A24A] transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs tracking-wider uppercase font-bold text-[#6E1423]">No. of Pilgrims</label>
                      <select
                        value={formData.participants}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, participants: e.target.value })}
                        className="border-[1.5px] border-[#6E1423]/20 rounded-lg px-4 py-3 text-sm bg-[#FBF6EC] focus:outline-none focus:border-[#C9A24A] transition-colors"
                      >
                        {["1 person", "2 people", "3 people", "4 people", "5+ people"].map((n) => <option key={n}>{n}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 mt-4">
                    <label className="text-xs tracking-wider uppercase font-bold text-[#6E1423]">Message (optional)</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Any questions or special requirements…"
                      className="border-[1.5px] border-[#6E1423]/20 rounded-lg px-4 py-3 text-sm bg-[#FBF6EC] focus:outline-none focus:border-[#C9A24A] transition-colors resize-none"
                    />
                  </div>
                  {submitError && (
                    <p className="mt-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{submitError}</p>
                  )}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#6E1423] to-[#8a1c2f] text-white font-bold text-sm py-3.5 rounded-lg tracking-wider mt-6 hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ fontFamily: "var(--font-display), serif" }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        Submitting…
                      </>
                    ) : "Submit Registration Interest 🙏"}
                  </button>
                  <p className="text-center text-xs text-[#8a7a6a] mt-4">
                    For instant confirmation:{" "}
                    <a href="tel:919940242656" className="text-[#6E1423] font-bold">99402 42656</a>
                    {" · "}
                    <a href="mailto:yatra@hkmchennai.org" className="text-[#6E1423] font-bold">yatra@hkmchennai.org</a>
                  </p>
                </>
              )}
            </div>
          </div>
        </section>

        <Footer />

        {/* ══════════════ STICKY MOBILE REGISTER BAR ══════════════ */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-[999] bg-[#050A14]/97 backdrop-blur-md border-t-2 border-[#C9A24A] px-4 py-3 flex items-center gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.25)]">
          <a
            href="tel:919940242656"
            className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 border border-[#C9A24A]/40 flex items-center justify-center text-lg"
            aria-label="Call to register"
          >
            📞
          </a>
          <button
            onClick={scrollToForm}
            className="flex-1 bg-gradient-to-r from-[#C9A24A] to-[#E0BC6C] text-[#050A14] font-bold text-sm py-3 rounded-lg tracking-wide"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Register Now
          </button>
        </div>
      </div>
    </>
  );
}
