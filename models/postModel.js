import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    photoUrl: String,
    title: String,
    time: { type: Date, default: Date.now }
});

export default mongoose.model('Post', postSchema);