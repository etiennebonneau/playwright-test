# QA end to end test automation framework

Automated test suite for the OrangeHRM login page, built with Playwright and Playwright-BDD.

## Installation

### Prerequisites

- **Node.js**
  - download the LTS version: https://nodejs.org/en/download/
  - check with `node --version` (should return a version)

### Setup

- **Clone the repository**
  - run `git clone https://github.com/etiennebonneau/playwright-test.git`

- **Install dependencies**
  - run `npm install`

- **Playwright**
  - run `npx playwright install`

## Run the tests

### Run all tests

```bash
npx bddgen && npx playwright test
```

### Run by tag

```bash
npx bddgen --tags "@validCredentials" && npx playwright test
npx bddgen --tags "@invalidCredentials" && npx playwright test
```

## Tech Choices

### Project Structure

```
tests/
├── features/        # Gherkin scenarios (.feature)
├── pages/           # Page Object Model (LoginPage, DashboardPage)
└── steps/           # Step definitions (Given/When/Then)
```

### Tooling

- **Playwright** — browser automation with built-in assertions
- **playwright-bdd** — bridges Gherkin scenarios with Playwright
- **TypeScript** — type safety across page objects and step definitions
- **Page Object Model** — each page encapsulated in a dedicated class, selectors centralized
- **Scenario Outline** — covers multiple invalid credential combinations without duplicating steps
- **Background** — avoids repeating the navigation step in every scenario
- **Tags** — use tags to run specific scenarios

## Future improvements

### Tech stack

- **npm scripts** — add dedicated scripts in `package.json` for common commands
- **User data management** — centralize credentials in something like `data/users.ts` to avoid hardcoded values in feature files
- **Environment variables** — `.env` files per environment for `BASE_URL` and credentials
- **CI reporters** — add reporters for both local and CI environments
- **Artifacts on failure** — screenshots, videos and Playwright traces for easier debugging
- **Before/After hooks** — API-level login to speed up test execution
- **tsconfig.json** — add a TypeScript configuration file for IDE type checking and CI type validation

### Tests feature coverage

- **login feature** — more edge cases could be tested, also depending on the specifications and dev implementation
