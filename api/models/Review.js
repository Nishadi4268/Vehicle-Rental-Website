import mongoose from "mongoose";
const {Schema} = mongoose;

const ReviewSchema = new mongoose.Schema({
    reviewId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    vehicleId: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: false
    },
    comment: {
        type: String,
        required: false
    }
});

export default mongoose.model("Review", ReviewSchema)