import {Router} from "express"
import { getCompany, getCompanybyId, registerCompany , updateCompany } from "../controllers/company.controller.js"
import isAuthenticated from "../middlewares/auth.middleware.js"
const router =Router()

router.use(isAuthenticated)
router.route("/register-company").post(registerCompany)
router.route("/getcompany").get(getCompany)
router.route("/get/:id").get(getCompanybyId)
router.route("/update-company/:id").put(updateCompany)
export default router