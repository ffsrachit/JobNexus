import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'
import { setSingleCompany } from '@/redux/companySlice'

const CompanyCreate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [companyName, setcompanyName] = useState("");
    const registerNewCompany = async () => {
        if (!companyName.trim()) {
            toast.error("Please enter a company name");
            return;
        }

        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register-company`, { companyName }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            if (res?.data?.success) {
                dispatch(setSingleCompany(res.data.data.company))
                toast.success(res.data.message);
                const companyId = res?.data?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    }
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg ring-1 ring-black/5 overflow-hidden">
                    {/* Header */}
                    <div className="bg-blue-400 p-8">

                        <h1 className="text-white font-extrabold text-3xl sm:text-4xl">Your Company Name</h1>
                        <p className="mt-2 text-sky-100 max-w-2xl">
                            Pick a name for your company — you can always change it later.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="p-8 sm:p-10">
                        <div className="sm:flex sm:items-start sm:gap-6">
                            <div className="flex-shrink-0">
                                {/* stylish placeholder badge */}
                                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center ring-1 ring-white/20">
                                    <span className="text-white/90 font-semibold">CJ</span>
                                </div>
                            </div>
                            <div className="mt-4 sm:mt-0 flex-1">
                                <Label className="block text-sm font-medium text-gray-700">
                                    Company Name
                                </Label>
                                <Input
                                    type="text"
                                    className="mt-2 w-full text-lg font-medium py-3 shadow-sm border-gray-200 rounded-lg placeholder:italic placeholder:text-slate-400"
                                    placeholder="JobHunt, Microsoft, Google, etc."
                                    onChange={(e) => setcompanyName(e.target.value)}
                                />
                                <p className="mt-2 text-sm text-gray-500">
                                    This is the public name that will appear on your company profile.
                                </p>
                            </div>
                        </div>

                        {/* Action row */}
                        <div className="mt-8 flex items-center justify-end gap-3">
                            <Button variant="outline" className="px-4 py-2 rounded-lg border-gray-200 hover:bg-gray-50"
                                onClick={() => navigate("/admin/companies")}>
                                Cancel
                            </Button>
                            <Button className="px-5 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition"
                                onClick={registerNewCompany}>
                                Continue
                            </Button>
                        </div>
                    </div>

                    {/* subtle footer */}
                    <div className="border-t border-gray-100 px-8 py-4 text-xs text-gray-400">
                        Tip: Use a short, memorable name — it'll help candidates find you faster.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyCreate
