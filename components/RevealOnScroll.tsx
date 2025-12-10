"use client"

import React from "react"
import { motion } from "framer-motion"

interface RevealOnScrollProps {
    children: React.ReactNode
    width?: "fit-content" | "100%"
    className?: string
}

export default function RevealOnScroll({ children, width = "100%", className = "" }: RevealOnScrollProps) {
    return (
        <div style={{ width }} className={className}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="will-change-transform"
            >
                {children}
            </motion.div>
        </div>
    )
}
