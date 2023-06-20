import archiver, { Archiver } from "archiver";
import ejs from "ejs";
import fsSync, { WriteStream } from "fs";
import fs from "fs/promises";
import { glob } from "glob";
import { basename } from "path";
import { TemplateRepository } from "../repositories/TemplateRepository";

export class TemplateService {
  protected source: string;
  protected target: string;
  private pathList: string[];

  constructor(private readonly templateRepository: TemplateRepository) {
    const { project } = templateRepository.data;

    this.source = `./src/templates/${project.type}/${project.framework}`;
    this.target = `./public/${Date.now()}`;
    this.pathList = [];
  }

  public generate = async (): Promise<string> => {
    try {
      await this.copyToPublicDirectory();
      await this.setPathList();
      this.renderFileList();

      const zipDirectoryPath: string = await this.zip();

      return zipDirectoryPath;
    } catch (error: unknown) {
      console.log("\nERROR! Cannot generate template\n");
      console.log(error);

      return `${error}`;
    }
  };

  private copyToPublicDirectory = async (): Promise<void> => {
    try {
      await fs.cp(this.source, this.target, { recursive: true });
    } catch (error: unknown) {
      console.log("\nERROR! Cannot copy files to public directory\n");
      console.log(error);
    }
  };

  private removeEmptyDirectoriesByPathList = (pathList: string[]): void => {
    try {
      for (const path of pathList) {
        fsSync.stat(path, (_, stats) => {
          if (stats?.isDirectory()) {
            const files: string[] = fsSync.readdirSync(path);

            if (files.length === 0) fsSync.rmdirSync(path);
          }
        });
      }
    } catch (error: unknown) {
      console.log("\nERROR! Cannot remove empty directories\n");
      console.log(error);
    }
  };

  private renderFileList = (): void => {
    try {
      for (const path of this.pathList) {
        const fileContent: string = fsSync.readFileSync(path, "utf-8");

        const renderedContent: string = ejs.render(fileContent, {
          data: this.templateRepository.data,
        });

        const fileWithoutExtension: string = path.slice(0, -4);

        fsSync.writeFileSync(fileWithoutExtension, renderedContent);
        fsSync.unlinkSync(path);
      }
    } catch (error: unknown) {
      console.log("\nERROR! Cannot render file list\n");
      console.log(error);
    }
  };

  private setPathList = async (): Promise<void> => {
    try {
      const directoriesPattern: string = `${this.target}/**`;
      const filesPattern: string = `${this.target}/**/*.ejs`;

      const directoriesPathList: string[] = await glob(directoriesPattern, {
        dot: true,
      });
      const filesPathList: string[] = await glob(filesPattern, { dot: true });

      for (const path of filesPathList) {
        const ignoredFiles: string[] = this.templateRepository.ignoredFiles;

        const fileName: string = basename(path);
        const isNotIgnoredFile: boolean = !ignoredFiles.includes(fileName);

        if (isNotIgnoredFile) this.pathList.push(path);
        else fsSync.unlinkSync(path);
      }

      this.removeEmptyDirectoriesByPathList(directoriesPathList);
    } catch (error) {
      console.log("\nERROR! Cannot set path list\n");
      console.log(error);
    }
  };

  private zip = (): Promise<string> => {
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
  };
}
