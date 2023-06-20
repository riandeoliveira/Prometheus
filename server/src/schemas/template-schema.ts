import z from "zod";

export const templateSchema = z.object({
  author: z.object({
    name: z
      .string()
      .max(255, "Tamanho máximo excedido de 255 caracteres")
      .nonempty("Campo obrigatório!"),
    email: z
      .string()
      .email()
      .max(255, "Tamanho máximo excedido de 255 caracteres")
      .nonempty("Campo obrigatório!"),
    githubUsername: z
      .string()
      .max(39, "Tamanho máximo excedido de 39 caracteres")
      .nonempty("Campo obrigatório!"),
    language: z.string(),
  }),

  project: z.object({
    type: z.union([z.literal("web"), z.literal("api")]),
    framework: z.string().nonempty("Campo obrigatório!"),
    name: z.string().nonempty("Campo obrigatório!"),
    description: z.string().nonempty("Campo obrigatório!"),
    technologies: z.array(z.string()),
    keywords: z.array(z.string()),
  }),

  stack: z.object({
    frontend: z.object({
      styling: z.string(),
      stateManagement: z.string(),
    }),
    backend: z.object({}),
  }),
});

export type TemplateSchema = typeof templateSchema;
export type TemplateData = z.infer<TemplateSchema>;
