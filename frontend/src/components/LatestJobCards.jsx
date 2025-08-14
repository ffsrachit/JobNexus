import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'



const LatestJobCards = ({ job }) => {
    const navigate= useNavigate();
    
    return (
        <div onClick={()=>navigate(`/description/${job._id}`)} className='p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-gray-200 shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out cursor-pointer group'
               >

            {/* Company Info */}
            <div>
                <h1 className='font-semibold text-xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300'>{job?.company?.name}</h1>
                <p className='text-sm text-gray-500'>{job?.location}</p>
            </div>

            {/* Job Title & Description */}
            <div className='mt-3'>
                <h1 className='font-bold text-lg text-gray-900 group-hover:text-blue-700 transition-colors duration-300'>{job?.title}</h1>
                <p className='text-sm text-gray-600 mt-1'>
                    {job?.description}
                </p>
            </div>

            {/* Badges */}
            <div className='flex flex-wrap items-center gap-3 mt-5'>
                <Badge className='bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full transition-all duration-300 group-hover:bg-blue-200'>
                    {job?.position} Postions
                </Badge>
                <Badge className='bg-red-100 text-red-500 font-semibold px-3 py-1 rounded-full transition-all duration-300 group-hover:bg-red-200'>
                    {job?.jobType}
                </Badge>
                <Badge className='bg-purple-100 text-purple-500 font-semibold px-3 py-1 rounded-full transition-all duration-300 group-hover:bg-purple-200'>
                    {Math.round(job?.salary / 100000)} LPA
                </Badge>
            </div>
        </div>
    )
}

export default LatestJobCards
