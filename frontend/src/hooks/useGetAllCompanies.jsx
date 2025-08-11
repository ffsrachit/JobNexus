import { setCompanies} from '@/redux/companySlice';
import { COMPANY_API_END_POINT } from '@/utils/constant'
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllCompanies = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchCompanies = async()=>{
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/getcompany`, {withCredentials:true});
                console.log("API Response:", res.data);
                
                if(res.data.success){
                    
                    dispatch(setCompanies(res.data.data.companies));
                }
            } catch (error) {
                console.log("Error fetching jobs:", error);
                // Handle error case
                if (error.response) {
                    console.log("Error response:", error?.response?.data);
                }
            }
        }
        fetchCompanies();
    },[])
}

export default useGetAllCompanies