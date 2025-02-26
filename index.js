import express from "express";
import cors from "cors"
import referralRoute from "./routes/referralRoute.js"
const app=express();

let PORT=process.env.PORT||8000
// middle ware 

app.use(express.json());
app.use(cors());

// set route 
app.use("/api",referralRoute)
app.get("/",(req,res)=>{
    return res.send("server is running ")
})

app.listen(PORT,()=>{
    console.log(`server is started at PORT ${PORT}`)
})