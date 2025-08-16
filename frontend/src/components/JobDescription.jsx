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
        <div className='max-w-6xl mx-auto my-12 px-4'>
            {/* Header Section */}
            <div className='bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-3xl shadow-lg border border-blue-200/50 mb-8'>
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>
                    <div>
                        <h1 className='font-bold text-3xl text-gray-900 mb-3'>{singleJob?.title}</h1>
                        <p className='text-gray-600 text-lg mb-4'>{singleJob?.company?.name} • {singleJob?.location}</p>
                        
                        <div className='flex flex-wrap items-center gap-3'>
                            <Badge className='bg-blue-600 text-white px-4 py-2 rounded-full font-medium'>
                                {singleJob?.position} Position{singleJob?.position > 1 ? 's' : ''}
                            </Badge>
                            <Badge className='bg-green-600 text-white px-4 py-2 rounded-full font-medium'>
                                {singleJob?.jobType}
                            </Badge>
                            <Badge className='bg-purple-600 text-white px-4 py-2 rounded-full font-medium'>
                                ₹{Math.round(singleJob?.salary / 100000)} LPA
                            </Badge>
                        </div>
                    </div>

                    <Button
                        onClick={isApplied ? null : applyJobHandler}
                        disabled={isApplied}
                        className={`px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 min-w-[160px]
                        ${isApplied
                            ? 'bg-gray-400 text-white cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105'
                        }`}
                    >
                        {isApplied ? 'Already Applied' : 'Apply Now'}
                    </Button>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Job Description */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Description</h2>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            {singleJob?.description}
                        </p>
                    </div>

                    {/* Job Details */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Details</h2>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Role</h3>
                                    <p className="text-gray-700">{singleJob?.title}</p>
                                </div>
                                
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                                    <p className="text-gray-700">{singleJob?.location}</p>
                                </div>
                                
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Experience</h3>
                                    <p className="text-gray-700">{singleJob?.experienceLevel}</p>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Salary</h3>
                                    <p className="text-gray-700">₹{Math.round(singleJob?.salary / 100000)} LPA</p>
                                </div>
                                
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Total Applicants</h3>
                                    <p className="text-gray-700">{singleJob?.application?.length}</p>
                                </div>
                                
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Posted Date</h3>
                                    <p className="text-gray-700">{singleJob?.createdAt?.split("T")[0]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Requirements Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 sticky top-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
                        
                        <div className="space-y-3">
                            {singleJob?.requirements?.map((req, index) => (
                                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-700">{req}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDescription;