import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { LogOut, User2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const user = false;

    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto h-16 max-w-7xl'>
                <div>
                    <h1 className='text-2xl font-bold'>Job<span className='text-blue-400'>Nexus</span></h1>
                </div>
                <div className='flex items-center gap-16'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Link to="/login">
                                    <Button variant="outline">Login</Button>
                                </Link>

                                <Link to="signup">
                                    <Button className='bg-blue-400 hover:bg-blue-500'>SignUp</Button>
                                </Link>


                            </div>
                        ) :
                            (
                                <Popover >
                                    <PopoverTrigger asChild>
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        </Avatar>
                                    </PopoverTrigger>
                                    <PopoverContent className='w-80'>
                                        <div className='flex gap-4 space-y-2'>
                                            <Avatar className="cursor-pointer">
                                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            </Avatar>
                                            <div>
                                                <h4 className='font-medium'>Rachit</h4>
                                                <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet.</p>
                                                {/*yw foreground transparent kr deta */}

                                            </div>

                                        </div>

                                        <div className='flex flex-col text-gray-600 my-2'>
                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                <User2 />
                                                <Button variant="link">View Profile</Button>
                                            </div>

                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                <LogOut />
                                                <Button variant="link">Logout</Button>
                                            </div>
                                        </div>

                                    </PopoverContent>
                                </Popover>
                            )
                    }

                </div>
            </div>


        </div>
    )
}

export default Navbar
