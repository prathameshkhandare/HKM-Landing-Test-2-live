"use client"

import React from "react"
import PhilosophyLayout from "@/components/PhilosophyLayout"
import { PrincipleList, Timeline, QuoteHighlight } from "@/components/PhilosophyWidgets"

export default function SriChaitanyaPage() {
    return (
        <PhilosophyLayout
            title="Sri Chaitanya Mahaprabhu"
            subtitle="The Golden Avatar"
            heroImage="/assets/hkm-about-community.jpg" 
        >
            <p>
                Five thousand years ago, Lord Krishna appeared on earth to reestablish the lost tenets of religion. His final and most important instruction in the Gita was: <em>“Abandon all varieties of religion and just surrender unto Me.”</em>
            </p>

            <h3 className="mt-12 text-center">The Compassionate Mission</h3>
            <Timeline items={[
                { title: "The Context", text: "In Kali-yuga, people were not qualified to understand the deep message of surrender given in the Gita." },
                { title: "The Appearance", text: "The Lord compassionately appeared 500 years ago in Bengal as Sri Chaitanya Mahaprabhu (1486 AD) to teach this practically." },
                { title: "The Method", text: "By His own demonstration, He taught the simplest way of surrender: chanting the Holy Names." }
            ]} />

            <QuoteHighlight 
                text="Philosophy of Sri Chaitanya Mahaprabhu is to remain in whatever position we are and simply chant the Hare Krishna Maha-mantra."
                author="Simplicity of the Path"
            />

            <h3 className="mt-12">The Sankirtana Movement</h3>
            <PrincipleList items={[
                { title: "Golden Avatar", text: "Appearing during a lunar eclipse in Mayapur, He is historically known as the founder of the Bhakti movement." },
                { title: "Congregational Chanting", text: "He inaugurated the Sankirtana movement - the congregational chanting of the Lord's holy names." },
                { title: "Highest Perfection", text: "This process not only liberates one from material existence but awards the rarest perfection: Love of Krishna." }
            ]} />
        </PhilosophyLayout>
    )
}
