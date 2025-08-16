import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();
    
    return (
        <div 
            onClick={() => navigate(`/description/${job._id}`)} 
            className='relative p-8 rounded-3xl bg-gradient-to-br from-white via-gray-50 to-indigo-50/30 border border-gray-200/60 shadow-lg hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-500 ease-out cursor-pointer group overflow-hidden backdrop-blur-sm'
        >
            {/* Animated background gradient overlay */}
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            
            {/* Subtle border glow effect */}
            <div className='absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10'></div>

            {/* Content wrapper */}
            <div className='relative z-10'>
                {/* Company Info */}
                <div className='mb-5'>
                    <h1 className='font-bold text-2xl text-gray-800 group-hover:text-indigo-700 transition-all duration-300 tracking-tight'>
                        {job?.company?.name}
                    </h1>
                    <p className='text-sm text-gray-500 font-medium mt-1 flex items-center gap-1'>
                        <svg className='w-4 h-4 text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd' />
                        </svg>
                        {job?.location}
                    </p>
                </div>

                {/* Job Title & Description */}
                <div className='mb-6'>
                    <h2 className='font-bold text-xl text-gray-900 group-hover:text-indigo-800 transition-all duration-300 mb-3 leading-tight'>
                        {job?.title}
                    </h2>
                    <p className='text-sm text-gray-600 leading-relaxed line-clamp-2 group-hover:text-gray-700 transition-colors duration-300'>
                        {job?.description}
                    </p>
                </div>

                {/* Enhanced Badges */}
                <div className='flex flex-wrap items-center gap-3'>
                    <Badge className='bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 font-bold px-4 py-2 rounded-full border border-blue-200/50 transition-all duration-300 group-hover:from-blue-200 group-hover:to-blue-100 group-hover:border-blue-300 group-hover:shadow-md group-hover:scale-105 text-xs uppercase tracking-wide'>
                        {job?.position} Positions
                    </Badge>
                    <Badge className='bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-700 font-bold px-4 py-2 rounded-full border border-emerald-200/50 transition-all duration-300 group-hover:from-emerald-200 group-hover:to-emerald-100 group-hover:border-emerald-300 group-hover:shadow-md group-hover:scale-105 text-xs uppercase tracking-wide'>
                        {job?.jobType}
                    </Badge>
                    <Badge className='bg-gradient-to-r from-violet-100 to-violet-50 text-violet-700 font-bold px-4 py-2 rounded-full border border-violet-200/50 transition-all duration-300 group-hover:from-violet-200 group-hover:to-violet-100 group-hover:border-violet-300 group-hover:shadow-md group-hover:scale-105 text-xs uppercase tracking-wide'>
                        ₹{Math.round(job?.salary / 100000)} LPA
                    </Badge>
                </div>
            </div>

            {/* Decorative corner accent */}
            <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-indigo-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
        </div>
    )
}

export default LatestJobCards