import PhilosophyLayout from "@/components/PhilosophyLayout"
import PhilosophyTempleHeader from "@/components/PhilosophyTempleHeader"
import { PhilosophyCardGrid, PrincipleList, QuoteHighlight } from "@/components/PhilosophyWidgets"
import Image from "next/image"

export default function LordKrishnaPage() {
    const galleryImages = [
        {
            src: "/assets/krishna-flute-art.jpg",
            alt: "Lord Krishna playing flute",
            caption: "The All-Attractive Flute Player"
        },
        {
            src: "/activities/yuga-dharma/yashoda_krishna.webp",
            alt: "Mother Yashoda and Krishna",
            caption: "Damodara-lila: The bonds of love",
            position: "object-left"
        },
        {
            src: "/assets/Sri-krishna-Janmashtami.webp",
            alt: "Krishna Janmashtami Abhishek",
            caption: "Grand Celebrations at the Temple"
        }
    ]

    return (
        <PhilosophyLayout
            title="Lord Sri Krishna"
            subtitle="The Supreme Personality of Godhead"
            heroImage="/assets/about-hkm-krishna-arjuna.webp" 
            customHeader={
                <PhilosophyTempleHeader 
                    title="Lord Sri Krishna"
                    subtitle="The Supreme Personality of Godhead"
                    stickerText="Supreme Person"
                />
            }
        >
            <div className="space-y-12 text-lg text-gray-700 leading-relaxed font-normal">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p>
                            Lord Sri Krishna is popularly known as the charming blue-bodied, flute-bearing God who appeared on this planet about five thousand years ago to destroy the demons and reestablish religion. His glory is widespread as the disseminator of the matchless spiritual wisdom – <strong>Srimad Bhagavad-gita</strong>.
                        </p>
                        <p>
                            Krishna is not a mythological figure but the Supreme Historical Person who performed superhuman pastimes. As the source of all incarnations, He is the fountainhead of all beauty, knowledge, and bliss.
                        </p>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                        <Image 
                            src="/assets/krishna-flute-art.jpg" 
                            alt="Lord Krishna" 
                            fill 
                            className="object-cover"
                        />
                    </div>
                </div>

                <QuoteHighlight 
                    text="Ishvarah paramah krishnah sac-chid-ananda-vigrahah. Anadir adir govindah sarva-karana-karanam."
                    author="Brahma-samhita 5.1"
                />

                <section className="space-y-8">
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold font-serif text-[#701a1a]">The Transcendental Lilas & Forms</h3>
                        <p className="text-gray-600 italic">
                            <strong>Transcendental Lilas (Pastimes):</strong> The spiritual activities of the Lord performed by His internal potency for the pleasure of His devotees.
                            <br />
                            <strong>Transcendental Forms (Rupa):</strong> The various eternal, blissful spiritual appearances of the Lord, from His original form to His many incarnations.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((img, idx) => (
                            <div key={idx} className="group relative">
                                <div className="relative h-64 rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                                    <Image 
                                        src={img.src} 
                                        alt={img.alt} 
                                        fill 
                                        className={`object-cover group-hover:scale-105 transition-transform duration-500 ${(img as any).position || 'object-center'}`}
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <p className="text-white text-sm font-medium">{img.caption}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <h3 className="text-3xl font-bold font-serif text-[#701a1a] mt-16 mb-8 text-center drop-shadow-sm">The Six Opulences of Bhagavan</h3>
                
                <PhilosophyCardGrid items={[
                    { icon: "shield", title: "Unlimited Strength", description: "He possesses all strength to protect His devotees and annihilate the miscreants." },
                    { icon: "star", title: "Unlimited Beauty", description: "His charming form attracts all living entities, hence the name Krishna (All-Attractive)." },
                    { icon: "globe", title: "Unlimited Wealth", description: "He is the proprietor of all material and spiritual worlds." },
                    { icon: "zap", title: "Unlimited Renunciation", description: "Though possessing everything, He is not attached to anything material." },
                    { icon: "scale", title: "Unlimited Fame", description: "His glories are sung by pure devotees in all universes." },
                    { icon: "heart", title: "Unlimited Knowledge", description: "He knows past, present, and future of every living being." }
                ]} />

                <div className="bg-[#FFF9F0] p-8 md:p-12 rounded-3xl border border-[#FFB81C]/20">
                    <h3 className="text-3xl font-bold font-serif text-[#701a1a] mb-8 border-b-2 border-[#ea580c]/30 pb-2 inline-block">Who is Krishna?</h3>
                    <PrincipleList items={[
                        { title: "Bhagavan - The Possessor of Opulence", text: "The word Bhagavan means one who is complete in six opulences. A person who has any of these becomes attractive, but Krishna has them in full." },
                        { title: "The Original Form", text: "God is not formless. The two-handed, blue-colored, flute-bearing form is the original ever-existing form of God (sat-cit-ananda)." },
                        { title: "Source of Avatars", text: "Whenever the Lord incarnates, He becomes visible to our eyes. Just like the Sun doesn't die at sunset, the Lord appears and disappears." }
                    ]} />
                </div>
            </div>
        </PhilosophyLayout>
    )
}
