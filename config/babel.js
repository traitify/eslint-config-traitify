import {defineConfig} from "eslint/config";
import babelParser from "@babel/eslint-parser";
import babel from "@babel/eslint-plugin";
import rulesBabel from "../rules/babel.js";

export default defineConfig([{
  extends: [
    rulesBabel
  ],
  languageOptions: {
    parser: babelParser
  },
  plugins: {
    "@babel": babel
  }
}]);
