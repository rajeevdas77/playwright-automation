// const { test, expect } = require("@playwright/test");
const { ApiHelper } = require("../utils/apiHelper");
// const env = require("../config/env");

// test("Login using API + UI", async ({ page, request }) => {

//     const api = new ApiHelper();
//     const response = await api.loginAPI(request);

//     expect(response.ok()).toBeTruthy();

//     // Open app after API login
//       await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
//     // await page.goto(env.url);

//     await expect(page.locator("h6")).toHaveText("Dashboard");
// });


const { test, expect } = require("@playwright/test");
const env = require("../config/env");

test("Login using API validation + UI login", async ({ page, request }) => {

  // STEP 1: API validation (Backend check)
  const response = await request.post(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate",
    {
      form: {
        username: "Admin",
        password: "admin123"
      }
    }
  );

  expect(response.ok()).toBeTruthy();

  // STEP 2: UI Login (Browser session)
  await page.goto(env.url);

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  // STEP 3: Assertion (Correct locator)
  await expect(
    page.getByRole('heading', { name: 'Dashboard' })
  ).toBeVisible();
});

// test("API | Login with empty credentials", async ({ request }) => {

//   const api = new ApiHelper();

//   const response = await api.login(request, "", "");

//   expect(response.status()).toBe(200);

//   const body = await response.text();
//   expect(body).toContain("Required");
// });

