"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { LogOut, Download, Search, User, Filter, Eye, X, FileText } from "lucide-react"

interface Registration {
    _id: string
    childName: string
    dob: string
    age: number
    gender: string
    bloodGroup: string
    center: string
    batch: string
    schoolName: string
    fatherName: string
    motherName: string
    address: string
    fatherMobile: string
    motherMobile: string
    pickupName: string
    pickupContact: string
    pickupRelation: string
    gitaLifeInterest: string
    mediaConsent: boolean
    createdAt: string
    paymentScreenshotUrl: string
    childPhotoUrl: string
}

export default function AdminDashboard() {
    const [registrations, setRegistrations] = useState<Registration[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedRegistration, setSelectedRegistration] = useState<Registration | null>(null)
    const [previewImage, setPreviewImage] = useState<string | null>(null)
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem("adminToken")
        if (!token) {
            router.push("/admin/login")
            return
        }

        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/icvk/registrations`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if (res.ok) {
                    const data = await res.json()
                    setRegistrations(data)
                } else {
                    if (res.status === 401) {
                        localStorage.removeItem("adminToken")
                        router.push("/admin/login")
                    }
                }
            } catch (error) {
                console.error("Failed to fetch", error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [router])

    const handleLogout = () => {
        localStorage.removeItem("adminToken")
        router.push("/admin/login")
    }

    const handleExportCSV = () => {
        if (!registrations.length) return;

        const headers = [
            "Child Name", "DOB", "Age", "Gender", "Blood Group", 
            "Center", "Batch", "School", 
            "Father Name", "Father Mobile", "Mother Name", "Mother Mobile",
            "Address", "Pickup Name", "Pickup Contact", "Pickup Relation",
            "Gita Life Interest", "Media Consent", "Date Registered"
        ];

        const csvRows = [
            headers.join(","),
            ...filteredRegistrations.map(row => [
                `"${row.childName}"`, `"${new Date(row.dob).toLocaleDateString()}"`, row.age, row.gender, row.bloodGroup,
                row.center, row.batch, `"${row.schoolName}"`,
                `"${row.fatherName}"`, `"${row.fatherMobile}"`, `"${row.motherName}"`, `"${row.motherMobile}"`,
                `"${row.address.replace(/\n/g, ' ')}"`, `"${row.pickupName}"`, `"${row.pickupContact}"`, `"${row.pickupRelation}"`,
                row.gitaLifeInterest, row.mediaConsent ? "Yes" : "No", `"${new Date(row.createdAt).toLocaleDateString()}"`
            ].join(","))
        ];

        const csvString = csvRows.join("\n");
        const blob = new Blob([csvString], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `icvk_registrations_${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const filteredRegistrations = registrations.filter(r => 
        r.childName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.center.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.fatherMobile.includes(searchTerm)
    )

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-4 relative z-0">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">ICVK Registrations</h1>
                        <p className="text-gray-500">Manage student enrollments</p>
                    </div>
                    <div className="flex gap-4">
                        <button 
                            onClick={handleExportCSV}
                            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium shadow-lg shadow-green-600/20"
                        >
                            <Download size={18} /> Export CSV
                        </button>
                        <button 
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors font-medium"
                        >
                            <LogOut size={18} /> Logout
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">Total Students</p>
                        <h3 className="text-3xl font-bold text-gray-800 mt-2">{registrations.length}</h3>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">Mogappair</p>
                        <h3 className="text-3xl font-bold text-blue-600 mt-2">{registrations.filter(r => r.center === 'Mogappair').length}</h3>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">Thiruvanmiyur</p>
                        <h3 className="text-3xl font-bold text-green-600 mt-2">{registrations.filter(r => r.center === 'Thiruvanmiyur').length}</h3>
                    </div>
                </div>

                {/* Filters & Search */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input 
                            type="text" 
                            placeholder="Search by name, center, mobile..." 
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                        Showing {filteredRegistrations.length} students
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Student</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Details</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Parent Contact</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Payment</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {loading ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                            <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-2"></div>
                                            Loading data...
                                        </td>
                                    </tr>
                                ) : filteredRegistrations.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-gray-500">No registrations found.</td>
                                    </tr>
                                ) : (
                                    filteredRegistrations.map((reg) => (
                                        <tr key={reg._id} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div 
                                                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 hover:ring-offset-1 transition-all"
                                                        onClick={() => setPreviewImage(reg.childPhotoUrl)}
                                                    >
                                                        {reg.childPhotoUrl ? (
                                                            <img src={reg.childPhotoUrl} alt="Child" className="w-full h-full object-cover" />
                                                        ) : (
                                                            <User size={20} className="text-gray-400" />
                                                        )}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-gray-800">{reg.childName}</p>
                                                        <div className="flex gap-2 text-xs mt-1">
                                                             <span className={`px-2 py-0.5 rounded font-medium ${
                                                                reg.batch === 'Gopala' ? 'bg-blue-100 text-blue-800' :
                                                                reg.batch === 'Keshava' ? 'bg-green-100 text-green-800' :
                                                                reg.batch === 'Govinda' ? 'bg-orange-100 text-orange-800' :
                                                                'bg-purple-100 text-purple-800'
                                                            }`}>
                                                                {reg.batch}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600 space-y-1">
                                                <p><span className="font-medium">Age:</span> {reg.age} / {reg.gender}</p>
                                                <p><span className="font-medium">Center:</span> {reg.center}</p>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600 space-y-1">
                                                <p><span className="font-medium">F:</span> {reg.fatherName} ({reg.fatherMobile})</p>
                                                <p><span className="font-medium">M:</span> {reg.motherName}</p>
                                            </td>
                                            <td className="px-6 py-4">
                                                 <button 
                                                    onClick={() => setPreviewImage(reg.paymentScreenshotUrl)}
                                                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium bg-blue-50 px-2 py-1 rounded hover:bg-blue-100 transition-colors"
                                                >
                                                    <FileText size={14} /> View Receipt
                                                </button>
                                            </td>
                                            <td className="px-6 py-4">
                                                <button 
                                                    onClick={() => setSelectedRegistration(reg)}
                                                    className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                                                    title="View Full Details"
                                                >
                                                    <Eye size={20} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            {/* Detail Modal */}
            {selectedRegistration && (
                <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-200">
                        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center z-10">
                            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                                <User className="text-blue-600" />
                                {selectedRegistration.childName}'s Details
                            </h2>
                            <button 
                                onClick={() => setSelectedRegistration(null)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        
                        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Left Col: Child Info */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">Child Information</h3>
                                    <div className="space-y-3">
                                        <DetailRow label="Full Name" value={selectedRegistration.childName} />
                                        <DetailRow label="Date of Birth" value={new Date(selectedRegistration.dob).toLocaleDateString()} />
                                        <DetailRow label="Age" value={selectedRegistration.age} />
                                        <DetailRow label="Gender" value={selectedRegistration.gender} />
                                        <DetailRow label="Blood Group" value={selectedRegistration.bloodGroup} />
                                        <DetailRow label="School Name" value={selectedRegistration.schoolName} />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">Course Details</h3>
                                    <div className="space-y-3">
                                        <DetailRow label="Center" value={selectedRegistration.center} />
                                        <DetailRow label="Batch" value={selectedRegistration.batch} />
                                        <DetailRow label="Gita Life Interest" value={selectedRegistration.gitaLifeInterest} />
                                        <DetailRow label="Media Consent" value={selectedRegistration.mediaConsent ? "Yes" : "No"} />
                                    </div>
                                </div>
                            </div>

                            {/* Right Col: Parent Info */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">Parent Information</h3>
                                    <div className="space-y-3">
                                        <DetailRow label="Father's Name" value={selectedRegistration.fatherName} />
                                        <DetailRow label="Father's Mobile" value={selectedRegistration.fatherMobile} />
                                        <DetailRow label="Mother's Name" value={selectedRegistration.motherName} />
                                        <DetailRow label="Mother's Mobile" value={selectedRegistration.motherMobile} />
                                        <DetailRow label="Address" value={selectedRegistration.address} />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">Pickup Info</h3>
                                    <div className="space-y-3">
                                        <DetailRow label="Pickup Person" value={selectedRegistration.pickupName} />
                                        <DetailRow label="Contact" value={selectedRegistration.pickupContact} />
                                        <DetailRow label="Relation" value={selectedRegistration.pickupRelation} />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">Documents</h3>
                                    <div className="flex gap-4">
                                        <button 
                                            onClick={() => setPreviewImage(selectedRegistration.childPhotoUrl)}
                                            className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center gap-2 text-sm font-medium"
                                        >
                                            <User size={16} /> Child Photo
                                        </button>
                                        <button 
                                            onClick={() => setPreviewImage(selectedRegistration.paymentScreenshotUrl)}
                                            className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center gap-2 text-sm font-medium"
                                        >
                                            <FileText size={16} /> Payment Receipt
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Image Preview Modal */}
            {previewImage && (
                <div 
                    className="fixed inset-0 z-[110] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
                    onClick={() => setPreviewImage(null)}
                >
                    <button 
                         className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                         onClick={() => setPreviewImage(null)}
                    >
                        <X size={40} />
                    </button>
                    <img 
                        src={previewImage} 
                        alt="Preview" 
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()} 
                    />
                </div>
            )}

            <FooterSection />
        </div>
    )
}

function DetailRow({ label, value }: { label: string, value: string | number }) {
    return (
        <div className="grid grid-cols-3">
            <span className="text-gray-500 font-medium text-sm">{label}</span>
            <span className="text-gray-900 font-medium col-span-2">{value}</span>
        </div>
    )
}
