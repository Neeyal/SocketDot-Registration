import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import registrationRoutes from "./routes/registration.js";

dotenv.config();
const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDb Connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error", err);
  });

app.use("/api", registrationRoutes);
export default app;
