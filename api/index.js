import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import vehiclesRoute from "./routes/vehicles.js";
import usersRoute from "./routes/users.js";
import payementsRoute from "./routes/payments.js";
import cookieParser from "cookie-parser";


const app = express()
dotenv.config()

const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB!")
    
    } catch(error){
        throw error
    }
};

mongoose.connection.on("disconnected", ()=> {
    console.log("mongoDB disconnected!")
})


mongoose.connection.on("connected", ()=> {
    console.log("mongoDB connected! Lets Roll!!")
})

//middlewares

app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/vehicles", vehiclesRoute);
app.use("/api/payements", payementsRoute);


app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json(
        
        {success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
    
}) 

app.listen(8800, ()=>{
    connect()
    console.log("Connected to Backend")
})