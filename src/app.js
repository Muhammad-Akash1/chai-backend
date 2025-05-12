import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express(); // app is the name of variable which is made from express function. You can use any name of it but app is common.

// app.use(cors()) // Usually this is done and it solves the problem. But on production level, some options can also be added.
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json({limit: "16kb"})) // We accept json through express with limit upto 16kb.
app.use(express.urlencoded({extended: true, limit: "16kb"})) // We accept data from URL through express. extened means we can give objects within objects. Most of the cases we don't use extended.
app.use(express.static("public")) // Sometimes we want to store files, PDFs or media on our own server. So we make a public folder that they are public assets, anyone can access them. "public" is just name of folder, can be changed.
app.use(cookieParser())

export { app }