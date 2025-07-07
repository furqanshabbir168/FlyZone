import express from 'express';
import cors from 'cors';
import { connectDB } from './Config/database.js';
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./Inngest/index.js"
import flightRouter from './Routes/flightRoutes.js';

const PORT = 4000;
const app = express();

// Middleware
app.use(cors({
    origin: "https://fly-zone-admin.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(express.json());
app.use(clerkMiddleware());

// DataBase
await connectDB();

// API'S end points
app.get('/',(request,response)=>{
    response.json('Hello From Fly Zone')
})
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/flight",flightRouter)

app.listen(PORT,()=>{
    console.log(`Server is running successfully at http://localhost:${PORT}`)
})