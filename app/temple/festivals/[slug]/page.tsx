import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const festivalData: Record<string, any> = {
  "ratha-yatra": {
    name: "Ratha Yatra",
    date: "June/July",
    month: "June or July",
    description:
      "Ratha Yatra is a grand chariot festival held annually where devotees pull the temple chariot through the streets of Chennai. This ancient festival celebrates Lord Jagannatha's journey and is one of the most significant events in the Krishna consciousness calendar.",
    significance:
      "This festival commemorates Lord Jagannatha's journey from the temple to the countryside. Devotees believe that participating in pulling the chariot brings spiritual merit and divine blessings. The festival represents the Lord's desire to be accessible to all people.",
    participation:
      "Devotees of all ages participate in pulling the chariot with devotion and enthusiasm. The festival includes kirtan (chanting), dancing, and distribution of prasadam. Everyone is welcome to join this joyous celebration.",
    localTradition:
      "In Chennai, our Ratha Yatra is celebrated with great pomp and involves the entire community. The chariot is decorated beautifully, and the streets are filled with devotees chanting the Hare Krishna mantra.",
  },
  janmashtami: {
    name: "Sri Krishna Janmashtami",
    date: "August/September",
    month: "August or September",
    description:
      "Sri Krishna Janmashtami celebrates the birth of Lord Krishna, the Supreme Personality of Godhead. This is one of the most important festivals in the Hindu calendar and is observed with great devotion and joy.",
    significance:
      "Janmashtami marks the appearance of Krishna on earth. According to the Bhagavad Gita, Krishna appears in every age to protect the righteous and destroy the wicked. His birth is celebrated as the most auspicious event.",
    participation:
      "Devotees fast throughout the day and break their fast at midnight when Krishna is believed to have been born. The temple holds special arati, kirtan, and distribution of sweets and prasadam.",
    localTradition:
      "Our Chennai temple celebrates with elaborate decorations, special bhog (food offerings), and community gatherings. Devotees dress in traditional attire and participate in midnight celebrations.",
  },
  varshikotsava: {
    name: "Varshikotsava",
    date: "September",
    month: "September",
    description:
      "Varshikotsavam is an annual festival celebrated to commemorate the appearance of the Deities. The Deity is transcendental, and the festival signifies special mercy and community service.",
    significance:
      "In 2009, the Supreme Lord descended in Valmiki Nagar, Thiruvanmiyur, celebrated by devotees annually. This festival marks the anniversary of the Deity's installation and is a time of great celebration and gratitude.",
    participation:
      "Devotees participate in special pujas, kirtan, and community service. The festival includes feasts, cultural programs, and spiritual discourses.",
    localTradition:
      "Our temple celebrates Varshikotsava with special decorations, elaborate offerings, and community gatherings. It is a time when the entire devotee community comes together to express gratitude to the Lord.",
  },
  "balarama-purnima": {
    name: "Balarama Purnima",
    date: "August",
    month: "August",
    description:
      "Balarama Purnima celebrates the appearance of Lord Balarama, Krishna's elder brother and an incarnation of Adisesha (the cosmic serpent).",
    significance:
      "Balarama is worshipped as the source of all strength and the protector of devotees. His appearance is celebrated as an important event in the Krishna consciousness tradition.",
    participation:
      "Devotees offer special prayers and perform arati. The festival includes kirtan, prasadam distribution, and spiritual discourses about Balarama's role in Krishna's pastimes.",
    localTradition:
      "Our temple celebrates with special decorations and community gatherings, honoring Balarama's divine qualities.",
  },
  "panihati-chida-dahi": {
    name: "Panihati Chida-Dahi Utsava",
    date: "June",
    month: "June",
    description:
      "This festival celebrates the pastime of Lord Nityananda offering chida (flattened rice) and dahi (yogurt) to devotees in Panihati.",
    significance:
      "The festival represents the Lord's mercy and the importance of prasadam. It celebrates the principle of sharing spiritual food with all.",
    participation:
      "Devotees prepare and distribute chida and dahi, recreating the divine pastime. The festival emphasizes community service and sharing.",
    localTradition:
      "Our temple celebrates by distributing chida and dahi to all visitors, embodying the spirit of generosity and spiritual sharing.",
  },
  "vyasa-puja": {
    name: "Vyasa Puja",
    date: "September",
    month: "September",
    description:
      "Vyasa Puja celebrates the appearance of Srila Prabhupada, the founder of ISKCON and our spiritual master.",
    significance:
      "This festival honors the guru principle and the transmission of spiritual knowledge. Srila Prabhupada is revered as the deliverer of Krishna consciousness to the modern world.",
    participation:
      "Devotees offer flowers, incense, and prayers to honor Srila Prabhupada's contributions. The festival includes kirtan, discourses, and community celebrations.",
    localTradition:
      "Our temple celebrates with special arati, distribution of prasadam, and remembrance of Srila Prabhupada's teachings.",
  },
  "narasimha-jayanti": {
    name: "Sri Narasimha Jayanti",
    date: "May",
    month: "May",
    description:
      "Sri Narasimha Jayanti celebrates the appearance of Lord Narasimha, the half-man, half-lion incarnation of Krishna.",
    significance:
      "Narasimha represents the Lord's protection of His devotees. He appeared to protect Prahlad from his demoniac father.",
    participation:
      "Devotees offer prayers for protection and strength. The festival includes special arati and kirtan.",
    localTradition: "Our temple celebrates with special decorations and prayers for divine protection.",
  },
  "govardhana-puja": {
    name: "Govardhana Puja",
    date: "October/November",
    month: "October or November",
    description:
      "Govardhana Puja celebrates Krishna's lifting of Govardhana Hill to protect the residents of Vrindavan from torrential rains.",
    significance:
      "This pastime demonstrates Krishna's power and His protection of His devotees. The festival celebrates the principle of surrender to Krishna.",
    participation:
      "Devotees create a representation of Govardhana Hill and circumambulate it. The festival includes kirtan and prasadam distribution.",
    localTradition: "Our temple celebrates with special pujas and community gatherings.",
  },
  deepotsava: {
    name: "Deepotsava",
    date: "October/November",
    month: "October or November",
    description: "Deepotsava, also known as Diwali, celebrates the victory of light over darkness and good over evil.",
    significance:
      "This festival commemorates Lord Rama's return from exile and represents the triumph of righteousness.",
    participation:
      "Devotees light lamps, exchange gifts, and celebrate with family and friends. The temple is beautifully illuminated.",
    localTradition: "Our temple celebrates with special decorations, lamps, and community festivities.",
  },
  "vamana-jayanti": {
    name: "Vamana Jayanti",
    date: "August",
    month: "August",
    description: "Vamana Jayanti celebrates the appearance of Lord Vamana, the dwarf incarnation of Krishna.",
    significance: "This pastime demonstrates Krishna's humility and His ability to accomplish great feats in any form.",
    participation: "Devotees offer special prayers and participate in kirtan.",
    localTradition: "Our temple celebrates with special arati and community gatherings.",
  },
  "gaura-purnima": {
    name: "Sri Gaura Purnima",
    date: "March/April",
    month: "March or April",
    description:
      "Sri Gaura Purnima celebrates the appearance of Lord Chaitanya Mahaprabhu, who is Krishna in the form of a devotee.",
    significance:
      "Lord Chaitanya introduced the congregational chanting of the Hare Krishna mantra as the primary spiritual practice for this age.",
    participation:
      "Devotees celebrate with kirtan, dancing, and feasting. The festival emphasizes the importance of chanting.",
    localTradition: "Our temple celebrates with special kirtan sessions and community gatherings.",
  },
  "rama-navami": {
    name: "Sri Rama Navami",
    date: "March/April",
    month: "March or April",
    description:
      "Sri Rama Navami celebrates the appearance of Lord Rama, the ideal king and an incarnation of Krishna.",
    significance: "Lord Rama represents dharma (righteousness) and is worshipped as the embodiment of virtue.",
    participation:
      "Devotees offer prayers and participate in kirtan. The festival includes recitation of the Ramayana.",
    localTradition: "Our temple celebrates with special arati and community gatherings.",
  },
  radhashtami: {
    name: "Sri Radhashtami",
    date: "August/September",
    month: "August or September",
    description:
      "Sri Radhashtami celebrates the appearance of Srimati Radharani, Krishna's eternal consort and the embodiment of devotion.",
    significance:
      "Radharani represents the highest form of devotion to Krishna. Her love and service are the ideal for all devotees.",
    participation:
      "Devotees offer special prayers and flowers to Radharani. The festival includes kirtan and prasadam distribution.",
    localTradition: "Our temple celebrates with special decorations and community gatherings.",
  },
  "nityananda-trayodashi": {
    name: "Sri Nityananda Trayodashi",
    date: "February",
    month: "February",
    description:
      "Sri Nityananda Trayodashi celebrates the appearance of Lord Nityananda, the eternal associate of Lord Chaitanya.",
    significance:
      "Nityananda represents the principle of mercy and is known for His compassion toward all living beings.",
    participation: "Devotees celebrate with kirtan and community gatherings.",
    localTradition: "Our temple celebrates with special arati and prayers.",
  },
}

