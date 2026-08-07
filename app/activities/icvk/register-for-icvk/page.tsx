"use client"

import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, User, ArrowRight, CheckCircle, Mail, Heart, Sparkles, BookOpen, Upload, AlertCircle, LogOut, KeyRound, Plus } from "lucide-react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import Image from "next/image"
import { uploadToCloudinary, validateImageFile } from "@/lib/cloudinary"

type AuthStep = "loading" | "email" | "otp" | "dashboard" | "form" | "success" | "renew"

type ApiResult<T = Record<string, any>> = {
    ok: boolean
    status: number
    data: T | null
    error: string | null
}

async function readApiResult<T = Record<string, any>>(response: Response): Promise<ApiResult<T>> {
    const contentType = response.headers.get("content-type") || ""
    let data: T | null = null
    let rawText = ""

    if (contentType.includes("application/json")) {
        data = await response.json().catch(() => null)
    } else {
        rawText = await response.text().catch(() => "")
        if (rawText) {
            try {
                data = JSON.parse(rawText) as T
            } catch {
                data = null
            }
        }
    }

    const apiError = typeof data === "object" && data !== null && "error" in data
        ? String((data as { error?: string }).error || "")
        : ""

    if (response.ok) {
        if (!contentType.includes("application/json") && !data) {
            const trimmedText = rawText.trim()
            return {
                ok: false,
                status: response.status,
                data,
                error: trimmedText === "Hello world"
                    ? "Cloudflare is routing /api/icvk/send-otp to a placeholder worker instead of the Next.js API. Remove the test worker route and redeploy the real app runtime."
                    : "The deployment returned an unexpected non-JSON response. Cloudflare may be routing this API request to the wrong service.",
            }
        }

        return {
            ok: true,
            status: response.status,
            data,
            error: null,
        }
    }

    if (apiError) {
        return {
            ok: false,
            status: response.status,
            data,
            error: apiError,
        }
    }

    if (response.status === 404 || contentType.includes("text/html")) {
        return {
            ok: false,
            status: response.status,
            data,
            error: "This Cloudflare deployment is serving the static site only, so the ICVK API is unavailable. Deploy the Next.js runtime instead of the exported out folder.",
        }
    }

    if (response.status >= 500) {
        return {
            ok: false,
            status: response.status,
            data,
            error: "The server could not complete this request. On Cloudflare, verify the Next.js runtime is deployed and all required environment variables are configured.",
        }
    }

    return {
        ok: false,
        status: response.status,
        data,
        error: `Request failed with status ${response.status}. Please try again.`,
    }
}

