"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import { Phone, Mail, Sparkles, MapPin, CheckCircle2, ArrowRight, X } from "lucide-react";

// ─── SCHEMA JSON-LD (AI + SEO Optimised) ─────────────────────────────────────
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://hkmchennai.org/#organization",
      "name": "Hare Krishna Movement Chennai — Srila Prabhupada's ISKCON Thiruvanmiyur",
      "alternateName": "HKM Chennai",
      "url": "https://hkmchennai.org",
      "logo": "https://hkmchennai.org/logo.png",
      "sameAs": [
        "https://www.instagram.com/hkm_chennai",
        "https://twitter.com/ChennaiHare"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "63, 1st Seaward Road, Thiruvanmiyur",
        "addressLocality": "Chennai",
        "postalCode": "600 041",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-99402-42656",
        "contactType": "reservations"
      }
    },
    {
      "@type": "TouristTrip",
      "@id": "https://hkmchennai.org/yatramritam/sri-lanka-ramayana-yatra#trip",
      "name": "Sri Lanka Ramayana Yatra — A Spiritual Journey Through the Sacred Land of Rama",
      "description": "A 7-day, 6-night devotional pilgrimage across Sri Lanka's most sacred Ramayana sites, including Seetha Amman Temple, Ravana Falls, Hanuman Giri, ISKCON Sri Lanka, and King Vibhishana's Palace. Organised by Hare Krishna Movement Chennai under the Yatramritam initiative.",
      "touristType": "PilgrimTraveller",
      "startDate": "2026-07-26",
      "endDate": "2026-08-01",
      "availableLanguage": ["Tamil", "English"],
      "offers": {
        "@type": "Offer",
        "price": "132000",
        "priceCurrency": "INR",
        "availability": "https://schema.org/LimitedAvailability",
        "validFrom": "2026-06-01",
        "description": "Inclusive of return flights from Chennai, GST & TDS"
      },
      "organizer": { "@id": "https://hkmchennai.org/#organization" },
      "itinerary": {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Arrival in Colombo — Bandaranaike International Airport" },
          { "@type": "ListItem", "position": 2, "name": "Munneshwaram Temple, Manavari Temple, Spice Garden" },
          { "@type": "ListItem", "position": 3, "name": "Sigiriya Rock Fortress (Ravana's Fortress), Eco Park, Jeep Safari" },
          { "@type": "ListItem", "position": 4, "name": "Daladamaligawa, Ramboda Hanuman Temple, Seetha Amman Temple, Kandy" },
          { "@type": "ListItem", "position": 5, "name": "Divurumpola, Gayatri Peedam, Ravana Falls, Ravana Caves" },
          { "@type": "ListItem", "position": 6, "name": "Kathirgama Skanda Temple, Hanuman Giri, Maduganga Safari" },
          { "@type": "ListItem", "position": 7, "name": "ISKCON Sri Lanka, Colombo City Tour, King Vibhishana Palace, Departure" }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is included in the Sri Lanka Ramayana Yatra package price?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The ₹1,32,000 package includes return flights from Chennai, 6 nights in air-conditioned 3-star or 4-star hotels (twin sharing), AC luxury transport throughout, three times daily cooked prasadam, daily 1-litre water bottles, Sri Lanka visa (Indian passport holders), temple entry tickets, all parking and toll fees, and the service of a 10-year experienced licensed devotee chauffeur-guide. International sightseeing entry tickets and personal beverages are not included."
          }
        },
        {
          "@type": "Question",
          "name": "When is the Sri Lanka Ramayana Yatra 2026 by HKM Chennai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Sri Lanka Ramayana Yatra 2026 is scheduled from Sunday, 26th July to Saturday, 1st August 2026 — 7 days and 6 nights. It is organised by Hare Krishna Movement Chennai under the Yatramritam spiritual pilgrimage initiative."
          }
        },
        {
          "@type": "Question",
          "name": "Which Ramayana sacred sites are visited on this Sri Lanka yatra?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The pilgrimage covers Seetha Amman Temple (Nuwara Eliya), Ravana Falls and Ravana Caves (Ella), Sigiriya Rock Fortress (Ravana's citadel), Munneshwaram Temple, Manavari Temple (first Shivalingam installed by Lord Ram), Ramboda Bhaktha Hanuman Temple, Divurumpola (Agni Pariksha site), Gayatri Peedam, Kathirgama Skanda Temple, Hanuman Giri (Sanjeevani Parvata), King Vibhishana Palace, and ISKCON Sri Lanka in Colombo."
          }
        },
        {
          "@type": "Question",
          "name": "How do I register for the HKM Chennai Sri Lanka Ramayana Yatra?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Registration is on a first-come, first-served basis due to limited seats. Call or WhatsApp 99402 42656 to register. The yatra is organised by Srila Prabhupada's ISKCON Thiruvanmiyur, Dakshina Dwaraka Dham, Chennai."
          }
        },
        {
          "@type": "Question",
          "name": "Is prasadam (vegetarian food) provided throughout the Sri Lanka Ramayana Yatra?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Three times daily cooked Krishna prasadam is included in the package. The tour is entirely vegetarian and sattvic, in keeping with the devotional spirit of the pilgrimage."
          }
        }
      ]
    }
  ]
};

// ─── ITINERARY DATA ───────────────────────────────────────────────────────────
const itinerary = [
  {
    day: 1,
    title: "Arrival in Lanka — The Sacred Land Welcomes",
    location: "Colombo",
    places: ["Bandaranaike International Airport arrival", "Transfer to Colombo hotel", "Rest and orientation satsang"],
    detail: "Devotees are warmly received at Colombo's Bandaranaike International Airport. Day itinerary is flexible based on flight arrival time. Evening satsang and orientation.",
    icon: "✈️",
  },
  {
    day: 2,
    title: "Where Lord Ram Dispelled Brahmahatya Dosha",
    location: "Night stay: Sigiriya",
    places: ["Munneshwaram Temple", "Manavari Temple — first Shivalingam by Lord Ram", "Spice Garden (Himalayan herbs)"],
    detail: "After defeating Ravana, Lord Ram felt followed by Brahmahatya Dosha and installed a Shivalingam at Munneshwaram for purification. At Manavari, the twin Shivalingam (RamaLingeshawr) connects Sri Lanka to Rameshwaram in South India.",
    icon: "🕉️",
  },
  {
    day: 3,
    title: "Ravana's Citadel — A UNESCO World Heritage",
    location: "Night stay: Matalae",
    places: ["Sigiriya Rock Fortress (Ravana's Fortress)", "Eco Park & Wild Open Jeep Safari", "Golden Buddha Temple"],
    detail: "Sigiriya — the legendary fortress of King Ravana — is a UNESCO World Heritage Site featuring ancient ruins, breathtaking frescoes, and panoramic vistas that echo Lanka's mythic grandeur.",
    icon: "🏔️",
  },
  {
    day: 4,
    title: "Where Seetha Devi Prayed for Lord Ram's Arrival",
    location: "Night stay: Nuwaraliya",
    places: ["Daladamaligawa (Buddha Tooth Relic Temple)", "Ramboda Bhaktha Hanuman Temple", "Seetha Amman Temple — captivity site", "Kandy Gems Shopping"],
    detail: "Seetha Amman Temple is where Maa Seetha Devi was imprisoned by Ravana and prayed daily for her Lord. It is also where Sri Hanuman ji first beheld Her. Ancient footprints remain visible. Ramboda is where Hanuman ji meditated in anguish during his search.",
    icon: "🙏",
  },
  {
    day: 5,
    title: "Agni Pariksha, Ravana Falls & Sacred Caves",
    location: "Night stay: Kataragama",
    places: ["Divurumpola Temple — site of Seetha Devi's Agni Pariksha", "Gayatri Peedam / Lankadeeshwara Temple (Indrajit's tapas sthana)", "Ravana Falls (formed from Seetha Ma's tears)", "Ravana Caves — final captive site"],
    detail: "Divurumpola is where Seetha Devi underwent the sacred fire test of purity. The haunting Ravana Falls, formed by Seetha Maa's own tears, cascade from the hills of Ella. The Ravana Caves mark her final place of captivity during the great war.",
    icon: "🔥",
  },
  {
    day: 6,
    title: "Kathirgama — Where Lord Muruga Joined Lord Ram",
    location: "Night stay: Colombo",
    places: ["Kathirgama Skanda Temple — Lord Muruga's army united with Ram", "Hanuman Giri — Sanjeevani Parvata site", "Maduganga Mangrove Island Safari with cinnamon tea"],
    detail: "At Kathirgama, Lord Muruga's divine army joined hands with Lord Ram for the battle against the Asura forces. Hanuman Giri marks where the celestial Sanjeevani herb-mountain rested. Maduganga offers a serene mangrove safari.",
    icon: "🌿",
  },
  {
    day: 7,
    title: "ISKCON Sri Lanka & Departure Blessings",
    location: "Departure from Colombo",
    places: ["ISKCON Sri Lanka, Colombo — one of 108 temples by Srila Prabhupada", "Colombo City Tour", "King Vibhishana's Coronation Palace", "Airport transfer and departure"],
    detail: "The yatra concludes with darshan at ISKCON Sri Lanka — one of the 108 temples established by His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada — and a visit to the coronation site of the righteous King Vibhishana.",
    icon: "🏛️",
  },
];

