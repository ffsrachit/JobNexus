import { Router } from "express"
import { applyJob, getAppliedJobs, getApplicants, updateStatus } from "../controllers/application.controller.js"
import isAuthenticated from "../middlewares/auth.middleware.js"
const router = Router()

router.use(isAuthenticated)

router.route("/applyjob/:id").post(applyJob)
router.route("/getappliedjobs").get(getAppliedJobs)
router.route("/get/:id").get(getApplicants)
router.route("/updatestatus/:id").post(updateStatus)

export default router