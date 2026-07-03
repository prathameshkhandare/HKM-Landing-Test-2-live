// app/yatramritam/kedarnath-badrinath/data.ts

export const YATRA_META = {
  title: "Kedarnath & Badrinath Yatra by Helicopter",
  subtitle: "Travel by Helicopter at Kedarnath & Badrinath",
  initiative: "Yatramritam — Rediscover Pilgrimage",
  duration: "3 Nights / 4 Days",
  route: "Dehradun · Rishikesh · Kedarnath · Badrinath · Haridwar · Dehradun",
  price: "₹2,55,000",
  priceNote: "Inclusive of GST & Flight Travel",
  phone: "99402 42656",
  phoneHref: "+919940242656",
  website: "https://www.hkmchennai.org",
  templeName: "Srila Prabhupada's ISKCON Thiruvanmiyur",
  dhamFullName: "Dakshina Dwaraka Dham, Hare Krishna Movement Chennai",
  templeAddress: "Srila Prabhupada's ISKCON Thiruvanmiyur, #63, 1st Seaward Rd, Valmiki Nagar, Thiruvanmiyur, Chennai -600041",
  regn: "Affiliated to ISKCON Bangalore, Regn. S-49/78-79",
  founderAcharya: "His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupāda",
  totalSeatsPerBatch: 12,
};

export const BATCHES = [
  {
    batch: 1,
    arrival: "Sat, 26th Sep 2026",
    arrivalNote: "Arrive Dehradun — Rishikesh Ganga Aarti",
    kedarnath: "Sun, 27th Sep",
    badrinath: "Mon, 28th Sep",
    departure: "Tue, 29th Sep",
    seats: 12,
    departureISO: "2026-09-26T00:00:00+05:30",
  },
  {
    batch: 2,
    arrival: "Fri, 2nd Oct 2026",
    arrivalNote: "Arrive Dehradun — Rishikesh Ganga Aarti",
    kedarnath: "Sat, 3rd Oct",
    badrinath: "Sun, 4th Oct",
    departure: "Mon, 5th Oct",
    seats: 12,
    departureISO: "2026-10-02T00:00:00+05:30",
  },
];

export interface ItineraryDay {
  day: number;
  title: string;
  date: string;
  location: string;
  img: string;
  timings?: { time: string; detail: string }[];
  points: string[];
  stay: string;
}

