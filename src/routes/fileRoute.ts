import express from "express";
import Filecontroller from "../controllers/fileController";
import { fileValidator } from "../middleware/fileValidator";

const router = express.Router();

router.get("/file", Filecontroller.getAllFile);
router.get("/file/:id", Filecontroller.getFile);
router.post("/file", fileValidator, Filecontroller.createFile);
router.put("/file/:id", Filecontroller.updateFile);
router.delete("/file/:id", Filecontroller.deleteFile);

export default router;
