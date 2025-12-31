"use client"

import React from "react"
import SrilaPrabhupadaLayout from "@/components/SrilaPrabhupadaLayout"
import { Book } from "lucide-react"

export default function BooksPage() {
  const books = [
    { title: "Bhagavad-gita As It Is", desc: "The most widely read edition of the Gita in the world." },
    { title: "Srimad Bhagavatam", desc: "The postgraduate study of the science of Godhead (18,000 verses)." },
    { title: "Sri Chaitanya Charitamrita", desc: "The life and precepts of Sri Chaitanya Mahaprabhu." },
    { title: "Nectar of Devotion", desc: "A summary study of Bhakti-rasamrita-sindhu." },
    { title: "Sri Isopanishad", desc: "The knowledge that brings one nearer to the Supreme Personality of Godhead." },
  ]

  return (
    <SrilaPrabhupadaLayout
      title="Books"
      subtitle="The Basis of the Krishna Consciousness Movement"
      heroImage="/assets/Magazine-pic.jpg"
    >
      <h3 className="text-[#FBB201] mt-0 mb-6 font-bold text-2xl">Srila Prabhupada and His Books</h3>
      <p>
        Srila Prabhupada met his spiritual master, Srila Bhaktisiddhanta Sarasvati Thakura in Vrindavana. In a private meeting Srila Prabhupada’s spiritual master told him in 1935, <em>“I have a desire to print some books. If you ever get money, print books.”</em> 
      </p>
      <p>
        Srila Prabhupada always stressed this point and with the help of his disciples he published many books in English which includes the commentary on Indian classics like Bhagavad-gita, Srimad Bhagavatam and Chaitanya Charitamrita.
      </p>

      <h3 className="text-[#FBB201] mt-12 mb-6 font-bold text-2xl">Bhaktivedanta Book Trust</h3>
      <p>
        Of all his contributions, Srila Prabhupada considered his books to be of utmost importance. He insisted that his disciples read these books, discuss among themselves, understand it and practically apply it in their lives. He considered these books to be the basis of the Krishna Consciousness Movement.
      </p>
      <p>
        In 1970, Srila Prabhupada founded the Bhaktivedanta Book Trust (BBT), now the world’s largest publisher of Vedic literature. Srila Prabhupada wanted his books to be translated in all languages and today they are available in more than 80 languages.
      </p>

      <div className="my-10">
        <h4 className="text-2xl font-bold text-[#0078BF] mb-6">Major Publications</h4>
        <div className="grid gap-4">
            {books.map((book, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-white shadow-sm border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                    <div className="bg-[#FBB201] p-2 rounded text-white">
                        <Book size={24} />
                    </div>
                    <div>
                        <h5 className="font-bold text-lg text-gray-800">{book.title}</h5>
                        <p className="text-gray-600 text-sm">{book.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

      <p>
        The Krishna Consciousness Movement is firmly based upon the conclusive truths found in the books of Srila Prabhupada. Bhagavad-gita As it is, Srimad Bhagavatam and Sri Chaitanya Charitamrita are the three major texts that contain the essence of Vedic knowledge.
      </p>
      
      <blockquote>
        "These books can change your life. Try it out."
      </blockquote>

    </SrilaPrabhupadaLayout>
  )
}
