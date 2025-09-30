import {defineConfig, globalIgnores} from "eslint/config";
import globals from "globals";
import traitifyConfigBase from "./config/base.js";

export default defineConfig([
  globalIgnores(["examples/**/*"]),
  {
    extends: [traitifyConfigBase],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {...globals.node},
      sourceType: "module"
    },
    rules: {
      "import/extensions": ["error", "ignorePackages"]
    },
    settings: {
      "import/resolver": {
        exports: true,
        node: true
      }
    }
  }
]);
