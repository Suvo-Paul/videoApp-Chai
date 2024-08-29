import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`Database is connected ${connection.connection.host}`);

    } catch (error) {
        console.log("Database connection failed", error.message);
        process.exit(1)
    }
}

export default connectDB;