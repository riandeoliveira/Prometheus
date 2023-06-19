import { Request, Response } from "express";
import { TemplateRepository } from "../repositories/TemplateRepository";
import { TemplateData } from "../schemas/template-schema";
import { TemplateService } from "../services/TemplateService";

class TemplateController {
  public generate = async (request: Request, response: Response) => {
    const data: TemplateData = request.body;

    const templateRepository: TemplateRepository = new TemplateRepository(data);

    const templateService: TemplateService = new TemplateService(
      "./src/templates/web/react_nextjs",
      `./public/${Date.now()}`,
      templateRepository
    );

    try {
      templateService.copyToPublicDirectory();

      await templateService.setPathList();

      templateService.renderFileList();

      const zipDirectoryPath: string = await templateService.zip();

      return response.download(zipDirectoryPath);
    } catch (error: unknown) {
      return response.json(error);
    }
  };
}

export const templateController: TemplateController = new TemplateController();
