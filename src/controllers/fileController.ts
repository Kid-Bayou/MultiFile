import { Request, Response } from 'express';
import FileModel from "../model/file";

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
      const { description, filePath } = request.body;
      const file = await FileModel.create({ description, filePath });
      return response.status(201).json({ message: "File uploaded", data: file });
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
