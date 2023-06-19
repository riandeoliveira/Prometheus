type Languages = "en-US" | "pt-BR";

export type FormData = {
  languages: Languages[];
};

export const formData: FormData = {
  languages: ["en-US", "pt-BR"],
};
