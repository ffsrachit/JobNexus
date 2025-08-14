import React, { useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

const JobDescription = () => {
    const params = useParams();
    const jobId = params.id;
    const { singleJob } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth);

    const isInitiallyApplied = singleJob?.application?.some(application => application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isInitiallyApplied);

    const dispatch = useDispatch();

    const applyJobHandler = async () => {
        try {
            const res = await axios.post(`${APPLICATION_API_END_POINT}/applyjob/${jobId}`, {}, { withCredentials: true });
            if (res.data.success) {
                setIsApplied(true);
                const updatedSingleJob = {
                    ...singleJob,
                    application: [...singleJob.application, { applicant: user?._id }]
                };
                dispatch(setSingleJob(updatedSingleJob));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || 'Something went wrong');
        }
    };

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                console.log("API Response:", res.data);

                if (res.data.success) {

                    const jobData = res.data.data || res.data.job;
                    dispatch(setSingleJob(jobData));
                    setIsApplied(jobData.application?.some(application => application.applicant === user?._id) || false);
                }
            } catch (error) {
                console.log("Error fetching job:", error);
                if (error.response) {
                    console.log("Error response:", error.response.data);
                }
            }
        };
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);


    return (
        <div className='max-w-5xl mx-auto my-10 px-4'>

            {/* Job Title and Apply Button */}
            <div className='flex items-center justify-between bg-gradient-to-r from-blue-50 via-blue-100 to-purple-50 p-6 rounded-xl shadow-md'>
                <div>
                    <h1 className='font-bold text-xl text-gray-800'>{singleJob?.title}</h1>
                    <div className='flex flex-wrap items-center gap-3 mt-5'>
                        <Badge className='bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full'>
                            {singleJob?.position} Position
                        </Badge>
                        <Badge className='bg-red-100 text-red-500 font-semibold px-3 py-1 rounded-full'>
                            {singleJob?.jobType}
                        </Badge>
                        <Badge className='bg-purple-100 text-purple-500 font-semibold px-3 py-1 rounded-full'>
                            {Math.round(singleJob?.salary / 100000)} LPA
                        </Badge>
                    </div>
                </div>

                <Button
                    onClick={isApplied ? null : applyJobHandler}
                    disabled={isApplied}
                    className={`rounded-3xl px-6 py-2 font-semibold transition-all duration-300 transform
                    ${isApplied
                            ? 'bg-blue-200 text-blue-600 cursor-not-allowed'
                            : 'text-white bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-purple-600 hover:scale-105'
                        }`}
                >
                    {isApplied ? 'Already Applied' : 'Apply Now'}
                </Button>
            </div>

            {/* Job Details Section */}
            <div className="mt-10">
                <h1 className="text-2xl font-bold text-blue-600 mb-6 border-b pb-2 border-gray-300">
                    Job Details
                </h1>

                <div className="space-y-4 text-gray-800">
                    <div>
                        <h2 className="font-bold inline">Role:</h2>
                        <span className="pl-4 font-normal">{singleJob?.title}</span>
                    </div>

                    <div>
                        <h2 className="font-bold inline">Location:</h2>
                        <span className="pl-4 font-normal">{singleJob?.location}</span>
                    </div>

                    <div>
                        <h2 className="font-bold inline">Description:</h2>
                        <span className="pl-4 font-normal">
                            {singleJob?.description}
                        </span>
                    </div>

                    <div>
                        <h2 className="font-bold inline">Experience:</h2>
                        <span className="pl-4 font-normal">{singleJob?.experienceLevel}</span>
                    </div>

                    <div>
                        <h2 className="font-bold inline">Salary:</h2>
                        <span className="pl-4 font-normal">{Math.round(singleJob?.salary / 100000)} LPA</span>
                    </div>

                    <div>
                        <h2 className="font-bold inline">Total Applicants:</h2>
                        <span className="pl-4 font-normal">{singleJob?.application?.length}</span>
                    </div>

                    <div>
                        <h2 className="font-bold inline">Posted Date:</h2>
                        <span className="pl-4 font-normal">{singleJob?.createdAt?.split("T")[0]}</span>
                    </div>
                </div>

                {/* Requirements Section */}
                <div className="mt-6">
                    <h2 className="font-bold text-lg mb-2 text-blue-600">Requirements:</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">{singleJob?.requirements?.map((req, i) => (
                        <li key={i}>{req}</li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default JobDescription;