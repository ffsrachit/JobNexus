import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
    const navigate = useNavigate();
    
    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();

        const TimeDifference = currentTime - createdAt
        return Math.floor(TimeDifference / (1000 * 24 * 60 * 60));
    }

    return (
        <div className='relative p-6 rounded-3xl bg-gradient-to-br from-white via-slate-50/50 to-indigo-50/30 border border-gray-200/60 shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 ease-out group w-full overflow-hidden backdrop-blur-sm'>
            
            {/* Animated background gradient overlay */}
            <div className='absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            
            {/* Subtle border glow effect */}
            <div className='absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-400/20 via-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10'></div>

            {/* Content wrapper */}
            <div className="relative z-10">
                {/* Header with timestamp and bookmark */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <p className="text-sm font-medium text-gray-600 bg-gray-100/80 px-3 py-1 rounded-full">
                            {daysAgoFunction(job?.createdAt) === 0
                                ? "Today"
                                : `${daysAgoFunction(job?.createdAt)} days ago`}
                        </p>
                    </div>
                    <Button 
                        variant="outline" 
                        className="rounded-full border-gray-300 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 group-hover:shadow-md" 
                        size="icon"
                    >
                        <Bookmark className="w-4 h-4" />
                    </Button>
                </div>

                {/* Company info section */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                        <Avatar className="w-12 h-12 border-2 border-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                            <AvatarImage src={job?.company?.logo} className="object-cover" />
                        </Avatar>
                        {/* Avatar glow effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-blue-400 opacity-0 group-hover:opacity-20 blur-md transition-all duration-500"></div>
                    </div>
                    <div className="flex-1">
                        <h1 className="font-bold text-lg text-gray-800 group-hover:text-indigo-700 transition-colors duration-300 tracking-tight">
                            {job?.company?.name}
                        </h1>
                        <p className="text-sm text-gray-500 font-medium mt-1 flex items-center gap-2">
                            <svg className='w-4 h-4 text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd' />
                            </svg>
                            {job?.location}
                        </p>
                    </div>
                </div>

                {/* Job details section */}
                <div className="mb-5">
                    <h2 className="font-bold text-lg text-gray-900 group-hover:text-indigo-800 transition-colors duration-300 mb-2 leading-tight">
                        {job?.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 line-clamp-3">
                        {job?.description}
                    </p>
                </div>

                {/* Enhanced badges section */}
                <div className='flex flex-wrap items-center gap-3 mb-5'>
                    <Badge className='bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 font-bold px-4 py-2 rounded-full border border-blue-200/50 transition-all duration-300 group-hover:from-blue-200 group-hover:to-blue-100 group-hover:border-blue-300 group-hover:shadow-md hover:scale-105 text-xs uppercase tracking-wide'>
                        {job?.position} Positions
                    </Badge>
                    <Badge className='bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-700 font-bold px-4 py-2 rounded-full border border-emerald-200/50 transition-all duration-300 group-hover:from-emerald-200 group-hover:to-emerald-100 group-hover:border-emerald-300 group-hover:shadow-md hover:scale-105 text-xs uppercase tracking-wide'>
                        {job?.jobType}
                    </Badge>
                    <Badge className='bg-gradient-to-r from-violet-100 to-violet-50 text-violet-700 font-bold px-4 py-2 rounded-full border border-violet-200/50 transition-all duration-300 group-hover:from-violet-200 group-hover:to-violet-100 group-hover:border-violet-300 group-hover:shadow-md hover:scale-105 text-xs uppercase tracking-wide'>
                        ₹{Math.round(job?.salary / 100000)} LPA
                    </Badge>
                </div>

                {/* Enhanced action buttons */}
                <div className="flex items-center gap-4">
                    <Button 
                        variant="outline" 
                        onClick={() => navigate(`/description/${job._id}`)}
                        className='flex-1 border-2 border-indigo-200 text-indigo-700 font-semibold hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-800 transition-all duration-300 rounded-xl py-3 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]'
                    >
                        View Details
                    </Button>
                    <Button 
                        className='flex-1 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-semibold transition-all duration-300 rounded-xl py-3 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] border-0'
                    >
                        Save For Later
                    </Button>
                </div>
            </div>

            {/* Decorative elements */}
            <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <div className='absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
        </div>
    );
};

export default Job;