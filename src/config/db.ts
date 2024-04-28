import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://kidisttgebrehiwot:3IUDIEOUCekA2u3Z@cluster0.qhnfhlc.mongodb.net/", {
      dbName: "multifile-app",
    });
    console.log("Database Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
