import {Router} from "express"
import { loginUser, logoutUser, registerUser, updateProfile } from "../controllers/user.controller.js"
import isAuthenticated from "../middlewares/auth.middleware.js"
import { singleUpload } from "../middlewares/multer.js"


const router =Router()

router.route("/register").post(singleUpload,registerUser)
router.route("/login").post(loginUser)
router.route("/logout").get(logoutUser)
router.route("/profile/update").post(isAuthenticated , singleUpload,updateProfile)

export default router