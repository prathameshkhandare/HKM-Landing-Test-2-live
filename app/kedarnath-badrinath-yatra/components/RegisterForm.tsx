"use client";
// app/yatramritam/kedarnath-badrinath/components/RegisterForm.tsx
import { useState } from "react";
import { BATCHES } from "../data";

export default function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload = { 
      name: fd.get("name"), 
      phone: fd.get("phone"), 
      email: fd.get("email"), 
      batch: fd.get("batch"), 
      participants: fd.get("pilgrims"), 
      weight: fd.get("weight"), 
      yatra_name: "Kedarnath & Badrinath Yatra by Helicopter 2026",
      message: `Batch: ${fd.get("batch")}, Weight: ${fd.get("weight")}kg`
    };
    
    try {
      const response = await fetch('/api/yatra-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) return (
    <div className="rounded-3xl bg-gradient-to-br from-navy-600 to-navy-900 p-8 text-center text-white sm:p-10">
      <p className="text-4xl">🙏</p>
      <h3 className="mt-3 font-display text-2xl font-bold text-gold-400 drop-shadow-sm">Hare Kṛṣṇa!</h3>
      <p className="mt-2 text-sm text-cream-100/70">Thank you! Our Yatramritam team will contact you shortly to confirm your seat. Jai Kedarnath! Jai Badrinath!</p>
    </div>
  );

  return (
    <div className="rounded-3xl bg-gradient-to-br from-navy-600 to-navy-900 p-7 text-white sm:p-10 shadow-xl shadow-black/20 border border-gold-400/20">
      <h3 className="font-display text-3xl mb-1 font-bold text-gold-400 drop-shadow-sm uppercase tracking-wide">Book Your Seat Now</h3>
      <p className="text-sm text-cream-100/60 mb-6 font-medium">Only 12 seats per batch — first come, first served.</p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-xs text-cream-100/70">Full Name *</label>
          <input name="name" type="text" required placeholder="Your full name" className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-gold-400"/>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-cream-100/70">Phone *</label>
            <input name="phone" type="tel" required placeholder="+91" className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-gold-400"/>
          </div>
          <div>
            <label className="text-xs text-cream-100/70">No. of Pilgrims</label>
            <input name="pilgrims" type="number" min={1} placeholder="1" className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-gold-400"/>
          </div>
        </div>
        <div>
          <label className="text-xs text-cream-100/70">Preferred Batch *</label>
          <select name="batch" required className="mt-1 w-full rounded-lg border border-white/20 bg-navy-800 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-gold-400">
            <option value="">Select batch</option>
            {BATCHES.map(b => <option key={b.batch} value={b.batch}>Batch {b.batch} — {b.arrival.split(",")[1]?.trim()}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-cream-100/70">Email</label>
            <input name="email" type="email" placeholder="you@example.com" className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-gold-400"/>
          </div>
          <div>
            <label className="text-xs text-cream-100/70">Your Weight (kg) *</label>
            <input name="weight" type="number" required placeholder="e.g. 65" className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-gold-400"/>
          </div>
        </div>
        <p className="text-[11px] text-cream-100/50">⚠️ Correct weight is mandatory for helicopter safety compliance.</p>
        <button type="submit" disabled={loading} className="mt-2 w-full rounded-lg bg-terracotta-600 py-4 font-semibold text-white transition hover:bg-terracotta-700 disabled:opacity-60">
          {loading ? "Submitting…" : "Reserve My Seat →"}
        </button>
      </form>
    </div>
  );
}
