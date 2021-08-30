---
sidebar_position: 2
---

# Formatting

A well thought on project structure and properly formatted project will pay for itself many times over in the future. Additionally, clean code can make it easier to spot errors before they make their way into production.

This is even more applicable as multiple people must understand what has been previously written and navigate their way around your code-base(s). 

Luckily, there are tools that can help with this automatically!

### Prettier

[Prettier](https://prettier.io/) and the accompanying [VSCode plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) can be used to automatically format code to a particular style, which aids in readability of code and allows for quicker troubleshooting in the event of an impact requiring code review.

In VSCode, Prettier can automatically applying styles when a file is saved by adding the following to your profile settings (`%APPDATA%\Code\User\settings.json`):

```
"editor.formatOnSave": false,
"prettier.requireConfig": true,
"[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2
},
"[yaml]": {
  "editor.formatOnSave": false,
}
```

Note: It is important to disable YAML auto-formatting otherwise this will cause issues with Helm releases.

### ESLint

[ESLint](https://eslint.org/) can also be utilized to help analyze and automatically fix problems in Javascript code. ESLint also supports many [rules](https://eslint.org/docs/rules/) to help detect optimized ways of doing things, enforce best-practices and assist with formatting.

AirBnB engineering has shared a sensible set of ESLint rules via their [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) npm package which follows many industry best practices for Javascript code in production. See the [Node.js section](./node-js.md) for more information on this setup.