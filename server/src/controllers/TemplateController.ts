import { Request, Response } from "express";
import { TemplateRepository } from "../repositories/TemplateRepository";
import { TemplateData } from "../schemas/template-schema";
import { TemplateService } from "../services/TemplateService";

class TemplateController {
  public generate = async (request: Request, response: Response) => {
    const templateData: TemplateData = request.body;

    const templateRepository = new TemplateRepository(templateData);
    const templateService = new TemplateService(templateRepository);

    try {
      const template: string = await templateService.generate();

      return response.download(template);
    } catch (error: unknown) {
      return response.json(error);
    }
  };
}

export const templateController = new TemplateController();
