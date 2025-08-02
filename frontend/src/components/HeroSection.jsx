import { Search } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

const HeroSection = () => {
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className=' bg-gradient-to-r from-blue-400 to-blue-600 mx-auto px-4 py-2 rounded-full text-white bg-blue-400 font-medium'>JobNexus - Connect with Opportunities</span>
                <h1 className='text-5xl font-bold'>Search, Apply &
                    <br /> Get Your <span className='text-blue-400'>Dream Jobs</span></h1>
                <p className='text-xl'>Start your journey with us—search for jobs and apply in just a few clicks!</p>
                <div className='flex w-[45%] shadow-lg border border-gray-300 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type='text'
                        placeholder='Find your dream jobs'
                        className='outline-none border-none w-full' />
                    <Button className='rounded-r-full bg-blue-400'>
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
                
            </div>
        </div>

    )
}

export default HeroSection
