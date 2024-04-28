import express, { response } from 'express';
import { FileModel } from '../model/file'

class FileController{
    getAllFile = async (request: express.Request, response: express.Response)=>{
    try {
        const files = await FileModel.find();
        return response.status(200).json({data: files})
    } catch (error) {
        return response.sendStatus(400)
    }
}

getFile = async (request: express.Request, response: express.Response)=>{
    try {
        const {id} = request.params;
        const file = await FileModel.findById(id);
        return response.status(200).json({data: file})
    } catch (error) {
        return response.sendStatus(400)
    }
}

createFile = async (request: express.Request, response: express.Response)=>{
    try {
        const {description, filePath} = request.body;
        const file = new FileModel({
            description, filePath
        });
        await file.save();
        return response.status(201).json({message: "FileCreated", data: file})
    } catch (error) {
        return response.sendStatus(400)
    }
}

updateFile = async (request: express.Request, response: express.Response)=>{
    try {
        const {id} = request.params;
        const {description, filePath} = request.body;
        const file = await FileModel.findById(id);
        if(file){
            file.description = description;
            file.filePath = filePath;
            await file.save();
            return response.status(200).json({message: "File UPdated", data: file})
        }
        return response.sendStatus(400);
    } catch (error) {
        return response.sendStatus(400)
    }
}

deleteFile = async (request: express.Request, response: express.Response)=>{
    try {
        const {id} = request.params;
        await FileModel.findByIdAndDelete({_id: id});
        return response.status(200).json({message: "File Deleted"})
    } catch (error) {
        return response.sendStatus(400)
    }
}

}

export default new FileController();