export default function FestivalPage({ params }: { params: { slug: string } }) {
  const festival = festivalData[params.slug]

  if (!festival) {
    return (
      <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A]">
        <NavbarDemo />
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Festival Not Found</h1>
          <Link href="/temple" className="text-[#1B7CB8] hover:underline">
            Back to Temple
          </Link>
        </div>
        <FooterSection />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A]">
      <NavbarDemo />

      {/* Hero Section */}
      <section
        className="relative py-20 px-4 md:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/sacred-hindu-festival-celebration.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">{festival.name}</h1>
          <p className="text-xl md:text-2xl text-gray-100">Celebrated in {festival.month}</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border-[#FFB81C] border-2">
            <CardHeader className="bg-[#FFF9F0]">
              <CardTitle className="text-[#1B7CB8]">When</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-[#666666]">{festival.date}</p>
            </CardContent>
          </Card>

          <Card className="border-[#E8725C] border-2">
            <CardHeader className="bg-[#FFF9F0]">
              <CardTitle className="text-[#1B7CB8]">Significance</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-[#666666] text-sm">{festival.significance}</p>
            </CardContent>
          </Card>

          <Card className="border-[#1B7CB8] border-2">
            <CardHeader className="bg-[#FFF9F0]">
              <CardTitle className="text-[#1B7CB8]">All Welcome</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-[#666666] text-sm">
                Join us in celebrating this sacred festival with devotion and joy.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg p-8 border-l-4 border-[#FFB81C]">
            <h2 className="text-2xl font-bold mb-4 text-[#1B7CB8]">About This Festival</h2>
            <p className="text-[#666666] leading-relaxed">{festival.description}</p>
          </div>

          <div className="bg-white rounded-lg p-8 border-l-4 border-[#E8725C]">
            <h2 className="text-2xl font-bold mb-4 text-[#1B7CB8]">How to Participate</h2>
            <p className="text-[#666666] leading-relaxed">{festival.participation}</p>
          </div>

          <div className="bg-white rounded-lg p-8 border-l-4 border-[#1B7CB8]">
            <h2 className="text-2xl font-bold mb-4 text-[#1B7CB8]">Our Chennai Tradition</h2>
            <p className="text-[#666666] leading-relaxed">{festival.localTradition}</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/temple"
            className="inline-block px-8 py-3 bg-[#1B7CB8] text-white rounded-lg hover:bg-[#E8725C] transition-colors"
          >
            Back to Temple
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
