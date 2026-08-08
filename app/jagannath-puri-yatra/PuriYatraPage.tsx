"use client";
import { useState, useRef, useEffect, FormEvent, ChangeEvent, ReactNode } from "react";
import Image from "next/image";
import FooterSection from "@/components/FooterSection";

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

interface CancellationRow {
  when: string;
  charge: string;
}

interface FormState {
  name: string;
  phone: string;
  city: string;
  participants: string;
  message: string;
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
      "@type": "Organization",
      "@id": "https://hkmchennai.org/#organization",
      name: "Hare Krishna Movement Chennai — Srila Prabhupada's ISKCON Thiruvanmiyur",
      url: "https://hkmchennai.org",
      address: {
        "@type": "PostalAddress",
        streetAddress: "63, 1st Seaward Road, Thiruvanmiyur",
        addressLocality: "Chennai",
        postalCode: "600041",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-99402-42656",
        contactType: "reservations",
      },
    },
    {
      "@type": "TouristTrip",
      "@id": "https://hkmchennai.org/yatramritam/jagannath-puri-yatra#trip",
      name: "Jagannath Puri Yatra — Premium Yatra",
      description:
        "A 3-day, 2-night premium pilgrimage to Jagannath Puri, Konark, and Bhubaneswar, covering the Sri Mandir, Alarnath, Sakshi Gopal, Konark Sun Temple, and more. Organised by Yatramritam, Srila Prabhupada's ISKCON Thiruvanmiyur.",
      startDate: "2026-10-09",
      endDate: "2026-10-11",
      offers: {
        "@type": "Offer",
        price: "55000",
        priceCurrency: "INR",
        availability: "https://schema.org/LimitedAvailability",
        description: "Inclusive of return flights from Chennai and GST",
      },
      organizer: { "@id": "https://hkmchennai.org/#organization" },
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Arrival in Bhubaneswar, travel to Puri, Alarnath Darshan" },
          { "@type": "ListItem", position: 2, name: "Sri Jagannath Temple, Vimala Devi, Siddha Bakula, Tota Gopinath, Sakshi Gopal" },
          { "@type": "ListItem", position: 3, name: "Konark Sun Temple, Lingaraja, Ananta Vasudeva, Bindu Sagar, Departure" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is included in the ₹55,000 Jagannath Puri Yatra package?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The package includes return flights from Chennai to Bhubaneswar, 2 nights at a premium Sterling hotel, AC vehicle transport throughout, all meals including Mahaprasadam, temple guide, and 5% GST.",
          },
        },
        {
          "@type": "Question",
          name: "When is the Jagannath Puri Yatra 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Jagannath Puri Yatra is scheduled from 9th to 11th October 2026 — 3 days, 2 nights — organised by Hare Krishna Movement Chennai under the Yatramritam pilgrimage initiative.",
          },
        },
        {
          "@type": "Question",
          name: "What is the cancellation policy for this yatra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cancellations 30 days prior to arrival incur 25% charge, 15 days prior incur 40%, 7 days prior incur 50%, and cancellations within 48 hours or no-shows are non-refundable. All cancellations must be notified in writing.",
          },
        },
      ],
    },
  ],
};

// ─── DATA ────────────────────────────────────────────────────────────────────
const IMG = "/images/puri-yatra";
const PROMO_VIDEO_ID: string | null = null; // TODO: add YouTube video ID once shared

const destinations: Destination[] = [
  {
    key: "jagannath_temple.jpg",
    name: "Sri Jagannath Temple",
    sub: "Puri · The Main Darshan",
    desc: "Home to Lord Jagannath, Lord Balabhadra, and Goddess Subhadra — one of the Char Dham pilgrimage sites, drawing millions of devotees each year.",
  },
  {
    key: "vimala_devi.jpg",
    name: "Vimala Devi Shakti Peeth",
    sub: "Within the Jagannath Temple Complex",
    desc: "A revered Adi Shakti Peeth where Sati's feet are said to have fallen. Food offered to Lord Jagannath becomes sacred Mahaprasadam only after being offered here.",
  },
  {
    key: "alarnath.jpg",
    name: "Alarnath Temple",
    sub: "Near Puri",
    desc: "Dedicated to Lord Alarnath, an incarnation of Vishnu, this serene temple holds deep historical connection to the spiritual practices of Sri Chaitanya Mahaprabhu.",
  },
  {
    key: "siddha_bakula.jpg",
    name: "Siddha Bakula",
    sub: "Puri",
    desc: "The sacred spot where Haridasa Thakura, the great devotee of Lord Chaitanya, chanted the holy names beneath a bakula tree with unwavering devotion.",
  },
  {
    key: "tota_gopinath.jpg",
    name: "Tota Gopinath Temple",
    sub: "Puri",
    desc: "A significant Vaishnavite shrine where Lord Krishna is worshipped as Gopinath, depicted in a divine flute-playing pose.",
  },
  {
    key: "sakshi_gopal.jpg",
    name: "Sakshi Gopal Temple",
    sub: "En Route to Konark",
    desc: "The deity that walked from Vrindavana to bear witness to truth between two devotees — installed originally by King Vajra, Lord Krishna's own grandson.",
  },
  {
    key: "konark.jpg",
    name: "Konark Sun Temple",
    sub: "The Chariot of the Sun God",
    desc: "A UNESCO World Heritage marvel near the Bay of Bengal, standing as a testament to India's architectural brilliance and spiritual devotion.",
  },
  {
    key: "lingaraj.jpg",
    name: "Lingaraja Temple",
    sub: "Bhubaneswar",
    desc: "One of the oldest temples in Bhubaneswar, over 1,000 years old, dedicated to Lord Shiva with breathtaking Kalinga-style stone carvings.",
  },
  {
    key: "ananta_vasudev.jpg",
    name: "Ananta Vasudeva Temple",
    sub: "Bhubaneswar",
    desc: "A revered temple dedicated to Lord Krishna, worshipped here alongside his siblings Balarama and Subhadra.",
  },
  {
    key: "bindu_sarovar.jpg",
    name: "Bindu Sagar",
    sub: "Bhubaneswar",
    desc: "A sacred lake near Lingaraja Temple, believed to hold drops from every holy river of India — the Ganga, Yamuna, Saraswati, and more.",
  },
];

