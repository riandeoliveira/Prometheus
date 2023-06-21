import cors from "cors";
import express, { Express, Request, Response } from "express";
import fs from "fs";
import { TemplateData } from "./schemas/template-schema";
import { TemplateService } from "./services/TemplateService";
import { GenerateTemplateUseCase } from "./use-cases/GenerateTemplateUseCase";

const app: Express = express();

app.use(cors());
app.use(express.json());

// validateSchema(templateSchema),

app.post("/api/generate", async (request: Request, response: Response) => {
  const templateData: TemplateData = request.body;

  const templateService = new TemplateService(templateData);

  const generateTemplateUseCase = new GenerateTemplateUseCase(templateService);

  const template: string = await generateTemplateUseCase.execute();

  return response.status(200).download(template);
});

app.get("/", (req, res) => {
  console.log("alkdhkjlasd");
  console.log("Filesystem contents:", fs.readdirSync("."));

  res.json({ message: "hello" });
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Server running!");
});
