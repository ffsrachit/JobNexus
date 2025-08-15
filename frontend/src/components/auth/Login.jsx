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
import { setLoading, setUser } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    })
    const { loading, user } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });
            if (res.data.success) {
                dispatch(setUser(res.data.data.user));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
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

            <div className='flex items-center justify-center max-w-5xl mx-auto px-4 py-12'>
                <div className="w-full max-w-md">
                    <form 
                        onSubmit={submitHandler} 
                        className='w-full bg-white/80 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl shadow-blue-100/50 hover:shadow-3xl transition-all duration-300'
                    >
                        {/* Header Section */}
                        <div className="text-center mb-8">
                            <h1 className='font-bold text-5xl mb-3 text-blue-500 font-sans'>
                                Login
                            </h1>
                            <p className='text-gray-600 text-lg font-sans'>
                                Welcome Back!
                            </p>
                            <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-3"></div>
                        </div>

                        {/* Input Fields */}
                        <div className="space-y-6 mb-8">
                            <div className="relative group">
                                <Input 
                                    className='w-full h-14 px-4 border-2 border-gray-200 rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 focus:border-blue-400 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 placeholder:text-gray-400 text-gray-700 font-sans'
                                    type="email"
                                    value={input.email}
                                    name="email"
                                    onChange={changeEventHandler}
                                    placeholder="Enter your email" 
                                />
                            </div>

                            <div className="relative group">
                                <Input 
                                    className='w-full h-14 px-4 border-2 border-gray-200 rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 focus:border-blue-400 focus:bg-white focus:shadow-lg focus:shadow-blue-100/50 placeholder:text-gray-400 text-gray-700 font-sans'
                                    type="password"
                                    value={input.password}
                                    name="password"
                                    onChange={changeEventHandler}
                                    placeholder="Enter your password" 
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
                                        className="flex items-center justify-center h-12 px-4 border-2 border-gray-200 rounded-xl bg-white/50 cursor-pointer transition-all duration-300 hover:border-blue-400 hover:bg-blue-50/50 peer-checked:border-blue-400 peer-checked:bg-blue-400 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-blue-200/50 font-sans text-gray-700 peer-checked:font-semibold"
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
                                        className="flex items-center justify-center h-12 px-4 border-2 border-gray-200 rounded-xl bg-white/50 cursor-pointer transition-all duration-300 hover:border-blue-400 hover:bg-blue-50/50 peer-checked:border-blue-400 peer-checked:bg-blue-400 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-blue-200/50 font-sans text-gray-700 peer-checked:font-semibold"
                                    >
                                        Recruiter
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>

                        {/* Submit Button */}
                        {loading ? 
                            <Button 
                                disabled
                                className="w-full h-14 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-2xl shadow-lg shadow-blue-200/50 transition-all duration-300 text-lg font-sans"
                            >
                                <Loader2 className='mr-3 h-5 w-5 animate-spin' /> 
                                Please wait
                            </Button> :
                            <Button 
                                type="submit" 
                                className="w-full h-14 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50 transition-all duration-300 transform hover:-translate-y-0.5 text-lg font-sans"
                            >
                                Login
                            </Button>
                        }

                        {/* Footer Link */}
                        <div className="text-center mt-8 pt-6 border-t border-gray-100">
                            <p className="text-gray-600 font-sans">
                                Don't have an account?{' '}
                                <Link 
                                    to="/signup" 
                                    className="text-blue-400 hover:text-blue-500 font-semibold hover:underline transition-colors duration-300 font-sans"
                                >
                                    Signup
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login