export const ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: "Rishikesh & Dehradun",
    date: "Day 01",
    location: "Rishikesh · Dehradun",
    img: "rishikesh-aarti.jpg",
    points: [
      "Arrive at Dehradun Airport / Railway Station / Bus Stand — warmly received by the Yatramritam team.",
      "Hot lunch Prasādam offered to Lord Kṛṣṇa served on arrival.",
      "Transfer to Rishikesh in premium SUV cars.",
      "Visit Ram Jhula, Sita Jhula, Parmarth Niketan, Swarg Ashram & Gita Mandir.",
      "Holy snan at Triveni Ghat, Ganga Jī — Sankalpa, Archana with Gotra Nāma, Āratī to Ganga Jī by each family.",
      "Deepa Dāna — leaving diyas in Ganga Jī.",
      "Return to Dehradun for Tour Briefing at 7:00 PM — duffel bags distributed (3 kg to 5 kg/person only).",
      "Dinner and overnight stay at premium hotel in Dehradun.",
    ],
    stay: "Aketa, Red Fox, Sarovar Portica, Dehradun (or similar) — Dinner & Breakfast included",
  },
  {
    day: 2,
    title: "Kedarnath Jī Darśan",
    date: "Day 02",
    location: "Kedarnath",
    img: "kedarnath-temple.jpg",
    timings: [
      { time: "11:15 AM", detail: "Check-out from Dehradun hotel after breakfast" },
      { time: "12:30 PM", detail: "ETD from Sahastradhara Helidrome, Dehradun" },
      { time: "1:00 PM", detail: "ETA at Sersi Heli-base" },
    ],
    points: [
      "Fly by helicopter from Sahastradhara Helidrome to Sersi Heli-base — our base for Kedarnath shuttle services.",
      "Ferried to Kedarnath Dhām by shuttle service (approx. 7 minutes flight). VIP Darśan at Kedarnath temple — approx. 2 hours.",
      "Sightseeing at Sersi: Triyuginarayan Temple — the celestial wedding venue of Lord Śiva & Goddess Pārvati.",
      "Breakfast & lunch served at Sersi.",
      "Fly from Sersi Heli-base (1:00 PM) to Badrinath Helipad (1:30 PM).",
      "Check-in at Badrinath hotel on arrival.",
    ],
    stay: "Ghughuti Resort / Hotel at Sersi (or similar) — All meals included",
  },
  {
    day: 3,
    title: "Badrinath Jī Darśan",
    date: "Day 03",
    location: "Badrinath",
    img: "badrinath-temple.jpg",
    timings: [
      { time: "1:00 PM", detail: "ETD from Sersi Heli-base" },
      { time: "1:30 PM", detail: "ETA at Badrinath Helipad" },
    ],
    points: [
      "Breakfast at hotel; enjoy morning in Badrinath at leisure.",
      "Darśan at Śrī Badrinath Nārāyaṇa Temple in the afternoon — approx. 1–1.5 hours. Transferred by car from hotel to temple.",
      "VIP Darśan arranged (subject to Government orders).",
      "Sightseeing: Mana Village — the 'Last Village of India', on the edge of the China border.",
      "Evening Āratī at Badrinath Temple — Swaran/Chandi Āratī (on additional payment basis, directly at Badrinath).",
      "Overnight at Badrinath.",
    ],
    stay: "Hotel Snowcrest, Badrinath (or similar) — All meals included",
  },
  {
    day: 4,
    title: "Return to Dehradun",
    date: "Day 04",
    location: "Badrinath → Dehradun",
    img: "haridwar-har-ki-pauri.jpg",
    timings: [
      { time: "12:30 PM", detail: "Breakfast & lunch; ready for departure" },
      { time: "1:30 PM", detail: "ETD from Badrinath Helipad" },
      { time: "2:30 PM", detail: "ETA at Sahastradhara Helidrome, Dehradun" },
    ],
    points: [
      "Breakfast and lunch at Badrinath hotel; collect luggage and check-out by 12:30 PM.",
      "Fly back to Sahastradhara Helidrome, Dehradun.",
      "Yatramritam team receives passengers on arrival at Dehradun.",
      "Transfer to Dehradun hotel to collect luggage from cloak rooms.",
      "Departure to Haridwar; visit Daksha Prajapati Temple, Mansa Devi Temple, Chandi Devi Temple, and Maya Devi Temple.",
      "Drop to Dehradun Airport / Railway Station — farewell with blessings.",
    ],
    stay: "Tour concludes — Hare Kṛṣṇa! 🙏",
  },
];

export const INCLUSIONS = [
  "Helicopter flying Dehradun ↔ Kedarnath & Badrinath (return)",
  "1 additional night at Dehradun on arrival (Dinner & Breakfast included)",
  "1 night stay with all meals at Sersi (Kedarnath base)",
  "1 night stay with all meals at Badrinath",
  "Local sightseeing at Sersi & Badrinath",
  "Kedarnath shuttle service: Sersi – Kedarnath – Sersi",
  "VIP Darśans at Kedarnath & Badrinath (subject to Government orders)",
  "Airport & hotel transfers at Dehradun",
  "All applicable taxes & government levies",
  "Duffel bags provided (max 3-5 kg/person)",
  "Air/train fare from home city to Dehradun",
  "Lunch at Dehradun on Day 1 (tea/snacks may be provided)",
  "Melodious bhajans, kīrtans & Sthala Purāṇa narrations",
  "Sātvik food — pure vegetarian without onion & garlic",
  "Vedic games & take-home gifts",
  "Relaxed, well-paced itinerary",
];

export const EXCLUSIONS = [
  "Donations, tips, pitthu & extra porter charges",
  "Abhishekams & special pujas at temples (arranged on request at extra cost)",
  "Overweight charges: ₹2,500/kg for passengers above 75 kg",
  "Medical evacuation by helicopter: ₹1,10,000/hr + GST (if required)",
  "Single occupancy room: ₹40,000/person extra",
  "Extra nights due to bad weather / force majeure (payable directly at hotel)",
  "Anything not mentioned under Inclusions",
];

