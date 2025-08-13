import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'

const AdminJobsTable = () => {
    useGetAllAdminJobs();

    const { allAdminJobs, searchJobByText } = useSelector(store => store.job || { allAdminJobs: [], searchJobByText: '' });

    const [filterJobs, setFilterJobs] = useState([]);
    const navigate = useNavigate();

    // Filtering jobs
    useEffect(() => {
        // Add safety check for allAdminJobs
        if (!allAdminJobs || !Array.isArray(allAdminJobs)) {
            setFilterJobs([]);
            return;
        }

        const filtered = allAdminJobs.filter(job => {
            if (!searchJobByText) return true;
            return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
                job?.company?.name?.toLowerCase().includes(searchJobByText.toLowerCase());
        });

        setFilterJobs(filtered);
    }, [allAdminJobs, searchJobByText]);

    return (
        <div>
            <Table>
                <TableCaption>
                    A list of your recently posted jobs
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* FIX: Additional safety check */}
                    {!filterJobs || filterJobs.length <= 0 ? (
                        <TableRow>
                            <TableCell colSpan={4} className="text-center">
                                You haven't posted any jobs yet.
                            </TableCell>
                        </TableRow>
                    ) : (
                        filterJobs.map((job) => (
                            <TableRow key={job._id}>
                                <TableCell>{job.company.name || 'Company Name'}</TableCell>
                                <TableCell>{job.title || 'Role'}</TableCell>
                                <TableCell>{job.createdAt ? new Date(job.createdAt).toLocaleDateString() : '-'}</TableCell>
                                <TableCell className='text-right cursor-pointer'>
                                    <Popover>
                                        <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                        <PopoverContent className='w-32'>
                                            <div onClick={() => navigate(`/admin/companies/${job._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
                                                <Edit2 className='w-4' />
                                                <span>Edit</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export default AdminJobsTable