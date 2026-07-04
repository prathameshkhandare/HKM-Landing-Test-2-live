'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a1628]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gita-pathashala/krishna-arjuna-hero.png"
          alt="Lord Krishna and Arjuna on the battlefield of Kurukshetra"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/60 to-[#0a1628]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-[#0a1628]/40" />
      </div>

      {/* Organisation header bar */}
      <div className="relative z-10 bg-[#0a1628]/80 border-b border-[#c9a84c]/30 py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <p className="text-[#c9a84c] text-xs font-light tracking-widest uppercase">
            Dakṣiṇa Dwārakā Dhām — Hare Krishna Movement Chennai
          </p>
          <p className="text-[#c9a84c]/70 text-xs tracking-wide">
            Affiliated to ISKCON Bangalore · Regn. S-49/78-79
          </p>
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="max-w-2xl">
            {/* Ornamental divider top */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-[#c9a84c]" />
              <span className="text-[#c9a84c] text-lg">✦</span>
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-transparent to-[#c9a84c]" />
            </div>

            {/* Programme name */}
            <h1 className="font-['Cinzel',serif] text-5xl sm:text-6xl lg:text-7xl font-bold text-[#e8d5a3] leading-tight tracking-wide mb-2">
              Gītā
            </h1>
            <h1 className="font-['Cinzel',serif] text-5xl sm:text-6xl lg:text-7xl font-bold text-[#c9a84c] leading-tight tracking-wide mb-6">
              Pathashālā
            </h1>

            {/* Tagline */}
            <p className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl text-[#e8d5a3]/90 italic mb-2 leading-relaxed">
              Free Online Bhagavad-gītā Shloka Memorisation Programme for Children
            </p>
            <p className="font-['Cormorant_Garamond',serif] text-lg text-[#c9a84c]/80 italic mb-8">
              Age 7–12 Years
            </p>

            {/* Description */}
            <p className="text-[#e8d5a3]/80 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
              Help your child develop concentration, confidence, Sanskrit pronunciation, discipline,
              and spiritual values through systematic Bhagavad-gītā learning under experienced teachers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="#register"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#c9a84c] text-[#0a1628] font-['Cinzel',serif] font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-[#e8d5a3] transition-all duration-300 shadow-lg shadow-[#c9a84c]/20"
              >
                Register Free
              </Link>
              <Link
                href="#programme"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#c9a84c]/60 text-[#c9a84c] font-['Cinzel',serif] font-medium text-sm tracking-widest uppercase rounded-sm hover:bg-[#c9a84c]/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Programme details cards */}
      <div className="relative z-10 bg-[#0d1e35]/95 border-t border-[#c9a84c]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '📅', label: 'Starts', value: '17th July' },
              { icon: '👦', label: 'Age Group', value: '7–12 Years' },
              { icon: '⏳', label: 'Duration', value: '10 Weeks' },
              { icon: '🕔', label: 'Schedule', value: 'Mon & Fri · 5–5:30 PM' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center p-4 border border-[#c9a84c]/20 rounded-sm bg-[#c9a84c]/5 hover:bg-[#c9a84c]/10 transition-colors"
              >
                <span className="text-2xl mb-2">{item.icon}</span>
                <p className="text-[#c9a84c]/70 text-xs tracking-widest uppercase mb-1">{item.label}</p>
                <p className="text-[#e8d5a3] font-['Cinzel',serif] font-semibold text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
