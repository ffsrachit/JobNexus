import {Router} from "express"
import isAuthenticated from "../middlewares/auth.middleware.js"
import { getAllJobs, postJob, getJobbyId , getAdminJobs } from "../controllers/jobcontroller.js"

const router =Router()


router.route("/postjob").post(isAuthenticated,postJob)
router.route("/get").get(getAllJobs)
router.route("/get/:id").get(isAuthenticated,getJobbyId)
router.route("/getAdminJobs").get(isAuthenticated,getAdminJobs)


export default router