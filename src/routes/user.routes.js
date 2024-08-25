import { Router } from "express";
// import { registerUser } from "../controllers/user.controller.js";

import userController from "../controllers/user.controller.js"

const router = Router()

router.route("/register").post(userController.registerUser)

export default router