import React from 'react'
import { Metadata } from 'next'
import BlogClient from './BlogClient'
import Head from 'next/head'

export const metadata: Metadata = {
    title: 'Chhera Pahara and Jagannath Ratha Yatra: Why the King of Puri Sweeps the Chariots',
    description: 'Discover Chhera Pahara, the ritual where the King of Puri sweeps Lord Jagannath\'s chariots, and its account in Chaitanya-charitamrita, Madhya-lila 13.',
    keywords: 'Chhera Pahara, Chhera Pahara meaning, King of Puri sweeps chariot, Gajapati Maharaja Chhera Pahara, Prataparudra Chaitanya-charitamrita, Chhera Pahanra ritual, Ratha Yatra Pahandi Chhera Pahara, Dibyasingha Deb Gajapati, Jagannath chariot golden broom, Purushottama Deva Padmavati legend, Kanchi Kaveri Upakhyana, Manika milkmaid Jagannath ring, Saluva Narasimha Kanchi Puri',
    openGraph: {
        title: 'Chhera Pahara and Jagannath Ratha Yatra: Why the King of Puri Sweeps the Chariots',
        description: 'Discover Chhera Pahara, the ritual where the King of Puri sweeps Lord Jagannath\'s chariots, and its account in Chaitanya-charitamrita, Madhya-lila 13.',
        url: 'https://hkm-chennai.vercel.app/blog/chhera-pahara-jagannath-ratha-yatra',
        siteName: 'HKM Chennai',
        images: [
            {
                url: 'https://hkm-chennai.vercel.app/images/chhera-pahara/King_Prataparudra_sweeping_the_chariot_path_during_Chhera_Pahara.png',
                width: 1200,
                height: 630,
                alt: 'King Prataparudra sprinkling sandalwood water before Lord Jagannath\'s chariot',
            }
        ],
        type: 'article',
    }
}

export default function ChheraPaharaPage() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Chhera Pahara and Jagannath Ratha Yatra: Why the King of Puri Sweeps the Chariots",
        "image": [
            "https://hkm-chennai.vercel.app/images/chhera-pahara/King_Prataparudra_sweeping_the_chariot_path_during_Chhera_Pahara.png"
        ],
        "datePublished": "2026-07-09T08:00:00+08:00",
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
                "name": "What does Chhera Pahara mean?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Chhera Pahara (also spelled Chhera Pahanra) is an Odia term for the sweeping and sprinkling of the chariot platforms, performed by the King of Puri before the chariots move."
                }
            },
            {
                "@type": "Question",
                "name": "Who performs Chhera Pahara?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Gajapati King of Puri performs it. Chaitanya-charitamrita records King Prataparudra performing it during Sri Chaitanya Mahaprabhu's time; today it is performed by the current Gajapati Maharaja, Dibyasingha Deb."
                }
            },
            {
                "@type": "Question",
                "name": "How many times is Chhera Pahara performed during Ratha Yatra?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Twice: once after Pahandi, before the chariots depart for the Gundicha Temple, and again before the Bahuda Yatra return journey."
                }
            },
            {
                "@type": "Question",
                "name": "Why did Sri Chaitanya Mahaprabhu react to this ritual?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Chaitanya-charitamrita, Madhya-lila 13.18, states that Sri Chaitanya Mahaprabhu became very happy upon seeing King Prataparudra accept this menial service, since his willingness to do so, despite his rank, made him a suitable candidate for the Lord's mercy."
                }
            },
            {
                "@type": "Question",
                "name": "Is Chhera Pahara connected to Pahandi?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Both are described in the same chapter of Chaitanya-charitamrita, Madhya-lila 13, and Chhera Pahara takes place immediately after Pahandi, while the deities are being placed on Their chariots, and before the chariots are pulled."
                }
            },
            {
                "@type": "Question",
                "name": "Is there a legend about Chhera Pahara besides the Chaitanya-charitamrita account?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Odia tradition tells of an earlier king, Purushottama Deva (Prataparudra's father), whose performance of Chhera Pahara caused a southern king to refuse him marriage to his daughter Padmavati, calling him a mere sweeper. Purushottama Deva later won her hand after defeating that king in battle, in a story known as the Kanchi-Kaveri Upakhyana. This is a popular legend, not a scriptural account, and historians differ on how much of it is historical."
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
