// require('dotenv').config({ path: "./env" })
import dotenv from "dotenv"
import connectDB from "./db/db.js";
import { app } from "./app.js"


dotenv.config({ path: "./.env" })

const PORT = process.env.PORT || 7001

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server is running on", PORT);
        })
    })
    .catch((error) => {
        console.log("Database connection failed", error);
    })



