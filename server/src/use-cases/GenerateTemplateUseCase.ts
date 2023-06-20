import { TemplateService } from "../services/TemplateService";

export class GenerateTemplateUseCase {
  constructor(private readonly templateService: TemplateService) {}

  public async execute(): Promise<string> {
    try {
      this.templateService.handleIgnoredFiles();

      await this.templateService.copyTemplatesToPublicDirectory();
      await this.templateService.createPathList();
      await this.templateService.deleteAllEmptyDirectories();

      this.templateService.renderTemplates();

      const template: string = await this.templateService.zip();

      return template;

      // return "";
    } catch (error) {
      console.log("\nERROR! Cannot generate template\n");
      console.log(error);

      return `${error}`;
    }
  }
}
