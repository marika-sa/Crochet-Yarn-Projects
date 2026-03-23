import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import projectRoutes from "./routes/projects.js";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/api/projects", projectRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Conntected to MongoDB.");
        app.listen(process.env.PORT || 5000, () => console.log("server running on port 5000"));
    })
    .catch(err => console.error(err));