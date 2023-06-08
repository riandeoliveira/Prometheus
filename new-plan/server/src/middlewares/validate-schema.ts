import { NextFunction, Request, Response } from "express";
import { TemplateSchema } from "../schemas/template-schema";

export const validateSchema =
  (schema: TemplateSchema) =>
  (request: Request, response: Response, next: NextFunction) => {
    try {
      schema.parse(request.body);

      next();
    } catch (error: unknown) {
      return response.status(400).send(error);
    }
  };
