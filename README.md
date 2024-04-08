# Playwright E2E tests

These E2E tests written in Playwright using Typescript. They use the Page Object Model and pages as fixtures. This way the tests are easy to maintain and read.

After cloning the repo, please run the following command to install Playwright:

```npm i --save-dev @playwright/test```

- To run ALL of the tests headless:

```npx playwright test```

- To run ALL of the tests using the Playwright UI to view the trace:

```npx playwright test --ui```

- Environment variables can be used. Currently the Base URL is an environment variable, pointing at a testing website:

Change await ```this.page.goto('https://the-internet.herokuapp.com');``` to ```this.page.goto(process.env.BASE_URL);```

and create an ```.env``` file in the root level with:
```BASE_URL="https://the-internet.herokuapp.com"```
