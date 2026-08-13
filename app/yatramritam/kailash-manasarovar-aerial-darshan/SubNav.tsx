"use client"

import { useState, useEffect } from "react"

const NAV_ITEMS = [
  { label: "Highlights", href: "#highlights", id: "highlights" },
  { label: "Your Guide", href: "#guide", id: "guide" },
  { label: "Itinerary", href: "#itinerary", id: "itinerary" },
  { label: "Batch & Cost", href: "#batch", id: "batch" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "Register", href: "#register", id: "register" },
]

export default function SubNav() {
  const [active, setActive] = useState("")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id)
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (!el) return
    const navH = 64 + 48 // main navbar + subnav height
    const top = el.getBoundingClientRect().top + window.scrollY - navH - 16
    window.scrollTo({ top, behavior: "smooth" })
    setActive(id)
  }

  return (
    <nav
      className={`sticky top-[64px] md:top-[80px] z-[49] transition-all duration-300 ${
        scrolled
          ? "bg-[#050A14]/98 shadow-[0_6px_32px_rgba(0,0,0,0.7)]"
          : "bg-[#050A14]/90"
      }`}
      style={{ backdropFilter: "blur(16px)" }}
    >
      {/* gold top line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center overflow-x-auto scrollbar-none gap-1">
        {/* nav links */}
        <div className="flex items-center flex-1 min-w-0 gap-0.5">
          {NAV_ITEMS.map(({ label, href, id }) => {
            const isActive = active === id
            return (
              <a
                key={id}
                href={href}
                onClick={(e) => handleClick(e, href)}
                className={`relative flex-shrink-0 flex flex-col items-center px-4 md:px-6 py-4 group transition-all duration-200 ${
                  isActive ? "text-[#FFD84D]" : "text-white/70 hover:text-white"
                }`}
              >
                <span className="text-[0.72rem] md:text-[0.78rem] font-bold tracking-[0.22em] uppercase whitespace-nowrap">
                  {label}
                </span>
                {/* active underline */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] rounded-full bg-[#FFD84D] transition-all duration-300 ${
                    isActive ? "w-3/4 opacity-100" : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-40"
                  }`}
                />
              </a>
            )
          })}
        </div>

        {/* divider */}
        <div className="hidden md:block w-px h-6 bg-white/15 mx-3 flex-shrink-0" />

        {/* CTA */}
        <a
          href="#register"
          onClick={(e) => handleClick(e, "#register")}
          className="flex-shrink-0 my-2 inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A24A] to-[#E0BC6C] text-[#050A14] font-black text-[0.72rem] md:text-[0.78rem] tracking-[0.15em] uppercase px-5 md:px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(201,162,74,0.45)] hover:shadow-[0_0_30px_rgba(201,162,74,0.7)] hover:from-[#E0BC6C] hover:to-[#FFD84D] transition-all duration-200 whitespace-nowrap"
        >
          Reserve Seat
          <svg width="11" height="11" viewBox="0 0 10 10" fill="none">
            <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* gold bottom line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A24A]/30 to-transparent" />
    </nav>
  )
}
