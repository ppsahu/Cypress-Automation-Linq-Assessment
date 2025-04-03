# Linq Cypress Testing Suite

This repository contains automated end-to-end tests for the Linq application using Cypress. The tests are designed to validate the behaviour and functionality of the Linq welcome page and authentication flows.

## 📋 Overview

The test suite includes:
- Explicit assertions to validate basic functionality for Phone Number
- Implicit assertions to thoroughly test UI elements and behavior
- GitHub Actions workflow for continuous integration on macOS

## 🚀 Getting Started

## Prerequisites - 

    a. Suitable IDE of your choice (VS Code, Selenium, Sublime, ....), I used Vs Code to develop the testing suite

    b. Node Version >=16 recommended
    c. Cypress installed (you can install using "npm install cypress --save-dev")

## To run locally - 

1. Clone the Github repository using https://github.com/ppsahu/Cypress-Automation-Linq-Assessment.git
2. Open terminal -> type "npm install"
3. To see the testing resuls on Cypress Software type "npx cypress open"
4. Select Chrome (Recommended, you can choose any browser suitable to your system)
5. If you are opening Cypress for the first time then you need to configure the Cypress testing suite, but do not worry about that, just click on E2E testing and in the Specs directory all the 5 files will be avialable for you.
6. Click on any file and see the results. (Make Sure to read the documentation to see which file runs which tests)
7. To see all results on terminal - type command "npx cypress run"
8. To see specific file's results on terminal - type command "npx cypress run -s cypress/e2e/firstTestPhoneNumber.cy.js" (change the file name accordingly)

## Folder Structure

