import cors from "cors";
import express, { Express } from "express";
import { templateController } from "./controllers/TemplateController";
import { validateSchema } from "./middlewares/validate-schema";
import { templateSchema } from "./schemas/template-schema";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.post(
  "/api/generate",
  validateSchema(templateSchema),
  templateController.generate
);

app.get("/", (req, res) => {
  console.log("alkdhkjlasd");

  res.json({ message: "hello" });
});

app.listen(8000, () => {
  console.log("Server running!");
});
