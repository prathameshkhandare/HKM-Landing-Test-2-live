"use client"

import React from "react"
import PhilosophyLayout from "@/components/PhilosophyLayout"
import { PhilosophyCardGrid, PrincipleList, Timeline, QuoteHighlight } from "@/components/PhilosophyWidgets"

export default function KrishnaConsciousnessPage() {
    return (
        <PhilosophyLayout
            title="Krishna Consciousness"
            subtitle="The Perfection of Yoga"
            heroImage="/assets/hkm-about-education.png" 
        >
            <p>
                Krishna consciousness is not an artificial imposition on the mind; it is the original energy of the living entity. When we hear the transcendental vibration, this consciousness is revived.
            </p>

            <h3 className="mt-12 text-center">What is Krishna Consciousness?</h3>
            <PhilosophyCardGrid items={[
                { icon: "heart", title: "Full Knowledge", description: "It means to work in full knowledge of one’s relationship with the Supreme Absolute." },
                { icon: "star", title: "Original Position", description: "A pure soul is the eternal servant of God. We are meant to serve Him in a loving relationship." },
                { icon: "zap", title: "Revival", description: "It is the process of reforming our rebellious nature and re-establishing our lost relationship." }
            ]} />

            <h3 className="mt-12">The Analogy of Reformation</h3>
            <Timeline items={[
                { title: "The Rebellion", text: "When we refuse to serve the Supreme Lord and want to imitate Him, we are put into this material world." },
                { title: "The Prison", text: "Just like a citizen who breaks state laws is put into prison, the material world acts as a reform center." },
                { title: "The Reformation", text: "Krishna consciousness is the process of correction to make us eligible to return to the spiritual world." }
            ]} />

            <QuoteHighlight 
                text="Religion without philosophy is sentiment, and philosophy without religion is mental speculation."
                author="Srila Prabhupada"
            />

            <h3 className="mt-12">The Foundation</h3>
            <PrincipleList items={[
                { title: "Knowledge & Action", text: "One must have proper philosophical understanding based on bona fide scriptures and engage in practical religious actions." },
                { title: "Interdependence", text: "Knowledge guides us in proper action, and action helps us in realizing spiritual knowledge." },
                { title: "The Result", text: "Krishna consciousness stands on these two principles. By following this path, we become happy in this life and the next." }
            ]} />
        </PhilosophyLayout>
    )
}
