import cookieParser from "cookie-parser";
import { config } from "dotenv";
import express from "express";

const app = express();
config();

const PORT = process.env.PORT || 3000;

//middleware to parse JSON bodies
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
