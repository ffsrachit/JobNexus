import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCards = () => {
    return (
        <div className='p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-gray-200 shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out cursor-pointer group'>
            
            {/* Company Info */}
            <div>
                <h1 className='font-semibold text-xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300'>Company Name</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>

            {/* Job Title & Description */}
            <div className='mt-3'>
                <h1 className='font-bold text-lg text-gray-900 group-hover:text-blue-700 transition-colors duration-300'>Job Title</h1>
                <p className='text-sm text-gray-600 mt-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, maiores?
                </p>
            </div>

            {/* Badges */}
            <div className='flex flex-wrap items-center gap-3 mt-5'>
                <Badge className='bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full transition-all duration-300 group-hover:bg-blue-200'>
                    Positions
                </Badge>
                <Badge className='bg-red-100 text-red-500 font-semibold px-3 py-1 rounded-full transition-all duration-300 group-hover:bg-red-200'>
                    Part-Time
                </Badge>
                <Badge className='bg-purple-100 text-purple-500 font-semibold px-3 py-1 rounded-full transition-all duration-300 group-hover:bg-purple-200'>
                    24 LPA
                </Badge>
            </div>
        </div>
    )
}

export default LatestJobCards
