const fs = require('fs');
const data = JSON.parse(fs.readFileSync('scripts/jahnava-plain-paras.json', 'utf8'));
const paras = data.content;
let htmlContent = '';

let inTOC = false;
let tocItems = [];

let faqs = [];
let inFAQ = false;
let currentQ = '';
let currentA = '';

let inFooter = false;

for (let i = 0; i < paras.length; i++) {
    let text = paras[i].trim();
    if (!text) continue;

    if (text.startsWith('The Truth About Caste:') || 
        text.startsWith('What Srila Prabhupada Teaches') ||
        text.startsWith('HKM Chennai |') ||
        text.startsWith('Based exclusively on') ||
        text.startsWith('SEO Meta:') ||
        text.startsWith('Schema Types:') ||
        text.startsWith('Primary Keywords:') ||
        text.startsWith('SEO METADATA') ||
        text.startsWith('Title Tag') ||
        text.startsWith('Meta Description') ||
        text.startsWith('URL Slug')) {
        continue;
    }

    if (text === 'Table of Contents') {
        inTOC = true;
        continue;
    }

    // Capture TOC items (they are usually the numbers before the actual sections)
    // Actually, in the document, TOC items appear right after 'Table of Contents' until we hit the first section "1. Introduction..."
    if (inTOC) {
        if (text.startsWith('1. Introduction:') && tocItems.length > 0) {
            inTOC = false; // we hit the actual first section
            htmlContent += `
<div className="bg-[#FFF6E8] p-6 rounded-xl border border-[#c9973a]/30 mb-10 shadow-sm max-w-3xl mx-auto">
  <h2 className="text-2xl font-bold text-[#2D0A0A] mb-4 border-b border-[#c9973a]/30 pb-2">Table of Contents</h2>
  <ul className="space-y-2 text-[#7a5c3a]">
    ${tocItems.map(item => `<li className="flex items-start"><span className="text-[#c9973a] mr-2">❖</span> <span>${item}</span></li>`).join('\n')}
  </ul>
</div>\n`;
        } else {
            tocItems.push(text);
            continue;
        }
    }

    if (text === '11. Frequently Asked Questions' || text === 'Frequently Asked Questions') {
        inFAQ = true;
        continue;
    }

    if (text.startsWith('Conclusion:')) {
        if (inFAQ && currentQ) {
            faqs.push({q: currentQ, a: currentA});
            currentQ = ''; currentA = '';
        }
        inFAQ = false;
        
        // Output FAQ grid
        if (faqs.length > 0) {
            htmlContent += '\n<div className="gp-divider"></div>\n';
            htmlContent += '\n<h2 className="gp-sh" id="faq">Frequently Asked Questions</h2>\n';
            htmlContent += '<div className="gp-faq-grid mb-12">\n';
            faqs.forEach(f => {
                htmlContent += `  <div className="gp-faq-item">
    <h3 className="gp-faq-q">${f.q.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</h3>
    <p className="gp-faq-a">${f.a.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
  </div>\n`;
            });
            htmlContent += '</div>\n';
        }

        htmlContent += '\n<div className="gp-divider"></div>\n';
        htmlContent += `\n<h2 className="gp-sh">${text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</h2>\n`;
        continue;
    }

    if (text.includes('Visit Us | Participate | Support')) {
        inFooter = true;
        continue;
    }

    if (inFooter) {
        // Skip these lines, we will inject the standard connect section at the end
        continue;
    }

    if (inFAQ) {
        if (text.startsWith('Q: ')) {
            if (currentQ) faqs.push({q: currentQ, a: currentA});
            currentQ = text;
            currentA = '';
        } else if (text.startsWith('A: ')) {
            currentA = text;
        } else if (currentA) {
            currentA += ' ' + text;
        }
        continue;
    }

    if (text.match(/^[0-9]+\.\s+[A-Z]/)) {
        htmlContent += '\n<div className="gp-divider"></div>\n';
        htmlContent += `\n<h2 className="gp-sh">${text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</h2>\n`;
        continue;
    }

    if (text.startsWith('"') || text.startsWith('""')) {
        let quoteText = text.replace(/^"+|"+$/g, '').trim();
        quoteText = quoteText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        let citation = '';
        if (i + 1 < paras.length && paras[i+1].trim().startsWith('—')) {
            citation = paras[i+1].trim().replace(/^—\s*/, '');
            citation = citation.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            i++; 
        }
        
        if (citation.match(/Bhagavad-g[iī]t[aā]/i) || citation.match(/Śrīmad-Bhāgavatam/i) || citation.match(/Bhagavatam/i)) {
            htmlContent += `\n<div className="gp-verse">
  <div className="gp-verse-body">
    <p>"${quoteText}"</p>
    <cite>— ${citation}</cite>
  </div>
</div>\n`;
        } else {
            htmlContent += `\n<div className="gp-bq">
  <p>"${quoteText}"</p>
  ${citation ? `<cite>— ${citation}</cite>` : ''}
</div>\n`;
        }
        continue;
    }

    htmlContent += `<p>${text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>\n`;
}

