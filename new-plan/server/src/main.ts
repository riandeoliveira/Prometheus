import express, { Express } from "express";
import { generationController } from "./controllers/GenerationController";
import { validateSchema } from "./middlewares/validate-schema";
import { generationSchema } from "./schemas/generation-schema";

const app: Express = express();

app.use(express.json());

app.post(
  "/api/generate",
  validateSchema(generationSchema),
  generationController.generate
);

app.get("/", (req, res) => {
  res.download("./src/teste-arquivo.txt");
});

app.listen(8000);
