// require('dotenv').config({path: './env'}) // It is correct and you can run it. But it makes our code inconsistent. 2nd method:
import dotenv from "dotenv" 
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})

connectDB() // We can use .then and catch, bcz it returns a promise as we use async function.
.then(()=> (
     app.listen(process.env.PORT || 8000, ()=> {
        console.log(`Server is running at port: ${process.env.PORT}`)
     })
))
.catch((err)=> {
    console.log("MONGODB connection failed !! ", err);
})












/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";
const app = express();

// function connectDB(){}
// connectDB();

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERR:", error);
            throw error;
        });
        
        app.listen(process.env.PORT, ()=> {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR", error);
        throw err;
    }
})() // Professional IIFEE code(Starts with semi-colon). Upper code is also correct but it's better.
 */