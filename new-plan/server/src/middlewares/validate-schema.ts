import { NextFunction, Request, Response } from "express";
import { GenerationSchema } from "../schemas/generation-schema";

export const validateSchema =
  (schema: GenerationSchema) =>
  (request: Request, response: Response, next: NextFunction) => {
    try {
      schema.parse(request.body);

      next();
    } catch (error: unknown) {
      return response.status(400).send(error);
    }
  };
