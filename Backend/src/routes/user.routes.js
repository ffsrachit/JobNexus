import {Router} from "express"
import { loginUser, logoutUser, registerUser, updateProfile } from "../controllers/user.controller.js"
import isAuthenticated from "../middlewares/auth.middleware.js"


const router =Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").get(logoutUser)
router.route("/profile/update").post(isAuthenticated ,updateProfile)

export default router