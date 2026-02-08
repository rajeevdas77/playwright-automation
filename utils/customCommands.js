class CustomCommands {

  async typeText(page, locator, value) {
    await page.fill(locator, value);
  }

  async clickElement(page, locator) {
    await page.click(locator);
  }

  async waitForVisible(page, locator) {
    await page.waitForSelector(locator, { state: 'visible' });
  }
}


module.exports = { CustomCommands };