const itinerary: ItineraryDay[] = [
  {
    day: "01",
    date: "9 Oct 2026",
    title: "Arrival in Bhubaneswar — Alarnath Darshan",
    loc: "Puri",
    points: [
      "7:10 AM — Departure from Chennai Airport",
      "12:40 PM — Arrival at Bhubaneswar Airport",
      "1:00 PM — Travel to Puri by AC vehicle",
      "2:30 PM — Lunch and check-in at Sterling Hotel",
      "4:30 PM — Alarnath Darshan — sacred to Sri Chaitanya Mahaprabhu's spiritual practices",
      "8:00 PM — Dinner · 9:00 PM — Rest",
    ],
  },
  {
    day: "02",
    date: "10 Oct 2026",
    title: "Sri Jagannath Temple & Sacred Puri Darshans",
    loc: "Puri",
    points: [
      "7:30 AM — Breakfast",
      "8:30 AM — Sri Jagannath Temple — darshan of Lord Jagannath, Balabhadra & Subhadra",
      "Vimala Devi Shakti Peeth — where Mahaprasadam is sanctified",
      "Siddha Bakula — Haridasa Thakura's place of chanting",
      "Tota Gopinath Temple — Lord Krishna as the flute-playing Gopinath",
      "1:00 PM — Mahaprasadam served by devotees at Ananda Bazar",
      "4:30 PM — Sakshi Gopal Temple darshan",
      "8:00 PM — Dinner · 9:00 PM — Rest",
    ],
  },
  {
    day: "03",
    date: "11 Oct 2026",
    title: "Konark Sun Temple & Bhubaneswar Temples — Departure",
    loc: "Departure",
    points: [
      "7:00 AM — Breakfast · 8:00 AM — Check-out",
      "9:00 AM — Travel to Konark Sun Temple",
      "11:00 AM — Konark Sun Temple — the Chariot of the Sun God",
      "2:00 PM — Reach Bhubaneswar, Lunch",
      "3:30 PM — Lingaraja Temple, Ananta Vasudeva Temple, Bindu Sagar",
      "5:00 PM — Reach Bhubaneswar Airport",
      "7:35 PM — Flight to Chennai · 9:10 PM — Arrival in Chennai",
    ],
  },
];

const highlights: Highlight[] = [
  { icon: "🙏", title: "ISKCON Devotee Guide", desc: "Personally guided throughout by an experienced devotee from Srila Prabhupada's ISKCON Thiruvanmiyur" },
  { icon: "🎶", title: "Bhajans & Kirtans", desc: "Special devotional bhajans and kirtans woven through the journey" },
  { icon: "🔥", title: "Special Pujas", desc: "Sankalpa Archana and special pujas performed at sacred sites" },
  { icon: "🍱", title: "Satvik Mahaprasadam", desc: "Pure Mahaprasadam and satvik meals throughout the yatra" },
  { icon: "✈️", title: "Flights Included", desc: "Return flights from Chennai to Bhubaneswar, all-inclusive" },
  { icon: "🏨", title: "Premium Stay", desc: "Comfortable stay at Sterling Hotel, Puri, for 2 nights" },
];

const inclusions: string[] = [
  "Return flights from Chennai to Bhubaneswar",
  "2 nights premium accommodation at Sterling Hotel, Puri",
  "AC vehicle (Urbenia) transport throughout the yatra",
  "All meals — Breakfast, Lunch & Dinner, including Mahaprasadam",
  "Personally guided by an ISKCON temple devotee guide",
  "Special bhajans, kirtans & sankalpa archana",
  "Temple entry and darshan arrangements at all sacred sites",
  "5% GST included",
];

const cancellationRows: CancellationRow[] = [
  { when: "30 days prior to arrival", charge: "25% of Tour/Service Cost" },
  { when: "15 days prior to arrival", charge: "40% of Tour/Service Cost" },
  { when: "07 days prior to arrival", charge: "50% of Tour/Service Cost" },
  { when: "48 hours prior OR No Show", charge: "No Refund" },
];

