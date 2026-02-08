const { LoginLocators } = require("../locators/login.locators");
const { CustomCommands } = require("../utils/customCommands");

class LoginPage {

  constructor(page) {
    this.page = page;
    this.locators = new LoginLocators();
    this.commands = new CustomCommands();
  }

  async login(username, password) {
    await this.commands.typeText(this.page, this.locators.usernameInput, username);
    await this.commands.typeText(this.page, this.locators.passwordInput, password);
    await this.commands.clickElement(this.page, this.locators.loginButton);
  }
  

  async verifyDashboard() {
    await this.commands.waitForVisible(this.page, this.locators.dashboardText);
  }
}

module.exports = { LoginPage };
