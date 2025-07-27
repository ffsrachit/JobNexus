import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    }, 
    skillsrequired : [{
        type : String
    }], 
    description : {
        type : String , 
        required : true 
    },
    salary :{
     type : Number , 
     required : true
    },
    location: {
        type:String ,
        required:true
    }, 
    jobType:{
        type : String,
        enum:['Full-Time' , 'Part-Time' , 'Internship'],
        required:true
    },
    position:{
        type : String , 
          required:true
    },
    company : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company" ,
        required:true
    }, 
    createdby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    application:[{
        type:mongoose.Schema.Types.ObjectId, 
        ref:"Application"
    }]



} , {timestamps:true})


export const Job = mongoose.model("Job" , jobSchema)