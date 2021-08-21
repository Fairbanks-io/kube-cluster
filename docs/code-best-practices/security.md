---
sidebar_position: 3
---

# Security

Code security is paramount to ensuring user data is kept safe at all times. 

With the internet ever evolving, nefarious actors are constantly trying to find the next vulnerability to exploit.

Implementing proper code security best-practices can help you find vulnerabilities sooner rather than later.

### Trivy/Microscanner

[Trivy](https://aquasecurity.github.io/trivy/) (previously known as [Microscanner](https://github.com/aquasecurity/microscanner))

### Dependabot

[Dependabot](https://dependabot.com/) is a Github native bot which can proactively scan your repository for vulnerable dependencies and open pull requests to resolve. 

Linked with unit testing and other workflows this setup can allow vulnerabilities to be automatically patched and release updated containers to minimize the amount of time your application is impacted.

### CodeQL

[CodeQL](https://codeql.github.com/docs/) code analysis scans can be implemented in a Github workflow and can give hints to fix anti-patterns in your code. 

As a bonus any issues it finds come with rich details, a copy of the offending code and sample code on how you might resolve the alert.

### Language Specific

In addition to the options above, many programming languages offer additional options to check for code security issues.

#### gosec

Golang Security Checker ([gosec](https://github.com/securego/gosec)) is a code scanning tool which can help detect security issues in Golang code. It can be ran from both the command line and within a Github Action.

#### NPM Audit

NPM offers an [audit]() functionality which can warn on and attempt to automatically fix vulnerable dependencies. It ships pre-packaged with NPM.

To invoke an audit and see a report of issues, run:
```
npm audit
```

To allow audit to attempt to fix these issues automatically, run:
```
npm audit fix
```

#### Python Code Scanners

Python offers multiple valid options for analyzing code security:

- [Bandit](https://bandit.readthedocs.io/en/latest/)
- [PyUp/Safety](https://pyup.io/docs/)
- [Hawkeye](https://github.com/hawkeyesec/scanner-cli)

### Universal Code Scanner

Coinbase has recently launched [Salus](https://github.com/coinbase/salus) which supports code scanning for multiple languages and supports many of the tools listed above.