import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CompaniesTable = () => {
    // Correct way to handle potential undefined state
    const { companies, searchCompanyByText } = useSelector(store => store.company || { companies: [] });

    const [filterCompany, setFilterCompany] = useState(companies);
    const navigate = useNavigate();

    // Filtering company
    useEffect(() => {
        const filteredCompany = companies.length >= 0 && companies.filter((company) => {
            if (!searchCompanyByText) {
                return true
            };
            return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
        });
        setFilterCompany(filteredCompany)
    }, [companies, searchCompanyByText])

    return (
        <div>
            <Table>
                <TableCaption>
                    A list of your recent registered companies
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        filterCompany.length <= 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center">
                                    You haven't registered any company yet.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filterCompany.map((company) => {
                                return (
                                    <TableRow key={company._id}>
                                        <TableCell>
                                            <Avatar>
                                                <AvatarImage src={company.logo || 'data:image/png;base64,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'} />
                                            </Avatar>
                                        </TableCell>
                                        <TableCell>{company.name || 'Company Name'}</TableCell>
                                        <TableCell>{company.createdAt ? new Date(company.createdAt).toLocaleDateString() : '10-8-2025'}</TableCell>
                                        <TableCell className='text-right cursor-pointer'>
                                            <Popover>
                                                <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                                <PopoverContent className='w-32'>
                                                    <div onClick={() => navigate(`/admin/companies/${company._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
                                                        <Edit2 className='w-4' />
                                                        <span>Edit</span>
                                                    </div>
                                                </PopoverContent>
                                            </Popover>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        )
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default CompaniesTable