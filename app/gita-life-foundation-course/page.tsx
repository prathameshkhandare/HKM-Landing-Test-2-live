"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from "@/components/FooterSection";
import { CheckCircle2, ChevronDown, ChevronUp, MapPin, Calendar, Clock, BookOpen, Sparkles } from "lucide-react";

// --- DATA ---
const chapters = [
  [1,'Seeing the Aim of Life','Discover what you are actually here for — not what society told you'],
  [2,'Spirituality','Understand the real difference between religion and genuine spirituality'],
  [3,'You Are Not the Body','Learn why you feel incomplete no matter what you achieve or own'],
  [4,'Consciousness','Understand the source of your thoughts, feelings, and impulses'],
  [5,'God by Intelligent Design','A scientific and logical basis for the existence of God'],
  [6,'God by Creative Design','How creation itself points unmistakably to a conscious creator'],
  [7,'Sankhya Yoga — The Gross Body','Understand the full physical dimension of existence'],
  [8,'Sankhya Yoga — The Subtle Body','How your mind and intelligence shape your destiny'],
  [9,'The Pleasure Principle','Why chasing pleasure leaves you empty — and what actually works'],
  [10,'Karma','Why your efforts sometimes don\'t get the results you expect'],
  [11,'The Laws of Karma','How to act decisively without being paralysed by consequences'],
  [12,'Saints and Swindlers','How to recognise genuine wisdom and avoid spiritual fraud'],
  [13,'Three Conceptions of Divine','Three ways of understanding God — and which one is complete'],
  [14,'The Yoga Ladder','A step-by-step path from confusion to clarity to liberation'],
  [15,'The Three Modes of Material Nature','Why people think differently — and how to rise above it'],
  [16,'The Kingdom of God','What awaits beyond this life — described with precision'],
  [17,'Yuga Dharma','The right practice for the specific age we are living in'],
  [18,'Yuga Avatara','The divine personality who appeared specifically to save this age'],
];

const faqs = [
  ["Do I need any prior knowledge of the Bhagavad-gita?", "None at all. The course is specifically designed as a starting point. Chapter 1 is called 'Seeing the Aim of Life' for a reason. We welcome complete beginners and curious sceptics equally."],
  ["What if I miss a session?", "If you miss a class, you can catch up with the teacher personally or through session notes in the WhatsApp group. Each session is also designed to be self-contained."],
  ["Is this only for Hindus or ISKCON devotees?", "Not at all. The Bhagavad-gita is universal wisdom. The course is open to men of any background who are genuinely seeking clarity and direction in life."],
  ["Is the course online or in-person?", "In-person, at three venues in South Chennai: Karapakkam, Sholinganallur, and Thoraipakkam. Every Saturday and Sunday, 6:30–7:30 PM."],
  ["What is included in the Rs. 500 fee?", "Everything: the 8-week course (16 sessions), a hardcover Bhagavad-gita As It Is by Srila Prabhupada (Rs. 350 market value), and a Mantra Meditation Kit (Rs. 50 market value). The kit alone is worth Rs. 400."],
  ["Can I get a refund if I change my mind?", "If you attend the first session and feel the course is not right for you, we will refund your fee in full. We want committed students, not reluctant ones."]
];

