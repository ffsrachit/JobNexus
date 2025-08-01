import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cors({
    origin : true, 
    credentials : true
}))

app.use(express.json({limit :"124kb"}))
app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))
app.use(cookieParser())


import userRouter from "./routes/user.routes.js"
import companyRouter from "./routes/company.route.js"
import jobRouter from "./routes/job.route.js"
import applicationRouter from "./routes/application.route.js"


app.use("/api/v1/user", userRouter)
app.use("/api/v1/company" , companyRouter)
app.use("/api/v1/job",jobRouter)
app.use("/api/v1/application" , applicationRouter)




//http://localhost:8000/api/v1/user/


export {app}

