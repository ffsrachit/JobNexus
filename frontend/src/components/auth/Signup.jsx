import React, { useState } from 'react'
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
import { Loader2 } from 'lucide-react'




const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });

    const {loading} =useSelector(store=>store.auth);
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
        } finally{
            dispatch(setLoading(false));
        }
    }
    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-blue-100 to-blue-200 font-sans">


            <Navbar />

            <div className='flex items-center justify-center max-w-4xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-4xl p-4 my-10 bg-white shadow-md'>
                    <h1 className='font-extrabold text-4xl mb-5 w-full text-center mt-2 text-blue-400'>Sign Up !</h1>
                    <h1 className='text-base text-muted-foreground w-full text-center my-4'>

                        Join our community and unlock new opportunities!
                    </h1>

                    <div className="space-y-4 mb-5 flex flex-col items-center">
                        <Input className='border rounded-xl '
                            type="text"
                            value={input.fullname}
                            name="fullname"
                            onChange={changeEventHandler}
                            placeholder="Full Name" />

                        <Input className='border rounded-xl '
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="Email" />

                        <Input className='border rounded-xl '
                            type="tel"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
                            placeholder="Phone Number" />

                        <Input className='border rounded-xl '
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="Password" />

                    </div>

                    <div className="my-5 ">
                        <Label className="block mb-2 text-gray-700 mx-1.5 " >Role</Label>
                        <RadioGroup className='flex items-center gap-4 mx-1.5'>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    id="Student"
                                    value="Student"
                                    checked={input.role === 'Student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer accent-blue-500"
                                />
                                <Label htmlFor="Student">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    id="Recruiter"
                                    value="Recruiter"
                                    checked={input.role === 'Recruiter'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer accent-blue-500"
                                />
                                <Label htmlFor="Recruiter">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className='flex items-center gap-2 mb-4'>
                        <Label className="text-gray-700 mx-1.5">Profile</Label>
                        <Input accept="image/*"
                            type="file"
                            onChange={changeFileHandler}
                            className="cursor-pointer rounded-xl" />
                    </div>

                    {
                        loading ? <Button className="w-full my-4 ">
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
                        </Button> :
                        <Button type="submit" className="w-full my-4 rounded-xl">
                       SignUp
                    </Button>
                    }

                    <div className="w-full text-center mt-2 text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-400 hover:underline">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
