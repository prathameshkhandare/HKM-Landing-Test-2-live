"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import { Phone, Mail, Sparkles, MapPin, CheckCircle2, ArrowRight, X } from "lucide-react";

// ─── ITINERARY DATA ───────────────────────────────────────────────────────────
const itinerary = [
  {
    day: 1,
    title: "Kathmandu Arrival",
    location: "Night stay: Kathmandu",
    places: ["Tribhuvan International Airport arrival", "Transfer to hotel", "Welcome briefing and kīrtan"],
    detail: "Arrive at Tribhuvan International Airport, Kathmandu — warmly received by the Yatramritam team. Transfer to a 5-Star Hotel (Gokarna Resort or similar). Evening welcome briefing, kīrtan and orientation for the yatra ahead.",
    icon: "✈️",
  },
  {
    day: 2,
    title: "Kathmandu Temple Visits",
    location: "Night stay: Kathmandu",
    places: ["Maha Rudra Abhishekam at Pashupatinath", "Guhyeshwari Śakti Pīṭha", "Budhanilkantha (Jala Nārāyaṇa)", "ISKCON Kathmandu"],
    detail: "Sacred Maha Rudra Abhishekam Puja at Pashupatinath Jyotirliṅga on the banks of the holy Bagmati River. Darśan at Guhyeshwari Śakti Pīṭha, Budhanilkantha, and Sri Radha Krishna Temple, ISKCON Kathmandu.",
    icon: "🛕",
  },
  {
    day: 3,
    title: "Kathmandu to Gyirong",
    location: "Night stay: Gyirong",
    places: ["Depart Kathmandu by coach", "Cross Nepal-China border", "Complete immigration formalities"],
    detail: "Depart Kathmandu by coach after breakfast, enjoying scenic Himalayan landscapes en route. Complete immigration and customs formalities on both the Nepal and Tibet sides. Arrive in Gyirong.",
    icon: "🚌",
  },
  {
    day: 4,
    title: "Acclimatization at Gyirong",
    location: "Night stay: Gyirong",
    places: ["Rest day", "Gentle walks", "Personal sādhana"],
    detail: "A full day reserved for rest and acclimatization to the rising altitude (3,700 m). Gentle walks through Gyirong's scenic surroundings; time for personal sādhana and reflection.",
    icon: "🧘",
  },
  {
    day: 5,
    title: "Gyirong to New Dongba",
    location: "Night stay: New Dongba",
    places: ["Scenic drive to New Dongba", "Brahmaputra River darśan"],
    detail: "Scenic drive towards New Dongba through breathtaking mountain landscapes. En route darśan at the Brahmaputra River — originating near Mount Kailash as the Yarlung Tsangpo.",
    icon: "🏞️",
  },
  {
    day: 6,
    title: "New Dongba to Mansarovar Lake",
    location: "Night stay: Mansarovar / Darchen",
    places: ["Lake Mānasarovar Parikrama", "First darśan of Mount Kailash", "Group Havan & Rudrābhiṣekam"],
    detail: "Early morning departure towards the sacred Lake Mānasarovar. Complete holy Parikrama of Lake Mānasarovar. First breathtaking darśan of Mount Kailash's South Face. Spiritual activities include group Havan and Rudrābhiṣekam.",
    icon: "🌊",
  },
  {
    day: 7,
    title: "Lake Mansarovar to Darchen",
    location: "Night stay: Darchen",
    places: ["Mānasarovar sacred bath", "Drive to Darchen", "Rest & Acclimatization"],
    detail: "Early morning sacred bath at Lake Mānasarovar (subject to permission and weather). Drive to Darchen, the base camp for the Kailash Parikrama. Clear darśan of the South Face of Mount Kailash.",
    icon: "🏔️",
  },
  {
    day: 8,
    title: "Parikrama Day 1: Darchen – Yam Dwāra – Dirapuk",
    location: "Night stay: Dirapuk",
    places: ["Drive to Yam Dwāra", "Start 10km trek", "Darśan of South, West, North Faces"],
    detail: "Drive from Darchen to Yam Dwāra; begin the first day of the Mount Kailash Parikrama (≈10 km trek). Yam Dwāra marks the gateway of liberation. Overnight at the guest house at Dirapuk.",
    icon: "🚩",
  },
  {
    day: 9,
    title: "Parikrama Day 2: Dirapuk – Dolma La Pass – Zutulpuk",
    location: "Night stay: Zutulpuk",
    places: ["Trek to Dolma La Pass (5,590 m)", "Śiva Sthal darśan", "Descend to Zutulpuk"],
    detail: "Start trek before sunrise. This is the most demanding stretch (≈22 km). Reach Dolma La Pass — the highest and most sacred point of the yatra at 5,590 m. Continue descent to Zutulpuk.",
    icon: "⛰️",
  },
  {
    day: 10,
    title: "Parikrama Day 3: Zutulpuk – Dongba",
    location: "Night stay: New Dongba",
    places: ["Final 8km trek", "Drive back to Dongba via Darchen"],
    detail: "Early morning, complete the final stretch of the Kailash Parikrama (≈8 km). Drive from Zutulpuk to Darchen, then continue the road journey to Dongba with profound gratitude.",
    icon: "🚌",
  },
  {
    day: 11,
    title: "Dongba to Gyirong",
    location: "Night stay: Gyirong",
    places: ["Drive through Himalayan terrain", "Scenic breaks", "Leisure evening"],
    detail: "Drive to Gyirong through scenic Himalayan terrain — lush valleys, flowing rivers, and traditional Tibetan villages. Short breaks along the way for photography and gentle acclimatization.",
    icon: "🏞️",
  },
  {
    day: 12,
    title: "Drive to Kathmandu",
    location: "Night stay: Kathmandu",
    places: ["Cross border to Nepal", "Drive to Kathmandu", "Closing kīrtan"],
    detail: "Complete exit immigration and cross back into Nepal. Scenic drive to Kathmandu; check in to the 5-Star hotel. Closing kīrtan and sharing of yatra experiences with fellow devotees.",
    icon: "🛕",
  },
  {
    day: 13,
    title: "Departure from Kathmandu",
    location: "Departure",
    places: ["Breakfast at hotel", "Airport transfer", "Yatra concludes"],
    detail: "Breakfast at hotel; free time for last-minute shopping if desired. Transfer to Tribhuvan International Airport for departure flights. Yatra concludes — Hare Kṛṣṇa!",
    icon: "✈️",
  },
];

const highlights = [
  { icon: "⛰️", label: "Complete Kailash Parikrama" },
  { icon: "🌊", label: "Mānasarovar Holy Dip" },
  { icon: "🛕", label: "Rudra Abhishekam, Pashupatinath" },
  { icon: "🪔", label: "Guhyeshwari Śakti Pīṭha" },
  { icon: "🚩", label: "Yama Dwāra Darśan" },
  { icon: "🏔️", label: "Dolma La Pass (5,590m)" },
  { icon: "🙏", label: "Havan & Rudrābhiṣekam" },
];

const destinations = [
  { name: "Mount Kailash", sub: "The Sacred Aṣṭāpada" },
  { name: "Lake Mānasarovar", sub: "The Holy Lake" },
  { name: "Pashupatinath", sub: "Jyotirliṅga, Kathmandu" },
  { name: "Yam Dwāra", sub: "Gateway of Liberation" },
  { name: "Dolma La Pass", sub: "Highest Point (5,590m)" },
  { name: "Guhyeshwari", sub: "Śakti Pīṭha, Nepal" },
];

const inclusions = [
  "Visa & Kailash Yatra Permit (Tibet & China)",
  "Sātvik vegetarian meals — breakfast, lunch & dinner",
  "12 nights' accommodation, twin sharing",
  "AC coach transportation by road as per itinerary",
  "1 Nepali tour guide / manager + 1 Tibetan / Chinese guide",
  "ISKCON Hare Krishna senior devotee leading the yatra",
  "Special pujas, sankalpa archana & Rudrābhiṣekam",
  "Welcome kit, Vedic games & take-home gift",
];

