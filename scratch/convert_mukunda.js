const fs = require('fs');
const path = require('path');

const srcFile = 'E:\\talentroanut -data\\hkm-images\\new data today new\\mukunda-datta-page.jsx';
const dstDir = 'E:\\volddata\\InternShipLinksUs\\HKM-Landing-Test-2\\app\\blog\\mukunda-datta';
const pageFile = path.join(dstDir, 'page.tsx');
const clientFile = path.join(dstDir, 'BlogClient.tsx');

let content = fs.readFileSync(srcFile, 'utf8');

// Extract metadata
const metadataMatch = content.match(/export const metadata = (\{[\s\S]*?\});\n\n\/\//);
let metadataObjStr = metadataMatch ? metadataMatch[1] : '';

// The metadata is a JS object string, let's keep it as is, but we need to convert to TS `Metadata` type
let pageTsx = `
import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = ${metadataObjStr.replace('export const metadata = ', '')};

export default function Page() {
    return <BlogClient />
}
`;

// Now let's extract the actual content from the article tag onwards
let articleMatch = content.match(/<article[\s\S]*?<\/article>/);
let articleContent = articleMatch ? articleMatch[0] : '';

// Convert components to match the theme:
// <SectionHeading id="origins">...</SectionHeading> -> <section className="sp-section" id="origins"><SectionHead num="01" title="..." />
let sectionCounter = 1;
articleContent = articleContent.replace(/<SectionHeading id="([^"]+)">\s*([^<]+)\s*<\/SectionHeading>/g, (match, id, title) => {
    let numStr = sectionCounter.toString().padStart(2, '0');
    sectionCounter++;
    return `</section>\n\n                <Divider />\n\n                <section className="sp-section" id="${id}">\n                    <SectionHead num="${numStr}" title="${title.trim()}" />`;
});
// Remove the first closing </section> and <Divider /> since it's the start
articleContent = articleContent.replace(/<\/section>\s*<Divider \/>/, '');

// Convert SubHeading
articleContent = articleContent.replace(/<SubHeading>([^<]+)<\/SubHeading>/g, '<h3 className="text-xl font-serif text-[#783e0e] mt-6 mb-2 font-bold">$1</h3>');

// Convert PullQuote
articleContent = articleContent.replace(/<PullQuote source="([^"]+)">\s*([\s\S]*?)\s*<\/PullQuote>/g, '<div className="at-pull-quote">\n                        <p>$2</p>\n                        <cite>$1</cite>\n                    </div>');
articleContent = articleContent.replace(/<PullQuote>\s*([\s\S]*?)\s*<\/PullQuote>/g, '<div className="at-pull-quote">\n                        <p>$1</p>\n                    </div>');

// Convert paragraphs
articleContent = articleContent.replace(/<p className="[^"]+">\s*([\s\S]*?)\s*<\/p>/g, '<p>$1</p>');

// Wrap paragraphs in <div className="sp-prose">
// This is tricky with regex, we can just replace <p> tags and manually fix it or wrap groups of <p> and <h3>
let clientTsx = `"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/FooterSection"
import "../sri-shyamananda-prabhu/styles.css"

function Divider() {
  return (
    <div className="at-divider" aria-hidden="true">
      <span>✦</span>
    </div>
  )
}

function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="sp-sec-head">
      <span className="sp-sec-num">{num}</span>
      <h2 className="sp-sec-title">{title}</h2>
    </div>
  )
}

export default function BlogClient() {
    return (
        <main className="min-h-screen bg-[#FFF9F0] selection:bg-[#c9973a] selection:text-white">
            <Navbar />
            ${articleContent}
            <Footer />
        </main>
    )
}
`;

fs.mkdirSync(dstDir, { recursive: true });
fs.writeFileSync(pageFile, pageTsx);
fs.writeFileSync(clientFile, clientTsx);
console.log('Done!');
