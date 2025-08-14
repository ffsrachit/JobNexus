import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from './ui/table';
import { Badge } from './ui/badge';
import { useSelector } from 'react-redux';

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector(store => store.job || {});

  return (
    <div className='bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 p-10 rounded-2xl shadow-xl border border-blue-200'>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow className='text-blue-700 bg-white '>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className='text-right'>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            (!allAppliedJobs || allAppliedJobs.length <= 0) ? (
              <TableRow>
                <TableCell colSpan={4}>You haven't applied to any job yet</TableCell>
              </TableRow>
            ) : allAppliedJobs.map((appliedJob) => (
              <TableRow key={appliedJob._id}>
                <TableCell>{appliedJob.createdAt.split("T")[0]}</TableCell>
                <TableCell>{appliedJob.job.title}</TableCell>
                <TableCell>{appliedJob?.job?.company?.name}</TableCell>
                <TableCell className='text-right'><Badge className={`${appliedJob.status === "Rejected" ? 'bg-red-400' : appliedJob.status === "Pending" ? 'bg-gray-400' : 'text-green-700 bg-green-200'}`}>{appliedJob.status}</Badge></TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;