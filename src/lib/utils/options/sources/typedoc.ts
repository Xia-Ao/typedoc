import type { Options } from "..";
import { ParameterType, ParameterHint } from "../declaration";
import { LogLevel } from "../../loggers";
import { BUNDLED_THEMES } from "shiki";

export function addTypeDocOptions(options: Options): void {
  options.addDeclaration({
    name: "options",
    help:
      "Specify a json option file that should be loaded. If not specified TypeDoc will look for 'typedoc.json' in the current directory",
    hint: ParameterHint.File,
    defaultValue: process.cwd(),
  });
  options.addDeclaration({
    name: "tsconfig",
    help:
      "Specify a typescript config file that should be loaded. If not specified TypeDoc will look for 'tsconfig.json' in the current directory.",
    hint: ParameterHint.File,
    defaultValue: process.cwd(),
  });

  options.addDeclaration({
    name: "entryPoint",
    help:
      "The entry point to document all symbols from. More than one may be specified.",
    type: ParameterType.Array,
  });

  options.addDeclaration({
    name: "exclude",
    help: "Define patterns for excluded files when specifying paths.",
    type: ParameterType.Array,
  });
  options.addDeclaration({
    name: "excludeExternals",
    help: "Prevent items originating in node_modules from being documented.",
    type: ParameterType.Boolean,
  });
  options.addDeclaration({
    name: "excludeNotDocumented",
    help:
      "Prevent symbols that are not explicitly documented from appearing in the results.",
    type: ParameterType.Boolean,
  });
  options.addDeclaration({
    name: "excludePrivate",
    help: "Ignores private variables and methods",
    type: ParameterType.Boolean,
  });
  options.addDeclaration({
    name: "excludeProtected",
    help: "Ignores protected variables and methods",
    type: ParameterType.Boolean,
  });
  options.addDeclaration({
    name: "disableSources",
    help: "Disables setting the source of a reflection when documenting it.",
    type: ParameterType.Boolean,
  });
  options.addDeclaration({
    name: "includes",
    help:
      "Specifies the location to look for included documents (use [[include:FILENAME]] in comments).",
    hint: ParameterHint.Directory,
  });
  options.addDeclaration({
    name: "media",
    help:
      "Specifies the location with media files that should be copied to the output directory.",
    hint: ParameterHint.Directory,
  });

  options.addDeclaration({
    name: "html",
    help: "Specifies the location the documentation should be written to.",
    hint: ParameterHint.Directory,
  });
  options.addDeclaration({
    name: "json",
    help:
      "Specifies the location and file name a json file describing the project is written to.",
    hint: ParameterHint.File,
  });

  options.addDeclaration({
    name: "theme",
    help:
      "Specify the path to the theme that should be used or 'default' or 'minimal' to use built-in themes.",
    type: ParameterType.String,
    defaultValue: "default",
  });
  options.addDeclaration({
    name: "lightTheme",
    help: "Specify the light theme to be used for syntax highlighting.",
    type: ParameterType.String,
    defaultValue: "light-plus",
    convert(value: unknown) {
      if (BUNDLED_THEMES.includes(value as string)) {
        return value as string;
      }
      throw new Error(
        `Expected lightTheme to be one of: ${BUNDLED_THEMES.join(", ")}`
      );
    },
  });
  options.addDeclaration({
    name: "darkTheme",
    help: "Specify the dark theme to be used for syntax highlighting.",
    type: ParameterType.String,
    defaultValue: "dark-plus",
    convert(value: unknown) {
      if (BUNDLED_THEMES.includes(value as string)) {
        return value as string;
      }
      throw new Error(
        `Expected darkTheme to be one of: ${BUNDLED_THEMES.join(", ")}`
      );
    },
  });

  options.addDeclaration({
    name: "name",
    help:
      "Set the name of the project that will be used in the header of the template.",
  });
  options.addDeclaration({
    name: "includeVersion",
    help: "Add the package version to the project name.",
    type: ParameterType.Boolean,
  });
  options.addDeclaration({
    name: "excludeTags",
    help: "Remove the listed tags from doc comments.",
    type: ParameterType.Array,
  });
  options.addDeclaration({
    name: "readme",
    help:
      "Path to the readme file that should be displayed on the index page. Pass `none` to disable the index page and start the documentation on the globals page.",
  });
  options.addDeclaration({
    name: "defaultCategory",
    help: "Specifies the default category for reflections without a category.",
    defaultValue: "Other",
  });
  options.addDeclaration({
    name: "categoryOrder",
    help:
      "Specifies the order in which categories appear. * indicates the relative order for categories not in the list.",
    type: ParameterType.Array,
  });
  options.addDeclaration({
    name: "categorizeByGroup",
    help: "Specifies whether categorization will be done at the group level.",
    type: ParameterType.Boolean,
    defaultValue: true,
  });
  options.addDeclaration({
    name: "gitRevision",
    help:
      "Use specified revision instead of the last revision for linking to GitHub source files.",
    defaultValue: "master",
  });
  options.addDeclaration({
    name: "gitRemote",
    help: "Use the specified remote for linking to GitHub source files.",
    defaultValue: "origin",
  });
  options.addDeclaration({
    name: "gaID",
    help: "Set the Google Analytics tracking ID and activate tracking code.",
  });
  options.addDeclaration({
    name: "gaSite",
    help: "Set the site name for Google Analytics. Defaults to `auto`.",
    defaultValue: "auto",
  });
  options.addDeclaration({
    name: "hideGenerator",
    help: "Do not print the TypeDoc link at the end of the page.",
    type: ParameterType.Boolean,
  });
  options.addDeclaration({
    name: "cleanOutputDir",
    help: "If set, will clean up the output directory before creating files.",
    type: ParameterType.Boolean,
    defaultValue: true,
  });

  options.addDeclaration({
    name: "help",
    short: "h",
    help: "Print this message.",
    type: ParameterType.Boolean,
  });
  options.addDeclaration({
    name: "version",
    short: "v",
    help: "Print TypeDoc's version.",
    type: ParameterType.Boolean,
  });
  options.addDeclaration({
    name: "plugin",
    help:
      "Specify the npm plugins that should be loaded. Omit to load all installed plugins, set to 'none' to load no plugins.",
    type: ParameterType.Array,
  });
  options.addDeclaration({
    name: "logger",
    help: "Specify the logger that should be used, 'none' or 'console'",
    defaultValue: "console",
    type: ParameterType.Mixed,
  });
  options.addDeclaration({
    name: "logLevel",
    help: "Specify what level of logging should be used.",
    type: ParameterType.Map,
    map: LogLevel,
    defaultValue: LogLevel.Info,
  });
}
