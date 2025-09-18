module.exports = {
  rules: {
    "jsx-a11y/label-has-for": ["error", {
      components: [],
      required: {
        some: ["nesting", "id"],
      },
      allowChildren: false,
    }], // Unnecessary to have nesting for both
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
  }
};
