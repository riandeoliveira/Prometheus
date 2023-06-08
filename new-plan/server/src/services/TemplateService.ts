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
    this.pathList.map((path) => {
      const fileContent: string = fs.readFileSync(path, "utf-8");

      const renderedContent: string = ejs.render(fileContent, {
        data: this.templateRepository.data,
      });

      const fileWithoutExtension: string = path.slice(0, -4);

      fs.writeFileSync(fileWithoutExtension, renderedContent);
      fs.unlinkSync(path);
    });
  };

  public setFileList = async (): Promise<void> => {
    const pattern: string = `${this.target}/**/*.ejs`;

    this.pathList = await glob(pattern, { dot: true });
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

  public sla = () => {
    console.clear();

    const data = {
      backend: "firebase",
    };

    const ignoredFiles = ["env.d.ts.ejs"];

    const nsei = this.pathList.filter((path) => {
      const file: string = basename(path);
      const isIgnoredFile: boolean = !ignoredFiles.includes(file);

      if (isIgnoredFile) return path;
    });

    console.log(nsei);
  };
}