export default function GitaLifeFoundationCourse() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openCurriculum, setOpenCurriculum] = useState<number | null>(null);
  const [showAllCurriculum, setShowAllCurriculum] = useState(false);
  const [regStep, setRegStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<'upi'|'neft'>('upi');
  const [copiedUPI, setCopiedUPI] = useState(false);

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);
  const toggleCurriculum = (index: number) => setOpenCurriculum(openCurriculum === index ? null : index);

  const copyUPI = () => {
    navigator.clipboard.writeText('hkmchennai@upi').catch(()=>{});
    setCopiedUPI(true);
    setTimeout(() => setCopiedUPI(false), 2000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen">
      
      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold mb-6 shadow-sm border border-amber-200">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Registrations Open for Men (18-28)
            </div>
            <h1 className="text-4xl lg:text-6xl font-heading font-extrabold text-slate-900 leading-tight mb-6">
              The <span className="text-amber-600">Gita Life</span><br/> Foundation Course
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              An 8-week journey to discover clarity, purpose, and inner peace through the timeless wisdom of the Bhagavad-gita.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-slate-700 border border-slate-100">
                <MapPin className="w-4 h-4 text-amber-500" /> South Chennai
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-slate-700 border border-slate-100">
                <Calendar className="w-4 h-4 text-amber-500" /> 8 Weeks
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-slate-700 border border-slate-100">
                <Clock className="w-4 h-4 text-amber-500" /> Sat & Sun Evenings
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#register" className="inline-flex justify-center items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full shadow-lg shadow-amber-500/30 transition-all hover:scale-105">
                Register Now — ₹500
              </a>
              <a href="#curriculum" className="inline-flex justify-center items-center px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-full shadow-sm border border-slate-200 transition-colors">
                View Curriculum
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img src="/assets/gita-life-download.png" alt="Gita Life Session" className="w-full h-full object-cover aspect-video lg:aspect-square" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-medium text-lg">"A manual for life, not just a religious text."</p>
                <div className="flex items-center mt-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-amber-500 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white">S</div>
                    <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white">R</div>
                    <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white">A</div>
                  </div>
                  <span className="ml-4 text-sm text-white/80">Join 500+ past participants</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── VALUE STACK ── */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2 block">What You Get</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-12">More than just lectures. A complete toolkit.</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-left relative z-10">
            {/* Card 1 */}
            <div className="relative group bg-white hover:bg-amber-50/50 rounded-xl p-10 border border-amber-100 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-[#2D0A0A] mb-4 group-hover:text-amber-700 transition-colors">16 Interactive Sessions</h3>
                <p className="text-slate-600 leading-relaxed text-lg">8 weekends of profound discussions covering the 18 chapters of the Gita. Ask questions, debate, and clarify doubts.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group bg-white hover:bg-amber-50/50 rounded-xl p-10 border border-amber-100 shadow-lg hover:shadow-xl transition-all duration-500 mt-0 md:mt-8">
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-[#2D0A0A] mb-4 group-hover:text-amber-700 transition-colors">Bhagavad-gita As It Is</h3>
                <p className="text-slate-600 leading-relaxed text-lg">Receive your own hardcover copy of the most widely read edition of the Gita (₹350 value) to study at home.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative group bg-white hover:bg-amber-50/50 rounded-xl p-10 border border-amber-100 shadow-lg hover:shadow-xl transition-all duration-500 mt-0 md:mt-16">
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-[#2D0A0A] mb-4 group-hover:text-amber-700 transition-colors">Meditation Kit</h3>
                <p className="text-slate-600 leading-relaxed text-lg">A complete mantra meditation kit including japa beads and a bead bag (₹50 value) to start a daily practice of mindfulness.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── CURRICULUM ── */}
      <motion.section id="curriculum" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Course Curriculum</h2>
            <p className="text-slate-600 text-lg">A structured, step-by-step unravelling of life's deepest mysteries.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {chapters.slice(0, showAllCurriculum ? 18 : 9).map(([num, title, benefit], idx) => (
              <div key={idx} className="border-b border-slate-100 last:border-0">
                <button 
                  onClick={() => toggleCurriculum(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm shrink-0">
                      {num}
                    </span>
                    <span className="font-semibold text-slate-800 text-lg">{title}</span>
                  </div>
                  <motion.div animate={{ rotate: openCurriculum === idx ? 180 : 0 }}>
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openCurriculum === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 pl-[72px] text-slate-600">
                        {benefit}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button 
              onClick={() => setShowAllCurriculum(!showAllCurriculum)}
              className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
            >
              {showAllCurriculum ? 'Show less' : 'View all 18 chapters'}
              {showAllCurriculum ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.section>

      {/* ── FAQ ── */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(([q, a], idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-slate-800 hover:text-amber-600 transition-colors"
                >
                  {q}
                  <motion.div animate={{ rotate: openFaq === idx ? 180 : 0 }}>
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                        {a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── REGISTRATION ── */}
      <motion.section id="register" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 drop-shadow-sm">Secure Your Spot</h2>
              <p className="text-slate-300 text-lg">Total Fee: ₹500 (Includes Course + Hardcover Gita + Japa Kit)</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-10">
              <div className="flex justify-between text-sm font-medium text-slate-400 mb-2">
                <span>{regStep <= 3 ? `Step ${regStep} of 3` : 'Done'}</span>
                <span className="text-amber-500">
                  {regStep === 1 ? 'Your details' : regStep === 2 ? 'More details' : regStep === 3 ? 'Payment' : 'Complete!'}
                </span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-amber-500"
                  initial={{ width: '33%' }} 
                  animate={{ width: regStep === 1 ? '33%' : regStep === 2 ? '66%' : '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Forms */}
            <div className="relative">
              {/* Step 1 */}
              <div style={{ display: regStep === 1 ? 'block' : 'none' }}>
                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                    <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 outline-none" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">WhatsApp Number</label>
                    <input type="tel" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 outline-none" placeholder="10-digit mobile number" />
                  </div>
                </div>
                <button onClick={() => setRegStep(2)} className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 rounded-xl transition-colors">
                  Continue
                </button>
              </div>

              {/* Step 2 */}
              <div style={{ display: regStep === 2 ? 'block' : 'none' }}>
                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Age</label>
                    <input type="number" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 outline-none" placeholder="e.g. 22" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Select Venue</label>
                    <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 outline-none">
                      <option>Karapakkam (Sat 6:30 PM)</option>
                      <option>Sholinganallur (Sun 6:30 PM)</option>
                      <option>Thoraipakkam (Sun 6:30 PM)</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setRegStep(1)} className="w-1/3 bg-slate-700 hover:bg-slate-600 text-white font-medium py-4 rounded-xl transition-colors">
                    Back
                  </button>
                  <button onClick={() => setRegStep(3)} className="w-2/3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 rounded-xl transition-colors">
                    Proceed to Payment
                  </button>
                </div>
              </div>

              {/* Step 3 */}
              <div style={{ display: regStep === 3 ? 'block' : 'none' }}>
                <div className="bg-white rounded-2xl p-6 text-slate-800 shadow-xl">
                  {/* Fee Breakdown */}
                  <div className="bg-[#FFF9F0] rounded-xl p-5 mb-6 text-sm font-medium">
                    <div className="flex justify-between mb-3 text-slate-600">
                      <span>Course fee (8 weeks)</span>
                      <span className="text-slate-900 font-bold">Rs. 500</span>
                    </div>
                    <div className="flex justify-between mb-3 text-slate-500">
                      <span>Bhagavad-gita As It Is</span>
                      <span className="text-green-600 font-bold">FREE (Rs. 350)</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Mantra Meditation Kit</span>
                      <span className="text-green-600 font-bold">FREE (Rs. 50)</span>
                    </div>
                  </div>

                  <p className="text-center text-slate-400 text-sm mb-4">Select payment method</p>

                  {/* Payment Method Toggles */}
                  <div className="flex gap-4 mb-6">
                    <button onClick={() => setPaymentMethod('upi')} className={`flex-1 py-4 rounded-xl border-2 font-bold transition-colors flex flex-col items-center justify-center gap-2 ${paymentMethod === 'upi' ? 'bg-white border-amber-500 text-slate-800 shadow-md' : 'bg-white border-slate-100 text-slate-400'}`}>
                      <span className="text-2xl">📱</span>
                      GPay / UPI
                    </button>
                    <button onClick={() => setPaymentMethod('neft')} className={`flex-1 py-4 rounded-xl border-2 font-bold transition-colors flex flex-col items-center justify-center gap-2 ${paymentMethod === 'neft' ? 'bg-white border-amber-500 text-slate-800 shadow-md' : 'bg-white border-slate-100 text-slate-400'}`}>
                      <span className="text-2xl">🏦</span>
                      NEFT / IMPS
                    </button>
                  </div>
                  
                  {/* Payment Details */}
                  {paymentMethod === 'upi' ? (
                    <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-200">
                      <div className="flex justify-between items-center bg-white rounded-lg p-3 mb-3 border border-slate-200 shadow-sm">
                        <span className="font-bold text-slate-900 text-lg">hkmchennai@upi</span>
                        <button onClick={copyUPI} className="text-amber-600 font-bold text-sm hover:text-amber-700 transition-colors">
                          {copiedUPI ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                      <p className="text-xs text-slate-400 text-center">Amount: Rs. 500 &middot; Name: Hare Krishna Movement Chennai</p>
                    </div>
                  ) : (
                    <div className="bg-slate-50 rounded-xl p-5 mb-6 border border-slate-200 text-sm space-y-2 text-slate-600">
                      <p><span className="text-slate-400 mr-2">Name:</span> <strong className="text-slate-800">Hare Krishna Movement</strong></p>
                      <p><span className="text-slate-400 mr-2">Bank:</span> <strong className="text-slate-800">HDFC Bank</strong></p>
                      <p><span className="text-slate-400 mr-2">A/C:</span> <strong className="text-slate-800">50100412345678</strong></p>
                      <p><span className="text-slate-400 mr-2">IFSC:</span> <strong className="text-slate-800">HDFC0001234</strong></p>
                    </div>
                  )}

                  {/* WhatsApp Instruction */}
                  <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-xl p-4 mb-8 flex items-start gap-3">
                    <span className="text-green-500 mt-1">💬</span>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      After payment, <strong className="text-slate-800">WhatsApp your screenshot</strong> to <a href="https://wa.me/919790891979" target="_blank" rel="noreferrer" className="text-amber-600 font-bold underline">97908 91979</a>. Your seat is confirmed within 2 hours.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button onClick={() => setRegStep(2)} className="w-1/3 bg-white border-2 border-slate-100 hover:bg-slate-50 text-slate-500 font-bold py-4 rounded-xl transition-colors">
                      Back
                    </button>
                    <button onClick={() => setRegStep(4)} className="w-2/3 bg-[#EAB308] hover:bg-[#CA8A04] text-slate-900 font-extrabold py-4 rounded-xl transition-colors shadow-lg shadow-amber-500/20">
                      ✓ I've Paid — Confirm Seat
                    </button>
                  </div>
                  
                  <div className="text-center mt-6">
                     <p className="text-xs text-slate-300 font-medium flex items-center justify-center gap-1">
                        <span className="opacity-50">🔒</span> ISKCON Thiruvanmiyur, Chennai
                     </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div style={{ display: regStep === 4 ? 'block' : 'none' }} className="text-center py-8">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Registration Complete!</h3>
                <p className="text-slate-400 mb-8">We have received your details. Our team will verify the payment and add you to the WhatsApp group shortly.</p>
                <button onClick={() => setRegStep(1)} className="text-amber-500 hover:underline font-medium">
                  Register another person
                </button>
              </div>

            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
