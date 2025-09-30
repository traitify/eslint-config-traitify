import {defineConfig} from "eslint/config";
import globals from "globals";
import configBase from "./base.js";
import airbnbConfigReact from "../airbnb/config/react.js";
import airbnbConfigHooks from "../airbnb/config/hooks.js";
import rulesReact from "../rules/react.js";

export default defineConfig([{
  extends: [
    airbnbConfigReact,
    airbnbConfigHooks,
    configBase,
    rulesReact
  ],
  languageOptions: {
    globals: {...globals.browser}
  },
  settings: {
    react: {version: "detect"}
  }
}]);
