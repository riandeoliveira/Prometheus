import { Request, Response } from "express";
import { TemplateRepository } from "../repositories/TemplateRepository";
import { TemplateService } from "../services/TemplateService";

class TemplateController {
  public generate = async (request: Request, response: Response) => {
    const timestamp: number = Date.now();

    const templateRepository: TemplateRepository = new TemplateRepository();

    const templateService: TemplateService = new TemplateService(
      "./src/templates/react_nextjs",
      `./public/${timestamp}`,
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
