import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN
     }))
    
    app.use(express.json({limit: '16kb'}))
    app.use(express.urlencoded({ extended: true }))
    app.use(cookieParser())
    app.use (express.static('public'))

    //importing routes 
    import authRoutes from "./routes/auth.routes.js"
    import predictionRoutes from "./routes/prediction.routes.js"

    //routes declaration
    app.use('/api/v1/auth',authRoutes)
    app.use('/api/v1/predictions',predictionRoutes)


    export  {app}