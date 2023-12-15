import express from "express";
import mongoose from "mongoose";
import Router from "./route/authRoute.js";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "./dtechfront/build")));

app.use("/api/auth", Router);

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./dtechfront/build/index.html"));
});

app.listen(process.env.PORT || 8081, () => {
  console.log("server is running on 8081");
});

mongoose
  .connect("mongodb+srv://chauhantarun0101:Tarun123@cluster0.aub5cv6.mongodb.net/UserData")
  .then(() => {
    console.log("database is connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
