# Guide to upgrade to version 1.x

## Bump versions

```
npm i -D eslint@latest eslint-config-traitify@latest
```

## Add new peer dependencies

Depending on what plugins are used, different peer dependencies are required

```
// Babel
npm i -D @babel/eslint-parser @babel/eslint-plugin

// Jest
npm i -D eslint-import-resolver-jest eslint-plugin-jest

// React
npm i -D eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks

// Webpack
npm i -D eslint-import-resolver-webpack
```

## Migrate to eslint flat config

```
npx @eslint/migrate-config .eslintrc.js
```

## Verify

- Check package.json scripts for commandline options like --ext using eslint
