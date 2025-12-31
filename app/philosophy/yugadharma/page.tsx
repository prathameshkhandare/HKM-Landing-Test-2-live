import React from "react"
import PhilosophyLayout from "@/components/PhilosophyLayout"
import { PhilosophyCardGrid, PrincipleList, Timeline, QuoteHighlight } from "@/components/PhilosophyWidgets"

export default function YugadharmaPage() {
    return (
        <PhilosophyLayout
            title="Yugadharma"
            subtitle="The Philosophy of Our Age"
            heroImage="/assets/sankirtana.jpg" 
        >
            <p>
                Embracing the eternal principles of dharma while adapting to the unique challenges and opportunities of our time. The Vedic scriptures inform that the chanting of the Hare Krishna Maha-mantra, composed of sixteen words, is the process of yoga for this age of Kali.
            </p>

            <h3 className="mt-12 text-center">Dharma for Each Age</h3>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
                The Vedic scriptures explain that time is cyclical, divided into four ages (Yugas). For each age, there is a specific process (Dharma) for self-realization.
            </p>
            <PhilosophyCardGrid items={[
                { icon: "star", title: "Satya Yuga", description: "The Golden Age (Lasted 1,728,000 years). The process was Dhyana (Meditation) on the Supreme Lord." },
                { icon: "fire", title: "Treta Yuga", description: "The Silver Age (Lasted 1,296,000 years). The process was Yajna (Performance of opulent sacrifices)." },
                { icon: "church", title: "Dwapara Yuga", description: "The Bronze Age (Lasted 864,000 years). The process was Archana (Opulent Temple Worship)." },
                { icon: "music", title: "Kali Yuga", description: "The Iron Age (Current Age, lasts 432,000 years). The only process is Sankirtana (Chanting of Holy Names)." }
            ]} />

            <h3 className="mt-12">The Universal Remeday</h3>
            <PrincipleList items={[
                { title: "The Challenge of Kali Yuga", text: "In this current age, life is short and filled with anxiety. The austere practices of previous ages are not possible to perform perfectly." },
                { title: "The Solution", text: "The Brihan-naradiya Purana states: 'In this age of Kali there is no other alternative, there is no other alternative, there is no other alternative for spiritual progress than the holy name, the holy name, the holy name of the Lord.'" },
                { title: "Hare Krishna Maha-Mantra", text: "This chanting of 'Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare / Hare Rama, Hare Rama, Rama Rama, Hare Hare' cleanses the heart and awakens our original love for God." }
            ]} />

            <QuoteHighlight 
                text="Harer nama harer nama harer namaiva kevalam. Kalau nasty eva nasty eva nasty eva gatir anyatha."
                author="Brihan-naradiya Purana 38.126"
            />

        </PhilosophyLayout>
    )
}
