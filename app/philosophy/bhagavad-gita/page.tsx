import PhilosophyLayout from "@/components/PhilosophyLayout"
import PhilosophyTempleHeader from "@/components/PhilosophyTempleHeader"
import { PhilosophyCardGrid, Timeline, QuoteHighlight } from "@/components/PhilosophyWidgets"

export default function BhagavadGitaPage() {
    return (
        <PhilosophyLayout
            title="Bhagavad Gita"
            subtitle="The Song of God"
            heroImage="/assets/hkm-about-science.jpg" 
            customHeader={
                <PhilosophyTempleHeader 
                    title="Bhagavad Gita"
                    subtitle="The Song of God"
                    stickerText="Manual of Life"
                />
            }
        >
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed font-normal">
                <p>
                    The general understanding is that Bhagavad-gita is merely a holy book or ancient scripture. But by learning from authorized sources, one understands that it is much more: it is a <strong>guide book to lead an enjoyable and blissful life</strong>.
                </p>

                <QuoteHighlight 
                    text="In the modern times when people are more confused and misdirected, the Gita becomes all the more relevant for bringing back stability and happiness."
                    author="Relevance in Modern Times"
                />

                <h3 className="text-3xl font-bold font-serif text-[#701a1a] mt-16 mb-8 text-center drop-shadow-sm">User's Manual for Life</h3>
                
                <PhilosophyCardGrid items={[
                    { icon: "star", title: "Universal Quest", description: "Everyone, regardless of age or nationality, is constantly searching for happiness but often getting frustrated." },
                    { icon: "scale", title: "The Solution", description: "Bhagavad-gita shows us where real happiness is, just like a user's manual guides us to make the best use of a gadget." },
                    { icon: "heart", title: "Blissful Life", description: "It guides us in making the best use of this human life to derive maximum happiness from it." },
                    { icon: "shield", title: "Stability", description: "It reestablishes us in our original position of eternity, knowledge, and bliss." }
                ]} />

                <h3 className="text-3xl font-bold font-serif text-[#701a1a] mt-16 mb-8 border-b-2 border-[#ea580c]/30 pb-2 inline-block">The Divine Conversation</h3>
                <Timeline items={[
                    { title: "The Distress", text: "Arjuna was in a distressful condition on the battlefield of Kurukshetra, overwhelmed by the situation." },
                    { title: "The Knowledge", text: "Lord Krishna imparted the divine knowledge of the Gita to clear Arjuna's delusions." },
                    { title: "The Result", text: "Upon receiving this knowledge, Arjuna returned to his happy and stable position." },
                    { title: "Our Path", text: "Following these instructions allows us to attain the same blissful state as Arjuna did." }
                ]} />
            </div>
        </PhilosophyLayout>
    )
}
