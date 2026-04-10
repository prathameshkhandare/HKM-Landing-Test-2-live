"use client"

import Link from "next/link"
import React from "react"

export default function SharedSidebar() {
    const activities = [
        { name: "SPIRITUAL DISCOURSES", link: "/activities/spiritual-discourses" },
        { name: "YOUTH EMPOWERMENT CLUB – FOLK", link: "/activities/folk" },
        { name: "DISTRIBUTION OF SPIRITUAL KNOWLEDGE", link: "/activities/distribution-of-spiritual-knowledge" },
        { name: "CULTURAL FESTIVALS", link: "/activities/cultural-festivals" },
        { name: "SUNDAY RETREATS", link: "/activities/sunday-retreats" },
        { name: "YUGA DHARMA", link: "/activities/yuga-dharma" },
        { name: "ASK A QUESTION", link: "/philosophy/ask-any-question" },
    ]

    const festivals = [
        { name: "SRI VAIKUNTHA EKADASHI", link: "/temple/festivals/vaikuntha-ekadashi" },
        { name: "PONGAL", link: "/temple/festivals/pongal" },
        { name: "VARSHIKOTSAVAM", link: "/temple/festivals/varshikotsava" },
        { name: "RATHA YATRA", link: "/donate/ratha-yatra" },
        { name: "SRI NITYANANDA TRAYODASHI", link: "/temple/festivals/nityananda-trayodashi" },
        { name: "SRI GAURA PURNIMA", link: "/donate/gaura-purnima" },
        { name: "SRI RAMA NAVAMI", link: "/donate/ram-navami" },
        { name: "SRI RUKMINI DWADASHI", link: "/donate/sri-rukmini-dwadashi" },
        { name: "SRI NARASIMHA JAYANTI", link: "/donate/sri-narasimha-jayanti" },
        { name: "PANIHATI CHIDA-DAHI UTSAVA", link: "/temple/festivals/panihati-chida-dahi" },
        { name: "JHULAN UTSAVA", link: "/temple/festivals/jhulan-utsava" },
        { name: "BALARAMA JAYANTI", link: "/temple/festivals/balarama-purnima" },
        { name: "SRI KRISHNA JANMASHTAMI", link: "/temple/festivals/janmashtami" },
        { name: "VYASA PUJA", link: "/temple/festivals/vyasa-puja" },
        { name: "SRI RADHASHTAMI", link: "/temple/festivals/radhashtami" },
        { name: "GOVARDHANA PUJA", link: "/temple/festivals/govardhana-puja" },
        { name: "DEEPOTSAVA", link: "/temple/festivals/deepotsava" },
        { name: "SRILA PRABHUPADA DISAPPEARANCE DAY", link: "/temple/festivals/srila-prabhupada-disappearance-day" },
    ]

    return (
        <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#FFB81C] shadow-sm">
                <h4 className="text-xl font-bold mb-4 text-[#701a1a] font-serif border-b border-[#FFB81C]/20 pb-2">ACTIVITIES</h4>
                <div className="space-y-3">
                    {activities.map((activity, idx) => (
                        <Link
                            key={idx}
                            href={activity.link}
                            className="block text-sm font-bold text-[#701a1a] hover:text-[#ea580c] transition-colors py-2 px-3 rounded hover:bg-[#FFF9F0] border-b border-gray-50 flex items-center group"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB81C] mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            {activity.name}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-[#ea580c] shadow-sm">
                <h4 className="text-xl font-bold mb-4 text-[#701a1a] font-serif border-b border-[#ea580c]/20 pb-2">FESTIVALS</h4>
                <div className="space-y-2">
                    {festivals.map((festival, idx) => (
                        <Link
                            key={idx}
                            href={festival.link}
                            className="block text-sm font-bold text-[#701a1a] hover:text-[#ea580c] transition-colors py-2 px-3 rounded hover:bg-[#FFF9F0] border-b border-gray-50 flex items-center group"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            {festival.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