const highlights = [
  { icon: "🛏️", label: "Comfortable, Hygienic Stay" },
  { icon: "🎵", label: "Soulful Kirtans & Bhajans" },
  { icon: "🍱", label: "Delicious Krishna Prasadam" },
  { icon: "🕌", label: "Guided Temple Darshan" },
  { icon: "📿", label: "Spiritual Discourses (Bilingual)" },
  { icon: "🌸", label: "Devotional Satsang" },
  { icon: "✈️", label: "Divine Travel Experience" },
];

const destinations = [
  { name: "Ravana Fortress", sub: "Sigiriya Rock" },
  { name: "Seetha Amman Temple", sub: "Nuwara Eliya" },
  { name: "Ravana Falls", sub: "Ella" },
  { name: "Ravana Caves", sub: "Ella" },
  { name: "Kathirgama Skanda Temple", sub: "Kataragama" },
  { name: "ISKCON Sri Lanka", sub: "Colombo" },
];

const inclusions = [
  "6 nights air-conditioned 3★ / 4★ hotel (twin sharing)",
  "AC luxury transport throughout entire tour",
  "Three times daily cooked Krishna prasadam",
  "1-litre water bottle per person per day",
  "Sri Lanka Visa (Indian passport holders)",
  "10-year experienced licensed devotee chauffeur-guide",
  "All parking and toll fees",
  "Temple entry tickets",
  "Warm airport welcome",
  "Return flights from Chennai (all-inclusive ₹1,32,000)",
];

const exclusions = [
  "International sightseeing entry tickets",
  "Personal beverages (other than provided water)",
];

