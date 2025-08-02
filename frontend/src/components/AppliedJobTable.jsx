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

const jobs = [1,2,3,4,5];

const AppliedJobTable = () => {
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
          {jobs.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className=" text-2xl text-center py-4 text-gray-500">
                You haven't applied to any jobs yet
              </TableCell>
            </TableRow>
          ) : (
            jobs.map((item, index) => (
              <TableRow key={index}>
                <TableCell>8-3-2025</TableCell>
                <TableCell>FrontEnd Developer</TableCell>
                <TableCell>Google</TableCell>
                <TableCell className='text-right'>
                  <Badge>Selected</Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
