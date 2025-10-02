import {defineConfig} from "eslint/config";
import pluginJest from "eslint-plugin-jest";
import rulesJest from "../rules/jest.js";

export default defineConfig([
  {
    languageOptions: {
      globals: {
        ...pluginJest.environments.globals.globals,
        container: "writable"
      }
    }
  },
  {
    ...pluginJest.configs["flat/recommended"],
    extends: [
      ...(pluginJest.configs["flat/recommended"].extends || []),
      rulesJest
    ],
    files: ["**/*.spec.js", "**/*.test.js"],
    languageOptions: {
      ...pluginJest.configs["flat/recommended"].languageOptions,
      globals: {
        ...pluginJest.configs["flat/recommended"].languageOptions.globals,
        container: "writable"
      }
    }
  }
]);
