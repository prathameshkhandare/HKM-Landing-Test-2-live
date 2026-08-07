"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/FooterSection"
import BlogConnectSection from "@/components/BlogConnectSection"
import Script from "next/script"
import { Facebook, Twitter, Mail, Link as LinkIcon, Instagram, Youtube } from 'lucide-react'
import "./styles.css"







function SectionHeading({ id, children }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 font-serif text-2xl sm:text-3xl text-[#3D1A00] font-semibold tracking-tight mt-16 mb-6 pb-3 border-b border-[#C9A84C]/40"
    >
      {children}
    </h2>
  );
}

function PrabhupadaQuote({ children, cite }) {
  return (
    <figure className="relative my-8 rounded-lg bg-[#FDF6E3] border-l-4 border-[#C9A84C] px-6 py-5 sm:px-8 sm:py-6 shadow-sm">
      <span
        aria-hidden="true"
        className="absolute top-2 left-3 font-serif text-5xl text-[#C9A84C]/40 select-none"
      >
        &ldquo;
      </span>
      <blockquote className="relative italic text-[#3D1A00]/90 leading-relaxed text-[1.05rem] sm:text-lg pl-4">
        {children}
      </blockquote>
      {cite && (
        <figcaption className="relative mt-3 pl-4 text-sm font-medium tracking-wide text-[#3D1A00]/60">
          — {cite}
        </figcaption>
      )}
    </figure>
  );
}

function SanskritVerse({ devanagariRoman, translation, cite, speaker }) {
  return (
    <div className="my-8 rounded-lg border border-[#C9A84C]/40 bg-white overflow-hidden">
      <div className="bg-[#3D1A00] text-[#FDF6E3] px-6 py-3 text-xs font-semibold uppercase tracking-widest">
        {speaker}
      </div>
      <div className="px-6 py-5 sm:px-8 sm:py-6">
        <p className="font-serif text-lg sm:text-xl leading-relaxed text-[#3D1A00] whitespace-pre-line">
          {devanagariRoman}
        </p>
        <p className="mt-4 text-[#3D1A00]/80 leading-relaxed">{translation}</p>
        {cite && (
          <p className="mt-3 text-sm font-medium text-[#3D1A00]/60">{cite}</p>
        )}
      </div>
    </div>
  );
}

