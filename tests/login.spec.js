const { test, expect } = require("../fixtures/baseFixture");
const env = require("../config/env");
const loginData = require("../test-data/loginData.json")

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
test("Valid login using data-driven approach", async ({ page, loginPage }) => {

  await page.goto(env.url);

  await loginPage.login(
    loginData.invalidUser.username,
    loginData.invalidUser.password
  );


});
