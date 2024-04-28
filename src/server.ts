import express from "express";
import router from "./routes/fileRoute";
import { connectDB } from "./config/db"
import dotenv from 'dotenv';

connectDB();

dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(express.json());


app.use("/", router);

app.listen(4000, () => {
  console.log(`Server running on port ${port}`);
});
