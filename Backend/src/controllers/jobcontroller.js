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
    const keyword = req.query.keyword || "";
    
    let query = {};
    
    // Only add search conditions if keyword exists
    if (keyword.trim()) {
        query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } }, 
               
            ]
        };
    }
    
    const jobs = await Job.find(query)
        .populate({
            path: "company"
        })
        .sort({ createdAt: -1 });
    
    // Check array length instead of falsy value
    if (jobs.length === 0) {
        return res.status(404).json(new ApiResponse(404, [], "No jobs found"));
    }
    
    return res.status(200).json(new ApiResponse(200, jobs, "Jobs found successfully"));
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
