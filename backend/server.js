import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connectDB } from "./config/db.js";

//app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());
//db connection
connectDB();
app.get("/", (req, res) => {
  res.send("Api is running");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
