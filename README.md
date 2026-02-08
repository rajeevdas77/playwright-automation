## 📌 Playwright Automation Framework (<Project name>)

This repository contains a **real-world Playwright automation framework** with:

* Page Object Model (POM)
* Separate locator files
* Custom commands (utilities)
* Fixtures
* Data-driven testing
* Allure reporting
* Multi-browser execution (Chrome & Firefox)
* API + UI combined testing
* CI/CD integration (GitHub Actions)

---

# 🧩 Project Structure

```
playwright-orangehrm/
│
├── playwright.config.js
├── package.json
├── README.md
│
├── config/
│   └── env.js                 # URL & credentials config
│
├── test-data/
│   └── loginData.json          # Data-driven test data
│
├── tests/
│   ├── login.spec.js            # UI login test
│   ├── api-ui-login.spec.js     # API + UI test
│
├── pages/
│   └── login.page.js             # POM actions
│
├── locators/
│   └── login.locators.js          # All UI locators
│
├── fixtures/
│   └── baseFixture.js              # Custom fixtures
│
├── utils/
│   ├── customCommands.js            # Reusable UI actions
│   └── apiHelper.js                  # API helper methods
│
├── allure-results/
├── test-results/
└── .github/workflows/playwright.yml # CI/CD pipeline
```

---

# 🛠️ Prerequisites

* Node.js (v16+ recommended)
* VS Code
* Git

Check Node version:

```bash
node -v
```

---

# 📥 Installation

Clone the project:

```bash
git clone <repo-url>
cd playwright-orangehrm
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# 🌐 Application Under Test

**URL:** [https://opensource-demo.orangehrmlive.com/web/index.php/auth/login]
**Username:** Admin
**Password:** admin123

---

# ⚙️ Environment Configuration

File: `config/env.js`

```js
module.exports = {
  url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  credentials: {
    username: "Admin",
    password: "admin123"
  }
};
```

---

# ▶️ Run Tests

## Run all tests

```bash
npx playwright test
```

## Run Chrome only

```bash
npx playwright test --project=Chrome
```

## Run Firefox only

```bash
npx playwright test --project=Firefox
```

## Run tests in headed mode (Browser visible)

```bash
npx playwright test --headed
```

## Run tests in headless mode (Default – Browser hidden)

```bash
npx playwright test --headless
```

## Run a specific test file

```bash
npx playwright test tests/login.spec.js
```

---

# 📊 Allure Report

Install Allure:

```bash
npm install -D allure-playwright allure-commandline
```

Run tests and generate report:

```bash
npx playwright test
npx allure generate ./allure-results --clean
npx allure open
```

---

# 📚 Data-Driven Testing

File: `test-data/loginData.json`

```json
{
  "validUser": {
  },
  "invalidUser": {
  }
}
```

---

# 🔗 API + UI Automation

API login helper is located in:

```bash
utils/apiHelper.js
```

This allows bypassing UI login to speed up tests.

---

# 🌍 Multi-Browser Configuration

Configured in `playwright.config.js`:

```js
projects: [
  {
    name: 'Chrome',
    use: { channel: 'chrome' }
  },
  {
    name: 'Firefox',
    use: { browserName: 'firefox' }
  }
]
```

---

# 🚀 CI/CD Integration (GitHub Actions)

Workflow file:

```
.github/workflows/playwright.yml
```

Runs tests automatically on push and pull requests.

---

# 🧠 Framework Highlights

* Clean POM architecture
* Centralized locators
* Reusable custom commands
* Fixtures for dependency injection
* Data-driven testing support
* API + UI hybrid automation
* Allure professional reporting
* Multi-browser execution
* CI/CD ready

---

# 👨‍💻 Author

**Rajee (QA Automation Engineer)**

---

# 🧾 Git Information & Commands

## Initialize Git Repository

```bash
git init
```

## Add files to Git

```bash
git add .
```

## Commit changes

```bash
git commit -m "Initial Playwright automation framework"
```

## Add remote repository

```bash
git remote add origin https://github.com/<your-username>/playwright-orangehrm.git
```

## Push code to GitHub

```bash
git branch -M main
git push -u origin main
```

---

# 📌 Notes

* This framework is scalable for enterprise projects.
* Can be extended for multiple environments (QA/UAT/PROD).
* Supports parallel execution and CI pipelines.

---

Happy Testing 🚀
