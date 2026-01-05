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
        { name: "RATHA YATRA", link: "/activities/cultural-festivals" },
        { name: "SRI NITYANANDA TRAYODASHI", link: "/activities/cultural-festivals" },
        { name: "SRI GAURA PURNIMA", link: "/activities/cultural-festivals" },
        { name: "SRI RAMA NAVAMI", link: "/activities/cultural-festivals" },
        { name: "SRI NARASIMHA JAYANTI", link: "/activities/cultural-festivals" },
        { name: "PANIHATI CHIDA-DAHI UTSAVA", link: "/activities/cultural-festivals" },
        { name: "BALARAMA PURNIMA", link: "/activities/cultural-festivals" },
        { name: "SRI KRISHNA JANMASHTAMI", link: "/activities/annual-festivals" }, // Special case if mapped
        { name: "VYASA PUJA", link: "/activities/cultural-festivals" },
        { name: "SRI RADHASHTAMI", link: "/activities/cultural-festivals" },
        { name: "VAMANA JAYANTI", link: "/activities/cultural-festivals" },
        { name: "GOVARDHANA PUJA", link: "/activities/cultural-festivals" },
        { name: "DEEPOTSAVA", link: "/activities/cultural-festivals" },
    ]

    return (
        <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#FFB81C] shadow-sm">
                <h4 className="text-xl font-bold mb-4 text-[#1B7CB8]">ACTIVITIES</h4>
                <div className="space-y-3">
                    {activities.map((activity, idx) => (
                        <Link
                            key={idx}
                            href={activity.link}
                            className="block text-sm font-medium text-[#1B7CB8] hover:text-[#E8725C] transition-colors py-2 px-3 rounded hover:bg-[#FFF9F0]"
                        >
                            {activity.name}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-[#E8725C] shadow-sm">
                <h4 className="text-xl font-bold mb-4 text-[#1B7CB8]">FESTIVALS</h4>
                <div className="space-y-2">
                    {festivals.map((festival, idx) => (
                        <Link
                            key={idx}
                            href={festival.link}
                            className="block text-sm font-medium text-[#1B7CB8] hover:text-[#E8725C] transition-colors py-2 px-3 rounded hover:bg-[#FFF9F0]"
                        >
                            {festival.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
