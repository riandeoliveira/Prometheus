import archiver, { Archiver } from "archiver";
import ejs from "ejs";
import fs, { WriteStream } from "fs";
import { glob } from "glob";
import { basename } from "path";
import { TemplateRepository } from "../repositories/TemplateRepository";

export class TemplateService {
  private pathList: string[];

  constructor(
    private readonly source: string,
    private readonly target: string,
    private readonly templateRepository: TemplateRepository
  ) {
    this.pathList = [];
  }

  public copyToPublicDirectory = (): void => {
    fs.cpSync(this.source, this.target, { recursive: true });
  };

  public renderFileList = (): void => {
    try {
      this.pathList.map((path) => {
        const fileContent: string = fs.readFileSync(path, "utf-8");

        const renderedContent: string = ejs.render(fileContent, {
          data: this.templateRepository.data,
        });

        const fileWithoutExtension: string = path.slice(0, -4);

        fs.writeFileSync(fileWithoutExtension, renderedContent);
        fs.unlinkSync(path);
      });
    } catch (error: unknown) {
      console.log("\nERROR! Cannot render file list\n");
      console.log(error);
    }
  };

  public setPathList = async (): Promise<void> => {
    const directoriesPattern: string = `${this.target}/**`;
    const filesPattern: string = `${this.target}/**/*.ejs`;

    const directoriesPathList: string[] = await glob(directoriesPattern, {
      dot: true,
    });
    const filesPathList: string[] = await glob(filesPattern, { dot: true });

    this.pathList = filesPathList.filter((path) => {
      const ignoredFiles: string[] = this.templateRepository.ignoredFiles;

      const fileName: string = basename(path);
      const isNotIgnoredFile: boolean = !ignoredFiles.includes(fileName);

      if (isNotIgnoredFile) return path;
      else fs.unlinkSync(path);
    });

    directoriesPathList.filter((path) => {
      fs.stat(path, (_, stats) => {
        if (stats?.isDirectory()) {
          if (fs.readdirSync(path).length === 0) {
            fs.rmdirSync(path);
          }
        }
      });
    });
  };

  public zip = (): Promise<string> => {
    const path: string = `${this.target}.zip`;
    const output: WriteStream = fs.createWriteStream(path);
    const archive: Archiver = archiver("zip", { zlib: { level: 9 } });

    archive.pipe(output);
    archive.directory(this.target, false);

    return new Promise((resolve, reject) => {
      output.on("close", () => {
        resolve(`${this.target}.zip`);
      });

      archive.on("error", (error) => {
        reject(error);
      });

      archive.finalize();
    });
  };
}
