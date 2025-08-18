import React, { useState } from 'react'
import { Avatar, AvatarImage } from './ui/avatar'
import Navbar from './shared/Navbar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'
import useGetAppliedJob from '@/hooks/useGetAppliedJobs'

// const skills = ["Html", "Css", "JavaScript", "Reactjs"]
const isResume = true;
const Profile = () => {
    useGetAppliedJob();
    
    const [open, setOpen] = useState(false);
    const { user } = useSelector(store => store.auth);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-8 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <div className='flex justify-between items-start'>
                    <div className='flex items-center gap-6'>
                        <div className="relative">
                            <Avatar className="h-28 w-28 ring-4 ring-blue-100 shadow-lg">
                                <AvatarImage src={user?.profile?.profilePhoto} alt="profile image" className="object-cover"></AvatarImage>
                            </Avatar>
                            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 border-4 border-white rounded-full"></div>
                        </div>
                        <div className="space-y-2">
                            <h1 className='font-bold text-2xl text-gray-800 tracking-tight'>{user?.fullname}</h1>
                            <p className="text-gray-600 text-base leading-relaxed max-w-md">{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button 
                        onClick={() => setOpen(true)} 
                        className='text-right hover:scale-105 transition-transform duration-200 shadow-md' 
                        variant="outline"
                    >
                        <Pen className="w-4 h-4" />
                    </Button>
                </div>

                <div className='my-8 space-y-4'>
                    <div className='flex items-center gap-4 py-2 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200'>
                        <div className="p-2 bg-blue-100 rounded-full">
                            <Mail className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-gray-700 font-medium">{user?.email}</span>
                    </div>
                    <div className='flex items-center gap-4 py-2 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200'>
                        <div className="p-2 bg-green-100 rounded-full">
                            <Contact className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-gray-700 font-medium">{user?.phoneNumber}</span>
                    </div>
                </div>

                <div className='my-8'>
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
                        Skills
                    </h2>
                    <div className='flex items-center gap-2 flex-wrap'>
                        {
                            user?.profile?.skills?.length != 0 ? user?.profile?.skills.map((item, index) => 
                                <Badge 
                                    key={index} 
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md text-white px-3 py-1"
                                >
                                    {item}
                                </Badge>
                            ) : <span className="text-gray-500 italic">No skills added yet</span>
                        }
                    </div>
                </div>

                <div className='grid w-full max-w-sm items-center gap-3'>
                    <Label className='text-xl font-bold text-gray-800 flex items-center gap-2'>
                        <div className="w-1 h-6 bg-green-500 rounded-full"></div>
                        Resume
                    </Label>
                    {
                        isResume && user?.profile?.resume ? (
                            <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200 hover:border-green-300 transition-colors duration-200">
                                <a
                                    href={user?.profile?.resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-700 font-semibold hover:underline cursor-pointer flex items-center gap-2 transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                    </svg>
                                    {user.profile.resumeOriginalname || "View Resume"}
                                </a>
                            </div>
                        ) : (
                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <span className="text-gray-500 italic">No resume uploaded</span>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8'>
                <div className="p-8 pb-4">
                    <h1 className='font-bold text-2xl text-gray-800 flex items-center gap-3'>
                        <div className="w-1 h-8 bg-purple-500 rounded-full"></div>
                        Applied Jobs
                        <div className="ml-auto">
                            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        </div>
                    </h1>
                </div>
                <div className="px-8 pb-8">
                    {/* Application Table */}
                    <AppliedJobTable />
                </div>
                <UpdateProfileDialog open={open} setOpen={setOpen} />
                {/* ye open aur setopne ki value bheji hai component mein */}
            </div>
        </div>
    )
}

export default Profile