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
  const [formData, setFormData] = useState({ name: "", phone: "", city: "", participants: "1 person", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const countdown = useCountdown("2026-08-23T00:00:00");
  const formRef = useRef(null);

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your name and WhatsApp/Phone number.");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/yatra-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          yatra_name: 'Kailash Mansarovar Yatra',
        }),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="bg-slate-50 text-slate-900 font-sans overflow-x-hidden">

        {/* ══════════════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-20">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0">
            <img 
              src="/assets/kailash-yatra/kailash-manasarovar-hero.jpg" 
              alt="Kailash Yatra Background" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-slate-900/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
          </div>
          <div className="relative z-20 w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 px-4 mt-2 sm:mt-4 md:mt-6 mb-2 sm:mb-4">
            <img src="/assets/yatramritam_logo.png" alt="Yatramritam Logo" className="h-16 sm:h-20 object-contain drop-shadow-2xl" />
            <div className="flex flex-col text-center md:text-left">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-[#FBB201] to-orange-500 text-[9px] sm:text-[11px] lg:text-sm tracking-wider sm:tracking-[0.2em] uppercase font-extrabold drop-shadow-md leading-relaxed">
                <span className="block lg:inline whitespace-nowrap">SRILA PRABHUPADA'S ISKCON THIRUVANMIYUR</span>
                <span className="hidden lg:inline"> • </span>
                <span className="block lg:inline">DAKSHINA DWARAKA DHAM, CHENNAI</span>
              </p>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col lg:flex-row gap-12 mt-0 sm:mt-2 pb-24 sm:pb-32">
            {/* Left Content */}
            <div className="flex-1 text-left">
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg text-white mb-6">
                Kailash<br/>
                <span className="font-serif italic text-amber-400">Mansa Sarovar Yatra</span>
              </h1>
              
              <p className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed font-medium mb-10 drop-shadow-md">
                A 13-day sacred journey to the divine abode of Lord Śiva — with Srila Prabhupada's ISKCON Thiruvanmiyur devotees, guided by Vaiṣṇava philosophy and Śaiva reverence in the Himalayan wilderness of Kailash & Manasarovar.
              </p>

              {/* Info Boxes */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <div className="flex items-center gap-4 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-xl px-5 py-4">
                  <span className="text-2xl text-amber-400 opacity-80">📅</span>
                  <div>
                    <p className="text-white/60 text-[10px] uppercase tracking-wider font-bold mb-0.5">Departure</p>
                    <p className="text-white font-sans text-sm md:text-base font-bold">23 Aug – 04 Sep 2026 • 13 Days</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-xl px-5 py-4">
                  <span className="text-2xl text-amber-400 opacity-80">💰</span>
                  <div>
                    <p className="text-white/60 text-[10px] uppercase tracking-wider font-bold mb-0.5">Investment</p>
                    <p className="text-white font-sans text-sm md:text-base font-bold">₹3,29,000 <span className="text-white/60 text-xs font-normal">+ 5% GST + 5% TDS</span></p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={scrollToForm}
                  className="bg-orange-600 text-white font-bold text-sm md:text-base px-8 py-4 rounded-full hover:bg-orange-500 transition-colors shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2"
                >
                  Reserve Your Seat &rarr;
                </button>
                <button
                  onClick={() => document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-transparent border border-white/30 text-white font-bold text-sm md:text-base px-8 py-4 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"
                >
                  View 13-Day Itinerary
                </button>
              </div>

              {/* Dark Countdown */}
              <div className="flex gap-3">
                {["days", "hours", "minutes", "seconds"].map((unit) => (
                  <div key={unit} className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-xl w-14 h-16 md:w-16 md:h-[72px] flex flex-col justify-center items-center">
                    <span className="font-sans text-xl md:text-2xl font-bold text-amber-400">
                      {String(countdown[unit] ?? 0).padStart(2, "0")}
                    </span>
                    <p className="text-white/50 text-[9px] md:text-[10px] font-bold uppercase tracking-wider mt-0.5">{unit.slice(0,3)}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right empty space for background focus */}
            <div className="flex-1 hidden lg:block"></div>
          </div>

          {/* Absolute bottom highlights strip */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-slate-900/60 backdrop-blur-sm py-4">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12">
              {[
                { icon: "🏔️", text: "Mt. Kailash Parikrama" },
                { icon: "🌊", text: "Manasarovar Lake" },
                { icon: "🕉️", text: "Pashupatinath Jyotirlinga" },
                { icon: "🪔", text: "Guhyeshwari Sakti Pitha" },
                { icon: "🚩", text: "Yama Dwara" },
                { icon: "🏞️", text: "Brahmaputra Origin" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-white/80 text-xs sm:text-sm font-medium">
                  <span className="opacity-80">{item.icon}</span>
                  {item.text}
                </div>
              ))}
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
            <div className="mt-10 text-center">
              <p className="text-amber-400 font-serif text-2xl italic tracking-wide drop-shadow-sm">...and many more places.</p>
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
                href="https://wa.me/919940242656"
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

        {/* ══════════════════════════════════════════════
            REGISTRATION FORM
        ══════════════════════════════════════════════ */}
        <section ref={formRef} className="py-20 px-4 bg-slate-50">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-orange-600 text-xs tracking-[0.4em] uppercase mb-3 font-bold">Join the Yatra</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">
                Register Your Interest
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4 mb-4 rounded-full" />
              <p className="text-slate-900/60 text-sm font-medium">
                Our team will contact you within 24 hours to confirm your seat and share payment details.
              </p>
            </div>

            {submitted ? (
              <div className="border border-[#16a34a]/40 bg-[#16a34a]/10 rounded-2xl p-10 text-center shadow-md bg-white">
                <div className="text-5xl mb-4 flex justify-center text-[#16a34a]"><CheckCircle2 size={48}/></div>
                <h3 className="font-serif text-2xl text-[#16a34a] font-bold mb-3">Hare Krishna!</h3>
                <p className="text-slate-900/70 leading-relaxed font-medium">
                  Your registration interest has been received. Our team will reach you on WhatsApp or phone within 24 hours.
                  <br /><br />
                  For immediate confirmation, call <a href="tel:919940242656" className="text-orange-600 font-bold">99402 42656</a>.
                </p>
              </div>
            ) : (
              <div className="border border-amber-400/30 bg-white shadow-lg rounded-2xl p-6 md:p-8 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-900 font-bold text-xs tracking-wider uppercase mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-slate-50 border border-amber-400/30 rounded-lg px-4 py-3 text-slate-900 placeholder-[#2D0A0A]/30 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/50 focus:border-orange-600 transition-all text-sm font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-900 font-bold text-xs tracking-wider uppercase mb-2">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-slate-50 border border-amber-400/30 rounded-lg px-4 py-3 text-slate-900 placeholder-[#2D0A0A]/30 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/50 focus:border-orange-600 transition-all text-sm font-medium"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-900 font-bold text-xs tracking-wider uppercase mb-2">City</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Chennai"
                      className="w-full bg-slate-50 border border-amber-400/30 rounded-lg px-4 py-3 text-slate-900 placeholder-[#2D0A0A]/30 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/50 focus:border-orange-600 transition-all text-sm font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-900 font-bold text-xs tracking-wider uppercase mb-2">No. of Participants</label>
                    <select
                      value={formData.participants}
                      onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                      className="w-full bg-slate-50 border border-amber-400/30 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/50 focus:border-orange-600 transition-all text-sm font-medium"
                    >
                      {[1,2,3,4,5,"5+"].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? "person" : "people"}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-slate-900 font-bold text-xs tracking-wider uppercase mb-2">Message / Questions (optional)</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    placeholder="Any questions or special requirements…"
                    className="w-full bg-slate-50 border border-amber-400/30 rounded-lg px-4 py-3 text-slate-900 placeholder-[#2D0A0A]/30 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/50 focus:border-orange-600 transition-all text-sm font-medium resize-none"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-orange-600 to-orange-800 text-white font-bold text-base py-4 rounded-xl transition-all duration-300 tracking-wider uppercase flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90 hover:scale-[1.02] shadow-[0_4px_20px_rgba(234,88,12,0.4)]'}`}
                >
                  {isSubmitting ? "Submitting..." : <><>Submit Registration Interest</> <ArrowRight size={18} /></>}
                </button>
                <p className="text-slate-900/50 text-xs font-bold text-center">
                  For instant confirmation call/WhatsApp: <a href="tel:919940242656" className="text-orange-600 hover:underline">99402 42656</a>
                </p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
