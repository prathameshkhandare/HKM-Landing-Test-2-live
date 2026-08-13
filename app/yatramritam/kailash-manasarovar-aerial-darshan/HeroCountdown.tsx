"use client"

import { useEffect, useState } from "react"

const TARGET = new Date("2026-09-23T00:00:00+05:30").getTime()

function calc() {
    const diff = TARGET - Date.now()
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 }
    const d = Math.floor(diff / 86400000)
    const h = Math.floor((diff % 86400000) / 3600000)
    const m = Math.floor((diff % 3600000) / 60000)
    const s = Math.floor((diff % 60000) / 1000)
    return { d, h, m, s }
}

function Seg({ v, label }: { v: number; label: string }) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-[#FFD84D] font-black text-xl md:text-2xl leading-none" style={{ fontFamily: "var(--font-display), 'Cinzel', serif", textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
                {String(v).padStart(2, "0")}
            </span>
            <span className="text-white/50 text-[0.55rem] uppercase tracking-[0.18em] mt-0.5">{label}</span>
        </div>
    )
}

function Colon() {
    return <span className="text-[#FFD84D]/60 font-black text-lg mb-2 leading-none">:</span>
}

export default function HeroCountdown() {
    const [t, setT] = useState(calc)

    useEffect(() => {
        const id = setInterval(() => setT(calc()), 1000)
        return () => clearInterval(id)
    }, [])

    if (t.d === 0 && t.h === 0 && t.m === 0 && t.s === 0) return null

    return (
        <div className="mt-2.5 flex items-center gap-2.5">
            <span className="text-[#C9A24A] text-[0.55rem] tracking-[0.18em] uppercase font-bold whitespace-nowrap">Starts in</span>
            <div className="flex items-end gap-1.5">
                <Seg v={t.d} label="days" />
                <Colon />
                <Seg v={t.h} label="hrs" />
                <Colon />
                <Seg v={t.m} label="min" />
                <Colon />
                <Seg v={t.s} label="sec" />
            </div>
        </div>
    )
}
