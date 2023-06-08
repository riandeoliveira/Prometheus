import { z } from "zod";

export const generationSchema = z.object({
  project_type: z.string({ required_error: "obrigatorio" }),
});

export type GenerationSchema = typeof generationSchema;
export type GenerationData = z.infer<GenerationSchema>;
