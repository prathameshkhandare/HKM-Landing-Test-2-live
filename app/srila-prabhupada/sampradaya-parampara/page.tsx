"use client"

import React from "react"
import SrilaPrabhupadaLayout from "@/components/SrilaPrabhupadaLayout"

export default function ParamparaPage() {
  const acharyas = [
    "Krishna", "Brahma", "Narada", "Vyasa", "Madhva", "Padmanabha", "Nrihari", "Madhava", "Akshobhya", 
    "Jayatirtha", "Jnanasindhu", "Dayanidhi", "Vidyanidhi", "Rajendra", "Jayadharma", "Purushottama", 
    "Brahmanya Tirtha", "Vyasa Tirtha", "Lakshmipati", "Madhavendra Puri", "Isvara Puri (Nityananda, Advaita)", 
    "Lord Chaitanya Mahaprabhu", "Rupa (Svarupa, Sanatana)", "Raghunatha, Jiva", "Krishnadasa", 
    "Narottama", "Visvanatha", "(Baladeva) Jagannatha", "Bhaktivinoda", "Gaurakisora", 
    "Bhaktisiddhanta Sarasvati", "A. C. Bhaktivedanta Swami Prabhupada"
  ]

  return (
    <SrilaPrabhupadaLayout
      title="Guru Parampara"
      subtitle="The Disciplic Succession"
      heroImage="/assets/srila-prabhupada.png"
    >
      <h3 className="text-[#FBB201] mt-0 mb-6 font-bold text-2xl">The Authorized Process</h3>
      <p>
        The correct process of receiving knowledge in any field is by approaching a bona fide institute. Similarly, transcendental knowledge should be received through a bona fide disciplic succession.
      </p>

      <h3 className="text-[#FBB201] mt-12 mb-6 font-bold text-2xl">Guru Parampara</h3>
      <p>
        The original source of all Vedic knowledge is Supreme Lord Sri Krishna. From Him the Vedic knowledge has been passed on through the generations of pure devotees, who carefully carried this message without diluting or adulterating its essence. The authorized chain of spiritual master and disciple who transfer this transcendental knowledge while meticulously maintaining its purity and import is known as ‘Guru Parampara’.
      </p>

      <h3 className="text-[#FBB201] mt-12 mb-6 font-bold text-2xl">The Four Sampradayas</h3>
      <p>
        There are four authorized vaishnava sampradayas or schools of spirituality as enjoined in the Vedic scriptures. These four sampradayas originate from the Supreme Lord Sri Krishna.
      </p>
      <ul>
        <li><strong>Brahma Sampradaya</strong> (Originated from Lord Brahma)</li>
        <li><strong>Rudra Sampradaya</strong> (Originated from Lord Shiva)</li>
        <li><strong>Sri Sampradaya</strong> (Originated from Goddess Lakshmi)</li>
        <li><strong>Kumara Sampradaya</strong> (Originated from the Four Kumaras)</li>
      </ul>

      <h3 className="text-[#FBB201] mt-12 mb-6 font-bold text-2xl">Brahma Madhva Gaudiya Sampradaya</h3>
      <p>
        Hare Krishna Movement, established by HDG A.C. Bhaktivedanta Swami Prabhupada traces its roots in Brahma Madhva Gaudiya Sampradaya, headed by Lord Brahma.
      </p>
      <p>
        Lord Brahma is the foremost disciple of Lord Krishna. In Brahma Sampradaya, Sri Madhvacharya significantly contributed by writing a commentary on the Brahma-sutras. After this the sampradaya came to be known as the Brahma-Madhva-sampradaya. The Brahma-Madhva-sampradaya further spread to the present-day West Bengal, which was known as Gauda-desha so the sampradaya got its name, Brahma-Madhva-Gaudiya-sampradaya.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 my-10">
        <h4 className="text-2xl font-bold text-center mb-8 text-[#0078BF]">The Disciplic Succession</h4>
        <div className="flex flex-wrap justify-center gap-4">
            {acharyas.map((acharya, index) => (
                <div key={index} className="flex items-center">
                    <span className="bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-gray-700 border border-gray-100 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#FBB201] text-white flex items-center justify-center text-xs font-bold">{index + 1}</span>
                        {acharya}
                    </span>
                    {index < acharyas.length - 1 && (
                        <span className="text-gray-300 mx-2">→</span>
                    )}
                </div>
            ))}
        </div>
      </div>

    </SrilaPrabhupadaLayout>
  )
}
