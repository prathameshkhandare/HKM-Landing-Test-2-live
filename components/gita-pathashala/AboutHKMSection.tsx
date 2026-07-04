'use client';

export default function AboutHKMSection() {
  return (
    <section className="bg-[#FFF9F0] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FBB201]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ea580c]/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-[#ea580c] font-sans font-bold text-xs tracking-[0.2em] uppercase mb-3">
              About the Organisation
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#2D0A0A] mb-6">
              Srila Prabhupada's ISKCON Thiruvanmiyur
            </h2>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-[#FBB201] to-[#ea580c] rounded-full" />
            </div>

            <div className="space-y-6 font-sans text-gray-800 leading-relaxed text-xl">
              <p>
                Dakṣiṇa Dwārakā Dhām is a project of Srila Prabhupada's ISKCON Thiruvanmiyur (HKM Chennai). We are rooted in the mission established by His Divine Grace A.C. Bhaktivedanta Swami Prabhupāda — to share the timeless wisdom of Bhagavad-gītā with every home.
              </p>
              <p>
                Our centre conducts a wide range of educational and devotional programmes for children, youth, and families — including value-education workshops, Bhagavad-gītā study groups, youth seminars, and festivals that celebrate India's rich spiritual culture.
              </p>
              <p>
                Gītā Pathashālā is an extension of this mission — bringing structured Bhagavad-gītā shloka learning directly into the homes of children across Chennai and beyond, entirely free of charge.
              </p>
            </div>

            <div className="mt-12 p-8 sm:p-10 border-l-4 border-[#FBB201] bg-[#8B1C1C] shadow-lg rounded-r-2xl">
              <p className="font-serif text-white text-2xl md:text-3xl italic leading-relaxed">
                "The goal of human life is to understand Kṛṣṇa and our eternal relationship with Him."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-10 h-0.5 bg-[#FBB201]" />
                <p className="text-[#FBB201] text-xs sm:text-sm font-sans tracking-[0.2em] uppercase font-bold">
                  His Divine Grace Vishwaguru A.C. Bhaktivedanta Swami Prabhupāda
                </p>
              </div>
            </div>
          </div>

          {/* Info cards */}
          <div className="space-y-6">
            {[
              {
                title: 'Children\'s Programmes',
                body: 'Age-appropriate Bhagavad-gītā education, shloka competitions, and value-based learning designed to nurture children\'s character from an early age.',
              },
              {
                title: 'Youth Programmes',
                body: 'Empowering the next generation with spiritual knowledge and practical life skills through seminars, retreats, and regular gatherings.',
              },
              {
                title: 'Family Cultivation',
                body: 'Guiding families in establishing a spiritual atmosphere at home, daily practices, and congregational chanting of the Holy Names.',
              },
            ].map((card, idx) => (
              <div
                key={card.title}
                className="bg-white border border-orange-100 rounded-3xl p-8 hover:shadow-[0_15px_40px_rgba(234,88,12,0.1)] hover:-translate-y-1 hover:border-orange-200 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 text-[#ea580c] font-sans font-bold flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <h3 className="font-serif text-[#2D0A0A] text-xl font-bold">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed font-sans pl-12">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
