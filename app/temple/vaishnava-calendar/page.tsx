import type { Metadata } from 'next'
import Navbar from "@/components/Navbar"
import Footer from "@/components/FooterSection"
import VaishnavaCalendarHero from "@/components/VaishnavaCalendarHero"

// ─── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Vaishnava Calendar 2026–27 | Festival Dates & Ekadashi | Hare Krishna Movement Chennai',
  description:
    'Complete Vaishnava Calendar 2026–2027 (Gaurabda 540) with all ISKCON festival dates, Ekadashi fasting days, appearance & disappearance days for Chennai devotees. Hare Krishna Movement Chennai.',
  keywords: [
    'Vaishnava calendar 2026', 'ISKCON calendar 2026', 'Ekadashi 2026 dates',
    'Janmashtami 2026', 'Gaura Purnima 2027', 'Radhashtami 2026',
    'Vaishnava festival dates Chennai', 'HKM Chennai events',
    'Krishna festival calendar India', 'ISKCON festival 2026 2027',
    'Narasimha Chaturdashi 2026', 'Ratha Yatra 2026 Chennai',
  ],
  authors: [{ name: 'Hare Krishna Movement Chennai', url: 'https://hkmchennai.org' }],
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://hkmchennai.org/temple/vaishnava-calendar' },
  openGraph: {
    type: 'website',
    url: 'https://hkmchennai.org/temple/vaishnava-calendar',
    title: 'Vaishnava Calendar 2026–27 | Hare Krishna Movement Chennai',
    description:
      'Complete ISKCON Vaishnava festival calendar 2026–2027 — Ekadashi, Janmashtami, Radhashtami, Gaura Purnima, Ratha Yatra and more. Gaurabda 540.',
    siteName: 'Hare Krishna Movement Chennai',
    images: [{ url: 'https://hkmchennai.org/images/calendar-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaishnava Calendar 2026–27 | HKM Chennai',
    description: 'All ISKCON festival dates, Ekadashi fasting days & Vaishnava observances for 2026–2027.',
  },
}

// ─── Types ─────────────────────────────────────────────────────────────────────
type EventType = 'ekadashi' | 'major' | 'appearance' | 'disappearance' | 'festival' | 'chaturmasya'

interface VEvent {
  date: string
  day: string
  name: string
  fasting?: string
  type: EventType
  strikethrough?: boolean
}

interface MonthData {
  id: string
  label: string
  icon: string
  events: VEvent[]
}

// ─── Calendar Data ──────────────────────────────────────────────────────────────
const CALENDAR: MonthData[] = [
  {
    id: 'mar-2026', label: 'March 2026', icon: '🌸',
    events: [
      { date: '4',  day: 'Wed', name: 'Festival of Jagannātha Miśra', type: 'festival' },
      { date: '11', day: 'Wed', name: 'Śrī Śrīvāsa Paṇḍita — Appearance', type: 'appearance' },
      { date: '15', day: 'Sun', name: 'Fasting for Ekādaśī Vrata', fasting: 'Fasting from grains and beans', type: 'ekadashi' },
      { date: '16', day: 'Mon', name: 'Śrī Govinda Ghoṣa — Disappearance', type: 'disappearance' },
      { date: '23', day: 'Mon', name: 'Śrī Rāmānujācārya — Appearance', type: 'appearance' },
      { date: '27', day: 'Fri', name: 'Śrī Rāma Navamī — Śrī Rāma Aiśvaryam', fasting: 'Fasting till sunset', type: 'major' },
      { date: '29', day: 'Sun', name: 'Fasting for Ekādaśī Vrata', fasting: 'Fasting from grains and beans', type: 'ekadashi' },
    ],
  },
  {
    id: 'apr-2026', label: 'April 2026', icon: '🌺',
    events: [
      { date: '2',  day: 'Thu', name: 'Śrī Vaṁśīvadana Ṭhākura Appearance · Śrī Śyāmānanda Prabhu — Appearance', type: 'appearance' },
      { date: '9',  day: 'Thu', name: 'Śrī Abhirāma Ṭhākura — Disappearance', type: 'disappearance' },
      { date: '12', day: 'Sun', name: 'Śrī Vṛndāvana Dāsa Ṭhākura — Disappearance', type: 'disappearance' },
      { date: '13', day: 'Mon', name: 'Ekādaśī Vrata', fasting: 'Fasting from grains and beans', type: 'ekadashi' },
      { date: '17', day: 'Fri', name: 'Śrī Gadādhara Paṇḍita — Appearance', type: 'appearance' },
      { date: '20', day: 'Mon', name: 'Akṣaya Tṛtīyā — Chandana Yātrā begins 🪷', type: 'major' },
      { date: '25', day: 'Sat', name: 'Srimati Sītā Devī Appearance · Śrī Madhu Paṇḍita Gosvāmī Disappearance · Srimati Jāhnavā Devī — Appearance', type: 'appearance' },
      { date: '27', day: 'Mon', name: 'Ekādaśī Vrata', fasting: 'Fasting from grains and beans', type: 'ekadashi' },
      { date: '28', day: 'Tue', name: 'Rukmiṇī Dvādaśī — Evening abhiṣekam for KRS', type: 'festival' },
      { date: '29', day: 'Wed', name: 'Śrī Jayānanda Prabhu — Disappearance', type: 'disappearance' },
      { date: '30', day: 'Thu', name: 'Narasiṁha Caturdaśī 🦁 — Appearance of Lord Narasiṁhadeva · ', fasting: 'Fasting till dusk', type: 'major' },
    ],
  },
  {
    id: 'may-2026', label: 'May 2026', icon: '🌻',
    events: [
      { date: '1',  day: 'Fri', name: 'Śrī Mādhavendra Purī Appearance · Śrī Śrīnivāsa Ācārya — Appearance', type: 'appearance' },
      { date: '7',  day: 'Thu', name: 'Śrī Rāmānanda Rāya — Disappearance', type: 'disappearance' },
      { date: '13', day: 'Wed', name: 'Fasting for Ekādaśī Vrata', fasting: 'Fasting from grains and beans', type: 'ekadashi' },
      { date: '14', day: 'Thu', name: 'Śrī Vṛndāvana Dāsa Ṭhākura — Appearance', type: 'appearance' },
      { date: '27', day: 'Wed', name: 'Fasting for Ekādaśī Vrata (Mahā-Dvādaśī)', fasting: 'Fasting from grains and beans', type: 'ekadashi' },
      { date: '31', day: 'Sun', name: 'Kalyāṇotsavam 🌸', type: 'festival' },
    ],
  },
  {
    id: 'jun-2026', label: 'June 2026', icon: '☀️',
    events: [
      { date: '11', day: 'Thu', name: 'Fasting for Ekādaśī Vrata', fasting: 'Fasting from grains and beans', type: 'ekadashi' },
      { date: '24', day: 'Wed', name: 'Śrī Baladeva Vidyābhūṣaṇa — Disappearance', type: 'disappearance' },
      { date: '25', day: 'Thu', name: 'Fasting for Ekādaśī Vrata', fasting: 'Fasting from grains and beans', type: 'ekadashi' },
      { date: '27', day: 'Sat', name: 'Panihāṭī Chidā-Dadhī Utsava 🍚', type: 'major' },
      { date: '29–30', day: 'Mon–Tue', name: 'Śrī Mukunda Datta Disappearance (29) · Śrī Śyāmānanda Prabhu Disappearance (30)', type: 'disappearance' },
    ],
  },
  {
    id: 'jul-2026', label: 'July 2026', icon: '🎡',
    events: [
      { date: '5',  day: 'Sun', name: 'Śrī Vakreśvara Paṇḍita — Appearance', type: 'appearance' },
      { date: '10', day: 'Fri', name: 'Śrī Śrīnivāsa Paṇḍita — Disappearance', type: 'disappearance' },
      { date: '11', day: 'Sat', name: 'Dvādaśī — Fasting for Ekādaśī Vrata', fasting: 'Fasting from grains and beans', type: 'ekadashi' },
      { date: '14', day: 'Tue', name: 'Śrī Gadādhara Paṇḍita Disappearance · Śrīla Bhaktivinoda Ṭhākura — Disappearance', fasting: 'Fasting till noon', type: 'major' },
      { date: '16', day: 'Thu', name: 'Jagannātha Purī Ratha Yātrā 🎡 · Śrī Svarūpa Dāmodara Gosvāmī Disappearance · Śrī Śivānanda Senā Disappearance', type: 'major' },
      { date: '19', day: 'Sun', name: 'Vakreśvara Paṇḍita — Disappearance', type: 'disappearance' },
      { date: '24', day: 'Fri', name: 'Bāhudā Ratha Yātrā at Jagannātha Purī', type: 'major' },
      { date: '25', day: 'Sat', name: 'Ekādaśī Vrata', fasting: 'Fasting from grains and beans', type: 'ekadashi' },
      { date: '29', day: 'Wed', name: 'Śrīla Sanātana Gosvāmī — Disappearance', type: 'disappearance' },
      { date: '30', day: 'Thu', name: 'First Month of Cāturmāsya begins 🍃', fasting: 'Fasting from śāk (green leafy vegetables) for one month', type: 'chaturmasya' },
    ],
  },
  {
    id: 'aug-2026', label: 'August 2026', icon: '🌊',
    events: [
      { date: '3',  day: 'Mon', name: 'Śrī Gopāla Bhaṭṭa Gosvāmī — Disappearance', type: 'disappearance' },
      { date: '6',  day: 'Thu', name: 'Śrī Lokanātha Gosvāmī — Disappearance', type: 'disappearance' },
      { date: '7',  day: 'Fri', name: 'ISKCON Founding Day 🏛️', type: 'festival' },
      { date: '9',  day: 'Sun', name: 'Ekādaśī Vrata', fasting: 'Fasting from grains and beans', type: 'ekadashi' },
      { date: '16', day: 'Sun', name: 'Śrī Raghunandana Ṭhākura Disappearance · Śrī Vaṁśīdāsa Bābājī — Disappearance', type: 'disappearance' },
      { date: '23', day: 'Sun', name: 'Jhūlan Yātrā begins 🌙', type: 'festival' },
      { date: '24', day: 'Mon', name: 'Fasting for Ekādaśī Vrata (Mahā-Dvādaśī) · Śrīla Rūpa Gosvāmī Disappearance · Śrī Gauridāsa Paṇḍita — Disappearance', fasting: 'Fasting from grains and beans', type: 'ekadashi' },
      { date: '28', day: 'Fri', name: 'Balarāma Jayantī 🌾 — Appearance of Lord Balarāma · Jhūlan Yātrā ends · Abhiṣekam for Śrī Śrī Kṛṣṇa-Balarāma', fasting: 'Fasting till noon', type: 'major' },
      { date: '29', day: 'Sat', name: "Second Month of Cāturmāsya begins · Jaladuta's Voyage of Compassion begins ⛵", fasting: 'Fasting from yogurt for one month', type: 'chaturmasya' },
    ],
  },
  {
    id: 'sep-2026', label: 'September 2026', icon: '🌙',
    events: [
      { date: '4',  day: 'Fri', name: 'Śrī Kṛṣṇa Janmāṣṭamī 🦚 — Appearance of Lord Śrī Kṛṣṇa', fasting: 'Fasting till midnight', type: 'major' },
      { date: '5',  day: 'Sat', name: 'Nandotsava · Śrī Vyāsa Pūjā — Appearance of Śrīla Prabhupāda', fasting: 'Fasting till noon', type: 'major' },
      { date: '7',  day: 'Mon', name: 'Ekādaśī Vrata', fasting: 'Fasting from grains and beans', type: 'ekadashi' },
      { date: '13', day: 'Sun', name: 'Śrīla Prabhupāda Vyāsa Pūjā Smaraṇam', type: 'festival' },
      { date: '16', day: 'Wed', name: "Srimati Sītā Ṭhākurāṇī (Śrī Advaita Ācārya's consort) — Appearance", type: 'appearance' },
      { date: '19', day: 'Sat', name: 'Rādhāṣṭamī 🌹 — Appearance of Śrīmatī Rādhārāṇī ·', fasting: 'Fasting till noon', type: 'major' },
      { date: '22', day: 'Tue', name: 'Fasting for Ekādaśī Vrata (+ Fasting till noon for Vāmana Dvādaśī next day)', fasting: 'Fasting from grains and beans', type: 'ekadashi' },
      { date: '23', day: 'Wed', name: 'Vāmana Jayantī — Appearance of Lord Vāmanadeva · Śrīla Jīva Gosvāmī — Appearance', type: 'major' },
      { date: '24', day: 'Thu', name: 'Śrīla Bhaktivinoda Ṭhākura — Appearance', fasting: 'Fasting till noon', type: 'appearance' },
      { date: '25', day: 'Fri', name: 'Śrīla Haridāsa Ṭhākura Disappearance · Ananta Caturdaśī', type: 'disappearance' },
      { date: '26', day: 'Sat', name: 'Acceptance of Sannyāsa by Śrīla Prabhupāda — Sannyāsa Smṛti', type: 'festival' },
      { date: '27', day: 'Sun', name: 'Āśraya Ceremony · Third Month of Cāturmāsya begins', fasting: 'Fasting from milk for one month', type: 'chaturmasya' },
    ],
  },
  {
    id: 'oct-2026', label: 'October 2026', icon: '🍂',
    events: [
      { date: '3',  day: 'Sat', name: "Jaladuta's Voyage of Compassion ends ⛵", type: 'festival' },
      { date: '6',  day: 'Tue', name: 'Ekādaśī Vrata', fasting: 'Fasting from grains and beans', type: 'ekadashi' },
      { date: '21', day: 'Wed', name: 'Vijaya Daśamī · Śrīla Madhvācārya — Appearance', type: 'festival' },
      { date: '22', day: 'Thu', name: 'Ekādaśī Vrata', fasting: 'Fasting from grains and beans', type: 'ekadashi' },
      { date: '23', day: 'Fri', name: 'Śrīla Raghunātha Dāsa Gosvāmī · Raghunātha Bhaṭṭa Gosvāmī · Kṛṣṇadāsa Kavirāja Gosvāmī — Disappearance', type: 'disappearance' },
      { date: '26', day: 'Mon', name: 'Śrī Murāri Gupta — Disappearance', type: 'disappearance' },
      { date: '27', day: 'Tue', name: 'Fourth Month of Cāturmāsya begins · 🪔 Kārtika Dīpotsava begins', fasting: 'Fasting from urad dal for one month', type: 'chaturmasya' },
      { date: '30', day: 'Fri', name: 'Śrīla Narottama Dāsa Ṭhākura — Disappearance', type: 'disappearance' },
    ],
  },
  {
    id: 'nov-2026', label: 'November 2026', icon: '🪔',
    events: [
      { date: '1',  day: 'Sun', name: 'Śrīla Prabhupāda Āśraya Ceremony — 6 PM', type: 'festival' },
      { date: '2',  day: 'Mon', name: 'Bahulāṣṭamī — Appearance of Rādhā Kuṇḍa', type: 'festival' },
      { date: '3',  day: 'Tue', name: 'Śrī Virābhadra — Appearance', type: 'appearance' },
      { date: '5',  day: 'Thu', name: 'Ekādaśī Vrata', fasting: 'Fasting from grains and beans', type: 'ekadashi' },
      { date: '10', day: 'Tue', name: 'Govardhana Pūjā 🏔️ · Go Pūjā · Govardhana Śaraṇotsavam · Śrī Rasikānanda Prabhu — Appearance', type: 'major' },
      { date: '11', day: 'Wed', name: 'Śrī Vāsudeva Ghoṣa — Disappearance', type: 'disappearance' },
      { date: '13', day: 'Fri', name: 'Śrīla Prabhupāda — Disappearance 🙏', fasting: 'Fasting till noon', type: 'major' },
      { date: '17', day: 'Tue', name: 'Gopāṣṭamī 🐄 · Śrīla Gadādhara Dāsa Gosvāmī Disappearance · Śrī Dhanañjaya Paṇḍita Disappearance · Śrī Śrīnivāsa Ācārya — Disappearance', type: 'festival' },
      { date: '21', day: 'Sat', name: 'Śrīla Gaura Kiśora Dāsa Bābājī Disappearance · Ekādaśī (Tṛspṛśā Mahādvādaśī)', fasting: 'Fasting till noon + regular Ekādaśī fasting · Next day feast after sunrise', type: 'major' },
      { date: '23', day: 'Mon', name: 'Śrīla Bhūgarbha Gosvāmī Disappearance · Śrīla Kāśīśvara Paṇḍita — Disappearance', type: 'disappearance' },
      { date: '24', day: 'Tue', name: '🪔 Last Day of Dīpotsava · Cāturmāsya ends', type: 'chaturmasya' },
      { date: '29', day: 'Sun', name: 'Śrīla Prabhupāda Book Distribution Festival Inauguration 📚 · Kīrtana Melā', type: 'major' },
    ],
  },
  {
    id: 'dec-2026', label: 'December 2026', icon: '📚',
    events: [
      { date: '—',  day: 'Dec', name: 'Śrīla Prabhupāda Dīkṣā Diwāsa', type: 'festival' },
      { date: '5',  day: 'Sat', name: 'Ekādaśī Vrata — Mahā-Dvādaśī', fasting: 'Fasting from grains and beans', type: 'ekadashi' },
      { date: '6',  day: 'Sun', name: 'Śrī Sāraṅga Ṭhākura — Disappearance', type: 'disappearance' },
      { date: '20', day: 'Sun', name: 'Gītā Jayantī 📖 · *Vaikuṇṭha Ekādaśī*', fasting: 'Fasting from grains and beans', type: 'major' },
      { date: '27', day: 'Sun', name: 'Śrīla Bhaktisiddhānta Sarasvatī Ṭhākura — Disappearance', fasting: 'Fasting till noon', type: 'major' },
    ],
  },
  {
    id: 'jan-2027', label: 'January 2027', icon: '🌅',
    events: [
      { date: '3',   day: 'Sun', name: 'Fasting for Ekādaśī Vrata · Śrīla Devānanda Paṇḍita — Disappearance', fasting: 'Fasting from grains and beans', type: 'ekadashi' },
      { date: '5',   day: 'Tue', name: 'Śrī Maheśa Paṇḍita Disappearance · Śrī Uddhāraṇa Datta Ṭhākura — Disappearance', type: 'disappearance' },
      { date: '8',   day: 'Fri', name: 'Śrīla Locanā Dāsa Ṭhākura — Appearance', type: 'appearance' },
      { date: '11',  day: 'Mon', name: 'Śrīla Jīva Gosvāmī Disappearance · Śrī Jagadiśa Paṇḍita — Disappearance', type: 'disappearance' },
      { date: '13–14', day: 'Wed–Thu', name: 'Morning KB Pallaki in Mogappair (13) · Bhogi Pongal — Evening (13) · Thai Pongal 🌾 (14)', type: 'festival' },
      { date: '19',  day: 'Tue', name: 'Ekādaśī Vrata (Mahā-Dvādaśī)', fasting: 'Fasting from grains and beans', type: 'ekadashi' },
      { date: '20',  day: 'Wed', name: 'Śrīla Jagadiśa Paṇḍita — Appearance', type: 'appearance' },
      { date: '26–28', day: 'Tue–Thu', name: 'Śrī Rāmacandra Kavirāja Gosvāmī Disappearance (26) · Śrīla Gopāla Bhaṭṭa Gosvāmī Appearance (26) · Śrīla Jayadeva Gosvāmī Disappearance (27) · Śrīla Locanā Dāsa Ṭhākura Disappearance (28)', type: 'disappearance' },
    ],
  },
  {
    id: 'feb-2027', label: 'February 2027', icon: '🌷',
    events: [
      { date: '2',   day: 'Tue', name: 'Fasting for Ekādaśī Vrata', fasting: 'Break fast at next sunrise', type: 'ekadashi' },
      { date: '7',   day: 'Sun', name: 'Last Day of Book Distribution Marathon 📚', type: 'festival' },
      { date: '11',  day: 'Thu', name: 'Vasanta Pañcamī 🌸 · Dakshina Dwaraka Dham Varṣikotsava', type: 'major' },
      { date: '13',  day: 'Sat', name: 'Śrīla Advaita Ācārya — Appearance', fasting: 'Fasting till noon', type: 'appearance' },
      { date: '15–16', day: 'Mon–Tue', name: 'Śrīla Madhavācārya Disappearance (15) · Śrīla Rāmānujācārya — Disappearance (16)', type: 'disappearance' },
      { date: '17',  day: 'Wed', name: 'Ekādaśī Vrata', fasting: 'Fasting till noon + regular Ekādaśī fasting · Next day feast after sunrise', type: 'ekadashi' },
      { date: '18',  day: 'Thu', name: 'Varāha Dvādaśī 🐗', type: 'festival' },
      { date: '19',  day: 'Fri', name: 'Nityananda Trayodaśī 🌟 — Appearance of Śrī Nityananda Prabhu · Navaratna Sevā · Distribution of Prizes for Book Distribution Marathon', fasting: 'Fasting till noon', type: 'major' },
      { date: '21',  day: 'Sun', name: 'Śrīla Narottama Dāsa Ṭhākura — Appearance', type: 'appearance' },
      { date: '25',  day: 'Thu', name: 'Śrīla Bhaktisiddhānta Sarasvatī Ṭhākura — Appearance · Śrīla Puruṣottama Dāsa Ṭhākura — Disappearance', fasting: 'Fasting till noon', type: 'major' },
      { date: '27',  day: 'Sat', name: 'Rukmiṇī Dwarakādhīśa Ratha Yātrā, Chennai 🎡', type: 'major' },
    ],
  },
  {
    id: 'mar-2027', label: 'March 2027', icon: '🌈',
    events: [
      { date: '4',  day: 'Thu', name: 'Ekādaśī Vrata — Mahā-Dvādaśī', fasting: 'Fasting from grains and beans', type: 'ekadashi' },
      { date: '5',  day: 'Fri', name: 'Śrīla Īśvara Purī — Disappearance', type: 'disappearance' },
      { date: '9',  day: 'Tue', name: 'Śrīla Jagannātha Dāsa Bābājī Disappearance · Śrīla Rasikānanda — Disappearance', type: 'disappearance' },
      { date: '12', day: 'Fri', name: 'Śrīla Puruṣottama Dāsa Ṭhākura — Appearance', type: 'appearance' },
      { date: '18', day: 'Thu', name: 'Ekādaśī Vrata', fasting: 'Fasting from grains and beans', type: 'ekadashi' },
      { date: '19', day: 'Fri', name: 'Śrīla Mādhavendra Purī — Disappearance', type: 'disappearance' },
      { date: '21', day: 'Sun', name: 'Śrī Caitanya Rasotsava — Celebration of Śrī Gaura Pūrṇimā', type: 'festival' },
      { date: '22', day: 'Mon', name: 'Śrī Gaura Pūrṇimā 🌕 — Appearance of Śrī Caitanya Mahāprabhu', fasting: 'Fasting till moonrise', type: 'major' },
      { date: '23', day: 'Tue', name: 'Jagannātha Miśra Feast 🍛', type: 'festival' },
    ],
  },
]

// ─── Tag config ─────────────────────────────────────────────────────────────────
const TAG_CONFIG: Record<EventType, { label: string; className: string }> = {
  ekadashi:      { label: 'Ekadashi',      className: 'bg-amber-50 text-amber-800 border border-amber-300' },
  major:         { label: 'Major',         className: 'bg-[#701a1a]/10 text-[#701a1a] border border-[#701a1a]/30' },
  appearance:    { label: 'Appearance',    className: 'bg-emerald-50 text-emerald-800 border border-emerald-200' },
  disappearance: { label: 'Disappearance', className: 'bg-violet-50 text-violet-800 border border-violet-200' },
  festival:      { label: 'Festival',      className: 'bg-[#FFB81C]/10 text-[#b45309] border border-[#FFB81C]/40' },
  chaturmasya:   { label: 'Chaturmasya',   className: 'bg-teal-50 text-teal-800 border border-teal-200' },
}

const CARD_BG: Record<EventType, string> = {
  ekadashi:      'bg-amber-50/50 border-amber-200',
  major:         'bg-[#FFF9F0] border-[#ea580c]/20',
  appearance:    'bg-white border-stone-200',
  disappearance: 'bg-white border-stone-200',
  festival:      'bg-[#FFF9F0] border-[#FFB81C]/30',
  chaturmasya:   'bg-teal-50/40 border-teal-200',
}

const DATE_BG: Record<EventType, string> = {
  ekadashi:      'bg-amber-100/60',
  major:         'bg-[#ea580c]/10',
  appearance:    'bg-stone-100/60',
  disappearance: 'bg-violet-50/60',
  festival:      'bg-[#FFB81C]/10',
  chaturmasya:   'bg-teal-100/60',
}

// ─── JSON-LD structured data ─────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Vaishnava Calendar 2026–27',
  description: 'Complete Vaishnava festival calendar for 2026–2027 (Gaurabda 540) including all ISKCON festival dates, Ekadashi fasting days, and Vaishnava observances.',
  url: 'https://hkmchennai.org/temple/vaishnava-calendar',
  publisher: { '@type': 'Organization', name: 'Hare Krishna Movement Chennai', url: 'https://hkmchennai.org' },
  inLanguage: 'en',
  dateModified: '2026-04-21',
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function EventCard({ event }: { event: VEvent }) {
  const tag = TAG_CONFIG[event.type]
  const cardBg = CARD_BG[event.type]
  const dateBg = DATE_BG[event.type]

  return (
    <article
      className={`flex rounded-xl border ${cardBg} overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
      data-type={event.type}
    >
      <div className={`${dateBg} flex flex-col items-center justify-center px-4 py-4 min-w-[72px] border-r border-[#FFB81C]/20 flex-shrink-0`}>
        <span className="font-sans text-2xl font-bold text-[#ea580c] leading-none tabular-nums">{event.date}</span>
        <span className="font-sans text-[11px] tracking-widest uppercase text-stone-500 mt-1">{event.day}</span>
      </div>

      <div className="flex flex-col justify-center gap-1.5 px-5 py-4 flex-1 min-w-0">
        <div className="flex flex-col gap-1">
          {event.name.split('·').map((part, idx) => {
            const trimmed = part.trim()
            if (!trimmed) return null
            return (
              <p key={idx} className={`font-sans text-base leading-tight text-[#2D0A0A] font-medium ${event.strikethrough ? 'line-through decoration-[#2D0A0A]' : ''}`}>
                {trimmed}
              </p>
            )
          })}
        </div>
        {event.fasting && (
          <span className="inline-flex items-center text-xs text-[#701a1a] bg-[#FFF9F0] border border-[#FFB81C]/40 rounded px-2.5 py-1 w-fit font-medium">
            {event.fasting}
          </span>
        )}
      </div>

      <div className="hidden sm:flex items-center pr-4 flex-shrink-0">
        <span className={`text-[11px] font-semibold uppercase tracking-wide px-3 py-1 rounded-md ${tag.className}`}>
          {tag.label}
        </span>
      </div>
    </article>
  )
}

function MonthSection({ month }: { month: MonthData }) {
  return (
    <section id={month.id} className="mb-14 scroll-mt-20" aria-labelledby={`heading-${month.id}`}>
      <div className="flex items-center gap-4 mb-5 pb-3 border-b-2 border-[#FFB81C]/30">
        <div className="w-1.5 h-10 rounded-full bg-gradient-to-b from-[#ea580c] to-[#FFB81C] flex-shrink-0" />
        <div>
          <h2 id={`heading-${month.id}`} className="font-serif text-2xl md:text-3xl font-bold text-[#701a1a]">
            {month.label}
          </h2>
          <p className="text-sm text-stone-500 mt-0.5 [font-family:var(--font-poppins),ui-sans-serif,system-ui,sans-serif]">{month.events.length} observances</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {month.events.map((ev, i) => (
          <EventCard key={i} event={ev} />
        ))}
      </div>
    </section>
  )
}

// ─── Page (Server Component) ──────────────────────────────────────────────────
export default function VaishnavCalendarPage() {
  const months = CALENDAR

  return (
    <div className="min-h-screen bg-[#FFF9F0] font-sans antialiased [font-family:var(--font-poppins),ui-sans-serif,system-ui,sans-serif]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <VaishnavaCalendarHero />

      {/* ── QUICK JUMP ── */}
      <nav aria-label="Jump to month" className="py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          {months.map(m => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className="font-sans text-xs tracking-wide border border-[#FFB81C]/50 bg-white hover:bg-[#ea580c] hover:border-[#ea580c] hover:text-white text-[#701a1a] rounded-full px-4 py-2 transition-all duration-200"
            >
              {m.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── LEGEND ── */}
      <div className="max-w-5xl mx-auto px-6 mb-10">
        <div className="bg-white rounded-2xl border border-[#FFB81C]/30 p-5 flex flex-wrap gap-3 justify-center shadow-sm">
          {(Object.entries(TAG_CONFIG) as [EventType, typeof TAG_CONFIG[EventType]][]).map(([, cfg]) => (
            <span key={cfg.label} className={`text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-md ${cfg.className}`}>
              {cfg.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── CALENDAR MONTHS ── */}
      <main className="max-w-5xl mx-auto px-6 pb-20">
        {months.map(month => (
          <MonthSection key={month.id} month={month} />
        ))}
      </main>

      <Footer />
    </div>
  )
}
