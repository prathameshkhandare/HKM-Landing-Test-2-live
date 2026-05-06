"use client"

import Script from "next/script"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/FooterSection"
import { JahnavaArticleFromDoc } from "./JahnavaArticleFromDoc"
import "./styles.css"

const url = "https://hkmchennai.org/blog/srimati-jahnava-devi-appearance-disappearance-day"

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Srimati Jahnava Devi — Glories from the Teachings of Srila Prabhupada",
  description:
    "The pleasure potency of Lord Nityananda Prabhu, Ananga-manjari, and acarya of the Gaudiya Vaisnava world — from Srila Prabhupada’s books, purports, and conversations.",
  author: {
    "@type": "Organization",
    name: "Hare Krishna Movement Chennai",
    url: "https://hkmchennai.org",
  },
  publisher: {
    "@type": "Organization",
    name: "HKM Chennai — Dakshina Dvaraka Dhama",
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": url },
  image: `https://hkmchennai.org/assets/blog/srimati-jahnava-devi/jahnava-devi-1.png`,
  datePublished: "2026-04-25",
  dateModified: "2026-04-25",
  keywords: [
    "Jahnava Devi",
    "Nityananda Prabhu",
    "Gaudiya Vaisnavism",
    "Srila Prabhupada",
  ],
  articleSection: "Vaisnava festivals",
  inLanguage: "en",
}

