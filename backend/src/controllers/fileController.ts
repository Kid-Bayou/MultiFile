import { Request, Response } from 'express';
import FileModel from "../model/file";
import multer from "multer"
import dotenv from 'dotenv';

dotenv.config();
const path = process.env.MULTER_FILEPATH;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

export const upload = multer({ storage: storage });



class FileController {
  async getAllFile(request: Request, response: Response) {
    try {
      const files = await FileModel.findAll();
      return response.status(200).json({ data: files });
    } catch (error) {
      console.error('Error retrieving files:', error);
      return response.sendStatus(500);
    }
  }

  async getFile(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const file = await FileModel.findByPk(id);
      if (file) {
        return response.status(200).json({ data: file });
      } else {
        return response.sendStatus(404);
      }
    } catch (error) {
      console.error('Error retrieving file:', error);
      return response.sendStatus(500);
    }
  }

  async uploadFile(request: Request, response: Response) {
    try {
      upload.single('file')(request, response, async (error: any) => {
        if (error instanceof multer.MulterError) {
          console.error('Error uploading file:', error);
          return response.status(400).json({ error: 'File upload error' });
        } else if (error) {
          console.error('Error uploading file:', error);
          return response.status(500).json({ error: 'Internal server error' });
        }
  
        console.log('Uploaded file:', request.file); // Log the uploaded file
        
        const { description } = request.body;
        const filePath = request.file ? request.file.path : undefined;
  
        if (!description || !filePath) {
          return response.status(400).json({ error: 'Description and file are required' });
        }
  
        const file = await FileModel.create({ description, filePath });
        return response.status(201).json({ message: "File uploaded", data: file });
      });
    } catch (error) {
      console.error('Error creating file:', error);
      return response.sendStatus(500);
    }
  }

  
  

  async updateFile(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { description, filePath } = request.body;
      let file = await FileModel.findByPk(id);
      if (file) {
        await file.update({ description, filePath });
        return response.status(200).json({ message: "File updated", data: file });
      } else {
        return response.sendStatus(404);
      }
    } catch (error) {
      console.error('Error updating file:', error);
      return response.sendStatus(500);
    }
  }
  

  async deleteFile(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const file = await FileModel.findByPk(id);
      if (file) {
        await file.destroy();
        return response.status(200).json({ message: "File deleted" });
      } else {
        return response.sendStatus(404);
      }
    } catch (error) {
      console.error('Error deleting file:', error);
      return response.sendStatus(500);
    }
  }
}

export default new FileController();
