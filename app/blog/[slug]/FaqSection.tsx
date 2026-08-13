"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FaqItem {
    question: string
    answer: string
}

export default function FaqSection({ items }: { items: FaqItem[] }) {
    const [open, setOpen] = useState<number | null>(null)

    if (!items || items.length === 0) return null

    return (
        <section className="mt-16 mb-12">
            <h2 className="text-3xl font-bold font-serif text-[#2D0A0A] mb-8 pb-3 border-b-2 border-[#FFB81C]/40">
                Frequently Asked Questions
            </h2>
            <div className="space-y-3">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="border border-[#FFB81C]/30 rounded-xl overflow-hidden bg-white shadow-sm"
                    >
                        <button
                            className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-[#2D0A0A] font-serif text-lg hover:bg-[#FFF9F0] transition-colors"
                            onClick={() => setOpen(open === i ? null : i)}
                        >
                            <span>{item.question}</span>
                            <ChevronDown
                                size={20}
                                className={`flex-shrink-0 ml-4 text-[#ea580c] transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                            />
                        </button>
                        {open === i && (
                            <div className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-[#FFB81C]/20 pt-4">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}
