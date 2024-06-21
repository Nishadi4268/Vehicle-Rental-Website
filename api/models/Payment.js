import mongoose from "mongoose";
const {Schema} = mongoose;

const PaymentSchema = new mongoose.Schema({
   paymentId: {
    type: String,
    required: true
   },
   userId: {
    type: String,
    required: true
   },
   cardNo: {
    type: Number,
    required: true
   },
   expireDate: {
    type: String,
    required: true
   }
})

export default mongoose.model("Payment", PaymentSchema)