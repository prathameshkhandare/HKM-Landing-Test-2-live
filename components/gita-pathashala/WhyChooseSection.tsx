'use client';

import { GraduationCap, Video, ListOrdered, MicVocal, Smile, Repeat, Gift, Flower2 } from 'lucide-react';

const features = [
  {
    icon: <GraduationCap strokeWidth={1.5} size={28} className="text-[#ea580c]" />,
    title: 'Experienced Teachers',
    body: 'Classes are conducted by dedicated teachers trained in Bhagavad-gītā and devotional education, associated with Hare Krishna Movement Chennai.',
  },
  {
    icon: <Video strokeWidth={1.5} size={28} className="text-[#ea580c]" />,
    title: 'Interactive Online Classes',
    body: 'Live Zoom sessions allow real-time interaction, so children can ask questions and teachers can correct pronunciation on the spot.',
  },
  {
    icon: <ListOrdered strokeWidth={1.5} size={28} className="text-[#ea580c]" />,
    title: 'Systematic Memorisation',
    body: 'A structured curriculum ensures children learn each shloka step-by-step, with regular revision built into every session.',
  },
  {
    icon: <MicVocal strokeWidth={1.5} size={28} className="text-[#ea580c]" />,
    title: 'Correct Sanskrit Pronunciation',
    body: 'Special attention is given to proper Sanskrit diction — a skill rarely taught elsewhere and invaluable for a child\'s cultural foundation.',
  },
  {
    icon: <Smile strokeWidth={1.5} size={28} className="text-[#ea580c]" />,
    title: 'Child-Friendly Teaching',
    body: 'The teaching style is warm, encouraging, and age-appropriate — making even complex verses feel accessible and fun for children aged 7–12.',
  },
  {
    icon: <Repeat strokeWidth={1.5} size={28} className="text-[#ea580c]" />,
    title: 'Regular Revision',
    body: 'Every class includes revision of previously learned verses, ensuring children retain what they have memorised over the 10-week programme.',
  },
  {
    icon: <Gift strokeWidth={1.5} size={28} className="text-[#ea580c]" />,
    title: 'Completely Free',
    body: 'Gītā Pathashālā is offered entirely free of charge — no registration fees, no material costs. Every child deserves access to this wisdom.',
  },
  {
    icon: <Flower2 strokeWidth={1.5} size={28} className="text-[#ea580c]" />,
    title: 'Spiritual & Cultural Enrichment',
    body: 'Beyond memorisation, children absorb the cultural heritage of India\'s most beloved scripture — connecting them to something timeless and profound.',
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#ea580c] font-sans font-bold text-xs tracking-[0.2em] uppercase mb-3">
            Our Commitment
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#2D0A0A] mb-4">
            Why Choose Gītā Pathashālā?
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-[#FBB201] to-[#ea580c] rounded-full" />
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-[#FFF9F0] rounded-3xl p-8 shadow-sm border border-orange-100 hover:shadow-[0_20px_50px_rgba(234,88,12,0.1)] hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-3xl mb-6 shadow-sm border border-orange-50 group-hover:scale-110 group-hover:bg-[#ea580c]/10 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="font-serif text-[#2D0A0A] text-xl font-bold mb-3 group-hover:text-[#ea580c] transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed font-sans">{f.body}</p>
            </div>
          ))}
        </div>

        {/* Decorative Callout */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-[#8B1C1C] to-[#3d0c0c] border border-[#5a1212] rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(251,178,1,0.1),transparent_70%)]" />
          <div className="absolute inset-0 opacity-10 bg-[url('/images/gita-pathashala/lotus-pattern.svg')] bg-repeat" />
          <img src="/images/gita-pathashala/gita_kid_praying.png" alt="Child praying" className="w-64 md:w-80 drop-shadow-2xl relative z-10 object-contain -my-4 md:-my-8" />
          <div className="text-center md:text-left mt-6 md:mt-0 md:ml-12 max-w-2xl relative z-10">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">Begin the Spiritual Journey</h3>
            <p className="text-[#FFF9F0]/90 text-lg md:text-xl leading-relaxed font-sans">
              Equip your child with timeless wisdom, unshakeable values, and the power of the Bhagavad-gītā. 
              Let them discover joy and peace through the beautiful verses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
