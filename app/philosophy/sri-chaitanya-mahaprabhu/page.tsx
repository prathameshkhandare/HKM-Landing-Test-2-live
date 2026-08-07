import PhilosophyLayout from "@/components/PhilosophyLayout"
import PhilosophyTempleHeader from "@/components/PhilosophyTempleHeader"
import { PrincipleList, Timeline, QuoteHighlight } from "@/components/PhilosophyWidgets"
import NextImage from "next/image"

export default function SriChaitanyaPage() {
    return (
        <PhilosophyLayout
            title="Sri Chaitanya Mahaprabhu"
            subtitle="The Golden Avatar"
            heroImage="/assets/hkm-about-community.jpg" 
            customHeader={
                <PhilosophyTempleHeader 
                    title="Chaitanya Mahaprabhu"
                    subtitle="The Golden Avatar"
                    stickerText="Embodiment of Mercy"
                />
            }
        >
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed font-normal">
                <p>
                    Five thousand years ago, Lord Krishna appeared on earth to reestablish the lost tenets of religion. His final and most important instruction in the Gita was: <em>“Abandon all varieties of religion and just surrender unto Me.”</em>
                </p>

                <h3 className="text-3xl font-bold font-serif text-[#701a1a] mt-16 mb-8 text-center drop-shadow-sm">The Compassionate Mission</h3>
                <Timeline items={[
                    { title: "The Context", text: "In Kali-yuga, people were not qualified to understand the deep message of surrender given in the Gita." },
                    { title: "The Appearance", text: "The Lord compassionately appeared 500 years ago in Bengal as Sri Chaitanya Mahaprabhu (1486 AD) to teach this practically." },
                    { title: "The Method", text: "By His own demonstration, He taught the simplest way of surrender: chanting the Holy Names." }
                ]} />

                <section className="space-y-8 mt-12">
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold font-serif text-[#701a1a]">The Golden Avatar in Action</h3>
                        <p className="text-gray-600 italic">
                            Witness the merciful pastimes and form of Sri Chaitanya Mahaprabhu, who distributed love of Godhead freely to everyone.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                src: "/assets/chaitanya-gallery/golden-form.jpg",
                                alt: "Sri Chaitanya Mahaprabhu Deity",
                                caption: "The Golden Avatar: The most merciful incarnation of Lord Krishna."
                            },
                            {
                                src: "/assets/chaitanya-gallery/panca-tattva.jpg",
                                alt: "Panca Tattva",
                                caption: "Sri Panca Tattva: Lord Chaitanya with His four confidential associates."
                            },
                            {
                                src: "/assets/chaitanya-gallery/dancing-chaitanya.png",
                                alt: "Lord Chaitanya Dancing",
                                caption: "The Universal Teacher: Lord Chaitanya leading the Sankirtana movement."
                            },
                            {
                                src: "/assets/chaitanya-gallery/cc-cover.png",
                                alt: "Sri Chaitanya Charitamrita Book",
                                caption: "Legacy: Chaitanya Charitamrita, the authorized biography detailing His life and precepts."
                            }
                        ].map((img, idx) => (
                            <div key={idx} className="group relative">
                                <div className="relative h-64 rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                                    <NextImage 
                                        src={img.src} 
                                        alt={img.alt} 
                                        fill 
                                        unoptimized
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <p className="text-white text-sm font-medium">{img.caption}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <QuoteHighlight 
                    text="Philosophy of Sri Chaitanya Mahaprabhu is to remain in whatever position we are and simply chant the Hare Krishna Maha-mantra."
                    author="Simplicity of the Path"
                />

                <h3 className="text-3xl font-bold font-serif text-[#701a1a] mt-16 mb-8 border-b-2 border-[#ea580c]/30 pb-2 inline-block">The Sankirtana Movement</h3>
                <PrincipleList items={[
                    { title: "Golden Avatar", text: "Appearing during a lunar eclipse in Mayapur, He is historically known as the founder of the Bhakti movement." },
                    { title: "Congregational Chanting", text: "He inaugurated the Sankirtana movement - the congregational chanting of the Lord's holy names." },
                    { title: "Highest Perfection", text: "This process not only liberates one from material existence but awards the rarest perfection: Love of Krishna." }
                ]} />
            </div>
        </PhilosophyLayout>
    )
}
