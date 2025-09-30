import {defineConfig} from "eslint/config";
import globals from "globals";
import configAirbnbBase from "../airbnb/config/base.js";
import rulesBase from "../rules/base.js";

export default defineConfig([{
  extends: [
    configAirbnbBase,
    rulesBase
  ],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node
    }
  }
}]);
