import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import path from "path";

import {connectDB} from './db/connectDB.js'
import authRoutes from './routes/auth.route.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;
// No need for __dirname if not serving static files from backend
// const __dirname = path.resolve();

// Update CORS to allow http://localhost as an origin
app.use(cors({ origin: ["http://localhost:5173", "http://localhost"], credentials: true }));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

// This block should now be skipped because NODE_ENV is 'development' in Docker Compose
if (process.env.NODE_ENV === "production") {
    // This part is for monolithic deployments, not for Dockerized setup with Nginx
    // app.use(express.static(path.join(__dirname, "/frontend/dist")));
    // app.get("*", (req, res) => {
    //     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    // });
}

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on port: ", PORT);
});