import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
    const navigate = useNavigate();
    // const jobId = "dskbvlsnl"
    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();

        const TimeDifference = currentTime - createdAt
        return Math.floor(TimeDifference / (1000 * 24 * 60 * 60));

    }
    return (
        <div className='p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-gray-200 shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out cursor-pointer group w-full'>
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                    {daysAgoFunction(job?.createdAt) === 0
                        ? "Today"
                        : `${daysAgoFunction(job?.createdAt)} days ago`}
                </p>
                <Button variant="outline" className="rounded-full" size="icon">
                    <Bookmark />
                </Button>

            </div>

            <div className="flex items-center gap-2 my-2">
                <Button>
                    <Avatar>
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </Button>
                <div>
                    <h1 className="font-medium text-lg">{job?.company?.name}</h1>
                    <p className="text-sm text-gray-500">{job?.location}</p>
                </div>
            </div>
            <div>
                <h1 className="font-bold text-lg my-2">{job?.title}</h1>
                <p className="text-sm text-gray-600">{job?.description}</p>
            </div>
            <div className='flex flex-wrap items-center gap-3 mt-5'>
                <Badge className='bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full transition-all duration-300 group-hover:bg-blue-200'>
                    {job?.position} Positions
                </Badge>
                <Badge className='bg-red-100 text-red-500 font-semibold px-3 py-1 rounded-full transition-all duration-300 group-hover:bg-red-200'>
                    {job?.jobType}
                </Badge>
                <Badge className='bg-purple-100 text-purple-500 font-semibold px-3 py-1 rounded-full transition-all duration-300 group-hover:bg-purple-200'>
                    {Math.round(job?.salary / 100000)} LPA
                </Badge>
            </div>



            <div className="flex items-center gap-4 mt-4">
                <Button className='cursor-pointer' variant="outline" onClick={() => navigate(`/description/${job._id}`)}>Details</Button>
                <Button className='bg-blue-400 cursor-pointer'>Save For Later</Button>
            </div>
        </div>
    );
};

export default Job;