const exclusions = [
  "Airfare / train fare from home city to Kathmandu",
  "GST and TDS (TDS may be claimed back in your ITR)",
  "Personal expenses, donations or tips",
  "Pony or porter charges during Parikrama (≈500 Yuan)",
  "Travel & medical insurance",
  "Extra night stay at Darchen for those not doing Parikrama",
];

const faqs = [
  {
    q: "Who can join this yatra?",
    a: "Pilgrims between 10 and 70 years of age, in reasonable physical fitness, may register. A medical fitness certificate is mandatory given the high-altitude nature of the journey.",
  },
  {
    q: "Is this yatra physically demanding?",
    a: "Yes — the Kailash Parikrama involves trekking at altitudes of 4,500–5,645 m over three days. We strongly recommend physical preparation (brisk walking, light yoga, breathing exercises) at least two months in advance.",
  },
  {
    q: "What documents do I need?",
    a: "A valid passport with a minimum of 3 blank pages and at least 7 months' validity from the yatra date, or a Voter ID. Children require a birth certificate. Visa and Kailash Yatra Permit are arranged for you.",
  },
  {
    q: "Is the food sātvik and vegetarian?",
    a: "Yes, completely. All meals throughout the 13-day journey are sātvik vegetarian, prepared with care for pilgrims.",
  },
  {
    q: "What about safety at high altitude?",
    a: "Daily health monitoring is conducted, emergency oxygen support is available, and our guides are trained to make safety-first decisions.",
  },
];

const galleryImages = [
  { src: "/assets/kailash-yatra/kailash-manasarovar-hero.jpg", alt: "Mount Kailash & Mānasarovar" },
  { src: "/assets/kailash-yatra/yamdwar-stupa-wide.jpg", alt: "Yama Dwāra" },
  { src: "/assets/kailash-yatra/pashupatinath-temple.jpg", alt: "Pashupatinath" },
  { src: "/assets/kailash-yatra/guhyeshwari-temple-close.jpg", alt: "Guhyeshwari Śakti Pīṭha" },
  { src: "/assets/kailash-yatra/sri-krishna-temple-patan.jpg", alt: "Sri Krishna Temple, Patan" },
  { src: "/assets/kailash-yatra/gyirong-misty-valley.jpg", alt: "Gyirong Valley, Tibetan Plateau" },
  { src: "/assets/kailash-yatra/mansarovar-puja-hall.jpg", alt: "Mansarovar Puja Hall" },
  { src: "/assets/kailash-yatra/kailash-south-face.jpg", alt: "Mount Kailash South Face" },
  { src: "/assets/kailash-yatra/new-dongba-lake.jpg", alt: "New Dongba Lake" },
];

// ─── COUNTDOWN HOOK ───────────────────────────────────────────────────────────
function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({});
  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate) - new Date();
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

