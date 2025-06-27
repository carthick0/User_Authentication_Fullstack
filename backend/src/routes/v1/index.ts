import { Router } from "express";
import { createUser, getUserById, loginUser } from "../../controllers/user-controller";

const v1Router=Router();

v1Router.get('/ping',(req,res)=>{
    res.send('Ping is alive')
});

v1Router.post('/users',createUser)
v1Router.post('/login',loginUser)
v1Router.get('user/:id',getUserById)
export default v1Router;