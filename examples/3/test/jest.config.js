import path from "path";
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  globals: {
    VERSION: "0.0.0-test"
  },
  moduleFileExtensions: [
    "js"
  ],
  modulePaths: [
    "<rootDir>/src/",
    "<rootDir>/test/"
  ],
  rootDir: path.resolve(__dirname, ".."),
  setupFiles: [
    "<rootDir>/test/support/setup.js"
  ],
  testEnvironmentOptions: {url: "https://www.example.com"},
  testMatch: ["<rootDir>/test/**/*.test.js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  }
};
