import React from 'react';

export default function BlogConnectSection() {
    return (
        <div className="gp-connect-section-v2 my-20 px-4 w-full">
            <div className="gp-divider">✦</div>
            <div className="text-center mt-12 mb-10">
                <h2 className="font-[family-name:var(--gp-font-display)] text-3xl sm:text-4xl text-[#4a2c0a] mb-4">Connect with Us</h2>
                <p className="font-[family-name:var(--gp-font-serif)] text-lg text-[#5c3b1a] italic max-w-2xl mx-auto leading-relaxed">
                    Follow Hare Krsna Movement Chennai across all platforms for daily darsana and event updates.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {/* Card 1: Website */}
                <a href="https://hkmchennai.org" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 sm:p-5 rounded-xl border border-[#d4b896] bg-white shadow-sm hover:shadow-md transition-shadow group gap-3">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="text-2xl group-hover:scale-110 transition-transform shrink-0">🌐</div>
                        <div className="min-w-0 flex-1">
                            <p className="text-[0.65rem] font-bold tracking-[0.2em] text-[#c9973a] uppercase font-[family-name:var(--gp-font-serif)] mb-1 truncate">Website</p>
                            <p className="font-[family-name:var(--gp-font-serif)] text-sm sm:text-base font-bold text-[#2c1a0e] truncate">hkmchennai.org</p>
                        </div>
                    </div>
                    <div className="text-[#c9973a] font-bold text-xl group-hover:translate-x-1 transition-transform shrink-0">→</div>
                </a>

                {/* Card 2: Twitter (X) */}
                <a href="https://twitter.com/ChennaiHare" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 sm:p-5 rounded-xl border border-[#d4b896] bg-white shadow-sm hover:shadow-md transition-shadow group gap-3">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="text-2xl group-hover:scale-110 transition-transform shrink-0">🕊️</div>
                        <div className="min-w-0 flex-1">
                            <p className="text-[0.65rem] font-bold tracking-[0.2em] text-[#c9973a] uppercase font-[family-name:var(--gp-font-serif)] mb-1 truncate">Twitter (X)</p>
                            <p className="font-[family-name:var(--gp-font-serif)] text-sm sm:text-base font-bold text-[#2c1a0e] truncate">@ChennaiHare</p>
                        </div>
                    </div>
                    <div className="text-[#c9973a] font-bold text-xl group-hover:translate-x-1 transition-transform shrink-0">→</div>
                </a>

                {/* Card 3: Instagram */}
                <a href="https://instagram.com/hkm_chennai" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 sm:p-5 rounded-xl border border-[#d4b896] bg-white shadow-sm hover:shadow-md transition-shadow group gap-3">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="text-2xl group-hover:scale-110 transition-transform shrink-0">📸</div>
                        <div className="min-w-0 flex-1">
                            <p className="text-[0.65rem] font-bold tracking-[0.2em] text-[#c9973a] uppercase font-[family-name:var(--gp-font-serif)] mb-1 truncate">Instagram</p>
                            <p className="font-[family-name:var(--gp-font-serif)] text-sm sm:text-base font-bold text-[#2c1a0e] truncate">@hkm_chennai</p>
                        </div>
                    </div>
                    <div className="text-[#c9973a] font-bold text-xl group-hover:translate-x-1 transition-transform shrink-0">→</div>
                </a>

                {/* Card 4: LinkedIn */}
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 sm:p-5 rounded-xl border border-[#d4b896] bg-white shadow-sm hover:shadow-md transition-shadow group gap-3">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="text-2xl group-hover:scale-110 transition-transform shrink-0">💼</div>
                        <div className="min-w-0 flex-1">
                            <p className="text-[0.65rem] font-bold tracking-[0.2em] text-[#c9973a] uppercase font-[family-name:var(--gp-font-serif)] mb-1 truncate">LinkedIn</p>
                            <p className="font-[family-name:var(--gp-font-serif)] text-sm sm:text-[0.95rem] font-bold text-[#2c1a0e] leading-snug break-words line-clamp-2">Srila Prabhupada's ISKCON Thiruvanmiyur</p>
                        </div>
                    </div>
                    <div className="text-[#c9973a] font-bold text-xl group-hover:translate-x-1 transition-transform shrink-0">→</div>
                </a>

                {/* Card 5: Support */}
                <a href="https://campaigns.hkmchennai.org" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 sm:p-5 rounded-xl border border-[#d4b896] bg-white shadow-sm hover:shadow-md transition-shadow group gap-3">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="text-2xl group-hover:scale-110 transition-transform shrink-0">🎯</div>
                        <div className="min-w-0 flex-1">
                            <p className="text-[0.65rem] font-bold tracking-[0.2em] text-[#c9973a] uppercase font-[family-name:var(--gp-font-serif)] mb-1 truncate">Support</p>
                            <p className="font-[family-name:var(--gp-font-serif)] text-sm sm:text-base font-bold text-[#2c1a0e] truncate">campaigns.hkmchennai.org</p>
                        </div>
                    </div>
                    <div className="text-[#c9973a] font-bold text-xl group-hover:translate-x-1 transition-transform shrink-0">→</div>
                </a>

                {/* Card 6: WhatsApp */}
                <a href="#" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 sm:p-5 rounded-xl border border-[#d4b896] bg-white shadow-sm hover:shadow-md transition-shadow group gap-3">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="text-2xl group-hover:scale-110 transition-transform shrink-0">📱</div>
                        <div className="min-w-0 flex-1">
                            <p className="text-[0.65rem] font-bold tracking-[0.2em] text-[#c9973a] uppercase font-[family-name:var(--gp-font-serif)] mb-1 truncate">WhatsApp</p>
                            <p className="font-[family-name:var(--gp-font-serif)] text-sm sm:text-base font-bold text-[#2c1a0e] truncate">Join our WhatsApp Channel</p>
                        </div>
                    </div>
                    <div className="text-[#c9973a] font-bold text-xl group-hover:translate-x-1 transition-transform shrink-0">→</div>
                </a>
            </div>
        </div>
    );
}
