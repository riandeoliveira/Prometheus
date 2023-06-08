import { z } from "zod";

export const templateSchema = z.object({
  project_type: z.string({ required_error: "obrigatorio" }),
});

export type TemplateSchema = typeof templateSchema;
export type TemplateData = z.infer<TemplateSchema>;
