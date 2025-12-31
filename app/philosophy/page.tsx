"use client"

import React from "react"
import PhilosophyLayout from "@/components/PhilosophyLayout"
import Link from "next/link"

export default function PhilosophyLandingPage() {
    return (
        <PhilosophyLayout
            title="Philosophy"
            subtitle="The Science of Self Realization"
            heroImage="/assets/hkm-about-science.jpg" 
            sidebarPosition="right"
        >
            <p>
                The Krishna consciousness movement is not a sentimental religious movement. It is a scientific movement based on the authority of the Vedic scriptures. The purpose of this movement is to propagate the science of Krishna consciousness for the benefit of all people of the world.
            </p>

            <h3 className="text-2xl font-bold text-[#0078BF] mt-12 mb-6 font-playfair">Vedic Wisdom for Modern Times</h3>
            <p>
                In today's fast-paced world, people are looking for peace and happiness. However, they are searching in the wrong place. The Vedic literature gives us a clear roadmap to find eternal happiness and peace. By understanding the science of the soul and our relationship with the Supreme, we can find true fulfillment.
            </p>

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                    <img 
                        src="/assets/krishna-flute-art.jpg" 
                        alt="Lord Krishna" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <Link href="/philosophy/lord-krishna" className="text-white font-bold text-lg hover:text-[#FBB201]">Lord Sri Krishna</Link>
                    </div>
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                    <img 
                        src="/assets/sankirtana.jpg" 
                        alt="Sankirtana" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <Link href="/philosophy/yugadharma" className="text-white font-bold text-lg hover:text-[#FBB201]">Yugadharma</Link>
                    </div>
                </div>
            </div>

            <p>
                We invite you to explore the various aspects of this great philosophy. On the right side, you will find links to detailed pages covering topics like the identity of Lord Krishna, the teachings of the Bhagavad Gita, and the life of Sri Chaitanya Mahaprabhu.
            </p>

            <blockquote className="border-l-4 border-[#FBB201] pl-6 my-10 italic text-xl text-gray-600 bg-gray-50 py-6 pr-4 rounded-r-lg">
                "Human life is meant for inquiry into the Absolute Truth. And the Absolute Truth is realized in three phases: Brahman, Paramatma, and Bhagavan."
            </blockquote>

            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg my-12 group">
                <img 
                    src="/assets/hkm-about-community.jpg" 
                    alt="Community" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href="/philosophy/krishna-consciousness" className="px-8 py-3 bg-[#FBB201] text-white font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all">
                        Learn More
                    </Link>
                </div>
            </div>

        </PhilosophyLayout>
    )
}
