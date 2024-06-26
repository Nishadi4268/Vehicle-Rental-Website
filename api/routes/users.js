import express from "express";
import { deleteuser, getuser, getusers, updateuser } from "../controller/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router =express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//     res.send("Hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//     res.send("Hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
//     res.send ("Hello admin, You are logged in and you can delete all accounts")
// })

//UPDATE
router.put("/:id",verifyUser, updateuser);
//DELETE

router.delete("/:id", verifyUser, deleteuser);
//GET
router.get("/:id",verifyUser, getuser);
//GET ALL
router.get("/", verifyAdmin, getusers);


export default router