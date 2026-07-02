"use client";
// app/yatramritam/kedarnath-badrinath/components/Countdown.tsx
import { useEffect, useState } from "react";

interface Props { targetISO: string; label?: string; }

function getRemaining(targetISO: string) {
  const diff = Math.max(0, new Date(targetISO).getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export default function Countdown({ targetISO, label }: Props) {
  const [r, setR] = useState<ReturnType<typeof getRemaining> | null>(null);
  useEffect(() => {
    setR(getRemaining(targetISO));
    const id = setInterval(() => setR(getRemaining(targetISO)), 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  const units: [number, string][] = r
    ? [[r.days,"Days"],[r.hours,"Hrs"],[r.minutes,"Min"],[r.seconds,"Sec"]]
    : [[0,"Days"],[0,"Hrs"],[0,"Min"],[0,"Sec"]];

  return (
    <div suppressHydrationWarning>
      {label && <p className="text-xs text-gold-400 mb-2 font-accent tracking-widest">{label}</p>}
      <div className="flex gap-2 sm:gap-3">
        {units.map(([v,l]) => (
          <div key={l} className="min-w-[56px] rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-center backdrop-blur">
            <p className="font-stat text-xl font-bold tabular-nums text-gold-400">{String(v).padStart(2,"0")}</p>
            <p className="text-[10px] tracking-wide text-cream-100/60">{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
