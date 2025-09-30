import {defineConfig} from "eslint/config";
import traitifyConfigBabel from "eslint-config-traitify/babel";
import traitifyConfigReact from "eslint-config-traitify/react";
import traitifyConfigWebpack from "eslint-config-traitify/webpack";

export default defineConfig([{
  extends: [
    traitifyConfigReact,
    traitifyConfigBabel,
    traitifyConfigWebpack
  ]
}]);
