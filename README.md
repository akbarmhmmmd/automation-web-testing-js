# Automation Web Testing
Automation Web Testing with JavaScript

# Pre-requisites
- This repository utilized Cucumber as a Framework and WebdriverIO as browser driver
- Install latest `node.js` on your local machine
- Install Cucumber (Gherkin) Full Support by Alexander Krechik at VSCode Extensions

# How to Contribute
- Clone to your local machine
```sh
   git clone github.com/akbarmhmmmd/automation-web-testing-js.git
```
- Create your contribution code
- Don't forget to create your new branch first for preventing conflict at `master` branch
ex:
```sh
   git checkout -b add-Scenario
```
- Create pull request documentation for merge to master
```sh
   git add .
   git commit -m "your commits"` ex: `git commit -m "feat: add more Scenario"
   git push
```

# How to Run
```sh
   npm run testChrome --scenario=YOUR_SCENARIO @tags
```
ex:
```sh
   npm run testChrome --scenario=herokuapp @the-internet
```
