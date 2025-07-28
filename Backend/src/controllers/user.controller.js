import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js"
import {User} from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const registerUser = asyncHandler(async(req,res)=>{
  // inputs from the user
  const{fullname, email ,phoneNumber, password , role } = req.body

  // validate 
  if(
    [fullname , email , phoneNumber , password , role].some((field)=> 
    field?.trim() === "")
   ){
    throw new ApiError(404, "All fields are required")
   }

   // check if user is already exist

   const existedUser = await User.findOne({
    $or:[{email}, {phoneNumber}]
   })

   if(existedUser){
    throw new ApiError(409 , "User already existed")
   }
// hashed the password 

   const hashedPassword = await bcrypt.hash(password , 10);

// creating database 
   const user = await User.create({
    fullname,
     email, 
     phoneNumber, password :hashedPassword , role
   })

// storing in this but without password as this will be returned in response
   const createdUser = await User.findById(user._id).select(
    "-password"
   )

   if(!createdUser){
    throw new ApiError(500 , "Something went wrong while registering the User")
   }

   return res.status(201).json(new ApiResponse(200 , createdUser , "User registered Successfully"))

})

const loginUser = asyncHandler(async(req,res)=>{
  const {email , password , role} = req.body

  // validate 
  if (!email || !password || !role) {
  throw new ApiError(400 , "All fields are required ")
}
const user = await User.findOne({email})

if(!user){
   throw new ApiError(400 ,"User didnt exist")
}

// password match

const isPasswordCorrect = await bcrypt.compare(password,user.password);

if(!isPasswordCorrect){
   throw new ApiError(401, "Password is incorrect")
}

// check role

if(role != user.role){
   throw new ApiError(401, "User doesnt exist with the current role")
}

const tokenData = {
   userId : user._id
}

const token = await jwt.sign(tokenData,process.env.SECRET_KEY , {expiresIn:'1d'});


const loggedinUser = await User.findById(user._id).select("-password -token")



return res.status(200).cookie("token" , token , {maxAge:1*24*60*60*1000 , httpOnly:true , sameSite:'strict'}).
json(new ApiResponse(200, {user : loggedinUser} , "User Logged in Successfully"))

})

const logoutUser = asyncHandler(async(req, res)=>{
   const options = {
      httpOnly:true,
      secure:true
   }
   return res.status(200)
   .clearcookie("token" , options)
   .json(new ApiResponse(200 , {} , "User logged out"))
})

const updateProfile =asyncHandler(async(req,res)=>{
 const {fullname , email ,phoneNumber, bio , skills} = req.body
 const file  =req.file

 if(!fullname || !email || !phoneNumber || !bio || !skills){
   throw new ApiError(400, "All fields are required")
 }

 const skillsArray = skills.split(",");
 const userId = req.id; // middleware

 const user = await User.findByIdAndUpdate(
   userId , {
      $set :{
fullname : fullname,
email : email,
 phoneNumber:phoneNumber,
"profile.bio":bio,
 "profile.skills":skillsArray,
      }
   },{
      new : true
   }

 ).select("-password");

 if(!user){
   throw new ApiError(401, "User not found")
 }

 

 return res.status(200).json(new ApiResponse(200, {user} ,"Credentials Updated Successfully"))
})




export {registerUser, loginUser , logoutUser , updateProfile}