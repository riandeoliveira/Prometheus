import fs from "fs";
import { NextRequest } from "next/server";
import { TemplateService } from "../modules/services/TemplateService";
import { GenerateTemplateUseCase } from "../modules/use-cases/GenerateTemplateUseCase";

export const POST = async (request: NextRequest) => {
  const templateData = await request.json();

  const templateService = new TemplateService(templateData);
  const generateTemplateUseCase = new GenerateTemplateUseCase(templateService);

  const template: string = await generateTemplateUseCase.execute();

  const content = fs.readFileSync(template);

  return new Response(content);
};
