import ejs from "ejs";
import fs from "fs";
import { glob } from "glob";

export class TemplateService {
  private timestamp: number;

  constructor() {
    this.timestamp = Date.now();
  }

  public copyToPublicDirectory = (source: string): void => {
    fs.cpSync(source, `./public/${this.timestamp}`, { recursive: true });
  };

  public findAll = async (): Promise<string[]> => {
    const allTemplatesFiles: string[] = await glob(
      `./public/${this.timestamp}/**/*.ejs`,
      { dot: true }
    );

    return allTemplatesFiles;
  };

  public renderFileList = (fileList: string[]): void => {
    fileList.map((file) => {
      const filePath: string = fs.readFileSync(file, "utf-8");

      const renderedContent: string = ejs.render(filePath, {
        data: {
          author: "Rian Oliveira",
          githubUsername: "riandeoliveira",
          projectName: "BinanceAPP",
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
        },
      });

      fs.writeFileSync(file.slice(0, -4), renderedContent);
      fs.unlinkSync(file);
    });
  };
}
