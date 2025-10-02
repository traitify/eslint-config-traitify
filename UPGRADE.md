# Guide to upgrade to version 1.x

It's best to bump and add the dependencies in one command

## Bump versions

```
npm i -D eslint@latest eslint-config-traitify@latest eslint-plugin-import@latest
```

## Add new peer dependencies

Depending on what plugins are used, different peer dependencies are required

```
// Babel
npm i -D @babel/eslint-parser@latest @babel/eslint-plugin@latest

// Jest
npm i -D eslint-import-resolver-jest@latest eslint-plugin-jest@latest

// React
npm i -D eslint-plugin-jsx-a11y@latest eslint-plugin-react@latest eslint-plugin-react-hooks@latest

// Webpack
npm i -D eslint-import-resolver-webpack@latest
```

## Migrate to eslint flat config

```
npx @eslint/migrate-config .eslintrc.js
```

## Verify

- Check package.json scripts for commandline options like --ext using eslint
