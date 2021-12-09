# Code Quality {data-background-color=#7E317B}

---

## Summary

- ESLint
- Getting the most out of VSCode
- Next term

---

## [ESLint](https://eslint.org/)

- Check coding standards are applied
- Install with `npm install eslint`
- Configure in your project with `eslint --init`
- Use a particular set of rules e.g. standard (need to install)
- Customise (see coursework specification)
- Run with `eslint file.js`
- Autofix with `eslint --fix file.js`
- Beware [bikeshedding](https://exceptionnotfound.net/bikeshedding-the-daily-software-anti-pattern/) over standards

---

## Recommended style

Put this in .eslintrc.js
```
module.exports = {
    "extends": "standard",
    "rules": {
      "semi": [2, "always"],
      "indent": "off"
    }
};
```
---

## ESLint tooling

- Consider [adding a git pre-commit hook](https://levelup.gitconnected.com/how-to-run-eslint-using-pre-commit-hook-25984fbce17e)
- Install the [ESLint plugin for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint):
  - identify and auto-fix 

---

## Getting the most out of VSCode

- [Advanced code editing](https://code.visualstudio.com/docs/introvideos/codeediting)
- Auto-fix for ESLint problems
- [Live share](https://code.visualstudio.com/learn/collaboration/live-share)

---

## Next term

- Work on second assignment: collaborative project
- No more practicals
- Weekly drop-in sessions 10:00 Thursdays RH001
- Sometimes specific content
  - second assignment choosing a project
  - completing a peer review
  - reflective writing
- Other times just answering any questions




