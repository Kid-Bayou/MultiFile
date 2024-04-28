import mongoose from "mongoose";

const FileSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const FileModel = mongoose.model("File", FileSchema);
