import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export async function connectDB() {
    try{

        await mongoose.connect(process.env.MONGODB_URI).then(()=>{
            console.log("DataBase Connected Successfully");
        })
    } catch (error) {
        console.log(error);
    }
}