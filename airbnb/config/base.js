import {defineConfig} from "eslint/config";
import rulesBaseBestPractices from "../rules/base/best-practices.js";
import rulesBaseErrors from "../rules/base/errors.js";
import rulesBaseNode from "../rules/base/node.js";
import rulesBaseStyle from "../rules/base/style.js";
import rulesBaseVariables from "../rules/base/variables.js";
import rulesBaseEs6 from "../rules/base/es6.js";
import rulesBaseImports from "../rules/base/imports.js";
import rulesBaseStrict from "../rules/base/strict.js";

export default defineConfig([{
  extends: [
    rulesBaseBestPractices,
    rulesBaseErrors,
    rulesBaseNode,
    rulesBaseStyle,
    rulesBaseVariables,
    rulesBaseEs6,
    rulesBaseImports,
    rulesBaseStrict
  ],
  languageOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  }
}]);
