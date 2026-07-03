"use client";
// app/yatramritam/kedarnath-badrinath/components/FaqAccordion.tsx
import { useState } from "react";
import { FAQS } from "../data";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {FAQS.map((f, i) => (
        <div key={f.q} className="overflow-hidden rounded-xl border border-gold-100 bg-white">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="font-semibold text-navy-600 text-sm sm:text-base">{f.q}</span>
            <svg className={`h-5 w-5 shrink-0 text-gold-600 transition-transform ${open===i?"rotate-180":""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          {open === i && <div className="px-6 pb-5 text-sm leading-relaxed text-navy-400">{f.a}</div>}
        </div>
      ))}
    </div>
  );
}
