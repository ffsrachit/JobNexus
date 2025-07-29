import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Job } from "../models/job.model.js";
import { Company } from "../models/company.model.js";

const postJob = asyncHandler(async (req, res) => {
    const {
        title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
    const userId = req.id;

    if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
        throw new ApiError(404, "All fields are required");
    }

    const existedCompany = await Company.findById(companyId)
    if (!existedCompany) {
        throw new ApiError(400, "Comapny not exist")
    }
    const job = await Job.create({
        title,
        description,
        requirements: requirements.split(","),
        salary: Number(salary),
        location,
        jobType,
        experienceLevel: experience,
        position,
        company: companyId,
        createdby: userId,
    });

    return res.status(201).json(new ApiResponse(201, job, "Job created Successfully"))
});

const getAllJobs = asyncHandler(async (req, res) => {
    //filtering the jobs

    const keyword = req.query.keyword || "";                                             // req.query filtering and pagination mein use kiya jaaata hai
     const query = {
        $or:[
            {title : {$regex:keyword , $options:"i"}},
            {title : {$regex:keyword  , $options :"i"}}
        ]
     };
     const jobs = await Job.find(query).populate({
        path:"company"
     }).sort({createdAt:-1})

     if(!jobs){
        throw new ApiError(404 , "Job not found")
     }
     return res.status(200).json(new ApiResponse(200 , jobs , "Job found Successfully"))
});

const getJobbyId = asyncHandler(async(req,res)=>{
    const JobId = req.params.id;

    const job = await Job.findById(JobId);

    if(!job){
        throw new ApiError(404, "Job not found")
    }
   return res.status(200).json(new ApiResponse(200, job))
});

const getAdminJobs = asyncHandler(async(req,res)=>{
    const userId = req.id;
    const jobs = await Job.find({createdby:userId})

    if(!jobs){
        throw new ApiError(404, "Jobs not found")
    }

    return res.status(200).json(new ApiResponse(200,jobs));
})



export { postJob , getAllJobs , getJobbyId , getAdminJobs };
