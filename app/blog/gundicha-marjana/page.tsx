import React from 'react'
import { Metadata } from 'next'
import BlogClient from './BlogClient'
import Head from 'next/head'

export const metadata: Metadata = {
    title: 'Gundicha Marjana: The Sacred Cleaning That Begins the Jagannath Ratha Yatra',
    description: 'Discover Gundicha Marjana, the sacred cleaning pastime of Sri Chaitanya Mahaprabhu before Jagannath Ratha Yatra, and its deep teaching on cleansing the heart.',
    openGraph: {
        title: 'Gundicha Marjana: The Sacred Cleaning That Begins the Jagannath Ratha Yatra',
        description: 'Discover Gundicha Marjana, the sacred cleaning pastime of Sri Chaitanya Mahaprabhu before Jagannath Ratha Yatra, and its deep teaching on cleansing the heart.',
        url: 'https://hkm-chennai.vercel.app/blog/gundicha-marjana-jagannath-ratha-yatra',
        siteName: 'HKM Chennai',
        images: [
            {
                url: 'https://hkm-chennai.vercel.app/assets/blog/gundicha-marjana/mahaprabhu-cleaning.png',
                width: 1200,
                height: 630,
                alt: 'Sri Chaitanya Mahaprabhu personally cleaning the Gundicha Temple with devotees before Ratha Yatra',
            }
        ],
        type: 'article',
    }
}

export default function GundichaMarjanaPage() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Gundicha Marjana: The Sacred Cleaning That Begins the Jagannath Ratha Yatra",
        "image": [
            "https://hkm-chennai.vercel.app/assets/blog/gundicha-marjana/mahaprabhu-cleaning.png"
        ],
        "datePublished": "2026-07-06T08:00:00+08:00",
        "author": {
            "@type": "Organization",
            "name": "Srila Prabhupada's ISKCON Thiruvanmiyur - Dakshina Dwaraka Dham"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is Gundicha Marjana?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Gundicha Marjana is the ceremonial cleansing of the Gundicha Temple in Puri, performed the day before Ratha Yatra to prepare the temple for the arrival of Lord Jagannath, Lord Balabhadra, and Devi Subhadra. Sri Chaitanya Mahaprabhu personally performed this cleaning with hundreds of devotees five hundred years ago."
                }
            },
            {
                "@type": "Question",
                "name": "When is Gundicha Marjana observed?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is observed every year on the day immediately preceding Ratha Yatra, as part of the preparations for the Lord's week-long stay at the Gundicha Temple."
                }
            },
            {
                "@type": "Question",
                "name": "Why does the Gundicha Temple need to be cleaned every year?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The temple stands empty for most of the year and, being open to the elements in traditional temple architecture, gathers dust and dirt. It must be thoroughly cleaned to be a fit residence for Lord Jagannath during His annual seven-day stay."
                }
            },
            {
                "@type": "Question",
                "name": "What does ceto-darpana-marjanam mean?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is the opening line of Sri Chaitanya Mahaprabhu's Shikshashtaka (Chaitanya-charitamrita, Antya-lila 20.12), meaning 'cleansing of the mirror of the heart.' It compares the heart to a dust-covered mirror that must be cleaned — through chanting the holy names — before one can perceive the Lord within."
                }
            },
            {
                "@type": "Question",
                "name": "How is Gundicha Marjana connected to Ratha Yatra?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is not a separate festival but the opening chapter of the Ratha Yatra story. In Sri Chaitanya Mahaprabhu's understanding, the main Jagannath Temple represents Dvaraka-Kurukshetra, and the Gundicha Temple represents Vrindavana. Cleansing the Gundicha Temple is the preparation of Vrindavana itself to receive Krishna, making Ratha Yatra a reunion, not merely a procession."
                }
            },
            {
                "@type": "Question",
                "name": "Did Sri Chaitanya Mahaprabhu really clean the temple Himself?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. According to Sri Chaitanya-charitamrita, Madhya-lila, Chapter 12, He personally swept, washed, and mopped the temple alongside hundreds of devotees, even using His own garment to clean the Deity's throne, and shed tears of love while doing so."
                }
            }
        ]
    };

    return (
        <>
            <Head>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            </Head>
            <BlogClient />
        </>
    )
}
