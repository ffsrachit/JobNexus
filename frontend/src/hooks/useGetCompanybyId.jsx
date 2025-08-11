import { setSingleCompany } from '@/redux/companySlice';
import { COMPANY_API_END_POINT } from '@/utils/constant'
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetCompanybyId = (companyId) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchSingleCompany = async()=>{
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/get/${companyId}`, {withCredentials:true});
                console.log("API Response:", res.data);
                
                if(res.data.success){
                    
                    dispatch(setSingleCompany(res.data.data.company));
                }
            } catch (error) {
                console.log("Error fetching jobs:", error);
                // Handle error case
                if (error.response) {
                    console.log("Error response:", error?.response?.data);
                }
            }
        }
        fetchSingleCompany();
    },[dispatch,companyId])
}

export default useGetCompanybyId