export default function KailashYatraPage() {
  const [openDay, setOpenDay] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const countdown = useCountdown("2026-08-23T00:00:00");
  const formRef = useRef(null);

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Navbar />

      <div className="bg-slate-50 text-slate-900 font-sans overflow-x-hidden">

        {/* ══════════════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-32 pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.15)_0%,_transparent_80%)]" />

          {/* Decorative top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

          {/* Org branding top */}
          <div className="relative z-10 flex flex-col items-center px-4 mb-10 text-center">
            <p className="text-orange-600 text-xs tracking-[0.3em] uppercase font-bold drop-shadow-sm">
              Srila Prabhupada's ISKCON Thiruvanmiyur · Dakṣiṇa Dvārakā Dhām, Chennai
            </p>
            <p className="text-slate-900/60 text-xs mt-1 tracking-widest font-semibold">
              Hare Krishna Movement Chennai · Affiliated ISKCON Bangalore
            </p>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
             <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                 {/* Text Content */}
                 <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="relative z-10 mb-8 inline-block">
                      <img src="/assets/yatramritam_logo.png" alt="Yatramritam Logo" className="h-40 md:h-56 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]" />
                    </div>

                    <p className="text-orange-600 text-lg md:text-xl tracking-widest uppercase font-semibold mb-2">
                      A Sacred Journey to the Divine Abode
                    </p>
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-md text-slate-900">
                      <span className="block">Kailash Manasa</span>
                      <span className="block bg-gradient-to-r from-orange-800 via-[#ea580c] to-amber-400 bg-clip-text text-transparent drop-shadow-sm">
                        Sarovar
                      </span>
                      <span className="block">Yatra</span>
                    </h1>
                    <p className="mt-6 text-slate-900/80 text-base md:text-lg max-w-xl leading-relaxed font-medium">
                      A 13-day sacred journey to the divine abode of Lord Śiva — with devotees, guided by Vaiṣṇava philosophy and Śaiva reverence in the Himalayan wilderness.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                      <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md border border-amber-400/40 rounded-2xl px-6 py-4 md:px-8 md:py-5 shadow-sm hover:shadow-md transition-all">
                        <span className="text-3xl text-orange-600">📅</span>
                        <div className="text-left">
                          <p className="font-sans text-slate-900 font-bold text-lg md:text-xl">23 Aug – 04 Sep 2026</p>
                          <p className="text-slate-900/60 text-sm font-medium">13 Days · 12 Nights</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md border border-amber-400/40 rounded-2xl px-6 py-4 md:px-8 md:py-5 shadow-sm hover:shadow-md transition-all">
                        <span className="text-3xl text-orange-600">💰</span>
                        <div className="text-left">
                          <p className="font-sans text-slate-900 font-bold text-lg md:text-xl">₹3,29,000</p>
                          <p className="text-slate-900/60 text-sm font-medium">+ 5% GST + 5% TDS</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5 mt-12">
                      <button
                        onClick={scrollToForm}
                        className="bg-gradient-to-r from-orange-600 to-orange-800 text-white font-bold text-base md:text-lg px-10 py-5 rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(234,88,12,0.4)] tracking-wider flex items-center justify-center gap-2 uppercase"
                      >
                        Reserve Your Seat <ArrowRight size={20} />
                      </button>
                      <a
                        href="https://wa.me/919440242656"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border border-orange-600/30 text-orange-600 font-bold text-base md:text-lg px-10 py-5 rounded-xl hover:bg-slate-50 transition-all duration-300 text-center shadow-sm flex items-center justify-center gap-2 uppercase tracking-wider"
                      >
                        <Phone size={20} /> WhatsApp
                      </a>
                    </div>
                 </div>

                 {/* Image Content */}
                 <div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-8 lg:mt-0">
                    <div className="relative aspect-[4/3] lg:aspect-square xl:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                       <img src="/assets/kailash-yatra/kailash-manasarovar-hero.jpg" alt="Kailash Yatra" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
                    </div>
                    
                    {/* Floating Countdown Box overlapping image slightly */}
                    <div className="absolute -bottom-6 -left-2 sm:-left-6 lg:-left-8 bg-white p-6 lg:p-8 rounded-2xl shadow-xl border border-amber-400/30 z-20">
                      <p className="text-orange-600 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 text-center">Yatra begins in</p>
                      <div className="flex gap-4 justify-center">
                        {["days", "hours", "minutes", "seconds"].map((unit) => (
                          <div key={unit} className="text-center w-12 md:w-16">
                            <span className="font-sans text-3xl md:text-4xl font-extrabold text-orange-800">
                              {String(countdown[unit] ?? 0).padStart(2, "0")}
                            </span>
                            <p className="text-slate-900/60 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-1">{unit.slice(0,1)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                 </div>
             </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            TRUST BAR
        ══════════════════════════════════════════════ */}
        <section className="border-y border-amber-400/20 bg-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
              {[
                { val: "13", label: "Days, Land Route" },
                { val: "10+", label: "Sacred Destinations" },
                { val: "100%", label: "Sātvik Food" },
                { val: "1:1", label: "Devotee Guide" },
              ].map(({ val, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <span className="font-sans text-orange-600 text-4xl md:text-5xl font-extrabold">{val}</span>
                  <span className="text-slate-900/60 text-xs md:text-sm font-bold uppercase tracking-widest mt-2">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SACRED STORY SECTION
        ══════════════════════════════════════════════ */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-5 mix-blend-multiply pointer-events-none bg-[length:400px]"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="text-orange-600 text-xs font-bold tracking-[0.4em] uppercase mb-4 flex items-center justify-center gap-2">
              <Sparkles size={14} /> The Sacred Abode <Sparkles size={14} />
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-snug">
              Why Kailash & Mānasarovar Call to Every Seeker
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8 rounded-full" />
            <p className="text-slate-900/80 text-base md:text-lg leading-relaxed mb-6 font-medium">
              Mount Kailash stands as the unmoving axis of the spiritual world — revered by Vaiṣṇavas, Śaivites, Buddhists and Jains alike as the seat of Lord Śiva, the greatest of Vaiṣṇavas.
            </p>
            <p className="text-slate-900/80 text-base md:text-lg leading-relaxed mb-8 font-medium">
              This yatra is offered under Yatramritam, carrying devotees beyond mere sightseeing — into a journey of darśan, kīrtan, sacred narration and inner purification, walked together as a Vaiṣṇava family.
            </p>
            <blockquote className="max-w-3xl mx-auto bg-white p-10 md:p-12 rounded-2xl shadow-md border border-amber-400/20">
              <p className="text-orange-800 text-3xl md:text-4xl italic leading-relaxed font-serif text-center">
                “vaiṣṇavānāṁ yathā śambhuḥ”
              </p>
              <footer className="text-slate-900/70 text-center text-lg md:text-xl mt-6 font-medium">
                Lord Śiva is the greatest of all Vaiṣṇavas.
              </footer>
            </blockquote>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            IMAGE GALLERY
        ══════════════════════════════════════════════ */}
        <section className="py-16 px-4 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-5 mix-blend-screen pointer-events-none bg-[length:400px]"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-3 font-bold">Divine Glimpses</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
                Sacred Destinations Gallery
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4 rounded-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-white/10 shadow-xl bg-slate-900">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                    <p className="font-serif text-amber-500 font-bold text-lg">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            DAY-BY-DAY ITINERARY
        ══════════════════════════════════════════════ */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-600 text-xs tracking-[0.4em] uppercase mb-3 font-bold">13 Days of Grace</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">
                Day-by-Day Sacred Itinerary
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4 rounded-full" />
            </div>
            <div className="space-y-4">
              {itinerary.map(({ day, title, location, places, detail, icon }) => {
                const isOpen = openDay === day;
                return (
                  <div
                    key={day}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-white shadow-sm hover:shadow-md ${isOpen ? "border-orange-600 ring-1 ring-[#ea580c]/20" : "border-amber-400/30 hover:border-orange-600/50"}`}
                  >
                    <button
                      onClick={() => setOpenDay(isOpen ? null : day)}
                      className="w-full flex items-center gap-4 p-5 text-left"
                    >
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border transition-colors ${isOpen ? "bg-orange-600 border-orange-600 text-white" : "bg-slate-50 border-amber-400/50 text-orange-800"}`}>
                        <span className="font-serif font-bold text-sm">D{day}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-serif font-bold text-lg leading-snug transition-colors ${isOpen ? "text-orange-600" : "text-slate-900"}`}>{title}</p>
                        <p className="text-slate-900/60 font-semibold text-xs mt-1 tracking-wider">{icon} {location}</p>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-orange-600/10 rotate-180" : "bg-transparent"}`}>
                        <span className={`text-xl font-medium ${isOpen ? "text-orange-600" : "text-orange-800"}`}>
                          {isOpen ? "−" : "+"}
                        </span>
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 border-t border-amber-400/20 pt-4 bg-white">
                            <p className="text-slate-900/80 font-medium text-sm leading-relaxed mb-4">{detail}</p>
                            <div className="space-y-3">
                              {places.map((p) => (
                                <div key={p} className="flex items-start gap-3">
                                  <CheckCircle2 size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-900 font-medium text-sm">{p}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            HIGHLIGHTS
        ══════════════════════════════════════════════ */}
        <section className="py-16 px-4 bg-white border-t border-amber-400/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-orange-600 text-xs tracking-[0.4em] uppercase mb-3 font-bold">What Awaits You</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">
                Yatra Highlights
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4 rounded-full" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {highlights.map(({ icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center p-4 group">
                  <div className="text-3xl mb-3 transform transition-transform group-hover:scale-125">{icon}</div>
                  <p className="text-slate-900/80 font-medium text-xs leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            INCLUSIONS / EXCLUSIONS
        ══════════════════════════════════════════════ */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-600 text-xs tracking-[0.4em] uppercase mb-3 font-bold">Package Details</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">
                What's Included
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4 rounded-full" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Inclusions */}
              <div className="border border-[#16a34a]/30 bg-[#16a34a]/5 rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif text-[#16a34a] font-bold text-lg mb-5 flex items-center gap-2">
                  <CheckCircle2 size={20} /> Package Includes
                </h3>
                <div className="space-y-3">
                  {inclusions.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-[#16a34a] flex-shrink-0 font-bold mt-0.5">✓</span>
                      <span className="text-slate-900/80 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Exclusions + Important */}
              <div className="space-y-6">
                <div className="border border-[#dc2626]/30 bg-[#dc2626]/5 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-serif text-[#dc2626] font-bold text-lg mb-4 flex items-center gap-2">
                    <X size={20} /> Not Included
                  </h3>
                  <div className="space-y-3">
                    {exclusions.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                         <span className="text-[#dc2626] flex-shrink-0 font-bold mt-0.5">✕</span>
                        <span className="text-slate-900/80 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border border-amber-400/40 bg-[#FFB81C]/10 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-serif text-orange-800 font-bold text-base mb-3 flex items-center gap-2">
                    <span>📋</span> Eligibility & Prep
                  </h3>
                  <ul className="space-y-2 text-slate-900/70 text-sm font-medium">
                    <li>• Age 10 to 70 years in reasonable physical fitness.</li>
                    <li>• Medical fitness certificate mandatory for high-altitude trek.</li>
                    <li>• Valid Passport (min. 3 blank pages, 7 months validity).</li>
                    <li>• Preparation: Brisk walking, light yoga, breathing exercises recommended 2 months prior.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            PRICING CTA BANNER
        ══════════════════════════════════════════════ */}
        <section className="py-16 px-4 bg-slate-900 border-y border-amber-400/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-10 mix-blend-screen pointer-events-none bg-[length:400px]"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-3 font-bold">Secure Your Place</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
              Only <span className="text-orange-600">₹3,29,000</span> Per Person
            </h2>
            <p className="text-white/80 mb-2 text-sm font-medium">
              + 5% GST + 5% TDS (Refundable) · Ex Kathmandu · Twin Sharing
            </p>
            <p className="text-amber-500 font-bold mb-8 text-sm tracking-wider animate-pulse flex justify-center items-center gap-2">
               <Sparkles size={16} /> Limited Seats · First Come, First Served <Sparkles size={16} />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToForm}
                className="bg-gradient-to-r from-orange-600 to-orange-800 text-white font-bold text-base px-10 py-4 rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(234,88,12,0.4)] tracking-wider flex items-center justify-center gap-2 uppercase"
              >
                Register Your Seat Now
              </button>
              <a
                href="https://wa.me/919440242656"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border border-orange-600/50 text-white font-bold text-base px-10 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 text-center flex items-center justify-center gap-2 tracking-wider"
              >
                <Phone size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════════ */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-600 text-xs tracking-[0.4em] uppercase mb-3 font-bold">Pilgrims Ask</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4 rounded-full" />
            </div>
            <div className="space-y-3">
              {faqs.map(({ q, a }, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className={`border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? "border-orange-600/60 bg-slate-50" : "border-amber-400/30 hover:border-orange-600/40"}`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left bg-transparent"
                    >
                      <p className={`font-serif font-bold text-base md:text-lg leading-snug ${isOpen ? "text-orange-600" : "text-slate-900"}`}>{q}</p>
                      <span className={`text-orange-600 text-xl flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 border-t border-amber-400/15 pt-4 bg-white">
                        <p className="text-slate-900/70 text-sm leading-relaxed font-medium">{a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
