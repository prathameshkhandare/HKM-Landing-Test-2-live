"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { Lock } from "lucide-react"

export default function AdminLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()

    useEffect(() => {
        console.log("AdminLogin Component Mounted");
    }, []);

    const handleLogin = async (e: React.FormEvent | React.MouseEvent) => {
        e.preventDefault()
        console.log("Login form submitted"); // DEBUG
        console.log("Email:", email, "Password:", password); // DEBUG
        setError(""); // Clear previous errors
        try {
            const res = await fetch("https://hkmbackend.itsupport-8ce.workers.dev/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            })

            const data = await res.json()

            if (res.ok) {
                localStorage.setItem("adminToken", data.token)
                router.push("/admin/dashboard")
            } else {
                setError(data.message || "Login failed")
            }
        } catch (err) {
            console.error("Login Error:", err); // DEBUG
            setError("Connection error")
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-4 flex justify-center items-center min-h-[80vh] relative z-40">
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100 relative z-50">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lock size={32} />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800">Admin Portal</h1>
                        <p className="text-gray-500">Secure Access Only</p>
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm text-center font-medium">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                                placeholder="admin@hkm.com"
                                required 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                                placeholder="••••••••"
                                required 
                            />
                        </div>
                        <button 
                            type="button"
                            onClick={handleLogin}
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-600/20 active:scale-95 transform"
                        >
                            Login to Dashboard
                        </button>
                    </form>
                </div>
            </div>
            <FooterSection />
        </div>
    )
}
