import { TemplateData } from "../schemas/template-schema";

export abstract class Repository {
  protected readonly ignoredFiles: string[];
  protected readonly pathList: string[];
  protected readonly source: string;
  protected readonly target: string;
  protected readonly template: TemplateData;

  constructor(template: TemplateData) {
    this.ignoredFiles = [];
    this.pathList = [];
    this.source = `./src/templates/${template.project.type}/${template.project.framework}`;
    this.target = `./public/${Date.now()}`;
    this.template = template;
  }
}
