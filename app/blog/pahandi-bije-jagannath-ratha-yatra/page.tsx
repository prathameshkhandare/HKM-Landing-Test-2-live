import React from 'react'
import { Metadata } from 'next'
import BlogClient from './BlogClient'
import Head from 'next/head'

export const metadata: Metadata = {
    title: 'Pahandi Bije: How Lord Jagannath Is Carried to His Chariot at Ratha Yatra',
    description: 'Discover Pahandi Bije, the sacred procession that carries Lord Jagannath to His chariot at Ratha Yatra, and its detailed account in Chaitanya-charitamrita.',
    keywords: 'Pahandi Bije, Pahandi meaning Jagannath, Pandu-vijaya Chaitanya-charitamrita, order of deities Pahandi procession, Jagannath carried to chariot ritual, Dhadi Pahandi Goti Pahandi, Chaitanya Mahaprabhu Manima Jagannath, Ratha Yatra Pahandi Chhera Pahara, dayitapati Jagannath temple servitors, Pahandi Bije ISKCON, Senapata lagi ritual Jagannath, tahia Raghavadasa matha Jagannath',
    openGraph: {
        title: 'Pahandi Bije: How Lord Jagannath Is Carried to His Chariot at Ratha Yatra',
        description: 'Discover Pahandi Bije, the sacred procession that carries Lord Jagannath to His chariot at Ratha Yatra, and its detailed account in Chaitanya-charitamrita.',
        url: 'https://hkm-chennai.vercel.app/blog/pahandi-bije-jagannath-ratha-yatra',
        siteName: 'HKM Chennai',
        images: [
            {
                url: 'https://hkm-chennai.vercel.app/images/pahandi-bije/Temple_servitors_carrying_Lord_Jagannath_in_the_Pahandi_procession_at_Puri.jfif',
                width: 1200,
                height: 630,
                alt: 'Temple servitors carrying Lord Jagannath in the Pahandi procession at Puri',
            }
        ],
        type: 'article',
    }
}

export default function PahandiBijePage() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Pahandi Bije: How Lord Jagannath Is Carried to His Chariot at Ratha Yatra",
        "image": [
            "https://hkm-chennai.vercel.app/images/pahandi-bije/Temple_servitors_carrying_Lord_Jagannath_in_the_Pahandi_procession_at_Puri.jfif"
        ],
        "datePublished": "2026-07-07T08:00:00+08:00",
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
                "name": "What does the word Pahandi mean?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pahandi refers to the slow, step-by-step procession in which the deities of Lord Jagannath, Balabhadra, and Subhadra are carried from Their throne to Their chariots. Sri Chaitanya-charitamrita refers to the same ceremony by its formal name, Pandu-vijaya."
                }
            },
            {
                "@type": "Question",
                "name": "In what order are the deities carried during Pahandi?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "According to the Dhadi Pahandi tradition followed for the outward journey, Sudarshana is carried first, followed by Balabhadra, then Subhadra, and finally Lord Jagannath, each secured with silken rope and carried on padded cotton platforms called tulis."
                }
            },
            {
                "@type": "Question",
                "name": "What did Sri Chaitanya Mahaprabhu do during Pahandi?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sri Chaitanya Mahaprabhu watched the procession in ecstasy and called out \"Manima! Manima!\" as an affectionate address to the Lord, though the sound of musical instruments and the crowd meant no one else could hear Him, as recorded in Sri Chaitanya-charitamrita, Madhya-lila 13.14."
                }
            },
            {
                "@type": "Question",
                "name": "Is Pahandi connected to the King sweeping the chariot path?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Chaitanya-charitamrita records that King Prataparudra swept the road with a golden-handled broom and sprinkled it with sandalwood water while the deities were being carried during Pahandi, a ritual now known as Chhera Pahara and covered in its own post in this series."
                }
            },
            {
                "@type": "Question",
                "name": "How does Pahandi fit into the overall Ratha Yatra sequence?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pahandi is the opening ritual act of Ratha Yatra day itself. It follows Netrotsava, the unveiling of the deities' freshly painted forms, and must be completed before the chariots can begin their journey to the Gundicha Temple."
                }
            },
            {
                "@type": "Question",
                "name": "What instruments and ornaments accompany the Pahandi procession?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The procession moves to the ghanta (a bell-metal gong), the kahali (trumpet), and the telingi baja (a cane drum). Lord Balabhadra and Lord Jagannath additionally wear tahia, tall floral crowns supplied by the Raghavadasa Matha, while Odissi dancers and sankirtana chanting accompany the deities toward the chariots."
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
