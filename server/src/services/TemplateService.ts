import archiver, { Archiver } from "archiver";
import ejs from "ejs";
import fsSync, { WriteStream } from "fs";
import { glob } from "glob";
import { basename } from "path";
import { TemplateData } from "../schemas/template-schema";
import { FileSystemService } from "./FileSystemService";

export class TemplateService extends FileSystemService {
  constructor(template: TemplateData) {
    super(template);
  }

  public async createPathList(): Promise<void> {
    try {
      const pathList: string[] = await glob(`${this.target}/**/*.ejs`, {
        dot: true,
      });

      for (const path of pathList) {
        const ignoredFiles: string[] = this.ignoredFiles;

        const fileName: string = basename(path);
        const isNotIgnoredFile: boolean = !ignoredFiles.includes(fileName);

        if (isNotIgnoredFile) this.pathList.push(path);
        else fsSync.unlinkSync(path);
      }
    } catch (error) {
      console.log("\nERROR! Cannot create path list\n");
      console.log(error);
    }
  }

  public renderTemplates(): void {
    try {
      for (const path of this.pathList) {
        const fileContent: string = fsSync.readFileSync(path, "utf-8");

        const renderedContent: string = ejs.render(fileContent, {
          data: this.template,
        });

        const fileWithoutExtension: string = path.slice(0, -4);

        fsSync.writeFileSync(fileWithoutExtension, renderedContent);
        fsSync.unlinkSync(path);
      }
    } catch (error: unknown) {
      console.log("\nERROR! Cannot render templates\n");
      console.log(error);
    }
  }

  public zip(): Promise<string> {
    const path: string = `${this.target}.zip`;
    const archive: Archiver = archiver("zip", { zlib: { level: 9 } });
    const output: WriteStream = fsSync.createWriteStream(path);

    archive.pipe(output);
    archive.directory(this.target, false);

    return new Promise((resolve, reject) => {
      output.on("close", () => resolve(`${this.target}.zip`));
      archive.on("error", (error) => reject(error));

      archive.finalize();
    });
  }
}
