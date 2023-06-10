interface ITemplateData {
  author: string;
  backend: "Firebase" | "NextJS API";
  currentYear: number;
  description: string;
  email: string;
  githubRepoName: string;
  githubUsername: string;
  keywords: string[];
  language: "en" | "pt-BR";
  lowerCaseProjectName: string;
  projectName: string;
  stateManagement: "Context API" | "Redux Toolkit" | "Zustand";
  style: "CSS Modules" | "SASS Modules" | "Styled Components" | "TailwindCSS";
  technologies: string[];
}

interface ITemplateRepository {
  data: ITemplateData;
}

export class TemplateRepository implements ITemplateRepository {
  public data: ITemplateData;
  public ignoredFiles: string[];

  constructor() {
    this.data = {
      author: "Rian Oliveira",
      backend: "Firebase",
      currentYear: new Date().getFullYear(),
      description: "Este é meu projeto.",
      email: "riandiasdeoliveira2001@gmail.com",
      githubRepoName: "BinanceAPP",
      githubUsername: "riandeoliveira",
      keywords: [
        "context-api",
        "css",
        "firebase",
        "javascript",
        "nextjs",
        "react",
        "typescript",
      ],
      language: "pt-BR",
      lowerCaseProjectName: "binance_app",
      projectName: "BinanceAPP",
      stateManagement: "Redux Toolkit",
      style: "Styled Components",
      technologies: [
        "css",
        "firebase",
        "html",
        "js",
        "markdown",
        "next",
        "react",
        "ts",
      ],
    };
    this.ignoredFiles = [];

    this.handleIgnoredFiles();
  }

  private handleIgnoredFiles = (): void => {
    if (this.data.stateManagement !== "Context API") {
      this.ignoredFiles.push("CounterContext.tsx.ejs");
      this.ignoredFiles.push("UserContext.tsx.ejs");
    }

    if (this.data.stateManagement !== "Zustand") {
      this.ignoredFiles.push("useCounterStore.ts.ejs");
      this.ignoredFiles.push("useUserStore.ts.ejs");
    }

    if (this.data.stateManagement !== "Redux Toolkit") {
      this.ignoredFiles.push("redux.d.ts.ejs");
      this.ignoredFiles.push("StoreProvider.tsx.ejs");
      this.ignoredFiles.push("counterSlice.ts.ejs");
      this.ignoredFiles.push("userSlice.ts.ejs");
      this.ignoredFiles.push("useCounter.ts.ejs");
      this.ignoredFiles.push("useUser.ts.ejs");
      this.ignoredFiles.push("index.ts.ejs");
    }

    if (this.data.backend !== "Firebase") {
      this.ignoredFiles.push("env.d.ts.ejs");
      this.ignoredFiles.push("firebase.ts.ejs");
    }

    if (this.data.style !== "CSS Modules") {
      this.ignoredFiles.push("styles.module.css.ejs");
      this.ignoredFiles.push("global.css.ejs");
    }

    if (this.data.style !== "SASS Modules") {
      this.ignoredFiles.push(".stylelintrc.json.ejs");
      this.ignoredFiles.push("styles.module.scss.ejs");
      this.ignoredFiles.push("_animations.scss.ejs");
      this.ignoredFiles.push("_breakpoints.scss.ejs");
      this.ignoredFiles.push("_colors.scss.ejs");
      this.ignoredFiles.push("_components.scss.ejs");
      this.ignoredFiles.push("_functions.scss.ejs");
      this.ignoredFiles.push("_global.scss.ejs");
      this.ignoredFiles.push("_index.scss.ejs");
    }

    if (this.data.style !== "Styled Components") {
      this.ignoredFiles.push("styles.ts.ejs");
      this.ignoredFiles.push("animations.ts.ejs");
      this.ignoredFiles.push("colors.ts.ejs");
      this.ignoredFiles.push("components.ts.ejs");
      this.ignoredFiles.push("devices.ts.ejs");
      this.ignoredFiles.push("functions.ts.ejs");
      this.ignoredFiles.push("global.ts.ejs");
      this.ignoredFiles.push("keyframes.ts.ejs");
      this.ignoredFiles.push("theme.ts.ejs");
      this.ignoredFiles.push("registry.tsx.ejs");
    }

    if (this.data.style !== "TailwindCSS") {
      this.ignoredFiles.push("postcss.config.js.ejs");
      this.ignoredFiles.push("tailwind.config.js.ejs");
      this.ignoredFiles.push("globals.css.ejs");
      this.ignoredFiles.push("Greetings.tsx.ejs");
    }

    if (this.data.style === "TailwindCSS") {
      this.ignoredFiles.push("index.tsx.ejs");
    }
  };
}
