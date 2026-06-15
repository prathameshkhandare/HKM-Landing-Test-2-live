"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState, useEffect } from "react";
import { 
  Heart, Star, Flower2, Waves, Droplets, Music, BookOpen, Flame, 
  HandHeart, MapPin, Phone, Sparkles 
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────
const highlights = [
  {
    icon: <Flower2 className="w-12 h-12 text-[#FFB81C]" strokeWidth={1.25} />,
    title: "Pallaki Utsavam",
    desc: "Their Lordships Sri Sri Gaur Nitai carried in a grand palanquin procession",
  },
  {
    icon: <Waves className="w-12 h-12 text-[#FFB81C]" strokeWidth={1.25} />,
    title: "Sacred Ocean Dip",
    desc: "Sri Sri Gaur Nitai lovingly brought to Thiruvanmiyur beach for an ocean dip — right in front of the temple",
  },
  {
    icon: <Droplets className="w-12 h-12 text-[#FFB81C]" strokeWidth={1.25} />,
    title: "Abhishekam",
    desc: "Sacred bathing ceremony of Sri Sri Gaur Nitai",
  },
  {
    icon: <Music className="w-12 h-12 text-[#FFB81C]" strokeWidth={1.25} />,
    title: "Kirtan",
    desc: "Ecstatic congregational chanting of the Holy Names",
  },
  {
    icon: <BookOpen className="w-12 h-12 text-[#FFB81C]" strokeWidth={1.25} />,
    title: "Festival Discourse",
    desc: "Illuminating talk on the divine pastime and its eternal significance",
  },
  {
    icon: <Flame className="w-12 h-12 text-[#FFB81C]" strokeWidth={1.25} />,
    title: "Arati",
    desc: "Offering of lamps to Their Lordships Sri Sri Gaur Nitai",
  },
  {
    icon: <Heart className="w-12 h-12 text-[#FFB81C]" strokeWidth={1.25} />,
    title: "Chida Dadhi Mahaprasadam",
    desc: "Sacred chipped rice and yogurt distributed to all attendees",
  },
];

const glimpseImages = [
  "/assets/festivals/panihati/glimpses/IMG_20260604_163509_938.jpg.jpeg",
  "/assets/festivals/panihati/glimpses/IMG_20260604_163509_973.jpg.jpeg",
  "/assets/festivals/panihati/glimpses/IMG_20260604_163510_040.jpg.jpeg",
  "/assets/festivals/panihati/glimpses/IMG_20260604_163510_047.jpg.jpeg",
  "/assets/festivals/panihati/glimpses/IMG_20260604_163510_092.jpg.jpeg",
  "/assets/festivals/panihati/glimpses/IMG_20260604_163514_176.jpg.jpeg",
  "/assets/festivals/panihati/glimpses/IMG_20260604_163509_209.jpg.jpeg",
  "/assets/festivals/panihati/glimpses/IMG_20260604_163509_467.jpg.jpeg",
  "/assets/festivals/panihati/glimpses/IMG_20260604_163509_839.jpg.jpeg",
];

const faqs = [
  {
    q: "What is Panihati Chida Dadhi Mahotsava?",
    a: "Panihati Chida Dadhi Mahotsava is an annual Gaudiya Vaishnava festival commemorating the divine pastime of Lord Nityananda Prabhu and Srila Raghunatha Dasa Gosvami at Panihati on the banks of the Ganges. Also known as Danda Mahotsava — the Festival of Punishment — it celebrates how Lord Nityananda's causeless mercy led Raghunatha Dasa Gosvami to take shelter of Sri Chaitanya Mahaprabhu and become one of the Six Gosvamis of Vrindavan.",
  },
  {
    q: "Where is this festival celebrated in Chennai?",
    a: "In Chennai, this festival is celebrated at Dakshina Dwaraka Dham — Srila Prabhupada's ISKCON Thiruvanmiyur, located at #63, 1st Seaward Road, Valmiki Nagar, Thiruvanmiyur, Chennai 600041.",
  },
  {
    q: "What is special about ISKCON Thiruvanmiyur's celebration?",
    a: "Srila Prabhupada's ISKCON Thiruvanmiyur uniquely celebrates this festival with an ocean dip of Sri Sri Gaur Nitai at the Thiruvanmiyur beach, directly in front of the temple — followed by Pallaki Utsavam, Abhishekam, Kirtan, Festival Discourse, Arati, and Chida Dadhi Mahaprasadam distribution for all.",
  },
  {
    q: "What is Danda Mahotsava?",
    a: "Danda Mahotsava means the Festival of Punishment. It refers to the playful way Lord Nityananda Prabhu 'punished' Raghunatha Dasa Gosvami by ordering him to arrange a grand feast of chipped rice and yogurt for all assembled Vaishnavas. This apparent punishment was in fact the greatest act of mercy — opening the door to his eternal life at the lotus feet of Sri Chaitanya Mahaprabhu.",
  },
  {
    q: "How can I support the Panihati Chida Dadhi Mahotsava?",
    a: "You can sponsor the festival seva by contributing through our dedicated donation link. Your offering helps us celebrate this grand festival and distribute Chida Dadhi Mahaprasadam to hundreds of devotees and guests.",
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center justify-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFB81C]/15 text-[#b45309]">
        <Heart className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ea580c] text-left">
          {children}
        </p>
      </div>
    </div>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  return (
    <details
      className="group border-b border-[#FFB81C]/20 py-5"
      key={index}
    >
      <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
        <span className="font-semibold font-serif text-[#701a1a] text-lg leading-snug pr-4 group-open:text-[#8f2418]">
          {q}
        </span>
        <span className="shrink-0 w-6 h-6 rounded-full border border-[#FFB81C]/50 flex items-center justify-center text-[#ea580c] text-sm group-open:rotate-45 transition-transform duration-300">
          +
        </span>
      </summary>
      <p className="mt-4 text-[#5A4638] leading-8 text-base">{a}</p>
    </details>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function PanihatiSpecialPage() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    onSelect();
  }, [api]);

  return (
    <div className="bg-[#FFF9F0] text-[#3A3A3A] overflow-x-hidden w-full relative z-20">
      <main className="w-full">
        {/* ── ABOUT ── */}
        <section className="relative z-10 mx-auto mt-0 max-w-7xl px-6 pb-24 md:px-10">
          <div className="rounded-[2rem] border border-[#FFB81C]/20 bg-white p-8 shadow-[0_20px_60px_rgba(112,26,26,0.08)] md:p-10 text-center">
            <div className="flex flex-col items-center justify-center">
              <SectionLabel>About the Festival</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#701a1a] mb-6 leading-snug">
                Lord Nityananda's Mercy Upon Raghunatha Dasa Gosvami
              </h2>
            </div>
            
            <div className="mt-8 text-[#5A4638] text-base md:text-lg leading-8 space-y-6 text-left max-w-4xl mx-auto">
              <p>
                Panihati Chida Dadhi Mahotsava commemorates a divine pastime from
                the Gaudiya Vaishnava tradition — the meeting of Srila Raghunatha Dasa
                Gosvami with Lord Nityananda Prabhu on the banks of the Ganges at the
                village of Panihati.
              </p>
              <div className="rounded-[1.75rem] bg-gradient-to-r from-[#FFF4D6] via-white to-[#FFE9D0] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a16207]">
                  Spiritual Significance
                </p>
                <p className="mt-3 text-base leading-8 text-[#5A4638]">
                  Through the playful yet supremely merciful "punishment" of Lord
                  Nityananda, Raghunatha Dasa Gosvami received the causeless mercy of
                  Sri Chaitanya Mahaprabhu and took eternal shelter at His lotus feet —
                  ultimately becoming one of the Six Gosvamis of Vrindavan and one of the
                  most exalted saints in the Vaishnava tradition.
                </p>
              </div>
              <p>
                On this most auspicious day, devotees across the world honour this
                extraordinary chain of mercy by distributing chipped rice and yogurt as
                Mahaprasadam — just as it was done on that eternal day at Panihati.
              </p>
            </div>

            <div className="mt-10 inline-flex items-center gap-4 rounded-full bg-[#FFB81C]/15 px-6 py-4 border border-[#FFB81C]/30 hover:bg-[#FFB81C]/25 transition-colors group">
              <Star className="h-5 w-5 text-[#ea580c]" />
              <div className="text-left">
                <Link
                  href="/blog/panihati-chida-dadhi-mahotsava"
                  className="text-[#701a1a] font-semibold text-sm group-hover:underline"
                >
                  Discover the complete pastime and significance →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── HIGHLIGHTS ── */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 md:px-10">
          <div className="rounded-[2.5rem] border border-[#FFB81C]/20 bg-[#FFFDF8] p-8 shadow-[0_20px_60px_rgba(112,26,26,0.06)] md:p-14 relative overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-[#FFB81C]/10 blur-3xl" />
            
            <div className="mb-14 flex flex-col items-center text-center relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ea580c] mb-3">
                Festival Highlights
              </p>
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#701a1a]">
                What to Expect
              </h2>
              <div className="flex items-center justify-center gap-4 my-6">
                <span className="w-20 h-px bg-gradient-to-r from-transparent to-[#FFB81C]/60" />
                <span className="text-[#FFB81C] text-lg">✦</span>
                <span className="w-20 h-px bg-gradient-to-l from-transparent to-[#FFB81C]/60" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative z-10">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-br from-[#701a1a] to-[#4f1212] border border-[#FFB81C]/20 rounded-[2rem] p-10 md:p-12 hover:shadow-[0_20px_60px_rgba(112,26,26,0.3)] hover:border-[#FFB81C]/50 hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center ${
                    i === 6 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                  }`}
                >
                  <div className="mb-8 transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-md">
                    {item.icon}
                  </div>
                  <h3 className="text-[#FFFDF8] font-bold font-serif text-2xl mb-4 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[#FFD7B5] text-base leading-relaxed max-w-sm opacity-90">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROGRAM DETAILS ── */}
        <section id="program" className="relative z-10 mx-auto max-w-7xl px-6 pb-24 md:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#FFB81C]/20 bg-white p-8 shadow-[0_20px_60px_rgba(112,26,26,0.08)] md:p-10 flex flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ea580c] mb-3">
                Program Details
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#701a1a] mb-10">
                Join Us This Year
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 rounded-2xl bg-[#FFF5E8] px-5 py-4">
                  <div className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#FFB81C]" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ea580c] mb-1">Time</p>
                    <p className="text-[#701a1a] font-serif font-bold text-xl">5:15 PM Onwards</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 rounded-2xl bg-[#FFF5E8] px-5 py-4">
                  <div className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#FFB81C]" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ea580c] mb-1">Venue</p>
                    <p className="text-[#701a1a] font-serif font-bold text-lg leading-snug">
                      Dakshina Dwaraka Dham
                    </p>
                    <p className="text-[#5A4638] text-sm mt-1 leading-6">
                      Srila Prabhupada's ISKCON Thiruvanmiyur<br />
                      #63, 1st Seaward Road, Valmiki Nagar<br />
                      Thiruvanmiyur, Chennai — 600041
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-[#FFF5E8] px-5 py-4">
                  <div className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#FFB81C]" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ea580c] mb-1">Entry</p>
                    <p className="text-[#701a1a] font-serif font-bold text-lg">Free · All Are Cordially Invited</p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Dakshina+Dwaraka+Dham+ISKCON+Thiruvanmiyur+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-full border border-[#FFB81C] bg-white px-6 py-3 text-sm font-bold text-[#701a1a] transition hover:bg-[#FFB81C]/10 w-full md:w-auto"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#FFB81C]/20 bg-white p-4 shadow-[0_20px_60px_rgba(112,26,26,0.08)]">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-2xl">
                <Image 
                  src="/assets/festivals/panihati/poster.jpeg" 
                  alt="Panihati Chida Dadhi Mahotsava Poster" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
          </div>
        </section>
        {/* ── GLIMPSES ── */}
        <section className="relative z-10 mx-auto w-[96vw] max-w-[1500px] pb-24">
          <div className="rounded-[3rem] border border-[#FFB81C]/20 bg-[#FFFDF8] p-8 shadow-[0_20px_60px_rgba(112,26,26,0.06)] md:p-14 relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FFB81C]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#701a1a]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="text-center mb-10 flex flex-col items-center">
              <SectionLabel>Celebration Gallery</SectionLabel>
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#701a1a] mb-6 tracking-tight">
                Relive the Devotion
              </h2>
              <p className="text-[#5A4638] text-lg max-w-2xl leading-relaxed">
                See how devotees came together to celebrate this most joyful festival at Dakshina Dwaraka Dham.
              </p>
            </div>

            <div className="relative w-full mx-auto py-8">
              <Carousel
                setApi={setApi}
                plugins={[plugin.current]}
                className="w-full"
                opts={{ align: "center", loop: true }}
              >
                <CarouselContent className="items-center">
                  {glimpseImages.map((src, index) => {
                    const isActive = current === index;
                    return (
                      <CarouselItem key={index} className="basis-[85%] sm:basis-[65%] md:basis-[50%] lg:basis-[40%]">
                        <div className={`p-4 md:p-6 transition-all duration-700 ease-out ${isActive ? "scale-[1.15] drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)] z-20 relative" : "scale-[0.65] opacity-60 z-10 relative"}`}>
                          <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-[#FFB81C]/20 shadow-lg">
                            <Image
                              src={src}
                              alt={`Glimpse ${index + 1}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 40vw"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious className="text-[#701a1a] h-12 w-12 border-[#FFB81C] hover:bg-[#FFB81C]/10 -left-2 md:-left-6" />
                <CarouselNext className="text-[#701a1a] h-12 w-12 border-[#FFB81C] hover:bg-[#FFB81C]/10 -right-2 md:-right-6" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* ── VIDEO ── */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 md:px-10">
          <div className="text-center mb-10 flex flex-col items-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ea580c] mb-3">
              Watch the Celebration
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#701a1a] mb-4">
              Relive the Devotion, the Procession, and the Joy
            </h2>
            <p className="text-[#5A4638] text-base mb-10">
              Panihati Mahotsava at Dakshina Dwaraka Dham
            </p>
            
            <div className="max-w-4xl mx-auto w-full">
              <div className="relative w-full pt-[56.25%] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(112,26,26,0.15)] border border-[#FFB81C]/30 bg-[#2D0A0A]">
                <iframe
                  src="https://www.youtube.com/embed/D4ZRbESqE3s"
                  title="Panihati Chida Dadhi Mahotsava at Dakshina Dwaraka Dham ISKCON Thiruvanmiyur Chennai"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 md:px-10">
          <div className="rounded-[2rem] border border-[#FFB81C]/20 bg-[#FFFDF8] p-8 shadow-[0_20px_60px_rgba(112,26,26,0.08)] md:p-10 max-w-4xl mx-auto">
            <div className="text-center mb-10 flex flex-col items-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ea580c] mb-3">
                Common Questions
              </p>
              <h2 className="text-3xl font-bold font-serif text-[#701a1a]">
                Frequently Asked Questions
              </h2>
            </div>
            <div>
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── DONATE / CLOSING CTA ── */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 md:px-10">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#FFB81C]/30 bg-gradient-to-br from-[#701a1a] via-[#5b1414] to-[#3a0a0a] p-10 md:p-16 text-center shadow-[0_20px_60px_rgba(112,26,26,0.25)]">
            {/* Subtle Top Glow */}
            <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent opacity-50" />
            
            <div className="relative z-10">
              <div className="mb-6 flex justify-center text-[#FFB81C]">
                <HandHeart className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#FFFDF8] mb-6 drop-shadow-sm">
                Receive the Mercy of Sri Sri Gaur Nitai
              </h2>
              
              <div className="flex items-center justify-center gap-4 my-8">
                <span className="w-24 h-px bg-gradient-to-r from-transparent to-[#FFB81C]/50" />
                <Sparkles className="w-5 h-5 text-[#FFB81C]" strokeWidth={1.5} />
                <span className="w-24 h-px bg-gradient-to-l from-transparent to-[#FFB81C]/50" />
              </div>

              <p className="text-lg md:text-xl leading-relaxed text-[#FFD7B5] max-w-2xl mx-auto mb-12">
                All are cordially invited to be part of this most joyful celebration.<br />
                Come, chant, and receive Mahaprasadam.
              </p>

              <div className="mt-8 flex flex-col md:flex-row gap-5 justify-center items-center">
                <a
                  href="https://maps.google.com/?q=Dakshina+Dwaraka+Dham+ISKCON+Thiruvanmiyur+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full md:w-auto items-center justify-center gap-3 rounded-full border border-[#FFB81C]/40 hover:border-[#FFB81C] bg-[#FFB81C]/5 text-[#FFFDF8] hover:text-[#FFB81C] hover:bg-[#FFB81C]/10 font-bold px-8 py-4 transition-all duration-300 uppercase text-sm tracking-widest"
                >
                  <MapPin className="w-5 h-5" /> GET DIRECTIONS
                </a>
                <a
                  href="tel:+919789057101"
                  className="inline-flex w-full md:w-auto items-center justify-center gap-3 rounded-full border border-[#FFB81C]/40 hover:border-[#FFB81C] bg-[#FFB81C]/5 text-[#FFFDF8] hover:text-[#FFB81C] hover:bg-[#FFB81C]/10 font-bold px-8 py-4 transition-all duration-300 uppercase text-sm tracking-widest"
                >
                  <Phone className="w-5 h-5" /> CONTACT US
                </a>
                <a
                  href="https://rzp.io/rzp/iJuAYqIe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full md:w-auto items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#FFB81C] to-[#F5A524] hover:to-[#FFB81C] text-[#701a1a] font-bold px-10 py-4 transition-all duration-300 uppercase text-sm tracking-widest shadow-[0_0_20px_rgba(255,184,28,0.3)] hover:shadow-[0_0_30px_rgba(255,184,28,0.5)] hover:-translate-y-1"
                >
                  <HandHeart className="w-5 h-5" /> DONATE NOW
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
