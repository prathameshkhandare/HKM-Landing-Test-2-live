"use client"

import React from "react"
import PhilosophyTempleHeader from "@/components/PhilosophyTempleHeader"
import PhilosophyLayout from "@/components/PhilosophyLayout"
import { PhilosophyCardGrid, Timeline, QuoteHighlight, PrincipleList } from "@/components/PhilosophyWidgets"

export default function YugadharmaPhilosophyPage() {
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
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed font-normal">
                <p>
                    Different ages have different prescribed methods for self-realization. In this Age of Kali (the current age of quarrel and hypocrisy), the authorized method is the congregational chanting of the Holy Names of the Lord.
                </p>

                <QuoteHighlight 
                    text="In this Age of Kali there is no other means, no other means, no other means for self-realization than chanting the holy name, chanting the holy name, chanting the holy name of Lord Hari."
                    author="Brihan-naradiya Purana"
                />

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
