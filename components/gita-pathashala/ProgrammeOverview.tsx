'use client';

import { Calendar, Clock, MonitorPlay, MessageCircle, Heart, Star, Sparkles, User, FileWarning } from 'lucide-react';

const details = [
  { label: 'Age Group', value: '7–12 Years', icon: <User size={24} className="text-[#ea580c]" /> },
  { label: 'Duration', value: '10 Weeks', icon: <Calendar size={24} className="text-[#ea580c]" /> },
  { label: 'Schedule', value: 'Mon & Fri · 5:00–5:30 PM', icon: <Clock size={24} className="text-[#ea580c]" /> },
  { label: 'Platform', value: 'Live on Zoom', icon: <MonitorPlay size={24} className="text-[#ea580c]" /> },
  { label: 'Language', value: 'Tamil / English', icon: <MessageCircle size={24} className="text-[#ea580c]" /> },
  { label: 'Fees', value: 'Free of Cost', icon: <Heart size={24} className="text-[#ea580c]" /> },
  { label: 'Batch Starts', value: '17th July', icon: <Sparkles size={24} className="text-[#ea580c]" /> },
  { label: 'Seats', value: 'Limited — Register Early', icon: <FileWarning size={24} className="text-[#ea580c]" /> },
];

const learnings = [
  'Correct Sanskrit pronunciation of each verse',
  'Complete memorisation of assigned shlokas',
  'Confident recitation with proper intonation',
  'Daily discipline through home practice',
  'Improved concentration and memory techniques',
  'Appreciation for the wisdom of Bhagavad-gītā',
  'Respectful and attentive learning habits',
  'A sense of cultural pride and spiritual identity',
];

export default function ProgrammeOverview() {
  return (
    <section id="programme" className="bg-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#ea580c] font-sans font-bold text-xs tracking-[0.2em] uppercase mb-3">
            Programme Details
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#2D0A0A] mb-4">
            Programme Overview
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-[#FBB201] to-[#ea580c] rounded-full" />
          </div>
          <p className="max-w-3xl mx-auto text-gray-700 text-xl md:text-2xl leading-relaxed font-sans">
            Over 10 weeks, children will systematically learn the prescribed verses from the
            First Chapter of Bhagavad-gītā through guided memorisation and proper recitation
            — two live sessions a week, each just 30 minutes long.
          </p>
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {details.map((d) => (
            <div
              key={d.label}
              className="bg-[#FFF9F0] border border-orange-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-[0_15px_40px_rgba(234,88,12,0.1)] hover:-translate-y-1 hover:border-orange-200 transition-all duration-300"
            >
              <div className="flex justify-center mb-3 bg-white w-12 h-12 rounded-full mx-auto items-center shadow-sm border border-orange-50">{d.icon}</div>
              <p className="text-[#ea580c] text-[10px] tracking-widest uppercase font-sans font-bold mb-1">
                {d.label}
              </p>
              <p className="text-[#2D0A0A] font-bold text-base md:text-lg font-sans">{d.value}</p>
            </div>
          ))}
        </div>

        {/* What children will learn & Teaching methodology */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start bg-white rounded-3xl border border-orange-100 p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          
          {/* What children will learn */}
          <div>
            <h3 className="font-serif text-3xl font-bold text-[#2D0A0A] mb-8 flex items-center gap-3">
              <Star className="text-[#FBB201]" fill="#FBB201" size={24} /> What Children Will Learn
            </h3>
            <ul className="space-y-4">
              {learnings.map((item) => (
                <li key={item} className="flex items-start gap-4 p-3 rounded-xl hover:bg-orange-50/50 transition-colors">
                  <span className="text-[#ea580c] mt-1 shrink-0">✦</span>
                  <span className="text-gray-800 text-lg md:text-xl leading-relaxed font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Teaching methodology */}
          <div>
            <h3 className="font-serif text-3xl font-bold text-[#2D0A0A] mb-8 flex items-center gap-3">
              <Sparkles className="text-[#FBB201]" fill="#FBB201" size={24} /> Teaching Methodology
            </h3>
            <ol className="space-y-6">
              {[
                ['Weekly Live Classes', 'Two 30-minute Zoom sessions every Monday and Friday.'],
                ['Interactive Teaching', 'Teachers explain the meaning and context of each verse.'],
                ['Pronunciation Correction', 'Real-time feedback ensures every child recites correctly.'],
                ['Guided Memorisation', 'Proven techniques help children memorise verses joyfully.'],
                ['Regular Revision', 'Each session revisits earlier verses to reinforce retention.'],
                ['Home Practice', 'Short daily practice (5–10 mins) consolidates learning.'],
                ['Encouragement', 'Children are celebrated for effort, building lasting confidence.'],
              ].map(([step, desc], i) => (
                <li key={step} className="flex gap-5 group">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFF9F0] border border-orange-200 text-[#ea580c] font-sans font-bold flex items-center justify-center shadow-sm group-hover:bg-[#ea580c] group-hover:text-white transition-colors">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-serif text-[#2D0A0A] text-xl font-bold group-hover:text-[#ea580c] transition-colors">{step}</p>
                    <p className="text-gray-700 text-lg leading-relaxed mt-1 font-sans">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          
        </div>
      </div>
    </section>
  );
}