export default function RegisterForICVK() {
    const [step, setStep] = useState<AuthStep>("loading")
    const [parentEmail, setParentEmail] = useState("")
    const [otp, setOtp] = useState("")
    const [registeredChildren, setRegisteredChildren] = useState<any[]>([])
    const [authLoading, setAuthLoading] = useState(false)
    const [authError, setAuthError] = useState("")
    const [childToRenew, setChildToRenew] = useState<any>(null)

    const [formStatus, setFormStatus] = useState<"idle" | "uploading" | "submitting" | "success">("idle")
    const [selectedChildPhoto, setSelectedChildPhoto] = useState<string>("")
    const [selectedPaymentScreenshot, setSelectedPaymentScreenshot] = useState<string>("")
    const [uploadError, setUploadError] = useState<string>("")
    const [uploadProgress, setUploadProgress] = useState<string>("")
    
    const [childPhotoUrl, setChildPhotoUrl] = useState<string>("")
    const [paymentScreenshotUrl, setPaymentScreenshotUrl] = useState<string>("")
    
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();
    
    const childPhotoRef = React.useRef<HTMLInputElement>(null)
    const paymentRef = React.useRef<HTMLInputElement>(null)
    const childPhotoFileRef = React.useRef<File | null>(null)
    const paymentFileRef = React.useRef<File | null>(null)

    useEffect(() => {
        checkSession()
    }, [])

    const checkSession = async () => {
        try {
            const res = await fetch('/api/icvk/user')
            const result = await readApiResult<{ email?: string; children?: any[] }>(res)

            if (result.ok && result.data) {
                setParentEmail(result.data.email || "")
                setRegisteredChildren(result.data.children || [])
                setAuthError("")
                setStep("dashboard")
            } else {
                if (result.status !== 401 && result.error) {
                    setAuthError(result.error)
                }
                setStep("email")
            }
        } catch (error) {
            setAuthError("The registration service could not be reached. If this is the Cloudflare deployment, check that the app is deployed with its Next.js server runtime.")
            setStep("email")
        }
    }

    const handleSendOTP = async (e: React.FormEvent) => {
        e.preventDefault()
        setAuthLoading(true)
        setAuthError("")
        try {
            const res = await fetch('/api/icvk/send-otp', {
                method: 'POST',
                body: JSON.stringify({ email: parentEmail }),
                headers: { 'Content-Type': 'application/json' }
            })
            const result = await readApiResult<{ devOtp?: string }>(res)

            if (result.ok) {
                setStep("otp")
                if (result.data?.devOtp) {
                    // For dev purposes if resend is not configured
                    console.log("DEV OTP:", result.data.devOtp)
                }
            } else {
                setAuthError(result.error || "Failed to send OTP")
            }
        } catch (error) {
            setAuthError("The registration service could not be reached. If this is the Cloudflare deployment, the API worker may not be running.")
        } finally {
            setAuthLoading(false)
        }
    }

    const handleVerifyOTP = async (e: React.FormEvent) => {
        e.preventDefault()
        setAuthLoading(true)
        setAuthError("")
        try {
            const res = await fetch('/api/icvk/verify-otp', {
                method: 'POST',
                body: JSON.stringify({ email: parentEmail, otp }),
                headers: { 'Content-Type': 'application/json' }
            })
            const result = await readApiResult(res)

            if (result.ok) {
                await checkSession() // Reload session to get children and set dashboard
            } else {
                setAuthError(result.error || "Invalid OTP")
            }
        } catch (error) {
            setAuthError("The registration service could not be reached. If this is the Cloudflare deployment, the API worker may not be running.")
        } finally {
            setAuthLoading(false)
        }
    }

    const handleLogout = async () => {
        await fetch('/api/icvk/logout', { method: 'POST' })
        setParentEmail("")
        setRegisteredChildren([])
        setOtp("")
        setStep("email")
    }

    const onSubmitRegistration = async (data: any) => {
        setUploadError("")
        setUploadProgress("")
        
        if (!childPhotoUrl) {
            setUploadError("Please upload a child photo before submitting.")
            return
        }
        
        if (!paymentScreenshotUrl) {
            setUploadError("Please upload a payment screenshot before submitting.")
            return
        }
        
        try {
            setFormStatus("submitting")
            setUploadProgress("Submitting registration...")
            
            const registrationData = {
                ...data,
                childPhotoUrl,
                paymentScreenshotUrl
            }
            
            delete registrationData.childPhoto
            delete registrationData.paymentScreenshot

            const response = await fetch('/api/icvk/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(registrationData),
            })

            if (response.ok) {
                window.alert("Successfully registered for ICVK!")
                setStep("success")
                setFormStatus("idle")
                setUploadProgress("")
                reset()
            } else {
                const errorData = await response.json().catch(() => ({ message: "Failed" }))
                setFormStatus("idle") 
                setUploadError(errorData.error || errorData.message || "Registration failed. Please try again.")
                setUploadProgress("")
            }
        } catch (error) {
            setFormStatus("idle")
            setUploadError("Error connecting to server. Please check your connection and try again.")
            setUploadProgress("")
        }
    }

    const startNewRegistration = () => {
        reset()
        setValue("email", parentEmail) // Pre-fill parent email securely
        setChildPhotoUrl("")
        setPaymentScreenshotUrl("")
        setSelectedChildPhoto("")
        setSelectedPaymentScreenshot("")
        setStep("form")
    }

    const startRenewal = (child: any) => {
        setChildToRenew(child)
        setPaymentScreenshotUrl("")
        setSelectedPaymentScreenshot("")
        setUploadError("")
        setUploadProgress("")
        setStep("renew")
    }

    const onSubmitRenewal = async (e: React.FormEvent) => {
        e.preventDefault();
        setUploadError("");
        setUploadProgress("");
        
        if (!paymentScreenshotUrl) {
            setUploadError("Please upload a payment screenshot before submitting.");
            return;
        }
        
        try {
            setFormStatus("submitting");
            setUploadProgress("Submitting renewal...");
            
            // Map the snake_case from database to camelCase for the API
            const registrationData = {
                childName: childToRenew.child_name,
                dob: childToRenew.dob,
                age: childToRenew.age,
                gender: childToRenew.gender,
                bloodGroup: childToRenew.blood_group,
                center: childToRenew.center,
                batch: childToRenew.batch,
                schoolName: childToRenew.school_name,
                fatherName: childToRenew.father_name,
                motherName: childToRenew.mother_name,
                address: childToRenew.address,
                fatherMobile: childToRenew.father_mobile,
                motherMobile: childToRenew.mother_mobile,
                pickupName: childToRenew.pickup_name,
                pickupContact: childToRenew.pickup_contact,
                pickupRelation: childToRenew.pickup_relation,
                gitaLifeInterest: childToRenew.gita_life_interest,
                mediaConsent: childToRenew.media_consent,
                childPhotoUrl: childToRenew.child_photo_url,
                paymentScreenshotUrl: paymentScreenshotUrl
            };

            const response = await fetch('/api/icvk/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(registrationData),
            });

            if (response.ok) {
                window.alert("Successfully renewed registration for ICVK!");
                setStep("success");
                setFormStatus("idle");
                setUploadProgress("");
            } else {
                const errorData = await response.json().catch(() => ({ message: "Failed" }));
                setFormStatus("idle"); 
                setUploadError(errorData.error || errorData.message || "Renewal failed. Please try again.");
                setUploadProgress("");
            }
        } catch (error) {
            setFormStatus("idle");
            setUploadError("Error connecting to server. Please check your connection and try again.");
            setUploadProgress("");
        }
    }

    return (
        <div className="min-h-screen bg-[#FFF9F0] font-sans selection:bg-[#FBB201] selection:text-white relative">
            <Navbar />

            {/* --- HERO SECTION: Funky & Spiritual --- */}
            <section className="pt-32 pb-24 px-6 relative overflow-hidden bg-gradient-to-br from-[#2D0A0A] via-[#4d1010] to-[#2D0A0A]">
                 {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.05] bg-[url('/assets/mandala-pattern.png')] bg-repeat animate-pulse-slow"></div>
                
                {/* Decorative Glowing Orbs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FBB201] rounded-full blur-[120px] opacity-20"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#ea580c] rounded-full blur-[120px] opacity-20"></div>
                </div>
                
                <div className="container mx-auto text-center relative z-10 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl relative"
                    >
                        {/* Playful Header Composition */}
                        <div className="relative mb-4 inline-block">
                             {/* Krishna & Radha Cartoon Asset */}
                            <motion.div 
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="relative z-10"
                            >
                                <img 
                                    src="/assets/activities/icvk/krishna_radha_header_final_v4.png" 
                                    alt="Krishna & Radha" 
                                    className="h-52 md:h-72 w-auto object-contain drop-shadow-[0_0_25px_rgba(251,178,1,0.6)] hover:scale-105 transition-transform duration-300 scale-125 origin-bottom"
                                />
                            </motion.div>
                            
                            {/* Sparkling Stars around them */}
                            <Sparkles className="absolute -top-4 -right-8 text-[#FBB201] w-8 h-8 animate-bounce" />
                            <Sparkles className="absolute top-1/2 -left-12 text-[#FBB201] w-6 h-6 animate-pulse" />
                        </div>

                        <h2 className="text-xl md:text-2xl text-[#FBB201] tracking-widest uppercase font-bold mb-4 font-serif">
                           Indian Culture & Values for Kids
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-serif tracking-tight drop-shadow-2xl">
                            Register for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB201] via-[#fcd34d] to-[#FBB201]">ICVK</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto italic font-medium">
                            "Unlock the treasure of Vedic wisdom for your child in a fun, engaging way!"
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Wave Divider */}
                <div className="absolute bottom-0 left-0 w-full leading-none z-10">
                     <svg className="block w-full h-12 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                            className="fill-[#FFF9F0]"></path>
                    </svg>
                </div>
            </section>

             {/* --- MULTI-STEP AUTH & FORM SECTION --- */}
             <section className="py-12 md:py-24 relative overflow-x-clip min-h-[600px]">
                {/* Floating Decor Elements - Child Reading Book - Left Side */}
                <div className="absolute top-20 left-0 xl:-left-[5%] w-80 h-80 md:w-[30rem] md:h-[30rem] z-20 opacity-100 animate-float hidden xl:block pointer-events-none">
                     <Image src="/assets/activities/icvk/child_reading_book.png" alt="Child Reading Book" fill className="object-contain" />
                </div>

                {/* Happy Kids Jumping - Top Right Side (Only on registration form) */}
                {step === "form" && (
                <div className="absolute top-0 right-0 md:top-20 md:right-0 xl:-right-[2%] w-28 h-28 md:w-[32rem] md:h-[32rem] z-50 pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-full relative"
                    >
                        <Image 
                            src="/assets/activities/icvk/happy_kids_jumping.png" 
                            alt="Happy Kids Jumping" 
                            fill 
                            className="object-contain drop-shadow-xl"
                            sizes="(max-width: 768px) 288px, 384px"
                        />
                    </motion.div>
                </div>
                )}

                {/* Cute Cow - Near End of Form Right Side (Only on registration form) */}
                {step === "form" && (
                <div className="absolute top-[45%] -right-4 md:top-[50%] md:right-0 xl:right-[5%] w-24 h-24 md:w-72 md:h-72 z-50 pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -10, 0], rotate: [0, -3, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="w-full h-full relative"
                    >
                        <Image 
                            src="/assets/activities/icvk/cute_cow.png" 
                            alt="Cute Holy Cow" 
                            fill 
                            className="object-contain drop-shadow-xl"
                            sizes="(max-width: 768px) 192px, 288px"
                        />
                    </motion.div>
                </div>
                )}

                <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center">
                    <div className="w-full max-w-4xl mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-6 md:p-12 rounded-[2.5rem] shadow-2xl border-4 border-[#FBB201]/10 relative overflow-hidden min-h-[400px]"
                        >
                            {/* Card Decoration Top */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FBB201] via-[#ea580c] to-[#FBB201]"></div>
                            
                            {/* --- STEP: LOADING --- */}
                            {step === "loading" && (
                                <div className="flex flex-col items-center justify-center py-20">
                                    <div className="animate-spin text-[#FBB201] mb-6">
                                        <ArrowRight className="w-12 h-12" />
                                    </div>
                                    <p className="text-gray-500 font-medium">Checking session...</p>
                                </div>
                            )}

                            {/* --- STEP: EMAIL --- */}
                            {step === "email" && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-md mx-auto py-10">
                                    <div className="text-center mb-8">
                                        <div className="inline-block px-4 py-1 rounded-full bg-[#FFF9F0] border border-[#FBB201]/30 text-[#ea580c] text-sm font-bold tracking-wider mb-4">
                                            PARENT PORTAL
                                        </div>
                                        <h3 className="text-3xl font-bold text-[#2D0A0A] font-serif mb-2">Welcome Parents</h3>
                                        <p className="text-gray-600">Enter your email to securely access or start your child's registration.</p>
                                    </div>

                                    {authError && <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl font-medium border border-red-100 flex gap-2 items-center"><AlertCircle className="w-5 h-5 shrink-0" /> {authError}</div>}

                                    <form onSubmit={handleSendOTP} className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Parent's Email Address</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                                <input 
                                                    type="email" 
                                                    value={parentEmail}
                                                    onChange={e => setParentEmail(e.target.value)}
                                                    required
                                                    className="w-full pl-12 pr-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium placeholder:text-gray-400" 
                                                    placeholder="e.g., mail@example.com" 
                                                />
                                            </div>
                                        </div>
                                        <button 
                                            disabled={authLoading || !parentEmail}
                                            type="submit" 
                                            className="w-full py-4 bg-gradient-to-r from-[#FBB201] to-[#ea580c] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {authLoading ? "Sending OTP..." : "Continue with Email"}
                                            {!authLoading && <ArrowRight className="w-5 h-5" />}
                                        </button>
                                    </form>
                                </motion.div>
                            )}

                            {/* --- STEP: OTP --- */}
                            {step === "otp" && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-md mx-auto py-10">
                                    <div className="text-center mb-8">
                                        <div className="w-16 h-16 bg-[#FFF9F0] border-2 border-[#FBB201]/30 text-[#ea580c] rounded-full flex items-center justify-center mx-auto mb-4">
                                            <KeyRound className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-[#2D0A0A] font-serif mb-2">Check Your Email</h3>
                                        <p className="text-gray-600">We sent a 6-digit confirmation code to <strong className="text-[#2D0A0A]">{parentEmail}</strong>.</p>
                                    </div>

                                    {authError && <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl font-medium border border-red-100 flex gap-2 items-center"><AlertCircle className="w-5 h-5 shrink-0" /> {authError}</div>}

                                    <form onSubmit={handleVerifyOTP} className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide text-center block">Enter 6-Digit Code</label>
                                            <input 
                                                type="text" 
                                                maxLength={6}
                                                value={otp}
                                                onChange={e => setOtp(e.target.value.replace(/\D/g, ''))}
                                                required
                                                className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-bold text-center text-3xl tracking-widest text-[#2D0A0A] placeholder:text-gray-300" 
                                                placeholder="••••••" 
                                            />
                                        </div>
                                        <button 
                                            disabled={authLoading || otp.length !== 6}
                                            type="submit" 
                                            className="w-full py-4 bg-gradient-to-r from-[#FBB201] to-[#ea580c] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {authLoading ? "Verifying..." : "Secure Login"}
                                            {!authLoading && <CheckCircle className="w-5 h-5" />}
                                        </button>
                                        <button type="button" onClick={() => setStep("email")} className="w-full text-center text-sm font-medium text-gray-400 hover:text-[#ea580c]">
                                            Use a different email address
                                        </button>
                                    </form>
                                </motion.div>
                            )}

                            {/* --- STEP: DASHBOARD --- */}
                            {step === "dashboard" && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-6">
                                    <div className="flex justify-between items-start mb-8 border-b-2 border-gray-100 pb-6 flex-wrap gap-4">
                                        <div>
                                            <div className="inline-block px-4 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold tracking-wider mb-2 flex items-center gap-2 w-max">
                                                <CheckCircle className="w-3 h-3" /> VERIFIED PARENT
                                            </div>
                                            <h3 className="text-3xl font-bold text-[#2D0A0A] font-serif">Your Records</h3>
                                            <p className="text-gray-500 font-medium">{parentEmail}</p>
                                        </div>
                                        <button onClick={handleLogout} className="px-4 py-2 rounded-lg text-sm font-bold text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2">
                                            <LogOut className="w-4 h-4" /> Logout
                                        </button>
                                    </div>

                                    <div className="space-y-8">
                                        {registeredChildren.length > 0 ? (
                                            <div>
                                                <h4 className="text-xl font-bold text-[#701a1a] mb-4">Registered Children</h4>
                                                <div className="grid gap-4">
                                                    {registeredChildren.map((child, i) => (
                                                        <div key={i} className="flex items-center justify-between p-5 rounded-2xl border-2 border-gray-100 bg-[#FFF9F0]/30 hover:shadow-md transition-all">
                                                            <div className="flex items-center gap-4">
                                                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-2xl font-black text-[#FBB201]">
                                                                    {child.child_name.charAt(0)}
                                                                </div>
                                                                <div>
                                                                    <p className="font-bold text-lg text-[#2D0A0A] flex items-center flex-wrap gap-2">
                                                                        {child.child_name}
                                                                        {child.created_at && (
                                                                            <span className="text-xs font-medium text-gray-500 border border-gray-200 px-2 py-0.5 rounded-md bg-white/50">
                                                                                Reg: {new Date(child.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                                                                            </span>
                                                                        )}
                                                                    </p>
                                                                    <p className="text-sm text-gray-500 font-medium mt-0.5">
                                                                        {child.age} yrs • {child.center} • {child.batch}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="hidden sm:flex items-center gap-3">
                                                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                                                                    child.status === 'verified' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                                                }`}>
                                                                    {child.status}
                                                                </span>
                                                                <button onClick={() => startRenewal(child)} className="px-4 py-1.5 bg-white border border-[#ea580c] text-[#ea580c] hover:bg-[#ea580c] hover:text-white rounded-lg text-xs font-bold transition-all shadow-sm">
                                                                    Re-Register
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="text-center py-12 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                                                <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center mx-auto mb-4 text-[#FBB201]">
                                                    <User className="w-8 h-8" />
                                                </div>
                                                <h4 className="text-xl font-bold text-[#2D0A0A] mb-2">No Records Found</h4>
                                                <p className="text-gray-500 mb-6 max-w-sm mx-auto">You have no registered children yet. Click below to add your first child.</p>
                                            </div>
                                        )}

                                        <button 
                                            onClick={startNewRegistration}
                                            className="w-full py-5 bg-[#FBB201] hover:bg-[#e5a500] text-[#2D0A0A] rounded-2xl font-black text-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 border-2 border-[#FBB201]"
                                        >
                                            <Plus className="w-6 h-6" /> 
                                            {registeredChildren.length > 0 ? "REGISTER ANOTHER CHILD" : "REGISTER YOUR CHILD"}
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* --- STEP: REGISTRATION FORM --- */}
                            {step === "form" && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                                        <button onClick={() => { setStep("dashboard"); checkSession(); }} className="text-gray-400 hover:text-[#ea580c] font-bold text-sm flex items-center gap-1 transition-colors">
                                            ← BACK TO DASHBOARD
                                        </button>
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full">
                                            <User className="w-3 h-3 text-green-500" /> {parentEmail}
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmitRegistration)} className="space-y-8">
                                        <div className="text-center mb-8">
                                            <div className="inline-block px-4 py-1 rounded-full bg-[#FFF9F0] border border-[#FBB201]/30 text-[#ea580c] text-sm font-bold tracking-wider mb-4">
                                                LITTLE DEVOTEE DETAILS
                                            </div>
                                            <h3 className="text-3xl font-bold text-[#2D0A0A] font-serif">Student Application</h3>
                                        </div>

                                        {/* Child Details Section */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2 md:col-span-2">
                                                <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Name of the Child *</label>
                                                <input {...register("childName", { required: true })} type="text" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium placeholder:text-gray-400" placeholder="e.g. Arlington Krishna" />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Date of Birth *</label>
                                                <input {...register("dob", { required: true })} type="date" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Age *</label>
                                                <input {...register("age", { required: true })} type="number" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" placeholder="Years" />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Gender *</label>
                                                <select {...register("gender", { required: true })} className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium text-gray-700">
                                                    <option value="">Select Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Blood Group *</label>
                                                <input {...register("bloodGroup", { required: true })} type="text" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" placeholder="e.g. O+" />
                                            </div>
                                        </div>

                                        {/* Center Selection */}
                                        <div className="space-y-4 pt-8 border-t-2 border-dashed border-gray-100">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Preferred Center *</label>
                                                <select {...register("center", { required: true })} className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium text-gray-700">
                                                    <option value="">Select Area</option>
                                                    <option value="Mogappair">Mogappair (Ages 3-12)</option>
                                                    <option value="Thiruvanmiyur">Thiruvanmiyur (Ages 3-15)</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Batch Selection */}
                                        <div className="space-y-4 pt-4">
                                            <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide block mb-2">Select Your Batch *</label>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {[
                                                    { title: "Gopala", age: "3-5 yrs", subtitle: "at Mogappair & Thiruvanmiyur", icon: "🐮", color: "bg-blue-50 border-blue-200" },
                                                    { title: "Mukunda", age: "6-12 yrs", subtitle: "Only at Mogappair", icon: "🌷", color: "bg-pink-50 border-pink-200" },
                                                    { title: "Keshava", age: "6-8 yrs", subtitle: "Only at Thiruvanmiyur", icon: "🦚", color: "bg-green-50 border-green-200" },
                                                    { title: "Govinda", age: "9-12 yrs", subtitle: "Only at Thiruvanmiyur", icon: "🏹", color: "bg-orange-50 border-orange-200" },
                                                    { title: "Madhava", age: "13-15 yrs", subtitle: "Only at Thiruvanmiyur", icon: "🐚", color: "bg-purple-50 border-purple-200" }
                                                ].map((batch, idx) => (
                                                    <label key={idx} className={`relative flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all hover:scale-[1.02] hover:shadow-md ${batch.color}`}>
                                                        <input {...register("batch", { required: true })} type="radio" value={batch.title} className="absolute top-4 right-4 w-5 h-5 text-[#FBB201] focus:ring-[#FBB201]" />
                                                        <span className="text-3xl filter drop-shadow-sm">{batch.icon}</span>
                                                        <div>
                                                            <p className="font-bold text-[#2D0A0A]">{batch.title} <span className="text-sm font-normal opacity-70">({batch.age})</span></p>
                                                            <p className="text-xs uppercase font-bold tracking-wider opacity-60 text-[#2D0A0A]">{batch.subtitle}</p>
                                                        </div>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Parent Details */}
                                        <div className="space-y-6 pt-8 border-t-2 border-dashed border-gray-100">
                                            <div className="text-center mb-6">
                                                <div className="inline-block px-4 py-1 rounded-full bg-[#FFF9F0] border border-[#FBB201]/30 text-[#ea580c] text-sm font-bold tracking-wider mb-2">
                                                    PARENT / GUARDIAN INFO
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Name of the School *</label>
                                                    <input {...register("schoolName", { required: true })} type="text" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Parent's Email *</label>
                                                    {/* Disabled because it's sourced securely from session */}
                                                    <input {...register("email")} type="email" disabled className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 text-gray-400 bg-gray-50 font-medium cursor-not-allowed" />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Father's Name *</label>
                                                    <input {...register("fatherName", { required: true })} type="text" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Mother's Name *</label>
                                                    <input {...register("motherName", { required: true })} type="text" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Residential Address *</label>
                                                <textarea {...register("address", { required: true })} className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium h-24 resize-none"></textarea>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Father's Mobile *</label>
                                                    <div className="relative">
                                                        <input {...register("fatherMobile", { required: true })} type="tel" className="w-full pl-12 pr-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" placeholder="98765 43210" />
                                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🇮🇳</span>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Mother's Mobile *</label>
                                                    <div className="relative">
                                                            <input {...register("motherMobile", { required: true })} type="tel" className="w-full pl-12 pr-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" placeholder="98765 43210" />
                                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🇮🇳</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Pick up Info */}
                                        <div className="space-y-6 pt-8 border-t-2 border-dashed border-gray-100">
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Pickup Person Name *</label>
                                                    <input {...register("pickupName", { required: true })} type="text" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Pickup Contact Number *</label>
                                                    <input {...register("pickupContact", { required: true })} type="tel" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Relation to Child *</label>
                                                    <input {...register("pickupRelation", { required: true })} type="text" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Gita Life Interest */}
                                        <div className="space-y-4 pt-6 border-t-2 border-dashed border-gray-100 bg-[#FFF9F0] p-6 rounded-2xl border-l-4 border-l-[#FBB201]">
                                            <div className="flex items-start gap-3">
                                                <BookOpen className="text-[#FBB201] w-6 h-6 shrink-0 mt-1" />
                                                <div>
                                                    <h4 className="font-bold text-[#2D0A0A] text-lg">Parent's Course: "Gita Life"</h4>
                                                    <p className="text-sm text-gray-600 mb-4">Are you interested in attending our free simultaneous session for parents?</p>
                                                    <div className="space-y-3">
                                                        {["Both Parents are interested", "Only Single parent willing", "Not interested"].map((opt, i) => (
                                                            <label key={i} className="flex items-center gap-3 cursor-pointer">
                                                                <input {...register("gitaLifeInterest", { required: true })} type="radio" value={opt} className="w-4 h-4 text-[#FBB201] focus:ring-[#FBB201]" />
                                                                <span className="text-gray-700 font-medium text-sm">{opt}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Uploads */}
                                        <div className="space-y-4 pt-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide">Consent on Media Release *</label>
                                                <select {...register("mediaConsent", { required: true })} className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-[#FBB201] focus:ring-4 focus:ring-[#FBB201]/10 outline-none transition-all bg-[#FFF9F0]/50 font-medium">
                                                    <option value="Yes">Yes, I grant permission</option>
                                                    <option value="No">No, I do not</option>
                                                </select>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide block">Upload Child's Photo ID *</label>
                                                <input 
                                                    type="file" 
                                                    ref={childPhotoRef}
                                                    onChange={async (e) => {
                                                        const file = e.target.files?.[0];
                                                        if (file) {
                                                            const validation = validateImageFile(file);
                                                            if (!validation.isValid) {
                                                                setUploadError(validation.error);
                                                                setSelectedChildPhoto("");
                                                                setChildPhotoUrl("");
                                                                childPhotoFileRef.current = null;
                                                                e.target.value = ""; return;
                                                            }
                                                            setUploadError(""); setSelectedChildPhoto(file.name); setUploadProgress("Uploading child photo...");
                                                            childPhotoFileRef.current = file;
                                                            
                                                            const result = await uploadToCloudinary(file);
                                                            if (result.success) {
                                                                setChildPhotoUrl(result.url); setUploadProgress(""); setUploadError("");
                                                            } else {
                                                                setUploadError(result.error); setSelectedChildPhoto(""); setChildPhotoUrl("");
                                                                childPhotoFileRef.current = null; e.target.value = ""; setUploadProgress("");
                                                            }
                                                        }
                                                    }}
                                                    className="hidden" 
                                                    accept="image/jpeg,image/jpg,image/png,image/webp"
                                                    disabled={formStatus === "uploading" || formStatus === "submitting"}
                                                />
                                                <div onClick={() => childPhotoRef.current?.click()} className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                                                    <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                                                        {childPhotoUrl ? <CheckCircle className="text-green-500" size={20} /> : <Mail size={20} />}
                                                    </div>
                                                    <span className="text-sm font-bold text-gray-600 block">{selectedChildPhoto || "Click to upload or drag and drop"}</span>
                                                    <span className="text-xs text-gray-400">JPG, JPEG, PNG or WEBP (Max 3MB)</span>
                                                    {childPhotoUrl && <span className="text-xs text-green-600 font-semibold block mt-2">✓ Uploaded successfully</span>}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Payment Section */}
                                        <div className="space-y-6 pt-6 border-t-2 border-dashed border-[#FBB201]/30 bg-gradient-to-br from-[#FFF9F0] to-[#fff] p-8 rounded-2xl shadow-sm border border-[#FBB201]/20">
                                            <div className="flex items-center justify-between flex-wrap gap-4">
                                                <h3 className="text-2xl font-black text-[#2D0A0A] font-serif">Course Fee</h3>
                                                <div className="bg-[#2D0A0A] text-[#FBB201] text-xl font-bold px-6 py-2 rounded-lg shadow-lg transform -rotate-2">₹3000 / Semester</div>
                                            </div>
                                            
                                            <div className="flex flex-col md:flex-row items-center gap-6">
                                                <div className="p-3 bg-white border-2 border-gray-100 rounded-2xl shadow-sm">
                                                    <div className="w-32 h-32 bg-gray-100 flex items-center justify-center text-xs text-gray-500 rounded-xl relative overflow-hidden">
                                                        <Image src="/assets/icvk_payment_qr.jpg" alt="Payment QR" fill className="object-cover" />
                                                    </div>
                                                </div>
                                                <div className="flex-1 space-y-4">
                                                    <p className="text-gray-600 font-medium leading-relaxed">Scan the QR code to pay or use the link below. After payment, please upload the screenshot.</p>
                                                    <a href="https://rzp.io/rzp/wJkzDDO" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#ea580c] font-bold hover:underline gap-2">
                                                        Click here for Payment Gateway <ArrowRight size={16} />
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide block">Upload Payment Screenshot *</label>
                                                <input 
                                                    type="file" 
                                                    ref={paymentRef} 
                                                    onChange={async (e) => {
                                                        const file = e.target.files?.[0];
                                                        if (file) {
                                                            const validation = validateImageFile(file);
                                                            if (!validation.isValid) {
                                                                setUploadError(validation.error); setSelectedPaymentScreenshot(""); setPaymentScreenshotUrl("");
                                                                paymentFileRef.current = null; e.target.value = ""; return;
                                                            }
                                                            setUploadError(""); setSelectedPaymentScreenshot(file.name); setUploadProgress("Uploading payment screenshot...");
                                                            paymentFileRef.current = file;
                                                            
                                                            const result = await uploadToCloudinary(file);
                                                            if (result.success) {
                                                                setPaymentScreenshotUrl(result.url); setUploadProgress(""); setUploadError("");
                                                            } else {
                                                                setUploadError(result.error); setSelectedPaymentScreenshot(""); setPaymentScreenshotUrl("");
                                                                paymentFileRef.current = null; e.target.value = ""; setUploadProgress("");
                                                            }
                                                        }
                                                    }}
                                                    className="hidden" 
                                                    accept="image/jpeg,image/jpg,image/png,image/webp"
                                                    disabled={formStatus === "uploading" || formStatus === "submitting"}
                                                />
                                                <div onClick={() => paymentRef.current?.click()} className="border-2 border-dashed border-gray-300 rounded-xl p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer">
                                                        <button type="button" className="bg-[#2D0A0A] hover:bg-black text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-lg pointer-events-none">Choose File</button>
                                                        <div className="flex-1">
                                                            <span className="text-sm text-gray-500 italic block truncate max-w-[200px]">{selectedPaymentScreenshot || "No file chosen..."}</span>
                                                            {paymentScreenshotUrl && <span className="text-xs text-green-600 font-semibold block mt-1">✓ Uploaded successfully</span>}
                                                        </div>
                                                        {paymentScreenshotUrl && <CheckCircle className="text-green-500 w-5 h-5" />}
                                                </div>
                                            </div>
                                        </div>

                                        {uploadError && (
                                            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3">
                                                <AlertCircle className="text-red-500 w-5 h-5 shrink-0 mt-0.5" />
                                                <div><p className="text-red-800 font-semibold text-sm">Upload Error</p><p className="text-red-600 text-sm">{uploadError}</p></div>
                                            </div>
                                        )}

                                        {uploadProgress && (
                                            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 flex items-center gap-3">
                                                <div className="animate-spin"><Upload className="text-blue-500 w-5 h-5" /></div>
                                                <p className="text-blue-800 font-semibold text-sm">{uploadProgress}</p>
                                            </div>
                                        )}

                                        <button 
                                            disabled={!childPhotoUrl || !paymentScreenshotUrl || formStatus === "submitting"}
                                            type="submit" 
                                            className="w-full py-5 bg-gradient-to-r from-[#FBB201] to-[#ea580c] hover:from-[#e5a500] hover:to-[#c2410c] text-[#2D0A0A] rounded-2xl font-black text-xl shadow-[0_10px_30px_rgba(234,88,12,0.3)] hover:shadow-[0_15px_40px_rgba(234,88,12,0.4)] hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-8 transform"
                                        >
                                            {formStatus === "submitting" ? (
                                                <span className="flex items-center gap-2">Processing Registration...</span>
                                            ) : !childPhotoUrl || !paymentScreenshotUrl ? (
                                                <span className="flex items-center gap-2">
                                                    <Upload className="w-6 h-6" />
                                                    Upload Both Images First
                                                </span>
                                            ) : (
                                                <>COMPLETE REGISTRATION <ArrowRight className="w-6 h-6" /></>
                                            )}
                                        </button>
                                    </form>
                                </motion.div>
                            )}

                            {/* --- STEP: RENEW FORM --- */}
                            {step === "renew" && childToRenew && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                                        <button onClick={() => { setStep("dashboard"); }} className="text-gray-400 hover:text-[#ea580c] font-bold text-sm flex items-center gap-1 transition-colors">
                                            ← BACK TO DASHBOARD
                                        </button>
                                    </div>
                                    
                                    <div className="text-center mb-8">
                                        <div className="inline-block px-4 py-1 rounded-full bg-[#FFF9F0] border border-[#FBB201]/30 text-[#ea580c] text-sm font-bold tracking-wider mb-4">
                                            RE-REGISTER
                                        </div>
                                        <h3 className="text-3xl font-bold text-[#2D0A0A] font-serif">Re-Register {childToRenew.child_name}</h3>
                                        <p className="text-gray-600 mt-2">Almost there! Complete your payment to re-register for ICVK.</p>
                                    </div>

                                    <form onSubmit={onSubmitRenewal} className="space-y-8">
                                        <div className="flex flex-col md:flex-row items-center gap-6">
                                            <div className="p-3 bg-white border-2 border-gray-100 rounded-2xl shadow-sm">
                                                <div className="w-32 h-32 bg-gray-100 flex items-center justify-center text-xs text-gray-500 rounded-xl relative overflow-hidden">
                                                    <Image src="/assets/icvk_payment_qr.jpg" alt="Payment QR" fill className="object-cover" />
                                                </div>
                                            </div>
                                            <div className="flex-1 space-y-4">
                                                <p className="text-gray-600 font-medium leading-relaxed">Scan the QR code to pay or use the link below. After payment, please upload the screenshot.</p>
                                                <a href="https://rzp.io/rzp/wJkzDDO" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#ea580c] font-bold hover:underline gap-2">
                                                    Click here for Payment Gateway <ArrowRight size={16} />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wide block">Upload Payment Screenshot *</label>
                                            <input 
                                                type="file" 
                                                ref={paymentRef} 
                                                onChange={async (e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
                                                        const validation = validateImageFile(file);
                                                        if (!validation.isValid) {
                                                            setUploadError(validation.error); setSelectedPaymentScreenshot(""); setPaymentScreenshotUrl("");
                                                            paymentFileRef.current = null; e.target.value = ""; return;
                                                        }
                                                        setUploadError(""); setSelectedPaymentScreenshot(file.name); setUploadProgress("Uploading payment screenshot...");
                                                        paymentFileRef.current = file;
                                                        
                                                        const result = await uploadToCloudinary(file);
                                                        if (result.success) {
                                                            setPaymentScreenshotUrl(result.url); setUploadProgress(""); setUploadError("");
                                                        } else {
                                                            setUploadError(result.error); setSelectedPaymentScreenshot(""); setPaymentScreenshotUrl("");
                                                            paymentFileRef.current = null; e.target.value = ""; setUploadProgress("");
                                                        }
                                                    }
                                                }}
                                                className="hidden" 
                                                accept="image/jpeg,image/jpg,image/png,image/webp"
                                                disabled={formStatus === "uploading" || formStatus === "submitting"}
                                            />
                                            <div onClick={() => paymentRef.current?.click()} className="border-2 border-dashed border-gray-300 rounded-xl p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer">
                                                    <button type="button" className="bg-[#2D0A0A] hover:bg-black text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-lg pointer-events-none">Choose File</button>
                                                    <div className="flex-1">
                                                        <span className="text-sm text-gray-500 italic block truncate max-w-[200px]">{selectedPaymentScreenshot || "No file chosen..."}</span>
                                                        {paymentScreenshotUrl && <span className="text-xs text-green-600 font-semibold block mt-1">✓ Uploaded successfully</span>}
                                                    </div>
                                                    {paymentScreenshotUrl && <CheckCircle className="text-green-500 w-5 h-5" />}
                                            </div>
                                        </div>

                                        {uploadError && (
                                            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3">
                                                <AlertCircle className="text-red-500 w-5 h-5 shrink-0 mt-0.5" />
                                                <div><p className="text-red-800 font-semibold text-sm">Upload Error</p><p className="text-red-600 text-sm">{uploadError}</p></div>
                                            </div>
                                        )}

                                        {uploadProgress && (
                                            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 flex items-center gap-3">
                                                <div className="animate-spin"><Upload className="text-blue-500 w-5 h-5" /></div>
                                                <p className="text-blue-800 font-semibold text-sm">{uploadProgress}</p>
                                            </div>
                                        )}

                                        <button 
                                            disabled={!paymentScreenshotUrl || formStatus === "submitting"}
                                            type="submit" 
                                            className="w-full py-5 bg-gradient-to-r from-[#FBB201] to-[#ea580c] hover:from-[#e5a500] hover:to-[#c2410c] text-[#2D0A0A] rounded-2xl font-black text-xl shadow-[0_10px_30px_rgba(234,88,12,0.3)] hover:shadow-[0_15px_40px_rgba(234,88,12,0.4)] hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-8 transform"
                                        >
                                            {formStatus === "submitting" ? (
                                                <span className="flex items-center gap-2">Processing Re-Registration...</span>
                                            ) : !paymentScreenshotUrl ? (
                                                <span className="flex items-center gap-2">
                                                    <Upload className="w-6 h-6" />
                                                    Upload Screenshot First
                                                </span>
                                            ) : (
                                                <>COMPLETE RE-REGISTRATION <ArrowRight className="w-6 h-6" /></>
                                            )}
                                        </button>
                                    </form>
                                </motion.div>
                            )}

                            {/* --- STEP: SUCCESS --- */}
                            {step === "success" && (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner animate-bounce-short">
                                        <CheckCircle className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-4xl font-bold text-[#2D0A0A] mb-4 font-serif">Thank You! 🎉</h3>
                                    <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                                        Hare Krishna, you have successfully registered your child for the ICVK program! Our team will verify the payment and confirm shortly.
                                    </p>
                                    <button 
                                        onClick={() => {
                                            checkSession() // Go back to dashboard to see the new kid
                                        }}
                                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#FBB201] text-[#2D0A0A] font-bold rounded-xl shadow-md hover:shadow-lg transition-all"
                                    >
                                        <ArrowRight size={18} /> View Dashboard
                                    </button>
                                </motion.div>
                            )}

                        </motion.div>
                    </div>  
                </div>
             </section>

             {/* Footer Quote Section - Vibrant & Child Friendly with Petal Animation */}
             <section className="w-full mt-0 py-24 relative overflow-hidden bg-gradient-to-br from-[#FFB81C] via-[#FF9933] to-[#ea580c]">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.12] bg-repeat mix-blend-overlay"></div>
                
                {/* Glowing Orbs - More vibrant */}
                <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-[#fbbf24]/40 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-[#f97316]/40 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[150px]"></div>
                
                {/* Floating Sparkles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={`sparkle-${i}`}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 3 }}
                            className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                            style={{ left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%` }}
                        />
                    ))}
                </div>

                {/* Falling Petals Animation */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(25)].map((_, i) => (
                        <motion.div
                            key={`petal-${i}`}
                            initial={{ y: -30, x: Math.random() * 1200, rotate: 0, opacity: 0 }}
                            animate={{ y: 600, x: [null, Math.random() * 80 - 40], rotate: 360, opacity: [0, 0.8, 0.6, 0] }}
                            transition={{ duration: 10 + Math.random() * 8, repeat: Infinity, delay: Math.random() * 12, ease: "linear" }}
                            className="absolute top-0 w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-[#fff5e6] to-[#ffd4a8] rounded-tr-[100%] rounded-bl-[100%] shadow-md"
                            style={{ left: `${Math.random() * 100}%` }}
                        />
                    ))}
                </div>

                 <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto bg-white/95 backdrop-blur-xl rounded-[3rem] p-10 md:p-16 shadow-2xl border-2 border-white/60 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-transparent via-[#ea580c] to-transparent rounded-b-full"></div>
                        <div className="absolute top-4 left-4 w-12 h-12 border-l-4 border-t-4 border-[#FBB201]/30 rounded-tl-2xl"></div>
                        <div className="absolute top-4 right-4 w-12 h-12 border-r-4 border-t-4 border-[#FBB201]/30 rounded-tr-2xl"></div>
                        <div className="absolute bottom-4 left-4 w-12 h-12 border-l-4 border-b-4 border-[#FBB201]/30 rounded-bl-2xl"></div>
                        <div className="absolute bottom-4 right-4 w-12 h-12 border-r-4 border-b-4 border-[#FBB201]/30 rounded-br-2xl"></div>
                        
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Heart className="w-14 h-14 text-[#ea580c] mx-auto mb-6 fill-current drop-shadow-lg" />
                        </motion.div>
                        <h3 className="text-2xl md:text-4xl font-black text-[#2D0A0A] leading-tight font-serif italic mb-8">
                            "Our children are a gift given by the mercy of the Lord... They are delicate. Take care of them with love and devotion."
                        </h3>
                        <div className="inline-block px-8 py-3 border-2 border-[#ea580c]/40 rounded-full bg-gradient-to-r from-[#FFF9F0] to-[#fff5e6] shadow-sm">
                            <p className="text-lg text-[#ea580c] font-bold tracking-[0.15em] uppercase">- Srila Prabhupada</p>
                        </div>
                    </motion.div>
                 </div>
             </section>
             <FooterSection />
        </div>
    )
}

