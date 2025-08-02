import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const JobDescription = () => {
    const isApplied = false; // change to true to test the "Already Applied" state

    return (
        <div className='max-w-5xl mx-auto my-10 px-4'>

            {/* Job Title and Apply Button */}
            <div className='flex items-center justify-between bg-gradient-to-r from-blue-50 via-blue-100 to-purple-50 p-6 rounded-xl shadow-md'>
                <div>
                    <h1 className='font-bold text-xl text-gray-800'>Frontend Developer</h1>
                    <div className='flex flex-wrap items-center gap-3 mt-5'>
                        <Badge className='bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full'>
                            Positions
                        </Badge>
                        <Badge className='bg-red-100 text-red-500 font-semibold px-3 py-1 rounded-full'>
                            Part-Time
                        </Badge>
                        <Badge className='bg-purple-100 text-purple-500 font-semibold px-3 py-1 rounded-full'>
                            24 LPA
                        </Badge>
                    </div>
                </div>

                <Button
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
                        <span className="pl-4 font-normal">Frontend Developer</span>
                    </div>

                    <div>
                        <h2 className="font-bold inline">Location:</h2>
                        <span className="pl-4 font-normal">Pune, India</span>
                    </div>

                    <div>
                        <h2 className="font-bold inline">Description:</h2>
                        <span className="pl-4 font-normal">
                            We’re looking for a motivated Frontend Developer with no prior professional
                            experience to join our team. This entry-level position is perfect for recent
                            graduates or self-taught developers eager to start their career in web
                            development. You will work closely with senior developers to build and maintain
                            user-friendly web interfaces.
                        </span>
                    </div>

                    <div>
                        <h2 className="font-bold inline">Experience:</h2>
                        <span className="pl-4 font-normal">0 yrs</span>
                    </div>

                    <div>
                        <h2 className="font-bold inline">Salary:</h2>
                        <span className="pl-4 font-normal">28 LPA</span>
                    </div>

                    <div>
                        <h2 className="font-bold inline">Total Applicants:</h2>
                        <span className="pl-4 font-normal">10</span>
                    </div>

                    <div>
                        <h2 className="font-bold inline">Posted Date:</h2>
                        <span className="pl-4 font-normal">08-03-2025</span>
                    </div>
                </div>

                {/* Requirements Section */}
                <div className="mt-6">
                    <h2 className="font-bold text-lg mb-2 text-blue-600">Requirements:</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Basic understanding of HTML, CSS, and JavaScript.</li>
                        <li>Familiarity with frontend frameworks like React, Angular, or Vue.</li>
                        <li>Eagerness to learn and grow in a professional environment.</li>
                        <li>Good problem-solving skills and attention to detail.</li>
                        <li>Ability to work collaboratively in a team.</li>
                        <li>Basic knowledge of version control systems like Git.</li>
                        <li>Strong communication skills.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default JobDescription;
