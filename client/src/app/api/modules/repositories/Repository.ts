// import { TemplateData } from "../schemas/template-schema";

export abstract class Repository {
  protected readonly ignoredFiles: string[];
  protected readonly pathList: string[];
  protected readonly source: string;
  protected readonly target: string;
  protected readonly template: any;

  constructor(template: any) {
    this.ignoredFiles = [];
    this.pathList = [];
    this.source = `./src/app/api/modules/templates/${template.project.type}/${template.project.framework}`;
    this.target = `./src/app/api/modules/public/${Date.now()}`;
    this.template = template;
  }
}
