import { Request,Response } from "express";
import * as userService from "../services/user-service"
export const createUser=async(req:Request,res:Response)=>{
    try {
        const user = await userService.createUser(req.body);
        res.status(201)
            .json({message:"User created Successfully ",user})
    } catch (err:any) {
        res.status(400).json({ error: err.message });
    }
}

export const loginUser=async(req:Request,res:Response)=>{
    try {
        const user =await userService.loginUser(req.body);
             res.status(200)
            .json({message:"User Loggedin Successfully ",user})
    } catch (err:any) {
         res.status(400).json({ error: err.message });
    }
}

export const getUserById=async(req:Request,res:Response)=>{
    try {
        const user = await userService.getUserById(Number(req.params.id));
        
        res.status(200).json({ message:"Successfully fetched the user",user });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}