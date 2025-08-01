import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'


const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    })

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value }); {/*yha pr ve value dalenge jo upar se ayengi yaani input se*/ }
    }

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(input)

    }
    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-blue-100 to-blue-200 font-sans">


            <Navbar />

            <div className='flex items-center justify-center max-w-4xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-4xl p-4 my-10 bg-white shadow-md'>
                    <h1 className='font-extrabold text-4xl mb-5 w-full text-center mt-2 text-blue-400'>Sign Up !</h1>
                    <h1 className='text-md text-muted-foreground w-full text-center mt-2 my-4 text-gray-600'>
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

                    <Button type="submit" className="w-full my-4 rounded-xl">
                        Signup
                    </Button>

                    <div className="w-full text-center mt-2 text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
