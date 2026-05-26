// Page Object Model for Sauce Demo Login Page
export class SauceDemoLoginPage {
  constructor(page) {
    this.page = page;
    
    // Page Elements
    this.usernameField = page.locator('[data-test="username"]');
    this.passwordField = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.loginCredentialsText = page.locator('[data-test="login-credentials"]');
    this.pageTitle = page.locator('[data-test="title"]');
    this.acceptedUsernamesText = page.locator('div').filter({ hasText: 'Accepted usernames are:' }).nth(4);
  }

  // Navigate to Sauce Demo
  async navigateToSauceDemo() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Enter username
  async enterUsername(username) {
    await this.usernameField.click();
    await this.usernameField.fill(username);
  }

  // Enter password
  async enterPassword(password) {
    await this.passwordField.click();
    await this.passwordField.fill(password);
  }

  // Click login button
  async clickLoginButton() {
    await this.loginButton.click();
  }

  // Get login credentials text
  async getLoginCredentials() {
    await this.acceptedUsernamesText.click();
    await this.loginCredentialsText.dblclick();
    await this.loginCredentialsText.click();
  }

  // Verify page title is visible
  async verifyPageTitleVisible() {
    await this.pageTitle.isVisible();
  }

  // Complete login flow
  async performLogin(username, password) {
    await this.navigateToSauceDemo();
    await this.getLoginCredentials();
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }
}
