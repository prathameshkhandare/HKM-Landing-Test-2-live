"use client"

import React from "react"
import PhilosophyTempleHeader from "@/components/PhilosophyTempleHeader"
import PhilosophyLayout from "@/components/PhilosophyLayout"
import { PhilosophyCardGrid, Timeline, QuoteHighlight, PrincipleList } from "@/components/PhilosophyWidgets"
import Image from "next/image"
import { Sparkles, Heart, Music, BookOpen, Quote } from "lucide-react"

export default function YugadharmaPhilosophyPage() {
    const galleryImages = [
        {
            src: "/assets/yuga-gallery/kirtan-action.png",
            alt: "Nama-Sankirtana in temple",
            caption: "The Core Practice: Devotees dancing in ecstatic Kirtan with Mridangas and Karatalas."
        },
        {
            src: "/assets/yuga-gallery/panca-tattva.jpg",
            alt: "Panca-tattva dancing",
            caption: "The Divine Originator: Lord Chaitanya and His associates dancing in spiritual ecstasy."
        },
        {
            src: "/assets/yuga-gallery/harinam-procession.png",
            alt: "Outdoor Harinam Sankirtana",
            caption: "Yugadharma in Action: Vibrant public processions bringing the Holy Name to every street."
        },
        {
            src: "/assets/yuga-gallery/mahamantra.png",
            alt: "Hare Krishna Maha Mantra",
            caption: "The Mantra: The Great Chant for Deliverance in this Age of Kali."
        }
    ]

    return (
        <PhilosophyLayout
            title="Yuga Dharma"
            subtitle="The Religion of the Age"
            heroImage="/assets/sankirtana.jpg"
            customHeader={
                <PhilosophyTempleHeader
                    title="Yuga Dharma"
                    subtitle="Harinama Sankirtana"
                    stickerText="Chant & Be Happy"
                />
            }
        >
            <div className="space-y-12 text-lg text-gray-700 leading-relaxed font-normal">
                <p>
                    Different ages have different prescribed methods for self-realization. In this Age of Kali (the current age of quarrel and hypocrisy), the authorized method is the congregational chanting of the Holy Names of the Lord.
                </p>

                <QuoteHighlight
                    text="In this Age of Kali there is no other means, no other means, no other means for self-realization than chanting the holy name, chanting the holy name, chanting the holy name of Lord Hari."
                    author="Brihan-naradiya Purana"
                />

                <section className="space-y-8">
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold font-serif text-[#701a1a]">Yugadharma in Action</h3>
                        <p className="text-gray-600 italic">
                            The congregational chanting of <strong>Hare Krishna Hare Krishna Krishna Krishna Hare Hare / Hare Rama Hare Rama Rama Rama Hare Hare</strong> is the most sublime and joyful process for spiritual awakening in this age.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {galleryImages.map((img, idx) => (
                            <div key={idx} className="group relative">
                                <div className="relative h-64 rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                                    <Image
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

                {/* The Hare Krishna Maha Mantra In-depth Section - Elevated Design */}
                <section className="py-24 relative overflow-hidden bg-white border border-[#FFB81C]/20 rounded-[2.5rem] shadow-xl my-20">
                    {/* Artistic Background Overlay */}
                    <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.04] bg-[length:400px_400px] bg-center bg-repeat mix-blend-multiply pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#FFF9F0] via-transparent to-transparent rounded-full opacity-80 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#ffedd5] via-transparent to-transparent rounded-full opacity-60 pointer-events-none"></div>

                    <div className="max-w-[70rem] mx-auto px-6 md:px-12 relative z-10 text-[#2D0A0A] leading-relaxed">

                        {/* Majestic Header Block */}
                        <div className="text-center mb-20 relative">
                            <span className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full bg-[#ea580c]/10 border border-[#ea580c]/20 text-[#ea580c] font-bold tracking-[0.25em] text-xs uppercase mb-8 shadow-sm">
                                <Sparkles size={14} /> Reviving Original Consciousness <Sparkles size={14} />
                            </span>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#701a1a] font-serif mb-6 tracking-tight drop-shadow-sm">The Hare Krishna<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-[#FFB81C]">Maha Mantra</span></h2>

                            <div className="max-w-2xl mx-auto mt-8 bg-[#FFF9F0] border border-[#FFB81C]/30 rounded-2xl p-6 shadow-sm inline-block">
                                <p className="text-xl md:text-2xl text-[#ea580c] font-semibold font-serif italic mb-2">By His Divine Grace A.C. Bhaktivedanta Swami Prabhupada</p>
                                <p className="text-sm md:text-base text-gray-600 font-medium">Founder-Acharya of the International Society for Krishna Consciousness</p>
                                <p className="text-xs text-gray-500 mt-2 italic">(Ref: Krishna Consciousness - The Topmost Yoga System)</p>
                            </div>

                            <div className="flex justify-center items-center gap-4 mt-12 w-full">
                                <div className="h-[1px] w-24 md:w-48 bg-gradient-to-r from-transparent to-[#FFB81C]"></div>
                                <div className="w-3 h-3 rotate-45 border border-[#ea580c] bg-[#FFF9F0]"></div>
                                <div className="h-[1px] w-24 md:w-48 bg-gradient-to-l from-transparent to-[#FFB81C]"></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                            {/* Left Column - The Theory */}
                            <div className="space-y-16">
                                {/* Block 1: Method */}
                                <div className="relative pl-10 group">
                                    <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-[#ea580c] to-transparent rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute -left-3 top-0 w-8 h-8 rounded-full bg-white border-2 border-[#ea580c] shadow-md flex items-center justify-center text-[#ea580c] transition-transform group-hover:scale-110">
                                        <Sparkles size={14} />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#701a1a] font-serif mb-5">The Method of Revival</h3>
                                    <p className="mb-5 text-gray-700 text-lg leading-loose font-medium">This transcendental vibration—by chanting of <strong className="text-[#ea580c] tracking-wide font-bold">Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare / Hare Rama, Hare Rama, Rama Rama, Hare Hare</strong>—is the sublime method for reviving our Krishna consciousness. As living spiritual souls we are all originally Krishna conscious entities, but due to our association with matter since time immemorial, our consciousness is now polluted by material atmosphere.</p>
                                    <p className="text-gray-700 text-lg leading-loose font-medium">In this polluted concept of life, we are all trying to exploit the resources of material nature, but actually we are becoming more and more entangled in our complexities. This illusion is called <em className="italic text-[#701a1a]">maya</em>, or hard struggle for existence over the stringent laws of material nature. This illusory struggle against the material nature can at once be stopped by revival of our Krishna consciousness.</p>
                                </div>

                                {/* Block 2: Original Energy */}
                                <div className="relative pl-10 group">
                                    <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-[#FFB81C] to-transparent rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute -left-3 top-0 w-8 h-8 rounded-full bg-white border-2 border-[#FFB81C] shadow-md flex items-center justify-center text-[#FFB81C] transition-transform group-hover:scale-110">
                                        <Heart size={14} className="fill-[#FFB81C]/20" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#701a1a] font-serif mb-5">An Original Energy</h3>
                                    <p className="mb-5 text-gray-700 text-lg leading-loose font-medium">Krishna consciousness is not an artificial imposition on the mind. This consciousness is the original energy of the living entity. When we hear the transcendental vibration, this consciousness is revived. And the process is recommended by authorities for this age.</p>
                                    <p className="text-gray-700 text-lg leading-loose font-medium">By practical experience also, we can perceive that by chanting this Maha-mantra, or the Great Chanting for Deliverance, one can at once feel transcendental ecstasy from the spiritual stratum. When one is factually on the plane of spiritual understanding, surpassing the stages of sense, mind and intelligence, one is situated on the transcendental plane.</p>
                                </div>

                                {/* Block 3: Receiving */}
                                <div className="relative pl-10 group">
                                    <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-[#b45309] to-transparent rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute -left-3 top-0 w-8 h-8 rounded-full bg-white border-2 border-[#b45309] shadow-md flex items-center justify-center text-[#b45309] transition-transform group-hover:scale-110">
                                        <Music size={14} />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#701a1a] font-serif mb-5">Receiving the Sound</h3>
                                    <p className="mb-6 text-gray-700 text-lg leading-loose font-medium">We have seen it practically. Even a child can take part in the chanting, or even a dog can take part in it. The chanting should be heard, however, from the lips of a pure devotee of the Lord, so that immediate effect can be achieved.</p>
                                    <div className="relative overflow-hidden bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl shadow-sm">
                                        <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
                                            <Quote size={80} className="text-red-500" />
                                        </div>
                                        <p className="text-[#991b1b] text-lg italic font-serif relative z-10 leading-relaxed font-medium">"As far as possible, chanting from the lips of a nondevotee should be avoided, as much as milk touched by the lips of a serpent causes poisonous effect."</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Application & Meaning */}
                            <div className="space-y-12">
                                {/* Block 4: Beyond Intellect */}
                                <div className="bg-[#FFF9F0] border border-[#FFB81C]/30 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[#FFB81C]/50 text-[#ea580c] shadow-sm">
                                            <BookOpen size={20} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#701a1a] font-serif">Beyond Intellectual Adjustment</h3>
                                    </div>
                                    <p className="mb-4 text-gray-700 text-lg leading-relaxed font-medium">This chanting of <em className="text-[#ea580c] font-bold">Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare / Hare Rama, Hare Rama, Rama Rama, Hare Hare</em> is directly enacted from the spiritual platform, surpassing all lower states of consciousness—namely sensual, mental and intellectual.</p>
                                    <p className="text-gray-700 text-lg leading-relaxed font-medium">There is no need of understanding the language of the mantra, nor is there any need of mental speculation nor any intellectual adjustment for chanting this Maha-mantra. It springs automatically from the spiritual platform, and as such, anyone can take part in this transcendental sound vibration, without any previous qualification, and dance in ecstasy.</p>
                                </div>

                                {/* Block 5: Detailed Meaning Card */}
                                <div className="relative bg-gradient-to-br from-[#701a1a] to-[#2D0A0A] p-8 md:p-10 rounded-3xl shadow-2xl text-white overflow-hidden transform hover:-translate-y-1 transition-transform duration-500">
                                    {/* Mandala Background within card */}
                                    <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-10 bg-repeat bg-center"></div>

                                    <h3 className="text-2xl font-bold text-[#FFB81C] font-serif mb-6 border-b border-[#FFB81C]/20 pb-3 relative z-10 flex items-center justify-between">
                                        The Meaning
                                        <Sparkles size={20} className="text-[#FFB81C] opacity-50" />
                                    </h3>

                                    <div className="space-y-4 relative z-10 text-white text-base leading-relaxed font-medium [&>p]:!text-white">
                                        <p>The word <strong className="text-[#FFB81C] text-lg font-serif px-1">Hare</strong> is a form of addressing the energy of the Lord. Both <strong className="text-[#FFB81C] text-lg font-serif px-1">Krishna</strong> and <strong className="text-[#FFB81C] text-lg font-serif px-1">Rama</strong> are forms of addressing directly the Lord, and they mean “the highest pleasure, eternal.” This <strong className="text-[#ea580c] text-lg font-serif px-1 bg-white/10 rounded">Hare</strong>, the supreme pleasure potency of the Lord, helps us in reaching the Supreme Lord.</p>
                                        <p>The material energy, called Maya, is also one of the multipotencies of the Lord, as much as we are also marginal potency of the Lord. The living entities are described as superior energy than matter. When the superior energy is in contact with inferior energy, it becomes an incompatible situation. But when the supreme marginal potency is in contact with the spiritual potency, Hare, it becomes the happy, normal condition of the living entity.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Block 6: The Ultimate Call - Moved to Full Width */}
                        <div className="text-center pt-16 mt-16 border-t border-[#FFB81C]/20 max-w-5xl mx-auto">
                            <p className="text-gray-600 font-medium text-lg md:text-xl leading-relaxed mb-12 italic">"The three words, namely Hare, Krishna and Rama, are transcendental seeds of the Maha-mantra, and the chanting is a spiritual call for the Lord and His internal energy. Mother Hare helps in achieving the grace of the supreme father, Krishna... No other means, therefore, of spiritual realization is as effective in this age, as chanting the Maha-mantra:"</p>

                            {/* Majestic Mantra Display - Horizontal Layout */}
                            <div className="relative inline-block w-full group max-w-4xl mx-auto">
                                <div className="absolute -inset-2 bg-gradient-to-r from-[#FFB81C] via-[#ea580c] to-[#FFB81C] rounded-[2rem] blur-lg opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                                <div className="relative bg-white border-2 border-[#FFB81C]/40 px-4 py-8 md:px-6 md:py-10 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] bg-repeat pointer-events-none"></div>
                                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-black font-serif leading-relaxed tracking-[0.05em] md:tracking-[0.1em] drop-shadow-sm uppercase w-full flex flex-col xl:flex-row xl:flex-wrap justify-center items-center gap-y-4 xl:gap-x-8 2xl:gap-x-10 text-center relative z-10 w-full">

                                        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-x-4 xl:gap-x-8 2xl:gap-x-10">
                                            <span className="text-[#ea580c]">Hare Krishna Hare Krishna</span>
                                            <span className="text-[#701a1a]">Krishna Krishna Hare Hare</span>
                                        </div>

                                        {/* Divider dot hidden on mobile/tablet, visible on very large desktop */}
                                        <span className="hidden xl:block w-3 h-3 rounded-full bg-[#FFB81C] shadow-[0_0_10px_#ea580c]"></span>
                                        <div className="w-full max-w-sm h-px bg-gradient-to-r from-transparent via-[#FFB81C]/50 to-transparent xl:hidden my-2"></div>

                                        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-x-4 xl:gap-x-8 2xl:gap-x-10">
                                            <span className="text-[#ea580c]">Hare Rama Hare Rama</span>
                                            <span className="text-[#701a1a]">Rama Rama Hare Hare</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <h3 className="text-3xl font-bold font-serif text-[#701a1a] mt-16 mb-8 text-center drop-shadow-sm">The Process for Each Age</h3>
                <PhilosophyCardGrid items={[
                    { icon: "star", title: "Satya Yuga", description: "Meditation on Vishnu (Dhyana) was the prescribed process when people lived for 100,000 years." },
                    { icon: "shield", title: "Treta Yuga", description: "Grand Sacrifices (Yajna) were performed when life span was 10,000 years." },
                    { icon: "scale", title: "Dvapara Yuga", description: "Opulent Deity Worship (Archana) was the standard when people lived for 1,000 years." },
                    { icon: "heart", title: "Kali Yuga", description: "Chanting of Holy Names (Sankirtana) is the only deliverer in this short life of 100 years." }
                ]} />

                <h3 className="text-3xl font-bold font-serif text-[#701a1a] mt-16 mb-8 border-b-2 border-[#ea580c]/30 pb-2 inline-block">The Universal Remedy</h3>
                <Timeline items={[
                    { title: "The Problem", text: "Kali-yuga is an ocean of faults. People are short-lived, unlucky, and always disturbed." },
                    { title: "The Solution", text: "Despite these faults, there is one great quality: simply by chanting Hare Krishna, one can become free from material bondage." },
                    { title: "The Result", text: "This chanting cleanses the heart of all dust accumulated for years and extinguishes the fire of conditional life." }
                ]} />
            </div>
        </PhilosophyLayout>
    )
}
