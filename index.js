import express from "express";
import cors from "cors"
import referralRoute from "./routes/referralRoute.js"
const app=express();

// middle ware 
app.use(express.json());
app.use(cors());

// set route 
app.use("/api",referralRoute)
app.get("/",(req,res)=>{
    return res.send("server is running ")
})

app.listen(8000,()=>{
    console.log("server is started")
})