import {defineConfig} from "eslint/config";
import rulesReactHooks from "../rules/react/hooks.js";

export default defineConfig([{
  extends: [
    rulesReactHooks
  ]
}]);
