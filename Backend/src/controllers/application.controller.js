import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Application } from "../models/application.model.js"
import { Job } from "../models/job.model.js";




const applyJob = asyncHandler(async (req, res) => {
    const userId = req.id;
    const JobId = req.params.id;

    if (!JobId) {
        throw new ApiError(400, "JobId is required")
    }
    //check if user already applied or not 

    const existingApplication = await Application.findOne({ job: JobId, applicant: userId })
    if (existingApplication) {
        throw new ApiError(400, "You have Already applied for this job")
    }
    //check if job exist

    const existingJob = await Job.findById(JobId);

    if (!existingJob) {
        throw new ApiError(404, "Job not found")
    }

    //create a new application

    const application = await Application.create({
        job: JobId,
        applicant: userId
    })

    existingJob.application.push(application.id)

    await existingJob.save();

    return res.status(200).json(new ApiResponse(200, application, "Job Applied Successfully"))

});

const getAppliedJobs = asyncHandler(async (req, res) => {
    const userId = req.id;

    const application = await Application.find({ applicant: userId }).sort({ createdAt: -1 }).populate({
        path: 'job',
        options: { sort: { createdAt: -1 } },
        populate: {
            path: 'company',
            options: { sort: { createdAt: -1 } }
        }

    })

    if (!application) {
        throw new ApiError(400, "No application found")
    }


    res.status(200).json(new ApiResponse(200, application, ""))
});

const getApplicants = asyncHandler(async (req, res) => {
    const jobId = req.params.id;

    const job = await Job.findById(jobId).populate({
        path: 'application',
        options: { sort: { createdAt: -1 } },
        populate: {
            path: 'applicant'
        }
    })

    if (!job) {
        throw new ApiError(404, "Job not found")
    }

    return res.status(200).json(new ApiResponse(200, job, "Applicants fetch Successfully"))
})

const updateStatus = asyncHandler(async (req, res) => {
    const { status } = req.body;
    const applicationId = req.params.id;
    if (!status) {
        throw new ApiError(400, "Status is required")
    }

    // find the application with application id

    const application = await Application.findOne({ _id: applicationId });

    if (!application) {
        throw new ApiError(404, "Application not found")
    }
    // update status
    application.status = status;
    await application.save();

    return res.status(200).json(new ApiResponse(200, application, "Status Updated Successfully"));

});





export { applyJob, getAppliedJobs, getApplicants, updateStatus }