const faqs = [
  {
    q: "What does the ₹1,32,000 price include?",
    a: "Everything: return flights from Chennai, 6 nights hotel (twin sharing), AC transport, three daily prasadam meals, water, Sri Lanka visa, temple entry tickets, parking, toll, and a devotee guide. GST and TDS are also included.",
  },
  {
    q: "Is this tour suitable for senior devotees?",
    a: "Yes. The itinerary is designed for comfortable group travel. AC transport, hygienic hotels, and bilingual guidance ensure all devotees travel with ease and dignity.",
  },
  {
    q: "Is vegetarian / sattvic food assured throughout?",
    a: "Absolutely. Three times daily cooked Krishna prasadam is included in the package. The entire yatra is sattvic — no onion, no garlic.",
  },
  {
    q: "How do I confirm my seat?",
    a: "Seats are limited and allocated on a first-come, first-served basis. Call or WhatsApp 99402 42656 immediately to block your seat. 50% advance is required to confirm booking.",
  },
  {
    q: "Which Ramayana sites are covered?",
    a: "All major sites: Seetha Amman Temple, Ravana Falls, Ravana Caves, Sigiriya Fortress, Munneshwaram, Manavari, Ramboda Hanuman Temple, Divurumpola, Gayatri Peedam, Kathirgama, Hanuman Giri, King Vibhishana Palace, and ISKCON Sri Lanka.",
  },
];
// ─── GALLERY DATA ─────────────────────────────────────────────────────────────
const galleryImages = [
  { src: "/assets/ramayana-yatra/Sigiriya-temple-pic.jpg", alt: "Sigiriya Temple" },
  { src: "/assets/ramayana-yatra/Seeta-amman-temple-(Nuwara-Eliya-·-Captivity-Site-of-Maa-Seetha).jpg", alt: "Seeta Amman Temple" },
  { src: "/assets/ramayana-yatra/Ravana-Falls.jpg", alt: "Ravana Falls" },
  { src: "/assets/ramayana-yatra/Ravana-Cave.jpg", alt: "Ravana Cave" },
  { src: "/assets/ramayana-yatra/Munneswaram-temple-sri-lanka.jpg", alt: "Munneswaram Temple" },
  { src: "/assets/ramayana-yatra/Kathirgama-Skanda-Temple.jpg", alt: "Kathirgama Skanda Temple" },
  { src: "/assets/ramayana-yatra/ISKCON-sri-lanka.jpg", alt: "ISKCON Sri Lanka" },
  { src: "/assets/ramayana-yatra/Hanumana-giri-sanjeevani-parvata.jpg", alt: "Hanumana Giri" },
  { src: "/assets/ramayana-yatra/Seeta-mata-agni-pariksha-site.jfif", alt: "Agni Pariksha Site" },
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

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function RamayanaYatraPage() {
  const [openDay, setOpenDay] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: "", phone: "", city: "", participants: "1", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const countdown = useCountdown("2026-07-26T00:00:00");
  const formRef = useRef(null);

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      {/* ── JSON-LD Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="bg-[#FFF9F0] text-[#2D0A0A] font-sans overflow-x-hidden">

        {/* ══════════════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
          {/* Background Image Layer */}
          <div className="absolute inset-0 bg-[url('/assets/ramayana-yatra/Sigiriya-image---use-for-here-section.png')] bg-cover bg-center bg-no-repeat opacity-60 mix-blend-multiply" />
          {/* Background gradient layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFF9F0]/80 via-[#FFF9F0]/60 to-[#FFF9F0]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,184,28,0.15)_0%,_transparent_80%)]" />

          {/* Decorative top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent" />

          {/* Org branding top */}
          <div className="absolute top-24 left-0 right-0 flex flex-col items-center z-10 px-4">
            <p className="text-[#ea580c] text-xs tracking-[0.3em] uppercase font-bold drop-shadow-sm">
              Srila Prabhupada's ISKCON Thiruvanmiyur · Dakṣiṇa Dvārakā Dhām, Chennai
            </p>
            <p className="text-[#2D0A0A]/60 text-xs mt-1 tracking-widest font-semibold">
              Hare Krishna Movement Chennai · Affiliated ISKCON Bangalore
            </p>
          </div>

          {/* Yatramritam badge */}
          <div className="relative z-10 mt-32 mb-4">
            <span className="inline-flex items-center gap-2 border border-[#FFB81C]/60 bg-white/50 backdrop-blur-sm text-[#ea580c] text-xs font-bold tracking-[0.3em] uppercase px-6 py-2 rounded-full shadow-sm">
              <Sparkles size={14} /> Yatramritam · Rediscover Pilgrimage <Sparkles size={14} />
            </span>
          </div>

          {/* Main title */}
          <div className="relative z-10 px-4 max-w-5xl mx-auto">
            <p className="text-[#ea580c] text-lg md:text-xl tracking-widest uppercase font-semibold mb-2">
              A Spiritual Journey Through
            </p>
            <h1
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-md text-[#2D0A0A]"
            >
              <span className="block">Sri Lanka</span>
              <span className="block bg-gradient-to-r from-[#b45309] via-[#ea580c] to-[#FFB81C] bg-clip-text text-transparent drop-shadow-sm">
                Ramayana
              </span>
              <span className="block">Yatra</span>
            </h1>
            <p className="mt-6 text-[#2D0A0A]/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Walk the sacred soil where Maa Seetha Devi waited, where Sri Hanuman searched, and where Lord Ram's glory still echoes through temple, cave, and waterfall.
            </p>
          </div>

          {/* Date + Price badges */}
          <div className="relative z-10 flex flex-wrap gap-4 justify-center mt-10 px-4">
            <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md border border-[#FFB81C]/40 rounded-2xl px-6 py-4 shadow-md hover:shadow-lg transition-all">
              <span className="text-3xl text-[#ea580c]">📅</span>
              <div className="text-left">
                <p className="text-[#ea580c] font-bold text-xs tracking-wider">DATES</p>
                <p className="font-serif text-[#2D0A0A] font-bold text-lg">26 July – 1 Aug 2026</p>
                <p className="text-[#2D0A0A]/60 text-xs font-medium">7 Days · 6 Nights</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md border border-[#FFB81C]/40 rounded-2xl px-6 py-4 shadow-md hover:shadow-lg transition-all">
              <span className="text-3xl text-[#ea580c]">💰</span>
              <div className="text-left">
                <p className="text-[#ea580c] font-bold text-xs tracking-wider">ALL-INCLUSIVE</p>
                <p className="font-serif text-[#2D0A0A] font-bold text-lg">₹1,32,000</p>
                <p className="text-[#2D0A0A]/60 text-xs font-medium">Flights + GST + TDS included</p>
              </div>
            </div>
          </div>

          {/* Countdown */}
          <div className="relative z-10 mt-12 px-4">
            <p className="text-[#ea580c] text-xs font-bold tracking-widest uppercase mb-3">Yatra begins in</p>
            <div className="flex gap-3 md:gap-5 justify-center">
              {["days", "hours", "minutes", "seconds"].map((unit) => (
                <div key={unit} className="text-center">
                  <div className="bg-white border border-[#FFB81C]/30 rounded-xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-md">
                    <span className="font-serif text-2xl md:text-3xl font-bold text-[#b45309]">
                      {String(countdown[unit] ?? 0).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-[#2D0A0A]/60 text-[10px] font-bold uppercase tracking-widest mt-2">{unit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-12 px-4">
            <button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-[#ea580c] to-[#b45309] text-white font-bold text-base px-10 py-4 rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(234,88,12,0.4)] tracking-wider flex items-center justify-center gap-2 uppercase"
            >
              Register Now — Limited Seats <ArrowRight size={18} />
            </button>
            <a
              href="https://wa.me/919940242656"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#ea580c]/30 text-[#ea580c] font-bold text-base px-10 py-4 rounded-xl hover:bg-[#FFF9F0] transition-all duration-300 text-center shadow-sm flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <Phone size={18} /> WhatsApp
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce opacity-70">
            <div className="w-px h-10 bg-gradient-to-b from-[#ea580c] to-transparent" />
            <p className="text-[#2D0A0A]/40 text-[10px] font-bold tracking-widest uppercase">Explore</p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            TRUST BAR
        ══════════════════════════════════════════════ */}
        <section className="border-y border-[#FFB81C]/20 bg-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-center">
              {[
                { val: "7", label: "Sacred Days" },
                { val: "12+", label: "Ramayana Sites" },
                { val: "₹1,32,000", label: "All-Inclusive" },
                { val: "3×", label: "Daily Prasadam" },
                { val: "Limited", label: "Seats Available" },
                { val: "Expert", label: "Devotee Guide" },
              ].map(({ val, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <span className="font-serif text-[#ea580c] text-2xl md:text-3xl font-bold">{val}</span>
                  <span className="text-[#2D0A0A]/60 text-xs font-bold uppercase tracking-widest mt-1">{label}</span>
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
            <p className="text-[#ea580c] text-xs font-bold tracking-[0.4em] uppercase mb-4 flex items-center justify-center gap-2">
              <Sparkles size={14} /> The Invitation <Sparkles size={14} />
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2D0A0A] mb-6 leading-snug">
              Lanka — Where Every Stone Carries a Story of the Ramayana
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent mx-auto mb-8 rounded-full" />
            <p className="text-[#2D0A0A]/80 text-base md:text-lg leading-relaxed mb-6 font-medium">
              Over 5,000 years ago, this emerald island witnessed the most sacred drama in all of creation. Maa Seetha Devi's tears fell and became waterfalls. Lord Hanuman's footprints remain in stone. The earth at Divurumpola still remembers the Agni Pariksha.
            </p>
            <p className="text-[#2D0A0A]/80 text-base md:text-lg leading-relaxed mb-8 font-medium">
              Under the Yatramritam initiative of Srila Prabhupada's ISKCON Thiruvanmiyur, Dakshina Dwaraka Dham, Chennai, this pilgrimage is not a tour. It is a sacred walk through scripture made real — every temple a verse, every sacred hill a chapter.
            </p>
            <blockquote className="border-l-4 border-[#ea580c] pl-6 text-left max-w-2xl mx-auto bg-white p-6 rounded-r-xl shadow-sm">
              <p className="text-[#b45309] text-lg italic leading-relaxed font-serif">
                "Pilgrimage to a holy place washes away the accumulated sins of many lifetimes. The sincere seeker who walks the land of the Lord's pastimes receives the Lord's special mercy."
              </p>
              <footer className="text-[#2D0A0A]/50 text-sm mt-3 tracking-wide font-bold">
                — Vedic wisdom on tirtha-yatra
              </footer>
            </blockquote>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            DESTINATIONS GRID
        ══════════════════════════════════════════════ */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#ea580c] text-xs tracking-[0.4em] uppercase mb-3 font-bold">Sacred Sites</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2D0A0A]">
                Destinations on This Yatra
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent mx-auto mt-4 rounded-full" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {destinations.map(({ name, sub }) => (
                <div
                  key={name}
                  className="border border-[#FFB81C]/30 rounded-2xl p-6 bg-white shadow-md hover:shadow-xl hover:border-[#ea580c]/50 hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FFF9F0] flex items-center justify-center mx-auto mb-4 border border-[#FFB81C]/20">
                    <MapPin size={18} className="text-[#ea580c]" />
                  </div>
                  <p className="font-serif text-[#2D0A0A] font-bold text-lg leading-snug">{name}</p>
                  <p className="text-[#ea580c] font-semibold text-xs mt-1 tracking-wider">{sub}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-[#2D0A0A]/60 font-medium text-sm mt-8 italic">
              And many more sacred places along the Ramayana Trail…
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            IMAGE GALLERY
        ══════════════════════════════════════════════ */}
        <section className="py-16 px-4 bg-[#2D0A0A] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-5 mix-blend-screen pointer-events-none bg-[length:400px]"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <p className="text-[#FFB81C] text-xs tracking-[0.4em] uppercase mb-3 font-bold">Divine Glimpses</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
                Sacred Destinations Gallery
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent mx-auto mt-4 rounded-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-white/10 shadow-xl bg-[#110202]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D0A0A]/90 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                    <p className="font-serif text-[#FFB81C] font-bold text-lg">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            DAY-BY-DAY ITINERARY
        ══════════════════════════════════════════════ */}
        <section className="py-20 px-4 bg-[#FFF9F0]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#ea580c] text-xs tracking-[0.4em] uppercase mb-3 font-bold">7 Days of Grace</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2D0A0A]">
                Day-by-Day Sacred Itinerary
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent mx-auto mt-4 rounded-full" />
            </div>
            <div className="space-y-4">
              {itinerary.map(({ day, title, location, places, detail, icon }) => {
                const isOpen = openDay === day;
                return (
                  <div
                    key={day}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-white shadow-sm hover:shadow-md ${isOpen ? "border-[#ea580c] ring-1 ring-[#ea580c]/20" : "border-[#FFB81C]/30 hover:border-[#ea580c]/50"}`}
                  >
                    <button
                      onClick={() => setOpenDay(isOpen ? null : day)}
                      className="w-full flex items-center gap-4 p-5 text-left"
                    >
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border transition-colors ${isOpen ? "bg-[#ea580c] border-[#ea580c] text-white" : "bg-[#FFF9F0] border-[#FFB81C]/50 text-[#b45309]"}`}>
                        <span className="font-serif font-bold text-sm">D{day}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-serif font-bold text-lg leading-snug transition-colors ${isOpen ? "text-[#ea580c]" : "text-[#2D0A0A]"}`}>{title}</p>
                        <p className="text-[#2D0A0A]/60 font-semibold text-xs mt-1 tracking-wider">{icon} {location}</p>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#ea580c]/10 rotate-180" : "bg-transparent"}`}>
                        <span className={`text-xl font-medium ${isOpen ? "text-[#ea580c]" : "text-[#b45309]"}`}>
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
                          <div className="px-5 pb-5 border-t border-[#FFB81C]/20 pt-4 bg-white">
                            <p className="text-[#2D0A0A]/80 font-medium text-sm leading-relaxed mb-4">{detail}</p>
                            <div className="space-y-3">
                              {places.map((p) => (
                                <div key={p} className="flex items-start gap-3">
                                  <CheckCircle2 size={16} className="text-[#ea580c] mt-0.5 flex-shrink-0" />
                                  <span className="text-[#2D0A0A] font-medium text-sm">{p}</span>
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
        <section className="py-16 px-4 bg-white border-t border-[#FFB81C]/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#ea580c] text-xs tracking-[0.4em] uppercase mb-3 font-bold">What Awaits You</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2D0A0A]">
                Yatra Highlights
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent mx-auto mt-4 rounded-full" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {highlights.map(({ icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center p-4 group">
                  <div className="text-3xl mb-3 transform transition-transform group-hover:scale-125">{icon}</div>
                  <p className="text-[#2D0A0A]/80 font-medium text-xs leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            INCLUSIONS / EXCLUSIONS
        ══════════════════════════════════════════════ */}
        <section className="py-20 px-4 bg-[#FFF9F0]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#ea580c] text-xs tracking-[0.4em] uppercase mb-3 font-bold">Package Details</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2D0A0A]">
                What's Included
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent mx-auto mt-4 rounded-full" />
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
                      <span className="text-[#2D0A0A]/80 text-sm font-medium">{item}</span>
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
                        <span className="text-[#2D0A0A]/80 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border border-[#FFB81C]/40 bg-[#FFB81C]/10 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-serif text-[#b45309] font-bold text-base mb-3 flex items-center gap-2">
                    <span>📋</span> Important Notes
                  </h3>
                  <ul className="space-y-2 text-[#2D0A0A]/70 text-sm font-medium">
                    <li>• Hotel names confirmed post-reservation; suitable alternatives provided if needed.</li>
                    <li>• Itinerary changes may affect pricing — clarify early.</li>
                    <li>• 50% advance payment required to confirm your booking.</li>
                    <li>• Seats are strictly limited — first-come, first-served.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            PRICING CTA BANNER
        ══════════════════════════════════════════════ */}
        <section className="py-16 px-4 bg-[#2D0A0A] border-y border-[#FFB81C]/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-10 mix-blend-screen pointer-events-none bg-[length:400px]"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="text-[#FFB81C] text-xs tracking-[0.4em] uppercase mb-3 font-bold">Secure Your Place</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
              Only <span className="text-[#ea580c]">₹1,32,000</span> Per Person
            </h2>
            <p className="text-white/80 mb-2 text-sm font-medium">
              All-inclusive · Return flights from Chennai · GST & TDS included
            </p>
            <p className="text-[#FFB81C] font-bold mb-8 text-sm tracking-wider animate-pulse flex justify-center items-center gap-2">
               <Sparkles size={16} /> Limited Seats · First Come, First Served <Sparkles size={16} />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToForm}
                className="bg-gradient-to-r from-[#ea580c] to-[#b45309] text-white font-bold text-base px-10 py-4 rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(234,88,12,0.4)] tracking-wider flex items-center justify-center gap-2 uppercase"
              >
                Register Your Seat Now
              </button>
              <a
                href="https://wa.me/919940242656"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border border-[#ea580c]/50 text-white font-bold text-base px-10 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 text-center flex items-center justify-center gap-2 tracking-wider"
              >
                <Phone size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FAQ (SEO + AI Optimised)
        ══════════════════════════════════════════════ */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#ea580c] text-xs tracking-[0.4em] uppercase mb-3 font-bold">Pilgrims Ask</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2D0A0A]">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent mx-auto mt-4 rounded-full" />
            </div>
            <div className="space-y-3">
              {faqs.map(({ q, a }, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className={`border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? "border-[#ea580c]/60 bg-[#FFF9F0]" : "border-[#FFB81C]/30 hover:border-[#ea580c]/40"}`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left bg-transparent"
                    >
                      <p className={`font-serif font-bold text-base md:text-lg leading-snug ${isOpen ? "text-[#ea580c]" : "text-[#2D0A0A]"}`}>{q}</p>
                      <span className={`text-[#ea580c] text-xl flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 border-t border-[#FFB81C]/15 pt-4 bg-white">
                        <p className="text-[#2D0A0A]/70 text-sm leading-relaxed font-medium">{a}</p>
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
        <section ref={formRef} className="py-20 px-4 bg-[#FFF9F0]">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#ea580c] text-xs tracking-[0.4em] uppercase mb-3 font-bold">Join the Yatra</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2D0A0A]">
                Register Your Interest
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent mx-auto mt-4 mb-4 rounded-full" />
              <p className="text-[#2D0A0A]/60 text-sm font-medium">
                Our team will contact you within 24 hours to confirm your seat and share payment details.
              </p>
            </div>

            {submitted ? (
              <div className="border border-[#16a34a]/40 bg-[#16a34a]/10 rounded-2xl p-10 text-center shadow-md bg-white">
                <div className="text-5xl mb-4 flex justify-center text-[#16a34a]"><CheckCircle2 size={48}/></div>
                <h3 className="font-serif text-2xl text-[#16a34a] font-bold mb-3">Hare Krishna!</h3>
                <p className="text-[#2D0A0A]/70 leading-relaxed font-medium">
                  Your registration interest has been received. Our team will reach you on WhatsApp or phone within 24 hours.
                  <br /><br />
                  For immediate confirmation, call <a href="tel:919940242656" className="text-[#ea580c] font-bold">99402 42656</a>.
                </p>
              </div>
            ) : (
              <div className="border border-[#FFB81C]/30 bg-white shadow-lg rounded-2xl p-6 md:p-8 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#2D0A0A] font-bold text-xs tracking-wider uppercase mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-[#FFF9F0] border border-[#FFB81C]/30 rounded-lg px-4 py-3 text-[#2D0A0A] placeholder-[#2D0A0A]/30 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/50 focus:border-[#ea580c] transition-all text-sm font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[#2D0A0A] font-bold text-xs tracking-wider uppercase mb-2">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-[#FFF9F0] border border-[#FFB81C]/30 rounded-lg px-4 py-3 text-[#2D0A0A] placeholder-[#2D0A0A]/30 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/50 focus:border-[#ea580c] transition-all text-sm font-medium"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#2D0A0A] font-bold text-xs tracking-wider uppercase mb-2">City</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Chennai"
                      className="w-full bg-[#FFF9F0] border border-[#FFB81C]/30 rounded-lg px-4 py-3 text-[#2D0A0A] placeholder-[#2D0A0A]/30 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/50 focus:border-[#ea580c] transition-all text-sm font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[#2D0A0A] font-bold text-xs tracking-wider uppercase mb-2">No. of Participants</label>
                    <select
                      value={formData.participants}
                      onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                      className="w-full bg-[#FFF9F0] border border-[#FFB81C]/30 rounded-lg px-4 py-3 text-[#2D0A0A] focus:outline-none focus:ring-2 focus:ring-[#ea580c]/50 focus:border-[#ea580c] transition-all text-sm font-medium"
                    >
                      {[1,2,3,4,5,"5+"].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? "person" : "people"}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[#2D0A0A] font-bold text-xs tracking-wider uppercase mb-2">Message / Questions (optional)</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    placeholder="Any questions or special requirements…"
                    className="w-full bg-[#FFF9F0] border border-[#FFB81C]/30 rounded-lg px-4 py-3 text-[#2D0A0A] placeholder-[#2D0A0A]/30 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/50 focus:border-[#ea580c] transition-all text-sm font-medium resize-none"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-[#ea580c] to-[#b45309] text-white font-bold text-base py-4 rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_20px_rgba(234,88,12,0.4)] tracking-wider uppercase flex items-center justify-center gap-2"
                >
                  Submit Registration Interest <ArrowRight size={18} />
                </button>
                <p className="text-[#2D0A0A]/50 text-xs font-bold text-center">
                  For instant confirmation call/WhatsApp: <a href="tel:919940242656" className="text-[#ea580c] hover:underline">99402 42656</a>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FOOTER
        ══════════════════════════════════════════════ */}
        <Footer />
      </div>
    </>
  );
}
