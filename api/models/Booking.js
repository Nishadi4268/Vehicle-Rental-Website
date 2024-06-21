import mongoose from "mongoose";
const {Schema} = mongoose;

const BookingSchema = new mongoose.Schema({
   bookingId: {
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
   bookingDate: {
    type: Date,
    required: true
   },
   returnDate: {
    type: Date,
    required: true
   },
   totalCost: {
    type: Number,
    required: true
   },
   aditionalServices: {
    type: String,
    required: false
   },
})

export default mongoose.model("Booking", BookingSchema)