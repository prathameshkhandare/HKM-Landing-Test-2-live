"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import Image from "next/image"
import { Quote, Music, BookOpen, Heart } from "lucide-react"

export default function YugaDharmaPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans">
      <NavbarDemo />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/activities/yuga-dharma/monks-group.jpg"
            alt="Harinama Sankirtana Monks"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Yuga Dharma
          </h1>
          <div className="w-24 h-1.5 bg-[#FFB81C] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-3xl text-white/95 font-light leading-relaxed max-w-3xl mx-auto">
            Sankirtana Yajna - The Sole Hope for World Peace and Prosperity
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto text-center md:text-left">
         <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-8 text-center drop-shadow-sm">
              The Chant for the Age of Kali
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed font-medium">
              <strong>Sankirtana Yajna</strong> means congregational chanting of the holy names of the Supreme Lord. This is the path prescribed in the Vedic literatures for achieving spiritual perfection in the human form of life, namely God-realization and ending all the sufferings that we undergo in this world.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed font-medium">
              In the present <strong>Kali-yuga</strong> which is fraught with so many defects and deficiencies, the scriptures recommend that the only way for a common man towards spiritual realization is Sankirtana Yajna which is the Yugadharma of this age. It is the simplest yet sublime method that can be practiced by everybody with no pre-qualification.
            </p>
         </div>
      </section>

      {/* Video Section */}
      {/* Video Section */}
      <section className="py-24 bg-gradient-to-b from-[#1E293B] to-[#0F172A] relative overflow-hidden">
         {/* Background glow effects */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFB81C]/5 rounded-full blur-[120px] pointer-events-none"></div>
         
         <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#FFB81C]/20 ring-1 ring-[#FFB81C]/10 group">
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
               <iframe 
                 width="100%" 
                 height="100%" 
                 src="https://www.youtube.com/embed/BZiZtt80gyQ" 
                 title="Harinama Sankirtana Video"
                 frameBorder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen
                 className="absolute inset-0 w-full h-full"
               ></iframe>
            </div>
            <div className="mt-10 text-center">
               <p className="text-xl md:text-2xl font-light text-[#E2E8F0] italic max-w-3xl mx-auto leading-relaxed">
                 <span className="text-[#FFB81C] text-3xl font-serif">"</span>
                 The spiritual vibration of Hare Krishna maha mantra acts like a medicine to clean our hearts and destroy our sinful propensities.
                 <span className="text-[#FFB81C] text-3xl font-serif">"</span>
               </p>
            </div>
         </div>
      </section>

      {/* Chant and Make Your Life Sublime */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group">
             <Image 
               src="/activities/yuga-dharma/chanting-meditation.png" 
               alt="Meditation" 
               fill 
               className="object-cover group-hover:scale-105 transition-transform duration-700" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white text-lg font-semibold">Awaken your original relationship with God</p>
             </div>
           </div>
           
           <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
                Chant and make your life sublime
              </h2>
              <div className="w-20 h-1.5 bg-[#E8725C] rounded-full mb-6" />
              <p className="text-gray-800 leading-relaxed text-lg font-medium">
                The Vedas recommend that in the present age the most effective means for achieving self-realization is to always hear about, glorify, and remember the all-good Supreme Lord, who is known by many names.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-orange-50 transition-colors duration-300 shadow-sm border border-transparent hover:border-orange-100">
                   <div className="bg-[#FFB81C] p-2.5 rounded-full text-white shadow-md mt-1"><Heart size={20}/></div>
                   <div>
                      <strong className="text-[#1E3A8A] text-lg block mb-1">Krishna:</strong> 
                      <span className="text-gray-700">"He who is all-attractive"</span>
                   </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-orange-50 transition-colors duration-300 shadow-sm border border-transparent hover:border-orange-100">
                   <div className="bg-[#FFB81C] p-2.5 rounded-full text-white shadow-md mt-1"><Music size={20}/></div>
                   <div>
                      <strong className="text-[#1E3A8A] text-lg block mb-1">Rama:</strong> 
                      <span className="text-gray-700">"He who is the reservoir of all pleasure"</span>
                   </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-orange-50 transition-colors duration-300 shadow-sm border border-transparent hover:border-orange-100">
                   <div className="bg-[#FFB81C] p-2.5 rounded-full text-white shadow-md mt-1"><BookOpen size={20}/></div>
                   <div>
                      <strong className="text-[#1E3A8A] text-lg block mb-1">Hare:</strong> 
                      <span className="text-gray-700">Indicates the Lord’s inconceivable energy</span>
                   </div>
                </li>
              </ul>
           </div>
        </div>
      </section>

      {/* Srila Prabhupada Section */}
      <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
               <div className="flex-1 space-y-8">
                  <h2 className="text-3xl font-bold text-[#1E3A8A]">Srila Prabhupada on Chanting</h2>
                  <div className="relative p-8 bg-[#FFF9F0] rounded-2xl border-l-8 border-[#FFB81C]">
                     <Quote className="absolute top-4 left-4 text-[#FFB81C]/20 w-12 h-12" />
                     <p className="relative z-10 text-lg text-[#3A3A3A] italic leading-relaxed mb-4">
                       "The transcendental vibration established by the chanting of Hare Krishna Hare Krishna Krishna Krishna Hare Hare, Hare Rama Hare Rama Rama Rama Hare Hare is the sublime method of reviving our Krishna consciousness. As living spiritual souls we are all originally Krishna conscious entities, but due to our association with matter from time immemorial, our consciousness is now polluted by the material atmosphere."
                     </p>
                     <p className="font-bold text-[#1E3A8A]">- Srila Prabhupada</p>
                  </div>
               </div>
               <div className="flex-1 relative h-[400px] w-full rounded-full overflow-hidden border-8 border-[#FFF9F0] shadow-2xl">
                  <Image 
                    src="/activities/yuga-dharma/srila-prabhupada-chanting.png" 
                    alt="Srila Prabhupada Chanting" 
                    fill 
                    className="object-cover hover:scale-110 transition-transform duration-700" 
                  />
               </div>
            </div>
         </div>
      </section>

      {/* The Mantra */}
      <section className="py-24 bg-[#FFF9F0] relative overflow-hidden">
         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('/pattern-bg.png')" }}></div>
         <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
             <h2 className="text-3xl font-bold text-[#1E3A8A] mb-12">The Maha Mantra</h2>
             <div className="bg-white p-8 md:p-16 rounded-3xl shadow-xl border border-[#E5E5E5] transform hover:-translate-y-2 transition-transform duration-300">
                <Image 
                   src="/activities/yuga-dharma/mantra-card.png" 
                   alt="Hare Krishna Maha Mantra" 
                   width={600} 
                   height={400} 
                   className="w-full max-w-2xl mx-auto object-contain"
                />
                <p className="mt-8 text-gray-800 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
                  "These sixteen names composed of thirty-two syllables are the only means to counteract the evil effects of Kali-yuga." <br/> <span className="text-base text-[#1E3A8A] font-bold mt-2 block">- Kalisantarana Upanishad</span>
                </p>
             </div>
         </div>
      </section>

      {/* Scriptural References Grid */}
      <section className="py-24 relative overflow-hidden bg-[#0F172A]">
         {/* Decorative Background Elements */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FFB81C]/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#E8725C]/5 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 opacity-[0.03]" style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
            }}></div>
         </div>

         <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-md">Scriptural References</h2>
              <div className="flex justify-center items-center gap-4 opacity-90">
                 <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-[#FFB81C]"></div>
                 <div className="text-[#FFB81C] animate-pulse"><BookOpen size={28} /></div>
                 <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-[#FFB81C]"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { 
                   text: "All the grievous sins are removed for one who worships Lord Hari, the Lord of all lords, and chants the holy name, the Maha-mantra.", 
                   source: "Padma Purana, 3.50.6" 
                 },
                 { 
                   text: "When the sixteen names and thirty-two syllables of the Hare Krishna mantra are loudly vibrated, Krishna dances on one’s tongue.", 
                   source: "Stava-mala-vidyabhusana-bhasya" 
                 },
                 { 
                   text: "One who chants the holy name of the Lord is immediately freed from the reactions of unlimited sins, even if he chants indirectly, jokingly, or even neglectfully.", 
                   source: "Srimad-Bhagavatam, 6.2.14" 
                 },
                 { 
                    text: "The nama sankirtana (public chanting) of Hare Krishna maha-mantra delivers a complete revelation of all of spiritual reality.",
                    source: "Brahmanda Purana 6.59-60"
                 },
                 {
                    text: "My dear King, although Kali-yuga is an ocean of faults, there is still one good quality about this age: Simply by chanting the Hare Krsna maha-mantra, one can become free from material bondage.",
                    source: "Srimad Bhagavatam – 12.3.51"
                 }
               ].map((item, idx) => (
                 <div key={idx} className="group relative bg-[#1E293B]/50 backdrop-blur-sm border border-[#334155] p-8 rounded-xl hover:shadow-[0_0_20px_rgba(255,184,28,0.15)] hover:border-[#FFB81C]/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    {/* Corner Decoration */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#FFB81C]/20 rounded-tl-xl group-hover:border-[#FFB81C]/40 transition-colors"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#FFB81C]/20 rounded-br-xl group-hover:border-[#FFB81C]/40 transition-colors"></div>

                    <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                       <Quote size={80} className="text-[#FFB81C] rotate-180" />
                    </div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                       <Quote className="mb-6 text-[#FFB81C] fill-[#FFB81C]/10" size={32} />
                       <p className="text-lg leading-relaxed mb-6 font-light text-gray-200 group-hover:text-white transition-colors">"{item.text}"</p>
                       
                       <div className="mt-auto pt-4 border-t border-white/10 group-hover:border-[#FFB81C]/30 transition-colors">
                          <p className="text-sm font-bold text-[#FFB81C] uppercase tracking-wider">{item.source}</p>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <FooterSection />
    </div>
  )
}
