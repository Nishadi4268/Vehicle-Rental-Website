import Vehicle from "../models/Vehicle.js";
import { CreateError } from "../utils/error.js";

export const createvehicle = async(req,res,next) =>{

    const newVehicle = new Vehicle(req.body)

    try{
        const saveVehicle = await newVehicle.save();
        res.status(200).json(saveVehicle)
    }catch(err){
        next(err);
    }
}

export const updatevehicle = async(req,res,next) =>{

    
    try{
        const updatedVehicle = await Vehicle.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});
        res.status(200).json(updatedVehicle);
    }catch(err){
        next(err);
    }
}

export const deletevehicle = async(req,res,next) =>{

    try{
        await Vehicle.findByIdAndDelete(req.params.id);
        res.status(200).json("Vehicle has been deleted");
    }catch(err){
       next(err);
    }
}

export const getvehicle = async(req,res,next) =>{

    try{
        const vehicle = await Vehicle.findById(req.params.id);
        res.status(200).json(vehicle);
    }catch(err){
        next(err);
    }
}

export const getvehicles = async(req,res,next) =>{

    try{
        const vehicles = await Vehicle.find();
        res.status(200).json(vehicles);
    }catch(err){
        next(err);
    }
}
