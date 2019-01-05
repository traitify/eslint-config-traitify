# Traitify's Javascript Style Guide

**Note**: This guide just outlines the differences from [Airbnb's Guide](https://github.com/airbnb/javascript)

## Rules

  - [arrow-parens](https://eslint.org/docs/rules/arrow-parens)

    `"arrow-parens": ["error", "always"]`

    > Consistency

  - [babel/object-curly-spacing](https://github.com/babel/eslint-plugin-babel)

    `"babel/object-curly-spacing": "error"`

    > Replace non-babel version

  - [class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this)

    `"class-methods-use-this": "off"`

    > Allows methods to be overridden

  - [comma-dangle](https://eslint.org/docs/rules/comma-dangle)

    `"comma-dangle": ["error", "never"]`

    > Unnecessary

  - [consistent-return](https://eslint.org/docs/rules/consistent-return)

    `"consistent-return": "off"`

    > Makes it hard to return early for conditionals

  - [func-names](https://eslint.org/docs/rules/func-names)

    `"func-names": "off"`

    > Unnecessary and unused with arrow functions

  - [jsx-a11y/label-has-for](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md)

    > Deprecated

    ```
    "jsx-a11y/label-has-for": ["error", {
      components: [],
      required: {
        some: ["nesting", "id"],
      },
      allowChildren: false,
    }]
    ```

    > Unnecessary to have nesting for both

  - [keyword-spacing](https://eslint.org/docs/rules/keyword-spacing)

    ```
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
    }]

    ```

    > Whitespace - Preference

  - [lines-between-class-members](https://eslint.org/docs/rules/lines-between-class-members)

    `"lines-between-class-members": ["error", "never"]`

    > Whitespace - Preference

  - [no-else-return](https://eslint.org/docs/rules/no-else-return)

    `"no-else-return": "off"`

    >  Allows more functional styles

  - [no-multiple-empty-lines](https://eslint.org/docs/rules/no-multiple-empty-lines)

    `"no-multiple-empty-lines": ["error", {max: 1, maxBOF: 0, maxEOF: 0}]`

    >  Little stricter

  - [no-underscore-dangle](https://eslint.org/docs/rules/no-underscore-dangle)

    `"no-underscore-dangle": "off"`

    >  Doesn't allow `const key = _key.toLowerCase()`

  - [no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)

    `"no-unused-expressions": ["error", {allowShortCircuit: true, allowTernary: true}]`

    > Short circuits and ternaries are efficient

  - [object-curly-newline](https://eslint.org/docs/rules/object-curly-newline)

    `"object-curly-newline": ["error", {multiline: true, consistent: true}]`

    > Too strict

  - [object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing)

    `"object-curly-spacing": "off"`

    > Incompatible with babel/object-curly-spacing

  - [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring)

    ```
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
    }]
    ```

    > Assignment expression looks funky with parens

  - [quote-props](https://eslint.org/docs/rules/quote-props)

    `"quote-props": ["error", "consistent-as-needed", {keywords: false}]`

    > Consistency

  - [quotes](https://eslint.org/docs/rules/quotes)

    `"quotes": ["error", "double", {allowTemplateLiterals: true}]`

    > Double quotes are life

  - [react/destructuring-assignment](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md)

    `"react/destructuring-assignment": "off"`

    > Overactive and solved by prefer-destructuring

  - [react/jsx-boolean-value](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

    `"react/jsx-boolean-value": ["error", "always"]`

    >  Prefer explicit

  - [react/jsx-filename-extension](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)

    `"react/jsx-filename-extension": "off"`

    > Unnecessary

  - [react/jsx-one-expression-per-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md)

    `"react/jsx-one-expression-per-line": "off"`

    > Creates unnecessary white space issues

  - [react/no-did-update-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md)

    `"react/no-did-update-set-state": "off"`

    > Makes hacks needed for prop change triggers

  - [react/prefer-stateless-function](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)

    `"react/prefer-stateless-function": "off"`

    > Prefer React

  - [react/react-in-jsx-scope](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md)

    `"react/react-in-jsx-scope": "off"`

    > Global React

  - [space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)

    `"space-before-function-paren": ["error", "never"]`

    > Whitespace - Preference

## TODO

These rules are turned off temporarily

  - [react/no-unused-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md)

    `"react/no-unused-state": "off"`

    > Remove when rule is fixed for setState function

  - [react/sort-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)

    `"react/sort-comp": "off"`

    > Remove when airbnb includes componentDidCatch
