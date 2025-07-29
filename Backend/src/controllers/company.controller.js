import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Company } from "../models/company.model.js";

const registerCompany = asyncHandler(async(req,res)=>{


    const{companyName} = req.body
    
    if(!companyName){
        throw new ApiError(400,"Comapny name is required")
    }

    const existedcompany = await Company.findOne({name : companyName})

    if(existedcompany){
        throw new ApiError(409, "You cannot register same company")
    }

   const company = await Company.create({
        name: companyName,
        userId : req.id
    })

    return res.status(201).json(new ApiResponse(201,{company} , "Company registered Successfully")
    )

})

const getCompany = asyncHandler(async(req,res)=>{
    const userId = req.id

    const companies = await Company.find({userId});

    if(companies.length==0){
        throw new ApiError(404 , "No companies found")
    }


    return res.status(200).json(new ApiResponse(200,{companies}, ` Total ${companies.length} companies found`))

})

const getCompanybyId = asyncHandler(async(req,res)=>{
    const companyId = req.params.id;

    const existedCompany = await Company.findById(companyId)

    if(!existedCompany){
        throw new ApiError(402, "No comapnies found")
    }
    return res.status(200).json(new ApiResponse(200, existedCompany , "Company found"))
})

const updateCompany = asyncHandler(async(req,res)=>{
    const{companyName , description , website , location} = req.body;
    const file = req.file;

    const updateData ={}

    if(companyName) updateData.name = name;
    if(description) updateData.description = description;
    if(website) updateData.website=website;
    if(location) updateData.location=location;

    
  // If no valid fields provided
  if (Object.keys(updateData).length === 0) {
    throw new ApiError(400, "No valid fields provided for update");
  }

  const company = await Company.findByIdAndUpdate(req.params.id, { $set: updateData },
    { new: true } )

    if(!company){
        throw new ApiError(400, "No company found to update")
    }

    return res.status(200).json(new ApiResponse(200, company, "Comapny updated Successfully"))
})


export {registerCompany , getCompany , getCompanybyId ,updateCompany}