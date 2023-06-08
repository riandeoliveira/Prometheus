import { Request, Response } from "express";
import { TemplateRepository } from "../repositories/TemplateRepository";
import { TemplateService } from "../services/TemplateService";

class GenerationController {
  public generate = async (request: Request, response: Response) => {
    const timestamp: number = Date.now();

    const templateRepository: TemplateRepository = new TemplateRepository();

    const templateService: TemplateService = new TemplateService(
      "./src/templates/react_nextjs",
      `./public/${timestamp}`,
      templateRepository
    );

    // TODO: incluir o arquivo env.d.ts.ejs somente se o backend for firebase

    try {
      templateService.copyToPublicDirectory();

      await templateService.setFileList();

      templateService.renderFileList();

      const zipDirectoryPath = await templateService.zip();

      console.log(zipDirectoryPath);

      return response.download(zipDirectoryPath);
    } catch (error: unknown) {
      return response.json(error);
    }
  };
}

export const generationController: GenerationController =
  new GenerationController();
