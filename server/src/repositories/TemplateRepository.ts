import { TemplateData } from "../schemas/template-schema";

interface ITemplateRepository {
  data: TemplateData;
  ignoredFiles: string[];
}

export class TemplateRepository implements ITemplateRepository {
  public data: TemplateData;
  public ignoredFiles: string[];

  constructor(data: TemplateData) {
    this.data = data;
    this.ignoredFiles = [];

    this.handleIgnoredFiles();
  }

  private handleIgnoredFiles = (): void => {
    const { stateManagement, styling } = this.data.stack.frontend;

    if (stateManagement !== "Context API") {
      this.ignoredFiles.push("CounterContext.tsx.ejs");
      this.ignoredFiles.push("UserContext.tsx.ejs");
    }

    if (stateManagement !== "Zustand") {
      this.ignoredFiles.push("useCounterStore.ts.ejs");
      this.ignoredFiles.push("useUserStore.ts.ejs");
    }

    if (stateManagement !== "Redux Toolkit") {
      this.ignoredFiles.push("redux.d.ts.ejs");
      this.ignoredFiles.push("StoreProvider.tsx.ejs");
      this.ignoredFiles.push("counterSlice.ts.ejs");
      this.ignoredFiles.push("userSlice.ts.ejs");
      this.ignoredFiles.push("useCounter.ts.ejs");
      this.ignoredFiles.push("useUser.ts.ejs");
      this.ignoredFiles.push("index.ts.ejs");
    }

    // if (this.data.backend !== "Firebase") {
    //   this.ignoredFiles.push("env.d.ts.ejs");
    //   this.ignoredFiles.push("firebase.ts.ejs");
    // }

    if (styling !== "CSS Modules") {
      this.ignoredFiles.push("styles.module.css.ejs");
      this.ignoredFiles.push("global.css.ejs");
    }

    if (styling !== "SASS Modules") {
      this.ignoredFiles.push(".stylelintrc.json.ejs");
      this.ignoredFiles.push("styles.module.scss.ejs");
      this.ignoredFiles.push("_animations.scss.ejs");
      this.ignoredFiles.push("_breakpoints.scss.ejs");
      this.ignoredFiles.push("_colors.scss.ejs");
      this.ignoredFiles.push("_components.scss.ejs");
      this.ignoredFiles.push("_functions.scss.ejs");
      this.ignoredFiles.push("_global.scss.ejs");
      this.ignoredFiles.push("_index.scss.ejs");
    }

    if (styling !== "Styled Components") {
      this.ignoredFiles.push("styles.ts.ejs");
      this.ignoredFiles.push("animations.ts.ejs");
      this.ignoredFiles.push("colors.ts.ejs");
      this.ignoredFiles.push("components.ts.ejs");
      this.ignoredFiles.push("devices.ts.ejs");
      this.ignoredFiles.push("functions.ts.ejs");
      this.ignoredFiles.push("global.ts.ejs");
      this.ignoredFiles.push("keyframes.ts.ejs");
      this.ignoredFiles.push("theme.ts.ejs");
      this.ignoredFiles.push("registry.tsx.ejs");
    }

    if (styling !== "TailwindCSS") {
      this.ignoredFiles.push("postcss.config.js.ejs");
      this.ignoredFiles.push("tailwind.config.js.ejs");
      this.ignoredFiles.push("globals.css.ejs");
      this.ignoredFiles.push("Greetings.tsx.ejs");
    }

    if (styling === "TailwindCSS") {
      this.ignoredFiles.push("index.tsx.ejs");
    }
  };
}
