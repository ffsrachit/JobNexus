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

            <div className='flex items-center justify-center max-w-4xl mx-auto my-20'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-4xl p-4 my-10 bg-white shadow-md'>
                    <h1 className='font-extrabold text-4xl mb-5 w-full text-center mt-2 text-blue-400'>Login</h1>
                    <h1 className='text-base text-muted-foreground w-full text-center my-4'>
                        Welcome Back!
                    </h1>

                    <div className="space-y-4 mb-5 flex flex-col items-center">
                        <Input className='border rounded-xl '
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="Email" />

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


                    {
                        loading ? <Button className="w-full my-4 ">
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
                        </Button> :
                            <Button type="submit" className="w-full my-4 rounded-xl">
                                Login
                            </Button>
                    }




                    <div className="w-full text-center mt-2 text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-blue-400 hover:underline">
                            Signup
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login