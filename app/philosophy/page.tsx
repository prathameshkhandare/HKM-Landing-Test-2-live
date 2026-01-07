"use client"

import Link from "next/link"
import PhilosophyLayout from "@/components/PhilosophyLayout"
import PhilosophyTempleHeader from "@/components/PhilosophyTempleHeader"

export default function PhilosophyLandingPage() {
    return (
        <PhilosophyLayout
            title="Philosophy"
            subtitle="The Science of Self Realization"
            heroImage="/assets/hkm-about-science.jpg" 
            sidebarPosition="right"
            customHeader={
                <PhilosophyTempleHeader 
                    title="Philosophy"
                    subtitle="The Science of Self Realization"
                    stickerText="Vedic Wisdom"
                />
            }
        >
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed font-normal">
                <p>
                    The Krishna consciousness movement is not a sentimental religious movement. It is a scientific movement based on the authority of the Vedic scriptures. The purpose of this movement is to propagate the science of Krishna consciousness for the benefit of all people of the world.
                </p>

                <h3 className="text-3xl font-bold font-serif text-[#701a1a] mt-12 mb-6 tracking-tight">Vedic Wisdom for Modern Times</h3>
                
                <p>
                    In today's fast-paced world, people are looking for peace and happiness. However, they are searching in the wrong place. The Vedic literature gives us a clear roadmap to find eternal happiness and peace. By understanding the science of the soul and our relationship with the Supreme, we can find true fulfillment.
                </p>

                {/* Images Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                    <div className="relative h-72 rounded-xl overflow-hidden shadow-2xl group border-2 border-[#FFB81C]/20">
                        <img 
                            src="/assets/krishna-flute-art.jpg" 
                            alt="Lord Krishna" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2D0A0A]/90 to-transparent opacity-90 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <span className="text-[#FFB81C] text-xs font-bold uppercase tracking-widest mb-2 block">Supreme Personality</span>
                            <Link href="/philosophy/lord-krishna" className="text-white font-serif font-bold text-2xl group-hover:text-[#FFB81C] transition-colors">Lord Sri Krishna →</Link>
                        </div>
                    </div>
                    
                    <div className="relative h-72 rounded-xl overflow-hidden shadow-2xl group border-2 border-[#FFB81C]/20">
                        <img 
                            src="/assets/sankirtana.jpg" 
                            alt="Sankirtana" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#2D0A0A]/90 to-transparent opacity-90 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <span className="text-[#FFB81C] text-xs font-bold uppercase tracking-widest mb-2 block">Process for this Age</span>
                            <Link href="/philosophy/yugadharma" className="text-white font-serif font-bold text-2xl group-hover:text-[#FFB81C] transition-colors">Yugadharma →</Link>
                        </div>
                    </div>
                </div>

                <p>
                    We invite you to explore the various aspects of this great philosophy. On the right side, you will find links to detailed pages covering topics like the identity of Lord Krishna, the teachings of the Bhagavad Gita, and the life of Sri Chaitanya Mahaprabhu.
                </p>

                <blockquote className="border-l-4 border-[#ea580c] pl-8 my-12 italic text-xl text-[#701a1a] bg-[#FFF9F0] py-8 pr-6 rounded-r-xl shadow-sm quote-icon relative overflow-hidden">
                   <div className="relative z-10">
                        "Human life is meant for inquiry into the Absolute Truth. And the Absolute Truth is realized in three phases: Brahman, Paramatma, and Bhagavan."
                   </div>
                </blockquote>

                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl my-12 group border-4 border-white">
                    <img 
                        src="/assets/hkm-about-community.jpg" 
                        alt="Community" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
                        <Link href="/philosophy/krishna-consciousness" className="px-10 py-4 bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all shadow-lg hover:shadow-[#ea580c]/50">
                            Learn More About KC
                        </Link>
                    </div>
                </div>
            </div>
        </PhilosophyLayout>
    )
}
