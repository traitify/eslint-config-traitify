import {defineConfig} from "eslint/config";
import configBase from "./base.js";
import rulesReactA11y from "../rules/react/a11y.js";
import rulesReactBase from "../rules/react/base.js";

export default defineConfig([{
  extends: [
    configBase,
    rulesReactBase,
    rulesReactA11y
  ]
}]);
