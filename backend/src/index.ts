import  express from "express";
import apiRouter from "./routes";
import cors from 'cors'
const app=express();

app.use(cors());
app.use(express.json());

app.use('/api',apiRouter);


const PORT=3000
app.listen(PORT,()=>{
    console.log('Server is up at port',PORT)
})
