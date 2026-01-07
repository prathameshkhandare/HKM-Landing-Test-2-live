import SrilaPrabhupadaLayout from "@/components/SrilaPrabhupadaLayout"
import SrilaPrabhupadaHeader from "@/components/SrilaPrabhupadaHeader"
import { Timeline, PhilosophyCardGrid, QuoteHighlight, PrincipleList } from "@/components/PhilosophyWidgets"
import Link from "next/link"
import { motion } from "framer-motion"

export default function SrilaPrabhupadaPage() {
  
  const biographyEvents = [
    {
        title: "Childhood (1896)",
        text: "Srila Prabhupada was born on September 1, 1896, in Calcutta as Abhay Charan. His parents, Gour Mohan De and Rajani Devi, were ardent devotees of Lord Krishna. His father's only wish was that Abhay should become a devotee of Srimati Radharani."
    },
    {
        title: "Youth & Education",
        text: "Abhay studied at Scottish Churches' College. He supported Gandhi’s non-cooperation movement, wearing khadi and declining his degree. In 1918, he married Radharani Devi and later started a pharmaceutical business."
    },
    {
        title: "Meeting the Spiritual Master (1922)",
        text: "He met Srila Bhaktisiddhanta Sarasvati Goswami in Calcutta. At their very first meeting, he was advised to preach Krishna consciousness to the English-speaking world. He accepted him as his spiritual master in his heart immediately."
    },
    {
        title: "Initiation & Preaching (1933-1950s)",
        text: "He took formal initiation in 1933. In 1944, he started 'Back to Godhead' magazine single-handedly. In 1950, he accepted vanaprastha (retired life) to devote more time to studies and writing."
    },
    {
        title: "Renounced Order (1959)",
        text: "He took sannyasa in 1959. Living at the Radha-Damodara temple in Vrindavan, he began his masterpiece: the English translation and commentary of the Srimad Bhagavatam."
    }
  ]

  const achievements = [
    {
        icon: "globe",
        title: "Voyage to the West",
        description: "In 1965, at age 69, he traveled to New York on the cargo ship Jaladuta. Suffering two heart attacks and arriving with just 40 rupees, he carried the order of his spiritual master to spread Krishna consciousness globally."
    },
    {
        icon: "star",
        title: "Founding ISKCON",
        description: "In July 1966, he established the International Society for Krishna Consciousness (ISKCON) in New York. From a small storefront, it grew into a worldwide movement."
    },
    {
        icon: "scale",
        title: "Global Expansion",
        description: "By 1967, he had established centers in San Francisco, Montreal, London, and beyond. He envisioned magnificent temples in Vrindavan, Bombay, and Mayapur."
    },
    {
        icon: "zap",
        title: "Literary Legacy",
        description: "He wrote over 60 volumes of authoritative translations and commentaries on Vedic scriptures, including the Bhagavad-gita As It Is and Srimad Bhagavatam. His books are translated into over 80 languages."
    }
  ]

  return (
    <SrilaPrabhupadaLayout
      title="Srila Prabhupada"
      subtitle="The Founder-Acharya of the International Society for Krishna Consciousness"
      heroImage="/assets/srila-prabhupada.png"
      customHeader={<SrilaPrabhupadaHeader />}
    >
      {/* Introduction Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-[#ea580c] font-bold tracking-widest uppercase text-sm mb-2 block">The Life of a Pure Devotee</span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#2D0A0A] mb-6">His Divine Grace A. C. Bhaktivedanta Swami Prabhupada</h2>
          <p className="text-xl text-gray-600 leading-relaxed font-serif italic">
              "He built a house in which the whole world can live."
          </p>
      </div>

      {/* Biography Timeline */}
      <div className="mb-24">
          <h3 className="text-3xl font-bold text-[#701a1a] mb-8 font-serif border-l-4 border-[#ea580c] pl-4">A Brief Life Sketch</h3>
          <Timeline items={biographyEvents} />
      </div>

      {/* Quote Highlight */}
      <QuoteHighlight 
        text="Preach Krishna consciousness to the English speaking world."
        author="Srila Bhaktisiddhanta Sarasvati Thakura (1922)"
      />

      {/* Global Achievements Grid */}
      <div className="mb-24">
           <h3 className="text-3xl font-bold text-[#701a1a] mb-8 font-serif border-l-4 border-[#ea580c] pl-4">Transcendental Achievements</h3>
           <PhilosophyCardGrid items={achievements} />
      </div>

      {/* Video Section */}
      <div className="mb-24 relative p-4 rounded-3xl bg-gradient-to-br from-[#2D0A0A] to-[#4a0d0d] shadow-2xl">
          <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-10 bg-repeat"></div>
          <div className="relative z-10 aspect-video rounded-2xl overflow-hidden border border-[#fbbf24]/20">
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/EtWO3eghiOM" 
                title="The Life of Srila Prabhupada" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
          </div>
          <div className="text-center mt-6">
              <p className="text-[#fbbf24] font-bold uppercase tracking-widest text-sm">Featured Documentary</p>
              <h4 className="text-white text-2xl font-serif mt-2">The Life of Srila Prabhupada</h4>
          </div>
      </div>

      {/* Conclusion / Legacy */}
      <div className="bg-[#FFF9F0] p-10 rounded-2xl border border-[#fbbf24]/30 shadow-lg text-center">
           <h3 className="text-3xl font-bold text-[#701a1a] mb-6 font-serif">A Legacy that Lives On</h3>
           <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                In the short time he spent in the West, Srila Prabhupada preached continuously, established 108 temples, wrote more than sixty volumes of transcendental literature, initiated five thousand disciples, founded the Bhaktivedanta Book Trust, and began a scientific academy. His contribution to the spiritual welfare of humanity is immeasurable.
           </p>
           <Link href="/srila-prabhupada/achievements" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white rounded-full hover:shadow-xl hover:scale-105 transition-all font-bold uppercase tracking-wide">
                View Detailed Achievements
           </Link>
      </div>

    </SrilaPrabhupadaLayout>
  )
}
