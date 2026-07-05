"use client"

import React, { useState } from "react"
import Navbar from "@/components/Navbar"
import SaffronCommonHeader from "@/components/SaffronCommonHeader"
import { motion, AnimatePresence } from "framer-motion"
import { User, ArrowRight, Tag, Sparkles, Search, Calendar } from "lucide-react"
import Footer from "@/components/FooterSection"
import Link from "next/link"

const posts = [
    {
        id: 29,
        title: "Pahandi Bije: How Lord Jagannath Is Carried to His Chariot at Ratha Yatra",
        excerpt: "Discover Pahandi Bije, the sacred procession that carries Lord Jagannath to His chariot at Ratha Yatra, and its detailed account in Chaitanya-charitamrita.",
        image: "/images/pahandi-bije/Temple_servitors_carrying_Lord_Jagannath_in_the_Pahandi_procession_at_Puri.jfif",
        imagePosition: "object-top",
        category: "Festival",
        date: "Jul 07, 2026",
        author: "HKM Team",
        link: "/blog/pahandi-bije-jagannath-ratha-yatra"
    },
    {
        id: 28,
        title: "Gundicha Marjana: The Sacred Cleaning That Begins the Jagannath Ratha Yatra",
        excerpt: "Discover Gundicha Marjana, the sacred cleaning pastime of Sri Chaitanya Mahaprabhu before Jagannath Ratha Yatra, and its deep teaching on cleansing the heart.",
        image: "/assets/blog/gundicha-marjana/mahaprabhu-cleaning.png",
        imagePosition: "object-top",
        category: "Festival",
        date: "Jul 06, 2026",
        author: "HKM Team",
        link: "/blog/gundicha-marjana"
    },
    {
        id: 27,
        title: "Sri Vakreshvara Pandita: The One Wing of Lord Chaitanya",
        excerpt: "Discover Sri Vakreshvara Pandita, the ecstatic dancer of Lord Chaitanya who danced 72 hours in sankirtana, his life, the 'wing' pastime, and lila sthalis.",
        image: "/assets/blog/vakreshvara-pandita/sri-vakreshvara-pandita.jpg",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "Jul 05, 2026",
        author: "HKM Team",
        link: "/blog/vakreshvara-pandita"
    },
    {
        id: 26,
        title: "Snana Yatra: The Sacred Bathing Festival of Lord Jagannath",
        excerpt: "Discover the deep meaning of Snana Yatra, Lord Jagannath's sacred bathing festival, and its moving connection to Sri Chaitanya Mahaprabhu's pastimes at Alarnath.",
        image: "/assets/blog/snana-yatra/bathing.jpg.jpeg",
        imagePosition: "object-center",
        category: "Festival",
        date: "Jul 04, 2026",
        author: "HKM Team",
        link: "/blog/snana-yatra"
    },
    {
        id: 25,
        title: "Sri Mukunda Datta — The Eternal Singer Whose Voice Made the Lord Dance",
        excerpt: "Discover Sri Mukunda Datta — Lord Chaitanya's class friend, beloved singer, and devoted associate whose kirtana made the Lord Himself rise and dance in ecstasy.",
        image: "/assets/blog/mukunda-datta/cover.png",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "Jun 29, 2026",
        author: "HKM Team",
        link: "/blog/mukunda-datta"
    },
    {
        id: 24,
        title: "Sri Shyamananda Prabhu — The Torchbearer of the Six Goswamis",
        excerpt: "The complete life, pastimes, and teachings of Sri Shyamananda Prabhu — foremost Gaudiya Vaishnava preacher in Odisha, recipient of Srimati Radharani's direct mercy.",
        image: "/assets/blog/sri-shyamananda-prabhu/Sri_Shyamananda_Prabhu_The_Torchbearer_of_Gaura-Nityananda_s_Message_in_Odisha.png",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "Jun 28, 2026",
        author: "HKM Team",
        link: "/blog/sri-shyamananda-prabhu"
    },
    {
        id: 23,
        title: "Caste System Truth: What Srila Prabhupada Actually Taught",
        excerpt: "Discover what Srila Prabhupada teaches about caste: the divine varnasrama system vs. birth-based caste, how it corrupted society, and why Krishna consciousness is the solution.",
        image: "/assets/blog/caste-system-varnashrama.png",
        category: "Philosophy",
        date: "May 29, 2026",
        author: "HKM Team",
        link: "/blog/what-srila-prabhupada-teaches-caste-system-varnasrama"
    },
    {
        id: 0,
        title: "Complete Visitor Guide - ISKCON Thiruvanmiyur",
        excerpt: "Everything a visitor needs to know before coming to Dakshina Dwaraka Dham - timings, darshan, dress code, festivals, prasadam, directions, and FAQs.",
        image: "/assets/dakshina-dwaraka-dham.webp",
        category: "Article",
        date: "Mar 30, 2026",
        author: "HKM Team",
        link: "/blog/visitor-guide"
    },
    {
        id: 7,
        title: "Bhagavad Gita - Applying Eternal Wisdom in Daily Life",
        excerpt: "A reflective blog article on the main teachings of the Bhagavad Gita and how they guide modern life, duty, devotion, and inner peace.",
        image: "/assets/lessons-from-gita-image-1.png",
        category: "Article",
        date: "Mar 30, 2026",
        author: "HKM Team",
        link: "/blog/bhagavad-gita"
    },
    {
        id: 8,
        title: "Rama Navami - The Appearance Day of Lord Ramacandra",
        excerpt: "Discover the spiritual significance of Rama Navami — the appearance day of Lord Ramachandra — through the timeless teachings of Srila Prabhupada.",
        image: "/assets/ramanavami-blog-image.png",
        imagePosition: "object-top",
        category: "Festival",
        date: "Mar 30, 2026",
        author: "HKM Team",
        link: "/blog/ramanavami"
    },
    {
        id: 9,
        title: "Rukmini Dwadashi - The Appearance Day of Srimati Rukmini Devi",
        excerpt: "Rukmini Dwadashi is the divine appearance day of Srimati Rukmini Devi — Krishna's eternal queen and the Goddess of Fortune. Read her full story and glories.",
        image: "/assets/TA_987_sudama_and_krishna.png",
        imagePosition: "object-top",
        category: "Festival",
        date: "Apr 13, 2026",
        author: "HKM Team",
        link: "/blog/rukmini-dwadashi"
    },
    {
        id: 11,
        title: "Sri Gadadhara Pandita: The Foremost Among the Internal Potencies",
        excerpt: "Gadadhara Pandita is the foremost internal potency of Lord Caitanya — an incarnation of Srimati Radharani Herself. Discover his life, his devotion, and the miracle of the sitting Tota Gopinatha deity.",
        image: "/assets/blog/gadadhara-pandita/panchtattva.jpg",
        imagePosition: "object-center",
        category: "Vaishnava Acharya",
        date: "Apr 17, 2026",
        author: "HKM Team",
        link: "/blog/gadadhara-pandita"
    },
    {
        id: 10,
        title: "Narasimha Jayanti - The Divine Appearance of Lord Nrsimhadeva",
        excerpt: "Narasimha Jayanti celebrates the divine appearance of Lord Nrsimhadeva — the half-man, half-lion incarnation of Visnu who appeared from a pillar to protect His devotee Prahlada Maharaja.",
        image: "/assets/blog/narasimha-jayanti/narasimha_poster_2.png",
        imagePosition: "object-top",
        category: "Festival",
        date: "Apr 17, 2026",
        author: "HKM Team",
        link: "/blog/narasimha-jayanti"
    },
    {
        id: 12,
        title: "Akshaya Tritiya – The Inexhaustible Day of Eternal Blessings",
        excerpt: "Discover the true meaning of Akshaya Tritiya — 9 sacred events across cosmic history, the pastimes of Sudama & Rukmini Devi, and how to observe this auspicious day with devotion to Lord Krsna.",
        image: "/assets/blog/akshaya-tritiya/sudama_krishna.png",
        imagePosition: "object-top",
        category: "Festival",
        date: "Apr 20, 2026",
        author: "Sampati Dasa",
        link: "/blog/akshaya-tritiya"
    },
    {
        id: 13,
        title: "Srimati Sita Devi Appearance Day — Sita Navami",
        excerpt: "Celebrate Sita Navami — the appearance of Srimati Sita Devi, the eternal consort of Lord Ramacandra — through sastra, Sanskrit shlokas, and the teachings of Srila Prabhupada.",
        image: "/assets/blog/sita-devi-appearance-day/Sita_Rama_and_Lakshman_in_the_Forest.png",
        imagePosition: "object-top",
        category: "Festival",
        date: "Apr 24, 2026",
        author: "HKM Team",
        link: "/blog/sita-devi-appearance-day"
    },
    {
        id: 14,
        title: "Sri Madhu Pandita Gosvami — The Devoted Servant of Gopinatha",
        excerpt: "A disciple of Sri Gadadhara Pandita, founder of the Gopinatha Temple in Vrndavana, forty years of Deity service, the blessing of Srinivasa Acarya, and how to remember this great soul.",
        image: "/assets/blog/sri-madhu-pandita-gosvami/Madhu_Pandita_Goswami.png",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "Apr 24, 2026",
        author: "HKM Team",
        link: "/blog/sri-madhu-pandita-gosvami"
    },
    {
        id: 15,
        title: "Srimati Jahnava Devi — The Pleasure Potency of Lord Nityananda",
        excerpt: "Srila Prabhupada on Srimati Jahnava Devi: Ananga-manjari, acarya of the Gaudiya Vaisnava world, the mercy of Lord Nityananda — from books, purports, and conversations.",
        image: "/assets/blog/srimati-jahnava-devi/orgradhikai2.png",
        imagePosition: "object-center",
        category: "Vaishnava Acharya",
        date: "Apr 25, 2026",
        author: "HKM Team",
        link: "/blog/srimati-jahnava-devi-appearance-disappearance-day"
    },
    {
        id: 16,
        title: "Sri Jayananda Prabhu — A Glorious Life, a Glorious Departure",
        excerpt: "Discover the inspiring life and glorious departure of Sri Jayananda Prabhu — the beloved disciple of Srila Prabhupada who lived and died in pure devotional service to Lord Krsna.",
        image: "/assets/blog/jayananda-prabhu/Sri_Jayananda_Prabhu.png",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "May 01, 2026",
        author: "HKM Team",
        link: "/blog/jayananda-prabhu-disappearance-day"
    },
    {
        id: 17,
        title: "Sri Madhavendra Puri — The Root from Which the Tree of Pure Devotion Grew",
        excerpt: "The grand-spiritual-master of Lord Caitanya, the first to plant the seed of love of Godhead — discover the Gopala pastimes, Ksira-cora Gopinatha, the verse ayi dina-dayardra natha, and the lesson of the two disciples.",
        image: "/assets/blog/madhavendra-puri/Madhavendra_Puri_Worships_Gopala.png",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "May 01, 2026",
        author: "HKM Team",
        link: "/blog/sri-madhavendra-puri-appearance-disappearance-day"
    },
    {
        id: 18,
        title: "Sri Srinivasa Acarya — The Link Between the Gosvamis and All of Us",
        excerpt: "Sri Srinivasa Acarya is the direct link between the Six Gosvamis of Vrndavana and all subsequent acaryas — including Srila Prabhupada. Learn about his life, his mission to Bengal, the Sad-gosvamy-astaka, and why every devotee owes him an eternal debt.",
        image: "https://hkmchennai.org/assets/blog/srinivasa-acharya/srinivasa_acharya.png",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "May 02, 2026",
        author: "HKM Team",
        link: "/blog/srinivasa-acharya"
    },
    {
        id: 19,
        title: "Glories of Sri Ramananda Raya — The Most Confidential Associate",
        excerpt: "The most confidential associate of Lord Caitanya Mahaprabhu — the devotee who saw Lord Caitanya's combined form of Radha and Krsna, and conducted the greatest conversation in all of Gaudiya Vaisnava literature.",
        image: "https://hkmchennai.org/assets/blog/ramananda-raya/ramananda-talks-with-chaitanya.png",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "May 02, 2026",
        author: "HKM Team",
        link: "/blog/glories-of-sri-ramananda-raya"
    },
    {
        id: 20,
        title: "Sri Vrndavana Dasa Thakura — The Vyasa of the Chaitanya-lila",
        excerpt: "The disciple of Sri Nityananda Prabhu who received the mercy of Lord Caitanya at birth, authored the Chaitanya Bhagavata, and is venerated as the Vyasa incarnation of the Gaudiya tradition — his life, sacred places, and glories.",
        image: "/assets/blog/sri-vrindavan-das-thakur/Sri_Vrindavan_Das_Thakur.png",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "May 03, 2026",
        author: "HKM Team",
        link: "/blog/sri-vrindavan-das-thakur"
    },
    {
        id: 21,
        title: "Srila Baladeva Vidyabhushana — The Gaudiya Acharya Who Defended a Sampradaya",
        excerpt: "The acharya who prostrated before Govindaji for three days, composed the Govinda-bhashya, and secured the victory of the Gaudiya sampradaya at Galta, Jaipur in 1718 CE — and why Srila Prabhupada dedicated the Bhagavad-gita As It Is to him.",
        image: "/assets/blog/srila-baladeva-vidyabhushana/Srila_Baladeva_Vidyabhushana.png",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "May 10, 2026",
        author: "HKM Team",
        link: "/blog/srila-baladeva-vidyabhushana"
    },
    {
        id: 22,
        title: "Panihati Chida Dadhi Mahotsava — The Blissful Festival of Chipped Rice and Nityananda's Mercy",
        excerpt: "The day Lord Nityananda 'punished' Raghunatha Dasa Goswami with a feast that fed thousands on the banks of the Ganges — and opened the door to Sri Chaitanya Mahaprabhu's mercy for all future generations.",
        image: "/assets/blog/panihati-chida-dadhi-mahotsava/Lord_Chaitanya_Mahaprabhu_and_Lord_Nityananda_Prabhu_joyfully_participate_in_the_Panihati_Chida-Dadhi_Mahotsava..png",
        imagePosition: "object-top",
        category: "Festival",
        date: "May 2026",
        author: "HKM Team",
        link: "/blog/panihati-chida-dadhi-mahotsava"
    }
]

