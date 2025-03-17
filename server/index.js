import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRoutes from "./routes/AuthRoutes.js";

dotenv.config();

const app = express();

app.use(cors({
  origin:[process.env.ORIGIN],
  methods:["GET","POST","PUT","DELETE","PATCH"],
  credentials:true
}));

app.use("/uploads/profiles",express.static("uploads/profiles"));

app.use(cookieParser());

app.use(express.json());

app.use("/api/auth",authRoutes);

const port = process.env.PORT;
const databaseUrl = process.env.DATABASE_URL;

const server = app.listen(port,()=>{
  console.log(`Server is running at http://localhost:${port}`);
});

mongoose.connect(databaseUrl).then(()=>console.log("DB connected successfully.")).catch((err)=>console.log(err.message));