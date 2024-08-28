import { Router } from "express";
// import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js"

import userController from "../controllers/user.controller.js"

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    userController.registerUser
)

export default router