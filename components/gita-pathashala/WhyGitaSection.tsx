'use client';

import { Brain, BookOpen, Mic, Leaf, BookType, Clock, HeartHandshake, Users } from 'lucide-react';

const benefits = [
  {
    icon: <Brain strokeWidth={1.5} size={28} className="text-[#ea580c]" />,
    title: 'Sharpens Concentration',
    body:
      'Memorising Sanskrit verses requires focused attention and repetition — skills that naturally strengthen a child\'s ability to concentrate in school and life.',
  },
  {
    icon: <BookOpen strokeWidth={1.5} size={28} className="text-[#ea580c]" />,
    title: 'Builds Memory',
    body:
      'Learning shlokas trains the memory in a structured, joyful way. Children who memorise verses regularly often show measurable improvement in retention across subjects.',
  },
  {
    icon: <Mic strokeWidth={1.5} size={28} className="text-[#ea580c]" />,
    title: 'Develops Confidence',
    body:
      'Reciting before a group — even on Zoom — builds the courage to speak clearly and the pride of knowing something meaningful by heart.',
  },
  {
    icon: <Leaf strokeWidth={1.5} size={28} className="text-[#ea580c]" />,
    title: 'Instils Values',
    body:
      'The Bhagavad-gītā teaches duty, equanimity, and reverence for life. These values, absorbed early, become a quiet compass throughout a child\'s growing years.',
  },
  {
    icon: <BookType strokeWidth={1.5} size={28} className="text-[#ea580c]" />,
    title: 'Sanskrit Pronunciation',
    body:
      'Correct pronunciation of Sanskrit is a gift that lasts a lifetime — opening doors to heritage, culture, and a deeper connection with India\'s spiritual tradition.',
  },
  {
    icon: <Clock strokeWidth={1.5} size={28} className="text-[#ea580c]" />,
    title: 'Positive Use of Time',
    body:
      'Twice a week, children step away from screens and into a structured, purposeful online class — turning screen time into learning time.',
  },
  {
    icon: <HeartHandshake strokeWidth={1.5} size={28} className="text-[#ea580c]" />,
    title: 'Respectful Learning Habits',
    body:
      'The atmosphere of Vedic education cultivates courtesy, patience, and reverence — qualities that make children a joy to teach and a pleasure to be around.',
  },
  {
    icon: <Users strokeWidth={1.5} size={28} className="text-[#ea580c]" />,
    title: 'Shared Family Practice',
    body:
      'When children learn shlokas, families often practise together. Many parents find this a beautiful way to reconnect with their own cultural roots.',
  },
];

export default function WhyGitaSection() {
  return (
    <section className="bg-[#FFF9F0] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FBB201]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ea580c]/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#ea580c] font-sans font-bold text-xs tracking-[0.2em] uppercase mb-3">
            The Ancient Gift
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#2D0A0A] mb-4">
            Why Bhagavad-gītā for Children?
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-[#FBB201] to-[#ea580c] rounded-full" />
          </div>
          <p className="max-w-2xl mx-auto text-[#2D0A0A]/80 text-lg sm:text-xl leading-relaxed font-serif">
            The Bhagavad-gītā is not just a scripture — it is a manual for living with purpose and
            clarity. Teaching it to children at a young age plants seeds that flower throughout
            their lives.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-orange-50 hover:shadow-[0_20px_50px_rgba(234,88,12,0.1)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Card top gradient line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FBB201] to-[#ea580c] opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 group-hover:bg-[#ea580c]/10 transition-transform duration-300 border border-orange-100">
                {b.icon}
              </div>
              <h3 className="font-serif text-[#2D0A0A] text-xl font-bold mb-3 group-hover:text-[#ea580c] transition-colors">
                {b.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed font-sans">{b.body}</p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="mt-20 bg-gradient-to-br from-[#8B1C1C] to-[#3d0c0c] rounded-3xl p-10 sm:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/gita-pathashala/lotus-pattern.svg')] bg-repeat" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)] mix-blend-screen" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <img src="/images/gita-pathashala/gita_kid_learning.png" alt="Child learning Bhagavad Gita" className="w-64 md:w-80 lg:w-96 drop-shadow-2xl object-contain -my-4 md:-my-12 lg:-my-16" />
            <div className="text-center md:text-left">
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBB201] font-bold leading-[1.4] mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] space-y-3">
                <p className="text-[#FBB201]">धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।</p>
                <p className="text-[#FBB201]">मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ॥ १ ॥</p>
              </div>
              <p className="text-white text-base sm:text-lg tracking-[0.3em] font-sans font-bold uppercase drop-shadow-md">
                — Bhagavad-gītā
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
