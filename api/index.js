import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
dotenv.config();
const app=express();

app.listen(3000,()=>{
    console.log("Your sever is running on the port 3000");
})
mongoose.connect(process.env.MONGODBURL)
.then(()=>{
    console.log("Connected to the database");
})
.catch((err)=>{
    console.log("Error connecting to the database");
})
app.use(express.json());
app.use('/api/test/',userRoute);
app.use('/api/auth/',authRoutes);

app.use((err,req,res,next)=>{
    let success=false;
    let statuscode=err.statuscode||500
    let message=err.message||"There is an error"
    res.status(statuscode).json({success,statuscode,message});
})