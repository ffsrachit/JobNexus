import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { LogOut, User2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser  } from '@/redux/authSlice'
import { toast } from 'sonner'

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser (null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    return (
        <nav className='bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-lg sticky top-0 z-50'>
            <div className='flex items-center justify-between mx-auto h-20 max-w-7xl px-6'>
                {/* Logo Section */}
                <div className="group cursor-pointer">
                    <h1 className='text-3xl font-bold text-gray-800 group-hover:scale-105 transition-transform duration-200'>
                        Job<span className='text-blue-600 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent'>Nexus</span>
                    </h1>
                </div>

                {/* Navigation & User Actions */}
                <div className='flex items-center gap-10'>
                    {/* Navigation Links */}
                    <ul className="hidden md:flex font-medium items-center gap-8">
                        {user && user?.role === "Recruiter" ? (
                            <>
                                <li>
                                    <Link 
                                        to="/admin/companies" 
                                        className='relative text-gray-700 hover:text-blue-600 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full'
                                    >
                                        Companies
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/admin/jobs" 
                                        className='relative text-gray-700 hover:text-blue-600 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full'
                                    >
                                        Jobs
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link 
                                        to="/" 
                                        className='relative text-gray-700 hover:text-blue-600 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full'
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/jobs" 
                                        className='relative text-gray-700 hover:text-blue-600 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full'
                                    >
                                        Jobs
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/browse" 
                                        className='relative text-gray-700 hover:text-blue-600 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full'
                                    >
                                        Browse
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>

                    {/* Authentication Buttons or User Profile */}
                    {
                        !user ? (
                            <div className='flex items-center gap-3'>
                                <Link to="/login">
                                    <Button 
                                        variant="outline" 
                                        className='text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900 transition-all duration-200 px-6 py-2.5 font-medium shadow-sm'
                                    >
                                        Login
                                    </Button>
                                </Link>
                                <Link to="/signup">
                                    <Button 
                                        className='bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 px-6 py-2.5 font-medium transform hover:scale-105'
                                    >
                                        Sign Up
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <div className="relative group">
                                        <Avatar className="cursor-pointer w-12 h-12 ring-2 ring-transparent hover:ring-blue-500 hover:ring-offset-2 transition-all duration-200 transform hover:scale-110">
                                            <AvatarImage src={user?.profile?.profilePhoto} alt="User Profile" className="object-cover" />
                                        </Avatar>
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                                    </div>
                                </PopoverTrigger>
                                <PopoverContent className='w-80 p-0 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden'>
                                    {/* Profile Header */}
                                    <div className='bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-gray-100'>
                                        <div className='flex gap-4 items-center'>
                                            <Avatar className="w-16 h-16 cursor-pointer ring-3 ring-blue-200 hover:ring-blue-300 transition-all duration-200">
                                                <AvatarImage
                                                    src={user?.profile?.profilePhoto}
                                                    alt="User Profile"
                                                    className="object-cover"
                                                    onClick={
                                                        user?.role === "Student"
                                                            ? () => navigate("/profile")
                                                            : undefined
                                                    }
                                                />
                                            </Avatar>
                                            <div className="flex-1 min-w-0">
                                                <h4 className='font-semibold text-lg text-gray-800 truncate'>{user?.fullname}</h4>
                                                <p className='text-sm text-gray-600 mt-1 line-clamp-2'>{user?.profile?.bio}</p>
                                                <div className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-2'>
                                                    {user?.role}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Items */}
                                    <div className='p-4 space-y-2'>
                                        {user?.role === "Student" && (
                                            <div className='group'>
                                                <Link to='/profile' className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-blue-50 transition-all duration-200 cursor-pointer group-hover:scale-105">
                                                    <div className="p-2 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-200">
                                                        <User2 size={18} />
                                                    </div>
                                                    <span className='text-gray-700 font-medium group-hover:text-blue-700'>View Profile</span>
                                                </Link>
                                            </div>
                                        )}
                                        
                                        <div className='group'>
                                            <button 
                                                onClick={logoutHandler}
                                                className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-red-50 transition-all duration-200 cursor-pointer group-hover:scale-105"
                                            >
                                                <div className="p-2 rounded-lg bg-red-100 text-red-600 group-hover:bg-red-200">
                                                    <LogOut size={18} />
                                                </div>
                                                <span className='text-gray-700 font-medium group-hover:text-red-700'>Logout</span>
                                            </button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;