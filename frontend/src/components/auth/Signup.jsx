import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2, User, Mail, Phone, Lock, Upload } from 'lucide-react'

const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });

    const { loading, user} = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value }); {/*yha pr ve value dalenge jo upar se ayengi yaani input se*/ }
    }

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }
    
    const submitHandler = async (e) => {
        e.preventDefault();

        if (!input.fullname) {
            toast.error("Full name is required");
            return;
        }

        if (!input.email) {
            toast.error("Email is required");
            return;
        }

        if (!input.phoneNumber) {
            toast.error("Phone number is required");
            return;
        }

        if (!input.password) {
            toast.error("Password is required");
            return;
        }

        if (!input.role) {
            toast.error("Role is required");
            return;
        }
        const formData = new FormData();
        formData.append("fullname", input.fullname)
        formData.append("email", input.email)
        formData.append("phoneNumber", input.phoneNumber)
        formData.append("password", input.password)
        formData.append("role", input.role)
        if (input.file) {
            formData.append("file", input.file)
        }
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.error("Signup error:", error);
            toast.error(error?.response?.data?.message || "Registration failed");
        } finally {
            dispatch(setLoading(false));
        }
    }
    
    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-blue-100 to-blue-200 font-sans">
            <Navbar />

            <div className='flex items-center justify-center max-w-5xl mx-auto px-4 py-8'>
                <div className="w-full max-w-lg">
                    <form 
                        onSubmit={submitHandler} 
                        className='w-full bg-white/80 backdrop-blur-lg border border-white/20 rounded-3xl p-8 my-10 shadow-2xl shadow-blue-100/50 hover:shadow-3xl transition-all duration-300'
                    >
                        {/* Header Section */}
                        <div className="text-center mb-8">
                            <h1 className='font-bold text-5xl mb-3 text-blue-500 font-sans'>
                                Sign Up !
                            </h1>
                            <p className='text-gray-600 text-lg font-sans'>
                                Join our community and unlock new opportunities!
                            </p>
                            <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-3"></div>
                        </div>

                        {/* Input Fields */}
                        <div className="space-y-6 mb-8">
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 h-6 w-6 group-focus-within:text-blue-600 transition-colors duration-300 drop-shadow-sm" />
                                <Input 
                                    className='w-full h-14 pl-12 pr-4 border-2 border-gray-200 rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 placeholder:text-gray-400 text-gray-700 font-sans'
                                    type="text"
                                    value={input.fullname}
                                    name="fullname"
                                    onChange={changeEventHandler}
                                    placeholder="Full Name" 
                                />
                            </div>

                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500 h-6 w-6 group-focus-within:text-green-600 transition-colors duration-300 drop-shadow-sm" />
                                <Input 
                                    className='w-full h-14 pl-12 pr-4 border-2 border-gray-200 rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 placeholder:text-gray-400 text-gray-700 font-sans'
                                    type="email"
                                    value={input.email}
                                    name="email"
                                    onChange={changeEventHandler}
                                    placeholder="Email" 
                                />
                            </div>

                            <div className="relative group">
                                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-500 h-6 w-6 group-focus-within:text-purple-600 transition-colors duration-300 drop-shadow-sm" />
                                <Input 
                                    className='w-full h-14 pl-12 pr-4 border-2 border-gray-200 rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 placeholder:text-gray-400 text-gray-700 font-sans'
                                    type="tel"
                                    value={input.phoneNumber}
                                    name="phoneNumber"
                                    onChange={changeEventHandler}
                                    placeholder="Phone Number" 
                                />
                            </div>

                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-500 h-6 w-6 group-focus-within:text-red-600 transition-colors duration-300 drop-shadow-sm" />
                                <Input 
                                    className='w-full h-14 pl-12 pr-4 border-2 border-gray-200 rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 placeholder:text-gray-400 text-gray-700 font-sans'
                                    type="password"
                                    value={input.password}
                                    name="password"
                                    onChange={changeEventHandler}
                                    placeholder="Password" 
                                />
                            </div>
                        </div>

                        {/* Role Selection */}
                        <div className="mb-8">
                            <Label className="block mb-4 text-gray-700 font-semibold text-lg font-sans">
                                Select Your Role
                            </Label>
                            <RadioGroup className='grid grid-cols-2 gap-4'>
                                <div className="relative">
                                    <Input
                                        type="radio"
                                        name="role"
                                        id="Student"
                                        value="Student"
                                        checked={input.role === 'Student'}
                                        onChange={changeEventHandler}
                                        className="sr-only peer"
                                    />
                                    <Label 
                                        htmlFor="Student"
                                        className="flex items-center justify-center h-12 px-4 border-2 border-gray-200 rounded-xl bg-white/50 cursor-pointer transition-all duration-300 hover:border-blue-500 hover:bg-blue-50/50 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-blue-200/50 font-sans text-gray-700 peer-checked:font-semibold"
                                    >
                                        Student
                                    </Label>
                                </div>
                                <div className="relative">
                                    <Input
                                        type="radio"
                                        name="role"
                                        id="Recruiter"
                                        value="Recruiter"
                                        checked={input.role === 'Recruiter'}
                                        onChange={changeEventHandler}
                                        className="sr-only peer"
                                    />
                                    <Label 
                                        htmlFor="Recruiter"
                                        className="flex items-center justify-center h-12 px-4 border-2 border-gray-200 rounded-xl bg-white/50 cursor-pointer transition-all duration-300 hover:border-blue-500 hover:bg-blue-50/50 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-blue-200/50 font-sans text-gray-700 peer-checked:font-semibold"
                                    >
                                        Recruiter
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>

                        {/* File Upload */}
                        <div className='mb-8'>
                            <Label className="block mb-4 text-gray-700 font-semibold text-lg font-sans">Profile Picture</Label>
                            <div className="relative group">
                                <Upload className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500 h-6 w-6 z-10 pointer-events-none group-focus-within:text-orange-600 transition-colors duration-300 drop-shadow-sm" />
                                <div className="relative overflow-hidden">
                                    <Input 
                                        accept="image/*"
                                        type="file"
                                        onChange={changeFileHandler}
                                        className="w-full h-14 pl-12 pr-4 border-2 border-gray-200 rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 font-sans cursor-pointer text-transparent file:absolute file:inset-0 file:w-full file:h-full file:cursor-pointer file:opacity-0"
                                    />
                                    <div className="absolute inset-0 flex items-center pl-12 pr-4 pointer-events-none">
                                        <span className="text-gray-500 font-sans">
                                            {input.file ? input.file.name : "Choose profile picture..."}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        {loading ? 
                            <Button 
                                disabled
                                className="w-full h-14 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-200/50 transition-all duration-300 text-lg font-sans"
                            >
                                <Loader2 className='mr-3 h-5 w-5 animate-spin' /> 
                                Please wait
                            </Button> :
                            <Button 
                                type="submit" 
                                className="w-full h-14 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50 transition-all duration-300 transform hover:-translate-y-0.5 text-lg font-sans"
                            >
                                SignUp
                            </Button>
                        }

                        {/* Footer Link */}
                        <div className="text-center mt-8 pt-6 border-t border-gray-100">
                            <p className="text-gray-600 font-sans">
                                Already have an account?{' '}
                                <Link 
                                    to="/login" 
                                    className="text-blue-500 hover:text-blue-600 font-semibold hover:underline transition-colors duration-300 font-sans"
                                >
                                    Login
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup