"use client"

import React from "react"
import PhilosophyTempleHeader from "@/components/PhilosophyTempleHeader"
import PhilosophyLayout from "@/components/PhilosophyLayout"
import { PhilosophyCardGrid, Timeline, QuoteHighlight, PrincipleList } from "@/components/PhilosophyWidgets"
import Image from "next/image"

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
            alt: "Hare Krishna Mahamantra",
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
