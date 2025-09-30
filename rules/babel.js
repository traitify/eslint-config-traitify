import {defineConfig} from "eslint/config";

export default defineConfig([{
  rules: {
    "@babel/object-curly-spacing": "error", // Replace non-babel version
    "object-curly-spacing": "off" // Incompatible with babel/object-curly-spacing
  }
}]);
