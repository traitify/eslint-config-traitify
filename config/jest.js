import {defineConfig} from "eslint/config";
import pluginJest from "eslint-plugin-jest";
import rulesJest from "../rules/jest.js";

export default defineConfig([
  {
    ...pluginJest.configs["flat/recommended"],
    extends: [
      ...(pluginJest.configs["flat/recommended"].extends || []),
      rulesJest
    ],
    languageOptions: {
      ...pluginJest.configs["flat/recommended"].languageOptions,
      globals: {
        ...pluginJest.configs["flat/recommended"].languageOptions.globals,
        container: "writable"
      }
    }
  }
]);
