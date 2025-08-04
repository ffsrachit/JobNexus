import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";


const registerUser = asyncHandler(async (req, res) => {
  // inputs from the user
  const { fullname, email, phoneNumber, password, role } = req.body;

  // validate
  if (
    [fullname, email, phoneNumber, password, role].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // check if user is already exist

  const existedUser = await User.findOne({
    $or: [{ email }, { phoneNumber }],
  });

  if (existedUser) {
    throw new ApiError(409, "User already existed");
  }
  // hashed the password

  const hashedPassword = await bcrypt.hash(password, 10);

  // creating database
  const user = await User.create({
    fullname,
    email,
    phoneNumber,
    password: hashedPassword,
    role,
  });

  // storing in this but without password as this will be returned in response
  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the User");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered Successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  // validate
  if (!email || !password || !role) {
    throw new ApiError(400, "All fields are required ");
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(400, "User didnt exist");
  }

  // password match

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    throw new ApiError(401, "Password is incorrect");
  }

  // check role

  if (role != user.role) {
    throw new ApiError(401, "User doesnt exist with the current role");
  }

  const tokenData = {
    userId: user._id,
  };

  const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });

  const loggedinUser = await User.findById(user._id).select("-password -token");

  return res
    .status(200)
    .cookie("token", token, {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
    })
    .json(new ApiResponse(200, { user: loggedinUser }, "Welcome Back !"));
});

const logoutUser = asyncHandler(async (req, res) => {
  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .clearCookie("token", options)
    .json(new ApiResponse(200, {}, "User logged out"));
});

const updateProfile = asyncHandler(async (req, res) => {
  const { fullname, email, phoneNumber, bio, skills } = req.body;
  
  const file = req.file;

  const fileUri = getDataUri(file);
  const cloudResponse = await cloudinary.uploader.upload(fileUri.content,{
     resource_type : "auto"
  });
  const userId = req.id;

  const updateData = {};

  if (fullname) updateData.fullname = fullname;
  if (email) updateData.email = email;
  if (phoneNumber) updateData.phoneNumber = phoneNumber;
  if (bio) updateData["profile.bio"] = bio;
  if (skills) updateData["profile.skills"] = skills.split(",").map(skill => skill.trim());

   if(cloudResponse){
    updateData["profile.resume"] = cloudResponse.secure_url            // save the cloudinary url
    updateData["profile.resumeOriginalname"] = file.originalname // save the original file name 

   }
 


  // If no valid fields provided
  if (Object.keys(updateData).length === 0) {
    throw new ApiError(400, "No valid fields provided for update");
  }

  const user = await User.findByIdAndUpdate(
    userId,
    { $set: updateData },
    { new: true }
  ).select("-password");

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { user }, "Profile updated successfully"));
});
export { registerUser, loginUser, logoutUser, updateProfile };
