"use client";

import { Autocomplete, Button, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import type { NextPage } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ProtectedRoute } from "routes/ProtectedRoute";
import styles from "./styles.module.scss";

const Home: NextPage = (): JSX.Element => {
  const [framework, setFramework] = useState<"frontend" | "backend">();
  const [frontendFramework, setFrontendFramework] = useState("");
  const [stateManagement, setStateManagement] = useState("");

  const languages = [
    { label: "en-US", value: "en-US" },
    { label: "pt-BR", value: "pt-BR" },
  ];

  const { getValues, register, setValue, handleSubmit } = useForm({
    defaultValues: {
      author: {
        name: "",
        email: "",
        githubUsername: ""
      },
      project: {
        type: "",
        name: "",
        description: "",
        keywords: [] as string[]
      },
      language: "",
      framework: "",
      style: "",
      stateManagement: ""
    }
  });

  const onSubmit = async () => {
    // async request which may result error
    try {
      // await fetch()
    } catch (e) {
      // handle your error
    }
  };

  const onSendData = (): void => {
    console.clear();
    console.log(JSON.stringify(getValues(), true, 2));

    handleSubmit(onSubmit);
  };

  return (
    <ProtectedRoute>
      <div className={styles.page}>
        <h1 className={styles.title}>🏗️ Prometheus 🛠️</h1>
        <h2 className={styles.subtitle}>A template generator...</h2>
        <div className={styles.box}>
          <TextField
            type="text"
            label="Nome do Autor"
            fullWidth
            {...register("author.name")}
          />
          <TextField
            type="text"
            label="Nome de Usuário do GitHub"
            fullWidth
            {...register("author.githubUsername")}
          />
          <TextField
            type="email"
            label="E-mail do Autor"
            fullWidth
            {...register("author.email")}
          />
          <TextField
            type="text"
            label="Nome do Projeto"
            fullWidth
            {...register("project.name")}
          />
          <TextField
            type="text"
            label="Descrição Breve do Projeto"
            fullWidth
            {...register("project.description")}
          />
          <Autocomplete
            options={languages}
            getOptionLabel={(option) => option.label}
            renderInput={(params: any) => <TextField {...params} label="Idioma" />}
            onChange={(_, option: any) => setValue("language", option.value)}
            fullWidth
          />
          <Autocomplete
            options={[]}
            freeSolo
            multiple
            fullWidth
            renderInput={(params: any) => <TextField {...params} label="Palavras-chaves" />}
            onChange={(_, option) => {
              const keywords = getValues().project.keywords;
              const lastOption = option[option.length - 1];

              setValue("project.keywords", [...keywords, lastOption]);
            }}
          />
          <RadioGroup placeholder="jkadhfkja">
            <FormControlLabel
              value="frontend"
              control={<Radio />}
              label="Web (Front-End)"
              onChange={() => {
                setValue("project.type", "frontend");
                setFramework("frontend");
              }}
            />
            <FormControlLabel
              value="backend"
              control={<Radio />}
              label="API (Back-End)"
              onChange={() => {
                setValue("project.type", "backend");
                setFramework("backend");
              }}
            />
          </RadioGroup>
          {
            framework === "frontend" && (
              <RadioGroup>
                <FormControlLabel
                  value="angular"
                  control={<Radio />}
                  label="Angular"
                  onChange={() => setValue("framework", "angular")}
                />
                <FormControlLabel
                  value="react_nextjs"
                  control={<Radio />}
                  label="React + NextJS"
                  onChange={() => {
                    setValue("framework", "react_nextjs");
                    setFrontendFramework("react_nextjs");
                  }}
                />
                <FormControlLabel
                  value="svelte"
                  control={<Radio />}
                  label="Svelte"
                  onChange={() => setValue("framework", "svelte")}
                />
                <FormControlLabel
                  value="vuejs"
                  control={<Radio />}
                  label="VueJS"
                  onChange={() => setValue("framework", "vuejs")}
                />
              </RadioGroup>
            )
          }
          {
            frontendFramework === "react_nextjs" && (
              <RadioGroup>
                <FormControlLabel
                  value="css_modules"
                  control={<Radio />}
                  label="CSS Modules"
                  onChange={() => setValue("style", "css_modules")}
                />
                <FormControlLabel
                  value="sass_modules"
                  control={<Radio />}
                  label="SASS Modules"
                  onChange={() => setValue("style", "sass_modules")}
                />
                <FormControlLabel
                  value="styled_components"
                  control={<Radio />}
                  label="Styled Components"
                  onChange={() => setValue("style", "styled_components")}
                />
                <FormControlLabel
                  value="tailwindcss"
                  control={<Radio />}
                  label="TailwindCSS"
                  onChange={() => setValue("style", "tailwindcss")}
                />
              </RadioGroup>
            )
          }
          {
            frontendFramework === "react_nextjs" && (
              <RadioGroup>
                <FormControlLabel
                  value="context_api"
                  control={<Radio />}
                  label="Context API"
                  onChange={() => setValue("stateManagement", "context_api")}
                />
                <FormControlLabel
                  value="redux_toolkit"
                  control={<Radio />}
                  label="Redux Toolkit"
                  onChange={() => setValue("stateManagement", "redux_toolkit")}
                />
                <FormControlLabel
                  value="zustand"
                  control={<Radio />}
                  label="Zustand"
                  onChange={() => setValue("stateManagement", "zustand")}
                />
              </RadioGroup>
            )
          }
          {
            framework === "backend" && (
              <RadioGroup>
                <FormControlLabel
                  value="laravel"
                  control={<Radio />}
                  label="Laravel"
                  onChange={() => setValue("framework", "laravel")}
                />
                <FormControlLabel
                  value="aspnet"
                  control={<Radio />}
                  label="ASP.NET"
                  onChange={() => setValue("framework", "aspnet")}
                />
              </RadioGroup>
            )
          }
          <Button variant="contained" onClick={onSendData} fullWidth>Enviar</Button>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Home;
