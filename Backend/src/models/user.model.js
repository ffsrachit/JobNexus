import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    
    fullname : {
        type : String , 
        required : true , 
        trim : true
    }, 
    email :{
        type : String , 
        required : true,
        unique : true,
        lowercase : true, 
        trim:true
    },
    phoneNumber:{
        type : Number,
        required : true
    },
    password : {
        type : String , 
        required:[true , 'Password is required']
    } , 
    role : {
        type : String , 
        enum:['Student' , 'Recruiter'] , 
        required : true
    }, 
    profile : {
        bio: {
            type : String
        } , 
        skills :[{type : String}] , 

        resume :{
            type : String
        } , // URL TO RESUME FILE 

        resumeOriginalname : {
            type:String
        },

        company : {
            type :mongoose.Schema.Types.ObjectId , 
            ref : "Company"
        },
        profilePhoto : {
            type : String , 
            default : ""
        }
    }

} , {timestamps:true})

export const User = mongoose.model("User" , userSchema)