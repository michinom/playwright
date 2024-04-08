# Penny E2E tests

These E2E tests written in Playwright. After cloning the repo, please run the following command to install Playwright:

```npm i --save-dev @playwright/test```

- To run ALL of the tests headless:

```npx playwright test```

- To run ALL of the tests using the Playwright UI to view the trace:

```npx playwright test --ui```

- Environment variables can be used. Currently the Base URL is an environment variable, pointing at a testing website:

```BASE_URL="https://the-internet.herokuapp.com"```