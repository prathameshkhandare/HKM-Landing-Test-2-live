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

            <h3 className="mt-12 text-center">Core Pillars</h3>
            <PhilosophyCardGrid items={[
                { icon: "globe", title: "Universal Relevance", description: "Dharma transcends geographical and cultural boundaries, offering wisdom that resonates with the human experience across all contexts." },
                { icon: "scale", title: "Contextual Ethics", description: "Right action emerges from understanding the unique circumstances of each age, balancing timeless values with contemporary realities." },
                { icon: "zap", title: "Evolutionary Wisdom", description: "While core principles remain eternal, their application evolves with society, technology, and human consciousness." },
                { icon: "heart", title: "Inner Harmony", description: "Personal transformation through self-awareness, mindfulness, and alignment with one's authentic purpose." },
                { icon: "shield", title: "Collective Responsibility", description: "Recognizing our interconnectedness and duty to contribute to the wellbeing of all beings and the planet." },
                { icon: "star", title: "Conscious Action", description: "Making deliberate choices that honor both ancient wisdom and modern understanding, creating positive ripples." }
            ]} />

            <h3 className="mt-12">Foundational Principles</h3>
            <PrincipleList items={[
                { title: "Satya - Truth in the Digital Age", text: "In an era of information abundance, commitment to truth requires discernment, integrity, and the courage to speak authentically." },
                { title: "Ahimsa - Non-violence Reimagined", text: "Extending compassion beyond physical harm to include emotional wellbeing, environmental stewardship, and uplifting systems." },
                { title: "Seva - Service in Community", text: "Selfless service adapted to modern contexts, recognizing that individual flourishing is inseparable from collective wellbeing." },
                { title: "Viveka - Discriminating Wisdom", text: "Cultivating the ability to distinguish between the essential and the ephemeral, making choices aligned with deeper values." },
                { title: "Santosha - Contentment", text: "Finding peace not through endless acquisition but through gratitude, presence, and appreciation of what is." }
            ]} />

            <QuoteHighlight 
                text="Just as the lotus rises pure from muddy waters, we must rise with clarity and purpose from the complexities of our age"
                author="Ancient Wisdom for Modern Times"
            />

            <h3 className="mt-12">The Journey of Integration</h3>
            <Timeline items={[
                { title: "Awakening", text: "Recognition of the need for deeper meaning and alignment between values and actions in daily life." },
                { title: "Understanding", text: "Deep study of timeless principles while examining how they apply to contemporary challenges." },
                { title: "Practice", text: "Daily integration of dharmic principles through mindful choices, ethical action, and self-reflection." },
                { title: "Transformation", text: "Becoming a living example of yugadharma, inspiring others through authentic embodiment." }
            ]} />

        </PhilosophyLayout>
    )
}
