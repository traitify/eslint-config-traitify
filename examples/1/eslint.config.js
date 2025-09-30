import { defineConfig } from "eslint/config";
import traitifyConfig from "eslint-config-traitify";
import traitifyConfigBabel from "eslint-config-traitify/babel";
import traitifyConfigWebpack from "eslint-config-traitify/webpack";
import globals from "globals";

export default defineConfig([{
  extends: [
    traitifyConfig,
    traitifyConfigBabel,
    traitifyConfigWebpack
  ],
  languageOptions: {
    globals: { ...globals.node }
  },
  rules: {
    // NOTE: For some reason eslint.config.js wasn't being picked up unless this rules was added locally
    "import/no-extraneous-dependencies": ["error", {
      devDependencies: [
        "test/**", // tape, common npm pattern
        "tests/**", // also common npm pattern
        "spec/**", // mocha, rspec-like pattern
        "**/__tests__/**", // jest pattern
        "**/__mocks__/**", // jest pattern
        "test.{js,jsx}", // repos with a single test file
        "test-*.{js,jsx}", // repos with multiple top-level test files
        "**/*{.,_}{test,spec}.{js,jsx}", // tests where the extension or filename suffix denotes that it is a test
        "**/jest.config.js", // jest config
        "**/jest.setup.js", // jest setup
        "**/vue.config.js", // vue-cli config
        "**/webpack.config.js", // webpack config
        "**/webpack.config.*.js", // webpack config
        "**/rollup.config.js", // rollup config
        "**/rollup.config.*.js", // rollup config
        "**/gulpfile.js", // gulp config
        "**/gulpfile.*.js", // gulp config
        "**/Gruntfile{,.js}", // grunt config
        "**/protractor.conf.js", // protractor config
        "**/protractor.conf.*.js", // protractor config
        "**/karma.conf.js", // karma config
        "**/.eslintrc.js", // eslint config
        "**/eslint.config.js", // eslint config
        "eslint.config.js" // eslint config
      ],
      optionalDependencies: false
    }]
  },
  settings: {
    "import/resolver": {
      webpack: { config: "webpack.config.js" }
    }
  }
}]);
