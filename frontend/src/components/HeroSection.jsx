import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query))
        navigate("/browse");
    }

    return (
        <div className='min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 flex items-center justify-center px-4'>
            <div className='text-center max-w-4xl mx-auto'>
                <div className='flex flex-col gap-8 my-10'>
                    {/* Badge */}
                    <div className="flex justify-center">
                        <span className='bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 rounded-full text-white font-semibold text-lg shadow-lg shadow-blue-200/50 backdrop-blur-sm border border-blue-300/20 font-sans'>
                            JobNexus - Connect with Opportunities
                        </span>
                    </div>
                    
                    {/* Main Heading */}
                    <div className="space-y-4">
                        <h1 className='text-6xl md:text-7xl font-bold text-gray-800 leading-tight font-sans'>
                            Search, Apply &
                            <br /> 
                            Get Your <span className='bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent'>Dream Jobs</span>
                        </h1>
                        <p className='text-xl md:text-2xl text-gray-600 font-sans max-w-2xl mx-auto leading-relaxed'>
                            Start your journey with us—search for jobs and apply in just a few clicks!
                        </p>
                    </div>
                    
                    {/* Search Bar */}
                    <div className='flex justify-center mt-8'>
                        <div className='flex w-full max-w-2xl bg-white/80 backdrop-blur-lg shadow-2xl shadow-blue-100/50 border border-white/20 rounded-full items-center gap-2 p-2 hover:shadow-3xl transition-all duration-300'>
                            <input
                                type='text'
                                placeholder='Find your dream jobs...'
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className='outline-none border-none w-full pl-6 pr-4 py-4 bg-transparent text-gray-700 placeholder:text-gray-400 text-lg font-sans'
                                onKeyPress={(e) => e.key === 'Enter' && searchJobHandler()}
                            />
                            <Button 
                                onClick={searchJobHandler} 
                                className='h-12 px-8 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-full shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50 transition-all duration-300 transform hover:-translate-y-0.5 font-sans'
                            >
                                <Search className='h-5 w-5 mr-2' />
                                Search
                            </Button>
                        </div>
                    </div>
                    
                    {/* Additional Stats or Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-blue-100/50 border border-white/20 hover:shadow-xl transition-all duration-300">
                            <div className="text-3xl font-bold text-blue-500 mb-2 font-sans">10K+</div>
                            <div className="text-gray-600 font-semibold font-sans">Active Jobs</div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-blue-100/50 border border-white/20 hover:shadow-xl transition-all duration-300">
                            <div className="text-3xl font-bold text-green-500 mb-2 font-sans">5K+</div>
                            <div className="text-gray-600 font-semibold font-sans">Companies</div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-blue-100/50 border border-white/20 hover:shadow-xl transition-all duration-300">
                            <div className="text-3xl font-bold text-purple-500 mb-2 font-sans">50K+</div>
                            <div className="text-gray-600 font-semibold font-sans">Success Stories</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection