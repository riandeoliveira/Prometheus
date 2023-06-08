interface ITemplateData {
  author: string;
  backend: "Firebase" | "NextJS API";
  currentYear: number;
  description: string;
  email: string;
  githubRepoName: string;
  githubUsername: string;
  keywords: string[];
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
      lowerCaseProjectName: "binance_app",
      projectName: "BinanceAPP",
      stateManagement: "Zustand",
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
    if (this.data.backend !== "Firebase") {
      this.ignoredFiles.push("env.d.ts.ejs");
      this.ignoredFiles.push("firebase.ts.ejs");
    }

    if (this.data.style !== "CSS Modules") {
      this.ignoredFiles.push("styles.module.css.ejs");
    }

    if (this.data.style !== "SASS Modules") {
      this.ignoredFiles.push(".stylelintrc.json.ejs");
    }

    if (this.data.style !== "TailwindCSS") {
      this.ignoredFiles.push("postcss.config.js.ejs");
      this.ignoredFiles.push("tailwind.config.js.ejs");
    }
  };
}
