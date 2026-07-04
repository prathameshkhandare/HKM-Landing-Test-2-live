import Link from 'next/link';

export default function GitaPathashalaFooter() {
  return (
    <footer className="bg-[#060f1e] border-t border-[#c9a84c]/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-['Cinzel',serif] text-[#c9a84c] font-bold text-base mb-3">
              Gītā Pathashālā
            </h3>
            <p className="text-[#e8d5a3]/60 text-sm leading-relaxed mb-4">
              Free Online Bhagavad-gītā Shloka Memorisation Programme for Children (Age 7–12).
            </p>
            <p className="text-[#e8d5a3]/40 text-xs leading-relaxed">
              An initiative of Dakṣiṇa Dwārakā Dhām<br />
              Hare Krishna Movement Chennai<br />
              Affiliated to ISKCON Bangalore · Regn. S-49/78-79
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-['Cinzel',serif] text-[#c9a84c]/80 font-semibold text-xs tracking-widest uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                ['About HKM Chennai', '#about'],
                ['Programme Details', '#programme'],
                ['FAQ', '#faq'],
                ['Register', '#register'],
                ['HKM Chennai Website', 'https://hkmchennai.org'],
                ['Privacy Policy', '/privacy-policy'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[#e8d5a3]/60 text-sm hover:text-[#c9a84c] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Cinzel',serif] text-[#c9a84c]/80 font-semibold text-xs tracking-widest uppercase mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm text-[#e8d5a3]/60">
              <p>
                <span className="text-[#c9a84c]">📞 WhatsApp / Call:</span><br />
                <a href="tel:+919600815108" className="hover:text-[#c9a84c] transition-colors">
                  96008 15108
                </a>
              </p>
              <p>
                <span className="text-[#c9a84c]">🌐 Website:</span><br />
                <a
                  href="https://hkmchennai.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c9a84c] transition-colors"
                >
                  hkmchennai.org
                </a>
              </p>
              <p>
                <span className="text-[#c9a84c]">📍 Temple:</span><br />
                Dakṣiṇa Dwārakā Dhām,<br />
                Hare Krishna Movement Chennai
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#c9a84c]/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#e8d5a3]/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Hare Krishna Movement Chennai. All rights reserved.
          </p>
          <p className="text-[#e8d5a3]/30 text-xs text-center">
            Founder Ācārya: His Divine Grace Vishwa Guru A.C. Bhaktivedanta Swami Prabhupāda
          </p>
        </div>
      </div>
    </footer>
  );
}
