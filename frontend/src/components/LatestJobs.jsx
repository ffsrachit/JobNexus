import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';



const LatestJobs = () => {
    const {allJobs} = useSelector(store=>store.job);
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold'><span className='text-blue-400'>Latest & Top</span> Job Openings</h1>
            {/* //multiple job card display */}
            <div className='grid grid-cols-3 gap-4 my-5'>
                {
                    allJobs.length != 0 ? allJobs.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>) :<span>Job Not found</span>
                }
            </div>

        </div>
    )
}

export default LatestJobs
