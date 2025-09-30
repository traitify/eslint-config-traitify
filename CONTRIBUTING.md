# Contributing

## Examples

Be careful to run the commands in the specified order to set up each example

```
// From the top level
npm install

// Then for each example you should run these (with the directory updated)
cd examples/1
npm install
npm install -D ../.. --install-links
```

And then you'll be able to run `npm run lint`

- in the parent directory to lint the rules
- in each example directory to test the rules

## Extra


```
// To see what rules and config files are being used
npm run lint -- --debug
```