import express from "express";
import Vehicle from "../models/Vehicle.js";
import { CreateError } from "../utils/error.js";
import { createvehicle, deletevehicle, getvehicle, getvehicles, updatevehicle } from "../controller/vehicle.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router =express.Router();

// CREATE
router.post("/", verifyAdmin, createvehicle);

//UPDATE
router.put("/:id", verifyAdmin, updatevehicle);
//DELETE

router.delete("/:id", verifyAdmin, deletevehicle);
//GET
router.get("/:id", getvehicle);
//GET ALL
router.get("/", getvehicles);

export default router;