"use client"

import React from "react"
import SrilaPrabhupadaLayout from "@/components/SrilaPrabhupadaLayout"
import Link from "next/link"

export default function SrilaPrabhupadaPage() {
  return (
    <SrilaPrabhupadaLayout
      title="Srila Prabhupada"
      subtitle="The Founder-Acharya of the International Society for Krishna Consciousness"
      heroImage="/assets/srila-prabhupada.png"
    >
      <h3 className="text-[#FBB201] mt-0 mb-6 font-bold text-2xl">His Divine Grace A. C. Bhaktivedanta Swami Prabhupada</h3>
      
      <div className="float-right ml-8 mb-8 w-64 p-2 bg-white rounded-xl shadow-lg border border-gray-100 transform rotate-2">
        <img 
            src="/assets/srila-prabhupada.png" 
            alt="Srila Prabhupada" 
            className="w-full h-auto rounded-lg"
        />
        <p className="text-center text-xs text-gray-500 mt-2 font-serif italic">Founder-Acharya of ISKCON</p>
      </div>

      <p>
        <strong>Detailed Biography: A Brief Life Sketch</strong>
      </p>

      <h3 className="text-[#FBB201] mt-12 mb-6 font-bold text-2xl">Childhood</h3>
      <p>
        Srila Prabhupada, was born on September 1, 1896, in Calcutta and named by his father as Abhay Charan. His father Gour Mohan De and mother Rajani Devi were ardent devotees of Lord Krishna and they brought him up with the same fervor. They belonged to one of the very respectable aristocratic families of gold merchants in Calcutta. His father’s only wish was that Abhay should become a devotee of Srimati Radharani.
      </p>
      
      <h3 className="text-[#FBB201] mt-12 mb-6 font-bold text-2xl">Youth and Married Life</h3>
      <p>
        Abhay studied in Scottish Churches’ College during the British rule and went to the university to learn chemistry. During this period, he became a supporter of Gandhi’s non-cooperation movement for gaining independence and would only dress in khadi, and he even declined to accept his degree from the university under the British rule. In the year 1918, Abhay married Radharani Devi and later he started his own pharmaceutical company.
      </p>

      <h3 className="text-[#FBB201] mt-12 mb-6 font-bold text-2xl">Meeting His Spiritual Master</h3>
      <p>
        He met his spiritual master, Srila Bhaktisiddhanta Sarasvati Goswami for the first time in Calcutta in 1922. At the very first meeting Bhaktisiddhanta Sarasvati advised Abhay to preach the message of Krishna to the western world. On his very first meeting, Abhay accepted Srila Bhaktisiddhanta as his spiritual master within his heart, but could take formal initiation only in 1932.
      </p>
      <p>
        In 1936, Srila Prabhupada wrote to his spiritual master requesting for any particular service that he could offer. In response he received a reply containing the same instruction that he had received in 1922: ‘Preach Krishna consciousness to the English speaking world.’ Srila Prabhupada took these instructions as his life and soul.
      </p>
      <p>
        As a beginning step, he started a magazine called Back to Godhead. Single-handedly he wrote, edited, oversaw the layout, proof-read and sold the copies himself. This magazine is still being published today.
      </p>

      <h3 className="text-[#FBB201] mt-12 mb-6 font-bold text-2xl">Retired Life</h3>
      <p>
        In 1950, Srila Prabhupada accepted vanaprastha (retired) life, in order to devote more time to his spiritual studies. In 1953, he received the title “Bhaktivedanta” from his God brothers, which means “one who has understood the import of the Vedanta and is firmly fixed up in bhakti”. He traveled to Vrindavana and lived at the Radha-Damodara temple.
      </p>

      <h3 className="text-[#FBB201] mt-12 mb-6 font-bold text-2xl">Renounced Order of Life</h3>
      <p>
        Nine years later in 1959 he took sannyasa, the renounced order of life. It was during his stay at the Radha-Damodara temple that he started writing his masterpiece: the translation and commentary of the Srimad Bhagavatam in English. He also wrote ‘Easy Journey to Other Planets’. Within a span of few years, he had written three volumes of English translation and a commentary for the first canto of the Srimad Bhagavatam.
      </p>

      <h3 className="text-[#FBB201] mt-12 mb-6 font-bold text-2xl">Voyage to the West</h3>
      <p>
        All these years he was constantly contemplating over the order of his spiritual master to preach in the western world. He decided to start by taking the message of Krishna consciousness to America. In 1965 at the age of 69 he arrived in New York by a cargo ship called Jaladuta. He suffered two massive heart attacks during the voyage. He was practically penniless and possessed only a few copies of his commentaries on the Srimad Bhagavatam and forty rupees.
      </p>
      <p>
        After a difficult six months, his few followers rented a storefront and apartment in Manhattan where he regularly gave lectures, held kirtanas and distributed prasadam. People from all walks of life, including hippies got attracted to “Swamiji” and became his followers. These followers gradually took initiation from him became his disciples. Srila Prabhupada also reinstated the Back to Godhead magazine.
      </p>

       {/* Video Section */}
       <div className="my-10 aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-gray-200">
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

      <h3 className="text-[#FBB201] mt-12 mb-6 font-bold text-2xl">Establishment of ISKCON</h3>
      <p>
        In July 1966, Srila Prabhupada established the International Society for Krishna Consciousness — ISKCON in New York. His aim was to use the society to promote Krishna consciousness throughout the world.
      </p>
      <p>
        In 1967, he visited San Francisco and started an ISKCON society there. He then sent his disciples all over the world to spread Chaitanya Mahaprabhu’s message and open new centers in Montreal, Boston, London, Berlin, and other cities in North America, India, and Europe. In India, three magnificent temples were initially planned: Vrindavana, the Krishna Balarama temple with all its ancillary facilities; Bombay, a temple with an educational and cultural centre; and in Mayapur, a huge temple with a Vedic planetarium.
      </p>

      <h3 className="text-[#FBB201] mt-12 mb-6 font-bold text-2xl">Literary Contribution</h3>
      <p>
        Srila Prabhupada produced all his books, barring the three written in India, within the next eleven years. He slept little and spent the early morning hours writing. He wrote almost daily between 1:30 and 4:30 a.m. He dictated his text which his disciples then typed and edited. Srila Prabhupada translated the original texts from Sanskrit or Bengali, word by word, and gave a complete commentary.
      </p>
      <p>
        In the short time he spent in the West, he preached continuously, established 108 temples, wrote more than sixty volumes of transcendental literature, initiated five thousand disciples, founded the Bhaktivedanta Book Trust, and began a scientific academy (the Bhaktivedanta Institute) and other trusts related to ISKCON.
      </p>

      <div className="mt-8 not-prose">
        <Link href="/srila-prabhupada/achievements" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0078BF] text-white rounded-lg hover:bg-[#006099] transition-colors font-medium">
            View detailed Achievements
        </Link>
      </div>

    </SrilaPrabhupadaLayout>
  )
}