function QuickFactRow({ label, children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[11rem_1fr] gap-1 sm:gap-4 py-3 border-b border-[#C9A84C]/25 last:border-b-0">
      <dt className="font-semibold text-[#3D1A00] text-sm tracking-wide uppercase sm:pt-0.5">
        {label}
      </dt>
      <dd className="text-[#3D1A00]/85 leading-relaxed">{children}</dd>
    </div>
  );
}

function LilaSthaliCard({ number, place, region, children }) {
  return (
    <div className="rounded-lg border border-[#C9A84C]/40 bg-white p-5 sm:p-6 flex flex-col gap-2">
      <div className="flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3D1A00] text-[#C9A84C] text-sm font-semibold mt-0.5">
          {number}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-lg text-[#3D1A00] font-semibold leading-tight">
            {place}
          </h3>
          <p className="text-[0.7rem] sm:text-xs uppercase tracking-wide text-[#3D1A00]/60 mt-1 break-words">
            {region}
          </p>
        </div>
      </div>
      <p className="text-[#3D1A00]/80 leading-relaxed mt-2 text-sm sm:text-base">{children}</p>
    </div>
  );
}

function TeachingItem({ title, children }) {
  return (
    <li className="flex gap-4">
      <span
        aria-hidden="true"
        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C9A84C]"
      />
      <p className="text-[#3D1A00]/85 leading-relaxed">
        <span className="font-semibold text-[#3D1A00]">{title}</span>{" "}
        {children}
      </p>
    </li>
  );
}

function FaqItem({ question, children }) {
  return (
    <details className="group rounded-lg border border-[#C9A84C]/40 bg-white open:bg-[#FDF6E3]/60 transition-colors">
      <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-4 font-serif text-[#3D1A00] font-semibold">
        {question}
        <span
          aria-hidden="true"
          className="shrink-0 text-[#C9A84C] text-xl leading-none transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="px-5 pb-5 text-[#3D1A00]/80 leading-relaxed">
        {children}
      </div>
    </details>
  );
}

function TocLink({ href, children }) {
  return (
    <li>
      <a
        href={href}
        className="text-[#3D1A00]/75 hover:text-[#3D1A00] hover:underline underline-offset-4 decoration-[#C9A84C] transition-colors"
      >
        {children}
      </a>
    </li>
  );
}

/* ------------------------------------------------------------------ */

export default function BlogClient() {
    return (
        <>


      <main className="min-h-screen bg-[#FFF9F0] selection:bg-[#c9973a] selection:text-white">
<Navbar />
<article className="gp-blog-wrap">
        {/* ---------------------------------------------------------- */}
        {/* MANDATORY BLOG HEADER                                      */}
        {/* ---------------------------------------------------------- */}
        
                {/* ── HEADER ── */}
                <header className="gp-blog-header">
                    <p className="gp-hero-label">Vaishnava Acharyas & Associates</p>
                    <h1 className="gp-blog-title">
                        Sri Svarupa Damodara Gosvami
                    </h1>
                    <div className="gp-hero-line" />
                    <p className="gp-blog-subtitle">
                        The secretary, singer, and most intimate confidant of Sri Chaitanya Mahaprabhu's final twelve years
                    </p>
                    <p className="gp-blog-byline">
                        Based on the teachings and purports of{" "}
                        <strong>His Divine Grace Visva Guru A.C. Bhaktivedanta Swami Prabhupada</strong>
                        {" "}— Sri Chaitanya-charitamrita
                    </p>
                </header>

                {/* ── HERO IMAGE ── */}
                <div className="gp-image-container">
                    <img
                        src="/assets/blog/svarupa-damodara-gosvami/hero.jpg"
                        alt="Sri Svarupa Damodara Gosvami"
                        className="gp-image"
                    />
                    <span className="gp-image-caption">
                        Sri Svarupa Damodara Gosvami
                    </span>
                </div>


        <div className="max-w-3xl mx-auto px-6">
          {/* -------------------------------------------------------- */}
          {/* OPENING SCENE                                            */}
          {/* -------------------------------------------------------- */}
          <section className="pt-12">
            <p className="text-[#3D1A00]/90 leading-relaxed text-lg">
              Svarupa Damodara falls at the Lord&rsquo;s feet, breathless
              from his journey from Varanasi.{" "}
              <em>&ldquo;Please forgive me,&rdquo;</em> he says.{" "}
              <em>
                &ldquo;I gave up Your company to go elsewhere, and that was
                my great mistake.&rdquo;
              </em>{" "}
              Sri Chaitanya Mahaprabhu lifts him up and embraces him,
              weeping:{" "}
              <em>
                &ldquo;I saw in a dream that you were coming, and so this
                is very auspicious. I have been like a blind man, but your
                coming here restores My vision.&rdquo;
              </em>
            </p>
            <p className="mt-2 text-sm font-medium text-[#3D1A00]/60">
              (CC Madhya 10.122–123)
            </p>
            <p className="mt-6 text-[#3D1A00]/90 leading-relaxed text-lg">
              From that reunion in Jagannatha Puri until the Lord&rsquo;s
              final days, Svarupa Damodara would not leave His side again.
              This is his story.
            </p>
          </section>

          {/* -------------------------------------------------------- */}
          {/* TABLE OF CONTENTS                                        */}
          {/* -------------------------------------------------------- */}
          <nav
            aria-label="Table of contents"
            className="mt-12 rounded-lg border border-[#C9A84C]/40 bg-white px-6 py-6 sm:px-8"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-4">
              In this article
            </p>
            <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2 list-decimal list-inside">
              <TocLink href="#quick-facts">Quick facts</TocLink>
              <TocLink href="#introduction">Introduction</TocLink>
              <TocLink href="#purvashram">Purvashram in Navadvipa</TocLink>
              <TocLink href="#sannyasa">Taking sannyasa in Varanasi</TocLink>
              <TocLink href="#reunion">Reunion with the Lord in Puri</TocLink>
              <TocLink href="#vishakha-sakhi">
                Identity: Vishakha-sakhi
              </TocLink>
              <TocLink href="#guardian-of-every-word">
                Guardian of every word before the Lord
              </TocLink>
              <TocLink href="#hidden-verse">
                The hidden verse of Rupa Gosvami
              </TocLink>
              <TocLink href="#life-and-soul">
                &ldquo;Life and soul of the devotees&rdquo;
              </TocLink>
              <TocLink href="#three-and-half">
                One of the &ldquo;three and a half&rdquo;
              </TocLink>
              <TocLink href="#separation">
                Companion in separation
              </TocLink>
              <TocLink href="#compiler">
                Compiler of the Lord&rsquo;s pastimes
              </TocLink>
              <TocLink href="#guardian-wellbeing">
                Guardian of the devotees&rsquo; wellbeing
              </TocLink>
              <TocLink href="#sankirtana-leader">
                Leader of sankirtana at Ratha-yatra
              </TocLink>
              <TocLink href="#disappearance">Disappearance</TocLink>
              <TocLink href="#lila-sthali">Lila sthali</TocLink>
              <TocLink href="#teaches-us">What he teaches us</TocLink>
              <TocLink href="#faq">Frequently asked questions</TocLink>
            </ol>
          </nav>

          {/* -------------------------------------------------------- */}
          {/* QUICK FACTS                                              */}
          {/* -------------------------------------------------------- */}
          <section id="quick-facts" className="mt-16">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#3D1A00] font-semibold tracking-tight mb-6">
              Quick Facts, at a Glance
            </h2>
            <dl className="rounded-lg border border-[#C9A84C]/40 bg-white px-6 py-2 sm:px-8">
              <QuickFactRow label="Purvashram name">
                Purushottama Acharya, a resident of Navadvipa, already
                devoted to Lord Chaitanya before His sannyasa
              </QuickFactRow>
              <QuickFactRow label="Sannyasa">
                Took brahmacharya/sannyasa in Varanasi under Chaitanyananda
                Bharati; renamed Damodara Svarupa, later Svarupa Damodara
              </QuickFactRow>
              <QuickFactRow label="Role in Puri">
                The Lord&rsquo;s personal secretary and literary examiner;
                every book, poem, or song meant for the Lord was first
                heard by him
              </QuickFactRow>
              <QuickFactRow label="Vraja identity">
                The gopi Vishakha-sakhi, per the Gaura-ganoddesa-dipika
                (147–160), who formerly taught Radharani the fine arts in
                Vraja
              </QuickFactRow>
              <QuickFactRow label="Rank among associates">
                One of Mahaprabhu&rsquo;s &ldquo;three and a half&rdquo;
                most confidential devotees in the entire world — with
                Ramananda Raya, Shikhi Mahiti, and (as the &ldquo;half&rdquo;)
                Shikhi Mahiti&rsquo;s sister Madhavi-devi
              </QuickFactRow>
              <QuickFactRow label="Known for">
                Singing to console Mahaprabhu in His moods of separation
                from Krishna; called &ldquo;life and soul of the
                devotees&rdquo;
              </QuickFactRow>
              <QuickFactRow label="Legacy">
                His diary (kadaca) — passed to Raghunatha dasa Gosvami,
                then to Krishnadasa Kaviraja Gosvami — forms the very
                basis of Sri Chaitanya-charitamrita
              </QuickFactRow>
              <QuickFactRow label="Principal lila sthalis">
                Navadvipa (purvashram) · Varanasi (sannyasa) · Gambhira /
                Satasan Math, Jagannatha Puri (residence and seva)
              </QuickFactRow>
            </dl>
          </section>

          {/* -------------------------------------------------------- */}
          {/* INTRODUCTION                                             */}
          {/* -------------------------------------------------------- */}
          <h2 id="introduction" className="gp-sh">Introduction</h2>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            Among all the associates of Sri Chaitanya Mahaprabhu, one name
            recurs more than almost any other in the pages of Sri
            Chaitanya-charitamrita: Svarupa Damodara Gosvami. He was the
            Lord&rsquo;s secretary, His literary censor, His singer in the
            night, and — in the final analysis — the very source through
            which the intimate pastimes of Chaitanya Mahaprabhu&rsquo;s
            last twelve years came to be known at all. Without Svarupa
            Damodara&rsquo;s notes, memorized by Raghunatha dasa Gosvami
            and passed to Krishnadasa Kaviraja Gosvami, the Antya-lila
            portion of Chaitanya-charitamrita as we know it would not
            exist.{" "}
            <span className="text-sm font-medium text-[#3D1A00]/60">
              (CC Madhya 2.84)
            </span>
          </p>
          <p className="mt-4 text-[#3D1A00]/90 leading-relaxed">
            What follows traces his life from a government scholar&rsquo;s
            household in Navadvipa, through a lonely sannyasa taken in
            grief in Varanasi, to the innermost circle of{" "}
            <strong className="font-semibold">
              His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami
              Prabhupada&rsquo;s
            </strong>{" "}
            beloved Sri Chaitanya Mahaprabhu&rsquo;s pastimes in Jagannatha
            Puri, as recorded in Srila Prabhupada&rsquo;s Sri
            Chaitanya-charitamrita.
          </p>

          {/* -------------------------------------------------------- */}
          {/* PURVASHRAM */}
          {/* -------------------------------------------------------- */}
          <h2 id="purvashram" className="gp-sh">
            Purvashram: Purushottama Acharya of Navadvipa
          </h2>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            Before he was known as Svarupa Damodara, he was Purushottama
            Acharya, a resident of Navadvipa who had already taken shelter
            of Sri Chaitanya Mahaprabhu&rsquo;s lotus feet in his youth,
            prior to the Lord&rsquo;s acceptance of the renounced order.{" "}
            <span className="text-sm font-medium text-[#3D1A00]/60">
              (CC Adi 4.105, purport)
            </span>
          </p>
          <p className="mt-4 text-[#3D1A00]/90 leading-relaxed">
            Srila Prabhupada notes that he was deeply learned and had a
            natural attraction to the mellows of pure devotion even before
            the sankirtana movement began in earnest.
          </p>
          <p className="mt-4 text-[#3D1A00]/90 leading-relaxed">
            When Sri Chaitanya Mahaprabhu accepted sannyasa, the news
            struck Purushottama Acharya like grief itself. Srila
            Prabhupada writes:
          </p>
          <blockquote className="gp-bq">
<p>When Svarupa Damodara was residing at Navadvipa under
            the shelter of Sri Caitanya Mahaprabhu, his name was
            Purusottama Acarya. After seeing that Sri Caitanya Mahaprabhu
            accepted the renounced order, Purusottama Acarya became like a
            madman and immediately went to Varanasi to take sannyasa.</p>
<cite>— CC Madhya 10.103–104</cite>
</blockquote>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            He could not bear to remain a householder while his beloved
            Lord had renounced the world; and so, almost in madness, he
            too left everything behind.
          </p>

          {/* -------------------------------------------------------- */}
          {/* SANNYASA */}
          {/* -------------------------------------------------------- */}
          <h2 id="sannyasa" className="gp-sh">
            Taking Sannyasa in Varanasi
          </h2>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            In Varanasi (Kashi), Purushottama Acharya accepted the
            renounced order under a sannyasa-guru named Chaitanyananda
            Bharati. At the conclusion of the ceremony, his guru gave him
            a striking instruction:
          </p>
          <blockquote className="gp-bq">
<p>Read the Vedanta-sutra and teach it to all others.</p>
<cite>— CC Madhya 10.105</cite>
</blockquote>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            Yet, as Srila Prabhupada explains, his heart was elsewhere:
          </p>
          <blockquote className="gp-bq">
<p>Svarupa Damodara was a great renunciant as well as a
            great learned scholar. With heart and soul he took shelter of
            the Supreme Personality of Godhead, Sri Krsna. He was very
            enthusiastic to worship Sri Krsna without disturbance, and
            therefore, almost in madness, he accepted the sannyasa
            order.</p>
<cite>— CC Madhya 10.106–107</cite>
</blockquote>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            He did not even complete the formal rituals of sannyasa in
            the conventional sense — accepting only the vairagi&rsquo;s
            simplicity, giving up his sacred thread and shikha — before
            setting out again to find his Lord. His sannyasa name, given
            in Varanasi, was Damodara Svarupa; Sri Chaitanya Mahaprabhu
            would later reorder the name to Svarupa Damodara, adding
            &ldquo;Damodara&rdquo; Himself in recognition of his
            exceptional devotion.
          </p>

          {/* -------------------------------------------------------- */}
          {/* REUNION */}
          {/* -------------------------------------------------------- */}
          <h2 id="reunion" className="gp-sh">
            Reunion with the Lord in Puri
          </h2>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            After receiving permission from his sannyasa-guru, Svarupa
            Damodara travelled to Nilachala (Jagannatha Puri) to take
            shelter of Sri Chaitanya Mahaprabhu once again. Srila
            Prabhupada describes the moment of arrival:
          </p>
          <blockquote className="gp-bq">
<p>Svarupa Damodara also arrived the next day. He was a
            very intimate friend of Sri Caitanya Mahaprabhu&rsquo;s, and
            he was an ocean of transcendental mellows.</p>
<cite>— CC Madhya 10.102</cite>
</blockquote>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            Falling at the Lord&rsquo;s feet, Svarupa Damodara begged
            forgiveness for having left His company:
          </p>
          <blockquote className="gp-bq">
<p>My dear Lord, please excuse my offense. I gave up Your
            company to go elsewhere, and that was my great mistake. I do
            not possess even a trace of love for Your lotus feet. If I
            did, how could I have gone to another country? I am therefore
            a most sinful man. I gave up Your company, but You did not
            give me up. By Your rope of mercy You have bound me by the
            neck and brought me back again to Your lotus feet.</p>
<cite>— CC Madhya 10.123–125</cite>
</blockquote>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            Sri Chaitanya Mahaprabhu raised him up and embraced him, both
            of Them overwhelmed with ecstatic love, and said the Lord had
            seen his arrival in a dream the night before — comparing his
            return to a blind man regaining sight.{" "}
            <span className="text-sm font-medium text-[#3D1A00]/60">
              (CC Madhya 10.120–122)
            </span>{" "}
            Svarupa Damodara then paid his respects in turn to Nityananda
            Prabhu, Jagadananda, Mukunda, Sankara, Sarvabhauma
            Bhattacharya, and Paramananda Puri, each of whom embraced him
            with joy.{" "}
            <span className="text-sm font-medium text-[#3D1A00]/60">
              (CC Madhya 10.126–128)
            </span>{" "}
            From that day, he did not leave the Lord&rsquo;s side again.
          </p>

          {/* -------------------------------------------------------- */}
          {/* VISHAKHA-SAKHI */}
          {/* -------------------------------------------------------- */}
          <h2 id="vishakha-sakhi" className="gp-sh">
            Identity: Vishakha-sakhi, the Second Self of Mahaprabhu
          </h2>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            In the Gaura-ganoddesa-dipika, the classical text of Kavi
            Karnapura identifying the eternal Vraja identities of Lord
            Chaitanya&rsquo;s associates, Svarupa Damodara is named as an
            incarnation of Vishakha-sakhi — the intimate gopi companion of
            Srimati Radharani who, in Krishna&rsquo;s Vrindavan pastimes,
            had taught Radharani the various fine arts.
          </p>
          <p className="mt-4 text-[#3D1A00]/90 leading-relaxed">
            Srila Prabhupada&rsquo;s own purport draws the relevant
            distinction while describing Gadadhara Pandita, whom the same
            text identifies as an incarnation of both Radharani and
            Lalita-sakhi:
          </p>
          <blockquote className="gp-bq">
<p>In the Gaura-ganoddesa-dipika (147–53) it is stated,
            &lsquo;Sri Krsna&rsquo;s pleasure potency, formerly known as
            Vrndavanesvari, is now personified in the form of Sri
            Gadadhara Pandita&hellip; Formerly, as Lalita-sakhi, she was
            always devoted to Srimati Radharani. Thus Gadadhara Pandita is
            simultaneously an incarnation of Srimati Radharani and
            Lalita-sakhi.&rsquo;</p>
<cite>— CC Adi 10.15, purport</cite>
</blockquote>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            Since Gadadhara Pandita is identified as Lalita-sakhi, the
            parallel identification of Svarupa Damodara in the
            Gaura-ganoddesa-dipika is with Vishakha-sakhi,
            Lalita&rsquo;s fellow intimate gopi.
          </p>
          <p className="mt-4 text-[#3D1A00]/90 leading-relaxed">
            Whether named Vishakha or Lalita, the essential point stands:
            as these two gopis are Srimati Radharani&rsquo;s most intimate
            confidantes in Krishna-lila, so Svarupa Damodara (together
            with Ramananda Raya) served as Sri Chaitanya Mahaprabhu&rsquo;s
            most intimate confidant in Gaura-lila.
          </p>

          {/* -------------------------------------------------------- */}
          {/* GUARDIAN OF EVERY WORD */}
          {/* -------------------------------------------------------- */}
          <h2 id="guardian-of-every-word" className="gp-sh">
            The Guardian of Every Word Spoken Before the Lord
          </h2>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            Svarupa Damodara&rsquo;s scholarship was, in Srila
            Prabhupada&rsquo;s words, without limit — yet he rarely
            spoke, preferring solitude and silence except in service to
            the Lord:
          </p>
          <blockquote className="gp-bq">
<p>Svarupa Damodara was the limit of all learned
            scholarship, but he did not exchange words with anyone. He
            simply remained in a solitary place, and no one could
            understand where he was.</p>
<cite>— CC Madhya 10.110</cite>
</blockquote>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            Yet within this silence lay an extraordinary responsibility.
            Whenever a devotee wished to present a book, poem, or song
            before Sri Chaitanya Mahaprabhu, it first had to pass through
            Svarupa Damodara&rsquo;s examination:
          </p>
          <blockquote className="gp-bq">
<p>Sri Svarupa Damodara was the personification of
            ecstatic love, fully cognizant of the transcendental mellows
            in relationship with Krsna. He directly represented Sri
            Caitanya Mahaprabhu as His second expansion. If someone wrote
            a book or composed verses and songs and wanted to recite them
            before Sri Caitanya Mahaprabhu, Svarupa Damodara would first
            examine them and then correctly present them.</p>
<cite>— CC Madhya 10.111–112</cite>
</blockquote>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            The Lord took no pleasure in hearing literature contrary to
            devotional conclusions (bhakti-siddhanta), or containing
            rasabhasa — an improper mixing of incompatible devotional
            mellows. Svarupa Damodara&rsquo;s examination protected the
            purity of everything the Lord heard.
          </p>

          {/* -------------------------------------------------------- */}
          {/* HIDDEN VERSE */}
          {/* -------------------------------------------------------- */}
          <h2 id="hidden-verse" className="gp-sh">
            The Hidden Verse of Rupa Gosvami
          </h2>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            One of the most cherished pastimes involving Svarupa Damodara
            took place during Rupa Gosvami&rsquo;s second meeting with Sri
            Chaitanya Mahaprabhu, after Rupa Gosvami had come to reside
            in Jagannatha Puri under the shelter of Haridasa Thakura.
            During Ratha-yatra, the Lord recited a verse again and again
            while dancing before the chariot — its purpose known to no
            one but Svarupa Damodara:
          </p>
          <blockquote className="gp-bq">
<p>Only Svarupa Damodara Gosvami knew the purpose for
            which the Lord recited that verse. According to the
            Lord&rsquo;s attitude, he used to quote other verses to
            enable the Lord to relish mellows.</p>
<cite>— CC Antya 1.76</cite>
</blockquote>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            Rupa Gosvami, however, could understand the Lord&rsquo;s
            intention, and composed a verse of his own in response — in
            the voice of Srimati Radharani, meeting Krishna again at
            Kurukshetra yet still longing for the forests of Vrindavana.{" "}
            <span className="text-sm font-medium text-[#3D1A00]/60">
              (CC Antya 1.77–79)
            </span>{" "}
            He wrote it on a palm leaf and tucked it into the thatch of
            his roof before leaving to bathe in the sea:
          </p>

          <div className="gp-verse">
    <div className="gp-verse-skt">
        yaḥ kaumāra-haraḥ sa eva hi varas tā eva caitra-kṣapās
te conmīlita-mālatī-surabhayaḥ prauḍhāḥ kadambānilāḥ
sā caivāsmi tathāpi tatra surata-vyāpāra-līlā-vidhau
revā-rodhasi vetasī-taru-tale cetaḥ samutkaṇṭhate
    </div>
    <div className="gp-verse-body">
        <p>That very personality who stole my heart during my youth
                is now again my master. These are the same moonlit nights
                of the month of Caitra. The same fragrance of mālatī
                flowers is there, and the same sweet breezes are blowing
                from the kadamba forest. In our intimate relationship, I
                am also the same lover, yet still my mind is not happy
                here. I am eager to go back to that place on the bank of
                the Revā under the Vetasī tree. That is my desire.</p>
        <cite>— CC Antya 1.78</cite>
    </div>
</div>

          <div className="gp-verse">
    <div className="gp-verse-skt">
        priyaḥ so 'yaṁ kṛṣṇaḥ saha-cari kuru-kṣetra-militas
tathāhaṁ sā rādhā tad idam ubhayoḥ saṅgama-sukham
tathāpy antaḥ-khelan-madhura-muralī-pañcama-juṣe
mano me kālindī-pulina-vipināya spṛhayati
    </div>
    <div className="gp-verse-body">
        <p>My dear friend, now I have met My very old and dear
                friend Krishna on this field of Kurukshetra. I am the
                same Radharani, and now We are meeting together. It is
                very pleasant, but I would still like to go to the bank
                of the Yamuna beneath the trees of the forest there. I
                wish to hear the vibration of His sweet flute playing the
                fifth note within that forest of Vrindavana.</p>
        <cite>— CC Antya 1.79</cite>
    </div>
</div>

          <blockquote className="gp-bq">
<p>After writing this verse on a palm leaf, Rupa Gosvami
            put it somewhere in his thatched roof and went to bathe in
            the sea. At that time, Sri Caitanya Mahaprabhu went there to
            meet him, and when He saw the leaf pushed into the roof and
            saw the verse, He began to read it. After reading the verse,
            Sri Caitanya Mahaprabhu was overwhelmed by ecstatic
            love.</p>
<cite>— CC Antya 1.80–82</cite>
</blockquote>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            When Rupa Gosvami returned and fell at His feet, the Lord
            embraced him, exclaiming, &ldquo;My heart is very
            confidential. How did you know My mind in this way?&rdquo;{" "}
            <span className="text-sm font-medium text-[#3D1A00]/60">
              (CC Antya 1.83–84)
            </span>{" "}
            He then brought the verse to Svarupa Damodara for examination,
            asking how Rupa Gosvami could possibly have understood His
            inner mind. Svarupa Damodara&rsquo;s reply became a defining
            statement on how such realization is possible at all:
          </p>
          <blockquote className="gp-bq">
<p>No one could otherwise understand this meaning. I can
            therefore guess that previously You bestowed upon him Your
            causeless mercy.</p>
<cite>— CC Antya 1.87</cite>
</blockquote>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            The Lord confirmed that He had indeed empowered Rupa Gosvami
            at their first meeting in Prayaga, and asked Svarupa Damodara
            to personally continue his instruction in the confidential
            truths of transcendental mellows — a request that would shape
            the entire literary mission of the Gosvamis of Vrindavan.{" "}
            <span className="text-sm font-medium text-[#3D1A00]/60">
              (CC Antya 1.88–90)
            </span>
          </p>

          {/* -------------------------------------------------------- */}
          {/* LIFE AND SOUL */}
          {/* -------------------------------------------------------- */}
          <h2 id="life-and-soul" className="gp-sh">
            &ldquo;Life and Soul of the Devotees&rdquo;
          </h2>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            Krishnadasa Kaviraja Gosvami&rsquo;s summary of Svarupa
            Damodara&rsquo;s character is among the most quoted
            descriptions of any of the Lord&rsquo;s associates:
          </p>
          <blockquote className="gp-bq">
<p>Svarupa Damodara was as expert a musician as the
            Gandharvas, and in scriptural discussion he was just like
            Brhaspati, the priest of the heavenly gods. Therefore it is
            to be concluded that there was no great personality quite
            like Svarupa Damodara. Sri Svarupa Damodara was very dear to
            Advaita Acarya and Nityananda Prabhu, and he was the life and
            soul of all the devotees, headed by Srivasa Thakura.</p>
<cite>— CC Madhya 10.116–117</cite>
</blockquote>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            He compiled a treatise on music called Sangita-Damodara,
            reflecting his mastery of both devotional science and the
            performing arts — talents he placed entirely in the service
            of Sri Chaitanya Mahaprabhu&rsquo;s pleasure.
          </p>

          {/* -------------------------------------------------------- */}
          {/* THREE AND A HALF */}
          {/* -------------------------------------------------------- */}
          <h2 id="three-and-half" className="gp-sh">
            One of Mahaprabhu&rsquo;s &ldquo;Three and a Half&rdquo; Most
            Confidential Devotees
          </h2>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            Srila Prabhupada makes a striking statement about just how
            rare Svarupa Damodara&rsquo;s position was. Describing
            Madhavi-devi, the sister of another confidential devotee
            named Shikhi Mahiti, he writes:
          </p>
          <blockquote className="gp-bq">
<p>The three were Svarupa Gosani, Sri Ramananda Raya and
            Sikhi Mahiti, and Sikhi Mahiti&rsquo;s sister, Madhavidevi,
            being a woman, was considered the half. Thus it is known that
            Sri Caitanya Mahaprabhu had three and a half confidential
            devotees.</p>
<cite>— CC Adi 10.137, purport; cf. Antya 2.104–106</cite>
</blockquote>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            In the entire world, in other words, only three and a half
            people were counted worthy of the Lord&rsquo;s most
            confidential association — and Svarupa Damodara stood first
            among them. This context sharpens everything that follows:
            the singing through the nights, the guardianship of every
            verse presented to the Lord, and the role as keeper of
            pastimes too intimate for general disclosure were not simply
            duties Svarupa Damodara happened to perform. They were
            entrusted to him because, in the Lord&rsquo;s own inner
            circle, there was almost no one else to entrust them to.
          </p>

          {/* -------------------------------------------------------- */}
          {/* SEPARATION */}
          {/* -------------------------------------------------------- */}
          <h2 id="separation" className="gp-sh">
            Constant Companion in the Mood of Separation
          </h2>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            During the final twelve years of His manifest pastimes in
            Jagannatha Puri, Sri Chaitanya Mahaprabhu remained absorbed,
            day and night, in the mood of Radharani&rsquo;s separation
            from Krishna. Only two devotees were capable of relishing and
            easing this ecstasy with Him: Svarupa Damodara and Ramananda
            Raya.
          </p>
          <blockquote className="gp-bq">
<p>He also passed His time reading the books and singing
            the songs of Candidasa and Vidyapati, and listening to
            quotations from the Jagannatha-vallabha-nataka,
            Krsna-karnamrta and Gita-govinda. Thus in the association of
            Svarupa Damodara and Raya Ramananda, Sri Caitanya Mahaprabhu
            passed His days and nights chanting and hearing with great
            pleasure.</p>
<cite>— CC Madhya 2.77</cite>
</blockquote>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            Srila Prabhupada explains that Sri Chaitanya Mahaprabhu
            experienced four kinds of loving relationships with different
            devotees, and that with Gadadhara Pandita, Jagadananda, and
            Svarupa Damodara, His relationship was specifically in the
            ecstasy of conjugal love (madhurya-rasa):
          </p>
          <blockquote className="gp-bq">
<p>Among His associates, Lord Caitanya Mahaprabhu enjoyed
            paternal loving affection from Paramananda Puri, friendly
            affection with Ramananda Raya, unalloyed service from Govinda
            and others, and humors of conjugal love with Gadadhara,
            Jagadananda and Svarupa Damodara.</p>
<cite>— CC Madhya 2.78</cite>
</blockquote>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            In the depths of His separation, the Lord once addressed
            Svarupa Damodara and Ramananda Raya together, calling them
            His very life:
          </p>
          <blockquote className="gp-bq">
<p>My dear friends, you are all My life and soul;
            therefore I tell you that I possess no wealth of love for
            Krsna. Consequently My life is poverty-stricken.</p>
<cite>— CC Madhya 2.40</cite>
</blockquote>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            Whatever mood arose in the Lord&rsquo;s heart, Svarupa
            Damodara would meet it with a song or verse of matching
            sentiment, easing the Lord&rsquo;s transcendental agony
            through the night.
          </p>

          {/* -------------------------------------------------------- */}
          {/* COMPILER */}
          {/* -------------------------------------------------------- */}
          <h2 id="compiler" className="gp-sh">
            Compiler of the Lord&rsquo;s Pastimes
          </h2>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            Perhaps Svarupa Damodara&rsquo;s most far-reaching service was
            one few devotees witnessed directly: he kept a personal diary
            (kadaca) recording the Lord&rsquo;s daily pastimes, moods, and
            conversations. Srila Prabhupada affirms this as the very
            foundation of Sri Chaitanya-charitamrita itself:
          </p>
          <blockquote className="gp-bq">
<p>His later pastimes [the madhya-lila and antya-lila]
            were recorded in the form of notes by His secretary, Svarupa
            Damodara Gosvami, and thus kept within a book.</p>
<cite>— CC Adi 13.16</cite>
</blockquote>
          <blockquote className="gp-bq">
<p>The pastimes of Sri Caitanya Mahaprabhu are the topmost
            of jewels. They have been kept in the storehouse of Svarupa
            Damodara Gosvami, who has explained them to Raghunatha dasa
            Gosvami, who has repeated them to me.</p>
<cite>— CC Madhya 2.84</cite>
</blockquote>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            This transmission had a formal beginning. When Raghunatha dasa
            Gosvami first came to Jagannatha Puri to take shelter of Sri
            Chaitanya Mahaprabhu, the Lord placed him directly under
            Svarupa Damodara&rsquo;s care:
          </p>
          <blockquote className="gp-bq">
<p>When Raghunatha dasa Gosvami approached Sri Caitanya
            Mahaprabhu at Jagannatha Puri, the Lord entrusted him to the
            care of Svarupa Damodara, His secretary. Thus they both
            engaged in the confidential service of the Lord. He rendered
            confidential service to the Lord for sixteen years at
            Jagannatha Puri.</p>
<cite>— CC Adi 10.92–93</cite>
</blockquote>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            For sixteen years, Raghunatha dasa Gosvami served as Svarupa
            Damodara&rsquo;s close assistant, absorbing the inner details
            of the Lord&rsquo;s pastimes firsthand.{" "}
            <span className="text-sm font-medium text-[#3D1A00]/60">
              (CC Adi 10.97)
            </span>{" "}
            After Svarupa Damodara&rsquo;s disappearance, Raghunatha dasa
            Gosvami — who had memorized his notes — carried this treasury
            to Vrindavana, where he eventually shared it with Krishnadasa
            Kaviraja Gosvami. This chain of transmission, from the Lord
            to Svarupa Damodara to Raghunatha dasa Gosvami to Kaviraja
            Gosvami, is the literal disciplic line through which
            Chaitanya-charitamrita reached the world.{" "}
            <span className="text-sm font-medium text-[#3D1A00]/60">
              (CC Madhya 8.312)
            </span>{" "}
            Even the opening verse of the entire work — &ldquo;radha-krsna-
            pranaya-vikrtir hladini saktih&rdquo; — is drawn directly from
            Svarupa Damodara&rsquo;s own diary.{" "}
            <span className="text-sm font-medium text-[#3D1A00]/60">
              (CC Adi 4.55)
            </span>
          </p>

          {/* -------------------------------------------------------- */}
          {/* GUARDIAN OF WELLBEING */}
          {/* -------------------------------------------------------- */}
          <h2 id="guardian-wellbeing" className="gp-sh">
            Guardian of the Devotees&rsquo; Wellbeing
          </h2>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            Svarupa Damodara&rsquo;s care extended beyond scripture and
            song to the simplest daily needs of the Vaishnava community.
            During prasadam distribution at the Ratha-yatra festivities,
            seven devotees headed by him personally served the food to
            the assembled devotees:
          </p>
          <blockquote className="gp-bq">
<p>The seven persons headed by Svarupa Damodara who were
            engaged in distributing prasadam to others then took their
            meals within the room.</p>
<cite>— CC Madhya 12.200</cite>
</blockquote>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            On another occasion, when Sri Chaitanya Mahaprabhu hesitated
            to sit and eat until the other devotees had been served, it
            was Svarupa Damodara who gently but firmly insisted:
          </p>
          <blockquote className="gp-bq">
<p>Unless You sit and take prasadam, no one will accept
            it.</p>
<cite>— CC Madhya 11.202</cite>
</blockquote>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            Small as these moments are, they reveal a devotee equally at
            home in the heights of rasa-tattva and in the humble,
            practical service of ensuring every Vaishnava was fed.
          </p>

          {/* -------------------------------------------------------- */}
          {/* SANKIRTANA LEADER */}
          {/* -------------------------------------------------------- */}
          <h2 id="sankirtana-leader" className="gp-sh">
            Leader of the Sankirtana at Ratha-yatra
          </h2>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            During the annual Ratha-yatra festival, Svarupa Damodara held
            a position of central importance among the kirtana
            performers:
          </p>
          <blockquote className="gp-bq">
<p>The two chief performers were Svarupa Damodara and
            Srivasa Thakura&hellip; Svarupa Damodara was chosen as the
            leader of the first party and was given five assistants to
            respond to his chanting.</p>
<cite>— CC Madhya 13.32–36</cite>
</blockquote>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            His five responsive singers were Damodara Pandita, Narayana,
            Govinda Datta, Raghava Pandita, and Sri Govindananda.{" "}
            <span className="text-sm font-medium text-[#3D1A00]/60">
              (CC Madhya 13.37)
            </span>{" "}
            When the Lord wished to jump high in ecstatic dance, it was a
            group of nine devotees under Svarupa Damodara&rsquo;s direct
            charge who ran and sang beside Him to sustain the kirtana.{" "}
            <span className="text-sm font-medium text-[#3D1A00]/60">
              (CC Madhya 13.74–75)
            </span>
          </p>

          {/* -------------------------------------------------------- */}
          {/* DISAPPEARANCE */}
          {/* -------------------------------------------------------- */}
          <h2 id="disappearance" className="gp-sh">Disappearance</h2>
          <p className="text-[#3D1A00]/90 leading-relaxed">
            Sri Svarupa Damodara Gosvami remained at Sri Chaitanya
            Mahaprabhu&rsquo;s side through the entirety of the
            Lord&rsquo;s last twelve years in Jagannatha Puri, right hand
            in service alongside his own disciple, Raghunatha dasa
            Gosvami. Traditional Gaudiya Vaishnava sources place his
            disappearance on the second day of the full moon (dvitiya) in
            the month of Ashadha — in some accounts coinciding with the
            season of Ratha-yatra itself. After his disappearance,
            Raghunatha dasa Gosvami — who had memorized his notes —
            departed for Vrindavana, carrying with him the treasury of
            pastimes that would become Sri Chaitanya-charitamrita.
          </p>

          {/* -------------------------------------------------------- */}
          {/* LILA STHALI */}
          {/* -------------------------------------------------------- */}
          <h2 id="lila-sthali" className="gp-sh">
            Lila Sthali: Places to Remember Svarupa Damodara Gosvami
          </h2>
          <p className="text-[#3D1A00]/70 text-sm italic leading-relaxed">
            The core pastimes above are drawn from Srila
            Prabhupada&rsquo;s Sri Chaitanya-charitamrita, with exact
            verse citations given inline. The site descriptions below
            draw additionally on temple and pilgrimage tradition, offered
            as supplementary context for pilgrims — sources are noted
            inline within each entry and are clearly distinguished from
            the primary scriptural record.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <LilaSthaliCard number={1} place="Navadvipa" region="West Bengal">
              Purvashram as Purushottama Acharya. Before his sannyasa,
              Svarupa Damodara lived here, already devoted to Sri
              Chaitanya Mahaprabhu in his youth.{" "}
              <span className="text-xs text-[#3D1A00]/50">
                (CC Madhya 10.103)
              </span>{" "}
              Navadvipa, on the banks of the Ganges in Nadia district, is
              the birthplace and early pastime-site of Lord Chaitanya
              Himself and a major pilgrimage circuit for Gaudiya
              Vaishnavas.
            </LilaSthaliCard>
            <LilaSthaliCard
              number={2}
              place="Varanasi (Kashi)"
              region="Uttar Pradesh"
            >
              Site of his sannyasa. Upon hearing of Mahaprabhu&rsquo;s
              sannyasa, Purushottama Acharya travelled here and accepted
              the renounced order under Chaitanyananda Bharati.{" "}
              <span className="text-xs text-[#3D1A00]/50">
                (CC Madhya 10.104–105)
              </span>{" "}
              Varanasi is one of the most ancient pilgrimage cities in
              India, and was also where Sri Chaitanya Mahaprabhu Himself
              taught the Vedanta-sutra to the Mayavadi sannyasis there.
            </LilaSthaliCard>
            <LilaSthaliCard
              number={3}
              place="Gambhira &amp; Satasan Math"
              region="Jagannatha Puri, Odisha"
            >
              His life&rsquo;s central seva. It was here that Svarupa
              Damodara spent the rest of his manifest life, constantly at
              Sri Chaitanya Mahaprabhu&rsquo;s side.{" "}
              <span className="text-xs text-[#3D1A00]/50">
                (CC Madhya 10.109 onward)
              </span>{" "}
              Secondary tradition places his personal residence at a site
              remembered as &ldquo;Satasan Math,&rdquo; near the ocean at
              Svargadvara, not far from Bhaktivinoda Thakura&rsquo;s
              Bhakti Kutir. The Gambhira — Kashi Mishra&rsquo;s house,
              where Mahaprabhu spent His final twelve years — is open to
              pilgrims today.
            </LilaSthaliCard>
          </div>

          <div className="gp-image-container mt-12 mb-8">
              <img
                  src="/assets/blog/svarupa-damodara-gosvami/gambhira.png"
                  alt="Sri Gambhira, Jagannatha Puri"
                  className="gp-image rounded-xl shadow-lg border border-[#C9A84C]/20"
              />
              <span className="gp-image-caption text-sm text-[#3D1A00]/70 italic text-center block mt-2">
                  Sri Gambhira, Jagannatha Puri — the sacred residence where Sri Chaitanya Mahaprabhu performed His profound internal pastimes, lovingly attended by Svarupa Damodara Goswami
              </span>
          </div>

          {/* -------------------------------------------------------- */}
          {/* TEACHES US */}
          {/* -------------------------------------------------------- */}
          <h2 id="teaches-us" className="gp-sh">
            What Svarupa Damodara Gosvami Teaches Us
          </h2>
          <p className="text-[#3D1A00]/90 leading-relaxed mb-6">
            Several enduring lessons emerge from Srila Prabhupada&rsquo;s
            presentation of Svarupa Damodara&rsquo;s life:
          </p>
          <ul className="space-y-4">
            <TeachingItem title="Renunciation born of love, not calculation.">
              He left everything — status, scholarship, comfort — not
              through detached philosophy but through an unbearable
              longing to remain near his Lord.
            </TeachingItem>
            <TeachingItem title="Guarding purity without pride.">
              Though the examiner of everything presented to Sri
              Chaitanya Mahaprabhu, he remained famously silent and
              unassuming, never asserting his position over others.
            </TeachingItem>
            <TeachingItem title="Scholarship placed entirely in service.">
              His unmatched command of music and scripture were never
              ends in themselves — they existed solely to bring the Lord
              transcendental happiness.
            </TeachingItem>
            <TeachingItem title="Presence in another's pain.">
              Night after night, through the Lord&rsquo;s deepest anguish
              of separation, Svarupa Damodara simply stayed — singing,
              listening, and absorbing what he could not fully explain to
              others.
            </TeachingItem>
            <TeachingItem title="Humble service alongside high realization.">
              The same devotee who alone understood Sri Chaitanya
              Mahaprabhu&rsquo;s most confidential moods also quietly
              insisted the Lord sit down and eat with everyone else.
            </TeachingItem>
          </ul>

          {/* -------------------------------------------------------- */}
          {/* FAQ */}
          {/* -------------------------------------------------------- */}
          <h2 id="faq" className="gp-sh">Frequently Asked Questions</h2>
          <div className="space-y-3">
            <FaqItem question="Who was Sri Svarupa Damodara Gosvami?">
              He was the personal secretary and most intimate confidant of
              Sri Chaitanya Mahaprabhu during His years in Jagannatha
              Puri, formerly known as Purushottama Acharya of Navadvipa.
              He examined all literature presented to the Lord, sang to
              console Him in separation from Krishna, and kept the diary
              that became the basis of Sri Chaitanya-charitamrita.
            </FaqItem>
            <FaqItem question="What was Svarupa Damodara's identity in Krishna's Vrindavan pastimes?">
              The Gaura-ganoddesa-dipika identifies him as the gopi
              Vishakha-sakhi, one of Srimati Radharani&rsquo;s most
              intimate companions and, along with Lalita-sakhi, Her
              closest confidante in Krishna-lila.
            </FaqItem>
            <FaqItem question="Why did he take sannyasa?">
              When Purushottama Acharya learned that Sri Chaitanya
              Mahaprabhu had accepted the renounced order, he was
              overcome with a longing he could not bear as a householder,
              and travelled to Varanasi to take sannyasa himself under
              Chaitanyananda Bharati.
            </FaqItem>
            <FaqItem question="What was his role in compiling Chaitanya-charitamrita?">
              Svarupa Damodara kept a personal diary of the Lord&rsquo;s
              daily pastimes and moods. After his disappearance, his
              disciple Raghunatha dasa Gosvami, who had memorized these
              notes, carried them to Vrindavana and shared them with
              Krishnadasa Kaviraja Gosvami, who used them as the primary
              source for Sri Chaitanya-charitamrita.
            </FaqItem>
            <FaqItem question="What is the famous pastime involving Rupa Gosvami and a hidden verse?">
              Sri Chaitanya Mahaprabhu once recited a verse whose meaning
              only Svarupa Damodara understood. Rupa Gosvami, present by
              chance, composed a verse revealing its meaning and hid it
              on a palm leaf, which the Lord later discovered and read
              with great ecstasy — leading Him to ask Svarupa Damodara to
              further instruct Rupa Gosvami in the confidential truths of
              rasa.
            </FaqItem>
            <FaqItem question="Where are the lila sthalis associated with Svarupa Damodara Gosvami?">
              His principal associated sites are Navadvipa in West Bengal
              (his purvashram as Purushottama Acharya), Varanasi (where
              he took sannyasa), and Jagannatha Puri, Odisha,
              particularly the Gambhira and the site remembered as
              Satasan Math, where he served the Lord for the rest of his
              life.
            </FaqItem>
          </div>

          
        {/* ── EVENT CALLOUT ── */}
                <div className="mt-16 rounded-2xl bg-[#FDF6E3] border border-[#C9A84C]/20 p-6 sm:p-10 shadow-sm relative overflow-hidden mb-12">
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#3D1A00] font-semibold text-center mb-2">Visit Daksina Dvaraka Dham, Chennai</h3>
                    <p className="text-center font-bold text-[#C9A84C] text-[0.8rem] sm:text-sm tracking-wide uppercase mb-6">ISKCON Thiruvanmiyur, Chennai</p>
                    <p className="text-center text-[#3D1A00]/80 italic mb-8 max-w-lg mx-auto text-base sm:text-lg">Join us for daily Srimad-Bhagavatam classes, sankirtana and deity darsana</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base font-semibold text-[#3D1A00]/90 max-w-2xl mx-auto">
                        <li className="bg-white px-4 py-4 rounded-xl border border-[#C9A84C]/30 shadow-sm flex items-center justify-center text-center hover:border-[#C9A84C] transition-colors leading-tight">Morning Arati 4:30 AM</li>
                        <li className="bg-white px-4 py-4 rounded-xl border border-[#C9A84C]/30 shadow-sm flex items-center justify-center text-center hover:border-[#C9A84C] transition-colors leading-tight">Bhagavatam Class 8.05 AM</li>
                        <li className="bg-white px-4 py-4 rounded-xl border border-[#C9A84C]/30 shadow-sm flex items-center justify-center text-center hover:border-[#C9A84C] transition-colors leading-tight">Evening Arati 7:00 PM</li>
                        <li className="bg-white px-4 py-4 rounded-xl border border-[#C9A84C]/30 shadow-sm flex items-center justify-center text-center hover:border-[#C9A84C] transition-colors leading-tight">Harinaam sankirtan 7.35 AM</li>
                    </ul>
                </div>

                
                <BlogConnectSection />
<footer className="gp-blog-footer">
                    <p>Hare Krishna Movement Chennai | Daksina Dvaraka Dham, Thiruvanmiyur</p>
                    <p>Affiliated to ISKCON Bangalore | Non-Profit Charitable Organisation Regn. No. 828, Chennai, 2008</p>
                </footer>
</div>
      </article>
<Footer />
</main>
        </>
    )
}
