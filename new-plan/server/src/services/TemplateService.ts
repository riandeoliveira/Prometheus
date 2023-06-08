import archiver, { Archiver } from "archiver";
import ejs from "ejs";
import fs, { WriteStream } from "fs";
import { glob } from "glob";

export class TemplateService {
  public readonly destinationPath: string;

  constructor() {
    const timestamp: number = Date.now();

    this.destinationPath = `./public/${timestamp}`;
  }

  public copyToPublicDirectory = (source: string): void => {
    fs.cpSync(source, this.destinationPath, { recursive: true });
  };

  public findAll = async (): Promise<string[]> => {
    const pattern: string = `${this.destinationPath}/**/*.ejs`;

    const allTemplatesFiles: string[] = await glob(pattern, { dot: true });

    return allTemplatesFiles;
  };

  public renderFileList = (fileList: string[]): void => {
    fileList.map((file) => {
      const filePath: string = fs.readFileSync(file, "utf-8");

      const renderedContent: string = ejs.render(filePath, {
        data: {
          author: "Rian Oliveira",
          currentYear: new Date().getFullYear(),
          githubUsername: "riandeoliveira",
          lowerCaseProjectName: "binance_app",
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

      const fileWithoutExtension: string = file.slice(0, -4);

      fs.writeFileSync(fileWithoutExtension, renderedContent);
      fs.unlinkSync(file);
    });
  };

  public zip = (): void => {
    const path: string = `${this.destinationPath}.zip`;
    const output: WriteStream = fs.createWriteStream(path);
    const archive: Archiver = archiver("zip", { zlib: { level: 9 } });

    archive.pipe(output);
    archive.directory(this.destinationPath, false);
    archive.finalize();
  };
}
