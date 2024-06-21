import mongoose from "mongoose";
const {Schema} = mongoose;

const VehicleSchema = new mongoose.Schema({
    vehicleId: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    registrationNO: {
        type: String,
        required: true
    },
    availability: {
        type: Boolean,
        default: false
    },
    features: {
        type: String,
        required: false
    },
    
});

export default mongoose.model("Vehicle", VehicleSchema)