// Ensure FAQ is output if it was at the very end
if (inFAQ && faqs.length > 0) {
    htmlContent += '\n<div className="gp-divider"></div>\n';
    htmlContent += '\n<h2 className="gp-sh" id="faq">Frequently Asked Questions</h2>\n';
    htmlContent += '<div className="gp-faq-grid mb-12">\n';
    faqs.forEach(f => {
        htmlContent += `  <div className="gp-faq-item">
    <h3 className="gp-faq-q">${f.q.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</h3>
    <p className="gp-faq-a">${f.a.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
  </div>\n`;
    });
    htmlContent += '</div>\n';
}

const template = `"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import "../jayananda-prabhu-disappearance-day/styles.css";

const TEMPLE_SHORT = "ISKCON Thiruvanmiyur";
const TEMPLE_FULL =
  "ISKCON Thiruvanmiyur (Hare Krishna Movement Chennai — Affiliated to ISKCON Bangalore Regn. S-49/78-79)";

const socialLinks = [
  { icon: "🌍", label: "Website",          display: "hkmchennai.org",                   href: "https://hkmchennai.org/" },
  { icon: "📸", label: "Instagram",        display: "@hkm_chennai",                     href: "https://www.instagram.com/hkm_chennai" },
  { icon: "👍", label: "Facebook",         display: "Hare Krishna Movement Chennai",    href: "https://www.facebook.com/hkmcworld/" },
  { icon: "🐦", label: "Twitter / X",      display: "@ChennaiHare",                     href: "https://x.com/ChennaiHare" },
  { icon: "💼", label: "LinkedIn",         display: "HKM Chennai",                      href: "https://www.linkedin.com/company/hare-krishna-movement-chennai?originalSubdomain=in" },
  { icon: "📱", label: "WhatsApp",         display: "Join our WhatsApp Channel",        href: "https://www.whatsapp.com/channel/0029Vaa2fjKEVccFHx5YDt1O" },
  { icon: "🙏", label: "Support",          display: "Dakshina Dwaraka Dham Campaign",   href: "https://campaigns.hkmchennai.org/srila-prabhupada-s-iskcon-thiruvanmiyur-campaign" },
  { icon: "📍", label: "Google Maps",      display: "Click here for directions",        href: "https://maps.app.goo.gl/o2m98vJQHQjUHHDy6" },
];

export default function VarnasramaBlogPage() {
  return (
    <div className="bg-[#FFF9F0] min-h-screen selection:bg-[#c9973a] selection:text-white pb-20">
      <Navbar />

      <main className="gp-blog-wrap pt-28">
        <div className="mp-breadcrumb mb-6">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><span className="mx-2">/</span></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><span className="mx-2">/</span></li>
            <li aria-current="page">Caste System Truth</li>
          </ol>
        </div>

        <header className="gp-blog-header">
          <p className="gp-hero-label">What Srila Prabhupada Teaches on Varnasrama</p>
          <h1 className="gp-blog-title">
            Caste System Truth <br />
            <span className="text-[clamp(1.5rem,3vw,2.5rem)] text-gray-700 font-normal">Corruption by Birthright, and the Real Path of Human Civilization</span>
          </h1>
          <p className="gp-blog-subtitle mt-4 mb-6">
            Based exclusively on the teachings of His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupada.
          </p>
          <div className="gp-hero-line"></div>
          <p className="gp-blog-byline">
            By <strong>HKM Team</strong>
          </p>
          <div className="mp-hero-meta">
            <span>Philosophy</span>
            <span>•</span>
            <span>Articles</span>
          </div>
        </header>

        <div className="gp-image-container mb-8">
          <Image
            src="/assets/blog/caste-system-varnashrama-new.png"
            alt="Divine Varnashrama System"
            width={800}
            height={450}
            className="gp-image"
            priority
          />
          <span className="gp-image-caption">The divine varnashrama system — the natural division of human society into four orders based on quality and work (guna-karma).</span>
        </div>

        <div className="gp-content">
          ${htmlContent}

          <div className="gp-divider"></div>

          {/* Connect Section */}
          <div className="gp-connect-section">
            <h2 className="gp-connect-h">🌿 Connect With Us</h2>
            <p className="gp-connect-desc">
              We would love to welcome you to our growing community of seekers. Reach us through any of the platforms below or visit us in person.
            </p>
            <div className="gp-social-grid mb-8">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="gp-social-card">
                  <span className="gp-s-icon">{link.icon}</span>
                  <span className="gp-s-text">
                    <span className="gp-s-label">{link.label}</span>
                    <span className="gp-s-url">{link.display}</span>
                  </span>
                  <span className="gp-s-arrow">→</span>
                </a>
              ))}
            </div>
            <div className="text-center text-[#7a5c3a] italic mt-6">
              <p>{TEMPLE_FULL}</p>
              <a href="https://maps.app.goo.gl/o2m98vJQHQjUHHDy6" target="_blank" rel="noopener noreferrer" className="text-[#c9973a] font-bold not-italic hover:underline mt-2 inline-block">
                🗺️ Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}`;

fs.writeFileSync('app/blog/what-srila-prabhupada-teaches-caste-system-varnasrama/BlogClient.tsx', template, 'utf8');
console.log('Successfully updated BlogClient with TOC, FAQ and Connect styles!');
