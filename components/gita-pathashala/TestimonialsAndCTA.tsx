'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Sparkles } from 'lucide-react';

const testimonials = [
  {
    text: '[TESTIMONIAL PENDING]',
    name: '[PARENT NAME]',
    child: 'Parent of [CHILD NAME], Age [X]',
    pending: true,
  },
  {
    text: '[TESTIMONIAL PENDING]',
    name: '[PARENT NAME]',
    child: 'Parent of [CHILD NAME], Age [X]',
    pending: true,
  },
  {
    text: '[TESTIMONIAL PENDING]',
    name: '[PARENT NAME]',
    child: 'Parent of [CHILD NAME], Age [X]',
    pending: true,
  },
];

export default function TestimonialsAndCTA() {
  return (
    <>
      {/* Final CTA */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#1A0505]">
        {/* Background Gradients and Patterns */}
        <div className="absolute inset-0 bg-[url('/images/gita-pathashala/lotus-pattern.svg')] opacity-5 bg-repeat z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,178,1,0.15),transparent_70%)] z-0 mix-blend-screen" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FBB201]/50 to-transparent z-10" />

        {/* Decorative Left Image (Desktop) */}
        <div className="hidden lg:block absolute left-0 xl:left-12 top-1/2 -translate-y-1/2 w-72 xl:w-96 z-10 pointer-events-none">
          <div className="relative w-full aspect-square pointer-events-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ea580c]/15 to-[#FBB201]/15 rounded-full blur-3xl transform scale-125" />
            <img 
              src="/images/gita-pathashala/gita_girl_book_nobg.png" 
              alt="Spiritual child looking at a glowing Bhagavad Gita" 
              className="w-full h-full object-contain drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-700" 
            />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center mt-8 lg:mt-0">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-[#8B1C1C]/40 border border-[#FBB201]/30 flex items-center justify-center shadow-[0_0_30px_rgba(251,178,1,0.2)]">
              <Sparkles className="text-[#FBB201]" size={32} strokeWidth={1.5} />
            </div>
          </div>
          
          <p className="text-[#FBB201] font-sans font-bold text-sm tracking-[0.3em] uppercase mb-4 drop-shadow-sm">
            Begin the Spiritual Journey
          </p>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.15] drop-shadow-lg">
            Give Your Child the <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB201] to-[#FFE8D6]">Timeless Gift of Bhagavad-gītā</span>
          </h2>
          
          {/* Mobile Image */}
          <div className="lg:hidden w-64 max-w-full mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ea580c]/15 to-[#FBB201]/15 rounded-full blur-2xl transform scale-125" />
            <img 
              src="/images/gita-pathashala/gita_girl_book_nobg.png" 
              alt="Spiritual child looking at a glowing Bhagavad Gita" 
              className="w-full h-auto object-contain drop-shadow-xl relative z-10" 
            />
          </div>
          
          <p className="max-w-2xl text-white/80 font-sans text-lg md:text-xl leading-relaxed mb-12">
            Seats are limited. Join Gītā Pathashālā starting 17th July — free, live, and designed
            for children who deserve the best start in life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full sm:w-auto">
            <Link
              href="#register"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#FBB201] to-[#ea580c] text-white font-sans font-bold text-lg rounded-full hover:shadow-[0_10px_40px_rgba(234,88,12,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Register Today — Free
            </Link>
            <a
              href="https://wa.me/919600815108"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/20 bg-white/5 text-white font-sans font-bold text-lg rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="text-2xl">💬</span> WhatsApp: 96008 15108
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
