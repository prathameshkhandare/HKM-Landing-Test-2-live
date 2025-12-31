"use client"

import React from "react"
import PhilosophyLayout from "@/components/PhilosophyLayout"
import { PhilosophyCardGrid, PrincipleList, QuoteHighlight } from "@/components/PhilosophyWidgets"

export default function LordKrishnaPage() {
    return (
        <PhilosophyLayout
            title="Lord Sri Krishna"
            subtitle="The Supreme Personality of Godhead"
            heroImage="/assets/krishna-flute-art.jpg" 
        >
            <p>
                Lord Sri Krishna is popularly known as the charming blue-bodied, flute-bearing God who appeared on this planet about five thousand years ago to destroy the demons and reestablish religion. His glory is widespread as the disseminator of the matchless spiritual wisdom – <strong>Srimad Bhagavad-gita</strong>.
            </p>

            <QuoteHighlight 
                text="Ishvarah paramah krishnah sac-chid-ananda-vigrahah. Anadir adir govindah sarva-karana-karanam."
                author="Brahma-samhita 5.1"
            />

            <h3 className="mt-12 text-center">The Six Opulences of Bhagavan</h3>
            <PhilosophyCardGrid items={[
                { icon: "shield", title: "Unlimited Strength", description: "He possesses all strength to protect His devotees and annihilate the miscreants." },
                { icon: "star", title: "Unlimited Beauty", description: "His charming form attracts all living entities, hence the name Krishna (All-Attractive)." },
                { icon: "globe", title: "Unlimited Wealth", description: "He is the proprietor of all material and spiritual worlds." },
                { icon: "zap", title: "Unlimited Renunciation", description: "Though possessing everything, He is not attached to anything material." },
                { icon: "scale", title: "Unlimited Fame", description: "His glories are sung by pure devotees in all universes." },
                { icon: "heart", title: "Unlimited Knowledge", description: "He knows past, present, and future of every living being." }
            ]} />

            <h3 className="mt-12">Who is Krishna?</h3>
            <PrincipleList items={[
                { title: "Bhagavan - The Possessor of Opulence", text: "The word Bhagavan means one who is complete in six opulences. A person who has any of these becomes attractive, but Krishna has them in full." },
                { title: "The Original Form", text: "God is not formless. The two-handed, blue-colored, flute-bearing form is the original ever-existing form of God (sat-cit-ananda)." },
                { title: "Source of Avatars", text: "Whenever the Lord incarnates, He becomes visible to our eyes. Just like the Sun doesn't die at sunset, the Lord appears and disappears." }
            ]} />

        </PhilosophyLayout>
    )
}
