module.exports = {
  rules: {
    "@babel/object-curly-spacing": "error", // Replace non-babel version
    "arrow-parens": ["error", "always"], // Consistency
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
      after: false,
      before: false,
      overrides: {
        as: {before: true, after: true},
        case: {before: true, after: true},
        catch: {before: true, after: false},
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
    "no-lonely-if": "off", // Allows more readable conditions
    "no-multiple-empty-lines": ["error", {max: 1, maxBOF: 0, maxEOF: 0}], // Little stricter
    "no-promise-executor-return": "off", // Makes it hard to return early for conditions
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
    "react/function-component-definition": ["error", {
      namedComponents: ["function-declaration", "function-expression"],
      unnamedComponents: "arrow-function"
    }], // Allows simple arrow components
    "react/jsx-boolean-value": ["error", "always"], // Prefer explicit
    "react/jsx-filename-extension": "off", // Unnecessary
    "react/jsx-one-expression-per-line": "off", // Creates unnecessary white space issues
    "react/jsx-props-no-spreading": "off", // Unnecessary
    "react/no-did-update-set-state": "off", // Makes hacks needed for prop change triggers
    "react/prefer-stateless-function": "off", // Prefer React
    "react/react-in-jsx-scope": "off", // Global React
    "react/require-default-props": ["error", {functions: "defaultArguments"}], // Updated for React 18+
    "react/static-property-placement": ["error", "static public field"], // Airbnb will catch up
    "space-before-function-paren": ["error", "never"] // Whitespace - Preference
  }
};
