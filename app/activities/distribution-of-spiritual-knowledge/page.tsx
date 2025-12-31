"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { BookOpen, Users, Truck, Heart, ArrowRight, Quote } from "lucide-react"

export default function DistributionOfKnowledgePage() {
    return (
        <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#FBB201] selection:text-white relative">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-[#001E36] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/assets/10BlackWhiteMandalaPattern1.jpg')] bg-cover animate-pulse-slow"></div>
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-[#FBB201] mb-6 font-serif tracking-tight leading-tight">
                            Distribution of <br className="hidden md:block" /> Spiritual Knowledge
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed italic font-serif">
                            "Books are the basis."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Brihad Mridanga Section */}
            <section className="py-20 px-6 container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <img 
                                src="/assets/activities/distribution-of-spiritual-knowledge/books-collection.png" 
                                alt="Collection of Spiritual Books" 
                                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <p className="text-white font-bold text-lg">Transcendental Literature</p>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <div>
                            <h2 className="text-4xl font-bold text-[#0078BF] font-serif mb-4">
                                Brihad Mridanga: <span className="text-[#FBB201]">The Greater Drum</span>
                            </h2>
                            <div className="w-20 h-1.5 bg-[#FBB201] rounded-full mb-6"></div>
                        </div>
                        
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Srila Prabhupada presents Krishna consciousness in a very simple and practical way in his books. His spiritual master, <strong className="text-[#0078BF]">Srila Bhaktisiddhanta Saravati Thakur</strong>, referred to the distribution of Krishna conscious books as <em>Brihad Mridanga</em>, the greater drum.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            A mridanga (drum) can be heard only within a certain radius, but the "Brihad Mridanga" of books can go far and wide, crossing oceans and continents to enlighten people everywhere. Instructed to print books whenever funds were available, Srila Prabhupada wanted these books distributed in every town and village.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Activities Grid */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#0078BF] mb-4 font-serif">Spreading the Message</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                           HKM Chennai congregation and Youth club perform book distribution of Vedic literature on weekends, special occasions, and during festivals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                img: "/assets/activities/distribution-of-spiritual-knowledge/book-van-crowd.png",
                                title: "Traveling Sankirtan",
                                desc: "Reaching out to the masses with our mobile book van."
                            },
                            {
                                img: "/assets/activities/distribution-of-spiritual-knowledge/book-stall.png",
                                title: "Book Stalls",
                                desc: "Setting up stalls at public places and festivals."
                            },
                            {
                                img: "/assets/activities/distribution-of-spiritual-knowledge/book-van-team.png",
                                title: "Dedicated Teams",
                                desc: "Our youth club and congregation members on mission."
                            },
                            {
                                img: "/assets/activities/distribution-of-spiritual-knowledge/book-distribution-1.png",
                                title: "Personal Outreach",
                                desc: "Distribution on streets and door-to-door."
                            }
                        ].map((item, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0078BF] mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-6 container mx-auto">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#0078BF] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/assets/10BlackWhiteMandalaPattern1.jpg')] bg-cover"></div>
                    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                        <Quote className="w-12 h-12 text-[#FBB201] mx-auto opacity-80" />
                        <h2 className="text-3xl md:text-5xl font-bold font-serif leading-tight">
                            Join the Mission of Compassion
                        </h2>
                        <p className="text-lg md:text-xl text-blue-100">
                            The books such as Bhagavad-Gita and Śrīmad-Bhāgavatam are translated by ISKCON Founder Acharya His Divine Grace A.C. Bhaktivedanta Swami Prabhupada.
                        </p>
                        <p className="text-white font-medium text-lg">
                            If you are interested to buy the books or want to join the Book Distribution Teams, please contact us.
                        </p>
                        <a 
                            href="mailto:connect@hkmchennai.org" 
                            className="inline-flex items-center gap-3 bg-[#FBB201] text-black font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#0078BF] transition-all transform hover:-translate-y-1 shadow-xl text-lg"
                        >
                            <Users size={20} /> Contact Us
                        </a>
                    </div>
                </motion.div>
            </section>

            <FooterSection />
        </main>
    )
}
