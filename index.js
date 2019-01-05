module.exports = {
  env: {
    browser: true,
    es6: true,
    node: false
  },
  extends: ["airbnb"],
  parser: "babel-eslint",
  plugins: ["babel"],
  rules: {
    "arrow-parens": ["error", "always"], // Consistency
    "babel/object-curly-spacing": "error", // Replace non-babel version
    "class-methods-use-this": "off", // Allows methods to be overridden
    "comma-dangle": ["error", "never"], // Unnecessary
    "consistent-return": "off", // Makes it hard to return early for conditionals
    "func-names": "off", // Unnecessary and unused with arrow functions
    "jsx-a11y/label-has-for": ["error", {
      components: [],
      required: {
        some: ["nesting", "id"],
      },
      allowChildren: false,
    }], // Unnecessary to have nesting for both
    "keyword-spacing": ["error", {
      before: false,
      after: false,
      overrides: {
        as: {before: true, after: true},
        case: {before: true, after: true},
        catch: {before: true},
        const: {before: true, after: true},
        default: {before: true, after: true},
        else: {before: true, after: true},
        export: {before: true, after: true},
        from: {before: true, after: true},
        import: {before: true, after: true},
        let: {before: true, after: true},
        return: {before: true, after: true},
        this: {before: true, after: true},
        try: {before: true, after: true}
      }
    }], // Whitespace - Preference
    "lines-between-class-members": ["error", "never"],
    "no-else-return": "off", // Allows more functional styles
    "no-multiple-empty-lines": ["error", {max: 1, maxBOF: 0, maxEOF: 0}], // Little stricter
    "no-underscore-dangle": "off", // Doesn't allow `const key = _key.toLowerCase()`
    "no-unused-expressions": ["error", {allowShortCircuit: true, allowTernary: true}],
    "object-curly-newline": ["error", {multiline: true, consistent: true}],
    "object-curly-spacing": "off", // Incompatible with babel/object-curly-spacing
    "prefer-destructuring": ["error", {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    }, {
      enforceForRenamedProperties: false,
    }], // Assignment expression looks funky with parens
    "quote-props": ["error", "consistent-as-needed", {keywords: false}],
    "quotes": ["error", "double", {allowTemplateLiterals: true}],
    "react/destructuring-assignment": "off", // Overactive and solved by prefer-destructuring
    "react/jsx-boolean-value": ["error", "always"], // Prefer explicit
    "react/jsx-filename-extension": "off", // Unnecessary
    "react/jsx-one-expression-per-line": "off", // Creates unnecessary white space issues
    "react/no-did-update-set-state": "off", // Makes hacks needed for prop change triggers
    "react/no-unused-state": "off", // TODO: Remove when rule is fixed for setState function
    "react/prefer-stateless-function": "off", // Prefer React
    "react/react-in-jsx-scope": "off", // Global React
    "react/sort-comp": "off", // TODO: Remove when airbnb includes componentDidCatch
    "space-before-function-paren": ["error", "never"] // Whitespace - Preference
  },
  settings: {
    "import/resolver": "webpack",
    react: {version: "detect"}
  }
};
