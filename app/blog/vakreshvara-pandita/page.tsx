import BlogClient from './BlogClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Sri Vakreshvara Pandita: The One Wing of Lord Chaitanya | Life, Lila & Lila Sthali",
    description: "Discover Sri Vakreshvara Pandita, the ecstatic dancer of Lord Chaitanya who danced 72 hours in sankirtana. Explore his life, the 'wing' pastime, Devananda Pandita's deliverance, and lila sthalis in Guptipara, Puri & Mayapur.",
    keywords: [
        "Vakreshvara Pandita",
        "Vakreshvara Pandita lila sthali",
        "who was Vakreshvara Pandita",
        "Lord Chaitanya one wing pastime",
        "Vakreshvara Pandita Guptipara",
        "Kashi Mishra house Gambhira Puri",
        "Srivasa Angan Mayapur",
        "Tungavidya gopi Vakreshvara",
        "Gaudiya Vaishnava associates of Chaitanya Mahaprabhu"
    ],
    openGraph: {
        title: "Sri Vakreshvara Pandita: The One Wing of Lord Chaitanya",
        description: "Discover Sri Vakreshvara Pandita, the ecstatic dancer of Lord Chaitanya who danced 72 hours in sankirtana.",
        images: [
            {
                url: '/assets/blog/vakreshvara-pandita/sri-vakreshvara-pandita.jpg',
                width: 1200,
                height: 630,
                alt: 'Sri Vakreshvara Pandita dancing in kirtana',
            }
        ],
        type: 'article',
        publishedTime: '2026-07-01',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Sri Vakreshvara Pandita: The One Wing of Lord Chaitanya",
        description: "Discover Sri Vakreshvara Pandita, the ecstatic dancer of Lord Chaitanya who danced 72 hours in sankirtana.",
        images: ['/assets/blog/vakreshvara-pandita/sri-vakreshvara-pandita.jpg'],
    },
    alternates: {
        canonical: "https://hkmchennai.org/blog/sri-vakreshvara-pandita-wing-of-lord-chaitanya",
    }
}

export default function SriVakreshvaraPanditaPage() {
    return <BlogClient />
}
