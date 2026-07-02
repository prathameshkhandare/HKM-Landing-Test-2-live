// app/yatramritam/kedarnath-badrinath/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cormorant, cinzel, inter, poppins } from "./fonts";
import "./yatra.css";

import {
  YATRA_META, BATCHES, ITINERARY, INCLUSIONS, EXCLUSIONS,
  HIGHLIGHTS, KEY_INFO, CANCELLATION,
} from "./data";
import Countdown from "./components/Countdown";
import FaqAccordion from "./components/FaqAccordion";
import RegisterForm from "./components/RegisterForm";
import StickyMobileCta from "./components/StickyMobileCta";
import FooterSection from "@/components/FooterSection";

const IMG = "/assets/dodham-yatra";
const SITE = "https://www.hkmchennai.org";
const PAGE = "/dodham-yatra";

// ── SEO METADATA ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Kedarnath & Badrinath Yatra by Helicopter 2026 | Yatramritam — ISKCON Thiruvanmiyur",
  description: "Join the Kedarnath & Badrinath Do Dham Yatra by Helicopter — 3 Nights / 4 Days. VIP darśan at both Dhams, Rishikesh Ganga Aarti, sātvik food. ₹2,55,000 incl. GST & flights. Batch 1: Sep 26 | Batch 2: Oct 2. Only 12 seats per batch.",
  keywords: ["Kedarnath Badrinath Helicopter Yatra 2026","Do Dham Yatra by Helicopter","Kedarnath VIP Darshan","Badrinath Yatra ISKCON","Yatramritam","Dodham Helicopter Tour","HKM Chennai pilgrimage","ISKCON Thiruvanmiyur yatra"],
  alternates: { canonical: `${SITE}${PAGE}` },
  openGraph: {
    title: "Kedarnath & Badrinath Yatra by Helicopter 2026 | Yatramritam",
    description: "3N/4D Heli-Tour — VIP darśan at Kedarnath & Badrinath, Rishikesh Ganga Aarti. ₹2,55,000 incl. GST & flights. 12 seats only.",
    url: `${SITE}${PAGE}`,
    siteName: "Hare Krishna Movement Chennai",
    images: [{ url: `${SITE}${IMG}/kedarnath-temple.jpg`, width: 1400, height: 1087, alt: "Kedarnath Temple" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kedarnath & Badrinath Yatra by Helicopter 2026 | Yatramritam",
    description: "3N/4D Heli-Tour with ISKCON Thiruvanmiyur. VIP darśan both Dhams. ₹2,55,000 incl. GST. 12 seats per batch.",
    images: [`${SITE}${IMG}/kedarnath-temple.jpg`],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────
function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        name: "Kedarnath & Badrinath Do Dham Yatra by Helicopter",
        description: "A 3-night 4-day helicopter pilgrimage to Kedarnath Jyotirliṅga and Badrinath Dhām via Dehradun and Rishikesh, guided by Srila Prabhupada's ISKCON Thiruvanmiyur under the Yatramritam initiative.",
        touristType: "Pilgrims",
        provider: {
          "@type": "Organization",
          name: "Hare Krishna Movement Chennai (Dakshina Dwaraka Dham)",
          url: SITE,
          telephone: "+91-99402-42656",
        },
        offers: [
          { "@type": "Offer", name: "Batch 1 — 26 Sep 2026", price: "255000", priceCurrency: "INR", availability: "https://schema.org/LimitedAvailability", validFrom: "2026-01-01" },
          { "@type": "Offer", name: "Batch 2 — 2 Oct 2026", price: "255000", priceCurrency: "INR", availability: "https://schema.org/LimitedAvailability", validFrom: "2026-01-01" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Is there trekking in this helicopter yatra?", acceptedAnswer: { "@type": "Answer", text: "No trekking required. The helicopter lands close to both temples. Kedarnath shuttle is a 7-minute flight. Badrinath temple is reached by car from the hotel." } },
          { "@type": "Question", name: "What is the cost of the Do Dham Helicopter Yatra?", acceptedAnswer: { "@type": "Answer", text: "₹2,55,000 per person, inclusive of GST and all helicopter flights." } },
          { "@type": "Question", name: "How many seats are available per batch?", acceptedAnswer: { "@type": "Answer", text: "Only 12 seats per batch. First come, first served." } },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Yatramritam", item: `${SITE}/yatramritam` },
          { "@type": "ListItem", position: 3, name: "Kedarnath & Badrinath Yatra", item: `${SITE}${PAGE}` },
        ],
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}/>;
}

// ── PAGE ──────────────────────────────────────────────────────────────────
export default function KedarnathBadrinathPage() {
  return (
    <div className={`${cormorant.variable} ${cinzel.variable} ${inter.variable} ${poppins.variable} bg-cream-100 font-sans text-navy-600 antialiased`}>
      <JsonLd/>

      {/* ANNOUNCEMENT */}
      <div className="bg-maroon-600 px-4 py-2 text-center text-xs font-medium tracking-wide text-cream-100 sm:text-sm">
        🚁 Only 12 Seats Per Batch — First Come, First Served &nbsp;|&nbsp; Sep 26 & Oct 2, 2026
      </div>


      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={`${IMG}/kedarnath-temple.jpg`} alt="Kedarnath Temple with snow-clad Himalayas" fill priority sizes="100vw" className="object-cover object-center"/>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/65 to-navy-900/20"/>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/75 via-transparent to-transparent"/>
        </div>

        <div className="relative mx-auto flex min-h-[580px] max-w-7xl flex-col justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8">
          <div className="mb-5">
            <img src="/assets/yatramritam_logo.png" alt="Yatramritam" className="h-28 sm:h-32 lg:h-40 object-contain drop-shadow-xl" />
          </div>
          <h1 className="max-w-3xl font-display leading-[0.92]">
            <span className="text-4xl text-white sm:text-6xl lg:text-7xl block">Kedarnath &</span>
            <span className="text-4xl text-gold-400 italic sm:text-6xl lg:text-7xl block">Badrinath Yatra</span>
          </h1>
          <div className="mt-6 flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
              🚁 Travel by Helicopter at Both Dhams
            </span>
          </div>
          <p className="mt-5 max-w-2xl text-base font-light text-cream-100/85 sm:text-lg leading-relaxed">
            A once-in-a-lifetime 3 Nights / 4 Days helicopter pilgrimage to the two holiest Dhams in the Himalayas — guided by devotees of Srila Prabhupada's ISKCON Thiruvanmiyur.
          </p>

          {/* Quick info cards */}
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center gap-3 rounded-xl border border-gold-400/30 bg-black/30 px-5 py-3 backdrop-blur-md shadow-lg shadow-black/20">
              <svg className="h-5 w-5 text-gold-400 shrink-0 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gold-400">Duration</p>
                <p className="text-base font-bold text-white drop-shadow-sm">3 Nights / 4 Days</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-gold-400/30 bg-black/30 px-5 py-3 backdrop-blur-md shadow-lg shadow-black/20">
              <svg className="h-5 w-5 text-gold-400 shrink-0 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gold-400">Investment</p>
                <p className="text-base font-bold text-white drop-shadow-sm">{YATRA_META.price} <span className="text-white/80 font-medium text-xs">Incl. GST</span></p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-gold-400/30 bg-black/30 px-5 py-3 backdrop-blur-md shadow-lg shadow-black/20">
              <svg className="h-5 w-5 text-gold-400 shrink-0 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gold-400">Seats</p>
                <p className="text-base font-bold text-white drop-shadow-sm">Only 12 / Batch</p>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-4">
            <a href="#register" className="rounded-full bg-terracotta-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-terracotta-900/30 transition hover:bg-terracotta-700 sm:text-base">
              Reserve Your Seat →
            </a>
            <a href="#itinerary" className="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base">
              View Itinerary
            </a>
          </div>
        </div>

        {/* Route strip */}
        <div className="relative border-t border-white/10 bg-navy-900/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-2 gap-y-2 px-4 py-3.5 text-cream-100/80 text-xs sm:text-sm font-medium sm:px-6 lg:px-8">
            {["✈️ Dehradun","🛕 Rishikesh","⛰️ Kedarnath","🌺 Badrinath","✈️ Dehradun"].map((s,i,a) => (
              <span key={s} className="flex items-center gap-2">
                {s}
                {i < a.length-1 && <span className="text-gold-600">→</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-gold-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 text-center sm:grid-cols-4 sm:px-6 lg:px-8">
          {[["3N/4D","Helicopter Tour"],["2","Sacred Dhams"],["12","Seats Per Batch"],["100%","Sātvik Food"]]
            .map(([stat,label]) => (
              <div key={label}>
                <p className="font-stat text-2xl font-bold text-maroon-600 sm:text-3xl">{stat}</p>
                <p className="mt-1 text-xs text-navy-400 sm:text-sm">{label}</p>
              </div>
            ))}
        </div>
      </section>

      {/* BATCH SELECTION — KEY SECTION */}
      <section id="batches" className="py-16 sm:py-20 bg-cream-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-accent text-terracotta-600 tracking-[0.25em] text-xs mb-3">CHOOSE YOUR DATES</p>
            <h2 className="font-display text-4xl text-navy-600 sm:text-5xl">Available Batches</h2>
            <p className="mt-3 text-navy-400 text-sm">Only 12 seats per batch — book early to secure your place.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {BATCHES.map((b) => (
              <div key={b.batch} className="rounded-2xl border-2 border-gold-400 bg-white shadow-lg overflow-hidden">
                <div className="bg-maroon-600 px-6 py-4 flex items-center justify-between">
                  <div>
                    <p className="font-accent text-xs tracking-widest text-cream-100/70">BATCH {b.batch}</p>
                    <p className="font-display text-2xl text-white mt-0.5">{b.arrival.split(",")[1]?.trim()} Onwards</p>
                  </div>
                  <span className="rounded-full bg-gold-600 px-3 py-1 text-xs font-bold text-navy-900">{b.seats} SEATS</span>
                </div>
                <div className="p-6">
                  <div className="space-y-3 text-sm">
                    {[
                      ["Day 1 — Arrival", b.arrival, "✈️"],
                      ["Day 2 — Kedarnath 🚁", b.kedarnath, "⛰️"],
                      ["Day 3 — Badrinath 🚁", b.badrinath, "🛕"],
                      ["Day 4 — Return", b.departure, "🏡"],
                    ].map(([label, date, icon]) => (
                      <div key={label} className="flex justify-between items-center py-2 border-b border-cream-200 last:border-0">
                        <span className="text-navy-400">{label}</span>
                        <span className="font-semibold text-navy-600">{date}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5">
                    <Countdown targetISO={b.departureISO} label={`BATCH ${b.batch} DEPARTS IN`}/>
                  </div>
                  <a href="#register" className="mt-5 block text-center rounded-full bg-terracotta-600 py-3 text-sm font-semibold text-white transition hover:bg-terracotta-700">
                    Book Batch {b.batch} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="om-watermark py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-accent text-terracotta-600 tracking-[0.25em] text-xs mb-4">THE DIVINE JOURNEY</p>
            <h2 className="font-display text-4xl leading-tight text-navy-600 sm:text-5xl">
              The Two Most Sacred Dhams — by Helicopter
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-400">
              <p>
                Kedarnath — one of the twelve Jyotirliṅgas, set at 11,500 feet amid the Garhwal Himalayas — is among the holiest abodes of Lord Śiva. Badrinath — the supreme Vaiṣṇava Dhām of Lord Nārāyaṇa — is one of the four sacred Char Dhams of India.
              </p>
              <blockquote className="border-l-4 border-gold-600 py-1 pl-5 font-display text-xl italic text-maroon-600">
                &ldquo;Jo Badri Vishal ki jai bolega, Badrinath uski sun lega.&rdquo;
              </blockquote>
              <p>
                Under the <span className="font-semibold text-navy-600">Yatramritam</span> initiative of {YATRA_META.templeName}, this heli-tour carries devotees to both sacred peaks in just 4 days — with VIP darśan, sātvik prasādam, bhajans, and the personal accompaniment of an ISKCON devotee guide throughout.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 overflow-hidden rounded-2xl shadow-xl col-span-2">
              <Image src={`${IMG}/badrinath-temple.jpg`} alt="Badrinath Temple" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
              <p className="absolute bottom-3 left-4 text-white font-display text-xl">Śrī Badrinath Nārāyaṇa</p>
            </div>
            <div className="relative h-48 overflow-hidden rounded-2xl shadow-xl">
              <Image src={`${IMG}/haridwar-har-ki-pauri.jpg`} alt="Haridwar Har Ki Pauri" fill sizes="25vw" className="object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
              <p className="absolute bottom-2 left-3 text-white text-xs font-medium">Haridwar</p>
            </div>
            <div className="relative h-48 overflow-hidden rounded-2xl shadow-xl">
              <Image src={`${IMG}/rishikesh-aarti.jpg`} alt="Rishikesh Ganga Aarti" fill sizes="25vw" className="object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
              <p className="absolute bottom-2 left-3 text-white text-xs font-medium">Rishikesh Āratī</p>
            </div>
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section id="itinerary" className="relative bg-navy-900 py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle,#C9A24A 1px,transparent 1px)",backgroundSize:"22px 22px"}}/>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-4 font-accent text-xs tracking-[0.25em] text-gold-400">4 DAYS OF DIVINE DARŚAN</p>
            <h2 className="font-display text-4xl text-white sm:text-5xl">Day-by-Day Itinerary</h2>
            <p className="mx-auto mt-4 max-w-xl text-cream-100/70 text-sm">
              Dehradun → Rishikesh → Kedarnath → Badrinath → Dehradun
            </p>
          </div>

          <div className="space-y-8">
            {ITINERARY.map((d, i) => (
              <div key={d.day} className={`flex flex-col gap-6 lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Image */}
                <div className="relative h-64 overflow-hidden rounded-2xl lg:h-auto lg:w-5/12 shrink-0">
                  <Image src={`${IMG}/${d.img}`} alt={d.title} fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"/>
                  <div className="absolute bottom-4 left-4">
                    <span className="font-accent text-[10px] tracking-[0.2em] text-gold-400">{d.date}</span>
                    <p className="font-display text-2xl text-white">{d.title}</p>
                    <p className="text-xs text-cream-100/60">{d.location}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-6 lg:w-7/12">
                  {/* Timings table */}
                  {d.timings && (
                    <div className="mb-5 rounded-xl overflow-hidden border border-white/10">
                      <table className="w-full text-sm">
                        <thead><tr className="bg-gold-600/20"><th className="text-left px-4 py-2 text-gold-400 font-accent text-xs tracking-wide">Time</th><th className="text-left px-4 py-2 text-gold-400 font-accent text-xs tracking-wide">Schedule</th></tr></thead>
                        <tbody>
                          {d.timings.map(t => (
                            <tr key={t.time} className="border-t border-white/10">
                              <td className="px-4 py-2 font-stat font-semibold text-gold-400 whitespace-nowrap">{t.time}</td>
                              <td className="px-4 py-2 text-cream-100/80">{t.detail}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  <ul className="space-y-2">
                    {d.points.map(p => (
                      <li key={p} className="flex gap-2.5 text-sm text-cream-100/80 leading-relaxed">
                        <span className="text-gold-600 shrink-0 mt-0.5">◆</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center gap-3 rounded-xl bg-gold-400/10 border border-gold-400/30 px-5 py-3 shadow-lg shadow-black/20">
                    <svg className="h-5 w-5 text-gold-400 shrink-0 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 9a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V9zM13 9a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1V9z"/></svg>
                    <p className="text-sm font-bold text-gold-100 tracking-wide drop-shadow-sm">{d.stay}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-4 font-accent text-xs tracking-[0.25em] text-terracotta-600">CURATED EXPERIENCES</p>
            <h2 className="font-display text-4xl text-navy-600 sm:text-5xl">Highlights of the Yatra</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map(h => (
              <div key={h.title} className="rounded-xl border border-gold-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <p className="mb-3 text-3xl">{h.icon}</p>
                <h4 className="mb-2 font-display text-lg font-semibold text-navy-600">{h.title}</h4>
                <p className="text-sm leading-relaxed text-navy-400">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEMPLE PHOTOS FULL WIDTH */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-4 font-accent text-xs tracking-[0.25em] text-terracotta-600">THE SACRED DHAMS</p>
            <h2 className="font-display text-4xl text-navy-600 sm:text-5xl">Kedarnath & Badrinath</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="group relative h-80 overflow-hidden rounded-2xl shadow-xl">
              <Image src={`${IMG}/kedarnath-temple.jpg`} alt="Kedarnath Temple — Jyotirliṅga Dhām" fill sizes="(max-width:640px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"/>
              <div className="absolute bottom-5 left-5">
                <p className="font-display text-3xl text-white">Kedarnath</p>
                <p className="text-sm text-cream-100/80">Jyotirliṅga · 3,583 m altitude</p>
              </div>
            </div>
            <div className="group relative h-80 overflow-hidden rounded-2xl shadow-xl">
              <Image src={`${IMG}/badrinath-temple.jpg`} alt="Badrinath Temple — Char Dham" fill sizes="(max-width:640px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"/>
              <div className="absolute bottom-5 left-5">
                <p className="font-display text-3xl text-white">Badrinath</p>
                <p className="text-sm text-cream-100/80">Nārāyaṇa Dhām · 3,300 m altitude</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUSIONS / EXCLUSIONS */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-4 font-accent text-xs tracking-[0.25em] text-terracotta-600">PACKAGE DETAILS</p>
            <h2 className="font-display text-4xl text-navy-600 sm:text-5xl">What&apos;s Included</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-teal-600/20 bg-white p-7 shadow-sm sm:p-9">
              <h3 className="mb-5 flex items-center gap-2 font-display text-2xl text-teal-800">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-600 text-sm text-white">✓</span>Inclusions
              </h3>
              <ul className="space-y-3 text-sm text-navy-400">
                {INCLUSIONS.map(i => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-0.5 shrink-0 text-teal-600">✓</span><span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-maroon-600/15 bg-white p-7 shadow-sm sm:p-9">
              <h3 className="mb-5 flex items-center gap-2 font-display text-2xl text-maroon-600">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-maroon-600 text-sm text-white">✕</span>Exclusions
              </h3>
              <ul className="space-y-3 text-sm text-navy-400">
                {EXCLUSIONS.map(i => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-0.5 shrink-0 text-maroon-600">✕</span><span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* KEY INFORMATION */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-4 font-accent text-xs tracking-[0.25em] text-terracotta-600">IMPORTANT DETAILS</p>
            <h2 className="font-display text-4xl text-navy-600 sm:text-5xl">Key Information</h2>
            <p className="mt-3 text-navy-400 text-sm max-w-xl mx-auto">Please read carefully before registering — helicopter tours have specific requirements.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {KEY_INFO.map(k => (
              <div key={k.label} className="rounded-xl bg-navy-50 p-5 border border-navy-100">
                <p className="font-accent text-[10px] tracking-widest text-terracotta-600 mb-2">{k.label.toUpperCase()}</p>
                <p className="font-semibold text-navy-600 text-sm">{k.value}</p>
              </div>
            ))}
          </div>

          {/* Health & Safety Alert */}
          <div className="mt-8 rounded-2xl border border-gold-400 bg-gold-50 p-6">
            <h4 className="font-display text-xl text-navy-600 mb-3 flex items-center gap-2">
              <span className="text-2xl">⚠️</span> Health & Altitude Advisory
            </h4>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-navy-400">
              <div>
                <p className="font-semibold text-navy-600 mb-1">Altitude Ranges</p>
                <p>Kedarnath: 3,583 m (11,755 ft) · Badrinath: 3,300 m (10,827 ft). Both involve reduced oxygen levels.</p>
              </div>
              <div>
                <p className="font-semibold text-navy-600 mb-1">Medical Advice</p>
                <p>Consult a doctor before travel, especially if you have heart, lung or blood pressure conditions. Carry Diamox (Acetazolamide) as advised.</p>
              </div>
              <div>
                <p className="font-semibold text-navy-600 mb-1">What to Pack</p>
                <p>Warm layered clothing (0–5°C at night), trekking shoes, thermal innerwear, sunscreen, personal medicines. Max baggage: 5 kg.</p>
              </div>
              <div>
                <p className="font-semibold text-navy-600 mb-1">Connectivity</p>
                <p>BSNL & JIO work at Badrinath. Sersi has all networks. Keep emergency contact numbers accessible offline.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative overflow-hidden bg-navy-900 py-20 sm:py-28">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle,#C9A24A 1px,transparent 1px)",backgroundSize:"22px 22px"}}/>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 font-accent text-xs tracking-[0.25em] text-gold-400">YOUR INVESTMENT</p>
          <h2 className="mb-8 font-display text-4xl text-white sm:text-5xl">Reserve Your Place</h2>

          <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-8 backdrop-blur sm:p-12">
            <p className="font-stat text-5xl font-bold text-gold-400 sm:text-6xl">
              {YATRA_META.price}<span className="text-xl font-medium text-cream-100/70 sm:text-2xl">/-</span>
            </p>
            <p className="mt-2 text-sm text-cream-100/70">{YATRA_META.priceNote} · Per Person · Twin Sharing</p>

            <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
              <div className="rounded-xl bg-white/5 p-4">
                <p className="mb-1 text-xs font-semibold text-gold-400">BATCH 1</p>
                <p className="text-white text-sm font-medium">{BATCHES[0].arrival}</p>
                <p className="text-cream-100/50 text-xs mt-0.5">{BATCHES[0].seats} seats · Fly 27 Sep</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="mb-1 text-xs font-semibold text-gold-400">BATCH 2</p>
                <p className="text-white text-sm font-medium">{BATCHES[1].arrival}</p>
                <p className="text-cream-100/50 text-xs mt-0.5">{BATCHES[1].seats} seats · Fly 3 Oct</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4 sm:col-span-2">
                <p className="mb-1 text-xs font-semibold text-gold-400">PAYMENT TERMS</p>
                <p className="text-cream-100/80 text-sm">50% deposit at booking · Balance 14 days before arrival · Bank transfer / UPI / Cash accepted</p>
              </div>
            </div>

            <a href="#register" className="mt-9 inline-block rounded-full bg-terracotta-600 px-10 py-4 text-base font-semibold text-white shadow-xl transition hover:bg-terracotta-700">
              Book My Seat →
            </a>
            <p className="mt-4 text-xs text-cream-100/50">
              Or call us at <a href={`tel:${YATRA_META.phoneHref}`} className="underline">{YATRA_META.phone}</a>
            </p>
          </div>

          {/* Cancellation */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-left">
            <h4 className="font-display text-lg text-gold-400 mb-4">Cancellation Policy</h4>
            <div className="space-y-2">
              {CANCELLATION.map(c => (
                <div key={c.condition} className="flex justify-between text-sm">
                  <span className="text-cream-100/70">{c.condition}</span>
                  <span className="font-semibold text-white">{c.charge}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-cream-100/50">Force majeure / bad weather refunds as per detailed policy. Rescheduling: 10% of tour cost, minimum 7 days notice.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-4 font-accent text-xs tracking-[0.25em] text-terracotta-600">QUESTIONS</p>
            <h2 className="font-display text-4xl text-navy-600 sm:text-5xl">Frequently Asked Questions</h2>
          </div>
          <FaqAccordion/>
        </div>
      </section>

      {/* REGISTER */}
      <section id="register" className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-5xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 font-accent text-xs tracking-[0.25em] text-terracotta-600">JOIN THE YATRA</p>
            <h2 className="font-display text-4xl leading-tight text-navy-600 sm:text-5xl">Begin Your Do Dham Journey</h2>
            <p className="mt-5 leading-relaxed text-navy-400">
              Only 12 seats per batch — register now to secure your place on this sacred helicopter yatra to Kedarnath & Badrinath.
            </p>
            <div className="mt-8 space-y-4">
              <a href={`tel:${YATRA_META.phoneHref}`} className="flex items-center gap-4 rounded-xl bg-cream-200 p-4 transition hover:bg-gold-50">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-maroon-600 text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                </span>
                <div>
                  <p className="text-xs text-navy-300">Call to Register</p>
                  <p className="font-semibold text-navy-600">{YATRA_META.phone}</p>
                </div>
              </a>
              <Link href="/" className="flex items-center gap-4 rounded-xl bg-cream-200 p-4 transition hover:bg-gold-50">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-600 text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18"/></svg>
                </span>
                <div>
                  <p className="text-xs text-navy-300">Visit Our Website</p>
                  <p className="font-semibold text-navy-600">www.hkmchennai.org</p>
                </div>
              </Link>
              <div className="flex items-center gap-4 rounded-xl bg-cream-200 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </span>
                <div>
                  <p className="text-xs text-navy-300">Temple Address</p>
                  <p className="text-sm font-semibold text-navy-600">{YATRA_META.templeAddress}</p>
                </div>
              </div>
            </div>
          </div>
          <RegisterForm/>
        </div>
      </section>

      {/* FOOTER */}
      <FooterSection />

      <StickyMobileCta/>
    </div>
  );
}
