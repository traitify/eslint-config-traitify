import {defineConfig} from "eslint/config";
import traitifyConfigBabel from "eslint-config-traitify/babel";
import traitifyConfigJest from "eslint-config-traitify/jest";
import traitifyConfigReact from "eslint-config-traitify/react";
import traitifyConfigWebpack from "eslint-config-traitify/webpack";

export default defineConfig([{
  extends: [
    traitifyConfigReact,
    traitifyConfigJest,
    traitifyConfigBabel,
    traitifyConfigWebpack
  ],
  settings: {
    "import/resolver": {
      jest: {jestConfigFile: "./test/jest.config.js"},
      webpack: {config: "./webpack.config.js"}
    }
  }
}]);
