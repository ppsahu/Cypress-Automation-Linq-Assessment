1. Prerequisites - 

    a. Suitable IDE of your choice (VS Code, Selenium, Sublime, ....), I used Vs Code to develop the testing suite

    b. Node Version >=16 recommended
    c. Cypress installed (you can install using "npm install cypress --save-dev")

To run locally - 
2. Clone the Github repository using https://github.com/ppsahu/Cypress-Automation-Linq-Assessment.git

3. Open terminal -> type "npm install"

4. To see the testing resuls on Cypress Software type "npx cypress open"
5. Select Chrome(Recommended, you can choose any browser suitable to your system)
6. If you are opening Cypress for the first time then you need to configure the Cypress testing suite, but do not worry about that, just click on E2E testing and in the Specs directory all the 5 files will be avialable for you.
7. Click on any file and see the results. (Make Sure to read the document to see which file runs which tests)

8. To see all results on terminal - type command "npx cypress run"
9. To see specific file's results on terminal - type command "npx cypress run -s cypress/e2e/firstTest.cy.js" (change the file name accordingly)

