# Technical automation test

Create an automated UI test using any JS framework or library

### Challenge:

UI Test should do the following:
1) Go to https://www.saucedemo.com/
2) Log in to the site. Verify that the items are sorted by Name ( A -> Z ).
3) Change the sorting to Name ( Z -> A).
4) Verify that the items are sorted correctly.

### Instructions:
1. Use appropriate test runner and test reporting tool.
2. Implement assertions to verify the expected behavior.
3. Implement page object model for the tests.
4. Use relevant build tool for the project.
5. Provide clear instructions in the Readme file on how to run the automated tests
locally and on CI.

### Framework:
 - Cypress 13.14.1

 ### Tools:
 - allure Report 3.0.0-beta.11

### Languages:
 - Javascript

## Installation:
After downloading the project from GitHub, open the terminal and run the command below
> npm install

## Execution:
To run the project via terminal using the production environment settings and then generate the report, run the command below:
> npm run test-prod

To run the project by opening cypress using production environment settings, run the command below
> npm run test-open-prod

Generate report
> npm run report:allure