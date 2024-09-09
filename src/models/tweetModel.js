import mongoose, { Schema } from "mongoose";

const tweetSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
}, { timestamps: true })

export const tweet = mongoose.model("tweet", tweetSchema)