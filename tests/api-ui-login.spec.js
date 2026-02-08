const { test, expect } = require("@playwright/test");
const { ApiHelper } = require("../utils/apiHelper");
const env = require("../config/env");

test("Login using API + UI", async ({ page, request }) => {

    const api = new ApiHelper();
    const response = await api.loginAPI(request);

    expect(response.ok()).toBeTruthy();

    // Open app after API login
    //   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await page.goto(env.url);

    await expect(page.locator("h6")).toHaveText("Dashboard");
});
