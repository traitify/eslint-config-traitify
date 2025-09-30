import {defineConfig} from "eslint/config";

export default defineConfig([{
  rules: {
    "no-new": "off", // Tests are exempt
    "prefer-promise-reject-errors": "off", // Tests are exempt
    "react/prop-types": "off" // Tests are exempt
  }
}]);
