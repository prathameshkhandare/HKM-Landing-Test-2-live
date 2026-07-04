'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function StickyRegisterButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <Link
        href="#register"
        className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-[#FBB201] to-[#ea580c] text-white font-sans font-bold text-sm tracking-widest uppercase shadow-[0_-5px_20px_rgba(234,88,12,0.3)] hover:brightness-110 transition-all"
      >
        Register Free — Limited Seats
      </Link>
    </div>
  );
}
