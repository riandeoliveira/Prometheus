import cors from "cors";
import express, { Express, Request, Response } from "express";
import { validateSchema } from "./middlewares/validate-schema";
import { TemplateData, templateSchema } from "./schemas/template-schema";
import { TemplateService } from "./services/TemplateService";
import { GenerateTemplateUseCase } from "./use-cases/GenerateTemplateUseCase";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.post(
  "/api/generate",
  validateSchema(templateSchema),
  async (request: Request, response: Response) => {
    const templateData: TemplateData = request.body;

    const templateService = new TemplateService(templateData);

    const generateTemplateUseCase = new GenerateTemplateUseCase(
      templateService
    );

    const template: string = await generateTemplateUseCase.execute();

    return response.status(200).download(template);
  }
);

app.get("/", (req, res) => {
  console.log("alkdhkjlasd");

  res.json({ message: "hello" });
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Server running!");
});
