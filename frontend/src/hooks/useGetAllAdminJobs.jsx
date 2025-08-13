import { setAllAdminJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const useGetAllAdminJobs = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllAdminJobs = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const res = await axios.get(`${JOB_API_END_POINT}/getAdminJobs`, {
                    withCredentials: true
                });
                
                console.log("API Response:", res.data);
                
                if (res.data.success) {
                    dispatch(setAllAdminJobs(res.data.data || []));
                }
            } catch (error) {
                console.log("Error fetching jobs:", error);
                
                // Handle 404 as "no jobs found" rather than an error
                if (error.response?.status === 404) {
                    dispatch(setAllAdminJobs([])); // Set empty array
                    console.log("No jobs found - setting empty array");
                } else {
                    setError(error.message || "Failed to fetch admin jobs");
                }
                
                if (error.response) {
                    console.log("Error response:", error.response.data);
                }
            } finally {
                setLoading(false);
            }
        };
        
        fetchAllAdminJobs();
    }, [dispatch]);

    return { loading, error };
};

export default useGetAllAdminJobs;