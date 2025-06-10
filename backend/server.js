import cookieParser from "cookie-parser";
import { config } from "dotenv";
import express from "express";
import dbConnection from "./config/db.connection.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
config();

const PORT = process.env.PORT || 3000;

//middleware to parse JSON bodies
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/v1/auth", authRoutes);

//server and database connection
app.listen(PORT, () => {
  dbConnection();
  console.log(`Server is running on http://localhost:${PORT}`);
});
