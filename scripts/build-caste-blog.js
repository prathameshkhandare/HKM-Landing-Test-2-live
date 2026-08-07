const fs = require('fs');
const data = JSON.parse(fs.readFileSync('scripts/jahnava-plain-paras.json', 'utf8'));
const paras = data.content;
let htmlContent = '';
for (let i = 0; i < paras.length; i++) {
    let text = paras[i].trim();
    if (!text) continue;
    text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    if (text.match(/^[0-9]+\.\s+[A-Z]/) || text === 'Table of Contents' || text.startsWith('Conclusion:') || text === 'Frequently Asked Questions') {
        htmlContent += '\n<h2 className="gp-sh mt-10 mb-4 text-3xl font-bold text-[#2D0A0A] border-b-2 border-[#e8b830] pb-2">' + text + '</h2>\n';
    } else if (text.startsWith('SEO Meta:') || text.startsWith('Schema Types:') || text.startsWith('Primary Keywords:')) {
        htmlContent += '\n{/* ' + text + ' */}\n';
    } else {
        htmlContent += '<p className="mb-4 text-lg text-gray-800 leading-relaxed">' + text + '</p>\n';
    }
}
const template = `"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import "../bhagavad-gita/styles.css";

export default function VarnasramaBlogPage() {
  return (
    <main className="min-h-screen bg-[#FDFAF3] selection:bg-[#E8650A] selection:text-white">
      <Navbar />
      <article className="blog-page pt-28">
        <header className="hero text-center px-4 max-w-4xl mx-auto mb-12">
          <p className="hero-temple text-[#E8650A] font-bold tracking-widest uppercase mb-2">ISKCON Thiruvanmiyur</p>
          <h1 className="hero-title text-4xl md:text-5xl font-extrabold text-[#2D0A0A] mb-4">
            Caste System Truth:<br />
            <span className="text-[#E8650A]">What Srila Prabhupada Actually Taught</span>
          </h1>
        </header>
        <div className="article-body max-w-4xl mx-auto px-6 pb-20">
          ` + htmlContent + `
        </div>
      </article>
      <Footer />
    </main>
  );
}`;
fs.writeFileSync('app/blog/what-srila-prabhupada-teaches-caste-system-varnasrama/BlogClient.tsx', template, 'utf8');
console.log('Successfully generated BlogClient.tsx');