const faqs: Faq[] = [
  {
    q: "What does the ₹55,000 package include?",
    a: "Return flights from Chennai to Bhubaneswar, 2 nights at a premium Sterling hotel in Puri, AC vehicle transport, all meals including Mahaprasadam, temple guide, darshan arrangements, and 5% GST.",
  },
  {
    q: "When is the Jagannath Puri Yatra?",
    a: "9th to 11th October 2026 — a 3-day, 2-night premium pilgrimage organised by Yatramritam, Srila Prabhupada's ISKCON Thiruvanmiyur.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Cancellations must be notified in writing. 30 days prior: 25% charge. 15 days prior: 40% charge. 7 days prior: 50% charge. Within 48 hours or no-show: no refund.",
  },
  {
    q: "Which temples are covered in this yatra?",
    a: "Sri Jagannath Temple, Alarnath Temple, Vimala Devi Shakti Peeth, Siddha Bakula, Tota Gopinath, Sakshi Gopal, Konark Sun Temple, Lingaraja Temple, Ananta Vasudeva Temple, and Bindu Sagar.",
  },
  {
    q: "Is this a vegetarian, satvik yatra?",
    a: "Yes. All meals are pure vegetarian and satvik, including Mahaprasadam offered to Lord Jagannath, served by devotees at Ananda Bazar.",
  },
  {
    q: "How do I register my seat?",
    a: "Seats are limited and allocated on a first-come, first-served basis. Call or WhatsApp 99402 42656 to register and receive payment details.",
  },
];

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function PuriYatraPage() {
  const [openDay, setOpenDay] = useState<string | null>("01");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormState>({ name: "", phone: "", city: "", participants: "1 person", message: "" });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const formRef = useRef<HTMLElement | null>(null);
  const countdown = useCountdown("2026-10-09T00:00:00");

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMsg("Please provide your name and phone number.");
      return;
    }
    setLoading(true);
    setErrorMsg("");
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
          yatra_name: "Jagannath Puri Yatra 2026",
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit registration. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || "An error occurred while submitting. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const [activeSection, setActiveSection] = useState<string>("");
  useEffect(() => {
    const ids = ["why", "guide", "destinations", "itinerary", "cancellation", "faq"];
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

  const navLinkClass = (id: string) =>
    `text-sm font-medium transition-colors ${activeSection === id ? "text-[#6E1423] font-bold" : "text-[#1A1410] hover:text-[#6E1423]"}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <div className="bg-[#FBF6EC] text-[#1A1410] font-['Inter',sans-serif] pb-20 md:pb-0">

        {/* ══════════════ NAVBAR ══════════════ */}
        <nav className="sticky top-0 z-[999] bg-[#FBF6EC]/97 backdrop-blur-md border-b-2 border-[#C9A24A] shadow-[0_2px_20px_rgba(110,20,35,0.08)]">
          <div className="px-6 py-3.5">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <Image src={`${IMG}/logo_iskcon.png`} alt="Srila Prabhupada's ISKCON Chennai" width={140} height={56} className="h-11 w-auto object-contain" />
                <Image src={`${IMG}/logo_yatramritam.png`} alt="Yatramritam" width={56} height={56} className="h-11 w-auto object-contain" />
              </div>
              <div className="hidden md:flex items-center gap-6">
                <a href="#why" className={navLinkClass("why")}>Why This Yatra</a>
                <a href="#guide" className={navLinkClass("guide")}>Your Guide</a>
                <a href="#destinations" className={navLinkClass("destinations")}>Destinations</a>
                <a href="#itinerary" className={navLinkClass("itinerary")}>Itinerary</a>
                <a href="#cancellation" className={navLinkClass("cancellation")}>Policy</a>
                <a href="#faq" className={navLinkClass("faq")}>FAQ</a>
                <button onClick={scrollToForm} className="bg-[#6E1423] text-[#FBF6EC] px-5 py-2.5 rounded-md font-semibold text-sm">
                  Register Now
                </button>
              </div>
            </div>
          </div>
          {/* Mobile section pills */}
          <div className="md:hidden flex gap-2 overflow-x-auto px-4 pb-3 -mt-1 scrollbar-hide">
            {[
              ["why", "Why This Yatra"],
              ["guide", "Your Guide"],
              ["destinations", "Destinations"],
              ["itinerary", "Itinerary"],
              ["cancellation", "Policy"],
              ["faq", "FAQ"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={`flex-shrink-0 text-xs font-semibold px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                  activeSection === id ? "bg-[#6E1423] text-[#FBF6EC]" : "bg-[#F3EBDA] text-[#6E1423]"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        {/* ══════════════ HERO ══════════════ */}
        <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center overflow-hidden px-5 py-16">
          <Image
            src={`${IMG}/hero.jpg`}
            alt="Sri Jagannath Temple Puri at Sunset"
            fill
            priority
            className="object-cover object-[center_60%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050A14]/60 via-[#050A14]/40 to-[#050A14]/85" />

          <div className="relative z-10 text-white max-w-5xl mx-auto">
            <div className="flex flex-col items-center justify-center gap-4 mb-8">
              <Image 
                src={`${IMG}/logo_yatramritam.png`} 
                alt="Yatramritam Logo" 
                width={260} 
                height={260} 
                className="h-28 sm:h-36 md:h-44 lg:h-48 w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.85)] hover:scale-105 transition-transform duration-300" 
              />
              <div className="flex flex-col text-center">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0BD] via-[#FFD84D] to-[#F59E0B] text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase font-extrabold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-relaxed">
                  <span className="block md:inline whitespace-nowrap">SRILA PRABHUPADA'S ISKCON THIRUVANMIYUR</span>
                  <span className="hidden md:inline"> • </span>
                  <span className="block md:inline">DAKSHINA DWARAKA DHAM, CHENNAI</span>
                </p>
              </div>
            </div>

            <p className="text-[#FFD84D] text-xs sm:text-sm tracking-[0.35em] uppercase font-bold mb-4" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.95)" }}>
              ✦ Yatramritam · Rediscover Pilgrimage ✦
            </p>
            <span className="inline-block bg-[#6E1423]/90 border border-[#FFD84D]/70 text-[#FFD84D] text-xs tracking-[0.25em] uppercase font-extrabold px-5 py-2 rounded-full mb-6 shadow-[0_4px_20px_rgba(110,20,35,0.6)]">
              Premium Yatra 2026
            </span>

            <h1 className="font-['Cinzel',serif] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight my-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#FFF3C4] to-[#FFD84D] drop-shadow-[0_6px_25px_rgba(0,0,0,0.95)]" style={{ filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 30px rgba(255, 216, 77, 0.4))" }}>
                Jagannath Puri Yatra
              </span>
              <span className="block font-['Cormorant_Garamond',serif] italic font-semibold text-xl sm:text-2xl md:text-3xl text-[#FFEA85] mt-4 max-w-3xl mx-auto" style={{ textShadow: "0 3px 12px rgba(0,0,0,0.95), 0 0 20px rgba(0,0,0,0.9)" }}>
                Walk the Sacred Land of Lord Jagannath & Sri Chaitanya Mahaprabhu
              </span>
            </h1>
            <p className="font-['Cormorant_Garamond',serif] italic text-lg sm:text-xl md:text-2xl text-[#FBF6EC] max-w-2xl mx-auto mt-6 leading-relaxed" style={{ textShadow: "0 2px 14px rgba(0,0,0,0.95)" }}>
              From the golden domes of Sri Mandir to the sun-carved chariot of Konark — three days of darshan, devotion, and the sacred joy of Ratha Yatra's homeland.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mt-8">
              <span className="bg-[#050A14]/80 border-[1.5px] border-[#C9A24A]/55 backdrop-blur-sm rounded-full px-5 py-2 text-xs font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.35)]">✈️ Flights Included</span>
              <span className="bg-[#050A14]/80 border-[1.5px] border-[#C9A24A]/55 backdrop-blur-sm rounded-full px-5 py-2 text-xs font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.35)]">🏨 Premium Stay</span>
              <span className="bg-[#050A14]/80 border-[1.5px] border-[#C9A24A]/55 backdrop-blur-sm rounded-full px-5 py-2 text-xs font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.35)]">🍱 Satvik Mahaprasadam</span>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <div className="bg-[#050A14]/85 border-[1.5px] border-[#C9A24A]/55 backdrop-blur-sm rounded-xl px-6 py-3.5 shadow-[0_4px_16px_rgba(0,0,0,0.35)]">
                <p className="text-[#C9A24A] text-[.62rem] tracking-[0.25em] uppercase font-semibold">Dates</p>
                <p className="font-['Cinzel',serif] font-bold text-lg mt-0.5 text-white">9 – 11 Oct 2026</p>
                <p className="text-white/55 text-xs mt-0.5">3 Days · Ex-Chennai</p>
              </div>
              <div className="bg-[#050A14]/85 border-[1.5px] border-[#C9A24A]/55 backdrop-blur-sm rounded-xl px-6 py-3.5 shadow-[0_4px_16px_rgba(0,0,0,0.35)]">
                <p className="text-[#C9A24A] text-[.62rem] tracking-[0.25em] uppercase font-semibold">All-Inclusive</p>
                <p className="font-['Cinzel',serif] font-bold text-lg mt-0.5 text-white">₹55,000</p>
                <p className="text-white/55 text-xs mt-0.5">Flights + GST included</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-white/90 text-[.62rem] tracking-[0.3em] uppercase mb-3" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.85), 0 0 3px rgba(0,0,0,0.9)" }}>Yatra begins in</p>
              <div className="flex gap-3 justify-center">
                {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
                  <div key={unit} className="text-center">
                    <div className="bg-[#050A14]/85 border-[1.5px] border-[#C9A24A]/55 backdrop-blur-sm rounded-lg w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.35)]">
                      <span className="font-['Cinzel',serif] text-2xl md:text-3xl font-bold text-[#C9A24A]">
                        {String(countdown[unit] ?? 0).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-white/85 text-[.58rem] uppercase tracking-widest mt-1" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.85), 0 0 3px rgba(0,0,0,0.9)" }}>{unit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-9">
              <button onClick={scrollToForm} className="bg-gradient-to-r from-[#C9A24A] to-[#E0BC6C] text-[#050A14] font-bold font-['Cinzel',serif] text-sm px-9 py-3.5 rounded-lg tracking-wider shadow-[0_8px_30px_rgba(201,162,74,0.35)] hover:-translate-y-0.5 transition-transform">
                Register Now
              </button>
              <a href="https://wa.me/919940242656" target="_blank" rel="noopener noreferrer" className="border-[1.5px] border-white/50 text-white font-semibold text-sm px-8 py-3.5 rounded-lg bg-white/5 backdrop-blur-sm">
                📞 WhatsApp: 99402 42656
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════ POSTER HIGHLIGHTS STRIP ══════════════ */}
        <div className="bg-[#050A14] py-10 px-5">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-[#C9A24A] font-['Cinzel',serif] font-bold text-sm tracking-[0.2em] uppercase mb-6">✦ Highlights ✦</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {[
                ["🙏", "Personally guided by ISKCON temple devotee guide"],
                ["🎶", "Special bhajans & kirtans"],
                ["🔥", "Special Pujas & Sankalpa Archana"],
                ["🍱", "Satvik Food"],
                ["📿", "Prayers at each location"],
                ["🎁", "Welcome kit, take-home gift & more"],
              ].map(([icon, text]) => (
                <div key={text} className="text-center text-[#F5EFE0]">
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
            <h2 className="font-['Cinzel',serif] text-2xl md:text-4xl font-bold leading-snug">Where Every Devotee Becomes Family</h2>
            <div className="mx-auto mt-4" style={{ width: "4.5rem", height: "2px", background: "#C9A24A" }} />
            <p className="font-['Cormorant_Garamond',serif] text-xl leading-relaxed text-[#3a2f26] mt-6">
              Jagannath Puri is one of the four sacred Char Dhams of India — the eternal home of Lord Jagannath, worshipped alongside Balabhadra and Subhadra in a form found nowhere else on Earth. It was here that Sri Chaitanya Mahaprabhu spent His final years immersed in the deepest ecstasies of devotion.
            </p>
            <p className="font-['Cormorant_Garamond',serif] text-xl leading-relaxed text-[#3a2f26] mt-4">
              Under the Yatramritam initiative of Srila Prabhupada's ISKCON Thiruvanmiyur, this premium 3-day pilgrimage carries devotees through Puri, Konark, and Bhubaneswar — every temple, every darshan, every plate of Mahaprasadam offered with the same care and devotion Sri Chaitanya Himself showed this sacred land.
            </p>

            {PROMO_VIDEO_ID ? (
              <Reveal>
                <div className="max-w-sm mx-auto mt-11 rounded-2xl overflow-hidden border-[3px] border-[#C9A24A] shadow-[0_25px_60px_rgba(110,20,35,0.2)]">
                  <iframe
                    src={`https://www.youtube.com/embed/${PROMO_VIDEO_ID}`}
                    title="Jagannath Puri Yatra — Promo Video"
                    className="w-full aspect-[9/16] block border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </Reveal>
            ) : (
              <Reveal>
                <div className="max-w-sm mx-auto mt-11 rounded-2xl border-[3px] border-dashed border-[#C9A24A]/50 bg-white p-10 text-center">
                  <div className="text-3xl mb-3">🎬</div>
                  <p className="font-['Cinzel',serif] text-[#6E1423] font-bold text-sm">Promo Video Coming Soon</p>
                  <p className="text-[#8a7a6a] text-xs mt-2">The yatra film will appear here once released.</p>
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* ══════════════ MEET YOUR GUIDE ══════════════ */}
        <section id="guide" className="py-20 px-5 bg-[#F3EBDA]">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#6E1423] text-xs tracking-[0.35em] uppercase font-bold text-center mb-3">Your Companion on This Journey</p>
            <h2 className="font-['Cinzel',serif] text-2xl md:text-4xl font-bold text-center">Meet Your Guide</h2>
            <div className="mx-auto mt-4" style={{ width: "4.5rem", height: "2px", background: "#C9A24A" }} />

            <Reveal>
              <div className="grid md:grid-cols-[16rem_1fr] gap-8 md:gap-10 items-center mt-11 bg-white rounded-2xl border border-[#6E1423]/10 p-7 md:p-10 shadow-[0_15px_40px_rgba(110,20,35,0.06)]">
                <div className="relative w-44 h-56 md:w-60 md:h-72 rounded-xl overflow-hidden mx-auto border-2 border-[#C9A24A] flex-shrink-0 bg-[#FBF6EC]">
                  <Image
                    src={`${IMG}/guide_venugopal.jpg`}
                    alt="Venugopal Dasa — Yatramritam Head"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-['Cinzel',serif] text-xl font-bold text-[#6E1423]">Venugopal Dāsa</h3>
                  <p className="text-[#C9A24A] text-xs uppercase tracking-[0.2em] font-bold mt-1 mb-4">Yatramritam Head</p>
                  <p className="font-['Cormorant_Garamond',serif] italic text-lg leading-relaxed text-[#3a2f26]">
                    "The sacred land of Jagannath Puri, the joyful celebration of Ratha Yatra, and the devotional legacy of Sri Chaitanya Mahaprabhu have inspired pilgrims for centuries. Through devotional association, kirtan, prayer, and carefully organized arrangements, our endeavor is to make this pilgrimage both spiritually enriching and deeply memorable. We warmly invite you to join us on this sacred journey."
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════ HIGHLIGHTS ══════════════ */}
        <section className="py-20 px-5">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#6E1423] text-xs tracking-[0.35em] uppercase font-bold text-center mb-3">What Awaits You</p>
            <h2 className="font-['Cinzel',serif] text-2xl md:text-4xl font-bold text-center">Yatra Highlights</h2>
            <div className="mx-auto mt-4" style={{ width: "4.5rem", height: "2px", background: "#C9A24A" }} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-11">
              {highlights.map(({ icon, title, desc }) => (
                <Reveal key={title}>
                  <div className="bg-white border border-[#6E1423]/10 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(110,20,35,0.1)] hover:border-[#C9A24A]/50 transition-all duration-300 h-full">
                    <div className="text-3xl mb-3.5">{icon}</div>
                    <h3 className="font-['Cinzel',serif] font-bold text-sm text-[#6E1423] mb-2 leading-snug">{title}</h3>
                    <p className="text-sm text-[#5a4d42] leading-relaxed">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ DESTINATIONS ══════════════ */}
        <section id="destinations" className="py-20 px-5 bg-[#F3EBDA]">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#6E1423] text-xs tracking-[0.35em] uppercase font-bold text-center mb-3">Sacred Sites</p>
            <h2 className="font-['Cinzel',serif] text-2xl md:text-4xl font-bold text-center">Destinations on This Yatra</h2>
            <div className="mx-auto mt-4" style={{ width: "4.5rem", height: "2px", background: "#C9A24A" }} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-11">
              {destinations.map(({ key, name, sub, desc }) => (
                <Reveal key={key}>
                  <div className="rounded-2xl overflow-hidden bg-white border border-[#6E1423]/10 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(110,20,35,0.15)] transition-all duration-350 group h-full">
                    <div className="relative h-52 overflow-hidden">
                      <Image src={`${IMG}/${key}`} alt={name} fill className="object-cover group-hover:scale-108 transition-transform duration-500" />
                      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to top, rgba(5,10,20,0.75) 0%, transparent 55%)" }} />
                      <p className="absolute bottom-3 left-3.5 text-[#C9A24A] text-xs font-bold tracking-wide" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}>{sub}</p>
                    </div>
                    <div className="p-5 pb-6">
                      <h3 className="text-base font-bold text-[#6E1423] mb-2">{name}</h3>
                      <p className="text-sm text-[#5a4d42] leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ ITINERARY ══════════════ */}
        <section id="itinerary" className="py-20 px-5 bg-[#050A14] text-[#F5EFE0]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#C9A24A] text-xs tracking-[0.35em] uppercase font-bold text-center mb-3">3 Days of Divine Darshan</p>
            <h2 className="font-['Cinzel',serif] text-2xl md:text-4xl font-bold text-center text-[#F5EFE0]">Day-by-Day Itinerary</h2>
            <div className="mx-auto mt-4" style={{ width: "4.5rem", height: "2px", background: "#C9A24A" }} />
            <p className="font-['Cormorant_Garamond',serif] text-lg text-[#C9A24A] text-center mt-2">
              Chennai → Puri → Konark → Bhubaneswar → Return
            </p>
            <div className="flex flex-col gap-3.5 mt-10">
              {itinerary.map(({ day, date, title, loc, points }) => {
                const isOpen = openDay === day;
                return (
                  <div key={day} className={`rounded-2xl overflow-hidden border transition-colors duration-300 ${isOpen ? "border-[#C9A24A]/70 bg-[#C9A24A]/[0.06]" : "border-[#C9A24A]/25 bg-white/[0.02]"}`}>
                    <button onClick={() => setOpenDay(isOpen ? null : day)} className="w-full flex items-center gap-5 p-6 text-left">
                      <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[#C9A24A]/15 border border-[#C9A24A]/40 flex flex-col items-center justify-center">
                        <span className="font-['Cinzel',serif] text-[#C9A24A] font-bold text-[.65rem] leading-tight text-center">Day<br />{day}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[#C9A24A]/80 text-xs tracking-widest uppercase font-semibold">{date}</p>
                        <p className="font-['Cinzel',serif] font-semibold text-base mt-1 leading-snug">{title}</p>
                        <p className="text-[#F5EFE0]/50 text-xs mt-1">📍 {loc}</p>
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

        {/* ══════════════ PREVIOUS YATRA MOMENTS (placeholder) ══════════════ */}
        <section className="py-20 px-5">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-[#6E1423] text-xs tracking-[0.35em] uppercase font-bold mb-3">Memories From Our Pilgrims</p>
            <h2 className="font-['Cinzel',serif] text-2xl md:text-4xl font-bold">Previous Yatra Moments</h2>
            <div className="mx-auto mt-4" style={{ width: "4.5rem", height: "2px", background: "#C9A24A" }} />
            <Reveal>
              <div className="mt-11 flex flex-wrap justify-center gap-3 md:gap-4">
                {[
                  "glimpse-1.jpg",
                  "glimpse-2.jpg",
                  "glimpse-3.jpg",
                  "glimpse-4.jpg",
                  "glimpse-5.jpg",
                  "glimps-6.jpg",
                  "glimpse-7.jpg",
                ].map((filename, i) => (
                  <div 
                    key={filename} 
                    className="relative rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(110,20,35,0.08)] border-[2px] border-white group w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.666rem)] lg:w-[calc(25%-0.75rem)] aspect-square"
                  >
                    <Image
                      src={`${IMG}/glimpses/${filename}`}
                      alt={`Yatra Glimpse ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-[#6E1423]/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════ PACKAGE / PRICING ══════════════ */}
        <section className="py-20 px-5 bg-[#F3EBDA]">
          <div className="max-w-lg mx-auto">
            <p className="text-[#6E1423] text-xs tracking-[0.35em] uppercase font-bold text-center mb-3">Secure Your Place</p>
            <h2 className="font-['Cinzel',serif] text-2xl md:text-4xl font-bold text-center">Package Details</h2>
            <div className="mx-auto mt-4" style={{ width: "4.5rem", height: "2px", background: "#C9A24A" }} />

            <div className="mt-11 bg-[#6E1423] rounded-2xl p-9 text-white shadow-[0_25px_60px_rgba(110,20,35,0.3)]">
              <div className="flex justify-between items-start gap-4 flex-wrap border-b border-white/20 pb-5 mb-5">
                <div>
                  <p className="text-[#C9A24A] text-xs tracking-widest uppercase font-bold">Batch Details</p>
                  <p className="font-['Cinzel',serif] text-xl font-bold mt-1.5 text-white">9 – 11 Oct 2026</p>
                </div>
                <span className="bg-[#C9A24A]/25 border border-[#C9A24A]/50 rounded-full px-4 py-1.5 text-xs font-bold text-[#C9A24A] h-fit">Limited Seats</span>
              </div>
              <div className="flex flex-col gap-2.5 mb-6">
                {[
                  ["Day 1 — Arrival, Alarnath Darshan", "Fri, 9 Oct"],
                  ["Day 2 — Sri Jagannath Temple & Puri Darshans", "Sat, 10 Oct"],
                  ["Day 3 — Konark, Bhubaneswar, Departure", "Sun, 11 Oct"],
                ].map(([label, date]) => (
                  <div key={label} className="flex justify-between items-baseline gap-4 text-sm text-white/85">
                    <span className="flex-1 min-w-0">{label}</span>
                    <b className="flex-shrink-0 whitespace-nowrap text-right text-white">{date}</b>
                  </div>
                ))}
              </div>
              <div className="text-center py-5 border-y border-dashed border-white/25 mb-6">
                <div className="font-['Cinzel',serif] text-3xl font-extrabold text-[#C9A24A]">₹55,000</div>
                <p className="text-xs text-white/60 mt-1.5">Per person · Flights from Chennai + GST included</p>
              </div>
              <button onClick={scrollToForm} className="w-full bg-gradient-to-r from-[#C9A24A] to-[#E0BC6C] text-[#050A14] font-bold font-['Cinzel',serif] text-sm py-3.5 rounded-lg tracking-wider">
                Register Your Seat
              </button>
            </div>
          </div>
        </section>

        {/* ══════════════ INCLUSIONS ══════════════ */}
        <section className="py-20 px-5">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#6E1423] text-xs tracking-[0.35em] uppercase font-bold text-center mb-3">Package Details</p>
            <h2 className="font-['Cinzel',serif] text-2xl md:text-4xl font-bold text-center">What's Included</h2>
            <div className="mx-auto mt-4" style={{ width: "4.5rem", height: "2px", background: "#C9A24A" }} />
            <div className="mt-11 bg-white border border-[#6E1423]/10 rounded-2xl p-8">
              <h3 className="font-['Cinzel',serif] text-[#6E1423] font-bold text-base text-center mb-6">✅ Everything Covered in ₹55,000</h3>
              {inclusions.map((item, i) => (
                <div key={item} className={`flex items-start gap-3 text-sm text-[#3a2f26] leading-relaxed py-2.5 ${i < inclusions.length - 1 ? "border-b border-[#6E1423]/[0.06]" : ""}`}>
                  <span className="text-[#1F6E64] font-bold flex-shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ CANCELLATION POLICY ══════════════ */}
        <section id="cancellation" className="py-20 px-5 bg-[#F3EBDA]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#6E1423] text-xs tracking-[0.35em] uppercase font-bold text-center mb-3">Please Read Carefully</p>
            <h2 className="font-['Cinzel',serif] text-2xl md:text-4xl font-bold text-center">Cancellation Policy</h2>
            <div className="mx-auto mt-4" style={{ width: "4.5rem", height: "2px", background: "#C9A24A" }} />
            <p className="text-center text-[#5a4d42] text-sm mt-6 max-w-xl mx-auto leading-relaxed">
              In the event of cancellation of tour/travel services due to any avoidable or unavoidable reason, we must be notified of the same in writing. Cancellation charges will be effective from the date we receive the advice in writing.
            </p>

            <Reveal>
              <div className="mt-9 rounded-2xl overflow-hidden border border-[#6E1423]/10 shadow-[0_15px_40px_rgba(110,20,35,0.06)]">
                {cancellationRows.map((row, i) => (
                  <div key={row.when} className={`grid grid-cols-2 text-sm ${i % 2 === 0 ? "bg-white" : "bg-[#FBF6EC]"}`}>
                    <div className="p-4 md:p-5 font-semibold text-[#6E1423] border-r border-[#6E1423]/[0.06]">{row.when}</div>
                    <div className={`p-4 md:p-5 font-medium ${row.charge === "No Refund" ? "text-[#B45309]" : "text-[#1A1410]"}`}>{row.charge}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════ FAQ ══════════════ */}
        <section id="faq" className="py-20 px-5">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#6E1423] text-xs tracking-[0.35em] uppercase font-bold text-center mb-3">Pilgrims Ask</p>
            <h2 className="font-['Cinzel',serif] text-2xl md:text-4xl font-bold text-center">Frequently Asked Questions</h2>
            <div className="mx-auto mt-4" style={{ width: "4.5rem", height: "2px", background: "#C9A24A" }} />
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

        {/* ══════════════ REGISTRATION ══════════════ */}
        <section ref={formRef} id="register" className="py-20 px-5 bg-[#F3EBDA]">
          <div className="max-w-xl mx-auto">
            <p className="text-[#6E1423] text-xs tracking-[0.35em] uppercase font-bold text-center mb-3">Join the Yatra</p>
            <h2 className="font-['Cinzel',serif] text-2xl md:text-4xl font-bold text-center">Register Your Interest</h2>
            <div className="mx-auto mt-4" style={{ width: "4.5rem", height: "2px", background: "#C9A24A" }} />
            <p className="text-center text-sm text-[#5a4d42] mt-3 font-medium">
              Our team will contact you within 24 hours to confirm your seat and share payment details.
            </p>

            <div className="mt-8 bg-white border border-[#6E1423]/10 rounded-2xl p-9 shadow-[0_20px_50px_rgba(110,20,35,0.08)]">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="text-5xl mb-4">🙏</div>
                  <h3 className="font-['Cinzel',serif] text-2xl text-[#6E1423] font-bold mb-3">Hare Krishna!</h3>
                  <p className="text-[#5a4d42] leading-relaxed text-sm">
                    Your registration has been received. Our team will contact you within 24 hours to confirm your seat and share payment details.
                    <br /><br />
                    For immediate confirmation, call <a href="tel:919940242656" className="text-[#6E1423] font-bold">99402 42656</a> or email <a href="mailto:yatra@hkmchennai.org" className="text-[#6E1423] font-bold">yatra@hkmchennai.org</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {errorMsg && (
                    <div className="p-3 mb-4 text-xs font-semibold text-red-700 bg-red-100 rounded-lg border border-red-200">
                      {errorMsg}
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs tracking-wider uppercase font-bold text-[#6E1423]">Full Name *</label>
                      <input type="text" required value={formData.name} onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" className="border-[1.5px] border-[#6E1423]/20 rounded-lg px-4 py-3 text-sm bg-[#FBF6EC] focus:outline-none focus:border-[#C9A24A] transition-colors" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs tracking-wider uppercase font-bold text-[#6E1423]">WhatsApp / Phone *</label>
                      <input type="tel" required value={formData.phone} onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" className="border-[1.5px] border-[#6E1423]/20 rounded-lg px-4 py-3 text-sm bg-[#FBF6EC] focus:outline-none focus:border-[#C9A24A] transition-colors" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs tracking-wider uppercase font-bold text-[#6E1423]">City</label>
                      <input type="text" value={formData.city} onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, city: e.target.value })} placeholder="Chennai" className="border-[1.5px] border-[#6E1423]/20 rounded-lg px-4 py-3 text-sm bg-[#FBF6EC] focus:outline-none focus:border-[#C9A24A] transition-colors" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs tracking-wider uppercase font-bold text-[#6E1423]">No. of Pilgrims</label>
                      <select value={formData.participants} onChange={(e: ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, participants: e.target.value })} className="border-[1.5px] border-[#6E1423]/20 rounded-lg px-4 py-3 text-sm bg-[#FBF6EC] focus:outline-none focus:border-[#C9A24A] transition-colors">
                        {["1 person", "2 people", "3 people", "4 people", "5+ people"].map((n) => <option key={n}>{n}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 mt-4">
                    <label className="text-xs tracking-wider uppercase font-bold text-[#6E1423]">Message (optional)</label>
                    <textarea rows={3} value={formData.message} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })} placeholder="Any questions or special requirements…" className="border-[1.5px] border-[#6E1423]/20 rounded-lg px-4 py-3 text-sm bg-[#FBF6EC] focus:outline-none focus:border-[#C9A24A] transition-colors resize-none" />
                  </div>
                  <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-[#6E1423] to-[#8a1c2f] text-white font-bold font-['Cinzel',serif] text-sm py-3.5 rounded-lg tracking-wider mt-6 hover:opacity-90 transition-opacity disabled:opacity-50">
                    {loading ? "Submitting Registration..." : "Submit Registration Interest 🙏"}
                  </button>
                  <p className="text-center text-xs text-[#8a7a6a] mt-4">
                    For instant confirmation: <a href="tel:919940242656" className="text-[#6E1423] font-bold">99402 42656</a> · <a href="mailto:yatra@hkmchennai.org" className="text-[#6E1423] font-bold">yatra@hkmchennai.org</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ══════════════ OFFICIAL SITE FOOTER WITH OCEAN VIDEO BACKGROUND ══════════════ */}
        <FooterSection />

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
            className="flex-1 bg-gradient-to-r from-[#C9A24A] to-[#E0BC6C] text-[#050A14] font-bold font-['Cinzel',serif] text-sm py-3 rounded-lg tracking-wide"
          >
            Register Now
          </button>
        </div>
      </div>
    </>
  );
}
