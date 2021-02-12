import express from "express";
import dataBase from './database_conf'
import {authRoute} from './auth/auth-service'
const app=express();


app.use(express.json());
app.use("/auth",authRoute())

dataBase().then(()=>{
    console.log("MongoDB connected");
    app.listen(3000,()=>console.log("connected"))
})
