interface ITemplateData {
  author: string;
  backend: string;
  currentYear: number;
  githubUsername: string;
  lowerCaseProjectName: string;
  projectName: string;
  stateManagement: string;
  technologies: string[];
}

interface ITemplateRepository {
  data: ITemplateData;
}

export class TemplateRepository implements ITemplateRepository {
  public data: ITemplateData;

  constructor() {
    this.data = {
      author: "Rian Oliveira",
      backend: "asd",
      currentYear: new Date().getFullYear(),
      githubUsername: "riandeoliveira",
      lowerCaseProjectName: "binance_app",
      projectName: "BinanceAPP",
      stateManagement: "context_api",
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
  }
}
