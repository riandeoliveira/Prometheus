import { Request, Response } from "express";
import { TemplateService } from "../services/TemplateService";

class GenerationController {
  public generate = async (request: Request, response: Response) => {
    const templateService: TemplateService = new TemplateService();

    try {
      // templateService.copyToPublicDirectory("./src/templates/react_nextjs");

      // const templateFileList: string[] = await templateService.findAll();

      // templateService.renderFileList(templateFileList);
      // templateService.zip();

      // const zipDirectoryPath: string = `${templateService.destinationPath}.zip`;

      return response.download("./teste.zip");
    } catch (error: unknown) {
      return response.json(error);
    }
  };
}

export const generationController: GenerationController =
  new GenerationController();