const categories = ["All", "Article", "Festival", "Vaishnava Acharya", "Philosophy"]

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")
    
    const filteredPosts = posts.filter(post => {
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        const lowerQuery = searchQuery.toLowerCase();
        const matchesSearch = 
            post.title.toLowerCase().includes(lowerQuery) || 
            post.excerpt.toLowerCase().includes(lowerQuery) || 
            post.author.toLowerCase().includes(lowerQuery) ||
            post.category.toLowerCase().includes(lowerQuery);
        return matchesCategory && matchesSearch;
    })

    return (
        <main className="min-h-screen bg-[#FFF9F0] overflow-x-hidden selection:bg-[#FFB81C] selection:text-[#2D0A0A]">
            <Navbar />
            
            <SaffronCommonHeader 
                title={<span>Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-[#d97706]">Stories</span></span>}
                subtitle="Explore the vibrant activities, festivals, and spiritual insights."
                stickerText="Blog & Updates"
            />

            {/* Content Section */}
            <section className="py-20 px-6 container mx-auto max-w-7xl relative">
                <div className="absolute inset-0 bg-[url('/assets/temple-pattern.PNG')] opacity-5 bg-fixed bg-center"></div>

                <div className="flex flex-col items-center mb-16 relative z-10 space-y-6">
                    {/* Category Pills */}
                    <div className="bg-gradient-to-r from-[#701a1a] via-[#ea580c] to-[#b45309] p-2 rounded-full shadow-2xl flex flex-wrap justify-center gap-2 border border-[#FFB81C]">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 font-serif tracking-wide ${
                                    selectedCategory === cat 
                                    ? "bg-[#FFB81C] text-[#2D0A0A] shadow-md transform scale-105" 
                                    : "text-[#ffe8cc] hover:text-white hover:bg-[#FFB81C]/20"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full max-w-xl group mt-2">
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-[#b45309]">
                            <Search size={22} className="opacity-70 group-focus-within:opacity-100 transition-opacity" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search articles, festivals, authors..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-14 pr-6 py-4 rounded-full border-2 border-[#d97706]/40 bg-white shadow-lg outline-none focus:border-[#ea580c] focus:ring-4 focus:ring-[#ea580c]/20 transition-all duration-300 text-[1.1rem] font-serif placeholder:text-gray-400 text-[#2D0A0A] font-medium"
                        />
                    </div>
                </div>

                {/* Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredPosts.map((post) => (
                            <motion.article 
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={post.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-[#FFB81C]/20 hover:border-[#FFB81C] group flex flex-col h-full"
                            >
                                <Link 
                                    href={post.link}
                                    target={post.link.startsWith("http") ? "_blank" : undefined}
                                    rel={post.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="flex flex-col h-full flex-grow block cursor-pointer"
                                >
                                {/* Image */}
                                    <div className="h-64 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                        <img 
                                            src={post.image} 
                                            alt={post.title} 
                                            className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ${
                                                // @ts-ignore
                                                post.imagePosition || ""} `}
                                        />
                                        
                                         {/* Decorative Gold Border Inset */}
                                         <div className="absolute inset-2 border border-white/30 rounded-xl pointer-events-none z-20"></div>
                                    </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow relative">
                                    {/* Gold Flourish Background */}
                                    <div className="absolute top-0 right-0 p-4 opacity-5">
                                        <Sparkles size={60} className="text-[#FFB81C]" />
                                    </div>

                                    <div className="flex items-center flex-wrap text-[0.65rem] md:text-xs font-bold text-[#ea580c] mb-4 uppercase tracking-wider gap-y-2">
                                        <span className="flex items-center gap-1 whitespace-nowrap">
                                            <Tag size={12} /> {post.category}
                                        </span>
                                        <div className="w-1 h-1 bg-[#FFB81C] rounded-full mx-2 md:mx-3"></div>
                                        <span className="flex items-center gap-1 whitespace-nowrap">
                                            <User size={12} /> {post.author}
                                        </span>
                                        { (post.id === 24 || post.id === 25) && (
                                            <>
                                                <div className="w-1 h-1 bg-[#FFB81C] rounded-full mx-2 md:mx-3 hidden sm:block"></div>
                                                <span className="flex items-center gap-1 whitespace-nowrap w-full sm:w-auto">
                                                    <Calendar size={12} /> {post.date}
                                                </span>
                                            </>
                                        )}
                                    </div>

                                    <h2 className="text-2xl font-bold text-[#2D0A0A] mb-4 group-hover:text-[#b45309] transition-colors font-serif leading-tight">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-600 font-light mb-6 flex-grow line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <div className="pt-4 border-t border-[#FFB81C]/20 mt-auto">
                                        <div 
                                            className="inline-flex items-center text-[#2D0A0A] font-bold uppercase tracking-widest text-sm group/link hover:text-[#ea580c] transition-colors"
                                        >
                                            Read Article 
                                            <div className="ml-2 w-8 h-8 rounded-full bg-[#FFB81C]/20 flex items-center justify-center group-hover/link:bg-[#FFB81C] transition-colors">
                                                <ArrowRight size={14} className="transform group-hover/link:-rotate-45 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>
            
            <Footer />
        </main>
    )
}
