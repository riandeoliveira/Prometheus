"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Autocomplete,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import formData from "data/form-data.json";
import type { NextPage } from "next";
import { FormProvider, useForm } from "react-hook-form";
import { ProtectedRoute } from "routes/ProtectedRoute";
import { templateSchema } from "schemas/template-schema";
import styles from "./styles.module.scss";

const Home: NextPage = (): JSX.Element => {
  const formMethods = useForm({
    defaultValues: {
      author: {
        name: "",
        email: "",
        githubUsername: "",
        language: "en-US",
      },
      project: {
        type: "web",
        framework: "",
        name: "",
        description: "",
        technologies: [] as string[],
        keywords: [] as string[],
      },
      stack: {
        frontend: {
          styling: "",
          stateManagement: "",
        },
        backend: {},
      },
    },
    resolver: zodResolver(templateSchema),
  });

  const {
    getValues,
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = formMethods;

  const form = getValues();

  const projectType = watch("project.type");
  const projectFramework = watch("project.framework");

  console.clear();
  console.log(JSON.stringify(form, null, 2));

  const submit = (): void => { };

  return (
    <ProtectedRoute>
      <FormProvider {...formMethods}>
        <div className={styles.page}>
          <h1 className={styles.title}>🏗️ Prometheus 🛠️</h1>
          <h2 className={styles.subtitle}>A template generator...</h2>
          <form className={styles.form} onSubmit={handleSubmit(submit)}>
            <TextField
              type="text"
              label="Nome do Autor"
              fullWidth
              error={Boolean(errors.author?.name)}
              helperText={errors.author?.name?.message}
              {...register("author.name")}
            />
            <TextField
              type="text"
              label="Nome de Usuário do GitHub"
              fullWidth
              error={Boolean(errors.author?.githubUsername)}
              helperText={errors.author?.githubUsername?.message}
              {...register("author.githubUsername")}
            />
            <TextField
              type="email"
              label="E-mail do Autor"
              fullWidth
              error={Boolean(errors.author?.email)}
              helperText={errors.author?.email?.message}
              {...register("author.email")}
            />
            <Autocomplete
              options={formData.languages}
              value={form.author.language}
              getOptionLabel={(option) => option}
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  label="Idioma"
                  error={Boolean(errors.author?.language)}
                  helperText={errors.author?.language?.message}
                />
              )}
              fullWidth
              onChange={(_, option) =>
                setValue("author.language", option as string)
              }
            />
            <TextField
              type="text"
              label="Nome do Projeto"
              fullWidth
              error={Boolean(errors.project?.name)}
              helperText={errors.project?.name?.message}
              {...register("project.name")}
            />
            <TextField
              type="text"
              label="Descrição Breve do Projeto"
              fullWidth
              error={Boolean(errors.project?.description)}
              helperText={errors.project?.description?.message}
              {...register("project.description")}
            />
            <Autocomplete
              options={formData.technologies}
              freeSolo
              multiple
              fullWidth
              renderInput={(params: any) => (
                <TextField {...params} label="Tecnologias utilizadas" />
              )}
              onChange={(_, option) => {
                const technologies: string[] = form.project.technologies;
                const lastOption: string = option[option.length - 1];

                setValue("project.technologies", [...technologies, lastOption]);
              }}
            />
            <Autocomplete
              options={[]}
              freeSolo
              multiple
              fullWidth
              renderInput={(params: any) => (
                <TextField {...params} label="Palavras-chaves" />
              )}
              onChange={(_, option) => {
                const keywords: string[] = form.project.keywords;
                const lastOption: string = option[option.length - 1];

                setValue("project.keywords", [...keywords, lastOption]);
              }}
            />
            <RadioGroup defaultValue="frontend">
              <FormControlLabel
                value="frontend"
                control={<Radio />}
                label="Web (Front-End)"
                onChange={() => {
                  setValue("project.type", "web");
                }}
              />
              <FormControlLabel
                value="backend"
                control={<Radio />}
                label="API (Back-End)"
                onChange={() => {
                  setValue("project.type", "api");
                }}
              />
            </RadioGroup>
            {projectType === "web" && (
              <RadioGroup>
                <FormControlLabel
                  value="angular"
                  control={<Radio />}
                  label="Angular"
                  onChange={() => setValue("project.framework", "angular")}
                />
                <FormControlLabel
                  value="react_nextjs"
                  control={<Radio />}
                  label="React + NextJS"
                  onChange={() => {
                    setValue("project.framework", "react_nextjs");
                  }}
                />
                <FormControlLabel
                  value="svelte"
                  control={<Radio />}
                  label="Svelte"
                  onChange={() => setValue("project.framework", "svelte")}
                />
                <FormControlLabel
                  value="vuejs"
                  control={<Radio />}
                  label="VueJS"
                  onChange={() => setValue("project.framework", "vuejs")}
                />
              </RadioGroup>
            )}
            {projectFramework === "react_nextjs" && (
              <RadioGroup>
                <FormControlLabel
                  value="css_modules"
                  control={<Radio />}
                  label="CSS Modules"
                  onChange={() =>
                    setValue("stack.frontend.styling", "css_modules")
                  }
                />
                <FormControlLabel
                  value="sass_modules"
                  control={<Radio />}
                  label="SASS Modules"
                  onChange={() =>
                    setValue("stack.frontend.styling", "sass_modules")
                  }
                />
                <FormControlLabel
                  value="styled_components"
                  control={<Radio />}
                  label="Styled Components"
                  onChange={() =>
                    setValue("stack.frontend.styling", "styled_components")
                  }
                />
                <FormControlLabel
                  value="tailwindcss"
                  control={<Radio />}
                  label="TailwindCSS"
                  onChange={() =>
                    setValue("stack.frontend.styling", "tailwindcss")
                  }
                />
              </RadioGroup>
            )}
            {projectFramework === "react_nextjs" && (
              <RadioGroup>
                <FormControlLabel
                  value="context_api"
                  control={<Radio />}
                  label="Context API"
                  onChange={() =>
                    setValue("stack.frontend.stateManagement", "context_api")
                  }
                />
                <FormControlLabel
                  value="redux_toolkit"
                  control={<Radio />}
                  label="Redux Toolkit"
                  onChange={() =>
                    setValue("stack.frontend.stateManagement", "redux_toolkit")
                  }
                />
                <FormControlLabel
                  value="zustand"
                  control={<Radio />}
                  label="Zustand"
                  onChange={() =>
                    setValue("stack.frontend.stateManagement", "zustand")
                  }
                />
              </RadioGroup>
            )}
            {projectType === "api" && (
              <RadioGroup>
                <FormControlLabel
                  value="laravel"
                  control={<Radio />}
                  label="Laravel"
                  onChange={() => setValue("project.framework", "laravel")}
                />
                <FormControlLabel
                  value="aspnet"
                  control={<Radio />}
                  label="ASP.NET"
                  onChange={() => setValue("project.framework", "aspnet")}
                />
              </RadioGroup>
            )}
            <Button type="submit" variant="contained" fullWidth>
              Enviar
            </Button>
          </form>
        </div>
      </FormProvider>
    </ProtectedRoute>
  );
};

export default Home;
