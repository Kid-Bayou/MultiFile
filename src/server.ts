import express from "express";
import mongoose from "mongoose";
import router from "./routes/fileRoute";
import { connectDB } from "./config/db" 

connectDB();

const app = express();
app.use(express.json());


app.use("/", router);

app.listen(4000, () => {
  console.log(`Server running on http://localhost:4000`);
});
