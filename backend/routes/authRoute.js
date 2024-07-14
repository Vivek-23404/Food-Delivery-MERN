import express from "express"
import { LoginUser, RegisterUser, google, logout } from "../controllers/authController.js"

const authRouter = express.Router()


authRouter.post("/register", RegisterUser)

authRouter.post("/login", LoginUser)

authRouter.post("/google", google)

authRouter.get("/logout", logout)

export default authRouter