export default function JahnavaDeviClient() {
  return (
    <>
      <Script
        id="jahnava-article-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen bg-[#FFF9F0] selection:bg-[#c9973a] selection:text-white">
        <Navbar />
        <nav className="mp-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-hidden>›</li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li aria-hidden>›</li>
            <li aria-current="page">Srimati Jahnava Devi</li>
          </ol>
        </nav>

        <article
          className="gp-blog-wrap"
          itemScope
          itemType="https://schema.org/Article"
        >
          <meta itemProp="author" content="HKM Chennai Editorial Team" />
          <meta itemProp="datePublished" content="2026-04-25" />
          <header className="gp-blog-header">
            <p className="gp-hero-label">Gaudiya Vaisnava — Vaisnava Glories</p>
            <h1 className="gp-blog-title">
              All Glories to Srimati Jahnava Devi
            </h1>
            <div className="gp-hero-line" />
            <p className="gp-blog-subtitle">
              The Pleasure Potency of Sri Nityananda Prabhu
            </p>
            <p className="text-center text-base not-italic max-w-2xl mx-auto mb-0 text-[#5c3b1a] font-[family-name:var(--gp-font-serif)]">
              Compiled exclusively from the books, purports, lectures, and
              conversations of His Divine Grace Vishwa Guru A.C. Bhaktivedanta
              Swami Prabhupada
            </p>
            <p className="mp-hero-meta">
              <span>📅 Appearance &amp; Disappearance tithi</span>
              <span>⏱ ~12 min read</span>
              <span>✍️ HKM Chennai</span>
            </p>
          </header>

          <figure
            className="jahn-feature-figure w-full mt-7 sm:mt-9 mb-8 sm:mb-10"
            aria-label="Srimati Jahnava Devi — Gaura-lila, Gaudiya tradition"
          >
            <div className="jahn-feature-figure__frame">
              <Image
                src="/assets/blog/srimati-jahnava-devi/jahnava-devi-1.png"
                alt="Srimati Jahnava Devi — Gaura-lila, Gaudiya tradition"
                width={800}
                height={800}
                className="w-full h-auto object-contain"
                sizes="(max-width: 480px) 90vw, 384px"
                priority
              />
            </div>
            <figcaption className="jahn-figure-caption">
              Hare Krsna — in honour of the mercy of Lord Nityananda and Srimati Jahnava Devi
            </figcaption>
          </figure>

          <div className="gp-content">
            <JahnavaArticleFromDoc />
          </div>

          <section className="mp-donate-banner">
            <h2>Support Dakshina Dvaraka Dhama</h2>
            <p>
              Help us complete Chennai&apos;s tallest temple — a Pallava-style
              offering to the Supreme. Your seva sustains kirtana, education, and
              the worship of the Lord.
            </p>
            <a href="https://hkmchennai.org/donate" target="_blank" rel="noopener noreferrer">
              🙏 Donate now
            </a>
            <p className="mp-cta-note">80G tax benefits · HKM Chennai</p>
          </section>

          <section className="scroll-mt-6 gp-content" style={{ marginTop: "2.5rem" }}>
            <h2 className="gp-sh" style={{ marginTop: 0 }}>
              Continue reading
            </h2>
            <div className="mp-continue-grid">
              {[
                {
                  href: "/blog/sri-madhu-pandita-gosvami",
                  title: "Sri Madhu Pandita Gosvami",
                  tag: "Vaisnava Saints",
                },
                {
                  href: "/blog/gadadhara-pandita",
                  title: "Sri Gadadhara Pandita",
                  tag: "Articles",
                },
                { href: "/blog/ramanavami", title: "Rama Navami", tag: "Festivals" },
              ].map((a) => (
                <Link key={a.href} href={a.href} className="mp-continue-card">
                  <p className="mp-tag">{a.tag}</p>
                  <h3>{a.title} →</h3>
                </Link>
              ))}
            </div>
          </section>

          <section className="mp-connect-wrap" aria-labelledby="jhn-connect" style={{ marginTop: "2.5rem" }}>
            <h2 id="jhn-connect">Connect with us</h2>
            <p className="mp-connect-intro">
              Follow HKM Chennai for daily updates, event announcements, and
              spiritual content.
            </p>
            <div className="mp-connect-grid">
              <a
                href="https://hkmchennai.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="mp-connect-link pl-website"
              >
                <svg className="h-[18px] w-[18px] shrink-0" viewBox="0 0 24 24" aria-hidden fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                <span className="flex flex-col leading-tight">
                  <strong>hkmchennai.org</strong>
                  <span className="text-xs font-normal opacity-90">Official site</span>
                </span>
              </a>
              <a
                href="https://www.facebook.com/hkmchennai"
                target="_blank"
                rel="noopener noreferrer"
                className="mp-connect-link pl-facebook"
              >
                <svg className="h-[18px] w-[18px] shrink-0" viewBox="0 0 24 24" aria-hidden fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="flex flex-col leading-tight">
                  <strong>Facebook</strong>
                  <span className="text-xs font-normal opacity-90">Hare Krishna Movement Chennai</span>
                </span>
              </a>
              <a
                href="https://www.youtube.com/@hkmchennai"
                target="_blank"
                rel="noopener noreferrer"
                className="mp-connect-link pl-youtube"
              >
                <svg className="h-[18px] w-[18px] shrink-0" viewBox="0 0 24 24" aria-hidden fill="currentColor">
                  <path d="M23.5 6.2c-.3-1.1-1.1-1.8-2.1-2.1C19.1 3.5 12 3.5 12 3.5s-7.1 0-9.4.6c-1 .3-1.8 1-2.1 2.1C0 8.3 0 12 0 12s0 3.7.5 5.8c.3 1.1 1.1 1.8 2.1 2.1 2.3.6 9.4.6 9.4.6s7.1 0 9.4-.6c1-.3 1.8-1 2.1-2.1.5-2.1.5-5.8.5-5.8s0-3.7-.5-5.8zM9.6 15.5V8.5L15.8 12l-6.2 3.5z" />
                </svg>
                <span className="flex flex-col leading-tight">
                  <strong>YouTube</strong>
                  <span className="text-xs font-normal opacity-90">@hkmchennai</span>
                </span>
              </a>
              <a
                href="https://www.instagram.com/hkm_chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="mp-connect-link pl-instagram"
              >
                <svg className="h-[18px] w-[18px] shrink-0" viewBox="0 0 24 24" aria-hidden fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.851s-.011 3.585-.069 4.851c-.062 1.366-.333 2.633-1.308 3.608-.975.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.585-.011-4.851-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.975-1.246-2.242-1.308-3.608C2.175 15.585 2.163 15.205 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.163 12 2.163z" />
                </svg>
                <span className="flex flex-col leading-tight">
                  <strong>@hkm_chennai</strong>
                  <span className="text-xs font-normal opacity-90">Instagram</span>
                </span>
              </a>
              <a
                href="https://x.com/ChennaiHare"
                target="_blank"
                rel="noopener noreferrer"
                className="mp-connect-link pl-twitter"
              >
                <svg className="h-[18px] w-[18px] shrink-0" viewBox="0 0 24 24" aria-hidden fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
                </svg>
                <span className="flex flex-col leading-tight">
                  <strong>@ChennaiHare</strong>
                  <span className="text-xs font-normal opacity-80">X</span>
                </span>
              </a>
              <a
                href="https://www.linkedin.com/company/hare-krishna-movement-chennai/"
                target="_blank"
                rel="noopener noreferrer"
                className="mp-connect-link pl-linkedin"
              >
                <svg className="h-[18px] w-[18px] shrink-0" viewBox="0 0 24 24" aria-hidden fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="flex flex-col leading-tight">
                  <strong>LinkedIn</strong>
                  <span className="text-xs font-normal opacity-90">Company page</span>
                </span>
              </a>
              <a
                href="https://www.whatsapp.com/channel/0029Vaa2fjKEVccFHx5YDt1O"
                target="_blank"
                rel="noopener noreferrer"
                className="mp-connect-link pl-whatsapp"
                style={{ gridColumn: "1 / -1" }}
              >
                <svg className="h-[18px] w-[18px] shrink-0" viewBox="0 0 24 24" aria-hidden fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                <span className="flex flex-col leading-tight">
                  <strong>WhatsApp</strong>
                  <span className="text-xs font-normal opacity-90">Official channel</span>
                </span>
              </a>
            </div>
            <a
              href="https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign"
              target="_blank"
              rel="noopener noreferrer"
              className="mp-connect-donate"
            >
              <span aria-hidden>🪷</span>
              Donate — Temple construction
            </a>
            <div className="mp-connect-map">
              <p className="mp-map-label">Dakshina Dwaraka Dham — find us</p>
              <div className="mp-map-box">
                <iframe
                  title="Dakshina Dwaraka Dham, HKM Chennai on Google Maps"
                  className="mp-map-iframe"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=63,+1st+Seaward+Road,+Thiruvanmiyur,+Chennai+600+041&output=embed"
                  allowFullScreen
                />
              </div>
              <div className="mp-map-directions">
                <a
                  href="https://maps.app.goo.gl/tJEq5NoCUXdciRhP8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span aria-hidden>🗺️</span> Get directions
                </a>
              </div>
            </div>
          </section>
        </article>
        <Footer />
      </main>
    </>
  )
}
