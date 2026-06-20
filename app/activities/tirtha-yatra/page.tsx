"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import { Phone, Mail, Sparkles, MapPin, CheckCircle2, X, UserPlus, Trash2, ArrowRight, ArrowLeft, Upload, CheckCircle } from "lucide-react";

interface Participant {
    id: string;
    fullName: string;
    age: string;
    gender: string;
    phone?: string;
    email?: string;
}

interface YatraFormData {
    participants: Participant[];
    travelOption: string;
    accommodationType: string;
    privateRooms: string;
    customAmount: string;
    paymentScreenshot: File | null;
}

export default function TirthaYatraPage() {
    const glimpsesImages = [
        "/assets/char_dham.png",
        "/assets/dwaraka_temple_scenic.png",
        "/assets/jagannath_puri_temple_scenic.png",
        "/assets/vrindavan_temple_scenic.png",
        "/assets/char_dham.png", // Duplicate to simulate more items
        "/assets/dwaraka_temple_scenic.png",
    ];

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [activeGlimpse, setActiveGlimpse] = useState(glimpsesImages[0]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isCustomAmount, setIsCustomAmount] = useState(false);
    const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'done' | 'error'>('idle');
    const [uploadProgress, setUploadProgress] = useState(0);
    const [screenshotUrl, setScreenshotUrl] = useState<string | null>(null);
    const [uploadErrorMsg, setUploadErrorMsg] = useState('');

    // --- 4-Step Form State ---
    const [currentStep, setCurrentStep] = useState(1);
    const [validationError, setValidationError] = useState<string>('');
    const [validationField, setValidationField] = useState<string>(''); // e.g. "p0-fullName"
    const [formData, setFormData] = useState<YatraFormData>({
        participants: [{ id: '1', fullName: '', age: '', gender: '' }],
        travelOption: '3ac', // default
        accommodationType: 'shared', // default
        privateRooms: '1',
        customAmount: '',
        paymentScreenshot: null,
    });

    const addParticipant = () => {
        setFormData(prev => ({
            ...prev,
            participants: [...prev.participants, { id: Math.random().toString(), fullName: '', age: '', gender: '' }]
        }));
    };

    const removeParticipant = (idToRemove: string) => {
        setFormData(prev => ({
            ...prev,
            participants: prev.participants.filter(p => p.id !== idToRemove)
        }));
    };

    const updateParticipant = (id: string, field: keyof Participant, value: string) => {
        setFormData(prev => ({
            ...prev,
            participants: prev.participants.map(p => p.id === id ? { ...p, [field]: value } : p)
        }));
    };

    // Calculate Dynamic Pricing
    const baseCostPerPerson = 12000;
    const calculateTotalCost = () => {
        const participantCount = formData.participants.length;
        let total = baseCostPerPerson * participantCount;

        // Travel Costs
        if (formData.travelOption === 'self') total -= (3200 * participantCount);
        if (formData.travelOption === '2ac') total += (2000 * participantCount);
        if (formData.travelOption === 'onward') total -= (1600 * participantCount);

        // Accommodation Costs
        if (formData.accommodationType === 'shared') {
            total += (4000 * participantCount);
        } else if (formData.accommodationType === 'private') {
            total += (8000 * parseInt(formData.privateRooms));
        }

        return total;
    };

    const totalCost = calculateTotalCost();
    const payToday = Math.round(totalCost * 0.4);

    // Form Validation for Step 1
    const validateStep1 = () => {
        setValidationError(''); // Clear previous errors
        setValidationField(''); // Clear highlighted field
        for (let i = 0; i < formData.participants.length; i++) {
            const p = formData.participants[i];
            const participantLabel = i === 0 ? "Primary Contact" : `Participant ${i + 1}`;

            if (!p.fullName.trim()) { setValidationError(`Please enter the Full Name for ${participantLabel}.`); setValidationField(`p${i}-fullName`); return false; }
            if (!p.age) { setValidationError(`Please select the Age for ${participantLabel}.`); setValidationField(`p${i}-age`); return false; }
            if (!p.gender) { setValidationError(`Please select the Gender for ${participantLabel}.`); setValidationField(`p${i}-gender`); return false; }

            // Primary contact must have phone and email and be >= 18
            if (i === 0) {
                if (parseInt(p.age) < 18) { setValidationError(`Primary Contact must be at least 18 years old.`); setValidationField(`p${i}-age`); return false; }
                if (!p.phone || p.phone.length < 10) { setValidationError(`Please enter a valid Phone Number for the Primary Contact.`); setValidationField(`p${i}-phone`); return false; }
                if (!p.email || !p.email.includes('@')) { setValidationError(`Please enter a valid Email ID for the Primary Contact.`); setValidationField(`p${i}-email`); return false; }
            }
        }
        return true;
    };

    const handleNextStep = (e?: React.FormEvent) => {
        if (e) e.preventDefault();

        if (currentStep === 1 && !validateStep1()) {
            return; // Stop here if validation fails. The error message is now in state.
        }

        setValidationError(''); // Clear on successful next step
        setValidationField('');
        if (currentStep < 4) setCurrentStep(prev => prev + 1);
    };

    const handlePrevStep = () => {
        if (currentStep > 1) setCurrentStep(prev => prev - 1);
    };

    const handleScreenshotChange = (file: File | null) => {
        if (!file) return;
        if (file.size > 5 * 1024 * 1024) {
            setUploadState('error');
            setUploadErrorMsg('File is too large. Maximum size is 5 MB.');
            return;
        }
        setFormData(p => ({ ...p, paymentScreenshot: file }));
        setUploadState('uploading');
        setUploadProgress(0);
        setScreenshotUrl(null);
        setUploadErrorMsg('');

        // Upload directly to Cloudinary (same account as ICVK)
        const fd = new FormData();
        fd.append('file', file);
        fd.append('upload_preset', 'icvk_unsigned');
        fd.append('folder', 'hkm/payment-screenshots');

        const xhr = new XMLHttpRequest();
        xhr.upload.onprogress = (e) => {
            if (e.lengthComputable) setUploadProgress(Math.round((e.loaded / e.total) * 100));
        };
        xhr.onload = () => {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                setScreenshotUrl(data.secure_url);
                setUploadProgress(100);
                setUploadState('done');
            } else {
                setUploadState('error');
                setUploadErrorMsg('Upload failed. Please try again.');
            }
        };
        xhr.onerror = () => {
            setUploadState('error');
            setUploadErrorMsg('Network error. Please try again.');
        };
        xhr.open('POST', 'https://api.cloudinary.com/v1_1/dt7lkefnh/image/upload');
        xhr.send(fd);
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const fd = new FormData();
            const participants = formData.participants.map(p => ({
                fullName: p.fullName,
                age: p.age,
                gender: p.gender,
                ...(p.phone ? { phone: p.phone } : {}),
                ...(p.email ? { email: p.email } : {}),
            }));
            fd.append('participants', JSON.stringify(participants));
            fd.append('travelOption', formData.travelOption);
            fd.append('accommodationType', formData.accommodationType);
            fd.append('privateRooms', formData.privateRooms);
            fd.append('customAmount', isCustomAmount ? 'true' : 'false');
            fd.append('totalCost', totalCost.toString());
            fd.append('advancePaid', payToday.toString());
            fd.append('screenshotUrl', screenshotUrl || '');
            const res = await fetch('/api/tirtha-yatra', { method: 'POST', body: fd });
            if (!res.ok) throw new Error('Submission failed');
            alert("Thank you! Your registration has been submitted. We'll contact you soon.");
            setIsFormOpen(false);
            setCurrentStep(1);
            setIsCustomAmount(false);
            setUploadState('idle');
            setUploadProgress(0);
            setScreenshotUrl(null);
            setFormData({
                participants: [{ id: '1', fullName: '', age: '', gender: '' }],
                travelOption: '3ac',
                accommodationType: 'shared',
                privateRooms: '1',
                customAmount: '',
                paymentScreenshot: null,
            });
        } catch {
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Lock Background Scroll when Modal is Open
    React.useEffect(() => {
        if (isFormOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isFormOpen]);

    return (
        <main className="min-h-screen bg-[#FFF9F0] overflow-x-hidden">
            <Navbar />

            {/* Yuga Dharma Style Header (Hero Section) */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-[#2D0A0A]">
                {/* Background - Saffron/Gold Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#701a1a] via-[#ea580c] to-[#b45309] opacity-90"></div>

                {/* Texture Overlays */}
                <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow"></div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 49px, #FFB81C 50px)' }}></div>

                {/* Central Divine Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFB81C] rounded-full blur-[120px] opacity-20 animate-pulse"></div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Yatramritam Logo */}
                        <div className="flex justify-center mb-4 relative">
                            <div className="absolute inset-0 bg-[#FFB81C] blur-3xl opacity-30 rounded-full h-32 w-32 left-1/2 -translate-x-1/2"></div>
                            <img src="/assets/yatramritam_logo.png" alt="Yatramritam Logo" className="w-32 md:w-48 relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]" />
                        </div>

                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
                            Yatramritam
                        </h1>

                        {/* Ornamental Divider */}
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="h-[2px] w-16 bg-gradient-to-l from-[#FFB81C] to-transparent"></div>
                            <div className="w-3 h-3 rotate-45 border-2 border-[#FFB81C]"></div>
                            <div className="h-[2px] w-16 bg-gradient-to-r from-[#FFB81C] to-transparent"></div>
                        </div>

                        <p className="text-xl md:text-3xl text-[#ffe8cc] font-light leading-relaxed max-w-4xl mx-auto italic">
                            "Rediscover Pilgrimage"
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Split Layout Section */}
            <section className="py-16 md:py-24 container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">

                    {/* LEFT COLUMN: Poster Visual (Enhanced Background) */}
                    <div className="w-full lg:w-[45%] flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="rounded-[2.5rem] border-[6px] border-double border-[#FFB81C] p-6 md:p-8 shadow-[0_0_50px_rgba(45,10,10,0.6)] relative overflow-hidden group"
                            style={{
                                background: 'radial-gradient(circle at center, #540F0F 0%, #2D0A0A 70%, #110202 100%)',
                                boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8)'
                            }}
                        >
                            {/* Divine Central Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(255,184,28,0.15)_0%,transparent_70%)] pointer-events-none"></div>

                            {/* Rich Background Effects - Layered & boosted opacity */}
                            <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-20 bg-[length:600px] animate-spin-slow origin-center" style={{ animationDuration: '120s' }}></div>
                            <div className="absolute inset-0 bg-[url('/assets/temple-pattern.PNG')] opacity-15 bg-[length:200px] mix-blend-overlay"></div>

                            {/* Inner Decorative Border */}
                            <div className="absolute inset-4 border border-[#FFB81C]/30 rounded-[2rem] pointer-events-none"></div>

                            {/* Gold Dust Particles & Vignette */}
                            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#FFB81C 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

                            {/* Ornate Corner Frames - Flourish Style */}
                            <div className="absolute top-5 left-5 w-auto h-auto">
                                <Sparkles className="text-[#FFB81C] w-8 h-8 opacity-60" />
                            </div>
                            <div className="absolute top-5 right-5 w-auto h-auto">
                                <Sparkles className="text-[#FFB81C] w-8 h-8 opacity-60" />
                            </div>

                            <div className="absolute top-4 left-4 w-24 h-24 border-t-2 border-l-2 border-[#FFB81C] rounded-tl-[1.5rem] opacity-60"></div>
                            <div className="absolute top-4 right-4 w-24 h-24 border-t-2 border-r-2 border-[#FFB81C] rounded-tr-[1.5rem] opacity-60"></div>
                            <div className="absolute bottom-4 left-4 w-24 h-24 border-b-2 border-l-2 border-[#FFB81C] rounded-bl-[1.5rem] opacity-60"></div>
                            <div className="absolute bottom-4 right-4 w-24 h-24 border-b-2 border-r-2 border-[#FFB81C] rounded-br-[1.5rem] opacity-60"></div>

                            {/* Content Wrapper */}
                            <div className="relative z-10 flex flex-col items-center text-center">
                                {/* Logo with Glow */}
                                <div className="relative mb-8">
                                    <div className="absolute inset-0 bg-[#FFB81C] blur-2xl opacity-20 rounded-full"></div>
                                    <img src="/assets/yatramritam_logo.png" alt="Yatramritam" className="w-[220px] relative z-10 drop-shadow-2xl" />
                                </div>

                                <div className="grid grid-cols-2 gap-4 w-full mb-8">
                                    {/* Destination Images with Enhanced Frames */}
                                    <div className="aspect-[4/5] relative rounded-xl overflow-hidden border-2 border-[#FFB81C]/50 shadow-lg group/img">
                                        <img src="/assets/char_dham.png" alt="Char Dham" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                                        <div className="absolute bottom-0 w-full p-2 text-center">
                                            <span className="text-white text-xs font-bold uppercase tracking-wider block border-t border-[#FFB81C]/50 pt-1">Char Dham</span>
                                        </div>
                                    </div>
                                    <div className="aspect-[4/5] relative rounded-xl overflow-hidden border-2 border-[#FFB81C]/50 shadow-lg group/img">
                                        <img src="/assets/dwaraka_temple_scenic.png" alt="Dwaraka" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                                        <div className="absolute bottom-0 w-full p-2 text-center">
                                            <span className="text-white text-xs font-bold uppercase tracking-wider block border-t border-[#FFB81C]/50 pt-1">Dwaraka</span>
                                        </div>
                                    </div>
                                    <div className="aspect-[4/5] relative rounded-xl overflow-hidden border-2 border-[#FFB81C]/50 shadow-lg group/img">
                                        <img src="/assets/vrindavan_temple_scenic.png" alt="Vrindavan" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                                        <div className="absolute bottom-0 w-full p-2 text-center">
                                            <span className="text-white text-xs font-bold uppercase tracking-wider block border-t border-[#FFB81C]/50 pt-1">Vrindavan</span>
                                        </div>
                                    </div>
                                    <div className="aspect-[4/5] relative rounded-xl overflow-hidden border-2 border-[#FFB81C]/50 shadow-lg group/img">
                                        <img src="/assets/jagannath_puri_temple_scenic.png" alt="Puri" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                                        <div className="absolute bottom-0 w-full p-2 text-center">
                                            <span className="text-white text-xs font-bold uppercase tracking-wider block border-t border-[#FFB81C]/50 pt-1">Puri</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>

                        {/* CTA Box (Moved to Left Side) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-gradient-to-b from-[#f8fafc] to-[#fef3c7] rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] text-center border border-[#FFB81C] mt-6 lg:mt-12 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB81C] rounded-full blur-[80px] opacity-10"></div>

                            <div className="flex flex-col items-center gap-6 relative z-10 w-full">
                                <div className="text-center mb-1">
                                    <h4 className="text-[#540F0F] font-serif font-bold text-xl mb-1">For more details</h4>
                                    <p className="text-[#78350f] text-sm">Please contact us on</p>
                                </div>

                                <div className="flex flex-col gap-3 w-full items-center">
                                    <a href="tel:9940242656" className="text-[#78350f] hover:text-[#ea580c] transition-colors flex items-center justify-center gap-3 font-bold tracking-wide text-sm">
                                        <Phone size={16} className="text-[#ea580c] font-light" /> 99402 42656
                                    </a>
                                    <a href="mailto:yatra@hkmchennai.org" className="text-[#78350f] hover:text-[#ea580c] transition-colors flex items-center justify-center gap-3 font-bold tracking-wide text-sm">
                                        <Mail size={16} className="text-[#ea580c] font-light" /> yatra@hkmchennai.org
                                    </a>
                                </div>

                                <button
                                    onClick={() => setIsFormOpen(true)}
                                    className="bg-gradient-to-b from-[#b45309] to-[#92400e] hover:from-[#92400e] hover:to-[#78350f] text-white w-full py-4 rounded-xl font-bold text-[14px] uppercase tracking-widest shadow-[0_4px_14px_0_rgba(180,83,9,0.39)] transition-all hover:-translate-y-1 active:scale-95 cursor-pointer mt-2"
                                >
                                    Join Us For Yatras
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Information Content */}
                    <div className="w-full lg:w-[55%] pt-4 md:pt-0">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col justify-between h-full"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <Sparkles className="text-[#ea580c] w-6 h-6" />
                                    <span className="text-[#ea580c] font-bold uppercase tracking-widest text-sm">A Journey to the Holy Abodes</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2D0A0A] mb-8 leading-tight">
                                    The Spiritual <span className="text-[#ea580c]">Journey</span>
                                </h1>

                                <div className="prose prose-lg text-gray-700 mb-10">
                                    <p className="mb-6 leading-relaxed">
                                        Yatramritam takes devotees on transformative pilgrimages to some of India’s most sacred destinations — <span className="font-bold text-[#2D0A0A]">Dwaraka, Jagannath Puri, Mathura-Vrindavan, Mayapur, Char Dham, and more.</span>
                                    </p>
                                    <p className="mb-6 leading-relaxed">
                                        Beyond sightseeing, each journey is a deeply immersive spiritual experience: participants learn about the significance of each holy place, hear sacred kathas, participate in kirtans, and relish prasadam — all in the uplifting company of fellow devotees.
                                    </p>
                                    <p className="text-[#9A3412] font-semibold not-italic leading-relaxed border-l-4 border-[#ea580c] pl-6 py-4 bg-[#FFB81C]/10 rounded-r-xl shadow-sm">
                                        Travel, accommodation, and prasadam are thoughtfully arranged for a comfortable and meaningful yatra.
                                    </p>
                                </div>

                                {/* Why Embark Section */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-serif font-bold text-[#2D0A0A] mb-6">Why Embark on a Tirtha Yatra?</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            "Spiritual Enlightenment",
                                            "Purification of the Heart",
                                            "Connection with Divine Roots",
                                            "Community & Satsang"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-[#FFB81C]/20 hover:border-[#FFB81C] transition-colors">
                                                <CheckCircle2 className="text-[#28a745] w-5 h-5" />
                                                <span className="font-semibold text-[#2D0A0A]">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div> {/* End top wrap for right column items */}

                            {/* Yatra Destinations Section (Moved Here) */}
                            <div className="mt-8">
                                <h3 className="text-xl md:text-2xl font-serif font-bold text-[#2D0A0A] mb-6 flex items-center gap-2">
                                    <Sparkles className="text-[#ea580c]" size={20} /> Upcoming Yatra Destinations
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Sri Lanka Ramayana Yatra Card */}
                                    <div className="bg-white border border-[#FFB81C]/30 rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                                        <div className="aspect-[4/3] relative overflow-hidden">
                                            <img src="/assets/ramayana-yatra/Sigiriya-image---use-for-here-section.png" alt="Sri Lanka Ramayana Yatra" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#2D0A0A] via-transparent to-transparent opacity-60"></div>
                                            <div className="absolute top-3 right-3 bg-gradient-to-r from-[#ea580c] to-[#b45309] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                                                New
                                            </div>
                                        </div>
                                        <div className="p-5 text-center flex flex-col justify-between h-[180px]">
                                            <div>
                                                <h4 className="text-lg font-bold font-serif text-[#2D0A0A] mb-2 group-hover:text-[#b45309] transition-colors">Sri Lanka Ramayana Yatra</h4>
                                                <p className="text-gray-600 text-xs mb-4 line-clamp-2">Embark on a sacred 7-day journey through the mythic Ramayana trail in Sri Lanka.</p>
                                            </div>
                                            <a href="/sri-lanka-ramayana-yatra" className="inline-flex items-center justify-center gap-2 bg-[#FFF9F0] border border-[#FFB81C] text-[#b45309] px-5 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-[#FFB81C] hover:text-white transition-all w-full mt-auto">
                                                View Details <ArrowRight size={14} />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Kailash Mansarovar Yatra Card */}
                                    <div className="bg-white border border-[#FFB81C]/30 rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                                        <div className="aspect-[4/3] relative overflow-hidden">
                                            <img src="/assets/kailash-yatra/kailash-manasarovar-hero.jpg" alt="Kailash Mansarovar Yatra" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#2D0A0A] via-transparent to-transparent opacity-60"></div>
                                            <div className="absolute top-3 right-3 bg-gradient-to-r from-[#ea580c] to-[#b45309] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                                                2026
                                            </div>
                                        </div>
                                        <div className="p-5 text-center flex flex-col justify-between h-[180px]">
                                            <div>
                                                <h4 className="text-lg font-bold font-serif text-[#2D0A0A] mb-2 group-hover:text-[#b45309] transition-colors">Kailash Mansarovar Yatra</h4>
                                                <p className="text-gray-600 text-xs mb-4 line-clamp-2">A 13-day sacred journey to the divine abode of Lord Śiva in the Himalayas.</p>
                                            </div>
                                            <a href="/kailash-manasarovar-yatra" className="inline-flex items-center justify-center gap-2 bg-[#FFF9F0] border border-[#FFB81C] text-[#b45309] px-5 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-[#FFB81C] hover:text-white transition-all w-full mt-auto">
                                                View Details <ArrowRight size={14} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Glimpses of Yatras Section (Moved Down) */}
            <section className="py-16 bg-[#FFF9F0] relative overflow-hidden">
                {/* Background Textures */}
                <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-5 bg-[length:400px] animate-spin-slow mix-blend-multiply"></div>
                <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent opacity-50"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2D0A0A] mb-4">Glimpses of Past Yatras</h2>
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-[2px] w-16 bg-gradient-to-l from-[#FFB81C] to-transparent"></div>
                            <Sparkles className="text-[#ea580c] w-6 h-6" />
                            <div className="h-[2px] w-16 bg-gradient-to-r from-[#FFB81C] to-transparent"></div>
                        </div>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                        <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-xl mb-8 relative border-4 border-white ring-1 ring-[#FFB81C]/20 bg-white">
                            <motion.img
                                key={activeGlimpse}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                src={activeGlimpse}
                                alt="Yatra Highlight"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#2D0A0A]/40 to-transparent pointer-events-none"></div>
                        </div>

                        <div className="relative w-full overflow-hidden rounded-2xl group/slider before:absolute before:inset-y-0 before:left-0 before:w-16 before:bg-gradient-to-r before:from-[#FFF9F0] before:to-transparent before:z-10 after:absolute after:inset-y-0 after:right-0 after:w-16 after:bg-gradient-to-l after:from-[#FFF9F0] after:to-transparent after:z-10 bg-white/50 p-4 border border-[#FFB81C]/20 shadow-inner">
                            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-2 px-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                {glimpsesImages.map((imgSrc, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setActiveGlimpse(imgSrc)}
                                        className={`w-32 h-20 md:w-48 md:h-28 rounded-xl overflow-hidden shadow-md snap-center flex-shrink-0 relative group cursor-pointer transition-all box-border ${activeGlimpse === imgSrc ? 'border-[3px] border-[#ea580c] scale-105 z-10' : 'border border-[#FFB81C]/30 hover:border-[#ea580c]/60'}`}
                                    >
                                        <img src={imgSrc} alt={`Yatra Glimpse Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                                        {activeGlimpse !== imgSrc && <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Registration Modal Form */}
            <AnimatePresence>
                {isFormOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsFormOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-gradient-to-br from-[#ffffff] to-[#FFF5E1] w-full max-w-xl max-h-[90vh] overflow-y-auto scrollbar-hide rounded-[2rem] shadow-[0_10px_50px_rgba(0,0,0,0.2)] relative border-2 border-[#FFB81C]/40"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Texture Overlays */}
                            <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-5 bg-[length:400px] animate-spin-slow mix-blend-multiply"></div>
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#b45309 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                            {/* Inner Decorative Glow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-b from-[#ea580c]/10 to-transparent pointer-events-none"></div>

                            {/* Premium Header */}
                            <div className="pt-10 pb-4 px-8 text-center relative z-10 border-b border-[#FFB81C]/30 text-[#2D0A0A]">
                                <button
                                    onClick={() => setIsFormOpen(false)}
                                    className="absolute top-5 right-5 p-2 bg-white/50 hover:bg-white/80 rounded-full backdrop-blur-md border border-[#FFB81C]/40 transition-all hover:rotate-90 text-[#b45309]"
                                >
                                    <X size={18} />
                                </button>

                                <div className="flex justify-center items-center gap-3 mb-2">
                                    <Sparkles className="text-[#ea580c] w-5 h-5" />
                                    <h3 className="text-black text-2xl md:text-3xl font-serif font-black tracking-widest drop-shadow-sm uppercase">
                                        Yatra Registration
                                    </h3>
                                    <Sparkles className="text-[#ea580c] w-5 h-5" />
                                </div>

                                {/* Ornamental Divider */}
                                <div className="flex items-center justify-center gap-4 my-3 text-center w-full">
                                    <div className="h-[1px] w-12 bg-gradient-to-l from-[#b45309]/50 to-transparent"></div>
                                    <div className="w-2 h-2 rotate-45 border border-[#ea580c]"></div>
                                    <div className="h-[1px] w-12 bg-gradient-to-r from-[#b45309]/50 to-transparent"></div>
                                </div>
                                <p className="text-[#78350f] font-medium italic text-sm">"Embark on a Divine Journey"</p>
                            </div>

                            <form
                                onSubmit={handleFormSubmit}
                                className="p-6 md:px-10 md:pb-10 pt-6 space-y-5 relative z-10"
                            >
                                {/* ======== STEP 1: PARTICIPANTS ======== */}
                                {currentStep === 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <div className="flex items-center justify-between border-b border-[#FFB81C]/30 pb-2">
                                            <h4 className="text-lg font-bold text-[#b45309] font-serif">Participants</h4>
                                            <span className="text-sm font-medium text-[#ea580c] bg-[#FFF9F0] px-3 py-1 rounded-full border border-[#FFB81C]/30">Step 1 of 4</span>
                                        </div>

                                        {validationError && (
                                            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2 animate-in slide-in-from-top-2">
                                                <X size={16} className="text-red-500 shrink-0" />
                                                <p>{validationError}</p>
                                            </div>
                                        )}

                                        {formData.participants.map((p, index) => (
                                            <div key={p.id} className="p-4 rounded-2xl bg-white/40 border border-[#FFB81C]/30 shadow-sm relative">
                                                {index > 0 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => removeParticipant(p.id)}
                                                        className="absolute top-4 right-4 text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 p-1.5 rounded-full transition-colors"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                )}
                                                <h5 className="text-sm font-bold text-[#540F0F] mb-4">
                                                    {index === 0 ? "Primary Contact" : `Participant ${index + 1}`}
                                                </h5>

                                                <div className="space-y-4">
                                                    <div>
                                                        <label className="block text-xs font-bold text-[#b45309] uppercase tracking-widest mb-1 ml-1">Full Name</label>
                                                        <input required type="text" value={p.fullName} onChange={(e) => updateParticipant(p.id, 'fullName', e.target.value)} className={`w-full px-4 py-2.5 rounded-xl bg-white/60 border ${validationField === `p${index}-fullName` ? 'border-red-500 ring-2 ring-red-500/20' : 'border-[#FFB81C]/50 focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]'} outline-none transition-all placeholder:text-[#92400e]/40 text-[#540F0F] font-medium`} placeholder="Full Name" />
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <label className="block text-xs font-bold text-[#b45309] uppercase tracking-widest mb-1 ml-1">Age</label>
                                                            <input required type="number" min="1" max="120" value={p.age} onChange={(e) => updateParticipant(p.id, 'age', e.target.value)} className={`w-full px-4 py-2.5 rounded-xl bg-white/60 border ${validationField === `p${index}-age` ? 'border-red-500 ring-2 ring-red-500/20' : 'border-[#FFB81C]/50 focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]'} outline-none transition-all placeholder:text-[#92400e]/40 text-[#540F0F] font-medium`} placeholder="Years" />
                                                        </div>
                                                        <div>
                                                            <label className="block text-xs font-bold text-[#b45309] uppercase tracking-widest mb-1 ml-1">Gender</label>
                                                            <select value={p.gender} onChange={(e) => updateParticipant(p.id, 'gender', e.target.value)} required className={`w-full px-4 py-2.5 rounded-xl bg-white/60 border ${validationField === `p${index}-gender` ? 'border-red-500 ring-2 ring-red-500/20' : 'border-[#FFB81C]/50 focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]'} outline-none transition-all text-[#540F0F] font-medium appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23ea580c%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:0.7rem_auto] bg-[position:right_1rem_center] bg-no-repeat pr-10`}>
                                                                <option value="" disabled>Select</option>
                                                                <option value="Male">Male</option>
                                                                <option value="Female">Female</option>
                                                                <option value="Other">Other</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    {/* Primary Contact extra fields */}
                                                    {index === 0 && (
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                                            <div>
                                                                <label className="block text-xs font-bold text-[#b45309] uppercase tracking-widest mb-1 ml-1">Phone Number</label>
                                                                <input required type="tel" value={p.phone || ''} onChange={(e) => updateParticipant(p.id, 'phone', e.target.value)} className={`w-full px-4 py-2.5 rounded-xl bg-white/60 border ${validationField === `p${index}-phone` ? 'border-red-500 ring-2 ring-red-500/20' : 'border-[#FFB81C]/50 focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]'} outline-none transition-all placeholder:text-[#92400e]/40 text-[#540F0F] font-medium`} placeholder="Mobile Number" />
                                                            </div>
                                                            <div>
                                                                <label className="block text-xs font-bold text-[#b45309] uppercase tracking-widest mb-1 ml-1">Email ID</label>
                                                                <input required type="email" value={p.email || ''} onChange={(e) => updateParticipant(p.id, 'email', e.target.value)} className={`w-full px-4 py-2.5 rounded-xl bg-white/60 border ${validationField === `p${index}-email` ? 'border-red-500 ring-2 ring-red-500/20' : 'border-[#FFB81C]/50 focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]'} outline-none transition-all placeholder:text-[#92400e]/40 text-[#540F0F] font-medium`} placeholder="Email Address" />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}

                                        <button
                                            type="button"
                                            onClick={addParticipant}
                                            className="w-full py-3 border-2 border-dashed border-[#ea580c]/40 hover:border-[#ea580c] hover:bg-[#FFF9F0] text-[#b45309] rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
                                        >
                                            <UserPlus size={18} /> Add Participant
                                        </button>
                                    </motion.div>
                                )}

                                {/* ======== STEP 2: TRAVEL ======== */}
                                {currentStep === 2 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <div className="flex items-center justify-between border-b border-[#FFB81C]/30 pb-2">
                                            <h4 className="text-lg font-bold text-[#b45309] font-serif">Travel Preferences</h4>
                                            <span className="text-sm font-medium text-[#ea580c] bg-[#FFF9F0] px-3 py-1 rounded-full border border-[#FFB81C]/30">Step 2 of 4</span>
                                        </div>

                                        <div className="space-y-3">
                                            {[
                                                { id: 'self', label: 'Book My Own Travel', sub: 'I will arrange my own travel tickets', price: '-₹3,200/person' },
                                                { id: '3ac', label: '3AC Train Travel', sub: 'Comfortable 3-tier AC coach', price: 'Included' },
                                                { id: '2ac', label: '2AC Train Travel', sub: 'Premium 2-tier AC coach', price: '+₹2,000/person' },
                                                { id: 'onward', label: 'Only Onward Journey', sub: 'Book onward journey only, return on your own', price: '-₹1,600/person' },
                                            ].map((option) => (
                                                <label
                                                    key={option.id}
                                                    className={`flex items-start justify-between p-4 rounded-xl cursor-pointer transition-all border-2 ${formData.travelOption === option.id ? 'bg-[#FFF9F0] border-[#ea580c] shadow-sm' : 'bg-white/50 border-[#FFB81C]/30 hover:border-[#ea580c]/50'}`}
                                                >
                                                    <div className="flex items-start gap-4">
                                                        <div className="mt-1">
                                                            <input
                                                                type="radio"
                                                                name="travelOption"
                                                                value={option.id}
                                                                checked={formData.travelOption === option.id}
                                                                onChange={(e) => setFormData({ ...formData, travelOption: e.target.value })}
                                                                className="w-5 h-5 accent-[#ea580c]"
                                                            />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-[#540F0F]">{option.label}</p>
                                                            <p className="text-sm text-[#92400e]/80">{option.sub}</p>
                                                        </div>
                                                    </div>
                                                    <span className={`text-sm font-bold ${option.price === 'Included' ? 'text-green-600' : 'text-[#ea580c]'}`}>{option.price}</span>
                                                </label>
                                            ))}
                                        </div>
                                        <p className="text-xs text-[#b45309] bg-[#FFF9F0] p-3 rounded-lg border border-[#FFB81C]/30 italic">
                                            * Children 5 years and below travel free. Travel cost applies only to participants above 5 years.
                                        </p>
                                    </motion.div>
                                )}

                                {/* ======== STEP 3: ACCOMMODATION ======== */}
                                {currentStep === 3 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <div className="flex items-center justify-between border-b border-[#FFB81C]/30 pb-2">
                                            <h4 className="text-lg font-bold text-[#b45309] font-serif">Accommodation in Puri</h4>
                                            <span className="text-sm font-medium text-[#ea580c] bg-[#FFF9F0] px-3 py-1 rounded-full border border-[#FFB81C]/30">Step 3 of 4</span>
                                        </div>

                                        <div className="space-y-3">
                                            {[
                                                { id: 'shared', label: 'Shared', sub: 'Shared occupancy', price: '₹4,000/person' },
                                                { id: 'private', label: 'Private Rooms', sub: 'Standard rooms (Double Occupancy)', price: '₹8,000/room' },
                                                { id: 'self', label: 'I\'ll Make My Own Arrangements', sub: 'No accommodation charges will be added', price: '₹0' },
                                            ].map((option) => (
                                                <div key={option.id} className={`flex flex-col p-4 rounded-xl transition-all border-2 ${formData.accommodationType === option.id ? 'bg-[#FFF9F0] border-[#ea580c] shadow-sm' : 'bg-white/50 border-[#FFB81C]/30 hover:border-[#ea580c]/50'}`}>
                                                    <label className="flex items-start justify-between cursor-pointer w-full">
                                                        <div className="flex items-start gap-4">
                                                            <div className="mt-1">
                                                                <input
                                                                    type="radio"
                                                                    name="accommodationType"
                                                                    value={option.id}
                                                                    checked={formData.accommodationType === option.id}
                                                                    onChange={(e) => setFormData({ ...formData, accommodationType: e.target.value })}
                                                                    className="w-5 h-5 accent-[#ea580c]"
                                                                />
                                                            </div>
                                                            <div>
                                                                <p className="font-bold text-[#540F0F]">{option.label}</p>
                                                                <p className="text-sm text-[#92400e]/80">{option.sub}</p>
                                                            </div>
                                                        </div>
                                                        <span className="text-sm font-bold text-[#ea580c]">{option.price}</span>
                                                    </label>

                                                    {/* Conditional Dropdown for Private Rooms */}
                                                    {option.id === 'private' && formData.accommodationType === 'private' && (
                                                        <div className="mt-4 ml-9 animate-in slide-in-from-top-2 duration-300">
                                                            <label className="block text-xs font-bold text-[#b45309] uppercase tracking-widest mb-1 ml-1">Number of Rooms</label>
                                                            <select
                                                                value={formData.privateRooms}
                                                                onChange={(e) => setFormData({ ...formData, privateRooms: e.target.value })}
                                                                className="w-full md:w-1/2 px-4 py-2.5 rounded-xl bg-white border border-[#FFB81C]/50 focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] outline-none transition-all text-[#540F0F] font-medium appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23ea580c%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:0.7rem_auto] bg-[position:right_1rem_center] bg-no-repeat pr-10"
                                                            >
                                                                {[1, 2, 3, 4, 5].map(num => (
                                                                    <option key={num} value={num.toString()}>{num} Room{num > 1 ? 's' : ''}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="bg-[#FFF9F0] p-4 rounded-xl border border-[#FFB81C]/30 space-y-2">
                                            <p className="text-xs text-[#b45309] flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] mt-1 shrink-0"></span>
                                                Sharing will be double or triple occupancy room.
                                            </p>
                                            <p className="text-xs text-[#b45309] flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] mt-1 shrink-0"></span>
                                                Extra Mattress: Charges for extra mattress (if required) should be paid directly to the hotel.
                                            </p>
                                        </div>
                                    </motion.div>
                                )}

                                {/* ======== STEP 4: PAYMENT ======== */}
                                {currentStep === 4 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <div className="flex items-center justify-between border-b border-[#FFB81C]/30 pb-2">
                                            <h4 className="text-lg font-bold text-[#b45309] font-serif">Payment & Verification</h4>
                                            <span className="text-sm font-medium text-[#ea580c] bg-[#FFF9F0] px-3 py-1 rounded-full border border-[#FFB81C]/30">Step 4 of 4</span>
                                        </div>

                                        {/* Trip Summary Card */}
                                        <div className="bg-[#FFF9F0] p-5 rounded-2xl border border-[#FFB81C]/40 shadow-sm relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB81C] rounded-full blur-[50px] opacity-20"></div>
                                            <h5 className="font-bold text-[#540F0F] mb-4 text-sm uppercase tracking-widest border-b border-[#FFB81C]/20 pb-2">Trip Summary</h5>

                                            <div className="space-y-3 mb-4">
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-[#92400e]">Participants</span>
                                                    <span className="font-bold text-[#540F0F]">{formData.participants.length}</span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-[#92400e]">Travel Preference</span>
                                                    <span className="font-bold text-[#540F0F] text-right capitalize">{formData.travelOption.replace('ac', ' AC')}</span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm border-b border-[#FFB81C]/20 pb-3">
                                                    <span className="text-[#92400e]">Accommodation</span>
                                                    <span className="font-bold text-[#540F0F] text-right capitalize">{formData.accommodationType === 'private' ? `${formData.privateRooms} Private Rooms` : formData.accommodationType}</span>
                                                </div>
                                            </div>

                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-[#92400e] font-bold">Total Trip Cost</span>
                                                <span className="text-xl font-black text-[#540F0F]">₹ {totalCost.toLocaleString('en-IN')}</span>
                                            </div>
                                            <div className="flex justify-between items-center bg-[#ea580c]/10 p-3 rounded-xl border border-[#ea580c]/20">
                                                <span className="text-[#c2410c] font-black">Pay Today (40%)</span>
                                                <span className="text-2xl font-black text-[#c2410c]">₹ {payToday.toLocaleString('en-IN')}</span>
                                            </div>
                                        </div>

                                        {/* Bank Details & UPI */}
                                        <div className="bg-white/60 p-5 rounded-2xl border border-[#FFB81C]/30 flex flex-col md:flex-row gap-6 items-start">
                                            {/* Left: Bank Details */}
                                            <div className="flex-1 w-full">
                                                <h5 className="font-black text-[#540F0F] mb-4 text-sm uppercase tracking-wider border-b border-[#FFB81C]/30 pb-2">Bank Transfer (NEFT / IMPS)</h5>
                                                <div className="flex flex-col gap-3">
                                                    {[
                                                        { label: "A/C Name", value: "Touchstone Foundation Chennai", mono: false },
                                                        { label: "A/C Number", value: "50100736447897", mono: true },
                                                        { label: "IFSC Code", value: "HDFC0004102", mono: true },
                                                        { label: "Bank", value: "HDFC Bank", mono: false },
                                                    ].map(({ label, value, mono }) => (
                                                        <div key={label} className="flex flex-col gap-0.5 bg-[#FFF9F0] rounded-lg px-3 py-2 border border-[#FFB81C]/20">
                                                            <span className="text-[10px] font-semibold text-[#92400e] uppercase tracking-widest">{label}</span>
                                                            <span className={`text-sm font-bold text-[#540F0F] ${mono ? 'font-mono tracking-wider' : ''}`}>{value}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Right: QR */}
                                            <div className="w-full md:w-auto flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-[#FFB81C]/30 pt-5 md:pt-0 md:pl-6">
                                                <img src="/assets/kk.jpg" alt="UPI QR Code" className="w-56 h-56 object-contain rounded-xl border-2 border-[#ea580c]/30 shadow-md" />
                                                <span className="text-sm font-bold text-[#ea580c] mt-3 uppercase tracking-wide">Scan to Pay</span>
                                            </div>
                                        </div>

                                        {/* Custom Payment & Upload */}
                                        <div className="space-y-4">
                                            <label className="flex items-center gap-3 cursor-pointer">
                                                <input type="checkbox" checked={isCustomAmount} onChange={(e) => setIsCustomAmount(e.target.checked)} className="w-5 h-5 accent-[#ea580c]" />
                                                <span className="text-sm font-bold text-[#540F0F]">Pay Custom Amount (Pay more than minimum due)</span>
                                            </label>

                                            <div className="pt-2">
                                                <label className="block text-xs font-bold text-[#b45309] uppercase tracking-widest mb-3 ml-1">Upload Payment Screenshot *</label>

                                                {/* Idle — show drop zone */}
                                                {uploadState === 'idle' && (
                                                    <label htmlFor="file-upload" className="w-full flex justify-center items-center px-6 py-8 border-2 border-dashed border-[#ea580c] rounded-2xl bg-[#FFF9F0]/50 hover:bg-[#FFF9F0] transition-colors cursor-pointer group">
                                                        <div className="text-center pointer-events-none">
                                                            <Upload className="mx-auto h-8 w-8 text-[#ea580c] mb-3 stroke-[2.5]" />
                                                            <div className="flex text-lg items-center justify-center gap-1.5 mb-1">
                                                                <span className="font-bold text-[#ea580c] group-hover:text-[#c2410c] transition-colors">Upload a file</span>
                                                                <span className="text-[#540F0F]/60 font-medium">or drag and drop</span>
                                                            </div>
                                                            <p className="text-sm font-medium text-[#c2410c]/60">PNG, JPG — max 5 MB</p>
                                                        </div>
                                                        <input id="file-upload" type="file" className="sr-only" accept="image/png, image/jpeg" onChange={(e) => handleScreenshotChange(e.target.files?.[0] ?? null)} />
                                                    </label>
                                                )}

                                                {/* Uploading — progress bar */}
                                                {uploadState === 'uploading' && (
                                                    <div className="p-5 rounded-2xl bg-[#FFF9F0] border-2 border-[#ea580c]/40">
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <svg className="animate-spin h-5 w-5 text-[#ea580c] shrink-0" viewBox="0 0 24 24" fill="none">
                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                                            </svg>
                                                            <div className="flex-1 min-w-0">
                                                                <p className="text-sm font-bold text-[#540F0F] truncate">{formData.paymentScreenshot?.name}</p>
                                                                <p className="text-xs text-[#b45309]">Uploading… {uploadProgress}%</p>
                                                            </div>
                                                        </div>
                                                        <div className="w-full h-2.5 bg-[#FFB81C]/20 rounded-full overflow-hidden">
                                                            <div
                                                                className="h-full bg-gradient-to-r from-[#ea580c] to-[#FFB81C] rounded-full transition-all duration-300"
                                                                style={{ width: `${uploadProgress}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Done — success */}
                                                {uploadState === 'done' && (
                                                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-green-50 border-2 border-green-400">
                                                        <CheckCircle2 className="text-green-500 shrink-0" size={24} />
                                                        <div className="flex-1 min-w-0">
                                                            <p className="font-bold text-green-700 truncate text-sm">{formData.paymentScreenshot?.name}</p>
                                                            <p className="text-xs text-green-600">Uploaded successfully ✓</p>
                                                        </div>
                                                        <button type="button" onClick={() => { setUploadState('idle'); setScreenshotUrl(null); setFormData(p => ({ ...p, paymentScreenshot: null })); }} className="text-red-400 hover:text-red-600 transition-colors shrink-0">
                                                            <X size={18} />
                                                        </button>
                                                    </div>
                                                )}

                                                {/* Error */}
                                                {uploadState === 'error' && (
                                                    <div className="p-4 rounded-2xl bg-red-50 border-2 border-red-300">
                                                        <p className="text-sm font-bold text-red-600 mb-2">{uploadErrorMsg}</p>
                                                        <label htmlFor="file-upload-retry" className="inline-flex items-center gap-2 text-sm font-bold text-[#ea580c] cursor-pointer hover:text-[#c2410c]">
                                                            <Upload size={14} /> Try again
                                                            <input id="file-upload-retry" type="file" className="sr-only" accept="image/png, image/jpeg" onChange={(e) => handleScreenshotChange(e.target.files?.[0] ?? null)} />
                                                        </label>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* ======== LIVE PRICING & NAV BUTTONS ======== */}
                                <div className="pt-6 mt-4 border-t border-[#FFB81C]/30">
                                    {currentStep < 4 && (
                                        <div className="flex justify-between items-center bg-[#ea580c]/10 p-4 rounded-xl border border-[#ea580c]/20 mb-4 shadow-sm">
                                            <div>
                                                <p className="text-[#92400e] text-xs uppercase tracking-widest font-bold mb-1">Live Trip Cost</p>
                                                <p className="text-xl font-black text-[#540F0F]">₹ {totalCost.toLocaleString('en-IN')}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[#92400e] text-xs uppercase tracking-widest font-bold mb-1">Participants</p>
                                                <p className="text-lg font-black text-[#540F0F]">{formData.participants.length}</p>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between gap-4">
                                        {currentStep > 1 && (
                                            <button
                                                type="button"
                                                onClick={handlePrevStep}
                                                className="px-6 py-3.5 bg-white border border-[#FFB81C] text-[#b45309] hover:bg-[#FFF9F0] rounded-xl font-bold uppercase tracking-widest transition-all flex items-center gap-2"
                                            >
                                                <ArrowLeft size={18} /> Back
                                            </button>
                                        )}

                                        {currentStep < 4 ? (
                                            <button
                                                type="button"
                                                onClick={handleNextStep}
                                                className="flex-1 py-3.5 bg-gradient-to-r from-[#ea580c] to-[#b45309] hover:from-[#c2410c] hover:to-[#92400e] text-white rounded-xl font-bold uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2 ml-auto"
                                            >
                                                Continue <ArrowRight size={18} />
                                            </button>
                                        ) : (
                                            <button
                                                type="submit"
                                                disabled={isSubmitting || uploadState !== 'done'}
                                                className="flex-1 py-3.5 bg-gradient-to-r from-[#16a34a] to-[#15803d] hover:from-[#15803d] hover:to-[#166534] text-white rounded-xl font-bold uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2 ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <svg className="animate-spin h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                                        </svg>
                                                        Submitting...
                                                    </>
                                                ) : uploadState === 'uploading' ? (
                                                    <>
                                                        <svg className="animate-spin h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                                        </svg>
                                                        Uploading Screenshot...
                                                    </>
                                                ) : uploadState !== 'done' ? (
                                                    <>Upload Screenshot First</>
                                                ) : (
                                                    <><CheckCircle size={18} /> Complete Registration</>
                                                )}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
