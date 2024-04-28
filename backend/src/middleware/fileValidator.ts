import { Request, Response, NextFunction } from 'express';
import Joi, { ObjectSchema, ValidationResult } from 'joi';

export const fileValidator = async (req: Request, res: Response, next: NextFunction) => {
  const schema: ObjectSchema = Joi.object({
    description: Joi.string().required(),
    filePath: Joi.string().required(),
  });

  const { error, value }: ValidationResult<any> = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details.map((err) => err.message) });
  }
  next();
};

