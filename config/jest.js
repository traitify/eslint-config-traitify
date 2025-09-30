import {defineConfig} from "eslint/config";
import pluginJest from "eslint-plugin-jest";
import configBase from "./base.js";
import rulesJest from "../rules/jest.js";

export default defineConfig([
  {
    extends: [configBase],
    languageOptions: {
      globals: pluginJest.environments.globals.globals
    }
  },
  {
    ...pluginJest.configs["flat/recommended"],
    extends: [
      ...pluginJest.configs["flat/recommended"].extends,
      rulesJest
    ],
    files: ["**/*.spec.js", "**/*.test.js"]
  }
]);
