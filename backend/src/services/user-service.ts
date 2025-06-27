import jwt from "jsonwebtoken";
import { UserRepository } from "../repositories/user-repository";
import bcrypt from "bcrypt";
const userRepository=new UserRepository();

interface CreateUserInput{
    name:string,
    email:string,
    password:string
}

interface LoginInput{
    email:string,
    password:string
}

export const createUser=async(data:CreateUserInput)=>{
    const hashedPassword=await bcrypt.hash(data.password,10);

    return userRepository.create({
        ...data,
        password:hashedPassword
    });
}


export const getAllUsers=async()=>{
    return userRepository.findAll();
}

export const getUserById=async(id:number)=>{
    return userRepository.findById(id);
}

export const getUserByEmail=async(email:string)=>{
    return userRepository.findByEmail(email)
}


export const loginUser=async({email,password}:LoginInput)=>{
    //find user by email id
    const user=await userRepository.findByEmail(email);
    if(!user){
        throw new Error("user not found")
    };
    const hashedPassword=user.password;
    //compare password
    const isMatch=await bcrypt.compare(password,hashedPassword);
    if(!isMatch){
        throw new Error("Invalid password");
    }
    //token generation 

    const token=jwt.sign({userid:user.id,email:user.email},"Heli",{expiresIn:'1d'});

    return {user,token};
}