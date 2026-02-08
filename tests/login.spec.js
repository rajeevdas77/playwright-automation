const { test, expect } = require("../fixtures/baseFixture");
const env = require("../config/env");

test("Verify user can login with valid credentials", async ({ page, loginPage }) => {

  // Step 1: Open URL
  await page.goto(env.url);

  // Step 2: Login
  await loginPage.login(
    env.credentials.username,
    env.credentials.password
  );

  // Step 3: Verify Dashboard
  await loginPage.verifyDashboard();

  // Assertion (extra safety)
  await expect(page).toHaveURL(/dashboard/);
});