export const HIGHLIGHTS = [
  { icon: "🚁", title: "Full Helicopter Tour", text: "Fly by helicopter to both Kedarnath & Badrinath — no long treks, no road fatigue. Pure divine darśan." },
  { icon: "🛕", title: "VIP Darśan — Both Dhams", text: "Arranged VIP darśan at Kedarnath Jyotirliṅga & Badrinath Nārāyaṇa — skip the queues, maximise the darśan." },
  { icon: "🔥", title: "Rishikesh Ganga Aarti", text: "Experience the magnificent evening Ganga Āratī at Triveni Ghat — Sankalpa, Archana & Deepa Dāna." },
  { icon: "🏔️", title: "Triyuginarayan Temple", text: "Visit the sacred temple where Lord Śiva & Goddess Pārvati were wed — eternal fire burning since the ceremony." },
  { icon: "🏘️", title: "Mana Village", text: "Walk through the 'Last Village of India' at the edge of the China border — historically connected to the Mahābhārata." },
  { icon: "🍛", title: "Pure Sātvik Prasādam", text: "All meals throughout are pure vegetarian without onion or garlic — offered to Lord Kṛṣṇa first." },
  { icon: "🎶", title: "Bhajans & Kīrtans", text: "Continuous spiritual atmosphere — bhajans, kīrtans and Sthala Purāṇa narrations by our ISKCON devotee guide." },
  { icon: "🎁", title: "Welcome Kit & Gifts", text: "Duffel bags, Vedic games, take-home spiritual gifts — a complete and memorable yatra experience." },
];

export const KEY_INFO = [
  { label: "Helicopter Capacity", value: "6 yatris per flight" },
  { label: "Max Weight", value: "450 kg per flight (excl. baggage)" },
  { label: "Baggage Allowance", value: "Max 3-5 kg per person (duffel bags provided)" },
  { label: "Overweight Charge", value: "₹2,500/kg above 75 kg per person" },
  { label: "Arrive Dehradun By", value: "2:00 PM or earlier on Day 1" },
  { label: "ID Required", value: "Aadhaar Card (Indians) / Passport (foreign nationals)" },
  { label: "Children Below 2 yrs", value: "Free (max 12 kg, ID proof required)" },
  { label: "Network at Badrinath", value: "BSNL & JIO only" },
];

export const FAQS = [
  {
    q: "Is there trekking involved in this yatra?",
    a: "No trekking required. The helicopter lands very close to both temples. At Kedarnath, the shuttle flight from Sersi to the shrine is just 7 minutes. Yatris are transferred by car from the hotel to Badrinath temple.",
  },
  {
    q: "What is the food arrangement throughout?",
    a: "All meals at Sersi (Kedarnath base) and Badrinath are included and are pure vegetarian without onion or garlic — sātvik food prepared separately for devotees. Dehradun lunch on arrival day is also provided.",
  },
  {
    q: "What if there is bad weather on the day of flying?",
    a: "Flying in the hills is subject to weather conditions, NOTAM, VVIP movements and force majeure. If the tour departs Dehradun as scheduled but gets disrupted en route, our team will propose a revised itinerary within the package days. Full refund policies apply as per our terms.",
  },
  {
    q: "Can I travel with family and be on the same helicopter?",
    a: "We cannot guarantee all family members will be on the same flight due to helicopter weight capacity (450 kg / 6 passengers max). Yatris may be shuffled between flights for safety.",
  },
  {
    q: "What weight should I declare at booking?",
    a: "Please provide your correct body weight at the time of booking. Overweight charges of ₹2,500/kg apply for weights above 75 kg per person. Incorrect weights may result in deboarding without refund.",
  },
  {
    q: "Are VIP darśans guaranteed?",
    a: "VIP darśans are arranged by our team and are subject to orders issued by the temple authorities and State Government at the time of the yatra.",
  },
  {
    q: "What kind of accommodation is provided?",
    a: "Dehradun: Aketa, Red Fox, Sarovar Portico or similar. Sersi: Ghughuti Resort or similar. Badrinath: Hotel Snowcrest or similar. Please note that luxury hotels are not available at the Dhams, but we select the most comfortable available properties.",
  },
  {
    q: "Is this suitable for senior citizens?",
    a: "Yes — since it is a helicopter tour, there is no strenuous trekking. However, all Dhams are at high altitude (8,500–11,500 ft). We recommend consulting a doctor before travel, especially for those with heart conditions, lung issues or recent surgeries.",
  },
];

export const CANCELLATION = [
  { condition: "More than 15 days before travel", charge: "30% of total tour cost" },
  { condition: "8–15 days before travel", charge: "50% of total tour cost" },
  { condition: "7 days or less / No show", charge: "No refund" },
  { condition: "After tour commencement", charge: "No refund" },
];
