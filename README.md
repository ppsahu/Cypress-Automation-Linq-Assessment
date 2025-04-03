# Linq Cypress Testing Suite

This repository contains automated end-to-end tests for the Linq application using Cypress. The tests are designed to validate the behaviour and functionality of the Linq welcome page and authentication flows.

## 📋 Overview

The test suite includes:
- Explicit assertions to validate basic functionality for Phone Number
- Implicit assertions to thoroughly test UI elements and behavior
- GitHub Actions workflow for continuous integration on macOS

## 🚀 Getting Started

## Prerequisites - 

1. Suitable IDE of your choice (VS Code, Selenium, Sublime, ....), I used Vs Code to develop the testing suite
2. Node Version >=16 recommended
3. Cypress installed (you can install using "npm install cypress --save-dev")

## To run locally - 

1. Clone the Github repository using https://github.com/ppsahu/Cypress-Automation-Linq-Assessment.git
2. Open terminal -> type "npm install"
3. To see the testing resuls on Cypress Software type "npx cypress open"
4. Select Chrome (Recommended, you can choose any browser suitable to your system)
5. If you are opening Cypress for the first time then you need to configure the Cypress testing suite, but do not worry about that, just click on E2E testing and in the Specs directory all the 5 files will be avialable for you.
6. Click on any file and see the results. (Make Sure to read the documentation to see which file runs which tests)
7. To see all results on terminal - type command "npx cypress run"
8. To see specific file's results on terminal - type command "npx cypress run -s cypress/e2e/firstTestPhoneNumber.cy.js" (change the file name accordingly)
9. If the checks are failed, please try the steps again (I would recommend to open cypress again for each test file).

## Folder Structure
<img width="520" alt="Screenshot 2025-04-03 at 2 44 24 AM" src="https://github.com/user-attachments/assets/cfe561a8-6581-4922-ac75-772de2b0ac2f" />

# To see the results - 

Go to Actions -> Click on "fixed yml file" (2nd from last) -> checks for all 5 files

Or Check the screenshots below for each file- 

checkEmail.cy.js - 
<img width="1115" alt="Screenshot 2025-04-03 at 3 32 42 AM" src="https://github.com/user-attachments/assets/d0aa658d-1937-4c4a-a811-c5c326800e16" />

explicitAssertionsOnLinqPhoneNumber.cy.js - 
<img width="1444" alt="Screenshot 2025-04-03 at 3 33 37 AM" src="https://github.com/user-attachments/assets/230c248f-2e50-491b-8aa1-f26d130eaf77" />

firstTestPhoneNumber.cy.js - 
<img width="1444" alt="Screenshot 2025-04-03 at 3 33 54 AM" src="https://github.com/user-attachments/assets/54fcd1de-e4dd-41a0-83e9-ecb809d2342f" />

implicitAssertionsOnLinqUI.cy.js - 
<img width="1444" alt="Screenshot 2025-04-03 at 3 34 14 AM" src="https://github.com/user-attachments/assets/de4b253e-a73b-4b1c-a62a-cb688d3b58b6" />
<img width="1444" alt="Screenshot 2025-04-03 at 3 34 32 AM" src="https://github.com/user-attachments/assets/b43e63cb-3b12-4940-b6b3-a9dcfb389cc8" />
<img width="1444" alt="Screenshot 2025-04-03 at 3 34 41 AM" src="https://github.com/user-attachments/assets/83186174-7779-4d82-bb8b-f955e6eba2d2" />

test1VisitWebpage.cy.js -
<img width="1444" alt="Screenshot 2025-04-03 at 3 35 24 AM" src="https://github.com/user-attachments/assets/4635bfa6-b4b7-44c2-8fb0-3e5ceefc508f" />

Result on VS Code terminal - for all 5 files
<img width="1444" alt="Screenshot 2025-04-03 at 3 59 01 AM" src="https://github.com/user-attachments/assets/bda4ebfb-568d-4da7-a3cc-7d2187d7cfe4" />


